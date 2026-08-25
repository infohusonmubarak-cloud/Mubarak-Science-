import type { Topic } from '@/types/content';

// Navigation outline for Chapter 8, built from the textbook preface's
// description: graphs of log/exp functions, their transformations, and
// their derivatives.
export const chapter8CTopics: Topic[] = [
  {
    slug: 'graphs-of-exponential-functions-topic',
    title: '8.1 Graphs of Exponential Functions',
    concepts: [{ slug: 'the-graph-of-an-exponential-function', title: 'The Graph of an Exponential Function', difficulty: 'easy' }],
  },
  {
    slug: 'graphs-of-logarithmic-functions-topic',
    title: '8.2 Graphs of Logarithmic Functions',
    concepts: [{ slug: 'the-graph-of-a-logarithmic-function', title: 'The Graph of a Logarithmic Function', difficulty: 'easy' }],
  },
  {
    slug: 'transformations-of-log-and-exp-graphs-topic',
    title: '8.3 Transformations of Logarithmic and Exponential Graphs',
    concepts: [{ slug: 'transformations-of-exponential-and-logarithmic-graphs', title: 'Transformations of Exponential and Logarithmic Graphs', difficulty: 'medium' }],
  },
  {
    slug: 'differentiation-of-exponential-functions-topic',
    title: '8.4 Differentiation of Exponential Functions',
    concepts: [
      { slug: 'the-derivative-of-e-to-the-x', title: 'The Derivative of eˣ', difficulty: 'medium' },
      { slug: 'the-derivative-of-general-exponential-functions', title: 'The Derivative of General Exponential Functions', difficulty: 'medium' },
    ],
  },
  {
    slug: 'differentiation-of-logarithmic-functions-topic',
    title: '8.5 Differentiation of Logarithmic Functions',
    concepts: [
      { slug: 'the-derivative-of-the-natural-logarithm', title: 'The Derivative of the Natural Logarithm', difficulty: 'medium' },
      { slug: 'the-derivative-of-general-logarithmic-functions', title: 'The Derivative of General Logarithmic Functions', difficulty: 'hard' },
    ],
  },
];
