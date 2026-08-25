import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 6 — Absolute Value Functions. Matches
// sections 6.1-6.6 of the textbook exactly.
export const chapter6Concepts: Record<string, Concept> = {
  'graphing-y-equals-abs-x-minus-h-plus-k': {
    slug: 'graphing-y-equals-abs-x-minus-h-plus-k',
    title: 'Graphing y = |x − h| + k',
    difficulty: 'medium',
    simpleExplanation:
      'The graph of y = |x − h| + k is a V-shape opening upward, with its sharp corner (the ' +
      'vertex) located exactly at (h, k). Compared to the basic graph y = |x|, it is shifted h ' +
      'units horizontally and k units vertically.',
    whyItMatters:
      'Absolute value functions model any situation with a sharp minimum and two symmetric, ' +
      'straight-line sides — recognizing the shifted vertex form lets you sketch one instantly, without plotting many points.',
    diagram: {
      id: 'upward-v-diagram',
      title: 'Graph of y = |x − 2| + 1',
      altText: 'An upward-opening V-shaped graph with its vertex at (2, 1)',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: 1, h: 2, k: 1, min: -4, max: 8, showVertex: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-form-of-absolute-value-function',
    workedExample: {
      id: 'upward-v-worked-1',
      title: 'Find the vertex and sketch',
      problemStatement: 'Find the vertex of y = |x − 3| + 2, and state a point on each side of the vertex.',
      steps: [
        { step: 1, instruction: 'Match the equation to y = |x − h| + k.', math: 'h = 3, k = 2', explanation: 'Read h and k directly off the equation.' },
        { step: 2, instruction: 'State the vertex.', math: 'Vertex = (3, 2)', explanation: 'The vertex is always (h, k) for this form.' },
        { step: 3, instruction: 'Find a point on each side, e.g. x = 2 and x = 4.', math: 'x=2: y=|2−3|+2=3;  x=4: y=|4−3|+2=3', explanation: 'Points equally spaced from h give equal y-values, by symmetry.' },
      ],
      finalAnswer: 'Vertex (3, 2); the graph passes through (2, 3) and (4, 3) symmetrically.',
    },
    whyItWorks:
      '|x − h| is always zero exactly when x = h (its smallest possible value, since absolute ' +
      'value is never negative), and grows equally in both directions as x moves away from h — so ' +
      'adding k simply shifts that guaranteed minimum point up or down to become the vertex (h, k).',
    realLifeExample: {
      title: 'Minimum cost from a central warehouse',
      scenario: 'A delivery cost depends on distance from a single warehouse at location h, with a fixed base cost k.',
      explanation: 'Cost = |location − h| + k is exactly this absolute value form — cost is lowest (k) right at the warehouse and rises equally in both directions as distance increases.',
    },
    practiceQuestions: [
      {
        id: 'upward-v-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the vertex of y = |x + 4| − 1?',
        options: [
          { id: 'a', text: '(−4, −1)' },
          { id: 'b', text: '(4, −1)' },
          { id: 'c', text: '(−4, 1)' },
          { id: 'd', text: '(4, 1)' },
        ],
        correctOptionId: 'a',
        hints: ['Rewrite |x+4| as |x−(−4)| to identify h.'],
        explanation: '|x+4| = |x−(−4)|, so h = −4, and k = −1, giving vertex (−4, −1).',
      },
    ],
    commonMistake:
      'Reading h with the wrong sign — in y = |x + 4| − 1, h is −4 (not 4), because the form is ' +
      '|x − h|, and x + 4 = x − (−4).',
    quickReview: [
      'y = |x − h| + k is a V-shape opening upward with vertex (h, k).',
      'The graph is symmetric about the vertical line x = h.',
      'Watch the sign: |x + 4| means h = −4, not h = 4.',
    ],
  },

  'graphing-y-equals-negative-abs-x-minus-h-plus-k': {
    slug: 'graphing-y-equals-negative-abs-x-minus-h-plus-k',
    title: 'Graphing y = −|x − h| + k',
    difficulty: 'medium',
    simpleExplanation:
      'The graph of y = −|x − h| + k is an upside-down V, opening downward, with its highest point ' +
      '(the vertex) at (h, k). The negative sign in front of the absolute value flips the graph vertically.',
    whyItMatters:
      'Just like with parabolas, recognizing whether a and its sign points the graph up or down ' +
      'tells you immediately whether the vertex is the lowest or highest value the function reaches.',
    diagram: {
      id: 'downward-v-diagram',
      title: 'Graph of y = −|x − 2| + 3',
      altText: 'A downward-opening upside-down V graph with its vertex (highest point) at (2, 3)',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: -1, h: 2, k: 3, min: -4, max: 8, showVertex: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-form-of-absolute-value-function',
    workedExample: {
      id: 'downward-v-worked-1',
      title: 'Find the vertex of a downward V',
      problemStatement: 'Find the vertex of y = −|x − 5| + 4, and state whether it is a maximum or minimum.',
      steps: [
        { step: 1, instruction: 'Match to y = a|x − h| + k.', math: 'a = −1, h = 5, k = 4', explanation: 'Identify each coefficient.' },
        { step: 2, instruction: 'State the vertex.', math: 'Vertex = (5, 4)', explanation: 'Same (h, k) rule as before.' },
        { step: 3, instruction: 'Determine max/min from the sign of a.', math: 'a = −1 < 0', explanation: 'A negative a flips the V upside down, making the vertex a maximum.' },
      ],
      finalAnswer: 'Vertex = (5, 4), a maximum point since a < 0',
    },
    whyItWorks:
      'Multiplying |x − h| (which is always ≥ 0) by a negative number makes every value it ' +
      'produces ≤ 0, so subtracting from k instead of adding to it — the graph reaches its highest ' +
      'value exactly at the vertex, and only decreases moving away from it.',
    realLifeExample: {
      title: 'Signal strength near a transmitter',
      scenario: 'A radio signal\'s strength is strongest directly at the transmitter\'s location and decreases steadily and symmetrically with distance.',
      explanation: 'This is modeled by a downward absolute value graph — maximum signal strength (the vertex) right at the transmitter, falling off equally in both directions.',
    },
    practiceQuestions: [
      {
        id: 'downward-v-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'The graph of y = −|x − 1| + 6 has a vertex at (1, 6). Is this a maximum or a minimum?',
        options: [
          { id: 'a', text: 'Maximum, since a = −1 is negative' },
          { id: 'b', text: 'Minimum, since a = −1 is negative' },
          { id: 'c', text: 'Maximum, since h = 1 is positive' },
          { id: 'd', text: 'Cannot be determined' },
        ],
        correctOptionId: 'a',
        hints: ['Check the sign of a in front of the absolute value.'],
        explanation: 'a = −1 is negative, so the graph opens downward and the vertex is a maximum.',
      },
    ],
    commonMistake:
      'Applying the negative sign to h or k instead of the whole absolute value term — the minus ' +
      'sign in −|x−h|+k flips the V\'s direction; it does not change the vertex\'s coordinates (h, k) at all.',
    quickReview: [
      'y = −|x − h| + k opens downward, with a maximum vertex at (h, k).',
      'The negative sign flips the graph vertically but leaves the vertex location unchanged.',
      'Sign of a: positive → minimum (opens up); negative → maximum (opens down) — same rule as quadratics.',
    ],
  },

  'effect-of-a-on-the-absolute-value-graph': {
    slug: 'effect-of-a-on-the-absolute-value-graph',
    title: 'The Effect of a on the Graph of y = a|x|',
    difficulty: 'medium',
    simpleExplanation:
      'In y = a|x|, the coefficient a controls direction and steepness exactly the way it does for ' +
      'a parabola: its sign decides whether the V opens upward (a > 0) or downward (a < 0), and its size decides how narrow (|a| > 1) or wide (0 < |a| < 1) the V is.',
    whyItMatters:
      'This is the same "a controls shape" idea from quadratics, applied to a different graph ' +
      'family — recognizing the pattern once means you already understand it here too.',
    diagram: {
      id: 'effect-of-a-abs-diagram',
      title: 'Graph of y = 0.5|x| — a wide, upward-opening V',
      altText: 'A wide, upward-opening V-shaped graph with a flatter slope than the standard y=|x|',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: 0.5, h: 0, k: 0, min: -8, max: 8, showVertex: true },
    },
    workedExample: {
      id: 'effect-of-a-abs-worked-1',
      title: 'Compare two absolute value graphs',
      problemStatement: 'Which is narrower: y = 4|x| or y = |x|?',
      steps: [
        { step: 1, instruction: 'Compare |a| for each.', math: '|4| = 4  vs.  |1| = 1', explanation: 'The standard y=|x| has a=1.' },
        { step: 2, instruction: 'Recall the rule: larger |a| means narrower/steeper.', explanation: 'A bigger coefficient makes y grow faster on either side of the vertex.' },
        { step: 3, instruction: 'Compare.', math: '4 > 1', explanation: 'y=4|x| has the larger coefficient.' },
      ],
      finalAnswer: 'y = 4|x| is narrower (steeper) than y = |x|.',
    },
    whyItWorks:
      'For any x ≠ h, a larger |a| multiplies the same distance |x − h| by a bigger number, so the ' +
      'graph climbs away from the vertex faster — visually pulling the sides of the V in tighter, i.e. making it narrower.',
    realLifeExample: {
      title: 'Steepness of a mountain\'s cross-section',
      scenario: 'A simplified cross-section of a steep mountain peak versus a gentle hill can both be modeled as V-shapes with different steepness.',
      explanation: 'The steep mountain has a large |a|; the gentle hill has a small |a| — the same coefficient that controls narrowness in the math also describes real physical steepness.',
    },
    practiceQuestions: [
      {
        id: 'effect-of-a-abs-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which graph opens downward and is wider than y = |x|?',
        options: [
          { id: 'a', text: 'y = −0.3|x|' },
          { id: 'b', text: 'y = 3|x|' },
          { id: 'c', text: 'y = −3|x|' },
          { id: 'd', text: 'y = 0.3|x|' },
        ],
        correctOptionId: 'a',
        hints: ['Downward needs negative a.', 'Wider than y=|x| needs |a| < 1.'],
        explanation: 'y = −0.3|x| has negative a (opens downward) and |a| = 0.3 < 1 (wider than y=|x|).',
      },
    ],
    commonMistake:
      'Assuming the vertex moves when only a changes — changing a affects direction and ' +
      'steepness only; the vertex of y = a|x| always stays at the origin, (0, 0), regardless of a\'s value.',
    quickReview: [
      'Sign of a: positive opens upward; negative opens downward.',
      'Size of a: |a| > 1 makes it narrower; 0 < |a| < 1 makes it wider.',
      'Changing a never moves the vertex of y = a|x| — it stays at the origin.',
    ],
  },

  'graphing-y-equals-a-abs-x-minus-h-plus-k': {
    slug: 'graphing-y-equals-a-abs-x-minus-h-plus-k',
    title: 'Graphing the General y = a|x − h| + k',
    difficulty: 'hard',
    simpleExplanation:
      'The general absolute value function y = a|x − h| + k combines every transformation at once: ' +
      'a sets direction and steepness, while (h, k) sets the vertex location. Reading all three ' +
      'coefficients off the equation lets you sketch any absolute value graph directly.',
    whyItMatters:
      'This combines sections 6.1-6.3 into the one complete method you will use for every ' +
      'absolute value graph from here on, exactly the way section 5.4 combined the quadratic transformations.',
    diagram: {
      id: 'general-abs-diagram',
      title: 'Graph of y = 2|x + 1| − 3',
      altText: 'A narrow, upward-opening V-shaped graph with its vertex at (-1, -3)',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: 2, h: -1, k: -3, min: -6, max: 6, showVertex: true, showRoots: true, showYIntercept: true },
    },
    formulaSlug: 'vertex-form-of-absolute-value-function',
    workedExample: {
      id: 'general-abs-worked-1',
      title: 'Graph a general absolute value function',
      problemStatement: 'Sketch y = 2|x + 1| − 3, describing its key features.',
      steps: [
        { step: 1, instruction: 'Identify a, h, k.', math: 'a = 2, h = −1, k = −3', explanation: '|x+1| = |x−(−1)|, so h = −1.' },
        { step: 2, instruction: 'State the vertex and direction.', math: 'Vertex = (−1, −3), opens upward (a > 0)', explanation: 'a = 2 > 0 means a minimum vertex.' },
        { step: 3, instruction: 'Find the y-intercept.', math: 'y = 2|0+1| − 3 = 2(1) − 3 = −1', explanation: 'Set x = 0.' },
        { step: 4, instruction: 'Describe the sketch.', explanation: 'A narrow upward V (since |a|=2 > 1), vertex (−1,−3), y-intercept (0,−1).' },
      ],
      finalAnswer: 'Vertex (−1, −3), opens upward, narrower than y=|x|, y-intercept (0, −1)',
    },
    whyItWorks:
      '|x − h| always reaches its minimum value (zero) exactly at x = h, so a|x − h| does too ' +
      '(when a > 0) — adding k shifts that guaranteed minimum point vertically, giving the exact ' +
      'vertex (h, k), while a independently scales how quickly the graph rises on either side.',
    realLifeExample: {
      title: 'Manufacturing tolerance cost',
      scenario: 'A factory\'s extra cost for producing a part increases the further its size deviates from a target measurement h, with a base cost k and a cost-per-unit-deviation rate a.',
      explanation: 'Cost = a|size − h| + k is exactly this general absolute value form, letting the factory predict costs for any deviation from the ideal size.',
    },
    practiceQuestions: [
      {
        id: 'general-abs-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What is the vertex of y = −3|x − 4| + 2?',
        options: [
          { id: 'a', text: '(4, 2), a maximum' },
          { id: 'b', text: '(−4, 2), a maximum' },
          { id: 'c', text: '(4, 2), a minimum' },
          { id: 'd', text: '(4, −2), a maximum' },
        ],
        correctOptionId: 'a',
        hints: ['h = 4, k = 2, and check the sign of a.'],
        explanation: 'Vertex = (4, 2); since a = −3 < 0, the graph opens downward, making the vertex a maximum.',
      },
    ],
    commonMistake:
      'Trying to find the vertex by setting x − h = 0 and forgetting to also read off k separately ' +
      '— the full vertex is (h, k), not just the x-value where the absolute value is zero.',
    quickReview: [
      'y = a|x − h| + k: vertex (h, k), direction/steepness from a.',
      'a > 0: opens up (minimum). a < 0: opens down (maximum). |a| > 1: narrower. |a| < 1: wider.',
      'This general form combines every transformation from sections 6.1-6.3.',
    ],
  },

  'solving-absolute-value-equations': {
    slug: 'solving-absolute-value-equations',
    title: 'Solving |x − p| = q',
    difficulty: 'medium',
    simpleExplanation:
      '|x − p| = q asks "which values of x are exactly q units away from p?" If q > 0, there are ' +
      'always two such values: x = p + q and x = p − q. If q = 0, there is exactly one (x = p). If q < 0, there is no solution, since distance can never be negative.',
    whyItMatters:
      'This "two symmetric solutions" pattern shows up constantly — whenever a problem asks for ' +
      'values within an exact distance of a target, it is really an absolute value equation in disguise.',
    diagram: {
      id: 'abs-equation-diagram',
      title: 'Graph of y = |x − 3| − 5, showing where it crosses the x-axis',
      altText: 'A V-shaped graph with vertex at (3, -5), crossing the x-axis at x = -2 and x = 8',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: 1, h: 3, k: -5, min: -4, max: 10, showRoots: true, showVertex: true },
    },
    formulaSlug: 'absolute-value-equation-solution',
    workedExample: {
      id: 'abs-equation-worked-1',
      title: 'Solve an absolute value equation',
      problemStatement: 'Solve |x − 3| = 5.',
      steps: [
        { step: 1, instruction: 'Confirm q ≥ 0.', math: 'q = 5 ≥ 0', explanation: 'A solution exists since the required distance is nonnegative.' },
        { step: 2, instruction: 'Split into two equations.', math: 'x − 3 = 5   or   x − 3 = −5', explanation: 'x is either 5 units above p=3, or 5 units below it.' },
        { step: 3, instruction: 'Solve each equation.', math: 'x = 8   or   x = −2', explanation: 'Add 3 to both sides of each equation.' },
      ],
      finalAnswer: 'x = 8 or x = −2',
    },
    whyItWorks:
      '|x − p| represents the distance between x and p on the number line, and distance never ' +
      'depends on direction — so there are exactly two points at any given positive distance from p, one on each side, which is exactly what splitting into the + and − cases captures.',
    realLifeExample: {
      title: 'Acceptable manufacturing tolerance',
      scenario: 'A bolt must have a diameter within 0.5 mm of the target 10 mm, described by |diameter − 10| = 0.5 at the boundary of acceptability.',
      explanation: 'Solving gives diameter = 10.5 mm or 9.5 mm — the two exact boundary values, found the same way as any absolute value equation.',
    },
    practiceQuestions: [
      {
        id: 'abs-equation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Solve |x + 2| = 7.',
        options: [
          { id: 'a', text: 'x = 5 or x = −9' },
          { id: 'b', text: 'x = 9 or x = −5' },
          { id: 'c', text: 'x = 5 or x = 9' },
          { id: 'd', text: 'x = 7 or x = −7' },
        ],
        correctOptionId: 'a',
        hints: ['x + 2 = 7 or x + 2 = −7.'],
        explanation: 'x + 2 = 7 gives x = 5; x + 2 = −7 gives x = −9.',
      },
      {
        id: 'abs-equation-pq-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'How many solutions does |x − 4| = −3 have?',
        options: [
          { id: 'a', text: 'None — distance cannot be negative' },
          { id: 'b', text: 'One' },
          { id: 'c', text: 'Two' },
          { id: 'd', text: 'Infinitely many' },
        ],
        correctOptionId: 'a',
        hints: ['q = -3 is negative.'],
        explanation: 'Since |x−4| can never equal a negative number, this equation has no solution.',
      },
    ],
    commonMistake:
      'Forgetting the negative case entirely and reporting only one solution — an absolute value ' +
      'equation with q > 0 always has two solutions, not one.',
    quickReview: [
      '|x − p| = q splits into x − p = q or x − p = −q, when q ≥ 0.',
      'q > 0 gives two solutions; q = 0 gives one; q < 0 gives no solution.',
      'Geometrically: the two solutions are the points exactly q units on either side of p.',
    ],
  },

  'solving-absolute-value-inequalities': {
    slug: 'solving-absolute-value-inequalities',
    title: 'Solving Inequalities Involving |x − p|',
    difficulty: 'hard',
    simpleExplanation:
      'For q > 0: |x − p| < q means x is within q units of p, giving a single interval, ' +
      'p − q < x < p + q. |x − p| > q means x is farther than q units from p, giving two separate intervals: x < p − q or x > p + q.',
    whyItMatters:
      'This distinguishes a "close to" condition (a single connected range, from < or ≤) from a ' +
      '"far from" condition (two separate ranges, from > or ≥) — a common real-world distinction, such as tolerance ranges versus alarm thresholds.',
    diagram: {
      id: 'abs-inequality-diagram',
      title: 'Graph of y = |x − 3| − 5, showing where it is above/below the x-axis',
      altText: 'A V-shaped graph with vertex (3, -5), crossing the x-axis at x = -2 and x = 8, illustrating where the graph is below versus above zero',
      component: 'FunctionGraph',
      interactive: false,
      props: { kind: 'absolute-value', a: 1, h: 3, k: -5, min: -4, max: 10, showRoots: true, showVertex: true },
    },
    formulaSlug: 'absolute-value-inequality-rules',
    workedExample: {
      id: 'abs-inequality-worked-1',
      title: 'Solve an absolute value inequality',
      problemStatement: 'Solve |x − 3| < 5.',
      steps: [
        { step: 1, instruction: 'Recognize the "less than" pattern.', math: '|x − p| < q  ⇔  p − q < x < p + q', explanation: 'Here p = 3, q = 5.' },
        { step: 2, instruction: 'Substitute p and q.', math: '3 − 5 < x < 3 + 5', explanation: 'Apply the rule directly.' },
        { step: 3, instruction: 'Simplify.', math: '−2 < x < 8', explanation: 'This is a single connected interval.' },
      ],
      finalAnswer: '−2 < x < 8',
    },
    whyItWorks:
      '|x − p| < q means the distance from x to p is less than q, which describes every point ' +
      'strictly between p − q and p + q on the number line — a single band around p. The reverse, ' +
      '|x − p| > q, describes everywhere outside that band, which is naturally two separate rays.',
    realLifeExample: {
      title: 'Temperature control alarm',
      scenario: 'A greenhouse temperature system triggers an alarm whenever the temperature strays more than 4°C from the target 22°C.',
      explanation: '|temperature − 22| > 4 models the alarm condition — the "greater than" pattern gives two separate danger zones (too hot or too cold), exactly matching the two-interval rule.',
    },
    practiceQuestions: [
      {
        id: 'abs-inequality-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Solve |x + 1| > 4.',
        options: [
          { id: 'a', text: 'x < −5 or x > 3' },
          { id: 'b', text: '−5 < x < 3' },
          { id: 'c', text: 'x > 3' },
          { id: 'd', text: 'x < −5' },
        ],
        correctOptionId: 'a',
        hints: ['This is a "greater than" inequality, so expect two separate intervals.', 'p = −1, q = 4.'],
        explanation: 'x < −1−4 or x > −1+4, i.e. x < −5 or x > 3.',
      },
    ],
    commonMistake:
      'Using the "less than" pattern (single interval) for a "greater than" inequality, or vice ' +
      'versa — always check the inequality direction first: < or ≤ gives one interval; > or ≥ gives two.',
    quickReview: [
      '|x − p| < q: one interval, p − q < x < p + q.',
      '|x − p| > q: two intervals, x < p − q or x > p + q.',
      'These rules only apply directly when q > 0 — check that first.',
    ],
  },
};
