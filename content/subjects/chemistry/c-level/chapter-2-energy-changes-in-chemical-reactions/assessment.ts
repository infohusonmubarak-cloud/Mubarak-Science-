import type { Assessment } from '@/types/content';

export const chapter2EnergyAssessment: Assessment = {
  id: 'energy-changes-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'ec-a1',
      part: 'concept',
      conceptSlug: 'exothermic-and-endothermic-reactions',
      conceptTitle: 'Exothermic and Endothermic Reactions',
      question: {
        id: 'ec-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What does a negative ΔH indicate about a reaction?',
        options: [
          { id: 'a', text: 'The reaction is endothermic.' },
          { id: 'b', text: 'The reaction is exothermic — it releases heat.' },
          { id: 'c', text: 'The reaction cannot happen.' },
          { id: 'd', text: 'The reaction has no activation energy.' },
        ],
        correctOptionId: 'b',
        hints: ['A negative sign means the products end up with LESS enthalpy than the reactants.'],
        explanation: 'A negative ΔH means the products have lower enthalpy than the reactants — the "missing" energy is released to the surroundings as heat, which is the definition of exothermic.',
      },
    },
    {
      id: 'ec-a2',
      part: 'concept',
      conceptSlug: 'hesss-law',
      conceptTitle: "Hess's Law",
      question: {
        id: 'ec-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "What key property of enthalpy makes Hess's law true?",
        options: [
          { id: 'a', text: 'Enthalpy is a state function — it depends only on the initial and final states.' },
          { id: 'b', text: 'Enthalpy always increases over time.' },
          { id: 'c', text: 'Enthalpy cannot be measured experimentally.' },
          { id: 'd', text: 'Enthalpy is the same for every reaction.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about why the path taken between reactants and products shouldn't matter."],
        explanation: 'Enthalpy depends only on the starting and ending states of a system, not on the path taken between them — this is exactly why the total ΔH is the same regardless of the reaction pathway.',
      },
    },

    // Part B — Formula & Application
    {
      id: 'ec-b1',
      part: 'formula-application',
      conceptSlug: 'internal-energy-and-enthalpy',
      conceptTitle: 'Internal Energy and Enthalpy',
      question: {
        id: 'ec-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction raises the temperature of 200 g of water by 5.0°C. How much heat (in J) was released? (c = 4.18 J/(g·°C))',
        hints: ['q = mcΔT.', '200 × 4.18 × 5.0.'],
        correctAnswer: 4180,
        tolerance: 10,
        unit: 'J',
        explanation: 'q = 200 × 4.18 × 5.0 = 4180 J.',
      },
    },
    {
      id: 'ec-b2',
      part: 'formula-application',
      conceptSlug: 'exothermic-and-endothermic-reactions',
      conceptTitle: 'Exothermic and Endothermic Reactions',
      question: {
        id: 'ec-b2-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction\'s reactants have a total enthalpy of 210 kJ/mol; its products have 340 kJ/mol. Find ΔH (in kJ/mol).',
        hints: ['ΔH = H(products) − H(reactants).', '340 − 210.'],
        correctAnswer: 130,
        explanation: 'ΔH = 340 − 210 = +130 kJ/mol — a positive value, meaning this reaction is endothermic.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'ec-c1',
      part: 'problem-solving',
      conceptSlug: 'calculating-enthalpy-changes-using-hesss-law',
      conceptTitle: "Calculating Enthalpy Changes Using Hess's Law",
      question: {
        id: 'ec-c1-q',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Given N₂(g) + O₂(g) → 2NO(g), ΔH₁ = +180.5 kJ/mol, and 2NO(g) + O₂(g) → 2NO₂(g), ΔH₂ = −114.1 kJ/mol, find ΔH (in kJ/mol) for N₂(g) + 2O₂(g) → 2NO₂(g).',
        hints: ['Add the two given equations — do the NO terms cancel?', 'ΔH = ΔH₁ + ΔH₂.'],
        correctAnswer: 66.4,
        tolerance: 0.2,
        unit: 'kJ/mol',
        explanation: 'Adding the two reactions cancels the 2NO (product of the first, reactant of the second), leaving N₂ + 2O₂ → 2NO₂ with ΔH = 180.5 + (−114.1) = 66.4 kJ/mol.',
      },
    },
    {
      id: 'ec-c2',
      part: 'problem-solving',
      conceptSlug: 'enthalpy-diagrams',
      conceptTitle: 'Enthalpy Diagrams',
      question: {
        id: 'ec-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'On an enthalpy diagram for an exothermic reaction, where should the products be drawn relative to the reactants, and why?',
        options: [
          { id: 'a', text: 'Above, because exothermic reactions gain enthalpy' },
          { id: 'b', text: 'Below, because the products end up with lower enthalpy after releasing heat' },
          { id: 'c', text: 'At exactly the same height, because enthalpy never changes' },
          { id: 'd', text: 'Position does not depend on ΔH at all' },
        ],
        correctOptionId: 'b',
        hints: ['ΔH = H(products) − H(reactants) — for an exothermic reaction, this is negative.'],
        explanation: 'A negative ΔH means H(products) is less than H(reactants), so on the diagram the products sit at a lower enthalpy level, with a downward arrow showing the heat released.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'ec-d1',
      part: 'real-life-application',
      conceptSlug: 'standard-enthalpy-of-reaction',
      conceptTitle: 'Standard Enthalpy of Reaction',
      question: {
        id: 'ec-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Two labs in different countries, at different temperatures and altitudes, both want to report the enthalpy of combustion of ethanol so the values can be compared. What must they do?',
        options: [
          { id: 'a', text: 'Nothing — enthalpy is always the same everywhere regardless of conditions.' },
          { id: 'b', text: 'Measure under the same standard conditions (pressure, stated temperature) so the two values are directly comparable.' },
          { id: 'c', text: 'Only one lab can report a valid value.' },
          { id: 'd', text: 'Use different units of energy for each lab.' },
        ],
        correctOptionId: 'b',
        hints: ['Enthalpy values depend on the conditions they were measured under.'],
        explanation: 'Standard conditions exist precisely so that enthalpy values measured anywhere in the world, under any circumstances, can be reliably compared once converted to the same standard reference point.',
      },
    },

    // Part E — Challenge
    {
      id: 'ec-e1',
      part: 'challenge',
      conceptSlug: 'calculating-enthalpy-changes-using-hesss-law',
      conceptTitle: "Calculating Enthalpy Changes Using Hess's Law",
      question: {
        id: 'ec-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: "When combining two known reactions using Hess's law, one of them must be reversed to make the target equation work out. What must you do to that reaction's ΔH?",
        options: [
          { id: 'a', text: 'Leave the ΔH exactly as given.' },
          { id: 'b', text: 'Flip the sign of that reaction\'s ΔH.' },
          { id: 'c', text: 'Double the ΔH value.' },
          { id: 'd', text: 'Set the ΔH to zero.' },
        ],
        correctOptionId: 'b',
        hints: ['Reversing a reaction means the energy that was released is now absorbed, and vice versa.'],
        explanation: "Reversing a reaction reverses the direction of energy flow, so its ΔH must have its sign flipped — a reaction with ΔH = −393.5 kJ/mol becomes +393.5 kJ/mol when run in reverse.",
      },
    },
  ],
};
