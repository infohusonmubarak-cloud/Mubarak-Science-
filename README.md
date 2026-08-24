# Mubarek Science

Understand Science. Don't just memorize it.

A modular Science learning platform — Mathematics first, with Physics, Chemistry and Biology
planned to slot in later without rebuilding the app. Every lesson follows the same loop:
**Concept → Visual explanation → Formula → Worked problem → Practical example → Practice → Review.**

## Status

All four subjects — Mathematics, Biology, Chemistry, Physics — are wired up, each with an
A-Level, B-Level, and C-Level tier:

- The full navigation map exists for every chapter: Mathematics 21 (A-Level), Biology 5 (A-Level)
  + 6 (C-Level), Chemistry 8 (A-Level) + 8 (C-Level), Physics 11 (A-Level) + 13 (C-Level). B-Level
  is structurally present for every subject (and C-Level for Mathematics) but renders a "Coming
  soon" state — no rebuild needed to bring it online later.
- **Chemistry C-Level is fully authored end to end** — all 8 chapters (Chemical Bonding and
  Intermolecular Forces, Energy Changes in Chemical Reactions, Chemical Kinetics, Chemical
  Equilibrium, Acid-Base Reactions, Transition Elements, Chemistry and Green Environment, Organic
  Compounds and Macromolecules), every concept, formula, worked example, and a 10-question graded
  Assessment at the end of each chapter — see `content/subjects/chemistry/c-level/`.
- **Biology C-Level is fully authored end to end** — all 6 chapters (Introduction to Biology:
  Themes and Importance, Molecular Biology, Transport System in Organisms, Diseases in Plants and
  Animals, Coordination and Response, Biodiversity and Conservation), every concept, formula,
  worked example, a 10-question graded Assessment, and a Concept Map per chapter — see
  `content/subjects/biology/c-level/`.
- **Concept Maps**: a chapter can carry a `conceptMap` — a simple labelled tree (rendered as nested
  boxes, no layout-engine dependency) showing how its topics and concepts relate. Every Chemistry
  and Biology C-Level chapter has one, at `/subjects/[subjectSlug]/[levelSlug]/[chapterSlug]/concept-map`.
- One flagship chapter per other subject/level has complete content — every concept, formula,
  diagram, worked example, and practice question fully authored:
  - **Mathematics, A-Level — Coordinate Geometry** (13 concepts, 4 formulas)
  - **Biology, A-Level — Cell Structure and Organization** (10 concepts, 1 formula, `CellDiagram`)
  - **Chemistry, A-Level — Quantities of Substances** (10 concepts, 4 formulas, `MoleculeDiagram`)
  - **Physics, A-Level — Motion** (9 concepts, 6 formulas, interactive velocity-time graph)
  - **Physics, C-Level — Forces in Circular Motion** (8 concepts, 2 formulas, `CircularMotionDiagram`)
- Every other chapter renders as a real page in a "Coming soon" state, with its topic/concept
  outline already in place.
- **Assessments**: a chapter can carry a graded `Assessment` — a balanced set of questions across
  five parts (concept, formula application, problem solving, real-life application, challenge).
  `AssessmentRunner` collects every answer before scoring (no per-question feedback until submit),
  then shows a score, a correct/incorrect breakdown, and a "topics to review" list linking back to
  the concepts behind any wrong answer. Results persist to `localStorage`
  (`lib/storage/assessments.ts`) so a learner's last attempt is remembered. Every Chemistry and
  Biology C-Level chapter and the Physics C-Level flagship have one; every other chapter's
  `/assessment` route renders a "Coming soon" panel until one is authored.
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

Any of the five flagship chapters' files (e.g.
`content/subjects/physics/c-level/chapter-2-forces-in-circular-motion/` — `topics.ts`,
`concepts.ts`, `formulas.ts`, `quickRevision.ts`, and optionally `assessment.ts`) are the
reference example for what a fully-authored chapter looks like. Every other chapter is an
outline-only stub (`status: 'coming-soon'`) — give it the same treatment to bring it online.
Register a new chapter's concepts/formulas in `CONTENT_PACKS` in `lib/content/getters.ts`, keyed
`${levelSlug}/${chapterSlug}` — chapter slugs (and concept slugs) must stay globally unique across
the whole app (see the same note in `CLAUDE.md`). A chapter's `assessment` field needs no separate
registration — like `quickRevision`, it's just set directly on the `Chapter` object.
