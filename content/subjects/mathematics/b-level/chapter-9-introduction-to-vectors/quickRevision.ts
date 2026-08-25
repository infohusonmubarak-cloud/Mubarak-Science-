import type { QuickRevision } from '@/types/content';

export const chapter9BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'scalar-and-vector-quantities',
      keyPoint: 'Scalars have magnitude only; vectors have magnitude AND direction.',
      miniExample: 'Mass = scalar. Force = vector.',
    },
    {
      conceptSlug: 'adding-and-subtracting-vectors-geometrically',
      keyPoint: 'Triangle Law: draw tip-to-tail; resultant runs first tail to last head.',
      formulaSlug: 'vector-addition-triangle-law',
      miniExample: '3 east + 4 north → resultant 5.',
    },
    {
      conceptSlug: 'using-vectors-to-prove-geometric-results',
      keyPoint: 'MN = ½(c−b) = ½BC ⇒ MN ∥ BC, half its length.',
      formulaSlug: 'scalar-multiplication-of-a-vector',
      miniExample: 'QR=18 → MN=9.',
    },
    {
      conceptSlug: 'ratio-and-division-of-a-line-segment-using-vectors',
      keyPoint: 'OP = (n·OA + m·OB)/(m+n), when AP:PB = m:n.',
      formulaSlug: 'section-formula-for-a-line-segment',
      miniExample: 'AP:PB=2:3 → OP=(3OA+2OB)/5.',
    },
    {
      conceptSlug: 'finding-a-vector-between-two-points',
      keyPoint: 'AB = OB − OA (destination minus start).',
      formulaSlug: 'vector-between-two-points-formula',
      miniExample: 'OB=−OA, |OA|=10 → |AB|=20.',
    },
    {
      conceptSlug: 'magnitude-of-a-two-dimensional-vector',
      keyPoint: '|v| = √(x²+y²).',
      formulaSlug: 'column-vector-magnitude-formula',
      miniExample: 'v=(4,3) → |v|=5.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'representing-and-naming-vectors',
      keyPoint: '→AB runs A to B; →BA is the exact reverse.',
      miniExample: '→PQ 8 east → →QP 8 west.',
    },
    {
      conceptSlug: 'adding-and-subtracting-vectors-geometrically',
      keyPoint: 'Subtraction: a−b = a+(−b), reverse then add.',
      formulaSlug: 'vector-subtraction-rule',
      miniExample: '6 east, 8 north → resultant 10.',
    },
    {
      conceptSlug: 'using-vectors-to-prove-geometric-results',
      keyPoint: 'Vector proofs replace angle-chasing with pure algebra.',
      formulaSlug: 'scalar-multiplication-of-a-vector',
      miniExample: 'AM=½b, AN=½c → MN=½(c−b).',
    },
    {
      conceptSlug: 'position-vectors-and-the-origin',
      keyPoint: 'Equal position vectors (same magnitude AND direction) ⇒ same point.',
      miniExample: '|OA|=7, OA\'=2·OA → |OA\'|=14.',
    },
    {
      conceptSlug: 'column-vector-notation-and-components',
      keyPoint: 'v=(x,y): x horizontal, y vertical — always in that order.',
      miniExample: '(−3,6) → y-component 6.',
    },
    {
      conceptSlug: 'magnitude-of-a-two-dimensional-vector',
      keyPoint: 'x,y are right-triangle legs; |v| is the hypotenuse.',
      formulaSlug: 'column-vector-magnitude-formula',
      miniExample: 'w=(6,8) → |w|=10.',
    },
  ],
};
