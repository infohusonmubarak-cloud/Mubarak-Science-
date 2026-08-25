import type { QuickRevision } from '@/types/content';

export const chapter8BQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-area-ratio-theorem-for-similar-triangles',
      keyPoint: 'Area₁/Area₂ = (side ratio)², not the side ratio itself.',
      formulaSlug: 'area-ratio-of-similar-triangles',
      miniExample: 'k=3 → area ratio = 9.',
    },
    {
      conceptSlug: 'applying-the-area-ratio-theorem',
      keyPoint: 'Given an area ratio, take the square root to find the side ratio.',
      formulaSlug: 'area-ratio-of-similar-triangles',
      miniExample: 'Areas 50, 98 → side ratio √(25/49)=5/7.',
    },
    {
      conceptSlug: 'perimeter-and-area-ratios-together',
      keyPoint: 'Perimeter scales linearly with the sides; only area scales squared.',
      formulaSlug: 'perimeter-ratio-of-similar-triangles',
      miniExample: 'Side ratio 2:5 → perimeter ratio 2:5 (not 4:25).',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-area-ratio-theorem-for-similar-triangles',
      keyPoint: 'Proof idea: base and height both scale by k, so area (½×base×height) scales by k².',
      formulaSlug: 'area-ratio-of-similar-triangles',
      miniExample: 'Sides 5,15 (k=3), small area 20 → large area 20×9=180.',
    },
    {
      conceptSlug: 'applying-the-area-ratio-theorem',
      keyPoint: 'Squaring goes side→area; square-rooting goes area→side.',
      formulaSlug: 'area-ratio-of-similar-triangles',
      miniExample: 'Areas 36, 121 → sides in ratio 6:11.',
    },
    {
      conceptSlug: 'perimeter-and-area-ratios-together',
      keyPoint: 'Perimeter is a sum of sides (×k); area is a product of two lengths (×k²).',
      formulaSlug: 'perimeter-ratio-of-similar-triangles',
      miniExample: 'Side ratio 3:7, small perimeter 24 → large perimeter 56.',
    },
  ],
};
