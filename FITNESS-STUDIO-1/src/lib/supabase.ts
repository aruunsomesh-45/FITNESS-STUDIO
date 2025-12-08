import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

// TODO: Move these to .env.local
const supabaseUrl = "https://whwkktrecqssjfdvuicz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod2trdHJlY3Fzc2pmZHZ1aWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NjkyNTMsImV4cCI6MjA4MDE0NTI1M30.uld1dwigRAiHbG49bunLjAHJC8lnqk-WIblqsuLvdGI"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
