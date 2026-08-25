import type { Chapter, Level } from '@/types/content';
import { chapter1CRotation } from './chapter-1-rotational-motion';
import { chapter2ForcesInCircularMotion } from './chapter-2-forces-in-circular-motion';
import { chapter3CFluid } from './chapter-3-fluid-dynamics';

// Chapters 1-3 are fully authored. The other ten are outline-only
// stubs — real, navigable pages with an accurate topic/concept map, no
// full bodies yet.

const chapter4: Chapter = {
  slug: 'sources-of-energy-and-environmental-impacts',
  number: 4,
  title: 'Sources of Energy and Environmental Impacts',
  blurb: 'The energy crisis, renewable and non-renewable energy sources, and the environmental consequences of how we generate energy.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'energy-demand-and-sources',
      title: 'Energy Demand and Sources of Energy',
      concepts: [
        { slug: 'energy-demand-and-crisis', title: 'Energy Demand and Crisis' },
        { slug: 'sources-of-energy-overview', title: 'Sources of Energy — Overview' },
      ],
    },
    {
      slug: 'renewable-and-non-renewable-sources',
      title: 'Non-Renewable and Renewable Sources of Energy',
      concepts: [
        { slug: 'non-renewable-energy-sources', title: 'Non-Renewable Sources of Energy' },
        { slug: 'renewable-energy-sources', title: 'Renewable Sources of Energy' },
      ],
    },
    {
      slug: 'environmental-impacts-topic',
      title: 'Environmental Impacts and Consequences',
      concepts: [{ slug: 'environmental-impacts-of-energy-use', title: 'Environmental Impacts and Consequences' }],
    },
  ],
};

const chapter5: Chapter = {
  slug: 'heat-transfer-and-thermodynamics',
  number: 5,
  title: 'Heat Transfer and Thermodynamics',
  blurb: 'How heat moves, the first law of thermodynamics, and how heat engines convert heat into work.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'heat-transfer-topic',
      title: 'Heat Transfer',
      concepts: [{ slug: 'mechanisms-of-heat-transfer', title: 'Mechanisms of Heat Transfer' }],
    },
    {
      slug: 'thermodynamics-topic',
      title: 'Thermodynamics',
      concepts: [
        { slug: 'internal-energy-and-work', title: 'Internal Energy and Work' },
        { slug: 'first-law-of-thermodynamics', title: 'The First Law of Thermodynamics' },
      ],
    },
    {
      slug: 'heat-engines-topic',
      title: 'Heat Engines',
      concepts: [{ slug: 'heat-engines-and-efficiency', title: 'Heat Engines and Efficiency' }],
    },
  ],
};

const chapter6: Chapter = {
  slug: 'effects-and-characteristics-of-sound',
  number: 6,
  title: 'Effects and Characteristics of Sound',
  blurb: 'How sound travels, echoes, audibility, the Doppler effect, and the properties of sound waves.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'propagation-and-echo',
      title: 'Propagation of Sound in a Medium and Echo',
      concepts: [
        { slug: 'propagation-of-sound', title: 'Propagation of Sound in a Medium' },
        { slug: 'echo', title: 'Echo' },
      ],
    },
    {
      slug: 'audibility-and-doppler-effect',
      title: 'Audibility and the Doppler Effect',
      concepts: [
        { slug: 'audibility-and-hearing-range', title: 'Audibility' },
        { slug: 'doppler-effect', title: 'The Doppler Effect' },
      ],
    },
    {
      slug: 'properties-of-sound-waves-topic',
      title: 'Properties of Sound Waves',
      concepts: [{ slug: 'properties-of-sound-waves', title: 'Properties of Sound Waves' }],
    },
  ],
};

const chapter7: Chapter = {
  slug: 'applications-of-light-and-optical-instruments',
  number: 7,
  title: 'Applications of Light and Optical Instruments',
  blurb: 'How the camera, the eye, microscopes, telescopes, lasers, fibre optics, spectrometers and photometry all put light to work.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'the-camera-and-human-eye',
      title: 'The Camera and the Human Eye',
      concepts: [
        { slug: 'the-camera', title: 'The Camera' },
        { slug: 'the-human-eye', title: 'The Human Eye' },
      ],
    },
    {
      slug: 'microscope-and-telescope',
      title: 'Compound Microscope and Telescope',
      concepts: [
        { slug: 'compound-microscope', title: 'The Compound Microscope' },
        { slug: 'astronomical-telescope', title: 'The Telescope' },
      ],
    },
    {
      slug: 'laser-and-fibre-optics',
      title: 'Laser and Fibre Optics',
      concepts: [
        { slug: 'laser-light', title: 'The Laser' },
        { slug: 'fibre-optics-and-total-internal-reflection', title: 'Fibre Optics' },
      ],
    },
    {
      slug: 'spectrometer-and-photometry',
      title: 'Spectrometer and Photometry',
      concepts: [
        { slug: 'spectrometer', title: 'The Spectrometer' },
        { slug: 'photometry-and-light-intensity', title: 'Photometry' },
      ],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'interference-and-diffraction-of-light',
  number: 8,
  title: 'Interference and Diffraction of Light',
  blurb: "Huygens' principle, interference and diffraction of light, and how a diffraction grating splits it into a spectrum.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'huygens-principle-topic',
      title: "Huygens' Principle",
      concepts: [{ slug: 'huygens-principle', title: "Huygens' Principle" }],
    },
    {
      slug: 'interference-and-diffraction-topic',
      title: 'Interference and Diffraction of Light',
      concepts: [
        { slug: 'interference-of-light', title: 'Interference of Light' },
        { slug: 'diffraction-of-light', title: 'Diffraction of Light' },
      ],
    },
    {
      slug: 'diffraction-grating-topic',
      title: 'Diffraction Grating',
      concepts: [{ slug: 'diffraction-grating', title: 'The Diffraction Grating' }],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'capacitor-and-capacitance',
  number: 9,
  title: 'Capacitor and Capacitance',
  blurb: 'What a capacitor is, the parallel-plate capacitor, the energy it stores, and combining capacitors in series and parallel.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'capacitors-and-capacitance-topic',
      title: 'Capacitors and Capacitance',
      concepts: [{ slug: 'capacitors-and-capacitance', title: 'Capacitors and Capacitance' }],
    },
    {
      slug: 'parallel-plate-capacitor-topic',
      title: 'Parallel-Plate Capacitor',
      concepts: [{ slug: 'parallel-plate-capacitor', title: 'The Parallel-Plate Capacitor' }],
    },
    {
      slug: 'energy-and-combinations',
      title: 'Energy Stored and Combination of Capacitors',
      concepts: [
        { slug: 'energy-stored-in-a-capacitor', title: 'Energy Stored in a Capacitor' },
        { slug: 'capacitors-in-series-and-parallel', title: 'Combination of Capacitors' },
      ],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'electrical-energy-power-and-heating-effect',
  number: 10,
  title: 'Electrical Energy, Power and Heating Effect of Electric Current',
  blurb: "EMF and circuits, batteries in series and parallel, electrical power, and Joule's law of heating.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'emf-and-circuits',
      title: 'Electromotive Force and Electric Circuits',
      concepts: [
        { slug: 'electromotive-force-and-circuits', title: 'Electromotive Force and Electric Circuits' },
        { slug: 'batteries-in-series-and-parallel', title: 'Batteries in Series and in Parallel' },
      ],
    },
    {
      slug: 'electrical-energy-and-power-topic',
      title: 'Electrical Energy and Electrical Power',
      concepts: [{ slug: 'electrical-energy-and-power', title: 'Electrical Energy and Electrical Power' }],
    },
    {
      slug: 'joules-law-and-applications',
      title: "Joule's Law of Electricity and Heat",
      concepts: [
        { slug: 'joules-law-of-heating', title: "Joule's Law of Heating" },
        { slug: 'applications-of-heating-effect', title: 'Applications of the Heating Effect of Current' },
      ],
    },
  ],
};

const chapter11: Chapter = {
  slug: 'electromagnetic-induction-generation-and-distribution',
  number: 11,
  title: 'Electromagnetic Induction, Generation and Distribution of Electricity',
  blurb: "Alternating current, Faraday's and Lenz's laws, and how electricity is transmitted, wired into houses, and used safely.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'ac-and-induction',
      title: 'Alternating Current and Electromagnetic Induction',
      concepts: [
        { slug: 'alternating-current', title: 'Alternating Current' },
        { slug: 'electromagnetic-induction-basics', title: 'Electromagnetic Induction' },
        { slug: 'faradays-law-and-lenzs-law', title: "Faraday's Law and Lenz's Law" },
      ],
    },
    {
      slug: 'applications-of-induction',
      title: 'Applications of Electromagnetic Induction',
      concepts: [{ slug: 'applications-of-electromagnetic-induction', title: 'Applications of Electromagnetic Induction' }],
    },
    {
      slug: 'transmission-wiring-and-safety',
      title: 'Power Transmission, House Wiring and Safety',
      concepts: [
        { slug: 'power-transmission', title: 'Power Transmission' },
        { slug: 'house-wiring-principles', title: 'Principles of House Wiring' },
        { slug: 'electrical-safety', title: 'Dangers of Electricity' },
      ],
    },
  ],
};

const chapter12: Chapter = {
  slug: 'digital-electronics-and-communication-system',
  number: 12,
  title: 'Digital Electronics and Communication System',
  blurb: 'Electronic systems, analog vs. digital signals, logic gates, and the basics of electronic communication.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'electronic-systems-topic',
      title: 'Electronic System',
      concepts: [{ slug: 'electronic-systems', title: 'Electronic Systems' }],
    },
    {
      slug: 'digital-electronics-topic',
      title: 'Digital Electronics',
      concepts: [
        { slug: 'analog-and-digital-signals', title: 'Analog and Digital Signals' },
        { slug: 'logic-gates-and-truth-tables', title: 'Logic Gates and Truth Tables' },
      ],
    },
    {
      slug: 'communication-topic',
      title: 'Basic Electronic Communication',
      concepts: [{ slug: 'communication-systems-basics', title: 'Basic Electronic Communication' }],
    },
  ],
};

const chapter13: Chapter = {
  slug: 'modern-physics',
  number: 13,
  title: 'Modern Physics',
  blurb: 'Radioactivity and nuclear energy, wave-particle duality, and the principles of special relativity.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'radioactivity-and-nuclear-energy',
      title: 'Radioactivity and Nuclear Energy',
      concepts: [
        { slug: 'radioactivity-and-its-uses', title: 'Radioactivity and Its Uses' },
        { slug: 'nuclear-energy-and-environmental-impact', title: 'Nuclear Energy and Its Environmental Impact' },
      ],
    },
    {
      slug: 'wave-particle-dualism-and-relativity',
      title: 'Wave-Particle Dualism and Special Relativity',
      concepts: [
        { slug: 'wave-particle-duality', title: 'Wave-Particle Dualism' },
        { slug: 'special-theory-of-relativity', title: 'Principles of Special Theory of Relativity' },
      ],
    },
  ],
};

export const cLevelPhysics: Level = {
  slug: 'c-level',
  name: 'C-Level',
  description: 'Thirteen chapters — from rotational motion and fluid dynamics through modern physics.',
  status: 'available',
  chapters: [
    chapter1CRotation, chapter2ForcesInCircularMotion, chapter3CFluid, chapter4, chapter5, chapter6, chapter7,
    chapter8, chapter9, chapter10, chapter11, chapter12, chapter13,
  ],
};
