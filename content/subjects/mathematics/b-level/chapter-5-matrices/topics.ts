import type { Topic } from '@/types/content';

// Navigation outline for Chapter 5, matching the textbook's four sections
// (5.1-5.4) exactly.
export const chapter5BTopics: Topic[] = [
  {
    slug: 'matrix-notation-topic',
    title: '5.1 Matrix Notation and Definitions',
    concepts: [
      { slug: 'matrix-notation-and-definitions', title: 'Matrix Notation and Definitions', difficulty: 'easy' },
    ],
  },
  {
    slug: 'matrix-operations-topic',
    title: '5.2 Matrix Operations',
    concepts: [
      { slug: 'matrix-addition-and-subtraction', title: 'Matrix Addition and Subtraction', difficulty: 'medium' },
      { slug: 'scalar-multiplication-of-a-matrix', title: 'Scalar Multiplication of a Matrix', difficulty: 'medium' },
    ],
  },
  {
    slug: 'matrix-multiplication-topic',
    title: '5.3 Matrix Multiplication',
    concepts: [
      { slug: 'matrix-multiplication', title: 'Matrix Multiplication', difficulty: 'hard' },
    ],
  },
  {
    slug: 'inverse-of-a-matrix-topic',
    title: '5.4 The Inverse of a Square Matrix of Order 2',
    concepts: [
      { slug: 'the-determinant-of-a-2x2-matrix', title: 'The Determinant of a 2×2 Matrix', difficulty: 'medium' },
      { slug: 'the-inverse-of-a-2x2-matrix', title: 'The Inverse of a 2×2 Matrix', difficulty: 'hard' },
      { slug: 'solving-simultaneous-equations-using-matrices', title: 'Solving Simultaneous Equations Using Matrices', difficulty: 'hard' },
    ],
  },
];
