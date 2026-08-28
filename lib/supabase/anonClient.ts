// Anon-key client — safe to use from Server Actions (its key only grants
// what RLS allows the `anon` role: insert-only on msmk_registrations, per
// supabase-schema-msmk.sql). Never import this into a `'use client'` file;
// registration submission goes through a Server Action so the key doesn't
// need to reach browser JS at all.

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase-msmk';
import { SUPABASE_ANON_KEY, SUPABASE_URL, supabasePublicConfigured } from './env';

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseAnonClient() {
  if (!supabasePublicConfigured) return null;
  if (!cached) cached = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cached;
}
