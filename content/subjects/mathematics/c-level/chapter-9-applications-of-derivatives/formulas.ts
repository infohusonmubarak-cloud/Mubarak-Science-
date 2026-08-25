import type { Formula } from '@/types/content';

export const chapter9CFormulas: Record<string, Formula> = {
  'critical-point-definition-formula': {
    slug: 'critical-point-definition-formula',
    name: 'The Definition of a Critical Point',
    expression: "A critical point of f occurs where f'(x) = 0, or where f'(x) is undefined",
    meaning: 'Critical points are the candidate locations for local maxima, local minima, or other notable features of a function\'s graph.',
    variables: [
      { symbol: "f'(x)", meaning: 'the derivative of f' },
    ],
    whenToUse: 'Whenever locating a function\'s local extrema (maxima/minima) is the goal — always start by finding the critical points.',
    relatedConceptSlugs: ['critical-points-and-where-they-occur'],
  },
  'increasing-decreasing-test-formula': {
    slug: 'increasing-decreasing-test-formula',
    name: 'The Increasing/Decreasing Test',
    expression: "f'(x) > 0 ⟹ f is increasing;   f'(x) < 0 ⟹ f is decreasing",
    meaning: 'The sign of the derivative directly reveals whether the original function is rising or falling at that point.',
    variables: [
      { symbol: "f'(x)", meaning: 'the derivative of f, evaluated at a specific x' },
    ],
    whenToUse: 'Whenever the intervals where a function increases or decreases need to be identified.',
    relatedConceptSlugs: ['increasing-and-decreasing-intervals'],
  },
  'extrema-classification-formula': {
    slug: 'extrema-classification-formula',
    name: 'Classifying Extrema (First Derivative Test)',
    expression: "f' changes + to − at c ⟹ local max at c;   f' changes − to + at c ⟹ local min at c",
    meaning: 'Examining how the derivative\'s sign changes on either side of a critical point classifies it as a local maximum, local minimum, or neither.',
    variables: [
      { symbol: 'c', meaning: 'a critical point being classified' },
    ],
    whenToUse: 'Whenever a critical point needs to be classified as a local max, local min, or neither — and whenever absolute extrema on a closed interval are needed (also checking the endpoints).',
    relatedConceptSlugs: ['finding-absolute-and-local-extrema'],
  },
  'concavity-formula': {
    slug: 'concavity-formula',
    name: 'Concavity from the Second Derivative',
    expression: "f''(x) > 0 ⟹ concave up;   f''(x) < 0 ⟹ concave down",
    meaning: 'The sign of the second derivative reveals whether the graph curves upward (like a cup) or downward (like a frown) at that point. A point where concavity changes is an inflection point.',
    variables: [
      { symbol: "f''(x)", meaning: 'the second derivative of f — the derivative of the derivative' },
    ],
    whenToUse: 'Whenever the curvature (concavity) of a graph, or its inflection points, need to be identified.',
    relatedConceptSlugs: ['the-second-derivative-and-concavity'],
  },
  'second-derivative-test-formula': {
    slug: 'second-derivative-test-formula',
    name: 'The Second Derivative Test',
    expression: "At a critical point c where f'(c)=0:  f''(c)>0 ⟹ local min;  f''(c)<0 ⟹ local max;  f''(c)=0 ⟹ inconclusive",
    meaning: 'An alternative (often faster) way to classify a critical point, using the sign of the second derivative there instead of checking the sign change of the first derivative on both sides.',
    variables: [
      { symbol: 'c', meaning: 'a critical point where f\'(c)=0' },
    ],
    whenToUse: 'Whenever a critical point needs to be classified, and computing the second derivative is more convenient than the First Derivative Test.',
    relatedConceptSlugs: ['the-second-derivative-test-for-extrema'],
  },
  'linear-approximation-formula': {
    slug: 'linear-approximation-formula',
    name: 'Linear Approximation',
    expression: "L(x) = f(a) + f'(a)(x−a)",
    meaning: 'Uses the tangent line at a known point a to estimate the value of f at a nearby point x — since the tangent line closely hugs the curve near the point of tangency.',
    variables: [
      { symbol: 'a', meaning: 'a known point where f(a) and f\'(a) can be computed exactly' },
      { symbol: 'x', meaning: 'a nearby point where f(x) is being estimated' },
      { symbol: 'L(x)', meaning: 'the linear approximation (estimate) of f(x)' },
    ],
    whenToUse: 'Whenever a quick estimate of a function\'s value is needed near a point where the exact value is already known.',
    relatedConceptSlugs: ['linear-approximation-using-derivatives'],
  },
};
