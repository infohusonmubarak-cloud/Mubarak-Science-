import type { Topic } from '@/types/content';

export const chapter9ElectricFieldTopics: Topic[] = [
  {
    slug: 'coulombs-law-topic',
    title: "Coulomb's Law",
    concepts: [{ slug: 'coulombs-law', title: "Coulomb's Law", difficulty: 'medium' }],
  },
  {
    slug: 'electric-field-and-lines-of-force-topic',
    title: 'Electric Field, Electric Field Intensity and Lines of Force',
    concepts: [
      { slug: 'electric-field-and-field-intensity', title: 'Electric Field and Electric Field Intensity', difficulty: 'medium' },
      { slug: 'electric-lines-of-force', title: 'Electric Lines of Force', difficulty: 'easy' },
      { slug: 'electric-charge-distribution', title: 'Electric Charge Distribution', difficulty: 'medium' },
    ],
  },
  {
    slug: 'electric-potential-topic',
    title: 'Electric Potential and Potential Difference',
    concepts: [
      { slug: 'electric-potential-and-potential-difference', title: 'Electric Potential and Potential Difference', difficulty: 'hard' },
      { slug: 'equipotential-surfaces', title: 'Equipotential Surfaces', difficulty: 'medium' },
      { slug: 'electric-potential-of-the-earth', title: 'Electric Potential of the Earth', difficulty: 'easy' },
      { slug: 'potential-difference-between-parallel-plates', title: 'Potential Difference Between Two Parallel Charged Plates', difficulty: 'medium' },
    ],
  },
];
