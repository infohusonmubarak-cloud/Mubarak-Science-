import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter8CInterferenceTopics } from './topics';
import { chapter8CInterferenceQuickRevision } from './quickRevision';
import { chapter8CInterferenceAssessment } from './assessment';

export { chapter8CInterferenceConcepts } from './concepts';
export { chapter8CInterferenceFormulas } from './formulas';
export { chapter8CInterferenceQuickRevision } from './quickRevision';
export { chapter8CInterferenceTopics } from './topics';
export { chapter8CInterferenceAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/interference-and-diffraction-of-light';

const chapter8CInterferenceConceptMap: ConceptMapNode = {
  label: 'Interference and Diffraction of Light',
  children: [
    { label: "8.1 Huygens' Principle", children: [{ label: "Huygens' Principle", href: `${BASE}/huygens-principle` }] },
    { label: '8.2 Interference of Light', children: [{ label: 'Interference of Light', href: `${BASE}/interference-of-light` }] },
    { label: '8.3 Diffraction of Light', children: [{ label: 'Diffraction of Light', href: `${BASE}/diffraction-of-light` }] },
    { label: '8.4 Diffraction Grating', children: [{ label: 'The Diffraction Grating', href: `${BASE}/diffraction-grating` }] },
  ],
};

export const chapter8CInterference: Chapter = {
  slug: 'interference-and-diffraction-of-light',
  number: 8,
  title: 'Interference and Diffraction of Light',
  blurb: "Huygens' principle, interference and diffraction of light, and how a diffraction grating splits it into a spectrum.",
  status: 'available',
  topics: chapter8CInterferenceTopics,
  quickRevision: chapter8CInterferenceQuickRevision,
  assessment: chapter8CInterferenceAssessment,
  conceptMap: chapter8CInterferenceConceptMap,
};
