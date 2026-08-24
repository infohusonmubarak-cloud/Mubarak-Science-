import type { QuickRevision } from '@/types/content';

export const chapter2EnergyQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'exothermic-and-endothermic-reactions',
      keyPoint: 'Exothermic: releases heat, ΔH < 0. Endothermic: absorbs heat, ΔH > 0.',
      formulaSlug: 'enthalpy-change-formula',
      miniExample: 'H(products)=320, H(reactants)=500 → ΔH=−180 kJ/mol, exothermic.',
    },
    {
      conceptSlug: 'internal-energy-and-enthalpy',
      keyPoint: 'q = mcΔT measures heat from a temperature change.',
      formulaSlug: 'heat-energy-formula',
      miniExample: '100 g water, ΔT=20°C → q = 8360 J.',
    },
    {
      conceptSlug: 'enthalpy-diagrams',
      keyPoint: 'Products drawn below reactants = exothermic; above = endothermic.',
      miniExample: 'Combustion diagrams always show products well below reactants.',
    },
    {
      conceptSlug: 'hesss-law',
      keyPoint: "Total ΔH is the same regardless of the reaction pathway.",
      formulaSlug: 'hesss-law-formula',
      miniExample: "C→CO→CO₂ two-step ΔH sums to the same −393.5 kJ/mol as C→CO₂ directly.",
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'forms-of-energy-in-chemistry',
      keyPoint: 'Chemical bonds store energy; reactions convert it to other forms.',
      miniExample: 'A glow stick converts chemical energy directly to light.',
    },
    {
      conceptSlug: 'internal-energy-and-enthalpy',
      keyPoint: 'Enthalpy (H) is heat content at constant pressure — measured via calorimetry.',
      formulaSlug: 'heat-energy-formula',
      miniExample: '50 g water, ΔT=12°C → q = 2508 J.',
    },
    {
      conceptSlug: 'exothermic-and-endothermic-reactions',
      keyPoint: 'ΔH = H(products) − H(reactants).',
      formulaSlug: 'enthalpy-change-formula',
      miniExample: 'Photosynthesis absorbs energy — endothermic, ΔH positive.',
    },
    {
      conceptSlug: 'enthalpy-diagrams',
      keyPoint: 'The vertical gap between reactant/product levels represents |ΔH|.',
      miniExample: 'A downward arrow on the diagram = exothermic reaction.',
    },
    {
      conceptSlug: 'standard-enthalpy-of-reaction',
      keyPoint: 'ΔH° is measured under standard conditions (1 atm, stated temperature) for fair comparison.',
      miniExample: 'Fuels are compared by their standard enthalpy of combustion.',
    },
    {
      conceptSlug: 'hesss-law',
      keyPoint: 'Enthalpy is a state function — depends only on start/end, not the path.',
      formulaSlug: 'hesss-law-formula',
      miniExample: 'Two-step and one-step combustion of carbon give the same total ΔH.',
    },
    {
      conceptSlug: 'calculating-enthalpy-changes-using-hesss-law',
      keyPoint: 'Reversing a reaction flips the sign of ΔH; scaling it scales ΔH by the same factor.',
      miniExample: "Combining 3 known combustion reactions gives ΔHf(CH₄) = −74.8 kJ/mol.",
    },
  ],
};
