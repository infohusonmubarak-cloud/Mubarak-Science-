import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6AHeatTopics } from './topics';
import { chapter6AHeatQuickRevision } from './quickRevision';
import { chapter6AHeatAssessment } from './assessment';

export { chapter6AHeatConcepts } from './concepts';
export { chapter6AHeatFormulas } from './formulas';
export { chapter6AHeatQuickRevision } from './quickRevision';
export { chapter6AHeatTopics } from './topics';
export { chapter6AHeatAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/heat-and-temperature';

const chapter6AHeatConceptMap: ConceptMapNode = {
  label: 'Heat and Temperature',
  children: [
    {
      label: '6.1 Heat and Temperature',
      children: [
        { label: 'Heat and Temperature', href: `${BASE}/heat-and-temperature-a-level` },
        { label: 'Specific Heat Capacity', href: `${BASE}/specific-heat-capacity-a-level` },
      ],
    },
    { label: '6.2 Types of Thermometer', children: [{ label: 'Types of Thermometer', href: `${BASE}/types-of-thermometer-a-level` }] },
    { label: '6.3 Units of Temperature (Temperature Scales)', children: [{ label: 'Temperature Scales', href: `${BASE}/temperature-scales-a-level` }] },
    { label: '6.4 Thermal Expansion of Substances', children: [{ label: 'Thermal Expansion of Substances', href: `${BASE}/thermal-expansion-a-level` }] },
  ],
};

export const chapter6AHeat: Chapter = {
  slug: 'heat-and-temperature',
  number: 6,
  title: 'Heat and Temperature',
  blurb: 'The difference between heat and temperature, specific heat capacity, types of thermometer, temperature scales, and thermal expansion.',
  status: 'available',
  topics: chapter6AHeatTopics,
  quickRevision: chapter6AHeatQuickRevision,
  assessment: chapter6AHeatAssessment,
  conceptMap: chapter6AHeatConceptMap,
};
