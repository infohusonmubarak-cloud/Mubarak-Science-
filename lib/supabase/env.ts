// Central place that reads MSMK's Supabase env vars. Mirrors the main
// app's "degrade gracefully if unconfigured" habit (see
// `notConnectedMessage()` on the sibling Shwe-Pinya-Nandaw site) rather
// than throwing at import time — so the rest of the site keeps working
// even before these are set in Vercel.

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
export const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

export const supabasePublicConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
export const supabaseServiceConfigured = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
