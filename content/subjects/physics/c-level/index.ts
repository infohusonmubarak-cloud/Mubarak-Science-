import type { Chapter, Level } from '@/types/content';
import { chapter1CRotation } from './chapter-1-rotational-motion';
import { chapter2ForcesInCircularMotion } from './chapter-2-forces-in-circular-motion';
import { chapter3CFluid } from './chapter-3-fluid-dynamics';
import { chapter4CEnergy } from './chapter-4-sources-of-energy-and-environmental-impacts';
import { chapter5CHeat } from './chapter-5-heat-transfer-and-thermodynamics';
import { chapter6CSound } from './chapter-6-effects-and-characteristics-of-sound';
import { chapter7COptics } from './chapter-7-applications-of-light-and-optical-instruments';
import { chapter8CInterference } from './chapter-8-interference-and-diffraction-of-light';
import { chapter9CCapacitor } from './chapter-9-capacitor-and-capacitance';
import { chapter10CElectrical } from './chapter-10-electrical-energy-power-and-heating-effect';
import { chapter11CInduction } from './chapter-11-electromagnetic-induction-generation-and-distribution';

// Chapters 1-11 are fully authored. The other two are outline-only
// stubs — real, navigable pages with an accurate topic/concept map, no
// full bodies yet.

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
    chapter1CRotation, chapter2ForcesInCircularMotion, chapter3CFluid, chapter4CEnergy, chapter5CHeat, chapter6CSound, chapter7COptics, chapter8CInterference,
    chapter9CCapacitor, chapter10CElectrical, chapter11CInduction, chapter12, chapter13,
  ],
};
