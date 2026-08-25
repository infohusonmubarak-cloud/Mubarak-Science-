import type { Topic } from '@/types/content';

// Navigation outline for Chapter 8, matching the textbook's six sections
// (8.1-8.6) exactly.
export const chapter8Topics: Topic[] = [
  {
    slug: 'ideas-of-similarity',
    title: '8.1 Ideas of Similarities and Similar Triangles',
    concepts: [
      { slug: 'meaning-of-similar-figures-and-similar-triangles', title: 'Meaning of Similar Figures and Similar Triangles', difficulty: 'easy' },
    ],
  },
  {
    slug: 'basic-proportionality-theorem-topic',
    title: '8.2 The Basic Proportionality Theorem',
    concepts: [
      { slug: 'the-basic-proportionality-theorem', title: 'The Basic Proportionality Theorem', difficulty: 'hard' },
    ],
  },
  {
    slug: 'similar-triangle-theorems',
    title: '8.3 Basic Theorems on Similar Triangles',
    concepts: [
      { slug: 'similarity-tests-for-triangles', title: 'Similarity Tests for Triangles (AA, SAS, SSS)', difficulty: 'hard' },
    ],
  },
  {
    slug: 'angle-bisector-theorem-topic',
    title: '8.4 The Angle Bisector Theorem',
    concepts: [
      { slug: 'the-angle-bisector-theorem', title: 'The Angle Bisector Theorem', difficulty: 'hard' },
    ],
  },
  {
    slug: 'pythagoras-theorem-topic',
    title: '8.5 The Pythagoras Theorem',
    concepts: [
      { slug: 'the-pythagoras-theorem', title: 'The Pythagoras Theorem', difficulty: 'medium' },
    ],
  },
  {
    slug: 'special-right-triangles-topic',
    title: '8.6 Special Right Triangles',
    concepts: [
      { slug: 'special-right-triangles', title: 'Special Right Triangles (45-45-90 and 30-60-90)', difficulty: 'medium' },
    ],
  },
];
