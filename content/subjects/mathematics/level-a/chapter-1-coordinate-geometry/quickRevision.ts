import type { QuickRevision } from '@/types/content';

export const chapter1QuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'cartesian-coordinate-system',
      keyPoint: 'Coordinates are ordered pairs (x, y), measured from the origin (0, 0).',
      miniExample: '(3, 4) means 3 right, 4 up from the origin.',
    },
    {
      conceptSlug: 'distance-between-two-points',
      keyPoint: 'd = √[(x₂−x₁)² + (y₂−y₁)²]',
      formulaSlug: 'distance-formula',
      miniExample: '(0,0) to (3,4) → d = 5.',
    },
    {
      conceptSlug: 'midpoint-of-a-segment',
      keyPoint: 'M = ((x₁+x₂)/2, (y₁+y₂)/2)',
      formulaSlug: 'midpoint-formula',
      miniExample: '(0,0) to (6,10) → M = (3, 5).',
    },
    {
      conceptSlug: 'slope-of-a-line',
      keyPoint: 'm = (y₂−y₁)/(x₂−x₁) — rise over run.',
      formulaSlug: 'slope-formula',
      miniExample: '(0,0) to (4,8) → m = 2.',
    },
    {
      conceptSlug: 'equation-of-a-straight-line',
      keyPoint: 'y = mx + c: m is the slope, c is the y-intercept.',
      formulaSlug: 'straight-line-equation',
      miniExample: 'Slope 3 through (2,11) → y = 3x + 5.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'cartesian-coordinate-system',
      keyPoint: 'The x-axis (horizontal) and y-axis (vertical) cross at the origin, (0, 0).',
      miniExample: '(3, 4) means 3 right, 4 up.',
    },
    {
      conceptSlug: 'ordered-pairs-and-quadrants',
      keyPoint: 'Quadrant I: (+,+). II: (-,+). III: (-,-). IV: (+,-) — numbered counterclockwise from the top-right.',
      miniExample: '(-5, 7) is in Quadrant II.',
    },
    {
      conceptSlug: 'plotting-points',
      keyPoint: 'Move horizontally first (x), then vertically (y), starting from the origin.',
      miniExample: '(-4, 2) is 4 left, 2 up.',
    },
    {
      conceptSlug: 'distance-between-two-points',
      keyPoint: 'd = √[(x₂−x₁)² + (y₂−y₁)²] — the Pythagorean theorem applied to coordinates.',
      formulaSlug: 'distance-formula',
      miniExample: '(1,2) to (4,6) → d = 5.',
    },
    {
      conceptSlug: 'midpoint-of-a-segment',
      keyPoint: 'Average the x-values and the y-values separately.',
      formulaSlug: 'midpoint-formula',
      miniExample: '(2,-3) to (8,7) → M = (5, 2).',
    },
    {
      conceptSlug: 'dividing-a-segment-in-a-ratio',
      keyPoint: 'A ratio of m:n splits a segment into m+n equal parts; the midpoint is the 1:1 case.',
      miniExample: '(0,0) to (8,12) in ratio 1:3 → (2, 3).',
    },
    {
      conceptSlug: 'slope-of-a-line',
      keyPoint: 'm = (y₂−y₁)/(x₂−x₁) stays the same wherever you measure it on a straight line.',
      formulaSlug: 'slope-formula',
      miniExample: '(1,2) to (5,14) → m = 3.',
    },
    {
      conceptSlug: 'equation-of-a-straight-line',
      keyPoint: 'y = mx + c describes every point on a non-vertical line.',
      formulaSlug: 'straight-line-equation',
      miniExample: 'Slope 3 through (2,11) → y = 3x + 5.',
    },
    {
      conceptSlug: 'horizontal-and-vertical-lines',
      keyPoint: 'Horizontal: y = constant, slope 0. Vertical: x = constant, slope undefined.',
      miniExample: '(2,5) and (-6,5) → y = 5.',
    },
    {
      conceptSlug: 'intercepts',
      keyPoint: 'y-intercept: set x = 0. x-intercept: set y = 0.',
      formulaSlug: 'straight-line-equation',
      miniExample: 'y = 2x − 8 → y-intercept (0,−8), x-intercept (4,0).',
    },
    {
      conceptSlug: 'parallel-lines',
      keyPoint: 'Parallel lines have equal slopes, m₁ = m₂.',
      formulaSlug: 'slope-formula',
      miniExample: 'y = 4x+1 and y = 4x−9 are parallel.',
    },
    {
      conceptSlug: 'perpendicular-lines',
      keyPoint: 'Perpendicular slopes multiply to −1: m₁ × m₂ = −1.',
      formulaSlug: 'slope-formula',
      miniExample: 'Slope 2/3 → perpendicular slope −3/2.',
    },
    {
      conceptSlug: 'coordinate-geometry-in-real-life',
      keyPoint: 'GPS, maps, and apps all place things using the same coordinate ideas.',
      miniExample: 'Towers at (0,0) and (6,8) → 10 km apart.',
    },
  ],
};
