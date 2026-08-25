import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 8 — Interference and Diffraction of
// Light. Matches the textbook's section list: Huygens' principle;
// interference of light; diffraction of light; the diffraction grating.
export const chapter8CInterferenceConcepts: Record<string, Concept> = {
  'huygens-principle': {
    slug: 'huygens-principle',
    title: "Huygens' Principle",
    difficulty: 'medium',
    simpleExplanation:
      "Huygens' principle states that every point on a wavefront acts as a source of tiny secondary wavelets, " +
      'spreading outward at the wave\'s own speed — the new wavefront a moment later is simply the envelope (the ' +
      'common tangent surface) that all those wavelets together sweep out.',
    whyItMatters:
      "This deceptively simple idea explains how waves propagate, bend around obstacles, and produce " +
      'interference and diffraction patterns — it is the conceptual foundation for everything else in this chapter.',
    diagram: {
      id: 'huygens-diagram',
      title: "Secondary wavelets building a new wavefront from an old one",
      altText: 'An inner curved arc representing the old wavefront, with several small dashed circles centered along it representing secondary wavelets, and an outer curved arc representing the new wavefront formed by their combined envelope',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        arcs: [
          { cx: 0, cy: 0, r: 3, startDeg: -40, endDeg: 40, label: 'old wavefront' },
          { cx: 0, cy: 0, r: 3.6, startDeg: -40, endDeg: 40, label: 'new wavefront' },
        ],
        circles: [
          { cx: 2.819, cy: -1.026, r: 0.6, dashed: true },
          { cx: 3, cy: 0, r: 0.6, dashed: true },
          { cx: 2.819, cy: 1.026, r: 0.6, dashed: true },
        ],
      },
    },
    workedExample: {
      id: 'huygens-worked-1',
      title: "Use Huygens' principle to explain wave bending at a barrier edge",
      problemStatement: 'Explain, using Huygens\' principle, why a wave passing through a narrow gap spreads out into the space behind the barrier, instead of continuing in a single straight beam.',
      steps: [
        { step: 1, instruction: 'Consider the wavefront arriving at the gap.', math: 'Every point on that wavefront becomes a secondary wavelet source', explanation: "Huygens' principle applies at every point along the wavefront, including right at the edges of the gap." },
        { step: 2, instruction: 'Consider the wavelets from the points at the very edges of the gap.', math: 'These wavelets are not blocked by neighboring wavelets on either side (since the barrier blocks the wave everywhere else)', explanation: 'Inside a wide, unobstructed wavefront, neighboring wavelets mostly cancel out sideways spreading — but at the edges of a narrow gap, that canceling effect is missing.' },
        { step: 3, instruction: 'Conclude the outcome.', math: 'The wavelets at the edges spread into the region behind the barrier', explanation: "This is exactly what is observed: light or sound passing through a narrow gap visibly spreads out (diffracts) into the shadow region behind the barrier." },
      ],
      finalAnswer: "The wave spreads out because the unblocked wavelets at the gap's edges are not canceled by neighboring wavelets the way they would be in a wide, unobstructed wave.",
    },
    whyItWorks:
      'Deep inside a wide wavefront, each secondary wavelet\'s sideways spreading is almost perfectly canceled ' +
      'by the wavelets right next to it, leaving only the forward-moving wavefront — but at an edge (like the ' +
      'boundary of a narrow gap), there is no wavelet on one side to cancel the spreading, so the wave visibly bends into the shadow region.',
    realLifeExample: {
      title: 'Hearing around a corner',
      scenario: 'A person can hear someone talking around a corner, even without a direct line of sight to them.',
      explanation: "Sound waves diffract (spread) around the corner's edge, exactly as Huygens' principle " +
        "predicts — each point along the wavefront at the corner acts as a new source, sending sound into the region that would otherwise be a 'shadow.'",
    },
    practiceQuestions: [
      {
        id: 'huygens-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "According to Huygens' principle, what does every point on a wavefront act as?",
        hints: ['Think about where the "next" wavefront comes from.'],
        options: [
          { id: 'a', text: 'A source of secondary wavelets, spreading outward at the wave speed' },
          { id: 'b', text: 'A fixed point that never moves' },
          { id: 'c', text: 'A source of light only, never sound' },
          { id: 'd', text: 'A point that absorbs the wave completely' },
        ],
        correctOptionId: 'a',
        explanation: "Huygens' principle treats every point on a wavefront as a new source of secondary wavelets, whose combined envelope forms the next wavefront.",
      },
    ],
    commonMistake:
      'Thinking diffraction (wave-spreading) only happens for sound and never for light — light diffracts too, ' +
      'just far less noticeably in everyday life because its wavelength is so much smaller than most everyday openings.',
    quickReview: [
      'Every point on a wavefront is a source of secondary wavelets.',
      'The new wavefront is the envelope (common tangent) of those wavelets.',
      'Explains why waves bend around obstacles and through narrow gaps.',
    ],
  },

  'interference-of-light': {
    slug: 'interference-of-light',
    title: 'Interference of Light',
    difficulty: 'hard',
    simpleExplanation:
      "When light from two coherent sources (like two narrow slits) overlaps, it produces a pattern of bright " +
      "and dark fringes — bright where the waves arrive in step (constructive interference) and dark where " +
      "they arrive out of step (destructive interference). The spacing between bright fringes is Δy=λL/d.",
    whyItMatters:
      'Interference is direct, visible proof that light behaves as a wave — a purely particle picture of light ' +
      'cannot explain why two light sources can combine to produce darkness at some points.',
    diagram: {
      id: 'double-slit-diagram',
      title: 'Light from two slits interfering to produce bright and dark fringes on a screen',
      altText: 'Two closely-spaced slits on the left, with light spreading out from each toward a screen on the right, where alternating bright and dark fringes are marked',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [0, 0.3], to: [6, 1.5] }, { from: [0, 0.3], to: [6, 0.5] }, { from: [0, 0.3], to: [6, -0.5] },
          { from: [0, -0.3], to: [6, 1.5] }, { from: [0, -0.3], to: [6, 0.5] }, { from: [0, -0.3], to: [6, -0.5] },
          { from: [6, -2], to: [6, 2] },
        ],
        points: [
          { x: 0, y: 0.3, label: 'slit 1', labelDx: -18, labelDy: 0 },
          { x: 0, y: -0.3, label: 'slit 2', labelDx: -18, labelDy: 0 },
          { x: 6, y: 1.5, label: 'bright', labelDx: 14, labelDy: 0 },
          { x: 6, y: 0.5, label: 'dark', labelDx: 14, labelDy: 0 },
          { x: 6, y: -0.5, label: 'bright', labelDx: 14, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'fringe-spacing-formula',
    workedExample: {
      id: 'interference-worked-1',
      title: 'Find the fringe spacing in a double-slit experiment',
      problemStatement: 'Light of wavelength 600 nm passes through two slits 0.5 mm apart, forming a pattern on a screen 2 m away. Find the spacing between adjacent bright fringes.',
      steps: [
        { step: 1, instruction: 'Write down the known values, converted to metres.', math: 'λ=600×10⁻⁹ m,  d=0.5×10⁻³ m,  L=2 m', explanation: 'All lengths must be in consistent units (metres).' },
        { step: 2, instruction: 'Apply the fringe spacing formula.', math: 'Δy = λL/d = (600×10⁻⁹)(2)/(0.5×10⁻³)', explanation: 'Substitute the three values.' },
        { step: 3, instruction: 'Compute the result.', math: 'Δy = (1200×10⁻⁹)/(0.5×10⁻³) = 2.4×10⁻³ m', explanation: 'This equals 2.4 mm.' },
      ],
      finalAnswer: 'Δy = 2.4 mm.',
    },
    whyItWorks:
      'At a bright fringe, light from the two slits has traveled paths differing by a whole number of ' +
      'wavelengths, so the waves arrive crest-to-crest (constructive interference); moving along the screen ' +
      'changes that path difference smoothly, producing evenly-spaced bright fringes exactly Δy=λL/d apart.',
    realLifeExample: {
      title: "Thomas Young's original double-slit experiment",
      scenario: "In 1801, Thomas Young shone light through two narrow slits and observed a striped pattern on a screen, rather than just two bright lines.",
      explanation: 'This striped interference pattern was the first strong evidence that light behaves as a ' +
        'wave — a discovery that directly launched the wave theory of light still used today.',
    },
    practiceQuestions: [
      {
        id: 'interference-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Light of wavelength 500 nm passes through two slits 0.3 mm apart, forming a pattern on a screen 1.5 m away. Find the fringe spacing, in mm.',
        hints: ['Δy = λL/d, keeping all lengths in metres before converting the final answer to mm.'],
        correctAnswer: 2.5,
        explanation: 'Δy = (500×10⁻⁹)(1.5)/(0.3×10⁻³) = (750×10⁻⁹)/(0.3×10⁻³) = 2.5×10⁻³ m = 2.5 mm.',
      },
    ],
    commonMistake:
      'Mixing units — forgetting to convert nanometres, millimetres, and metres into one consistent unit before ' +
      'substituting into the formula is one of the most common sources of a wrong answer here.',
    quickReview: [
      'Δy = λL/d.',
      'Bright fringes: constructive interference (waves in step). Dark fringes: destructive (out of step).',
      "Direct evidence that light behaves as a wave.",
    ],
  },

  'diffraction-of-light': {
    slug: 'diffraction-of-light',
    title: 'Diffraction of Light',
    difficulty: 'hard',
    simpleExplanation:
      'Diffraction is the spreading of light as it passes through a narrow opening (or around an obstacle) — a ' +
      "single narrow slit produces its own pattern of bright and dark bands, with dark bands (minima) at angles given by a sinθ=mλ.",
    whyItMatters:
      'Diffraction sets a fundamental limit on the sharpness of images formed by any lens or telescope — no ' +
      'optical instrument, however perfectly made, can beat the blurring diffraction causes.',
    diagram: {
      id: 'diffraction-pattern-diagram',
      title: 'The intensity pattern from single-slit diffraction',
      altText: 'A graph showing a tall central peak at the center, flanked by much smaller side peaks that decrease in height further from the center, with the intensity dropping to zero between each peak',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => (Math.abs(x) < 1e-6 ? 1 : Math.pow(Math.sin(x) / x, 2)),
        min: -10,
        max: 10,
        markPoints: [
          { x: 0, y: 1, label: 'central maximum' },
          { x: 3.1416, y: 0, label: 'first minimum' },
        ],
        xLabel: 'angle (arbitrary units)',
        yLabel: 'intensity',
      },
    },
    formulaSlug: 'single-slit-diffraction-formula',
    workedExample: {
      id: 'diffraction-worked-1',
      title: 'Find the angle of the first diffraction minimum',
      problemStatement: 'Light of wavelength 500 nm passes through a single slit 0.2 mm wide. Find the angle of the first diffraction minimum (m=1).',
      steps: [
        { step: 1, instruction: 'Write down the known values, converted to metres.', math: 'λ=500×10⁻⁹ m,  a=0.2×10⁻³ m,  m=1', explanation: 'Consistent units before substituting.' },
        { step: 2, instruction: 'Apply the single-slit diffraction formula.', math: 'sinθ = mλ/a = (1)(500×10⁻⁹)/(0.2×10⁻³)', explanation: 'Substitute the known values.' },
        { step: 3, instruction: 'Compute sinθ.', math: 'sinθ = 0.0025', explanation: 'A very small value, since the slit is much wider than the wavelength.' },
        { step: 4, instruction: 'Find θ.', math: 'θ = sin⁻¹(0.0025) ≈ 0.143°', explanation: 'A tiny but measurable diffraction angle.' },
      ],
      finalAnswer: 'θ ≈ 0.143°.',
    },
    whyItWorks:
      'Using Huygens\' principle, every point across the open slit acts as a wavelet source — at the first ' +
      'minimum angle, wavelets from the top half of the slit exactly cancel wavelets from the bottom half in pairs ' +
      '(each pair differing by half a wavelength in path length), producing complete destructive interference at that specific angle.',
    realLifeExample: {
      title: 'Why telescope images have a fundamental sharpness limit',
      scenario: "Even a perfectly-made telescope lens cannot produce an infinitely sharp point of light from a distant star — instead it shows a small blurred disk.",
      explanation: 'This blur comes directly from diffraction at the telescope\'s circular aperture (opening) — ' +
        'a fundamental physical limit that no amount of manufacturing precision can eliminate, only reduce by using a larger aperture.',
    },
    practiceQuestions: [
      {
        id: 'diffraction-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Light of wavelength 600 nm passes through a single slit 0.1 mm wide. Find the angle of the first minimum, in degrees.',
        hints: ['sinθ = mλ/a, with m=1.'],
        correctAnswer: 0.344,
        tolerance: 0.01,
        explanation: 'sinθ = (600×10⁻⁹)/(0.1×10⁻³) = 0.006. θ = sin⁻¹(0.006) ≈ 0.344°.',
      },
    ],
    commonMistake:
      'Confusing single-slit diffraction minima (a sinθ=mλ) with double-slit interference maxima (Δy=λL/d) — ' +
      "they describe different patterns from different setups, and mixing up their formulas gives a nonsensical answer.",
    quickReview: [
      'a sinθ = mλ — dark bands (minima) from a single slit.',
      'Caused by wavelets from different parts of the slit canceling each other.',
      'Sets a fundamental resolution limit for any optical instrument.',
    ],
  },

  'diffraction-grating': {
    slug: 'diffraction-grating',
    title: 'The Diffraction Grating',
    difficulty: 'hard',
    simpleExplanation:
      'A diffraction grating is a surface with thousands of extremely closely-spaced parallel slits — light ' +
      "passing through produces very sharp, precisely-placed bright bands at angles given by d sinθ=mλ, one set for each wavelength present.",
    whyItMatters:
      "A grating's bright bands are far sharper and more precisely placed than a simple double slit's, making " +
      'it the instrument of choice for accurately measuring wavelengths — exactly the tool used inside a spectrometer.',
    formulaSlug: 'diffraction-grating-equation-formula',
    workedExample: {
      id: 'diffraction-grating-worked-1',
      title: 'Find a diffraction angle from a grating',
      problemStatement: 'A grating has 600 lines per millimetre. Find the second-order (m=2) diffraction angle for light of wavelength 550 nm.',
      steps: [
        { step: 1, instruction: 'Find the grating spacing d.', math: 'd = 1/(600 lines/mm) = 1/600000 m ≈ 1666.7 nm', explanation: 'd is the reciprocal of the line density.' },
        { step: 2, instruction: 'Apply the grating equation.', math: 'sinθ = mλ/d = (2)(550)/1666.7', explanation: 'Both λ and d are in nanometres, so the units cancel.' },
        { step: 3, instruction: 'Compute sinθ.', math: 'sinθ = 1100/1666.7 ≈ 0.66', explanation: 'A substantial fraction, since this is a second-order maximum.' },
        { step: 4, instruction: 'Find θ.', math: 'θ = sin⁻¹(0.66) ≈ 41.3°', explanation: 'A large diffraction angle for this order.' },
      ],
      finalAnswer: 'θ ≈ 41.3°.',
    },
    whyItWorks:
      'Light from thousands of grating lines all interferes together — a bright band survives only at the ' +
      'precise angles where every single pair of neighboring lines contributes light exactly in step (path ' +
      'difference of a whole number of wavelengths), making these bright bands extremely sharp and precisely located compared to a simple two-slit pattern.',
    realLifeExample: {
      title: "The rainbow pattern on the back of a CD or DVD",
      scenario: 'Tilting a CD or DVD under a light source reveals a rainbow-like pattern of colors reflecting off its surface.',
      explanation: "A CD's surface has thousands of closely-spaced microscopic data tracks that act as a " +
        "reflection diffraction grating — splitting white light into its component wavelengths at slightly different angles, just like d sinθ=mλ predicts.",
    },
    practiceQuestions: [
      {
        id: 'diffraction-grating-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A grating has 400 lines per millimetre. Find the first-order (m=1) diffraction angle for light of wavelength 450 nm.',
        hints: ['Find d=1/(400 lines/mm) first, then apply sinθ=mλ/d.'],
        correctAnswer: 10.37,
        tolerance: 0.2,
        explanation: 'd=1/400000 m=2500 nm. sinθ=450/2500=0.18. θ=sin⁻¹(0.18)≈10.37°.',
      },
    ],
    commonMistake:
      'Forgetting that higher orders (m=2, 3, …) can sometimes exceed sinθ=1 for a given wavelength and grating ' +
      'spacing — if mλ/d comes out greater than 1, that diffraction order simply does not exist for that wavelength.',
    quickReview: [
      'd sinθ = mλ.',
      "d = 1/(lines per unit length).",
      'Produces much sharper bright bands than a simple double slit.',
    ],
  },
};
