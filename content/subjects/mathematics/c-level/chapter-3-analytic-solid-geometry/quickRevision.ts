import type { QuickRevision } from '@/types/content';

export const chapter3CQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-three-dimensional-coordinate-system',
      keyPoint: 'Every point in 3D space is (x, y, z).',
      miniExample: 'P(3,4,2): 3 along x, 4 along y, 2 along z.',
    },
    {
      conceptSlug: 'the-distance-and-midpoint-formulas-in-3d',
      keyPoint: 'd = √[(x₂−x₁)²+(y₂−y₁)²+(z₂−z₁)²].',
      formulaSlug: 'distance-and-midpoint-formulas-in-3d',
      miniExample: '(1,2,3) to (4,6,15) → distance 13.',
    },
    {
      conceptSlug: 'direction-numbers-of-a-line',
      keyPoint: 'a=x₂−x₁, b=y₂−y₁, c=z₂−z₁.',
      formulaSlug: 'direction-numbers-formula',
      miniExample: '(1,2,3) to (4,0,7) → (3,−2,4).',
    },
    {
      conceptSlug: 'symmetric-and-parametric-equations-of-a-line',
      keyPoint: 'Parametric: x=x₀+at, y=y₀+bt, z=z₀+ct.',
      formulaSlug: 'symmetric-and-parametric-line-equations-formula',
      miniExample: 'P₀(2,−1,3), dir (1,4,−2) → x=2+t.',
    },
    {
      conceptSlug: 'the-normal-vector-and-equation-of-a-plane',
      keyPoint: 'a(x−x₀)+b(y−y₀)+c(z−z₀)=0.',
      formulaSlug: 'normal-vector-plane-equation-formula',
      miniExample: 'P₀(1,2,3), n=(4,−1,2) → 4x−y+2z=8.',
    },
    {
      conceptSlug: 'the-distance-from-a-point-to-a-plane',
      keyPoint: 'distance = |ax₀+by₀+cz₀−d| / √(a²+b²+c²).',
      formulaSlug: 'distance-point-to-plane-formula',
      miniExample: 'Origin to x+2y+2z=3 → distance 1.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-sphere',
      keyPoint: '(x−h)²+(y−k)²+(z−l)² = r².',
      formulaSlug: 'standard-equation-of-a-sphere-formula',
      miniExample: 'Center (2,−1,3), r=5 → =25.',
    },
    {
      conceptSlug: 'finding-the-center-and-radius-by-completing-the-square',
      keyPoint: 'Complete the square for x, y, z separately.',
      formulaSlug: 'standard-equation-of-a-sphere-formula',
      miniExample: 'x²+y²+z²−4x+6y−2z−2=0 → center(2,−3,1), r=4.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-three-dimensional-coordinate-system',
      keyPoint: 'The z-axis is perpendicular to both x and y.',
      miniExample: 'GPS latitude/longitude/altitude.',
    },
    {
      conceptSlug: 'the-distance-and-midpoint-formulas-in-3d',
      keyPoint: 'The 3D distance formula applies Pythagoras twice.',
      formulaSlug: 'distance-and-midpoint-formulas-in-3d',
      miniExample: '(2,0,4),(6,8,10) → midpoint z=7.',
    },
    {
      conceptSlug: 'direction-numbers-of-a-line',
      keyPoint: 'Use the same subtraction order for all three coordinates.',
      formulaSlug: 'direction-numbers-formula',
      miniExample: '(0,5,1) to (6,1,9) → b=−4.',
    },
    {
      conceptSlug: 'symmetric-and-parametric-equations-of-a-line',
      keyPoint: 'Symmetric form comes from solving each parametric equation for t.',
      formulaSlug: 'symmetric-and-parametric-line-equations-formula',
      miniExample: 'x=2+t at t=3 → x=5.',
    },
    {
      conceptSlug: 'the-normal-vector-and-equation-of-a-plane',
      keyPoint: 'The normal vector is perpendicular to every line in the plane.',
      formulaSlug: 'normal-vector-plane-equation-formula',
      miniExample: 'd = ax₀+by₀+cz₀.',
    },
    {
      conceptSlug: 'the-distance-from-a-point-to-a-plane',
      keyPoint: 'Always take the absolute value of the numerator.',
      formulaSlug: 'distance-point-to-plane-formula',
      miniExample: '(0,0,5) to 3x+4y=10 → distance 2.',
    },
    {
      conceptSlug: 'the-standard-equation-of-a-sphere',
      keyPoint: 'The right side of the equation is the radius SQUARED.',
      formulaSlug: 'standard-equation-of-a-sphere-formula',
      miniExample: '=49 → radius 7.',
    },
    {
      conceptSlug: 'finding-the-center-and-radius-by-completing-the-square',
      keyPoint: 'Add the same constants to both sides of the equation.',
      formulaSlug: 'standard-equation-of-a-sphere-formula',
      miniExample: 'x²+y²+z²+2x−4y+4=0 → radius 1.',
    },
  ],
};
