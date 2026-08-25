import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 8 — Logarithmic and Exponential
// Functions. Matches the textbook preface's description: graphs of
// log/exp functions, their transformations, and their derivatives.
export const chapter8CConcepts: Record<string, Concept> = {
  'the-graph-of-an-exponential-function': {
    slug: 'the-graph-of-an-exponential-function',
    title: 'The Graph of an Exponential Function',
    difficulty: 'easy',
    simpleExplanation:
      'y = bˣ (with b>0, b≠1) is an exponential function — it grows (or decays, if 0<b<1) by a ' +
      'constant multiplicative factor for every unit increase in x, always passes through (0,1), is ' +
      'always strictly positive, and has a horizontal asymptote at y=0.',
    whyItMatters:
      'Exponential growth and decay describe an enormous range of real phenomena — population growth, ' +
      'radioactive decay, compound interest, and more — making this one of the most practically important function families.',
    diagram: {
      id: 'exponential-graph-diagram',
      title: 'The graph of y = 2ˣ',
      altText: 'A curve that rises slowly for negative x, passes through (0,1), and rises steeply for positive x, always staying above the x-axis',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.pow(2, x),
        min: -4,
        max: 4,
        markPoints: [{ x: 0, y: 1, label: '(0,1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'exponential-function-properties-formula',
    workedExample: {
      id: 'exponential-graph-worked-1',
      title: 'Evaluate an exponential function',
      problemStatement: 'Evaluate y=2ˣ at x=0, x=3, and x=−2.',
      steps: [
        { step: 1, instruction: 'Evaluate at x=0.', math: '2⁰ = 1', explanation: 'Any nonzero base to the power 0 is 1.' },
        { step: 2, instruction: 'Evaluate at x=3.', math: '2³ = 8', explanation: '2×2×2=8.' },
        { step: 3, instruction: 'Evaluate at x=−2.', math: '2⁻² = 1/2² = 1/4 = 0.25', explanation: 'A negative exponent means "reciprocal."' },
      ],
      finalAnswer: 'y(0)=1, y(3)=8, y(−2)=0.25.',
    },
    whyItWorks:
      'Multiplying by b for every unit increase in x is exactly what "constant multiplicative growth" ' +
      'means — starting from y(0)=1, y(1)=b, y(2)=b², and so on, so y(x)=bˣ captures this pattern for every real x.',
    realLifeExample: {
      title: 'Compound interest on a savings account',
      scenario: 'Money in a savings account grows by the same percentage every year, compounding on top of the previous year\'s total.',
      explanation: 'This is exactly exponential growth — the account balance after x years follows an exponential function of x.',
    },
    practiceQuestions: [
      {
        id: 'exponential-graph-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate y=3ˣ at x=2.',
        hints: ['3² = 3×3.'],
        correctAnswer: 9,
        explanation: '3×3 = 9.',
      },
    ],
    commonMistake:
      'Assuming an exponential function can output zero or a negative value — bˣ is always strictly ' +
      'positive, for any real x, whenever b>0.',
    quickReview: [
      'y=bˣ (b>0, b≠1): domain all reals, range (0,∞).',
      'Always passes through (0,1); horizontal asymptote at y=0.',
      'Models constant multiplicative growth or decay.',
    ],
  },

  'the-graph-of-a-logarithmic-function': {
    slug: 'the-graph-of-a-logarithmic-function',
    title: 'The Graph of a Logarithmic Function',
    difficulty: 'easy',
    simpleExplanation:
      'y = log_b(x) is the inverse of the exponential function bˣ — it answers the question "b to what ' +
      'power gives x?" It is only defined for positive x, can output any real number, and has a ' +
      'vertical asymptote at x=0.',
    whyItMatters:
      'Logarithms "undo" exponential growth, letting you solve for an unknown exponent — essential ' +
      'whenever an exponential relationship needs to be reversed.',
    diagram: {
      id: 'logarithmic-graph-diagram',
      title: 'The graph of y = log₂(x)',
      altText: 'A curve defined only for positive x, rising slowly, passing through (1,0), with a vertical asymptote along the y-axis',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.log(x) / Math.log(2),
        min: -1,
        max: 8,
        markPoints: [{ x: 1, y: 0, label: '(1,0)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'logarithmic-function-properties-formula',
    workedExample: {
      id: 'logarithmic-graph-worked-1',
      title: 'Evaluate a logarithmic function',
      problemStatement: 'Evaluate y=log₂(x) at x=8, x=1, and x=1/4.',
      steps: [
        { step: 1, instruction: 'Evaluate log₂(8).', math: '2³=8,  so log₂(8)=3', explanation: 'Ask "2 to what power gives 8?"' },
        { step: 2, instruction: 'Evaluate log₂(1).', math: '2⁰=1,  so log₂(1)=0', explanation: 'Any base to the power 0 is 1.' },
        { step: 3, instruction: 'Evaluate log₂(1/4).', math: '2⁻²=1/4,  so log₂(1/4)=−2', explanation: 'A negative exponent gives a fraction.' },
      ],
      finalAnswer: 'log₂(8)=3, log₂(1)=0, log₂(1/4)=−2.',
    },
    whyItWorks:
      'Since exponential and logarithmic functions are inverses of each other, the logarithmic graph is ' +
      'exactly the exponential graph reflected across the line y=x — every point (a,b) on y=bˣ becomes ' +
      'the point (b,a) on y=log_b(x).',
    realLifeExample: {
      title: 'Measuring earthquake intensity (the Richter scale)',
      scenario: 'Earthquake magnitudes are measured on a logarithmic scale, where each whole number increase represents a tenfold increase in shaking amplitude.',
      explanation: 'Logarithms compress an enormous range of physical intensities into a manageable, human-readable scale — exactly what the Richter scale does.',
    },
    practiceQuestions: [
      {
        id: 'logarithmic-graph-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate log₃(9).',
        hints: ['3 to what power gives 9?'],
        correctAnswer: 2,
        explanation: '3²=9, so log₃(9)=2.',
      },
    ],
    commonMistake:
      'Attempting to evaluate the logarithm of zero or a negative number — logarithms are only defined ' +
      'for positive inputs.',
    quickReview: [
      'y=log_b(x): domain (0,∞), range all reals.',
      'Passes through (1,0); vertical asymptote at x=0.',
      'The inverse of the exponential function with the same base.',
    ],
  },

  'transformations-of-exponential-and-logarithmic-graphs': {
    slug: 'transformations-of-exponential-and-logarithmic-graphs',
    title: 'Transformations of Exponential and Logarithmic Graphs',
    difficulty: 'medium',
    simpleExplanation:
      'Exponential and logarithmic graphs transform the same way as any other function: y=A·bˣ⁻ᶜ+D ' +
      'shifts the graph C units horizontally and D units vertically (this also moves the asymptote!), ' +
      'and scales/reflects it by A.',
    whyItMatters:
      'Real exponential and logarithmic relationships are rarely centered exactly at the origin — this ' +
      'lets you describe any shifted or scaled version of these graphs.',
    diagram: {
      id: 'exp-log-transformation-diagram',
      title: 'y=2ˣ compared with y=2ˣ⁻¹+1',
      altText: 'Two exponential curves: the basic one, and a shifted version moved right by 1 and up by 1, with a correspondingly shifted horizontal asymptote',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.pow(2, x),
        fn2: (x: number) => Math.pow(2, x - 1) + 1,
        min: -4,
        max: 4,
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'transformation-of-exp-log-graphs-formula',
    workedExample: {
      id: 'exp-log-transformation-worked-1',
      title: 'Describe a transformed exponential graph',
      problemStatement: 'Describe how the graph of y=2ˣ⁻¹+3 differs from y=2ˣ.',
      steps: [
        { step: 1, instruction: 'Identify the horizontal shift.', math: 'x−1', explanation: 'Shifts the graph right by 1 unit.' },
        { step: 2, instruction: 'Identify the vertical shift.', math: '+3', explanation: 'Shifts the entire graph up by 3 units.' },
        { step: 3, instruction: 'Find the new asymptote.', math: 'y=3', explanation: 'The horizontal asymptote moves up along with the graph.' },
      ],
      finalAnswer: 'y=2ˣ⁻¹+3 is y=2ˣ shifted right 1 unit and up 3 units, with a new horizontal asymptote at y=3.',
    },
    whyItWorks:
      'Replacing x with (x−C) shifts any graph right by C (the function now reaches each output C units ' +
      'later); adding D to the whole output rigidly raises every point — including the asymptote itself ' +
      '— by D units.',
    realLifeExample: {
      title: 'Modeling cooling with a non-zero room temperature',
      scenario: 'An object cools exponentially toward room temperature, not toward zero.',
      explanation: 'The vertical shift D in the transformed exponential formula accounts for this non-zero final temperature, moving the asymptote to match.',
    },
    practiceQuestions: [
      {
        id: 'exp-log-transformation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the new horizontal asymptote of y=3ˣ+6 (compared to y=3ˣ, which has asymptote y=0).',
        hints: ['The vertical shift moves the asymptote by the same amount.'],
        correctAnswer: 6,
        explanation: '0+6 = 6.',
      },
    ],
    commonMistake:
      'Forgetting that a vertical shift also moves the horizontal asymptote by the same amount — the ' +
      'asymptote is not always y=0 after a transformation.',
    quickReview: [
      'y=A·bˣ⁻ᶜ+D: C shifts horizontally, D shifts vertically (and moves the asymptote).',
      'The same pattern applies to logarithmic graphs, with the vertical asymptote shifting instead.',
      'A scales and/or reflects the graph.',
    ],
  },

  'the-derivative-of-e-to-the-x': {
    slug: 'the-derivative-of-e-to-the-x',
    title: 'The Derivative of eˣ',
    difficulty: 'medium',
    simpleExplanation:
      'The exponential function eˣ (where e≈2.71828 is Euler\'s number) is famously its own derivative: ' +
      'd/dx[eˣ] = eˣ.',
    whyItMatters:
      'This remarkable self-derivative property is exactly why e is chosen as the "natural" base for ' +
      'exponential functions in calculus — no other base has this simple property.',
    diagram: {
      id: 'e-to-the-x-derivative-diagram',
      title: 'The tangent line to y=eˣ at (0,1), with slope 1',
      altText: 'An exponential curve with a straight tangent line touching it at the point (0,1)',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.exp(x),
        fn2: (x: number) => x + 1,
        min: -3,
        max: 3,
        markPoints: [{ x: 0, y: 1, label: '(0,1)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'derivative-of-e-to-the-x-formula',
    workedExample: {
      id: 'e-to-the-x-derivative-worked-1',
      title: 'Differentiate an expression with eˣ',
      problemStatement: 'Find the derivative of f(x)=3eˣ, and evaluate f\'(0).',
      steps: [
        { step: 1, instruction: 'Apply the derivative rule for eˣ.', math: "f'(x) = 3eˣ", explanation: 'The constant 3 carries straight through, and eˣ is its own derivative.' },
        { step: 2, instruction: 'Substitute x=0.', math: "f'(0) = 3e⁰", explanation: 'e⁰=1.' },
        { step: 3, instruction: 'Compute.', math: '3(1) = 3', explanation: 'Final multiplication.' },
      ],
      finalAnswer: "f'(x)=3eˣ; f'(0)=3.",
    },
    whyItWorks:
      'e is actually DEFINED (in one common approach) as the unique base for which this self-derivative ' +
      'property holds — the graph of eˣ, at every point, has a tangent line slope exactly equal to its ' +
      'own height there, exactly as shown at (0,1), where the height is 1 and the tangent slope is also 1.',
    realLifeExample: {
      title: 'Modeling continuously compounding interest',
      scenario: 'An investment account compounds interest continuously (not just yearly or monthly, but at every instant).',
      explanation: 'The eˣ function is exactly the natural model for continuous growth, and its self-derivative property makes its rate of growth calculations especially clean.',
    },
    practiceQuestions: [
      {
        id: 'e-to-the-x-derivative-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find f\'(0) for f(x)=eˣ+5.',
        hints: ['The derivative of the constant 5 is 0.'],
        correctAnswer: 1,
        explanation: "f'(x)=eˣ (the +5 vanishes). f'(0)=e⁰=1.",
      },
    ],
    commonMistake:
      'Assuming the derivative of eˣ is something other than itself — eˣ is uniquely its own derivative, ' +
      'unlike any other exponential base.',
    quickReview: [
      "d/dx[eˣ] = eˣ.",
      'e is chosen specifically because it has this simple self-derivative property.',
      'At every point, eˣ\'s tangent slope equals its own height.',
    ],
  },

  'the-derivative-of-general-exponential-functions': {
    slug: 'the-derivative-of-general-exponential-functions',
    title: 'The Derivative of General Exponential Functions',
    difficulty: 'medium',
    simpleExplanation:
      'For a base b other than e, the derivative of bˣ picks up an extra constant factor: ' +
      'd/dx[bˣ] = bˣ · ln(b).',
    whyItMatters:
      'Most real exponential models do not conveniently use base e directly (e.g. "doubling every ' +
      'hour" naturally uses base 2) — this formula handles any base correctly.',
    formulaSlug: 'derivative-of-general-exponential-formula',
    workedExample: {
      id: 'general-exponential-derivative-worked-1',
      title: 'Differentiate a general exponential function',
      problemStatement: 'Find the derivative of f(x)=2ˣ, and evaluate f\'(0). (ln 2 ≈ 0.6931)',
      steps: [
        { step: 1, instruction: 'Apply the general exponential derivative rule.', math: "f'(x) = 2ˣ · ln2", explanation: 'b=2 here.' },
        { step: 2, instruction: 'Substitute x=0.', math: "f'(0) = 2⁰ · ln2", explanation: '2⁰=1.' },
        { step: 3, instruction: 'Compute.', math: '1 × 0.6931 = 0.6931', explanation: 'Final multiplication.' },
      ],
      finalAnswer: "f'(x)=2ˣ·ln2; f'(0) ≈ 0.693.",
    },
    whyItWorks:
      'Any base b can be rewritten as b=e^(ln b), so bˣ = e^(x·ln b) — differentiating this using the ' +
      'Chain Rule (with the eˣ derivative and the constant multiple ln b coming from the inner function\'s ' +
      'derivative) gives exactly bˣ·ln(b).',
    realLifeExample: {
      title: 'Finding the instantaneous growth rate of a doubling bacterial culture',
      scenario: 'A bacterial culture doubles in size every hour, modeled as P(t)=P₀·2ᵗ.',
      explanation: 'The general exponential derivative rule gives the instantaneous growth rate of the population at any specific time t.',
    },
    practiceQuestions: [
      {
        id: 'general-exponential-derivative-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For f(x)=bˣ with f\'(x)=bˣ·ln(b), if b=e, what does ln(b) equal?',
        hints: ['What is the natural logarithm of e itself?'],
        correctAnswer: 1,
        explanation: 'ln(e)=1 — this is exactly why the formula simplifies to the plain eˣ case when b=e.',
      },
    ],
    commonMistake:
      'Forgetting the extra ln(b) factor for bases other than e — only b=e gives the simpler ' +
      '"derivative equals itself" result.',
    quickReview: [
      "d/dx[bˣ] = bˣ · ln(b).",
      'Reduces to the simple eˣ case exactly when b=e (since ln e=1).',
      'Derived from rewriting bˣ as e^(x·ln b) and applying the Chain Rule.',
    ],
  },

  'the-derivative-of-the-natural-logarithm': {
    slug: 'the-derivative-of-the-natural-logarithm',
    title: 'The Derivative of the Natural Logarithm',
    difficulty: 'medium',
    simpleExplanation:
      'The derivative of the natural logarithm, ln x, is simply the reciprocal of x: d/dx[ln x] = 1/x.',
    whyItMatters:
      'This surprisingly simple result is essential for differentiating any expression involving ' +
      'natural logarithms, and connects logarithms directly to the power rule\'s "missing case" (x⁻¹, ' +
      'whose antiderivative is ln x).',
    diagram: {
      id: 'natural-log-derivative-diagram',
      title: 'The tangent line to y=ln(x) at (1,0), with slope 1',
      altText: 'A logarithmic curve with a straight tangent line touching it at the point (1,0)',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.log(x),
        fn2: (x: number) => x - 1,
        min: -1,
        max: 7,
        markPoints: [{ x: 1, y: 0, label: '(1,0)' }],
        xLabel: 'x',
        yLabel: 'y',
      },
    },
    formulaSlug: 'derivative-of-natural-log-formula',
    workedExample: {
      id: 'natural-log-derivative-worked-1',
      title: 'Differentiate an expression with the natural logarithm',
      problemStatement: 'Find the derivative of f(x)=5ln(x), and evaluate f\'(2).',
      steps: [
        { step: 1, instruction: 'Apply the natural log derivative rule.', math: "f'(x) = 5/x", explanation: 'The constant 5 carries through; d/dx[lnx]=1/x.' },
        { step: 2, instruction: 'Substitute x=2.', math: "f'(2) = 5/2", explanation: 'Direct substitution.' },
        { step: 3, instruction: 'Compute.', math: '5/2 = 2.5', explanation: 'Final division.' },
      ],
      finalAnswer: "f'(x)=5/x; f'(2)=2.5.",
    },
    whyItWorks:
      'Since eˣ and ln x are inverse functions, and eˣ is its own derivative, applying the rule for ' +
      'differentiating an inverse function to ln x produces exactly 1/x — a clean result that also ' +
      'matches the tangent line shown, which has slope 1 at x=1 (since 1/1=1).',
    realLifeExample: {
      title: 'Finding the rate of change of perceived sound loudness',
      scenario: 'Perceived loudness (in decibels) is related to actual sound intensity through a logarithmic (natural log-based) formula.',
      explanation: 'The derivative of the natural logarithm gives the rate at which perceived loudness changes as actual sound intensity changes.',
    },
    practiceQuestions: [
      {
        id: 'natural-log-derivative-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find f\'(4) for f(x)=ln(x).',
        hints: ['f\'(x) = 1/x.'],
        correctAnswer: 0.25,
        explanation: '1/4 = 0.25.',
      },
    ],
    commonMistake:
      'Confusing the derivative of ln(x) (a simple reciprocal, 1/x) with power-rule-style derivatives — ' +
      'ln(x)\'s derivative does not follow the "bring down the exponent" pattern at all.',
    quickReview: [
      "d/dx[ln x] = 1/x.",
      'A remarkably simple result, given how complex ln x itself looks.',
      'Connects to the "missing case" of the power rule (the antiderivative of x⁻¹).',
    ],
  },

  'the-derivative-of-general-logarithmic-functions': {
    slug: 'the-derivative-of-general-logarithmic-functions',
    title: 'The Derivative of General Logarithmic Functions',
    difficulty: 'hard',
    simpleExplanation:
      'For a base b other than e, the derivative of log_b(x) picks up an extra constant factor in the ' +
      'denominator: d/dx[log_b x] = 1 / (x · ln b).',
    whyItMatters:
      'Just as with general exponential functions, most real logarithmic scales (like the base-10 ' +
      'Richter or pH scales) do not use base e directly — this formula handles any base correctly.',
    formulaSlug: 'derivative-of-general-log-formula',
    workedExample: {
      id: 'general-log-derivative-worked-1',
      title: 'Differentiate a general logarithmic function',
      problemStatement: 'Find the derivative of f(x)=log₂(x), and evaluate f\'(1). (ln 2 ≈ 0.6931)',
      steps: [
        { step: 1, instruction: 'Apply the general logarithm derivative rule.', math: "f'(x) = 1 / (x · ln2)", explanation: 'b=2 here.' },
        { step: 2, instruction: 'Substitute x=1.', math: "f'(1) = 1 / (1 × 0.6931)", explanation: 'Direct substitution.' },
        { step: 3, instruction: 'Compute.', math: '1/0.6931 ≈ 1.443', explanation: 'Final division.' },
      ],
      finalAnswer: "f'(x) = 1/(x·ln2); f'(1) ≈ 1.443.",
    },
    whyItWorks:
      'Using the change-of-base identity, log_b(x) = ln(x)/ln(b) — since ln(b) is just a constant, ' +
      'differentiating gives (1/ln b)·d/dx[ln x] = (1/ln b)·(1/x) = 1/(x·ln b), exactly the stated formula.',
    realLifeExample: {
      title: 'Finding the rate of change on a base-10 measurement scale',
      scenario: 'The pH scale (base-10 logarithmic) measures acidity, and chemists sometimes need to know how quickly pH changes as hydrogen ion concentration changes.',
      explanation: 'The general logarithm derivative rule, using base 10, gives exactly this rate of change.',
    },
    practiceQuestions: [
      {
        id: 'general-log-derivative-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For f(x)=log_b(x) with f\'(x)=1/(x·ln b), if b=e, what does ln(b) equal (so that the formula simplifies to 1/x)?',
        hints: ['What is the natural logarithm of e itself?'],
        correctAnswer: 1,
        explanation: 'ln(e)=1, which is exactly why the general formula reduces to the simple 1/x case when b=e.',
      },
    ],
    commonMistake:
      'Forgetting the ln(b) factor in the denominator for bases other than e — only natural log ' +
      '(base e) gives the simple 1/x result.',
    quickReview: [
      "d/dx[log_b x] = 1 / (x · ln b).",
      'Reduces to the simple 1/x case exactly when b=e.',
      'Derived using the change-of-base identity, log_b(x) = ln(x)/ln(b).',
    ],
  },
};
