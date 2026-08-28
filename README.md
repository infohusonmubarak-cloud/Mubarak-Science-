# Mubarek Science

Understand Science. Don't just memorize it.

A modular Science learning platform — Mathematics first, with Physics, Chemistry and Biology
planned to slot in later without rebuilding the app. Every lesson follows the same loop:
**Concept → Visual explanation → Formula → Worked problem → Practical example → Practice → Review.**

## Status

All four subjects — Mathematics, Biology, Chemistry, Physics — are wired up, each with an
A-Level, B-Level, and C-Level tier:

- The full navigation map exists for every chapter: Mathematics 10 (A-Level) + 11 (B-Level) + 11
  (C-Level), Biology 5 (A-Level) + 6 (C-Level), Chemistry 8 (A-Level) + 8 (C-Level), Physics 11
  (A-Level) + 12 (B-Level) + 13 (C-Level). Biology B-Level is structurally present but renders a
  "Coming soon" state — no rebuild needed to bring it online later.
- **Mathematics A-Level is fully authored end to end** — all 10 chapters (Coordinate Geometry,
  Exponents and Radicals, Logarithms, Functions, Quadratic Functions, Absolute Value Functions,
  Probability, Similarity, Circles, Trigonometry), every concept, formula, worked example, a
  10-question graded Assessment, and a Concept Map per chapter — see
  `content/subjects/mathematics/a-level/`. Introduces two new diagram components: `FunctionGraph`
  (plots quadratic and absolute-value curves, marking the vertex/roots/axis of symmetry) and
  `GeometryDiagram` (a generic, data-driven renderer for labelled triangles, circles, and angle
  figures) — used for the graph- and geometry-heavy chapters (5, 6, 8, 9, 10).
- **Mathematics B-Level is fully authored end to end** — all 11 chapters (Remainder and Factor
  Theorem, The Binomial Theorem, Elementary Functions and Transformations, Sequences and Series,
  Matrices, Statistics, Circles, Areas of Similar Triangles, Introduction to Vectors, Trigonometry,
  Methods of Differentiation), every concept, formula, worked example, a 10-question graded
  Assessment, and a Concept Map per chapter — see `content/subjects/mathematics/b-level/`. Extends
  `FunctionGraph` with a `'custom'` kind (an arbitrary `fn`/`fn2` curve, e.g. tangent and secant
  lines for the differentiation chapter) and `GeometryDiagram` with an `arrow` option on segments
  (for vectors) — both reused as-is for the vector, trigonometry, and calculus chapters rather than
  new one-off components.
- **Mathematics C-Level is fully authored end to end** — all 11 chapters (Complex Numbers,
  Mathematical Induction, Analytic Solid Geometry, Vectors in Three Dimensions, Permutation and
  Combination, Circles and Parabolas, Trigonometric Functions and Their Graphs, Logarithmic and
  Exponential Functions, Applications of Derivatives, Methods of Integration, Applications of
  Integration), every concept, formula, worked example, a 10-question graded Assessment, and a
  Concept Map per chapter — see `content/subjects/mathematics/c-level/`. Introduces a hand-computed
  oblique 3D projection (`screenX = y − 0.5x`, `screenY = z − 0.5x`) to sketch 3D coordinate axes,
  planes, and vectors inside the 2D-only `GeometryDiagram`, and reuses `GeometryDiagram`'s polygon
  fill to shade areas and solids-of-revolution profiles for the integration-application chapter.
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
- **Physics A-Level is fully authored end to end** — all 11 chapters (Units and Measurements,
  Motion, Forces, Pressure, Work and Energy, Heat and Temperature, Wave and Sound, Light,
  Electricity, Magnetism, Quantum and Atomic Physics), every concept, formula, worked example, a
  10-question graded Assessment, and a Concept Map per chapter — see
  `content/subjects/physics/a-level/`.
- **Physics B-Level is fully authored end to end** — all 12 chapters (Motion in a Plane,
  Rotational Dynamics, Pressure, Power and Efficiency, Heat and Thermal Phenomena, Vibration of
  Strings & Resonance, Refraction of Light, Lenses, Electric Field, Electric Current & Magnetic
  Effect, Fundamentals of Electronics, Modern Physics), every concept, formula, worked example, a
  10-question graded Assessment, and a Concept Map per chapter — see
  `content/subjects/physics/b-level/`.
- **Physics C-Level is fully authored end to end** — all 13 chapters (Rotational Motion, Forces in
  Circular Motion, Fluid Dynamics, Sources of Energy and Environmental Impacts, Heat Transfer and
  Thermodynamics, Effects and Characteristics of Sound, Applications of Light and Optical
  Instruments, Interference and Diffraction of Light, Capacitor and Capacitance, Electrical Energy
  Power and Heating Effect, Electromagnetic Induction Generation and Distribution, Digital
  Electronics and Communication System, Modern Physics), every concept, formula, worked example, a
  10-question graded Assessment, and a Concept Map per chapter — see
  `content/subjects/physics/c-level/`.
- **Concept Maps**: a chapter can carry a `conceptMap` — a simple labelled tree (rendered as nested
  boxes, no layout-engine dependency) showing how its topics and concepts relate. Every Mathematics
  A-Level, Mathematics B-Level, Mathematics C-Level, Chemistry C-Level, Biology C-Level, Physics
  A-Level, Physics B-Level, and Physics C-Level chapter has one, at
  `/subjects/[subjectSlug]/[levelSlug]/[chapterSlug]/concept-map`.
- One flagship chapter per other subject/level has complete content — every concept, formula,
  diagram, worked example, and practice question fully authored:
  - **Biology, A-Level — Cell Structure and Organization** (10 concepts, 1 formula, `CellDiagram`)
  - **Chemistry, A-Level — Quantities of Substances** (10 concepts, 4 formulas, `MoleculeDiagram`)
- Every other chapter renders as a real page in a "Coming soon" state, with its topic/concept
  outline already in place.
- **Assessments**: a chapter can carry a graded `Assessment` — a balanced set of questions across
  five parts (concept, formula application, problem solving, real-life application, challenge).
  `AssessmentRunner` collects every answer before scoring (no per-question feedback until submit),
  then shows a score, a correct/incorrect breakdown, and a "topics to review" list linking back to
  the concepts behind any wrong answer. Results persist to `localStorage`
  (`lib/storage/assessments.ts`) so a learner's last attempt is remembered. Every Mathematics
  A-Level, Mathematics B-Level, Mathematics C-Level, Chemistry C-Level, Biology C-Level, Physics
  A-Level, Physics B-Level, and Physics C-Level chapter have one; every other chapter's
  `/assessment` route renders a "Coming soon" panel until one is authored.
- Progress, bookmarks, and notes persist to the browser via `localStorage` — no account or
  backend required yet. See `lib/storage/` for the data-access layer a real backend would replace.
- Teacher Guide and an admin CMS are stubbed but not built.

### MSMK — Mubarak Science Medical Knowledge

A separate paid course under `/msmk` — Nursing, Self-Care & Family Care for Rohingya refugee
learners — visual-first (diagrams, animations, short video slots), bilingual (English / Hanifi
Rohingya), with its own Supabase-backed registration, access-code login, and staff admin flow.
Unlike the Science courses above, MSMK is **not** purely a static/`localStorage` app: registration,
access codes, per-module progress, and assessment scores are stored server-side (see
`supabase-schema-msmk.sql`), because a paid course needs an owner-visible record of who registered
and paid, and a login that works across devices.

- **All 11 modules are fully authored**, following the TESDA Caregiving NC II Competency-Based
  Learning Material (CBLM) structure supplied for this course — Learning Experience, Information
  Sheet, Self-Check + Answer Sheet, Job Sheet, Specification Sheet, and a visual graded Assessment
  per module. See `content/msmk/full/`.
  1. Workplace Communication — 2. Basic Housekeeping — 3. **Basic First Aid & CPR** (the reference
  module, cited to WHO Basic Emergency Care / IFRC First Aid Guidelines) — 4. Patient Services —
  5. Infant & Toddler Care (formula milk prep, cited to WHO/UNICEF) — 6. Child Care (hygiene, cited
  to WHO hand-hygiene guidance) — 7. Children's Social/Intellectual/Creative/Emotional Development
  — 8. Children's Physical Development — 9. Elderly Care (ADL, cited to WHO healthy-ageing
  guidance) — 10. Special Needs Care (informed by WHO/World Bank World Report on Disability
  principles) — 11. Respond to Emergency (fire/flood/gas-leak scene response, cross-references
  Module 3 for the injured-person sequence rather than duplicating it).
- Hand-drawn, labelled SVG diagrams for every procedure that has a real technique to show
  (`components/msmk/diagrams/`): recovery position, CPR hand placement with a 100–120bpm
  pulse/metronome animation, choking response, formula-bottle prep, handwashing, elderly
  mobility/transfer assistance, and children's physical-activity poses.
- A visual-first assessment engine (`components/msmk/assessment/`): tap-the-correct-image,
  tap-the-spot-on-a-diagram, drag-to-order (reorder via buttons, not HTML5 drag-and-drop — not
  reliable on touch), and true/false-with-picture, each with instant feedback.
- Front matter at `/msmk/guide`: a visual step-by-step "How to Use This Course," plus the CBLM's
  Preface and Acknowledgement sections.
- Staff admin at `/msmk/admin` (Supabase Auth, same pattern as the sibling Shwe-Pinya-Nandaw
  site's `admin.html`): review registrations, mark verified/rejected, issue access codes
  (`MSMK01`, `MSMK02`, …), and see a learner summary.
- **Known gaps, deliberately left open rather than faked**: every Rohingya (`rhg`) string is a
  placeholder — composing new Hanifi Rohingya text isn't something that can be verified as correct
  without a native speaker, and wrong output would look authoritative while being linguistically
  wrong (see `lib/msmk/translationStatus.ts`, and the banner shown on every MSMK page). Video
  embed slots have no real YouTube IDs yet — `VideoEmbed` shows a "coming soon" card rather than a
  fabricated link. Medical content needs a doctor's (MBBS) review before real learners are taught
  from it.

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
- **`components/diagrams/`** — reusable, typed SVG diagram components (`CoordinatePlane`, an
  interactive draggable-point diagram; `FunctionGraph`, a static quadratic/absolute-value curve
  plotter; `GeometryDiagram`, a generic data-driven renderer for labelled triangle/circle figures;
  and others) behind a small registry, so adding a new diagram type later is additive.
- **`lib/storage/`** — the localStorage-backed data-access module for progress, bookmarks, and
  notes. `lib/storage/api.ts` is the one seam a future real backend would swap in behind.
- **PWA** — a hand-rolled `public/sw.js` service worker (cache-first for static assets,
  stale-while-revalidate for content pages, network-first with an `/offline` fallback for
  navigation) plus a generated `app/manifest.ts`.

## Adding content

Any fully-authored chapter's files (e.g.
`content/subjects/physics/c-level/chapter-2-forces-in-circular-motion/` — `topics.ts`,
`concepts.ts`, `formulas.ts`, `quickRevision.ts`, and optionally `assessment.ts`) are the
reference example for what a fully-authored chapter looks like. Every other chapter is an
outline-only stub (`status: 'coming-soon'`) — give it the same treatment to bring it online.
Register a new chapter's concepts/formulas in `CONTENT_PACKS` in `lib/content/getters.ts`, keyed
`${levelSlug}/${chapterSlug}` — chapter slugs (and concept slugs) must stay globally unique across
the whole app (see the same note in `CLAUDE.md`). A chapter's `assessment` field needs no separate
registration — like `quickRevision`, it's just set directly on the `Chapter` object.
