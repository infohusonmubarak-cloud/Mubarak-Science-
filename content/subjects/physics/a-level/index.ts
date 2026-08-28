import type { Chapter } from '@/types/content';
import { chapter1AUnits } from './chapter-1-units-and-measurements';
import { chapter2Physics } from './chapter-2-motion';
import { chapter3AForces } from './chapter-3-forces';
import { chapter4APressure } from './chapter-4-pressure';
import { chapter5AWorkEnergy } from './chapter-5-work-and-energy';
import { chapter6AHeat } from './chapter-6-heat-and-temperature';
import { chapter7AWave } from './chapter-7-wave-and-sound';
import { chapter8ALight } from './chapter-8-light';
import { chapter9AElectricity } from './chapter-9-electricity';
import { chapter10AMagnetism } from './chapter-10-magnetism';

// Chapters 1-10 are fully authored. Chapter 11 is the last
// outline-only stub — a real, navigable page with an accurate
// topic/concept map, no full body yet.

const chapter11: Chapter = {
  slug: 'quantum-and-atomic-physics',
  number: 11,
  title: 'Quantum and Atomic Physics',
  blurb: 'Energy levels and photons, the photoelectric effect, radioactivity and half-life, and nuclear fission and fusion.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'atoms-and-photons',
      title: 'Atoms and Photons',
      concepts: [
        { slug: 'atomic-structure-and-energy-levels', title: 'Atomic Structure and Energy Levels' },
        { slug: 'photons-and-quantization', title: 'Photons and Quantization' },
        { slug: 'the-photoelectric-effect', title: 'The Photoelectric Effect' },
      ],
    },
    {
      slug: 'radioactivity',
      title: 'Radioactivity',
      concepts: [
        { slug: 'nuclear-structure', title: 'Nuclear Structure' },
        { slug: 'types-of-radioactive-decay', title: 'Alpha, Beta and Gamma Decay' },
        { slug: 'half-life', title: 'Half-Life' },
      ],
    },
    {
      slug: 'nuclear-energy',
      title: 'Nuclear Energy',
      concepts: [
        { slug: 'nuclear-fission-and-fusion', title: 'Nuclear Fission and Fusion' },
        { slug: 'radiation-safety-and-applications', title: 'Radiation Safety and Applications' },
      ],
    },
  ],
};

export const aLevelPhysics = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Eleven chapters — from units and measurement through quantum and atomic physics.',
  status: 'available' as const,
  chapters: [
    chapter1AUnits, chapter2Physics, chapter3AForces, chapter4APressure, chapter5AWorkEnergy, chapter6AHeat,
    chapter7AWave, chapter8ALight, chapter9AElectricity, chapter10AMagnetism, chapter11,
  ],
};
