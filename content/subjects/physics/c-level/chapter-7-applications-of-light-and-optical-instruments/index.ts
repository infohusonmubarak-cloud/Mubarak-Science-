import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter7COpticsTopics } from './topics';
import { chapter7COpticsQuickRevision } from './quickRevision';
import { chapter7COpticsAssessment } from './assessment';

export { chapter7COpticsConcepts } from './concepts';
export { chapter7COpticsFormulas } from './formulas';
export { chapter7COpticsQuickRevision } from './quickRevision';
export { chapter7COpticsTopics } from './topics';
export { chapter7COpticsAssessment } from './assessment';

const BASE = '/subjects/physics/c-level/applications-of-light-and-optical-instruments';

const chapter7COpticsConceptMap: ConceptMapNode = {
  label: 'Applications of Light and Optical Instruments',
  children: [
    { label: '7.1 The Camera', children: [{ label: 'The Camera', href: `${BASE}/the-camera` }] },
    { label: '7.2 Human Eye', children: [{ label: 'The Human Eye', href: `${BASE}/the-human-eye` }] },
    { label: '7.3 Compound Microscope', children: [{ label: 'The Compound Microscope', href: `${BASE}/compound-microscope` }] },
    { label: '7.4 Telescope', children: [{ label: 'The Telescope', href: `${BASE}/astronomical-telescope` }] },
    { label: '7.5 Laser', children: [{ label: 'The Laser', href: `${BASE}/laser-light` }] },
    { label: '7.6 Fibre Optics', children: [{ label: 'Fibre Optics', href: `${BASE}/fibre-optics-and-total-internal-reflection` }] },
    { label: '7.7 Spectrometer', children: [{ label: 'The Spectrometer', href: `${BASE}/spectrometer` }] },
    { label: '7.8 Photometry', children: [{ label: 'Photometry', href: `${BASE}/photometry-and-light-intensity` }] },
  ],
};

export const chapter7COptics: Chapter = {
  slug: 'applications-of-light-and-optical-instruments',
  number: 7,
  title: 'Applications of Light and Optical Instruments',
  blurb: 'How the camera, the eye, microscopes, telescopes, lasers, fibre optics, spectrometers and photometry all put light to work.',
  status: 'available',
  topics: chapter7COpticsTopics,
  quickRevision: chapter7COpticsQuickRevision,
  assessment: chapter7COpticsAssessment,
  conceptMap: chapter7COpticsConceptMap,
};
