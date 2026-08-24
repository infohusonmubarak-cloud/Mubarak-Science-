import type { QuickRevision } from '@/types/content';

export const chapter3QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'writing-numbers-in-scientific-notation',
      keyPoint: 'a × 10ⁿ, with 1 ≤ a < 10.',
      formulaSlug: 'scientific-notation-form',
      miniExample: '45,000,000 = 4.5 × 10⁷.',
    },
    {
      conceptSlug: 'meaning-of-a-logarithm',
      keyPoint: 'log_b(x) = y ⇔ bʸ = x.',
      formulaSlug: 'definition-of-a-logarithm',
      miniExample: 'log₂(8) = 3 ⇔ 2³ = 8.',
    },
    {
      conceptSlug: 'product-rule-of-logarithms',
      keyPoint: 'log_b(MN) = log_b M + log_b N.',
      formulaSlug: 'product-rule-of-logarithms',
      miniExample: 'log₂(8×16) = 3+4 = 7.',
    },
    {
      conceptSlug: 'using-the-change-of-base-formula',
      keyPoint: 'log_b M = log_a M / log_a b.',
      formulaSlug: 'change-of-base-formula',
      miniExample: 'log₇50 = log50/log7 ≈ 2.011.',
    },
    {
      conceptSlug: 'natural-logarithm',
      keyPoint: 'ln(x) = log_e(x), e ≈ 2.71828.',
      formulaSlug: 'natural-logarithm-and-e',
      miniExample: 'ln(e⁵) = 5.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'writing-numbers-in-scientific-notation',
      keyPoint: 'Move the decimal point until one nonzero digit remains; count the moves as n.',
      formulaSlug: 'scientific-notation-form',
      miniExample: '0.00032 = 3.2 × 10⁻⁴.',
    },
    {
      conceptSlug: 'multiplying-and-dividing-in-scientific-notation',
      keyPoint: 'Multiply/divide coefficients and powers of 10 separately.',
      miniExample: '(3×10⁴)(2×10³) = 6×10⁷.',
    },
    {
      conceptSlug: 'meaning-of-a-logarithm',
      keyPoint: 'log_b(x) = y ⇔ bʸ = x — logs are exponents in disguise.',
      formulaSlug: 'definition-of-a-logarithm',
      miniExample: '5² = 25 ⇔ log₅25 = 2.',
    },
    {
      conceptSlug: 'evaluating-logarithms',
      keyPoint: 'log_b(x) = the exponent that turns b into x.',
      formulaSlug: 'definition-of-a-logarithm',
      miniExample: 'log₄64 = 3.',
    },
    {
      conceptSlug: 'product-rule-of-logarithms',
      keyPoint: 'log_b(MN) = log_b M + log_b N.',
      formulaSlug: 'product-rule-of-logarithms',
      miniExample: 'log₃(9x) = 2 + log₃x.',
    },
    {
      conceptSlug: 'quotient-rule-of-logarithms',
      keyPoint: 'log_b(M/N) = log_b M − log_b N.',
      formulaSlug: 'quotient-rule-of-logarithms',
      miniExample: 'log₂(x/8) = log₂x − 3.',
    },
    {
      conceptSlug: 'power-rule-of-logarithms',
      keyPoint: 'log_b(Mᵖ) = p · log_b M.',
      formulaSlug: 'power-rule-of-logarithms',
      miniExample: 'log₂(4³) = 3·log₂4 = 6.',
    },
    {
      conceptSlug: 'using-the-change-of-base-formula',
      keyPoint: 'log_b M = log_a M / log_a b — needed for any base a calculator lacks.',
      formulaSlug: 'change-of-base-formula',
      miniExample: 'log₃2 = log2/log3 ≈ 0.63.',
    },
    {
      conceptSlug: 'common-logarithm',
      keyPoint: 'log(x) with no base written means log₁₀(x).',
      miniExample: 'log(100,000) = 5.',
    },
    {
      conceptSlug: 'natural-logarithm',
      keyPoint: 'ln(x) = log_e(x); ln(eⁿ) = n.',
      formulaSlug: 'natural-logarithm-and-e',
      miniExample: 'ln(e³) = 3.',
    },
    {
      conceptSlug: 'solving-logarithmic-equations',
      keyPoint: 'Isolate → combine into one log → convert to exponential form → solve → check the domain.',
      formulaSlug: 'definition-of-a-logarithm',
      miniExample: 'log₂x + log₂(x−2) = 3 → x = 4.',
    },
  ],
};
