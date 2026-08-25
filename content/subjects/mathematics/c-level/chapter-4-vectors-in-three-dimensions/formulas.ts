import type { Formula } from '@/types/content';

export const chapter4CFormulas: Record<string, Formula> = {
  'vector-magnitude-3d-formula': {
    slug: 'vector-magnitude-3d-formula',
    name: 'Magnitude of a Three-Dimensional Vector',
    expression: '|v| = √(x² + y² + z²),   for v = (x, y, z)',
    meaning: 'The length of a 3D vector, found by extending the Pythagorean theorem to a third dimension.',
    variables: [
      { symbol: 'v', meaning: 'a three-dimensional vector' },
      { symbol: 'x, y, z', meaning: 'the components of v' },
    ],
    whenToUse: 'Whenever the actual length of a 3D vector is needed.',
    relatedConceptSlugs: ['vectors-in-three-dimensions-and-their-magnitude'],
  },
  'dot-product-formula': {
    slug: 'dot-product-formula',
    name: 'The Dot Product',
    expression: 'a · b = a₁b₁ + a₂b₂ + a₃b₃',
    meaning: 'The dot (scalar) product of two vectors is found by multiplying corresponding components and adding the results — the output is always a single number (a scalar), not a vector.',
    variables: [
      { symbol: 'a = (a₁,a₂,a₃), b = (b₁,b₂,b₃)', meaning: 'the two vectors being combined' },
    ],
    whenToUse: 'Whenever two vectors need to be combined into a single scalar value, especially to find the angle between them.',
    relatedConceptSlugs: ['the-dot-product-of-two-vectors'],
  },
  'angle-between-vectors-formula': {
    slug: 'angle-between-vectors-formula',
    name: 'The Angle Between Two Vectors',
    expression: 'cos θ = (a · b) / (|a||b|)',
    meaning: 'The angle between two vectors can be found from their dot product, divided by the product of their magnitudes.',
    variables: [
      { symbol: 'θ', meaning: 'the angle between vectors a and b' },
      { symbol: '|a|, |b|', meaning: 'the magnitudes of the two vectors' },
    ],
    whenToUse: 'Whenever the angle between two vectors needs to be found.',
    relatedConceptSlugs: ['the-angle-between-two-vectors'],
  },
  'cross-product-formula': {
    slug: 'cross-product-formula',
    name: 'The Cross Product',
    expression: 'a × b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁)',
    meaning: 'The cross (vector) product of two vectors produces a NEW vector, perpendicular to both original vectors.',
    variables: [
      { symbol: 'a = (a₁,a₂,a₃), b = (b₁,b₂,b₃)', meaning: 'the two vectors being combined' },
      { symbol: 'a × b', meaning: 'the resulting vector, perpendicular to both a and b' },
    ],
    whenToUse: 'Whenever a vector perpendicular to two given vectors is needed.',
    relatedConceptSlugs: ['the-cross-product-of-two-vectors'],
  },
  'cross-product-area-formula': {
    slug: 'cross-product-area-formula',
    name: 'Area of a Parallelogram Using the Cross Product',
    expression: 'Area = |a × b|',
    meaning: 'The area of the parallelogram formed by two vectors a and b equals the magnitude of their cross product.',
    variables: [
      { symbol: 'a, b', meaning: 'the two vectors forming the sides of the parallelogram' },
    ],
    whenToUse: 'Whenever the area of a parallelogram (or, halved, a triangle) formed by two vectors is needed.',
    relatedConceptSlugs: ['the-cross-product-and-area-of-a-parallelogram'],
  },
  'vector-equation-of-a-line-formula': {
    slug: 'vector-equation-of-a-line-formula',
    name: 'The Vector Equation of a Line',
    expression: 'r = r₀ + t·v',
    meaning: 'A line through the point with position vector r₀, in the direction of vector v, is described by this equation — every value of t gives a different point on the line.',
    variables: [
      { symbol: 'r', meaning: 'the position vector of a general point on the line' },
      { symbol: 'r₀', meaning: 'the position vector of a known point on the line' },
      { symbol: 'v', meaning: 'the direction vector of the line' },
      { symbol: 't', meaning: 'the parameter' },
    ],
    whenToUse: 'Whenever a line in 3D needs to be described using vector notation.',
    relatedConceptSlugs: ['the-vector-equation-of-a-line-in-space'],
  },
  'vector-equation-of-a-plane-formula': {
    slug: 'vector-equation-of-a-plane-formula',
    name: 'The Vector Equation of a Plane',
    expression: 'n · (r − r₀) = 0',
    meaning: 'A plane through the point with position vector r₀, with normal vector n, is described by this equation — it says every point r in the plane forms a vector (r−r₀) perpendicular to n.',
    variables: [
      { symbol: 'n', meaning: 'the normal vector to the plane' },
      { symbol: 'r₀', meaning: 'the position vector of a known point on the plane' },
      { symbol: 'r', meaning: 'the position vector of a general point on the plane' },
    ],
    whenToUse: 'Whenever a plane needs to be described using vector notation.',
    relatedConceptSlugs: ['the-vector-equation-of-a-plane-in-space'],
  },
  'scalar-triple-product-volume-formula': {
    slug: 'scalar-triple-product-volume-formula',
    name: 'The Scalar Triple Product and Volume',
    expression: 'Volume = |a · (b × c)|',
    meaning: 'The volume of the parallelepiped (a 3D "slanted box") formed by three vectors a, b, and c, sharing a common vertex.',
    variables: [
      { symbol: 'a, b, c', meaning: 'the three edge vectors of the parallelepiped, from one shared corner' },
    ],
    whenToUse: 'Whenever the volume of a parallelepiped formed by three vectors is needed.',
    relatedConceptSlugs: ['the-scalar-triple-product-and-volume'],
  },
};
