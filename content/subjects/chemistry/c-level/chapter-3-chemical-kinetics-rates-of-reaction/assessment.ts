import type { Assessment } from '@/types/content';

export const chapter3KineticsAssessment: Assessment = {
  id: 'chemical-kinetics-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'ck-a1',
      part: 'concept',
      conceptSlug: 'collision-theory',
      conceptTitle: 'Collision Theory',
      question: {
        id: 'ck-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why do most collisions between reactant particles NOT result in a reaction?',
        options: [
          { id: 'a', text: 'Chemical reactions never actually happen from collisions.' },
          { id: 'b', text: 'Most collisions lack enough energy, the correct orientation, or both.' },
          { id: 'c', text: 'Particles repel each other and never actually touch.' },
          { id: 'd', text: 'Reactions only happen in solids, never in gases or liquids.' },
        ],
        correctOptionId: 'b',
        hints: ['Recall the two requirements collision theory sets for a successful collision.'],
        explanation: 'A successful, reaction-producing collision needs both sufficient energy (past Ea) and the correct orientation — most random collisions fail to meet one or both conditions.',
      },
    },
    {
      id: 'ck-a2',
      part: 'concept',
      conceptSlug: 'activation-energy',
      conceptTitle: 'Activation Energy',
      question: {
        id: 'ck-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Is activation energy ever negative for a reaction?',
        options: [
          { id: 'a', text: 'Yes, for very exothermic reactions.' },
          { id: 'b', text: 'No — Ea is always a positive energy barrier that must be overcome, regardless of ΔH.' },
          { id: 'c', text: 'Yes, but only for endothermic reactions.' },
          { id: 'd', text: 'Activation energy and ΔH are always the same value.' },
        ],
        correctOptionId: 'b',
        hints: ['Ea represents an energy barrier that particles must climb — can a barrier ever be negative?'],
        explanation: "Activation energy is always positive — it represents an energy hill that colliding particles must climb over, independent of whether the reaction as a whole is exothermic or endothermic.",
      },
    },

    // Part B — Formula & Application
    {
      id: 'ck-b1',
      part: 'formula-application',
      conceptSlug: 'measuring-reaction-rate',
      conceptTitle: 'Measuring Reaction Rate',
      question: {
        id: 'ck-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reactant\'s concentration drops from 1.20 mol/L to 0.90 mol/L over 25 seconds. Find the average rate (mol/(L·s)).',
        hints: ['rate = Δ[conc.] / Δt.', '(1.20 − 0.90) / 25.'],
        correctAnswer: 0.012,
        tolerance: 0.0005,
        unit: 'mol/(L·s)',
        explanation: 'rate = (1.20 − 0.90) / 25 = 0.30 / 25 = 0.012 mol/(L·s).',
      },
    },
    {
      id: 'ck-b2',
      part: 'formula-application',
      conceptSlug: 'temperature-effects-on-rate',
      conceptTitle: 'Temperature',
      question: {
        id: 'ck-b2-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction has a rate of 0.008 mol/(L·s) at 15°C. Using the "rate doubles every 10°C" rule, estimate the rate (mol/(L·s)) at 35°C.',
        hints: ['(35 − 15)/10 = 2 increments of 10°C.', 'Double the rate twice: 0.008 × 2 × 2.'],
        correctAnswer: 0.032,
        tolerance: 0.002,
        unit: 'mol/(L·s)',
        explanation: 'Two 10°C increments each roughly double the rate: 0.008 × 2 × 2 = 0.032 mol/(L·s).',
      },
    },

    // Part C — Problem Solving
    {
      id: 'ck-c1',
      part: 'problem-solving',
      conceptSlug: 'the-maxwell-boltzmann-distribution',
      conceptTitle: 'The Maxwell–Boltzmann Distribution',
      question: {
        id: 'ck-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A catalyst lowers a reaction\'s activation energy. On a Maxwell–Boltzmann distribution graph (at the same temperature), what changes?',
        options: [
          { id: 'a', text: 'The whole curve shifts to the right.' },
          { id: 'b', text: 'The Ea marker moves left, so a larger area of the (unchanged) curve now lies beyond it.' },
          { id: 'c', text: 'The curve becomes narrower and taller.' },
          { id: 'd', text: 'Nothing on the graph changes.' },
        ],
        correctOptionId: 'b',
        hints: ['A catalyst does not change the temperature or the particles\' energies — what does it change?'],
        explanation: "A catalyst doesn't change the temperature, so the energy distribution curve itself stays the same — but it lowers Ea, moving that marker left along the x-axis so a larger fraction of the existing curve now lies beyond it, meaning more collisions succeed.",
      },
    },
    {
      id: 'ck-c2',
      part: 'problem-solving',
      conceptSlug: 'surface-area-and-catalysts',
      conceptTitle: 'Surface Area and Catalysts',
      question: {
        id: 'ck-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Two identical masses of calcium carbonate react with excess acid — one as a single large lump, one crushed into a fine powder. Which statement is correct?',
        options: [
          { id: 'a', text: 'Both produce the same total amount of gas, but the powder reacts faster because of its greater surface area.' },
          { id: 'b', text: 'The powder produces more gas overall.' },
          { id: 'c', text: 'The lump reacts faster because it is more concentrated.' },
          { id: 'd', text: 'Surface area has no effect since both samples have the same mass.' },
        ],
        correctOptionId: 'a',
        hints: ['Total amount of product depends on the total moles of reactant, not its shape.', 'Rate depends on how much surface is exposed to collisions at any instant.'],
        explanation: 'Since both samples have the same mass (same moles of CaCO₃) and react with excess acid, they eventually produce the same total amount of gas — but the powder, with far more exposed surface area, reacts much faster.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'ck-d1',
      part: 'real-life-application',
      conceptSlug: 'temperature-effects-on-rate',
      conceptTitle: 'Temperature',
      question: {
        id: 'ck-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does food stored in a refrigerator stay fresh much longer than food left at room temperature?',
        options: [
          { id: 'a', text: 'Cold temperatures destroy all bacteria instantly.' },
          { id: 'b', text: 'Lower temperature reduces the rate of the chemical/biological reactions that cause spoilage.' },
          { id: 'c', text: 'Refrigerators remove all oxygen from the food.' },
          { id: 'd', text: 'Temperature has no real effect on spoilage rate.' },
        ],
        correctOptionId: 'b',
        hints: ['Spoilage is caused by chemical and biological reactions with their own activation energies.'],
        explanation: 'The reactions responsible for spoilage have an activation energy just like any other reaction — lowering the temperature reduces the fraction of molecules with enough energy to react, slowing spoilage significantly.',
      },
    },

    // Part E — Challenge
    {
      id: 'ck-e1',
      part: 'challenge',
      conceptSlug: 'activation-energy',
      conceptTitle: 'Activation Energy',
      question: {
        id: 'ck-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A catalyst is added to a reaction. Which of the following does the catalyst change?',
        options: [
          { id: 'a', text: 'The overall ΔH of the reaction' },
          { id: 'b', text: 'The identity of the final products' },
          { id: 'c', text: 'The activation energy of the reaction pathway, and therefore the rate' },
          { id: 'd', text: 'The number of moles of reactants needed' },
        ],
        correctOptionId: 'c',
        hints: ['A catalyst changes HOW the reaction gets from reactants to products, not WHERE it starts or ends.'],
        explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy, increasing the rate — but it never changes the identity of the reactants or products, or the overall ΔH, since those depend only on the starting and ending states.",
      },
    },
  ],
};
