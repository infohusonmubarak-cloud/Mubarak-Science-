import type { Formula } from '@/types/content';

export const chapter8Formulas: Record<string, Formula> = {
  'similarity-ratio-formula': {
    slug: 'similarity-ratio-formula',
    name: 'Similarity Ratio',
    expression: "AB/A'B' = BC/B'C' = CA/C'A' = k,   and corresponding angles are equal",
    meaning: 'Two triangles are similar exactly when their corresponding angles are equal and their corresponding sides are all in the same fixed ratio, k (the scale factor).',
    variables: [
      { symbol: 'k', meaning: 'the scale factor — how many times larger (or smaller) one triangle is than the other' },
      { symbol: "AB, BC, CA / A'B', B'C', C'A'", meaning: 'corresponding side lengths of the two similar triangles' },
    ],
    whenToUse: 'Whenever you need to confirm two triangles are similar, or use their known similarity to find a missing side length.',
    relatedConceptSlugs: ['meaning-of-similar-figures-and-similar-triangles', 'similarity-tests-for-triangles'],
  },
  'basic-proportionality-theorem-formula': {
    slug: 'basic-proportionality-theorem-formula',
    name: 'The Basic Proportionality Theorem (Thales\' Theorem)',
    expression: 'If DE ∥ BC in △ABC (D on AB, E on AC), then AD/DB = AE/EC',
    meaning: 'A line drawn parallel to one side of a triangle, cutting the other two sides, divides those two sides in exactly the same ratio.',
    variables: [
      { symbol: 'D, E', meaning: 'the points where the parallel line crosses sides AB and AC' },
      { symbol: 'AD, DB, AE, EC', meaning: 'the four segments the parallel line creates on the two cut sides' },
    ],
    whenToUse: 'Whenever a line parallel to one side of a triangle cuts the other two sides, and you need to relate the resulting segment lengths.',
    relatedConceptSlugs: ['the-basic-proportionality-theorem'],
  },
  'angle-bisector-theorem-formula': {
    slug: 'angle-bisector-theorem-formula',
    name: 'The Angle Bisector Theorem',
    expression: 'If AD bisects ∠A in △ABC (D on BC), then BD/DC = AB/AC',
    meaning: 'The bisector of an angle of a triangle divides the opposite side into two segments whose ratio equals the ratio of the two sides forming that angle.',
    variables: [
      { symbol: 'D', meaning: 'the point where the angle bisector from A meets side BC' },
      { symbol: 'BD, DC', meaning: 'the two segments the bisector divides BC into' },
      { symbol: 'AB, AC', meaning: 'the two sides forming the bisected angle at A' },
    ],
    whenToUse: 'Whenever an angle bisector in a triangle is given, and you need to find how it divides the opposite side.',
    relatedConceptSlugs: ['the-angle-bisector-theorem'],
  },
  'pythagorean-theorem': {
    slug: 'pythagorean-theorem',
    name: 'The Pythagorean Theorem',
    expression: 'a² + b² = c²',
    meaning: 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides (the legs).',
    variables: [
      { symbol: 'a, b', meaning: 'the lengths of the two legs (the sides forming the right angle)' },
      { symbol: 'c', meaning: 'the length of the hypotenuse (the side opposite the right angle, always the longest side)' },
    ],
    whenToUse: 'Whenever you know two sides of a right triangle and need the third, or need to check whether a triangle is a right triangle.',
    relatedConceptSlugs: ['the-pythagoras-theorem', 'special-right-triangles'],
  },
  'special-right-triangle-ratios': {
    slug: 'special-right-triangle-ratios',
    name: 'Special Right Triangle Side Ratios',
    expression: '45-45-90:  leg : leg : hypotenuse = x : x : x√2.     30-60-90:  short leg : long leg : hypotenuse = x : x√3 : 2x',
    meaning: 'Two specific right triangles — with angles 45-45-90 and 30-60-90 — always have their side lengths in these exact fixed ratios, letting you find every side from just one known length.',
    variables: [
      { symbol: 'x', meaning: 'the shortest side (the leg in a 45-45-90 triangle, or the short leg opposite the 30° angle in a 30-60-90 triangle)' },
    ],
    whenToUse: 'Whenever a right triangle has angles of 45-45-90 or 30-60-90, letting you find every side instantly from a single known length, without the Pythagorean theorem.',
    relatedConceptSlugs: ['special-right-triangles'],
  },
};
