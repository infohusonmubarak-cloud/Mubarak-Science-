import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 5 — Quadratic Functions. Matches
// sections 5.1-5.6 and 5.8 of the textbook (5.7 "Miscellaneous Exercises"
// is folded into the chapter assessment rather than a standalone concept).
export const chapter5Concepts: Record<string, Concept> = {
  'graphing-y-x-squared-plus-bx-plus-c': {
    slug: 'graphing-y-x-squared-plus-bx-plus-c',
    title: 'Graphing y = x² + bx + c',
    difficulty: 'medium',
    simpleExplanation:
      'When a = 1, the graph of y = x² + bx + c is an upward-opening parabola (U-shaped) with a ' +
      'minimum point (the vertex). Its axis of symmetry is a vertical line through the vertex, and ' +
      'the graph is a mirror image of itself across that line.',
    whyItMatters:
      'This is the simplest quadratic graph shape — recognizing it as always U-shaped and upward ' +
      'when a = 1 gives you an instant mental picture before plotting a single point.',
    diagram: {
      id: 'upward-parabola-diagram',
      title: 'Graph of y = x² − 2x − 3',
      altText: 'An upward-opening parabola with vertex at (1, -4), crossing the x-axis at x = -1 and x = 3',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: 1, b: -2, c: -3, min: -6, max: 6, showVertex: true, showAxisOfSymmetry: true, showRoots: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-formula-of-a-quadratic',
    workedExample: {
      id: 'upward-parabola-worked-1',
      title: 'Find the vertex of an upward parabola',
      problemStatement: 'Find the vertex of y = x² − 2x − 3.',
      steps: [
        { step: 1, instruction: 'Identify a, b, c.', math: 'a=1, b=-2, c=-3', explanation: 'Match the equation to y = ax² + bx + c.' },
        { step: 2, instruction: 'Find the x-coordinate of the vertex.', math: 'x = −b/2a = −(−2)/2(1) = 1', explanation: 'Apply the vertex formula.' },
        { step: 3, instruction: 'Find the y-coordinate by substituting back in.', math: 'y = (1)² − 2(1) − 3 = 1 − 2 − 3 = −4', explanation: 'Substitute x = 1 into the original equation.' },
      ],
      finalAnswer: 'Vertex = (1, −4), a minimum point since a > 0',
    },
    whyItWorks:
      'Since a = 1 is positive, the squared term always adds a nonnegative amount as x moves away ' +
      'from the vertex in either direction, so the graph always curves upward from its lowest point — never downward.',
    realLifeExample: {
      title: 'The shape of a suspension cable',
      scenario: 'A cable hanging under a uniformly distributed load (like a suspension bridge) approximately forms an upward-opening parabola.',
      explanation: 'The lowest point of the cable is exactly the vertex of a parabola shaped like y = x² + bx + c — engineers use this vertex to find the cable\'s lowest sag point.',
    },
    practiceQuestions: [
      {
        id: 'upward-parabola-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the vertex of y = x² − 4x + 1?',
        options: [
          { id: 'a', text: '(2, −3)' },
          { id: 'b', text: '(−2, −3)' },
          { id: 'c', text: '(2, 3)' },
          { id: 'd', text: '(4, 1)' },
        ],
        correctOptionId: 'a',
        hints: ['x = −b/2a = −(−4)/2 = 2.', 'Substitute x = 2 back into the equation for y.'],
        explanation: 'x = 4/2 = 2, and y = 2² − 4(2) + 1 = 4 − 8 + 1 = −3, so the vertex is (2, −3).',
      },
    ],
    commonMistake:
      'Forgetting the negative sign inside the vertex formula, x = −b/2a — for y = x² − 2x − 3 ' +
      '(b = −2), the x-coordinate is −(−2)/2 = 1, not −2/2 = −1.',
    quickReview: [
      'When a = 1, y = x² + bx + c always opens upward (U-shaped), with a minimum vertex.',
      'Vertex x-coordinate: x = −b/2a. Substitute back in to find the y-coordinate.',
      'The graph is symmetric about the vertical line through the vertex.',
    ],
  },

  'graphing-y-negative-x-squared-plus-bx-plus-c': {
    slug: 'graphing-y-negative-x-squared-plus-bx-plus-c',
    title: 'Graphing y = −x² + bx + c',
    difficulty: 'medium',
    simpleExplanation:
      'When a = −1, the graph of y = −x² + bx + c is a downward-opening parabola (upside-down U) ' +
      'with a maximum point at its vertex, instead of a minimum. Everything else — the vertex formula, the axis of symmetry — works exactly the same way.',
    whyItMatters:
      'Recognizing the sign of a instantly tells you whether you are looking for a highest point ' +
      '(maximum, like a ball\'s peak height) or a lowest point (minimum) — a critical distinction in real applications.',
    diagram: {
      id: 'downward-parabola-diagram',
      title: 'Graph of y = −x² + 2x + 3',
      altText: 'A downward-opening parabola with vertex at (1, 4), crossing the x-axis at x = -1 and x = 3',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: -1, b: 2, c: 3, min: -6, max: 6, showVertex: true, showAxisOfSymmetry: true, showRoots: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-formula-of-a-quadratic',
    workedExample: {
      id: 'downward-parabola-worked-1',
      title: 'Find the vertex of a downward parabola',
      problemStatement: 'Find the vertex of y = −x² + 6x − 5, and state whether it is a maximum or minimum.',
      steps: [
        { step: 1, instruction: 'Identify a, b, c.', math: 'a=-1, b=6, c=-5', explanation: 'Match to y = ax² + bx + c.' },
        { step: 2, instruction: 'Find the x-coordinate of the vertex.', math: 'x = −b/2a = −6/2(−1) = 3', explanation: 'Apply the vertex formula.' },
        { step: 3, instruction: 'Find the y-coordinate.', math: 'y = −(3)² + 6(3) − 5 = −9+18−5 = 4', explanation: 'Substitute x = 3 back in.' },
        { step: 4, instruction: 'State the type, based on the sign of a.', math: 'a = −1 < 0', explanation: 'A negative a means the parabola opens downward, so the vertex is a maximum.' },
      ],
      finalAnswer: 'Vertex = (3, 4), a maximum point since a < 0',
    },
    whyItWorks:
      'Multiplying x² by a negative number flips every nonnegative value it would have produced ' +
      'into a nonpositive one, so instead of curving upward from a low point, the graph curves ' +
      'downward from a high point — the vertex becomes the highest value the function reaches.',
    realLifeExample: {
      title: 'The path of a thrown ball',
      scenario: 'A ball thrown into the air follows a path that can be modeled by a downward-opening parabola, height versus time.',
      explanation: 'The vertex of that parabola gives the ball\'s maximum height and the exact time it is reached — a direct real-world use of the downward parabola\'s vertex as a maximum.',
    },
    practiceQuestions: [
      {
        id: 'downward-parabola-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'The graph of y = −x² + 4x has a vertex at (2, 4). Is this a maximum or minimum?',
        options: [
          { id: 'a', text: 'Maximum, since a = −1 is negative' },
          { id: 'b', text: 'Minimum, since a = −1 is negative' },
          { id: 'c', text: 'Maximum, since b = 4 is positive' },
          { id: 'd', text: 'Cannot be determined' },
        ],
        correctOptionId: 'a',
        hints: ['The sign of a determines whether the parabola opens up or down.'],
        explanation: 'Since a = −1 < 0, the parabola opens downward, so its vertex is a maximum point.',
      },
    ],
    commonMistake:
      'Assuming every parabola opens upward — always check the sign of a first: positive a opens ' +
      'upward (minimum vertex), negative a opens downward (maximum vertex).',
    quickReview: [
      'When a = −1 (or any negative a), the parabola opens downward, with a maximum vertex.',
      'The vertex formula, x = −b/2a, still applies — only the direction of opening changes.',
      'Sign of a: positive → minimum (opens up); negative → maximum (opens down).',
    ],
  },

  'effect-of-a-on-the-parabola': {
    slug: 'effect-of-a-on-the-parabola',
    title: 'The Effect of a on the Graph of y = ax²',
    difficulty: 'medium',
    simpleExplanation:
      'In y = ax², the coefficient a controls two things: its sign determines whether the parabola ' +
      'opens upward (a > 0) or downward (a < 0), and its size determines how narrow or wide the ' +
      'parabola is — a larger |a| makes it narrower (steeper); a smaller |a| makes it wider (flatter).',
    whyItMatters:
      'Understanding a\'s role lets you sketch a rough graph of any y = ax² instantly, just by ' +
      'reading its coefficient, before plotting a single point.',
    diagram: {
      id: 'effect-of-a-diagram',
      title: 'Graph of y = 0.5x² — a wide, upward-opening parabola',
      altText: 'A wide upward-opening parabola, y = 0.5x squared, showing a flatter curve than the standard y = x squared',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: 0.5, b: 0, c: 0, min: -6, max: 6, showVertex: true, showYIntercept: true },
    },
    workedExample: {
      id: 'effect-of-a-worked-1',
      title: 'Compare the width of two parabolas',
      problemStatement: 'Which is narrower: y = 3x² or y = 0.5x²?',
      steps: [
        { step: 1, instruction: 'Compare the absolute values of a.', math: '|3| = 3,  |0.5| = 0.5', explanation: 'Only the size of a (ignoring sign) affects width.' },
        { step: 2, instruction: 'Recall the rule: larger |a| means narrower.', explanation: 'A bigger coefficient makes y grow faster as x moves from 0, pulling the graph in tighter.' },
        { step: 3, instruction: 'Compare.', math: '3 > 0.5', explanation: 'The larger coefficient belongs to y = 3x².' },
      ],
      finalAnswer: 'y = 3x² is narrower than y = 0.5x².',
    },
    whyItWorks:
      'For any fixed x-value (other than 0), a larger |a| multiplies that same squared value by a ' +
      'bigger number, producing a larger y — pulling the curve closer to the vertical axis, i.e. making it visually narrower.',
    realLifeExample: {
      title: 'Satellite dish and headlight reflector shapes',
      scenario: 'Parabolic reflectors (satellite dishes, car headlights, flashlight mirrors) are designed with a specific "narrowness" to focus signals or light at one exact point.',
      explanation: 'Engineers choose the coefficient a precisely to control how narrow or wide the parabolic reflector\'s cross-section is, which determines where it focuses.',
    },
    practiceQuestions: [
      {
        id: 'effect-of-a-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which parabola opens downward and is narrower than y = x²?',
        options: [
          { id: 'a', text: 'y = −4x²' },
          { id: 'b', text: 'y = 0.2x²' },
          { id: 'c', text: 'y = −0.5x²' },
          { id: 'd', text: 'y = 4x²' },
        ],
        correctOptionId: 'a',
        hints: ['Downward opening needs a negative a.', 'Narrower than y=x² needs |a| > 1.'],
        explanation: 'y = −4x² has a negative a (opens downward) and |a|=4 > 1 (narrower than y=x²).',
      },
    ],
    commonMistake:
      'Confusing the effect of the sign of a (direction) with the effect of its size (width) — ' +
      'they are two completely separate properties that must be checked independently.',
    quickReview: [
      'Sign of a: positive opens upward; negative opens downward.',
      'Size of a: |a| > 1 makes the parabola narrower; 0 < |a| < 1 makes it wider.',
      'y = x² is the "standard" width to compare every other parabola against.',
    ],
  },

  'the-vertex-formula-and-general-quadratic-graphs': {
    slug: 'the-vertex-formula-and-general-quadratic-graphs',
    title: 'The Vertex Formula and Graphing y = ax² + bx + c',
    difficulty: 'hard',
    simpleExplanation:
      'Every quadratic y = ax² + bx + c (any a, b, c, with a ≠ 0) can be graphed the same way: find ' +
      'the vertex using x = −b/2a, decide the direction from the sign of a, then plot a few extra points (like the intercepts) to complete the sketch.',
    whyItMatters:
      'This combines everything from sections 5.1-5.3 into one general method that graphs any ' +
      'quadratic function whatsoever — the complete, general-purpose technique you will use for the rest of the chapter.',
    diagram: {
      id: 'general-quadratic-diagram',
      title: 'Graph of y = 2x² − 4x + 5',
      altText: 'An upward-opening, narrow parabola with vertex at (1, 3), that never crosses the x-axis',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: 2, b: -4, c: 5, min: -4, max: 6, showVertex: true, showAxisOfSymmetry: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-formula-of-a-quadratic',
    workedExample: {
      id: 'general-quadratic-worked-1',
      title: 'Graph a general quadratic function',
      problemStatement: 'Sketch y = 2x² − 4x + 5, describing its key features.',
      steps: [
        { step: 1, instruction: 'Note the direction from the sign of a.', math: 'a = 2 > 0', explanation: 'Opens upward, with a minimum vertex.' },
        { step: 2, instruction: 'Find the vertex.', math: 'x = −(−4)/2(2) = 1;  y = 2(1)²−4(1)+5 = 3', explanation: 'Apply the vertex formula, then substitute back in.' },
        { step: 3, instruction: 'Find the y-intercept.', math: 'y = 2(0)²−4(0)+5 = 5', explanation: 'Set x = 0.' },
        { step: 4, instruction: 'Describe the sketch.', explanation: 'An upward parabola with vertex (1,3), y-intercept (0,5), symmetric about x = 1.' },
      ],
      finalAnswer: 'Vertex (1, 3), opens upward, y-intercept (0, 5), axis of symmetry x = 1',
    },
    whyItWorks:
      'The vertex formula x = −b/2a comes from completing the square on ax² + bx + c: rewriting it ' +
      'as a(x + b/2a)² + (c − b²/4a) shows the expression is smallest (if a>0) or largest (if a<0) ' +
      'exactly when the squared term is zero, i.e. when x = −b/2a.',
    realLifeExample: {
      title: 'Modeling profit versus price',
      scenario: 'A company\'s profit, as a function of the price it charges, often follows a downward-opening quadratic — too low a price or too high a price both reduce profit.',
      explanation: 'Finding the vertex of that profit function tells the company exactly which price maximizes profit — a direct business use of the general quadratic graphing method.',
    },
    practiceQuestions: [
      {
        id: 'general-quadratic-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What is the vertex of y = 3x² + 12x + 7?',
        options: [
          { id: 'a', text: '(−2, −5)' },
          { id: 'b', text: '(2, −5)' },
          { id: 'c', text: '(−2, 5)' },
          { id: 'd', text: '(4, 7)' },
        ],
        correctOptionId: 'a',
        hints: ['x = −b/2a = −12/6.', 'Substitute x = −2 back into the equation.'],
        explanation: 'x = −12/6 = −2, and y = 3(4) + 12(−2) + 7 = 12 − 24 + 7 = −5, giving (−2, −5).',
      },
    ],
    commonMistake:
      'Skipping the sign check on a before sketching — without it, you cannot tell whether the ' +
      'vertex you calculated is the graph\'s highest point or its lowest point.',
    quickReview: [
      'Vertex: x = −b/2a, then substitute back in for y.',
      'Direction: a > 0 opens up (minimum); a < 0 opens down (maximum).',
      'Plot the vertex, y-intercept, and use symmetry to sketch the rest.',
    ],
  },

  'the-discriminant': {
    slug: 'the-discriminant',
    title: 'The Discriminant',
    difficulty: 'medium',
    simpleExplanation:
      'The discriminant, D = b² − 4ac, is a single number computed from a quadratic\'s coefficients ' +
      'that reveals how many times its graph crosses the x-axis: D > 0 means two real roots (two crossings), D = 0 means exactly one real root (the vertex touches the axis), and D < 0 means no real roots (the graph never crosses the axis).',
    whyItMatters:
      'The discriminant lets you know how many solutions a quadratic equation has before doing any ' +
      'further work to find them — a fast diagnostic check.',
    diagram: {
      id: 'discriminant-diagram',
      title: 'A parabola with D > 0 — two real roots',
      altText: 'An upward-opening parabola crossing the x-axis at two points, x = 2 and x = 3, illustrating a positive discriminant',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: 1, b: -5, c: 6, min: -1, max: 6, showRoots: true, showVertex: true },
    },
    formulaSlug: 'discriminant-formula',
    workedExample: {
      id: 'discriminant-worked-1',
      title: 'Use the discriminant to count roots',
      problemStatement: 'How many real roots does 2x² + 3x + 5 = 0 have?',
      steps: [
        { step: 1, instruction: 'Identify a, b, c.', math: 'a=2, b=3, c=5', explanation: 'Match to ax² + bx + c = 0.' },
        { step: 2, instruction: 'Compute the discriminant.', math: 'D = 3² − 4(2)(5) = 9 − 40 = −31', explanation: 'Apply the discriminant formula.' },
        { step: 3, instruction: 'Interpret the sign.', math: 'D = −31 < 0', explanation: 'A negative discriminant means no real roots.' },
      ],
      finalAnswer: 'No real roots — the graph never crosses the x-axis.',
    },
    whyItWorks:
      'The discriminant is exactly the expression under the square root in the quadratic formula — ' +
      'a negative value under a square root has no real result (no real roots), zero gives one ' +
      'repeated result (one root), and a positive value gives two distinct results (two roots).',
    realLifeExample: {
      title: 'Checking whether a projectile ever reaches a target height',
      scenario: 'A projectile\'s height is modeled by a quadratic, and you want to know whether it ever reaches a specific target height without solving the full equation.',
      explanation: 'Setting the height equation equal to the target and checking the discriminant instantly tells you whether the projectile reaches that height (D ≥ 0) or never does (D < 0).',
    },
    practiceQuestions: [
      {
        id: 'discriminant-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How many real roots does x² − 6x + 9 = 0 have?',
        options: [
          { id: 'a', text: 'Exactly one (a repeated root), since D = 0' },
          { id: 'b', text: 'Two distinct roots' },
          { id: 'c', text: 'No real roots' },
          { id: 'd', text: 'Infinitely many' },
        ],
        correctOptionId: 'a',
        hints: ['D = (−6)² − 4(1)(9).'],
        explanation: 'D = 36 − 36 = 0, meaning exactly one repeated real root.',
      },
    ],
    commonMistake:
      'Forgetting the negative sign in −4ac, or mixing up b² with (bx)² — the discriminant uses ' +
      'only the coefficient b, squared, not the whole term bx.',
    quickReview: [
      'D = b² − 4ac.',
      'D > 0: two real roots. D = 0: one repeated real root. D < 0: no real roots.',
      'The discriminant tells you how many times the graph crosses the x-axis, without solving.',
    ],
  },

  'the-quadratic-formula': {
    slug: 'the-quadratic-formula',
    title: 'The Quadratic Formula',
    difficulty: 'hard',
    simpleExplanation:
      'The quadratic formula, x = (−b ± √(b² − 4ac)) / 2a, solves any equation of the form ' +
      'ax² + bx + c = 0 directly from its coefficients — no factoring required, and it always works, even when factoring is difficult or impossible.',
    whyItMatters:
      'Not every quadratic factors nicely — the quadratic formula is the universal method that ' +
      'solves every quadratic equation, guaranteed, using only the coefficients.',
    formulaSlug: 'quadratic-formula',
    workedExample: {
      id: 'quadratic-formula-worked-1',
      title: 'Solve using the quadratic formula',
      problemStatement: 'Solve 2x² + 3x − 2 = 0.',
      steps: [
        { step: 1, instruction: 'Identify a, b, c.', math: 'a=2, b=3, c=-2', explanation: 'Match to ax²+bx+c=0.' },
        { step: 2, instruction: 'Compute the discriminant.', math: 'D = 3² − 4(2)(−2) = 9 + 16 = 25', explanation: 'This will sit under the square root.' },
        { step: 3, instruction: 'Substitute into the quadratic formula.', math: 'x = (−3 ± √25) / 2(2) = (−3 ± 5) / 4', explanation: '√25 = 5.' },
        { step: 4, instruction: 'Evaluate both solutions.', math: 'x = (−3+5)/4 = 0.5   or   x = (−3−5)/4 = −2', explanation: 'The ± gives two separate answers.' },
      ],
      finalAnswer: 'x = 0.5  or  x = −2',
    },
    whyItWorks:
      'Completing the square on the general equation ax² + bx + c = 0 — dividing by a, moving c ' +
      'over, adding (b/2a)² to both sides to form a perfect square, and then taking the square root ' +
      'of both sides — algebraically derives exactly this formula, so it is guaranteed to solve every quadratic equation.',
    realLifeExample: {
      title: 'Finding when a ball lands',
      scenario: 'A ball\'s height is h(t) = −5t² + 20t + 1, and you need to find when it hits the ground (h = 0).',
      explanation: 'Since −5t² + 20t + 1 = 0 does not factor nicely, the quadratic formula is the direct, reliable way to solve for the exact landing time t.',
    },
    practiceQuestions: [
      {
        id: 'quadratic-formula-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Solve x² − x − 6 = 0 for the larger root.',
        hints: ['a=1, b=-1, c=-6.', 'D = 1 + 24 = 25.'],
        correctAnswer: 3,
        explanation: 'x = (1 ± 5)/2, giving x = 3 or x = −2. The larger root is 3.',
      },
    ],
    commonMistake:
      'Forgetting to divide the entire numerator (including the ± term) by 2a — the whole ' +
      'expression −b ± √(b²−4ac) must be divided by 2a, not just the −b part.',
    quickReview: [
      'x = (−b ± √(b² − 4ac)) / 2a solves any ax² + bx + c = 0.',
      'The ± gives two solutions (unless D = 0, giving one repeated solution).',
      'Derived from completing the square on the general quadratic equation.',
    ],
  },

  'solving-quadratic-inequalities': {
    slug: 'solving-quadratic-inequalities',
    title: 'Solving Quadratic Inequalities',
    difficulty: 'hard',
    simpleExplanation:
      'To solve a quadratic inequality like ax² + bx + c > 0, first find the roots of the related ' +
      'equation ax² + bx + c = 0 (using factoring or the quadratic formula), then use those roots ' +
      'to divide the number line into intervals and test a point from each interval to see whether it satisfies the inequality.',
    whyItMatters:
      'Quadratic inequalities answer "for which values of x is this quantity positive/negative?" — ' +
      'a question that comes up whenever you need a range of valid values, not just a single answer.',
    diagram: {
      id: 'quadratic-inequality-diagram',
      title: 'Graph of y = x² − x − 6, showing where it is above/below the x-axis',
      altText: 'An upward-opening parabola crossing the x-axis at x = -2 and x = 3, showing the graph is below the axis between the roots and above the axis outside them',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'quadratic', a: 1, b: -1, c: -6, min: -5, max: 6, showRoots: true, showVertex: true },
    },
    formulaSlug: 'quadratic-formula',
    workedExample: {
      id: 'quadratic-inequality-worked-1',
      title: 'Solve a quadratic inequality',
      problemStatement: 'Solve x² − x − 6 > 0.',
      steps: [
        { step: 1, instruction: 'Find the roots of the related equation.', math: 'x² − x − 6 = 0  →  (x−3)(x+2) = 0  →  x = 3, x = −2', explanation: 'These roots divide the number line into three intervals.' },
        { step: 2, instruction: 'Test a point from each interval.', math: 'x=−3: 9+3−6=6>0 ✓;  x=0: −6, not >0;  x=4: 16−4−6=6>0 ✓', explanation: 'Pick one convenient test point from each of the three intervals: x<−2, −2<x<3, x>3.' },
        { step: 3, instruction: 'Identify the intervals that satisfy the inequality.', math: 'x < −2  or  x > 3', explanation: 'The parabola (opening upward) is above the x-axis outside its two roots.' },
      ],
      finalAnswer: 'x < −2 or x > 3',
    },
    whyItWorks:
      'Since the graph only changes from positive to negative (or back) at its roots, the sign of ' +
      'ax² + bx + c must stay constant across any interval between consecutive roots — testing one ' +
      'point per interval is enough to determine the sign for the entire interval.',
    realLifeExample: {
      title: 'Finding a profitable price range',
      scenario: 'A company\'s profit is modeled by a downward-opening quadratic in terms of price, and the company wants to know which prices keep profit positive.',
      explanation: 'Solving "profit(price) > 0" as a quadratic inequality gives the exact range of prices that keep the company profitable — not just one break-even value.',
    },
    practiceQuestions: [
      {
        id: 'quadratic-inequality-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Solve x² − 9 < 0.',
        options: [
          { id: 'a', text: '−3 < x < 3' },
          { id: 'b', text: 'x < −3 or x > 3' },
          { id: 'c', text: 'x < 3' },
          { id: 'd', text: 'x > −3' },
        ],
        correctOptionId: 'a',
        hints: ['The roots are x = 3 and x = −3.', 'An upward parabola is below the x-axis only between its roots.'],
        explanation: 'The roots are ±3; since the parabola opens upward, it is negative (below the axis) only between them: −3 < x < 3.',
      },
    ],
    commonMistake:
      'Including or excluding the roots incorrectly for a strict versus non-strict inequality — a ' +
      'strict inequality (< or >) excludes the roots themselves, while ≤ or ≥ includes them.',
    quickReview: [
      'Find the roots of the related equation first — they split the number line into intervals.',
      'Test one point from each interval to check its sign.',
      'Collect every interval whose sign matches the inequality.',
    ],
  },
};
