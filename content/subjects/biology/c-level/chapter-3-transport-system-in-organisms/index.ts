import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter3TransportTopics } from './topics';
import { chapter3TransportQuickRevision } from './quickRevision';
import { chapter3TransportAssessment } from './assessment';

export { chapter3TransportConcepts } from './concepts';
export { chapter3TransportFormulas } from './formulas';
export { chapter3TransportQuickRevision } from './quickRevision';
export { chapter3TransportTopics } from './topics';
export { chapter3TransportAssessment } from './assessment';

const BASE = '/subjects/biology/c-level/transport-system-in-organisms';

const chapter3TransportConceptMap: ConceptMapNode = {
  label: 'Transport System in Organisms',
  children: [
    {
      label: 'Transport Tissues and Water Movement',
      children: [
        { label: 'Structure of Transport Tissues', href: `${BASE}/xylem-and-phloem-structure` },
        { label: 'Movement of Water in a Plant', href: `${BASE}/movement-of-water-in-a-plant` },
      ],
    },
    {
      label: 'Transpiration',
      children: [
        { label: 'Transpiration and Its Factors', href: `${BASE}/transpiration-and-factors-affecting-it` },
        { label: 'Benefits and Demonstration', href: `${BASE}/benefits-and-demonstration-of-transpiration` },
      ],
    },
    {
      label: 'Translocation',
      children: [{ label: 'Translocation', href: `${BASE}/translocation-in-plants` }],
    },
    {
      label: 'Transport in Animals: Principles',
      children: [{ label: 'Mass Transport Principles', href: `${BASE}/principles-and-features-of-mass-transport` }],
    },
    {
      label: 'Cardiovascular System',
      children: [
        { label: 'Structure of the Heart', href: `${BASE}/structure-of-the-heart` },
        { label: 'Blood Vessels', href: `${BASE}/blood-vessels` },
        { label: 'Components of Blood', href: `${BASE}/components-of-blood` },
        { label: 'Blood Clotting', href: `${BASE}/blood-clotting` },
        { label: 'Cardiac Cycle and Heartbeat Control', href: `${BASE}/cardiac-cycle-and-heartbeat-control` },
      ],
    },
    {
      label: 'Lymphatic System',
      children: [{ label: 'The Lymphatic System', href: `${BASE}/the-lymphatic-system` }],
    },
  ],
};

export const chapter3Transport: Chapter = {
  slug: 'transport-system-in-organisms',
  number: 3,
  title: 'Transport System in Organisms',
  blurb:
    'How water, sugars, and dissolved substances move through plants and animals — transpiration, ' +
    'translocation, and the mammalian cardiovascular and lymphatic systems.',
  status: 'available',
  topics: chapter3TransportTopics,
  quickRevision: chapter3TransportQuickRevision,
  assessment: chapter3TransportAssessment,
  conceptMap: chapter3TransportConceptMap,
};
