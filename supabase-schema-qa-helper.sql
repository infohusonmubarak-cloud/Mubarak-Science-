-- Ask-a-Question homework helper — server-side rate limiting only.
--
-- Question history itself lives in the learner's own browser
-- (localStorage, same as progress/bookmarks/notes elsewhere on this site
-- today — see CLAUDE.md) since there's no public learner sign-in yet.
-- This table exists purely so the /api/ask Route Handler can enforce a
-- daily cap per visitor server-side — something that MUST live in the
-- database, since a client-only counter is trivially bypassed by clearing
-- localStorage or opening a private window.
--
-- No RLS grants to anon or authenticated at all — this table is never
-- read or written except by the Route Handler using the service-role key
-- (which bypasses RLS/grants entirely). RLS is still enabled as
-- defense-in-depth even though nothing is granted access to it.

create table if not exists public.qa_rate_limits (
  -- e.g. '203.0.113.5:2026-09-01' — the requester's IP plus the UTC date,
  -- so the counter naturally resets at midnight UTC with no cron job.
  rate_limit_key text primary key,
  request_count integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.qa_rate_limits enable row level security;
-- (No policies — nobody gets access via PostgREST. Only the function
-- below, running security definer, can touch this table.)

-- Atomic increment-and-read, so concurrent requests from the same visitor
-- can't race past the limit (a plain "read count, check, write count+1"
-- from application code has exactly that race).
create or replace function public.increment_qa_rate_limit(key text)
returns integer
language sql
security definer
set search_path = public
as $$
  insert into public.qa_rate_limits (rate_limit_key, request_count, updated_at)
  values (key, 1, now())
  on conflict (rate_limit_key)
  do update set request_count = qa_rate_limits.request_count + 1, updated_at = now()
  returning request_count;
$$;

-- Callable only with the service-role key — the Route Handler never uses
-- the anon key for this, and no grant is given to anon/authenticated.
grant execute on function public.increment_qa_rate_limit(text) to service_role;
