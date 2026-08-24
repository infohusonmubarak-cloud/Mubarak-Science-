import type { Formula } from '@/types/content';

export const chapter8OrganicFormulas: Record<string, Formula> = {
  'alkane-general-formula': {
    slug: 'alkane-general-formula',
    name: 'General Formula of Alkanes',
    expression: 'CₙH₂ₙ₊₂',
    meaning: 'Gives the molecular formula of any alkane (a saturated hydrocarbon with only single C–C bonds) directly from its number of carbon atoms.',
    variables: [
      { symbol: 'n', meaning: 'the number of carbon atoms in the molecule' },
      { symbol: 'CₙH₂ₙ₊₂', meaning: 'the resulting molecular formula — n carbon atoms and (2n + 2) hydrogen atoms' },
    ],
    whenToUse: 'Whenever you know how many carbon atoms an alkane has and need its full molecular formula, or vice versa.',
    relatedConceptSlugs: ['hydrocarbons-and-homologous-series'],
  },
  'alkene-general-formula': {
    slug: 'alkene-general-formula',
    name: 'General Formula of Alkenes',
    expression: 'CₙH₂ₙ',
    meaning: 'Gives the molecular formula of any alkene (a hydrocarbon containing one C=C double bond) directly from its number of carbon atoms.',
    variables: [
      { symbol: 'n', meaning: 'the number of carbon atoms in the molecule' },
      { symbol: 'CₙH₂ₙ', meaning: 'the resulting molecular formula — n carbon atoms and 2n hydrogen atoms' },
    ],
    whenToUse: 'Whenever you know how many carbon atoms an alkene (with one C=C double bond) has and need its full molecular formula.',
    relatedConceptSlugs: ['hydrocarbons-and-homologous-series'],
  },
};
