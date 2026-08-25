import type { Formula } from '@/types/content';

export const chapter5CFormulas: Record<string, Formula> = {
  'fundamental-counting-principle-formula': {
    slug: 'fundamental-counting-principle-formula',
    name: 'The Fundamental Counting Principle',
    expression: 'If one task can be done m ways and a second task n ways, both together = m × n ways',
    meaning: 'When a choice involves multiple independent stages, the total number of possible outcomes is the product of the number of options at each stage.',
    variables: [
      { symbol: 'm, n', meaning: 'the number of ways to complete each independent stage of the choice' },
    ],
    whenToUse: 'Whenever a total count is needed for a process made up of several independent stages, each with its own number of options.',
    relatedConceptSlugs: ['the-fundamental-counting-principle'],
  },
  'factorial-notation-formula': {
    slug: 'factorial-notation-formula',
    name: 'Factorial Notation',
    expression: 'n! = n × (n−1) × (n−2) × ... × 2 × 1,   with 0! = 1 by definition',
    meaning: 'The factorial of a positive integer n is the product of every positive integer up to n — it counts the number of ways to arrange n distinct objects in a row.',
    variables: [
      { symbol: 'n', meaning: 'a non-negative integer' },
    ],
    whenToUse: 'Whenever the number of full arrangements of a set of distinct objects is needed, or as a building block in permutation and combination formulas.',
    relatedConceptSlugs: ['factorial-notation'],
  },
  'permutations-of-n-objects-formula': {
    slug: 'permutations-of-n-objects-formula',
    name: 'Permutations of n Distinct Objects',
    expression: 'P(n,n) = n!',
    meaning: 'The number of different orders in which all n distinct objects can be arranged.',
    variables: [
      { symbol: 'n', meaning: 'the total number of distinct objects being arranged' },
    ],
    whenToUse: 'Whenever every object in a set is being arranged in some order (not just a subset of them).',
    relatedConceptSlugs: ['permutations-of-n-distinct-objects'],
  },
  'permutations-formula': {
    slug: 'permutations-formula',
    name: 'Permutations of r Objects from n',
    expression: 'P(n,r) = n! / (n−r)!',
    meaning: 'The number of ways to choose AND arrange r objects, in order, out of a total of n distinct objects.',
    variables: [
      { symbol: 'n', meaning: 'the total number of distinct objects available' },
      { symbol: 'r', meaning: 'the number of objects being chosen and arranged, r ≤ n' },
    ],
    whenToUse: 'Whenever the ORDER of the chosen objects matters (e.g. 1st, 2nd, 3rd place).',
    relatedConceptSlugs: ['permutations-of-r-objects-from-n'],
  },
  'permutations-with-repetition-formula': {
    slug: 'permutations-with-repetition-formula',
    name: 'Permutations with Repeated Objects',
    expression: 'n! / (n₁! × n₂! × ... × nₖ!)',
    meaning: 'The number of distinct arrangements of n objects, when some of them are indistinguishable copies of each other, grouped into k types.',
    variables: [
      { symbol: 'n', meaning: 'the total number of objects (including repeats)' },
      { symbol: 'n₁, n₂, ..., nₖ', meaning: 'the number of repeated copies within each distinct type' },
    ],
    whenToUse: 'Whenever arranging a set that includes repeated (indistinguishable) items, like letters in a word with repeated letters.',
    relatedConceptSlugs: ['permutations-with-repeated-objects'],
  },
  'circular-permutations-formula': {
    slug: 'circular-permutations-formula',
    name: 'Circular Permutations',
    expression: '(n−1)!',
    meaning: 'The number of distinct ways to arrange n distinct objects around a circle, where rotations of the same arrangement are considered identical.',
    variables: [
      { symbol: 'n', meaning: 'the number of distinct objects arranged around the circle' },
    ],
    whenToUse: 'Whenever objects are arranged in a circle (like people around a table) rather than in a row.',
    relatedConceptSlugs: ['circular-permutations'],
  },
  'combinations-formula': {
    slug: 'combinations-formula',
    name: 'Combinations of r Objects from n',
    expression: 'C(n,r) = n! / [r!(n−r)!]',
    meaning: 'The number of ways to choose r objects from a total of n distinct objects, where the ORDER of selection does not matter.',
    variables: [
      { symbol: 'n', meaning: 'the total number of distinct objects available' },
      { symbol: 'r', meaning: 'the number of objects being chosen, r ≤ n' },
    ],
    whenToUse: 'Whenever a group or subset is being chosen and the order within the group does not matter (like choosing a committee).',
    relatedConceptSlugs: ['combinations-of-r-objects-from-n', 'applications-to-probability-and-statistics'],
  },
  'permutations-combinations-relationship-formula': {
    slug: 'permutations-combinations-relationship-formula',
    name: 'The Relationship Between Permutations and Combinations',
    expression: 'P(n,r) = C(n,r) × r!',
    meaning: 'The number of ordered arrangements (permutations) of r objects equals the number of unordered selections (combinations) of the same r objects, multiplied by the r! ways to order each selected group.',
    variables: [
      { symbol: 'P(n,r)', meaning: 'the number of ordered arrangements of r objects from n' },
      { symbol: 'C(n,r)', meaning: 'the number of unordered selections of r objects from n' },
    ],
    whenToUse: 'Whenever converting between a permutation count and the corresponding combination count (or vice versa).',
    relatedConceptSlugs: ['the-relationship-between-permutations-and-combinations'],
  },
};
