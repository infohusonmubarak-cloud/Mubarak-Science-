import type { Topic } from '@/types/content';

// Navigation outline for Chapter 2, matching the textbook's two sections
// (2.1-2.2) exactly.
export const chapter2BTopics: Topic[] = [
  {
    slug: 'binomial-expansion-topic',
    title: '2.1 Binomial Expansion',
    concepts: [
      { slug: 'meaning-of-binomial-coefficients', title: 'Meaning of Binomial Coefficients and Pascal\'s Triangle', difficulty: 'medium' },
      { slug: 'expanding-small-binomial-powers', title: 'Expanding Small Binomial Powers', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-binomial-theorem-topic',
    title: '2.2 The Binomial Theorem',
    concepts: [
      { slug: 'the-binomial-theorem', title: 'The Binomial Theorem', difficulty: 'hard' },
      { slug: 'the-general-term-of-a-binomial-expansion', title: 'The General Term of a Binomial Expansion', difficulty: 'hard' },
      { slug: 'finding-the-coefficient-of-a-specific-term', title: 'Finding the Coefficient of a Specific Term', difficulty: 'hard' },
    ],
  },
];
