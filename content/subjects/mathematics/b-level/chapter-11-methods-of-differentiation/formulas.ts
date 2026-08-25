import type { Formula } from '@/types/content';

export const chapter11BFormulas: Record<string, Formula> = {
  'average-rate-of-change-formula': {
    slug: 'average-rate-of-change-formula',
    name: 'Average Rate of Change',
    expression: 'Average rate of change = [f(b) − f(a)] / (b − a)',
    meaning: 'The average rate of change of a function f between x=a and x=b is the slope of the secant line connecting the two points (a, f(a)) and (b, f(b)).',
    variables: [
      { symbol: 'a, b', meaning: 'the two x-values marking the interval' },
      { symbol: 'f(a), f(b)', meaning: 'the function\'s values at those two x-values' },
    ],
    whenToUse: 'Whenever you need the average rate of change of a function over an interval, before narrowing that interval down to an instantaneous rate.',
    relatedConceptSlugs: ['the-derivative-as-a-rate-of-change'],
  },
  'derivative-definition': {
    slug: 'derivative-definition',
    name: 'The Definition of the Derivative',
    expression: "f'(x) = lim(h→0) [f(x+h) − f(x)] / h",
    meaning: 'The derivative of f at x is the limit of the average rate of change over a shrinking interval [x, x+h], as that interval\'s width h shrinks to zero — giving the exact instantaneous rate of change.',
    variables: [
      { symbol: 'h', meaning: 'a small change in x, which shrinks toward (but never reaches) 0' },
      { symbol: "f'(x)", meaning: 'the derivative of f at x — the instantaneous rate of change, and the slope of the tangent line there' },
    ],
    whenToUse: 'Whenever a derivative needs to be found directly from its formal limit definition (rather than a shortcut rule).',
    relatedConceptSlugs: ['the-derivative-as-the-limit-of-the-difference-quotient'],
  },
  'power-rule-formula': {
    slug: 'power-rule-formula',
    name: 'The Power Rule',
    expression: "d/dx[x^n] = n·x^(n−1),   d/dx[c·f(x)] = c·f'(x)",
    meaning: 'To differentiate a power of x, bring the exponent down as a multiplying factor and reduce the exponent by 1. A constant multiplying a function simply carries through unchanged.',
    variables: [
      { symbol: 'n', meaning: 'any real-number exponent' },
      { symbol: 'c', meaning: 'a constant multiplier' },
    ],
    whenToUse: 'Whenever differentiating a term of the form x^n, or a constant times a function.',
    relatedConceptSlugs: ['the-power-rule'],
  },
  'sum-difference-rule-formula': {
    slug: 'sum-difference-rule-formula',
    name: 'The Sum and Difference Rules',
    expression: "d/dx[f(x) ± g(x)] = f'(x) ± g'(x)",
    meaning: 'The derivative of a sum (or difference) of functions is simply the sum (or difference) of their individual derivatives.',
    variables: [
      { symbol: 'f(x), g(x)', meaning: 'two differentiable functions' },
    ],
    whenToUse: 'Whenever a function is written as terms added or subtracted together — differentiate each term separately.',
    relatedConceptSlugs: ['the-sum-and-difference-rules'],
  },
  'product-rule-formula': {
    slug: 'product-rule-formula',
    name: 'The Product Rule',
    expression: "(f·g)' = f'·g + f·g'",
    meaning: 'The derivative of a product of two functions is the derivative of the first times the second, plus the first times the derivative of the second.',
    variables: [
      { symbol: 'f, g', meaning: 'two differentiable functions of x' },
    ],
    whenToUse: 'Whenever two functions of x are multiplied together — never just multiply their individual derivatives.',
    relatedConceptSlugs: ['the-product-rule'],
  },
  'quotient-rule-formula': {
    slug: 'quotient-rule-formula',
    name: 'The Quotient Rule',
    expression: "(f/g)' = (f'·g − f·g') / g²",
    meaning: 'The derivative of a quotient of two functions follows a specific pattern: (derivative of top × bottom, minus top × derivative of bottom), all divided by the bottom squared.',
    variables: [
      { symbol: 'f, g', meaning: 'two differentiable functions of x, with g(x) ≠ 0' },
    ],
    whenToUse: 'Whenever one function of x is divided by another.',
    relatedConceptSlugs: ['the-quotient-rule'],
  },
  'chain-rule-formula': {
    slug: 'chain-rule-formula',
    name: 'The Chain Rule',
    expression: "d/dx[f(g(x))] = f'(g(x))·g'(x)",
    meaning: 'To differentiate a composite function (a function of a function), differentiate the outer function first (leaving the inner function unchanged inside it), then multiply by the derivative of the inner function.',
    variables: [
      { symbol: 'f(g(x))', meaning: 'a composite function — f applied to g(x)' },
      { symbol: "g'(x)", meaning: 'the derivative of the inner function g' },
    ],
    whenToUse: 'Whenever differentiating a function that is "wrapped around" another function, e.g. (3x+1)^5 or sin(x²).',
    relatedConceptSlugs: ['the-chain-rule'],
  },
  'implicit-differentiation-technique': {
    slug: 'implicit-differentiation-technique',
    name: 'Implicit Differentiation',
    expression: "Differentiate both sides w.r.t. x; for every y-term, multiply by dy/dx (Chain Rule)",
    meaning: 'When y is not isolated on one side of an equation, differentiate both sides of the equation with respect to x directly, treating y as an unknown function of x — every time a y appears, its derivative contributes a dy/dx factor by the Chain Rule.',
    variables: [
      { symbol: 'dy/dx', meaning: 'the derivative of y with respect to x — the very thing being solved for' },
    ],
    whenToUse: 'Whenever an equation relates x and y together, but y cannot easily be isolated as y = (some function of x).',
    relatedConceptSlugs: ['implicit-differentiation', 'applications-of-implicit-differentiation'],
  },
};
