import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter1AUnitsTopics } from './topics';
import { chapter1AUnitsQuickRevision } from './quickRevision';
import { chapter1AUnitsAssessment } from './assessment';

export { chapter1AUnitsConcepts } from './concepts';
export { chapter1AUnitsFormulas } from './formulas';
export { chapter1AUnitsQuickRevision } from './quickRevision';
export { chapter1AUnitsTopics } from './topics';
export { chapter1AUnitsAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/units-and-measurements';

const chapter1AUnitsConceptMap: ConceptMapNode = {
  label: 'Units and Measurements',
  children: [
    {
      label: '1.1–1.2 Units and System of Units',
      children: [
        { label: 'Basic and Derived Units', href: `${BASE}/basic-and-derived-units` },
        { label: 'System of Units', href: `${BASE}/systems-of-units` },
      ],
    },
    {
      label: '1.3–1.4 Prefixes, Standards and Units',
      children: [
        { label: 'Prefixes', href: `${BASE}/si-prefixes` },
        { label: 'Standards and Units', href: `${BASE}/standards-of-measurement` },
      ],
    },
    {
      label: '1.5 Measurement of Length',
      children: [
        { label: 'The Vernier Caliper', href: `${BASE}/vernier-caliper` },
        { label: 'The Micrometer Screw Gauge', href: `${BASE}/micrometer-screw-gauge` },
      ],
    },
    { label: '1.6 Measurement of Mass', children: [{ label: 'Measurement of Mass', href: `${BASE}/measurement-of-mass` }] },
    { label: '1.7 Measurement of Time', children: [{ label: 'Measurement of Time', href: `${BASE}/measurement-of-time` }] },
  ],
};

export const chapter1AUnits: Chapter = {
  slug: 'units-and-measurements',
  number: 1,
  title: 'Units and Measurements',
  blurb: 'Basic and derived units, systems of units, prefixes, measurement standards, and the instruments used to measure length, mass, and time.',
  status: 'available',
  topics: chapter1AUnitsTopics,
  quickRevision: chapter1AUnitsQuickRevision,
  assessment: chapter1AUnitsAssessment,
  conceptMap: chapter1AUnitsConceptMap,
};
