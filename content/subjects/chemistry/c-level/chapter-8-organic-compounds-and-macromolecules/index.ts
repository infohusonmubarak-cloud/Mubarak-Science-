import type { Chapter } from '@/types/content';
import { chapter8OrganicTopics } from './topics';
import { chapter8OrganicQuickRevision } from './quickRevision';
import { chapter8OrganicAssessment } from './assessment';

export { chapter8OrganicConcepts } from './concepts';
export { chapter8OrganicFormulas } from './formulas';
export { chapter8OrganicQuickRevision } from './quickRevision';
export { chapter8OrganicTopics } from './topics';
export { chapter8OrganicAssessment } from './assessment';

export const chapter8Organic: Chapter = {
  slug: 'organic-compounds-and-macromolecules',
  number: 8,
  title: 'Organic Compounds and Macromolecules',
  blurb:
    'What makes a compound organic, hydrocarbons and homologous series, common functional groups ' +
    'and how to test for them, and how monomers link into natural and synthetic macromolecules.',
  status: 'available',
  topics: chapter8OrganicTopics,
  quickRevision: chapter8OrganicQuickRevision,
  assessment: chapter8OrganicAssessment,
};
