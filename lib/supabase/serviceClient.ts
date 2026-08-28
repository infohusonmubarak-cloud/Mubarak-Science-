// Service-role client — bypasses RLS entirely. ONLY import this from a
// Route Handler or Server Action running on the Node runtime, never from a
// `'use client'` file and never from anything that could end up in a
// browser bundle. `SUPABASE_SERVICE_ROLE_KEY` deliberately has no
// `NEXT_PUBLIC_` prefix so Next.js strips it from client bundles by
// default — keep it that way.
//
// This is what powers MSMK access-code + email login and per-learner
// progress/assessment reads and writes: those three tables grant nothing
// to `anon`, so every learner-facing request for them is validated here,
// server-side, against the session cookie set at login.

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase-msmk';
import { SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL, supabaseServiceConfigured } from './env';

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseServiceClient() {
  if (!supabaseServiceConfigured) return null;
  if (!cached) {
    cached = createClient<Database>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });
  }
  return cached;
}
