import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter11BTopics } from './topics';
import { chapter11BQuickRevision } from './quickRevision';
import { chapter11BAssessment } from './assessment';

export { chapter11BConcepts } from './concepts';
export { chapter11BFormulas } from './formulas';
export { chapter11BQuickRevision } from './quickRevision';
export { chapter11BTopics } from './topics';
export { chapter11BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/method-of-differentiation';

const chapter11BConceptMap: ConceptMapNode = {
  label: 'Methods of Differentiation',
  children: [
    {
      label: '11.1 Limit of Functions',
      children: [
        { label: 'The Idea of a Limit', href: `${BASE}/the-idea-of-a-limit` },
        { label: 'Evaluating Limits by Substitution and Factoring', href: `${BASE}/evaluating-limits-by-direct-substitution-and-factoring` },
      ],
    },
    {
      label: '11.2 Derivatives',
      children: [
        { label: 'The Derivative as a Rate of Change', href: `${BASE}/the-derivative-as-a-rate-of-change` },
        { label: 'The Derivative as the Limit of the Difference Quotient', href: `${BASE}/the-derivative-as-the-limit-of-the-difference-quotient` },
      ],
    },
    {
      label: '11.3 Differentiation Rules',
      children: [
        { label: 'The Power Rule', href: `${BASE}/the-power-rule` },
        { label: 'The Sum and Difference Rules', href: `${BASE}/the-sum-and-difference-rules` },
        { label: 'The Product Rule', href: `${BASE}/the-product-rule` },
        { label: 'The Quotient Rule', href: `${BASE}/the-quotient-rule` },
        { label: 'The Chain Rule', href: `${BASE}/the-chain-rule` },
      ],
    },
    {
      label: '11.4 Implicit Differentiation',
      children: [
        { label: 'Implicit Differentiation', href: `${BASE}/implicit-differentiation` },
        { label: 'Applications of Implicit Differentiation', href: `${BASE}/applications-of-implicit-differentiation` },
      ],
    },
  ],
};

export const chapter11B: Chapter = {
  slug: 'method-of-differentiation',
  number: 11,
  title: 'Methods of Differentiation',
  blurb:
    'Limits, the derivative as a rate of change and as the limit of the difference quotient, the ' +
    'core differentiation rules (power, sum/difference, product, quotient, chain), and implicit differentiation.',
  status: 'available',
  topics: chapter11BTopics,
  quickRevision: chapter11BQuickRevision,
  assessment: chapter11BAssessment,
  conceptMap: chapter11BConceptMap,
};
