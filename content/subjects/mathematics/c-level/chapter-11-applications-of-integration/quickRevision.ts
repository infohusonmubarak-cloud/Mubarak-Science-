import type { QuickRevision } from '@/types/content';

export const chapter11CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus',
      keyPoint: '∫ₐᵇ f(x)dx = F(b) − F(a), for any antiderivative F of f.',
      formulaSlug: 'fundamental-theorem-of-calculus-formula',
      miniExample: '∫₁³2x dx = 9−1 = 8.',
    },
    {
      conceptSlug: 'area-under-a-curve',
      keyPoint: 'Area = ∫ₐᵇ f(x)dx, when f(x)≥0 on [a,b].',
      formulaSlug: 'area-under-a-curve-formula',
      miniExample: '∫₁²x²dx = 7/3 ≈ 2.333.',
    },
    {
      conceptSlug: 'area-between-two-curves',
      keyPoint: 'Area = ∫ₐᵇ[f(x)−g(x)]dx, top minus bottom.',
      formulaSlug: 'area-between-two-curves-formula',
      miniExample: 'x+2 vs x² on [−1,2]: area=4.5.',
    },
    {
      conceptSlug: 'volume-of-revolution-the-disk-method',
      keyPoint: 'V = π∫ₐᵇ[f(x)]²dx — one curve, rotated about the axis.',
      formulaSlug: 'disk-method-formula',
      miniExample: '√x on [0,4] rotated: V=8π.',
    },
    {
      conceptSlug: 'volume-of-revolution-the-washer-method',
      keyPoint: 'V = π∫ₐᵇ([R(x)]²−[r(x)]²)dx — two curves, a hole through the solid.',
      formulaSlug: 'washer-method-formula',
      miniExample: 'x vs x² on [0,1] rotated: V=2π/15.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-definite-integral-and-the-fundamental-theorem-of-calculus',
      keyPoint: 'Always evaluate at the upper limit first, then subtract the lower.',
      formulaSlug: 'fundamental-theorem-of-calculus-formula',
      miniExample: 'Reversing the order flips the sign.',
    },
    {
      conceptSlug: 'area-under-a-curve',
      keyPoint: 'The foundation for both area-between-curves and volumes of revolution.',
      formulaSlug: 'area-under-a-curve-formula',
      miniExample: 'A negative f(x) needs the interval split and absolute values taken.',
    },
    {
      conceptSlug: 'area-between-two-curves',
      keyPoint: 'Find intersection points first — they are usually the integration bounds.',
      formulaSlug: 'area-between-two-curves-formula',
      miniExample: 'Test a point inside the interval to confirm which curve is on top.',
    },
    {
      conceptSlug: 'volume-of-revolution-the-disk-method',
      keyPoint: 'Each disk has area π[f(x)]² and thickness dx.',
      formulaSlug: 'disk-method-formula',
      miniExample: 'Only valid when the region touches the axis directly.',
    },
    {
      conceptSlug: 'volume-of-revolution-the-washer-method',
      keyPoint: 'Square each radius separately — never square their difference.',
      formulaSlug: 'washer-method-formula',
      miniExample: '[R(x)]²−[r(x)]², not (R(x)−r(x))².',
    },
  ],
};
