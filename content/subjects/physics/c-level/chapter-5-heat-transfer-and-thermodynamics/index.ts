import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5CHeatTopics } from './topics';
import { chapter5CHeatQuickRevision } from './quickRevision';
import { chapter5CHeatAssessment } from './assessment';

export { chapter5CHeatConcepts } from './concepts';
export { chapter5CHeatFormulas } from './formulas';
export { chapter5CHeatQuickRevision } from './quickRevision';
export { chapter5CHeatTopics } from './topics';
export { chapter5CHeatAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/heat-transfer-and-thermodynamics';

const chapter5CHeatConceptMap: ConceptMapNode = {
  label: 'Heat Transfer and Thermodynamics',
  children: [
    {
      label: '5.1 Heat Transfer',
      children: [
        { label: 'Mechanisms of Heat Transfer', href: `${BASE}/mechanisms-of-heat-transfer` },
        { label: 'Radiation and the Stefan-Boltzmann Law', href: `${BASE}/radiation-and-stefan-boltzmann-law` },
      ],
    },
    {
      label: '5.2 Thermodynamics',
      children: [
        { label: 'Internal Energy and Work', href: `${BASE}/internal-energy-and-work` },
        { label: 'The First Law of Thermodynamics', href: `${BASE}/first-law-of-thermodynamics` },
      ],
    },
    {
      label: '5.3 Heat Engines',
      children: [{ label: 'Heat Engines and Efficiency', href: `${BASE}/heat-engines-and-efficiency` }],
    },
  ],
};

export const chapter5CHeat: Chapter = {
  slug: 'heat-transfer-and-thermodynamics',
  number: 5,
  title: 'Heat Transfer and Thermodynamics',
  blurb: 'How heat moves, the first law of thermodynamics, and how heat engines convert heat into work.',
  status: 'available',
  topics: chapter5CHeatTopics,
  quickRevision: chapter5CHeatQuickRevision,
  assessment: chapter5CHeatAssessment,
  conceptMap: chapter5CHeatConceptMap,
};
