import type { Chapter } from '@/types/content';
import { chapter2PhysicsTopics } from './topics';
import { chapter2PhysicsQuickRevision } from './quickRevision';

export { chapter2PhysicsConcepts } from './concepts';
export { chapter2PhysicsFormulas } from './formulas';
export { chapter2PhysicsQuickRevision } from './quickRevision';
export { chapter2PhysicsTopics } from './topics';

export const chapter2Physics: Chapter = {
  slug: 'motion',
  number: 2,
  title: 'Motion',
  blurb:
    'Distance, displacement, speed, velocity and acceleration, distance-time and velocity-time ' +
    'graphs, the four equations of motion, and free fall — all worked through step by step.',
  status: 'available',
  topics: chapter2PhysicsTopics,
  quickRevision: chapter2PhysicsQuickRevision,
};
