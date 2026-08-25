import type { Formula } from '@/types/content';

export const chapter1CFormulas: Record<string, Formula> = {
  'imaginary-unit-definition': {
    slug: 'imaginary-unit-definition',
    name: 'The Imaginary Unit',
    expression: 'i² = −1  (powers of i cycle: i, −1, −i, 1, i, −1, ...)',
    meaning: 'i is defined so that squaring it gives −1. Every higher power of i repeats this same cycle of four values.',
    variables: [
      { symbol: 'i', meaning: 'the imaginary unit, defined by i² = −1' },
    ],
    whenToUse: 'Whenever i² (or any higher power of i) appears in an expression and needs to be simplified.',
    relatedConceptSlugs: ['the-imaginary-unit-and-i-squared'],
  },
  'standard-form-of-a-complex-number': {
    slug: 'standard-form-of-a-complex-number',
    name: 'Standard Form of a Complex Number',
    expression: 'z = a + bi',
    meaning: 'Every complex number can be written as a real number a plus a real number b times i — a is the real part, b is the imaginary part.',
    variables: [
      { symbol: 'a', meaning: 'the real part of z, written Re(z)' },
      { symbol: 'b', meaning: 'the imaginary part of z, written Im(z) — a real number, the coefficient of i' },
    ],
    whenToUse: 'Whenever a complex number needs to be identified or written in its most basic, universal form.',
    relatedConceptSlugs: ['complex-numbers-in-standard-form'],
  },
  'complex-number-addition-subtraction-rule': {
    slug: 'complex-number-addition-subtraction-rule',
    name: 'Adding and Subtracting Complex Numbers',
    expression: '(a+bi) ± (c+di) = (a±c) + (b±d)i',
    meaning: 'Combine the two real parts together, and separately combine the two imaginary parts together.',
    variables: [
      { symbol: 'a+bi, c+di', meaning: 'the two complex numbers being added or subtracted' },
    ],
    whenToUse: 'Whenever two complex numbers are added or subtracted.',
    relatedConceptSlugs: ['adding-and-subtracting-complex-numbers'],
  },
  'complex-number-multiplication-rule': {
    slug: 'complex-number-multiplication-rule',
    name: 'Multiplying Complex Numbers',
    expression: '(a+bi)(c+di) = (ac−bd) + (ad+bc)i',
    meaning: 'Expand using the distributive property (like multiplying two binomials), then replace i² with −1 and combine like terms.',
    variables: [
      { symbol: 'a+bi, c+di', meaning: 'the two complex numbers being multiplied' },
    ],
    whenToUse: 'Whenever two complex numbers are multiplied together.',
    relatedConceptSlugs: ['multiplying-complex-numbers'],
  },
  'complex-conjugate-and-division-rule': {
    slug: 'complex-conjugate-and-division-rule',
    name: 'Dividing Complex Numbers Using Conjugates',
    expression: '(a+bi) / (c+di) = [(a+bi)(c−di)] / (c²+d²)',
    meaning: 'Multiply both the numerator and denominator by the denominator\'s conjugate (c−di) — this makes the denominator a real number (c²+d²), clearing i from it entirely.',
    variables: [
      { symbol: 'c−di', meaning: 'the complex conjugate of the denominator c+di — same real part, opposite sign on the imaginary part' },
      { symbol: 'c²+d²', meaning: 'the result of (c+di)(c−di), always a real, non-negative number' },
    ],
    whenToUse: 'Whenever dividing by a complex number.',
    relatedConceptSlugs: ['dividing-complex-numbers-using-conjugates'],
  },
  'modulus-of-a-complex-number-formula': {
    slug: 'modulus-of-a-complex-number-formula',
    name: 'The Modulus of a Complex Number',
    expression: '|z| = √(a² + b²),  for z = a + bi',
    meaning: 'The modulus is the distance from the origin to the point representing z on the complex plane — found using the Pythagorean theorem on the real and imaginary parts.',
    variables: [
      { symbol: 'a, b', meaning: 'the real and imaginary parts of z' },
      { symbol: '|z|', meaning: 'the modulus (magnitude) of z, always a non-negative real number' },
    ],
    whenToUse: 'Whenever the size (magnitude) of a complex number is needed, independent of its direction.',
    relatedConceptSlugs: ['the-complex-plane-and-modulus'],
  },
  'trigonometric-form-of-a-complex-number-formula': {
    slug: 'trigonometric-form-of-a-complex-number-formula',
    name: 'The Trigonometric (Polar) Form of a Complex Number',
    expression: 'z = r(cos θ + i sin θ),  where r = |z| and θ = arg(z)',
    meaning: 'Any complex number can be written using its modulus r and its argument (angle) θ, instead of its real and imaginary parts directly.',
    variables: [
      { symbol: 'r', meaning: 'the modulus of z, r = √(a²+b²)' },
      { symbol: 'θ', meaning: 'the argument of z — the angle the line to z makes with the positive real axis' },
    ],
    whenToUse: 'Whenever a complex number needs to be expressed by its size and direction, especially before multiplying/dividing or raising to a power.',
    relatedConceptSlugs: ['the-trigonometric-form-of-a-complex-number'],
  },
  'de-moivres-theorem-formula': {
    slug: 'de-moivres-theorem-formula',
    name: "De Moivre's Theorem",
    expression: '[r(cos θ + i sin θ)]ⁿ = rⁿ(cos(nθ) + i sin(nθ))',
    meaning: 'Raising a complex number in trigonometric form to a power n raises its modulus to the power n, and multiplies its argument by n.',
    variables: [
      { symbol: 'n', meaning: 'the power the complex number is being raised to' },
    ],
    whenToUse: 'Whenever a complex number needs to be raised to a power, especially a large one — far faster than repeated multiplication.',
    relatedConceptSlugs: ['de-moivres-theorem'],
  },
  'nth-root-formula-for-complex-numbers': {
    slug: 'nth-root-formula-for-complex-numbers',
    name: 'The nth Roots of a Complex Number',
    expression: 'zₖ = r^(1/n) [cos((θ+360°k)/n) + i sin((θ+360°k)/n)],  for k = 0, 1, ..., n−1',
    meaning: 'Every nonzero complex number has exactly n distinct nth roots, all with the same modulus r^(1/n), evenly spaced 360°/n apart around a circle.',
    variables: [
      { symbol: 'k', meaning: 'an integer from 0 to n−1, giving one distinct root each' },
      { symbol: 'r^(1/n)', meaning: 'the (positive, real) nth root of the modulus — the same for every root' },
    ],
    whenToUse: 'Whenever all n solutions to zⁿ = (some complex number) are needed.',
    relatedConceptSlugs: ['finding-nth-roots-of-a-complex-number'],
  },
};
