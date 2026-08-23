import type { Chapter } from '@/types/content';
import { chapter4ChemTopics } from './topics';
import { chapter4ChemQuickRevision } from './quickRevision';

export { chapter4ChemConcepts } from './concepts';
export { chapter4ChemFormulas } from './formulas';
export { chapter4ChemQuickRevision } from './quickRevision';
export { chapter4ChemTopics } from './topics';

export const chapter4Chem: Chapter = {
  slug: 'quantities-of-substances',
  number: 4,
  title: 'Quantities of Substances: Chemical Calculations',
  blurb:
    'The mole, molar mass, empirical formulas, balancing equations, stoichiometry, concentration, ' +
    'percentage yield and atom economy — every core A-Level chemistry calculation, worked through step by step.',
  status: 'available',
  topics: chapter4ChemTopics,
  quickRevision: chapter4ChemQuickRevision,
};
