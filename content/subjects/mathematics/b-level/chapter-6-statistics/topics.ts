import type { Topic } from '@/types/content';

// Navigation outline for Chapter 6, matching the textbook's three
// sections (6.1-6.3) exactly.
export const chapter6BTopics: Topic[] = [
  {
    slug: 'measure-of-variation-topic',
    title: '6.1 Measure of Variation',
    concepts: [
      { slug: 'range-and-interquartile-range', title: 'Range and Interquartile Range', difficulty: 'medium' },
      { slug: 'variance-and-standard-deviation', title: 'Variance and Standard Deviation', difficulty: 'hard' },
    ],
  },
  {
    slug: 'cumulative-frequency-topic',
    title: '6.2 Cumulative Frequency',
    concepts: [
      { slug: 'cumulative-frequency-tables-and-the-ogive', title: 'Cumulative Frequency Tables and the Ogive', difficulty: 'medium' },
      { slug: 'reading-the-median-and-quartiles-from-an-ogive', title: 'Reading the Median and Quartiles from an Ogive', difficulty: 'medium' },
    ],
  },
  {
    slug: 'correlation-topic',
    title: '6.3 Correlation',
    concepts: [
      { slug: 'scatter-diagrams-and-correlation', title: 'Scatter Diagrams and Correlation', difficulty: 'medium' },
      { slug: 'the-correlation-coefficient', title: 'The Correlation Coefficient', difficulty: 'hard' },
    ],
  },
];
