import type { Formula } from '@/types/content';

export const chapter1Formulas: Record<string, Formula> = {
  'distance-formula': {
    slug: 'distance-formula',
    name: 'Distance Formula',
    expression: 'd = √[(x₂ − x₁)² + (y₂ − y₁)²]',
    meaning: 'The straight-line distance between two points on a coordinate plane.',
    variables: [
      { symbol: 'd', meaning: 'the distance between the two points' },
      { symbol: 'x₁, y₁', meaning: 'the coordinates of the first point' },
      { symbol: 'x₂, y₂', meaning: 'the coordinates of the second point' },
    ],
    whenToUse: 'Whenever you know the coordinates of two points and need the straight-line distance between them.',
    relatedConceptSlugs: ['distance-between-two-points', 'coordinate-geometry-in-real-life'],
  },
  'midpoint-formula': {
    slug: 'midpoint-formula',
    name: 'Midpoint Formula',
    expression: 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
    meaning: 'The point exactly halfway between two given points.',
    variables: [
      { symbol: 'M', meaning: 'the midpoint' },
      { symbol: 'x₁, y₁', meaning: 'the coordinates of the first point' },
      { symbol: 'x₂, y₂', meaning: 'the coordinates of the second point' },
    ],
    whenToUse: 'Whenever you need the exact centre point of a segment joining two known points.',
    relatedConceptSlugs: ['midpoint-of-a-segment', 'dividing-a-segment-in-a-ratio'],
  },
  'slope-formula': {
    slug: 'slope-formula',
    name: 'Slope Formula',
    expression: 'm = (y₂ − y₁) / (x₂ − x₁)',
    meaning: 'How steep a line is — the change in y for each unit change in x.',
    variables: [
      { symbol: 'm', meaning: 'the slope (gradient) of the line' },
      { symbol: 'x₁, y₁', meaning: 'the coordinates of the first point on the line' },
      { symbol: 'x₂, y₂', meaning: 'the coordinates of the second point on the line' },
    ],
    whenToUse: 'Whenever you need to measure or compare how steep a line is, or check whether two lines are parallel or perpendicular.',
    relatedConceptSlugs: ['slope-of-a-line', 'parallel-lines', 'perpendicular-lines'],
  },
  'straight-line-equation': {
    slug: 'straight-line-equation',
    name: 'Equation of a Straight Line',
    expression: 'y = mx + c',
    meaning: 'Describes every point on a non-vertical straight line, using its slope and y-intercept.',
    variables: [
      { symbol: 'm', meaning: 'the slope of the line' },
      { symbol: 'c', meaning: 'the y-intercept — where the line crosses the y-axis' },
      { symbol: 'x, y', meaning: 'the coordinates of any point on the line' },
    ],
    whenToUse: 'Whenever you need to write down, graph, or predict values along an entire straight line, not just one point on it.',
    relatedConceptSlugs: ['equation-of-a-straight-line', 'horizontal-and-vertical-lines', 'intercepts'],
  },
};
