import type { Topic } from '@/types/content';

export const chapter1AUnitsTopics: Topic[] = [
  {
    slug: 'units-and-systems-of-units',
    title: '1.1–1.2 Basic and Derived Units, and System of Units',
    concepts: [
      { slug: 'basic-and-derived-units', title: 'Basic and Derived Units', difficulty: 'easy' },
      { slug: 'systems-of-units', title: 'System of Units', difficulty: 'easy' },
    ],
  },
  {
    slug: 'prefixes-and-standards',
    title: '1.3–1.4 Prefixes, and Standards and Units',
    concepts: [
      { slug: 'si-prefixes', title: 'Prefixes', difficulty: 'easy' },
      { slug: 'standards-of-measurement', title: 'Standards and Units', difficulty: 'medium' },
    ],
  },
  {
    slug: 'measurement-of-length',
    title: '1.5 Measurement of Length',
    concepts: [
      { slug: 'vernier-caliper', title: 'The Vernier Caliper', difficulty: 'medium' },
      { slug: 'micrometer-screw-gauge', title: 'The Micrometer Screw Gauge', difficulty: 'medium' },
    ],
  },
  {
    slug: 'measurement-of-mass-topic',
    title: '1.6 Measurement of Mass',
    concepts: [{ slug: 'measurement-of-mass', title: 'Measurement of Mass', difficulty: 'easy' }],
  },
  {
    slug: 'measurement-of-time-topic',
    title: '1.7 Measurement of Time',
    concepts: [{ slug: 'measurement-of-time', title: 'Measurement of Time', difficulty: 'medium' }],
  },
];
