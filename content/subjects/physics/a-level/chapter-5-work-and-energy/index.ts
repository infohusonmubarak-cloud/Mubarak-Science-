import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5AWorkEnergyTopics } from './topics';
import { chapter5AWorkEnergyQuickRevision } from './quickRevision';
import { chapter5AWorkEnergyAssessment } from './assessment';

export { chapter5AWorkEnergyConcepts } from './concepts';
export { chapter5AWorkEnergyFormulas } from './formulas';
export { chapter5AWorkEnergyQuickRevision } from './quickRevision';
export { chapter5AWorkEnergyTopics } from './topics';
export { chapter5AWorkEnergyAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/work-and-energy';

const chapter5AWorkEnergyConceptMap: ConceptMapNode = {
  label: 'Work and Energy',
  children: [
    {
      label: '5.1 Work',
      children: [
        { label: 'Work Done', href: `${BASE}/work-done-a-level` },
        { label: 'Power', href: `${BASE}/power-a-level` },
      ],
    },
    {
      label: '5.2 Energy',
      children: [
        { label: 'Kinetic Energy', href: `${BASE}/kinetic-energy-a-level` },
        { label: 'Gravitational Potential Energy', href: `${BASE}/gravitational-potential-energy-a-level` },
        { label: 'Elastic Potential Energy', href: `${BASE}/elastic-potential-energy-a-level` },
        { label: 'Conservation of Energy', href: `${BASE}/conservation-of-energy-a-level` },
      ],
    },
  ],
};

export const chapter5AWorkEnergy: Chapter = {
  slug: 'work-and-energy',
  number: 5,
  title: 'Work and Energy',
  blurb: 'Work and power, kinetic, gravitational and elastic potential energy, and the law of conservation of energy.',
  status: 'available',
  topics: chapter5AWorkEnergyTopics,
  quickRevision: chapter5AWorkEnergyQuickRevision,
  assessment: chapter5AWorkEnergyAssessment,
  conceptMap: chapter5AWorkEnergyConceptMap,
};
