import type { Topic } from '@/types/content';

// Navigation outline for Chapter 4, matching the textbook's section
// list: energy demand and crisis; sources of energy; non-renewable
// sources; renewable sources; environmental impacts and consequences.
export const chapter4CEnergyTopics: Topic[] = [
  {
    slug: 'energy-demand-and-crisis-topic',
    title: '4.1 Energy Demand and Crisis',
    concepts: [{ slug: 'energy-demand-and-crisis', title: 'Energy Demand and Crisis', difficulty: 'medium' }],
  },
  {
    slug: 'sources-of-energy-topic',
    title: '4.2 Sources of Energy',
    concepts: [{ slug: 'sources-of-energy-overview', title: 'Sources of Energy — Overview', difficulty: 'easy' }],
  },
  {
    slug: 'non-renewable-sources-topic',
    title: '4.3 Non-Renewable Sources of Energy',
    concepts: [{ slug: 'non-renewable-energy-sources', title: 'Non-Renewable Sources of Energy', difficulty: 'medium' }],
  },
  {
    slug: 'renewable-sources-topic',
    title: '4.4 Renewable Sources of Energy',
    concepts: [{ slug: 'renewable-energy-sources', title: 'Renewable Sources of Energy', difficulty: 'medium' }],
  },
  {
    slug: 'environmental-impacts-topic',
    title: '4.5 Environmental Impacts and Consequences',
    concepts: [{ slug: 'environmental-impacts-of-energy-use', title: 'Environmental Impacts and Consequences', difficulty: 'medium' }],
  },
];
