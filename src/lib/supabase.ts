import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && (supabaseAnonKey || supabaseServiceKey));
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey || supabaseServiceKey)
  : null;

export const supabaseAdmin = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)
  : null;
