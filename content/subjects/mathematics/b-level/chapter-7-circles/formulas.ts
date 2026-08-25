import type { Formula } from '@/types/content';

export const chapter7BFormulas: Record<string, Formula> = {
  'tangent-radius-perpendicularity': {
    slug: 'tangent-radius-perpendicularity',
    name: 'Tangent-Radius Perpendicularity',
    expression: 'OT ⊥ the tangent line, at the point of tangency T',
    meaning: 'A tangent line to a circle is always exactly perpendicular to the radius drawn to the point where it touches the circle.',
    variables: [
      { symbol: 'O', meaning: 'the centre of the circle' },
      { symbol: 'T', meaning: 'the point of tangency — where the tangent line touches the circle' },
    ],
    whenToUse: 'Whenever a tangent line and a radius meet at the point of tangency, guaranteeing a 90° angle there.',
    relatedConceptSlugs: ['the-tangent-radius-perpendicularity-theorem'],
  },
  'two-tangent-lengths-equal': {
    slug: 'two-tangent-lengths-equal',
    name: 'The Two-Tangent Theorem',
    expression: 'PA = PB,   for two tangents from external point P touching the circle at A and B',
    meaning: 'The two tangent segments drawn from any single external point to a circle are always exactly equal in length.',
    variables: [
      { symbol: 'P', meaning: 'an external point (outside the circle)' },
      { symbol: 'A, B', meaning: 'the two points where the tangents from P touch the circle' },
    ],
    whenToUse: 'Whenever two tangent segments are drawn to a circle from the same external point.',
    relatedConceptSlugs: ['the-two-tangent-theorem'],
  },
  'tangent-chord-angle-theorem': {
    slug: 'tangent-chord-angle-theorem',
    name: 'The Tangent-Chord Angle Theorem',
    expression: 'The angle between a tangent and a chord (drawn from the point of tangency) equals the inscribed angle in the alternate segment',
    meaning: "Also called the Alternate Segment Theorem — the angle formed between a tangent line and a chord equals the angle that same chord subtends from any point on the arc on the OTHER side of the chord.",
    variables: [
      { symbol: 'tangent-chord angle', meaning: 'the angle between the tangent line and the chord, measured at the point of tangency' },
      { symbol: 'alternate segment', meaning: 'the region of the circle on the opposite side of the chord from the tangent-chord angle being measured' },
    ],
    whenToUse: 'Whenever a tangent and a chord meet at a point of tangency, and you need to relate that angle to an inscribed angle elsewhere in the circle.',
    relatedConceptSlugs: ['the-tangent-chord-angle-theorem'],
  },
  'concyclic-points-condition': {
    slug: 'concyclic-points-condition',
    name: 'A Condition for Concyclic Points',
    expression: 'If ∠ACB = ∠ADB (C, D on the same side of AB), then A, B, C, D are concyclic',
    meaning: 'If two points, C and D, on the same side of a segment AB, both see AB under the exact same angle, then all four points A, B, C, D must lie on one common circle.',
    variables: [
      { symbol: 'A, B', meaning: 'two fixed points (forming the reference segment)' },
      { symbol: 'C, D', meaning: 'two points on the same side of AB, each forming an angle with A and B' },
    ],
    whenToUse: 'Whenever you need to prove that four points all lie on a single circle, using only angle measurements.',
    relatedConceptSlugs: ['meaning-and-conditions-for-concyclic-points', 'proving-four-points-are-concyclic'],
  },
};
