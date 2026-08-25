import type { QuickRevision } from '@/types/content';

export const chapter5CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-fundamental-counting-principle',
      keyPoint: 'Multiply the number of choices at each independent stage.',
      formulaSlug: 'fundamental-counting-principle-formula',
      miniExample: '4×6×3 = 72 meal combos.',
    },
    {
      conceptSlug: 'factorial-notation',
      keyPoint: 'n! = n×(n−1)×...×2×1; 0!=1.',
      formulaSlug: 'factorial-notation-formula',
      miniExample: '6! = 720.',
    },
    {
      conceptSlug: 'permutations-of-n-distinct-objects',
      keyPoint: 'P(n,n) = n!.',
      formulaSlug: 'permutations-of-n-objects-formula',
      miniExample: '5 books → 120 orders.',
    },
    {
      conceptSlug: 'permutations-of-r-objects-from-n',
      keyPoint: 'P(n,r) = n!/(n−r)!.',
      formulaSlug: 'permutations-formula',
      miniExample: 'P(8,3) = 336.',
    },
    {
      conceptSlug: 'permutations-with-repeated-objects',
      keyPoint: 'n!/(n₁!n₂!...) for repeated items.',
      formulaSlug: 'permutations-with-repetition-formula',
      miniExample: 'LEVEL → 30 arrangements.',
    },
    {
      conceptSlug: 'circular-permutations',
      keyPoint: '(n−1)! for circular arrangements.',
      formulaSlug: 'circular-permutations-formula',
      miniExample: '6 people around a table → 120.',
    },
    {
      conceptSlug: 'combinations-of-r-objects-from-n',
      keyPoint: 'C(n,r) = n!/[r!(n−r)!].',
      formulaSlug: 'combinations-formula',
      miniExample: 'C(8,3) = 56.',
    },
    {
      conceptSlug: 'the-relationship-between-permutations-and-combinations',
      keyPoint: 'P(n,r) = C(n,r) × r!.',
      formulaSlug: 'permutations-combinations-relationship-formula',
      miniExample: 'C(7,3)=35 → P(7,3)=210.',
    },
    {
      conceptSlug: 'applications-to-probability-and-statistics',
      keyPoint: 'Probability = favorable/total, both via combinations.',
      formulaSlug: 'combinations-formula',
      miniExample: '5 red, 3 blue → P(both red)=5/14.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-fundamental-counting-principle',
      keyPoint: 'Always multiply, never add, independent choices.',
      formulaSlug: 'fundamental-counting-principle-formula',
      miniExample: '26×10 = 260 passwords.',
    },
    {
      conceptSlug: 'factorial-notation',
      keyPoint: 'n! counts arrangements of n distinct objects in a row.',
      formulaSlug: 'factorial-notation-formula',
      miniExample: '5!/3! = 20.',
    },
    {
      conceptSlug: 'permutations-of-n-distinct-objects',
      keyPoint: 'A special case of P(n,r) with r=n.',
      formulaSlug: 'permutations-of-n-objects-formula',
      miniExample: '4 trophies → 24 orders.',
    },
    {
      conceptSlug: 'permutations-of-r-objects-from-n',
      keyPoint: 'Use when order matters among the chosen objects.',
      formulaSlug: 'permutations-formula',
      miniExample: 'P(10,2) = 90.',
    },
    {
      conceptSlug: 'permutations-with-repeated-objects',
      keyPoint: 'Corrects overcounting from identical objects.',
      formulaSlug: 'permutations-with-repetition-formula',
      miniExample: 'BANANA → 60 arrangements.',
    },
    {
      conceptSlug: 'circular-permutations',
      keyPoint: 'Fixing one seat removes rotational duplication.',
      formulaSlug: 'circular-permutations-formula',
      miniExample: '5 people around a table → 24.',
    },
    {
      conceptSlug: 'combinations-of-r-objects-from-n',
      keyPoint: 'Use when order does NOT matter.',
      formulaSlug: 'combinations-formula',
      miniExample: 'C(6,2) = 15.',
    },
    {
      conceptSlug: 'the-relationship-between-permutations-and-combinations',
      keyPoint: 'r! accounts for orderings within each selected group.',
      formulaSlug: 'permutations-combinations-relationship-formula',
      miniExample: 'C(9,2)=36 → P(9,2)=72.',
    },
    {
      conceptSlug: 'applications-to-probability-and-statistics',
      keyPoint: 'Use the SAME counting method for numerator and denominator.',
      formulaSlug: 'combinations-formula',
      miniExample: '4 red, 6 blue → C(6,2)=15 ways to choose 2 blue.',
    },
  ],
};
