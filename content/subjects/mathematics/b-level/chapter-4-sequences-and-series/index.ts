import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4BTopics } from './topics';
import { chapter4BQuickRevision } from './quickRevision';
import { chapter4BAssessment } from './assessment';

export { chapter4BConcepts } from './concepts';
export { chapter4BFormulas } from './formulas';
export { chapter4BQuickRevision } from './quickRevision';
export { chapter4BTopics } from './topics';
export { chapter4BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/sequences-and-series';

const chapter4BConceptMap: ConceptMapNode = {
  label: 'Sequences and Series',
  children: [
    { label: '4.1 Introduction', children: [{ label: 'Introduction to Sequences and Series', href: `${BASE}/introduction-to-sequences-and-series` }] },
    { label: '4.2 Arithmetic Progression', children: [{ label: 'Arithmetic Progression (A.P.)', href: `${BASE}/arithmetic-progressions` }] },
    { label: '4.3 Arithmetic Series', children: [{ label: 'Arithmetic Series', href: `${BASE}/arithmetic-series` }] },
    { label: '4.4 Geometric Progression', children: [{ label: 'Geometric Progression (G.P.)', href: `${BASE}/geometric-progressions` }] },
    { label: '4.5 Geometric Series', children: [{ label: 'Geometric Series', href: `${BASE}/geometric-series` }] },
    { label: '4.6 Infinite Geometric Series', children: [{ label: 'Infinite Geometric Series', href: `${BASE}/infinite-geometric-series` }] },
  ],
};

export const chapter4B: Chapter = {
  slug: 'sequences-and-series',
  number: 4,
  title: 'Sequences and Series',
  blurb:
    'Sequences versus series, arithmetic progressions and series, geometric progressions and ' +
    'series, and the surprising finite sum of an infinite geometric series.',
  status: 'available',
  topics: chapter4BTopics,
  quickRevision: chapter4BQuickRevision,
  assessment: chapter4BAssessment,
  conceptMap: chapter4BConceptMap,
};
