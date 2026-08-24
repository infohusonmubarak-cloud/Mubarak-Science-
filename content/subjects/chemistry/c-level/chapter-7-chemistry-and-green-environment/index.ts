import type { Chapter } from '@/types/content';
import { chapter7EnvironmentTopics } from './topics';
import { chapter7EnvironmentQuickRevision } from './quickRevision';
import { chapter7EnvironmentAssessment } from './assessment';

export { chapter7EnvironmentConcepts } from './concepts';
export { chapter7EnvironmentFormulas } from './formulas';
export { chapter7EnvironmentQuickRevision } from './quickRevision';
export { chapter7EnvironmentTopics } from './topics';
export { chapter7EnvironmentAssessment } from './assessment';

export const chapter7Environment: Chapter = {
  slug: 'chemistry-and-green-environment',
  number: 7,
  title: 'Chemistry and Green Environment',
  blurb:
    "Earth's atmosphere, hydrosphere and lithosphere, air/water/soil pollutants, the greenhouse " +
    'effect, radioactive substances in the environment, and how chemistry supports sustainable ' +
    'development.',
  status: 'available',
  topics: chapter7EnvironmentTopics,
  quickRevision: chapter7EnvironmentQuickRevision,
  assessment: chapter7EnvironmentAssessment,
};
