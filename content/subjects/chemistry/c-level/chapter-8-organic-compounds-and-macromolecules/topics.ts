import type { Topic } from '@/types/content';

export const chapter8OrganicTopics: Topic[] = [
  {
    slug: 'organic-compounds-topic',
    title: 'Organic Compounds',
    concepts: [
      { slug: 'what-are-organic-compounds', title: 'What Are Organic Compounds', difficulty: 'easy' },
      { slug: 'hydrocarbons-and-homologous-series', title: 'Hydrocarbons and Homologous Series', difficulty: 'medium' },
    ],
  },
  {
    slug: 'functional-groups-topic',
    title: 'Determining the Functional Groups in Organic Compounds',
    concepts: [
      { slug: 'common-functional-groups', title: 'Common Functional Groups', difficulty: 'medium' },
      { slug: 'tests-for-functional-groups', title: 'Tests for Functional Groups', difficulty: 'medium' },
    ],
  },
  {
    slug: 'macromolecules-topic',
    title: 'Macromolecules',
    concepts: [
      { slug: 'polymers-and-monomers', title: 'Polymers and Monomers', difficulty: 'medium' },
      { slug: 'natural-and-synthetic-macromolecules', title: 'Natural and Synthetic Macromolecules', difficulty: 'medium' },
    ],
  },
];
