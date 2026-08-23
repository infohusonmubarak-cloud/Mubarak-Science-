import type { Formula } from '@/types/content';

export const chapter4ChemFormulas: Record<string, Formula> = {
  'moles-formula': {
    slug: 'moles-formula',
    name: 'Moles Formula',
    expression: 'n = m/M',
    meaning: 'The number of moles in a sample, from its mass and molar mass.',
    variables: [
      { symbol: 'n', meaning: 'amount of substance, in moles (mol)' },
      { symbol: 'm', meaning: 'mass of the sample, in grams (g)' },
      { symbol: 'M', meaning: 'molar mass, in grams per mole (g/mol) — numerically equal to Mr' },
    ],
    whenToUse: 'Whenever you need to convert between a measured mass and the number of moles it represents, or vice versa.',
    relatedConceptSlugs: ['molar-mass-calculations', 'stoichiometry-and-mole-ratios'],
  },
  'concentration-formula': {
    slug: 'concentration-formula',
    name: 'Concentration Formula',
    expression: 'c = n/V',
    meaning: 'The concentration of a solution, from the moles of solute dissolved and the volume of solution.',
    variables: [
      { symbol: 'c', meaning: 'concentration, in moles per cubic decimetre (mol/dm³)' },
      { symbol: 'n', meaning: 'amount of solute, in moles (mol)' },
      { symbol: 'V', meaning: 'volume of solution, in cubic decimetres (dm³)' },
    ],
    whenToUse: 'Whenever you need to find how concentrated a solution is, or how many moles/what volume are needed to make one of a given concentration.',
    relatedConceptSlugs: ['concentration-calculations'],
  },
  'percentage-yield-formula': {
    slug: 'percentage-yield-formula',
    name: 'Percentage Yield',
    expression: '% yield = (actual yield / theoretical yield) × 100',
    meaning: 'How much of the maximum possible product a reaction actually produced, as a percentage.',
    variables: [
      { symbol: 'actual yield', meaning: 'the amount of product actually obtained' },
      { symbol: 'theoretical yield', meaning: 'the maximum possible amount of product, predicted from the balanced equation' },
    ],
    whenToUse: 'Whenever you need to measure how efficient a reaction was at converting reactants into the desired product.',
    relatedConceptSlugs: ['percentage-yield'],
  },
  'atom-economy-formula': {
    slug: 'atom-economy-formula',
    name: 'Atom Economy',
    expression: '% atom economy = (desired product mass / total reactant mass) × 100',
    meaning: 'What percentage of the total reactant mass ends up in the desired product, rather than in by-products.',
    variables: [
      { symbol: 'desired product mass', meaning: "the formula mass of the product you actually want" },
      { symbol: 'total reactant mass', meaning: 'the combined formula mass of everything produced by the reaction, including by-products' },
    ],
    whenToUse: 'Whenever you need to measure how efficiently a reaction uses its atoms, especially when comparing different possible reaction routes.',
    relatedConceptSlugs: ['atom-economy'],
  },
};
