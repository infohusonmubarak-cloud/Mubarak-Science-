import type { Topic } from '@/types/content';

// Navigation outline for Chapter 4, matching the textbook's six sections
// (4.1-4.6) exactly.
export const chapter4BTopics: Topic[] = [
  {
    slug: 'introduction-topic',
    title: '4.1 Introduction to Sequences and Series',
    concepts: [
      { slug: 'introduction-to-sequences-and-series', title: 'Introduction to Sequences and Series', difficulty: 'easy' },
    ],
  },
  {
    slug: 'arithmetic-progression-topic',
    title: '4.2 Arithmetic Progression (A.P.)',
    concepts: [
      { slug: 'arithmetic-progressions', title: 'Arithmetic Progression (A.P.)', difficulty: 'medium' },
    ],
  },
  {
    slug: 'arithmetic-series-topic',
    title: '4.3 Arithmetic Series',
    concepts: [
      { slug: 'arithmetic-series', title: 'Arithmetic Series', difficulty: 'medium' },
    ],
  },
  {
    slug: 'geometric-progression-topic',
    title: '4.4 Geometric Progression (G.P.)',
    concepts: [
      { slug: 'geometric-progressions', title: 'Geometric Progression (G.P.)', difficulty: 'medium' },
    ],
  },
  {
    slug: 'geometric-series-topic',
    title: '4.5 Geometric Series',
    concepts: [
      { slug: 'geometric-series', title: 'Geometric Series', difficulty: 'medium' },
    ],
  },
  {
    slug: 'infinite-geometric-series-topic',
    title: '4.6 Infinite Geometric Series',
    concepts: [
      { slug: 'infinite-geometric-series', title: 'Infinite Geometric Series', difficulty: 'hard' },
    ],
  },
];
