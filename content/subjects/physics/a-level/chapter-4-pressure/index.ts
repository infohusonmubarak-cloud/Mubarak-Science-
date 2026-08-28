import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter4APressureTopics } from './topics';
import { chapter4APressureQuickRevision } from './quickRevision';
import { chapter4APressureAssessment } from './assessment';

export { chapter4APressureConcepts } from './concepts';
export { chapter4APressureFormulas } from './formulas';
export { chapter4APressureQuickRevision } from './quickRevision';
export { chapter4APressureTopics } from './topics';
export { chapter4APressureAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/pressure';

const chapter4APressureConceptMap: ConceptMapNode = {
  label: 'Pressure',
  children: [
    {
      label: '4.1 Pressure',
      children: [
        { label: 'Pressure, Force and Area', href: `${BASE}/pressure-force-and-area-a-level` },
        { label: 'Pressure in Fluids', href: `${BASE}/pressure-in-fluids-a-level` },
      ],
    },
    { label: '4.2 Density', children: [{ label: 'Density', href: `${BASE}/density-a-level` }] },
    { label: '4.3 Relative Density (Specific Gravity)', children: [{ label: 'Relative Density', href: `${BASE}/relative-density-a-level` }] },
    { label: '4.4 Hydrometer', children: [{ label: 'The Hydrometer', href: `${BASE}/hydrometer-a-level` }] },
  ],
};

export const chapter4APressure: Chapter = {
  slug: 'pressure',
  number: 4,
  title: 'Pressure',
  blurb: 'Pressure from force and area, pressure in fluids, density, relative density (specific gravity), and how a hydrometer measures it.',
  status: 'available',
  topics: chapter4APressureTopics,
  quickRevision: chapter4APressureQuickRevision,
  assessment: chapter4APressureAssessment,
  conceptMap: chapter4APressureConceptMap,
};
