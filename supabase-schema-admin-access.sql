-- Admin access control — shared by MSMK and the main Mubarak Science site.
--
-- Run this BEFORE (or alongside) supabase-schema-msmk.sql and
-- supabase-schema-main-site.sql — both of those reference the
-- `is_current_user_admin()` function defined here.
--
-- The problem this fixes: every "staff" RLS policy in this project used to
-- read `to authenticated using (true)` — meaning ANY Supabase Auth account
-- that could sign in (any email/password created in Authentication → Users)
-- got full staff access, not just people you meant to be admins. This file
-- adds a real allowlist: a Postgres table of admin emails, plus a function
-- that checks the signed-in user's email against it. Every staff-only
-- policy elsewhere now calls that function instead of just checking
-- "are you logged in at all."

create table if not exists public.admins (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  added_at timestamptz not null default now()
);

create index if not exists admins_email_idx on public.admins (lower(email));

-- security definer: runs with the table owner's privileges, so it can read
-- `admins` even though the RLS policies below would otherwise block a
-- non-admin from reading the row that proves they're not an admin. This is
-- the one deliberate bypass in this whole schema, and it only ever returns
-- a boolean — it can't leak any row data.
--
-- Defined here, right after the table and before any policy that calls it
-- — Postgres resolves a policy's expression at CREATE POLICY time, so a
-- policy referencing this function has to come after this definition, not
-- before it.
create or replace function public.is_current_user_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.admins
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

grant execute on function public.is_current_user_admin() to authenticated, anon;

alter table public.admins enable row level security;

-- Only existing admins can see or manage the admin list itself.
drop policy if exists "admins can view the admin list" on public.admins;
create policy "admins can view the admin list"
  on public.admins for select
  to authenticated
  using (public.is_current_user_admin());

drop policy if exists "admins can manage the admin list" on public.admins;
create policy "admins can manage the admin list"
  on public.admins for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

grant select, insert, update, delete on public.admins to authenticated;

-- Seed your own account here once you know its email (see the setup
-- instructions), e.g.:
--   insert into public.admins (email, full_name) values ('you@example.com', 'Your Name');
-- Nobody has admin access until at least one row exists in this table.
