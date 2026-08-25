import type { Topic } from '@/types/content';

// Navigation outline for Chapter 11, built from the textbook preface's
// description: the definite integral as area under a curve, and volume
// integrals — expanded here into area under a curve, area between two
// curves, and the disk/washer methods for volumes of revolution.
export const chapter11CTopics: Topic[] = [
  {
    slug: 'area-under-a-curve-topic',
    title: '11.1 The Definite Integral and Area Under a Curve',
    concepts: [
      { slug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus', title: 'The Definite Integral and the Fundamental Theorem of Calculus', difficulty: 'hard' },
      { slug: 'area-under-a-curve', title: 'Area Under a Curve', difficulty: 'medium' },
    ],
  },
  {
    slug: 'area-between-two-curves-topic',
    title: '11.2 Area Between Two Curves',
    concepts: [{ slug: 'area-between-two-curves', title: 'Area Between Two Curves', difficulty: 'hard' }],
  },
  {
    slug: 'volume-by-disks-topic',
    title: '11.3 Volume of Revolution: The Disk Method',
    concepts: [{ slug: 'volume-of-revolution-the-disk-method', title: 'Volume of Revolution: The Disk Method', difficulty: 'hard' }],
  },
  {
    slug: 'volume-by-washers-topic',
    title: '11.4 Volume of Revolution: The Washer Method',
    concepts: [{ slug: 'volume-of-revolution-the-washer-method', title: 'Volume of Revolution: The Washer Method', difficulty: 'hard' }],
  },
];
