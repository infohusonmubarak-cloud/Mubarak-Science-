import type { Topic } from '@/types/content';

// Navigation outline for Chapter 11, matching the textbook's section
// list: alternating current; electromagnetic induction; Faraday's law
// and Lenz's law; applications of electromagnetic induction; power
// transmission; principles of house wiring; dangers of electricity.
export const chapter11CInductionTopics: Topic[] = [
  {
    slug: 'alternating-current-topic',
    title: '11.1 Alternating Current',
    concepts: [{ slug: 'alternating-current', title: 'Alternating Current', difficulty: 'medium' }],
  },
  {
    slug: 'electromagnetic-induction-topic',
    title: '11.2 Electromagnetic Induction',
    concepts: [{ slug: 'electromagnetic-induction-basics', title: 'Electromagnetic Induction', difficulty: 'medium' }],
  },
  {
    slug: 'faradays-lenzs-law-topic',
    title: "11.3 Faraday's Law and Lenz's Law",
    concepts: [{ slug: 'faradays-law-and-lenzs-law', title: "Faraday's Law and Lenz's Law", difficulty: 'hard' }],
  },
  {
    slug: 'applications-of-induction-topic',
    title: '11.4 Applications of Electromagnetic Induction',
    concepts: [{ slug: 'applications-of-electromagnetic-induction', title: 'Applications of Electromagnetic Induction', difficulty: 'medium' }],
  },
  {
    slug: 'power-transmission-topic',
    title: '11.5 Power Transmission',
    concepts: [{ slug: 'power-transmission', title: 'Power Transmission', difficulty: 'hard' }],
  },
  {
    slug: 'house-wiring-topic',
    title: '11.6 Principles of House Wiring',
    concepts: [{ slug: 'house-wiring-principles', title: 'Principles of House Wiring', difficulty: 'medium' }],
  },
  {
    slug: 'dangers-of-electricity-topic',
    title: '11.7 Dangers of Electricity',
    concepts: [{ slug: 'electrical-safety', title: 'Dangers of Electricity', difficulty: 'medium' }],
  },
];
