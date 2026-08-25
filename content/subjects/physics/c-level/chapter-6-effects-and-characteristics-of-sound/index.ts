import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6CSoundTopics } from './topics';
import { chapter6CSoundQuickRevision } from './quickRevision';
import { chapter6CSoundAssessment } from './assessment';

export { chapter6CSoundConcepts } from './concepts';
export { chapter6CSoundFormulas } from './formulas';
export { chapter6CSoundQuickRevision } from './quickRevision';
export { chapter6CSoundTopics } from './topics';
export { chapter6CSoundAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/effects-and-characteristics-of-sound';

const chapter6CSoundConceptMap: ConceptMapNode = {
  label: 'Effects and Characteristics of Sound',
  children: [
    {
      label: '6.1 Propagation of Sound in a Medium',
      children: [{ label: 'Propagation of Sound in a Medium', href: `${BASE}/propagation-of-sound` }],
    },
    {
      label: '6.2 Echo',
      children: [{ label: 'Echo', href: `${BASE}/echo` }],
    },
    {
      label: '6.3 Audibility',
      children: [{ label: 'Audibility', href: `${BASE}/audibility-and-hearing-range` }],
    },
    {
      label: '6.4 The Doppler Effect',
      children: [{ label: 'The Doppler Effect', href: `${BASE}/doppler-effect` }],
    },
    {
      label: '6.5 Properties of Sound Waves',
      children: [{ label: 'Properties of Sound Waves', href: `${BASE}/properties-of-sound-waves` }],
    },
  ],
};

export const chapter6CSound: Chapter = {
  slug: 'effects-and-characteristics-of-sound',
  number: 6,
  title: 'Effects and Characteristics of Sound',
  blurb: 'How sound travels, echoes, audibility, the Doppler effect, and the properties of sound waves.',
  status: 'available',
  topics: chapter6CSoundTopics,
  quickRevision: chapter6CSoundQuickRevision,
  assessment: chapter6CSoundAssessment,
  conceptMap: chapter6CSoundConceptMap,
};
