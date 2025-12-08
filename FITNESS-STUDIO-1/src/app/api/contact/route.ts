import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const full_name = body?.name?.toString().trim();
  const email = body?.email?.toString().trim();
  const subject = body?.subject?.toString().trim();
  const message = body?.message?.toString().trim();

  if (!full_name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const { error } = await supabase.from('contact_messages').insert({
    full_name,
    email,
    subject,
    message,
  });

  if (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}

// Simple endpoint to verify messages are stored correctly (for debugging).
// You may want to protect or remove this in production.
export async function GET() {
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

  return NextResponse.json(data ?? []);
}



