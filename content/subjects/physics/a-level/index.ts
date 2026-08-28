import type { Chapter } from '@/types/content';
import { chapter1AUnits } from './chapter-1-units-and-measurements';
import { chapter2Physics } from './chapter-2-motion';
import { chapter3AForces } from './chapter-3-forces';
import { chapter4APressure } from './chapter-4-pressure';
import { chapter5AWorkEnergy } from './chapter-5-work-and-energy';
import { chapter6AHeat } from './chapter-6-heat-and-temperature';

// Chapters 1-6 are fully authored. The other five are outline-only
// stubs — real, navigable pages with an accurate topic/concept map, no
// full bodies yet.

const chapter7: Chapter = {
  slug: 'waves-and-sound',
  number: 7,
  title: 'Waves and Sound',
  blurb: 'Transverse and longitudinal waves, wave speed, reflection, refraction, diffraction and interference, and how sound and ultrasound work.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'wave-basics',
      title: 'Wave Basics',
      concepts: [
        { slug: 'wave-properties', title: 'Transverse and Longitudinal Waves' },
        { slug: 'wave-speed-equation', title: 'The Wave Speed Equation' },
      ],
    },
    {
      slug: 'wave-behaviour',
      title: 'Wave Behaviour',
      concepts: [
        { slug: 'reflection-refraction-diffraction', title: 'Reflection, Refraction and Diffraction' },
        { slug: 'interference', title: 'Interference' },
      ],
    },
    {
      slug: 'sound',
      title: 'Sound',
      concepts: [
        { slug: 'sound-waves-pitch-and-loudness', title: 'Sound Waves, Pitch and Loudness' },
        { slug: 'ultrasound', title: 'Ultrasound' },
      ],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'light',
  number: 8,
  title: 'Light',
  blurb: 'Reflection, refraction and refractive index, lenses and image formation, and dispersion and optical instruments.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'reflection-and-refraction',
      title: 'Reflection and Refraction',
      concepts: [
        { slug: 'reflection-of-light', title: 'Reflection of Light' },
        { slug: 'refraction-and-refractive-index', title: 'Refraction and Refractive Index' },
        { slug: 'total-internal-reflection', title: 'Total Internal Reflection' },
      ],
    },
    {
      slug: 'lenses-and-images',
      title: 'Lenses and Images',
      concepts: [
        { slug: 'mirrors-and-lenses', title: 'Mirrors and Lenses' },
        { slug: 'image-formation', title: 'Image Formation' },
      ],
    },
    {
      slug: 'light-phenomena',
      title: 'Light Phenomena',
      concepts: [
        { slug: 'dispersion-and-spectrum', title: 'Dispersion and the Spectrum' },
        { slug: 'optical-instruments', title: 'Optical Instruments' },
      ],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'electricity',
  number: 9,
  title: 'Electricity',
  blurb: "Charge, current, potential difference and Ohm's law, series and parallel circuits, and electrical power and energy.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'current-and-potential-difference',
      title: 'Current and Potential Difference',
      concepts: [
        { slug: 'electric-charge-and-current', title: 'Electric Charge and Current' },
        { slug: 'potential-difference', title: 'Potential Difference' },
        { slug: 'resistance-and-ohms-law', title: "Resistance and Ohm's Law" },
      ],
    },
    {
      slug: 'circuits',
      title: 'Circuits',
      concepts: [
        { slug: 'series-circuits', title: 'Series Circuits' },
        { slug: 'parallel-circuits', title: 'Parallel Circuits' },
        { slug: 'conductors-and-insulators', title: 'Conductors and Insulators' },
      ],
    },
    {
      slug: 'electrical-power',
      title: 'Electrical Power',
      concepts: [{ slug: 'electrical-power-and-energy', title: 'Electrical Power and Energy' }],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'magnetism',
  number: 10,
  title: 'Magnetism',
  blurb: 'Magnetic fields and electromagnets, the force on a current-carrying conductor, and how motors, generators and transformers work.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'magnetic-fields',
      title: 'Magnetic Fields',
      concepts: [
        { slug: 'magnets-and-magnetic-fields', title: 'Magnets and Magnetic Fields' },
        { slug: 'electromagnets-a-level', title: 'Electromagnets' },
      ],
    },
    {
      slug: 'electromagnetism',
      title: 'Electromagnetism',
      concepts: [
        { slug: 'force-on-a-current-carrying-conductor', title: 'Force on a Current-Carrying Conductor' },
        { slug: 'electric-motors', title: 'Electric Motors' },
        { slug: 'electromagnetic-induction', title: 'Electromagnetic Induction' },
        { slug: 'generators-and-transformers', title: 'Generators and Transformers' },
      ],
    },
  ],
};

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
    chapter7, chapter8, chapter9, chapter10, chapter11,
  ],
};
