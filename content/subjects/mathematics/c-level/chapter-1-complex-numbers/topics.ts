import type { Topic } from '@/types/content';

// Navigation outline for Chapter 1, built from the textbook preface's
// description: the new number system; complex numbers and their
// operations; trigonometric forms; roots of complex numbers.
export const chapter1CTopics: Topic[] = [
  {
    slug: 'the-need-for-a-new-number-system-topic',
    title: '1.1 The Need for a New Number System',
    concepts: [
      { slug: 'the-imaginary-unit-and-i-squared', title: 'The Imaginary Unit and i²', difficulty: 'easy' },
    ],
  },
  {
    slug: 'complex-numbers-and-operations-topic',
    title: '1.2 Complex Numbers and Their Operations',
    concepts: [
      { slug: 'complex-numbers-in-standard-form', title: 'Complex Numbers in Standard Form', difficulty: 'easy' },
      { slug: 'adding-and-subtracting-complex-numbers', title: 'Adding and Subtracting Complex Numbers', difficulty: 'medium' },
      { slug: 'multiplying-complex-numbers', title: 'Multiplying Complex Numbers', difficulty: 'medium' },
      { slug: 'dividing-complex-numbers-using-conjugates', title: 'Dividing Complex Numbers Using Conjugates', difficulty: 'medium' },
    ],
  },
  {
    slug: 'the-complex-plane-and-trigonometric-form-topic',
    title: '1.3 The Complex Plane and Trigonometric Form',
    concepts: [
      { slug: 'the-complex-plane-and-modulus', title: 'The Complex Plane and Modulus', difficulty: 'medium' },
      { slug: 'the-trigonometric-form-of-a-complex-number', title: 'The Trigonometric (Polar) Form of a Complex Number', difficulty: 'medium' },
    ],
  },
  {
    slug: 'de-moivres-theorem-and-roots-topic',
    title: "1.4 De Moivre's Theorem and Roots of Complex Numbers",
    concepts: [
      { slug: 'de-moivres-theorem', title: "De Moivre's Theorem", difficulty: 'hard' },
      { slug: 'finding-nth-roots-of-a-complex-number', title: 'Finding nth Roots of a Complex Number', difficulty: 'hard' },
    ],
  },
];
