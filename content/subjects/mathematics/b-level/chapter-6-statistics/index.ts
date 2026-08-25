import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6BTopics } from './topics';
import { chapter6BQuickRevision } from './quickRevision';
import { chapter6BAssessment } from './assessment';

export { chapter6BConcepts } from './concepts';
export { chapter6BFormulas } from './formulas';
export { chapter6BQuickRevision } from './quickRevision';
export { chapter6BTopics } from './topics';
export { chapter6BAssessment } from './assessment';

const BASE = '/subjects/mathematics/b-level/statistics';

const chapter6BConceptMap: ConceptMapNode = {
  label: 'Statistics',
  children: [
    {
      label: '6.1 Measure of Variation',
      children: [
        { label: 'Range and Interquartile Range', href: `${BASE}/range-and-interquartile-range` },
        { label: 'Variance and Standard Deviation', href: `${BASE}/variance-and-standard-deviation` },
      ],
    },
    {
      label: '6.2 Cumulative Frequency',
      children: [
        { label: 'Cumulative Frequency Tables and the Ogive', href: `${BASE}/cumulative-frequency-tables-and-the-ogive` },
        { label: 'Reading the Median and Quartiles', href: `${BASE}/reading-the-median-and-quartiles-from-an-ogive` },
      ],
    },
    {
      label: '6.3 Correlation',
      children: [
        { label: 'Scatter Diagrams and Correlation', href: `${BASE}/scatter-diagrams-and-correlation` },
        { label: 'The Correlation Coefficient', href: `${BASE}/the-correlation-coefficient` },
      ],
    },
  ],
};

export const chapter6B: Chapter = {
  slug: 'statistics',
  number: 6,
  title: 'Statistics',
  blurb:
    'Measuring spread with range, IQR, variance and standard deviation; cumulative frequency ' +
    'tables and the ogive; and scatter diagrams and the correlation coefficient.',
  status: 'available',
  topics: chapter6BTopics,
  quickRevision: chapter6BQuickRevision,
  assessment: chapter6BAssessment,
  conceptMap: chapter6BConceptMap,
};
