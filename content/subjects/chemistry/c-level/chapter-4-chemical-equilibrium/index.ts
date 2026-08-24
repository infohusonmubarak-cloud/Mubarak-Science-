import type { Chapter } from '@/types/content';
import { chapter4EquilibriumTopics } from './topics';
import { chapter4EquilibriumQuickRevision } from './quickRevision';
import { chapter4EquilibriumAssessment } from './assessment';

export { chapter4EquilibriumConcepts } from './concepts';
export { chapter4EquilibriumFormulas } from './formulas';
export { chapter4EquilibriumQuickRevision } from './quickRevision';
export { chapter4EquilibriumTopics } from './topics';
export { chapter4EquilibriumAssessment } from './assessment';

export const chapter4Equilibrium: Chapter = {
  slug: 'chemical-equilibrium',
  number: 4,
  title: 'Chemical Equilibrium',
  blurb:
    "What dynamic equilibrium means, how Le Chatelier's principle predicts shifts from concentration, " +
    "pressure, and temperature changes, and how the equilibrium constant Kc quantifies a reaction's " +
    'balance point.',
  status: 'available',
  topics: chapter4EquilibriumTopics,
  quickRevision: chapter4EquilibriumQuickRevision,
  assessment: chapter4EquilibriumAssessment,
};
