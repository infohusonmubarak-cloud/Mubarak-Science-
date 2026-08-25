import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4CEnergyTopics } from './topics';
import { chapter4CEnergyQuickRevision } from './quickRevision';
import { chapter4CEnergyAssessment } from './assessment';

export { chapter4CEnergyConcepts } from './concepts';
export { chapter4CEnergyFormulas } from './formulas';
export { chapter4CEnergyQuickRevision } from './quickRevision';
export { chapter4CEnergyTopics } from './topics';
export { chapter4CEnergyAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/sources-of-energy-and-environmental-impacts';

const chapter4CEnergyConceptMap: ConceptMapNode = {
  label: 'Sources of Energy and Environmental Impacts',
  children: [
    {
      label: '4.1 Energy Demand and Crisis',
      children: [{ label: 'Energy Demand and Crisis', href: `${BASE}/energy-demand-and-crisis` }],
    },
    {
      label: '4.2 Sources of Energy',
      children: [{ label: 'Sources of Energy — Overview', href: `${BASE}/sources-of-energy-overview` }],
    },
    {
      label: '4.3 Non-Renewable Sources of Energy',
      children: [{ label: 'Non-Renewable Sources of Energy', href: `${BASE}/non-renewable-energy-sources` }],
    },
    {
      label: '4.4 Renewable Sources of Energy',
      children: [{ label: 'Renewable Sources of Energy', href: `${BASE}/renewable-energy-sources` }],
    },
    {
      label: '4.5 Environmental Impacts and Consequences',
      children: [{ label: 'Environmental Impacts and Consequences', href: `${BASE}/environmental-impacts-of-energy-use` }],
    },
  ],
};

export const chapter4CEnergy: Chapter = {
  slug: 'sources-of-energy-and-environmental-impacts',
  number: 4,
  title: 'Sources of Energy and Environmental Impacts',
  blurb: 'The energy crisis, renewable and non-renewable energy sources, and the environmental consequences of how we generate energy.',
  status: 'available',
  topics: chapter4CEnergyTopics,
  quickRevision: chapter4CEnergyQuickRevision,
  assessment: chapter4CEnergyAssessment,
  conceptMap: chapter4CEnergyConceptMap,
};
