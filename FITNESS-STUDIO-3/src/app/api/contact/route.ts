import { NextResponse } from 'next/server';
import { getServerSupabaseClient } from '@/lib/supabase';

/**
 * POST /api/contact
 * Handles contact form submissions with validation and stores them in Supabase
 */
export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json(
                { error: 'Invalid request body' },
                { status: 400 }
            );
        }

        // Extract and sanitize form data
        const full_name = body?.name?.toString().trim();
        const email = body?.email?.toString().trim();
        const subject = body?.subject?.toString().trim();
        const message = body?.message?.toString().trim();

        // Validate required fields
        if (!full_name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields. Please fill in all fields.' },
                { status: 400 }
            );
        }

        // Validate name length
        if (full_name.length < 2 || full_name.length > 100) {
            return NextResponse.json(
                { error: 'Name must be between 2 and 100 characters' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email) || email.length > 255) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Validate subject
        const validSubjects = ['General Inquiry', 'Membership', 'Personal Training', 'Careers'];
        if (!validSubjects.includes(subject)) {
            return NextResponse.json(
                { error: 'Invalid subject selected' },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.length < 10 || message.length > 1000) {
            return NextResponse.json(
                { error: 'Message must be between 10 and 1000 characters' },
                { status: 400 }
            );
        }

        // Insert validated data into Supabase
        const supabase = getServerSupabaseClient();
        const { data, error } = await supabase
            .from('contact_messages')
            .insert({
                full_name,
                email,
                subject,
                message,
            })
            .select()
            .single();

        if (error) {
            console.error('Supabase error saving contact message:', error);
            return NextResponse.json(
                { error: 'Failed to save your message. Please try again later.' },
                { status: 500 }
            );
        }

        // Success response
        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent successfully!',
                id: data.id,
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Unexpected error in contact API:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}

/**
 * GET /api/contact
 * Retrieves recent contact messages (for debugging/admin purposes)
 * Note: In production, this should be protected with authentication
 */
export async function GET() {
    try {
        const supabase = getServerSupabaseClient();
        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);

        if (error) {
            console.error('Error fetching contact messages:', error);
            return NextResponse.json(
                { error: 'Failed to fetch messages' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { messages: data },
            { status: 200 }
        );

    } catch (error) {
        console.error('Unexpected error in GET contact API:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}