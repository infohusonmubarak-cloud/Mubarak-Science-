import type { Topic } from '@/types/content';

// Navigation outline for Chapter 9, matching the textbook's four sections
// (9.1-9.4) exactly.
export const chapter9BTopics: Topic[] = [
  {
    slug: 'geometric-vectors-topic',
    title: '9.1 Geometric Vectors',
    concepts: [
      { slug: 'scalar-and-vector-quantities', title: 'Scalar and Vector Quantities', difficulty: 'easy' },
      { slug: 'representing-and-naming-vectors', title: 'Representing and Naming Vectors', difficulty: 'easy' },
      { slug: 'adding-and-subtracting-vectors-geometrically', title: 'Adding and Subtracting Vectors Geometrically', difficulty: 'medium' },
    ],
  },
  {
    slug: 'applications-to-elementary-geometry-topic',
    title: '9.2 Applications to Elementary Geometry',
    concepts: [
      { slug: 'using-vectors-to-prove-geometric-results', title: 'Using Vectors to Prove Geometric Results', difficulty: 'hard' },
      { slug: 'ratio-and-division-of-a-line-segment-using-vectors', title: 'Ratio and Division of a Line Segment Using Vectors', difficulty: 'hard' },
    ],
  },
  {
    slug: 'position-vectors-topic',
    title: '9.3 Position Vectors',
    concepts: [
      { slug: 'position-vectors-and-the-origin', title: 'Position Vectors and the Origin', difficulty: 'medium' },
      { slug: 'finding-a-vector-between-two-points', title: 'Finding a Vector Between Two Points', difficulty: 'medium' },
    ],
  },
  {
    slug: 'two-dimensional-vectors-topic',
    title: '9.4 Two-Dimensional Vectors',
    concepts: [
      { slug: 'column-vector-notation-and-components', title: 'Column Vector Notation and Components', difficulty: 'medium' },
      { slug: 'magnitude-of-a-two-dimensional-vector', title: 'Magnitude of a Two-Dimensional Vector', difficulty: 'medium' },
    ],
  },
];
