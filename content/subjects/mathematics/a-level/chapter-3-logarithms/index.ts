import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3Topics } from './topics';
import { chapter3QuickRevision } from './quickRevision';
import { chapter3Assessment } from './assessment';

export { chapter3Concepts } from './concepts';
export { chapter3Formulas } from './formulas';
export { chapter3QuickRevision } from './quickRevision';
export { chapter3Topics } from './topics';
export { chapter3Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/logarithms';

const chapter3ConceptMap: ConceptMapNode = {
  label: 'Logarithms',
  children: [
    {
      label: '3.1 Scientific Notation',
      children: [
        { label: 'Writing Numbers in Scientific Notation', href: `${BASE}/writing-numbers-in-scientific-notation` },
        { label: 'Multiplying and Dividing in Scientific Notation', href: `${BASE}/multiplying-and-dividing-in-scientific-notation` },
      ],
    },
    {
      label: '3.2 Definition of the Logarithm',
      children: [
        { label: 'Meaning of a Logarithm', href: `${BASE}/meaning-of-a-logarithm` },
        { label: 'Evaluating Logarithms', href: `${BASE}/evaluating-logarithms` },
      ],
    },
    {
      label: '3.3 Properties of Logarithm',
      children: [
        { label: 'Product Rule', href: `${BASE}/product-rule-of-logarithms` },
        { label: 'Quotient Rule', href: `${BASE}/quotient-rule-of-logarithms` },
        { label: 'Power Rule', href: `${BASE}/power-rule-of-logarithms` },
      ],
    },
    {
      label: '3.4 Change of Base',
      children: [{ label: 'Using the Change of Base Formula', href: `${BASE}/using-the-change-of-base-formula` }],
    },
    {
      label: '3.5 Common Logarithm and Natural Logarithm',
      children: [
        { label: 'The Common Logarithm', href: `${BASE}/common-logarithm` },
        { label: 'The Natural Logarithm', href: `${BASE}/natural-logarithm` },
        { label: 'Solving Logarithmic Equations', href: `${BASE}/solving-logarithmic-equations` },
      ],
    },
  ],
};

export const chapter3: Chapter = {
  slug: 'logarithms',
  number: 3,
  title: 'Logarithms',
  blurb:
    'Scientific notation, what a logarithm means and how it connects to exponents, the product, ' +
    'quotient, and power rules, changing base, and the common and natural logarithms.',
  status: 'available',
  topics: chapter3Topics,
  quickRevision: chapter3QuickRevision,
  assessment: chapter3Assessment,
  conceptMap: chapter3ConceptMap,
};
