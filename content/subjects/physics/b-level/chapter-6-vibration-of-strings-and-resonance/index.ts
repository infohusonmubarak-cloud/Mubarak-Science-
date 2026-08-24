import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter6VibrationTopics } from './topics';
import { chapter6VibrationQuickRevision } from './quickRevision';
import { chapter6VibrationAssessment } from './assessment';

export { chapter6VibrationConcepts } from './concepts';
export { chapter6VibrationFormulas } from './formulas';
export { chapter6VibrationQuickRevision } from './quickRevision';
export { chapter6VibrationTopics } from './topics';
export { chapter6VibrationAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/vibration-of-strings-and-resonance';

const chapter6VibrationConceptMap: ConceptMapNode = {
  label: 'Vibration of Strings, Resonance',
  children: [
    {
      label: 'Stationary Waves',
      children: [{ label: 'Stationary Waves', href: `${BASE}/stationary-waves` }],
    },
    {
      label: 'Vibrating Strings',
      children: [{ label: 'Vibrating Strings', href: `${BASE}/vibrating-strings` }],
    },
    {
      label: 'Resonance Column and Organ Pipes',
      children: [
        { label: 'Resonance Column', href: `${BASE}/resonance-column` },
        { label: 'Organ Pipes', href: `${BASE}/organ-pipes` },
      ],
    },
    {
      label: 'Intensity of Waves',
      children: [{ label: 'Intensity of Waves', href: `${BASE}/intensity-of-waves` }],
    },
  ],
};

export const chapter6Vibration: Chapter = {
  slug: 'vibration-of-strings-and-resonance',
  number: 6,
  title: 'Vibration of Strings, Resonance',
  blurb: 'Stationary waves, vibrating strings, the resonance column and organ pipes, and the intensity of waves.',
  status: 'available',
  topics: chapter6VibrationTopics,
  quickRevision: chapter6VibrationQuickRevision,
  assessment: chapter6VibrationAssessment,
  conceptMap: chapter6VibrationConceptMap,
};
