import type { Topic } from '@/types/content';

// Navigation outline for Chapter 7, matching the textbook's three sections
// (7.1-7.3) exactly.
export const chapter7Topics: Topic[] = [
  {
    slug: 'calculating-probability',
    title: '7.1 Calculating Probability',
    concepts: [
      { slug: 'meaning-of-probability-and-sample-space', title: 'Meaning of Probability and Sample Space', difficulty: 'easy' },
      { slug: 'the-complement-rule', title: 'The Complement Rule', difficulty: 'medium' },
    ],
  },
  {
    slug: 'probabilities-of-combined-events',
    title: '7.2 Probabilities of Combined Events',
    concepts: [
      { slug: 'the-addition-rule-for-combined-events', title: 'The Addition Rule for Combined Events', difficulty: 'medium' },
      { slug: 'independent-events-and-the-multiplication-rule', title: 'Independent Events and the Multiplication Rule', difficulty: 'medium' },
      { slug: 'conditional-probability', title: 'Conditional Probability', difficulty: 'hard' },
    ],
  },
  {
    slug: 'expected-frequency-topic',
    title: '7.3 Calculation of Expected Frequency',
    concepts: [
      { slug: 'expected-frequency', title: 'Expected Frequency', difficulty: 'medium' },
    ],
  },
];
