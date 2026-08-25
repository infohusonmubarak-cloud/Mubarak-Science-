import type { QuickRevision } from '@/types/content';

export const chapter4CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'vectors-in-three-dimensions-and-their-magnitude',
      keyPoint: '|v| = √(x²+y²+z²).',
      formulaSlug: 'vector-magnitude-3d-formula',
      miniExample: 'v=(2,3,6) → |v|=7.',
    },
    {
      conceptSlug: 'the-dot-product-of-two-vectors',
      keyPoint: 'a·b = a₁b₁+a₂b₂+a₃b₃ — a scalar.',
      formulaSlug: 'dot-product-formula',
      miniExample: '(1,2,3)·(4,−5,6)=12.',
    },
    {
      conceptSlug: 'the-angle-between-two-vectors',
      keyPoint: 'cosθ = (a·b)/(|a||b|).',
      formulaSlug: 'angle-between-vectors-formula',
      miniExample: '(1,0,0),(1,1,0) → θ=45°.',
    },
    {
      conceptSlug: 'the-cross-product-of-two-vectors',
      keyPoint: 'a×b produces a NEW vector, perpendicular to both.',
      formulaSlug: 'cross-product-formula',
      miniExample: 'i×j=k.',
    },
    {
      conceptSlug: 'the-cross-product-and-area-of-a-parallelogram',
      keyPoint: 'Area = |a×b|.',
      formulaSlug: 'cross-product-area-formula',
      miniExample: '(3,0,0),(0,4,0) → area 12.',
    },
    {
      conceptSlug: 'the-vector-equation-of-a-line-in-space',
      keyPoint: 'r = r₀ + t·v.',
      formulaSlug: 'vector-equation-of-a-line-formula',
      miniExample: 'r₀=(1,2,3), v=(2,−1,4) → r=(1+2t,2−t,3+4t).',
    },
    {
      conceptSlug: 'the-vector-equation-of-a-plane-in-space',
      keyPoint: 'n·(r−r₀) = 0.',
      formulaSlug: 'vector-equation-of-a-plane-formula',
      miniExample: 'r₀=(1,0,2), n=(3,1,−2) → 3x+y−2z=−1.',
    },
    {
      conceptSlug: 'the-scalar-triple-product-and-volume',
      keyPoint: 'Volume = |a·(b×c)|.',
      formulaSlug: 'scalar-triple-product-volume-formula',
      miniExample: 'Unit vectors → volume 1.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'vectors-in-three-dimensions-and-their-magnitude',
      keyPoint: 'The 3D extension of the Pythagorean theorem, applied twice.',
      formulaSlug: 'vector-magnitude-3d-formula',
      miniExample: 'v=(1,4,8) → |v|=9.',
    },
    {
      conceptSlug: 'the-dot-product-of-two-vectors',
      keyPoint: 'a·b = 0 exactly when a and b are perpendicular.',
      formulaSlug: 'dot-product-formula',
      miniExample: '(2,0,3)·(−1,4,2)=4.',
    },
    {
      conceptSlug: 'the-angle-between-two-vectors',
      keyPoint: 'Comes from rearranging a·b = |a||b|cosθ.',
      formulaSlug: 'angle-between-vectors-formula',
      miniExample: '(3,4,0),(0,0,5) → θ=90°.',
    },
    {
      conceptSlug: 'the-cross-product-of-two-vectors',
      keyPoint: 'Follows a specific cyclic index pattern — order matters.',
      formulaSlug: 'cross-product-formula',
      miniExample: '(2,1,0)×(1,3,0) → z-component 5.',
    },
    {
      conceptSlug: 'the-cross-product-and-area-of-a-parallelogram',
      keyPoint: '|a×b| = |a||b|sinθ, the area formula in disguise.',
      formulaSlug: 'cross-product-area-formula',
      miniExample: '(5,0,0),(0,2,0) → area 10.',
    },
    {
      conceptSlug: 'the-vector-equation-of-a-line-in-space',
      keyPoint: 'r₀ is a fixed point; v is the direction — do not confuse them.',
      formulaSlug: 'vector-equation-of-a-line-formula',
      miniExample: 'r=(1+2t,2−t,3+4t) at t=5 → y=−3.',
    },
    {
      conceptSlug: 'the-vector-equation-of-a-plane-in-space',
      keyPoint: 'Expands into the familiar a(x−x₀)+b(y−y₀)+c(z−z₀)=0.',
      formulaSlug: 'vector-equation-of-a-plane-formula',
      miniExample: 'r₀=(2,1,0), n=(1,1,1) → d=3.',
    },
    {
      conceptSlug: 'the-scalar-triple-product-and-volume',
      keyPoint: 'Combines cross product (base area) with dot product (height).',
      formulaSlug: 'scalar-triple-product-volume-formula',
      miniExample: '(2,0,0),(0,3,0),(0,0,4) → volume 24.',
    },
  ],
};
