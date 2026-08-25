import type { Formula } from '@/types/content';

export const chapter7CFormulas: Record<string, Formula> = {
  'sine-function-properties-formula': {
    slug: 'sine-function-properties-formula',
    name: 'Properties of y = sin x',
    expression: 'Domain: all real numbers.  Range: [−1, 1].  Period: 2π',
    meaning: 'y=sinx oscillates smoothly between −1 and 1, repeating its exact shape every 2π, and passes through the origin.',
    variables: [
      { symbol: 'x', meaning: 'the input angle, in radians' },
    ],
    whenToUse: 'Whenever identifying or sketching the basic sine graph and its key features.',
    relatedConceptSlugs: ['the-graph-of-sine'],
  },
  'cosine-function-properties-formula': {
    slug: 'cosine-function-properties-formula',
    name: 'Properties of y = cos x',
    expression: 'Domain: all real numbers.  Range: [−1, 1].  Period: 2π',
    meaning: 'y=cosx oscillates smoothly between −1 and 1, repeating every 2π, starting at its maximum value (1) when x=0.',
    variables: [
      { symbol: 'x', meaning: 'the input angle, in radians' },
    ],
    whenToUse: 'Whenever identifying or sketching the basic cosine graph and its key features.',
    relatedConceptSlugs: ['the-graph-of-cosine'],
  },
  'tangent-function-properties-formula': {
    slug: 'tangent-function-properties-formula',
    name: 'Properties of y = tan x',
    expression: 'Domain: all x except π/2+kπ.  Range: all real numbers.  Period: π',
    meaning: 'y=tanx has vertical asymptotes wherever cosx=0, is unbounded (covers all real numbers), and repeats every π — half the period of sine and cosine.',
    variables: [
      { symbol: 'k', meaning: 'any integer, giving the full set of excluded x-values' },
    ],
    whenToUse: 'Whenever identifying or sketching the tangent graph, especially its asymptotes.',
    relatedConceptSlugs: ['the-graph-of-tangent'],
  },
  'reciprocal-trig-functions-formula': {
    slug: 'reciprocal-trig-functions-formula',
    name: 'The Reciprocal Trigonometric Functions',
    expression: 'csc x = 1/sin x,   sec x = 1/cos x,   cot x = 1/tan x',
    meaning: 'Cosecant, secant, and cotangent are defined as the reciprocals of sine, cosine, and tangent respectively.',
    variables: [
      { symbol: 'csc, sec, cot', meaning: 'the reciprocal trigonometric functions' },
    ],
    whenToUse: 'Whenever cosecant, secant, or cotangent needs to be evaluated or graphed.',
    relatedConceptSlugs: ['graphs-of-cosecant-secant-and-cotangent'],
  },
  'general-sine-transformation-formula': {
    slug: 'general-sine-transformation-formula',
    name: 'The General Sine Transformation',
    expression: 'y = A sin(B(x−C)) + D',
    meaning: 'A general transformed sine wave, with amplitude |A|, period 2π/B, phase shift C, and vertical shift D.',
    variables: [
      { symbol: 'A', meaning: 'controls the amplitude (height) of the wave' },
      { symbol: 'B', meaning: 'controls the period, via period = 2π/B' },
      { symbol: 'C', meaning: 'the horizontal (phase) shift' },
      { symbol: 'D', meaning: 'the vertical shift' },
    ],
    whenToUse: 'Whenever a sine (or cosine) graph has been stretched, compressed, or shifted from its basic form.',
    relatedConceptSlugs: ['amplitude-period-and-phase-shift'],
  },
  'reflection-vertical-shift-formula': {
    slug: 'reflection-vertical-shift-formula',
    name: 'Reflections and Vertical Shifts',
    expression: 'y = −sin x   (reflection over the x-axis);   y = sin x + D   (vertical shift by D)',
    meaning: 'A negative sign in front of a trig function reflects its graph over the x-axis; adding a constant D shifts the entire graph up (or down, if D is negative) by D units.',
    variables: [
      { symbol: 'D', meaning: 'the amount the graph is shifted vertically' },
    ],
    whenToUse: 'Whenever a trig graph has been flipped or shifted up/down from its basic form.',
    relatedConceptSlugs: ['reflections-and-vertical-shifts-of-trig-graphs'],
  },
  'inverse-sine-formula': {
    slug: 'inverse-sine-formula',
    name: 'The Inverse Sine Function',
    expression: 'y = arcsin(x),   domain [−1,1],   range [−π/2, π/2]',
    meaning: 'arcsin(x) gives the ONE angle, within the restricted range [−π/2,π/2], whose sine equals x.',
    variables: [
      { symbol: 'x', meaning: 'a value between −1 and 1' },
    ],
    whenToUse: 'Whenever an angle needs to be recovered from a known sine value.',
    relatedConceptSlugs: ['the-inverse-sine-function-and-its-graph'],
  },
  'inverse-cosine-tangent-formula': {
    slug: 'inverse-cosine-tangent-formula',
    name: 'The Inverse Cosine and Inverse Tangent Functions',
    expression: 'arccos(x): domain [−1,1], range [0,π].   arctan(x): domain all reals, range (−π/2,π/2)',
    meaning: 'arccos(x) gives the one angle in [0,π] whose cosine is x; arctan(x) gives the one angle in (−π/2,π/2) whose tangent is x.',
    variables: [
      { symbol: 'x', meaning: 'the known cosine value (for arccos) or tangent value (for arctan)' },
    ],
    whenToUse: 'Whenever an angle needs to be recovered from a known cosine or tangent value.',
    relatedConceptSlugs: ['the-inverse-cosine-and-inverse-tangent-functions'],
  },
  'derivative-of-sine-cosine-formula': {
    slug: 'derivative-of-sine-cosine-formula',
    name: 'Derivatives of Sine and Cosine',
    expression: "d/dx[sin x] = cos x,   d/dx[cos x] = −sin x",
    meaning: 'The derivative of sine is cosine; the derivative of cosine is negative sine.',
    variables: [
      { symbol: 'x', meaning: 'the input angle, in radians' },
    ],
    whenToUse: 'Whenever differentiating an expression involving sine or cosine.',
    relatedConceptSlugs: ['derivatives-of-sine-and-cosine'],
  },
  'derivative-of-tangent-and-others-formula': {
    slug: 'derivative-of-tangent-and-others-formula',
    name: 'Derivatives of Tangent, Cotangent, Secant, and Cosecant',
    expression: "d/dx[tan x]=sec²x,  d/dx[cot x]=−csc²x,  d/dx[sec x]=sec x·tan x,  d/dx[csc x]=−csc x·cot x",
    meaning: 'The derivatives of the remaining four trigonometric functions, each expressible using the reciprocal trig functions.',
    variables: [
      { symbol: 'x', meaning: 'the input angle, in radians' },
    ],
    whenToUse: 'Whenever differentiating an expression involving tangent, cotangent, secant, or cosecant.',
    relatedConceptSlugs: ['derivatives-of-tangent-and-other-trig-functions'],
  },
};
