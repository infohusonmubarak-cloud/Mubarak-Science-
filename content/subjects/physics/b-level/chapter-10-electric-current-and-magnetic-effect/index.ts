import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10CurrentTopics } from './topics';
import { chapter10CurrentQuickRevision } from './quickRevision';
import { chapter10CurrentAssessment } from './assessment';

export { chapter10CurrentConcepts } from './concepts';
export { chapter10CurrentFormulas } from './formulas';
export { chapter10CurrentQuickRevision } from './quickRevision';
export { chapter10CurrentTopics } from './topics';
export { chapter10CurrentAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/electric-current-and-magnetic-effect';

const chapter10CurrentConceptMap: ConceptMapNode = {
  label: 'Electric Current & Magnetic Effect',
  children: [
    {
      label: 'Current and Effects of Current',
      children: [{ label: 'Current and Effects of Current', href: `${BASE}/current-and-effects-of-current` }],
    },
    {
      label: "Ohm's Law, Resistance and Resistors",
      children: [
        { label: "Ohm's Law and Resistance", href: `${BASE}/ohms-law-and-resistance` },
        { label: 'Resistors', href: `${BASE}/resistors-b-level` },
        { label: 'Resistors in Series', href: `${BASE}/resistors-in-series-b-level` },
        { label: 'Resistors in Parallel', href: `${BASE}/resistors-in-parallel-b-level` },
      ],
    },
    {
      label: 'Magnetic Effect and Electromagnets',
      children: [
        { label: 'Magnetic Field Due to Current', href: `${BASE}/magnetic-field-due-to-current` },
        { label: 'Electromagnets', href: `${BASE}/electromagnets` },
        { label: 'Ammeter and Voltmeter', href: `${BASE}/ammeter-and-voltmeter` },
      ],
    },
  ],
};

export const chapter10Current: Chapter = {
  slug: 'electric-current-and-magnetic-effect',
  number: 10,
  title: 'Electric Current & Magnetic Effect',
  blurb: "Current and its effects, Ohm's law, resistors and their combinations, the magnetic field due to a current, electromagnets, and meters.",
  status: 'available',
  topics: chapter10CurrentTopics,
  quickRevision: chapter10CurrentQuickRevision,
  assessment: chapter10CurrentAssessment,
  conceptMap: chapter10CurrentConceptMap,
};
