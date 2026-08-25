import type { Topic } from '@/types/content';

// Navigation outline for Chapter 1, matching the textbook's four sections
// (1.1-1.4) exactly.
export const chapter1BTopics: Topic[] = [
  {
    slug: 'dividing-polynomials-topic',
    title: '1.1 Dividing Polynomials',
    concepts: [
      { slug: 'dividing-polynomials', title: 'Dividing Polynomials by Long Division', difficulty: 'medium' },
    ],
  },
  {
    slug: 'synthetic-division-topic',
    title: '1.2 Synthetic Division',
    concepts: [
      { slug: 'synthetic-division', title: 'Synthetic Division', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-remainder-theorem-topic',
    title: '1.3 The Remainder Theorem',
    concepts: [
      { slug: 'the-remainder-theorem', title: 'The Remainder Theorem', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-factor-theorem-topic',
    title: '1.4 The Factor Theorem',
    concepts: [
      { slug: 'the-factor-theorem', title: 'The Factor Theorem', difficulty: 'medium' },
      { slug: 'factoring-polynomials-using-the-factor-theorem', title: 'Factoring Polynomials Using the Factor Theorem', difficulty: 'hard' },
    ],
  },
];
