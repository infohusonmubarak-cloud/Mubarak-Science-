@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What this is

Mubarek Science — a modular Science learning platform. Mathematics is the first subject;
Physics, Chemistry, and Biology are architected for but not yet built. See `README.md` for
product status and setup commands.

## Content architecture — the most important thing to understand here

Content lives entirely as typed data in `content/`, never hardcoded into JSX. The hierarchy is
`Subject → Level → Chapter → Topic → Concept`, defined in `types/content.ts`. The key design
decision: `Chapter.topics` (a `Topic[]`, each holding `ConceptSummary[]`) is the **always-present
navigation outline** — title, slug, difficulty — while the **full pedagogical body** (`Concept`,
extending `ConceptSummary`) exists only for chapters that have actually been written. This is why
every one of the 21 Mathematics chapters is a real, correctly-titled page even though only
Chapter 1 (`level-a/coordinate-geometry`) has full content — the rest are outline-only stubs with
`status: 'coming-soon'`.

`lib/content/getters.ts` is the only way pages should read content. It holds a small
`CONTENT_PACKS` registry mapping `level/chapter` to that chapter's full `{ concepts, formulas }`
— add an entry there when a new chapter gets full content. Chapter slugs must stay **globally
unique across the whole app** (not just within a level) — storage (`lib/storage/progress.ts`)
keys a concept's completion by bare `chapterSlug`, so two chapters sharing a slug would corrupt
each other's progress. This is why Level B's Circles/Trigonometry chapters are
`circles-advanced`/`trigonometry-advanced` rather than reusing Level A's `circles`/`trigonometry`.

Every full `Concept` follows a fixed nine-part structure (see any entry in
`content/subjects/mathematics/level-a/chapter-1-coordinate-geometry/concepts.ts`): simple
explanation, why it matters, an optional diagram, an optional formula, a worked example, why it
works, a real-life example, practice questions, a common mistake, and a quick-review bullet list.
Keep new concepts to that same shape — `components/content/ConceptPageLayout.tsx` renders it
directly.

## Diagrams

`components/diagrams/registry.ts` maps a `Diagram.component` key (`'CoordinatePlane' |
'NumberLine' | 'StaticImage'`) to its implementation. `DiagramContainer` renders the registered
component and — this is a common trap — applies `interactive={diagram.interactive}` **after**
spreading `diagram.props`, so the top-level `Diagram.interactive` flag on the content object is
the single source of truth for whether a diagram is draggable. Don't also set `interactive` inside
a diagram's `props` in content data; it would be redundant at best and confusing at worst.

## localStorage and hydration

`lib/storage/` is local-only for this pass (no backend) — `lib/storage/api.ts` is the one barrel
every hook and component should import from, and the seam a future real backend would replace.
Each store (`progress.ts`, `bookmarks.ts`, `notes.ts`) exports **two** read functions: a normal
getter (e.g. `getProgress`) and a `*ServerSnapshot` getter that always returns the fixed default,
never touching `localStorage`. Both are required by `useSyncExternalStore`'s three-argument form
in `hooks/useProgress.ts` etc. — the static HTML from `next build` runs in Node (no `window`), so
it always renders the default state; if a component's hydration-time snapshot read real
localStorage instead, a returning learner with existing progress would hit a React hydration
mismatch (error #418) on every page load. If you add a new piece of client-persisted state,
follow this same two-function pattern, and derive any further-computed values (like
`deriveChapterProgress`) from the already-fetched snapshot rather than re-reading storage
mid-render.

## Verification

No test suite exists. Verify changes with:

```bash
npx tsc --noEmit   # typecheck
npm run lint       # eslint
npm run build      # full build — also proves every generateStaticParams route still resolves
```

For anything touching interactivity (drag, practice questions, bookmarks/progress), start
`npm run build && npm run start` and check it in an actual browser — a passing build does not
prove client-side behavior is correct (the hydration bug above shipped past `next build` cleanly).
