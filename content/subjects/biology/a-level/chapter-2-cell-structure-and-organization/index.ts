import type { Chapter } from '@/types/content';
import { chapter2BioTopics } from './topics';
import { chapter2BioQuickRevision } from './quickRevision';

export { chapter2BioConcepts } from './concepts';
export { chapter2BioFormulas } from './formulas';
export { chapter2BioQuickRevision } from './quickRevision';
export { chapter2BioTopics } from './topics';

export const chapter2Bio: Chapter = {
  slug: 'cell-structure-and-organization',
  number: 2,
  title: 'Cell Structure and Organization',
  blurb:
    'Explore what animal and plant cells are built from, how microscopes reveal them, and how ' +
    'specialized cells build up into tissues, organs, and organ systems.',
  status: 'available',
  topics: chapter2BioTopics,
  quickRevision: chapter2BioQuickRevision,
};
