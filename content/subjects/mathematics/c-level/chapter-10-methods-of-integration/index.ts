import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10CTopics } from './topics';
import { chapter10CQuickRevision } from './quickRevision';
import { chapter10CAssessment } from './assessment';

export { chapter10CConcepts } from './concepts';
export { chapter10CFormulas } from './formulas';
export { chapter10CQuickRevision } from './quickRevision';
export { chapter10CTopics } from './topics';
export { chapter10CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/methods-of-integration';

const chapter10CConceptMap: ConceptMapNode = {
  label: 'Methods of Integration',
  children: [
    {
      label: '10.1 Basic Integration',
      children: [
        { label: 'Antiderivatives and Basic Integration Rules', href: `${BASE}/antiderivatives-and-basic-integration-rules` },
        { label: 'Integrating Exponential and Trigonometric Functions', href: `${BASE}/integrating-exponential-and-trigonometric-functions` },
      ],
    },
    {
      label: '10.2 The Substitution Method',
      children: [{ label: 'Integration by Substitution', href: `${BASE}/integration-by-substitution` }],
    },
    {
      label: '10.3 Integration by Parts',
      children: [{ label: 'Integration by Parts', href: `${BASE}/integration-by-parts` }],
    },
    {
      label: '10.4 The Partial Fraction Method',
      children: [
        { label: 'Setting Up a Partial Fraction Decomposition', href: `${BASE}/setting-up-a-partial-fraction-decomposition` },
        { label: 'Integrating Using Partial Fractions', href: `${BASE}/integrating-using-partial-fractions` },
      ],
    },
  ],
};

export const chapter10C: Chapter = {
  slug: 'methods-of-integration',
  number: 10,
  title: 'Methods of Integration',
  blurb: 'Basic integration, the substitution method, integration by parts, and the partial fraction method.',
  status: 'available',
  topics: chapter10CTopics,
  quickRevision: chapter10CQuickRevision,
  assessment: chapter10CAssessment,
  conceptMap: chapter10CConceptMap,
};
