import type { Formula } from '@/types/content';

export const chapter1BFormulas: Record<string, Formula> = {
  'polynomial-division-identity': {
    slug: 'polynomial-division-identity',
    name: 'The Polynomial Division Identity',
    expression: 'P(x) = D(x) · Q(x) + R(x),   where the degree of R(x) is less than the degree of D(x)',
    meaning: 'Dividing a polynomial P(x) by a divisor D(x) always produces a quotient Q(x) and a remainder R(x), related by this identity — the same "dividend = divisor × quotient + remainder" pattern used for ordinary numbers.',
    variables: [
      { symbol: 'P(x)', meaning: 'the dividend — the polynomial being divided' },
      { symbol: 'D(x)', meaning: 'the divisor — the polynomial being divided by' },
      { symbol: 'Q(x)', meaning: 'the quotient' },
      { symbol: 'R(x)', meaning: 'the remainder (degree strictly less than D(x), or R(x)=0 if it divides evenly)' },
    ],
    whenToUse: 'Whenever you divide one polynomial by another and need to check or express the result correctly.',
    relatedConceptSlugs: ['dividing-polynomials', 'synthetic-division'],
  },
  'remainder-theorem-formula': {
    slug: 'remainder-theorem-formula',
    name: 'The Remainder Theorem',
    expression: 'If P(x) is divided by (x − a), the remainder equals P(a)',
    meaning: 'Dividing a polynomial by (x − a) always leaves a remainder equal to the polynomial evaluated at x = a — found by a single substitution, without doing the division at all.',
    variables: [
      { symbol: 'P(x)', meaning: 'the polynomial being divided' },
      { symbol: 'a', meaning: 'the constant in the linear divisor (x − a)' },
      { symbol: 'P(a)', meaning: 'the polynomial evaluated at x = a — this equals the remainder' },
    ],
    whenToUse: 'Whenever you need the remainder of a polynomial divided by a linear factor (x − a), without carrying out the full division.',
    relatedConceptSlugs: ['the-remainder-theorem'],
  },
  'factor-theorem-formula': {
    slug: 'factor-theorem-formula',
    name: 'The Factor Theorem',
    expression: '(x − a) is a factor of P(x)   ⇔   P(a) = 0',
    meaning: 'A linear expression (x − a) divides a polynomial P(x) exactly (with zero remainder) exactly when a is a root of P(x) — substituting a into P(x) gives zero.',
    variables: [
      { symbol: 'P(x)', meaning: 'the polynomial being tested' },
      { symbol: 'a', meaning: 'a candidate root — the constant in the linear factor (x − a)' },
    ],
    whenToUse: 'Whenever you need to test whether a specific value is a root of a polynomial, or to find factors of a polynomial by testing candidate values.',
    relatedConceptSlugs: ['the-factor-theorem', 'factoring-polynomials-using-the-factor-theorem'],
  },
};
