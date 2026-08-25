import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2CTopics } from './topics';
import { chapter2CQuickRevision } from './quickRevision';
import { chapter2CAssessment } from './assessment';

export { chapter2CConcepts } from './concepts';
export { chapter2CFormulas } from './formulas';
export { chapter2CQuickRevision } from './quickRevision';
export { chapter2CTopics } from './topics';
export { chapter2CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/mathematical-induction';

const chapter2CConceptMap: ConceptMapNode = {
  label: 'Mathematical Induction',
  children: [
    {
      label: '2.1 The Principle of Mathematical Induction',
      children: [{ label: 'The Principle of Mathematical Induction', href: `${BASE}/the-principle-of-mathematical-induction` }],
    },
    {
      label: '2.2 Proving Summation Formulas',
      children: [{ label: 'Proving Summation Formulas by Induction', href: `${BASE}/proving-summation-formulas-by-induction` }],
    },
    {
      label: '2.3 Proving Divisibility Statements',
      children: [{ label: 'Proving Divisibility Statements by Induction', href: `${BASE}/proving-divisibility-statements-by-induction` }],
    },
    {
      label: '2.4 Proving Inequalities',
      children: [{ label: 'Proving Inequalities by Induction', href: `${BASE}/proving-inequalities-by-induction` }],
    },
  ],
};

export const chapter2C: Chapter = {
  slug: 'mathematical-induction',
  number: 2,
  title: 'Mathematical Induction',
  blurb: 'The principle of mathematical induction, and using it to prove summation, divisibility, and inequality statements.',
  status: 'available',
  topics: chapter2CTopics,
  quickRevision: chapter2CQuickRevision,
  assessment: chapter2CAssessment,
  conceptMap: chapter2CConceptMap,
};
