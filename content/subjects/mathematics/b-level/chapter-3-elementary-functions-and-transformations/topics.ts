import type { Topic } from '@/types/content';

// Navigation outline for Chapter 3, matching the textbook's two sections
// (3.1-3.2) exactly.
export const chapter3BTopics: Topic[] = [
  {
    slug: 'elementary-functions-topic',
    title: '3.1 Elementary Functions',
    concepts: [
      { slug: 'the-elementary-function-family', title: 'The Elementary Function Family', difficulty: 'easy' },
      { slug: 'the-cubic-function', title: 'The Cubic Function', difficulty: 'medium' },
      { slug: 'the-reciprocal-function', title: 'The Reciprocal Function', difficulty: 'medium' },
      { slug: 'the-square-root-function', title: 'The Square Root Function', difficulty: 'medium' },
      { slug: 'the-exponential-function', title: 'The Exponential Function', difficulty: 'medium' },
    ],
  },
  {
    slug: 'transformations-topic',
    title: '3.2 Transformations',
    concepts: [
      { slug: 'translations-of-functions', title: 'Translations of Functions', difficulty: 'medium' },
      { slug: 'reflections-of-functions', title: 'Reflections of Functions', difficulty: 'medium' },
      { slug: 'stretches-and-compressions-of-functions', title: 'Stretches and Compressions of Functions', difficulty: 'hard' },
      { slug: 'combining-transformations', title: 'Combining Transformations', difficulty: 'hard' },
    ],
  },
];
