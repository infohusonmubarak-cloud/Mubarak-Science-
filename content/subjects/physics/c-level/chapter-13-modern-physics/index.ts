import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter13CModernTopics } from './topics';
import { chapter13CModernQuickRevision } from './quickRevision';
import { chapter13CModernAssessment } from './assessment';

export { chapter13CModernConcepts } from './concepts';
export { chapter13CModernFormulas } from './formulas';
export { chapter13CModernQuickRevision } from './quickRevision';
export { chapter13CModernTopics } from './topics';
export { chapter13CModernAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/modern-physics';

const chapter13CModernConceptMap: ConceptMapNode = {
  label: 'Modern Physics',
  children: [
    { label: '13.1 Radioactivity and Uses of Radioactivity', children: [{ label: 'Radioactivity and Its Uses', href: `${BASE}/radioactivity-and-its-uses` }] },
    { label: '13.2 Nuclear Energy and Its Environmental Impact', children: [{ label: 'Nuclear Energy and Its Environmental Impact', href: `${BASE}/nuclear-energy-and-environmental-impact` }] },
    { label: '13.3 Wave-Particle Dualism', children: [{ label: 'Wave-Particle Dualism', href: `${BASE}/wave-particle-duality` }] },
    { label: '13.4 Principle of Special Theory of Relativity', children: [{ label: 'Principle of Special Theory of Relativity', href: `${BASE}/special-theory-of-relativity` }] },
  ],
};

export const chapter13CModern: Chapter = {
  slug: 'modern-physics',
  number: 13,
  title: 'Modern Physics',
  blurb: 'Radioactivity and its uses, nuclear energy and its environmental impact, wave-particle dualism, and the principle of special relativity.',
  status: 'available',
  topics: chapter13CModernTopics,
  quickRevision: chapter13CModernQuickRevision,
  assessment: chapter13CModernAssessment,
  conceptMap: chapter13CModernConceptMap,
};
