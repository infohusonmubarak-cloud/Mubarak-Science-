import type { Formula } from '@/types/content';

export const chapter3CFormulas: Record<string, Formula> = {
  'distance-and-midpoint-formulas-in-3d': {
    slug: 'distance-and-midpoint-formulas-in-3d',
    name: 'Distance and Midpoint in Three Dimensions',
    expression: 'd = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²],   M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)',
    meaning: 'Both the 2D distance and midpoint formulas extend directly to 3D, simply by including a third (z) term.',
    variables: [
      { symbol: '(x₁,y₁,z₁), (x₂,y₂,z₂)', meaning: 'the coordinates of the two points' },
      { symbol: 'M', meaning: 'the midpoint of the segment joining the two points' },
    ],
    whenToUse: 'Whenever the distance between two points in 3D space, or the point exactly halfway between them, is needed.',
    relatedConceptSlugs: ['the-distance-and-midpoint-formulas-in-3d'],
  },
  'direction-numbers-formula': {
    slug: 'direction-numbers-formula',
    name: 'Direction Numbers of a Line',
    expression: 'a = x₂−x₁,   b = y₂−y₁,   c = z₂−z₁',
    meaning: 'Given two points on a line, the direction numbers (a,b,c) describe the line\'s direction — proportional to how far apart the two points are along each axis.',
    variables: [
      { symbol: '(x₁,y₁,z₁), (x₂,y₂,z₂)', meaning: 'any two distinct points on the line' },
      { symbol: 'a, b, c', meaning: 'the direction numbers of the line' },
    ],
    whenToUse: 'Whenever the direction of a line in 3D needs to be described, before writing its equation.',
    relatedConceptSlugs: ['direction-numbers-of-a-line'],
  },
  'symmetric-and-parametric-line-equations-formula': {
    slug: 'symmetric-and-parametric-line-equations-formula',
    name: 'Symmetric and Parametric Equations of a Line',
    expression: '(x−x₀)/a = (y−y₀)/b = (z−z₀)/c   (symmetric);   x=x₀+at, y=y₀+bt, z=z₀+ct   (parametric)',
    meaning: 'A line through a known point (x₀,y₀,z₀) with direction numbers (a,b,c) can be written either as one combined symmetric equation, or as three separate parametric equations depending on a parameter t.',
    variables: [
      { symbol: '(x₀,y₀,z₀)', meaning: 'a known point on the line' },
      { symbol: 'a, b, c', meaning: 'the direction numbers of the line' },
      { symbol: 't', meaning: 'the parameter — each value of t gives one point on the line' },
    ],
    whenToUse: 'Whenever a line in 3D needs to be written as an equation, from a known point and direction.',
    relatedConceptSlugs: ['symmetric-and-parametric-equations-of-a-line'],
  },
  'normal-vector-plane-equation-formula': {
    slug: 'normal-vector-plane-equation-formula',
    name: 'The Equation of a Plane from a Normal Vector',
    expression: 'a(x−x₀) + b(y−y₀) + c(z−z₀) = 0,   equivalently ax+by+cz = d',
    meaning: 'A plane through a known point (x₀,y₀,z₀), perpendicular to a normal vector (a,b,c), is described by this equation — the normal vector\'s components become the plane equation\'s coefficients.',
    variables: [
      { symbol: '(a,b,c)', meaning: 'the normal vector — perpendicular to every line lying in the plane' },
      { symbol: '(x₀,y₀,z₀)', meaning: 'a known point on the plane' },
      { symbol: 'd', meaning: 'the constant ax₀+by₀+cz₀, once the equation is expanded' },
    ],
    whenToUse: 'Whenever a plane needs to be described by an equation, from a known point and its normal direction.',
    relatedConceptSlugs: ['the-normal-vector-and-equation-of-a-plane'],
  },
  'distance-point-to-plane-formula': {
    slug: 'distance-point-to-plane-formula',
    name: 'Distance from a Point to a Plane',
    expression: 'distance = |ax₀+by₀+cz₀−d| / √(a²+b²+c²)',
    meaning: 'The shortest (perpendicular) distance from a point (x₀,y₀,z₀) to a plane ax+by+cz=d.',
    variables: [
      { symbol: '(x₀,y₀,z₀)', meaning: 'the point whose distance to the plane is being found' },
      { symbol: 'a, b, c, d', meaning: 'the coefficients of the plane\'s equation, ax+by+cz=d' },
    ],
    whenToUse: 'Whenever the shortest distance from a point to a plane is needed.',
    relatedConceptSlugs: ['the-distance-from-a-point-to-a-plane'],
  },
  'standard-equation-of-a-sphere-formula': {
    slug: 'standard-equation-of-a-sphere-formula',
    name: 'The Standard Equation of a Sphere',
    expression: '(x−h)² + (y−k)² + (z−l)² = r²',
    meaning: 'A sphere is the set of all points at a fixed distance r (the radius) from a fixed center point (h,k,l).',
    variables: [
      { symbol: '(h,k,l)', meaning: 'the center of the sphere' },
      { symbol: 'r', meaning: 'the radius of the sphere' },
    ],
    whenToUse: 'Whenever a sphere needs to be described by an equation, or its center and radius identified from one.',
    relatedConceptSlugs: ['the-standard-equation-of-a-sphere', 'finding-the-center-and-radius-by-completing-the-square'],
  },
};
