import type { Topic } from '@/types/content';

// Navigation outline for Chapter 5, matching the textbook's section
// list: heat transfer; thermodynamics; heat engines.
export const chapter5CHeatTopics: Topic[] = [
  {
    slug: 'heat-transfer-topic',
    title: '5.1 Heat Transfer',
    concepts: [
      { slug: 'mechanisms-of-heat-transfer', title: 'Mechanisms of Heat Transfer', difficulty: 'medium' },
      { slug: 'radiation-and-stefan-boltzmann-law', title: 'Radiation and the Stefan-Boltzmann Law', difficulty: 'medium' },
    ],
  },
  {
    slug: 'thermodynamics-topic',
    title: '5.2 Thermodynamics',
    concepts: [
      { slug: 'internal-energy-and-work', title: 'Internal Energy and Work', difficulty: 'medium' },
      { slug: 'first-law-of-thermodynamics', title: 'The First Law of Thermodynamics', difficulty: 'medium' },
    ],
  },
  {
    slug: 'heat-engines-topic',
    title: '5.3 Heat Engines',
    concepts: [{ slug: 'heat-engines-and-efficiency', title: 'Heat Engines and Efficiency', difficulty: 'hard' }],
  },
];
