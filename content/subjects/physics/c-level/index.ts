import type { Chapter, Level } from '@/types/content';
import { chapter1CRotation } from './chapter-1-rotational-motion';
import { chapter2ForcesInCircularMotion } from './chapter-2-forces-in-circular-motion';
import { chapter3CFluid } from './chapter-3-fluid-dynamics';
import { chapter4CEnergy } from './chapter-4-sources-of-energy-and-environmental-impacts';
import { chapter5CHeat } from './chapter-5-heat-transfer-and-thermodynamics';
import { chapter6CSound } from './chapter-6-effects-and-characteristics-of-sound';
import { chapter7COptics } from './chapter-7-applications-of-light-and-optical-instruments';

// Chapters 1-7 are fully authored. The other six are outline-only
// stubs — real, navigable pages with an accurate topic/concept map, no
// full bodies yet.

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
    chapter1CRotation, chapter2ForcesInCircularMotion, chapter3CFluid, chapter4CEnergy, chapter5CHeat, chapter6CSound, chapter7COptics,
    chapter8, chapter9, chapter10, chapter11, chapter12, chapter13,
  ],
};
