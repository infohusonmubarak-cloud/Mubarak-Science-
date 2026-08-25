import type { Formula } from '@/types/content';

export const chapter4BFormulas: Record<string, Formula> = {
  'arithmetic-sequence-nth-term': {
    slug: 'arithmetic-sequence-nth-term',
    name: 'nth Term of an Arithmetic Progression',
    expression: 'aₙ = a₁ + (n − 1)d',
    meaning: 'Gives the value of any term directly from its position n, without listing every earlier term.',
    variables: [
      { symbol: 'aₙ', meaning: 'the nth term of the sequence' },
      { symbol: 'a₁', meaning: 'the first term' },
      { symbol: 'd', meaning: 'the common difference — the fixed amount added between consecutive terms' },
      { symbol: 'n', meaning: 'the term\'s position in the sequence' },
    ],
    whenToUse: 'Whenever you need a specific term of an arithmetic sequence directly, or need to find n, a₁, or d from other known values.',
    relatedConceptSlugs: ['arithmetic-progressions'],
  },
  'arithmetic-series-sum': {
    slug: 'arithmetic-series-sum',
    name: 'Sum of an Arithmetic Series',
    expression: 'Sₙ = n/2 · (a₁ + aₙ)   =   n/2 · (2a₁ + (n − 1)d)',
    meaning: 'Gives the sum of the first n terms of an arithmetic sequence directly, without adding every term one at a time.',
    variables: [
      { symbol: 'Sₙ', meaning: 'the sum of the first n terms' },
      { symbol: 'a₁, aₙ', meaning: 'the first and nth (last) terms being summed' },
      { symbol: 'n', meaning: 'the number of terms' },
      { symbol: 'd', meaning: 'the common difference' },
    ],
    whenToUse: 'Whenever you need the total of a run of arithmetic-sequence terms, without adding them individually.',
    relatedConceptSlugs: ['arithmetic-series'],
  },
  'geometric-sequence-nth-term': {
    slug: 'geometric-sequence-nth-term',
    name: 'nth Term of a Geometric Progression',
    expression: 'aₙ = a₁ · rⁿ⁻¹',
    meaning: 'Gives the value of any term of a geometric sequence directly from its position n.',
    variables: [
      { symbol: 'aₙ', meaning: 'the nth term of the sequence' },
      { symbol: 'a₁', meaning: 'the first term' },
      { symbol: 'r', meaning: 'the common ratio — the fixed factor multiplied between consecutive terms' },
      { symbol: 'n', meaning: 'the term\'s position in the sequence' },
    ],
    whenToUse: 'Whenever you need a specific term of a geometric sequence directly, or need to find n, a₁, or r from other known values.',
    relatedConceptSlugs: ['geometric-progressions'],
  },
  'geometric-series-sum': {
    slug: 'geometric-series-sum',
    name: 'Sum of a Finite Geometric Series',
    expression: 'Sₙ = a₁(1 − rⁿ) / (1 − r)   (r ≠ 1)',
    meaning: 'Gives the sum of the first n terms of a geometric sequence directly, without adding every term.',
    variables: [
      { symbol: 'Sₙ', meaning: 'the sum of the first n terms' },
      { symbol: 'a₁', meaning: 'the first term' },
      { symbol: 'r', meaning: 'the common ratio (r ≠ 1)' },
      { symbol: 'n', meaning: 'the number of terms being summed' },
    ],
    whenToUse: 'Whenever you need the total of a run of geometric-sequence terms, without adding them individually.',
    relatedConceptSlugs: ['geometric-series'],
  },
  'infinite-geometric-series-sum': {
    slug: 'infinite-geometric-series-sum',
    name: 'Sum of an Infinite Geometric Series',
    expression: 'S∞ = a₁ / (1 − r)   (only valid when |r| < 1)',
    meaning: 'Gives the finite total that a geometric series with shrinking terms approaches as more and more terms are added, forever.',
    variables: [
      { symbol: 'S∞', meaning: 'the sum of the infinite series' },
      { symbol: 'a₁', meaning: 'the first term' },
      { symbol: 'r', meaning: 'the common ratio, with |r| < 1 required for the sum to exist' },
    ],
    whenToUse: 'Whenever a geometric series continues forever and its common ratio satisfies |r| < 1, so its terms shrink toward zero.',
    relatedConceptSlugs: ['infinite-geometric-series'],
  },
};
