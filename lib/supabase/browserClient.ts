'use client';

// Browser-side Supabase client for MSMK staff authentication
// (supabase.auth.signInWithPassword) — mirrors how the sibling
// Shwe-Pinya-Nandaw site's admin.html does staff auth directly in the
// browser with the anon key. This is safe to expose client-side: the
// anon key only grants what RLS allows, and every MSMK table besides
// registrations (insert-only) requires an authenticated Supabase session
// to read or write anything — so the real security boundary is RLS on
// the database, not this page's client-side auth check.
//
// Deliberately NOT used for the learner-facing access-code login (that
// uses its own signed cookie system in lib/msmk/session.ts) — staff
// accounts are real Supabase Auth users, created via Supabase dashboard
// → Authentication → Users, same as the sibling site.

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase-msmk';
import { SUPABASE_ANON_KEY, SUPABASE_URL, supabasePublicConfigured } from './env';

let cached: SupabaseClient<Database> | null = null;

export function getSupabaseBrowserClient() {
  if (!supabasePublicConfigured) return null;
  if (!cached) cached = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
  return cached;
}
