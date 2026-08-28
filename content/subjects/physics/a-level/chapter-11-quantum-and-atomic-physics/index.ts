import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter11AQuantumTopics } from './topics';
import { chapter11AQuantumQuickRevision } from './quickRevision';
import { chapter11AQuantumAssessment } from './assessment';

export { chapter11AQuantumConcepts } from './concepts';
export { chapter11AQuantumFormulas } from './formulas';
export { chapter11AQuantumQuickRevision } from './quickRevision';
export { chapter11AQuantumTopics } from './topics';
export { chapter11AQuantumAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/quantum-and-atomic-physics';

const chapter11AQuantumConceptMap: ConceptMapNode = {
  label: 'Quantum and Atomic Physics',
  children: [
    { label: '11.1 Thermionic Emission and Vacuum Diode', children: [{ label: 'Thermionic Emission and the Vacuum Diode', href: `${BASE}/thermionic-emission-vacuum-diode-a-level` }] },
    {
      label: '11.2 Blackbody Radiation and the Concept of Photon',
      children: [
        { label: 'Blackbody Radiation', href: `${BASE}/blackbody-radiation-a-level` },
        { label: 'The Photon', href: `${BASE}/photon-energy-a-level` },
      ],
    },
    { label: '11.3 Models of Atom', children: [{ label: 'Models of the Atom', href: `${BASE}/models-of-the-atom-a-level` }] },
    { label: '11.4 Atomic Structure', children: [{ label: 'Atomic Structure', href: `${BASE}/atomic-structure-a-level` }] },
    { label: '11.5 The Structure and Evolution of the Visible Universe', children: [{ label: 'The Structure and Evolution of the Visible Universe', href: `${BASE}/structure-evolution-universe-a-level` }] },
  ],
};

export const chapter11AQuantum: Chapter = {
  slug: 'quantum-and-atomic-physics',
  number: 11,
  title: 'Quantum and Atomic Physics',
  blurb: 'Thermionic emission and the vacuum diode, blackbody radiation and the photon, the historical models of the atom, atomic structure, and the structure and evolution of the visible universe.',
  status: 'available',
  topics: chapter11AQuantumTopics,
  quickRevision: chapter11AQuantumQuickRevision,
  assessment: chapter11AQuantumAssessment,
  conceptMap: chapter11AQuantumConceptMap,
};
