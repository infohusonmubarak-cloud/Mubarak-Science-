import type { Chapter } from '@/types/content';
import { chapter6TransitionTopics } from './topics';
import { chapter6TransitionQuickRevision } from './quickRevision';
import { chapter6TransitionAssessment } from './assessment';

export { chapter6TransitionConcepts } from './concepts';
export { chapter6TransitionFormulas } from './formulas';
export { chapter6TransitionQuickRevision } from './quickRevision';
export { chapter6TransitionTopics } from './topics';
export { chapter6TransitionAssessment } from './assessment';

export const chapter6Transition: Chapter = {
  slug: 'transition-elements',
  number: 6,
  title: 'Transition Elements',
  blurb:
    'The 3d series transition elements, the electron configurations behind their variable oxidation ' +
    'states and coloured compounds, and their everyday uses.',
  status: 'available',
  topics: chapter6TransitionTopics,
  quickRevision: chapter6TransitionQuickRevision,
  assessment: chapter6TransitionAssessment,
};
