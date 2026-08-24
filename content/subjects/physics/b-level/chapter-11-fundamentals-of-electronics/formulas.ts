import type { Formula } from '@/types/content';

export const chapter11ElectronicsFormulas: Record<string, Formula> = {
  'transistor-current-gain-formula': {
    slug: 'transistor-current-gain-formula',
    name: 'Transistor Current Gain',
    expression: 'β = I_C / I_B',
    meaning: 'Current gain measures how much a transistor amplifies a small base current into a much larger collector current.',
    variables: [
      { symbol: 'β', meaning: 'Current gain (no units) — typically ranging from tens to hundreds' },
      { symbol: 'I_C', meaning: 'Collector current, in amperes' },
      { symbol: 'I_B', meaning: 'Base current, in amperes' },
    ],
    whenToUse: 'Use to find how much a transistor amplifies a small input (base) current, or to find the required base current for a target collector current.',
    relatedConceptSlugs: ['the-transistor'],
  },
};
