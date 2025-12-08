/**
 * Environment Configuration
 * Centralized access to all environment variables with fallbacks
 */

// Supabase
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Contact Information
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_PHONE || '+1 (555) 123-4567';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'hello@zokufitness.com';
export const CONTACT_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || '123 Fitness Blvd, Metro City, ST 12345';

// Site Configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zokufitness.com';

// Calendly
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/zoku-fitness';

/**
 * Type-safe environment configuration object
 */
export const env = {
    supabase: {
        url: SUPABASE_URL,
        anonKey: SUPABASE_ANON_KEY,
    },
    contact: {
        phone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        address: CONTACT_ADDRESS,
    },
    site: {
        url: SITE_URL,
    },
    calendly: {
        url: CALENDLY_URL,
    },
    stripe: {
        secretKey: process.env.STRIPE_SECRET_KEY || '',
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
    },
} as const;
