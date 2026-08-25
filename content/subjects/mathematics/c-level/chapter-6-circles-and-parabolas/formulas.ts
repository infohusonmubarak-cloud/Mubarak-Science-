import type { Formula } from '@/types/content';

export const chapter6CFormulas: Record<string, Formula> = {
  'standard-equation-of-a-circle-formula': {
    slug: 'standard-equation-of-a-circle-formula',
    name: 'The Standard Equation of a Circle',
    expression: '(x−h)² + (y−k)² = r²',
    meaning: 'A circle is the set of all points at a fixed distance r (the radius) from a fixed center (h,k).',
    variables: [
      { symbol: '(h,k)', meaning: 'the center of the circle' },
      { symbol: 'r', meaning: 'the radius of the circle' },
    ],
    whenToUse: 'Whenever a circle needs to be described by an equation, or its center and radius read off directly.',
    relatedConceptSlugs: ['the-standard-equation-of-a-circle'],
  },
  'general-equation-of-a-circle-formula': {
    slug: 'general-equation-of-a-circle-formula',
    name: 'The General Equation of a Circle',
    expression: 'x² + y² + Dx + Ey + F = 0',
    meaning: 'A circle\'s equation, expanded out rather than in standard center-radius form — completing the square on the x and y terms recovers the standard form.',
    variables: [
      { symbol: 'D, E, F', meaning: 'the expanded equation\'s coefficients' },
    ],
    whenToUse: 'Whenever a circle\'s equation is given in expanded form and its center/radius need to be found.',
    relatedConceptSlugs: ['the-general-equation-of-a-circle'],
  },
  'parabola-focus-directrix-formula': {
    slug: 'parabola-focus-directrix-formula',
    name: 'The Focus-Directrix Definition of a Parabola',
    expression: 'distance to focus = distance to directrix, for every point on the parabola',
    meaning: 'A parabola is the set of all points equidistant from a fixed point (the focus) and a fixed line (the directrix).',
    variables: [
      { symbol: 'focus', meaning: 'a fixed point inside the curve of the parabola' },
      { symbol: 'directrix', meaning: 'a fixed line on the outside of the curve, the same perpendicular distance rule applies to' },
    ],
    whenToUse: 'Whenever a parabola needs to be defined or verified from its geometric (rather than algebraic) definition.',
    relatedConceptSlugs: ['the-focus-directrix-definition-of-a-parabola'],
  },
  'standard-parabola-equation-formula': {
    slug: 'standard-parabola-equation-formula',
    name: 'The Standard Equation of a Parabola',
    expression: 'x² = 4py,   with focus (0,p) and directrix y=−p',
    meaning: 'A parabola with vertex at the origin, opening upward (p>0) or downward (p<0), described directly by this equation.',
    variables: [
      { symbol: 'p', meaning: 'the distance from the vertex to the focus (and also to the directrix)' },
    ],
    whenToUse: 'Whenever a parabola\'s vertex is at the origin and its focus/directrix need to be found from the equation, or vice versa.',
    relatedConceptSlugs: ['the-standard-equation-of-a-parabola'],
  },
  'general-translated-parabola-formula': {
    slug: 'general-translated-parabola-formula',
    name: 'The General Equation of a Translated Parabola',
    expression: '(x−h)² = 4p(y−k),   vertex at (h,k)',
    meaning: 'A parabola whose vertex has been moved away from the origin, to the point (h,k) — the direct translation of the standard-form equation.',
    variables: [
      { symbol: '(h,k)', meaning: 'the vertex of the parabola' },
      { symbol: 'p', meaning: 'the distance from the vertex to the focus' },
    ],
    whenToUse: 'Whenever a parabola\'s vertex is NOT at the origin.',
    relatedConceptSlugs: ['the-general-equation-of-a-translated-parabola'],
  },
  'translation-of-axes-formula': {
    slug: 'translation-of-axes-formula',
    name: 'Translation of Axes',
    expression: "x' = x−h,   y' = y−k   (new origin at (h,k) in the old system)",
    meaning: 'Converts a point\'s coordinates from an original (x,y) system to a new (x\',y\') system whose origin has been shifted to the point (h,k).',
    variables: [
      { symbol: '(h,k)', meaning: 'the new origin\'s location, measured in the old coordinate system' },
      { symbol: "(x',y')", meaning: 'the point\'s coordinates in the new, shifted system' },
    ],
    whenToUse: 'Whenever it is more convenient to re-measure coordinates relative to a new, shifted origin.',
    relatedConceptSlugs: ['translation-of-axes'],
  },
  'rotation-of-axes-formula': {
    slug: 'rotation-of-axes-formula',
    name: 'Rotation of Axes',
    expression: "x = x'cosθ − y'sinθ,   y = x'sinθ + y'cosθ",
    meaning: 'Relates a point\'s coordinates in an original (x,y) system to its coordinates in a new (x\',y\') system, rotated by angle θ about the same origin.',
    variables: [
      { symbol: 'θ', meaning: 'the angle the new axes are rotated by, relative to the old axes' },
    ],
    whenToUse: 'Whenever the coordinate axes need to be rotated to align with a tilted feature of a problem, simplifying its equation.',
    relatedConceptSlugs: ['rotation-of-axes'],
  },
};
