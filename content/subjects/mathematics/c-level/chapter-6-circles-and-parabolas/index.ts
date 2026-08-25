import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6CTopics } from './topics';
import { chapter6CQuickRevision } from './quickRevision';
import { chapter6CAssessment } from './assessment';

export { chapter6CConcepts } from './concepts';
export { chapter6CFormulas } from './formulas';
export { chapter6CQuickRevision } from './quickRevision';
export { chapter6CTopics } from './topics';
export { chapter6CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/circles-and-parabolas';

const chapter6CConceptMap: ConceptMapNode = {
  label: 'Circles and Parabolas',
  children: [
    {
      label: '6.1 Conic Sections: An Overview',
      children: [{ label: 'What Is a Conic Section?', href: `${BASE}/what-is-a-conic-section` }],
    },
    {
      label: '6.2 The Circle',
      children: [
        { label: 'The Standard Equation of a Circle', href: `${BASE}/the-standard-equation-of-a-circle` },
        { label: 'The General Equation of a Circle', href: `${BASE}/the-general-equation-of-a-circle` },
      ],
    },
    {
      label: '6.3 The Parabola',
      children: [
        { label: 'The Focus-Directrix Definition', href: `${BASE}/the-focus-directrix-definition-of-a-parabola` },
        { label: 'The Standard Equation of a Parabola', href: `${BASE}/the-standard-equation-of-a-parabola` },
      ],
    },
    {
      label: '6.4 The General Equation of a Parabola',
      children: [{ label: 'The General Equation of a Translated Parabola', href: `${BASE}/the-general-equation-of-a-translated-parabola` }],
    },
    {
      label: '6.5 Translation and Rotation of Axes',
      children: [
        { label: 'Translation of Axes', href: `${BASE}/translation-of-axes` },
        { label: 'Rotation of Axes', href: `${BASE}/rotation-of-axes` },
      ],
    },
  ],
};

export const chapter6C: Chapter = {
  slug: 'circles-and-parabolas',
  number: 6,
  title: 'Circles and Parabolas',
  blurb: 'Conic sections, the general equations of circles and parabolas, and translation and rotation of axes.',
  status: 'available',
  topics: chapter6CTopics,
  quickRevision: chapter6CQuickRevision,
  assessment: chapter6CAssessment,
  conceptMap: chapter6CConceptMap,
};
