import type { Chapter } from '@/types/content';
import { chapter5AcidBaseTopics } from './topics';
import { chapter5AcidBaseQuickRevision } from './quickRevision';
import { chapter5AcidBaseAssessment } from './assessment';

export { chapter5AcidBaseConcepts } from './concepts';
export { chapter5AcidBaseFormulas } from './formulas';
export { chapter5AcidBaseQuickRevision } from './quickRevision';
export { chapter5AcidBaseTopics } from './topics';
export { chapter5AcidBaseAssessment } from './assessment';

export const chapter5AcidBase: Chapter = {
  slug: 'acid-base-reactions',
  number: 5,
  title: 'Acid-Base Reactions',
  blurb:
    'Theories of acids and bases, pH and the ionisation of water, weak acid/base equilibria (Ka), ' +
    'salt hydrolysis, and how buffer solutions resist pH change.',
  status: 'available',
  topics: chapter5AcidBaseTopics,
  quickRevision: chapter5AcidBaseQuickRevision,
  assessment: chapter5AcidBaseAssessment,
};
