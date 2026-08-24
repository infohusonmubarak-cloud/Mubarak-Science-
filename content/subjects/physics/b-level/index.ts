import type { Chapter, Level } from '@/types/content';
import { chapter1MotionInAPlane } from './chapter-1-motion-in-a-plane';
import { chapter2RotationalDynamics } from './chapter-2-rotational-dynamics';
import { chapter3Pressure } from './chapter-3-pressure-in-fluids-and-atmosphere';
import { chapter4Power } from './chapter-4-power-and-efficiency';
import { chapter5Heat } from './chapter-5-heat-and-thermal-phenomena';
import { chapter6Vibration } from './chapter-6-vibration-of-strings-and-resonance';
import { chapter7Refraction } from './chapter-7-refraction-of-light-b-level';
import { chapter8Lenses } from './chapter-8-lenses';
import { chapter9ElectricField } from './chapter-9-electric-field';
import { chapter10Current } from './chapter-10-electric-current-and-magnetic-effect';
import { chapter11Electronics } from './chapter-11-fundamentals-of-electronics';

// Chapters 1-11 are fully authored; the last remaining chapter is an
// outline-only stub — a real, navigable page with an accurate section
// map, upgraded to a full chapter last.

const chapter12: Chapter = {
  slug: 'atomic-and-modern-physics',
  number: 12,
  title: 'Modern Physics',
  blurb: "Cathode rays, X-rays, Bohr's hydrogen atom and atomic spectra, the photoelectric effect, isotopes, and red shift and Hubble's law.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'cathode-rays-and-x-rays-topic',
      title: 'Cathode Rays and X-Rays',
      concepts: [
        { slug: 'cathode-rays', title: 'Cathode Rays' },
        { slug: 'x-rays', title: 'X-Rays' },
      ],
    },
    {
      slug: 'bohrs-atom-topic',
      title: "Bohr's Hydrogen Atom & Atomic Spectra",
      concepts: [{ slug: 'bohrs-hydrogen-atom-and-atomic-spectra', title: "Bohr's Hydrogen Atom & Atomic Spectra" }],
    },
    {
      slug: 'photoelectric-effect-topic',
      title: 'Photoelectric Effect & Photon Concept',
      concepts: [{ slug: 'photoelectric-effect-and-photon-concept', title: 'Photoelectric Effect & Photon Concept' }],
    },
    {
      slug: 'isotopes-topic',
      title: 'Isotopes',
      concepts: [{ slug: 'isotopes-b-level', title: 'Isotopes' }],
    },
    {
      slug: 'redshift-and-hubbles-law-topic',
      title: "Red Shift, Hubble's Law & Age of Universe",
      concepts: [{ slug: 'redshift-hubbles-law-and-age-of-universe', title: "Red Shift, Hubble's Law & Age of Universe" }],
    },
  ],
};

export const bLevelPhysics: Level = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'Twelve chapters — from motion in a plane through modern physics.',
  status: 'available',
  chapters: [
    chapter1MotionInAPlane, chapter2RotationalDynamics, chapter3Pressure, chapter4Power, chapter5Heat, chapter6Vibration,
    chapter7Refraction, chapter8Lenses, chapter9ElectricField, chapter10Current, chapter11Electronics, chapter12,
  ],
};
