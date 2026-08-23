# Mubarek Science

Understand Science. Don't just memorize it.

A modular Science learning platform — Mathematics first, with Physics, Chemistry and Biology
planned to slot in later without rebuilding the app. Every lesson follows the same loop:
**Concept → Visual explanation → Formula → Worked problem → Practical example → Practice → Review.**

## Status

This is the foundation build:

- The full navigation map exists for all 21 Mathematics chapters (Level A × 10, Level B × 11).
- **Level A, Chapter 1 — Introduction to Coordinate Geometry** has complete content: 13 concepts,
  4 formulas, interactive diagrams, worked examples, and practice questions.
- Every other chapter renders as a real page in a "Coming soon" state, with its topic/concept
  outline already in place.
- Progress, bookmarks, and notes persist to the browser via `localStorage` — no account or
  backend required yet. See `lib/storage/` for the data-access layer a real backend would replace.
- Physics, Chemistry, and Biology are wired up as subjects but have no content yet.
- Teacher Guide and an admin CMS are stubbed but not built.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Architecture

- **Next.js (App Router) + TypeScript + Tailwind CSS**, fully statically generated
  (`generateStaticParams` on every content route) — no backend calls required to render.
- **`content/`** — the content data layer (pure TypeScript, no JSX). Structured as
  `Subject → Level → Chapter → Topic → Concept`, with formulas, diagrams, worked examples, and
  practice questions attached to each concept. `lib/content/getters.ts` is the read API over it.
- **`components/diagrams/`** — reusable, typed SVG diagram components (starting with
  `CoordinatePlane`, an interactive draggable-point diagram) behind a small registry, so adding a
  new diagram type later is additive.
- **`lib/storage/`** — the localStorage-backed data-access module for progress, bookmarks, and
  notes. `lib/storage/api.ts` is the one seam a future real backend would swap in behind.
- **PWA** — a hand-rolled `public/sw.js` service worker (cache-first for static assets,
  stale-while-revalidate for content pages, network-first with an `/offline` fallback for
  navigation) plus a generated `app/manifest.ts`.

## Adding content

Chapter 1's files under `content/subjects/mathematics/level-a/chapter-1-coordinate-geometry/`
(`topics.ts`, `concepts.ts`, `formulas.ts`, `quickRevision.ts`) are the reference example for what
a fully-authored chapter looks like. Every other chapter in `content/subjects/mathematics/level-a/`
and `level-b/` is an outline-only stub (`status: 'coming-soon'`) — give it the same treatment to
bring it online.
