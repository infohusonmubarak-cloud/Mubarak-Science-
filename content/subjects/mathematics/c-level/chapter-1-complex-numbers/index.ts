import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1CTopics } from './topics';
import { chapter1CQuickRevision } from './quickRevision';
import { chapter1CAssessment } from './assessment';

export { chapter1CConcepts } from './concepts';
export { chapter1CFormulas } from './formulas';
export { chapter1CQuickRevision } from './quickRevision';
export { chapter1CTopics } from './topics';
export { chapter1CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/complex-numbers';

const chapter1CConceptMap: ConceptMapNode = {
  label: 'Complex Numbers',
  children: [
    {
      label: '1.1 The Need for a New Number System',
      children: [{ label: 'The Imaginary Unit and i²', href: `${BASE}/the-imaginary-unit-and-i-squared` }],
    },
    {
      label: '1.2 Complex Numbers and Their Operations',
      children: [
        { label: 'Standard Form', href: `${BASE}/complex-numbers-in-standard-form` },
        { label: 'Adding and Subtracting', href: `${BASE}/adding-and-subtracting-complex-numbers` },
        { label: 'Multiplying', href: `${BASE}/multiplying-complex-numbers` },
        { label: 'Dividing Using Conjugates', href: `${BASE}/dividing-complex-numbers-using-conjugates` },
      ],
    },
    {
      label: '1.3 The Complex Plane and Trigonometric Form',
      children: [
        { label: 'The Complex Plane and Modulus', href: `${BASE}/the-complex-plane-and-modulus` },
        { label: 'Trigonometric (Polar) Form', href: `${BASE}/the-trigonometric-form-of-a-complex-number` },
      ],
    },
    {
      label: "1.4 De Moivre's Theorem and Roots",
      children: [
        { label: "De Moivre's Theorem", href: `${BASE}/de-moivres-theorem` },
        { label: 'Finding nth Roots', href: `${BASE}/finding-nth-roots-of-a-complex-number` },
      ],
    },
  ],
};

export const chapter1C: Chapter = {
  slug: 'complex-numbers',
  number: 1,
  title: 'Complex Numbers',
  blurb: 'The new number system — complex numbers, their operations, trigonometric form, and roots.',
  status: 'available',
  topics: chapter1CTopics,
  quickRevision: chapter1CQuickRevision,
  assessment: chapter1CAssessment,
  conceptMap: chapter1CConceptMap,
};
