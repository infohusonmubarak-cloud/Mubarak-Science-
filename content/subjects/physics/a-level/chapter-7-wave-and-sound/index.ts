import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7AWaveTopics } from './topics';
import { chapter7AWaveQuickRevision } from './quickRevision';
import { chapter7AWaveAssessment } from './assessment';

export { chapter7AWaveConcepts } from './concepts';
export { chapter7AWaveFormulas } from './formulas';
export { chapter7AWaveQuickRevision } from './quickRevision';
export { chapter7AWaveTopics } from './topics';
export { chapter7AWaveAssessment } from './assessment';

const BASE = '/subjects/physics/a-level/wave-and-sound';

const chapter7AWaveConceptMap: ConceptMapNode = {
  label: 'Wave and Sound',
  children: [
    { label: '7.1 Describing Wave Motion', children: [{ label: 'Describing Wave Motion', href: `${BASE}/describing-wave-motion-a-level` }] },
    { label: '7.2 Transverse and Longitudinal Waves', children: [{ label: 'Transverse and Longitudinal Waves', href: `${BASE}/transverse-and-longitudinal-waves-a-level` }] },
    { label: '7.3 Characteristics of Waves', children: [{ label: 'Characteristics of Waves', href: `${BASE}/wave-characteristics-a-level` }] },
    { label: '7.4 Graphical Representation of Wave', children: [{ label: 'Graphical Representation of a Wave', href: `${BASE}/wave-graphs-a-level` }] },
    { label: '7.5 Reflection, Refraction and Diffraction of Wave', children: [{ label: 'Reflection, Refraction and Diffraction of Waves', href: `${BASE}/wave-reflection-refraction-diffraction-a-level` }] },
    {
      label: '7.6 Sound Wave and Speed of Sound',
      children: [
        { label: 'Sound Waves', href: `${BASE}/sound-waves-a-level` },
        { label: 'The Speed of Sound', href: `${BASE}/speed-of-sound-a-level` },
      ],
    },
  ],
};

export const chapter7AWave: Chapter = {
  slug: 'wave-and-sound',
  number: 7,
  title: 'Wave and Sound',
  blurb: 'Describing wave motion, transverse and longitudinal waves, wave characteristics and graphs, wave behaviour at boundaries, and sound waves.',
  status: 'available',
  topics: chapter7AWaveTopics,
  quickRevision: chapter7AWaveQuickRevision,
  assessment: chapter7AWaveAssessment,
  conceptMap: chapter7AWaveConceptMap,
};
