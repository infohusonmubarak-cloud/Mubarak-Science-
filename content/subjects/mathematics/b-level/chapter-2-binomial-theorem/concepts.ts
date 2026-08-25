import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 2 — The Binomial Theorem. Matches
// sections 2.1-2.2 of the textbook exactly.
export const chapter2BConcepts: Record<string, Concept> = {
  'meaning-of-binomial-coefficients': {
    slug: 'meaning-of-binomial-coefficients',
    title: 'Meaning of Binomial Coefficients and Pascal\'s Triangle',
    difficulty: 'medium',
    simpleExplanation:
      'A binomial coefficient, written ⁿCᵣ (read "n choose r"), counts how many ways you can choose ' +
      'r items from a group of n, where order doesn\'t matter. These same numbers appear as the ' +
      'coefficients when expanding (a+b)ⁿ, and can be read directly off row n of Pascal\'s triangle — ' +
      'a triangular array where each number is the sum of the two numbers above it.',
    whyItMatters:
      'Binomial coefficients are the bridge between counting (combinations) and algebra (binomial ' +
      'expansions) — the same numbers do both jobs, which is exactly why the binomial theorem works.',
    formulaSlug: 'combination-formula',
    workedExample: {
      id: 'binomial-coeff-worked-1',
      title: 'Evaluate a binomial coefficient',
      problemStatement: 'Evaluate ⁵C₂.',
      steps: [
        { step: 1, instruction: 'Apply the combination formula.', math: '⁵C₂ = 5! / (2!(5−2)!) = 5!/(2!3!)', explanation: 'n=5, r=2.' },
        { step: 2, instruction: 'Expand the factorials.', math: '5! = 120,  2! = 2,  3! = 6', explanation: 'Compute each factorial.' },
        { step: 3, instruction: 'Simplify.', math: '120 / (2×6) = 120/12 = 10', explanation: 'Divide.' },
      ],
      finalAnswer: '⁵C₂ = 10',
    },
    whyItWorks:
      'Pascal\'s triangle\'s "each number is the sum of the two above it" rule directly matches the ' +
      'identity ⁿCᵣ = ⁿ⁻¹Cᵣ₋₁ + ⁿ⁻¹Cᵣ (choosing r items either includes a specific item, using ' +
      'ⁿ⁻¹Cᵣ₋₁ ways to pick the rest, or excludes it, using ⁿ⁻¹Cᵣ ways) — so building the triangle ' +
      'row by row always reproduces the exact same numbers as the combination formula.',
    realLifeExample: {
      title: 'Choosing a committee',
      scenario: 'A club with 10 members wants to know how many different 3-person committees it could form.',
      explanation: '¹⁰C₃ gives that count directly — order doesn\'t matter for a committee, exactly the situation binomial coefficients are built for.',
    },
    practiceQuestions: [
      {
        id: 'binomial-coeff-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate ⁶C₂.',
        hints: ['⁶C₂ = 6!/(2!4!).', '6×5/(2×1) is a shortcut.'],
        correctAnswer: 15,
        explanation: '⁶C₂ = (6×5)/(2×1) = 30/2 = 15.',
      },
    ],
    commonMistake:
      'Confusing ⁿCᵣ (order doesn\'t matter) with ⁿPᵣ (order matters, permutations) — binomial ' +
      'coefficients always use combinations, never permutations.',
    quickReview: [
      'ⁿCᵣ = n! / (r!(n−r)!) — the number of ways to choose r from n, order not mattering.',
      'These are exactly the coefficients in the expansion of (a+b)ⁿ.',
      'Row n of Pascal\'s triangle lists ⁿC₀, ⁿC₁, ..., ⁿCₙ in order.',
    ],
  },

  'expanding-small-binomial-powers': {
    slug: 'expanding-small-binomial-powers',
    title: 'Expanding Small Binomial Powers',
    difficulty: 'medium',
    simpleExplanation:
      'To expand (a+b)ⁿ for a small n, read off row n of Pascal\'s triangle for the coefficients, ' +
      'then pair each coefficient with a term aⁿ⁻ʳbʳ, where the exponent of a decreases by 1 and the exponent of b increases by 1 as you move along the row.',
    whyItMatters:
      'This gives a fast, reliable, mistake-resistant method for expanding a binomial power, far ' +
      'quicker than multiplying out (a+b)(a+b)(a+b)... by hand.',
    workedExample: {
      id: 'expand-small-worked-1',
      title: 'Expand a binomial to the 4th power',
      problemStatement: 'Expand (x + 2)⁴.',
      steps: [
        { step: 1, instruction: 'Read row 4 of Pascal\'s triangle for the coefficients.', math: '1, 4, 6, 4, 1', explanation: 'These are ⁴C₀ through ⁴C₄.' },
        { step: 2, instruction: 'Pair each coefficient with x⁴⁻ʳ(2)ʳ, for r = 0 to 4.', math: '1·x⁴(2)⁰ + 4·x³(2)¹ + 6·x²(2)² + 4·x¹(2)³ + 1·x⁰(2)⁴', explanation: 'x\'s exponent decreases 4→0; 2\'s exponent increases 0→4.' },
        { step: 3, instruction: 'Evaluate each term.', math: 'x⁴ + 8x³ + 24x² + 32x + 16', explanation: 'Compute each coefficient times the powers of 2.' },
      ],
      finalAnswer: '(x + 2)⁴ = x⁴ + 8x³ + 24x² + 32x + 16',
    },
    whyItWorks:
      'Every term in the expansion of (a+b)ⁿ comes from picking either a or b from each of the n ' +
      'factors and multiplying — choosing b from exactly r of the n factors (and a from the rest) ' +
      'gives a term aⁿ⁻ʳbʳ, and there are exactly ⁿCᵣ ways to choose which r factors contribute a b, ' +
      'which is exactly the coefficient.',
    realLifeExample: {
      title: 'Compound interest approximations',
      scenario: 'Expanding (1+r)ⁿ for a small number of compounding periods gives each term\'s individual contribution to total growth.',
      explanation: 'Financial analysts sometimes expand small powers of (1+r) directly this way, to see how much each order of compounding effect contributes.',
    },
    practiceQuestions: [
      {
        id: 'expand-small-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Expand (x − 1)³.',
        options: [
          { id: 'a', text: 'x³ − 3x² + 3x − 1' },
          { id: 'b', text: 'x³ + 3x² + 3x + 1' },
          { id: 'c', text: 'x³ − 3x² − 3x − 1' },
          { id: 'd', text: 'x³ − x² + x − 1' },
        ],
        correctOptionId: 'a',
        hints: ['Row 3 of Pascal\'s triangle: 1, 3, 3, 1.', 'Watch the alternating signs since b = −1.'],
        explanation: '(x−1)³ = x³ + 3x²(−1) + 3x(−1)² + (−1)³ = x³−3x²+3x−1.',
      },
    ],
    commonMistake:
      'Forgetting to alternate signs when b is negative — each term\'s sign follows from bʳ itself ' +
      'being negative when r is odd, not from manually alternating + and − by guesswork.',
    quickReview: [
      'Use row n of Pascal\'s triangle for the coefficients.',
      'Pair each coefficient with aⁿ⁻ʳbʳ, exponents moving in opposite directions.',
      'If b is negative, let bʳ carry its own sign automatically — don\'t alternate signs by hand separately.',
    ],
  },

  'the-binomial-theorem': {
    slug: 'the-binomial-theorem',
    title: 'The Binomial Theorem',
    difficulty: 'hard',
    simpleExplanation:
      'The Binomial Theorem gives the complete expansion of (a+b)ⁿ for ANY power n, all at once: ' +
      '(a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ, summed over r = 0 to n. It generalizes Pascal\'s-triangle expansion to work for any n, even very large ones, without needing to build the whole triangle first.',
    whyItMatters:
      'This is the general, formula-based version of what Pascal\'s triangle does visually — it ' +
      'works for any power n, including large values where building a triangle by hand would be impractical.',
    formulaSlug: 'binomial-theorem-formula',
    workedExample: {
      id: 'binomial-theorem-worked-1',
      title: 'Apply the binomial theorem directly',
      problemStatement: 'Use the binomial theorem to find the first three terms of (x + 3)⁶.',
      steps: [
        { step: 1, instruction: 'Write the general term formula for r=0, 1, 2.', math: 'T(r+1) = ⁶Cᵣ x⁶⁻ʳ (3)ʳ', explanation: 'n=6, a=x, b=3.' },
        { step: 2, instruction: 'Compute the r=0 term.', math: '⁶C₀ x⁶ (3)⁰ = 1·x⁶·1 = x⁶', explanation: 'The first term.' },
        { step: 3, instruction: 'Compute the r=1 term.', math: '⁶C₁ x⁵ (3)¹ = 6·x⁵·3 = 18x⁵', explanation: 'The second term.' },
        { step: 4, instruction: 'Compute the r=2 term.', math: '⁶C₂ x⁴ (3)² = 15·x⁴·9 = 135x⁴', explanation: 'The third term.' },
      ],
      finalAnswer: '(x + 3)⁶ = x⁶ + 18x⁵ + 135x⁴ + ... (continuing to r=6)',
    },
    whyItWorks:
      'Stated simply: (a+b)ⁿ means multiplying n copies of (a+b) together. Expanding this product ' +
      'means picking either a or b from each of the n factors, in every possible combination, and ' +
      'adding up all the results. Collecting together every way of picking exactly r copies of b ' +
      '(and n−r copies of a) gives the term aⁿ⁻ʳbʳ, and there are exactly ⁿCᵣ such ways (choosing ' +
      'which r of the n factors contribute a b) — summing over every possible r from 0 to n accounts for every term, proving the theorem.',
    realLifeExample: {
      title: 'Probability of a fixed number of successes',
      scenario: 'The probability of getting exactly r successes in n independent trials, each with fixed success probability, uses binomial coefficients in exactly this pattern.',
      explanation: 'The binomial probability formula is built directly on the binomial theorem\'s ⁿCᵣ structure — the same coefficients doing double duty in algebra and probability.',
    },
    practiceQuestions: [
      {
        id: 'binomial-theorem-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the coefficient of the x³ term (i.e. r=1) in the expansion of (x + 2)⁴ using the binomial theorem. (This is the ⁴C₁ · 2¹ part.)',
        hints: ['⁴C₁ = 4.', 'Coefficient = ⁴C₁ × 2¹.'],
        correctAnswer: 8,
        explanation: '⁴C₁ × 2¹ = 4 × 2 = 8, matching the x³ term found earlier: 8x³.',
      },
    ],
    commonMistake:
      'Forgetting that the exponents of a and b must always sum to n in every term — a term like ' +
      'a³b³ from an expansion of (a+b)⁵ would be an error, since 3+3=6, not 5.',
    quickReview: [
      '(a+b)ⁿ = Σ (r=0 to n) ⁿCᵣ aⁿ⁻ʳ bʳ.',
      'Works for any power n, unlike reading a specific row of Pascal\'s triangle by hand.',
      'Proof idea: counts how many ways each aⁿ⁻ʳbʳ term can arise from multiplying out n factors of (a+b).',
    ],
  },

  'the-general-term-of-a-binomial-expansion': {
    slug: 'the-general-term-of-a-binomial-expansion',
    title: 'The General Term of a Binomial Expansion',
    difficulty: 'hard',
    simpleExplanation:
      'The general term formula, T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ, lets you jump directly to any single term of ' +
      'a binomial expansion — like the 5th term, or the term containing a particular power of x — without expanding every earlier term first.',
    whyItMatters:
      'For a high power n, expanding the entire binomial just to reach one specific term wastes a ' +
      'huge amount of effort — the general term formula gets there in one step.',
    formulaSlug: 'general-term-formula',
    workedExample: {
      id: 'general-term-worked-1',
      title: 'Find a specific term directly',
      problemStatement: 'Find the 4th term in the expansion of (x + 2)⁷.',
      steps: [
        { step: 1, instruction: 'Identify r from the term number.', math: 'T(r+1) = T4  →  r = 3', explanation: 'The 4th term corresponds to r+1=4, so r=3.' },
        { step: 2, instruction: 'Apply the general term formula.', math: 'T4 = ⁷C₃ x⁷⁻³ (2)³', explanation: 'n=7, a=x, b=2, r=3.' },
        { step: 3, instruction: 'Evaluate each piece.', math: '⁷C₃ = 35,  x⁴,  2³ = 8', explanation: 'Compute the coefficient and powers separately.' },
        { step: 4, instruction: 'Combine.', math: '35 × x⁴ × 8 = 280x⁴', explanation: 'Multiply the numeric parts together.' },
      ],
      finalAnswer: 'The 4th term is 280x⁴',
    },
    whyItWorks:
      'The general term is just the binomial theorem\'s summation formula with one specific value of ' +
      'r plugged in — since every term of the full sum already has this exact form, isolating one ' +
      'value of r extracts exactly that one term, correctly, without needing the rest.',
    realLifeExample: {
      title: 'Finding a specific data-fitting coefficient',
      scenario: 'An engineer needs only one specific coefficient from a large binomial-based series expansion used in a signal-processing model.',
      explanation: 'Using the general term formula for that one r-value avoids computing the entire (potentially huge) expansion just to reach the needed term.',
    },
    practiceQuestions: [
      {
        id: 'general-term-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What is the 3rd term in the expansion of (x + 1)⁵?',
        options: [
          { id: 'a', text: '10x³' },
          { id: 'b', text: '5x⁴' },
          { id: 'c', text: '10x²' },
          { id: 'd', text: '1' },
        ],
        correctOptionId: 'a',
        hints: ['3rd term means r=2.', 'T3 = ⁵C₂ x³ (1)².'],
        explanation: '⁵C₂=10, so T3 = 10·x³·1 = 10x³.',
      },
    ],
    commonMistake:
      'Using r = (term number) instead of r = (term number) − 1 — the Tth term corresponds to ' +
      'r = T−1, since the very first term (T1) always corresponds to r=0.',
    quickReview: [
      'T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ.',
      'For the Tth term, use r = T − 1.',
      'Lets you find one specific term without expanding the whole binomial.',
    ],
  },

  'finding-the-coefficient-of-a-specific-term': {
    slug: 'finding-the-coefficient-of-a-specific-term',
    title: 'Finding the Coefficient of a Specific Term',
    difficulty: 'hard',
    simpleExplanation:
      'To find the coefficient of a specific power of x in a binomial expansion (like the ' +
      'coefficient of x⁵), set up the general term formula, solve for the value of r that gives ' +
      'that exact power of x, and then evaluate only the numeric coefficient at that r.',
    whyItMatters:
      'This is the most common practical use of the binomial theorem — questions rarely ask for a ' +
      '"term number," but frequently ask for the coefficient of a specific power of a variable.',
    formulaSlug: 'general-term-formula',
    workedExample: {
      id: 'finding-coefficient-worked-1',
      title: 'Find the coefficient of a specific power',
      problemStatement: 'Find the coefficient of x⁴ in the expansion of (x + 3)⁶.',
      steps: [
        { step: 1, instruction: 'Write the general term.', math: 'T(r+1) = ⁶Cᵣ x⁶⁻ʳ (3)ʳ', explanation: 'n=6, a=x, b=3.' },
        { step: 2, instruction: 'Set the exponent of x equal to 4 and solve for r.', math: '6 − r = 4  →  r = 2', explanation: 'This identifies which term has x⁴.' },
        { step: 3, instruction: 'Evaluate the coefficient at r=2.', math: '⁶C₂ × (3)² = 15 × 9', explanation: 'Compute the binomial coefficient and the power of 3.' },
        { step: 4, instruction: 'Multiply.', math: '15 × 9 = 135', explanation: 'This is the coefficient of x⁴.' },
      ],
      finalAnswer: 'The coefficient of x⁴ is 135',
    },
    whyItWorks:
      'Every term in the expansion has a distinct power of x (from x⁰ up to xⁿ), so there is exactly ' +
      'one value of r that produces the requested power — solving "exponent of x = target" for r ' +
      'identifies that one term uniquely, and the general term formula then gives its exact coefficient.',
    realLifeExample: {
      title: 'Approximating (1+x)ⁿ for small x',
      scenario: 'Scientists often approximate expressions like (1+x)ⁿ for small x by keeping only the first few terms, needing the exact coefficient of each low power of x.',
      explanation: 'Finding the coefficient of x², x³, etc. this way builds an accurate polynomial approximation used throughout physics and engineering.',
    },
    practiceQuestions: [
      {
        id: 'finding-coefficient-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the coefficient of x³ in the expansion of (x + 2)⁵.',
        hints: ['Set 5 − r = 3, so r = 2.', 'Coefficient = ⁵C₂ × 2².'],
        correctAnswer: 40,
        explanation: '⁵C₂=10, 2²=4, so coefficient = 10×4=40.',
      },
    ],
    commonMistake:
      'Forgetting to include the power of b in the coefficient — the "coefficient of x⁴" is ' +
      'ⁿCᵣ × bʳ together, not just the binomial coefficient ⁿCᵣ by itself.',
    quickReview: [
      'Set the exponent of x in the general term equal to the target power, and solve for r.',
      'Evaluate ⁿCᵣ × bʳ at that r to get the full coefficient — not just ⁿCᵣ alone.',
      'A very common practical question format for the binomial theorem.',
    ],
  },
};
