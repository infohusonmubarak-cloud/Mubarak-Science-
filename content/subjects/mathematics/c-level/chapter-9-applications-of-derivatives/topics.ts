import type { Topic } from '@/types/content';

// Navigation outline for Chapter 9, built from the textbook preface's
// description: derivatives of polynomial, rational, exponential,
// logarithmic and trigonometric functions; critical points; maximum
// and minimum; second derivative test; approximation.
export const chapter9CTopics: Topic[] = [
  {
    slug: 'derivatives-of-various-functions-topic',
    title: '9.1 Derivatives of Polynomial, Rational, Exponential, Logarithmic, and Trigonometric Functions',
    concepts: [{ slug: 'reviewing-derivatives-of-various-function-types', title: 'Reviewing Derivatives of Various Function Types', difficulty: 'medium' }],
  },
  {
    slug: 'critical-points-topic',
    title: '9.2 Critical Points',
    concepts: [{ slug: 'critical-points-and-where-they-occur', title: 'Critical Points and Where They Occur', difficulty: 'medium' }],
  },
  {
    slug: 'maximum-and-minimum-topic',
    title: '9.3 Maximum and Minimum',
    concepts: [
      { slug: 'increasing-and-decreasing-intervals', title: 'Increasing and Decreasing Intervals', difficulty: 'medium' },
      { slug: 'finding-absolute-and-local-extrema', title: 'Finding Absolute and Local Extrema', difficulty: 'hard' },
    ],
  },
  {
    slug: 'second-derivative-test-topic',
    title: '9.4 The Second Derivative Test',
    concepts: [
      { slug: 'the-second-derivative-and-concavity', title: 'The Second Derivative and Concavity', difficulty: 'medium' },
      { slug: 'the-second-derivative-test-for-extrema', title: 'The Second Derivative Test for Extrema', difficulty: 'hard' },
    ],
  },
  {
    slug: 'approximation-topic',
    title: '9.5 Approximation',
    concepts: [{ slug: 'linear-approximation-using-derivatives', title: 'Linear Approximation Using Derivatives', difficulty: 'medium' }],
  },
];
