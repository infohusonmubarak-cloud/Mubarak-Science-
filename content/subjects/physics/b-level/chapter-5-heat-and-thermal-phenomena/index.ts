import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5HeatTopics } from './topics';
import { chapter5HeatQuickRevision } from './quickRevision';
import { chapter5HeatAssessment } from './assessment';

export { chapter5HeatConcepts } from './concepts';
export { chapter5HeatFormulas } from './formulas';
export { chapter5HeatQuickRevision } from './quickRevision';
export { chapter5HeatTopics } from './topics';
export { chapter5HeatAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/heat-and-thermal-phenomena';

const chapter5HeatConceptMap: ConceptMapNode = {
  label: 'Heat and Thermal Phenomena',
  children: [
    {
      label: 'Units of Heat and Internal Energy',
      children: [
        { label: 'Units of Heat', href: `${BASE}/units-of-heat` },
        { label: 'Heat and Internal Energy', href: `${BASE}/heat-and-internal-energy` },
      ],
    },
    {
      label: 'Thermal and Specific Heat Capacity',
      children: [
        { label: 'Thermal Capacity', href: `${BASE}/thermal-capacity` },
        { label: 'Specific Heat Capacity', href: `${BASE}/specific-heat-capacity` },
        { label: 'Law of Heat Exchange', href: `${BASE}/law-of-heat-exchange` },
      ],
    },
    {
      label: 'Change of State and Latent Heat',
      children: [
        { label: 'Change of State and Latent Heat', href: `${BASE}/change-of-state-and-latent-heat` },
        { label: 'Vaporization', href: `${BASE}/vaporization-and-specific-latent-heat` },
        { label: 'Fusion', href: `${BASE}/fusion-and-specific-latent-heat` },
        { label: 'Pressure Dependence of Melting/Boiling Point', href: `${BASE}/pressure-dependence-of-melting-and-boiling-point` },
      ],
    },
  ],
};

export const chapter5Heat: Chapter = {
  slug: 'heat-and-thermal-phenomena',
  number: 5,
  title: 'Heat and Thermal Phenomena',
  blurb: 'Units of heat, internal energy, thermal and specific heat capacity, the law of heat exchange, and change of state with latent heat.',
  status: 'available',
  topics: chapter5HeatTopics,
  quickRevision: chapter5HeatQuickRevision,
  assessment: chapter5HeatAssessment,
  conceptMap: chapter5HeatConceptMap,
};
