import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * Server-side environment variable validation
 * Only runs on the server to check for service role key
 */
function validateServerEnvVars(): string | null {
    if (typeof window !== 'undefined') {
        // Skip validation on client-side
        return null
    }

    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!serviceRoleKey || serviceRoleKey === 'your-service-role-key-here') {
        console.warn(
            '⚠️  SUPABASE_SERVICE_ROLE_KEY is not set or is a placeholder. ' +
            'Server-side operations that require elevated privileges will not work. ' +
            'Get this from: Supabase Dashboard > Project Settings > API > service_role key'
        )
        return null
    }

    return serviceRoleKey
}

/**
 * Client-side Supabase client
 * Uses the anonymous key - safe to use in browser
 * Respects Row Level Security (RLS) policies
 * 
 * Resilient to missing env vars at build time (e.g. Netlify build)
 */
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : new Proxy({} as any, {
        get: (target, prop) => {
            if (prop === 'then') return undefined; // Avoid Promise-like behavior checks
            throw new Error(
                'Supabase client accessed but environment variables are missing. ' +
                'Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
            )
        }
    }) as ReturnType<typeof createClient<Database>>

/**
 * Server-side Supabase client factory
 * Uses service role key to bypass RLS when needed
 * 
 * ⚠️ IMPORTANT: Only use this in server-side code:
 * - API routes (app/api/*)
 * - Server components
 * - Server actions
 * 
 * NEVER export or use this in client components!
 * 
 * @returns Supabase client with admin privileges (or anon client if service key not available)
 */
export function getServerSupabaseClient() {
    // This function should only be called server-side
    if (typeof window !== 'undefined') {
        throw new Error(
            'getServerSupabaseClient() can only be used server-side. ' +
            'Use the regular supabase client for client-side operations.'
        )
    }

    // Runtime check for required vars
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase client failed to initialize: Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
    }

    const serviceRoleKey = validateServerEnvVars()

    // If service role key is available, use it for admin operations
    if (serviceRoleKey) {
        return createClient<Database>(
            supabaseUrl,
            serviceRoleKey,
            {
                auth: {
                    autoRefreshToken: false,
                    persistSession: false,
                },
            }
        )
    }

    // Fallback to anon client with server configuration
    // This will still respect RLS policies
    console.warn('Using anon client for server operations - limited privileges')
    return createClient<Database>(
        supabaseUrl,
        supabaseAnonKey,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        }
    )
}

/**
 * Type-safe getter for public environment variables
 * Safe to use on client or server
 */
export const getPublicEnv = () => ({
    supabaseUrl: supabaseUrl || '',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
})
