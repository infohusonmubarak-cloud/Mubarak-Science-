import type { Formula } from '@/types/content';

export const chapter3Formulas: Record<string, Formula> = {
  'scientific-notation-form': {
    slug: 'scientific-notation-form',
    name: 'Scientific Notation',
    expression: 'a × 10ⁿ,  where 1 ≤ a < 10 and n is an integer',
    meaning: 'A compact way to write very large or very small numbers as a decimal between 1 and 10, multiplied by a power of 10.',
    variables: [
      { symbol: 'a', meaning: 'the coefficient — a decimal number with 1 ≤ a < 10' },
      { symbol: 'n', meaning: 'the exponent (power of 10) — positive for large numbers, negative for small numbers' },
    ],
    whenToUse: 'Whenever a number has many digits or many leading/trailing zeros, and you need a compact, easy-to-compare form.',
    relatedConceptSlugs: ['writing-numbers-in-scientific-notation', 'multiplying-and-dividing-in-scientific-notation'],
  },
  'definition-of-a-logarithm': {
    slug: 'definition-of-a-logarithm',
    name: 'Definition of the Logarithm',
    expression: 'log_b(x) = y   ⇔   bʸ = x   (b > 0, b ≠ 1, x > 0)',
    meaning: 'A logarithm answers "to what power must the base b be raised to get x?" — it is the exponent y in the equivalent exponential equation bʸ = x.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm (b > 0, b ≠ 1)' },
      { symbol: 'x', meaning: 'the argument — the number you are taking the logarithm of (x > 0)' },
      { symbol: 'y', meaning: 'the logarithm itself — the exponent that produces x' },
    ],
    whenToUse: 'Whenever you need to find the exponent that produces a known result, or to switch between logarithmic and exponential form.',
    relatedConceptSlugs: ['meaning-of-a-logarithm', 'evaluating-logarithms', 'solving-logarithmic-equations'],
  },
  'product-rule-of-logarithms': {
    slug: 'product-rule-of-logarithms',
    name: 'Product Rule of Logarithms',
    expression: 'log_b(MN) = log_b M + log_b N',
    meaning: 'The logarithm of a product equals the sum of the logarithms of its factors.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm (b > 0, b ≠ 1)' },
      { symbol: 'M, N', meaning: 'positive real numbers being multiplied' },
    ],
    whenToUse: 'Whenever you need to expand the logarithm of a product into a sum, or condense a sum of logarithms into one logarithm of a product.',
    relatedConceptSlugs: ['product-rule-of-logarithms'],
  },
  'quotient-rule-of-logarithms': {
    slug: 'quotient-rule-of-logarithms',
    name: 'Quotient Rule of Logarithms',
    expression: 'log_b(M/N) = log_b M − log_b N',
    meaning: 'The logarithm of a quotient equals the logarithm of the numerator minus the logarithm of the denominator.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm (b > 0, b ≠ 1)' },
      { symbol: 'M, N', meaning: 'positive real numbers, with M divided by N' },
    ],
    whenToUse: 'Whenever you need to expand the logarithm of a quotient into a difference, or condense a difference of logarithms into one logarithm of a quotient.',
    relatedConceptSlugs: ['quotient-rule-of-logarithms'],
  },
  'power-rule-of-logarithms': {
    slug: 'power-rule-of-logarithms',
    name: 'Power Rule of Logarithms',
    expression: 'log_b(Mᵖ) = p · log_b M',
    meaning: 'The logarithm of a number raised to a power equals the power times the logarithm of the number.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm (b > 0, b ≠ 1)' },
      { symbol: 'M', meaning: 'a positive real number' },
      { symbol: 'p', meaning: 'the exponent applied to M' },
    ],
    whenToUse: 'Whenever a logarithm\'s argument is itself a power, letting you bring the exponent down as a multiplier — essential for solving equations where the variable is in an exponent.',
    relatedConceptSlugs: ['power-rule-of-logarithms'],
  },
  'change-of-base-formula': {
    slug: 'change-of-base-formula',
    name: 'Change of Base Formula',
    expression: 'log_b M = log_a M / log_a b',
    meaning: 'Converts a logarithm in one base (b) into a ratio of logarithms in a different, more convenient base (a) — usually base 10 or base e, so a calculator can evaluate it.',
    variables: [
      { symbol: 'b', meaning: 'the original base of the logarithm' },
      { symbol: 'a', meaning: 'the new base being switched to (commonly 10 or e)' },
      { symbol: 'M', meaning: 'the argument of the logarithm' },
    ],
    whenToUse: 'Whenever you need to evaluate a logarithm in a base your calculator does not have a direct button for (any base other than 10 or e).',
    relatedConceptSlugs: ['using-the-change-of-base-formula'],
  },
  'natural-logarithm-and-e': {
    slug: 'natural-logarithm-and-e',
    name: "Natural Logarithm and Euler's Number",
    expression: 'ln x = log_e x,   where e ≈ 2.71828...',
    meaning: 'The natural logarithm is simply a logarithm with base e, a special irrational constant that arises naturally in continuous growth and decay processes.',
    variables: [
      { symbol: 'x', meaning: 'the argument of the natural logarithm (x > 0)' },
      { symbol: 'e', meaning: "Euler's number, an irrational constant approximately equal to 2.71828" },
    ],
    whenToUse: 'Whenever a process involves continuous (rather than step-by-step) growth or decay, such as continuous compound interest or radioactive decay.',
    relatedConceptSlugs: ['natural-logarithm'],
  },
};
