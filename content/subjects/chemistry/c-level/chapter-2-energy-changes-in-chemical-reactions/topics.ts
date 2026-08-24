import type { Topic } from '@/types/content';

export const chapter2EnergyTopics: Topic[] = [
  {
    slug: 'energy-changes-topic',
    title: 'Energy Changes',
    concepts: [
      { slug: 'forms-of-energy-in-chemistry', title: 'Forms of Energy in Chemistry', difficulty: 'easy' },
      { slug: 'internal-energy-and-enthalpy', title: 'Internal Energy and Enthalpy', difficulty: 'medium' },
    ],
  },
  {
    slug: 'energy-changes-in-chemical-reactions-topic',
    title: 'Energy Changes in Chemical Reactions',
    concepts: [
      { slug: 'exothermic-and-endothermic-reactions', title: 'Exothermic and Endothermic Reactions', difficulty: 'easy' },
      { slug: 'enthalpy-diagrams', title: 'Enthalpy Diagrams', difficulty: 'medium' },
      { slug: 'standard-enthalpy-of-reaction', title: 'Standard Enthalpy of Reaction', difficulty: 'medium' },
    ],
  },
  {
    slug: 'hesss-law-topic',
    title: "Hess's Law",
    concepts: [
      { slug: 'hesss-law', title: "Hess's Law", difficulty: 'medium' },
      { slug: 'calculating-enthalpy-changes-using-hesss-law', title: "Calculating Enthalpy Changes Using Hess's Law", difficulty: 'hard' },
    ],
  },
];
