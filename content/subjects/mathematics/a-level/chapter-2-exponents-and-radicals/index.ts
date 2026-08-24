import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2Topics } from './topics';
import { chapter2QuickRevision } from './quickRevision';
import { chapter2Assessment } from './assessment';

export { chapter2Concepts } from './concepts';
export { chapter2Formulas } from './formulas';
export { chapter2QuickRevision } from './quickRevision';
export { chapter2Topics } from './topics';
export { chapter2Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/exponents-and-radicals';

const chapter2ConceptMap: ConceptMapNode = {
  label: 'Exponents and Radicals',
  children: [
    {
      label: '2.1 Exponents',
      children: [
        { label: 'Meaning of an Exponent', href: `${BASE}/meaning-of-an-exponent` },
        { label: 'Zero and Negative Exponents', href: `${BASE}/zero-and-negative-exponents` },
        { label: 'Product and Quotient Rules', href: `${BASE}/product-and-quotient-rules-of-exponents` },
        { label: 'Power of a Power, Power of a Product', href: `${BASE}/power-of-a-power-and-product-rules` },
        { label: 'Fractional Exponents', href: `${BASE}/fractional-exponents` },
      ],
    },
    {
      label: '2.2 Radicals',
      children: [
        { label: 'Meaning of a Radical', href: `${BASE}/meaning-of-a-radical` },
        { label: 'Radical Form and Exponent Form', href: `${BASE}/converting-between-radical-and-exponent-form` },
        { label: 'Simplifying Radicals', href: `${BASE}/simplifying-radicals` },
      ],
    },
    {
      label: '2.3 Operations with Radicals',
      children: [
        { label: 'Adding and Subtracting Radicals', href: `${BASE}/adding-and-subtracting-radicals` },
        { label: 'Multiplying Radicals', href: `${BASE}/multiplying-radicals` },
        { label: 'Dividing Radicals and Rationalizing Denominators', href: `${BASE}/dividing-radicals-and-rationalizing-denominators` },
      ],
    },
    {
      label: '2.4 Exponential Equations',
      children: [
        { label: 'Solving Exponential Equations with Equal Bases', href: `${BASE}/solving-exponential-equations-with-equal-bases` },
        { label: 'Exponential Growth and Decay', href: `${BASE}/exponential-growth-and-decay` },
      ],
    },
  ],
};

export const chapter2: Chapter = {
  slug: 'exponents-and-radicals',
  number: 2,
  title: 'Exponents and Radicals',
  blurb:
    'The laws that govern powers and roots, from zero and negative exponents to simplifying, ' +
    'combining, and rationalizing radicals, and solving exponential equations.',
  status: 'available',
  topics: chapter2Topics,
  quickRevision: chapter2QuickRevision,
  assessment: chapter2Assessment,
  conceptMap: chapter2ConceptMap,
};
