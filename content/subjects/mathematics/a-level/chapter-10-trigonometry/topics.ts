import type { Topic } from '@/types/content';

// Navigation outline for Chapter 10, matching the textbook's eight
// sections (10.1-10.8) exactly.
export const chapter10Topics: Topic[] = [
  {
    slug: 'angles-topic',
    title: '10.1 Angles',
    concepts: [
      { slug: 'meaning-of-an-angle-and-standard-position', title: 'Meaning of an Angle and Standard Position', difficulty: 'easy' },
    ],
  },
  {
    slug: 'degree-and-radian-measure',
    title: '10.2 The Relation between Degree and Radian Measure',
    concepts: [
      { slug: 'degree-radian-conversion', title: 'Degree-Radian Conversion', difficulty: 'medium' },
    ],
  },
  {
    slug: 'arc-length-and-sector-area',
    title: '10.3 Arc Length and Area of a Sector of a Circle',
    concepts: [
      { slug: 'arc-length-of-a-sector', title: 'Arc Length of a Sector', difficulty: 'medium' },
      { slug: 'area-of-a-sector', title: 'Area of a Sector', difficulty: 'medium' },
    ],
  },
  {
    slug: 'six-trigonometric-ratios-topic',
    title: '10.4 Six Trigonometric Ratios',
    concepts: [
      { slug: 'the-six-trigonometric-ratios', title: 'The Six Trigonometric Ratios', difficulty: 'medium' },
    ],
  },
  {
    slug: 'relations-between-trig-ratios',
    title: '10.5 Relations between the Trigonometric Ratios',
    concepts: [
      { slug: 'pythagorean-identity-and-reciprocal-relations', title: 'The Pythagorean Identity and Reciprocal Relations', difficulty: 'hard' },
    ],
  },
  {
    slug: 'special-angle-values',
    title: '10.6 Value of the Trigonometric Ratios for Some Special Angles',
    concepts: [
      { slug: 'trig-ratios-for-special-angles', title: 'Trigonometric Ratios for Special Angles', difficulty: 'medium' },
    ],
  },
  {
    slug: 'solution-of-right-triangles-topic',
    title: '10.7 Solution of Right Triangles',
    concepts: [
      { slug: 'solving-right-triangles', title: 'Solving Right Triangles', difficulty: 'hard' },
    ],
  },
  {
    slug: 'elevation-and-depression-topic',
    title: '10.8 Angle of Elevation and Angle of Depression',
    concepts: [
      { slug: 'angle-of-elevation-and-depression', title: 'Angle of Elevation and Angle of Depression', difficulty: 'medium' },
    ],
  },
];
