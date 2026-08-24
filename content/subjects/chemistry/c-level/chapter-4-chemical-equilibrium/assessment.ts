import type { Assessment } from '@/types/content';

export const chapter4EquilibriumAssessment: Assessment = {
  id: 'chemical-equilibrium-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'ce-a1',
      part: 'concept',
      conceptSlug: 'dynamic-equilibrium',
      conceptTitle: 'Dynamic Equilibrium',
      question: {
        id: 'ce-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'At dynamic equilibrium, why do concentrations stay constant?',
        options: [
          { id: 'a', text: 'Because both the forward and reverse reactions have stopped.' },
          { id: 'b', text: 'Because the forward and reverse reaction rates are equal, balancing each other out.' },
          { id: 'c', text: 'Because no reactants or products are present.' },
          { id: 'd', text: 'Because the reaction is not actually reversible.' },
        ],
        correctOptionId: 'b',
        hints: ['Concentrations can stay constant even while a process keeps happening, if it happens equally in both directions.'],
        explanation: 'Both reactions continue at equilibrium — concentrations stay constant because the forward and reverse rates exactly balance, not because either reaction has stopped.',
      },
    },
    {
      id: 'ce-a2',
      part: 'concept',
      conceptSlug: 'le-chateliers-principle',
      conceptTitle: "Le Chatelier's Principle",
      question: {
        id: 'ce-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "Does Le Chatelier's principle predict that a disturbed equilibrium returns to its EXACT original state?",
        options: [
          { id: 'a', text: 'Yes, always.' },
          { id: 'b', text: 'No — it shifts to a NEW equilibrium that only partially offsets the disturbance.' },
          { id: 'c', text: 'Only for temperature changes.' },
          { id: 'd', text: 'Only for pressure changes.' },
        ],
        correctOptionId: 'b',
        hints: ['The disturbance itself (e.g. the added substance, or the new temperature) is still part of the new system.'],
        explanation: "The system settles into a new equilibrium position that partially, not fully, counteracts the disturbance — conditions like the added concentration or new temperature remain part of the system.",
      },
    },

    // Part B — Formula & Application
    {
      id: 'ce-b1',
      part: 'formula-application',
      conceptSlug: 'the-equilibrium-constant-kc',
      conceptTitle: 'The Equilibrium Constant, Kc',
      question: {
        id: 'ce-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For H₂(g) + I₂(g) ⇌ 2HI(g), equilibrium concentrations are [H₂] = 0.050 mol/L, [I₂] = 0.050 mol/L, [HI] = 0.40 mol/L. Find Kc.',
        hints: ['Kc = [HI]² / ([H₂][I₂]).', '(0.40)² / (0.050 × 0.050).'],
        correctAnswer: 64,
        tolerance: 1,
        explanation: 'Kc = 0.16 / 0.0025 = 64.',
      },
    },
    {
      id: 'ce-b2',
      part: 'formula-application',
      conceptSlug: 'interpreting-the-size-of-kc',
      conceptTitle: 'Interpreting the Size of Kc',
      question: {
        id: 'ce-b2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A reaction has Kc = 3.2 × 10⁹. What does this indicate?',
        options: [
          { id: 'a', text: 'The equilibrium strongly favours products.' },
          { id: 'b', text: 'The equilibrium strongly favours reactants.' },
          { id: 'c', text: 'The reaction has not reached equilibrium.' },
          { id: 'd', text: 'The reaction is endothermic.' },
        ],
        correctOptionId: 'a',
        hints: ['Compare 3.2 × 10⁹ to 1.'],
        explanation: 'A Kc value far greater than 1 means products vastly outnumber reactants at equilibrium — the equilibrium strongly favours products.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'ce-c1',
      part: 'problem-solving',
      conceptSlug: 'effect-of-pressure-and-temperature-on-equilibrium',
      conceptTitle: 'Effect of Pressure and Temperature on Equilibrium',
      question: {
        id: 'ce-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), predict the effect of INCREASING pressure on the position of equilibrium.',
        options: [
          { id: 'a', text: 'Shifts forward, toward SO₃ (2 moles of gas vs. 3 moles on the reactant side)' },
          { id: 'b', text: 'Shifts backward, toward SO₂ and O₂' },
          { id: 'c', text: 'No shift — mole counts are equal' },
          { id: 'd', text: 'The reaction stops' },
        ],
        correctOptionId: 'a',
        hints: ['Count the total gas moles on each side: 2 + 1 = 3 vs. 2.'],
        explanation: 'The reactant side has 3 moles of gas (2 SO₂ + 1 O₂); the product side has 2 moles (2 SO₃). Increasing pressure favours the side with fewer gas moles — the forward direction.',
      },
    },
    {
      id: 'ce-c2',
      part: 'problem-solving',
      conceptSlug: 'effect-of-concentration-on-equilibrium',
      conceptTitle: 'Effect of Concentration on Equilibrium',
      question: {
        id: 'ce-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'For the equilibrium 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), some SO₃ is removed from the container. Which direction does the equilibrium shift?',
        options: [
          { id: 'a', text: 'Forward, producing more SO₃ to replace what was removed' },
          { id: 'b', text: 'Backward, consuming the remaining SO₃' },
          { id: 'c', text: 'No shift occurs since SO₃ is a product' },
          { id: 'd', text: 'The equilibrium constant Kc changes value' },
        ],
        correctOptionId: 'a',
        hints: ["The system reacts to replace what's missing."],
        explanation: 'Removing SO₃ makes the forward rate exceed the reverse rate again, so equilibrium shifts forward, producing more SO₃ to partially replace what was removed (Kc itself stays the same — only concentrations shift).',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'ce-d1',
      part: 'real-life-application',
      conceptSlug: 'le-chateliers-principle',
      conceptTitle: "Le Chatelier's Principle",
      question: {
        id: 'ce-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Haemoglobin binds oxygen in the lungs (high O₂) and releases it in body tissues (low O₂), via the equilibrium Hb + O₂ ⇌ HbO₂. What principle explains this?',
        options: [
          { id: 'a', text: 'Collision theory' },
          { id: 'b', text: "Le Chatelier's principle — high O₂ shifts the equilibrium toward HbO₂; low O₂ shifts it back" },
          { id: 'c', text: "Hess's law" },
          { id: 'd', text: 'The octet rule' },
        ],
        correctOptionId: 'b',
        hints: ['Think about how a change in O₂ concentration would shift this equilibrium.'],
        explanation: "This is a direct real-world application of Le Chatelier's principle: high O₂ concentration in the lungs shifts equilibrium toward HbO₂ (loading oxygen), while low O₂ concentration in tissues shifts it back (releasing oxygen).",
      },
    },

    // Part E — Challenge
    {
      id: 'ce-e1',
      part: 'challenge',
      conceptSlug: 'the-equilibrium-constant-kc',
      conceptTitle: 'The Equilibrium Constant, Kc',
      question: {
        id: 'ce-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A system at equilibrium has its temperature changed, and a new equilibrium is reached. Does Kc necessarily stay the same?',
        options: [
          { id: 'a', text: 'Yes — Kc never changes for any reaction, ever.' },
          { id: 'b', text: 'No — Kc is only fixed at a GIVEN temperature; changing temperature changes the value of Kc itself.' },
          { id: 'c', text: 'Kc only depends on pressure, not temperature.' },
          { id: 'd', text: 'Kc always becomes exactly 1 after any disturbance.' },
        ],
        correctOptionId: 'b',
        hints: ['Concentration and pressure changes shift the POSITION of equilibrium without changing Kc — does the same apply to temperature?'],
        explanation: "Unlike concentration or pressure changes, a temperature change actually changes the VALUE of Kc itself — Kc is only constant at a fixed temperature; a new temperature means a genuinely new Kc, not just a shifted position under the old one.",
      },
    },
  ],
};
