# Mubarek Science

Understand Science. Don't just memorize it.

A modular Science learning platform — Mathematics first, with Physics, Chemistry and Biology
planned to slot in later without rebuilding the app. Every lesson follows the same loop:
**Concept → Visual explanation → Formula → Worked problem → Practical example → Practice → Review.**

## Status

All four subjects — Mathematics, Biology, Chemistry, Physics — are wired up, each with an
A-Level, B-Level, and C-Level tier:

- The full navigation map exists for every chapter: Mathematics 21 (A-Level), Biology 5, Chemistry
  8, and Physics 11 (all A-Level). B-Level and C-Level are structurally present for every subject
  but render a "Coming soon" state — no rebuild needed to bring them online later.
- One flagship chapter per subject has complete content — every concept, formula, diagram, worked
  example, and practice question fully authored:
  - **Mathematics, A-Level — Coordinate Geometry** (13 concepts, 4 formulas)
  - **Biology, A-Level — Cell Structure and Organization** (10 concepts, 1 formula, `CellDiagram`)
  - **Chemistry, A-Level — Quantities of Substances** (10 concepts, 4 formulas, `MoleculeDiagram`)
  - **Physics, A-Level — Motion** (9 concepts, 6 formulas, interactive velocity-time graph)
- Every other chapter renders as a real page in a "Coming soon" state, with its topic/concept
  outline already in place.
- Progress, bookmarks, and notes persist to the browser via `localStorage` — no account or
  backend required yet. See `lib/storage/` for the data-access layer a real backend would replace.
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

Any of the four flagship chapters' files (e.g.
`content/subjects/mathematics/a-level/chapter-1-coordinate-geometry/` — `topics.ts`, `concepts.ts`,
`formulas.ts`, `quickRevision.ts`) are the reference example for what a fully-authored chapter
looks like. Every other chapter is an outline-only stub (`status: 'coming-soon'`) — give it the
same treatment to bring it online. Register a new chapter's concepts/formulas in
`CONTENT_PACKS` in `lib/content/getters.ts`, keyed `${levelSlug}/${chapterSlug}` — chapter slugs
must stay globally unique across the whole app (see the same note in `CLAUDE.md`).
