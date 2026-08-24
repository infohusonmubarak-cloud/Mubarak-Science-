import type { Chapter } from '@/types/content';
import { chapter3KineticsTopics } from './topics';
import { chapter3KineticsQuickRevision } from './quickRevision';
import { chapter3KineticsAssessment } from './assessment';

export { chapter3KineticsConcepts } from './concepts';
export { chapter3KineticsFormulas } from './formulas';
export { chapter3KineticsQuickRevision } from './quickRevision';
export { chapter3KineticsTopics } from './topics';
export { chapter3KineticsAssessment } from './assessment';

export const chapter3Kinetics: Chapter = {
  slug: 'chemical-kinetics-rates-of-reaction',
  number: 3,
  title: 'Chemical Kinetics: Rates of Reaction',
  blurb:
    'How fast reactions happen, collision theory and activation energy, the Maxwell–Boltzmann ' +
    'distribution, and the factors — concentration, temperature, surface area, catalysts — that ' +
    'speed reactions up or slow them down.',
  status: 'available',
  topics: chapter3KineticsTopics,
  quickRevision: chapter3KineticsQuickRevision,
  assessment: chapter3KineticsAssessment,
};
