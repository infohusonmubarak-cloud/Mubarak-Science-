import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9CTopics } from './topics';
import { chapter9CQuickRevision } from './quickRevision';
import { chapter9CAssessment } from './assessment';

export { chapter9CConcepts } from './concepts';
export { chapter9CFormulas } from './formulas';
export { chapter9CQuickRevision } from './quickRevision';
export { chapter9CTopics } from './topics';
export { chapter9CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/applications-of-derivatives';

const chapter9CConceptMap: ConceptMapNode = {
  label: 'Applications of Derivatives',
  children: [
    {
      label: '9.1 Derivatives of Various Function Types',
      children: [{ label: 'Reviewing Derivatives of Various Function Types', href: `${BASE}/reviewing-derivatives-of-various-function-types` }],
    },
    {
      label: '9.2 Critical Points',
      children: [{ label: 'Critical Points and Where They Occur', href: `${BASE}/critical-points-and-where-they-occur` }],
    },
    {
      label: '9.3 Maximum and Minimum',
      children: [
        { label: 'Increasing and Decreasing Intervals', href: `${BASE}/increasing-and-decreasing-intervals` },
        { label: 'Finding Absolute and Local Extrema', href: `${BASE}/finding-absolute-and-local-extrema` },
      ],
    },
    {
      label: '9.4 The Second Derivative Test',
      children: [
        { label: 'The Second Derivative and Concavity', href: `${BASE}/the-second-derivative-and-concavity` },
        { label: 'The Second Derivative Test for Extrema', href: `${BASE}/the-second-derivative-test-for-extrema` },
      ],
    },
    {
      label: '9.5 Approximation',
      children: [{ label: 'Linear Approximation Using Derivatives', href: `${BASE}/linear-approximation-using-derivatives` }],
    },
  ],
};

export const chapter9C: Chapter = {
  slug: 'applications-of-derivatives',
  number: 9,
  title: 'Applications of Derivatives',
  blurb: 'Critical points, maxima and minima, the second derivative test, and linear approximation.',
  status: 'available',
  topics: chapter9CTopics,
  quickRevision: chapter9CQuickRevision,
  assessment: chapter9CAssessment,
  conceptMap: chapter9CConceptMap,
};
