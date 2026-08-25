import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter11CTopics } from './topics';
import { chapter11CQuickRevision } from './quickRevision';
import { chapter11CAssessment } from './assessment';

export { chapter11CConcepts } from './concepts';
export { chapter11CFormulas } from './formulas';
export { chapter11CQuickRevision } from './quickRevision';
export { chapter11CTopics } from './topics';
export { chapter11CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/applications-of-integration';

const chapter11CConceptMap: ConceptMapNode = {
  label: 'Applications of Integration',
  children: [
    {
      label: '11.1 The Definite Integral and Area Under a Curve',
      children: [
        { label: 'The Definite Integral and the Fundamental Theorem of Calculus', href: `${BASE}/the-definite-integral-and-the-fundamental-theorem-of-calculus` },
        { label: 'Area Under a Curve', href: `${BASE}/area-under-a-curve` },
      ],
    },
    {
      label: '11.2 Area Between Two Curves',
      children: [{ label: 'Area Between Two Curves', href: `${BASE}/area-between-two-curves` }],
    },
    {
      label: '11.3 Volume of Revolution: The Disk Method',
      children: [{ label: 'Volume of Revolution: The Disk Method', href: `${BASE}/volume-of-revolution-the-disk-method` }],
    },
    {
      label: '11.4 Volume of Revolution: The Washer Method',
      children: [{ label: 'Volume of Revolution: The Washer Method', href: `${BASE}/volume-of-revolution-the-washer-method` }],
    },
  ],
};

export const chapter11C: Chapter = {
  slug: 'applications-of-integration',
  number: 11,
  title: 'Applications of Integration',
  blurb: 'The definite integral as area under a curve, area between two curves, and volumes of revolution.',
  status: 'available',
  topics: chapter11CTopics,
  quickRevision: chapter11CQuickRevision,
  assessment: chapter11CAssessment,
  conceptMap: chapter11CConceptMap,
};
