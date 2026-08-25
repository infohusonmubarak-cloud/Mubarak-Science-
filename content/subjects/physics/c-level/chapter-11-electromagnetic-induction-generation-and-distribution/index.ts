import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter11CInductionTopics } from './topics';
import { chapter11CInductionQuickRevision } from './quickRevision';
import { chapter11CInductionAssessment } from './assessment';

export { chapter11CInductionConcepts } from './concepts';
export { chapter11CInductionFormulas } from './formulas';
export { chapter11CInductionQuickRevision } from './quickRevision';
export { chapter11CInductionTopics } from './topics';
export { chapter11CInductionAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/electromagnetic-induction-generation-and-distribution';

const chapter11CInductionConceptMap: ConceptMapNode = {
  label: 'Electromagnetic Induction, Generation and Distribution of Electricity',
  children: [
    { label: '11.1 Alternating Current', children: [{ label: 'Alternating Current', href: `${BASE}/alternating-current` }] },
    { label: '11.2 Electromagnetic Induction', children: [{ label: 'Electromagnetic Induction', href: `${BASE}/electromagnetic-induction-basics` }] },
    { label: "11.3 Faraday's Law and Lenz's Law", children: [{ label: "Faraday's Law and Lenz's Law", href: `${BASE}/faradays-law-and-lenzs-law` }] },
    { label: '11.4 Applications of Electromagnetic Induction', children: [{ label: 'Applications of Electromagnetic Induction', href: `${BASE}/applications-of-electromagnetic-induction` }] },
    { label: '11.5 Power Transmission', children: [{ label: 'Power Transmission', href: `${BASE}/power-transmission` }] },
    { label: '11.6 Principles of House Wiring', children: [{ label: 'Principles of House Wiring', href: `${BASE}/house-wiring-principles` }] },
    { label: '11.7 Dangers of Electricity', children: [{ label: 'Dangers of Electricity', href: `${BASE}/electrical-safety` }] },
  ],
};

export const chapter11CInduction: Chapter = {
  slug: 'electromagnetic-induction-generation-and-distribution',
  number: 11,
  title: 'Electromagnetic Induction, Generation and Distribution of Electricity',
  blurb: "Alternating current, Faraday's and Lenz's laws, and how electricity is transmitted, wired into houses, and used safely.",
  status: 'available',
  topics: chapter11CInductionTopics,
  quickRevision: chapter11CInductionQuickRevision,
  assessment: chapter11CInductionAssessment,
  conceptMap: chapter11CInductionConceptMap,
};
