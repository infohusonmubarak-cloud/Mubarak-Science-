import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10AMagnetismTopics } from './topics';
import { chapter10AMagnetismQuickRevision } from './quickRevision';
import { chapter10AMagnetismAssessment } from './assessment';

export { chapter10AMagnetismConcepts } from './concepts';
export { chapter10AMagnetismFormulas } from './formulas';
export { chapter10AMagnetismQuickRevision } from './quickRevision';
export { chapter10AMagnetismTopics } from './topics';
export { chapter10AMagnetismAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/magnetism';

const chapter10AMagnetismConceptMap: ConceptMapNode = {
  label: 'Magnetism',
  children: [
    { label: '10.1 Magnets and Magnetic Materials', children: [{ label: 'Magnets and Magnetic Materials', href: `${BASE}/magnets-and-magnetic-materials-a-level` }] },
    { label: '10.2 Theory of Magnetism', children: [{ label: 'Theory of Magnetism', href: `${BASE}/theory-of-magnetism-a-level` }] },
    { label: '10.3 Magnetic Fields', children: [{ label: 'Magnetic Fields', href: `${BASE}/magnetic-fields-a-level` }] },
    { label: '10.4 Magnetisation and Induced Magnetism', children: [{ label: 'Magnetisation and Induced Magnetism', href: `${BASE}/magnetisation-and-induced-magnetism-a-level` }] },
    { label: '10.5 Magnetic Properties of Iron and Steel', children: [{ label: 'Magnetic Properties of Iron and Steel', href: `${BASE}/magnetic-properties-iron-steel-a-level` }] },
  ],
};

export const chapter10AMagnetism: Chapter = {
  slug: 'magnetism',
  number: 10,
  title: 'Magnetism',
  blurb: 'Magnets and magnetic materials, domain theory, magnetic fields, magnetisation and induced magnetism, and the magnetic properties of iron and steel.',
  status: 'available',
  topics: chapter10AMagnetismTopics,
  quickRevision: chapter10AMagnetismQuickRevision,
  assessment: chapter10AMagnetismAssessment,
  conceptMap: chapter10AMagnetismConceptMap,
};
