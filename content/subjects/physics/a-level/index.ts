import type { Chapter } from '@/types/content';
import { chapter2Physics } from './chapter-2-motion';

// Chapter 2 is the fully-authored reference chapter for this pass. The
// other ten are outline-only stubs — real, navigable pages with an
// accurate topic/concept map, no full bodies yet.

const chapter1: Chapter = {
  slug: 'units-and-measurement',
  number: 1,
  title: 'Units and Measurement',
  blurb: 'SI units and prefixes, scalars vs. vectors, and how physicists handle uncertainty and significant figures.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'physical-quantities-and-units',
      title: 'Physical Quantities and Units',
      concepts: [
        { slug: 'physical-quantities', title: 'Physical Quantities' },
        { slug: 'si-units-and-prefixes', title: 'SI Units and Prefixes' },
        { slug: 'scientific-notation', title: 'Scientific Notation' },
      ],
    },
    {
      slug: 'scalars-vectors-and-uncertainty',
      title: 'Scalars, Vectors and Uncertainty',
      concepts: [
        { slug: 'scalars-and-vectors', title: 'Scalars and Vectors' },
        { slug: 'accuracy-precision-and-uncertainty', title: 'Accuracy, Precision and Measurement Uncertainty' },
        { slug: 'significant-figures', title: 'Significant Figures' },
        { slug: 'dimensional-analysis', title: 'Dimensional Analysis' },
      ],
    },
  ],
};

const chapter3: Chapter = {
  slug: 'forces',
  number: 3,
  title: 'Forces',
  blurb: "Newton's laws, mass and weight, friction and tension, resultant force and equilibrium, and momentum.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'newtons-laws',
      title: "Newton's Laws",
      concepts: [
        { slug: 'newtons-laws-of-motion', title: "Newton's Laws of Motion" },
        { slug: 'mass-and-weight', title: 'Mass and Weight' },
      ],
    },
    {
      slug: 'types-of-force',
      title: 'Types of Force',
      concepts: [
        { slug: 'friction-and-normal-reaction', title: 'Friction and Normal Reaction' },
        { slug: 'tension', title: 'Tension' },
        { slug: 'resultant-force-and-equilibrium', title: 'Resultant Force and Equilibrium' },
      ],
    },
    {
      slug: 'momentum',
      title: 'Momentum',
      concepts: [
        { slug: 'momentum-and-impulse', title: 'Momentum and Impulse' },
        { slug: 'circular-motion-introduction', title: 'Introduction to Circular Motion' },
      ],
    },
  ],
};

const chapter4: Chapter = {
  slug: 'pressure',
  number: 4,
  title: 'Pressure',
  blurb: 'Pressure from force and area, atmospheric and liquid pressure, and hydraulic systems using Pascal\'s principle.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'pressure-basics',
      title: 'Pressure Basics',
      concepts: [
        { slug: 'pressure-force-and-area', title: 'Pressure, Force and Area' },
        { slug: 'atmospheric-pressure', title: 'Atmospheric Pressure' },
      ],
    },
    {
      slug: 'pressure-in-liquids',
      title: 'Pressure in Liquids',
      concepts: [
        { slug: 'liquid-pressure-and-density', title: 'Liquid Pressure and Density' },
        { slug: 'pascals-principle-and-hydraulics', title: "Pascal's Principle and Hydraulic Systems" },
      ],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'work-and-energy',
  number: 5,
  title: 'Work and Energy',
  blurb: 'Work, power and efficiency, and the kinetic, gravitational and elastic potential energy stores, tied together by conservation of energy.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'work-and-power',
      title: 'Work and Power',
      concepts: [
        { slug: 'work-done', title: 'Work Done' },
        { slug: 'power-and-efficiency-a-level', title: 'Power and Efficiency' },
      ],
    },
    {
      slug: 'forms-of-energy',
      title: 'Forms of Energy',
      concepts: [
        { slug: 'kinetic-energy', title: 'Kinetic Energy' },
        { slug: 'gravitational-potential-energy', title: 'Gravitational Potential Energy' },
        { slug: 'elastic-potential-energy', title: 'Elastic Potential Energy' },
        { slug: 'conservation-of-energy', title: 'Conservation of Energy' },
      ],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'heat-and-temperature',
  number: 6,
  title: 'Heat and Temperature',
  blurb: 'The difference between heat and temperature, how heat transfers by conduction, convection and radiation, and specific heat and latent heat.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'heat-and-temperature-basics',
      title: 'Heat and Temperature',
      concepts: [
        { slug: 'heat-and-temperature', title: 'Heat vs. Temperature' },
        { slug: 'thermal-and-internal-energy', title: 'Thermal and Internal Energy' },
      ],
    },
    {
      slug: 'heat-transfer',
      title: 'Heat Transfer',
      concepts: [
        { slug: 'conduction-convection-and-radiation', title: 'Conduction, Convection and Radiation' },
        { slug: 'thermal-expansion', title: 'Thermal Expansion' },
      ],
    },
    {
      slug: 'specific-heat-and-latent-heat',
      title: 'Specific Heat and Latent Heat',
      concepts: [
        { slug: 'specific-heat-capacity-a-level', title: 'Specific Heat Capacity' },
        { slug: 'specific-latent-heat', title: 'Specific Latent Heat' },
        { slug: 'changes-of-state', title: 'Changes of State' },
      ],
    },
  ],
};

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
    chapter1, chapter2Physics, chapter3, chapter4, chapter5, chapter6,
    chapter7, chapter8, chapter9, chapter10, chapter11,
  ],
};
