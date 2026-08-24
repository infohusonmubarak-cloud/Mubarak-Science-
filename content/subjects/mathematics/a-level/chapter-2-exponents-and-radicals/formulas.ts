import type { Formula } from '@/types/content';

export const chapter2Formulas: Record<string, Formula> = {
  'zero-and-negative-exponent-rule': {
    slug: 'zero-and-negative-exponent-rule',
    name: 'Zero and Negative Exponent Rule',
    expression: 'a⁰ = 1  and  a⁻ⁿ = 1/aⁿ  (a ≠ 0)',
    meaning: 'Any nonzero base raised to the power 0 equals 1; a negative exponent means "take the reciprocal, then raise to the positive exponent".',
    variables: [
      { symbol: 'a', meaning: 'the base (any nonzero real number)' },
      { symbol: 'n', meaning: 'a positive integer exponent' },
    ],
    whenToUse: 'Whenever an exponent is 0 or negative and you need to rewrite it as a positive-exponent expression (or a plain number).',
    relatedConceptSlugs: ['zero-and-negative-exponents'],
  },
  'product-and-quotient-rule-of-exponents': {
    slug: 'product-and-quotient-rule-of-exponents',
    name: 'Product and Quotient Rules of Exponents',
    expression: 'aᵐ · aⁿ = aᵐ⁺ⁿ   and   aᵐ / aⁿ = aᵐ⁻ⁿ  (a ≠ 0)',
    meaning: 'Multiplying powers with the same base adds the exponents; dividing powers with the same base subtracts the exponents.',
    variables: [
      { symbol: 'a', meaning: 'the common base (any nonzero real number)' },
      { symbol: 'm, n', meaning: 'the two exponents' },
    ],
    whenToUse: 'Whenever you multiply or divide two powers that share the exact same base.',
    relatedConceptSlugs: ['product-and-quotient-rules-of-exponents'],
  },
  'power-rules-of-exponents': {
    slug: 'power-rules-of-exponents',
    name: 'Power-of-a-Power and Power-of-a-Product Rules',
    expression: '(aᵐ)ⁿ = aᵐⁿ   and   (ab)ⁿ = aⁿbⁿ   and   (a/b)ⁿ = aⁿ/bⁿ',
    meaning: 'Raising a power to another power multiplies the exponents; raising a product or quotient to a power distributes that power to every factor.',
    variables: [
      { symbol: 'a, b', meaning: 'the bases being raised to a power' },
      { symbol: 'm, n', meaning: 'the exponents' },
    ],
    whenToUse: 'Whenever an expression already raised to a power is itself raised to another power, or when a whole product/quotient is raised to a power.',
    relatedConceptSlugs: ['power-of-a-power-and-product-rules'],
  },
  'fractional-exponent-rule': {
    slug: 'fractional-exponent-rule',
    name: 'Fractional Exponent Rule',
    expression: 'a^(1/n) = ⁿ√a   and   a^(m/n) = (ⁿ√a)ᵐ = ⁿ√(aᵐ)',
    meaning: 'A fractional exponent packages a root and a power together: the denominator of the fraction is the root (index), and the numerator is the power.',
    variables: [
      { symbol: 'a', meaning: 'the base (a ≥ 0 whenever n is even)' },
      { symbol: 'm, n', meaning: 'integers — n is the root index (n > 0), m is the power' },
    ],
    whenToUse: 'Whenever you need to move between radical notation and exponent notation, e.g. to apply the exponent laws to an expression that starts as a root.',
    relatedConceptSlugs: ['fractional-exponents', 'converting-between-radical-and-exponent-form'],
  },
  'product-rule-for-radicals': {
    slug: 'product-rule-for-radicals',
    name: 'Product Rule for Radicals',
    expression: 'ⁿ√a · ⁿ√b = ⁿ√(ab)',
    meaning: 'The product of two radicals with the same index equals the radical of the product of their radicands.',
    variables: [
      { symbol: 'a, b', meaning: 'the radicands (a, b ≥ 0 when n is even)' },
      { symbol: 'n', meaning: 'the common index (root) of both radicals' },
    ],
    whenToUse: 'Whenever you simplify a radical by factoring out a perfect nth-power factor, or multiply two radicals with the same index.',
    relatedConceptSlugs: ['simplifying-radicals', 'multiplying-radicals'],
  },
  'quotient-rule-for-radicals': {
    slug: 'quotient-rule-for-radicals',
    name: 'Quotient Rule for Radicals',
    expression: 'ⁿ√a / ⁿ√b = ⁿ√(a/b)   (b ≠ 0)',
    meaning: 'The quotient of two radicals with the same index equals the radical of the quotient of their radicands.',
    variables: [
      { symbol: 'a, b', meaning: 'the radicands (a ≥ 0, b > 0 when n is even)' },
      { symbol: 'n', meaning: 'the common index (root) of both radicals' },
    ],
    whenToUse: 'Whenever you divide two radicals with the same index, including rationalizing a denominator that contains a radical.',
    relatedConceptSlugs: ['dividing-radicals-and-rationalizing-denominators'],
  },
  'exponential-equation-equal-bases-rule': {
    slug: 'exponential-equation-equal-bases-rule',
    name: 'Equal-Bases Property of Exponential Equations',
    expression: 'If aˣ = aʸ and a > 0, a ≠ 1, then x = y.',
    meaning: 'Once both sides of an exponential equation are written with the exact same base, the exponents themselves must be equal.',
    variables: [
      { symbol: 'a', meaning: 'the common base (a > 0 and a ≠ 1)' },
      { symbol: 'x, y', meaning: 'the exponents being compared' },
    ],
    whenToUse: 'Whenever you can rewrite both sides of an exponential equation using the same base, turning the whole equation into a simple equation of exponents.',
    relatedConceptSlugs: ['solving-exponential-equations-with-equal-bases'],
  },
  'exponential-growth-decay-model': {
    slug: 'exponential-growth-decay-model',
    name: 'Exponential Growth/Decay Model',
    expression: 'A = A₀(1 + r)ᵗ   (growth, r > 0)     A = A₀(1 − r)ᵗ   (decay, 0 < r < 1)',
    meaning: 'A quantity that changes by the same percentage every fixed time period follows this pattern — starting amount times a growth/decay factor raised to the number of periods elapsed.',
    variables: [
      { symbol: 'A', meaning: 'the amount after t time periods' },
      { symbol: 'A₀', meaning: 'the initial amount, at t = 0' },
      { symbol: 'r', meaning: 'the growth rate (or decay rate), as a decimal' },
      { symbol: 't', meaning: 'the number of time periods elapsed' },
    ],
    whenToUse: 'Whenever a quantity grows or shrinks by a fixed percentage each period — population, compound interest, or radioactive-style decay.',
    relatedConceptSlugs: ['exponential-growth-and-decay'],
  },
};
