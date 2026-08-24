import type { Topic } from '@/types/content';

// Navigation outline for Chapter 3, matching the textbook's five sections
// (3.1-3.5) exactly.
export const chapter3Topics: Topic[] = [
  {
    slug: 'scientific-notation',
    title: '3.1 Scientific Notation',
    concepts: [
      { slug: 'writing-numbers-in-scientific-notation', title: 'Writing Numbers in Scientific Notation', difficulty: 'easy' },
      { slug: 'multiplying-and-dividing-in-scientific-notation', title: 'Multiplying and Dividing in Scientific Notation', difficulty: 'medium' },
    ],
  },
  {
    slug: 'definition-of-the-logarithm',
    title: '3.2 Definition of the Logarithm',
    concepts: [
      { slug: 'meaning-of-a-logarithm', title: 'Meaning of a Logarithm', difficulty: 'medium' },
      { slug: 'evaluating-logarithms', title: 'Evaluating Logarithms', difficulty: 'medium' },
    ],
  },
  {
    slug: 'properties-of-logarithm',
    title: '3.3 Properties of Logarithm',
    concepts: [
      { slug: 'product-rule-of-logarithms', title: 'Product Rule of Logarithms', difficulty: 'medium' },
      { slug: 'quotient-rule-of-logarithms', title: 'Quotient Rule of Logarithms', difficulty: 'medium' },
      { slug: 'power-rule-of-logarithms', title: 'Power Rule of Logarithms', difficulty: 'medium' },
    ],
  },
  {
    slug: 'change-of-base',
    title: '3.4 Change of Base',
    concepts: [
      { slug: 'using-the-change-of-base-formula', title: 'Using the Change of Base Formula', difficulty: 'hard' },
    ],
  },
  {
    slug: 'common-and-natural-logarithms',
    title: '3.5 Common Logarithm and Natural Logarithm',
    concepts: [
      { slug: 'common-logarithm', title: 'The Common Logarithm', difficulty: 'easy' },
      { slug: 'natural-logarithm', title: 'The Natural Logarithm', difficulty: 'medium' },
      { slug: 'solving-logarithmic-equations', title: 'Solving Logarithmic Equations', difficulty: 'hard' },
    ],
  },
];
