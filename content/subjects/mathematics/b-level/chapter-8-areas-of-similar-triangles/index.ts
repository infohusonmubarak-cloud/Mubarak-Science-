import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8BTopics } from './topics';
import { chapter8BQuickRevision } from './quickRevision';
import { chapter8BAssessment } from './assessment';

export { chapter8BConcepts } from './concepts';
export { chapter8BFormulas } from './formulas';
export { chapter8BQuickRevision } from './quickRevision';
export { chapter8BTopics } from './topics';
export { chapter8BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/areas-of-similar-triangles';

const chapter8BConceptMap: ConceptMapNode = {
  label: 'Areas of Similar Triangles',
  children: [
    {
      label: '8.1 Areas of Similar Triangles',
      children: [
        { label: 'The Area Ratio Theorem', href: `${BASE}/the-area-ratio-theorem-for-similar-triangles` },
        { label: 'Applying the Area Ratio Theorem', href: `${BASE}/applying-the-area-ratio-theorem` },
        { label: 'Perimeter and Area Ratios Together', href: `${BASE}/perimeter-and-area-ratios-together` },
      ],
    },
  ],
};

export const chapter8B: Chapter = {
  slug: 'areas-of-similar-triangles',
  number: 8,
  title: 'Areas of Similar Triangles',
  blurb:
    'How the area of similar triangles scales with the square of the side ratio, and how that ' +
    'contrasts with the (linear) scaling of perimeter.',
  status: 'available',
  topics: chapter8BTopics,
  quickRevision: chapter8BQuickRevision,
  assessment: chapter8BAssessment,
  conceptMap: chapter8BConceptMap,
};
