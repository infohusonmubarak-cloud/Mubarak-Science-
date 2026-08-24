import type { QuickRevision } from '@/types/content';

export const chapter2QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'zero-and-negative-exponents',
      keyPoint: 'a⁰ = 1, and a⁻ⁿ = 1/aⁿ.',
      formulaSlug: 'zero-and-negative-exponent-rule',
      miniExample: '5⁻² = 1/25.',
    },
    {
      conceptSlug: 'product-and-quotient-rules-of-exponents',
      keyPoint: 'aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ / aⁿ = aᵐ⁻ⁿ.',
      formulaSlug: 'product-and-quotient-rule-of-exponents',
      miniExample: 'x⁵ · x³ = x⁸.',
    },
    {
      conceptSlug: 'fractional-exponents',
      keyPoint: 'a^(m/n) = (ⁿ√a)ᵐ — denominator is the root, numerator is the power.',
      formulaSlug: 'fractional-exponent-rule',
      miniExample: '8^(2/3) = (∛8)² = 4.',
    },
    {
      conceptSlug: 'simplifying-radicals',
      keyPoint: 'Factor out the largest perfect-power factor: ⁿ√(ab) = ⁿ√a · ⁿ√b.',
      formulaSlug: 'product-rule-for-radicals',
      miniExample: '√50 = 5√2.',
    },
    {
      conceptSlug: 'solving-exponential-equations-with-equal-bases',
      keyPoint: 'Match the bases, then set the exponents equal.',
      formulaSlug: 'exponential-equation-equal-bases-rule',
      miniExample: '2^(x+1) = 32 = 2⁵ → x = 4.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-an-exponent',
      keyPoint: 'aⁿ = a used as a factor n times.',
      miniExample: '3⁴ = 81.',
    },
    {
      conceptSlug: 'zero-and-negative-exponents',
      keyPoint: 'a⁰ = 1; a⁻ⁿ = 1/aⁿ — a negative exponent means reciprocal, not negative value.',
      formulaSlug: 'zero-and-negative-exponent-rule',
      miniExample: '2⁻³ = 1/8.',
    },
    {
      conceptSlug: 'product-and-quotient-rules-of-exponents',
      keyPoint: 'Same base: multiplying adds exponents, dividing subtracts them.',
      formulaSlug: 'product-and-quotient-rule-of-exponents',
      miniExample: 'b¹²/b⁵ = b⁷.',
    },
    {
      conceptSlug: 'power-of-a-power-and-product-rules',
      keyPoint: '(aᵐ)ⁿ = aᵐⁿ; (ab)ⁿ = aⁿbⁿ.',
      formulaSlug: 'power-rules-of-exponents',
      miniExample: '(x³)⁴ = x¹².',
    },
    {
      conceptSlug: 'fractional-exponents',
      keyPoint: 'a^(1/n) = ⁿ√a; a^(m/n) = (ⁿ√a)ᵐ.',
      formulaSlug: 'fractional-exponent-rule',
      miniExample: '27^(2/3) = 9.',
    },
    {
      conceptSlug: 'meaning-of-a-radical',
      keyPoint: 'ⁿ√a asks "what number to the nth power gives a?"',
      miniExample: '∛64 = 4.',
    },
    {
      conceptSlug: 'converting-between-radical-and-exponent-form',
      keyPoint: 'ⁿ√(aᵐ) = a^(m/n) — index becomes the denominator.',
      formulaSlug: 'fractional-exponent-rule',
      miniExample: '⁵√(x³) = x^(3/5).',
    },
    {
      conceptSlug: 'simplifying-radicals',
      keyPoint: 'Pull out the largest perfect-power factor of the radicand.',
      formulaSlug: 'product-rule-for-radicals',
      miniExample: '√75 = 5√3.',
    },
    {
      conceptSlug: 'adding-and-subtracting-radicals',
      keyPoint: 'Only like radicals (same index, same radicand) combine, by adding coefficients.',
      miniExample: '√8 + √18 = 2√2 + 3√2 = 5√2.',
    },
    {
      conceptSlug: 'multiplying-radicals',
      keyPoint: 'ⁿ√a · ⁿ√b = ⁿ√(ab), then simplify.',
      formulaSlug: 'product-rule-for-radicals',
      miniExample: '√6 · √15 = √90 = 3√10.',
    },
    {
      conceptSlug: 'dividing-radicals-and-rationalizing-denominators',
      keyPoint: 'Rationalize by multiplying top and bottom by the denominator\'s radical.',
      formulaSlug: 'quotient-rule-for-radicals',
      miniExample: '5/√3 = 5√3/3.',
    },
    {
      conceptSlug: 'solving-exponential-equations-with-equal-bases',
      keyPoint: 'If aˣ = aʸ (a > 0, a ≠ 1), then x = y.',
      formulaSlug: 'exponential-equation-equal-bases-rule',
      miniExample: '5^(2x) = 125 → x = 1.5.',
    },
    {
      conceptSlug: 'exponential-growth-and-decay',
      keyPoint: 'A = A₀(1+r)ᵗ (growth) or A₀(1−r)ᵗ (decay).',
      formulaSlug: 'exponential-growth-decay-model',
      miniExample: '$18,000 car, 10%/yr depreciation, 2 yrs → $14,580.',
    },
  ],
};
