import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7BTopics } from './topics';
import { chapter7BQuickRevision } from './quickRevision';
import { chapter7BAssessment } from './assessment';

export { chapter7BConcepts } from './concepts';
export { chapter7BFormulas } from './formulas';
export { chapter7BQuickRevision } from './quickRevision';
export { chapter7BTopics } from './topics';
export { chapter7BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/circles-advanced';

const chapter7BConceptMap: ConceptMapNode = {
  label: 'Circles',
  children: [
    {
      label: '7.1 Properties of Tangents',
      children: [
        { label: 'Tangent-Radius Perpendicularity', href: `${BASE}/the-tangent-radius-perpendicularity-theorem` },
        { label: 'The Two-Tangent Theorem', href: `${BASE}/the-two-tangent-theorem` },
        { label: 'The Tangent-Chord Angle Theorem', href: `${BASE}/the-tangent-chord-angle-theorem` },
      ],
    },
    {
      label: '7.2 Concyclic Points',
      children: [
        { label: 'Meaning and Conditions', href: `${BASE}/meaning-and-conditions-for-concyclic-points` },
        { label: 'Proving Four Points Are Concyclic', href: `${BASE}/proving-four-points-are-concyclic` },
      ],
    },
  ],
};

export const chapter7B: Chapter = {
  slug: 'circles-advanced',
  number: 7,
  title: 'Circles',
  blurb:
    'Tangent-radius perpendicularity, the two-tangent theorem, the tangent-chord (alternate ' +
    'segment) theorem, and proving four points are concyclic.',
  status: 'available',
  topics: chapter7BTopics,
  quickRevision: chapter7BQuickRevision,
  assessment: chapter7BAssessment,
  conceptMap: chapter7BConceptMap,
};
