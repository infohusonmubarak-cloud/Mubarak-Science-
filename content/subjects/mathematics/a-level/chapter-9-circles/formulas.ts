import type { Formula } from '@/types/content';

export const chapter9Formulas: Record<string, Formula> = {
  'inscribed-angle-theorem': {
    slug: 'inscribed-angle-theorem',
    name: 'The Inscribed Angle Theorem',
    expression: 'Inscribed angle = (1/2) × central angle,   for angles subtending the same arc',
    meaning: 'An angle inscribed in a circle (with its vertex on the circle) is always exactly half the central angle that subtends the same arc.',
    variables: [
      { symbol: 'central angle', meaning: 'the angle at the centre of the circle, formed by two radii to the ends of the arc' },
      { symbol: 'inscribed angle', meaning: 'the angle at a point on the circle, formed by two chords to the same ends of the arc' },
    ],
    whenToUse: 'Whenever an angle is formed at the centre and another at the circle\'s edge, both looking at the same arc.',
    relatedConceptSlugs: ['central-and-inscribed-angles', 'angle-in-a-semicircle'],
  },
  'cyclic-quadrilateral-angle-sum': {
    slug: 'cyclic-quadrilateral-angle-sum',
    name: 'Opposite Angles of a Cyclic Quadrilateral',
    expression: '∠A + ∠C = 180°   and   ∠B + ∠D = 180°',
    meaning: 'In any quadrilateral whose four vertices all lie on a circle (a cyclic quadrilateral), each pair of opposite angles adds up to exactly 180°.',
    variables: [
      { symbol: '∠A, ∠B, ∠C, ∠D', meaning: 'the four interior angles of the cyclic quadrilateral, in order around the circle' },
    ],
    whenToUse: 'Whenever a quadrilateral is inscribed in a circle and you need to find a missing angle from its opposite angle.',
    relatedConceptSlugs: ['cyclic-quadrilateral-angles'],
  },
  'equal-chords-equal-distance-theorem': {
    slug: 'equal-chords-equal-distance-theorem',
    name: 'Equal Chords Theorem',
    expression: 'Chord AB = Chord CD   ⇔   AB and CD are equidistant from the centre   ⇔   arc AB = arc CD',
    meaning: 'In the same circle (or equal circles), equal chords are always the same distance from the centre and always cut off equal arcs — and each of these conditions implies the other two.',
    variables: [
      { symbol: 'chord', meaning: 'a straight segment connecting two points on the circle' },
      { symbol: 'distance from the centre', meaning: 'the length of the perpendicular segment from the centre to the chord' },
    ],
    whenToUse: 'Whenever you know one of "equal chords," "equal distance from centre," or "equal arcs," and need to conclude the other two.',
    relatedConceptSlugs: ['equal-chords-and-equal-arcs'],
  },
  'perpendicular-bisector-of-chord': {
    slug: 'perpendicular-bisector-of-chord',
    name: 'The Perpendicular from the Centre to a Chord',
    expression: 'If OM ⊥ AB (M on chord AB, O the centre), then AM = MB',
    meaning: 'A perpendicular line drawn from a circle\'s centre to any chord always bisects that chord exactly in half.',
    variables: [
      { symbol: 'O', meaning: 'the centre of the circle' },
      { symbol: 'M', meaning: 'the point where the perpendicular from O meets the chord AB' },
      { symbol: 'AM, MB', meaning: 'the two halves of the chord created by M' },
    ],
    whenToUse: 'Whenever a perpendicular is drawn from a circle\'s centre to a chord, letting you conclude the chord is bisected — often the key step in finding a chord\'s length from the radius and its distance from the centre.',
    relatedConceptSlugs: ['perpendicular-from-centre-to-a-chord'],
  },
  'intersecting-chords-theorem': {
    slug: 'intersecting-chords-theorem',
    name: 'The Intersecting Chords Theorem',
    expression: 'PA × PC = PB × PD,   for chords AC and BD intersecting at point P inside the circle',
    meaning: 'When two chords intersect inside a circle, the products of the two segments of each chord are always equal.',
    variables: [
      { symbol: 'P', meaning: 'the point where the two chords intersect' },
      { symbol: 'PA, PC', meaning: 'the two segments the intersection point creates on the first chord' },
      { symbol: 'PB, PD', meaning: 'the two segments the intersection point creates on the second chord' },
    ],
    whenToUse: 'Whenever two chords cross inside a circle, and you know three of the four segment lengths and need the fourth.',
    relatedConceptSlugs: ['the-intersecting-chords-theorem'],
  },
};
