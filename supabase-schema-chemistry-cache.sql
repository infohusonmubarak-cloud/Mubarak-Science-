-- Chemistry lookup cache — so /api/chemistry doesn't hit the PubChem PUG
-- REST API on every repeated search for the same compound.
--
-- Same pattern as supabase-schema-qa-helper.sql's qa_rate_limits: no RLS
-- grants to anon or authenticated at all. This table is only ever read or
-- written by the /api/chemistry Route Handler using the service-role key,
-- which bypasses RLS/grants entirely — RLS is enabled anyway as
-- defense-in-depth even though nothing is granted access to it via
-- PostgREST.

create table if not exists public.chemistry_cache (
  -- Normalized (lowercased, trimmed) compound name or formula as searched,
  -- e.g. 'aspirin' or 'c9h8o4' — not the CID, since a learner searches by
  -- name/formula, not by PubChem's internal ID.
  query_key text primary key,
  cid integer,
  -- The full assembled lookup result (properties, structure image URL,
  -- safety statements) as returned to the client — cached as one JSON blob
  -- rather than normalized into columns, since it's write-once/read-many
  -- and never queried by its internal fields.
  data jsonb not null,
  fetched_at timestamptz not null default now()
);

alter table public.chemistry_cache enable row level security;
-- (No policies — nobody gets access via PostgREST, only the service-role
-- key used server-side in the Route Handler.)
