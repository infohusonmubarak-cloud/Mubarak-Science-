import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10BTopics } from './topics';
import { chapter10BQuickRevision } from './quickRevision';
import { chapter10BAssessment } from './assessment';

export { chapter10BConcepts } from './concepts';
export { chapter10BFormulas } from './formulas';
export { chapter10BQuickRevision } from './quickRevision';
export { chapter10BTopics } from './topics';
export { chapter10BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/trigonometry-advanced';

const chapter10BConceptMap: ConceptMapNode = {
  label: 'Trigonometry',
  children: [
    {
      label: '10.1 Trigonometric Ratios of Any Angle',
      children: [
        { label: 'Extending Trig Ratios to Any Angle', href: `${BASE}/extending-trigonometric-ratios-to-any-angle` },
        { label: 'Quadrants and Signs', href: `${BASE}/the-quadrants-and-signs-of-trigonometric-ratios` },
      ],
    },
    {
      label: '10.2 Negative Angles',
      children: [
        { label: 'Negative Angles and Their Trig Ratios', href: `${BASE}/negative-angles-and-their-trigonometric-ratios` },
      ],
    },
    {
      label: '10.3 The Basic Acute Angle',
      children: [
        { label: 'The Basic Acute Angle', href: `${BASE}/the-basic-acute-angle` },
      ],
    },
    {
      label: '10.4 Ratios of 0°/90°/180°/270°/360°',
      children: [
        { label: 'Trigonometric Ratios of Quadrantal Angles', href: `${BASE}/trigonometric-ratios-of-quadrantal-angles` },
      ],
    },
    {
      label: '10.5 Further Trigonometric Identities',
      children: [
        { label: 'The Pythagorean Identity', href: `${BASE}/the-pythagorean-identity` },
        { label: 'The Quotient Identity', href: `${BASE}/the-quotient-identity` },
      ],
    },
    {
      label: '10.6 Law of Sines and Cosines',
      children: [
        { label: 'The Law of Sines', href: `${BASE}/the-law-of-sines` },
        { label: 'The Law of Cosines', href: `${BASE}/the-law-of-cosines` },
      ],
    },
    {
      label: '10.7 Bearings',
      children: [
        { label: 'Bearings and Solving Triangle Problems', href: `${BASE}/bearings-and-solving-triangle-problems` },
      ],
    },
    {
      label: '10.8 The Area of a Triangle',
      children: [
        { label: 'The Area of a Triangle Using Sine', href: `${BASE}/the-area-of-a-triangle-using-sine` },
      ],
    },
  ],
};

export const chapter10B: Chapter = {
  slug: 'trigonometry-advanced',
  number: 10,
  title: 'Trigonometry',
  blurb:
    'An advanced extension of Level A trigonometry — ratios of any angle, negative angles, the basic ' +
    'acute angle, further identities, the Law of Sines and Cosines, bearings, and triangle area using sine.',
  status: 'available',
  topics: chapter10BTopics,
  quickRevision: chapter10BQuickRevision,
  assessment: chapter10BAssessment,
  conceptMap: chapter10BConceptMap,
};
