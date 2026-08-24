import type { Concept } from '@/types/content';

export const chapter4EquilibriumConcepts: Record<string, Concept> = {
  'reversible-reactions': {
    slug: 'reversible-reactions',
    title: 'Reversible Reactions',
    difficulty: 'easy',
    simpleExplanation:
      'A reversible reaction can proceed in both directions — reactants can form products (the ' +
      'forward reaction), and those products can react back to reform the reactants (the reverse ' +
      'reaction), written with a double arrow, ⇌.',
    whyItMatters:
      'Most real reactions, especially in closed systems, are at least somewhat reversible — ' +
      'understanding this is the first step toward understanding equilibrium, since equilibrium can ' +
      'only exist for a reaction that can run both ways.',
    whyItWorks:
      'As soon as any product molecules form, they are physically capable of colliding and reacting ' +
      'with each other just as the original reactants did — nothing about a reaction is fundamentally ' +
      'one-directional unless the products are somehow removed from the system (like an escaping gas) ' +
      'or the reverse reaction is negligibly slow.',
    realLifeExample: {
      title: 'Carbonic acid in soda',
      scenario: 'Carbon dioxide dissolves in water to form carbonic acid, and carbonic acid breaks back down into CO₂ and water.',
      explanation: 'This reaction, CO₂ + H₂O ⇌ H₂CO₃, runs in both directions constantly — it is exactly why a sealed can of soda stays fizzy (CO₂ stays dissolved as carbonic acid) but goes flat once opened (CO₂ escapes, pulling the reverse reaction forward).',
    },
    practiceQuestions: [
      {
        id: 'reversible-reactions-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What symbol is used to show that a reaction is reversible?',
        options: [
          { id: 'a', text: 'A single arrow, →' },
          { id: 'b', text: 'A double arrow, ⇌' },
          { id: 'c', text: 'An equals sign, =' },
          { id: 'd', text: 'A plus sign, +' },
        ],
        correctOptionId: 'b',
        hints: ['Think about how to show "both directions" in one symbol.'],
        explanation: 'The double arrow (⇌) shows that a reaction proceeds in both the forward and reverse directions simultaneously.',
      },
    ],
    commonMistake:
      "Assuming a reversible reaction 'goes back and forth,' finishing one direction before switching " +
      "— in reality, both the forward and reverse reactions happen continuously and simultaneously, " +
      "not in alternating turns.",
    quickReview: [
      'Reversible reactions can run both forward and backward.',
      'Shown with a double arrow, ⇌.',
      'Both directions happen simultaneously, not in alternating turns.',
    ],
  },

  'dynamic-equilibrium': {
    slug: 'dynamic-equilibrium',
    title: 'Dynamic Equilibrium',
    difficulty: 'medium',
    simpleExplanation:
      'Dynamic equilibrium is the state a reversible reaction reaches when the forward and reverse ' +
      'reaction rates become exactly equal — the concentrations of reactants and products stop ' +
      'changing overall, even though both reactions are still actively happening.',
    whyItMatters:
      'The word "dynamic" is essential: equilibrium is NOT a static state where the reaction has ' +
      'stopped — it is a constant, balanced back-and-forth, which is why concentrations stay constant ' +
      'without either reaction ever actually ceasing.',
    whyItWorks:
      'As a reversible reaction proceeds, the forward rate decreases as reactants are used up, while ' +
      'the reverse rate increases as products build up — eventually these two changing rates cross and ' +
      'become equal. Once equal, for every product molecule formed by the forward reaction, one ' +
      'product molecule is being converted back by the reverse reaction (on average), so net ' +
      'concentrations stop changing.',
    realLifeExample: {
      title: 'A saturated solution',
      scenario: 'Sugar stops dissolving once a solution becomes saturated, even though solid sugar remains at the bottom.',
      explanation: 'This is a dynamic equilibrium: sugar molecules are still constantly dissolving into solution AND crystallizing back out of solution at the same rate — the amount of dissolved sugar stops changing, but the process never actually stops.',
    },
    practiceQuestions: [
      {
        id: 'dynamic-equilibrium-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'At dynamic equilibrium, which statement is true?',
        options: [
          { id: 'a', text: 'Both the forward and reverse reactions have completely stopped.' },
          { id: 'b', text: 'The forward and reverse reactions are still happening, at equal rates.' },
          { id: 'c', text: 'Only the forward reaction continues.' },
          { id: 'd', text: 'The concentrations of reactants and products must be exactly equal.' },
        ],
        correctOptionId: 'b',
        hints: ["'Dynamic' is a hint that something is still actively happening."],
        explanation: 'At equilibrium, both reactions continue at equal rates — concentrations stay constant because the forward and reverse processes exactly balance, not because either has stopped.',
      },
    ],
    commonMistake:
      "Believing that equal concentrations of reactants and products indicate equilibrium — " +
      "equilibrium means the RATES are equal, which usually happens at very unequal concentrations, " +
      "depending on how far the reaction favours products or reactants.",
    quickReview: [
      'Dynamic equilibrium: forward rate = reverse rate.',
      'Concentrations stay constant, but both reactions keep happening.',
      'Equilibrium does NOT mean equal concentrations of reactants and products.',
    ],
  },

  'le-chateliers-principle': {
    slug: 'le-chateliers-principle',
    title: "Le Chatelier's Principle",
    difficulty: 'medium',
    simpleExplanation:
      "Le Chatelier's principle states that if a system at equilibrium is disturbed (by a change in " +
      'concentration, pressure, or temperature), the equilibrium shifts in whichever direction ' +
      'partially counteracts that disturbance, settling into a new equilibrium.',
    whyItMatters:
      "This single principle predicts the direction an equilibrium will shift for almost any change " +
      "you could make to a reaction system — it's the practical, predictive tool chemists use " +
      "constantly, from industrial reactor design to understanding biological systems.",
    whyItWorks:
      "Any disturbance to an equilibrium temporarily makes the forward and reverse rates unequal " +
      "again — the system then naturally proceeds in whichever direction restores the rates to being " +
      "equal, which happens to be the direction that partially undoes the disturbance (though it never " +
      "fully returns to the exact original state).",
    realLifeExample: {
      title: 'Haemoglobin and oxygen transport',
      scenario: "Haemoglobin in blood binds oxygen in the lungs and releases it in the body's tissues.",
      explanation: "Haemoglobin + O₂ ⇌ oxyhaemoglobin is an equilibrium: high O₂ concentration in the lungs shifts it toward oxyhaemoglobin (loading up oxygen), while low O₂ concentration in tissues shifts it back, releasing oxygen exactly where it's needed — a direct, life-sustaining application of Le Chatelier's principle.",
    },
    practiceQuestions: [
      {
        id: 'le-chateliers-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "According to Le Chatelier's principle, what happens when a system at equilibrium is disturbed?",
        options: [
          { id: 'a', text: 'The reaction stops completely.' },
          { id: 'b', text: 'The equilibrium shifts in the direction that partially counteracts the disturbance.' },
          { id: 'c', text: 'The equilibrium constant changes to a completely new, unrelated value.' },
          { id: 'd', text: 'Nothing happens — equilibrium is permanently fixed.' },
        ],
        correctOptionId: 'b',
        hints: ['Think of it as the system "fighting back" against whatever changed.'],
        explanation: "The system responds by shifting in the direction that partially offsets the disturbance, settling into a new equilibrium position.",
      },
    ],
    commonMistake:
      "Thinking the equilibrium shift completely cancels out the disturbance, returning the system to " +
      "exactly its original state — in reality, the shift only PARTIALLY offsets the change; the " +
      "system reaches a new equilibrium position, not the original one.",
    quickReview: [
      "Le Chatelier's principle: a disturbed equilibrium shifts to partially counteract the disturbance.",
      'Applies to changes in concentration, pressure, and temperature.',
      'The system settles into a NEW equilibrium, not the original one.',
    ],
  },

  'effect-of-concentration-on-equilibrium': {
    slug: 'effect-of-concentration-on-equilibrium',
    title: 'Effect of Concentration on Equilibrium',
    difficulty: 'medium',
    simpleExplanation:
      'Adding more of a substance to an equilibrium system shifts the equilibrium away from that ' +
      'substance (using some of it up); removing a substance shifts the equilibrium toward replacing it.',
    whyItMatters:
      'This is one of the most direct, controllable ways to push a reaction toward more product — ' +
      'industrially, reactants are often continuously added (or products continuously removed) to keep ' +
      'shifting equilibrium toward higher yield.',
    workedExample: {
      id: 'concentration-equilibrium-worked-1',
      title: 'Predict a shift from adding a reactant',
      problemStatement: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), extra N₂ is added to the system. Which direction does the equilibrium shift?',
      steps: [
        { step: 1, instruction: 'Identify the disturbance.', explanation: 'N₂ concentration has increased.' },
        { step: 2, instruction: "Apply Le Chatelier's principle.", explanation: 'The system shifts in the direction that consumes some of the added N₂ — that is, the forward direction.' },
        { step: 3, instruction: 'State the result.', explanation: 'The equilibrium shifts right (forward), producing more NH₃ and consuming some of the extra N₂ (and some H₂ along with it).' },
      ],
      finalAnswer: 'The equilibrium shifts forward (toward NH₃), increasing the amount of ammonia produced.',
    },
    whyItWorks:
      'Adding more of a substance makes the reaction quotient no longer match the equilibrium ' +
      'constant — specifically, it makes the forward reaction rate briefly exceed the reverse rate (or ' +
      'vice versa when removing a substance), so the system shifts in that direction until the rates ' +
      'rebalance at a new equilibrium.',
    realLifeExample: {
      title: 'The industrial Haber process',
      scenario: 'Ammonia is manufactured industrially from nitrogen and hydrogen gas.',
      explanation: 'Continuously removing ammonia as it forms (by cooling and condensing it out of the gas mixture) keeps shifting the N₂ + 3H₂ ⇌ 2NH₃ equilibrium forward, converting far more of the nitrogen and hydrogen into ammonia than would otherwise be possible.',
    },
    practiceQuestions: [
      {
        id: 'concentration-equilibrium-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), NH₃ is continuously removed from the system as it forms. Which direction does equilibrium shift?',
        options: [
          { id: 'a', text: 'Backward (reverse), to replace the removed NH₃' },
          { id: 'b', text: 'Forward, to replace the removed NH₃' },
          { id: 'c', text: 'No shift occurs.' },
          { id: 'd', text: 'The reaction stops.' },
        ],
        correctOptionId: 'b',
        hints: ["The system shifts to counteract the disturbance — removing a product means there's now 'too little' of it."],
        explanation: 'Removing NH₃ makes the forward reaction rate exceed the reverse rate again, so the equilibrium shifts forward to produce more NH₃ and partially replace what was removed.',
      },
    ],
    commonMistake:
      'Assuming adding a reactant shifts equilibrium toward that SAME substance — actually, adding a ' +
      'substance shifts the equilibrium AWAY from it (consuming some of what was added), not toward it.',
    quickReview: [
      'Adding a substance shifts equilibrium away from it (consumes some of it).',
      'Removing a substance shifts equilibrium toward it (replaces some of it).',
      'Continuously removing product is a common industrial trick to boost yield.',
    ],
  },

  'effect-of-pressure-and-temperature-on-equilibrium': {
    slug: 'effect-of-pressure-and-temperature-on-equilibrium',
    title: 'Effect of Pressure and Temperature on Equilibrium',
    difficulty: 'hard',
    simpleExplanation:
      'For gas equilibria, increasing pressure shifts equilibrium toward the side with FEWER gas ' +
      'molecules. Increasing temperature shifts equilibrium in the endothermic direction (absorbing ' +
      'the extra heat); decreasing temperature shifts it in the exothermic direction.',
    whyItMatters:
      'These two factors are the main "dials" chemists and engineers use to push an industrial ' +
      'equilibrium toward higher yield, and understanding them requires connecting Le Chatelier\'s ' +
      'principle to genuinely different underlying reasons (molecule count for pressure, ΔH for ' +
      'temperature) rather than one single rule.',
    workedExample: {
      id: 'pressure-temp-equilibrium-worked-1',
      title: 'Predict the effect of pressure on the Haber process',
      problemStatement: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), predict the effect of increasing pressure on the position of equilibrium.',
      steps: [
        { step: 1, instruction: 'Count gas molecules on each side.', math: '1 + 3 = 4 (reactants)  vs.  2 (products)', explanation: 'The reactant side has 4 moles of gas; the product side has 2 moles.' },
        { step: 2, instruction: 'Apply the pressure rule.', explanation: 'Increasing pressure shifts equilibrium toward the side with fewer gas molecules.' },
        { step: 3, instruction: 'State the result.', explanation: 'The equilibrium shifts forward (toward NH₃, the side with only 2 moles of gas), increasing ammonia yield.' },
      ],
      finalAnswer: 'Increasing pressure shifts the equilibrium forward, favouring NH₃ production.',
    },
    whyItWorks:
      'Increasing pressure (by compressing the container) is equivalent to increasing the ' +
      "concentration of every gas — the system responds by shifting toward whichever side has fewer " +
      "total gas molecules, since that reduces the total number of gas particles and partially " +
      "counteracts the pressure increase. For temperature, since heat behaves like a 'reactant' in an " +
      "endothermic reaction (and a 'product' in an exothermic one), raising temperature shifts " +
      "equilibrium as if a reactant (for the endothermic direction) had been added.",
    realLifeExample: {
      title: 'Choosing conditions for the Haber process',
      scenario: 'The industrial Haber process operates at high pressure (~200 atm) and a compromise temperature (~450°C).',
      explanation: 'High pressure favours ammonia (fewer gas moles on the product side) and low temperature would too (the forward reaction is exothermic) — but low temperature makes the reaction too slow, so a moderate temperature is chosen as a practical compromise between equilibrium yield and reaction rate.',
    },
    practiceQuestions: [
      {
        id: 'pressure-temp-equilibrium-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'The forward reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is exothermic. What happens to the equilibrium if temperature is INCREASED?',
        options: [
          { id: 'a', text: 'It shifts forward, producing more NH₃.' },
          { id: 'b', text: 'It shifts backward (reverse), producing less NH₃, since the reverse reaction is endothermic.' },
          { id: 'c', text: 'Temperature has no effect on this equilibrium.' },
          { id: 'd', text: 'The reaction stops entirely.' },
        ],
        correctOptionId: 'b',
        hints: ['Increasing temperature favours the direction that ABSORBS heat.', 'If the forward reaction is exothermic, which direction is endothermic?'],
        explanation: 'Since the forward reaction releases heat (exothermic), the reverse reaction absorbs heat (endothermic) — increasing temperature shifts equilibrium in the heat-absorbing (reverse) direction, reducing NH₃ yield.',
      },
    ],
    commonMistake:
      "Applying the pressure rule to reactions where the number of gas moles is EQUAL on both sides " +
      "— when the mole counts match, changing pressure does not shift the equilibrium at all, since " +
      "neither side is favoured by having 'fewer' gas particles.",
    quickReview: [
      'Higher pressure shifts equilibrium toward the side with fewer gas moles.',
      'Higher temperature shifts equilibrium in the endothermic direction.',
      'Equal gas moles on both sides means pressure has no effect on the equilibrium position.',
    ],
  },

  'the-equilibrium-constant-kc': {
    slug: 'the-equilibrium-constant-kc',
    title: 'The Equilibrium Constant, Kc',
    difficulty: 'medium',
    simpleExplanation:
      'The equilibrium constant, Kc, is a single number that quantifies exactly where an equilibrium ' +
      'sits — calculated from the equilibrium concentrations of products divided by reactants, each ' +
      'raised to the power of its coefficient in the balanced equation.',
    whyItMatters:
      'Kc turns a qualitative idea (equilibrium) into a precise, calculable quantity — letting ' +
      'chemists predict equilibrium concentrations, compare how far different reactions proceed, and ' +
      'design processes for maximum yield.',
    formulaSlug: 'equilibrium-constant-formula',
    workedExample: {
      id: 'kc-worked-1',
      title: 'Calculate Kc from equilibrium concentrations',
      problemStatement: 'For H₂(g) + I₂(g) ⇌ 2HI(g), at equilibrium [H₂] = 0.20 mol/L, [I₂] = 0.20 mol/L, and [HI] = 1.60 mol/L. Find Kc.',
      steps: [
        { step: 1, instruction: 'Write the Kc expression.', math: 'Kc = [HI]² / ([H₂][I₂])', explanation: 'Products (raised to their coefficient) over reactants, from the balanced equation.' },
        { step: 2, instruction: 'Substitute the equilibrium concentrations.', math: 'Kc = (1.60)² / (0.20 × 0.20)', explanation: '[HI] = 1.60, [H₂] = 0.20, [I₂] = 0.20.' },
        { step: 3, instruction: 'Calculate.', math: 'Kc = 2.56 / 0.04 = 64', explanation: '1.60² = 2.56; 0.20 × 0.20 = 0.04; 2.56 ÷ 0.04 = 64.' },
      ],
      finalAnswer: 'Kc = 64 (no units, as conventionally reported for this reaction)',
    },
    whyItWorks:
      'At equilibrium, the ratio of product to reactant concentrations (in this specific form) settles ' +
      'to a fixed value for a given reaction at a given temperature — this happens because it is ' +
      'exactly the ratio at which the forward and reverse reaction rates become equal, so any system ' +
      'started from any initial concentrations will settle to concentrations satisfying this same ratio.',
    realLifeExample: {
      title: 'Predicting whether a reaction mixture is at equilibrium',
      scenario: 'A chemist mixes reactants and wants to know if the resulting mixture has reached equilibrium.',
      explanation: 'By measuring the actual concentrations and calculating the reaction quotient (using the same expression as Kc), the chemist can compare it to the known Kc value — if they match, the system is at equilibrium; if not, the reaction will continue shifting until they do.',
    },
    practiceQuestions: [
      {
        id: 'kc-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For H₂(g) + I₂(g) ⇌ 2HI(g), equilibrium concentrations are [H₂] = 0.10 mol/L, [I₂] = 0.10 mol/L, [HI] = 0.80 mol/L. Find Kc.',
        hints: ['Kc = [HI]² / ([H₂][I₂]).', '(0.80)² / (0.10 × 0.10).'],
        correctAnswer: 64,
        tolerance: 1,
        explanation: 'Kc = 0.64 / 0.01 = 64.',
      },
    ],
    commonMistake:
      'Forgetting to raise each concentration to the power of its coefficient in the balanced equation ' +
      '— for 2HI, the concentration of HI must be SQUARED, not just used as-is, in the Kc expression.',
    quickReview: [
      'Kc = [products]^(coefficients) / [reactants]^(coefficients).',
      'Kc has a fixed value for a given reaction at a given temperature.',
      "Coefficients in the balanced equation become exponents in the Kc expression.",
    ],
  },

  'interpreting-the-size-of-kc': {
    slug: 'interpreting-the-size-of-kc',
    title: 'Interpreting the Size of Kc',
    difficulty: 'medium',
    simpleExplanation:
      'A large Kc (much greater than 1) means the equilibrium favours products — the reaction goes ' +
      'nearly to completion. A small Kc (much less than 1) means the equilibrium favours reactants — ' +
      'very little product forms. A Kc close to 1 means significant amounts of both reactants and ' +
      'products are present at equilibrium.',
    whyItMatters:
      'This lets you instantly judge how "far" a reaction proceeds just by looking at one number — ' +
      "without it, you would have to solve the full equilibrium calculation just to know whether a " +
      "reaction is even worth carrying out industrially.",
    workedExample: {
      id: 'kc-interpret-worked-1',
      title: 'Interpret two very different Kc values',
      problemStatement: 'Reaction A has Kc = 1 × 10¹⁵. Reaction B has Kc = 1 × 10⁻¹². What does each value tell you about the extent of each reaction?',
      steps: [
        { step: 1, instruction: 'Interpret the large Kc.', explanation: 'Kc = 1 × 10¹⁵ is enormously larger than 1, meaning [products] vastly exceeds [reactants] at equilibrium — Reaction A goes essentially to completion.' },
        { step: 2, instruction: 'Interpret the small Kc.', explanation: 'Kc = 1 × 10⁻¹² is enormously smaller than 1, meaning [reactants] vastly exceeds [products] at equilibrium — Reaction B barely proceeds forward at all.' },
      ],
      finalAnswer: 'Reaction A essentially goes to completion; Reaction B barely reacts at all.',
    },
    whyItWorks:
      'Since Kc is the ratio of product to reactant concentrations, a very large value can only occur ' +
      'if products vastly outnumber reactants (favouring products), and a very small value can only ' +
      'occur if reactants vastly outnumber products (favouring reactants) — the size of Kc directly ' +
      'encodes which side of the equilibrium dominates.',
    realLifeExample: {
      title: 'Why some reactions are considered "complete" and others barely happen',
      scenario: 'Some reactions used industrially are treated as going to completion; others are known to barely proceed without help.',
      explanation: 'A reaction with a very large Kc (like many combustion reactions) can be safely assumed to consume nearly all the reactants, while a reaction with a very small Kc (like the direct combination of nitrogen and oxygen at room temperature) needs special conditions — catalysts, heat, pressure — to produce any meaningful amount of product.',
    },
    practiceQuestions: [
      {
        id: 'kc-interpret-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A reaction has Kc = 2.5 × 10⁻⁸. What does this tell you about the equilibrium?',
        options: [
          { id: 'a', text: 'The reaction goes almost entirely to completion.' },
          { id: 'b', text: 'The equilibrium strongly favours reactants — very little product forms.' },
          { id: 'c', text: 'The reaction is at exactly 50% completion.' },
          { id: 'd', text: 'Kc this small is not chemically possible.' },
        ],
        correctOptionId: 'b',
        hints: ['Compare this Kc value to 1.'],
        explanation: 'A Kc value much less than 1 means reactant concentrations vastly exceed product concentrations at equilibrium — the reaction barely proceeds forward.',
      },
    ],
    commonMistake:
      'Assuming a small Kc means "the reaction does not happen at all" — a small Kc means very LITTLE ' +
      'product forms at equilibrium, not that the reaction is literally impossible; some product still ' +
      'forms, just in a very small proportion.',
    quickReview: [
      'Kc >> 1: equilibrium favours products, reaction nearly complete.',
      'Kc << 1: equilibrium favours reactants, very little product forms.',
      'Kc ≈ 1: significant amounts of both reactants and products present.',
    ],
  },
};
