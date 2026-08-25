import type { Formula } from '@/types/content';

export const chapter9BFormulas: Record<string, Formula> = {
  'vector-addition-triangle-law': {
    slug: 'vector-addition-triangle-law',
    name: 'The Triangle Law of Vector Addition',
    expression: 'AB + BC = AC',
    meaning: 'Placing the tail of a second vector at the head of the first, the sum is the single vector from the very first tail to the very last head.',
    variables: [
      { symbol: 'AB', meaning: 'a vector from point A to point B' },
      { symbol: 'BC', meaning: 'a vector from point B to point C, placed tail-to-head with AB' },
      { symbol: 'AC', meaning: 'the resultant (sum) vector, from A directly to C' },
    ],
    whenToUse: 'Whenever two vectors are added and can be drawn head-to-tail (e.g. combining two journeys, or two forces acting in sequence).',
    relatedConceptSlugs: ['adding-and-subtracting-vectors-geometrically'],
  },
  'vector-subtraction-rule': {
    slug: 'vector-subtraction-rule',
    name: 'Vector Subtraction',
    expression: 'a − b = a + (−b)',
    meaning: 'Subtracting a vector b is the same as adding its negative, −b — the same vector as b but reversed in direction, with the same magnitude.',
    variables: [
      { symbol: 'a, b', meaning: 'the two vectors being subtracted' },
      { symbol: '−b', meaning: 'the vector with the same magnitude as b, pointing the opposite way' },
    ],
    whenToUse: 'Whenever a vector must be subtracted from another — reverse the second vector\'s direction, then add.',
    relatedConceptSlugs: ['adding-and-subtracting-vectors-geometrically'],
  },
  'scalar-multiplication-of-a-vector': {
    slug: 'scalar-multiplication-of-a-vector',
    name: 'Scalar Multiplication of a Vector',
    expression: 'k·a has magnitude |k||a|, same direction as a if k>0, opposite if k<0',
    meaning: 'Multiplying a vector by a scalar (an ordinary number) k stretches or shrinks its magnitude by a factor of |k|, and flips its direction if k is negative.',
    variables: [
      { symbol: 'k', meaning: 'a scalar (real number) multiplier' },
      { symbol: 'a', meaning: 'the original vector' },
      { symbol: '|a|', meaning: 'the magnitude (length) of vector a' },
    ],
    whenToUse: 'Whenever a vector needs to be scaled in size, reversed in direction, or both.',
    relatedConceptSlugs: ['using-vectors-to-prove-geometric-results'],
  },
  'section-formula-for-a-line-segment': {
    slug: 'section-formula-for-a-line-segment',
    name: 'The Ratio (Section) Formula',
    expression: 'If P divides AB in the ratio m:n, then OP = (n·OA + m·OB) / (m+n)',
    meaning: 'Gives the position vector of a point P that divides the segment AB in a given ratio m:n, directly from the position vectors of A and B.',
    variables: [
      { symbol: 'O', meaning: 'the fixed origin' },
      { symbol: 'OA, OB, OP', meaning: 'the position vectors of A, B, and P respectively' },
      { symbol: 'm : n', meaning: 'the ratio in which P divides AB, measured from A to B' },
    ],
    whenToUse: 'Whenever a point divides a line segment in a known ratio and you need that point\'s position vector (e.g. the midpoint is the special case m=n=1).',
    relatedConceptSlugs: ['ratio-and-division-of-a-line-segment-using-vectors'],
  },
  'vector-between-two-points-formula': {
    slug: 'vector-between-two-points-formula',
    name: 'The Vector Between Two Points',
    expression: 'AB = OB − OA',
    meaning: 'The vector from point A to point B equals B\'s position vector minus A\'s position vector.',
    variables: [
      { symbol: 'O', meaning: 'the fixed origin' },
      { symbol: 'OA, OB', meaning: 'the position vectors of A and B' },
      { symbol: 'AB', meaning: 'the vector from A to B' },
    ],
    whenToUse: 'Whenever you know the position vectors of two points and need the vector that goes from one to the other.',
    relatedConceptSlugs: ['finding-a-vector-between-two-points'],
  },
  'column-vector-magnitude-formula': {
    slug: 'column-vector-magnitude-formula',
    name: 'Magnitude of a Column Vector',
    expression: '|v| = √(x² + y²), for v = (x, y)',
    meaning: 'The magnitude (length) of a two-dimensional vector is found by applying the Pythagorean theorem to its horizontal and vertical components.',
    variables: [
      { symbol: 'v', meaning: 'a two-dimensional vector, written in column/component form' },
      { symbol: 'x, y', meaning: 'the horizontal and vertical components of v' },
      { symbol: '|v|', meaning: 'the magnitude (length) of v' },
    ],
    whenToUse: 'Whenever a vector is given in component (column) form and you need its actual length.',
    relatedConceptSlugs: ['magnitude-of-a-two-dimensional-vector'],
  },
};
