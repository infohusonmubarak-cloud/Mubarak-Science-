import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 2 — Exponents and Radicals. Matches
// sections 2.1-2.4 of the textbook exactly.
export const chapter2Concepts: Record<string, Concept> = {
  'meaning-of-an-exponent': {
    slug: 'meaning-of-an-exponent',
    title: 'Meaning of an Exponent',
    difficulty: 'easy',
    simpleExplanation:
      'An exponent tells you how many times to multiply a number (the base) by itself. In aⁿ, ' +
      'a is the base and n is the exponent (or power): a is used as a factor n times, so ' +
      'aⁿ = a × a × a × ... × a (n factors).',
    whyItMatters:
      'Exponents are shorthand for repeated multiplication, the same way multiplication is ' +
      'shorthand for repeated addition — without it, writing "2 multiplied by itself 20 times" ' +
      'would take a full line instead of just 2²⁰.',
    workedExample: {
      id: 'meaning-exponent-worked-1',
      title: 'Expand and evaluate a power',
      problemStatement: 'Write 3⁴ as repeated multiplication and evaluate it.',
      steps: [
        { step: 1, instruction: 'Identify the base and exponent.', math: 'base = 3, exponent = 4', explanation: '3 is used as a factor 4 times.' },
        { step: 2, instruction: 'Write out the repeated multiplication.', math: '3⁴ = 3 × 3 × 3 × 3', explanation: 'Four copies of the base, multiplied together.' },
        { step: 3, instruction: 'Multiply step by step.', math: '3 × 3 = 9,  9 × 3 = 27,  27 × 3 = 81', explanation: 'Multiply left to right.' },
      ],
      finalAnswer: '3⁴ = 81',
    },
    whyItWorks:
      'Exponent notation is purely a naming convention for repeated multiplication — it always ' +
      'evaluates to exactly the same number as writing out all the factors by hand.',
    realLifeExample: {
      title: 'Doubling storage or population',
      scenario: 'A cell divides into 2 cells, then those divide into 2 each, and so on, doubling every generation.',
      explanation: 'After n generations there are 2ⁿ cells — the exponent counts how many times the doubling has happened.',
    },
    practiceQuestions: [
      {
        id: 'meaning-exponent-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate 2⁵.',
        hints: ['Multiply 2 by itself 5 times.', '2×2=4, 4×2=8, 8×2=16, 16×2=32.'],
        correctAnswer: 32,
        explanation: '2⁵ = 2×2×2×2×2 = 32.',
      },
    ],
    commonMistake:
      'Confusing aⁿ with a × n — an exponent means repeated multiplication, not repeated addition. 3⁴ is 81, not 12.',
    quickReview: [
      'aⁿ means a used as a factor n times: aⁿ = a × a × ... × a (n factors).',
      'a is the base; n is the exponent (power).',
      'Exponents are shorthand for repeated multiplication, not repeated addition.',
    ],
  },

  'zero-and-negative-exponents': {
    slug: 'zero-and-negative-exponents',
    title: 'Zero and Negative Exponents',
    difficulty: 'medium',
    simpleExplanation:
      'Any nonzero number raised to the power 0 equals 1: a⁰ = 1. A negative exponent means ' +
      '"take the reciprocal of the base raised to the positive exponent": a⁻ⁿ = 1/aⁿ.',
    whyItMatters:
      'Extending exponents to zero and negative values keeps the exponent rules working ' +
      'consistently for every integer, not just positive whole numbers — essential once you start ' +
      'combining and simplifying expressions with the product and quotient rules.',
    formulaSlug: 'zero-and-negative-exponent-rule',
    workedExample: {
      id: 'zero-negative-worked-1',
      title: 'Evaluate a negative exponent',
      problemStatement: 'Evaluate 5⁻².',
      steps: [
        { step: 1, instruction: 'Rewrite using the negative-exponent rule.', math: '5⁻² = 1/5²', explanation: 'Flip to the reciprocal and make the exponent positive.' },
        { step: 2, instruction: 'Evaluate the positive power.', math: '5² = 25', explanation: '5 × 5 = 25.' },
        { step: 3, instruction: 'Write the final fraction.', math: '5⁻² = 1/25', explanation: 'The reciprocal of 25.' },
      ],
      finalAnswer: '5⁻² = 1/25',
    },
    whyItWorks:
      'These rules are defined so the pattern aⁿ⁺¹ = aⁿ × a keeps working as n drops through 1, ' +
      '0, and negative numbers: dividing by a each time as the exponent decreases by 1 forces ' +
      'a⁰ = 1 and a⁻ⁿ = 1/aⁿ.',
    realLifeExample: {
      title: 'Shrinking measurements in science',
      scenario: 'A micrometre is 10⁻⁶ metres — a millionth of a metre.',
      explanation: 'Negative exponents give scientists a compact way to write extremely small quantities without long strings of zeros.',
    },
    practiceQuestions: [
      {
        id: 'zero-negative-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate 7⁰.',
        hints: ['Any nonzero number to the power 0 is always the same value.'],
        correctAnswer: 1,
        explanation: '7⁰ = 1, by the zero-exponent rule.',
      },
      {
        id: 'zero-negative-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is 2⁻³?',
        options: [
          { id: 'a', text: '-8' },
          { id: 'b', text: '1/8' },
          { id: 'c', text: '8' },
          { id: 'd', text: '-1/8' },
        ],
        correctOptionId: 'b',
        hints: ['2⁻³ = 1/2³.', '2³ = 8.'],
        explanation: '2⁻³ = 1/2³ = 1/8.',
      },
    ],
    commonMistake:
      'Thinking a negative exponent makes the result negative — it does not. A negative ' +
      'exponent means "reciprocal", not "negative number": 2⁻³ = 1/8, not -8.',
    quickReview: [
      'a⁰ = 1, for any nonzero a.',
      'a⁻ⁿ = 1/aⁿ.',
      'A negative exponent flips the base to a reciprocal — it does not make the value negative.',
    ],
  },

  'product-and-quotient-rules-of-exponents': {
    slug: 'product-and-quotient-rules-of-exponents',
    title: 'Product and Quotient Rules',
    difficulty: 'medium',
    simpleExplanation:
      'When multiplying powers with the same base, add the exponents: aᵐ · aⁿ = aᵐ⁺ⁿ. When ' +
      'dividing powers with the same base, subtract the exponents: aᵐ / aⁿ = aᵐ⁻ⁿ.',
    whyItMatters:
      'These two rules let you simplify long chains of multiplication and division of powers ' +
      'instantly, without expanding every factor — the workhorse rules behind almost every ' +
      'later exponent simplification.',
    formulaSlug: 'product-and-quotient-rule-of-exponents',
    workedExample: {
      id: 'product-quotient-worked-1',
      title: 'Simplify a product and a quotient of powers',
      problemStatement: 'Simplify x⁵ · x³ and y⁸ / y³.',
      steps: [
        { step: 1, instruction: 'Apply the product rule (add exponents).', math: 'x⁵ · x³ = x⁵⁺³ = x⁸', explanation: 'Same base x, so add the exponents.' },
        { step: 2, instruction: 'Apply the quotient rule (subtract exponents).', math: 'y⁸ / y³ = y⁸⁻³ = y⁵', explanation: 'Same base y, so subtract the exponents.' },
      ],
      finalAnswer: 'x⁵ · x³ = x⁸  and  y⁸ / y³ = y⁵',
    },
    whyItWorks:
      'x⁵ · x³ is (5 copies of x multiplied together) times (3 more copies) = 8 copies total, ' +
      'so the exponents literally add. Division cancels shared factors, which is the same as ' +
      'subtracting how many copies remain.',
    realLifeExample: {
      title: 'Combining repeated scalings',
      scenario: 'A photo is enlarged by a factor of 2 three times in a row, then by a factor of 2 two more times.',
      explanation: 'That is 2³ × 2² = 2⁵ total enlargement — the product rule adds up repeated identical scalings automatically.',
    },
    practiceQuestions: [
      {
        id: 'product-quotient-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Simplify a⁴ · a⁶.',
        options: [
          { id: 'a', text: 'a¹⁰' },
          { id: 'b', text: 'a²⁴' },
          { id: 'c', text: 'a²' },
          { id: 'd', text: '2a¹⁰' },
        ],
        correctOptionId: 'a',
        hints: ['Same base, so add the exponents.'],
        explanation: 'a⁴ · a⁶ = a⁴⁺⁶ = a¹⁰.',
      },
      {
        id: 'product-quotient-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Simplify b¹² / b⁵.',
        options: [
          { id: 'a', text: 'b⁷' },
          { id: 'b', text: 'b¹⁷' },
          { id: 'c', text: 'b⁶⁰' },
          { id: 'd', text: 'b²·⁴' },
        ],
        correctOptionId: 'a',
        hints: ['Same base, so subtract the exponents.'],
        explanation: 'b¹² / b⁵ = b¹²⁻⁵ = b⁷.',
      },
    ],
    commonMistake:
      'Multiplying the exponents instead of adding them (or applying the rule to different ' +
      'bases) — the product and quotient rules only work when the base is exactly the same on both sides.',
    quickReview: [
      'aᵐ · aⁿ = aᵐ⁺ⁿ — multiplying same-base powers adds exponents.',
      'aᵐ / aⁿ = aᵐ⁻ⁿ — dividing same-base powers subtracts exponents.',
      'These rules only apply when the base is identical on both sides.',
    ],
  },

  'power-of-a-power-and-product-rules': {
    slug: 'power-of-a-power-and-product-rules',
    title: 'Power of a Power, Power of a Product',
    difficulty: 'medium',
    simpleExplanation:
      'Raising a power to another power multiplies the exponents: (aᵐ)ⁿ = aᵐⁿ. Raising a whole ' +
      'product or quotient to a power distributes that power to every factor: (ab)ⁿ = aⁿbⁿ and ' +
      '(a/b)ⁿ = aⁿ/bⁿ.',
    whyItMatters:
      'Expressions with nested powers, or powers of whole products, show up constantly in ' +
      'algebra — these rules let you expand or simplify them in one step instead of writing ' +
      'out every factor.',
    formulaSlug: 'power-rules-of-exponents',
    workedExample: {
      id: 'power-rules-worked-1',
      title: 'Simplify a power of a power and a power of a product',
      problemStatement: 'Simplify (x³)⁴ and (2y)³.',
      steps: [
        { step: 1, instruction: 'Apply the power-of-a-power rule.', math: '(x³)⁴ = x³ˣ⁴ = x¹²', explanation: 'Multiply the two exponents together.' },
        { step: 2, instruction: 'Apply the power-of-a-product rule.', math: '(2y)³ = 2³y³', explanation: 'The power applies to both factors, 2 and y.' },
        { step: 3, instruction: 'Evaluate the numeric part.', math: '2³ = 8, so (2y)³ = 8y³', explanation: 'Simplify the number, keep the variable as a power.' },
      ],
      finalAnswer: '(x³)⁴ = x¹²  and  (2y)³ = 8y³',
    },
    whyItWorks:
      '(aᵐ)ⁿ means aᵐ multiplied by itself n times, which by the product rule adds m to itself ' +
      'n times — the same as multiplying m by n. A product raised to a power is that same ' +
      'product multiplied by itself n times, and multiplication can be reordered so each ' +
      'factor collects its own n copies.',
    realLifeExample: {
      title: 'Scaling a 3D model',
      scenario: 'A cube-shaped storage container is scaled up so every edge (originally length s) becomes 3 times as long.',
      explanation: 'Its volume, originally s³, becomes (3s)³ = 3³s³ = 27s³ — the power-of-a-product rule shows the volume grows 27 times, not just 3 times.',
    },
    practiceQuestions: [
      {
        id: 'power-rules-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Simplify (m⁵)².',
        options: [
          { id: 'a', text: 'm⁷' },
          { id: 'b', text: 'm¹⁰' },
          { id: 'c', text: 'm²⁵' },
          { id: 'd', text: '2m⁵' },
        ],
        correctOptionId: 'b',
        hints: ['Multiply the two exponents.'],
        explanation: '(m⁵)² = m⁵ˣ² = m¹⁰.',
      },
      {
        id: 'power-rules-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate (3x)² when x = 1 (just find the numeric coefficient of x²).',
        hints: ['(3x)² = 3² x².', '3² = 9.'],
        correctAnswer: 9,
        explanation: '(3x)² = 3²x² = 9x², so the coefficient is 9.',
      },
    ],
    commonMistake:
      'Adding the exponents instead of multiplying them in (aᵐ)ⁿ — that mistake confuses this ' +
      'rule with the product rule for aᵐ · aⁿ, which is a completely different situation.',
    quickReview: [
      '(aᵐ)ⁿ = aᵐⁿ — a power of a power multiplies the exponents.',
      '(ab)ⁿ = aⁿbⁿ and (a/b)ⁿ = aⁿ/bⁿ — the power distributes to every factor.',
      'Do not confuse power-of-a-power (multiply exponents) with the product rule (add exponents).',
    ],
  },

  'fractional-exponents': {
    slug: 'fractional-exponents',
    title: 'Fractional Exponents',
    difficulty: 'hard',
    simpleExplanation:
      'A fractional exponent combines a root and a power in one symbol: a^(1/n) means the nth ' +
      'root of a, and a^(m/n) means the nth root of a, raised to the mth power (or equivalently, ' +
      'the nth root of aᵐ).',
    whyItMatters:
      'Writing roots as fractional exponents lets you apply every exponent rule (product, ' +
      'quotient, power) directly to roots too, instead of needing a completely separate set of ' +
      'rules for radicals.',
    formulaSlug: 'fractional-exponent-rule',
    workedExample: {
      id: 'fractional-exponent-worked-1',
      title: 'Evaluate a fractional exponent',
      problemStatement: 'Evaluate 8^(2/3).',
      steps: [
        { step: 1, instruction: 'Split the fractional exponent into a root and a power.', math: '8^(2/3) = (∛8)²', explanation: 'The denominator (3) is the root; the numerator (2) is the power.' },
        { step: 2, instruction: 'Evaluate the root first.', math: '∛8 = 2', explanation: '2 × 2 × 2 = 8, so the cube root of 8 is 2.' },
        { step: 3, instruction: 'Apply the remaining power.', math: '2² = 4', explanation: 'Square the result of the root.' },
      ],
      finalAnswer: '8^(2/3) = 4',
    },
    whyItWorks:
      'Applying the power rule (aᵐ)^(1/n) requires exponent 1/n to behave like "the operation ' +
      'that undoes raising to the nth power" — exactly what an nth root does — so defining ' +
      'a^(1/n) = ⁿ√a keeps every exponent rule (like (aᵐ)ⁿ = aᵐⁿ) consistent even for fractions.',
    realLifeExample: {
      title: 'Scientific and engineering calculators',
      scenario: 'Engineering formulas for things like natural vibration frequency often include square or cube roots buried inside larger expressions.',
      explanation: 'Writing those roots as fractional exponents lets the same power rules used everywhere else in the formula apply directly, without switching notation partway through.',
    },
    practiceQuestions: [
      {
        id: 'fractional-exponent-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Evaluate 16^(1/2).',
        hints: ['A denominator of 2 means "square root".'],
        correctAnswer: 4,
        explanation: '16^(1/2) = √16 = 4.',
      },
      {
        id: 'fractional-exponent-pq-2',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Evaluate 27^(2/3).',
        hints: ['27^(2/3) = (∛27)².', '∛27 = 3.'],
        correctAnswer: 9,
        explanation: '∛27 = 3, and 3² = 9.',
      },
    ],
    commonMistake:
      'Mixing up which part of the fraction is the root and which is the power — the ' +
      'denominator is always the root (index), the numerator is always the power, no matter ' +
      'which order they are written in the fraction.',
    quickReview: [
      'a^(1/n) = ⁿ√a — the denominator of the exponent is the root.',
      'a^(m/n) = (ⁿ√a)ᵐ — the numerator is the power applied after the root.',
      'Fractional exponents let every exponent law apply to roots as well as whole-number powers.',
    ],
  },

  'meaning-of-a-radical': {
    slug: 'meaning-of-a-radical',
    title: 'Meaning of a Radical',
    difficulty: 'easy',
    simpleExplanation:
      'A radical, written ⁿ√a, asks "what number, raised to the nth power, gives a?" The number ' +
      'a inside the symbol is the radicand, and n is the index (the small number showing which ' +
      'root — 2 for square root, which is usually left out, 3 for cube root, and so on).',
    whyItMatters:
      'Radicals are the inverse operation of raising to a power — recognizing that relationship ' +
      'is what lets you solve equations that involve powers, by "undoing" them with a matching root.',
    workedExample: {
      id: 'meaning-radical-worked-1',
      title: 'Evaluate a cube root',
      problemStatement: 'Evaluate ∛64.',
      steps: [
        { step: 1, instruction: 'Ask "what number cubed gives 64?"', explanation: 'A cube root undoes raising to the power 3.' },
        { step: 2, instruction: 'Test a value.', math: '4³ = 4 × 4 × 4 = 64', explanation: '4 cubed lands exactly on 64.' },
      ],
      finalAnswer: '∛64 = 4',
    },
    whyItWorks:
      'By definition, ⁿ√a is exactly the number that, raised to the nth power, reproduces a — ' +
      'so checking that (ⁿ√a)ⁿ = a is always the correct verification.',
    realLifeExample: {
      title: 'Finding a square\'s side length from its area',
      scenario: 'A square rug has an area of 9 square metres, and you need to know its side length.',
      explanation: 'Since area = side², the side length is the square root of the area: √9 = 3 metres.',
    },
    practiceQuestions: [
      {
        id: 'meaning-radical-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Evaluate √49.',
        hints: ['What number times itself gives 49?'],
        correctAnswer: 7,
        explanation: '7 × 7 = 49, so √49 = 7.',
      },
    ],
    commonMistake:
      'Forgetting that a square root symbol with no visible index (√a) always means the index is ' +
      '2 — it is never left blank by accident.',
    quickReview: [
      'ⁿ√a asks "what number, raised to the nth power, gives a?"',
      'a is the radicand; n is the index (2 for square root, usually left unwritten).',
      'A radical is the inverse operation of raising to a power.',
    ],
  },

  'converting-between-radical-and-exponent-form': {
    slug: 'converting-between-radical-and-exponent-form',
    title: 'Radical Form and Exponent Form',
    difficulty: 'medium',
    simpleExplanation:
      'Every radical can be rewritten as a fractional exponent, and every fractional exponent ' +
      'can be rewritten as a radical — the two notations describe the exact same value, and ' +
      'switching between them is often the fastest way to simplify an expression.',
    whyItMatters:
      'Some expressions are easier to simplify in exponent form (using the exponent rules), ' +
      'while others are easier to read or evaluate in radical form — being fluent in both ' +
      'lets you pick whichever is more convenient for the problem at hand.',
    formulaSlug: 'fractional-exponent-rule',
    workedExample: {
      id: 'convert-form-worked-1',
      title: 'Convert a radical to exponent form and simplify',
      problemStatement: 'Rewrite ⁵√(x³) using a fractional exponent, then simplify (x^(3/5))^(5/3).',
      steps: [
        { step: 1, instruction: 'Convert the radical to exponent form.', math: '⁵√(x³) = x^(3/5)', explanation: 'Index 5 becomes the denominator; power 3 becomes the numerator.' },
        { step: 2, instruction: 'Apply the power-of-a-power rule to the second expression.', math: '(x^(3/5))^(5/3) = x^((3/5)·(5/3))', explanation: 'Multiply the two exponents.' },
        { step: 3, instruction: 'Simplify the exponent.', math: '(3/5)·(5/3) = 1, so the result is x¹', explanation: 'The fractions are reciprocals, so they multiply to exactly 1.' },
      ],
      finalAnswer: '⁵√(x³) = x^(3/5), and (x^(3/5))^(5/3) = x',
    },
    whyItWorks:
      'Because a^(m/n) is defined to mean exactly ⁿ√(aᵐ), the two notations are interchangeable ' +
      'by definition — converting never changes the value, only how it is written.',
    realLifeExample: {
      title: 'Reading formulas from different sources',
      scenario: 'One engineering reference writes a formula using √t, while another writes the same formula using t^(1/2).',
      explanation: 'Recognizing they are identical lets you combine or compare formulas from different sources without confusion.',
    },
    practiceQuestions: [
      {
        id: 'convert-form-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which exponent form is equivalent to ⁴√(x⁵)?',
        options: [
          { id: 'a', text: 'x^(4/5)' },
          { id: 'b', text: 'x^(5/4)' },
          { id: 'c', text: 'x^(20)' },
          { id: 'd', text: 'x^(1/20)' },
        ],
        correctOptionId: 'b',
        hints: ['The index (4) becomes the denominator; the power (5) becomes the numerator.'],
        explanation: '⁴√(x⁵) = x^(5/4).',
      },
    ],
    commonMistake:
      'Swapping the numerator and denominator when converting — the root/index always becomes ' +
      'the denominator of the exponent, never the numerator.',
    quickReview: [
      'ⁿ√(aᵐ) = a^(m/n) — the index becomes the denominator, the power becomes the numerator.',
      'Radical form and exponent form always describe the same value.',
      'Switch to whichever form makes the current simplification easiest.',
    ],
  },

  'simplifying-radicals': {
    slug: 'simplifying-radicals',
    title: 'Simplifying Radicals',
    difficulty: 'medium',
    simpleExplanation:
      'A radical is fully simplified when the radicand has no more perfect-nth-power factors ' +
      'left inside it. Simplify by splitting the radicand into a perfect-power factor and a ' +
      'leftover factor, then pulling the perfect power out using the product rule.',
    whyItMatters:
      'A simplified radical is easier to compare, add, and work with — √50 and √2 look ' +
      'unrelated until √50 is simplified to 5√2, revealing they share the same radical part.',
    diagram: {
      id: 'simplifying-radicals-diagram',
      title: 'Number line comparison of a radical and its simplified form',
      altText: 'A number line marking the approximate positions of √2, √50, and 5√2 to show they represent related values',
      component: 'NumberLine',
      interactive: false,
      props: { min: 0, max: 8, points: [{ value: 1.41, label: '√2' }, { value: 7.07, label: '√50 = 5√2' }] },
    },
    formulaSlug: 'product-rule-for-radicals',
    workedExample: {
      id: 'simplify-radical-worked-1',
      title: 'Simplify a square root',
      problemStatement: 'Simplify √50.',
      steps: [
        { step: 1, instruction: 'Find the largest perfect-square factor of 50.', math: '50 = 25 × 2', explanation: '25 is a perfect square (5²), and it is the largest one that divides 50.' },
        { step: 2, instruction: 'Split the radical using the product rule.', math: '√50 = √25 · √2', explanation: 'ⁿ√(ab) = ⁿ√a · ⁿ√b, applied in reverse.' },
        { step: 3, instruction: 'Evaluate the perfect-square part.', math: '√25 = 5', explanation: '5 × 5 = 25.' },
        { step: 4, instruction: 'Write the simplified form.', math: '√50 = 5√2', explanation: 'The perfect square comes out as a whole number in front of the remaining radical.' },
      ],
      finalAnswer: '√50 = 5√2',
    },
    whyItWorks:
      'The product rule for radicals says √(ab) = √a · √b, so factoring out a perfect square and ' +
      'applying the rule "extracts" its exact square root, leaving only the non-perfect-square ' +
      'part under the radical.',
    realLifeExample: {
      title: 'Simplifying diagonal-length measurements',
      scenario: 'A carpenter calculates the diagonal of an 8-by-2 rectangular board using the Pythagorean theorem, getting √68.',
      explanation: 'Simplifying √68 = 2√17 gives a shorter, more useful form for further calculation or for reading off a tape measure alongside a decimal approximation.',
    },
    practiceQuestions: [
      {
        id: 'simplify-radical-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Simplify √18.',
        options: [
          { id: 'a', text: '3√2' },
          { id: 'b', text: '2√3' },
          { id: 'c', text: '9√2' },
          { id: 'd', text: '6√3' },
        ],
        correctOptionId: 'a',
        hints: ['18 = 9 × 2, and 9 is a perfect square.'],
        explanation: '√18 = √9 · √2 = 3√2.',
      },
      {
        id: 'simplify-radical-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Simplify √75.',
        options: [
          { id: 'a', text: '5√3' },
          { id: 'b', text: '3√5' },
          { id: 'c', text: '25√3' },
          { id: 'd', text: '15√5' },
        ],
        correctOptionId: 'a',
        hints: ['75 = 25 × 3, and 25 is a perfect square.'],
        explanation: '√75 = √25 · √3 = 5√3.',
      },
    ],
    commonMistake:
      'Stopping at a factor that is not actually the largest perfect square (e.g. writing ' +
      '√50 = √2 · √25 correctly evaluated, but starting from a smaller perfect square like 50=... ' +
      'and leaving an unsimplified radical) — always check no further perfect-square factor remains.',
    quickReview: [
      'Simplify by factoring out the largest perfect-nth-power factor of the radicand.',
      'ⁿ√(ab) = ⁿ√a · ⁿ√b lets you pull that perfect power out of the radical.',
      'A radical is fully simplified only when no perfect-power factor remains inside it.',
    ],
  },

  'adding-and-subtracting-radicals': {
    slug: 'adding-and-subtracting-radicals',
    title: 'Adding and Subtracting Radicals',
    difficulty: 'easy',
    simpleExplanation:
      'Radicals can be added or subtracted directly only when they are "like radicals" — the ' +
      'same index and the same radicand. Combine them the way you combine like terms, by adding ' +
      'or subtracting their coefficients and keeping the radical part unchanged.',
    whyItMatters:
      'Recognizing like radicals (sometimes after simplifying first) is what makes it possible ' +
      'to combine terms in longer algebraic expressions involving roots.',
    workedExample: {
      id: 'add-subtract-radical-worked-1',
      title: 'Add radicals after simplifying',
      problemStatement: 'Simplify √8 + √18.',
      steps: [
        { step: 1, instruction: 'Simplify each radical first.', math: '√8 = 2√2,  √18 = 3√2', explanation: '8 = 4×2 and 18 = 9×2, both with perfect-square factors.' },
        { step: 2, instruction: 'Now both terms are like radicals (√2).', math: '2√2 + 3√2', explanation: 'Same index, same radicand — they can be combined.' },
        { step: 3, instruction: 'Add the coefficients.', math: '2√2 + 3√2 = 5√2', explanation: 'Treat √2 like a common variable being combined, e.g. 2x + 3x = 5x.' },
      ],
      finalAnswer: '√8 + √18 = 5√2',
    },
    whyItWorks:
      'Like radicals represent the same "unit" (the same irrational number), so combining their ' +
      'coefficients is exactly the same distributive-property idea as combining like terms: ' +
      '2√2 + 3√2 = (2+3)√2.',
    realLifeExample: {
      title: 'Combining diagonal distances',
      scenario: 'A delivery route covers two diagonal shortcuts, one of length √8 km and another of length √18 km.',
      explanation: 'Simplifying and combining gives a total of 5√2 km ≈ 7.07 km, a single clean number for route planning instead of two separate unsimplified radicals.',
    },
    practiceQuestions: [
      {
        id: 'add-subtract-radical-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Simplify 5√3 − 2√3.',
        options: [
          { id: 'a', text: '3√3' },
          { id: 'b', text: '3√6' },
          { id: 'c', text: '7√3' },
          { id: 'd', text: '3' },
        ],
        correctOptionId: 'a',
        hints: ['These are already like radicals — just subtract the coefficients.'],
        explanation: '5√3 − 2√3 = (5−2)√3 = 3√3.',
      },
    ],
    commonMistake:
      'Trying to combine √a + √b into √(a+b) — radicals do NOT add this way (e.g. √4 + √9 = 2+3 = 5, but √13 ≈ 3.6). Only like radicals combine, and only by adding their coefficients.',
    quickReview: [
      'Only "like radicals" — same index, same radicand — can be added or subtracted directly.',
      'Combine like radicals by adding/subtracting their coefficients: a·ⁿ√x ± b·ⁿ√x = (a±b)·ⁿ√x.',
      'Simplify each radical first — unlike-looking radicals may become like radicals after simplifying.',
    ],
  },

  'multiplying-radicals': {
    slug: 'multiplying-radicals',
    title: 'Multiplying Radicals',
    difficulty: 'medium',
    simpleExplanation:
      'To multiply two radicals with the same index, multiply the radicands together under one ' +
      'radical: ⁿ√a · ⁿ√b = ⁿ√(ab). Multiply any coefficients out front separately, then simplify the result if possible.',
    whyItMatters:
      'Multiplying radicals comes up whenever you combine two measurements or quantities that ' +
      'were each expressed as a root — areas, volumes, and physics formulas frequently need this step.',
    formulaSlug: 'product-rule-for-radicals',
    workedExample: {
      id: 'multiply-radical-worked-1',
      title: 'Multiply two radicals and simplify',
      problemStatement: 'Simplify √6 · √15.',
      steps: [
        { step: 1, instruction: 'Multiply the radicands under one radical.', math: '√6 · √15 = √(6×15) = √90', explanation: 'Same index (2), so combine using the product rule.' },
        { step: 2, instruction: 'Find the largest perfect-square factor of 90.', math: '90 = 9 × 10', explanation: '9 is a perfect square.' },
        { step: 3, instruction: 'Simplify.', math: '√90 = √9 · √10 = 3√10', explanation: 'Extract the perfect square.' },
      ],
      finalAnswer: '√6 · √15 = 3√10',
    },
    whyItWorks:
      'The product rule for radicals, ⁿ√a · ⁿ√b = ⁿ√(ab), holds because both sides, raised to the ' +
      'nth power, give exactly ab — so they must be equal (for nonnegative radicands).',
    realLifeExample: {
      title: 'Finding the area of a rectangle with radical side lengths',
      scenario: 'A rectangular garden plot has sides √6 m and √15 m.',
      explanation: 'Its area is √6 × √15 = √90 = 3√10 m² — multiplying radicals directly, then simplifying, gives a clean final answer.',
    },
    practiceQuestions: [
      {
        id: 'multiply-radical-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Simplify √3 · √12.',
        options: [
          { id: 'a', text: '6' },
          { id: 'b', text: '√15' },
          { id: 'c', text: '2√6' },
          { id: 'd', text: '36' },
        ],
        correctOptionId: 'a',
        hints: ['√3 · √12 = √36.'],
        explanation: '√3 · √12 = √36 = 6.',
      },
    ],
    commonMistake:
      'Multiplying the radicands but forgetting to also multiply any coefficients out front — ' +
      '(2√3)(4√5) = 8√15, not 2·4 left un-multiplied or dropped entirely.',
    quickReview: [
      'ⁿ√a · ⁿ√b = ⁿ√(ab) — multiply the radicands under one radical.',
      'Multiply coefficients separately: (c·ⁿ√a)(d·ⁿ√b) = cd·ⁿ√(ab).',
      'Always simplify the resulting radical afterward if possible.',
    ],
  },

  'dividing-radicals-and-rationalizing-denominators': {
    slug: 'dividing-radicals-and-rationalizing-denominators',
    title: 'Dividing Radicals and Rationalizing Denominators',
    difficulty: 'hard',
    simpleExplanation:
      'To divide two radicals with the same index, divide the radicands under one radical: ' +
      'ⁿ√a / ⁿ√b = ⁿ√(a/b). When a radical is left in the denominator of a fraction, ' +
      '"rationalize" it by multiplying top and bottom by that radical, which removes it from the denominator.',
    whyItMatters:
      'A radical left in a denominator is considered an unsimplified, awkward form — ' +
      'rationalizing is the standard way to write a final answer cleanly, and is required before ' +
      'comparing or combining fractions that involve roots.',
    formulaSlug: 'quotient-rule-for-radicals',
    workedExample: {
      id: 'rationalize-worked-1',
      title: 'Rationalize a denominator',
      problemStatement: 'Rationalize 5/√3.',
      steps: [
        { step: 1, instruction: 'Multiply top and bottom by √3.', math: '5/√3 × √3/√3', explanation: 'Multiplying by √3/√3 = 1 does not change the value.' },
        { step: 2, instruction: 'Multiply out the denominator.', math: '√3 · √3 = 3', explanation: 'A radical times itself removes the root entirely.' },
        { step: 3, instruction: 'Write the simplified fraction.', math: '5√3 / 3', explanation: 'The denominator is now a whole number.' },
      ],
      finalAnswer: '5/√3 = 5√3/3',
    },
    whyItWorks:
      'Multiplying by √3/√3 is multiplying by 1, so the value of the fraction never changes — ' +
      'but √3 · √3 = 3 removes the radical from the denominator, leaving an equivalent fraction ' +
      'in the accepted simplified form.',
    realLifeExample: {
      title: 'Physics formulas with a root in the denominator',
      scenario: 'A pendulum period formula can produce an intermediate expression with √g in the denominator.',
      explanation: 'Rationalizing before plugging in numbers avoids dividing by an irrational decimal approximation, keeping the calculation exact for longer.',
    },
    practiceQuestions: [
      {
        id: 'rationalize-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Rationalize 4/√2.',
        options: [
          { id: 'a', text: '2√2' },
          { id: 'b', text: '4√2' },
          { id: 'c', text: '2/√2' },
          { id: 'd', text: '√2' },
        ],
        correctOptionId: 'a',
        hints: ['Multiply top and bottom by √2.', '4√2 / 2 simplifies further.'],
        explanation: '4/√2 × √2/√2 = 4√2/2 = 2√2.',
      },
      {
        id: 'rationalize-pq-2',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Simplify √20 / √5.',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '4' },
          { id: 'c', text: '√4' },
          { id: 'd', text: '√15' },
        ],
        correctOptionId: 'a',
        hints: ['√20/√5 = √(20/5) = √4.'],
        explanation: '√20/√5 = √(20/5) = √4 = 2.',
      },
    ],
    commonMistake:
      'Multiplying only the denominator by the rationalizing radical and forgetting to multiply ' +
      'the numerator too — you must multiply the whole fraction by (radical)/(radical) so the value stays unchanged.',
    quickReview: [
      'ⁿ√a / ⁿ√b = ⁿ√(a/b) — divide the radicands under one radical.',
      'Rationalize a denominator by multiplying top and bottom by the radical in the denominator.',
      'A fully simplified radical expression never has a radical left in the denominator.',
    ],
  },

  'solving-exponential-equations-with-equal-bases': {
    slug: 'solving-exponential-equations-with-equal-bases',
    title: 'Solving Exponential Equations with Equal Bases',
    difficulty: 'medium',
    simpleExplanation:
      'An exponential equation has the variable in the exponent. If you can rewrite both sides ' +
      'with the same base, the exponents themselves must be equal — turning the exponential ' +
      'equation into a simpler equation you can solve directly.',
    whyItMatters:
      'This "equal bases" technique solves a huge range of exponential equations without any ' +
      'need for logarithms, as long as both sides can be expressed as powers of the same number.',
    formulaSlug: 'exponential-equation-equal-bases-rule',
    workedExample: {
      id: 'solve-exponential-worked-1',
      title: 'Solve an exponential equation by matching bases',
      problemStatement: 'Solve 2^(x+1) = 32.',
      steps: [
        { step: 1, instruction: 'Rewrite 32 as a power of 2.', math: '32 = 2⁵', explanation: '2×2×2×2×2 = 32.' },
        { step: 2, instruction: 'Rewrite the equation with equal bases.', math: '2^(x+1) = 2⁵', explanation: 'Both sides are now powers of the same base, 2.' },
        { step: 3, instruction: 'Set the exponents equal.', math: 'x + 1 = 5', explanation: 'Equal bases (other than 1) force equal exponents.' },
        { step: 4, instruction: 'Solve for x.', math: 'x = 4', explanation: 'Subtract 1 from both sides.' },
      ],
      finalAnswer: 'x = 4',
    },
    whyItWorks:
      'An exponential function aˣ (for a > 0, a ≠ 1) is one-to-one — it never gives the same ' +
      'output for two different inputs — so aˣ = aʸ can only be true when x itself equals y.',
    realLifeExample: {
      title: 'Doubling time problems',
      scenario: 'A savings account\'s value doubles every year, starting at $500, and you want to know exactly when it reaches $4000.',
      explanation: '500 · 2ˣ = 4000 simplifies to 2ˣ = 8 = 2³, so matching bases immediately gives x = 3 years — no calculator or logarithm needed.',
    },
    practiceQuestions: [
      {
        id: 'solve-exponential-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Solve for x: 3ˣ = 81.',
        hints: ['Rewrite 81 as a power of 3.', '3⁴ = 81.'],
        correctAnswer: 4,
        explanation: '81 = 3⁴, so x = 4.',
      },
      {
        id: 'solve-exponential-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Solve for x: 5^(2x) = 125.',
        hints: ['Rewrite 125 as a power of 5.', '5³ = 125, so 2x = 3.'],
        correctAnswer: 1.5,
        tolerance: 0.01,
        explanation: '125 = 5³, so 2x = 3, giving x = 1.5.',
      },
    ],
    commonMistake:
      'Setting the bases equal instead of the exponents (or trying to "cancel" the base by ' +
      'dividing) — once both sides share the same base, it is the exponents that must be equated, not the bases themselves.',
    quickReview: [
      'Rewrite both sides of the equation as powers of the same base.',
      'Once the bases match, set the exponents equal to each other and solve.',
      'This only works cleanly when both sides can be expressed as an exact power of a common base.',
    ],
  },

  'exponential-growth-and-decay': {
    slug: 'exponential-growth-and-decay',
    title: 'Exponential Growth and Decay',
    difficulty: 'medium',
    simpleExplanation:
      'When a quantity grows or shrinks by the same percentage every fixed period of time, it ' +
      'follows an exponential model: A = A₀(1 + r)ᵗ for growth, or A = A₀(1 − r)ᵗ for decay, ' +
      'where A₀ is the starting amount and r is the rate per period.',
    whyItMatters:
      'This is the real-world payoff of exponent rules — population growth, compound interest, ' +
      'and decay-style processes are all modeled with exactly this pattern, so understanding ' +
      'exponents means being able to reason about them quantitatively.',
    formulaSlug: 'exponential-growth-decay-model',
    workedExample: {
      id: 'growth-decay-worked-1',
      title: 'Apply the exponential growth model',
      problemStatement: 'A town has a population of 20,000 growing at 5% per year. Estimate the population after 3 years.',
      steps: [
        { step: 1, instruction: 'Identify the variables.', math: 'A₀ = 20000, r = 0.05, t = 3', explanation: 'Convert the percentage rate to a decimal.' },
        { step: 2, instruction: 'Substitute into the growth model.', math: 'A = 20000(1.05)³', explanation: '(1 + r) = 1 + 0.05 = 1.05.' },
        { step: 3, instruction: 'Evaluate.', math: '(1.05)³ ≈ 1.157625,  A ≈ 20000 × 1.157625', explanation: 'Raise the growth factor to the power of t, then multiply by the initial amount.' },
        { step: 4, instruction: 'Round appropriately.', math: 'A ≈ 23153', explanation: 'A population should be reported as a whole number.' },
      ],
      finalAnswer: 'A ≈ 23,153 people after 3 years',
    },
    whyItWorks:
      'Growing by the same percentage each period means multiplying by the same factor, ' +
      '(1 + r), every period — repeating that multiplication t times is exactly what raising ' +
      'the factor to the power t accomplishes.',
    realLifeExample: {
      title: 'Compound interest in a savings account',
      scenario: 'A bank account earns 4% interest per year, compounded annually.',
      explanation: 'The balance after t years is A = A₀(1.04)ᵗ — the same exponential growth model, with the interest rate as r.',
    },
    practiceQuestions: [
      {
        id: 'growth-decay-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A car worth $18,000 depreciates (loses value) at 10% per year. What is it worth after 2 years? (Round to the nearest whole number.)',
        hints: ['Use A = A₀(1 − r)ᵗ with r = 0.10.', '(0.9)² = 0.81.'],
        correctAnswer: 14580,
        unit: '$',
        explanation: 'A = 18000(0.9)² = 18000(0.81) = 14580.',
      },
    ],
    commonMistake:
      'Using (1 + r) for decay or (1 − r) for growth — growth always uses (1 + r) as the ' +
      'per-period multiplier, and decay always uses (1 − r), since decay must multiply by a factor less than 1.',
    quickReview: [
      'A = A₀(1 + r)ᵗ models exponential growth; A = A₀(1 − r)ᵗ models exponential decay.',
      'r is the rate per period as a decimal; t counts how many periods have elapsed.',
      'Compound interest, population growth, and depreciation are all real examples of this model.',
    ],
  },
};
