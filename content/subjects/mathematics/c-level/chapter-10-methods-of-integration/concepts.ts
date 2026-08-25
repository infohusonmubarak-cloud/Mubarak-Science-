import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 10 — Methods of Integration. Matches
// the textbook preface's description: basic integration; the
// substitution method; integration by parts; the partial fraction
// method.
export const chapter10CConcepts: Record<string, Concept> = {
  'antiderivatives-and-basic-integration-rules': {
    slug: 'antiderivatives-and-basic-integration-rules',
    title: 'Antiderivatives and Basic Integration Rules',
    difficulty: 'medium',
    simpleExplanation:
      'An antiderivative of f(x) is any function F(x) whose derivative is f(x). Integration is the process of ' +
      'finding antiderivatives, and it is exactly the reverse operation of differentiation — the Power Rule for ' +
      'integration, ∫xⁿdx = xⁿ⁺¹/(n+1) + C, undoes the Power Rule for differentiation.',
    whyItMatters:
      'Integration recovers a quantity from its rate of change — total distance from velocity, total cost from ' +
      'marginal cost, total accumulated growth from a growth rate — making it the natural counterpart to ' +
      'everything derivatives compute.',
    formulaSlug: 'basic-integration-formula',
    workedExample: {
      id: 'basic-integration-worked-1',
      title: 'Integrate a polynomial',
      problemStatement: 'Find ∫(3x² − 4x + 5) dx.',
      steps: [
        { step: 1, instruction: 'Integrate each term separately.', math: '∫3x² dx = 3·(x³/3) = x³', explanation: 'Apply the Power Rule with n=2: x²⁺¹/(2+1) = x³/3, then multiply by the constant 3.' },
        { step: 2, instruction: 'Integrate the next term.', math: '∫−4x dx = −4·(x²/2) = −2x²', explanation: 'Apply the Power Rule with n=1.' },
        { step: 3, instruction: 'Integrate the constant term.', math: '∫5 dx = 5x', explanation: 'A constant k integrates to kx (the Power Rule with n=0, since 5 = 5x⁰).' },
        { step: 4, instruction: 'Combine all terms and add one constant of integration.', math: 'x³ − 2x² + 5x + C', explanation: 'Only one +C is needed for the whole combined antiderivative.' },
      ],
      finalAnswer: '∫(3x² − 4x + 5) dx = x³ − 2x² + 5x + C.',
    },
    whyItWorks:
      'Differentiating the answer must recover the original integrand — d/dx[x³−2x²+5x+C] = 3x²−4x+5, which is ' +
      'exactly f(x), confirming the antiderivative is correct. This "differentiate to check" step always verifies an integral.',
    realLifeExample: {
      title: 'Recovering total distance from a speed function',
      scenario: 'A car\'s speed at time t is known as a function v(t), but its total distance traveled is not ' +
        'directly recorded.',
      explanation: 'Integrating the speed function recovers the position function — total distance traveled is ' +
        'exactly the antiderivative of speed.',
    },
    practiceQuestions: [
      {
        id: 'basic-integration-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate the definite integral ∫₀¹ x² dx.',
        hints: ['Find the antiderivative x³/3, then evaluate at the two limits and subtract.'],
        correctAnswer: 0.333,
        tolerance: 0.01,
        explanation: '[x³/3] from 0 to 1 = (1³/3) − (0³/3) = 1/3 ≈ 0.333.',
      },
    ],
    commonMistake:
      'Forgetting the "+C" on an indefinite integral — since any constant\'s derivative is 0, infinitely many ' +
      'antiderivatives exist, differing only by a constant, and all of them must be represented by +C.',
    quickReview: [
      '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n≠−1); integrate term by term for a polynomial.',
      'Always include "+C" for an indefinite integral.',
      'Check any integral by differentiating the answer — it should recover the original integrand.',
    ],
  },

  'integrating-exponential-and-trigonometric-functions': {
    slug: 'integrating-exponential-and-trigonometric-functions',
    title: 'Integrating Exponential and Trigonometric Functions',
    difficulty: 'medium',
    simpleExplanation:
      'Beyond polynomials, the exponential and trigonometric functions have their own standard antiderivatives: ' +
      '∫eˣdx=eˣ+C, ∫sin(x)dx=−cos(x)+C, and ∫cos(x)dx=sin(x)+C — each the reverse of a familiar derivative rule.',
    whyItMatters:
      'Exponential and trigonometric functions model an enormous range of real phenomena — growth, decay, and ' +
      'periodic motion — so integrating them is essential for finding totals and accumulated change in those ' +
      'settings.',
    formulaSlug: 'exponential-trig-integration-formula',
    workedExample: {
      id: 'exp-trig-integration-worked-1',
      title: 'Integrate a mix of exponential and trigonometric terms',
      problemStatement: 'Find ∫(2eˣ + 3sin(x)) dx.',
      steps: [
        { step: 1, instruction: 'Integrate the exponential term.', math: '∫2eˣ dx = 2eˣ', explanation: 'eˣ is its own antiderivative, so the constant 2 just carries through.' },
        { step: 2, instruction: 'Integrate the sine term.', math: '∫3sin(x) dx = 3·(−cos(x)) = −3cos(x)', explanation: 'The antiderivative of sin(x) is −cos(x); the constant 3 carries through.' },
        { step: 3, instruction: 'Combine, adding the constant of integration.', math: '2eˣ − 3cos(x) + C', explanation: 'Add the two antiderivatives and one +C.' },
      ],
      finalAnswer: '∫(2eˣ + 3sin(x)) dx = 2eˣ − 3cos(x) + C.',
    },
    whyItWorks:
      'Differentiating 2eˣ−3cos(x)+C gives 2eˣ−3(−sin(x)) = 2eˣ+3sin(x), which is exactly the original integrand ' +
      '— confirming the reverse relationship between this integral and the corresponding derivative rules.',
    realLifeExample: {
      title: 'Total sound energy from a vibrating string',
      scenario: 'The instantaneous amplitude of a vibrating string is naturally modeled with sine and cosine ' +
        'functions of time.',
      explanation: 'Integrating that amplitude function over an interval recovers the accumulated quantity — ' +
        'exactly the kind of computation ∫sin(x)dx and ∫cos(x)dx make possible.',
    },
    practiceQuestions: [
      {
        id: 'exp-trig-integration-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Find ∫4cos(x) dx.',
        hints: ['The antiderivative of cos(x) is sin(x).'],
        options: [
          { id: 'a', text: '4sin(x) + C' },
          { id: 'b', text: '−4sin(x) + C' },
          { id: 'c', text: '4cos(x) + C' },
          { id: 'd', text: '−4cos(x) + C' },
        ],
        correctOptionId: 'a',
        explanation: '∫cos(x)dx = sin(x), so ∫4cos(x)dx = 4sin(x) + C.',
      },
    ],
    commonMistake:
      'Mixing up the signs — ∫sin(x)dx = −cos(x)+C (with a minus sign), while ∫cos(x)dx = sin(x)+C (with no ' +
      'minus sign); it is easy to swap these by mistake.',
    quickReview: [
      '∫eˣ dx = eˣ + C.',
      '∫sin(x) dx = −cos(x) + C.',
      '∫cos(x) dx = sin(x) + C.',
    ],
  },

  'integration-by-substitution': {
    slug: 'integration-by-substitution',
    title: 'Integration by Substitution',
    difficulty: 'hard',
    simpleExplanation:
      'Substitution rewrites a complicated integral by introducing a new variable u = g(x) for some "inner" ' +
      'part of the integrand — if the integrand also contains g\'(x) (the derivative of that inner part), the ' +
      'integral simplifies dramatically in terms of u.',
    whyItMatters:
      'Many integrals cannot be solved with the basic rules alone — substitution is the single most common ' +
      'technique for reducing a complex integral to one of the standard forms already known.',
    formulaSlug: 'substitution-method-formula',
    workedExample: {
      id: 'substitution-worked-1',
      title: 'Integrate using substitution',
      problemStatement: 'Find ∫2x(x²+1)³ dx.',
      steps: [
        { step: 1, instruction: 'Choose the substitution.', math: 'u = x² + 1', explanation: 'The "inner" function inside the cube — its own derivative, 2x, is also sitting right there in the integrand.' },
        { step: 2, instruction: 'Compute du.', math: 'du = 2x dx', explanation: 'Differentiate u with respect to x, then treat du and dx as if they can be separated.' },
        { step: 3, instruction: 'Rewrite the integral entirely in terms of u.', math: '∫2x(x²+1)³ dx = ∫u³ du', explanation: '2x dx is replaced directly by du, and (x²+1)³ becomes u³.' },
        { step: 4, instruction: 'Integrate in terms of u.', math: '∫u³ du = u⁴/4 + C', explanation: 'Apply the Power Rule for integration.' },
        { step: 5, instruction: 'Substitute back x²+1 for u.', math: '(x²+1)⁴/4 + C', explanation: 'The final answer must be in terms of the original variable x.' },
      ],
      finalAnswer: '∫2x(x²+1)³ dx = (x²+1)⁴/4 + C.',
    },
    whyItWorks:
      'This is exactly the Chain Rule for differentiation, run in reverse: differentiating (x²+1)⁴/4 gives ' +
      '4(x²+1)³/4 · 2x = 2x(x²+1)³ by the Chain Rule, which is the original integrand — so substitution is ' +
      'simply recognizing an integrand as the output of a Chain Rule differentiation and undoing it.',
    realLifeExample: {
      title: 'Modeling a chemical reaction rate that depends on a changing quantity',
      scenario: 'A reaction\'s rate might depend on the square of a concentration that is itself changing over ' +
        'time, creating a nested, composite expression to integrate.',
      explanation: 'Substitution lets the "inner" changing quantity be treated as a single new variable, ' +
        'turning a nested, hard-to-integrate expression into a simple power of u.',
    },
    practiceQuestions: [
      {
        id: 'substitution-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Find ∫2x·e^(x²) dx.',
        hints: ['Let u = x², so du = 2x dx.'],
        options: [
          { id: 'a', text: 'e^(x²) + C' },
          { id: 'b', text: '2x·e^(x²) + C' },
          { id: 'c', text: 'x²·e^(x²) + C' },
          { id: 'd', text: 'e^(x²)/2 + C' },
        ],
        correctOptionId: 'a',
        explanation: 'With u=x², du=2xdx, the integral becomes ∫eᵘ du = eᵘ + C = e^(x²) + C.',
      },
    ],
    commonMistake:
      'Choosing a substitution u=g(x) when g\'(x) does not actually appear (even up to a constant multiple) ' +
      'anywhere else in the integrand — substitution only simplifies the integral when that matching derivative is present.',
    quickReview: [
      'Choose u = g(x) for an "inner" function whose derivative also appears in the integrand.',
      'Rewrite the entire integral in terms of u and du, integrate, then substitute back.',
      'Substitution is the Chain Rule for differentiation, used in reverse.',
    ],
  },

  'integration-by-parts': {
    slug: 'integration-by-parts',
    title: 'Integration by Parts',
    difficulty: 'hard',
    simpleExplanation:
      'When an integrand is a product of two different kinds of functions (like a polynomial times an ' +
      'exponential), integration by parts — ∫u dv = uv − ∫v du — trades the original hard integral for a ' +
      'hopefully-easier one.',
    whyItMatters:
      'Substitution alone cannot handle every product integral — integration by parts covers a wide range of ' +
      'cases substitution cannot, particularly products involving polynomials, exponentials, logarithms, and ' +
      'trigonometric functions.',
    formulaSlug: 'integration-by-parts-formula',
    workedExample: {
      id: 'integration-by-parts-worked-1',
      title: 'Integrate a product using integration by parts',
      problemStatement: 'Find ∫x·eˣ dx.',
      steps: [
        { step: 1, instruction: 'Choose u and dv.', math: 'u = x,   dv = eˣ dx', explanation: 'u=x becomes simpler when differentiated (down to just 1); dv=eˣdx is easy to integrate.' },
        { step: 2, instruction: 'Compute du and v.', math: 'du = dx,   v = eˣ', explanation: 'Differentiate u and integrate dv.' },
        { step: 3, instruction: 'Apply the formula.', math: '∫x eˣ dx = xeˣ − ∫eˣ dx', explanation: 'Substitute u, v, and du into ∫u dv = uv − ∫v du.' },
        { step: 4, instruction: 'Finish the remaining, simpler integral.', math: 'xeˣ − eˣ + C', explanation: '∫eˣ dx = eˣ, so the whole expression simplifies.' },
      ],
      finalAnswer: '∫x eˣ dx = xeˣ − eˣ + C.',
    },
    whyItWorks:
      'This is exactly the Product Rule for differentiation, rearranged and integrated: d/dx[uv] = u\'v + uv\', ' +
      'so integrating both sides gives uv = ∫v du + ∫u dv, which rearranges into the Integration by Parts formula.',
    realLifeExample: {
      title: 'Computing work done by a changing force',
      scenario: 'The work done by a force that varies with position, combined with a displacement that also ' +
        'depends on another changing quantity, often produces a product of two different function types to integrate.',
      explanation: 'Integration by parts is the standard tool physicists and engineers reach for whenever such ' +
        'a product integral cannot be simplified by substitution alone.',
    },
    practiceQuestions: [
      {
        id: 'integration-by-parts-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Find ∫x·cos(x) dx.',
        hints: ['Let u=x, dv=cos(x)dx, so du=dx and v=sin(x).'],
        options: [
          { id: 'a', text: 'x sin(x) + cos(x) + C' },
          { id: 'b', text: 'x sin(x) − cos(x) + C' },
          { id: 'c', text: 'x cos(x) + sin(x) + C' },
          { id: 'd', text: '−x sin(x) + cos(x) + C' },
        ],
        correctOptionId: 'a',
        explanation: '∫x cos(x)dx = x sin(x) − ∫sin(x)dx = x sin(x) − (−cos(x)) = x sin(x) + cos(x) + C.',
      },
    ],
    commonMistake:
      'Choosing u and dv the wrong way around — if u is chosen so that it gets more complicated (not simpler) ' +
      'when differentiated, the remaining integral ∫v du usually becomes harder rather than easier.',
    quickReview: [
      '∫u dv = uv − ∫v du.',
      'Pick u to simplify under differentiation, and dv to be easy to integrate.',
      'Comes from reversing the Product Rule for differentiation.',
    ],
  },

  'setting-up-a-partial-fraction-decomposition': {
    slug: 'setting-up-a-partial-fraction-decomposition',
    title: 'Setting Up a Partial Fraction Decomposition',
    difficulty: 'hard',
    simpleExplanation:
      'A rational function whose denominator factors into distinct linear factors, like 1/[(x−a)(x−b)], can be ' +
      'rewritten as a sum of simpler fractions A/(x−a) + B/(x−b) — finding the constants A and B is called ' +
      'partial fraction decomposition.',
    whyItMatters:
      'Complicated rational functions are often impossible to integrate directly, but each simple piece A/(x−a) ' +
      'integrates immediately to a logarithm — decomposition is the key that unlocks integration for a whole ' +
      'family of otherwise-difficult integrals.',
    formulaSlug: 'partial-fraction-decomposition-formula',
    workedExample: {
      id: 'partial-fraction-setup-worked-1',
      title: 'Decompose a rational function into partial fractions',
      problemStatement: 'Decompose 1/[(x−1)(x+2)] into partial fractions.',
      steps: [
        { step: 1, instruction: 'Set up the decomposition with unknown constants.', math: '1/[(x−1)(x+2)] = A/(x−1) + B/(x+2)', explanation: 'One unknown constant per distinct linear factor.' },
        { step: 2, instruction: 'Clear denominators by multiplying both sides by (x−1)(x+2).', math: '1 = A(x+2) + B(x−1)', explanation: 'This equation must hold for every value of x.' },
        { step: 3, instruction: 'Substitute x=1 to eliminate B.', math: '1 = A(1+2) + B(0) = 3A  ⟹  A = 1/3', explanation: 'Choosing x=1 makes the (x−1) factor zero, isolating A.' },
        { step: 4, instruction: 'Substitute x=−2 to eliminate A.', math: '1 = A(0) + B(−2−1) = −3B  ⟹  B = −1/3', explanation: 'Choosing x=−2 makes the (x+2) factor zero, isolating B.' },
      ],
      finalAnswer: '1/[(x−1)(x+2)] = (1/3)/(x−1) − (1/3)/(x+2).',
    },
    whyItWorks:
      'Substituting the root of one factor (x=1, or x=−2) makes that factor exactly zero, so it wipes out every ' +
      'term that still contains it — leaving a simple equation that isolates just one unknown constant at a time.',
    realLifeExample: {
      title: 'Analyzing an electrical circuit\'s response',
      scenario: 'Circuit analysis often produces a rational function of a variable (like frequency), with a ' +
        'denominator that factors into distinct linear pieces corresponding to different circuit components.',
      explanation: 'Decomposing that rational function into partial fractions separates the combined response ' +
        'into simpler, individually-understandable pieces.',
    },
    practiceQuestions: [
      {
        id: 'partial-fraction-setup-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'For 1/[(x−1)(x+1)] = A/(x−1) + B/(x+1), find the value of A.',
        hints: ['Multiply both sides by (x−1)(x+1), then substitute x=1.'],
        correctAnswer: 0.5,
        explanation: '1 = A(x+1)+B(x−1); at x=1: 1=A(2) ⟹ A=1/2=0.5.',
      },
    ],
    commonMistake:
      'Forgetting that the decomposition setup only works directly this way when the factors are distinct and ' +
      'linear — repeated or non-linear (e.g. irreducible quadratic) factors need a different, more elaborate setup.',
    quickReview: [
      'For distinct linear factors: (px+q)/[(x−a)(x−b)] = A/(x−a) + B/(x−b).',
      'Clear denominators, then substitute x=a and x=b to isolate A and B one at a time.',
      'Only applies directly to distinct linear factors.',
    ],
  },

  'integrating-using-partial-fractions': {
    slug: 'integrating-using-partial-fractions',
    title: 'Integrating Using Partial Fractions',
    difficulty: 'hard',
    simpleExplanation:
      'Once a rational function is decomposed into simple fractions of the form A/(x−a), each piece integrates ' +
      'directly using the natural logarithm: ∫A/(x−a) dx = A·ln|x−a| + C.',
    whyItMatters:
      'This is the payoff of the whole partial fraction method — a rational function that looked impossible to ' +
      'integrate directly becomes a sum of easy logarithm integrals.',
    formulaSlug: 'partial-fraction-integration-formula',
    workedExample: {
      id: 'partial-fraction-integration-worked-1',
      title: 'Integrate using a partial fraction decomposition',
      problemStatement: 'Find ∫1/[(x−1)(x+2)] dx, using the decomposition (1/3)/(x−1) − (1/3)/(x+2) found earlier.',
      steps: [
        { step: 1, instruction: 'Rewrite the integral using the decomposition.', math: '∫[(1/3)/(x−1) − (1/3)/(x+2)] dx', explanation: 'Substitute the partial fraction form found in the previous section.' },
        { step: 2, instruction: 'Integrate each simple term.', math: '(1/3)ln|x−1| − (1/3)ln|x+2| + C', explanation: 'Each term of the form A/(x−a) integrates to A·ln|x−a|.' },
      ],
      finalAnswer: '∫1/[(x−1)(x+2)] dx = (1/3)ln|x−1| − (1/3)ln|x+2| + C.',
    },
    whyItWorks:
      'The derivative of ln|x−a| is exactly 1/(x−a) (the absolute value handles both sides of the vertical ' +
      'asymptote at x=a without changing the derivative), so each partial fraction term A/(x−a) is, by ' +
      'definition, the derivative of A·ln|x−a|.',
    realLifeExample: {
      title: 'Modeling logistic-style population growth',
      scenario: 'Certain population growth models produce a rational function of population size that needs to ' +
        'be integrated to find population as a function of time.',
      explanation: 'Partial fractions turn that integral into a sum of logarithm terms — exactly the technique ' +
        'behind deriving the closed-form logistic growth equation.',
    },
    practiceQuestions: [
      {
        id: 'partial-fraction-integration-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Given 1/[(x−1)(x+1)] = (1/2)/(x−1) − (1/2)/(x+1), find ∫1/[(x−1)(x+1)] dx.',
        hints: ['Integrate each partial fraction term to a logarithm.'],
        options: [
          { id: 'a', text: '(1/2)ln|x−1| − (1/2)ln|x+1| + C' },
          { id: 'b', text: '(1/2)ln|x−1| + (1/2)ln|x+1| + C' },
          { id: 'c', text: '2ln|x−1| − 2ln|x+1| + C' },
          { id: 'd', text: 'ln|x−1| − ln|x+1| + C' },
        ],
        correctOptionId: 'a',
        explanation: 'Each term A/(x−a) integrates to A·ln|x−a|, giving (1/2)ln|x−1| − (1/2)ln|x+1| + C.',
      },
    ],
    commonMistake:
      'Forgetting the absolute value bars in ln|x−a| — without them, the logarithm would be undefined whenever ' +
      'x−a is negative, but the antiderivative must be valid on both sides of the vertical asymptote.',
    quickReview: [
      '∫A/(x−a) dx = A·ln|x−a| + C.',
      'Decompose first, then integrate each simple piece separately.',
      'Always include the absolute value bars inside the logarithm.',
    ],
  },
};
