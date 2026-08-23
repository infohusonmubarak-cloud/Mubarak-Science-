import type { Concept } from '@/types/content';

export const chapter4ChemConcepts: Record<string, Concept> = {
  'relative-atomic-and-formula-mass': {
    slug: 'relative-atomic-and-formula-mass',
    title: 'Relative Atomic and Formula Mass',
    difficulty: 'easy',
    simpleExplanation:
      'Relative atomic mass (Ar) is the average mass of an atom of an element, measured relative ' +
      "to 1/12th the mass of a carbon-12 atom. Relative formula mass (Mr) is simply the sum of the " +
      "relative atomic masses of every atom in a compound's formula.",
    whyItMatters:
      'Every calculation about how much of a substance you have — moles, concentration, yield — ' +
      'starts from knowing its relative formula mass.',
    workedExample: {
      id: 'formula-mass-worked-1',
      title: 'Find the relative formula mass of water',
      problemStatement: 'Find the relative formula mass (Mr) of water, H₂O. (Ar: H = 1, O = 16)',
      steps: [
        { step: 1, instruction: 'Count the atoms of each element in the formula.', math: '2 × H, 1 × O', explanation: 'H₂O has 2 hydrogen atoms and 1 oxygen atom.' },
        { step: 2, instruction: 'Multiply each count by its relative atomic mass.', math: '2 × 1 = 2,  1 × 16 = 16', explanation: 'Hydrogen contributes 2, oxygen contributes 16.' },
        { step: 3, instruction: 'Add the totals together.', math: '2 + 16 = 18', explanation: "Sum every element's contribution." },
      ],
      finalAnswer: 'Mr(H₂O) = 18',
    },
    whyItWorks:
      'Because a formula tells you exactly how many of each atom are bonded together, adding up ' +
      'their individual masses gives the total mass of the whole molecule, relative to the same ' +
      'carbon-12 standard.',
    realLifeExample: {
      title: 'Reading a fertilizer label',
      scenario: 'Fertilizer bags list the percentage of nitrogen, phosphorus and potassium by mass.',
      explanation: 'Calculating those percentages starts from knowing the relative formula mass of each compound in the fertilizer.',
    },
    practiceQuestions: [
      {
        id: 'formula-mass-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the relative formula mass of carbon dioxide, CO₂. (Ar: C = 12, O = 16)',
        hints: ['CO₂ has 1 carbon atom and 2 oxygen atoms.', '12 + (2 × 16).'],
        correctAnswer: 44,
        explanation: 'Mr(CO₂) = 12 + (2×16) = 12 + 32 = 44.',
      },
    ],
    commonMistake:
      'Forgetting to multiply by the number of atoms of each element — e.g. treating CO₂ as if it ' +
      'only had one oxygen atom.',
    quickReview: [
      'Ar = relative atomic mass of one element.',
      "Mr = relative formula mass = sum of all atoms' Ar values in the formula.",
      'Always check the subscript numbers in a formula carefully.',
    ],
  },

  'the-mole-and-avogadros-constant': {
    slug: 'the-mole-and-avogadros-constant',
    title: "The Mole and Avogadro's Constant",
    difficulty: 'easy',
    simpleExplanation:
      "A mole is a counting unit for atoms and molecules, just like 'a dozen' means 12. One mole of " +
      'anything contains 6.02 × 10²³ particles — this number is called Avogadro\'s constant.',
    whyItMatters:
      'Atoms and molecules are far too small and numerous to count individually, so chemists use ' +
      'the mole to work with practical, everyday amounts of substance instead.',
    workedExample: {
      id: 'avogadro-worked-1',
      title: 'Find the number of molecules in a sample',
      problemStatement: 'How many molecules are there in 2 moles of water?',
      steps: [
        { step: 1, instruction: "Recall Avogadro's constant.", math: '1 mol = 6.02 × 10²³ particles', explanation: 'This is the number of particles in exactly one mole.' },
        { step: 2, instruction: 'Multiply by the number of moles.', math: '2 × 6.02 × 10²³ = 1.204 × 10²⁴', explanation: 'Scale up from 1 mole to 2 moles.' },
      ],
      finalAnswer: '1.204 × 10²⁴ molecules',
    },
    whyItWorks:
      'Since a mole is defined as a fixed number of particles, multiplying that fixed number by ' +
      'however many moles you have always gives the total particle count — the same logic as ' +
      'multiplying 12 by the number of dozens.',
    realLifeExample: {
      title: 'Comparing a mole of different substances',
      scenario: 'A mole of water (18 g) is a small cup; a mole of carbon (12 g) is a small lump.',
      explanation: 'Even though these masses look very different, both contain exactly the same number of particles — 6.02 × 10²³ — because the mole always counts particles, not mass.',
    },
    practiceQuestions: [
      {
        id: 'avogadro-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'How many atoms are in 3 moles of carbon? Give your answer as a number of ×10²³ (e.g. enter 12.0 for 12.0 × 10²³).',
        hints: ["Multiply 3 by Avogadro's constant.", '3 × 6.02.'],
        correctAnswer: 18.06,
        unit: '× 10²³ atoms',
        explanation: '3 × 6.02 × 10²³ = 18.06 × 10²³ atoms.',
      },
    ],
    commonMistake:
      "Thinking a mole is a fixed mass — it's actually a fixed NUMBER of particles; the mass of one " +
      'mole is different for every substance.',
    quickReview: [
      "A mole is a counting unit: 1 mole = 6.02 × 10²³ particles (Avogadro's constant).",
      'The mole lets chemists work with countable, practical amounts.',
      '1 mole of any substance always has the same number of particles, but a different mass.',
    ],
  },

  'molar-mass-calculations': {
    slug: 'molar-mass-calculations',
    title: 'Molar Mass Calculations',
    difficulty: 'medium',
    simpleExplanation:
      'Molar mass (M) is the mass of one mole of a substance, in grams per mole (g/mol) — ' +
      'numerically equal to its relative formula mass. The number of moles (n) in a sample is ' +
      'found by dividing its mass (m) by its molar mass.',
    whyItMatters:
      'This formula is the bridge between the mass you can actually measure on a balance and the ' +
      'number of moles (particles) chemists need for calculations.',
    formulaSlug: 'moles-formula',
    workedExample: {
      id: 'molar-mass-worked-1',
      title: 'Find the number of moles from a mass',
      problemStatement: 'How many moles are in 36 g of water? (Molar mass of water = 18 g/mol)',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'n = m / M', explanation: 'Moles equals mass divided by molar mass.' },
        { step: 2, instruction: 'Substitute the values.', math: 'n = 36 / 18', explanation: 'Mass = 36 g, molar mass = 18 g/mol.' },
        { step: 3, instruction: 'Calculate.', math: 'n = 2', explanation: '36 divided by 18.' },
      ],
      finalAnswer: 'n = 2 mol',
    },
    whyItWorks:
      'Since molar mass tells you exactly how many grams make up one mole, dividing a sample\'s ' +
      "total mass by that figure tells you how many of those 'one-mole portions' are in the sample.",
    realLifeExample: {
      title: 'Measuring out a reaction in the lab',
      scenario: 'A chemist needs exactly 0.5 mol of a compound for an experiment and only has a balance, not a mole-counter.',
      explanation: 'Rearranging n = m/M to m = n × M tells them exactly how many grams to weigh out.',
    },
    practiceQuestions: [
      {
        id: 'molar-mass-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'How many moles are in 88 g of carbon dioxide, CO₂? (Molar mass = 44 g/mol)',
        hints: ['n = m/M.', '88 divided by 44.'],
        correctAnswer: 2,
        unit: 'mol',
        explanation: 'n = 88/44 = 2 mol.',
      },
      {
        id: 'molar-mass-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'What is the mass of 0.25 mol of water? (Molar mass = 18 g/mol)',
        hints: ['Rearrange n = m/M to m = n × M.', '0.25 × 18.'],
        correctAnswer: 4.5,
        unit: 'g',
        explanation: 'm = n × M = 0.25 × 18 = 4.5 g.',
      },
    ],
    commonMistake:
      'Mixing up mass and molar mass — molar mass is a fixed property of the substance (g per ' +
      'mole), while mass is how much of the sample you actually have (in grams).',
    quickReview: [
      'n = m/M',
      'M (molar mass) is numerically equal to Mr, in g/mol.',
      'Rearrange to m = n × M to find mass instead.',
    ],
  },

  'empirical-and-molecular-formula': {
    slug: 'empirical-and-molecular-formula',
    title: 'Empirical and Molecular Formula',
    difficulty: 'medium',
    simpleExplanation:
      'An empirical formula shows the simplest whole-number ratio of atoms in a compound. A ' +
      'molecular formula shows the actual number of atoms in one molecule — it can be the same as ' +
      'the empirical formula, or a whole-number multiple of it.',
    whyItMatters:
      'Knowing the ratio of atoms lets chemists figure out exactly what a compound is made of, ' +
      'even before they know its full molecular structure.',
    diagram: {
      id: 'water-molecule-diagram',
      title: 'Water, H₂O',
      altText: 'A ball-and-stick diagram of a water molecule, showing one oxygen atom bonded to two hydrogen atoms',
      component: 'MoleculeDiagram',
      interactive: false,
      props: {
        label: 'Water — empirical formula = molecular formula (H₂O)',
        atoms: [
          { element: 'O', x: 0, y: 0 },
          { element: 'H', x: -0.9, y: 0.7 },
          { element: 'H', x: 0.9, y: 0.7 },
        ],
        bonds: [[0, 1], [0, 2]],
      },
    },
    workedExample: {
      id: 'empirical-worked-1',
      title: 'Find an empirical formula from a molecular formula',
      problemStatement: 'A compound has the molecular formula C₆H₁₂O₆ (glucose). What is its empirical formula?',
      steps: [
        { step: 1, instruction: 'Find the ratio of atoms.', math: 'C : H : O = 6 : 12 : 6', explanation: 'Read the subscripts directly from the molecular formula.' },
        { step: 2, instruction: 'Divide every number by their highest common factor.', math: '6:12:6 ÷ 6 = 1:2:1', explanation: '6 is the highest common factor of 6, 12, and 6.' },
      ],
      finalAnswer: 'Empirical formula = CH₂O',
    },
    whyItWorks:
      'Dividing every subscript by their highest common factor keeps the same ratio between ' +
      "elements while reducing it to its simplest whole-number form — exactly what 'empirical " +
      "formula' means.",
    realLifeExample: {
      title: 'Identifying an unknown compound',
      scenario: 'A chemist burns an unknown sample and measures the masses of CO₂ and water produced.',
      explanation: 'Working backwards from those masses to a mole ratio, and then to an empirical formula, is a standard real technique for identifying an unknown organic compound.',
    },
    practiceQuestions: [
      {
        id: 'empirical-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A compound has the molecular formula C₂H₄. What is its empirical formula?',
        options: [
          { id: 'a', text: 'C₂H₄' },
          { id: 'b', text: 'CH₂' },
          { id: 'c', text: 'C₄H₈' },
          { id: 'd', text: 'CH₄' },
        ],
        correctOptionId: 'b',
        hints: ['Find the highest common factor of 2 and 4.', 'Divide both subscripts by 2.'],
        explanation: '2:4 divided by their highest common factor (2) gives 1:2, so the empirical formula is CH₂.',
      },
    ],
    commonMistake:
      'Assuming the empirical and molecular formula are always different — sometimes, like with ' +
      "water (H₂O), they're already identical because the ratio is already in its simplest form.",
    quickReview: [
      'Empirical formula = simplest whole-number ratio of atoms.',
      'Molecular formula = actual number of atoms in one molecule.',
      "Divide the molecular formula's subscripts by their highest common factor to get the empirical formula.",
    ],
  },

  'balancing-chemical-equations': {
    slug: 'balancing-chemical-equations',
    title: 'Balancing Chemical Equations',
    difficulty: 'medium',
    simpleExplanation:
      'A balanced chemical equation has the same number of each type of atom on both sides, since ' +
      'atoms are never created or destroyed in a chemical reaction. You balance an equation by ' +
      'adjusting the numbers in front of each formula (coefficients) — never the subscripts within a formula.',
    whyItMatters:
      'An unbalanced equation would imply atoms appearing from nowhere or vanishing — balancing is ' +
      'how a chemical equation obeys the law of conservation of mass.',
    workedExample: {
      id: 'balancing-worked-1',
      title: 'Balance a combustion equation',
      problemStatement: 'Balance the equation: H₂ + O₂ → H₂O',
      steps: [
        { step: 1, instruction: 'Count atoms on each side.', math: 'Left: 2H, 2O.  Right: 2H, 1O', explanation: 'Left side has 2 hydrogen and 2 oxygen atoms; right side has 2 hydrogen and 1 oxygen.' },
        { step: 2, instruction: 'Oxygen is unbalanced — add a coefficient to fix it.', math: 'H₂ + O₂ → 2H₂O', explanation: 'Doubling water gives 4H and 2O on the right.' },
        { step: 3, instruction: 'Recheck — now hydrogen is unbalanced. Fix it too.', math: '2H₂ + O₂ → 2H₂O', explanation: 'Doubling H₂ gives 4H on the left, matching the 4H on the right.' },
      ],
      finalAnswer: '2H₂ + O₂ → 2H₂O',
    },
    whyItWorks:
      "Because atoms can't be created or destroyed, the same total of each element must appear on " +
      'both sides — adjusting coefficients (never subscripts) is the only way to change atom ' +
      'counts without changing what substances are actually involved.',
    realLifeExample: {
      title: 'Calculating fuel and oxygen needed for combustion',
      scenario: 'Engineers need a balanced combustion equation to calculate exactly how much oxygen a fuel needs to burn completely.',
      explanation: 'A balanced equation is what makes it possible to calculate exact reacting quantities, whether for a car engine or a rocket.',
    },
    practiceQuestions: [
      {
        id: 'balancing-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which coefficients correctly balance: __N₂ + __H₂ → __NH₃?',
        options: [
          { id: 'a', text: '1, 3, 2' },
          { id: 'b', text: '1, 1, 1' },
          { id: 'c', text: '2, 3, 1' },
          { id: 'd', text: '1, 2, 3' },
        ],
        correctOptionId: 'a',
        hints: ['Check nitrogen atoms are equal on both sides first.', 'Then check hydrogen atoms.'],
        explanation: 'N₂ + 3H₂ → 2NH₃ gives 2N and 6H on both sides — balanced.',
      },
    ],
    commonMistake:
      'Changing the subscripts within a formula (e.g. turning H₂O into H₂O₂) to try to balance an ' +
      'equation — this actually changes the substance being described, not just the amount of it.',
    quickReview: [
      'Atoms are conserved: same totals on both sides of the equation.',
      'Balance using coefficients in front of formulas, never subscripts inside them.',
      'Recheck every element after each change.',
    ],
  },

  'stoichiometry-and-mole-ratios': {
    slug: 'stoichiometry-and-mole-ratios',
    title: 'Stoichiometry and Mole Ratios',
    difficulty: 'medium',
    simpleExplanation:
      "Stoichiometry uses the balanced equation's coefficients as mole ratios, letting you " +
      'calculate how many moles of one substance react with or produce another.',
    whyItMatters:
      'This is how chemists predict exactly how much product a reaction will make, or how much ' +
      'reactant is needed, before ever running the experiment.',
    workedExample: {
      id: 'stoichiometry-worked-1',
      title: 'Use a mole ratio to find product amount',
      problemStatement: 'In the reaction 2H₂ + O₂ → 2H₂O, how many moles of water are produced from 5 moles of hydrogen (H₂)?',
      steps: [
        { step: 1, instruction: 'Read the mole ratio from the balanced equation.', math: '2 mol H₂ : 2 mol H₂O', explanation: 'The coefficients give a 2:2 (i.e. 1:1) ratio between H₂ and H₂O.' },
        { step: 2, instruction: 'Apply that ratio to the given amount.', math: '5 mol H₂ × (2/2) = 5 mol H₂O', explanation: 'Since the ratio is 1:1, 5 moles of H₂ produce 5 moles of H₂O.' },
      ],
      finalAnswer: '5 mol of water',
    },
    whyItWorks:
      'The coefficients in a balanced equation are already a mole ratio — they tell you exactly ' +
      'how many moles of each substance react or form for every mole of the others, so scaling ' +
      'that ratio by the amount you have gives the right answer.',
    realLifeExample: {
      title: 'Scaling up a recipe',
      scenario: 'A balanced equation is like a recipe: 2 parts flour to 1 part sugar always stays in that ratio, however much you bake.',
      explanation: 'Just as doubling a recipe doubles every ingredient in the same ratio, doubling the moles of one reactant scales every other substance in the equation by the same factor.',
    },
    practiceQuestions: [
      {
        id: 'stoichiometry-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'In the reaction N₂ + 3H₂ → 2NH₃, how many moles of NH₃ are produced from 6 moles of H₂?',
        hints: ['The mole ratio of H₂ to NH₃ is 3:2.', "6 moles of H₂ is double the '3' in the ratio — scale NH₃ the same way."],
        correctAnswer: 4,
        unit: 'mol',
        explanation: 'Ratio H₂:NH₃ = 3:2. 6 mol H₂ is 2× the ratio amount, so NH₃ = 2×2 = 4 mol.',
      },
    ],
    commonMistake:
      "Using the ratio of the substances' masses instead of their mole-ratio coefficients — " +
      'stoichiometry works in moles, not grams, until a final conversion step.',
    quickReview: [
      'Coefficients in a balanced equation give the mole ratio between substances.',
      'Scale the ratio to match the amount of a known substance.',
      'Convert to mass afterwards using n = m/M if needed.',
    ],
  },

  'limiting-reactants': {
    slug: 'limiting-reactants',
    title: 'Limiting Reactants',
    difficulty: 'hard',
    simpleExplanation:
      "When two reactants don't combine in exactly the ratio the equation needs, one of them runs " +
      'out first — this is the limiting reactant, and it determines the maximum amount of product ' +
      'that can form. The other reactant is left over in excess.',
    whyItMatters:
      "Real reactions rarely use perfectly matched amounts of every reactant, so identifying the " +
      "limiting reactant is essential for predicting how much product you'll actually get.",
    workedExample: {
      id: 'limiting-worked-1',
      title: 'Identify the limiting reactant',
      problemStatement: 'In the reaction 2H₂ + O₂ → 2H₂O, 4 mol of H₂ react with 1 mol of O₂. Which is the limiting reactant?',
      steps: [
        { step: 1, instruction: 'Find how much O₂ is needed to react with all 4 mol of H₂.', math: '4 mol H₂ × (1 mol O₂ / 2 mol H₂) = 2 mol O₂ needed', explanation: 'Using the 2:1 ratio of H₂ to O₂ from the equation.' },
        { step: 2, instruction: 'Compare to how much O₂ is actually available.', math: '2 mol needed vs. 1 mol available', explanation: "There isn't enough O₂ to react with all the H₂." },
      ],
      finalAnswer: 'O₂ is the limiting reactant — it runs out first.',
    },
    whyItWorks:
      'Comparing how much of a reactant is actually needed (based on the mole ratio) to how much ' +
      'is actually available reveals which one will be used up first — and once it\'s gone, the ' +
      'reaction has to stop, regardless of how much of the other reactant remains.',
    realLifeExample: {
      title: 'Building furniture from a kit',
      scenario: 'A furniture kit needs 4 screws per shelf; you have 20 screws and 6 shelves.',
      explanation: "20 screws only allow 5 shelves to be built, not 6 — the screws are the 'limiting reactant,' leaving one shelf's worth of wood unused, just like a limiting reactant leaves the other chemical in excess.",
    },
    practiceQuestions: [
      {
        id: 'limiting-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'In N₂ + 3H₂ → 2NH₃, if 2 mol of N₂ react with 3 mol of H₂, which is limiting?',
        options: [
          { id: 'a', text: 'N₂' },
          { id: 'b', text: 'H₂' },
          { id: 'c', text: 'Neither — exact ratio' },
          { id: 'd', text: 'NH₃' },
        ],
        correctOptionId: 'b',
        hints: ['The required ratio is 1 mol N₂ : 3 mol H₂.', 'Check how much N₂ the 3 mol of H₂ can actually react with: 3/3 = 1 mol N₂ — but 2 mol N₂ is available.'],
        explanation: '3 mol H₂ only needs 1 mol N₂ (ratio 1:3), but 2 mol N₂ is available — so H₂ runs out first and is limiting.',
      },
    ],
    commonMistake:
      'Assuming the reactant with the smaller number of moles is automatically the limiting one — ' +
      "you must compare using the balanced equation's mole ratio, not just raw mole amounts.",
    quickReview: [
      'The limiting reactant runs out first and determines the maximum product.',
      'The other reactant is left in excess.',
      'Compare using the mole ratio from the balanced equation, not raw amounts.',
    ],
  },

  'concentration-calculations': {
    slug: 'concentration-calculations',
    title: 'Concentration Calculations',
    difficulty: 'medium',
    simpleExplanation:
      'Concentration measures how much solute is dissolved in a given volume of solution. In ' +
      'moles, it is calculated as c = n/V, where n is the amount in moles and V is the volume in ' +
      'litres (dm³), giving units of mol/dm³ (also called molarity).',
    whyItMatters:
      "Concentration tells you exactly how 'strong' a solution is, which is essential for " +
      'accurately measuring out reactants in solution rather than as solids.',
    formulaSlug: 'concentration-formula',
    workedExample: {
      id: 'concentration-worked-1',
      title: 'Calculate a solution\'s concentration',
      problemStatement: 'What is the concentration of a solution containing 0.5 mol of solute dissolved in 2 dm³ of solution?',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'c = n / V', explanation: 'Concentration equals moles divided by volume in dm³.' },
        { step: 2, instruction: 'Substitute the values.', math: 'c = 0.5 / 2', explanation: 'n = 0.5 mol, V = 2 dm³.' },
        { step: 3, instruction: 'Calculate.', math: 'c = 0.25', explanation: '0.5 divided by 2.' },
      ],
      finalAnswer: 'c = 0.25 mol/dm³',
    },
    whyItWorks:
      'Dividing the total amount of dissolved substance by the total volume it is spread through ' +
      'gives exactly how much of it is present per unit of volume — the definition of concentration.',
    realLifeExample: {
      title: 'Preparing a solution in the lab',
      scenario: 'A chemist needs to prepare 1 dm³ of a 0.1 mol/dm³ solution for a titration.',
      explanation: 'Rearranging c = n/V to n = c × V tells them exactly how many moles (and therefore grams) of solute to dissolve.',
    },
    practiceQuestions: [
      {
        id: 'concentration-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'What is the concentration of a solution with 1 mol of solute in 4 dm³ of solution?',
        hints: ['c = n/V.', '1 divided by 4.'],
        correctAnswer: 0.25,
        unit: 'mol/dm³',
        explanation: 'c = 1/4 = 0.25 mol/dm³.',
      },
      {
        id: 'concentration-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'How many moles of solute are in 0.5 dm³ of a 2 mol/dm³ solution?',
        hints: ['Rearrange c = n/V to n = c × V.', '2 × 0.5.'],
        correctAnswer: 1,
        unit: 'mol',
        explanation: 'n = c × V = 2 × 0.5 = 1 mol.',
      },
    ],
    commonMistake:
      'Using volume in cm³ instead of dm³ without converting — remember 1 dm³ = 1000 cm³, so ' +
      'forgetting to divide by 1000 gives a concentration 1000 times too large.',
    quickReview: [
      'c = n/V, with V in dm³.',
      'Units are mol/dm³ (molarity).',
      '1 dm³ = 1000 cm³ — always check your units.',
    ],
  },

  'percentage-yield': {
    slug: 'percentage-yield',
    title: 'Percentage Yield',
    difficulty: 'medium',
    simpleExplanation:
      'Percentage yield compares the actual amount of product you get from a reaction to the ' +
      'theoretical (maximum possible) amount predicted by the balanced equation, as a percentage.',
    whyItMatters:
      'Real reactions almost never produce 100% of the theoretical maximum — percentage yield ' +
      'tells chemists and industry how efficient a reaction actually is.',
    formulaSlug: 'percentage-yield-formula',
    workedExample: {
      id: 'yield-worked-1',
      title: 'Calculate percentage yield',
      problemStatement: 'A reaction has a theoretical yield of 20 g of product. The actual yield obtained is 15 g. What is the percentage yield?',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: '% yield = (actual yield / theoretical yield) × 100', explanation: 'Compare what you actually got to the maximum possible.' },
        { step: 2, instruction: 'Substitute the values.', math: '% yield = (15 / 20) × 100', explanation: 'Actual = 15 g, theoretical = 20 g.' },
        { step: 3, instruction: 'Calculate.', math: '% yield = 75%', explanation: '0.75 × 100 = 75.' },
      ],
      finalAnswer: 'Percentage yield = 75%',
    },
    whyItWorks:
      'Dividing what you actually obtained by the maximum theoretically possible, then converting ' +
      'to a percentage, directly measures how close a real reaction came to its perfect, loss-free outcome.',
    realLifeExample: {
      title: 'Why medicines are expensive to manufacture',
      scenario: 'Pharmaceutical reactions often have percentage yields well below 100%, with product lost at each step of a multi-step synthesis.',
      explanation: 'Low percentage yield across several manufacturing steps compounds, meaning a large amount of expensive starting material is needed to produce a much smaller final amount of medicine.',
    },
    practiceQuestions: [
      {
        id: 'yield-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: "A reaction's theoretical yield is 50 g and the actual yield is 40 g. What is the percentage yield?",
        hints: ['% yield = (actual/theoretical) × 100.', '40/50 = 0.8.'],
        correctAnswer: 80,
        unit: '%',
        explanation: '(40/50) × 100 = 80%.',
      },
    ],
    commonMistake:
      'Dividing theoretical yield by actual yield instead of the other way around — this would ' +
      "give a percentage yield greater than 100%, which isn't possible for a real reaction.",
    quickReview: [
      '% yield = (actual yield / theoretical yield) × 100',
      'Percentage yield is always 100% or less in practice.',
      'Lower yield means more starting material is needed for the same amount of product.',
    ],
  },

  'atom-economy': {
    slug: 'atom-economy',
    title: 'Atom Economy',
    difficulty: 'hard',
    simpleExplanation:
      'Atom economy measures what percentage of the total mass of all reactants ends up in the ' +
      "desired product, rather than in unwanted by-products. It's a measure of how efficiently a " +
      'reaction uses its atoms, not just how much product forms.',
    whyItMatters:
      'A reaction can have a great percentage yield but still waste a lot of material as ' +
      'by-products — atom economy captures a different, equally important kind of efficiency, ' +
      'especially important for reducing chemical waste.',
    formulaSlug: 'atom-economy-formula',
    workedExample: {
      id: 'atom-economy-worked-1',
      title: 'Calculate atom economy',
      problemStatement: 'A reaction produces a desired product with a formula mass of 44, from total reactants with a combined formula mass of 80 (including by-products). What is the atom economy?',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: '% atom economy = (desired product mass / total reactant mass) × 100', explanation: 'Compare the mass of what you want to the mass of everything you started with.' },
        { step: 2, instruction: 'Substitute the values.', math: '% atom economy = (44 / 80) × 100', explanation: 'Desired product mass = 44, total reactant mass = 80.' },
        { step: 3, instruction: 'Calculate.', math: '% atom economy = 55%', explanation: '0.55 × 100 = 55.' },
      ],
      finalAnswer: 'Atom economy = 55%',
    },
    whyItWorks:
      'Since the total mass of reactants must equal the total mass of all products (conservation ' +
      'of mass), the fraction that ends up specifically in the desired product — rather than in ' +
      'by-products — is exactly what atom economy measures.',
    realLifeExample: {
      title: 'Choosing a greener industrial process',
      scenario: 'Chemical companies often choose between two different reaction routes to the same product.',
      explanation: 'A route with higher atom economy wastes less raw material as by-products, making it both more environmentally friendly and usually cheaper to run at scale.',
    },
    practiceQuestions: [
      {
        id: 'atom-economy-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction has a desired product mass of 36 and a total reactant mass of 90. What is the atom economy?',
        hints: ['% atom economy = (desired product mass/total reactant mass) × 100.', '36/90 = 0.4.'],
        correctAnswer: 40,
        unit: '%',
        explanation: '(36/90) × 100 = 40%.',
      },
    ],
    commonMistake:
      'Confusing atom economy with percentage yield — percentage yield compares actual vs. ' +
      "theoretical amount of the SAME product; atom economy compares the desired product's mass to " +
      'ALL the reactant mass, including unwanted by-products.',
    quickReview: [
      '% atom economy = (desired product mass / total reactant mass) × 100',
      'High atom economy means less mass wasted as by-products.',
      'Atom economy is different from percentage yield.',
    ],
  },
};
