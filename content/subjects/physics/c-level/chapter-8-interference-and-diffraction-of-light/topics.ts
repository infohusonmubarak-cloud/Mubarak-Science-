import type { Topic } from '@/types/content';

// Navigation outline for Chapter 8, matching the textbook's section
// list: Huygens' principle; interference of light; diffraction of
// light; the diffraction grating.
export const chapter8CInterferenceTopics: Topic[] = [
  {
    slug: 'huygens-principle-topic',
    title: "8.1 Huygens' Principle",
    concepts: [{ slug: 'huygens-principle', title: "Huygens' Principle", difficulty: 'medium' }],
  },
  {
    slug: 'interference-of-light-topic',
    title: '8.2 Interference of Light',
    concepts: [{ slug: 'interference-of-light', title: 'Interference of Light', difficulty: 'hard' }],
  },
  {
    slug: 'diffraction-of-light-topic',
    title: '8.3 Diffraction of Light',
    concepts: [{ slug: 'diffraction-of-light', title: 'Diffraction of Light', difficulty: 'hard' }],
  },
  {
    slug: 'diffraction-grating-topic',
    title: '8.4 Diffraction Grating',
    concepts: [{ slug: 'diffraction-grating', title: 'The Diffraction Grating', difficulty: 'hard' }],
  },
];
