import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter12ModernTopics } from './topics';
import { chapter12ModernQuickRevision } from './quickRevision';
import { chapter12ModernAssessment } from './assessment';

export { chapter12ModernConcepts } from './concepts';
export { chapter12ModernFormulas } from './formulas';
export { chapter12ModernQuickRevision } from './quickRevision';
export { chapter12ModernTopics } from './topics';
export { chapter12ModernAssessment } from './assessment';

const BASE = '/subjects/physics/b-level/atomic-and-modern-physics';

const chapter12ModernConceptMap: ConceptMapNode = {
  label: 'Modern Physics',
  children: [
    {
      label: 'Cathode Rays and X-Rays',
      children: [
        { label: 'Cathode Rays', href: `${BASE}/cathode-rays` },
        { label: 'X-Rays', href: `${BASE}/x-rays` },
      ],
    },
    {
      label: "Bohr's Hydrogen Atom & Atomic Spectra",
      children: [{ label: "Bohr's Hydrogen Atom & Atomic Spectra", href: `${BASE}/bohrs-hydrogen-atom-and-atomic-spectra` }],
    },
    {
      label: 'Photoelectric Effect & Photon Concept',
      children: [{ label: 'Photoelectric Effect & Photon Concept', href: `${BASE}/photoelectric-effect-and-photon-concept` }],
    },
    {
      label: 'Isotopes',
      children: [{ label: 'Isotopes', href: `${BASE}/isotopes-b-level` }],
    },
    {
      label: "Red Shift, Hubble's Law & Age of Universe",
      children: [{ label: "Red Shift, Hubble's Law & Age of Universe", href: `${BASE}/redshift-hubbles-law-and-age-of-universe` }],
    },
  ],
};

export const chapter12Modern: Chapter = {
  slug: 'atomic-and-modern-physics',
  number: 12,
  title: 'Modern Physics',
  blurb: "Cathode rays, X-rays, Bohr's hydrogen atom and atomic spectra, the photoelectric effect, isotopes, and red shift and Hubble's law.",
  status: 'available',
  topics: chapter12ModernTopics,
  quickRevision: chapter12ModernQuickRevision,
  assessment: chapter12ModernAssessment,
  conceptMap: chapter12ModernConceptMap,
};
