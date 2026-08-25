import type { Topic } from '@/types/content';

// Navigation outline for Chapter 5, built from the textbook preface's
// description: permutation and combination, with applications to
// Mathematics, Statistics, Science, and Engineering.
export const chapter5CTopics: Topic[] = [
  {
    slug: 'the-fundamental-counting-principle-topic',
    title: '5.1 The Fundamental Counting Principle',
    concepts: [
      { slug: 'the-fundamental-counting-principle', title: 'The Fundamental Counting Principle', difficulty: 'easy' },
      { slug: 'factorial-notation', title: 'Factorial Notation', difficulty: 'easy' },
    ],
  },
  {
    slug: 'permutations-topic',
    title: '5.2 Permutations',
    concepts: [
      { slug: 'permutations-of-n-distinct-objects', title: 'Permutations of n Distinct Objects', difficulty: 'medium' },
      { slug: 'permutations-of-r-objects-from-n', title: 'Permutations of r Objects from n', difficulty: 'medium' },
    ],
  },
  {
    slug: 'special-permutations-topic',
    title: '5.3 Permutations with Repetition and Circular Permutations',
    concepts: [
      { slug: 'permutations-with-repeated-objects', title: 'Permutations with Repeated Objects', difficulty: 'hard' },
      { slug: 'circular-permutations', title: 'Circular Permutations', difficulty: 'medium' },
    ],
  },
  {
    slug: 'combinations-topic',
    title: '5.4 Combinations',
    concepts: [
      { slug: 'combinations-of-r-objects-from-n', title: 'Combinations of r Objects from n', difficulty: 'medium' },
      { slug: 'the-relationship-between-permutations-and-combinations', title: 'The Relationship Between Permutations and Combinations', difficulty: 'medium' },
    ],
  },
  {
    slug: 'applications-topic',
    title: '5.5 Applications',
    concepts: [{ slug: 'applications-to-probability-and-statistics', title: 'Applications to Probability and Statistics', difficulty: 'hard' }],
  },
];
