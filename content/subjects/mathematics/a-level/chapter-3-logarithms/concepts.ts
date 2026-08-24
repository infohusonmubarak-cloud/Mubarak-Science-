import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 3 — Logarithms. Matches sections 3.1-3.5
// of the textbook exactly.
export const chapter3Concepts: Record<string, Concept> = {
  'writing-numbers-in-scientific-notation': {
    slug: 'writing-numbers-in-scientific-notation',
    title: 'Writing Numbers in Scientific Notation',
    difficulty: 'easy',
    simpleExplanation:
      'Scientific notation writes a number as a × 10ⁿ, where a is a decimal between 1 and 10 ' +
      '(1 ≤ a < 10) and n is an integer. Move the decimal point until only one nonzero digit ' +
      'remains in front of it, and count how many places you moved it — that count is n.',
    whyItMatters:
      'Very large numbers (like distances in space) or very small numbers (like the size of an ' +
      'atom) are unwieldy to write and compare in ordinary decimal form — scientific notation ' +
      'keeps them compact and makes their size easy to compare at a glance.',
    formulaSlug: 'scientific-notation-form',
    workedExample: {
      id: 'sci-notation-worked-1',
      title: 'Convert a large number to scientific notation',
      problemStatement: 'Write 45,000,000 in scientific notation.',
      steps: [
        { step: 1, instruction: 'Move the decimal point until one nonzero digit remains before it.', math: '45,000,000 → 4.5', explanation: 'The decimal point moves 7 places to the left.' },
        { step: 2, instruction: 'Count how many places the decimal point moved.', math: '7 places', explanation: 'Moving left means the exponent on 10 will be positive.' },
        { step: 3, instruction: 'Write the result.', math: '45,000,000 = 4.5 × 10⁷', explanation: 'The coefficient 4.5 satisfies 1 ≤ a < 10.' },
      ],
      finalAnswer: '45,000,000 = 4.5 × 10⁷',
    },
    whyItWorks:
      'Multiplying by 10ⁿ shifts the decimal point exactly n places, so writing a × 10ⁿ with the ' +
      'decimal point already placed correctly in a, and then recording how many shifts n undoes, ' +
      'reproduces the original number exactly.',
    realLifeExample: {
      title: 'Astronomical distances',
      scenario: 'The distance from Earth to the Sun is about 150,000,000 km.',
      explanation: 'Written as 1.5 × 10⁸ km, the distance is far easier to read, compare to other distances, and use in calculations.',
    },
    practiceQuestions: [
      {
        id: 'sci-notation-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Write 0.00032 in scientific notation.',
        options: [
          { id: 'a', text: '3.2 × 10⁻⁴' },
          { id: 'b', text: '3.2 × 10⁴' },
          { id: 'c', text: '32 × 10⁻⁵' },
          { id: 'd', text: '3.2 × 10⁻³' },
        ],
        correctOptionId: 'a',
        hints: ['Moving the decimal point right (for a small number) gives a negative exponent.', 'The point moves 4 places.'],
        explanation: '0.00032 = 3.2 × 10⁻⁴ — the decimal point moved 4 places right, so the exponent is -4.',
      },
    ],
    commonMistake:
      'Leaving the coefficient outside the range 1 ≤ a < 10 (e.g. writing 45 × 10⁶ instead of ' +
      '4.5 × 10⁷) — the coefficient must always have exactly one nonzero digit before the decimal point.',
    quickReview: [
      'a × 10ⁿ, with 1 ≤ a < 10 and n an integer.',
      'Large numbers get a positive exponent; small numbers (less than 1) get a negative exponent.',
      'Count how many places the decimal point moves to find n.',
    ],
  },

  'multiplying-and-dividing-in-scientific-notation': {
    slug: 'multiplying-and-dividing-in-scientific-notation',
    title: 'Multiplying and Dividing in Scientific Notation',
    difficulty: 'medium',
    simpleExplanation:
      'To multiply or divide numbers in scientific notation, multiply/divide the coefficients ' +
      'and use the exponent rules on the powers of 10 separately, then adjust the result back ' +
      'into proper scientific notation if the coefficient falls outside 1 ≤ a < 10.',
    whyItMatters:
      'Scientific fields (astronomy, chemistry, engineering) constantly multiply and divide ' +
      'measurements written in scientific notation — doing this efficiently avoids expanding huge or tiny numbers by hand.',
    formulaSlug: 'scientific-notation-form',
    workedExample: {
      id: 'sci-notation-ops-worked-1',
      title: 'Multiply two numbers in scientific notation',
      problemStatement: 'Simplify (3 × 10⁴) × (2 × 10³).',
      steps: [
        { step: 1, instruction: 'Multiply the coefficients.', math: '3 × 2 = 6', explanation: 'Handle the decimal parts separately from the powers of 10.' },
        { step: 2, instruction: 'Add the exponents (product rule for exponents).', math: '10⁴ × 10³ = 10⁷', explanation: 'Same base (10), so add the exponents.' },
        { step: 3, instruction: 'Combine.', math: '6 × 10⁷', explanation: 'The coefficient 6 is already between 1 and 10, so no further adjustment is needed.' },
      ],
      finalAnswer: '(3 × 10⁴) × (2 × 10³) = 6 × 10⁷',
    },
    whyItWorks:
      'Multiplication can be regrouped freely, so (a × 10ᵐ)(b × 10ⁿ) = (a × b) × (10ᵐ × 10ⁿ), and ' +
      'the exponent rules from Chapter 2 handle the powers of 10 part exactly as they would for any other base.',
    realLifeExample: {
      title: 'Computing total data storage',
      scenario: 'A data centre has 5 × 10³ servers, each storing 2 × 10¹² bytes.',
      explanation: 'Total storage is (5 × 10³)(2 × 10¹²) = 10 × 10¹⁵ = 1 × 10¹⁶ bytes — multiplying in scientific notation avoids writing out 16-digit numbers by hand.',
    },
    practiceQuestions: [
      {
        id: 'sci-notation-ops-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Simplify (8 × 10⁵) ÷ (4 × 10²).',
        options: [
          { id: 'a', text: '2 × 10³' },
          { id: 'b', text: '2 × 10⁷' },
          { id: 'c', text: '4 × 10³' },
          { id: 'd', text: '2 × 10¹⁰' },
        ],
        correctOptionId: 'a',
        hints: ['Divide the coefficients: 8 ÷ 4.', 'Subtract the exponents: 5 − 2.'],
        explanation: '8÷4 = 2, and 10⁵/10² = 10³, giving 2 × 10³.',
      },
    ],
    commonMistake:
      'Multiplying or dividing the exponents themselves instead of the powers of 10 they belong to — ' +
      'always apply the ordinary exponent rules (add for multiply, subtract for divide) to the powers of 10, and combine the coefficients separately.',
    quickReview: [
      'Multiply/divide the coefficients and the powers of 10 separately.',
      'Use the exponent product/quotient rules on the powers of 10.',
      'Re-adjust into 1 ≤ a < 10 form if the resulting coefficient falls outside that range.',
    ],
  },

  'meaning-of-a-logarithm': {
    slug: 'meaning-of-a-logarithm',
    title: 'Meaning of a Logarithm',
    difficulty: 'medium',
    simpleExplanation:
      'A logarithm answers the question "to what power must the base be raised to produce this ' +
      'number?" log_b(x) = y means exactly the same thing as bʸ = x — a logarithm and an exponential ' +
      'equation are just two ways of writing the same relationship.',
    whyItMatters:
      'Logarithms are the inverse of exponentiation, the same way subtraction is the inverse of ' +
      'addition and division is the inverse of multiplication — they let you "undo" an exponent to solve for it.',
    formulaSlug: 'definition-of-a-logarithm',
    workedExample: {
      id: 'meaning-log-worked-1',
      title: 'Convert between logarithmic and exponential form',
      problemStatement: 'Rewrite log₂(8) = 3 as an exponential equation, and rewrite 5² = 25 as a logarithmic equation.',
      steps: [
        { step: 1, instruction: 'Apply the definition to the first equation.', math: 'log_b(x)=y ⇔ bʸ=x, so log₂(8)=3 ⇔ 2³=8', explanation: 'Base 2, exponent 3, result 8.' },
        { step: 2, instruction: 'Apply the definition to the second equation.', math: '5²=25 ⇔ log₅(25)=2', explanation: 'Base 5, exponent 2, result 25 — matched to the log_b(x)=y pattern.' },
      ],
      finalAnswer: 'log₂(8) = 3  ⇔  2³ = 8;  and  5² = 25  ⇔  log₅(25) = 2',
    },
    whyItWorks:
      'The two forms are defined to mean exactly the same statement about the same three ' +
      'numbers (base, exponent, result) — converting between them never changes the underlying ' +
      'relationship, only how it is written.',
    realLifeExample: {
      title: 'The Richter scale for earthquakes',
      scenario: 'An earthquake\'s magnitude on the Richter scale is defined using a base-10 logarithm of the ground-shaking amplitude.',
      explanation: 'A magnitude-5 quake corresponds to log₁₀(amplitude) = 5, i.e. an amplitude of 10⁵ — logarithms compress an enormous range of amplitudes into a manageable magnitude scale.',
    },
    practiceQuestions: [
      {
        id: 'meaning-log-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which exponential equation is equivalent to log₃(81) = 4?',
        options: [
          { id: 'a', text: '3⁴ = 81' },
          { id: 'b', text: '4³ = 81' },
          { id: 'c', text: '81⁴ = 3' },
          { id: 'd', text: '3⁸¹ = 4' },
        ],
        correctOptionId: 'a',
        hints: ['log_b(x) = y means bʸ = x.'],
        explanation: 'log₃(81)=4 means the base 3 raised to the exponent 4 gives 81: 3⁴ = 81.',
      },
    ],
    commonMistake:
      'Mixing up which number is the base in the exponential form — in log_b(x) = y, the base b ' +
      'stays the base in bʸ = x; it never swaps places with x or y.',
    quickReview: [
      'log_b(x) = y means exactly the same thing as bʸ = x.',
      'A logarithm is the exponent that produces a given result from a given base.',
      'Logarithms are the inverse operation of exponentiation.',
    ],
  },

  'evaluating-logarithms': {
    slug: 'evaluating-logarithms',
    title: 'Evaluating Logarithms',
    difficulty: 'medium',
    simpleExplanation:
      'To evaluate log_b(x) by hand, ask "what power of b gives x?" — often you can answer this ' +
      'directly by recognizing x as a power of b you already know.',
    whyItMatters:
      'Being able to evaluate simple logarithms mentally builds the number sense needed to check ' +
      'whether a calculator\'s answer (or an algebraic simplification) is reasonable.',
    formulaSlug: 'definition-of-a-logarithm',
    workedExample: {
      id: 'evaluate-log-worked-1',
      title: 'Evaluate a logarithm by recognizing a power',
      problemStatement: 'Evaluate log₄(64).',
      steps: [
        { step: 1, instruction: 'Ask "what power of 4 gives 64?"', explanation: 'This is exactly what the logarithm is asking for.' },
        { step: 2, instruction: 'Test powers of 4.', math: '4¹=4, 4²=16, 4³=64', explanation: 'Keep raising 4 to higher powers until you reach 64.' },
        { step: 3, instruction: 'Read off the exponent.', math: 'log₄(64) = 3', explanation: '4³ = 64, so the logarithm equals 3.' },
      ],
      finalAnswer: 'log₄(64) = 3',
    },
    whyItWorks:
      'By the definition of a logarithm, log_b(x) is exactly the exponent that turns b into x — so ' +
      'finding that exponent by trial (or by recognizing a familiar power) is a direct, valid way to evaluate it.',
    realLifeExample: {
      title: 'Reading sound intensity in decibels',
      scenario: 'Decibel level is calculated using log₁₀ of a sound intensity ratio.',
      explanation: 'Recognizing that an intensity ratio of 100 is 10², an audio engineer can immediately read off log₁₀(100) = 2, without a calculator.',
    },
    practiceQuestions: [
      {
        id: 'evaluate-log-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate log₂(32).',
        hints: ['What power of 2 gives 32?', '2⁵ = 32.'],
        correctAnswer: 5,
        explanation: '2⁵ = 32, so log₂(32) = 5.',
      },
      {
        id: 'evaluate-log-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate log₅(1/25). (Give a negative number.)',
        hints: ['1/25 = 5⁻².', 'Use the negative exponent from Chapter 2.'],
        correctAnswer: -2,
        explanation: '5⁻² = 1/25, so log₅(1/25) = -2.',
      },
    ],
    commonMistake:
      'Trying to evaluate log_b(x) when x is not a clean power of b, without switching to the ' +
      'change of base formula or a calculator — not every logarithm has a "nice" whole-number answer.',
    quickReview: [
      'log_b(x) equals the exponent that turns b into x.',
      'Evaluate by recognizing x as a familiar power of b.',
      'Negative results mean x is a fraction less than 1 (a negative power of b).',
    ],
  },

  'product-rule-of-logarithms': {
    slug: 'product-rule-of-logarithms',
    title: 'Product Rule of Logarithms',
    difficulty: 'medium',
    simpleExplanation:
      'The logarithm of a product equals the sum of the logarithms: log_b(MN) = log_b M + log_b N. ' +
      'This mirrors the exponent product rule, since logarithms are exponents in disguise.',
    whyItMatters:
      'The product rule turns multiplication inside a logarithm into addition outside it — the ' +
      'historical reason logarithms were invented, to make hand multiplication of large numbers as easy as addition.',
    formulaSlug: 'product-rule-of-logarithms',
    workedExample: {
      id: 'product-log-worked-1',
      title: 'Expand a logarithm of a product',
      problemStatement: 'Expand log₂(8 × 16) using the product rule, then evaluate.',
      steps: [
        { step: 1, instruction: 'Apply the product rule.', math: 'log₂(8 × 16) = log₂8 + log₂16', explanation: 'Split the log of a product into a sum of logs.' },
        { step: 2, instruction: 'Evaluate each logarithm.', math: 'log₂8 = 3,  log₂16 = 4', explanation: '2³=8 and 2⁴=16.' },
        { step: 3, instruction: 'Add the results.', math: '3 + 4 = 7', explanation: 'Sum the two logarithms.' },
      ],
      finalAnswer: 'log₂(8 × 16) = 7  (matches log₂128 = 7, since 8×16=128=2⁷)',
    },
    whyItWorks:
      'If log_b M = p and log_b N = q, then M = bᵖ and N = bᵠ, so MN = bᵖ·bᵠ = bᵖ⁺ᵠ by the exponent ' +
      'product rule — meaning log_b(MN) is exactly p + q, i.e. log_b M + log_b N.',
    realLifeExample: {
      title: 'Combining sound intensities in decibels',
      scenario: 'Two sound sources combine their intensities, and decibel levels are logarithmic.',
      explanation: 'Because decibels are proportional to a logarithm, combining sound sources involves adding logarithmic (decibel-like) quantities rather than the raw intensities directly.',
    },
    practiceQuestions: [
      {
        id: 'product-log-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which expression equals log₃(9x)?',
        options: [
          { id: 'a', text: '2 + log₃x' },
          { id: 'b', text: 'log₃9 × log₃x' },
          { id: 'c', text: '9 + log₃x' },
          { id: 'd', text: 'log₃x − 2' },
        ],
        correctOptionId: 'a',
        hints: ['log₃(9x) = log₃9 + log₃x.', 'log₃9 = 2, since 3² = 9.'],
        explanation: 'log₃(9x) = log₃9 + log₃x = 2 + log₃x.',
      },
    ],
    commonMistake:
      'Turning log_b(MN) into (log_b M)(log_b N), i.e. multiplying the logs instead of adding ' +
      'them — the product rule converts multiplication to addition, not to another multiplication.',
    quickReview: [
      'log_b(MN) = log_b M + log_b N.',
      'The product rule lets you expand a log of a product into a sum, or condense a sum into a log of a product.',
      'It comes directly from the exponent product rule, since logs are exponents.',
    ],
  },

  'quotient-rule-of-logarithms': {
    slug: 'quotient-rule-of-logarithms',
    title: 'Quotient Rule of Logarithms',
    difficulty: 'medium',
    simpleExplanation:
      'The logarithm of a quotient equals the difference of the logarithms: log_b(M/N) = log_b M − log_b N.',
    whyItMatters:
      'The quotient rule is the division counterpart to the product rule, letting you split or ' +
      'combine logarithms of fractions the same way you split or combine logarithms of products.',
    formulaSlug: 'quotient-rule-of-logarithms',
    workedExample: {
      id: 'quotient-log-worked-1',
      title: 'Expand a logarithm of a quotient',
      problemStatement: 'Expand log₅(125/25) using the quotient rule, then evaluate.',
      steps: [
        { step: 1, instruction: 'Apply the quotient rule.', math: 'log₅(125/25) = log₅125 − log₅25', explanation: 'Split the log of a quotient into a difference of logs.' },
        { step: 2, instruction: 'Evaluate each logarithm.', math: 'log₅125 = 3,  log₅25 = 2', explanation: '5³=125 and 5²=25.' },
        { step: 3, instruction: 'Subtract.', math: '3 − 2 = 1', explanation: 'Subtract the second log from the first.' },
      ],
      finalAnswer: 'log₅(125/25) = 1  (matches log₅5 = 1, since 125/25 = 5)',
    },
    whyItWorks:
      'If log_b M = p and log_b N = q, then M = bᵖ and N = bᵠ, so M/N = bᵖ/bᵠ = bᵖ⁻ᵠ by the exponent ' +
      'quotient rule — meaning log_b(M/N) is exactly p − q.',
    realLifeExample: {
      title: 'Comparing pH readings',
      scenario: 'pH is a base-10 logarithmic scale, and comparing two solutions often involves the ratio of their hydrogen-ion concentrations.',
      explanation: 'log₁₀ of that concentration ratio equals the difference of the two pH-defining logarithms, matching the quotient rule directly.',
    },
    practiceQuestions: [
      {
        id: 'quotient-log-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which expression equals log₂(x/8)?',
        options: [
          { id: 'a', text: 'log₂x − 3' },
          { id: 'b', text: 'log₂x + 3' },
          { id: 'c', text: 'log₂x − 8' },
          { id: 'd', text: '3 − log₂x' },
        ],
        correctOptionId: 'a',
        hints: ['log₂(x/8) = log₂x − log₂8.', 'log₂8 = 3.'],
        explanation: 'log₂(x/8) = log₂x − log₂8 = log₂x − 3.',
      },
    ],
    commonMistake:
      'Subtracting in the wrong order — log_b(M/N) is log_b M minus log_b N, not the other way ' +
      'around; the numerator\'s logarithm always comes first.',
    quickReview: [
      'log_b(M/N) = log_b M − log_b N.',
      'The quotient rule converts division inside a log into subtraction outside it.',
      'Keep the order: numerator\'s log minus denominator\'s log.',
    ],
  },

  'power-rule-of-logarithms': {
    slug: 'power-rule-of-logarithms',
    title: 'Power Rule of Logarithms',
    difficulty: 'medium',
    simpleExplanation:
      'The logarithm of a number raised to a power equals the power times the logarithm of the ' +
      'number: log_b(Mᵖ) = p · log_b M. This lets you bring an exponent down out of a logarithm as an ordinary multiplier.',
    whyItMatters:
      'The power rule is the key tool for solving equations where the unknown sits in an exponent — ' +
      'it converts an exponent into a coefficient, which ordinary algebra can then isolate.',
    formulaSlug: 'power-rule-of-logarithms',
    workedExample: {
      id: 'power-log-worked-1',
      title: 'Use the power rule to simplify',
      problemStatement: 'Simplify log₃(9²) using the power rule, then evaluate.',
      steps: [
        { step: 1, instruction: 'Apply the power rule.', math: 'log₃(9²) = 2 · log₃9', explanation: 'Bring the exponent 2 down as a multiplier.' },
        { step: 2, instruction: 'Evaluate the remaining logarithm.', math: 'log₃9 = 2', explanation: '3² = 9.' },
        { step: 3, instruction: 'Multiply.', math: '2 × 2 = 4', explanation: 'Multiply the exponent by the evaluated logarithm.' },
      ],
      finalAnswer: 'log₃(9²) = 4  (matches log₃81 = 4, since 9² = 81 = 3⁴)',
    },
    whyItWorks:
      'If log_b M = q, then M = bᵠ, so Mᵖ = (bᵠ)ᵖ = bᵖᵠ by the power-of-a-power exponent rule — ' +
      'meaning log_b(Mᵖ) is exactly pq, i.e. p times the original logarithm.',
    realLifeExample: {
      title: 'Solving for time in a growth formula',
      scenario: 'An investment formula A = A₀(1.06)ᵗ needs to be solved for the exponent t.',
      explanation: 'Taking a logarithm of both sides brings t down using the power rule, turning an "unknown exponent" problem into ordinary algebra.',
    },
    practiceQuestions: [
      {
        id: 'power-log-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate log₂(4³) using the power rule (give the final numeric value).',
        hints: ['log₂(4³) = 3 · log₂4.', 'log₂4 = 2.'],
        correctAnswer: 6,
        explanation: 'log₂(4³) = 3 · log₂4 = 3 × 2 = 6.',
      },
    ],
    commonMistake:
      'Applying the power rule to the base instead of the argument — log_b(Mᵖ) = p·log_b M works ' +
      'when the exponent is on M (the argument); it says nothing about changing the base b itself.',
    quickReview: [
      'log_b(Mᵖ) = p · log_b M.',
      'The power rule brings an exponent down out of a logarithm as a multiplier.',
      'This is the key step for solving equations with the variable in an exponent.',
    ],
  },

  'using-the-change-of-base-formula': {
    slug: 'using-the-change-of-base-formula',
    title: 'Using the Change of Base Formula',
    difficulty: 'hard',
    simpleExplanation:
      'Most calculators only compute logarithms in base 10 or base e. The change of base formula, ' +
      'log_b M = log_a M / log_a b, converts a logarithm in any base b into a ratio of logarithms in a base a your calculator understands.',
    whyItMatters:
      'Without this formula, evaluating something like log₇(50) would be impossible on an ordinary ' +
      'calculator — change of base makes every logarithm computable, regardless of its base.',
    formulaSlug: 'change-of-base-formula',
    workedExample: {
      id: 'change-of-base-worked-1',
      title: 'Evaluate a logarithm using change of base',
      problemStatement: 'Evaluate log₇(50) using base-10 logarithms (log₁₀50 ≈ 1.699, log₁₀7 ≈ 0.845).',
      steps: [
        { step: 1, instruction: 'Apply the change of base formula with a = 10.', math: 'log₇50 = log₁₀50 / log₁₀7', explanation: 'Rewrite as a ratio of base-10 logarithms.' },
        { step: 2, instruction: 'Substitute the known values.', math: '1.699 / 0.845', explanation: 'Use the given base-10 logarithm values.' },
        { step: 3, instruction: 'Divide.', math: '≈ 2.011', explanation: 'This is the value a calculator would confirm directly for log₇(50).' },
      ],
      finalAnswer: 'log₇(50) ≈ 2.011',
    },
    whyItWorks:
      'Let log_b M = y, so bʸ = M. Taking log_a of both sides gives log_a(bʸ) = log_a M, and the ' +
      'power rule turns the left side into y · log_a b — solving for y reproduces exactly the change of base formula.',
    realLifeExample: {
      title: 'Comparing growth rates with different bases',
      scenario: 'Two competing investment plans are modeled with different exponential bases, and an analyst needs to compare their logarithms directly.',
      explanation: 'Change of base lets the analyst convert both to the same base (say, base 10) so their logarithmic values can be directly compared using an ordinary calculator.',
    },
    practiceQuestions: [
      {
        id: 'change-of-base-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Using log₁₀2 ≈ 0.301 and log₁₀3 ≈ 0.477, evaluate log₃(2) to 2 decimal places.',
        hints: ['log₃2 = log₁₀2 / log₁₀3.'],
        correctAnswer: 0.63,
        tolerance: 0.02,
        explanation: 'log₃2 = 0.301/0.477 ≈ 0.63.',
      },
    ],
    commonMistake:
      'Writing the formula upside down (log_a b / log_a M instead of log_a M / log_a b) — the ' +
      'original argument M always goes in the numerator, and the original base b always goes in the denominator.',
    quickReview: [
      'log_b M = log_a M / log_a b, for any convenient new base a.',
      'Almost always used with a = 10 or a = e, to match a calculator.',
      'The original argument goes on top; the original base goes on the bottom.',
    ],
  },

  'common-logarithm': {
    slug: 'common-logarithm',
    title: 'The Common Logarithm',
    difficulty: 'easy',
    simpleExplanation:
      'The common logarithm is a logarithm with base 10. It is written log(x) or log₁₀(x) — when ' +
      'no base is written at all, base 10 is always assumed.',
    whyItMatters:
      'Base 10 matches our everyday decimal number system, which is why the common logarithm is ' +
      'the default on calculators and shows up throughout science in scales like pH and the Richter scale.',
    workedExample: {
      id: 'common-log-worked-1',
      title: 'Evaluate a common logarithm',
      problemStatement: 'Evaluate log(1000).',
      steps: [
        { step: 1, instruction: 'Recognize the base is 10 (unwritten).', math: 'log(1000) = log₁₀(1000)', explanation: 'No base written means base 10.' },
        { step: 2, instruction: 'Ask what power of 10 gives 1000.', math: '10³ = 1000', explanation: '10×10×10 = 1000.' },
      ],
      finalAnswer: 'log(1000) = 3',
    },
    whyItWorks:
      'By the definition of a logarithm, log₁₀(x) is exactly the exponent that 10 must be raised ' +
      'to in order to reach x — for powers of 10, that exponent is simply the count of zeros after the leading 1.',
    realLifeExample: {
      title: 'The pH scale',
      scenario: 'pH is defined as pH = −log[H⁺], the negative common logarithm of hydrogen-ion concentration.',
      explanation: 'Because it uses a base-10 logarithm, each whole-number change in pH represents a tenfold change in acidity — a direct real-world use of the common logarithm.',
    },
    practiceQuestions: [
      {
        id: 'common-log-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate log(100,000).',
        hints: ['Count the zeros after the leading 1.', '10⁵ = 100,000.'],
        correctAnswer: 5,
        explanation: 'log(100,000) = log₁₀(10⁵) = 5.',
      },
    ],
    commonMistake:
      'Assuming an unwritten logarithm base means base e — a bare "log" with no base always means base 10 (common logarithm); base e is always written explicitly as "ln".',
    quickReview: [
      'log(x) with no visible base always means log₁₀(x).',
      'For a power of 10, log gives back the exponent directly.',
      'The common logarithm underlies scales like pH and the Richter scale.',
    ],
  },

  'natural-logarithm': {
    slug: 'natural-logarithm',
    title: 'The Natural Logarithm',
    difficulty: 'medium',
    simpleExplanation:
      'The natural logarithm is a logarithm with base e, an irrational constant approximately ' +
      'equal to 2.71828. It is written ln(x), and ln(x) = log_e(x) — the two notations mean the same thing.',
    whyItMatters:
      'The constant e arises naturally in any process that grows or decays continuously (rather ' +
      'than in discrete steps) — the natural logarithm is the essential tool for working with such processes in calculus and science.',
    formulaSlug: 'natural-logarithm-and-e',
    workedExample: {
      id: 'natural-log-worked-1',
      title: 'Evaluate a natural logarithm of a power of e',
      problemStatement: 'Evaluate ln(e⁵).',
      steps: [
        { step: 1, instruction: 'Recognize this as log_e(e⁵).', math: 'ln(e⁵) = log_e(e⁵)', explanation: 'ln always means base e.' },
        { step: 2, instruction: 'Ask what power of e gives e⁵.', math: 'e⁵ = e⁵', explanation: 'The base and the argument\'s base already match exactly.' },
      ],
      finalAnswer: 'ln(e⁵) = 5',
    },
    whyItWorks:
      'By the definition of a logarithm, log_e(eⁿ) always equals n directly, since eⁿ is already ' +
      'written as e raised to the exact exponent the logarithm is asking for.',
    realLifeExample: {
      title: 'Continuous compound interest',
      scenario: 'A savings formula for continuous compounding is A = A₀eʳᵗ.',
      explanation: 'To solve this formula for the time t, you take the natural logarithm of both sides — ln is the natural partner to any formula built on the constant e.',
    },
    practiceQuestions: [
      {
        id: 'natural-log-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate ln(e³).',
        hints: ['ln(eⁿ) = n directly.'],
        correctAnswer: 3,
        explanation: 'ln(e³) = 3, since ln always uses base e.',
      },
    ],
    commonMistake:
      'Confusing "ln" with "log" (base 10) — they are logarithms with different bases (e versus ' +
      '10) and give different numeric results for the same argument, except at x = 1, where both always equal 0.',
    quickReview: [
      'ln(x) = log_e(x), the logarithm with base e ≈ 2.71828.',
      'ln(eⁿ) = n, directly by the definition of a logarithm.',
      'The natural logarithm is essential for continuous growth/decay processes.',
    ],
  },

  'solving-logarithmic-equations': {
    slug: 'solving-logarithmic-equations',
    title: 'Solving Logarithmic Equations',
    difficulty: 'hard',
    simpleExplanation:
      'To solve an equation containing a logarithm, first isolate the logarithm, then convert the ' +
      'equation to exponential form using the definition of a logarithm, and finally solve the resulting equation.',
    whyItMatters:
      'This is where every logarithm rule comes together — combining the definition of a ' +
      'logarithm with its properties lets you solve equations that would otherwise be impossible using ordinary algebra alone.',
    formulaSlug: 'definition-of-a-logarithm',
    workedExample: {
      id: 'solve-log-eq-worked-1',
      title: 'Solve a logarithmic equation',
      problemStatement: 'Solve log₂(x) + log₂(x − 2) = 3.',
      steps: [
        { step: 1, instruction: 'Combine the logs using the product rule.', math: 'log₂[x(x−2)] = 3', explanation: 'log₂x + log₂(x−2) = log₂[x(x−2)].' },
        { step: 2, instruction: 'Convert to exponential form.', math: 'x(x−2) = 2³ = 8', explanation: 'log_b(M) = y ⇔ bʸ = M.' },
        { step: 3, instruction: 'Expand and solve the quadratic.', math: 'x² − 2x − 8 = 0  →  (x−4)(x+2) = 0', explanation: 'Factor the quadratic equation.' },
        { step: 4, instruction: 'Check both solutions in the original equation.', math: 'x = 4 or x = -2', explanation: 'x = -2 makes log₂(x) undefined (negative argument), so it must be rejected.' },
      ],
      finalAnswer: 'x = 4 (x = -2 is rejected, since logarithms of negative numbers are undefined)',
    },
    whyItWorks:
      'The logarithm properties let multiple logarithmic terms be condensed into a single ' +
      'logarithm, and the definition of a logarithm then converts that single equation into an ' +
      'equivalent, solvable exponential equation — checking each solution afterward catches any that fall outside the logarithm\'s valid domain.',
    realLifeExample: {
      title: 'Finding when an investment reaches a target',
      scenario: 'An investment formula involves solving for a time variable trapped inside a logarithmic relationship after simplification.',
      explanation: 'Financial analysts routinely use exactly this "isolate, convert, solve, check" process to answer "when will this investment reach $X?" questions.',
    },
    practiceQuestions: [
      {
        id: 'solve-log-eq-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Solve for x: log₃(x) = 4.',
        hints: ['Convert to exponential form: x = 3⁴.'],
        correctAnswer: 81,
        explanation: 'log₃(x) = 4 ⇔ x = 3⁴ = 81.',
      },
    ],
    commonMistake:
      'Forgetting to check solutions against the domain of the original logarithm — a logarithm\'s ' +
      'argument must always be positive, so any solution making it zero or negative must be rejected, even if it solves the simplified equation.',
    quickReview: [
      'Isolate the logarithm, convert to exponential form using the definition, then solve.',
      'Combine multiple logarithms into one using the product/quotient/power rules first, if needed.',
      'Always check solutions against the domain — logarithm arguments must be positive.',
    ],
  },
};
