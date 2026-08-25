import type { Topic } from '@/types/content';

// Navigation outline for Chapter 10, matching the textbook's eight
// sections (10.1-10.8) exactly. (Chapter slug stays 'trigonometry-advanced'
// to avoid colliding with Math A-Level's 'trigonometry' chapter.)
export const chapter10BTopics: Topic[] = [
  {
    slug: 'trigonometric-ratios-of-any-angle-topic',
    title: '10.1 Trigonometric Ratios of Any Angle',
    concepts: [
      { slug: 'extending-trigonometric-ratios-to-any-angle', title: 'Extending Trigonometric Ratios to Any Angle', difficulty: 'medium' },
      { slug: 'the-quadrants-and-signs-of-trigonometric-ratios', title: 'The Quadrants and Signs of Trigonometric Ratios', difficulty: 'medium' },
    ],
  },
  {
    slug: 'negative-angles-topic',
    title: '10.2 Negative Angles',
    concepts: [
      { slug: 'negative-angles-and-their-trigonometric-ratios', title: 'Negative Angles and Their Trigonometric Ratios', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-basic-acute-angle-topic',
    title: '10.3 The Basic Acute Angle',
    concepts: [
      { slug: 'the-basic-acute-angle', title: 'The Basic Acute Angle', difficulty: 'medium' },
    ],
  },
  {
    slug: 'quadrantal-angles-topic',
    title: '10.4 Trigonometric Ratios of 0°, 90°, 180°, 270°, 360°',
    concepts: [
      { slug: 'trigonometric-ratios-of-quadrantal-angles', title: 'Trigonometric Ratios of Quadrantal Angles', difficulty: 'medium' },
    ],
  },
  {
    slug: 'further-trigonometric-identities-topic',
    title: '10.5 Further Trigonometric Identities',
    concepts: [
      { slug: 'the-pythagorean-identity', title: 'The Pythagorean Identity', difficulty: 'medium' },
      { slug: 'the-quotient-identity', title: 'The Quotient Identity', difficulty: 'medium' },
    ],
  },
  {
    slug: 'law-of-sines-and-cosines-topic',
    title: '10.6 The Law of Cosines and The Law of Sines',
    concepts: [
      { slug: 'the-law-of-sines', title: 'The Law of Sines', difficulty: 'hard' },
      { slug: 'the-law-of-cosines', title: 'The Law of Cosines', difficulty: 'hard' },
    ],
  },
  {
    slug: 'bearings-topic',
    title: '10.7 Bearings',
    concepts: [
      { slug: 'bearings-and-solving-triangle-problems', title: 'Bearings and Solving Triangle Problems', difficulty: 'hard' },
    ],
  },
  {
    slug: 'area-of-a-triangle-topic',
    title: '10.8 The Area of a Triangle',
    concepts: [
      { slug: 'the-area-of-a-triangle-using-sine', title: 'The Area of a Triangle Using Sine', difficulty: 'medium' },
    ],
  },
];
