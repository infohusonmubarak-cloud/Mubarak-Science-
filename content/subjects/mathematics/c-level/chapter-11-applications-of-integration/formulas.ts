import type { Formula } from '@/types/content';

export const chapter11CFormulas: Record<string, Formula> = {
  'fundamental-theorem-of-calculus-formula': {
    slug: 'fundamental-theorem-of-calculus-formula',
    name: 'The Fundamental Theorem of Calculus',
    expression: '∫ₐᵇ f(x) dx = F(b) − F(a),   where F\'(x) = f(x)',
    meaning: 'Connects the two central operations of calculus — differentiation and integration — by showing that a definite integral can be evaluated using any antiderivative, without needing to sum infinitely many slices directly.',
    variables: [
      { symbol: 'a, b', meaning: 'the lower and upper limits of integration' },
      { symbol: 'F', meaning: 'any antiderivative of f (F\'(x)=f(x))' },
    ],
    whenToUse: 'Whenever a definite integral needs to be evaluated exactly, given a function with a known antiderivative.',
    relatedConceptSlugs: ['the-definite-integral-and-the-fundamental-theorem-of-calculus'],
  },
  'area-under-a-curve-formula': {
    slug: 'area-under-a-curve-formula',
    name: 'Area Under a Curve',
    expression: 'Area = ∫ₐᵇ f(x) dx   (for f(x) ≥ 0 on [a,b])',
    meaning: 'The definite integral of a non-negative function over [a,b] equals the exact area trapped between the curve and the x-axis over that interval.',
    variables: [
      { symbol: 'f(x)', meaning: 'the function whose graph forms the top boundary of the region' },
      { symbol: 'a, b', meaning: 'the left and right x-boundaries of the region' },
    ],
    whenToUse: 'Whenever the exact area between a curve and the x-axis, over a specific interval, is needed.',
    relatedConceptSlugs: ['area-under-a-curve'],
  },
  'area-between-two-curves-formula': {
    slug: 'area-between-two-curves-formula',
    name: 'Area Between Two Curves',
    expression: 'Area = ∫ₐᵇ [f(x) − g(x)] dx   (where f(x) ≥ g(x) on [a,b])',
    meaning: 'The area of the region trapped between two curves equals the integral of the "top" function minus the "bottom" function, over the interval where the top function stays on top.',
    variables: [
      { symbol: 'f(x)', meaning: 'the upper (greater-valued) function on [a,b]' },
      { symbol: 'g(x)', meaning: 'the lower (lesser-valued) function on [a,b]' },
      { symbol: 'a, b', meaning: 'the x-values where the two curves intersect (or the given boundaries)' },
    ],
    whenToUse: 'Whenever the area of a region enclosed between two curves is needed — first find where they intersect, then integrate their difference.',
    relatedConceptSlugs: ['area-between-two-curves'],
  },
  'disk-method-formula': {
    slug: 'disk-method-formula',
    name: 'Volume of Revolution: The Disk Method',
    expression: 'V = π ∫ₐᵇ [f(x)]² dx',
    meaning: 'Rotating the region under a curve f(x) around the x-axis sweeps out a solid; slicing it into thin circular disks of radius f(x) and summing their volumes (via integration) gives the total volume.',
    variables: [
      { symbol: 'f(x)', meaning: 'the radius of the disk at position x — the distance from the x-axis to the curve' },
      { symbol: 'a, b', meaning: 'the x-boundaries of the region being revolved' },
    ],
    whenToUse: 'Whenever the region under a single curve (with no gap between the curve and the axis of rotation) is revolved around that axis.',
    relatedConceptSlugs: ['volume-of-revolution-the-disk-method'],
  },
  'washer-method-formula': {
    slug: 'washer-method-formula',
    name: 'Volume of Revolution: The Washer Method',
    expression: 'V = π ∫ₐᵇ ( [R(x)]² − [r(x)]² ) dx',
    meaning: 'Rotating a region between two curves around an axis sweeps out a solid with a hole through it; each cross-section is a "washer" — a disk of outer radius R(x) with a smaller disk of inner radius r(x) removed.',
    variables: [
      { symbol: 'R(x)', meaning: 'the outer radius — distance from the axis to the farther boundary curve' },
      { symbol: 'r(x)', meaning: 'the inner radius — distance from the axis to the nearer boundary curve' },
    ],
    whenToUse: 'Whenever the region between two curves (with a gap between the region and the axis of rotation) is revolved around that axis.',
    relatedConceptSlugs: ['volume-of-revolution-the-washer-method'],
  },
};
