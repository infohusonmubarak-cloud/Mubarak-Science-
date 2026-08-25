import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 10 — Trigonometry (an advanced
// extension of Level A trigonometry). Matches sections 10.1-10.8 of the
// textbook exactly.
export const chapter10BConcepts: Record<string, Concept> = {
  'extending-trigonometric-ratios-to-any-angle': {
    slug: 'extending-trigonometric-ratios-to-any-angle',
    title: 'Extending Trigonometric Ratios to Any Angle',
    difficulty: 'medium',
    simpleExplanation:
      'Right-triangle trigonometry only covers angles between 0° and 90°. To handle any angle, place ' +
      'its vertex at the origin with one ray along the positive x-axis, and take any point (x, y) on ' +
      'the angle\'s other ray at distance r from the origin. Then define sin θ = y/r, cos θ = x/r, and ' +
      'tan θ = y/x — this works for angles of any size, in any quadrant.',
    whyItMatters:
      'This single generalization is what makes trigonometry usable beyond right triangles — for ' +
      'rotations, oscillations, and any angle greater than 90° or less than 0°.',
    diagram: {
      id: 'general-trig-ratio-diagram',
      title: 'Defining trig ratios for a point P(−3, 4) at distance r from the origin',
      altText: 'A point P at coordinates (-3, 4) in the second quadrant, with a radius line from the origin to P, and dashed lines showing its x and y components',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: -3, y: 4, label: 'P(−3, 4)', labelDx: -16, labelDy: 8 },
        ],
        segments: [
          { from: [0, 0], to: [2, 0], dashed: true },
          { from: [0, 0], to: [-3, 4], arrow: true, label: 'r' },
          { from: [0, 0], to: [-3, 0], dashed: true, label: 'x' },
          { from: [-3, 0], to: [-3, 4], dashed: true, label: 'y' },
        ],
        angleMarks: [{ at: [0, 0], from: [2, 0], to: [-3, 4], label: 'θ', radius: 1.5 }],
      },
    },
    formulaSlug: 'general-trig-ratio-definition',
    workedExample: {
      id: 'general-trig-ratio-worked-1',
      title: 'Find trigonometric ratios from a point on the terminal ray',
      problemStatement: 'A point P(−3, 4) lies on the terminal ray of an angle θ, measured from the origin. Find r, then sin θ, cos θ, and tan θ.',
      steps: [
        { step: 1, instruction: 'Find r using the Pythagorean theorem.', math: 'r = √((−3)² + 4²) = √25 = 5', explanation: 'r is always the positive distance from the origin to the point.' },
        { step: 2, instruction: 'Find sin θ.', math: 'sin θ = y/r = 4/5 = 0.8', explanation: 'Divide the y-coordinate by r.' },
        { step: 3, instruction: 'Find cos θ.', math: 'cos θ = x/r = −3/5 = −0.6', explanation: 'Divide the x-coordinate by r.' },
        { step: 4, instruction: 'Find tan θ.', math: 'tan θ = y/x = 4/(−3) = −4/3', explanation: 'Divide the y-coordinate by the x-coordinate.' },
      ],
      finalAnswer: 'r = 5, sin θ = 0.8, cos θ = −0.6, tan θ = −4/3.',
    },
    whyItWorks:
      'For an acute angle in a right triangle, this definition matches the familiar opposite/hypotenuse ' +
      'and adjacent/hypotenuse ratios exactly — x and y are just signed versions of the triangle\'s legs, ' +
      'and r is the hypotenuse. Allowing x and y to be negative (depending on the quadrant) is what ' +
      'extends the same idea to angles beyond 90°, without needing a separate definition for each case.',
    realLifeExample: {
      title: 'Analyzing a rotating Ferris wheel car',
      scenario: 'An engineer tracks a Ferris wheel car\'s height as it rotates all the way around, well past the 90° mark.',
      explanation: 'Right-triangle trigonometry alone cannot describe the car\'s position past a quarter-turn — the general (x, y, r) definition is required to track it through the full rotation.',
    },
    practiceQuestions: [
      {
        id: 'general-trig-ratio-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A point P(5, −12) lies on the terminal ray of angle θ. Find r.',
        hints: ['r = √(x² + y²).'],
        correctAnswer: 13,
        explanation: '√(25 + 144) = √169 = 13.',
      },
    ],
    commonMistake:
      'Treating x and y as always positive, the way they are in basic right-triangle trigonometry — in ' +
      'this general definition, x and/or y can be negative depending on the quadrant, which is exactly ' +
      'what makes the ratios correctly negative or positive.',
    quickReview: [
      'sin θ = y/r, cos θ = x/r, tan θ = y/x, for any point (x, y) at distance r from the origin.',
      'r is always positive; x and y can be positive or negative depending on the quadrant.',
      'This generalizes right-triangle trig to angles of any size.',
    ],
  },

  'the-quadrants-and-signs-of-trigonometric-ratios': {
    slug: 'the-quadrants-and-signs-of-trigonometric-ratios',
    title: 'The Quadrants and Signs of Trigonometric Ratios',
    difficulty: 'medium',
    simpleExplanation:
      'Since x and y can each be positive or negative depending on the quadrant, so can sin θ, cos θ, ' +
      'and tan θ. A quick rule (often remembered as "All Students Take Calculus," for quadrants I-IV) ' +
      'says: Quadrant I — all three positive; II — only sine positive; III — only tangent positive; ' +
      'IV — only cosine positive.',
    whyItMatters:
      'Knowing the correct sign instantly, without recalculating from scratch, prevents a very common ' +
      'source of errors when evaluating trigonometric ratios for angles outside Quadrant I.',
    diagram: {
      id: 'quadrant-sign-diagram',
      title: 'The ASTC rule across the four quadrants',
      altText: 'A coordinate plane divided into four quadrants, each labelled with which trigonometric ratio is positive there: All, Sin, Tan, Cos',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 3, y: 3, label: 'I: All +', labelDx: 0, labelDy: -14 },
          { x: -3, y: 3, label: 'II: Sin +', labelDx: 0, labelDy: -14 },
          { x: -3, y: -3, label: 'III: Tan +', labelDx: 0, labelDy: 14 },
          { x: 3, y: -3, label: 'IV: Cos +', labelDx: 0, labelDy: 14 },
        ],
        segments: [
          { from: [-4, 0], to: [4, 0] },
          { from: [0, -4], to: [0, 4] },
        ],
      },
    },
    formulaSlug: 'quadrant-sign-rule',
    workedExample: {
      id: 'quadrant-sign-worked-1',
      title: 'Identify a quadrant from two ratio signs',
      problemStatement: 'In which quadrant is cos θ negative but sin θ positive?',
      steps: [
        { step: 1, instruction: 'Recall the ASTC rule for each quadrant.', explanation: 'I: all +. II: sin + (cos −, tan −). III: tan + (sin −, cos −). IV: cos + (sin −, tan −).' },
        { step: 2, instruction: 'Match the given signs.', explanation: 'cos negative AND sin positive matches Quadrant II exactly.' },
      ],
      finalAnswer: 'Quadrant II.',
    },
    whyItWorks:
      'The sign of each ratio comes directly from the signs of x and y in that quadrant (sin θ=y/r and ' +
      'r is always positive, so sin θ\'s sign matches y\'s; similarly cos θ\'s sign matches x\'s; and ' +
      'tan θ=y/x is positive exactly when x and y share the same sign).',
    realLifeExample: {
      title: 'Reading the phase of an oscillating signal',
      scenario: 'An engineer analyzing an alternating current signal needs to know quickly whether a component is currently positive or negative, based only on its phase angle.',
      explanation: 'The ASTC rule gives the sign instantly from the phase angle\'s quadrant, without recomputing the full trigonometric value.',
    },
    practiceQuestions: [
      {
        id: 'quadrant-sign-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'If tan θ is positive and cos θ is negative, in which quadrant does θ lie?',
        options: [
          { id: 'a', text: 'Quadrant I' },
          { id: 'b', text: 'Quadrant II' },
          { id: 'c', text: 'Quadrant III' },
          { id: 'd', text: 'Quadrant IV' },
        ],
        correctOptionId: 'c',
        hints: ['tan+ happens in QI and QIII; cos− rules out QI.'],
        explanation: 'tan+ occurs in QI and QIII; cos− only in QII and QIII. Both conditions hold only in Quadrant III.',
      },
    ],
    commonMistake:
      'Assuming tan follows some separate, independent rule — tan θ = sin θ/cos θ, so its sign is ' +
      'always determined by the signs of sin θ and cos θ together (e.g. in QIII both are negative, so ' +
      'their quotient, tan, is positive).',
    quickReview: [
      'ASTC: Quadrant I all positive; II sin positive; III tan positive; IV cos positive.',
      'Each ratio\'s sign follows directly from the signs of x and y in that quadrant.',
      'tan θ\'s sign is the combined effect of sin θ\'s and cos θ\'s signs.',
    ],
  },

  'negative-angles-and-their-trigonometric-ratios': {
    slug: 'negative-angles-and-their-trigonometric-ratios',
    title: 'Negative Angles and Their Trigonometric Ratios',
    difficulty: 'medium',
    simpleExplanation:
      'A negative angle is simply measured clockwise instead of the usual counterclockwise direction. ' +
      'Reflecting an angle θ to −θ flips the sign of y (its sine) but leaves x (its cosine) unchanged, ' +
      'giving: sin(−θ) = −sin θ, cos(−θ) = cos θ, and tan(−θ) = −tan θ.',
    whyItMatters:
      'Negative angles come up constantly in navigation, rotation, and later calculus — being able to ' +
      'relate them straight back to the equivalent positive angle avoids re-deriving everything from scratch.',
    diagram: {
      id: 'negative-angle-diagram',
      title: 'θ = 60° and −θ = −60°, mirrored across the x-axis',
      altText: 'Two rays from the origin, one at 60 degrees above the x-axis and one at 60 degrees below it, mirror images of each other',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: 0 },
          { x: 0.5, y: 0.87, label: 'θ = 60°', labelDx: 12, labelDy: -6 },
          { x: 0.5, y: -0.87, label: '−θ = −60°', labelDx: 12, labelDy: 6 },
        ],
        segments: [
          { from: [0, 0], to: [1.2, 0], dashed: true },
          { from: [0, 0], to: [0.5, 0.87], arrow: true },
          { from: [0, 0], to: [0.5, -0.87], arrow: true },
        ],
        angleMarks: [
          { at: [0, 0], from: [1.2, 0], to: [0.5, 0.87], label: 'θ', radius: 0.7 },
          { at: [0, 0], from: [1.2, 0], to: [0.5, -0.87], label: '−θ', radius: 1.0 },
        ],
      },
    },
    formulaSlug: 'negative-angle-identities',
    workedExample: {
      id: 'negative-angle-worked-1',
      title: 'Evaluate a negative angle\'s sine',
      problemStatement: 'Given sin 40° ≈ 0.643, find sin(−40°).',
      steps: [
        { step: 1, instruction: 'Apply the negative angle identity.', math: 'sin(−θ) = −sin θ', explanation: 'Sine flips sign for a negative angle.' },
        { step: 2, instruction: 'Substitute θ = 40°.', math: 'sin(−40°) = −sin(40°) = −0.643', explanation: 'Use the given value of sin 40°.' },
      ],
      finalAnswer: 'sin(−40°) ≈ −0.643.',
    },
    whyItWorks:
      'Reflecting a point (x, y) across the x-axis (which is exactly what measuring the angle clockwise ' +
      'instead of counterclockwise does) sends y to −y while leaving x unchanged. Since sin θ=y/r and ' +
      'cos θ=x/r, this directly explains why sine flips sign while cosine does not; tan θ=y/x then also ' +
      'flips sign, since only its numerator changes sign.',
    realLifeExample: {
      title: 'A ship turning left versus right from its heading',
      scenario: 'A ship turns 40° clockwise ("right") from its current heading, versus 40° counterclockwise ("left").',
      explanation: 'These two turns correspond to angles θ and −θ, and the negative angle identities let a navigator relate the resulting readings directly, without separately recalculating each one.',
    },
    practiceQuestions: [
      {
        id: 'negative-angle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'If cos 25° ≈ 0.906, find cos(−25°).',
        hints: ['Cosine does NOT change sign for a negative angle.'],
        correctAnswer: 0.906,
        tolerance: 0.01,
        explanation: 'cos(−θ) = cos θ, so cos(−25°) = cos(25°) ≈ 0.906.',
      },
    ],
    commonMistake:
      'Assuming cos(−θ) also flips sign, like sine and tangent do — only sine and tangent flip sign for ' +
      'a negative angle; cosine stays exactly the same.',
    quickReview: [
      'sin(−θ) = −sin θ,  cos(−θ) = cos θ,  tan(−θ) = −tan θ.',
      'A negative angle is measured clockwise instead of counterclockwise.',
      'Reflecting across the x-axis flips y (and hence sin, tan) but not x (cos).',
    ],
  },

  'the-basic-acute-angle': {
    slug: 'the-basic-acute-angle',
    title: 'The Basic Acute Angle',
    difficulty: 'medium',
    simpleExplanation:
      'The basic (or reference) acute angle α is the acute angle formed between an angle θ\'s terminal ' +
      'ray and the x-axis. It lets you evaluate a trigonometric ratio for ANY angle using a familiar ' +
      'acute-angle value, as long as you also apply the correct quadrant sign (ASTC).',
    whyItMatters:
      'This is the practical technique that ties everything in this chapter together — reducing any ' +
      'angle\'s trig ratio to "a known acute-angle value, with a sign attached."',
    diagram: {
      id: 'basic-acute-angle-diagram',
      title: 'θ = 150° has basic acute angle α = 30°',
      altText: 'An angle of 150 degrees drawn from the positive x-axis, with the smaller 30-degree basic acute angle shown between the terminal ray and the negative x-axis',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -8 },
          { x: -0.87, y: 0.5, label: 'P', labelDx: -14, labelDy: 6 },
        ],
        segments: [
          { from: [0, 0], to: [1, 0], dashed: true },
          { from: [0, 0], to: [-1, 0], dashed: true },
          { from: [0, 0], to: [-0.87, 0.5], arrow: true },
        ],
        angleMarks: [
          { at: [0, 0], from: [1, 0], to: [-0.87, 0.5], label: 'θ=150°', radius: 1.4 },
          { at: [0, 0], from: [-1, 0], to: [-0.87, 0.5], label: 'α', radius: 0.6 },
        ],
      },
    },
    formulaSlug: 'basic-acute-angle-formula',
    workedExample: {
      id: 'basic-acute-angle-worked-1',
      title: 'Evaluate a ratio using the basic acute angle',
      problemStatement: 'Find sin 150° using the basic acute angle.',
      steps: [
        { step: 1, instruction: 'Identify the quadrant.', explanation: '150° is between 90° and 180°, so it\'s in Quadrant II.' },
        { step: 2, instruction: 'Find the basic acute angle.', math: 'α = 180° − 150° = 30°', explanation: 'Quadrant II uses α = 180°−θ.' },
        { step: 3, instruction: 'Determine the sign.', explanation: 'By ASTC, sine is positive in Quadrant II.' },
        { step: 4, instruction: 'Evaluate.', math: 'sin150° = +sin30° = 0.5', explanation: 'Combine the known acute-angle value with the correct sign.' },
      ],
      finalAnswer: 'sin 150° = 0.5.',
    },
    whyItWorks:
      'Reflecting or rotating the point on the terminal ray of θ back into Quadrant I produces a point ' +
      'whose distances from each axis are identical to those of the original — only the signs of x ' +
      'and/or y differ, based on the quadrant. So the ratio\'s SIZE always matches an equivalent acute ' +
      'angle, and only its SIGN needs separate attention.',
    realLifeExample: {
      title: 'Using printed trig tables for any angle',
      scenario: 'A surveyor with only a table of trigonometric values for acute angles (0° to 90°) needs a ratio for an obtuse bearing angle.',
      explanation: 'Reducing the obtuse angle to its basic acute angle lets the surveyor look up a known table value, then apply the correct sign for the actual quadrant.',
    },
    practiceQuestions: [
      {
        id: 'basic-acute-angle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find cos 210° using the basic acute angle. (Give your answer to 3 decimal places.)',
        hints: ['210° is in Quadrant III: α = 210°−180° = 30°.', 'Cosine is negative in Quadrant III.'],
        correctAnswer: -0.866,
        tolerance: 0.01,
        explanation: 'α=30°, cos is negative in QIII, so cos210° = −cos30° ≈ −0.866.',
      },
    ],
    commonMistake:
      'Finding the correct basic acute angle but forgetting to apply the quadrant sign afterward — the ' +
      'basic acute angle only gives the correct SIZE of the ratio; the sign must be added separately using ASTC.',
    quickReview: [
      'The basic acute angle α is always between 0° and 90°.',
      'Quadrant II: α=180°−θ. Quadrant III: α=θ−180°. Quadrant IV: α=360°−θ.',
      'Combine the acute-angle value at α with the correct ASTC sign for the actual ratio.',
    ],
  },

  'trigonometric-ratios-of-quadrantal-angles': {
    slug: 'trigonometric-ratios-of-quadrantal-angles',
    title: 'Trigonometric Ratios of Quadrantal Angles',
    difficulty: 'medium',
    simpleExplanation:
      'At 0°, 90°, 180°, 270°, and 360°, the terminal ray lies exactly ON an axis rather than inside a ' +
      'quadrant, giving simple exact values: sin and cos are always 0, 1, or −1 at these angles, and ' +
      'tan is undefined whenever the point lies on the y-axis (at 90° and 270°), since that means x=0.',
    whyItMatters:
      'These exact values come up constantly as starting/ending points of a full rotation, and knowing ' +
      'where tan is undefined avoids a division-by-zero error.',
    diagram: {
      id: 'quadrantal-angles-diagram',
      title: 'The four quadrantal angles on a unit circle',
      altText: 'A unit circle with four points marked at 0 degrees (1,0), 90 degrees (0,1), 180 degrees (-1,0), and 270 degrees (0,-1)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 1 }],
        points: [
          { x: 1, y: 0, label: '0°/360°: (1,0)', labelDx: 20, labelDy: 6 },
          { x: 0, y: 1, label: '90°: (0,1)', labelDx: 0, labelDy: -12 },
          { x: -1, y: 0, label: '180°: (−1,0)', labelDx: -22, labelDy: 6 },
          { x: 0, y: -1, label: '270°: (0,−1)', labelDx: 0, labelDy: 14 },
        ],
      },
    },
    formulaSlug: 'quadrantal-angle-values',
    workedExample: {
      id: 'quadrantal-angle-worked-1',
      title: 'Evaluate tan at two quadrantal angles',
      problemStatement: 'Evaluate tan 180°, and explain why tan 90° is undefined.',
      steps: [
        { step: 1, instruction: 'Find tan 180°.', math: 'At 180°: (x,y)=(−r,0), so tan180° = 0/(−r) = 0', explanation: 'y=0 here, so the ratio is exactly 0.' },
        { step: 2, instruction: 'Consider tan 90°.', math: 'At 90°: (x,y)=(0,r), so tan90° = r/0', explanation: 'x=0 here, which means dividing by zero.' },
      ],
      finalAnswer: 'tan 180° = 0; tan 90° is undefined because it requires dividing by x=0.',
    },
    whyItWorks:
      'These values fall directly out of the general definition sin θ=y/r, cos θ=x/r, tan θ=y/x, ' +
      'applied to the specific points where the terminal ray meets an axis exactly — no separate rule ' +
      'is needed beyond the definition itself.',
    realLifeExample: {
      title: 'Identifying the extremes of a pendulum\'s swing',
      scenario: 'An oscillating pendulum\'s angle passes through 0°, 90°, 180°, and 270° as it swings through a full cycle.',
      explanation: 'The quadrantal values instantly identify exact zero-crossing and peak points of the motion, without needing a calculator.',
    },
    practiceQuestions: [
      {
        id: 'quadrantal-angle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find sin 270°.',
        hints: ['At 270°, the point is (0, −r).'],
        correctAnswer: -1,
        explanation: 'sin270° = −r/r = −1.',
      },
    ],
    commonMistake:
      'Assuming tan is always defined for every angle — tan θ is undefined whenever cos θ=0, which ' +
      'happens exactly at 90° and 270°.',
    quickReview: [
      'sin: 0, 1, 0, −1, 0 at 0°, 90°, 180°, 270°, 360°.',
      'cos: 1, 0, −1, 0, 1 at the same five angles.',
      'tan is undefined at 90° and 270°, where x=0.',
    ],
  },

  'the-pythagorean-identity': {
    slug: 'the-pythagorean-identity',
    title: 'The Pythagorean Identity',
    difficulty: 'medium',
    simpleExplanation:
      'For any angle θ, sin²θ + cos²θ = 1 — always, with no exceptions. This is called the Pythagorean ' +
      'identity because it comes directly from the Pythagorean theorem applied to the general trig definition.',
    whyItMatters:
      'This identity is one of the most-used tools in trigonometry — it lets you find sin θ from cos θ ' +
      '(or vice versa), and simplifies countless later trigonometric expressions and proofs.',
    diagram: {
      id: 'pythagorean-identity-diagram',
      title: 'sin²θ + cos²θ = 1, for P(0.6, 0.8) on the unit circle',
      altText: 'A unit circle with a point P at (0.6, 0.8), showing the right triangle formed by its x and y components, illustrating that 0.6 squared plus 0.8 squared equals 1',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 1 }],
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 0.6, y: 0.8, label: 'P(0.6, 0.8)', labelDx: 14, labelDy: -4 },
        ],
        segments: [
          { from: [0, 0], to: [0.6, 0.8], arrow: true, label: 'r=1' },
          { from: [0, 0], to: [0.6, 0], dashed: true, label: 'cos θ = 0.6' },
          { from: [0.6, 0], to: [0.6, 0.8], dashed: true, label: 'sin θ = 0.8' },
        ],
        angleMarks: [{ at: [0.6, 0], from: [0, 0], to: [0.6, 0.8], rightAngle: true }],
      },
    },
    formulaSlug: 'pythagorean-identity',
    workedExample: {
      id: 'pythagorean-identity-worked-1',
      title: 'Find cos θ given sin θ, using the Pythagorean identity',
      problemStatement: 'Given sin θ = 0.6 and θ is in Quadrant I, find cos θ.',
      steps: [
        { step: 1, instruction: 'Write the identity.', math: 'sin²θ + cos²θ = 1', explanation: 'Always true for any angle.' },
        { step: 2, instruction: 'Substitute and solve for cos²θ.', math: '0.6² + cos²θ = 1  →  cos²θ = 1 − 0.36 = 0.64', explanation: 'Subtract sin²θ from both sides.' },
        { step: 3, instruction: 'Take the square root.', math: 'cos θ = √0.64 = 0.8', explanation: 'In Quadrant I, cosine is positive, so take the positive root.' },
      ],
      finalAnswer: 'cos θ = 0.8.',
    },
    whyItWorks:
      'On the unit circle (r=1), the point (cos θ, sin θ) lies at distance exactly 1 from the origin — ' +
      'and by the Pythagorean theorem, the distance from the origin to any point (x,y) is √(x²+y²). ' +
      'Setting √(cos²θ+sin²θ) = 1 and squaring both sides gives sin²θ+cos²θ=1 directly.',
    realLifeExample: {
      title: 'Checking a resolved vector\'s components',
      scenario: 'An engineer resolves a unit-length force vector into its horizontal and vertical components using an angle.',
      explanation: 'The Pythagorean identity gives an instant consistency check: the squares of the two components must always sum to exactly 1 for a unit vector.',
    },
    practiceQuestions: [
      {
        id: 'pythagorean-identity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Given cos θ = −0.28 and θ is in Quadrant III (where sine is negative), find sin θ. (Give your answer to 2 decimal places.)',
        hints: ['sin²θ = 1 − cos²θ.', 'In Quadrant III, sine is negative.'],
        correctAnswer: -0.96,
        tolerance: 0.01,
        explanation: 'sin²θ = 1 − 0.0784 = 0.9216, √0.9216 = 0.96. Since QIII gives negative sine, sinθ = −0.96.',
      },
    ],
    commonMistake:
      'Forgetting to check the quadrant when taking the square root — √(cos²θ) could be +cos θ or ' +
      '−cos θ, and only the quadrant tells you which sign is actually correct.',
    quickReview: [
      'sin²θ + cos²θ = 1, for every angle θ.',
      'Comes directly from the Pythagorean theorem on the unit circle.',
      'Use the quadrant to choose the correct sign after taking a square root.',
    ],
  },

  'the-quotient-identity': {
    slug: 'the-quotient-identity',
    title: 'The Quotient Identity',
    difficulty: 'medium',
    simpleExplanation:
      'The tangent of any angle is always equal to its sine divided by its cosine: tan θ = sin θ / cos θ.',
    whyItMatters:
      'This connects all three main trigonometric ratios into a single relationship, letting you find ' +
      'tan θ whenever sin θ and cos θ are already known, without a separate calculation.',
    formulaSlug: 'quotient-identity',
    workedExample: {
      id: 'quotient-identity-worked-1',
      title: 'Find tan θ from sin θ and cos θ',
      problemStatement: 'Given sin θ = 0.6 and cos θ = 0.8, find tan θ using the quotient identity.',
      steps: [
        { step: 1, instruction: 'Apply the quotient identity.', math: 'tan θ = sin θ / cos θ', explanation: 'Divide sine by cosine.' },
        { step: 2, instruction: 'Substitute the known values.', math: 'tan θ = 0.6 / 0.8', explanation: 'Use the given sin θ and cos θ.' },
        { step: 3, instruction: 'Simplify.', math: '0.6 / 0.8 = 0.75', explanation: 'Divide.' },
      ],
      finalAnswer: 'tan θ = 0.75.',
    },
    whyItWorks:
      'From the general definition, sin θ=y/r and cos θ=x/r. Dividing sin θ by cos θ gives ' +
      '(y/r)/(x/r) = y/x — and y/x is exactly the definition of tan θ, so the identity follows directly.',
    realLifeExample: {
      title: 'Finding a slope angle\'s tangent from its components',
      scenario: 'A surveyor has already measured a slope\'s vertical and horizontal components (essentially sine and cosine of the slope angle) separately.',
      explanation: 'The quotient identity gives the slope\'s tangent (its gradient) directly, without re-measuring anything new.',
    },
    practiceQuestions: [
      {
        id: 'quotient-identity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Given sin θ = 0.8 and cos θ = 0.6, find tan θ. (Give your answer to 2 decimal places.)',
        hints: ['tan θ = sin θ / cos θ.'],
        correctAnswer: 1.33,
        tolerance: 0.01,
        explanation: '0.8 / 0.6 = 1.333... ≈ 1.33.',
      },
    ],
    commonMistake:
      'Inverting the quotient (computing cos θ/sin θ instead of sin θ/cos θ) — that reversed ratio is a ' +
      'different quantity (cotangent), not tangent.',
    quickReview: [
      'tan θ = sin θ / cos θ, for any angle where cos θ ≠ 0.',
      'Follows directly from the general definitions: (y/r)/(x/r) = y/x.',
      'Lets you find tan θ instantly once sin θ and cos θ are known.',
    ],
  },

  'the-law-of-sines': {
    slug: 'the-law-of-sines',
    title: 'The Law of Sines',
    difficulty: 'hard',
    simpleExplanation:
      'In ANY triangle (not just right triangles), the ratio of a side\'s length to the sine of the ' +
      'angle opposite it is the same for all three sides: a/sinA = b/sinB = c/sinC.',
    whyItMatters:
      'This is the key tool for solving triangles that aren\'t right triangles, whenever you know two ' +
      'angles and a side, or two sides and a non-included angle.',
    diagram: {
      id: 'law-of-sines-diagram',
      title: 'A general triangle, with sides labelled opposite their angles',
      altText: 'A scalene triangle with vertices A, B, C, and sides labelled a (opposite A), b (opposite B), and c (opposite C)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 7, y: 0, label: 'B', labelDx: 8, labelDy: 8 },
          { x: 2, y: 4, label: 'C', labelDx: 0, labelDy: 12 },
        ],
        segments: [
          { from: [0, 0], to: [7, 0], label: 'c', labelDx: 0, labelDy: -12 },
          { from: [7, 0], to: [2, 4], label: 'a', labelDx: 14, labelDy: 0 },
          { from: [0, 0], to: [2, 4], label: 'b', labelDx: -14, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'law-of-sines',
    workedExample: {
      id: 'law-of-sines-worked-1',
      title: 'Find a side using the Law of Sines',
      problemStatement: 'In triangle DEF, angle D = 30°, angle E = 90°, and side d = 5. Find side e.',
      steps: [
        { step: 1, instruction: 'Write the Law of Sines relation for the known angle-side pairs.', math: 'd/sinD = e/sinE', explanation: 'Each side pairs with the sine of its OPPOSITE angle.' },
        { step: 2, instruction: 'Substitute known values.', math: '5/sin30° = e/sin90°', explanation: 'sin30°=0.5, sin90°=1.' },
        { step: 3, instruction: 'Solve for e.', math: 'e = 5 × (1/0.5) = 10', explanation: 'Cross-multiply and simplify.' },
      ],
      finalAnswer: 'e = 10.',
    },
    whyItWorks:
      'Dropping a perpendicular height h from one vertex to the opposite side lets that height be ' +
      'written two different ways using two different angles (e.g. h = b·sinA and h = a·sinB from the ' +
      'same triangle) — setting these equal and rearranging gives a/sinA = b/sinB, and the same ' +
      'argument extended to the third side gives the full three-way equality.',
    realLifeExample: {
      title: 'Triangulating a distant object in surveying',
      scenario: 'A surveyor measures the angles to a distant landmark from each end of a known baseline, but cannot directly measure the distance to the landmark.',
      explanation: 'The Law of Sines computes the unknown distance directly from the known baseline length and the two measured angles — the classic surveying technique of triangulation.',
    },
    practiceQuestions: [
      {
        id: 'law-of-sines-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In triangle GHI, angle G = 45°, angle H = 45°, and side g = 8. Find side h.',
        hints: ['g/sinG = h/sinH.', 'sin45° = sin45°, so g = h.'],
        correctAnswer: 8,
        explanation: 'Since angle G = angle H, sinG = sinH, so h = g = 8.',
      },
    ],
    commonMistake:
      'Mismatching sides and angles (e.g. pairing side a with sin B instead of sin A) — always pair ' +
      'each side with the sine of the angle directly OPPOSITE it.',
    quickReview: [
      'a/sinA = b/sinB = c/sinC — each side paired with the sine of its opposite angle.',
      'Use when you know two angles and a side (AAS/ASA), or two sides and a non-included angle (SSA).',
      'Derived by expressing the same height two different ways.',
    ],
  },

  'the-law-of-cosines': {
    slug: 'the-law-of-cosines',
    title: 'The Law of Cosines',
    difficulty: 'hard',
    simpleExplanation:
      'A generalization of the Pythagorean theorem to ANY triangle: c² = a² + b² − 2ab·cosC, where C is ' +
      'the angle between sides a and b, and c is the side opposite C.',
    whyItMatters:
      'This lets you find a missing side when you know two sides and the included angle (SAS), or find ' +
      'a missing angle when you know all three sides (SSS) — situations the Law of Sines alone can\'t handle.',
    diagram: {
      id: 'law-of-cosines-diagram',
      title: 'The Law of Cosines, with angle C included between sides a and b',
      altText: 'A scalene triangle with vertices A, B, C, sides a, b, c, and the angle at C marked between sides a and b',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: 8 },
          { x: 7, y: 0, label: 'B', labelDx: 8, labelDy: 8 },
          { x: 2, y: 4, label: 'C', labelDx: 0, labelDy: 12 },
        ],
        segments: [
          { from: [0, 0], to: [7, 0], label: 'c', labelDx: 0, labelDy: -12 },
          { from: [7, 0], to: [2, 4], label: 'a', labelDx: 14, labelDy: 0 },
          { from: [0, 0], to: [2, 4], label: 'b', labelDx: -14, labelDy: 0 },
        ],
        angleMarks: [{ at: [2, 4], from: [0, 0], to: [7, 0], label: 'C', radius: 1.0 }],
      },
    },
    formulaSlug: 'law-of-cosines',
    workedExample: {
      id: 'law-of-cosines-worked-1',
      title: 'Find a side using the Law of Cosines',
      problemStatement: 'In triangle ABC, a = 7, b = 9, and angle C = 60°. Find side c.',
      steps: [
        { step: 1, instruction: 'Apply the Law of Cosines.', math: 'c² = a² + b² − 2ab·cosC', explanation: 'C is the angle included between the two known sides a and b.' },
        { step: 2, instruction: 'Substitute known values.', math: 'c² = 7² + 9² − 2(7)(9)cos60°', explanation: 'cos60° = 0.5.' },
        { step: 3, instruction: 'Compute.', math: 'c² = 49 + 81 − 126(0.5) = 130 − 63 = 67', explanation: 'Combine the terms.' },
        { step: 4, instruction: 'Take the square root.', math: 'c = √67 ≈ 8.19', explanation: 'Take the positive square root, since c is a length.' },
      ],
      finalAnswer: 'c ≈ 8.19.',
    },
    whyItWorks:
      'Dropping a perpendicular from one vertex splits the triangle into two right triangles; applying ' +
      'the Pythagorean theorem to each and using the definitions of sine and cosine for the split angle ' +
      'eventually combines into c²=a²+b²−2ab·cosC — and when C=90°, cosC=0 and this reduces to exactly ' +
      'the ordinary Pythagorean theorem, confirming it as the correct generalization.',
    realLifeExample: {
      title: 'Computing a mechanical linkage\'s reach',
      scenario: 'An engineer knows the lengths of two robotic arm segments and the angle between them, and needs the straight-line distance from the base to the gripper.',
      explanation: 'The Law of Cosines computes that distance directly from the two known arm lengths and the angle between them.',
    },
    practiceQuestions: [
      {
        id: 'law-of-cosines-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'In triangle PQR, p = 8, q = 6, and angle R = 90°. Find side r.',
        hints: ['cos90° = 0, so the formula reduces to plain Pythagoras.'],
        correctAnswer: 10,
        explanation: 'r² = 8² + 6² − 2(8)(6)(0) = 64+36 = 100, so r=10.',
      },
    ],
    commonMistake:
      'Forgetting the −2ab·cosC term entirely and just computing √(a²+b²) — that plain Pythagorean form ' +
      'only works when the included angle is exactly 90°; any other angle needs the full Law of Cosines.',
    quickReview: [
      'c² = a² + b² − 2ab·cosC, where C is the angle between sides a and b.',
      'Use for SAS (two sides + included angle) or SSS (all three sides known).',
      'Reduces to the ordinary Pythagorean theorem exactly when C=90° (since cos90°=0).',
    ],
  },

  'bearings-and-solving-triangle-problems': {
    slug: 'bearings-and-solving-triangle-problems',
    title: 'Bearings and Solving Triangle Problems',
    difficulty: 'hard',
    simpleExplanation:
      'A bearing gives a direction as a three-figure angle (000° to 360°) measured CLOCKWISE from north. ' +
      'Bearing problems typically describe a journey using two or more bearings and distances, forming a ' +
      'triangle that can then be solved using the Law of Sines or Law of Cosines.',
    whyItMatters:
      'Bearings are the standard way distances and directions are described in navigation, and solving ' +
      'the resulting triangles is a direct, practical application of everything else in this chapter.',
    diagram: {
      id: 'bearings-diagram',
      title: 'A bearing of 060° from point A to point B',
      altText: 'Point A with a dashed arrow pointing north, and a solid arrow to point B, with the clockwise angle from north to AB marked as 60 degrees',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'A', labelDx: -8, labelDy: -6 },
          { x: 5.2, y: 3, label: 'B', labelDx: 10, labelDy: 0 },
        ],
        segments: [
          { from: [0, 0], to: [0, 5], dashed: true, label: 'N', labelDx: 0, labelDy: -10 },
          { from: [0, 0], to: [5.2, 3], arrow: true },
        ],
        angleMarks: [{ at: [0, 0], from: [0, 5], to: [5.2, 3], label: '060°', radius: 1.5 }],
      },
    },
    formulaSlug: 'law-of-cosines',
    workedExample: {
      id: 'bearings-worked-1',
      title: 'Solve a two-leg bearing problem',
      problemStatement: 'A ship sails from port A on a bearing of 065° for 40 km to point B, then changes course to a bearing of 155° and sails 30 km to point C. Find the distance AC.',
      steps: [
        { step: 1, instruction: 'Find the bearing from B back to A.', math: '065° + 180° = 245°', explanation: 'The reverse bearing is always 180° more (or less) than the original.' },
        { step: 2, instruction: 'Find the interior angle at B (angle ABC).', math: '|245° − 155°| = 90°', explanation: 'The angle between the direction back to A and the new direction to C.' },
        { step: 3, instruction: 'Apply the Law of Cosines with angle B = 90°.', math: 'AC² = AB² + BC² − 2·AB·BC·cos90° = 40² + 30² = 2500', explanation: 'cos90°=0, so the middle term vanishes.' },
        { step: 4, instruction: 'Take the square root.', math: 'AC = √2500 = 50', explanation: 'Take the positive square root.' },
      ],
      finalAnswer: 'AC = 50 km.',
    },
    whyItWorks:
      'Converting the bearings into a single interior angle of the triangle at the shared vertex B is ' +
      'what turns the navigation description into an ordinary triangle problem — from there, the Law of ' +
      'Cosines (or Law of Sines, depending on what\'s known) solves it exactly as with any other triangle.',
    realLifeExample: {
      title: 'Marine and aviation navigation',
      scenario: 'A ship or aircraft needs to know the direct distance and bearing to a destination, after sailing or flying multiple legs on different bearings.',
      explanation: 'This is exactly the bearings-and-triangle-solving technique used in real marine and aviation navigation and flight planning.',
    },
    practiceQuestions: [
      {
        id: 'bearings-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A hiker walks on a bearing of 040° from point X. What is the bearing from the hiker\'s new position back to X?',
        options: [
          { id: 'a', text: '220°' },
          { id: 'b', text: '040°' },
          { id: 'c', text: '140°' },
          { id: 'd', text: '320°' },
        ],
        correctOptionId: 'a',
        hints: ['The reverse bearing is the original bearing plus (or minus) 180°.'],
        explanation: '040° + 180° = 220°.',
      },
    ],
    commonMistake:
      'Forgetting that bearings are measured clockwise from NORTH, not from the positive x-axis (east) ' +
      'as in standard angle notation — bearings and standard angles need converting between each other, not treating as the same thing.',
    quickReview: [
      'A bearing is a three-figure angle (000°-360°), measured clockwise from north.',
      'The reverse bearing is the original bearing ± 180°.',
      'Convert the bearing description into a triangle\'s interior angle, then apply the Law of Sines/Cosines.',
    ],
  },

  'the-area-of-a-triangle-using-sine': {
    slug: 'the-area-of-a-triangle-using-sine',
    title: 'The Area of a Triangle Using Sine',
    difficulty: 'medium',
    simpleExplanation:
      'The area of any triangle can be found from two sides and the sine of the angle between them: ' +
      'Area = ½ab·sinC — without needing to know the triangle\'s height directly.',
    whyItMatters:
      'This is often faster and more direct than the usual ½×base×height formula, especially when the ' +
      'height isn\'t given but two sides and the angle between them are.',
    diagram: {
      id: 'area-of-triangle-diagram',
      title: 'Area = ½ab·sinC, for sides a and b with included angle C',
      altText: 'A triangle with vertex C at the origin, two sides a and b extending from it, and the included angle C marked between them',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [
          { x: 0, y: 0, label: 'C', labelDx: -8, labelDy: -6 },
          { x: 6, y: 0, label: 'A', labelDx: 8, labelDy: 0 },
          { x: 2.5, y: 4.33, label: 'B', labelDx: 6, labelDy: 6 },
        ],
        segments: [
          { from: [0, 0], to: [6, 0], label: 'b' },
          { from: [0, 0], to: [2.5, 4.33], label: 'a' },
          { from: [6, 0], to: [2.5, 4.33], label: 'c' },
        ],
        angleMarks: [{ at: [0, 0], from: [6, 0], to: [2.5, 4.33], label: 'C', radius: 1.2 }],
      },
    },
    formulaSlug: 'area-of-a-triangle-formula',
    workedExample: {
      id: 'area-of-triangle-worked-1',
      title: 'Find a triangle\'s area from two sides and the included angle',
      problemStatement: 'Find the area of a triangle with sides a = 8, b = 5, and included angle C = 30°.',
      steps: [
        { step: 1, instruction: 'Apply the formula.', math: 'Area = ½ab·sinC', explanation: 'a and b must be the two sides that actually include angle C.' },
        { step: 2, instruction: 'Substitute known values.', math: 'Area = ½(8)(5)sin30°', explanation: 'sin30° = 0.5.' },
        { step: 3, instruction: 'Compute.', math: 'Area = ½(8)(5)(0.5) = 10', explanation: 'Multiply through.' },
      ],
      finalAnswer: 'Area = 10 square units.',
    },
    whyItWorks:
      'The usual area formula ½×base×height still applies — but the height (from vertex B down to base ' +
      'b, say) can itself be written as h = a·sinC using right-triangle trigonometry. Substituting this ' +
      'into ½×base×height gives ½·b·(a·sinC) = ½ab·sinC directly.',
    realLifeExample: {
      title: 'Measuring an irregular land plot',
      scenario: 'A surveyor measures two boundary edges of a triangular plot of land and the angle between them, but the perpendicular height is impractical to measure directly.',
      explanation: 'The sine area formula gives the plot\'s area directly from the two measured edges and the angle between them.',
    },
    practiceQuestions: [
      {
        id: 'area-of-triangle-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the area of a triangle with sides a = 10, b = 12, and included angle C = 90°.',
        hints: ['sin90° = 1.'],
        correctAnswer: 60,
        explanation: 'Area = ½(10)(12)(1) = 60.',
      },
    ],
    commonMistake:
      'Using two sides that do NOT actually include the given angle — the formula only works with the ' +
      'two sides that meet at the vertex where the known angle is measured.',
    quickReview: [
      'Area = ½ab·sinC, where C is the angle included between sides a and b.',
      'Especially useful when the height is not directly given.',
      'Derived by writing the triangle\'s height as h = a·sinC and substituting into ½×base×height.',
    ],
  },
};
