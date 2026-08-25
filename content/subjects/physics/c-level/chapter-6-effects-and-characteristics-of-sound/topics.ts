import type { Topic } from '@/types/content';

// Navigation outline for Chapter 6, matching the textbook's section
// list: propagation of sound in a medium; echo; audibility; the
// Doppler effect; properties of sound waves.
export const chapter6CSoundTopics: Topic[] = [
  {
    slug: 'propagation-of-sound-topic',
    title: '6.1 Propagation of Sound in a Medium',
    concepts: [{ slug: 'propagation-of-sound', title: 'Propagation of Sound in a Medium', difficulty: 'medium' }],
  },
  {
    slug: 'echo-topic',
    title: '6.2 Echo',
    concepts: [{ slug: 'echo', title: 'Echo', difficulty: 'medium' }],
  },
  {
    slug: 'audibility-topic',
    title: '6.3 Audibility',
    concepts: [{ slug: 'audibility-and-hearing-range', title: 'Audibility', difficulty: 'medium' }],
  },
  {
    slug: 'doppler-effect-topic',
    title: '6.4 The Doppler Effect',
    concepts: [{ slug: 'doppler-effect', title: 'The Doppler Effect', difficulty: 'hard' }],
  },
  {
    slug: 'properties-of-sound-waves-topic',
    title: '6.5 Properties of Sound Waves',
    concepts: [{ slug: 'properties-of-sound-waves', title: 'Properties of Sound Waves', difficulty: 'medium' }],
  },
];
