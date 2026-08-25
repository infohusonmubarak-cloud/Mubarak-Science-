import type { QuickRevision } from '@/types/content';

export const chapter1BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'dividing-polynomials',
      keyPoint: 'P(x) = D(x)·Q(x) + R(x), degree(R) < degree(D).',
      formulaSlug: 'polynomial-division-identity',
      miniExample: '2x³−3x²−11x+6 ÷ (x−3) = 2x²+3x−2, remainder 0.',
    },
    {
      conceptSlug: 'the-remainder-theorem',
      keyPoint: 'Dividing P(x) by (x−a) leaves remainder P(a).',
      formulaSlug: 'remainder-theorem-formula',
      miniExample: 'P(x)=x³−2x²+4x−1, ÷(x−2) → remainder P(2)=7.',
    },
    {
      conceptSlug: 'the-factor-theorem',
      keyPoint: '(x−a) is a factor of P(x) ⇔ P(a)=0.',
      formulaSlug: 'factor-theorem-formula',
      miniExample: 'P(1)=0 → (x−1) is a factor.',
    },
    {
      conceptSlug: 'factoring-polynomials-using-the-factor-theorem',
      keyPoint: 'Test candidates, divide out each factor, repeat.',
      formulaSlug: 'factor-theorem-formula',
      miniExample: 'x³−2x²−5x+6 = (x−1)(x−3)(x+2).',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'dividing-polynomials',
      keyPoint: 'Long division: divide, multiply, subtract, bring down — repeat.',
      formulaSlug: 'polynomial-division-identity',
      miniExample: 'x²+5x+6 ÷ (x+2) = x+3.',
    },
    {
      conceptSlug: 'synthetic-division',
      keyPoint: 'A fast coefficient-only shortcut for dividing by (x−a).',
      formulaSlug: 'polynomial-division-identity',
      miniExample: 'x³−4x²+x+6 ÷ (x−3) = x²−x−2.',
    },
    {
      conceptSlug: 'the-remainder-theorem',
      keyPoint: 'Remainder = P(a), found by one substitution, no division needed.',
      formulaSlug: 'remainder-theorem-formula',
      miniExample: 'P(x)=2x³+x−5, ÷(x+1) → remainder P(−1)=−8.',
    },
    {
      conceptSlug: 'the-factor-theorem',
      keyPoint: 'A direct consequence of the remainder theorem: remainder 0 ⇔ exact factor.',
      formulaSlug: 'factor-theorem-formula',
      miniExample: 'P(−2)=0 → (x+2) is a factor.',
    },
    {
      conceptSlug: 'factoring-polynomials-using-the-factor-theorem',
      keyPoint: 'Test factors of the constant term, divide, repeat on the smaller quotient.',
      formulaSlug: 'factor-theorem-formula',
      miniExample: 'x³−7x+6 = (x−1)(x−2)(x+3).',
    },
  ],
};
