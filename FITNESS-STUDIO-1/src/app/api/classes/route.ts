import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase
    .from('classes')
    .select('id, name, description, difficulty, start_time, end_time');

  if (error) {
    console.error('Error fetching classes from Supabase:', error);
    return NextResponse.json({ error: 'Failed to fetch classes' }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}



