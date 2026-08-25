@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## What this is

Mubarek Science — a modular Science learning platform covering Mathematics, Biology, Chemistry,
and Physics, each with an A-Level, B-Level, and C-Level tier. See `README.md` for product status
and setup commands.

## Content architecture — the most important thing to understand here

Content lives entirely as typed data in `content/`, never hardcoded into JSX. The hierarchy is
`Subject → Level → Chapter → Topic → Concept`, defined in `types/content.ts`. The key design
decision: `Chapter.topics` (a `Topic[]`, each holding `ConceptSummary[]`) is the **always-present
navigation outline** — title, slug, difficulty — while the **full pedagogical body** (`Concept`,
extending `ConceptSummary`) exists only for chapters that have actually been written. This is why
every chapter across all four subjects is a real, correctly-titled page even though most are
still outline-only stubs with `status: 'coming-soon'` — Mathematics A-Level, Mathematics B-Level,
Mathematics C-Level, Chemistry C-Level, Biology C-Level, Physics B-Level, and Physics C-Level are
the seven exceptions, each fully authored end to end (see below). `Level` also carries its own
`status` —
most subject/level combinations (Biology B-Level being the remaining example) are `coming-soon`
with an empty `chapters: []` until content is written for them; the level page
(`app/subjects/[subjectSlug]/[levelSlug]/page.tsx`) renders a `ComingSoonPanel` instead of a
chapter grid when `level.status === 'coming-soon'`.

The reference examples for a fully-authored chapter are the flagship chapters —
`biology/a-level/cell-structure-and-organization`, `chemistry/a-level/quantities-of-substances`,
`physics/a-level/motion` — plus **all ten** chapters of `mathematics/a-level/`, **all eleven**
chapters of `mathematics/b-level/`, **all eleven** chapters of `mathematics/c-level/`, **all
eight** chapters of `chemistry/c-level/`, **all six** chapters of `biology/c-level/`, **all
twelve** chapters of `physics/b-level/`, and **all thirteen** chapters of `physics/c-level/`
(including its original flagship, `forces-in-circular-motion`), the seven fully-populated levels
in the app right now. Every chapter in Mathematics A-Level, Mathematics B-Level, Mathematics
C-Level, Chemistry C-Level, Biology C-Level, Physics B-Level, and Physics C-Level also has a
graded `assessment` and a `conceptMap` (see **Assessments** and **Concept Maps** below); most stub
chapters elsewhere don't yet.

`lib/content/getters.ts` is the only way pages should read content. It holds a small
`CONTENT_PACKS` registry mapping `level/chapter` to that chapter's full `{ concepts, formulas }`
— add an entry there when a new chapter gets full content. **Both chapter slugs and concept
slugs must stay globally unique across the whole app** (not just within a level, and not just
within a subject — `a-level`/`c-level` etc. are level slugs shared across all four subjects).
This isn't just the `CONTENT_PACKS` key: `lib/storage/progress.ts` keys a learner's completed-
concept record by bare `conceptSlug` alone (the chapter it belongs to is stored as a *value*, not
part of the key), and `findChapterLocation` in `getters.ts` searches every subject/level for the
first chapter matching a bare `chapterSlug`. A collision on either kind of slug means two
different chapters/concepts silently share one storage entry or resolve to the wrong page. This
is why Math's Level B Circles/Trigonometry chapters are `circles-advanced`/`trigonometry-advanced`
rather than reusing Level A's `circles`/`trigonometry` — before adding a new subject or level's
worth of chapters, re-check both invariants, e.g.:
```bash
grep -rhoP "slug: '\K[^']+" content/ | sort | uniq -c | sort -rn
```
Expect `a-level`/`b-level`/`c-level` to repeat (level slugs, fine) and a handful of concept slugs
to repeat exactly twice (a concept's `ConceptSummary` in `topics.ts` naturally shares its slug
with the matching full `Concept` in `concepts.ts` — also fine). Anything else repeating is a real
collision. (Topic slugs and formula slugs are separate namespaces — topics aren't looked up by
bare slug anywhere, and formulas only need to be unique among themselves, via `findFormula`.)

Every full `Concept` follows a fixed nine-part structure (see any entry in
`content/subjects/mathematics/a-level/chapter-1-coordinate-geometry/concepts.ts`): simple
explanation, why it matters, an optional diagram, an optional formula, a worked example, why it
works, a real-life example, practice questions, a common mistake, and a quick-review bullet list.
Keep new concepts to that same shape — `components/content/ConceptPageLayout.tsx` renders it
directly. A concept can also carry an optional `relatedConcepts` array (`{ label, href }`) for
genuine cross-subject links (e.g. a Physics kinematics concept linking to the Math equation it
relies on) — only add one where a real connection exists, don't force it on every concept.

## Diagrams

`components/diagrams/registry.ts` maps a `Diagram.component` key (`'CoordinatePlane' |
'NumberLine' | 'StaticImage' | 'CellDiagram' | 'MoleculeDiagram' | 'CircularMotionDiagram' |
'FunctionGraph' | 'GeometryDiagram'`) to its implementation.
`DiagramContainer` renders the registered component and — this is a common trap — applies
`interactive={diagram.interactive}` **after** spreading `diagram.props`, so the top-level
`Diagram.interactive` flag on the content object is the single source of truth for whether a
diagram is draggable. Don't also set `interactive` inside a diagram's `props` in content data; it
would be redundant at best and confusing at worst. `CoordinatePlane` is deliberately generic
enough to be relabelled for non-Math use (see its `xLabel`/`yLabel`/`slopeSymbol` props, used by
Physics's Motion chapter to present it as a velocity-time graph) — prefer reusing it with new
labels over building a near-duplicate graphing component. `FunctionGraph` (Math A-Level chapters
5-6) samples and plots a quadratic or absolute-value curve, marking the vertex/roots/axis of
symmetry as needed. Math B-Level extends it with a `kind: 'custom'` option — an arbitrary
`fn`/`fn2` callback (a real TS function, not a string, since content data is TS source) plus
`markPoints` — used for cubic/reciprocal/square-root/exponential curves (chapter 3), secant and
tangent lines (chapter 11's rate-of-change and derivative concepts), and limits with a removable
gap (the path breaks at any `NaN` or out-of-range sample instead of drawing a false connecting
line). `GeometryDiagram` (Math A-Level chapters 8-10) is deliberately generic rather than a fixed
set of named "kinds" — it renders arbitrary `points`/`segments`/`angleMarks`/`circles`/`arcs`/
`polygons` given as plain coordinate data, auto-fitting them to the viewBox, so every new triangle
or circle figure is just content, not a new component. Math B-Level adds an optional `arrow`
boolean on `segments` (for vectors, chapter 9) and reuses the same point/segment machinery for
non-triangle figures too (an ogive or scatter plot in chapter 6's Statistics, a tangent line to an
implicit curve in chapter 11) rather than building single-purpose components for each.

## Assessments

A chapter can optionally carry `assessment?: Assessment` (set directly on the `Chapter` object,
same pattern as `quickRevision` — no `CONTENT_PACKS` entry needed). An `Assessment` is a flat list
of `AssessmentQuestion`, each reusing the existing `PracticeQuestion` shape (multiple-choice or
numeric) plus a `part` (`'concept' | 'formula-application' | 'problem-solving' |
'real-life-application' | 'challenge'`, mirroring the five-part structure a real exam uses) and a
`conceptSlug`/`conceptTitle` so a wrong answer can be attributed back to a specific topic.

`components/assessment/AssessmentRunner.tsx` renders the route at
`/subjects/[subjectSlug]/[levelSlug]/[chapterSlug]/assessment`. Unlike `PracticeQuestion` (which
reveals correctness immediately, per-question), it collects every answer first and only scores on
submit — don't add per-question feedback here, that's a deliberate difference from practice
questions. On submit it shows a score, a correct/incorrect breakdown, and a "topics to review"
list of the concepts behind any wrong answer, each linking to that concept's page. Results persist
via `lib/storage/assessments.ts` (`recordAssessmentAttempt`/`useAssessmentAttempt`) — only the
latest attempt per chapter is kept, keyed by `chapterSlug`, following the same
`readJSON`/`writeJSON`/`*ServerSnapshot` pattern as `progress.ts` (see **localStorage and
hydration** below) since it's read via `useSyncExternalStore` too.

## Concept Maps

A chapter can optionally carry `conceptMap?: ConceptMapNode` (set directly on the `Chapter`
object, same pattern as `quickRevision`/`assessment` — no `CONTENT_PACKS` entry needed).
`ConceptMapNode` (`types/content.ts`) is a simple labelled tree — `{ label, href?, children? }` —
deliberately not a freeform node-link diagram, so it needs no layout engine. `href` is usually a
deep link to the concept's own page.

`components/content/ConceptMapView.tsx` renders the tree as nested boxes at the route
`/subjects/[subjectSlug]/[levelSlug]/[chapterSlug]/concept-map`. When authoring one, structure it
chapter title → one node per topic → one leaf per concept, matching the chapter's own
`topics`/`concepts` structure so the map stays an accurate outline rather than a separate,
divergent view of the chapter.

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
