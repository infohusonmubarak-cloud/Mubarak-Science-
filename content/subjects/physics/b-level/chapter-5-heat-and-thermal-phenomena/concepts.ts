import type { Concept } from '@/types/content';

export const chapter5HeatConcepts: Record<string, Concept> = {
  'units-of-heat': {
    slug: 'units-of-heat',
    title: 'Units of Heat',
    difficulty: 'easy',
    simpleExplanation:
      'Heat is a form of energy transfer, so it is measured in the same SI unit as any other energy: the ' +
      'joule (J). An older unit, the calorie (cal), is still sometimes used, especially historically and ' +
      'in nutrition — it is defined as the heat needed to raise the temperature of 1 g of water by 1°C.',
    whyItMatters:
      "Recognising heat as a form of energy (rather than a separate, distinct quantity) connects it to the " +
      "broader principle of energy conservation, and understanding the joule/calorie relationship lets you " +
      "work with heat data given in either unit.",
    formulaSlug: 'heat-unit-conversion-formula',
    workedExample: {
      id: 'units-of-heat-we-1',
      title: 'Converting calories to joules',
      problemStatement: 'A snack contains 150 food Calories (which are actually kilocalories, kcal). Convert this to joules.',
      steps: [
        { step: 1, instruction: 'Convert kcal to cal.', math: '150 kcal = 150,000 cal', explanation: '1 kcal = 1000 cal.' },
        { step: 2, instruction: 'Apply the conversion factor.', math: '150,000 × 4.186 J', explanation: '1 cal = 4.186 J.' },
        { step: 3, instruction: 'Calculate.', math: '≈ 627,900 J ≈ 628 kJ', explanation: 'Multiply 150,000 by 4.186.' },
      ],
      finalAnswer: 'The snack contains approximately 628,000 J (628 kJ) of energy.',
    },
    whyItWorks:
      "The joule and calorie both measure energy, just using different historical reference definitions " +
      "(the joule from mechanical work, the calorie from heating water) — since they measure the same " +
      "physical quantity, a fixed, precisely-measured conversion factor links them exactly.",
    realLifeExample: {
      title: 'Food energy labels',
      scenario: 'Food packaging often lists energy content in Calories (kcal) in some countries and kilojoules in others.',
      explanation: 'Both units describe the same underlying quantity — the chemical energy the food can release — just using different historical unit systems, which is why nutrition labels can show both.',
    },
    practiceQuestions: [
      {
        id: 'units-of-heat-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Convert 50 calories to joules (1 cal = 4.186 J).',
        hints: ['Multiply by the conversion factor.'],
        correctAnswer: 209.3,
        tolerance: 2,
        unit: 'J',
        explanation: '50 × 4.186 = 209.3 J.',
      },
    ],
    commonMistake:
      "Confusing a 'calorie' (cal) with a food 'Calorie' (capital C, actually a kilocalorie = 1000 cal) — " +
      "food energy labels almost always use the larger kilocalorie, not the smaller scientific calorie.",
    quickReview: [
      'Heat is a form of energy, measured in joules (J), the SI unit.',
      '1 calorie = 4.186 J; food "Calories" are actually kilocalories.',
      'Heat and other forms of energy are fundamentally the same kind of quantity.',
    ],
  },

  'heat-and-internal-energy': {
    slug: 'heat-and-internal-energy',
    title: 'Heat and Internal Energy',
    difficulty: 'medium',
    simpleExplanation:
      "Internal energy is the total kinetic and potential energy of all the particles making up a " +
      "substance, from their random motion and their interactions with each other. Heat is specifically " +
      "the energy that TRANSFERS between objects due to a temperature difference — heat is a process " +
      "(a transfer), while internal energy is a property a substance HAS.",
    whyItMatters:
      "This distinction — heat as a transfer process versus internal energy as a stored property — " +
      "prevents a common confusion and is essential for correctly understanding thermal physics.",
    whyItWorks:
      "At the microscopic level, a substance's particles are constantly moving (kinetic energy) and " +
      "interacting via intermolecular forces (potential energy) — their sum is internal energy. When two " +
      "objects at different temperatures touch, faster-moving particles in the hotter object collide with " +
      "and transfer energy to slower particles in the cooler object — this ENERGY TRANSFER is what we call " +
      "heat.",
    realLifeExample: {
      title: 'A hot cup of coffee cooling down',
      scenario: 'A hot cup of coffee left on a table gradually cools to room temperature.',
      explanation: "The coffee's molecules have high kinetic energy (high internal energy) initially — as heat transfers from the hot coffee to the cooler surrounding air, the coffee's internal energy (and temperature) decreases, while the air's internal energy slightly increases, until both reach the same temperature.",
    },
    practiceQuestions: [
      {
        id: 'heat-internal-energy-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the key difference between heat and internal energy?',
        options: [
          { id: 'a', text: 'Heat is energy IN TRANSFER due to a temperature difference; internal energy is the total energy a substance HAS.' },
          { id: 'b', text: 'They are exactly the same thing with different names.' },
          { id: 'c', text: 'Internal energy only exists in gases.' },
          { id: 'd', text: 'Heat is a property objects have, while internal energy only exists during a transfer.' },
        ],
        correctOptionId: 'a',
        hints: ['One is a process (verb-like); the other is a stored quantity (noun-like).'],
        explanation: 'Heat describes energy transfer between objects at different temperatures; internal energy is the total kinetic and potential energy already present within a substance.',
      },
    ],
    commonMistake:
      "Saying an object 'contains heat' — technically, an object contains internal energy; heat only " +
      "exists as energy actively transferring between objects due to a temperature difference.",
    quickReview: [
      'Internal energy: total kinetic + potential energy of all particles in a substance.',
      'Heat: energy IN TRANSFER between objects, due to a temperature difference.',
      "Objects have internal energy; heat is what flows between them.",
    ],
  },

  'thermal-capacity': {
    slug: 'thermal-capacity',
    title: 'Thermal Capacity',
    difficulty: 'medium',
    simpleExplanation:
      "Thermal capacity (also called heat capacity) is the amount of heat energy needed to raise the " +
      "temperature of an ENTIRE OBJECT by one degree. Unlike specific heat capacity, it depends on the " +
      "object's total mass and material, not just the material alone.",
    whyItMatters:
      "Thermal capacity tells you how a specific real object (with a specific mass) will respond to " +
      "heating, which is directly useful for practical calculations involving actual objects rather than " +
      "abstract materials.",
    formulaSlug: 'thermal-capacity-formula',
    workedExample: {
      id: 'thermal-capacity-we-1',
      title: "Finding an object's thermal capacity",
      problemStatement: 'A metal block requires 4500 J of heat to raise its temperature by 15°C. Find its thermal capacity.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'C = Q/ΔT', explanation: 'Q = 4500 J, ΔT = 15°C.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'C = 4500/15 = 300 J/°C', explanation: 'Divide heat energy by temperature change.' },
      ],
      finalAnswer: 'Thermal capacity = 300 J/°C.',
    },
    whyItWorks:
      "A larger object (more mass of the same material) needs more total heat energy to raise its " +
      "temperature by the same amount, since there is simply more material whose particles need extra " +
      "energy — thermal capacity captures this whole-object behaviour directly.",
    realLifeExample: {
      title: 'Why a large pot of water heats up more slowly than a small one',
      scenario: 'A large pot of water takes noticeably longer to reach boiling than a small pot on the same stove.',
      explanation: "The large pot's greater mass of water gives it a greater thermal capacity — it needs more total heat energy to achieve the same temperature rise, which is why it takes longer to heat with the same power supplied.",
    },
    practiceQuestions: [
      {
        id: 'thermal-capacity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object has a thermal capacity of 200 J/°C. Find the heat energy needed to raise its temperature by 8°C.',
        hints: ['Q = CΔT (rearranged from C = Q/ΔT).'],
        correctAnswer: 1600,
        tolerance: 20,
        unit: 'J',
        explanation: 'Q = 200 × 8 = 1600 J.',
      },
    ],
    commonMistake:
      "Confusing thermal capacity (a property of a specific OBJECT, depending on its mass) with specific " +
      "heat capacity (a property of a MATERIAL, independent of how much of it you have) — these are " +
      "related but distinct quantities.",
    quickReview: [
      'C = Q/ΔT: thermal capacity is heat needed to raise an entire object\'s temperature by 1°C.',
      "Depends on the object's total mass and material.",
      'A larger mass of the same material has a larger thermal capacity.',
    ],
  },

  'specific-heat-capacity': {
    slug: 'specific-heat-capacity',
    title: 'Specific Heat Capacity',
    difficulty: 'medium',
    simpleExplanation:
      'Specific heat capacity is the amount of heat energy needed to raise the temperature of ONE KILOGRAM ' +
      'of a specific material by one degree. Unlike thermal capacity, it is a property of the MATERIAL ' +
      'itself, independent of how much of it you have.',
    whyItMatters:
      "Specific heat capacity lets you compare how easily different materials heat up or cool down, " +
      "explaining everyday phenomena like why metal feels hotter or colder to the touch than wood at the " +
      "same temperature, or why coastal climates are more temperature-stable than inland ones.",
    formulaSlug: 'specific-heat-capacity-formula',
    workedExample: {
      id: 'specific-heat-we-1',
      title: 'Finding heat needed to warm water',
      problemStatement: 'Find the heat energy needed to raise the temperature of 2 kg of water by 20°C (specific heat capacity of water = 4200 J/(kg·°C)).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Q = mcΔT', explanation: 'm = 2 kg, c = 4200 J/(kg·°C), ΔT = 20°C.' },
        { step: 2, instruction: 'Substitute values.', math: 'Q = 2 × 4200 × 20', explanation: 'Multiply mass, specific heat capacity, and temperature change.' },
        { step: 3, instruction: 'Calculate.', math: 'Q = 168,000 J = 168 kJ', explanation: 'Multiply the three values together.' },
      ],
      finalAnswer: 'Heat energy needed = 168,000 J (168 kJ).',
    },
    whyItWorks:
      "Different materials have different molecular structures and bonding, which affects how much energy " +
      "their particles can absorb (as increased kinetic and potential energy) for a given temperature rise " +
      "— water's molecular structure (strong hydrogen bonding) gives it an unusually high specific heat " +
      "capacity compared to most other common substances.",
    realLifeExample: {
      title: "Water's high specific heat capacity and coastal climates",
      scenario: 'Coastal areas typically have milder, more stable temperatures than inland areas at the same latitude.',
      explanation: "Water's very high specific heat capacity means large bodies of water absorb or release large amounts of heat energy while changing temperature only slightly — this moderates nearby air temperatures, producing the milder coastal climates observed worldwide.",
    },
    practiceQuestions: [
      {
        id: 'specific-heat-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the heat energy needed to raise the temperature of 0.5 kg of a metal (c = 900 J/(kg·°C)) by 30°C.',
        hints: ['Q = mcΔT.'],
        correctAnswer: 13500,
        tolerance: 200,
        unit: 'J',
        explanation: 'Q = 0.5 × 900 × 30 = 13,500 J.',
      },
    ],
    commonMistake:
      "Using thermal capacity and specific heat capacity interchangeably — specific heat capacity is PER " +
      "KILOGRAM of material, so you must multiply by the actual mass (Q = mcΔT) to get the total heat " +
      "energy for a real object.",
    quickReview: [
      'Q = mcΔT: heat needed depends on mass, specific heat capacity, and temperature change.',
      'Specific heat capacity is a property of the MATERIAL, independent of quantity.',
      "Water's unusually high specific heat capacity moderates coastal climates.",
    ],
  },

  'law-of-heat-exchange': {
    slug: 'law-of-heat-exchange',
    title: 'Law of Heat Exchange',
    difficulty: 'hard',
    simpleExplanation:
      'When a hot object and a cold object are brought into contact (with no heat lost to the ' +
      'surroundings), heat flows from the hotter object to the cooler one until they reach a common final ' +
      'temperature — and by conservation of energy, the heat LOST by the hot object exactly equals the ' +
      'heat GAINED by the cold object.',
    whyItMatters:
      "This law is the basis of calorimetry — a practical technique used to determine unknown quantities " +
      "like specific heat capacities or final mixing temperatures, by measuring how heat is exchanged " +
      "between substances.",
    formulaSlug: 'heat-exchange-formula',
    workedExample: {
      id: 'heat-exchange-we-1',
      title: 'Finding a final mixing temperature',
      problemStatement: '0.3 kg of water at 80°C is mixed with 0.5 kg of water at 20°C (c = 4200 J/(kg·°C) for both). Find the final temperature.',
      steps: [
        { step: 1, instruction: 'Set heat lost equal to heat gained.', math: 'm₁c₁(T₁ − Tf) = m₂c₂(Tf − T₂)', explanation: 'm₁=0.3, T₁=80, m₂=0.5, T₂=20; c is the same for both.' },
        { step: 2, instruction: 'Substitute (c cancels since it is the same for both).', math: '0.3(80 − Tf) = 0.5(Tf − 20)', explanation: 'Simplify by cancelling the common specific heat capacity.' },
        { step: 3, instruction: 'Expand and solve for Tf.', math: '24 − 0.3Tf = 0.5Tf − 10 → 34 = 0.8Tf → Tf = 42.5°C', explanation: 'Collect terms and solve the linear equation.' },
      ],
      finalAnswer: 'The final mixed temperature is 42.5°C.',
    },
    whyItWorks:
      "This follows directly from conservation of energy: assuming no heat escapes to the surroundings, " +
      "all the heat energy leaving the hotter object must go somewhere — and that somewhere is exactly " +
      "the cooler object it is in contact with, so the two heat quantities must be equal.",
    realLifeExample: {
      title: 'Tempering glass or metal by quenching',
      scenario: 'Hot metal is sometimes rapidly cooled ("quenched") in water or oil to change its properties.',
      explanation: "The heat lost by the hot metal exactly equals the heat gained by the quenching liquid — engineers use this exact relationship (law of heat exchange) to calculate how much quenching liquid is needed, and how much its temperature will rise.",
    },
    practiceQuestions: [
      {
        id: 'heat-exchange-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: '0.2 kg of water at 90°C is mixed with 0.4 kg of water at 15°C (same c for both). Find the final temperature.',
        hints: ['0.2(90 − Tf) = 0.4(Tf − 15).', 'Expand and solve for Tf.'],
        correctAnswer: 40,
        tolerance: 1,
        unit: '°C',
        explanation: '18 − 0.2Tf = 0.4Tf − 6 → 24 = 0.6Tf → Tf = 40°C.',
      },
    ],
    commonMistake:
      "Forgetting that this law assumes NO heat is lost to the surroundings (a perfectly insulated system) " +
      "— in real experiments, some heat always escapes, which is why practical calorimetry uses " +
      "insulated containers to minimise this loss.",
    quickReview: [
      'Heat lost by the hotter object = heat gained by the cooler object (assuming no loss to surroundings).',
      'm₁c₁(T₁ − Tf) = m₂c₂(Tf − T₂) lets you solve for an unknown final temperature or other quantity.',
      'This is the basis of calorimetry, used to measure specific heat capacities experimentally.',
    ],
  },

  'change-of-state-and-latent-heat': {
    slug: 'change-of-state-and-latent-heat',
    title: 'Change of State and Latent Heat',
    difficulty: 'medium',
    simpleExplanation:
      "When a substance changes state (like melting or boiling), it absorbs or releases energy called " +
      "latent heat — but crucially, this happens at a CONSTANT temperature, since the energy goes into " +
      "breaking or forming intermolecular bonds rather than increasing the kinetic energy (and therefore " +
      "temperature) of the particles.",
    whyItMatters:
      "Understanding that temperature stays constant during a state change (despite continued heating) " +
      "explains a distinctive feature of heating curves and sets up the two specific latent heat concepts " +
      "that follow.",
    whyItWorks:
      "During a state change, added heat energy is used entirely to overcome the intermolecular forces " +
      "holding particles in their current state (e.g. breaking the rigid bonds of a solid to allow liquid " +
      "flow) — since this energy goes into potential energy (bond-breaking), not kinetic energy, the " +
      "particles' average speed (and therefore temperature) does not change until the state change is " +
      "complete.",
    realLifeExample: {
      title: 'Why ice stays at 0°C while melting',
      scenario: 'A glass of ice water stays at almost exactly 0°C the entire time the ice is melting, even while sitting in a warm room.',
      explanation: 'All the heat energy flowing into the ice-water mixture goes into breaking the bonds holding the ice in its solid structure (melting it), not into raising the temperature — only once all the ice has melted does the temperature begin to rise above 0°C.',
    },
    practiceQuestions: [
      {
        id: 'change-of-state-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does temperature stay constant while a substance is changing state (e.g. melting)?',
        options: [
          { id: 'a', text: 'The added energy is used to break intermolecular bonds (potential energy), not to increase particle speed (kinetic energy/temperature).' },
          { id: 'b', text: 'No heat is actually being added during a state change.' },
          { id: 'c', text: 'Temperature always increases during a state change; it never stays constant.' },
          { id: 'd', text: 'State changes have no relationship to heat energy at all.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what the energy is actually doing at the molecular level during melting.'],
        explanation: 'During a state change, energy input goes into overcoming intermolecular bonds rather than increasing particle kinetic energy, so temperature remains constant until the change is complete.',
      },
    ],
    commonMistake:
      "Assuming continued heating always means rising temperature — during a phase change specifically, " +
      "temperature plateaus at the melting or boiling point until the entire state change is complete.",
    quickReview: [
      'Latent heat: energy absorbed/released during a state change, at constant temperature.',
      'Energy goes into breaking/forming intermolecular bonds, not raising kinetic energy.',
      'Temperature plateaus during melting/boiling until the state change is fully complete.',
    ],
  },

  'vaporization-and-specific-latent-heat': {
    slug: 'vaporization-and-specific-latent-heat',
    title: 'Vaporization and Specific Latent Heat of Vaporization',
    difficulty: 'medium',
    simpleExplanation:
      "Vaporization is the change from liquid to gas. The specific latent heat of vaporization is the " +
      "energy needed to convert one kilogram of a liquid into vapour at its boiling point, with no " +
      "temperature change.",
    whyItMatters:
      "Latent heat of vaporization is typically much larger than the heat needed for ordinary temperature " +
      "changes, which explains why boiling water into steam takes so much more energy (and time, at fixed " +
      "power) than heating the same water from room temperature to boiling.",
    formulaSlug: 'latent-heat-of-vaporization-formula',
    workedExample: {
      id: 'vaporization-we-1',
      title: 'Finding energy to boil water into steam',
      problemStatement: 'Find the heat energy needed to convert 0.5 kg of water (already at 100°C) entirely into steam (Lᵥ of water = 2,260,000 J/kg).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Q = mLᵥ', explanation: 'm = 0.5 kg, Lᵥ = 2,260,000 J/kg.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'Q = 0.5 × 2,260,000', explanation: 'Multiply mass by specific latent heat of vaporization.' },
        { step: 3, instruction: 'Simplify.', math: 'Q = 1,130,000 J = 1130 kJ', explanation: 'This is a large amount of energy.' },
      ],
      finalAnswer: 'Heat energy needed = 1,130,000 J (1130 kJ).',
    },
    whyItWorks:
      "Converting a liquid to a gas requires completely separating molecules from each other (against " +
      "strong intermolecular attractive forces), which takes far more energy than simply making them " +
      "vibrate or move faster within a liquid — this is why latent heat of vaporization values are " +
      "typically very large compared to specific heat capacity values.",
    realLifeExample: {
      title: 'Why steam burns are worse than boiling-water burns',
      scenario: 'Steam burns tend to be more severe than burns from water at the same 100°C temperature.',
      explanation: "As steam condenses back into liquid water on skin, it releases its large latent heat of vaporization — this releases much more energy into the skin than an equal mass of already-liquid water at 100°C would, which is why steam burns are typically more severe.",
    },
    practiceQuestions: [
      {
        id: 'vaporization-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the heat energy needed to vaporize 0.2 kg of water at its boiling point (Lᵥ = 2,260,000 J/kg).',
        hints: ['Q = mLᵥ.'],
        correctAnswer: 452000,
        tolerance: 5000,
        unit: 'J',
        explanation: 'Q = 0.2 × 2,260,000 = 452,000 J.',
      },
    ],
    commonMistake:
      "Forgetting that this formula only applies AT the boiling point — heating water from room temperature " +
      "to boiling requires the specific heat capacity formula (Q=mcΔT) first, and only the final " +
      "liquid-to-gas conversion at 100°C uses the latent heat of vaporization formula.",
    quickReview: [
      'Q = mLᵥ gives the heat needed to vaporize a mass of liquid at its boiling point.',
      'Vaporization requires overcoming strong intermolecular attractions, so Lᵥ is typically very large.',
      'Steam releases this large latent heat upon condensing, making steam burns especially severe.',
    ],
  },

  'fusion-and-specific-latent-heat': {
    slug: 'fusion-and-specific-latent-heat',
    title: 'Fusion and Specific Latent Heat of Fusion',
    difficulty: 'medium',
    simpleExplanation:
      "Fusion (melting) is the change from solid to liquid. The specific latent heat of fusion is the " +
      "energy needed to convert one kilogram of a solid into liquid at its melting point, with no " +
      "temperature change.",
    whyItMatters:
      "Latent heat of fusion is generally smaller than latent heat of vaporization for the same substance, " +
      "reflecting that melting requires less molecular rearrangement than fully separating molecules into " +
      "a gas.",
    formulaSlug: 'latent-heat-of-fusion-formula',
    workedExample: {
      id: 'fusion-we-1',
      title: 'Finding energy to melt ice',
      problemStatement: 'Find the heat energy needed to melt 0.8 kg of ice already at 0°C (Lf of water = 334,000 J/kg).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Q = mLf', explanation: 'm = 0.8 kg, Lf = 334,000 J/kg.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'Q = 0.8 × 334,000', explanation: 'Multiply mass by specific latent heat of fusion.' },
        { step: 3, instruction: 'Simplify.', math: 'Q = 267,200 J', explanation: 'This is the energy needed to fully melt the ice.' },
      ],
      finalAnswer: 'Heat energy needed = 267,200 J.',
    },
    whyItWorks:
      "Melting only needs to loosen (not completely break) the rigid structure holding particles in fixed " +
      "positions in a solid, allowing them to move past each other as a liquid — this requires less energy " +
      "than fully separating molecules into a gas, which is why Lf is typically much smaller than Lᵥ for " +
      "the same substance (for water, Lf ≈ 334,000 J/kg vs. Lᵥ ≈ 2,260,000 J/kg).",
    realLifeExample: {
      title: 'Ice used to cool drinks effectively',
      scenario: 'Adding ice to a drink cools it far more effectively than adding the same mass of cold water.',
      explanation: "As ice melts, it absorbs a large amount of latent heat of fusion directly from the drink, cooling it significantly — plain cold water can only absorb heat via a temperature change (specific heat capacity), which is far less effective at removing the same amount of heat energy.",
    },
    practiceQuestions: [
      {
        id: 'fusion-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the heat energy needed to melt 0.3 kg of ice at 0°C (Lf = 334,000 J/kg).',
        hints: ['Q = mLf.'],
        correctAnswer: 100200,
        tolerance: 1000,
        unit: 'J',
        explanation: 'Q = 0.3 × 334,000 = 100,200 J.',
      },
    ],
    commonMistake:
      "Confusing latent heat of fusion with latent heat of vaporization — fusion refers to the " +
      "solid↔liquid transition (smaller L value); vaporization refers to the liquid↔gas transition " +
      "(much larger L value), even for the same substance.",
    quickReview: [
      'Q = mLf gives the heat needed to melt a mass of solid at its melting point.',
      'Lf is generally much smaller than Lᵥ for the same substance.',
      'Melting ice absorbs a large amount of latent heat, making it very effective for cooling.',
    ],
  },

  'pressure-dependence-of-melting-and-boiling-point': {
    slug: 'pressure-dependence-of-melting-and-boiling-point',
    title: 'Dependence of Melting Point and Boiling Point on Pressure',
    difficulty: 'medium',
    simpleExplanation:
      "Both melting point and boiling point depend on pressure. For most substances, increasing pressure " +
      "slightly raises the melting point (though water is a notable exception, where increased pressure " +
      "slightly LOWERS its melting point). Increasing pressure generally raises the boiling point " +
      "significantly, and decreasing pressure lowers it.",
    whyItMatters:
      "This pressure dependence explains why water boils at a lower temperature on a mountain (lower " +
      "atmospheric pressure) and why pressure cookers can cook food faster (higher pressure, higher " +
      "boiling point, hotter cooking temperature).",
    whyItWorks:
      "Boiling occurs when a liquid's vapour pressure equals the surrounding (atmospheric) pressure — at " +
      "lower atmospheric pressure, a lower vapour pressure (and therefore a lower temperature) is enough " +
      "to reach this balance, so the liquid boils at a lower temperature. At higher pressure, more thermal " +
      "energy (a higher temperature) is needed to raise the vapour pressure enough to match the increased " +
      "surrounding pressure.",
    realLifeExample: {
      title: 'Cooking at high altitude versus using a pressure cooker',
      scenario: 'Food takes longer to cook by boiling at high mountain altitudes, but cooks faster in a pressure cooker at sea level.',
      explanation: "At high altitude, lower atmospheric pressure lowers water's boiling point (sometimes to around 90°C or below), so boiling water is cooler and cooks food more slowly. A pressure cooker does the opposite — it raises internal pressure, raising the boiling point of water inside well above 100°C, cooking food faster.",
    },
    practiceQuestions: [
      {
        id: 'pressure-boiling-point-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does a pressure cooker cook food faster than an ordinary pot?',
        options: [
          { id: 'a', text: 'The higher internal pressure raises the boiling point of water, so cooking happens at a higher temperature.' },
          { id: 'b', text: 'Pressure has no effect on boiling point.' },
          { id: 'c', text: 'Pressure cookers use a different heat source entirely.' },
          { id: 'd', text: 'Pressure cookers lower the boiling point of water.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what pressure does to the temperature at which water boils.'],
        explanation: 'Increased pressure inside the cooker raises the boiling point of water well above 100°C, so food cooks at a hotter temperature and finishes faster.',
      },
    ],
    commonMistake:
      "Assuming melting point ALWAYS increases with pressure, like boiling point generally does — water is " +
      "a notable exception, where increased pressure actually LOWERS its melting point slightly (related " +
      "to ice being less dense than liquid water).",
    quickReview: [
      'Boiling point generally rises with increased pressure, falls with decreased pressure.',
      "Melting point usually rises slightly with pressure — but water is a notable exception (it falls).",
      'Example: high-altitude cooking (lower boiling point) vs. pressure cookers (higher boiling point).',
    ],
  },
};
