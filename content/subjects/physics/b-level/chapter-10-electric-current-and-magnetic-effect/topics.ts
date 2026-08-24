import type { Topic } from '@/types/content';

export const chapter10CurrentTopics: Topic[] = [
  {
    slug: 'current-and-its-effects-topic',
    title: 'Current and Effects of Current',
    concepts: [{ slug: 'current-and-effects-of-current', title: 'Current and Effects of Current', difficulty: 'easy' }],
  },
  {
    slug: 'ohms-law-and-resistors-topic',
    title: "Ohm's Law, Electrical Resistance and Resistors",
    concepts: [
      { slug: 'ohms-law-and-resistance', title: "Ohm's Law and Electrical Resistance", difficulty: 'medium' },
      { slug: 'resistors-b-level', title: 'Resistors', difficulty: 'medium' },
      { slug: 'resistors-in-series-b-level', title: 'Resistors in Series', difficulty: 'medium' },
      { slug: 'resistors-in-parallel-b-level', title: 'Resistors in Parallel', difficulty: 'hard' },
    ],
  },
  {
    slug: 'magnetic-effect-topic',
    title: 'Magnetic Field Due to an Electric Current and Electromagnets',
    concepts: [
      { slug: 'magnetic-field-due-to-current', title: 'Magnetic Field Due to an Electric Current', difficulty: 'medium' },
      { slug: 'electromagnets', title: 'Electromagnets', difficulty: 'easy' },
      { slug: 'ammeter-and-voltmeter', title: 'Ammeter and Voltmeter', difficulty: 'medium' },
    ],
  },
];
