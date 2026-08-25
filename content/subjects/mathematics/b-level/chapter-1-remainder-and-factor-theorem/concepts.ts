import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 1 — The Remainder Theorem and the
// Factor Theorem. Matches sections 1.1-1.4 of the textbook exactly.
export const chapter1BConcepts: Record<string, Concept> = {
  'dividing-polynomials': {
    slug: 'dividing-polynomials',
    title: 'Dividing Polynomials by Long Division',
    difficulty: 'medium',
    simpleExplanation:
      'Polynomial long division works just like ordinary long division with numbers: divide, ' +
      'multiply, subtract, bring down — repeated until the remainder has a lower degree than the ' +
      'divisor. It writes any polynomial P(x) as P(x) = D(x)·Q(x) + R(x).',
    whyItMatters:
      'Dividing polynomials is the foundation for factoring higher-degree polynomials, simplifying ' +
      'rational expressions, and — as this whole chapter builds toward — finding a polynomial\'s roots efficiently.',
    formulaSlug: 'polynomial-division-identity',
    workedExample: {
      id: 'poly-division-worked-1',
      title: 'Divide a polynomial by a linear divisor',
      problemStatement: 'Divide 2x³ − 3x² − 11x + 6 by (x − 3) using long division.',
      steps: [
        { step: 1, instruction: 'Divide the leading terms: 2x³ ÷ x = 2x².', math: '2x²', explanation: 'This is the first term of the quotient.' },
        { step: 2, instruction: 'Multiply (x−3) by 2x² and subtract.', math: '2x²(x−3) = 2x³−6x²;  (2x³−3x²) − (2x³−6x²) = 3x²', explanation: 'Bring down the next term: 3x² − 11x.' },
        { step: 3, instruction: 'Repeat: divide 3x² ÷ x = 3x, multiply and subtract.', math: '3x(x−3)=3x²−9x;  (3x²−11x) − (3x²−9x) = −2x', explanation: 'Bring down the next term: −2x + 6.' },
        { step: 4, instruction: 'Repeat once more: divide −2x ÷ x = −2, multiply and subtract.', math: '−2(x−3) = −2x+6;  (−2x+6)−(−2x+6) = 0', explanation: 'The remainder is 0 — the division is exact.' },
      ],
      finalAnswer: '2x³ − 3x² − 11x + 6 = (x − 3)(2x² + 3x − 2), remainder 0',
    },
    whyItWorks:
      'At each step, subtracting a multiple of the divisor that matches the current leading term ' +
      'removes that term entirely, always leaving a lower-degree remainder — repeating until the ' +
      'remaining degree is less than the divisor\'s degree reconstructs exactly P(x) = D(x)Q(x) + R(x).',
    realLifeExample: {
      title: 'Simplifying a rational design formula',
      scenario: 'An engineer has a complicated polynomial formula divided by a simpler linear expression and wants to simplify it for a spreadsheet.',
      explanation: 'Long division rewrites the complicated fraction as a simpler polynomial plus a small remainder term — a genuine simplification for reuse.',
    },
    practiceQuestions: [
      {
        id: 'poly-division-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Divide x² + 5x + 6 by (x + 2). What is the quotient?',
        options: [
          { id: 'a', text: 'x + 3' },
          { id: 'b', text: 'x + 2' },
          { id: 'c', text: 'x − 3' },
          { id: 'd', text: 'x + 6' },
        ],
        correctOptionId: 'a',
        hints: ['x² + 5x + 6 factors as (x+2)(x+3).'],
        explanation: '(x+2)(x+3) = x²+5x+6, so the quotient is x+3, with remainder 0.',
      },
    ],
    commonMistake:
      'Forgetting to bring down the next term with its correct sign after each subtraction step — ' +
      'a sign error at any stage propagates through every later step of the division.',
    quickReview: [
      'P(x) = D(x)·Q(x) + R(x), with degree(R) < degree(D).',
      'Divide, multiply, subtract, bring down — repeat until finished.',
      'A remainder of 0 means the divisor divides P(x) exactly.',
    ],
  },

  'synthetic-division': {
    slug: 'synthetic-division',
    title: 'Synthetic Division',
    difficulty: 'medium',
    simpleExplanation:
      'Synthetic division is a fast shortcut for dividing a polynomial by a linear divisor (x − a): ' +
      'write only the coefficients, bring down the first one, then repeatedly multiply by a and add, ' +
      'skipping all the variable-tracking that ordinary long division requires.',
    whyItMatters:
      'Synthetic division does the exact same job as long division for linear divisors, but much ' +
      'faster — the standard tool used throughout this chapter for testing possible roots quickly.',
    formulaSlug: 'polynomial-division-identity',
    workedExample: {
      id: 'synthetic-division-worked-1',
      title: 'Use synthetic division',
      problemStatement: 'Divide x³ − 4x² + x + 6 by (x − 3) using synthetic division.',
      steps: [
        { step: 1, instruction: 'Write the coefficients and the divisor\'s root.', math: 'a=3 | 1  −4  1  6', explanation: 'x − 3 = 0 gives a = 3; list the coefficients of x³, x², x¹, x⁰.' },
        { step: 2, instruction: 'Bring down the first coefficient.', math: '1', explanation: 'This starts the process.' },
        { step: 3, instruction: 'Multiply by a=3, add to the next coefficient, and repeat across the row.', math: '1×3=3, −4+3=−1;  −1×3=−3, 1+(−3)=−2;  −2×3=−6, 6+(−6)=0', explanation: 'Each step: multiply the last result by a, then add it to the next coefficient.' },
        { step: 4, instruction: 'Read off the quotient and remainder.', math: 'Quotient: x² − x − 2,  Remainder: 0', explanation: 'The last number is the remainder; the rest are the quotient\'s coefficients, one degree lower than P(x).' },
      ],
      finalAnswer: 'x³ − 4x² + x + 6 = (x − 3)(x² − x − 2), remainder 0',
    },
    whyItWorks:
      'Synthetic division is exactly polynomial long division for a divisor of the form (x − a), ' +
      'with all the repeated x-terms stripped away — since the divisor is always the same simple ' +
      'form, only the numerical coefficients need to be tracked, which is what makes the shortcut possible.',
    realLifeExample: {
      title: 'Quickly testing candidate roots by hand',
      scenario: 'A student needs to check several possible roots of a cubic polynomial to find one that works, before fully factoring it.',
      explanation: 'Synthetic division lets each candidate be tested in just a few quick lines, far faster than repeating full long division for every guess.',
    },
    practiceQuestions: [
      {
        id: 'synthetic-division-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Use synthetic division to divide x² − x − 6 by (x − 3). What is the remainder?',
        hints: ['a = 3.', 'Bring down 1, then 1×3−1=2, then 2×3−6=0.'],
        correctAnswer: 0,
        explanation: 'The synthetic division row is 1, 2, 0 — remainder 0, since x²−x−6 = (x−3)(x+2).',
      },
    ],
    commonMistake:
      'Using the wrong sign for a — for a divisor (x − a), the value placed at the left of the ' +
      'synthetic division is +a, not −a (e.g. dividing by (x+5) means a = −5, not 5).',
    quickReview: [
      'Synthetic division only works for linear divisors of the form (x − a).',
      'Bring down the first coefficient, then repeatedly multiply by a and add.',
      'The last number is the remainder; the rest give the quotient, one degree lower.',
    ],
  },

  'the-remainder-theorem': {
    slug: 'the-remainder-theorem',
    title: 'The Remainder Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'The Remainder Theorem says that dividing a polynomial P(x) by (x − a) always leaves a ' +
      'remainder equal to P(a) — so you can find the remainder with a single substitution, without doing any division at all.',
    whyItMatters:
      'This is a genuine shortcut: it replaces an entire division process with one evaluation, ' +
      'saving significant work whenever only the remainder (not the full quotient) is needed.',
    formulaSlug: 'remainder-theorem-formula',
    workedExample: {
      id: 'remainder-theorem-worked-1',
      title: 'Find a remainder using substitution',
      problemStatement: 'Find the remainder when P(x) = x³ − 2x² + 4x − 1 is divided by (x − 2), without dividing.',
      steps: [
        { step: 1, instruction: 'Identify a from the divisor.', math: 'x − 2 = 0  →  a = 2', explanation: 'The divisor is (x − a) with a = 2.' },
        { step: 2, instruction: 'Substitute a into P(x).', math: 'P(2) = (2)³ − 2(2)² + 4(2) − 1', explanation: 'By the remainder theorem, this equals the remainder.' },
        { step: 3, instruction: 'Evaluate.', math: '8 − 8 + 8 − 1 = 7', explanation: 'Simplify step by step.' },
      ],
      finalAnswer: 'The remainder is 7',
    },
    whyItWorks:
      'From the division identity, P(x) = (x−a)Q(x) + R, where R is a constant (since the degree ' +
      'of R must be less than the degree of the linear divisor, degree 1, meaning R has degree 0). ' +
      'Substituting x = a makes the (x−a)Q(x) term vanish entirely, leaving P(a) = R exactly.',
    realLifeExample: {
      title: 'Quick error-checking in engineering calculations',
      scenario: 'An engineer wants to quickly verify whether a specific measurement value satisfies a polynomial design constraint, without fully dividing the formula.',
      explanation: 'A single substitution (the remainder theorem) tells them immediately whether that value gives an exact fit (remainder 0) or how far off it is.',
    },
    practiceQuestions: [
      {
        id: 'remainder-theorem-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the remainder when P(x) = 2x³ + x − 5 is divided by (x + 1). (Note: x+1 = x−(−1).)',
        hints: ['a = −1.', 'P(−1) = 2(−1)³ + (−1) − 5.'],
        correctAnswer: -8,
        explanation: 'P(−1) = 2(−1) + (−1) − 5 = −2−1−5 = −8.',
      },
    ],
    commonMistake:
      'Applying the remainder theorem to a non-linear divisor (like x² − 4) — it only works ' +
      'directly for linear divisors of the exact form (x − a).',
    quickReview: [
      'Dividing P(x) by (x − a) leaves a remainder of exactly P(a).',
      'This replaces the whole division process with a single substitution.',
      'Only applies to linear divisors of the form (x − a).',
    ],
  },

  'the-factor-theorem': {
    slug: 'the-factor-theorem',
    title: 'The Factor Theorem',
    difficulty: 'medium',
    simpleExplanation:
      'The Factor Theorem is a direct consequence of the Remainder Theorem: (x − a) is a factor of ' +
      'P(x) — meaning it divides P(x) exactly, with remainder 0 — exactly when P(a) = 0, i.e. when a is a root of P(x).',
    whyItMatters:
      'This turns "is this a factor?" into a simple substitution-and-check — the essential first ' +
      'step for factoring any polynomial of degree 3 or higher.',
    formulaSlug: 'factor-theorem-formula',
    workedExample: {
      id: 'factor-theorem-worked-1',
      title: 'Test whether an expression is a factor',
      problemStatement: 'Is (x − 1) a factor of P(x) = x³ − 6x² + 11x − 6?',
      steps: [
        { step: 1, instruction: 'Identify a from the candidate factor.', math: 'x − 1 = 0  →  a = 1', explanation: 'Test a = 1.' },
        { step: 2, instruction: 'Substitute a into P(x).', math: 'P(1) = 1 − 6 + 11 − 6', explanation: 'Apply the factor theorem test.' },
        { step: 3, instruction: 'Evaluate and interpret.', math: 'P(1) = 0', explanation: 'Since P(1) = 0, (x−1) IS a factor.' },
      ],
      finalAnswer: 'Yes, (x − 1) is a factor of P(x), since P(1) = 0.',
    },
    whyItWorks:
      'By the remainder theorem, dividing P(x) by (x − a) leaves remainder P(a). "(x−a) is a ' +
      'factor" means that division leaves remainder exactly 0 — combining these two facts directly ' +
      'gives: (x−a) is a factor of P(x) if and only if P(a) = 0.',
    realLifeExample: {
      title: 'Checking a proposed solution to a design equation',
      scenario: 'An engineer proposes a specific value as a solution to a polynomial design equation and wants to confirm it exactly.',
      explanation: 'Testing that value with the factor theorem (checking whether P(a)=0) instantly confirms or rules out the proposed solution.',
    },
    practiceQuestions: [
      {
        id: 'factor-theorem-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Is (x + 2) a factor of P(x) = x³ + 3x² − x − 6?',
        options: [
          { id: 'a', text: 'Yes, since P(−2) = 0' },
          { id: 'b', text: 'No, since P(−2) ≠ 0' },
          { id: 'c', text: 'Yes, since P(2) = 0' },
          { id: 'd', text: 'Cannot be determined' },
        ],
        correctOptionId: 'a',
        hints: ['x+2 = x−(−2), so test a = −2.', 'P(−2) = (−2)³+3(−2)²−(−2)−6.'],
        explanation: 'P(−2) = −8 + 12 + 2 − 6 = 0, so (x+2) IS a factor.',
      },
    ],
    commonMistake:
      'Testing the wrong value of a — for a candidate factor (x + 3), the correct test value is ' +
      'a = −3 (since x+3 = x−(−3)), not a = 3.',
    quickReview: [
      '(x − a) is a factor of P(x) if and only if P(a) = 0.',
      'A direct consequence of the remainder theorem: remainder 0 means exact division.',
      'The standard first test when trying to factor a higher-degree polynomial.',
    ],
  },

  'factoring-polynomials-using-the-factor-theorem': {
    slug: 'factoring-polynomials-using-the-factor-theorem',
    title: 'Factoring Polynomials Using the Factor Theorem',
    difficulty: 'hard',
    simpleExplanation:
      'To fully factor a higher-degree polynomial: test candidate values of a (usually factors of ' +
      'the constant term) using the factor theorem until P(a) = 0 is found, divide out that factor ' +
      '(by synthetic division), and repeat on the lower-degree quotient until it is fully factored.',
    whyItMatters:
      'This combines everything from the chapter into the complete practical method for factoring — ' +
      'and, by extension, solving — any polynomial equation of degree 3 or higher.',
    formulaSlug: 'factor-theorem-formula',
    workedExample: {
      id: 'factoring-with-theorem-worked-1',
      title: 'Fully factor a cubic polynomial',
      problemStatement: 'Fully factor P(x) = x³ − 2x² − 5x + 6.',
      steps: [
        { step: 1, instruction: 'Test candidate values (factors of the constant term, 6: ±1, ±2, ±3, ±6).', math: 'P(1) = 1−2−5+6 = 0', explanation: 'a=1 works — (x−1) is a factor.' },
        { step: 2, instruction: 'Divide P(x) by (x−1) using synthetic division.', math: 'Quotient: x² − x − 6', explanation: 'This is one degree lower than P(x).' },
        { step: 3, instruction: 'Factor the resulting quadratic.', math: 'x² − x − 6 = (x−3)(x+2)', explanation: 'Ordinary quadratic factoring.' },
        { step: 4, instruction: 'Combine all factors.', math: 'P(x) = (x−1)(x−3)(x+2)', explanation: 'The original factor plus the factored quadratic.' },
      ],
      finalAnswer: 'P(x) = (x − 1)(x − 3)(x + 2)',
    },
    whyItWorks:
      'Each application of the factor theorem removes exactly one linear factor and reduces the ' +
      'polynomial\'s degree by one — repeating this process (test, divide, repeat) on the shrinking ' +
      'quotient eventually reaches a quadratic (or lower), which ordinary factoring methods can finish.',
    realLifeExample: {
      title: 'Finding all break-even points of a cubic cost model',
      scenario: 'A business\'s profit is modeled by a cubic polynomial, and the owner wants every value where profit is exactly zero.',
      explanation: 'Fully factoring the cubic using the factor theorem reveals every root — every break-even point — at once, rather than solving a cubic equation from scratch.',
    },
    practiceQuestions: [
      {
        id: 'factoring-with-theorem-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Fully factor x³ − 7x + 6. (Hint: try a = 1 first.)',
        options: [
          { id: 'a', text: '(x−1)(x−2)(x+3)' },
          { id: 'b', text: '(x−1)(x+2)(x−3)' },
          { id: 'c', text: '(x+1)(x−2)(x+3)' },
          { id: 'd', text: '(x−1)(x−2)(x−3)' },
        ],
        correctOptionId: 'a',
        hints: ['P(1) = 1−7+6 = 0, so (x−1) is a factor.', 'Divide to get x²+x−6, which factors further.'],
        explanation: 'P(1)=0, dividing gives x²+x−6=(x−2)(x+3), so x³−7x+6=(x−1)(x−2)(x+3).',
      },
    ],
    commonMistake:
      'Stopping after finding just one factor — a cubic generally has up to three roots; keep ' +
      'applying the process to the shrinking quotient until it is fully factored (down to linear or irreducible quadratic factors).',
    quickReview: [
      'Test candidate values (factors of the constant term) with the factor theorem.',
      'Divide out each factor found (synthetic division), then repeat on the smaller quotient.',
      'Continue until the quotient is a quadratic (or lower) that ordinary methods can finish.',
    ],
  },
};
