-- Mubarak Science — main site backend (Mathematics/Physics/Chemistry/Biology).
--
-- Separate from supabase-schema-msmk.sql (the paid MSMK course), but can
-- live in the SAME Supabase project — table names here have no `msmk_`
-- prefix so there's no collision. Run supabase-schema-admin-access.sql
-- FIRST — every admin-only policy below calls the
-- public.is_current_user_admin() function it defines.
--
-- What this replaces: today, all course content (subjects → levels →
-- chapters → topics → sections) lives as hand-written TypeScript files in
-- content/subjects/, and everything about a learner (progress, bookmarks,
-- quiz scores) lives in that one visitor's browser localStorage — there is
-- no server, no accounts, and no way for you to see how anyone is doing.
-- This schema moves content into the database (so it's editable from
-- /admin without a code deploy) and adds real accounts so progress persists
-- across devices and you can see it.
--
-- Content hierarchy mirrors types/content.ts exactly:
--   subjects → levels (A-Level/B-Level/C-Level) → chapters → topics → sections
-- "sections" here is what the app's TypeScript types call a "Concept" —
-- named "sections" to match how you described it; same thing.
--
-- Access model:
--   subjects/levels/chapters/topics/sections   anon+authenticated: read published only     admin: full CRUD
--   learners                                   self: read/update own row                   admin: full
--   progress / bookmarks                       self: read/write own rows                   admin: read all
--   assessment_attempts                        self: insert/read own rows                  admin: read all
--   feedback                                   anon+authenticated: insert only              admin: full (read/resolve/delete)

create extension if not exists pgcrypto;

-- 1. Content: subjects -----------------------------------------------------

create table if not exists public.subjects (
  slug text primary key,
  name text not null,
  short_description text not null,
  icon_key text not null default '',
  accent_color text not null default '#2563eb',
  status text not null default 'coming-soon' check (status in ('available', 'coming-soon')),
  order_index integer not null default 0
);

alter table public.subjects enable row level security;

create policy "anyone can read available subjects"
  on public.subjects for select
  to anon, authenticated
  using (status = 'available' or public.is_current_user_admin());

create policy "admins can manage subjects"
  on public.subjects for insert
  to authenticated
  with check (public.is_current_user_admin());

create policy "admins can update subjects"
  on public.subjects for update
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

create policy "admins can delete subjects"
  on public.subjects for delete
  to authenticated
  using (public.is_current_user_admin());

grant select on public.subjects to anon;
grant select, insert, update, delete on public.subjects to authenticated;

-- 2. Content: levels ---------------------------------------------------

create table if not exists public.levels (
  id uuid primary key default gen_random_uuid(),
  subject_slug text not null references public.subjects(slug) on delete cascade,
  slug text not null,
  name text not null,
  description text not null default '',
  status text not null default 'coming-soon' check (status in ('available', 'coming-soon')),
  order_index integer not null default 0,
  unique (subject_slug, slug)
);

alter table public.levels enable row level security;

create policy "anyone can read available levels"
  on public.levels for select
  to anon, authenticated
  using (status = 'available' or public.is_current_user_admin());

create policy "admins can manage levels"
  on public.levels for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

grant select on public.levels to anon;
grant select, insert, update, delete on public.levels to authenticated;

-- 3. Content: chapters ---------------------------------------------------

create table if not exists public.chapters (
  id uuid primary key default gen_random_uuid(),
  level_id uuid not null references public.levels(id) on delete cascade,
  slug text not null unique,
  number integer not null,
  title text not null,
  blurb text not null default '',
  status text not null default 'coming-soon' check (status in ('available', 'coming-soon')),
  order_index integer not null default 0
);

create index if not exists chapters_level_id_idx on public.chapters (level_id);

alter table public.chapters enable row level security;

create policy "anyone can read available chapters"
  on public.chapters for select
  to anon, authenticated
  using (status = 'available' or public.is_current_user_admin());

create policy "admins can manage chapters"
  on public.chapters for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

grant select on public.chapters to anon;
grant select, insert, update, delete on public.chapters to authenticated;

-- 4. Content: topics (light grouping within a chapter) --------------------

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  slug text not null,
  title text not null,
  order_index integer not null default 0,
  unique (chapter_id, slug)
);

create index if not exists topics_chapter_id_idx on public.topics (chapter_id);

alter table public.topics enable row level security;

create policy "anyone can read topics of available chapters"
  on public.topics for select
  to anon, authenticated
  using (
    public.is_current_user_admin()
    or exists (select 1 from public.chapters c where c.id = chapter_id and c.status = 'available')
  );

create policy "admins can manage topics"
  on public.topics for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

grant select on public.topics to anon;
grant select, insert, update, delete on public.topics to authenticated;

-- 5. Content: sections (= "Concept" in types/content.ts) -------------------
-- `content` holds the full pedagogical body as JSON — simpleExplanation,
-- whyItMatters, diagram, formulaSlug, workedExample, realLifeExample,
-- practiceQuestions, commonMistake, quickReview, relatedConcepts — matching
-- the `Concept` TypeScript interface field-for-field, so the API layer can
-- pass it straight through to the same page components that already
-- render Concept objects today.

create table if not exists public.sections (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  slug text not null unique,
  title text not null,
  difficulty text check (difficulty in ('easy', 'medium', 'hard')),
  content jsonb not null default '{}'::jsonb,
  status text not null default 'coming-soon' check (status in ('available', 'coming-soon')),
  order_index integer not null default 0
);

create index if not exists sections_topic_id_idx on public.sections (topic_id);

alter table public.sections enable row level security;

create policy "anyone can read available sections"
  on public.sections for select
  to anon, authenticated
  using (status = 'available' or public.is_current_user_admin());

create policy "admins can manage sections"
  on public.sections for all
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

grant select on public.sections to anon;
grant select, insert, update, delete on public.sections to authenticated;

-- 6. Learners (real accounts, on top of Supabase Auth) ---------------------
-- One row per signed-up learner, linked 1:1 to a Supabase Auth user. The
-- learner signs up/logs in with Supabase Auth (email+password or magic
-- link) the same mechanism staff already use for /msmk/admin — the only
-- difference is a learner is NOT in the `admins` table.

create table if not exists public.learners (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text not null default '',
  created_at timestamptz not null default now()
);

alter table public.learners enable row level security;

create policy "a learner can read their own row"
  on public.learners for select
  to authenticated
  using (id = auth.uid() or public.is_current_user_admin());

create policy "a learner can create their own row"
  on public.learners for insert
  to authenticated
  with check (id = auth.uid());

create policy "a learner can update their own row"
  on public.learners for update
  to authenticated
  using (id = auth.uid() or public.is_current_user_admin())
  with check (id = auth.uid() or public.is_current_user_admin());

create policy "admins can delete learners"
  on public.learners for delete
  to authenticated
  using (public.is_current_user_admin());

grant select, insert, update, delete on public.learners to authenticated;

-- 7. Progress: which sections a learner has read ---------------------------

create table if not exists public.progress (
  learner_id uuid not null references public.learners(id) on delete cascade,
  section_id uuid not null references public.sections(id) on delete cascade,
  completed_at timestamptz not null default now(),
  primary key (learner_id, section_id)
);

create index if not exists progress_learner_id_idx on public.progress (learner_id);

alter table public.progress enable row level security;

create policy "a learner can manage their own progress"
  on public.progress for all
  to authenticated
  using (learner_id = auth.uid())
  with check (learner_id = auth.uid());

create policy "admins can read all progress"
  on public.progress for select
  to authenticated
  using (public.is_current_user_admin());

grant select, insert, update, delete on public.progress to authenticated;

-- 8. Bookmarks / saved sections ---------------------------------------------

create table if not exists public.bookmarks (
  learner_id uuid not null references public.learners(id) on delete cascade,
  section_id uuid not null references public.sections(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (learner_id, section_id)
);

alter table public.bookmarks enable row level security;

create policy "a learner can manage their own bookmarks"
  on public.bookmarks for all
  to authenticated
  using (learner_id = auth.uid())
  with check (learner_id = auth.uid());

grant select, insert, update, delete on public.bookmarks to authenticated;

-- 9. Assessment attempts (chapter quiz results) -----------------------------

create table if not exists public.assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  learner_id uuid not null references public.learners(id) on delete cascade,
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  score integer not null,
  total integer not null,
  percent integer not null,
  -- [{ question_id, selected_option_id | numeric_answer, correct }] — lets
  -- the admin panel compute "which questions people get wrong most" without
  -- a separate answers table.
  answers jsonb not null default '[]'::jsonb,
  attempted_at timestamptz not null default now()
);

create index if not exists assessment_attempts_learner_id_idx on public.assessment_attempts (learner_id);
create index if not exists assessment_attempts_chapter_id_idx on public.assessment_attempts (chapter_id);

alter table public.assessment_attempts enable row level security;

create policy "a learner can record their own attempts"
  on public.assessment_attempts for insert
  to authenticated
  with check (learner_id = auth.uid());

create policy "a learner can read their own attempts"
  on public.assessment_attempts for select
  to authenticated
  using (learner_id = auth.uid() or public.is_current_user_admin());

grant select, insert on public.assessment_attempts to authenticated;

-- 10. Feedback / corrections -------------------------------------------------
-- Anyone (signed in or not) can report an error in a section or chapter —
-- deliberately open, same spirit as the sibling site's public-insert forms.

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  section_id uuid references public.sections(id) on delete set null,
  chapter_id uuid references public.chapters(id) on delete set null,
  learner_id uuid references public.learners(id) on delete set null,
  name text,
  email text,
  message text not null,
  status text not null default 'open' check (status in ('open', 'resolved')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists feedback_status_idx on public.feedback (status);

alter table public.feedback enable row level security;

create policy "anyone can submit feedback"
  on public.feedback for insert
  to anon, authenticated
  with check (true);

create policy "admins can read feedback"
  on public.feedback for select
  to authenticated
  using (public.is_current_user_admin());

create policy "admins can update feedback"
  on public.feedback for update
  to authenticated
  using (public.is_current_user_admin())
  with check (public.is_current_user_admin());

create policy "admins can delete feedback"
  on public.feedback for delete
  to authenticated
  using (public.is_current_user_admin());

grant insert on public.feedback to anon;
grant select, insert, update, delete on public.feedback to authenticated;

-- 11. Convenience views for the admin analytics panel -----------------------

create view public.chapter_completion_stats
with (security_invoker = true) as
select
  c.id as chapter_id,
  c.slug as chapter_slug,
  c.title as chapter_title,
  count(distinct p.learner_id) as learners_with_progress,
  count(p.section_id) as sections_completed
from public.chapters c
left join public.sections s on s.topic_id in (select id from public.topics where chapter_id = c.id)
left join public.progress p on p.section_id = s.id
group by c.id, c.slug, c.title;

grant select on public.chapter_completion_stats to authenticated;

create view public.question_wrong_answer_stats
with (security_invoker = true) as
select
  chapter_id,
  answer ->> 'question_id' as question_id,
  count(*) filter (where (answer ->> 'correct')::boolean is false) as wrong_count,
  count(*) as total_attempts
from public.assessment_attempts, jsonb_array_elements(answers) as answer
group by chapter_id, answer ->> 'question_id';

grant select on public.question_wrong_answer_stats to authenticated;

-- Note: the two views above run as the querying user (security_invoker),
-- so they only actually return rows to admins — assessment_attempts' own
-- RLS still applies underneath. A non-admin learner querying them just gets
-- their own rows reflected back, never anyone else's.

-- Seed reminder: nothing is published until you insert real subjects/
-- levels/chapters/topics/sections rows (via the /admin panel, once built,
-- or directly in the SQL editor) with status = 'available'.
