import type { Topic } from '@/types/content';

// Navigation outline for Chapter 13, matching the textbook's section
// list: radioactivity and its uses; nuclear energy and its
// environmental impact; wave-particle dualism; the principle of
// special relativity.
export const chapter13CModernTopics: Topic[] = [
  {
    slug: 'radioactivity-topic',
    title: '13.1 Radioactivity and Uses of Radioactivity',
    concepts: [{ slug: 'radioactivity-and-its-uses', title: 'Radioactivity and Its Uses', difficulty: 'medium' }],
  },
  {
    slug: 'nuclear-energy-topic',
    title: '13.2 Nuclear Energy and Its Environmental Impact',
    concepts: [{ slug: 'nuclear-energy-and-environmental-impact', title: 'Nuclear Energy and Its Environmental Impact', difficulty: 'medium' }],
  },
  {
    slug: 'wave-particle-dualism-topic',
    title: '13.3 Wave-Particle Dualism',
    concepts: [{ slug: 'wave-particle-duality', title: 'Wave-Particle Dualism', difficulty: 'hard' }],
  },
  {
    slug: 'special-relativity-topic',
    title: '13.4 Principle of Special Theory of Relativity',
    concepts: [{ slug: 'special-theory-of-relativity', title: 'Principle of Special Theory of Relativity', difficulty: 'hard' }],
  },
];
