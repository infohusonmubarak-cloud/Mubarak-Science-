import type { QuickRevision } from '@/types/content';

export const chapter8QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'meaning-of-similar-figures-and-similar-triangles',
      keyPoint: 'Similar: equal angles, proportional sides.',
      formulaSlug: 'similarity-ratio-formula',
      miniExample: 'AB=4,BC=6,DE=6 → EF=9.',
    },
    {
      conceptSlug: 'the-basic-proportionality-theorem',
      keyPoint: 'DE ∥ BC in △ABC → AD/DB = AE/EC.',
      formulaSlug: 'basic-proportionality-theorem-formula',
      miniExample: 'AD=4,DB=6,AE=6 → EC=9.',
    },
    {
      conceptSlug: 'the-angle-bisector-theorem',
      keyPoint: 'AD bisects ∠A → BD/DC = AB/AC.',
      formulaSlug: 'angle-bisector-theorem-formula',
      miniExample: 'AB=6,AC=9,BC=15 → BD=6,DC=9.',
    },
    {
      conceptSlug: 'the-pythagoras-theorem',
      keyPoint: 'a² + b² = c² (c = hypotenuse).',
      formulaSlug: 'pythagorean-theorem',
      miniExample: 'legs 6,8 → hypotenuse 10.',
    },
    {
      conceptSlug: 'special-right-triangles',
      keyPoint: '45-45-90: x,x,x√2. 30-60-90: x,x√3,2x.',
      formulaSlug: 'special-right-triangle-ratios',
      miniExample: '30-60-90, short leg 5 → 5, 5√3, 10.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'meaning-of-similar-figures-and-similar-triangles',
      keyPoint: "Similar: equal angles, and AB/A'B' = BC/B'C' = CA/C'A' = k.",
      formulaSlug: 'similarity-ratio-formula',
      miniExample: 'Congruent = similar with k=1.',
    },
    {
      conceptSlug: 'the-basic-proportionality-theorem',
      keyPoint: 'A line parallel to one side divides the other two proportionally: AD/DB = AE/EC.',
      formulaSlug: 'basic-proportionality-theorem-formula',
      miniExample: 'AD=3,DB=9,AE=5 → EC=15.',
    },
    {
      conceptSlug: 'similarity-tests-for-triangles',
      keyPoint: 'AA, SAS, or SSS is enough to prove similarity.',
      formulaSlug: 'similarity-ratio-formula',
      miniExample: '∠A=∠D=50°, ∠B=∠E=70° → similar by AA.',
    },
    {
      conceptSlug: 'the-angle-bisector-theorem',
      keyPoint: 'The bisector from A splits BC in the ratio AB:AC.',
      formulaSlug: 'angle-bisector-theorem-formula',
      miniExample: 'AB=4,AC=6,BC=20 → BD=8.',
    },
    {
      conceptSlug: 'the-pythagoras-theorem',
      keyPoint: 'a²+b²=c², proved via similar triangles from the altitude to the hypotenuse.',
      formulaSlug: 'pythagorean-theorem',
      miniExample: 'leg 5, hypotenuse 13 → other leg 12.',
    },
    {
      conceptSlug: 'special-right-triangles',
      keyPoint: '30-60-90 is half an equilateral triangle; 45-45-90 is isosceles.',
      formulaSlug: 'special-right-triangle-ratios',
      miniExample: '45-45-90, leg 7 → hypotenuse ≈9.90.',
    },
  ],
};
