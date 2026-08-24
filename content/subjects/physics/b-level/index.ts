import type { Chapter, Level } from '@/types/content';
import { chapter1MotionInAPlane } from './chapter-1-motion-in-a-plane';
import { chapter2RotationalDynamics } from './chapter-2-rotational-dynamics';
import { chapter3Pressure } from './chapter-3-pressure-in-fluids-and-atmosphere';
import { chapter4Power } from './chapter-4-power-and-efficiency';
import { chapter5Heat } from './chapter-5-heat-and-thermal-phenomena';
import { chapter6Vibration } from './chapter-6-vibration-of-strings-and-resonance';

// Chapters 1-6 are fully authored; the remaining six are outline-only
// stubs for now — real, navigable pages with an accurate section map,
// upgraded to full chapters one batch at a time.

const chapter7: Chapter = {
  slug: 'refraction-of-light-b-level',
  number: 7,
  title: 'Refraction of Light',
  blurb: 'The nature and velocity of light, the laws of refraction, refractive index, critical angle and total internal reflection.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'nature-and-velocity-of-light-topic',
      title: 'The Nature of Light and Velocity of Light',
      concepts: [
        { slug: 'the-nature-of-light', title: 'The Nature of Light' },
        { slug: 'velocity-of-light', title: 'Velocity of Light' },
      ],
    },
    {
      slug: 'refraction-and-laws-topic',
      title: 'Refraction of Light and Laws of Refraction',
      concepts: [
        { slug: 'refraction-of-light-b-level', title: 'Refraction of Light' },
        { slug: 'laws-of-refraction', title: 'Laws of Refraction' },
      ],
    },
    {
      slug: 'refractive-index-topic',
      title: 'Refractive Index',
      concepts: [{ slug: 'refractive-index-b-level', title: 'Refractive Index' }],
    },
    {
      slug: 'critical-angle-and-tir-topic',
      title: 'Critical Angle and Total Internal Reflection',
      concepts: [{ slug: 'critical-angle-and-total-internal-reflection', title: 'Critical Angle and Total Internal Reflection' }],
    },
  ],
};

const chapter8: Chapter = {
  slug: 'lenses',
  number: 8,
  title: 'Lenses',
  blurb: 'Refraction at a curved surface, the lens equation, image formation through lenses, and the power of a lens.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'refraction-at-curved-surface-topic',
      title: 'Refraction at a Curved Surface',
      concepts: [{ slug: 'refraction-at-a-curved-surface', title: 'Refraction at a Curved Surface' }],
    },
    {
      slug: 'lens-equation-topic',
      title: 'The Lens Equation',
      concepts: [{ slug: 'the-lens-equation', title: 'The Lens Equation' }],
    },
    {
      slug: 'refraction-through-lenses-topic',
      title: 'Refraction Through Lenses',
      concepts: [{ slug: 'refraction-through-lenses', title: 'Refraction Through Lenses' }],
    },
    {
      slug: 'power-of-a-lens-topic',
      title: 'Power of a Lens',
      concepts: [{ slug: 'power-of-a-lens', title: 'Power of a Lens' }],
    },
  ],
};

const chapter9: Chapter = {
  slug: 'electric-field',
  number: 9,
  title: 'Electric Field',
  blurb: "Coulomb's law, electric field intensity, lines of force, charge distribution, electric potential and potential difference, and equipotential surfaces.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'coulombs-law-topic',
      title: "Coulomb's Law",
      concepts: [{ slug: 'coulombs-law', title: "Coulomb's Law" }],
    },
    {
      slug: 'electric-field-and-lines-of-force-topic',
      title: 'Electric Field, Electric Field Intensity and Lines of Force',
      concepts: [
        { slug: 'electric-field-and-field-intensity', title: 'Electric Field and Electric Field Intensity' },
        { slug: 'electric-lines-of-force', title: 'Electric Lines of Force' },
        { slug: 'electric-charge-distribution', title: 'Electric Charge Distribution' },
      ],
    },
    {
      slug: 'electric-potential-topic',
      title: 'Electric Potential and Potential Difference',
      concepts: [
        { slug: 'electric-potential-and-potential-difference', title: 'Electric Potential and Potential Difference' },
        { slug: 'equipotential-surfaces', title: 'Equipotential Surfaces' },
        { slug: 'electric-potential-of-the-earth', title: 'Electric Potential of the Earth' },
        { slug: 'potential-difference-between-parallel-plates', title: 'Potential Difference Between Two Parallel Charged Plates' },
      ],
    },
  ],
};

const chapter10: Chapter = {
  slug: 'electric-current-and-magnetic-effect',
  number: 10,
  title: 'Electric Current & Magnetic Effect',
  blurb: "Current and its effects, Ohm's law, resistors and their combinations, the magnetic field due to a current, electromagnets, and meters.",
  status: 'coming-soon',
  topics: [
    {
      slug: 'current-and-its-effects-topic',
      title: 'Current and Effects of Current',
      concepts: [{ slug: 'current-and-effects-of-current', title: 'Current and Effects of Current' }],
    },
    {
      slug: 'ohms-law-and-resistors-topic',
      title: "Ohm's Law, Electrical Resistance and Resistors",
      concepts: [
        { slug: 'ohms-law-and-resistance', title: "Ohm's Law and Electrical Resistance" },
        { slug: 'resistors-b-level', title: 'Resistors' },
        { slug: 'resistors-in-series-and-parallel-b-level', title: 'Resistors in Series and Resistors in Parallel' },
      ],
    },
    {
      slug: 'magnetic-effect-topic',
      title: 'Magnetic Field Due to an Electric Current and Electromagnets',
      concepts: [
        { slug: 'magnetic-field-due-to-current', title: 'Magnetic Field Due to an Electric Current' },
        { slug: 'electromagnets', title: 'Electromagnets' },
        { slug: 'ammeter-and-voltmeter', title: 'Ammeter and Voltmeter' },
      ],
    },
  ],
};

const chapter11: Chapter = {
  slug: 'fundamentals-of-electronics',
  number: 11,
  title: 'Fundamentals of Electronics',
  blurb: 'Semiconductors, the transistor, integrated circuits, and logic gates.',
  status: 'coming-soon',
  topics: [
    {
      slug: 'semiconductors-topic',
      title: 'Semiconductors',
      concepts: [{ slug: 'semiconductors', title: 'Semiconductors' }],
    },
    {
      slug: 'transistor-topic',
      title: 'Transistor',
      concepts: [{ slug: 'the-transistor', title: 'Transistor' }],
    },
    {
      slug: 'integrated-circuit-topic',
      title: 'Integrated Circuit',
      concepts: [{ slug: 'the-integrated-circuit', title: 'Integrated Circuit' }],
    },
    {
      slug: 'logic-gate-topic',
      title: 'Logic Gate',
      concepts: [{ slug: 'logic-gates-b-level', title: 'Logic Gate' }],
    },
  ],
};

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
    chapter7, chapter8, chapter9, chapter10, chapter11, chapter12,
  ],
};
