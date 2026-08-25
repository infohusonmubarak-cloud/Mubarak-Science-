import type { Formula } from '@/types/content';

export const chapter2BFormulas: Record<string, Formula> = {
  'combination-formula': {
    slug: 'combination-formula',
    name: 'The Combination Formula (Binomial Coefficient)',
    expression: 'ⁿCᵣ = n! / (r!(n − r)!)',
    meaning: 'Counts how many ways to choose r items from a set of n, when order does not matter — this is exactly the coefficient of each term in a binomial expansion.',
    variables: [
      { symbol: 'n', meaning: 'the total number of items (or the power in the binomial expansion)' },
      { symbol: 'r', meaning: 'the number of items chosen (or the term index in the expansion)' },
      { symbol: 'n!', meaning: 'n factorial: n × (n−1) × (n−2) × ... × 1' },
    ],
    whenToUse: 'Whenever you need a binomial coefficient — either for counting combinations or for the coefficients in a binomial expansion.',
    relatedConceptSlugs: ['meaning-of-binomial-coefficients'],
  },
  'binomial-theorem-formula': {
    slug: 'binomial-theorem-formula',
    name: 'The Binomial Theorem',
    expression: '(a + b)ⁿ = Σ (from r=0 to n) of  ⁿCᵣ · aⁿ⁻ʳ · bʳ',
    meaning: 'Gives every term of the expansion of (a + b)ⁿ directly, without multiplying out the brackets by hand — each term\'s coefficient is a binomial coefficient, and the exponents of a and b always add to n.',
    variables: [
      { symbol: 'n', meaning: 'the power the binomial is raised to' },
      { symbol: 'r', meaning: 'the term index, running from 0 to n' },
      { symbol: 'ⁿCᵣ', meaning: 'the binomial coefficient for that term' },
    ],
    whenToUse: 'Whenever you need to expand (a + b)ⁿ for any n, especially when n is too large to expand by repeated multiplication.',
    relatedConceptSlugs: ['the-binomial-theorem'],
  },
  'general-term-formula': {
    slug: 'general-term-formula',
    name: 'The General Term of a Binomial Expansion',
    expression: 'T(r+1) = ⁿCᵣ · aⁿ⁻ʳ · bʳ',
    meaning: 'Gives the formula for the (r+1)th term of the expansion of (a+b)ⁿ directly, without writing out every earlier term first.',
    variables: [
      { symbol: 'T(r+1)', meaning: 'the (r+1)th term of the expansion (the "+1" exists because the first term corresponds to r=0)' },
      { symbol: 'n, r', meaning: 'as in the binomial theorem — n is the power, r is the term index' },
    ],
    whenToUse: 'Whenever you need one specific term of a binomial expansion (e.g. the 5th term, or the term containing x⁴) without expanding the whole thing.',
    relatedConceptSlugs: ['the-general-term-of-a-binomial-expansion', 'finding-the-coefficient-of-a-specific-term'],
  },
};
