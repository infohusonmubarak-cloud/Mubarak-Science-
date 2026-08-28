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
import { chapter11AQuantum } from './chapter-11-quantum-and-atomic-physics';

// All 11 chapters are fully authored.

export const aLevelPhysics = {
  slug: 'a-level',
  name: 'A-Level',
  description: 'Eleven chapters — from units and measurement through quantum and atomic physics.',
  status: 'available' as const,
  chapters: [
    chapter1AUnits, chapter2Physics, chapter3AForces, chapter4APressure, chapter5AWorkEnergy, chapter6AHeat,
    chapter7AWave, chapter8ALight, chapter9AElectricity, chapter10AMagnetism, chapter11AQuantum,
  ],
};
