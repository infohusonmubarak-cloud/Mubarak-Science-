import type { Topic } from '@/types/content';

export const chapter4ChemTopics: Topic[] = [
  {
    slug: 'measuring-amounts-of-substance',
    title: 'Measuring Amounts of Substance',
    concepts: [
      { slug: 'relative-atomic-and-formula-mass', title: 'Relative Atomic and Formula Mass', difficulty: 'easy' },
      { slug: 'the-mole-and-avogadros-constant', title: "The Mole and Avogadro's Constant", difficulty: 'easy' },
      { slug: 'molar-mass-calculations', title: 'Molar Mass Calculations', difficulty: 'medium' },
    ],
  },
  {
    slug: 'formulas-and-equations',
    title: 'Formulas and Equations',
    concepts: [
      { slug: 'empirical-and-molecular-formula', title: 'Empirical and Molecular Formula', difficulty: 'medium' },
      { slug: 'balancing-chemical-equations', title: 'Balancing Chemical Equations', difficulty: 'medium' },
    ],
  },
  {
    slug: 'reacting-quantities',
    title: 'Reacting Quantities',
    concepts: [
      { slug: 'stoichiometry-and-mole-ratios', title: 'Stoichiometry and Mole Ratios', difficulty: 'medium' },
      { slug: 'limiting-reactants', title: 'Limiting Reactants', difficulty: 'hard' },
    ],
  },
  {
    slug: 'concentration-and-yield',
    title: 'Concentration and Yield',
    concepts: [
      { slug: 'concentration-calculations', title: 'Concentration Calculations', difficulty: 'medium' },
      { slug: 'percentage-yield', title: 'Percentage Yield', difficulty: 'medium' },
      { slug: 'atom-economy', title: 'Atom Economy', difficulty: 'hard' },
    ],
  },
];
