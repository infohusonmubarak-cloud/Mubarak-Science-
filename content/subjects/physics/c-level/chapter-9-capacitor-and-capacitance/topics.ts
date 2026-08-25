import type { Topic } from '@/types/content';

// Navigation outline for Chapter 9, matching the textbook's section
// list: capacitors; capacitance of a capacitor; the parallel-plate
// capacitor; energy stored in a capacitor; combination of capacitors.
export const chapter9CCapacitorTopics: Topic[] = [
  {
    slug: 'capacitors-topic',
    title: '9.1 Capacitors',
    concepts: [{ slug: 'capacitors', title: 'Capacitors', difficulty: 'easy' }],
  },
  {
    slug: 'capacitance-topic',
    title: '9.2 Capacitance of a Capacitor',
    concepts: [{ slug: 'capacitance-of-a-capacitor', title: 'Capacitance of a Capacitor', difficulty: 'medium' }],
  },
  {
    slug: 'parallel-plate-capacitor-topic',
    title: '9.3 Parallel-Plate Capacitor',
    concepts: [{ slug: 'parallel-plate-capacitor', title: 'The Parallel-Plate Capacitor', difficulty: 'medium' }],
  },
  {
    slug: 'energy-stored-topic',
    title: '9.4 Energy Stored in a Capacitor',
    concepts: [{ slug: 'energy-stored-in-a-capacitor', title: 'Energy Stored in a Capacitor', difficulty: 'medium' }],
  },
  {
    slug: 'combination-of-capacitors-topic',
    title: '9.5 Combination of Capacitors',
    concepts: [{ slug: 'capacitors-in-series-and-parallel', title: 'Combination of Capacitors', difficulty: 'hard' }],
  },
];
