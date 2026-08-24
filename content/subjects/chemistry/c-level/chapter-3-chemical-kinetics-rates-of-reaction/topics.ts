import type { Topic } from '@/types/content';

export const chapter3KineticsTopics: Topic[] = [
  {
    slug: 'reaction-rates-topic',
    title: 'Reaction Rates',
    concepts: [
      { slug: 'measuring-reaction-rate', title: 'Measuring Reaction Rate', difficulty: 'easy' },
      { slug: 'average-and-instantaneous-rate', title: 'Average and Instantaneous Rate', difficulty: 'medium' },
    ],
  },
  {
    slug: 'collision-theory-topic',
    title: 'Collision Theory and Activation Energy',
    concepts: [
      { slug: 'collision-theory', title: 'Collision Theory', difficulty: 'easy' },
      { slug: 'activation-energy', title: 'Activation Energy', difficulty: 'medium' },
      { slug: 'the-maxwell-boltzmann-distribution', title: 'The Maxwell–Boltzmann Distribution', difficulty: 'hard' },
    ],
  },
  {
    slug: 'factors-affecting-reaction-rates-topic',
    title: 'Factors Affecting Reaction Rates',
    concepts: [
      { slug: 'concentration-and-pressure-effects-on-rate', title: 'Concentration and Pressure', difficulty: 'medium' },
      { slug: 'temperature-effects-on-rate', title: 'Temperature', difficulty: 'medium' },
      { slug: 'surface-area-and-catalysts', title: 'Surface Area and Catalysts', difficulty: 'medium' },
    ],
  },
];
