import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1CRotationTopics } from './topics';
import { chapter1CRotationQuickRevision } from './quickRevision';
import { chapter1CRotationAssessment } from './assessment';

export { chapter1CRotationConcepts } from './concepts';
export { chapter1CRotationFormulas } from './formulas';
export { chapter1CRotationQuickRevision } from './quickRevision';
export { chapter1CRotationTopics } from './topics';
export { chapter1CRotationAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/rotational-motion';

const chapter1CRotationConceptMap: ConceptMapNode = {
  label: 'Rotational Motion',
  children: [
    {
      label: '1.1 Rotational Motion Under Constant Angular Acceleration',
      children: [
        { label: 'Angular Displacement', href: `${BASE}/angular-displacement` },
        { label: 'Angular Velocity', href: `${BASE}/angular-velocity` },
        { label: 'Angular Acceleration', href: `${BASE}/angular-acceleration` },
        { label: 'Rotational Kinematics Equations', href: `${BASE}/rotational-kinematics-equations` },
      ],
    },
    {
      label: '1.2 Relations Between Linear and Angular Quantities',
      children: [
        { label: 'Linear and Angular Quantity Relationships', href: `${BASE}/linear-and-angular-quantity-relationships` },
        { label: 'Tangential Velocity and Tangential Acceleration', href: `${BASE}/tangential-velocity-and-tangential-acceleration` },
      ],
    },
    {
      label: '1.3 Centripetal Acceleration',
      children: [
        { label: 'Centripetal Acceleration', href: `${BASE}/centripetal-acceleration` },
        { label: 'Period, Frequency and Revolution', href: `${BASE}/period-frequency-and-revolution` },
      ],
    },
  ],
};

export const chapter1CRotation: Chapter = {
  slug: 'rotational-motion',
  number: 1,
  title: 'Rotational Motion',
  blurb: 'Angular displacement, velocity and acceleration, how they relate to linear motion, and centripetal acceleration.',
  status: 'available',
  topics: chapter1CRotationTopics,
  quickRevision: chapter1CRotationQuickRevision,
  assessment: chapter1CRotationAssessment,
  conceptMap: chapter1CRotationConceptMap,
};
