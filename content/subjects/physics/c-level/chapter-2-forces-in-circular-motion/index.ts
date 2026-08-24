import type { Chapter } from '@/types/content';
import { chapter2CForcesTopics } from './topics';
import { chapter2CForcesQuickRevision } from './quickRevision';
import { chapter2CForcesAssessment } from './assessment';

export { chapter2CForcesConcepts } from './concepts';
export { chapter2CForcesFormulas } from './formulas';
export { chapter2CForcesQuickRevision } from './quickRevision';
export { chapter2CForcesTopics } from './topics';
export { chapter2CForcesAssessment } from './assessment';

export const chapter2ForcesInCircularMotion: Chapter = {
  slug: 'forces-in-circular-motion',
  number: 2,
  title: 'Forces in Circular Motion',
  blurb:
    'What actually supplies the centripetal force in circular motion — tension, friction, gravity, ' +
    'or a banked track — vertical circles, and why centrifugal force is a fictitious force.',
  status: 'available',
  topics: chapter2CForcesTopics,
  quickRevision: chapter2CForcesQuickRevision,
  assessment: chapter2CForcesAssessment,
};
