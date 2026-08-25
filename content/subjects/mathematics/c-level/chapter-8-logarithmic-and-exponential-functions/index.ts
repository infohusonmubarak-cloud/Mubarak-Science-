import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8CTopics } from './topics';
import { chapter8CQuickRevision } from './quickRevision';
import { chapter8CAssessment } from './assessment';

export { chapter8CConcepts } from './concepts';
export { chapter8CFormulas } from './formulas';
export { chapter8CQuickRevision } from './quickRevision';
export { chapter8CTopics } from './topics';
export { chapter8CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/logarithmic-and-exponential-functions';

const chapter8CConceptMap: ConceptMapNode = {
  label: 'Logarithmic and Exponential Functions',
  children: [
    {
      label: '8.1 Graphs of Exponential Functions',
      children: [{ label: 'The Graph of an Exponential Function', href: `${BASE}/the-graph-of-an-exponential-function` }],
    },
    {
      label: '8.2 Graphs of Logarithmic Functions',
      children: [{ label: 'The Graph of a Logarithmic Function', href: `${BASE}/the-graph-of-a-logarithmic-function` }],
    },
    {
      label: '8.3 Transformations',
      children: [{ label: 'Transformations of Exponential and Logarithmic Graphs', href: `${BASE}/transformations-of-exponential-and-logarithmic-graphs` }],
    },
    {
      label: '8.4 Differentiation of Exponential Functions',
      children: [
        { label: 'The Derivative of eˣ', href: `${BASE}/the-derivative-of-e-to-the-x` },
        { label: 'The Derivative of General Exponential Functions', href: `${BASE}/the-derivative-of-general-exponential-functions` },
      ],
    },
    {
      label: '8.5 Differentiation of Logarithmic Functions',
      children: [
        { label: 'The Derivative of the Natural Logarithm', href: `${BASE}/the-derivative-of-the-natural-logarithm` },
        { label: 'The Derivative of General Logarithmic Functions', href: `${BASE}/the-derivative-of-general-logarithmic-functions` },
      ],
    },
  ],
};

export const chapter8C: Chapter = {
  slug: 'logarithmic-and-exponential-functions',
  number: 8,
  title: 'Logarithmic and Exponential Functions',
  blurb: 'Graphs of logarithmic and exponential functions, their transformations, and their derivatives.',
  status: 'available',
  topics: chapter8CTopics,
  quickRevision: chapter8CQuickRevision,
  assessment: chapter8CAssessment,
  conceptMap: chapter8CConceptMap,
};
