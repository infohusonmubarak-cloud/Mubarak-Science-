import type { Topic } from '@/types/content';

// Navigation outline for Chapter 4, matching the textbook's three sections
// (4.1-4.3) exactly.
export const chapter4Topics: Topic[] = [
  {
    slug: 'product-sets',
    title: '4.1 Product Sets',
    concepts: [
      { slug: 'meaning-of-a-product-set', title: 'Meaning of a Product Set', difficulty: 'easy' },
      { slug: 'cardinality-of-a-product-set', title: 'Cardinality of a Product Set', difficulty: 'medium' },
    ],
  },
  {
    slug: 'relations',
    title: '4.2 Relations',
    concepts: [
      { slug: 'meaning-of-a-relation', title: 'Meaning of a Relation', difficulty: 'medium' },
      { slug: 'representing-a-relation', title: 'Representing a Relation', difficulty: 'medium' },
    ],
  },
  {
    slug: 'functions',
    title: '4.3 Functions',
    concepts: [
      { slug: 'meaning-of-a-function', title: 'Meaning of a Function', difficulty: 'medium' },
      { slug: 'the-vertical-line-test', title: 'The Vertical Line Test', difficulty: 'medium' },
      { slug: 'domain-and-range-of-a-function', title: 'Domain and Range of a Function', difficulty: 'medium' },
      { slug: 'function-notation-and-evaluating-functions', title: 'Function Notation and Evaluating Functions', difficulty: 'medium' },
    ],
  },
];
