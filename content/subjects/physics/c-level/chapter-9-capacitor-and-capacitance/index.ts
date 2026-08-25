import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9CCapacitorTopics } from './topics';
import { chapter9CCapacitorQuickRevision } from './quickRevision';
import { chapter9CCapacitorAssessment } from './assessment';

export { chapter9CCapacitorConcepts } from './concepts';
export { chapter9CCapacitorFormulas } from './formulas';
export { chapter9CCapacitorQuickRevision } from './quickRevision';
export { chapter9CCapacitorTopics } from './topics';
export { chapter9CCapacitorAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/capacitor-and-capacitance';

const chapter9CCapacitorConceptMap: ConceptMapNode = {
  label: 'Capacitor and Capacitance',
  children: [
    { label: '9.1 Capacitors', children: [{ label: 'Capacitors', href: `${BASE}/capacitors` }] },
    { label: '9.2 Capacitance of a Capacitor', children: [{ label: 'Capacitance of a Capacitor', href: `${BASE}/capacitance-of-a-capacitor` }] },
    { label: '9.3 Parallel-Plate Capacitor', children: [{ label: 'The Parallel-Plate Capacitor', href: `${BASE}/parallel-plate-capacitor` }] },
    { label: '9.4 Energy Stored in a Capacitor', children: [{ label: 'Energy Stored in a Capacitor', href: `${BASE}/energy-stored-in-a-capacitor` }] },
    { label: '9.5 Combination of Capacitors', children: [{ label: 'Combination of Capacitors', href: `${BASE}/capacitors-in-series-and-parallel` }] },
  ],
};

export const chapter9CCapacitor: Chapter = {
  slug: 'capacitor-and-capacitance',
  number: 9,
  title: 'Capacitor and Capacitance',
  blurb: 'What a capacitor is, the parallel-plate capacitor, the energy it stores, and combining capacitors in series and parallel.',
  status: 'available',
  topics: chapter9CCapacitorTopics,
  quickRevision: chapter9CCapacitorQuickRevision,
  assessment: chapter9CCapacitorAssessment,
  conceptMap: chapter9CCapacitorConceptMap,
};
