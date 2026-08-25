import type { Formula } from '@/types/content';

export const chapter3BFormulas: Record<string, Formula> = {
  'cubic-function-form': {
    slug: 'cubic-function-form',
    name: 'General Cubic Function',
    expression: 'y = ax³ + bx² + cx + d   (a ≠ 0)',
    meaning: 'The general form of a cubic function — the simplest case, y = x³, has a distinctive S-shaped curve that passes through the origin and is symmetric about it (an odd function).',
    variables: [
      { symbol: 'a, b, c, d', meaning: 'real-number coefficients (a ≠ 0, so the x³ term does not vanish)' },
    ],
    whenToUse: 'Whenever you need to recognize or sketch the shape of a cubic function.',
    relatedConceptSlugs: ['the-cubic-function'],
  },
  'reciprocal-function-form': {
    slug: 'reciprocal-function-form',
    name: 'General Reciprocal Function',
    expression: 'y = a / x   (x ≠ 0)',
    meaning: 'A reciprocal function has a two-branch, hyperbola-like curve that approaches (but never touches) both axes — the axes are its asymptotes.',
    variables: [
      { symbol: 'a', meaning: 'a nonzero constant that scales the curve and determines which two quadrants it occupies' },
      { symbol: 'x ≠ 0', meaning: 'x cannot be zero — the function is undefined there' },
    ],
    whenToUse: 'Whenever you need to recognize or sketch the shape of a reciprocal (inverse-proportion) function.',
    relatedConceptSlugs: ['the-reciprocal-function'],
  },
  'square-root-function-form': {
    slug: 'square-root-function-form',
    name: 'General Square Root Function',
    expression: 'y = a√(x − h) + k   (x ≥ h)',
    meaning: 'A square root function traces half of a sideways parabola, starting at a fixed point (h, k) and extending in only one horizontal direction, since the domain is restricted to x ≥ h.',
    variables: [
      { symbol: 'a', meaning: 'scales the curve, and flips it if negative' },
      { symbol: 'h, k', meaning: 'the coordinates of the curve\'s starting point' },
    ],
    whenToUse: 'Whenever you need to recognize or sketch the shape of a square root function, and identify its domain restriction.',
    relatedConceptSlugs: ['the-square-root-function'],
  },
  'exponential-function-form': {
    slug: 'exponential-function-form',
    name: 'General Exponential Function',
    expression: 'y = a · bˣ   (a ≠ 0, b > 0, b ≠ 1)',
    meaning: 'An exponential function grows (if b>1) or decays (if 0<b<1) increasingly quickly, and always has a horizontal asymptote at y = 0.',
    variables: [
      { symbol: 'a', meaning: 'the y-intercept when x=0 (since bˣ⁼⁰ = 1)' },
      { symbol: 'b', meaning: 'the base — determines growth (b>1) or decay (0<b<1)' },
    ],
    whenToUse: 'Whenever you need to recognize or sketch the shape of an exponential growth or decay function.',
    relatedConceptSlugs: ['the-exponential-function'],
  },
  'translation-formula': {
    slug: 'translation-formula',
    name: 'Translating a Function',
    expression: 'y = f(x − h) + k',
    meaning: 'Shifts the entire graph of y=f(x) horizontally by h units and vertically by k units, without changing its shape at all.',
    variables: [
      { symbol: 'h', meaning: 'the horizontal shift (right if h>0, left if h<0 — note the subtraction)' },
      { symbol: 'k', meaning: 'the vertical shift (up if k>0, down if k<0)' },
    ],
    whenToUse: 'Whenever a graph needs to be moved to a new location without changing its shape.',
    relatedConceptSlugs: ['translations-of-functions'],
  },
  'reflection-formula': {
    slug: 'reflection-formula',
    name: 'Reflecting a Function',
    expression: 'y = −f(x)  reflects over the x-axis.     y = f(−x)  reflects over the y-axis.',
    meaning: 'Negating the whole function output flips the graph upside down (over the x-axis); negating the input flips it left-right (over the y-axis).',
    variables: [
      { symbol: 'f(x)', meaning: 'the original function' },
    ],
    whenToUse: 'Whenever a graph needs to be mirrored over an axis.',
    relatedConceptSlugs: ['reflections-of-functions'],
  },
  'stretch-compression-formula': {
    slug: 'stretch-compression-formula',
    name: 'Stretching or Compressing a Function',
    expression: 'y = a·f(x)  stretches/compresses vertically.     y = f(bx)  stretches/compresses horizontally.',
    meaning: 'Multiplying the output by a scales the graph vertically (|a|>1 stretches, 0<|a|<1 compresses); multiplying the input by b scales it horizontally, but in the opposite sense (|b|>1 compresses, 0<|b|<1 stretches).',
    variables: [
      { symbol: 'a', meaning: 'the vertical scale factor' },
      { symbol: 'b', meaning: 'the horizontal scale factor (acts inversely — a larger b compresses)' },
    ],
    whenToUse: 'Whenever a graph needs to be made taller/shorter or narrower/wider.',
    relatedConceptSlugs: ['stretches-and-compressions-of-functions'],
  },
};
