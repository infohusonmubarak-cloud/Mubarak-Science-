import type { Formula } from '@/types/content';

export const chapter10Formulas: Record<string, Formula> = {
  'coterminal-angles-formula': {
    slug: 'coterminal-angles-formula',
    name: 'Coterminal Angles',
    expression: 'θ + 360°n   (or θ + 2πn radians),  for any integer n',
    meaning: 'Two angles in standard position are coterminal if they share the same terminal side — which happens exactly when they differ by a whole number of full revolutions.',
    variables: [
      { symbol: 'θ', meaning: 'the original angle' },
      { symbol: 'n', meaning: 'any integer — how many extra full turns are added or subtracted' },
    ],
    whenToUse: 'Whenever you need to find an equivalent angle (e.g. within 0°-360°) for an angle greater than 360° or negative.',
    relatedConceptSlugs: ['meaning-of-an-angle-and-standard-position'],
  },
  'degree-radian-conversion-formula': {
    slug: 'degree-radian-conversion-formula',
    name: 'Degree-Radian Conversion',
    expression: 'radians = degrees × (π/180)     degrees = radians × (180/π)',
    meaning: 'Converts an angle measurement between degrees and radians, the two standard units for measuring angles.',
    variables: [
      { symbol: 'π', meaning: 'pi, approximately 3.14159 — one full revolution is 2π radians, or 360°' },
    ],
    whenToUse: 'Whenever an angle is given in one unit but a formula or calculation requires the other.',
    relatedConceptSlugs: ['degree-radian-conversion'],
  },
  'arc-length-formula': {
    slug: 'arc-length-formula',
    name: 'Arc Length',
    expression: 's = rθ   (θ in radians)',
    meaning: 'The length of an arc equals the radius times the angle it subtends, when that angle is measured in radians.',
    variables: [
      { symbol: 's', meaning: 'the arc length' },
      { symbol: 'r', meaning: 'the radius of the circle' },
      { symbol: 'θ', meaning: 'the central angle subtended by the arc, in radians' },
    ],
    whenToUse: 'Whenever you need the length of a curved arc from its radius and central angle.',
    relatedConceptSlugs: ['arc-length-of-a-sector'],
  },
  'sector-area-formula': {
    slug: 'sector-area-formula',
    name: 'Area of a Sector',
    expression: 'A = (1/2) r² θ   (θ in radians)',
    meaning: 'The area of a pie-slice-shaped sector equals half the radius squared times the central angle, when that angle is in radians.',
    variables: [
      { symbol: 'A', meaning: 'the area of the sector' },
      { symbol: 'r', meaning: 'the radius of the circle' },
      { symbol: 'θ', meaning: 'the central angle of the sector, in radians' },
    ],
    whenToUse: 'Whenever you need the area of a pie-slice-shaped portion of a circle, given its radius and central angle.',
    relatedConceptSlugs: ['area-of-a-sector'],
  },
  'six-trig-ratios-formula': {
    slug: 'six-trig-ratios-formula',
    name: 'The Six Trigonometric Ratios',
    expression: 'sinθ=opp/hyp,  cosθ=adj/hyp,  tanθ=opp/adj,  cscθ=hyp/opp,  secθ=hyp/adj,  cotθ=adj/opp',
    meaning: 'For an acute angle θ in a right triangle, each trigonometric ratio is a fixed ratio of two of the triangle\'s three sides — three basic ratios, and their three reciprocals.',
    variables: [
      { symbol: 'opp', meaning: 'the length of the side opposite angle θ' },
      { symbol: 'adj', meaning: 'the length of the side adjacent to angle θ (not the hypotenuse)' },
      { symbol: 'hyp', meaning: 'the length of the hypotenuse, opposite the right angle' },
    ],
    whenToUse: 'Whenever you know an angle and one side of a right triangle and need another side, or know two sides and need the angle.',
    relatedConceptSlugs: ['the-six-trigonometric-ratios', 'solving-right-triangles', 'angle-of-elevation-and-depression'],
  },
  'pythagorean-trig-identity': {
    slug: 'pythagorean-trig-identity',
    name: 'The Pythagorean Trigonometric Identity',
    expression: 'sin²θ + cos²θ = 1     also:  tanθ = sinθ/cosθ,  cotθ = cosθ/sinθ',
    meaning: 'The squares of sine and cosine of the same angle always add up to exactly 1 — a direct consequence of the Pythagorean theorem — and tangent is always the ratio of sine to cosine.',
    variables: [
      { symbol: 'θ', meaning: 'any angle' },
    ],
    whenToUse: 'Whenever you know one trigonometric ratio of an angle and need another, without knowing the angle itself.',
    relatedConceptSlugs: ['pythagorean-identity-and-reciprocal-relations'],
  },
  'special-angle-trig-values-table': {
    slug: 'special-angle-trig-values-table',
    name: 'Trigonometric Ratios for Special Angles',
    expression: 'sin: 0, 1/2, √2/2, √3/2, 1   |   cos: 1, √3/2, √2/2, 1/2, 0   (for θ = 0°, 30°, 45°, 60°, 90°)',
    meaning: 'The sine and cosine of the five most common "special" angles have exact, memorizable values, derived directly from the 45-45-90 and 30-60-90 triangles.',
    variables: [
      { symbol: 'θ', meaning: 'one of the five special angles: 0°, 30°, 45°, 60°, or 90°' },
    ],
    whenToUse: 'Whenever a problem involves one of these five common angles and you need an exact value rather than a decimal approximation.',
    relatedConceptSlugs: ['trig-ratios-for-special-angles'],
  },
};
