import type { Topic } from '@/types/content';

// Navigation outline for Chapter 5, matching the textbook's sections
// 5.1-5.6 and 5.8 (5.7 "Miscellaneous Exercises" is folded into the
// chapter's graded assessment rather than treated as its own concept).
export const chapter5Topics: Topic[] = [
  {
    slug: 'graphing-upward-parabolas',
    title: '5.1 Graph of y = x² + bx + c',
    concepts: [
      { slug: 'graphing-y-x-squared-plus-bx-plus-c', title: 'Graphing y = x² + bx + c', difficulty: 'medium' },
    ],
  },
  {
    slug: 'graphing-downward-parabolas',
    title: '5.2 Graph of y = −x² + bx + c',
    concepts: [
      { slug: 'graphing-y-negative-x-squared-plus-bx-plus-c', title: 'Graphing y = −x² + bx + c', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-role-of-a',
    title: '5.3 Graph of y = ax²',
    concepts: [
      { slug: 'effect-of-a-on-the-parabola', title: 'The Effect of a on the Graph of y = ax²', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-general-quadratic-graph',
    title: '5.4 Graph of y = ax² + bx + c',
    concepts: [
      { slug: 'the-vertex-formula-and-general-quadratic-graphs', title: 'The Vertex Formula and Graphing y = ax² + bx + c', difficulty: 'hard' },
    ],
  },
  {
    slug: 'the-discriminant-topic',
    title: '5.5 Discriminant of a Quadratic Function',
    concepts: [
      { slug: 'the-discriminant', title: 'The Discriminant', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-quadratic-formula-topic',
    title: '5.6 Quadratic Formula of ax² + bx + c = 0',
    concepts: [
      { slug: 'the-quadratic-formula', title: 'The Quadratic Formula', difficulty: 'hard' },
    ],
  },
  {
    slug: 'quadratic-inequalities',
    title: '5.8 Quadratic Inequality',
    concepts: [
      { slug: 'solving-quadratic-inequalities', title: 'Solving Quadratic Inequalities', difficulty: 'hard' },
    ],
  },
];
