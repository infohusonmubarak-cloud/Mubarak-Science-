import type { Formula } from '@/types/content';

export const chapter6Formulas: Record<string, Formula> = {
  'vertex-form-of-absolute-value-function': {
    slug: 'vertex-form-of-absolute-value-function',
    name: 'Vertex Form of an Absolute Value Function',
    expression: 'y = a|x − h| + k,   vertex = (h, k)',
    meaning: 'Every absolute value function graph is a V-shape (or upside-down V) whose sharp corner — the vertex — sits at exactly (h, k), directly readable from the equation.',
    variables: [
      { symbol: 'a', meaning: 'controls the direction (sign) and narrowness (size) of the V, same role as in a parabola' },
      { symbol: 'h', meaning: 'the horizontal shift — the x-coordinate of the vertex' },
      { symbol: 'k', meaning: 'the vertical shift — the y-coordinate of the vertex' },
    ],
    whenToUse: 'Whenever you need to find the vertex, sketch the graph, or identify the transformations of an absolute value function directly from its equation.',
    relatedConceptSlugs: [
      'graphing-y-equals-abs-x-minus-h-plus-k',
      'graphing-y-equals-negative-abs-x-minus-h-plus-k',
      'graphing-y-equals-a-abs-x-minus-h-plus-k',
    ],
  },
  'absolute-value-equation-solution': {
    slug: 'absolute-value-equation-solution',
    name: 'Solving |x − p| = q',
    expression: 'If q ≥ 0:  x − p = q  or  x − p = −q,  i.e.  x = p + q  or  x = p − q. If q < 0: no solution.',
    meaning: 'Since |x − p| measures a distance (from x to p) and distance is never negative, this equation asks "which x-values are exactly q units away from p?" — there are exactly two, one on each side of p, unless q is negative.',
    variables: [
      { symbol: 'x', meaning: 'the unknown being solved for' },
      { symbol: 'p', meaning: 'the reference point the distance is measured from' },
      { symbol: 'q', meaning: 'the required distance from p (must be ≥ 0 for a solution to exist)' },
    ],
    whenToUse: 'Whenever you need to solve an equation with a single absolute value expression set equal to a number.',
    relatedConceptSlugs: ['solving-absolute-value-equations'],
  },
  'absolute-value-inequality-rules': {
    slug: 'absolute-value-inequality-rules',
    name: 'Absolute Value Inequality Rules',
    expression: '|x − p| < q  ⇔  p − q < x < p + q     |x − p| > q  ⇔  x < p − q  or  x > p + q     (q > 0)',
    meaning: '"Less than" absolute value inequalities describe a single band of values close to p; "greater than" absolute value inequalities describe two separate regions far from p.',
    variables: [
      { symbol: 'x', meaning: 'the unknown being solved for' },
      { symbol: 'p', meaning: 'the reference point' },
      { symbol: 'q', meaning: 'the distance threshold (q > 0)' },
    ],
    whenToUse: 'Whenever you need to solve an inequality with a single absolute value expression compared to a positive number.',
    relatedConceptSlugs: ['solving-absolute-value-inequalities'],
  },
};
