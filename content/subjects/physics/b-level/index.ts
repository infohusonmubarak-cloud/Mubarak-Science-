import type { Level } from '@/types/content';
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
import { chapter12Modern } from './chapter-12-atomic-and-modern-physics';

export const bLevelPhysics: Level = {
  slug: 'b-level',
  name: 'B-Level',
  description: 'Twelve chapters — from motion in a plane through modern physics.',
  status: 'available',
  chapters: [
    chapter1MotionInAPlane, chapter2RotationalDynamics, chapter3Pressure, chapter4Power, chapter5Heat, chapter6Vibration,
    chapter7Refraction, chapter8Lenses, chapter9ElectricField, chapter10Current, chapter11Electronics, chapter12Modern,
  ],
};
