import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 7 — Trigonometric Functions and Their
// Graphs. Matches the textbook preface's description: graphs of the
// trig functions and their transformations, inverse trig functions and
// their graphs, and differentiation of trigonometric functions. Angles
// are in radians throughout, to match the differentiation section.
export const chapter7CConcepts: Record<string, Concept> = {
  'the-graph-of-sine': {
    slug: 'the-graph-of-sine',
    title: 'The Graph of Sine',
    difficulty: 'easy',
    simpleExplanation:
      'y = sin x is a smooth, periodic wave that oscillates between −1 and 1, passing through the ' +
      'origin, and repeating its exact shape every 2π (a full "cycle").',
    whyItMatters:
      'The sine graph is the archetypal periodic wave — the model for countless real oscillating ' +
      'phenomena, from sound waves to alternating current.',
    diagram: {
      id: 'sine-graph-diagram',
      title: 'The graph of y = sin x',
      altText: 'A smooth wave oscillating between -1 and 1, passing through the origin, repeating every 2 pi',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        min: -6.3,
        max: 6.3,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }, { x: Math.PI / 2, y: 1, label: '(π/2,1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'sine-function-properties-formula',
    workedExample: {
      id: 'sine-graph-worked-1',
      title: 'Use symmetry to evaluate sine at two related angles',
      problemStatement: 'Find sin(π/6) and sin(5π/6), and note what this tells us about the graph\'s symmetry.',
      steps: [
        { step: 1, instruction: 'Evaluate sin(π/6).', math: 'sin(π/6) = 0.5', explanation: 'A standard reference angle value.' },
        { step: 2, instruction: 'Evaluate sin(5π/6).', math: 'sin(5π/6) = sin(π−π/6) = sin(π/6) = 0.5', explanation: 'sin(π−θ) = sin(θ) — a reflection symmetry of the sine curve.' },
      ],
      finalAnswer: 'sin(π/6) = 0.5 and sin(5π/6) = 0.5 — the graph is symmetric about x=π/2 within [0,π].',
    },
    whyItWorks:
      'This symmetry comes directly from the general trig ratio definition on the unit circle: the ' +
      'points at angles θ and π−θ are mirror images across the vertical axis of the circle, and both ' +
      'have the exact same y-coordinate (sine value), even though their x-coordinates (cosine values) differ in sign.',
    realLifeExample: {
      title: 'Modeling a sound wave',
      scenario: 'A pure musical tone can be modeled as air pressure oscillating smoothly over time.',
      explanation: 'The sine graph is exactly the mathematical shape used to model this smooth, repeating oscillation.',
    },
    practiceQuestions: [
      {
        id: 'sine-graph-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find sin(π/2).',
        hints: ['This is the sine graph\'s maximum value.'],
        correctAnswer: 1,
        explanation: 'sin(π/2) = 1, the peak of the wave.',
      },
    ],
    commonMistake:
      'Assuming sine repeats every π instead of the correct 2π — that shorter period actually belongs to tangent.',
    quickReview: [
      'y=sinx: domain all reals, range [−1,1], period 2π.',
      'Passes through the origin, increasing there.',
      'sin(π−θ) = sin(θ) — a key symmetry.',
    ],
  },

  'the-graph-of-cosine': {
    slug: 'the-graph-of-cosine',
    title: 'The Graph of Cosine',
    difficulty: 'easy',
    simpleExplanation:
      'y = cos x is the same shape of periodic wave as sine, but shifted: it starts at its maximum ' +
      'value (1) when x=0, rather than starting at the origin.',
    whyItMatters:
      'Cosine and sine together describe every possible phase of periodic motion — cosine is simply ' +
      'sine "started a quarter-cycle early."',
    diagram: {
      id: 'cosine-graph-diagram',
      title: 'The graph of y = cos x',
      altText: 'A smooth wave oscillating between -1 and 1, starting at its maximum value of 1 when x=0, repeating every 2 pi',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.cos(x),
        min: -6.3,
        max: 6.3,
        markPoints: [{ x: 0, y: 1, label: '(0,1)' }, { x: Math.PI, y: -1, label: '(π,−1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'cosine-function-properties-formula',
    workedExample: {
      id: 'cosine-graph-worked-1',
      title: 'Evaluate cosine at its maximum and minimum',
      problemStatement: 'Find cos(0) and cos(π), and describe how the graph behaves between these two x-values.',
      steps: [
        { step: 1, instruction: 'Evaluate cos(0).', math: 'cos(0) = 1', explanation: 'This is the maximum value of cosine.' },
        { step: 2, instruction: 'Evaluate cos(π).', math: 'cos(π) = −1', explanation: 'This is the minimum value of cosine.' },
      ],
      finalAnswer: 'cos(0)=1 (maximum) and cos(π)=−1 (minimum) — the graph decreases smoothly from 1 to −1 over this half-period.',
    },
    whyItWorks:
      'At x=0, the point on the unit circle is exactly (1,0) — its x-coordinate (cosine) is at its ' +
      'largest possible value, 1. As x increases toward π, the point sweeps around to (−1,0), where the ' +
      'x-coordinate reaches its smallest possible value, −1.',
    realLifeExample: {
      title: 'Modeling a pendulum released from its highest point',
      scenario: 'A pendulum is pulled to one side and released from rest, then swings back and forth.',
      explanation: 'Since it starts at maximum displacement (not at the center), its motion over time is modeled by a cosine curve rather than a sine curve.',
    },
    practiceQuestions: [
      {
        id: 'cosine-graph-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find cos(π/3).',
        hints: ['This is a standard reference angle value.'],
        correctAnswer: 0.5,
        explanation: 'cos(π/3) = 0.5.',
      },
    ],
    commonMistake:
      'Confusing the starting value of sine (0, at the origin) with cosine (1, at its maximum) when x=0.',
    quickReview: [
      'y=cosx: domain all reals, range [−1,1], period 2π.',
      'Starts at its maximum value (1) when x=0.',
      'The same wave shape as sine, shifted by a quarter-cycle.',
    ],
  },

  'the-graph-of-tangent': {
    slug: 'the-graph-of-tangent',
    title: 'The Graph of Tangent',
    difficulty: 'medium',
    simpleExplanation:
      'y = tan x looks very different from sine and cosine — it has vertical asymptotes wherever cos x=0 ' +
      '(at x=π/2+kπ), is unbounded (covers all real numbers between each pair of asymptotes), and ' +
      'repeats every π instead of 2π.',
    whyItMatters:
      'Understanding tangent\'s asymptotic behavior is essential, since it behaves fundamentally ' +
      'differently from the bounded, smooth sine and cosine curves.',
    diagram: {
      id: 'tangent-graph-diagram',
      title: 'The graph of y = tan x',
      altText: 'A repeating curve with vertical asymptotes, shooting up toward positive infinity and down toward negative infinity near each asymptote',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.tan(x),
        min: -6.3,
        max: 6.3,
        markPoints: [{ x: Math.PI / 4, y: 1, label: '(π/4,1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'tangent-function-properties-formula',
    workedExample: {
      id: 'tangent-graph-worked-1',
      title: 'Evaluate tangent and explain its asymptotic behavior',
      problemStatement: 'Find tan(π/4), and explain what happens to the graph near x=π/2.',
      steps: [
        { step: 1, instruction: 'Evaluate tan(π/4).', math: 'tan(π/4) = 1', explanation: 'A standard reference angle value.' },
        { step: 2, instruction: 'Consider tan near x=π/2.', math: 'tan(x) = sin(x)/cos(x)', explanation: 'As x approaches π/2, cos(x) approaches 0.' },
        { step: 3, instruction: 'Conclude the behavior.', explanation: 'Dividing by a value approaching 0 sends tan(x) toward ±∞ — a vertical asymptote.' },
      ],
      finalAnswer: 'tan(π/4)=1; the graph has a vertical asymptote at x=π/2 (and at every π/2+kπ).',
    },
    whyItWorks:
      'tan(x) is literally defined as sin(x)/cos(x) — wherever the denominator cos(x) hits exactly zero, ' +
      'the ratio is undefined, and the graph shoots off toward positive or negative infinity on either side.',
    realLifeExample: {
      title: 'Modeling the length of a shadow as the sun sets',
      scenario: 'The length of a shadow cast by a vertical pole depends on the tangent of the sun\'s angle above the horizon.',
      explanation: 'As the sun approaches the horizon (angle approaching 0° from a different reference), the tangent-based shadow length can grow without bound — a real-world instance of tangent\'s unbounded behavior.',
    },
    practiceQuestions: [
      {
        id: 'tangent-graph-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find tan(0).',
        hints: ['tan(0) = sin(0)/cos(0).'],
        correctAnswer: 0,
        explanation: '0/1 = 0.',
      },
    ],
    commonMistake:
      'Assuming tangent has the same 2π period as sine and cosine — tangent actually repeats every π, half as often.',
    quickReview: [
      'y=tanx: undefined at π/2+kπ, range all reals, period π.',
      'tan(x) = sin(x)/cos(x); asymptotes occur where cos(x)=0.',
      'Unlike sine and cosine, tangent is unbounded.',
    ],
  },

  'graphs-of-cosecant-secant-and-cotangent': {
    slug: 'graphs-of-cosecant-secant-and-cotangent',
    title: 'Graphs of Cosecant, Secant, and Cotangent',
    difficulty: 'medium',
    simpleExplanation:
      'The remaining three trigonometric functions are defined as reciprocals of the first three: ' +
      'csc x = 1/sin x, sec x = 1/cos x, and cot x = 1/tan x. Each has its own vertical asymptotes, ' +
      'occurring wherever its reciprocal partner equals zero.',
    whyItMatters:
      'These reciprocal functions round out the full family of six trigonometric functions, each ' +
      'useful in different problem contexts.',
    formulaSlug: 'reciprocal-trig-functions-formula',
    workedExample: {
      id: 'reciprocal-trig-worked-1',
      title: 'Evaluate a reciprocal trig function and explain an undefined case',
      problemStatement: 'Find sec(0), and explain why csc(0) is undefined.',
      steps: [
        { step: 1, instruction: 'Apply the reciprocal definition of secant.', math: 'sec(0) = 1/cos(0)', explanation: 'sec is the reciprocal of cos.' },
        { step: 2, instruction: 'Evaluate.', math: '1/1 = 1', explanation: 'cos(0)=1.' },
        { step: 3, instruction: 'Consider csc(0).', math: 'csc(0) = 1/sin(0) = 1/0', explanation: 'sin(0)=0, and division by zero is undefined.' },
      ],
      finalAnswer: 'sec(0)=1; csc(0) is undefined since sin(0)=0.',
    },
    whyItWorks:
      'Since each of these functions is DEFINED as a reciprocal (1 divided by another trig function), ' +
      'it is undefined precisely wherever that other function equals zero — exactly like 1/0 is always undefined.',
    realLifeExample: {
      title: 'Optics and lens calculations',
      scenario: 'Certain optical formulas involving angles of incidence are naturally expressed using secant or cosecant rather than cosine or sine directly.',
      explanation: 'Working with the reciprocal functions can simplify these particular optical equations.',
    },
    practiceQuestions: [
      {
        id: 'reciprocal-trig-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find cot(π/4).',
        hints: ['cot(x) = cos(x)/sin(x).', 'cos(π/4) = sin(π/4).'],
        correctAnswer: 1,
        explanation: 'cos(π/4) and sin(π/4) are both √2/2, so their ratio is 1.',
      },
    ],
    commonMistake:
      'Assuming a reciprocal function is undefined at the same x-values as its partner — e.g. csc is ' +
      'undefined where SIN is zero, not where sin is itself undefined (sine is never undefined).',
    quickReview: [
      'csc x = 1/sin x,  sec x = 1/cos x,  cot x = 1/tan x.',
      'Each is undefined exactly where its reciprocal partner equals zero.',
      'These round out the full family of six trigonometric functions.',
    ],
  },

  'amplitude-period-and-phase-shift': {
    slug: 'amplitude-period-and-phase-shift',
    title: 'Amplitude, Period, and Phase Shift',
    difficulty: 'medium',
    simpleExplanation:
      'A transformed sine wave, y = A sin(B(x−C)) + D, has amplitude |A| (how tall the wave is), period ' +
      '2π/B (how often it repeats), phase shift C (how far it is shifted horizontally), and vertical shift D.',
    whyItMatters:
      'Real periodic phenomena rarely match the basic y=sinx exactly — this general form describes any ' +
      'stretched, compressed, or shifted wave.',
    diagram: {
      id: 'amplitude-period-phase-diagram',
      title: 'y=sin(x) compared with y=2sin(x−1)',
      altText: 'Two overlapping wave curves: the basic sine curve, and a taller, horizontally shifted version of it',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        fn2: (x: number) => 2 * Math.sin(x - 1),
        min: -6.3,
        max: 6.3,
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'general-sine-transformation-formula',
    workedExample: {
      id: 'amplitude-period-phase-worked-1',
      title: 'Identify amplitude, period, and phase shift',
      problemStatement: 'Find the amplitude, period, and phase shift of y = 3sin(2(x−π/4)).',
      steps: [
        { step: 1, instruction: 'Identify A, B, and C.', math: 'A=3, B=2, C=π/4', explanation: 'Match the equation to y=A sin(B(x−C))+D.' },
        { step: 2, instruction: 'Find the amplitude.', math: '|A| = 3', explanation: 'The absolute value of A.' },
        { step: 3, instruction: 'Find the period.', math: '2π/B = 2π/2 = π', explanation: 'Divide 2π by B.' },
        { step: 4, instruction: 'State the phase shift.', math: 'C = π/4 (to the right)', explanation: 'Positive C shifts the graph right.' },
      ],
      finalAnswer: 'Amplitude 3, period π, phase shift π/4 to the right.',
    },
    whyItWorks:
      'Multiplying sin(x) by A stretches its output (height) by a factor of A; replacing x with B(x−C) ' +
      'compresses the input by a factor of B (shrinking the period by that same factor) and shifts the ' +
      'whole graph right by C, since the wave now reaches its "starting point" C units later.',
    realLifeExample: {
      title: 'Modeling seasonal temperature variation',
      scenario: 'Average monthly temperature rises and falls once per year, peaking in summer rather than at the start of the calendar year.',
      explanation: 'A phase-shifted sine curve models this real cycle — the amplitude captures the temperature swing\'s size, the period is fixed at 12 months, and the phase shift aligns the peak with the actual warmest month.',
    },
    practiceQuestions: [
      {
        id: 'amplitude-period-phase-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the amplitude of y = 5sin(x).',
        hints: ['Amplitude = |A|.'],
        correctAnswer: 5,
        explanation: 'A=5, so amplitude = 5.',
      },
    ],
    commonMistake:
      'Forgetting to divide 2π by B to find the period — using B itself as the period instead.',
    quickReview: [
      'y = A sin(B(x−C)) + D.',
      'Amplitude = |A|; Period = 2π/B; Phase shift = C; Vertical shift = D.',
      'Larger B compresses the graph (shorter period); larger A stretches it taller.',
    ],
  },

  'reflections-and-vertical-shifts-of-trig-graphs': {
    slug: 'reflections-and-vertical-shifts-of-trig-graphs',
    title: 'Reflections and Vertical Shifts of Trigonometric Graphs',
    difficulty: 'medium',
    simpleExplanation:
      'A negative sign in front of a trig function (like y=−sinx) reflects its graph over the x-axis, ' +
      'flipping its maximum and minimum. Adding a constant D (like y=sinx+D) shifts the entire graph ' +
      'straight up (or down, if D is negative) by D units.',
    whyItMatters:
      'These two transformations, combined with amplitude/period/phase shift, complete the full ' +
      'toolkit for describing any transformed trigonometric graph.',
    diagram: {
      id: 'reflection-vertical-shift-diagram',
      title: 'y=sin(x) compared with y=−sin(x)+1',
      altText: 'Two overlapping wave curves: the basic sine curve, and its reflection over the x-axis shifted up by 1 unit',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        fn2: (x: number) => -Math.sin(x) + 1,
        min: -6.3,
        max: 6.3,
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'reflection-vertical-shift-formula',
    workedExample: {
      id: 'reflection-vertical-shift-worked-1',
      title: 'Describe a reflected and shifted trig graph',
      problemStatement: 'Describe how the graph of y=−cos(x)+2 differs from y=cos(x).',
      steps: [
        { step: 1, instruction: 'Identify the reflection.', math: '−cos(x)', explanation: 'The negative sign reflects the graph over the x-axis, flipping max and min.' },
        { step: 2, instruction: 'Identify the vertical shift.', math: '+2', explanation: 'Shifts the entire (already reflected) graph up by 2 units.' },
        { step: 3, instruction: 'Find the new range.', math: '[−1,1] → [1,3]', explanation: 'Original range [−1,1] shifted up by 2.' },
      ],
      finalAnswer: 'y=−cos(x)+2 is cos(x) reflected over the x-axis, then shifted up 2 units, giving range [1,3].',
    },
    whyItWorks:
      'Negating every output value of a function flips its graph across the x-axis (a point at height h ' +
      'moves to height −h); adding a constant to every output simply raises (or lowers) the entire ' +
      'graph rigidly by that same amount.',
    realLifeExample: {
      title: 'Modeling water depth with a non-zero baseline',
      scenario: 'The depth of water at a tidal dock oscillates around some baseline depth, never actually reaching zero.',
      explanation: 'A vertical shift (D) accounts for this non-zero baseline depth, while a reflection may be needed depending on whether high or low tide corresponds to the wave\'s starting behavior.',
    },
    practiceQuestions: [
      {
        id: 'reflection-vertical-shift-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the maximum value of y=−sin(x)+4.',
        hints: ['−sin(x) ranges from −1 to 1.'],
        correctAnswer: 5,
        explanation: '−sin(x) has max value 1, so −sin(x)+4 has max value 1+4=5.',
      },
    ],
    commonMistake:
      'Losing track of the order transformations apply in for more complex combined expressions — ' +
      'being explicit about "reflect first, then shift" (matching the order the expression is written) avoids confusion.',
    quickReview: [
      'y=−sinx reflects the graph over the x-axis.',
      'y=sinx+D shifts the graph vertically by D.',
      'Both can combine with amplitude, period, and phase shift for a fully general transformation.',
    ],
  },

  'the-inverse-sine-function-and-its-graph': {
    slug: 'the-inverse-sine-function-and-its-graph',
    title: 'The Inverse Sine Function and Its Graph',
    difficulty: 'medium',
    simpleExplanation:
      'arcsin(x) (also written sin⁻¹x) gives the ONE angle, restricted to the range [−π/2, π/2], whose ' +
      'sine equals x. Its domain is limited to [−1,1], since no angle has a sine outside that range.',
    whyItMatters:
      'Sine is not one-to-one over all real numbers (many angles share the same sine value) — ' +
      'restricting the range is what makes arcsin an actual function, with exactly one output per input.',
    diagram: {
      id: 'inverse-sine-diagram',
      title: 'The graph of y = arcsin(x)',
      altText: 'A curve rising from bottom-left to top-right, defined only between x=-1 and x=1, with output values between -pi/2 and pi/2',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.asin(x),
        min: -2,
        max: 2,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }, { x: 1, y: Math.PI / 2, label: '(1,π/2)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'inverse-sine-formula',
    workedExample: {
      id: 'inverse-sine-worked-1',
      title: 'Evaluate the inverse sine function',
      problemStatement: 'Find arcsin(0.5).',
      steps: [
        { step: 1, instruction: 'Recall a standard sine value.', math: 'sin(π/6) = 0.5', explanation: 'π/6 is a known reference angle.' },
        { step: 2, instruction: 'Check that π/6 is within the restricted range.', math: '−π/2 ≤ π/6 ≤ π/2', explanation: 'π/6 is well within [−π/2,π/2].' },
        { step: 3, instruction: 'State the result.', math: 'arcsin(0.5) = π/6', explanation: 'π/6 is the unique valid answer.' },
      ],
      finalAnswer: 'arcsin(0.5) = π/6 (30°).',
    },
    whyItWorks:
      'Although infinitely many angles have a sine of 0.5 (like π/6, 5π/6, π/6+2π, and so on), the ' +
      'restricted range [−π/2,π/2] contains exactly ONE of them — π/6 — making arcsin well-defined as a proper function.',
    realLifeExample: {
      title: 'Finding an angle from a known ratio in navigation',
      scenario: 'A navigator knows the ratio of a ship\'s vertical displacement to its total distance traveled (essentially a sine ratio) and needs the actual angle of travel.',
      explanation: 'arcsin recovers this angle directly from the known ratio.',
    },
    practiceQuestions: [
      {
        id: 'inverse-sine-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find arcsin(1), in degrees.',
        hints: ['What angle in [−90°,90°] has a sine of exactly 1?'],
        correctAnswer: 90,
        explanation: 'sin(90°)=1, and 90° is within the valid range.',
      },
    ],
    commonMistake:
      'Giving an answer outside the restricted range [−π/2,π/2] — even though many angles share the ' +
      'same sine value, arcsin always returns the one within this specific range.',
    quickReview: [
      'arcsin(x): domain [−1,1], range [−π/2, π/2].',
      'Gives the ONE angle (within the restricted range) whose sine is x.',
      'The restricted range is what makes arcsin a genuine function.',
    ],
  },

  'the-inverse-cosine-and-inverse-tangent-functions': {
    slug: 'the-inverse-cosine-and-inverse-tangent-functions',
    title: 'The Inverse Cosine and Inverse Tangent Functions',
    difficulty: 'medium',
    simpleExplanation:
      'arccos(x) gives the one angle in the range [0,π] whose cosine is x (domain [−1,1]). arctan(x) ' +
      'gives the one angle in the range (−π/2,π/2) whose tangent is x — and since tangent covers all ' +
      'real numbers, arctan\'s domain is all real numbers too.',
    whyItMatters:
      'Each inverse trig function needs its OWN specific restricted range to be well-defined — arccos\'s ' +
      'range differs from arcsin\'s, since cosine and sine repeat their values in different patterns.',
    diagram: {
      id: 'inverse-tangent-diagram',
      title: 'The graph of y = arctan(x)',
      altText: 'An S-shaped curve defined for all real x, leveling off toward horizontal asymptotes at y = pi/2 and y = -pi/2',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.atan(x),
        min: -6,
        max: 6,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }, { x: 1, y: Math.PI / 4, label: '(1,π/4)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'inverse-cosine-tangent-formula',
    workedExample: {
      id: 'inverse-cosine-tangent-worked-1',
      title: 'Evaluate inverse cosine and inverse tangent',
      problemStatement: 'Find arccos(0.5) and arctan(1), both in degrees.',
      steps: [
        { step: 1, instruction: 'Evaluate arccos(0.5).', math: 'cos(60°) = 0.5,   60° is within [0°,180°]', explanation: '60° is the unique valid answer.' },
        { step: 2, instruction: 'Evaluate arctan(1).', math: 'tan(45°) = 1,   45° is within (−90°,90°)', explanation: '45° is the unique valid answer.' },
      ],
      finalAnswer: 'arccos(0.5) = 60°; arctan(1) = 45°.',
    },
    whyItWorks:
      'Just as with arcsin, each of these functions needs a restricted range containing exactly one ' +
      'angle for every valid input — arccos uses [0,π] (matching cosine\'s natural decreasing pattern ' +
      'there) and arctan uses (−π/2,π/2) (matching one full branch of tangent\'s repeating pattern).',
    realLifeExample: {
      title: 'Finding a heading angle from velocity components',
      scenario: 'A navigator knows a ship\'s northward and eastward speed components and needs the actual compass heading angle.',
      explanation: 'arctan of the ratio of these two components gives the heading angle directly.',
    },
    practiceQuestions: [
      {
        id: 'inverse-cosine-tangent-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find arccos(0) in degrees.',
        hints: ['What angle in [0°,180°] has a cosine of exactly 0?'],
        correctAnswer: 90,
        explanation: 'cos(90°)=0, and 90° is within the valid range.',
      },
    ],
    commonMistake:
      'Confusing arccos\'s range ([0°,180°]) with arcsin\'s range ([−90°,90°]) — each inverse trig ' +
      'function has its own specific restricted range.',
    quickReview: [
      'arccos(x): domain [−1,1], range [0,π].',
      'arctan(x): domain all reals, range (−π/2,π/2).',
      'Each inverse function has a DIFFERENT restricted range, matched to its own function\'s pattern.',
    ],
  },

  'derivatives-of-sine-and-cosine': {
    slug: 'derivatives-of-sine-and-cosine',
    title: 'Derivatives of Sine and Cosine',
    difficulty: 'medium',
    simpleExplanation:
      'The derivative of sine is cosine, and the derivative of cosine is negative sine: ' +
      'd/dx[sinx]=cosx and d/dx[cosx]=−sinx.',
    whyItMatters:
      'These two derivatives are the foundation for differentiating any expression involving ' +
      'trigonometric functions, including all the other trig derivatives in this chapter.',
    diagram: {
      id: 'sine-derivative-diagram',
      title: 'The tangent line to y=sin(x) at the origin, with slope 1',
      altText: 'The sine curve with a straight tangent line touching it at the origin, matching the curve\'s slope there',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        fn2: (x: number) => x,
        min: -3,
        max: 3,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'derivative-of-sine-cosine-formula',
    workedExample: {
      id: 'sine-cosine-derivative-worked-1',
      title: 'Differentiate an expression with sine and cosine',
      problemStatement: 'Find the derivative of f(x) = 3sinx − 2cosx.',
      steps: [
        { step: 1, instruction: 'Differentiate each term separately.', explanation: 'Apply the sum/difference rule.' },
        { step: 2, instruction: 'Differentiate 3sinx.', math: 'd/dx[3sinx] = 3cosx', explanation: 'Using d/dx[sinx]=cosx.' },
        { step: 3, instruction: 'Differentiate −2cosx.', math: 'd/dx[−2cosx] = −2(−sinx) = 2sinx', explanation: 'Using d/dx[cosx]=−sinx.' },
        { step: 4, instruction: 'Combine.', math: "f'(x) = 3cosx + 2sinx", explanation: 'Add the two results.' },
      ],
      finalAnswer: "f'(x) = 3cos x + 2sin x.",
    },
    whyItWorks:
      'Near x=0, the sine curve is essentially indistinguishable from the straight line y=x (its own ' +
      'tangent line there) — this matches d/dx[sinx]=cosx, since cos(0)=1, giving exactly slope 1 at ' +
      'that point, consistent with the graph shown.',
    realLifeExample: {
      title: 'Finding the velocity of an oscillating object',
      scenario: 'An object\'s position over time follows a sine curve (simple harmonic motion), and its velocity is needed at a given instant.',
      explanation: 'Velocity is the derivative of position — differentiating the sine position function using d/dx[sinx]=cosx gives the velocity function directly.',
    },
    practiceQuestions: [
      {
        id: 'sine-cosine-derivative-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "Find f'(0) for f(x)=sinx+cosx.",
        hints: ["f'(x) = cosx − sinx."],
        correctAnswer: 1,
        explanation: "f'(x)=cosx−sinx. f'(0)=cos0−sin0=1−0=1.",
      },
    ],
    commonMistake:
      'Forgetting the negative sign in the derivative of cosine — d/dx[cosx]=−sinx, not +sinx.',
    quickReview: [
      'd/dx[sinx] = cosx.',
      'd/dx[cosx] = −sinx (note the negative sign).',
      'These are the foundation for all other trig derivatives.',
    ],
  },

  'derivatives-of-tangent-and-other-trig-functions': {
    slug: 'derivatives-of-tangent-and-other-trig-functions',
    title: 'Derivatives of Tangent and Other Trigonometric Functions',
    difficulty: 'hard',
    simpleExplanation:
      'The remaining four trigonometric functions have their own derivative formulas: ' +
      'd/dx[tanx]=sec²x, d/dx[cotx]=−csc²x, d/dx[secx]=secx·tanx, and d/dx[cscx]=−cscx·cotx.',
    whyItMatters:
      'These complete the full set of trigonometric derivatives, all of which can actually be derived ' +
      'from the sine and cosine derivatives using the Quotient Rule.',
    formulaSlug: 'derivative-of-tangent-and-others-formula',
    workedExample: {
      id: 'tangent-derivative-worked-1',
      title: 'Evaluate the derivative of tangent at a point',
      problemStatement: 'Find the derivative of f(x)=tanx at x=0.',
      steps: [
        { step: 1, instruction: 'Apply the derivative formula for tangent.', math: "f'(x) = sec²x", explanation: 'The standard derivative rule.' },
        { step: 2, instruction: 'Substitute x=0.', math: "f'(0) = sec²(0) = (1/cos0)²", explanation: 'sec is the reciprocal of cos.' },
        { step: 3, instruction: 'Compute.', math: '(1/1)² = 1', explanation: 'cos(0)=1.' },
      ],
      finalAnswer: "f'(0) = 1.",
    },
    whyItWorks:
      'tan x = sinx/cosx, so applying the Quotient Rule gives (cosx·cosx − sinx·(−sinx))/cos²x = ' +
      '(cos²x+sin²x)/cos²x = 1/cos²x (using the Pythagorean identity) = sec²x — exactly the stated ' +
      'derivative, derived directly from the sine and cosine derivatives.',
    realLifeExample: {
      title: 'Analyzing the rate of change of a shadow\'s length',
      scenario: 'The length of a shadow, related to the tangent of the sun\'s elevation angle, changes at a certain rate as the sun moves across the sky.',
      explanation: 'The derivative of tangent gives exactly this rate of change with respect to the changing angle.',
    },
    practiceQuestions: [
      {
        id: 'tangent-derivative-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the derivative of f(x)=sec(x) at x=0.',
        hints: ["f'(x) = secx·tanx."],
        correctAnswer: 0,
        explanation: "f'(0) = sec(0)·tan(0) = 1×0 = 0.",
      },
    ],
    commonMistake:
      'Forgetting the negative signs in the derivatives of cotangent and cosecant — only tangent and ' +
      'secant have positive derivative formulas among these four.',
    quickReview: [
      'd/dx[tanx]=sec²x  and  d/dx[secx]=secx·tanx (both positive).',
      'd/dx[cotx]=−csc²x  and  d/dx[cscx]=−cscx·cotx (both negative).',
      'All four can be derived from the sine and cosine derivatives via the Quotient Rule.',
    ],
  },
};
