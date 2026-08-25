import type { Topic } from '@/types/content';

// Navigation outline for Chapter 7, built from the textbook preface's
// description: graphs of trig functions and their transformations,
// inverse trig functions and their graphs, and differentiation of
// trigonometric functions.
export const chapter7CTopics: Topic[] = [
  {
    slug: 'graphs-of-sine-and-cosine-topic',
    title: '7.1 Graphs of Sine and Cosine',
    concepts: [
      { slug: 'the-graph-of-sine', title: 'The Graph of Sine', difficulty: 'easy' },
      { slug: 'the-graph-of-cosine', title: 'The Graph of Cosine', difficulty: 'easy' },
    ],
  },
  {
    slug: 'graphs-of-tangent-and-others-topic',
    title: '7.2 Graphs of Tangent and Other Trigonometric Functions',
    concepts: [
      { slug: 'the-graph-of-tangent', title: 'The Graph of Tangent', difficulty: 'medium' },
      { slug: 'graphs-of-cosecant-secant-and-cotangent', title: 'Graphs of Cosecant, Secant, and Cotangent', difficulty: 'medium' },
    ],
  },
  {
    slug: 'transformations-of-trig-graphs-topic',
    title: '7.3 Transformations of Trigonometric Graphs',
    concepts: [
      { slug: 'amplitude-period-and-phase-shift', title: 'Amplitude, Period, and Phase Shift', difficulty: 'medium' },
      { slug: 'reflections-and-vertical-shifts-of-trig-graphs', title: 'Reflections and Vertical Shifts of Trigonometric Graphs', difficulty: 'medium' },
    ],
  },
  {
    slug: 'inverse-trig-functions-topic',
    title: '7.4 Inverse Trigonometric Functions and Their Graphs',
    concepts: [
      { slug: 'the-inverse-sine-function-and-its-graph', title: 'The Inverse Sine Function and Its Graph', difficulty: 'medium' },
      { slug: 'the-inverse-cosine-and-inverse-tangent-functions', title: 'The Inverse Cosine and Inverse Tangent Functions', difficulty: 'medium' },
    ],
  },
  {
    slug: 'differentiation-of-trig-functions-topic',
    title: '7.5 Differentiation of Trigonometric Functions',
    concepts: [
      { slug: 'derivatives-of-sine-and-cosine', title: 'Derivatives of Sine and Cosine', difficulty: 'medium' },
      { slug: 'derivatives-of-tangent-and-other-trig-functions', title: 'Derivatives of Tangent and Other Trigonometric Functions', difficulty: 'hard' },
    ],
  },
];
