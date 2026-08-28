import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2PhysicsTopics } from './topics';
import { chapter2PhysicsQuickRevision } from './quickRevision';
import { chapter2PhysicsAssessment } from './assessment';

export { chapter2PhysicsConcepts } from './concepts';
export { chapter2PhysicsFormulas } from './formulas';
export { chapter2PhysicsQuickRevision } from './quickRevision';
export { chapter2PhysicsTopics } from './topics';
export { chapter2PhysicsAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/motion';

const chapter2PhysicsConceptMap: ConceptMapNode = {
  label: 'Motion',
  children: [
    { label: '2.1 Vectors', children: [{ label: 'Vectors and Scalars', href: `${BASE}/vectors-and-scalars` }] },
    {
      label: '2.2 Describing Motion',
      children: [
        { label: 'Distance and Displacement', href: `${BASE}/distance-and-displacement` },
        { label: 'Speed', href: `${BASE}/speed` },
        { label: 'Velocity', href: `${BASE}/velocity` },
      ],
    },
    {
      label: '2.3 Equations of Motion',
      children: [
        { label: 'Acceleration', href: `${BASE}/acceleration` },
        { label: 'v = u + at', href: `${BASE}/the-first-equation-of-motion` },
        { label: 's = ut + ½at²', href: `${BASE}/the-second-equation-of-motion` },
        { label: 'v² = u² + 2as', href: `${BASE}/the-third-equation-of-motion` },
        { label: 'Free Fall', href: `${BASE}/free-fall` },
      ],
    },
    {
      label: '2.4 Motion Graphs',
      children: [
        { label: 'Distance-Time Graphs', href: `${BASE}/distance-time-graphs` },
        { label: 'Velocity-Time Graphs', href: `${BASE}/velocity-time-graphs` },
      ],
    },
  ],
};

export const chapter2Physics: Chapter = {
  slug: 'motion',
  number: 2,
  title: 'Motion',
  blurb:
    'Vectors and scalars, distance, displacement, speed, velocity and acceleration, the four ' +
    'equations of motion, free fall, and distance-time and velocity-time graphs — all worked ' +
    'through step by step.',
  status: 'available',
  topics: chapter2PhysicsTopics,
  quickRevision: chapter2PhysicsQuickRevision,
  assessment: chapter2PhysicsAssessment,
  conceptMap: chapter2PhysicsConceptMap,
};
