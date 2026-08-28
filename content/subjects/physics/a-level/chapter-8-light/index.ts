import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8ALightTopics } from './topics';
import { chapter8ALightQuickRevision } from './quickRevision';
import { chapter8ALightAssessment } from './assessment';

export { chapter8ALightConcepts } from './concepts';
export { chapter8ALightFormulas } from './formulas';
export { chapter8ALightQuickRevision } from './quickRevision';
export { chapter8ALightTopics } from './topics';
export { chapter8ALightAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/light';

const chapter8ALightConceptMap: ConceptMapNode = {
  label: 'Light',
  children: [
    { label: '8.1 Sources of Light', children: [{ label: 'Sources of Light', href: `${BASE}/sources-of-light-a-level` }] },
    { label: '8.2 Reflection of Light', children: [{ label: 'Reflection of Light', href: `${BASE}/reflection-of-light-a-level` }] },
    { label: '8.3 Image Formation in a Plane Mirror', children: [{ label: 'Image Formation in a Plane Mirror', href: `${BASE}/plane-mirror-images-a-level` }] },
    {
      label: '8.4 Reflection at Curved Mirror',
      children: [
        { label: 'Curved Mirrors', href: `${BASE}/curved-mirrors-a-level` },
        { label: 'The Mirror Formula and Magnification', href: `${BASE}/mirror-formula-a-level` },
      ],
    },
  ],
};

export const chapter8ALight: Chapter = {
  slug: 'light',
  number: 8,
  title: 'Light',
  blurb: 'Sources of light, reflection, image formation in plane and curved mirrors, and the mirror formula.',
  status: 'available',
  topics: chapter8ALightTopics,
  quickRevision: chapter8ALightQuickRevision,
  assessment: chapter8ALightAssessment,
  conceptMap: chapter8ALightConceptMap,
};
