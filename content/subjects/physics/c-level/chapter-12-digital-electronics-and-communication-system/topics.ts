import type { Topic } from '@/types/content';

// Navigation outline for Chapter 12, matching the textbook's section
// list: electronic system; digital electronics; basic electronic
// communication.
export const chapter12CDigitalTopics: Topic[] = [
  {
    slug: 'electronic-system-topic',
    title: '12.1 Electronic System',
    concepts: [{ slug: 'electronic-systems', title: 'Electronic Systems', difficulty: 'easy' }],
  },
  {
    slug: 'digital-electronics-topic',
    title: '12.2 Digital Electronics',
    concepts: [
      { slug: 'analog-and-digital-signals', title: 'Analog and Digital Signals', difficulty: 'medium' },
      { slug: 'logic-gates-and-truth-tables', title: 'Logic Gates and Truth Tables', difficulty: 'medium' },
    ],
  },
  {
    slug: 'communication-topic',
    title: '12.3 Basic Electronic Communication',
    concepts: [{ slug: 'communication-systems-basics', title: 'Basic Electronic Communication', difficulty: 'medium' }],
  },
];
