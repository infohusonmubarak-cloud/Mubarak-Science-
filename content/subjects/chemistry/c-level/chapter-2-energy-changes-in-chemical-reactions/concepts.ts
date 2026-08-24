import type { Concept } from '@/types/content';

export const chapter2EnergyConcepts: Record<string, Concept> = {
  'forms-of-energy-in-chemistry': {
    slug: 'forms-of-energy-in-chemistry',
    title: 'Forms of Energy in Chemistry',
    difficulty: 'easy',
    simpleExplanation:
      'Chemical reactions involve energy stored in chemical bonds (chemical potential energy) ' +
      'converting into other forms — usually heat, but sometimes light, sound, or electrical energy ' +
      '— and energy from the surroundings converting back into chemical bonds.',
    whyItMatters:
      'Recognizing that a chemical bond is really a form of stored energy is the foundation for ' +
      'everything else in this chapter: breaking bonds always requires energy input, and forming ' +
      'bonds always releases energy.',
    whyItWorks:
      'The law of conservation of energy applies just as strictly to chemical reactions as to ' +
      'anything else in physics — energy is never created or destroyed in a reaction, only converted ' +
      'from one form (chemical potential energy in bonds) to another (usually heat).',
    realLifeExample: {
      title: 'A glow stick',
      scenario: 'Bending a glow stick starts a chemical reaction that produces light without any flame or electricity.',
      explanation: 'The chemical potential energy stored in the reactants\' bonds is released as light energy (with some heat) as new, lower-energy bonds form in the products — a direct conversion from chemical to light energy.',
    },
    practiceQuestions: [
      {
        id: 'forms-of-energy-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Where is the energy released by a burning candle actually stored before combustion?',
        options: [
          { id: 'a', text: 'In the surrounding air' },
          { id: 'b', text: 'In the chemical bonds of the wax and oxygen molecules' },
          { id: 'c', text: 'Nowhere — the energy is created during burning' },
          { id: 'd', text: 'In the candle\'s wick only' },
        ],
        correctOptionId: 'b',
        hints: ['Energy cannot be created — it must already exist somewhere before the reaction.'],
        explanation: 'The energy released as heat and light was already stored as chemical potential energy in the bonds of the wax molecules and oxygen — burning just converts it to heat and light.',
      },
    ],
    commonMistake:
      "Thinking a reaction that releases a lot of energy 'creates' energy — reactions only convert " +
      'energy from one form to another; the total amount of energy is always conserved.',
    quickReview: [
      'Chemical bonds store chemical potential energy.',
      'Reactions convert this energy into other forms, usually heat.',
      'Energy is always conserved, never created or destroyed.',
    ],
  },

  'internal-energy-and-enthalpy': {
    slug: 'internal-energy-and-enthalpy',
    title: 'Internal Energy and Enthalpy',
    difficulty: 'medium',
    simpleExplanation:
      "A substance's internal energy is the total energy stored in its particles' motion and bonds. " +
      "Enthalpy (H) is a closely related quantity — essentially the heat content of a system at " +
      'constant pressure, which is how most reactions (open to the atmosphere) actually happen.',
    whyItMatters:
      'Chemists use enthalpy rather than raw internal energy because most reactions are carried out ' +
      'in open containers at roughly constant atmospheric pressure, and enthalpy change is exactly the ' +
      'quantity that can be measured directly as heat released or absorbed under those conditions.',
    formulaSlug: 'heat-energy-formula',
    workedExample: {
      id: 'internal-energy-worked-1',
      title: 'Calculate heat released using calorimetry',
      problemStatement: 'A reaction heats 100 g of water from 25.0°C to 45.0°C in a calorimeter. Find the heat energy released (c for water = 4.18 J/(g·°C)).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'q = mcΔT', explanation: 'Heat = mass × specific heat capacity × temperature change.' },
        { step: 2, instruction: 'Find ΔT.', math: 'ΔT = 45.0 − 25.0 = 20.0°C', explanation: 'Final temperature minus initial temperature.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'q = 100 × 4.18 × 20.0 = 8360', explanation: 'm = 100 g, c = 4.18 J/(g·°C), ΔT = 20.0°C.' },
      ],
      finalAnswer: 'q = 8360 J = 8.36 kJ released to the water',
    },
    whyItWorks:
      'Measuring the temperature rise of a known mass of water (or another substance with a known ' +
      'specific heat capacity) that absorbs the heat from a reaction is a direct, practical way to ' +
      'measure how much heat energy the reaction released, without needing to observe the bonds ' +
      'directly.',
    realLifeExample: {
      title: 'Food energy labels',
      scenario: 'The Calories listed on a food label come from burning a sample of the food in a calorimeter.',
      explanation: "A bomb calorimeter measures the temperature rise of a known mass of water surrounding the burning food sample, and q = mcΔT converts that temperature rise directly into the food's energy content.",
    },
    practiceQuestions: [
      {
        id: 'internal-energy-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction raises the temperature of 50 g of water by 12.0°C. How much heat (in J) was released? (c = 4.18 J/(g·°C))',
        hints: ['q = mcΔT.', '50 × 4.18 × 12.0.'],
        correctAnswer: 2508,
        tolerance: 5,
        unit: 'J',
        explanation: 'q = 50 × 4.18 × 12.0 = 2508 J.',
      },
    ],
    commonMistake:
      'Forgetting that q = mcΔT calculates the heat absorbed BY the water (or calorimeter), which is ' +
      'the negative of the heat released by an exothermic reaction — the reaction itself loses exactly ' +
      'the heat energy the surroundings gain.',
    quickReview: [
      'Enthalpy (H) is essentially heat content at constant pressure.',
      'q = mcΔT lets you calculate heat from a measured temperature change.',
      'Calorimetry is the standard experimental method for measuring reaction heat.',
    ],
  },

  'exothermic-and-endothermic-reactions': {
    slug: 'exothermic-and-endothermic-reactions',
    title: 'Exothermic and Endothermic Reactions',
    difficulty: 'easy',
    simpleExplanation:
      'An exothermic reaction releases heat to the surroundings (ΔH is negative, and the surroundings ' +
      'get warmer). An endothermic reaction absorbs heat from the surroundings (ΔH is positive, and the ' +
      'surroundings get colder).',
    whyItMatters:
      'This is the most basic and useful classification of a chemical reaction\'s energy behaviour — ' +
      'it predicts whether a reaction will feel hot or cold, and whether a product\'s bonds are ' +
      'stronger or weaker than the reactants\' bonds.',
    formulaSlug: 'enthalpy-change-formula',
    workedExample: {
      id: 'exo-endo-worked-1',
      title: 'Classify a reaction from its enthalpy change',
      problemStatement: 'The reactants of a reaction have a total enthalpy of 500 kJ/mol; the products have a total enthalpy of 320 kJ/mol. Find ΔH and classify the reaction.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'ΔH = H(products) − H(reactants)', explanation: 'Products minus reactants.' },
        { step: 2, instruction: 'Substitute the values.', math: 'ΔH = 320 − 500 = −180', explanation: 'H(products) = 320 kJ/mol, H(reactants) = 500 kJ/mol.' },
        { step: 3, instruction: 'Interpret the sign.', math: 'ΔH < 0', explanation: 'A negative ΔH means the reaction released energy.' },
      ],
      finalAnswer: 'ΔH = −180 kJ/mol → exothermic',
    },
    whyItWorks:
      'If the products end up with lower total enthalpy than the reactants, the "missing" energy has ' +
      'to have gone somewhere — it is released to the surroundings as heat, making ΔH negative. If the ' +
      'products end up with higher enthalpy, that extra energy had to come from somewhere — it is ' +
      'absorbed from the surroundings, making ΔH positive.',
    realLifeExample: {
      title: 'Instant hot packs and cold packs',
      scenario: 'Some first-aid hot packs get warm when activated; instant cold packs get cold.',
      explanation: 'A hot pack contains an exothermic reaction (like the oxidation of iron), releasing heat to warm your skin; a cold pack contains an endothermic process (like ammonium nitrate dissolving in water), absorbing heat from your skin and its surroundings.',
    },
    practiceQuestions: [
      {
        id: 'exo-endo-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Photosynthesis absorbs energy from sunlight to build glucose from carbon dioxide and water. Is this reaction exothermic or endothermic?',
        options: [
          { id: 'a', text: 'Exothermic — it releases energy' },
          { id: 'b', text: 'Endothermic — it absorbs energy' },
          { id: 'c', text: 'Neither — no energy is involved' },
          { id: 'd', text: 'Both, depending on the plant species' },
        ],
        correctOptionId: 'b',
        hints: ['Where does the energy for the reaction come from?'],
        explanation: 'Photosynthesis absorbs light energy and stores it as chemical potential energy in glucose\'s bonds — this makes it endothermic, with a positive ΔH.',
      },
    ],
    commonMistake:
      'Assuming exothermic reactions always happen quickly and endothermic reactions always happen ' +
      'slowly — the sign of ΔH tells you nothing about reaction speed, only about the direction of ' +
      "heat flow; that's a separate topic (reaction kinetics).",
    quickReview: [
      'Exothermic: releases heat, ΔH negative, surroundings get warmer.',
      'Endothermic: absorbs heat, ΔH positive, surroundings get colder.',
      'ΔH = H(products) − H(reactants).',
    ],
  },

  'enthalpy-diagrams': {
    slug: 'enthalpy-diagrams',
    title: 'Enthalpy Diagrams',
    difficulty: 'medium',
    simpleExplanation:
      "An enthalpy diagram (also called a reaction energy diagram) plots enthalpy on the vertical " +
      "axis and shows reactants and products as horizontal lines at their respective enthalpy levels " +
      "— the vertical gap between them, drawn as an arrow, represents ΔH.",
    whyItMatters:
      'These diagrams make it immediately visual whether a reaction is exothermic (products drawn ' +
      'lower than reactants) or endothermic (products drawn higher), and are used constantly to ' +
      "summarize a reaction's energetics at a glance.",
    whyItWorks:
      'Placing reactants and products at heights proportional to their actual enthalpy directly ' +
      'represents the physical quantity being described — the vertical distance between the two levels ' +
      'is literally |ΔH|, and the direction of the arrow (down for exothermic, up for endothermic) ' +
      'shows the direction of net energy flow.',
    realLifeExample: {
      title: 'Combustion reaction diagrams in textbooks',
      scenario: 'Every textbook description of burning fuel shows an enthalpy diagram with reactants high and products low.',
      explanation: 'Combustion is strongly exothermic, so fuel + oxygen (reactants) is always drawn well above carbon dioxide + water (products), with a large downward arrow labelled with the (negative) ΔH of combustion.',
    },
    practiceQuestions: [
      {
        id: 'enthalpy-diagram-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'On an enthalpy diagram, the products are drawn ABOVE the reactants. What does this tell you about the reaction?',
        options: [
          { id: 'a', text: 'It is exothermic, releasing energy.' },
          { id: 'b', text: 'It is endothermic, absorbing energy.' },
          { id: 'c', text: 'The reaction cannot happen.' },
          { id: 'd', text: 'The reaction has no activation energy.' },
        ],
        correctOptionId: 'b',
        hints: ["Higher enthalpy products mean the reaction gained energy from somewhere."],
        explanation: 'Products drawn above (higher enthalpy than) the reactants means energy was absorbed during the reaction — this is the definition of an endothermic reaction.',
      },
    ],
    commonMistake:
      "Confusing an enthalpy diagram with a reaction-progress (activation energy) diagram — an " +
      "enthalpy diagram only shows the start and end levels and ΔH; it doesn't show the energy barrier " +
      "(activation energy) the reaction has to climb over first, which is a separate concept covered " +
      "in reaction kinetics.",
    quickReview: [
      'Enthalpy diagrams plot reactants and products at their enthalpy levels.',
      'The vertical gap between them represents ΔH.',
      'Products lower than reactants = exothermic; higher = endothermic.',
    ],
  },

  'standard-enthalpy-of-reaction': {
    slug: 'standard-enthalpy-of-reaction',
    title: 'Standard Enthalpy of Reaction',
    difficulty: 'medium',
    simpleExplanation:
      "The standard enthalpy of reaction (ΔH°) is a reaction's enthalpy change measured under a fixed " +
      "set of standard conditions — 1 atmosphere of pressure, a stated temperature (usually 25°C), and " +
      'substances in their normal physical states — so that different reactions can be fairly compared.',
    whyItMatters:
      "Without agreed standard conditions, the same reaction's measured ΔH would vary depending on the " +
      'temperature and pressure it happened to be measured at — standard conditions let chemists ' +
      'compare and combine enthalpy data from completely different experiments and sources reliably.',
    whyItWorks:
      "Enthalpy depends on temperature and pressure (through the physical states and energies of the " +
      "substances involved), so fixing those conditions removes that variability, leaving ΔH° as a " +
      "single, reproducible number that depends only on the identities of the reactants and products.",
    realLifeExample: {
      title: 'Comparing fuels by their standard enthalpy of combustion',
      scenario: 'Engineers compare different fuels (petrol, ethanol, hydrogen) by their standard enthalpy of combustion.',
      explanation: 'Because each value is measured under the same standard conditions, the numbers can be directly compared to determine which fuel releases the most energy per mole — a comparison that would be meaningless if each fuel had been tested under different temperatures and pressures.',
    },
    practiceQuestions: [
      {
        id: 'standard-enthalpy-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do chemists measure enthalpy changes under standard conditions?',
        options: [
          { id: 'a', text: 'Standard conditions make every reaction exothermic.' },
          { id: 'b', text: 'It allows fair, reproducible comparison between different reactions and experiments.' },
          { id: 'c', text: 'Reactions do not release heat under any other conditions.' },
          { id: 'd', text: 'It is required by international law.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what would go wrong if every lab used different temperature and pressure.'],
        explanation: 'Fixing conditions (pressure, temperature, physical states) removes variability from the measurement, so ΔH° values from different sources can be meaningfully compared and combined.',
      },
    ],
    commonMistake:
      'Assuming "standard" means "typical" or "usual" reaction conditions in general — it specifically ' +
      'refers to the fixed, agreed reference conditions (1 atm, a stated temperature, standard states) ' +
      'used purely for consistent measurement and comparison.',
    quickReview: [
      'ΔH° is measured under standard conditions: 1 atm, a stated temperature (usually 25°C).',
      'Standard conditions allow fair comparison between different reactions.',
      'ΔH° depends only on the reaction itself, not on how or where it was measured.',
    ],
  },

  'hesss-law': {
    slug: 'hesss-law',
    title: "Hess's Law",
    difficulty: 'medium',
    simpleExplanation:
      "Hess's law states that the total enthalpy change for a reaction is the same no matter what " +
      'route is taken from reactants to products — whether the reaction happens in one step or several.',
    whyItMatters:
      "Hess's law lets chemists calculate the enthalpy change of a reaction that would be difficult, " +
      "dangerous, or impossible to measure directly, by combining the enthalpy changes of other " +
      "reactions that ARE easy to measure.",
    formulaSlug: 'hesss-law-formula',
    workedExample: {
      id: 'hesss-law-worked-1',
      title: "Verify Hess's law with carbon's two-step combustion",
      problemStatement: 'Carbon burns directly to CO₂ with ΔH = −393.5 kJ/mol. It can also burn in two steps: C + ½O₂ → CO, ΔH₁ = −110.5 kJ/mol, then CO + ½O₂ → CO₂, ΔH₂ = −283.0 kJ/mol. Show that Hess\'s law holds.',
      steps: [
        { step: 1, instruction: "Write Hess's law.", math: 'ΔH(overall) = ΔH₁ + ΔH₂', explanation: 'The sum of the step enthalpies should equal the direct, one-step enthalpy.' },
        { step: 2, instruction: 'Add the two step enthalpies.', math: 'ΔH(overall) = −110.5 + (−283.0) = −393.5', explanation: 'ΔH₁ = −110.5 kJ/mol, ΔH₂ = −283.0 kJ/mol.' },
        { step: 3, instruction: 'Compare to the direct, one-step value.', math: '−393.5 = −393.5 ✓', explanation: 'The two-step total exactly matches the direct combustion enthalpy.' },
      ],
      finalAnswer: 'ΔH(overall) = −393.5 kJ/mol, matching the direct measurement — confirming Hess\'s law',
    },
    whyItWorks:
      "Enthalpy is a state function — it depends only on the starting and ending states (the identity " +
      "of the reactants and products), not on the pathway taken between them. Since energy is " +
      "conserved overall, any route between the same starting and ending points must release or " +
      "absorb the exact same total energy.",
    realLifeExample: {
      title: 'Finding the enthalpy of an unmeasurable reaction',
      scenario: 'The direct formation of carbon monoxide (C + ½O₂ → CO) is nearly impossible to measure directly, because carbon almost always burns all the way to CO₂.',
      explanation: 'Chemists instead measure the enthalpy of C → CO₂ directly and CO → CO₂ directly (both easy to measure precisely), then use Hess\'s law to calculate the otherwise unmeasurable C → CO enthalpy change by subtraction.',
    },
    practiceQuestions: [
      {
        id: 'hesss-law-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "Why does Hess's law work?",
        options: [
          { id: 'a', text: 'Because enthalpy depends only on the start and end states, not the path taken between them.' },
          { id: 'b', text: 'Because all reactions release exactly the same amount of energy.' },
          { id: 'c', text: 'Because energy is created during multi-step reactions.' },
          { id: 'd', text: 'It is simply an experimental coincidence with no underlying reason.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about what a 'state function' means."],
        explanation: "Enthalpy is a state function, depending only on the initial and final states — so any pathway between the same reactants and products must involve the same total enthalpy change.",
      },
    ],
    commonMistake:
      "Assuming Hess's law only applies to two-step pathways — it applies to any number of steps, and " +
      "also requires you to reverse the sign of ΔH if you have to flip a reaction's direction, or " +
      'multiply ΔH by a factor if you scale a reaction\'s coefficients.',
    quickReview: [
      "Hess's law: total ΔH is the same regardless of the reaction pathway.",
      'This works because enthalpy is a state function.',
      'It lets you calculate hard-to-measure ΔH values from easier ones.',
    ],
  },

  'calculating-enthalpy-changes-using-hesss-law': {
    slug: 'calculating-enthalpy-changes-using-hesss-law',
    title: "Calculating Enthalpy Changes Using Hess's Law",
    difficulty: 'hard',
    simpleExplanation:
      "To find an unknown reaction's ΔH using Hess's law, arrange known reactions (with known ΔH " +
      "values) so that, when added together, their reactants and products cancel out to leave exactly " +
      "the target reaction — reversing a reaction flips the sign of its ΔH, and scaling a reaction's " +
      "coefficients scales its ΔH by the same factor.",
    whyItMatters:
      "This is the practical, step-by-step skill version of Hess's law — the technique used to " +
      'actually solve real enthalpy problems, not just state the law.',
    formulaSlug: 'hesss-law-formula',
    workedExample: {
      id: 'hesss-calc-worked-1',
      title: 'Find ΔH for the formation of methane using two known reactions',
      problemStatement:
        'Given: (1) C(s) + O₂(g) → CO₂(g), ΔH₁ = −393.5 kJ/mol, and (2) H₂(g) + ½O₂(g) → H₂O(l), ΔH₂ = −285.8 kJ/mol, ' +
        'and (3) CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔH₃ = −890.3 kJ/mol, find ΔH for C(s) + 2H₂(g) → CH₄(g).',
      steps: [
        { step: 1, instruction: 'Add reaction (1) and twice reaction (2).', math: 'C + O₂ → CO₂  (ΔH₁ = −393.5); 2H₂ + O₂ → 2H₂O  (2 × ΔH₂ = −571.6)', explanation: 'Doubling reaction (2) doubles its ΔH, since twice as much H₂ reacts.' },
        { step: 2, instruction: 'Reverse reaction (3), flipping the sign of its ΔH.', math: 'CO₂ + 2H₂O → CH₄ + 2O₂  (ΔH = +890.3)', explanation: 'We need CH₄ as a product, so combustion must run backward — reversing a reaction flips the sign of ΔH.' },
        { step: 3, instruction: 'Add all three adjusted reactions and cancel matching terms.', math: 'C + 2H₂ → CH₄', explanation: 'O₂, CO₂, and H₂O all appear on both sides and cancel, leaving exactly the target reaction.' },
        { step: 4, instruction: 'Sum the adjusted ΔH values.', math: 'ΔH = (−393.5) + (−571.6) + (+890.3) = −74.8', explanation: 'Add ΔH₁, 2×ΔH₂, and the reversed ΔH₃.' },
      ],
      finalAnswer: 'ΔH = −74.8 kJ/mol for C(s) + 2H₂(g) → CH₄(g)',
    },
    whyItWorks:
      'Adding chemical equations together is valid because it represents a real, physically possible ' +
      'multi-step pathway between the same overall reactants and products — and Hess\'s law guarantees ' +
      'that pathway\'s total ΔH must equal the direct reaction\'s ΔH, since enthalpy only depends on ' +
      'the start and end points.',
    realLifeExample: {
      title: "Determining methane's formation enthalpy",
      scenario: "Methane's enthalpy of formation cannot be measured directly, because carbon and hydrogen gas do not react cleanly to form pure methane in a lab.",
      explanation: "Chemists instead combine the well-known, easily measured combustion enthalpies of carbon, hydrogen, and methane itself using Hess's law — exactly as shown in the worked example — to calculate methane's formation enthalpy indirectly.",
    },
    practiceQuestions: [
      {
        id: 'hesss-calc-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Given S(s) + O₂(g) → SO₂(g), ΔH₁ = −296.8 kJ/mol, and SO₂(g) + ½O₂(g) → SO₃(g), ΔH₂ = −98.9 kJ/mol, find ΔH for S(s) + 3/2 O₂(g) → SO₃(g).',
        hints: ["Add the two given equations together — do the intermediate SO₂ terms cancel?", 'ΔH = ΔH₁ + ΔH₂.'],
        correctAnswer: -395.7,
        tolerance: 0.2,
        unit: 'kJ/mol',
        explanation: 'Adding the two reactions cancels SO₂ (it appears as a product in the first and a reactant in the second), leaving S + 3/2 O₂ → SO₃ with ΔH = −296.8 + (−98.9) = −395.7 kJ/mol.',
      },
    ],
    commonMistake:
      "Forgetting to flip the sign of ΔH when reversing a reaction, or forgetting to scale ΔH when " +
      "multiplying a reaction's coefficients — both the reaction equation and its ΔH must be adjusted " +
      "together, consistently.",
    quickReview: [
      'Arrange known reactions so their sum equals the target reaction.',
      'Reversing a reaction flips the sign of its ΔH.',
      "Scaling a reaction's coefficients scales its ΔH by the same factor.",
    ],
  },
};
