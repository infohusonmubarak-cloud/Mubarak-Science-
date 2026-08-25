import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter10Topics } from './topics';
import { chapter10QuickRevision } from './quickRevision';
import { chapter10Assessment } from './assessment';

export { chapter10Concepts } from './concepts';
export { chapter10Formulas } from './formulas';
export { chapter10QuickRevision } from './quickRevision';
export { chapter10Topics } from './topics';
export { chapter10Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/trigonometry';

const chapter10ConceptMap: ConceptMapNode = {
  label: 'Trigonometry',
  children: [
    { label: '10.1 Angles', children: [{ label: 'Meaning of an Angle and Standard Position', href: `${BASE}/meaning-of-an-angle-and-standard-position` }] },
    { label: '10.2 Degree and Radian Measure', children: [{ label: 'Degree-Radian Conversion', href: `${BASE}/degree-radian-conversion` }] },
    {
      label: '10.3 Arc Length and Area of a Sector',
      children: [
        { label: 'Arc Length of a Sector', href: `${BASE}/arc-length-of-a-sector` },
        { label: 'Area of a Sector', href: `${BASE}/area-of-a-sector` },
      ],
    },
    { label: '10.4 Six Trigonometric Ratios', children: [{ label: 'The Six Trigonometric Ratios', href: `${BASE}/the-six-trigonometric-ratios` }] },
    { label: '10.5 Relations between the Trigonometric Ratios', children: [{ label: 'Pythagorean Identity and Reciprocal Relations', href: `${BASE}/pythagorean-identity-and-reciprocal-relations` }] },
    { label: '10.6 Special Angles', children: [{ label: 'Trig Ratios for Special Angles', href: `${BASE}/trig-ratios-for-special-angles` }] },
    { label: '10.7 Solution of Right Triangles', children: [{ label: 'Solving Right Triangles', href: `${BASE}/solving-right-triangles` }] },
    { label: '10.8 Angle of Elevation and Depression', children: [{ label: 'Angle of Elevation and Depression', href: `${BASE}/angle-of-elevation-and-depression` }] },
  ],
};

export const chapter10: Chapter = {
  slug: 'trigonometry',
  number: 10,
  title: 'Trigonometry',
  blurb:
    'Angles in standard position, degree-radian conversion, arc length and sector area, the six ' +
    'trigonometric ratios and their relations, special angles, solving right triangles, and angles ' +
    'of elevation and depression.',
  status: 'available',
  topics: chapter10Topics,
  quickRevision: chapter10QuickRevision,
  assessment: chapter10Assessment,
  conceptMap: chapter10ConceptMap,
};
