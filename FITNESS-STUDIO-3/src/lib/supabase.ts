import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

/**
 * Environment variable validation
 * Ensures required Supabase credentials are present at build/runtime
 */
function validateEnvVars() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !anonKey) {
        const missingVars: string[] = []
        if (!url) missingVars.push('NEXT_PUBLIC_SUPABASE_URL')
        if (!anonKey) missingVars.push('NEXT_PUBLIC_SUPABASE_ANON_KEY')

        console.warn(
            `Supabase configuration missing: ${missingVars.join(', ')}. ` +
            `Set these in .env.local to enable Supabase features.`
        )
        return { url: '', anonKey: '' }
    }

    return { url, anonKey }
}

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

// Validate and get client-side environment variables
const { url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY } = validateEnvVars()

/**
 * Client-side Supabase client
 * Uses the anonymous key - safe to use in browser
 * Respects Row Level Security (RLS) policies
 */
export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY)
    ? createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)
    : (new Proxy({}, {
        get() {
            throw new Error(
                'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.'
            )
        }
    }) as unknown as ReturnType<typeof createClient<Database>>)

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

    const serviceRoleKey = validateServerEnvVars()

    // If service role key is available, use it for admin operations
    if (serviceRoleKey) {
        return createClient<Database>(
            SUPABASE_URL,
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
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
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
    supabaseUrl: SUPABASE_URL,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
})
