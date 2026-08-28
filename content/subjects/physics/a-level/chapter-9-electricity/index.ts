import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9AElectricityTopics } from './topics';
import { chapter9AElectricityQuickRevision } from './quickRevision';
import { chapter9AElectricityAssessment } from './assessment';

export { chapter9AElectricityConcepts } from './concepts';
export { chapter9AElectricityFormulas } from './formulas';
export { chapter9AElectricityQuickRevision } from './quickRevision';
export { chapter9AElectricityTopics } from './topics';
export { chapter9AElectricityAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/electricity';

const chapter9AElectricityConceptMap: ConceptMapNode = {
  label: 'Electricity',
  children: [
    {
      label: '9.1 Electric Charges and Electric Forces',
      children: [
        { label: 'Electric Charge', href: `${BASE}/electric-charge-a-level` },
        { label: "Coulomb's Law", href: `${BASE}/coulombs-law-a-level` },
      ],
    },
    { label: '9.2 Matter and Electricity', children: [{ label: 'Matter and Electricity', href: `${BASE}/matter-and-electricity-a-level` }] },
    { label: '9.3 Conductors, Insulators and Semiconductors', children: [{ label: 'Conductors, Insulators and Semiconductors', href: `${BASE}/conductors-insulators-semiconductors-a-level` }] },
    { label: '9.4 Electrification', children: [{ label: 'Electrification', href: `${BASE}/electrification-a-level` }] },
  ],
};

export const chapter9AElectricity: Chapter = {
  slug: 'electricity',
  number: 9,
  title: 'Electricity',
  blurb: "Electric charge, Coulomb's law, the atomic origin of electricity, conductors, insulators and semiconductors, and how objects become electrified.",
  status: 'available',
  topics: chapter9AElectricityTopics,
  quickRevision: chapter9AElectricityQuickRevision,
  assessment: chapter9AElectricityAssessment,
  conceptMap: chapter9AElectricityConceptMap,
};
