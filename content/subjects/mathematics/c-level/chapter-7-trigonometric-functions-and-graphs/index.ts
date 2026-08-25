import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7CTopics } from './topics';
import { chapter7CQuickRevision } from './quickRevision';
import { chapter7CAssessment } from './assessment';

export { chapter7CConcepts } from './concepts';
export { chapter7CFormulas } from './formulas';
export { chapter7CQuickRevision } from './quickRevision';
export { chapter7CTopics } from './topics';
export { chapter7CAssessment } from './assessment';

const BASE = '/subjects/mathematics/c-level/trigonometric-functions-and-graphs';

const chapter7CConceptMap: ConceptMapNode = {
  label: 'Trigonometric Functions and Their Graphs',
  children: [
    {
      label: '7.1 Graphs of Sine and Cosine',
      children: [
        { label: 'The Graph of Sine', href: `${BASE}/the-graph-of-sine` },
        { label: 'The Graph of Cosine', href: `${BASE}/the-graph-of-cosine` },
      ],
    },
    {
      label: '7.2 Graphs of Tangent and Others',
      children: [
        { label: 'The Graph of Tangent', href: `${BASE}/the-graph-of-tangent` },
        { label: 'Cosecant, Secant, and Cotangent', href: `${BASE}/graphs-of-cosecant-secant-and-cotangent` },
      ],
    },
    {
      label: '7.3 Transformations',
      children: [
        { label: 'Amplitude, Period, and Phase Shift', href: `${BASE}/amplitude-period-and-phase-shift` },
        { label: 'Reflections and Vertical Shifts', href: `${BASE}/reflections-and-vertical-shifts-of-trig-graphs` },
      ],
    },
    {
      label: '7.4 Inverse Trigonometric Functions',
      children: [
        { label: 'The Inverse Sine Function', href: `${BASE}/the-inverse-sine-function-and-its-graph` },
        { label: 'Inverse Cosine and Inverse Tangent', href: `${BASE}/the-inverse-cosine-and-inverse-tangent-functions` },
      ],
    },
    {
      label: '7.5 Differentiation of Trigonometric Functions',
      children: [
        { label: 'Derivatives of Sine and Cosine', href: `${BASE}/derivatives-of-sine-and-cosine` },
        { label: 'Derivatives of Tangent and Others', href: `${BASE}/derivatives-of-tangent-and-other-trig-functions` },
      ],
    },
  ],
};

export const chapter7C: Chapter = {
  slug: 'trigonometric-functions-and-graphs',
  number: 7,
  title: 'Trigonometric Functions and Their Graphs',
  blurb: 'Graphs of the trigonometric functions and their transformations, inverse trigonometric functions, and differentiation of trigonometric functions.',
  status: 'available',
  topics: chapter7CTopics,
  quickRevision: chapter7CQuickRevision,
  assessment: chapter7CAssessment,
  conceptMap: chapter7CConceptMap,
};
