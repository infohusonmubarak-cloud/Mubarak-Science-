import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 4 — Sequences and Series. Matches
// sections 4.1-4.6 of the textbook exactly.
export const chapter4BConcepts: Record<string, Concept> = {
  'introduction-to-sequences-and-series': {
    slug: 'introduction-to-sequences-and-series',
    title: 'Introduction to Sequences and Series',
    difficulty: 'easy',
    simpleExplanation:
      'A sequence is an ordered list of numbers, each called a term, following some pattern — ' +
      'written a₁, a₂, a₃, ..., aₙ. A series is what you get when you add the terms of a sequence ' +
      'together — the sum of the first n terms is written Sₙ.',
    whyItMatters:
      'Distinguishing a sequence (a list) from a series (a sum) is essential — the rest of this ' +
      'chapter builds separate formulas for each, and mixing them up is a common early mistake.',
    workedExample: {
      id: 'sequences-intro-worked-1',
      title: 'Identify terms of a sequence and a partial sum',
      problemStatement: 'A sequence is defined by aₙ = 2n + 1. Find a₁, a₂, a₃, and the sum of these first three terms, S₃.',
      steps: [
        { step: 1, instruction: 'Find each term by substituting n.', math: 'a₁=2(1)+1=3,  a₂=2(2)+1=5,  a₃=2(3)+1=7', explanation: 'Substitute n=1,2,3 into the rule.' },
        { step: 2, instruction: 'Add the terms to find S₃.', math: 'S₃ = 3 + 5 + 7', explanation: 'A series is the sum of the sequence\'s terms.' },
        { step: 3, instruction: 'Evaluate.', math: 'S₃ = 15', explanation: 'Add the three values.' },
      ],
      finalAnswer: 'a₁=3, a₂=5, a₃=7, and S₃=15',
    },
    whyItWorks:
      'A sequence rule (like aₙ=2n+1) simply defines a pattern for generating each term from its ' +
      'position — a series is a separate, entirely dependent operation that just adds up however many of those generated terms you choose.',
    realLifeExample: {
      title: 'Monthly savings deposits',
      scenario: 'Someone deposits a fixed pattern of amounts into a savings account each month.',
      explanation: 'The list of individual monthly deposits is a sequence; the running total in the account after several months is the corresponding series (sum).',
    },
    practiceQuestions: [
      {
        id: 'sequences-intro-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A sequence is defined by aₙ = 3n − 1. Find a₄.',
        hints: ['Substitute n=4.'],
        correctAnswer: 11,
        explanation: 'a₄ = 3(4) − 1 = 11.',
      },
    ],
    commonMistake:
      'Using "sequence" and "series" interchangeably — a sequence is a list of terms; a series is ' +
      'the sum of those terms. They are related but different objects.',
    quickReview: [
      'A sequence is an ordered list of terms: a₁, a₂, a₃, ..., aₙ.',
      'A series is the sum of a sequence\'s terms, written Sₙ for the first n terms.',
      'A sequence rule generates terms; summing those terms produces the series.',
    ],
  },

  'arithmetic-progressions': {
    slug: 'arithmetic-progressions',
    title: 'Arithmetic Progression (A.P.)',
    difficulty: 'medium',
    simpleExplanation:
      'An arithmetic progression (A.P.) is a sequence where the same fixed number, the common ' +
      'difference d, is added to get from each term to the next. Its nth term is given directly by aₙ = a₁ + (n−1)d.',
    whyItMatters:
      'A.P.s model any process that changes by the same fixed amount every step — the most common ' +
      'and intuitive pattern in a sequence.',
    formulaSlug: 'arithmetic-sequence-nth-term',
    workedExample: {
      id: 'ap-worked-1',
      title: 'Find a term of an arithmetic progression',
      problemStatement: 'An A.P. has first term 5 and common difference 3. Find the 10th term.',
      steps: [
        { step: 1, instruction: 'Identify a₁, d, and n.', math: 'a₁=5, d=3, n=10', explanation: 'Read the given values.' },
        { step: 2, instruction: 'Apply the nth term formula.', math: 'a₁₀ = 5 + (10−1)(3)', explanation: 'Substitute into aₙ=a₁+(n−1)d.' },
        { step: 3, instruction: 'Evaluate.', math: '5 + 9(3) = 5 + 27 = 32', explanation: 'Simplify.' },
      ],
      finalAnswer: 'a₁₀ = 32',
    },
    whyItWorks:
      'Starting at a₁ and adding d exactly (n−1) times reaches the nth term — since going from a₁ ' +
      'to a₂ is one addition, a₁ to a₃ is two additions, and so on, reaching aₙ always takes exactly n−1 additions of d.',
    realLifeExample: {
      title: 'Stadium seating rows',
      scenario: 'A stadium\'s rows each have 4 more seats than the row before, starting with 20 seats in row 1.',
      explanation: 'The number of seats per row forms an A.P. with a₁=20, d=4 — the nth term formula instantly gives the seat count for any row.',
    },
    practiceQuestions: [
      {
        id: 'ap-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An A.P. has first term 7 and common difference −2. Find the 8th term.',
        hints: ['a₈ = 7 + 7(−2).'],
        correctAnswer: -7,
        explanation: 'a₈ = 7 + 7(−2) = 7 − 14 = −7.',
      },
      {
        id: 'ap-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An A.P. has a₁=4 and a₅=20. Find the common difference d.',
        hints: ['a₅ = a₁ + 4d.', '20 = 4 + 4d.'],
        correctAnswer: 4,
        explanation: '20 = 4 + 4d → 4d=16 → d=4.',
      },
    ],
    commonMistake:
      'Using n instead of (n−1) in the formula — the first term a₁ requires ZERO additions of d, ' +
      'not one, since (1−1)=0.',
    quickReview: [
      'aₙ = a₁ + (n−1)d.',
      'd = common difference: the fixed amount added between consecutive terms.',
      'Reaching the nth term always takes exactly (n−1) additions of d from a₁.',
    ],
  },

  'arithmetic-series': {
    slug: 'arithmetic-series',
    title: 'Arithmetic Series',
    difficulty: 'medium',
    simpleExplanation:
      'The sum of the first n terms of an arithmetic progression, Sₙ, can be found directly with ' +
      'Sₙ = n/2·(a₁+aₙ), without adding every term individually — the average of the first and last term, times how many terms there are.',
    whyItMatters:
      'This turns a potentially huge addition problem (like summing 1000 terms) into a single, ' +
      'quick calculation.',
    formulaSlug: 'arithmetic-series-sum',
    workedExample: {
      id: 'arithmetic-series-worked-1',
      title: 'Find the sum of an arithmetic series',
      problemStatement: 'Find the sum of the first 20 terms of the A.P. with a₁=3 and d=5.',
      steps: [
        { step: 1, instruction: 'Find the 20th term first.', math: 'a₂₀ = 3 + 19(5) = 3 + 95 = 98', explanation: 'Apply the nth term formula.' },
        { step: 2, instruction: 'Apply the sum formula.', math: 'S₂₀ = 20/2 · (3 + 98)', explanation: 'n=20, a₁=3, a₂₀=98.' },
        { step: 3, instruction: 'Evaluate.', math: '10 × 101 = 1010', explanation: 'Multiply.' },
      ],
      finalAnswer: 'S₂₀ = 1010',
    },
    whyItWorks:
      'Pairing the first term with the last (a₁+aₙ), the second term with the second-to-last ' +
      '(a₂+aₙ₋₁), and so on, every pair adds up to exactly the same total, a₁+aₙ (since each step ' +
      'gains d going up while losing d going down) — with n/2 such pairs, the sum is n/2 times that constant pair-total.',
    realLifeExample: {
      title: 'Total attendance across a ticket price range',
      scenario: 'A theatre sells tickets at prices increasing by a fixed amount for each of 15 rows, and wants the total revenue.',
      explanation: 'If revenue per row forms an A.P., the arithmetic series formula gives the total revenue in one calculation, instead of adding 15 separate amounts.',
    },
    practiceQuestions: [
      {
        id: 'arithmetic-series-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the sum of the first 10 positive integers (1+2+...+10) using the arithmetic series formula.',
        hints: ['a₁=1, a₁₀=10, n=10.'],
        correctAnswer: 55,
        explanation: 'S₁₀ = 10/2 × (1+10) = 5×11 = 55.',
      },
    ],
    commonMistake:
      'Forgetting to find aₙ first before applying Sₙ=n/2(a₁+aₙ) — you need both the first AND last term of the range being summed.',
    quickReview: [
      'Sₙ = n/2 · (a₁ + aₙ) = n/2 · (2a₁ + (n−1)d).',
      'Pairing first-and-last terms gives n/2 pairs, each summing to the same total.',
      'Find aₙ first if it is not already given.',
    ],
  },

  'geometric-progressions': {
    slug: 'geometric-progressions',
    title: 'Geometric Progression (G.P.)',
    difficulty: 'medium',
    simpleExplanation:
      'A geometric progression (G.P.) is a sequence where each term is found by multiplying the ' +
      'previous term by the same fixed number, the common ratio r. Its nth term is given directly by aₙ = a₁·rⁿ⁻¹.',
    whyItMatters:
      'G.P.s model any process that changes by the same fixed percentage or factor each step — ' +
      'compound interest, population growth, and radioactive decay all follow this pattern.',
    formulaSlug: 'geometric-sequence-nth-term',
    workedExample: {
      id: 'gp-worked-1',
      title: 'Find a term of a geometric progression',
      problemStatement: 'A G.P. has first term 3 and common ratio 2. Find the 6th term.',
      steps: [
        { step: 1, instruction: 'Identify a₁, r, and n.', math: 'a₁=3, r=2, n=6', explanation: 'Read the given values.' },
        { step: 2, instruction: 'Apply the nth term formula.', math: 'a₆ = 3 × 2⁵', explanation: 'Substitute into aₙ=a₁rⁿ⁻¹.' },
        { step: 3, instruction: 'Evaluate.', math: '3 × 32 = 96', explanation: '2⁵=32, then multiply by 3.' },
      ],
      finalAnswer: 'a₆ = 96',
    },
    whyItWorks:
      'Starting at a₁ and multiplying by r exactly (n−1) times reaches the nth term, for the same ' +
      'reason the A.P. formula works — reaching aₙ from a₁ always takes exactly n−1 "steps," here each step being a multiplication by r instead of an addition of d.',
    realLifeExample: {
      title: 'Compound interest growth',
      scenario: 'An investment of $1000 grows by 5% each year, so its value each year forms a G.P. with a₁=1000, r=1.05.',
      explanation: 'The nth term formula gives the exact investment value after any number of years directly.',
    },
    practiceQuestions: [
      {
        id: 'gp-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A G.P. has first term 5 and common ratio 3. Find the 4th term.',
        hints: ['a₄ = 5 × 3³.'],
        correctAnswer: 135,
        explanation: 'a₄ = 5 × 27 = 135.',
      },
      {
        id: 'gp-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A G.P. has a₁=2 and a₄=54. Find the common ratio r.',
        hints: ['a₄ = a₁ r³.', '54 = 2r³.'],
        correctAnswer: 3,
        explanation: '54 = 2r³ → r³=27 → r=3.',
      },
    ],
    commonMistake:
      'Using n instead of (n−1) as the exponent of r — the first term a₁ requires zero ' +
      'multiplications by r, so its exponent is (1−1)=0, giving r⁰=1.',
    quickReview: [
      'aₙ = a₁ · rⁿ⁻¹.',
      'r = common ratio: the fixed factor multiplied between consecutive terms.',
      'Models any process changing by a fixed percentage/factor each step.',
    ],
  },

  'geometric-series': {
    slug: 'geometric-series',
    title: 'Geometric Series',
    difficulty: 'medium',
    simpleExplanation:
      'The sum of the first n terms of a geometric progression, Sₙ, is found with ' +
      'Sₙ = a₁(1−rⁿ)/(1−r), giving the total directly without adding every term individually.',
    whyItMatters:
      'This is the tool behind calculating total loan repayments, total compound growth over ' +
      'several periods, and any other running total of a geometrically changing quantity.',
    formulaSlug: 'geometric-series-sum',
    workedExample: {
      id: 'geometric-series-worked-1',
      title: 'Find the sum of a geometric series',
      problemStatement: 'Find the sum of the first 5 terms of the G.P. with a₁=2 and r=3.',
      steps: [
        { step: 1, instruction: 'Apply the sum formula.', math: 'S₅ = 2(1 − 3⁵) / (1 − 3)', explanation: 'a₁=2, r=3, n=5.' },
        { step: 2, instruction: 'Evaluate the power.', math: '3⁵ = 243', explanation: 'Compute the power first.' },
        { step: 3, instruction: 'Substitute and simplify.', math: 'S₅ = 2(1−243)/(1−3) = 2(−242)/(−2)', explanation: 'Both numerator and denominator are negative.' },
        { step: 4, instruction: 'Evaluate.', math: '−484 / −2 = 242', explanation: 'A negative divided by a negative is positive.' },
      ],
      finalAnswer: 'S₅ = 242',
    },
    whyItWorks:
      'Stated simply: write Sₙ = a₁ + a₁r + a₁r² + ... + a₁rⁿ⁻¹, then multiply every term by r to ' +
      'get rSₙ = a₁r + a₁r² + ... + a₁rⁿ. Subtracting, almost every term cancels, leaving ' +
      'Sₙ − rSₙ = a₁ − a₁rⁿ, i.e. Sₙ(1−r) = a₁(1−rⁿ) — dividing both sides by (1−r) gives exactly the formula.',
    realLifeExample: {
      title: 'Total value of repeated fixed-percentage bonuses',
      scenario: 'An employee receives a bonus that increases by a fixed percentage each year for several years, and wants the total received.',
      explanation: 'If each year\'s bonus forms a G.P., the geometric series formula gives the total across all years in one calculation.',
    },
    practiceQuestions: [
      {
        id: 'geometric-series-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the sum of the first 4 terms of the G.P. with a₁=1 and r=2.',
        hints: ['S₄ = 1(1−2⁴)/(1−2).'],
        correctAnswer: 15,
        explanation: 'S₄ = (1−16)/(−1) = (−15)/(−1) = 15.',
      },
    ],
    commonMistake:
      'Applying the geometric series formula to an arithmetic sequence, or vice versa — always ' +
      'confirm whether consecutive terms share a common DIFFERENCE (arithmetic) or a common RATIO (geometric) first.',
    quickReview: [
      'Sₙ = a₁(1 − rⁿ) / (1 − r), for r ≠ 1.',
      'Proof idea: subtract rSₙ from Sₙ — almost every term cancels.',
      'Confirm the sequence is geometric (common ratio) before applying this formula.',
    ],
  },

  'infinite-geometric-series': {
    slug: 'infinite-geometric-series',
    title: 'Infinite Geometric Series',
    difficulty: 'hard',
    simpleExplanation:
      'When a geometric series continues forever, and its common ratio satisfies |r| < 1 (so each ' +
      'term shrinks toward zero), the running total approaches a fixed, finite limit: S∞ = a₁/(1−r), even though infinitely many terms are being added.',
    whyItMatters:
      'This is a genuinely surprising result — adding infinitely many positive numbers can still ' +
      'produce a finite total, as long as the terms shrink fast enough — with real applications in repeating decimals and physics.',
    formulaSlug: 'infinite-geometric-series-sum',
    workedExample: {
      id: 'infinite-geometric-worked-1',
      title: 'Find the sum of an infinite geometric series',
      problemStatement: 'Find the sum of 8 + 4 + 2 + 1 + ... continuing forever.',
      steps: [
        { step: 1, instruction: 'Identify a₁ and r.', math: 'a₁ = 8,  r = 4/8 = 1/2', explanation: 'Each term is half the one before.' },
        { step: 2, instruction: 'Confirm |r| < 1.', math: '|1/2| = 0.5 < 1', explanation: 'The infinite sum formula applies.' },
        { step: 3, instruction: 'Apply the formula.', math: 'S∞ = 8 / (1 − 1/2) = 8 / (1/2)', explanation: 'Substitute a₁ and r.' },
        { step: 4, instruction: 'Evaluate.', math: '8 ÷ 0.5 = 16', explanation: 'Dividing by 1/2 is the same as multiplying by 2.' },
      ],
      finalAnswer: 'S∞ = 16',
    },
    whyItWorks:
      'From the finite sum formula, Sₙ = a₁(1−rⁿ)/(1−r) — as n grows larger and larger, if |r| < 1 ' +
      'then rⁿ shrinks closer and closer to 0 (since repeatedly multiplying a number smaller than 1 ' +
      'by itself makes it smaller each time), so (1−rⁿ) approaches 1, and the whole expression ' +
      'approaches a₁(1)/(1−r) = a₁/(1−r) — the finite limiting value the partial sums are heading toward.',
    realLifeExample: {
      title: 'Converting a repeating decimal to a fraction',
      scenario: '0.333... can be written as the infinite series 3/10 + 3/100 + 3/1000 + ..., a geometric series with a₁=3/10, r=1/10.',
      explanation: 'S∞ = (3/10)/(1−1/10) = (3/10)/(9/10) = 1/3 — confirming that 0.333... exactly equals 1/3, using the infinite geometric series formula.',
    },
    practiceQuestions: [
      {
        id: 'infinite-geometric-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the sum of 12 + 6 + 3 + 1.5 + ... continuing forever.',
        hints: ['a₁=12, r=0.5.', 'S∞ = 12/(1−0.5).'],
        correctAnswer: 24,
        explanation: 'S∞ = 12/0.5 = 24.',
      },
      {
        id: 'infinite-geometric-pq-2',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Why does 5 + 10 + 20 + 40 + ... NOT have a finite infinite sum?',
        options: [
          { id: 'a', text: 'Its common ratio, r=2, does not satisfy |r|<1, so the terms grow instead of shrinking.' },
          { id: 'b', text: 'The first term is too large.' },
          { id: 'c', text: 'Geometric series never have infinite sums.' },
          { id: 'd', text: 'The formula only works for negative r.' },
        ],
        correctOptionId: 'a',
        hints: ['Check the value of r.'],
        explanation: 'r=2 has |r|≥1, so the terms keep growing rather than shrinking toward zero — the sum grows without bound.',
      },
    ],
    commonMistake:
      'Applying the infinite sum formula when |r| ≥ 1 — the formula is only valid (and the sum ' +
      'only exists) when |r| < 1, since otherwise the terms don\'t shrink and the total grows without bound.',
    quickReview: [
      'S∞ = a₁/(1−r), only valid when |r| < 1.',
      'As n→∞, rⁿ→0 when |r|<1, which is why the partial sums approach a fixed finite value.',
      'If |r| ≥ 1, no finite sum exists — the series diverges.',
    ],
  },
};
