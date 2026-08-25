import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 11 — Methods of Differentiation.
// Matches sections 11.1-11.4 of the textbook exactly.
export const chapter11BConcepts: Record<string, Concept> = {
  'the-idea-of-a-limit': {
    slug: 'the-idea-of-a-limit',
    title: 'The Idea of a Limit',
    difficulty: 'medium',
    simpleExplanation:
      'The limit of a function f(x) as x approaches a value a, written lim(x→a) f(x) = L, describes ' +
      'what value f(x) gets closer and closer to as x gets closer and closer to a — WITHOUT needing ' +
      'f(x) to actually be defined (or correct) exactly at x=a itself.',
    whyItMatters:
      'Limits are the foundation that makes the rest of calculus possible — they let us talk precisely ' +
      'about "instantaneous" behavior, which is otherwise a contradiction (a single instant has no ' +
      'interval over which to measure a rate).',
    diagram: {
      id: 'limit-idea-diagram',
      title: 'f(x) = (x²−1)/(x−1) has a "hole" at x=1, but a well-defined limit there',
      altText: 'A graph showing a straight line with a hole at x=1, where the function is undefined, but the limit as x approaches 1 is clearly 2',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => (x * x - 1) / (x - 1),
        min: -2,
        max: 4,
        markPoints: [{ x: 1, y: 2, label: 'limit = 2' }],
        xLabel: 'x',
        yLabel: 'f(x)',
      },
    },
    workedExample: {
      id: 'limit-idea-worked-1',
      title: 'Estimate a limit from a table of values',
      problemStatement: 'For f(x) = (x²−1)/(x−1), f(x) is undefined at x=1. By evaluating f(x) at x-values very close to 1 (like 0.9, 0.99, 1.1, 1.01), estimate lim(x→1) f(x).',
      steps: [
        { step: 1, instruction: 'Evaluate f(x) just below 1.', math: 'f(0.9)=1.9,  f(0.99)=1.99', explanation: 'As x approaches 1 from below, f(x) approaches 2.' },
        { step: 2, instruction: 'Evaluate f(x) just above 1.', math: 'f(1.1)=2.1,  f(1.01)=2.01', explanation: 'As x approaches 1 from above, f(x) also approaches 2.' },
        { step: 3, instruction: 'Compare both directions.', explanation: 'Since f(x) approaches the same value (2) from both sides, the limit exists.' },
      ],
      finalAnswer: 'lim(x→1) f(x) = 2, even though f(1) itself is undefined.',
    },
    whyItWorks:
      'For x ≠ 1, (x²−1)/(x−1) factors as (x−1)(x+1)/(x−1), and the (x−1) factors cancel, leaving ' +
      'x+1 — which is perfectly well-defined at x=1, giving 1+1=2. The limit describes this "filled-in" ' +
      'behavior, even though the original expression has a 0/0 gap exactly at x=1.',
    realLifeExample: {
      title: 'A speedometer\'s instantaneous reading',
      scenario: 'A car\'s speedometer shows a single "instantaneous" speed at each moment, not an average over some time interval.',
      explanation: 'This instantaneous speed is conceptually the limit of the average speed (distance ÷ time) as the time interval shrinks toward zero — exactly the idea of a limit.',
    },
    practiceQuestions: [
      {
        id: 'limit-idea-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For g(x) = (x²−9)/(x−3), find lim(x→3) g(x).',
        hints: ['Factor the numerator: x²−9 = (x−3)(x+3).', 'Cancel the (x−3) factors, then substitute x=3.'],
        correctAnswer: 6,
        explanation: 'g(x) = (x−3)(x+3)/(x−3) = x+3 for x≠3, so the limit is 3+3=6.',
      },
    ],
    commonMistake:
      'Assuming a limit doesn\'t exist just because the function itself is undefined at that exact ' +
      'point — a limit only cares about the behavior NEAR the point, not the (possibly missing) value at the point itself.',
    quickReview: [
      'lim(x→a) f(x) = L means f(x) gets closer to L as x gets closer to a.',
      'The limit can exist even where f(a) itself is undefined.',
      'Limits are the foundation of the derivative and the rest of calculus.',
    ],
  },

  'evaluating-limits-by-direct-substitution-and-factoring': {
    slug: 'evaluating-limits-by-direct-substitution-and-factoring',
    title: 'Evaluating Limits by Direct Substitution and Factoring',
    difficulty: 'medium',
    simpleExplanation:
      'For most "well-behaved" functions, a limit can be found by direct substitution — just plug in ' +
      'x=a. But if this gives an indeterminate form like 0/0, factor both the numerator and denominator ' +
      'first, cancel any common factor, and THEN substitute.',
    whyItMatters:
      'This is the practical, everyday technique for evaluating most limits by hand, without needing a ' +
      'table of values or a graph.',
    workedExample: {
      id: 'evaluating-limits-worked-1',
      title: 'Evaluate a limit using factoring',
      problemStatement: 'Find lim(x→2) (x²−4)/(x−2).',
      steps: [
        { step: 1, instruction: 'Try direct substitution first.', math: '(2²−4)/(2−2) = 0/0', explanation: 'This is indeterminate — direct substitution alone doesn\'t work.' },
        { step: 2, instruction: 'Factor the numerator.', math: 'x²−4 = (x−2)(x+2)', explanation: 'Difference of squares.' },
        { step: 3, instruction: 'Cancel the common factor.', math: '(x−2)(x+2)/(x−2) = x+2,  for x≠2', explanation: 'The (x−2) factors cancel.' },
        { step: 4, instruction: 'Substitute x=2 into the simplified expression.', math: '2+2 = 4', explanation: 'Now direct substitution works.' },
      ],
      finalAnswer: 'lim(x→2) (x²−4)/(x−2) = 4.',
    },
    whyItWorks:
      'The cancelled expression x+2 agrees with the original (x²−4)/(x−2) at EVERY x-value except ' +
      'exactly x=2 — and since a limit only cares about values near (not at) x=2, evaluating the ' +
      'simplified expression at x=2 correctly gives the limit of the original.',
    realLifeExample: {
      title: 'A formula with a removable gap at one operating condition',
      scenario: 'An engineering formula for efficiency happens to produce 0/0 at exactly one specific input setting, even though efficiency clearly should have a well-defined value there.',
      explanation: 'Factoring and cancelling (just as with a limit) reveals the true, well-defined value the formula approaches at that exact setting.',
    },
    practiceQuestions: [
      {
        id: 'evaluating-limits-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find lim(x→5) (x²−25)/(x−5).',
        hints: ['x²−25 = (x−5)(x+5).'],
        correctAnswer: 10,
        explanation: '(x−5)(x+5)/(x−5) = x+5 for x≠5, so the limit is 5+5=10.',
      },
    ],
    commonMistake:
      'Giving up and saying "undefined" the moment direct substitution produces 0/0 — this only means ' +
      'try factoring next; the limit itself may still exist.',
    quickReview: [
      'Try direct substitution first.',
      'If you get 0/0, factor numerator and denominator, cancel common factors, then substitute again.',
      'The limit can exist and be found this way even when the original expression is undefined at that point.',
    ],
  },

  'the-derivative-as-a-rate-of-change': {
    slug: 'the-derivative-as-a-rate-of-change',
    title: 'The Derivative as a Rate of Change',
    difficulty: 'medium',
    simpleExplanation:
      'The AVERAGE rate of change of f between x=a and x=b is [f(b)−f(a)]/(b−a) — the slope of the ' +
      'secant line through those two points. Shrinking the interval [a,b] down toward a single point ' +
      'gives the INSTANTANEOUS rate of change at that point — the derivative — which is the slope of ' +
      'the tangent line there.',
    whyItMatters:
      'This is the bridge between something concrete and measurable (a secant slope over an interval) ' +
      'and the more abstract idea of an instantaneous rate (a tangent slope at a single point).',
    diagram: {
      id: 'secant-line-diagram',
      title: 'A secant line through (0,0) and (2,4) on y = x²',
      altText: 'A parabola y=x squared, with a straight secant line drawn through the two points (0,0) and (2,4) on the curve',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x,
        fn2: (x: number) => 2 * x,
        min: -1,
        max: 5,
        markPoints: [{ x: 0, y: 0, label: '(0,0)' }, { x: 2, y: 4, label: '(2,4)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'average-rate-of-change-formula',
    workedExample: {
      id: 'rate-of-change-worked-1',
      title: 'Find an average rate of change',
      problemStatement: 'A ball\'s height is given by h(t) = t² (in meters, for t in seconds). Find the average rate of change of height between t=0 and t=2.',
      steps: [
        { step: 1, instruction: 'Apply the average rate of change formula.', math: '[h(2) − h(0)] / (2 − 0)', explanation: 'This is the secant line\'s slope.' },
        { step: 2, instruction: 'Evaluate h at each endpoint.', math: 'h(2) = 4,  h(0) = 0', explanation: 'Substitute t=2 and t=0 into h(t)=t².' },
        { step: 3, instruction: 'Compute the rate.', math: '(4 − 0) / (2 − 0) = 2', explanation: 'Divide the change in height by the change in time.' },
      ],
      finalAnswer: 'Average rate of change = 2 m/s.',
    },
    whyItWorks:
      'The average rate of change is exactly the slope formula (rise over run) applied to the two ' +
      'points (a, f(a)) and (b, f(b)) on the curve — as those two points are brought closer and closer ' +
      'together (b→a), the secant line through them rotates to become the tangent line, and its slope ' +
      'becomes the instantaneous rate of change.',
    realLifeExample: {
      title: 'Average speed versus marginal production cost',
      scenario: 'A factory tracks its average cost per unit over a range of production levels, but managers ultimately want to know the cost of producing exactly ONE more unit at the current level.',
      explanation: 'The average cost over a range is a secant slope; the "marginal cost" at an exact production level is the derivative — the instantaneous rate of change.',
    },
    practiceQuestions: [
      {
        id: 'rate-of-change-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Given f(x) = x², find the average rate of change of f between x=1 and x=4.',
        hints: ['[f(4) − f(1)] / (4 − 1).'],
        correctAnswer: 5,
        explanation: '(16 − 1)/(4 − 1) = 15/3 = 5.',
      },
    ],
    commonMistake:
      'Confusing the average rate of change (a secant slope, over an interval) with the instantaneous ' +
      'rate of change (a tangent slope, at a single point) — they are related but generally different numbers.',
    quickReview: [
      'Average rate of change = [f(b)−f(a)]/(b−a), the secant line\'s slope.',
      'Shrinking the interval to a single point gives the instantaneous rate — the derivative.',
      'Instantaneous rate of change = the slope of the tangent line at that point.',
    ],
  },

  'the-derivative-as-the-limit-of-the-difference-quotient': {
    slug: 'the-derivative-as-the-limit-of-the-difference-quotient',
    title: 'The Derivative as the Limit of the Difference Quotient',
    difficulty: 'hard',
    simpleExplanation:
      'Formally, the derivative of f at x is f\'(x) = lim(h→0) [f(x+h) − f(x)]/h — the limit of the ' +
      'average rate of change over an interval of width h, as h shrinks to zero. This "difference ' +
      'quotient" is the same average-rate-of-change idea, just written with the second point as x+h ' +
      'instead of a fixed b.',
    whyItMatters:
      'This is the actual formal definition of the derivative — every differentiation rule in this ' +
      'chapter can, in principle, be derived directly from this one definition.',
    diagram: {
      id: 'tangent-line-diagram',
      title: 'The tangent line to y = x² at (2, 4), with slope 4',
      altText: 'A parabola y=x squared, with a straight tangent line touching the curve at the single point (2,4)',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => x * x,
        fn2: (x: number) => 4 * x - 4,
        min: -1,
        max: 5,
        markPoints: [{ x: 2, y: 4, label: '(2,4)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'derivative-definition',
    workedExample: {
      id: 'derivative-definition-worked-1',
      title: 'Find a derivative from the limit definition',
      problemStatement: 'Use the limit definition of the derivative to find f\'(x) for f(x) = x².',
      steps: [
        { step: 1, instruction: 'Write the difference quotient.', math: "f'(x) = lim(h→0) [f(x+h) − f(x)] / h", explanation: 'Start from the formal definition.' },
        { step: 2, instruction: 'Substitute f(x)=x².', math: '[(x+h)² − x²] / h', explanation: 'Replace f(x+h) and f(x) with (x+h)² and x².' },
        { step: 3, instruction: 'Expand the numerator.', math: '(x²+2xh+h² − x²)/h = (2xh+h²)/h', explanation: 'The x² terms cancel.' },
        { step: 4, instruction: 'Factor and cancel h.', math: 'h(2x+h)/h = 2x+h', explanation: 'Valid for h≠0, which is fine since h never actually equals 0 in the limit.' },
        { step: 5, instruction: 'Take the limit as h→0.', math: 'lim(h→0) (2x+h) = 2x', explanation: 'Substitute h=0 into the simplified expression.' },
      ],
      finalAnswer: "f'(x) = 2x.",
    },
    whyItWorks:
      'This is exactly the average rate of change formula, [f(b)−f(a)]/(b−a), with a=x and b=x+h (so ' +
      'b−a=h). As h shrinks toward 0, the second point (x+h, f(x+h)) slides along the curve toward ' +
      '(x, f(x)), and the secant line through them rotates to become the tangent line at x — its slope ' +
      'in the limit is exactly the derivative.',
    realLifeExample: {
      title: 'Defining instantaneous velocity precisely',
      scenario: 'A physicist needs a mathematically rigorous definition of "velocity at an exact instant," not just average velocity over some measured time interval.',
      explanation: 'The limit of the average velocity, [s(t+h)−s(t)]/h, as h shrinks to zero, IS the rigorous definition of instantaneous velocity — precisely this difference quotient.',
    },
    practiceQuestions: [
      {
        id: 'derivative-definition-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Using f\'(x) = 2x (found above for f(x)=x²), find f\'(5).',
        hints: ['Substitute x=5 into f\'(x)=2x.'],
        correctAnswer: 10,
        explanation: "f'(5) = 2(5) = 10.",
      },
    ],
    commonMistake:
      'Substituting h=0 too early, before simplifying — this gives 0/0 (indeterminate) immediately; the ' +
      'expression must be factored and simplified FIRST, and only then can h=0 safely be substituted.',
    quickReview: [
      "f'(x) = lim(h→0) [f(x+h) − f(x)] / h — the formal definition of the derivative.",
      'This is the average rate of change formula with b=x+h, as h shrinks to 0.',
      'Simplify (factor and cancel h) before substituting h=0.',
    ],
  },

  'the-power-rule': {
    slug: 'the-power-rule',
    title: 'The Power Rule',
    difficulty: 'medium',
    simpleExplanation:
      'To differentiate x raised to a power n, bring the exponent down as a multiplying factor and ' +
      'reduce the exponent by 1: d/dx[x^n] = n·x^(n−1). A constant multiplying a function just carries ' +
      'through unchanged: d/dx[c·f(x)] = c·f\'(x).',
    whyItMatters:
      'This is by far the most-used differentiation shortcut — it turns what would be a lengthy limit ' +
      'calculation into a one-line mechanical rule.',
    formulaSlug: 'power-rule-formula',
    workedExample: {
      id: 'power-rule-worked-1',
      title: 'Apply the Power Rule',
      problemStatement: 'Differentiate f(x) = x⁵.',
      steps: [
        { step: 1, instruction: 'Apply the Power Rule.', math: "d/dx[x^n] = n·x^(n−1)", explanation: 'Here n=5.' },
        { step: 2, instruction: 'Substitute n=5.', math: "f'(x) = 5·x^(5−1) = 5x⁴", explanation: 'Bring 5 down, reduce the exponent to 4.' },
      ],
      finalAnswer: "f'(x) = 5x⁴.",
    },
    whyItWorks:
      'Applying the limit definition directly to f(x)=x^n and expanding (x+h)^n using the Binomial ' +
      'Theorem produces x^n + n·x^(n−1)·h + (terms with h², h³, ...); subtracting x^n, dividing by h, ' +
      'and letting h→0 leaves only the n·x^(n−1) term — every higher-order term vanishes because it ' +
      'still has a factor of h left over.',
    realLifeExample: {
      title: 'Differentiating a power-law position function',
      scenario: 'An object\'s position is given by s(t) = t³ (a common power-law motion pattern).',
      explanation: 'The Power Rule instantly gives the velocity function v(t) = s\'(t) = 3t², without needing to redo a limit calculation from scratch.',
    },
    practiceQuestions: [
      {
        id: 'power-rule-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Differentiate f(x) = 4x³, then evaluate f\'(2).',
        hints: ["f'(x) = 4·3·x² = 12x²."],
        correctAnswer: 48,
        explanation: "f'(x) = 12x², so f'(2) = 12(4) = 48.",
      },
    ],
    commonMistake:
      'Forgetting to reduce the exponent by 1 — writing d/dx[x⁵] = 5x⁵ instead of the correct 5x⁴.',
    quickReview: [
      "d/dx[x^n] = n·x^(n−1).",
      "d/dx[c·f(x)] = c·f'(x) — constants carry straight through.",
      'Bring the exponent down, then subtract 1 from it.',
    ],
  },

  'the-sum-and-difference-rules': {
    slug: 'the-sum-and-difference-rules',
    title: 'The Sum and Difference Rules',
    difficulty: 'easy',
    simpleExplanation:
      'The derivative of a sum (or difference) of terms is just the sum (or difference) of each term\'s ' +
      'own derivative: d/dx[f(x) ± g(x)] = f\'(x) ± g\'(x). This lets you differentiate a multi-term ' +
      'expression one term at a time.',
    whyItMatters:
      'Combined with the Power Rule, this lets you differentiate any polynomial in one pass, term by term.',
    formulaSlug: 'sum-difference-rule-formula',
    workedExample: {
      id: 'sum-difference-worked-1',
      title: 'Differentiate a polynomial term by term',
      problemStatement: 'Differentiate f(x) = 3x² + 5x − 7.',
      steps: [
        { step: 1, instruction: 'Differentiate each term separately.', explanation: 'The sum/difference rule allows this.' },
        { step: 2, instruction: 'Differentiate 3x².', math: 'd/dx[3x²] = 6x', explanation: 'Power rule, with the constant multiplier 3.' },
        { step: 3, instruction: 'Differentiate 5x.', math: 'd/dx[5x] = 5', explanation: '5x = 5x¹, so its derivative is 5·1·x⁰=5.' },
        { step: 4, instruction: 'Differentiate the constant −7.', math: 'd/dx[−7] = 0', explanation: 'A constant never changes, so its rate of change is always 0.' },
        { step: 5, instruction: 'Combine the results.', math: "f'(x) = 6x + 5 + 0", explanation: 'Add the three term-by-term derivatives.' },
      ],
      finalAnswer: "f'(x) = 6x + 5.",
    },
    whyItWorks:
      'This follows directly from the limit definition: the limit of a sum equals the sum of the limits ' +
      '(a basic limit law), so [f(x+h)+g(x+h) − f(x) − g(x)]/h can be split into ' +
      '[f(x+h)−f(x)]/h + [g(x+h)−g(x)]/h, and taking the limit of each piece separately gives f\'(x)+g\'(x).',
    realLifeExample: {
      title: 'Differentiating a total cost function',
      scenario: 'A business\'s total cost function is built from several separate terms: materials cost, labor cost, and fixed overhead, each depending differently on production level x.',
      explanation: 'The sum rule lets each term be differentiated separately to find the marginal (total) cost function, rather than needing a single combined calculation.',
    },
    practiceQuestions: [
      {
        id: 'sum-difference-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Differentiate f(x) = 2x³ − 4x + 9, then evaluate f\'(1).',
        hints: ["f'(x) = 6x² − 4."],
        correctAnswer: 2,
        explanation: "f'(x) = 6x² − 4, so f'(1) = 6 − 4 = 2.",
      },
    ],
    commonMistake:
      'Forgetting that the derivative of any constant term is exactly 0 — a constant term simply ' +
      'disappears entirely when differentiated, it does not carry through unchanged.',
    quickReview: [
      "d/dx[f(x) ± g(x)] = f'(x) ± g'(x).",
      'Differentiate a polynomial term by term.',
      'Every constant term differentiates to exactly 0.',
    ],
  },

  'the-product-rule': {
    slug: 'the-product-rule',
    title: 'The Product Rule',
    difficulty: 'hard',
    simpleExplanation:
      'To differentiate a PRODUCT of two functions, you cannot just multiply their derivatives. Instead: ' +
      '(f·g)\' = f\'·g + f·g\' — the derivative of the first times the second, plus the first times the ' +
      'derivative of the second.',
    whyItMatters:
      'Many real expressions are naturally products of two changing quantities (like price × quantity), ' +
      'and this rule is the only correct way to differentiate them directly.',
    formulaSlug: 'product-rule-formula',
    workedExample: {
      id: 'product-rule-worked-1',
      title: 'Apply the Product Rule',
      problemStatement: 'Differentiate f(x) = x²·(x+3), using the Product Rule.',
      steps: [
        { step: 1, instruction: 'Identify the two factors.', math: 'u = x²,  v = x+3', explanation: 'Name the two functions being multiplied.' },
        { step: 2, instruction: 'Find their derivatives.', math: "u' = 2x,  v' = 1", explanation: 'Differentiate each separately.' },
        { step: 3, instruction: 'Apply the Product Rule.', math: "(uv)' = u'v + uv'", explanation: 'Substitute the pieces found.' },
        { step: 4, instruction: 'Substitute and simplify.', math: '2x(x+3) + x²(1) = 2x²+6x+x² = 3x²+6x', explanation: 'Expand and combine like terms.' },
      ],
      finalAnswer: "f'(x) = 3x² + 6x.",
    },
    whyItWorks:
      'Expanding f(x)=x²(x+3)=x³+3x² directly and differentiating with the power rule gives ' +
      "f'(x)=3x²+6x — exactly matching the Product Rule's result, confirming the rule is consistent " +
      'with what you already know. The rule itself comes from carefully expanding the limit definition ' +
      'for a product, adding and subtracting a helpful term (u(x)v(x+h) − u(x)v(x+h)) to split it into ' +
      "two separate limits that become u'v and uv'.",
    realLifeExample: {
      title: 'How total revenue changes when both price and quantity change',
      scenario: 'A company\'s total revenue is price × quantity sold, and BOTH price and quantity are changing over time (e.g. as a promotion runs).',
      explanation: 'The Product Rule is needed to correctly find how revenue changes overall, since simply multiplying the two individual rates of change would be wrong.',
    },
    practiceQuestions: [
      {
        id: 'product-rule-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Differentiate f(x) = x·(x+2) using the Product Rule, then evaluate f\'(3).',
        hints: ["u=x, v=x+2. u'=1, v'=1.", "(uv)' = u'v + uv'."],
        correctAnswer: 8,
        explanation: "f'(x) = 1(x+2) + x(1) = 2x+2. f'(3) = 2(3)+2 = 8.",
      },
    ],
    commonMistake:
      'Assuming (f·g)\' = f\'·g\' (just multiplying the two derivatives together) — this is NOT the ' +
      'Product Rule and generally gives the wrong answer.',
    quickReview: [
      "(f·g)' = f'·g + f·g'.",
      'Never just multiply the two derivatives together.',
      'Useful whenever two functions of x are multiplied.',
    ],
  },

  'the-quotient-rule': {
    slug: 'the-quotient-rule',
    title: 'The Quotient Rule',
    difficulty: 'hard',
    simpleExplanation:
      'To differentiate a QUOTIENT (fraction) of two functions: (f/g)\' = (f\'·g − f·g\') / g² — the ' +
      'derivative of the top times the bottom, minus the top times the derivative of the bottom, all ' +
      'divided by the bottom squared.',
    whyItMatters:
      'This handles any expression written as one function divided by another — a very common form, ' +
      'that the Power Rule alone cannot correctly differentiate.',
    formulaSlug: 'quotient-rule-formula',
    workedExample: {
      id: 'quotient-rule-worked-1',
      title: 'Apply the Quotient Rule',
      problemStatement: 'Differentiate f(x) = x² / (x+1), using the Quotient Rule.',
      steps: [
        { step: 1, instruction: 'Identify the top and bottom.', math: 'u = x²,  v = x+1', explanation: 'Name the numerator and denominator.' },
        { step: 2, instruction: 'Find their derivatives.', math: "u' = 2x,  v' = 1", explanation: 'Differentiate each separately.' },
        { step: 3, instruction: 'Apply the Quotient Rule.', math: "(u/v)' = (u'v − uv') / v²", explanation: 'Substitute the pieces found.' },
        { step: 4, instruction: 'Substitute and simplify the numerator.', math: '[2x(x+1) − x²(1)] / (x+1)² = (2x²+2x−x²)/(x+1)²', explanation: 'Expand and combine like terms in the numerator only.' },
      ],
      finalAnswer: "f'(x) = (x² + 2x) / (x+1)².",
    },
    whyItWorks:
      'The Quotient Rule can actually be derived from the Product Rule, by writing f/g as f·g⁻¹ and ' +
      'applying the Product Rule together with the Chain Rule (to differentiate g⁻¹) — after simplifying, ' +
      'the two approaches give exactly the same result.',
    realLifeExample: {
      title: 'Differentiating a ratio that changes over time',
      scenario: 'Population density is population ÷ land area, and BOTH the population and the developed land area of a city are changing over time.',
      explanation: 'The Quotient Rule correctly finds how the density itself is changing, accounting for both the numerator and denominator changing simultaneously.',
    },
    practiceQuestions: [
      {
        id: 'quotient-rule-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Differentiate f(x) = x / (x+2) using the Quotient Rule, then evaluate f\'(0).',
        hints: ["u=x, v=x+2. u'=1, v'=1.", "(u/v)' = (u'v − uv')/v²."],
        correctAnswer: 0.5,
        explanation: "f'(x) = [1(x+2) − x(1)]/(x+2)² = 2/(x+2)². f'(0) = 2/4 = 0.5.",
      },
    ],
    commonMistake:
      'Getting the order of subtraction wrong in the numerator (computing uv\'−u\'v instead of u\'v−uv\') ' +
      '— the order matters, since subtraction is not commutative.',
    quickReview: [
      "(u/v)' = (u'v − uv') / v².",
      'The numerator\'s subtraction order matters: derivative-of-top first.',
      'Can be derived from the Product Rule applied to f·g⁻¹.',
    ],
  },

  'the-chain-rule': {
    slug: 'the-chain-rule',
    title: 'The Chain Rule',
    difficulty: 'hard',
    simpleExplanation:
      'To differentiate a COMPOSITE function — a function wrapped around another function, like ' +
      'f(g(x)) — differentiate the outer function first (leaving the inner function unchanged inside ' +
      'it), then multiply by the derivative of the inner function: d/dx[f(g(x))] = f\'(g(x))·g\'(x).',
    whyItMatters:
      'Composite functions are extremely common (e.g. any expression with something other than plain x ' +
      'raised to a power, or inside a root), and the Chain Rule is the only correct way to differentiate them.',
    diagram: {
      id: 'chain-rule-diagram',
      title: 'The tangent line to y = (x−2)² at (4, 4), with slope 4',
      altText: 'A parabola shifted to the right, y equals x minus 2 squared, with a straight tangent line touching the curve at the point (4,4)',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => (x - 2) * (x - 2),
        fn2: (x: number) => 4 * x - 12,
        min: -1,
        max: 6,
        markPoints: [{ x: 4, y: 4, label: '(4,4)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'chain-rule-formula',
    workedExample: {
      id: 'chain-rule-worked-1',
      title: 'Apply the Chain Rule',
      problemStatement: 'Differentiate f(x) = (x−2)², using the Chain Rule, then find f\'(4).',
      steps: [
        { step: 1, instruction: 'Identify the inner and outer functions.', math: 'inner: u=x−2.   outer: u²', explanation: 'f(x) is the outer function u² applied to the inner function u=x−2.' },
        { step: 2, instruction: 'Differentiate the outer function (with respect to u).', math: 'd/du[u²] = 2u', explanation: 'Leave u=x−2 unchanged inside for now.' },
        { step: 3, instruction: 'Differentiate the inner function (with respect to x).', math: 'du/dx = 1', explanation: 'Derivative of x−2.' },
        { step: 4, instruction: 'Multiply, by the Chain Rule.', math: "f'(x) = 2u · 1 = 2(x−2)", explanation: 'Substitute u=x−2 back in.' },
        { step: 5, instruction: 'Evaluate at x=4.', math: "f'(4) = 2(4−2) = 4", explanation: 'Substitute x=4.' },
      ],
      finalAnswer: "f'(x) = 2(x−2); f'(4) = 4.",
    },
    whyItWorks:
      'A small change Δx in x causes a corresponding small change Δu in the inner function, which in ' +
      'turn causes a small change Δy in the outer function. The overall rate Δy/Δx can be split as ' +
      '(Δy/Δu)·(Δu/Δx) — and taking the limit as Δx→0 turns this into dy/dx = (dy/du)·(du/dx), the ' +
      'Chain Rule.',
    realLifeExample: {
      title: 'An expanding oil slick\'s changing area',
      scenario: 'A circular oil slick\'s area depends on its radius (Area = πr²), and the radius itself is growing over time.',
      explanation: 'The Chain Rule links the two relationships — how area depends on radius, and how radius depends on time — to find how fast the area itself is growing, a classic "related rates" application.',
    },
    practiceQuestions: [
      {
        id: 'chain-rule-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Differentiate f(x) = (2x−1)³ using the Chain Rule, then evaluate f\'(1).',
        hints: ['Outer: u³, so d/du[u³]=3u². Inner: u=2x−1, so du/dx=2.'],
        correctAnswer: 6,
        explanation: "f'(x) = 3(2x−1)²·2 = 6(2x−1)². f'(1) = 6(2(1)−1)² = 6(1)² = 6.",
      },
    ],
    commonMistake:
      'Forgetting to multiply by the inner function\'s derivative (du/dx) — differentiating only the ' +
      'outer function and stopping there is a very common Chain Rule error.',
    quickReview: [
      "d/dx[f(g(x))] = f'(g(x))·g'(x).",
      'Differentiate the outer function first (keeping the inner function unchanged inside), then multiply by the inner function\'s derivative.',
      'Essential whenever one function is "wrapped around" another.',
    ],
  },

  'implicit-differentiation': {
    slug: 'implicit-differentiation',
    title: 'Implicit Differentiation',
    difficulty: 'hard',
    simpleExplanation:
      'When an equation relates x and y together, but y cannot easily be isolated as y=(some function ' +
      'of x), differentiate BOTH sides of the equation with respect to x directly — treating y as an ' +
      'unknown function of x. Every time a y-term is differentiated, the Chain Rule adds an extra dy/dx factor.',
    whyItMatters:
      'Many important curves (like circles, ellipses, and other implicit relations) simply cannot be ' +
      'written as a single y=f(x) — implicit differentiation is the only way to find their tangent slopes directly.',
    diagram: {
      id: 'implicit-differentiation-diagram',
      title: 'The tangent line to the circle x²+y²=25 at (3, 4)',
      altText: 'A circle of radius 5 centered at the origin, with a radius line to the point (3,4) and a tangent line touching the circle at that point',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [{ cx: 0, cy: 0, r: 5 }],
        points: [
          { x: 0, y: 0, label: 'O', labelDx: -8, labelDy: -6 },
          { x: 3, y: 4, label: 'P(3, 4)', labelDx: 10, labelDy: -6 },
        ],
        segments: [
          { from: [0, 0], to: [3, 4], dashed: true, label: 'r' },
          { from: [-3, 8.5], to: [9, -0.5], label: 'tangent' },
        ],
      },
    },
    formulaSlug: 'implicit-differentiation-technique',
    workedExample: {
      id: 'implicit-differentiation-worked-1',
      title: 'Find a tangent slope using implicit differentiation',
      problemStatement: 'Given the circle x² + y² = 25, find dy/dx (the slope of the tangent line) at the point (3, 4).',
      steps: [
        { step: 1, instruction: 'Differentiate both sides with respect to x.', math: 'd/dx[x² + y²] = d/dx[25]', explanation: 'Treat y as an unknown function of x.' },
        { step: 2, instruction: 'Apply the Power Rule to x², and the Chain Rule to y².', math: '2x + 2y·(dy/dx) = 0', explanation: 'Every y-term picks up an extra dy/dx factor.' },
        { step: 3, instruction: 'Solve for dy/dx.', math: 'dy/dx = −2x / (2y) = −x/y', explanation: 'Isolate dy/dx algebraically.' },
        { step: 4, instruction: 'Substitute the point (3, 4).', math: 'dy/dx = −3/4', explanation: 'Substitute x=3, y=4.' },
      ],
      finalAnswer: 'dy/dx = −3/4 at the point (3, 4).',
    },
    whyItWorks:
      'Since y is (implicitly) a function of x along the curve, y² is really a composite function — ' +
      '"square of y(x)" — so the Chain Rule genuinely applies: d/dx[y²] = 2y·(dy/dx), exactly as ' +
      'd/dx[u²]=2u·(du/dx) for any function u(x). This is the same Chain Rule from section 11.3, just applied to y instead of a named inner function.',
    realLifeExample: {
      title: 'Analyzing a curved mechanical cam profile',
      scenario: 'An engineer designs a curved cam or gear profile described by an implicit equation relating x and y, where y cannot be isolated as a simple function of x.',
      explanation: 'Implicit differentiation gives the slope of the profile at any point directly from the defining equation, without needing to solve for y first.',
    },
    practiceQuestions: [
      {
        id: 'implicit-differentiation-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For the circle x² + y² = 25, find dy/dx at the point (0, 5).',
        hints: ['dy/dx = −x/y.'],
        correctAnswer: 0,
        explanation: 'dy/dx = −0/5 = 0 — the tangent is horizontal at the top of the circle, which makes sense.',
      },
    ],
    commonMistake:
      'Forgetting to apply the Chain Rule to y-terms — writing d/dx[y²] = 2y instead of the correct ' +
      '2y·(dy/dx), since y is implicitly a function of x, not an independent variable like x itself.',
    quickReview: [
      'Differentiate both sides of the equation with respect to x.',
      'Every y-term picks up an extra factor of dy/dx (Chain Rule).',
      'Solve algebraically for dy/dx afterward.',
    ],
  },

  'applications-of-implicit-differentiation': {
    slug: 'applications-of-implicit-differentiation',
    title: 'Applications of Implicit Differentiation',
    difficulty: 'hard',
    simpleExplanation:
      'Implicit differentiation extends naturally to more complex equations relating x and y, including ' +
      'ones with an xy term — which needs the Product Rule (since it\'s a product of x and the ' +
      'function y) combined with the Chain Rule.',
    whyItMatters:
      'This combines every differentiation rule from this chapter into one technique — a genuine test ' +
      'of whether the Power, Product, and Chain Rules are all understood together.',
    formulaSlug: 'implicit-differentiation-technique',
    workedExample: {
      id: 'implicit-applications-worked-1',
      title: 'Implicitly differentiate an equation with an xy term',
      problemStatement: 'Given x² + xy + y² = 7, find dy/dx at the point (1, 2).',
      steps: [
        { step: 1, instruction: 'Differentiate both sides with respect to x.', math: '2x + d/dx[xy] + 2y·(dy/dx) = 0', explanation: 'The middle term needs the Product Rule, since it\'s x times y.' },
        { step: 2, instruction: 'Apply the Product Rule to xy.', math: 'd/dx[xy] = (1)(y) + (x)(dy/dx) = y + x·(dy/dx)', explanation: 'u=x (u\'=1), v=y (v\'=dy/dx).' },
        { step: 3, instruction: 'Substitute back into the full equation.', math: '2x + y + x·(dy/dx) + 2y·(dy/dx) = 0', explanation: 'Combine everything from steps 1-2.' },
        { step: 4, instruction: 'Group the dy/dx terms and solve.', math: 'dy/dx·(x+2y) = −(2x+y)  →  dy/dx = −(2x+y)/(x+2y)', explanation: 'Factor out dy/dx, then divide.' },
        { step: 5, instruction: 'Substitute the point (1, 2).', math: 'dy/dx = −(2(1)+2)/(1+2(2)) = −4/5', explanation: 'Substitute x=1, y=2.' },
      ],
      finalAnswer: 'dy/dx = −4/5 at the point (1, 2).',
    },
    whyItWorks:
      'The xy term genuinely needs the Product Rule because it is a product of two quantities that both ' +
      'change with x — the variable x itself, and the (implicit) function y(x). Treating xy as a simple ' +
      'power of x would be incorrect, since y is not constant.',
    realLifeExample: {
      title: 'Related rates in a system defined by an implicit constraint',
      scenario: 'A physical system (e.g. two connected quantities in a mechanism) obeys a constraint equation relating x and y that cannot be solved cleanly for y.',
      explanation: 'Applications of implicit differentiation — including the Product Rule for mixed xy terms — are exactly the technique used to find how fast one quantity changes as the other does, in these "related rates" problems.',
    },
    practiceQuestions: [
      {
        id: 'implicit-applications-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For x² + xy + y² = 7, find dy/dx at the point (2, 1).',
        hints: ['dy/dx = −(2x+y)/(x+2y).', 'Check: 4+2+1=7, so (2,1) is on the curve.'],
        correctAnswer: -1.25,
        explanation: 'dy/dx = −(2(2)+1)/(2+2(1)) = −5/4 = −1.25.',
      },
    ],
    commonMistake:
      'Differentiating the xy term as if it were just x² or y² alone — a mixed term like xy always ' +
      'needs the Product Rule, since it is genuinely a product of two things that both depend on x.',
    quickReview: [
      'A mixed xy term needs the Product Rule: d/dx[xy] = y + x·(dy/dx).',
      'Group all dy/dx terms together, then factor and solve algebraically.',
      'Combines the Power, Product, and Chain Rules into a single technique.',
    ],
  },
};
