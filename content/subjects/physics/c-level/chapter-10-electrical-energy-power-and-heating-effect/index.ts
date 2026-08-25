import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10CElectricalTopics } from './topics';
import { chapter10CElectricalQuickRevision } from './quickRevision';
import { chapter10CElectricalAssessment } from './assessment';

export { chapter10CElectricalConcepts } from './concepts';
export { chapter10CElectricalFormulas } from './formulas';
export { chapter10CElectricalQuickRevision } from './quickRevision';
export { chapter10CElectricalTopics } from './topics';
export { chapter10CElectricalAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/electrical-energy-power-and-heating-effect';

const chapter10CElectricalConceptMap: ConceptMapNode = {
  label: 'Electrical Energy, Power and Heating Effect of Electric Current',
  children: [
    { label: '10.1 Electromotive Force and Electric Circuits', children: [{ label: 'Electromotive Force and Electric Circuits', href: `${BASE}/electromotive-force-and-circuits` }] },
    { label: '10.2 Batteries in Series and in Parallel', children: [{ label: 'Batteries in Series and in Parallel', href: `${BASE}/batteries-in-series-and-parallel` }] },
    { label: '10.3 Electrical Energy and Electrical Power', children: [{ label: 'Electrical Energy and Electrical Power', href: `${BASE}/electrical-energy-and-power` }] },
    { label: "10.4 Joule's Law of Electricity and Heat", children: [{ label: "Joule's Law of Heating", href: `${BASE}/joules-law-of-heating` }] },
    { label: '10.5 Some Applications of the Heating Effect of Current', children: [{ label: 'Applications of the Heating Effect of Current', href: `${BASE}/applications-of-heating-effect` }] },
  ],
};

export const chapter10CElectrical: Chapter = {
  slug: 'electrical-energy-power-and-heating-effect',
  number: 10,
  title: 'Electrical Energy, Power and Heating Effect of Electric Current',
  blurb: "EMF and circuits, batteries in series and parallel, electrical power, and Joule's law of heating.",
  status: 'available',
  topics: chapter10CElectricalTopics,
  quickRevision: chapter10CElectricalQuickRevision,
  assessment: chapter10CElectricalAssessment,
  conceptMap: chapter10CElectricalConceptMap,
};
