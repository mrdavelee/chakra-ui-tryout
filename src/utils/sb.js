import { createClient } from '@supabase/supabase-js'

// Set variables for your Supabase connection. Replace supabaseUrl with the
// API address for your instance, and replace supabaseAnonKey with the anon
// key for your instance.
const supabaseUrl = "https://wkuqioheblmrlaptemrx.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdXFpb2hlYmxtcmxhcHRlbXJ4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDA2NzUzNiwiZXhwIjoyMDI1NjQzNTM2fQ.h2rlDRCtSA-mqYCcUCcDWR6FwVR88O3qFp13Uv5KBzw';

// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrdXFpb2hlYmxtcmxhcHRlbXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwNjc1MzYsImV4cCI6MjAyNTY0MzUzNn0.4Bs686KAc7ii-gZcdI80yV019PP7cNZbZvAyZ1tpwHw'



// Create the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseKey)