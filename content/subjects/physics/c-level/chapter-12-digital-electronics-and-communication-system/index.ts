import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter12CDigitalTopics } from './topics';
import { chapter12CDigitalQuickRevision } from './quickRevision';
import { chapter12CDigitalAssessment } from './assessment';

export { chapter12CDigitalConcepts } from './concepts';
export { chapter12CDigitalFormulas } from './formulas';
export { chapter12CDigitalQuickRevision } from './quickRevision';
export { chapter12CDigitalTopics } from './topics';
export { chapter12CDigitalAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/digital-electronics-and-communication-system';

const chapter12CDigitalConceptMap: ConceptMapNode = {
  label: 'Digital Electronics and Communication System',
  children: [
    { label: '12.1 Electronic System', children: [{ label: 'Electronic Systems', href: `${BASE}/electronic-systems` }] },
    {
      label: '12.2 Digital Electronics',
      children: [
        { label: 'Analog and Digital Signals', href: `${BASE}/analog-and-digital-signals` },
        { label: 'Logic Gates and Truth Tables', href: `${BASE}/logic-gates-and-truth-tables` },
      ],
    },
    { label: '12.3 Basic Electronic Communication', children: [{ label: 'Basic Electronic Communication', href: `${BASE}/communication-systems-basics` }] },
  ],
};

export const chapter12CDigital: Chapter = {
  slug: 'digital-electronics-and-communication-system',
  number: 12,
  title: 'Digital Electronics and Communication System',
  blurb: 'Electronic systems, analog vs. digital signals, logic gates, and the basics of electronic communication.',
  status: 'available',
  topics: chapter12CDigitalTopics,
  quickRevision: chapter12CDigitalQuickRevision,
  assessment: chapter12CDigitalAssessment,
  conceptMap: chapter12CDigitalConceptMap,
};
