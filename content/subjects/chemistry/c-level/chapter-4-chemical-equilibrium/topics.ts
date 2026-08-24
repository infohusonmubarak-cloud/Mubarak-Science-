import type { Topic } from '@/types/content';

export const chapter4EquilibriumTopics: Topic[] = [
  {
    slug: 'dynamic-equilibrium-topic',
    title: 'State of Dynamic Equilibrium',
    concepts: [
      { slug: 'reversible-reactions', title: 'Reversible Reactions', difficulty: 'easy' },
      { slug: 'dynamic-equilibrium', title: 'Dynamic Equilibrium', difficulty: 'medium' },
    ],
  },
  {
    slug: 'le-chateliers-principle-topic',
    title: "Le Chatelier's Principle and Factors Affecting the Chemical Equilibrium",
    concepts: [
      { slug: 'le-chateliers-principle', title: "Le Chatelier's Principle", difficulty: 'medium' },
      { slug: 'effect-of-concentration-on-equilibrium', title: 'Effect of Concentration on Equilibrium', difficulty: 'medium' },
      { slug: 'effect-of-pressure-and-temperature-on-equilibrium', title: 'Effect of Pressure and Temperature on Equilibrium', difficulty: 'hard' },
    ],
  },
  {
    slug: 'equilibrium-constants-topic',
    title: 'Equilibrium Constants',
    concepts: [
      { slug: 'the-equilibrium-constant-kc', title: 'The Equilibrium Constant, Kc', difficulty: 'medium' },
      { slug: 'interpreting-the-size-of-kc', title: 'Interpreting the Size of Kc', difficulty: 'medium' },
    ],
  },
];
