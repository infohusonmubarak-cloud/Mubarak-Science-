import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter5CoordinationTopics } from './topics';
import { chapter5CoordinationQuickRevision } from './quickRevision';
import { chapter5CoordinationAssessment } from './assessment';

export { chapter5CoordinationConcepts } from './concepts';
export { chapter5CoordinationFormulas } from './formulas';
export { chapter5CoordinationQuickRevision } from './quickRevision';
export { chapter5CoordinationTopics } from './topics';
export { chapter5CoordinationAssessment } from './assessment';

const BASE = '/subjects/biology/c-level/coordination-and-response';

const chapter5CoordinationConceptMap: ConceptMapNode = {
  label: 'Coordination and Response',
  children: [
    {
      label: 'Coordination in Plants',
      children: [
        { label: 'Coordination and Response in Plants', href: `${BASE}/coordination-and-response-in-plants` },
        { label: 'Plant Growth Regulators', href: `${BASE}/plant-growth-regulators` },
        { label: 'Seed Dormancy and Germination', href: `${BASE}/seed-dormancy-and-germination` },
        { label: 'Photoperiodism and Photomorphogenesis', href: `${BASE}/photoperiodism-and-photomorphogenesis` },
      ],
    },
    {
      label: 'Coordination in Animals',
      children: [
        { label: 'Human Nervous System', href: `${BASE}/the-human-nervous-system` },
        { label: 'Structure of Neurones', href: `${BASE}/structure-of-neurones` },
        { label: 'Synapses', href: `${BASE}/synapses` },
      ],
    },
    {
      label: 'Sense Organs',
      children: [{ label: 'Sense Organs', href: `${BASE}/sense-organs` }],
    },
    {
      label: 'The Endocrine System',
      children: [
        { label: 'Endocrine Glands and Hormones', href: `${BASE}/endocrine-glands-and-hormones` },
        { label: 'Nervous vs. Endocrine Systems', href: `${BASE}/comparing-nervous-and-endocrine-systems` },
      ],
    },
  ],
};

export const chapter5Coordination: Chapter = {
  slug: 'coordination-and-response',
  number: 5,
  title: 'Coordination and Response',
  blurb:
    'How plants and animals sense and respond to their environment — plant growth regulation, the ' +
    'nervous system, sense organs, and the endocrine system.',
  status: 'available',
  topics: chapter5CoordinationTopics,
  quickRevision: chapter5CoordinationQuickRevision,
  assessment: chapter5CoordinationAssessment,
  conceptMap: chapter5CoordinationConceptMap,
};
