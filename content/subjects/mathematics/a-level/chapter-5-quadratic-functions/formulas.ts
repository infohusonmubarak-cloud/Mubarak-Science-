import type { Formula } from '@/types/content';

export const chapter5Formulas: Record<string, Formula> = {
  'vertex-formula-of-a-quadratic': {
    slug: 'vertex-formula-of-a-quadratic',
    name: 'Vertex Formula of a Quadratic Function',
    expression: 'Vertex = (−b/2a, f(−b/2a)),  for  y = ax² + bx + c',
    meaning: 'Gives the exact coordinates of the turning point (vertex) of a parabola directly from its coefficients, without needing to complete the square.',
    variables: [
      { symbol: 'a, b, c', meaning: 'the coefficients of y = ax² + bx + c (a ≠ 0)' },
      { symbol: '−b/2a', meaning: 'the x-coordinate of the vertex, and the equation of the axis of symmetry' },
      { symbol: 'f(−b/2a)', meaning: 'the y-coordinate of the vertex — the minimum or maximum value of the function' },
    ],
    whenToUse: 'Whenever you need the highest or lowest point of a parabola, or its axis of symmetry, directly from the equation y = ax² + bx + c.',
    relatedConceptSlugs: [
      'graphing-y-x-squared-plus-bx-plus-c',
      'graphing-y-negative-x-squared-plus-bx-plus-c',
      'the-vertex-formula-and-general-quadratic-graphs',
    ],
  },
  'discriminant-formula': {
    slug: 'discriminant-formula',
    name: 'Discriminant of a Quadratic',
    expression: 'D = b² − 4ac',
    meaning: 'A single number, computed from a quadratic\'s coefficients, that reveals how many real roots (x-intercepts) the quadratic has — without solving the equation.',
    variables: [
      { symbol: 'D', meaning: 'the discriminant' },
      { symbol: 'a, b, c', meaning: 'the coefficients of ax² + bx + c = 0 (a ≠ 0)' },
    ],
    whenToUse: 'Whenever you need to know how many real solutions a quadratic equation has (two, one, or none) before — or instead of — actually solving it.',
    relatedConceptSlugs: ['the-discriminant', 'the-quadratic-formula'],
  },
  'quadratic-formula': {
    slug: 'quadratic-formula',
    name: 'The Quadratic Formula',
    expression: 'x = (−b ± √(b² − 4ac)) / 2a',
    meaning: 'Solves any quadratic equation ax² + bx + c = 0 directly from its coefficients, without needing to factor.',
    variables: [
      { symbol: 'x', meaning: 'the solution(s) — the roots of the equation' },
      { symbol: 'a, b, c', meaning: 'the coefficients of ax² + bx + c = 0 (a ≠ 0)' },
      { symbol: '±', meaning: 'produces two solutions — one using +, one using −, unless the discriminant is 0' },
    ],
    whenToUse: 'Whenever a quadratic equation cannot be factored easily (or at all), or you want a reliable method that always works.',
    relatedConceptSlugs: ['the-quadratic-formula', 'solving-quadratic-inequalities'],
  },
};
