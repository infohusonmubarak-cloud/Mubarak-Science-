import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter9Topics } from './topics';
import { chapter9QuickRevision } from './quickRevision';
import { chapter9Assessment } from './assessment';

export { chapter9Concepts } from './concepts';
export { chapter9Formulas } from './formulas';
export { chapter9QuickRevision } from './quickRevision';
export { chapter9Topics } from './topics';
export { chapter9Assessment } from './assessment';

const BASE = '/subjects/mathematics/a-level/circles';

const chapter9ConceptMap: ConceptMapNode = {
  label: 'Circles',
  children: [
    {
      label: '9.1 Angles in a Circle',
      children: [
        { label: 'Central and Inscribed Angles', href: `${BASE}/central-and-inscribed-angles` },
        { label: 'Angle in a Semicircle', href: `${BASE}/angle-in-a-semicircle` },
        { label: 'Angles of a Cyclic Quadrilateral', href: `${BASE}/cyclic-quadrilateral-angles` },
      ],
    },
    {
      label: '9.2 Properties of Chords',
      children: [
        { label: 'Equal Chords and Equal Arcs', href: `${BASE}/equal-chords-and-equal-arcs` },
        { label: 'The Perpendicular from the Centre to a Chord', href: `${BASE}/perpendicular-from-centre-to-a-chord` },
        { label: 'The Intersecting Chords Theorem', href: `${BASE}/the-intersecting-chords-theorem` },
      ],
    },
  ],
};

export const chapter9: Chapter = {
  slug: 'circles',
  number: 9,
  title: 'Circles',
  blurb:
    'Central and inscribed angles, the angle in a semicircle, cyclic quadrilaterals, and the ' +
    'properties of chords — equal chords, the perpendicular bisector, and intersecting chords.',
  status: 'available',
  topics: chapter9Topics,
  quickRevision: chapter9QuickRevision,
  assessment: chapter9Assessment,
  conceptMap: chapter9ConceptMap,
};
