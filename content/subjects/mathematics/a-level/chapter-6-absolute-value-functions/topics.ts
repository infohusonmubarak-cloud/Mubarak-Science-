import type { Topic } from '@/types/content';

// Navigation outline for Chapter 6, matching the textbook's six sections
// (6.1-6.6) exactly.
export const chapter6Topics: Topic[] = [
  {
    slug: 'graphing-upward-v-shapes',
    title: '6.1 Graph of y = |x − h| + k',
    concepts: [
      { slug: 'graphing-y-equals-abs-x-minus-h-plus-k', title: 'Graphing y = |x − h| + k', difficulty: 'medium' },
    ],
  },
  {
    slug: 'graphing-downward-v-shapes',
    title: '6.2 Graph of y = −|x − h| + k',
    concepts: [
      { slug: 'graphing-y-equals-negative-abs-x-minus-h-plus-k', title: 'Graphing y = −|x − h| + k', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-role-of-a-in-absolute-value',
    title: '6.3 Graph of y = a|x|',
    concepts: [
      { slug: 'effect-of-a-on-the-absolute-value-graph', title: 'The Effect of a on the Graph of y = a|x|', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-general-absolute-value-graph',
    title: '6.4 Graph of y = a|x − h| + k',
    concepts: [
      { slug: 'graphing-y-equals-a-abs-x-minus-h-plus-k', title: 'Graphing the General y = a|x − h| + k', difficulty: 'hard' },
    ],
  },
  {
    slug: 'absolute-value-equations',
    title: '6.5 Equation |x − p| = q',
    concepts: [
      { slug: 'solving-absolute-value-equations', title: 'Solving |x − p| = q', difficulty: 'medium' },
    ],
  },
  {
    slug: 'absolute-value-inequalities',
    title: '6.6 Inequalities Involving |x − p|',
    concepts: [
      { slug: 'solving-absolute-value-inequalities', title: 'Solving Inequalities Involving |x − p|', difficulty: 'hard' },
    ],
  },
];
