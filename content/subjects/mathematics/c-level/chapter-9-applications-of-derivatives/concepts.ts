import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 9 — Applications of Derivatives.
// Uses f(x) = x³ − 3x as a unifying worked example across critical
// points, extrema, and concavity (9.2–9.4), and f(x) = √x for the
// linear approximation section (9.5).
export const chapter9CConcepts: Record<string, Concept> = {
  'reviewing-derivatives-of-various-function-types': {
    slug: 'reviewing-derivatives-of-various-function-types',
    title: 'Reviewing Derivatives of Various Function Types',
    difficulty: 'medium',
    simpleExplanation:
      'Before using derivatives to solve problems, it helps to have the standard derivative rules for ' +
      'polynomial, rational, exponential, logarithmic, and trigonometric functions all in one place: power rule, ' +
      'quotient rule, and the specific derivatives of eˣ, bˣ, ln(x), sin(x), cos(x), and tan(x).',
    whyItMatters:
      'Every application in this chapter — finding critical points, classifying extrema, checking concavity, ' +
      'approximating values — starts with correctly computing a derivative, so fluency across all function ' +
      'types is the foundation everything else in the chapter is built on.',
    workedExample: {
      id: 'derivative-review-worked-1',
      title: 'Differentiate a mixed function',
      problemStatement: 'Find the derivative of f(x) = 3x² − eˣ + ln(x) − 2sin(x).',
      steps: [
        { step: 1, instruction: 'Differentiate the polynomial term.', math: 'd/dx[3x²] = 6x', explanation: 'Power rule: bring down the exponent, reduce it by 1.' },
        { step: 2, instruction: 'Differentiate the exponential term.', math: 'd/dx[eˣ] = eˣ', explanation: 'eˣ is its own derivative.' },
        { step: 3, instruction: 'Differentiate the logarithmic term.', math: 'd/dx[ln(x)] = 1/x', explanation: 'Standard derivative of the natural logarithm.' },
        { step: 4, instruction: 'Differentiate the trigonometric term.', math: 'd/dx[2sin(x)] = 2cos(x)', explanation: 'Derivative of sin(x) is cos(x); constants carry through.' },
        { step: 5, instruction: 'Combine, keeping every original sign.', math: "f'(x) = 6x − eˣ + 1/x − 2cos(x)", explanation: 'Add/subtract each differentiated term with its original sign.' },
      ],
      finalAnswer: "f'(x) = 6x − eˣ + 1/x − 2cos(x).",
    },
    whyItWorks:
      'Differentiation is linear — the derivative of a sum (or difference) of terms is just the sum (or ' +
      'difference) of each term\'s derivative — so each function type\'s known derivative rule can be applied ' +
      'to its own term independently and then combined.',
    realLifeExample: {
      title: 'A company\'s combined cost model',
      scenario: 'A factory\'s total cost might combine a fixed setup cost, a cost that grows with the square of ' +
        'output (polynomial), and a cost that grows exponentially once a resource becomes scarce.',
      explanation: 'Finding the rate at which total cost changes with output requires differentiating a mixed ' +
        'function exactly like this one — polynomial and exponential terms together.',
    },
    practiceQuestions: [
      {
        id: 'derivative-review-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "Find f'(x) for f(x) = 4x³ − ln(x).",
        hints: ['Differentiate each term separately.'],
        options: [
          { id: 'a', text: "f'(x) = 12x² − 1/x" },
          { id: 'b', text: "f'(x) = 12x² − x" },
          { id: 'c', text: "f'(x) = 4x² − 1/x" },
          { id: 'd', text: "f'(x) = 12x² + 1/x" },
        ],
        correctOptionId: 'a',
        explanation: 'Power rule gives 12x² for 4x³; the derivative of ln(x) is 1/x.',
      },
      {
        id: 'derivative-review-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "Find f'(x) for f(x) = cos(x) + 3ˣ.",
        hints: ['d/dx[bˣ] = bˣ·ln(b).'],
        options: [
          { id: 'a', text: "f'(x) = −sin(x) + 3ˣ·ln(3)" },
          { id: 'b', text: "f'(x) = sin(x) + 3ˣ·ln(3)" },
          { id: 'c', text: "f'(x) = −sin(x) + 3ˣ" },
          { id: 'd', text: "f'(x) = −cos(x) + 3ˣ·ln(3)" },
        ],
        correctOptionId: 'a',
        explanation: 'The derivative of cos(x) is −sin(x); the derivative of 3ˣ is 3ˣ·ln(3).',
      },
    ],
    commonMistake:
      'Forgetting that d/dx[bˣ] = bˣ·ln(b) for a general base b, not just bˣ — that simpler rule only holds ' +
      'when b = e.',
    quickReview: [
      'Differentiation is linear: differentiate each term separately, then combine.',
      'Power rule: d/dx[xⁿ] = n·xⁿ⁻¹. d/dx[eˣ] = eˣ. d/dx[ln(x)] = 1/x.',
      'd/dx[sin(x)] = cos(x); d/dx[cos(x)] = −sin(x); d/dx[tan(x)] = sec²(x).',
    ],
  },

  'critical-points-and-where-they-occur': {
    slug: 'critical-points-and-where-they-occur',
    title: 'Critical Points and Where They Occur',
    difficulty: 'medium',
    simpleExplanation:
      'A critical point of a function f is any x-value where f\'(x) = 0 or where f\'(x) does not exist. These ' +
      'are the only places a local maximum or local minimum can occur — the function\'s graph is momentarily ' +
      'flat (or has a sharp corner) there.',
    whyItMatters:
      'Critical points narrow down an infinite number of x-values to a short, finite list of candidates — ' +
      'turning "where is this function largest or smallest?" from an impossible search into a few calculations.',
    diagram: {
      id: 'critical-points-diagram',
      title: 'The graph of f(x) = x³ − 3x, with its two critical points marked',
      altText: 'A cubic curve that rises to a peak near x=−1, dips down to a valley near x=1, marked with dots at both points',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x * x - 3 * x,
        min: -2.5,
        max: 2.5,
        markPoints: [
          { x: -1, y: 2, label: 'critical point (−1, 2)' },
          { x: 1, y: -2, label: 'critical point (1, −2)' },
        ],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'critical-point-definition-formula',
    workedExample: {
      id: 'critical-points-worked-1',
      title: 'Find the critical points of a cubic',
      problemStatement: 'Find all critical points of f(x) = x³ − 3x.',
      steps: [
        { step: 1, instruction: 'Differentiate f.', math: "f'(x) = 3x² − 3", explanation: 'Power rule applied term by term.' },
        { step: 2, instruction: "Set f'(x) = 0 and solve.", math: '3x² − 3 = 0  ⟹  x² = 1  ⟹  x = ±1', explanation: "f'(x) is a polynomial, so it is defined everywhere — the only critical points come from f'(x)=0." },
        { step: 3, instruction: 'Find the corresponding y-values.', math: 'f(−1) = −1+3 = 2,   f(1) = 1−3 = −2', explanation: 'Substitute each critical x-value back into f itself, not into f\'.' },
      ],
      finalAnswer: 'Critical points at (−1, 2) and (1, −2).',
    },
    whyItWorks:
      'At a smooth local maximum or minimum, the tangent line must be exactly horizontal — any nonzero slope ' +
      'means the function is still rising or falling, and could not yet be at a peak or valley — so f\'(x)=0 is a ' +
      'necessary condition. Where f\'(x) does not exist (a sharp corner), the function can still turn around ' +
      'there, so those points must be checked too.',
    realLifeExample: {
      title: 'The peak height of a thrown ball',
      scenario: 'A ball\'s height over time rises, momentarily stops rising at its peak, then falls.',
      explanation: 'That exact instant — where the height function\'s derivative (its velocity) equals zero — ' +
        'is a critical point, and it is exactly where the ball reaches its maximum height.',
    },
    practiceQuestions: [
      {
        id: 'critical-points-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the critical point of f(x) = x² − 4x + 1 (give the x-value).',
        hints: ["Set f'(x)=0 and solve for x."],
        correctAnswer: 2,
        explanation: "f'(x) = 2x − 4 = 0 ⟹ x = 2.",
      },
      {
        id: 'critical-points-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For f(x) = x³ − 3x, what is the y-coordinate of the critical point at x = 1?',
        hints: ['Substitute x=1 into f(x), not into f\'(x).'],
        correctAnswer: -2,
        explanation: 'f(1) = 1³ − 3(1) = 1 − 3 = −2.',
      },
    ],
    commonMistake:
      'Substituting the critical x-value back into f\'(x) instead of f(x) when finding the point\'s ' +
      'y-coordinate — f\'(x) is exactly 0 there by construction, which is not the point\'s height.',
    quickReview: [
      'Critical points: where f\'(x)=0 or f\'(x) is undefined.',
      'They are the only candidates for local maxima and minima.',
      'Always substitute back into f (not f\') to get the point\'s y-coordinate.',
    ],
  },

  'increasing-and-decreasing-intervals': {
    slug: 'increasing-and-decreasing-intervals',
    title: 'Increasing and Decreasing Intervals',
    difficulty: 'medium',
    simpleExplanation:
      'Critical points split the x-axis into intervals. Testing the sign of f\'(x) at one sample point inside ' +
      'each interval reveals whether f is increasing (f\'>0) or decreasing (f\'<0) across that whole interval.',
    whyItMatters:
      'Knowing exactly where a function rises and falls turns a rough sketch of a graph into an accurate one, ' +
      'and is the direct next step after finding critical points on the way to classifying them.',
    formulaSlug: 'increasing-decreasing-test-formula',
    workedExample: {
      id: 'increasing-decreasing-worked-1',
      title: 'Find the increasing and decreasing intervals of a cubic',
      problemStatement: 'Using f(x) = x³ − 3x, with critical points at x=−1 and x=1, determine where f is increasing and decreasing.',
      steps: [
        { step: 1, instruction: 'List the intervals the critical points create.', math: '(−∞, −1),  (−1, 1),  (1, ∞)', explanation: 'The two critical points split the number line into three pieces.' },
        { step: 2, instruction: 'Test a sample point in (−∞,−1), say x=−2.', math: "f'(−2) = 3(−2)² − 3 = 9 > 0", explanation: 'A positive result means f is increasing on this whole interval.' },
        { step: 3, instruction: 'Test a sample point in (−1,1), say x=0.', math: "f'(0) = 3(0)² − 3 = −3 < 0", explanation: 'A negative result means f is decreasing on this whole interval.' },
        { step: 4, instruction: 'Test a sample point in (1,∞), say x=2.', math: "f'(2) = 3(2)² − 3 = 9 > 0", explanation: 'A positive result means f is increasing on this whole interval.' },
      ],
      finalAnswer: 'f is increasing on (−∞,−1) and (1,∞), and decreasing on (−1,1).',
    },
    whyItWorks:
      'Because f\'(x) = 3x²−3 is continuous, it can only change sign by passing through zero — and the zeros ' +
      'are exactly the critical points already found — so f\' cannot change sign anywhere inside one of these ' +
      'intervals, making one sample point per interval enough to determine the sign for the entire interval.',
    realLifeExample: {
      title: 'A stock price\'s rising and falling phases',
      scenario: 'A stock\'s price over a year might climb, then dip during a slow quarter, then climb again.',
      explanation: 'Each of those phases is exactly an interval where the price function is increasing or ' +
        'decreasing, separated by the critical points where its rate of change hits zero.',
    },
    practiceQuestions: [
      {
        id: 'increasing-decreasing-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'f(x) = x² − 4x + 1 has a critical point at x=2. Is f increasing or decreasing on (−∞, 2)?',
        hints: ["Test f'(x)=2x−4 at a sample point like x=0."],
        options: [
          { id: 'a', text: 'Decreasing' },
          { id: 'b', text: 'Increasing' },
          { id: 'c', text: 'Constant' },
          { id: 'd', text: 'Cannot be determined' },
        ],
        correctOptionId: 'a',
        explanation: "f'(0) = 2(0)−4 = −4 < 0, so f is decreasing on (−∞,2).",
      },
    ],
    commonMistake:
      'Testing the sign of f(x) itself instead of f\'(x) — increasing/decreasing behavior is determined by the ' +
      'sign of the derivative, not the sign of the original function.',
    quickReview: [
      'Critical points split the domain into test intervals.',
      "f'(x)>0 on an interval ⟹ f increasing there; f'(x)<0 ⟹ f decreasing there.",
      'One sample point per interval is enough, since f\' cannot change sign without crossing zero.',
    ],
  },

  'finding-absolute-and-local-extrema': {
    slug: 'finding-absolute-and-local-extrema',
    title: 'Finding Absolute and Local Extrema',
    difficulty: 'hard',
    simpleExplanation:
      'A local extremum is a peak or valley relative to nearby points; an absolute extremum is the single ' +
      'largest or smallest value over an entire interval (or the whole domain). On a closed interval [a,b], ' +
      'the absolute extrema always occur either at a critical point or at one of the two endpoints.',
    whyItMatters:
      'Absolute extrema answer real optimization questions directly — the biggest possible profit, the ' +
      'smallest possible cost, the maximum height — rather than just describing local shape.',
    diagram: {
      id: 'absolute-extrema-diagram',
      title: 'f(x) = x³ − 3x on the closed interval [−2, 2]',
      altText: 'A cubic curve on a bounded interval, with its local max, local min, and both endpoints marked, showing the highest and lowest points overall',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x * x - 3 * x,
        min: -2,
        max: 2,
        markPoints: [
          { x: -2, y: -2, label: 'endpoint (−2, −2)' },
          { x: -1, y: 2, label: 'local max (−1, 2)' },
          { x: 1, y: -2, label: 'local min (1, −2)' },
          { x: 2, y: 2, label: 'endpoint (2, 2)' },
        ],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'extrema-classification-formula',
    workedExample: {
      id: 'absolute-extrema-worked-1',
      title: 'Find the absolute extrema on a closed interval',
      problemStatement: 'Find the absolute maximum and minimum of f(x) = x³ − 3x on [−2, 2].',
      steps: [
        { step: 1, instruction: 'List the critical points inside the interval.', math: 'x = −1 and x = 1 (both lie in [−2,2])', explanation: "Found earlier by solving f'(x)=0." },
        { step: 2, instruction: 'Evaluate f at both critical points.', math: 'f(−1) = 2,   f(1) = −2', explanation: 'These are the local extrema found earlier.' },
        { step: 3, instruction: 'Evaluate f at both endpoints.', math: 'f(−2) = (−2)³−3(−2) = −8+6 = −2,   f(2) = 8−6 = 2', explanation: 'Endpoints must always be checked too — the absolute extrema can occur there instead of at a critical point.' },
        { step: 4, instruction: 'Compare all four values.', math: 'f(−2)=−2,  f(−1)=2,  f(1)=−2,  f(2)=2', explanation: 'The absolute maximum is the largest of these; the absolute minimum is the smallest.' },
      ],
      finalAnswer: 'Absolute maximum = 2 (attained at both x=−1 and x=2); absolute minimum = −2 (attained at both x=1 and x=−2).',
    },
    whyItWorks:
      'On a closed, bounded interval, a continuous function is guaranteed to attain both an absolute maximum ' +
      'and an absolute minimum (the Extreme Value Theorem). That extreme value must happen either where the ' +
      'function momentarily flattens out (a critical point) or at the very edge of the allowed range (an ' +
      'endpoint) — nowhere else is possible, so checking just those candidates is guaranteed to find it.',
    realLifeExample: {
      title: 'Maximum profit within a limited production range',
      scenario: 'A factory can only realistically produce between 0 and 500 units per day; profit as a ' +
        'function of units produced has its own shape within that range.',
      explanation: 'The maximum achievable profit is found the same way — check the critical points of the ' +
        'profit function and the two endpoints (0 and 500 units), then compare.',
    },
    practiceQuestions: [
      {
        id: 'absolute-extrema-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For f(x) = x³ − 3x on [−2, 2], what is the absolute maximum value?',
        hints: ['Compare f at both critical points and both endpoints.'],
        correctAnswer: 2,
        explanation: 'f(−1)=2 and f(2)=2 are both the largest of the four candidate values, so the absolute maximum is 2.',
      },
      {
        id: 'absolute-extrema-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'On a closed interval [a,b], where can the absolute extrema of a continuous function occur?',
        hints: ['Both kinds of candidate location must be checked.'],
        options: [
          { id: 'a', text: 'Only at critical points' },
          { id: 'b', text: 'Only at the endpoints' },
          { id: 'c', text: 'At critical points or at the endpoints' },
          { id: 'd', text: 'Anywhere at all' },
        ],
        correctOptionId: 'c',
        explanation: 'These are the only two kinds of candidate locations for an absolute extremum on a closed interval.',
      },
    ],
    commonMistake:
      'Forgetting to check the endpoints — on a closed interval, an absolute extremum can occur at an ' +
      'endpoint even when the endpoint is not a critical point at all.',
    quickReview: [
      'Local extrema: peaks/valleys relative to nearby points, always at critical points.',
      'Absolute extrema on [a,b]: the single largest/smallest value overall — check critical points AND endpoints.',
      'Compare all candidate values; the largest is the absolute max, the smallest is the absolute min.',
    ],
  },

  'the-second-derivative-and-concavity': {
    slug: 'the-second-derivative-and-concavity',
    title: 'The Second Derivative and Concavity',
    difficulty: 'medium',
    simpleExplanation:
      'The second derivative f\'\'(x) is the derivative of f\'(x). Its sign describes concavity: f\'\'(x)>0 means ' +
      'the graph curves upward like a cup (concave up), and f\'\'(x)<0 means it curves downward like a frown ' +
      '(concave down). A point where concavity switches from one to the other is an inflection point.',
    whyItMatters:
      'Concavity captures how a function is curving, not just whether it is rising or falling — the ' +
      'difference between accelerating growth and decelerating growth, which matters enormously in ' +
      'economics, physics, and any model of change.',
    diagram: {
      id: 'concavity-diagram',
      title: 'f(x) = x³ − 3x, with its inflection point marked at the origin',
      altText: 'A cubic curve that is concave down to the left of the origin and concave up to the right of it, with the origin marked as the inflection point',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x * x - 3 * x,
        min: -2.5,
        max: 2.5,
        markPoints: [{ x: 0, y: 0, label: 'inflection point (0, 0)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'concavity-formula',
    workedExample: {
      id: 'concavity-worked-1',
      title: 'Find the concavity and inflection point of a cubic',
      problemStatement: 'Determine the concavity of f(x) = x³ − 3x and find its inflection point.',
      steps: [
        { step: 1, instruction: 'Find the first derivative.', math: "f'(x) = 3x² − 3", explanation: 'Same as before.' },
        { step: 2, instruction: 'Find the second derivative.', math: "f''(x) = 6x", explanation: 'Differentiate f\'(x) again.' },
        { step: 3, instruction: "Set f''(x)=0 to find candidate inflection points.", math: '6x = 0  ⟹  x = 0', explanation: 'A sign change in f\'\' can only happen where f\'\' is zero (or undefined).' },
        { step: 4, instruction: 'Test the sign of f\'\' on either side of x=0.', math: "f''(−1) = −6 < 0,   f''(1) = 6 > 0", explanation: 'Negative means concave down; positive means concave up — the sign really does change here.' },
      ],
      finalAnswer: 'f is concave down on (−∞,0), concave up on (0,∞), with an inflection point at (0,0).',
    },
    whyItWorks:
      'The first derivative measures how fast f is changing; the second derivative measures how fast f\' ' +
      'itself is changing — that is, whether the slope is increasing (curving upward, concave up) or ' +
      'decreasing (curving downward, concave down) as x increases.',
    realLifeExample: {
      title: 'A pandemic\'s case count slowing down',
      scenario: 'During an outbreak, the total number of cases keeps rising, but at some point the daily rate ' +
        'of new cases starts to fall even though the total is still increasing.',
      explanation: 'That turning point — where growth switches from accelerating to decelerating — is exactly ' +
        'an inflection point of the total-cases function, found from where its second derivative changes sign.',
    },
    practiceQuestions: [
      {
        id: 'concavity-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'For f(x) = x² − 4x + 1, is the graph concave up or concave down everywhere?',
        hints: ["Find f''(x) — it is a constant here."],
        options: [
          { id: 'a', text: 'Concave up everywhere' },
          { id: 'b', text: 'Concave down everywhere' },
          { id: 'c', text: 'It changes concavity at x=2' },
          { id: 'd', text: 'It has no concavity' },
        ],
        correctOptionId: 'a',
        explanation: "f'(x)=2x−4, so f''(x)=2, which is always positive — the parabola is concave up everywhere, with no inflection point.",
      },
    ],
    commonMistake:
      'Assuming every point where f\'\'(x)=0 is automatically an inflection point — the sign of f\'\' must ' +
      'actually change on either side of it; if it does not change sign, it is not an inflection point.',
    quickReview: [
      "f''(x)>0 ⟹ concave up (cup shape); f''(x)<0 ⟹ concave down (frown shape).",
      "Inflection point: where concavity changes — a candidate where f''(x)=0, confirmed by an actual sign change.",
      'Concavity describes how the rate of change itself is changing.',
    ],
  },

  'the-second-derivative-test-for-extrema': {
    slug: 'the-second-derivative-test-for-extrema',
    title: 'The Second Derivative Test for Extrema',
    difficulty: 'hard',
    simpleExplanation:
      'At a critical point c where f\'(c)=0, the Second Derivative Test classifies it using f\'\'(c): if ' +
      'f\'\'(c)>0 the graph is concave up there, so c is a local minimum; if f\'\'(c)<0 the graph is concave ' +
      'down there, so c is a local maximum; if f\'\'(c)=0 the test is inconclusive and the First Derivative ' +
      'Test must be used instead.',
    whyItMatters:
      'It is often faster than checking the sign of f\' on both sides of a critical point (the First ' +
      'Derivative Test) — a single evaluation of f\'\' at the critical point is usually enough.',
    formulaSlug: 'second-derivative-test-formula',
    workedExample: {
      id: 'second-derivative-test-worked-1',
      title: 'Classify critical points using the Second Derivative Test',
      problemStatement: 'Classify the critical points of f(x) = x³ − 3x (at x=−1 and x=1) using the Second Derivative Test.',
      steps: [
        { step: 1, instruction: 'Recall the second derivative.', math: "f''(x) = 6x", explanation: 'Found in the previous section.' },
        { step: 2, instruction: 'Evaluate f\'\' at x=−1.', math: "f''(−1) = 6(−1) = −6 < 0", explanation: 'Negative ⟹ concave down ⟹ local maximum.' },
        { step: 3, instruction: 'Evaluate f\'\' at x=1.', math: "f''(1) = 6(1) = 6 > 0", explanation: 'Positive ⟹ concave up ⟹ local minimum.' },
      ],
      finalAnswer: 'x=−1 is a local maximum (f(−1)=2); x=1 is a local minimum (f(1)=−2) — matching the earlier First Derivative Test result.',
    },
    whyItWorks:
      'If f\'\'(c)>0, the graph is concave up right around c, which means the tangent line (already flat, ' +
      'since f\'(c)=0) sits below the curve on both sides — exactly the shape of a local minimum. The ' +
      'mirror-image argument with f\'\'(c)<0 gives a local maximum.',
    realLifeExample: {
      title: 'Confirming a minimum-cost production level',
      scenario: 'A cost function has a critical point at a certain production level, suspected to be the ' +
        'cheapest level to operate at.',
      explanation: 'Checking that the cost function\'s second derivative is positive there confirms it truly ' +
        'is a minimum (concave up), rather than a maximum or an inflection point.',
    },
    practiceQuestions: [
      {
        id: 'second-derivative-test-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'At a critical point c, f\'\'(c) = 5. What does the Second Derivative Test conclude?',
        hints: ["A positive f''(c) means the graph is concave up at c."],
        options: [
          { id: 'a', text: 'Local maximum' },
          { id: 'b', text: 'Local minimum' },
          { id: 'c', text: 'Inflection point' },
          { id: 'd', text: 'Inconclusive' },
        ],
        correctOptionId: 'b',
        explanation: 'f\'\'(c)>0 means concave up at c, which the Second Derivative Test classifies as a local minimum.',
      },
      {
        id: 'second-derivative-test-pq-2',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'At a critical point c, f\'\'(c) = 0. What must be done to classify c?',
        hints: ['The Second Derivative Test does not decide this case.'],
        options: [
          { id: 'a', text: 'Conclude c is an inflection point automatically' },
          { id: 'b', text: 'Conclude c is a local maximum automatically' },
          { id: 'c', text: 'Use the First Derivative Test instead, checking the sign of f\' on both sides of c' },
          { id: 'd', text: 'Conclude c is not a critical point after all' },
        ],
        correctOptionId: 'c',
        explanation: 'f\'\'(c)=0 makes the Second Derivative Test inconclusive, so a different method (the First Derivative Test) is needed.',
      },
    ],
    commonMistake:
      'Applying the Second Derivative Test at a point that is not actually a critical point — the test only ' +
      'classifies points where f\'(c)=0 in the first place.',
    quickReview: [
      "f''(c)>0 at a critical point c ⟹ local minimum. f''(c)<0 ⟹ local maximum.",
      "f''(c)=0 ⟹ inconclusive — fall back to the First Derivative Test.",
      'Usually faster than the First Derivative Test, but not always applicable.',
    ],
  },

  'linear-approximation-using-derivatives': {
    slug: 'linear-approximation-using-derivatives',
    title: 'Linear Approximation Using Derivatives',
    difficulty: 'medium',
    simpleExplanation:
      'Near a point a where f(a) and f\'(a) are both known exactly, the tangent line L(x) = f(a) + f\'(a)(x−a) ' +
      'closely hugs the curve — so L(x) gives a quick, accurate estimate of f(x) for x near a, without needing ' +
      'to compute f(x) exactly.',
    whyItMatters:
      'Linear approximation gives fast, useful estimates when an exact value is hard or impossible to compute ' +
      'by hand — a technique used constantly in engineering, physics, and numerical methods.',
    diagram: {
      id: 'linear-approximation-diagram',
      title: 'The tangent line to f(x) = √x at a = 4, used to approximate √4.1',
      altText: 'A square-root curve with a straight tangent line touching it at the point (4,2), the two nearly overlapping close to that point',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sqrt(x),
        fn2: (x: number) => 2 + 0.25 * (x - 4),
        min: 1,
        max: 8,
        markPoints: [{ x: 4, y: 2, label: 'point of tangency (4, 2)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'linear-approximation-formula',
    workedExample: {
      id: 'linear-approximation-worked-1',
      title: 'Approximate √4.1 using a tangent line',
      problemStatement: 'Use linear approximation at a=4 to estimate √4.1, where f(x) = √x.',
      steps: [
        { step: 1, instruction: 'Compute f(a) and f\'(x).', math: "f(4) = √4 = 2,    f'(x) = 1/(2√x)", explanation: 'a=4 is chosen because √4 is an exact, easy value.' },
        { step: 2, instruction: "Evaluate f'(a).", math: "f'(4) = 1/(2√4) = 1/4 = 0.25", explanation: 'This is the slope of the tangent line at a=4.' },
        { step: 3, instruction: 'Build the linear approximation.', math: 'L(x) = f(4) + f\'(4)(x−4) = 2 + 0.25(x−4)', explanation: 'Plug f(a) and f\'(a) into the formula.' },
        { step: 4, instruction: 'Evaluate L at x=4.1.', math: 'L(4.1) = 2 + 0.25(0.1) = 2 + 0.025 = 2.025', explanation: '4.1 is close to a=4, so the tangent line stays close to the true curve there.' },
      ],
      finalAnswer: '√4.1 ≈ 2.025 (the true value is about 2.0248, so the estimate is accurate to three decimal places).',
    },
    whyItWorks:
      'The tangent line at a shares both the value f(a) and the slope f\'(a) with the curve at that exact ' +
      'point — the best straight-line match to the curve\'s local behavior — so for x close to a, where the ' +
      'curve has not had room to bend away from that straight line yet, L(x) stays very close to f(x).',
    realLifeExample: {
      title: 'Estimating a measurement without a calculator',
      scenario: 'An engineer needs a quick estimate of √4.1 in the field, without access to a calculator.',
      explanation: 'Linear approximation using the easy, exact nearby value √4=2 gives a fast, sufficiently ' +
        'accurate estimate — 2.025 — without needing to compute the square root directly.',
    },
    practiceQuestions: [
      {
        id: 'linear-approximation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Using f(x)=√x and a=9, estimate √9.2 with linear approximation. (f\'(9) = 1/6.)',
        hints: ['L(x) = f(9) + f\'(9)(x−9), with f(9)=3.'],
        correctAnswer: 3.033,
        tolerance: 0.01,
        explanation: 'L(9.2) = 3 + (1/6)(0.2) = 3 + 0.0333... ≈ 3.033.',
      },
    ],
    commonMistake:
      'Using linear approximation for an x-value far away from a — the tangent line only stays close to the ' +
      'curve near the point of tangency, and the estimate gets progressively worse the farther x is from a.',
    quickReview: [
      "L(x) = f(a) + f'(a)(x−a): the tangent line at a, used as an estimate for f(x) near a.",
      'Choose a to be a nearby point where f(a) and f\'(a) are both easy to compute exactly.',
      'Accuracy degrades as x moves farther from a.',
    ],
  },
};
