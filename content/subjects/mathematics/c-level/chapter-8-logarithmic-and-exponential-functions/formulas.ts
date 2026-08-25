import type { Formula } from '@/types/content';

export const chapter8CFormulas: Record<string, Formula> = {
  'exponential-function-properties-formula': {
    slug: 'exponential-function-properties-formula',
    name: 'Properties of Exponential Functions',
    expression: 'y = bˣ  (b>0, b≠1):  domain all reals, range (0,∞), y-intercept (0,1), asymptote y=0',
    meaning: 'An exponential function grows (or decays, if 0<b<1) by a constant multiplicative factor for every unit increase in x, and is always strictly positive.',
    variables: [
      { symbol: 'b', meaning: 'the base of the exponential function, a positive number not equal to 1' },
    ],
    whenToUse: 'Whenever identifying or sketching the basic exponential graph and its key features.',
    relatedConceptSlugs: ['the-graph-of-an-exponential-function'],
  },
  'logarithmic-function-properties-formula': {
    slug: 'logarithmic-function-properties-formula',
    name: 'Properties of Logarithmic Functions',
    expression: 'y = log_b(x)  (b>0, b≠1):  domain (0,∞), range all reals, x-intercept (1,0), asymptote x=0',
    meaning: 'A logarithmic function is the inverse of the exponential function with the same base — it is only defined for positive inputs, and can output any real number.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm, a positive number not equal to 1' },
    ],
    whenToUse: 'Whenever identifying or sketching the basic logarithmic graph and its key features.',
    relatedConceptSlugs: ['the-graph-of-a-logarithmic-function'],
  },
  'transformation-of-exp-log-graphs-formula': {
    slug: 'transformation-of-exp-log-graphs-formula',
    name: 'Transformations of Exponential and Logarithmic Graphs',
    expression: 'y = A·bˣ⁻ᶜ + D   (exponential);   y = A·log_b(x−C) + D   (logarithmic)',
    meaning: 'Shifting, stretching, or reflecting an exponential or logarithmic graph works the same way as for any other function — C shifts horizontally, D shifts vertically (moving the asymptote along with it), and A stretches/reflects.',
    variables: [
      { symbol: 'A', meaning: 'a vertical stretch/reflection factor' },
      { symbol: 'C', meaning: 'the horizontal shift' },
      { symbol: 'D', meaning: 'the vertical shift — also shifts the asymptote' },
    ],
    whenToUse: 'Whenever an exponential or logarithmic graph has been shifted or scaled from its basic form.',
    relatedConceptSlugs: ['transformations-of-exponential-and-logarithmic-graphs'],
  },
  'derivative-of-e-to-the-x-formula': {
    slug: 'derivative-of-e-to-the-x-formula',
    name: 'The Derivative of eˣ',
    expression: "d/dx[eˣ] = eˣ",
    meaning: 'The exponential function with base e is famously its own derivative — the rate of change of eˣ, at any point, equals its own value there.',
    variables: [
      { symbol: 'e', meaning: 'Euler\'s number, approximately 2.71828' },
    ],
    whenToUse: 'Whenever differentiating an expression involving eˣ.',
    relatedConceptSlugs: ['the-derivative-of-e-to-the-x'],
  },
  'derivative-of-general-exponential-formula': {
    slug: 'derivative-of-general-exponential-formula',
    name: 'The Derivative of a General Exponential Function',
    expression: "d/dx[bˣ] = bˣ · ln(b)",
    meaning: 'For any base b, the derivative of bˣ is bˣ multiplied by an extra constant factor, ln(b) — this reduces to the simple eˣ case exactly when b=e, since ln(e)=1.',
    variables: [
      { symbol: 'b', meaning: 'the base of the exponential function' },
      { symbol: 'ln(b)', meaning: 'the natural logarithm of the base' },
    ],
    whenToUse: 'Whenever differentiating an exponential function with a base other than e.',
    relatedConceptSlugs: ['the-derivative-of-general-exponential-functions'],
  },
  'derivative-of-natural-log-formula': {
    slug: 'derivative-of-natural-log-formula',
    name: 'The Derivative of the Natural Logarithm',
    expression: "d/dx[ln x] = 1/x",
    meaning: 'The derivative of the natural logarithm is simply the reciprocal of x.',
    variables: [
      { symbol: 'x', meaning: 'a positive real number (the domain of ln x)' },
    ],
    whenToUse: 'Whenever differentiating an expression involving ln x.',
    relatedConceptSlugs: ['the-derivative-of-the-natural-logarithm'],
  },
  'derivative-of-general-log-formula': {
    slug: 'derivative-of-general-log-formula',
    name: 'The Derivative of a General Logarithmic Function',
    expression: "d/dx[log_b x] = 1 / (x · ln b)",
    meaning: 'For any base b, the derivative of log_b(x) includes an extra factor of 1/ln(b) — this reduces to the simple 1/x case exactly when b=e, since ln(e)=1.',
    variables: [
      { symbol: 'b', meaning: 'the base of the logarithm' },
    ],
    whenToUse: 'Whenever differentiating a logarithmic function with a base other than e.',
    relatedConceptSlugs: ['the-derivative-of-general-logarithmic-functions'],
  },
};
