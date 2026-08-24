import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1MotionInAPlaneTopics } from './topics';
import { chapter1MotionInAPlaneQuickRevision } from './quickRevision';
import { chapter1MotionInAPlaneAssessment } from './assessment';

export { chapter1MotionInAPlaneConcepts } from './concepts';
export { chapter1MotionInAPlaneFormulas } from './formulas';
export { chapter1MotionInAPlaneQuickRevision } from './quickRevision';
export { chapter1MotionInAPlaneTopics } from './topics';
export { chapter1MotionInAPlaneAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/motion-in-a-plane';

const chapter1MotionInAPlaneConceptMap: ConceptMapNode = {
  label: 'Motion in a Plane',
  children: [
    {
      label: 'Two-Dimensional Motion',
      children: [
        { label: 'Resolving Vectors', href: `${BASE}/resolving-vectors-in-two-dimensions` },
        { label: 'Resultant of Vectors', href: `${BASE}/resultant-of-two-dimensional-vectors` },
      ],
    },
    {
      label: 'Projectile Motion',
      children: [
        { label: 'Independence of Horizontal/Vertical Motion', href: `${BASE}/projectile-motion-basics` },
        { label: 'Time of Flight', href: `${BASE}/time-of-flight-in-projectile-motion` },
        { label: 'Maximum Height', href: `${BASE}/maximum-height-in-projectile-motion` },
        { label: 'Horizontal Range', href: `${BASE}/horizontal-range-in-projectile-motion` },
      ],
    },
    {
      label: 'Circular Motion',
      children: [
        { label: 'Period and Frequency', href: `${BASE}/period-and-frequency-in-circular-motion` },
        { label: 'Centripetal Acceleration', href: `${BASE}/centripetal-acceleration-in-a-plane` },
        { label: 'Centripetal Force', href: `${BASE}/centripetal-force-in-a-plane` },
      ],
    },
  ],
};

export const chapter1MotionInAPlane: Chapter = {
  slug: 'motion-in-a-plane',
  number: 1,
  title: 'Motion in a Plane',
  blurb: 'Resolving and combining two-dimensional vectors, projectile motion, and the period, acceleration and force of circular motion.',
  status: 'available',
  topics: chapter1MotionInAPlaneTopics,
  quickRevision: chapter1MotionInAPlaneQuickRevision,
  assessment: chapter1MotionInAPlaneAssessment,
  conceptMap: chapter1MotionInAPlaneConceptMap,
};
