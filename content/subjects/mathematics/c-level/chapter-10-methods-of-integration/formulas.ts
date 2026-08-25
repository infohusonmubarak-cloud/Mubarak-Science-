import type { Formula } from '@/types/content';

export const chapter10CFormulas: Record<string, Formula> = {
  'basic-integration-formula': {
    slug: 'basic-integration-formula',
    name: 'The Power Rule for Integration',
    expression: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C   (n ≠ −1)',
    meaning: 'Integration is the reverse of differentiation — this rule finds the family of functions whose derivative is xⁿ, up to an unknown constant C.',
    variables: [
      { symbol: 'n', meaning: 'the exponent on x (any real number except −1)' },
      { symbol: 'C', meaning: 'the constant of integration — any constant has a derivative of 0, so it cannot be recovered from the derivative alone' },
    ],
    whenToUse: 'Whenever integrating a single power of x, or any polynomial (by applying the rule to each term).',
    relatedConceptSlugs: ['antiderivatives-and-basic-integration-rules'],
  },
  'exponential-trig-integration-formula': {
    slug: 'exponential-trig-integration-formula',
    name: 'Integrals of Exponential and Trigonometric Functions',
    expression: '∫eˣ dx = eˣ + C;   ∫sin(x) dx = −cos(x) + C;   ∫cos(x) dx = sin(x) + C',
    meaning: 'The standard antiderivatives for the exponential and core trigonometric functions, each the reverse of a standard derivative rule.',
    variables: [
      { symbol: 'C', meaning: 'the constant of integration' },
    ],
    whenToUse: 'Whenever integrating a term that is exactly eˣ, sin(x), or cos(x) (or a constant multiple of one).',
    relatedConceptSlugs: ['integrating-exponential-and-trigonometric-functions'],
  },
  'substitution-method-formula': {
    slug: 'substitution-method-formula',
    name: 'The Substitution Method (u-substitution)',
    expression: '∫f(g(x))·g\'(x) dx = ∫f(u) du,   where u = g(x)',
    meaning: 'Replaces a complicated integral in x with a simpler one in a new variable u, by recognizing the integrand as the result of a Chain Rule differentiation.',
    variables: [
      { symbol: 'u', meaning: 'the substituted "inner function," u = g(x)' },
      { symbol: 'du', meaning: 'du = g\'(x) dx — the differential of u, which must also appear in the integrand' },
    ],
    whenToUse: 'Whenever the integrand contains a function and (a constant multiple of) that function\'s own derivative multiplying it.',
    relatedConceptSlugs: ['integration-by-substitution'],
  },
  'integration-by-parts-formula': {
    slug: 'integration-by-parts-formula',
    name: 'Integration by Parts',
    expression: '∫u dv = uv − ∫v du',
    meaning: 'Reverses the Product Rule for differentiation, turning one hard integral (∫u dv) into a simpler one (∫v du) plus an easy term (uv).',
    variables: [
      { symbol: 'u', meaning: 'the factor chosen to be differentiated (should get simpler when differentiated)' },
      { symbol: 'dv', meaning: 'the factor chosen to be integrated (should be easy to integrate)' },
    ],
    whenToUse: 'Whenever the integrand is a product of two different types of functions (e.g. a polynomial times an exponential, or a polynomial times a trigonometric function) that substitution cannot simplify.',
    relatedConceptSlugs: ['integration-by-parts'],
  },
  'partial-fraction-decomposition-formula': {
    slug: 'partial-fraction-decomposition-formula',
    name: 'Partial Fraction Decomposition (Distinct Linear Factors)',
    expression: '(px+q) / [(x−a)(x−b)] = A/(x−a) + B/(x−b)',
    meaning: 'Splits a rational function with two distinct linear factors in its denominator into a sum of simpler fractions, each easy to integrate on its own.',
    variables: [
      { symbol: 'A, B', meaning: 'constants found by clearing denominators and substituting x=a and x=b' },
      { symbol: 'a, b', meaning: 'the two distinct roots of the denominator' },
    ],
    whenToUse: 'Whenever a rational function needs to be integrated and its denominator factors into distinct linear factors.',
    relatedConceptSlugs: ['setting-up-a-partial-fraction-decomposition'],
  },
  'partial-fraction-integration-formula': {
    slug: 'partial-fraction-integration-formula',
    name: 'Integrating a Partial Fraction Decomposition',
    expression: '∫[A/(x−a) + B/(x−b)] dx = A·ln|x−a| + B·ln|x−b| + C',
    meaning: 'Once a rational function is decomposed into simple fractions of the form A/(x−a), each one integrates directly to a natural logarithm term.',
    variables: [
      { symbol: 'A, B', meaning: 'the constants found during the decomposition step' },
      { symbol: 'C', meaning: 'the constant of integration' },
    ],
    whenToUse: 'As the final step after decomposing a rational function into partial fractions.',
    relatedConceptSlugs: ['integrating-using-partial-fractions'],
  },
};
