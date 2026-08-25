import type { Topic } from '@/types/content';

// Navigation outline for Chapter 11, matching the textbook's four
// sections (11.1-11.4) exactly.
export const chapter11BTopics: Topic[] = [
  {
    slug: 'limit-of-functions-topic',
    title: '11.1 Limit of Functions',
    concepts: [
      { slug: 'the-idea-of-a-limit', title: 'The Idea of a Limit', difficulty: 'medium' },
      { slug: 'evaluating-limits-by-direct-substitution-and-factoring', title: 'Evaluating Limits by Direct Substitution and Factoring', difficulty: 'medium' },
    ],
  },
  {
    slug: 'derivatives-topic',
    title: '11.2 Derivatives',
    concepts: [
      { slug: 'the-derivative-as-a-rate-of-change', title: 'The Derivative as a Rate of Change', difficulty: 'medium' },
      { slug: 'the-derivative-as-the-limit-of-the-difference-quotient', title: 'The Derivative as the Limit of the Difference Quotient', difficulty: 'hard' },
    ],
  },
  {
    slug: 'differentiation-rules-topic',
    title: '11.3 Differentiation Rules',
    concepts: [
      { slug: 'the-power-rule', title: 'The Power Rule', difficulty: 'medium' },
      { slug: 'the-sum-and-difference-rules', title: 'The Sum and Difference Rules', difficulty: 'easy' },
      { slug: 'the-product-rule', title: 'The Product Rule', difficulty: 'hard' },
      { slug: 'the-quotient-rule', title: 'The Quotient Rule', difficulty: 'hard' },
      { slug: 'the-chain-rule', title: 'The Chain Rule', difficulty: 'hard' },
    ],
  },
  {
    slug: 'implicit-differentiation-topic',
    title: '11.4 Implicit Differentiation',
    concepts: [
      { slug: 'implicit-differentiation', title: 'Implicit Differentiation', difficulty: 'hard' },
      { slug: 'applications-of-implicit-differentiation', title: 'Applications of Implicit Differentiation', difficulty: 'hard' },
    ],
  },
];
