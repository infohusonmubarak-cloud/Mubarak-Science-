import type { Concept } from '@/types/content';

export const chapter6AHeatConcepts: Record<string, Concept> = {
  'heat-and-temperature-a-level': {
    slug: 'heat-and-temperature-a-level',
    title: 'Heat and Temperature',
    difficulty: 'easy',
    simpleExplanation:
      'Heat and temperature are related but different: temperature measures the average kinetic ' +
      'energy of the particles in a substance (how hot or cold it feels), while heat is the energy ' +
      'that flows from a hotter object to a colder one because of a temperature difference. Heat ' +
      'always flows from hot to cold, never the other way, until the two reach the same temperature.',
    whyItMatters:
      'Confusing heat and temperature is one of the most common misunderstandings in physics — a ' +
      'huge iceberg (low temperature) can contain far more total heat energy than a lit match (high ' +
      'temperature), because heat depends on the total amount of matter, not just how hot it is.',
    workedExample: {
      id: 'heat-temp-worked-1',
      title: 'Explain which contains more heat energy',
      problemStatement: 'A cup of tea at 90°C and a swimming pool at 25°C. Explain which one contains more total heat (thermal) energy, and why.',
      steps: [
        { step: 1, instruction: "Compare the two objects' temperatures.", explanation: 'The tea is much hotter (90°C) than the pool (25°C).' },
        { step: 2, instruction: "Compare the two objects' masses.", explanation: 'The swimming pool contains a vastly greater mass of water than a single cup of tea.' },
        { step: 3, instruction: 'Combine both factors to reach a conclusion.', explanation: 'Even though the tea is hotter, the pool contains such an enormous mass of water that its TOTAL heat energy is far greater than the small cup of hot tea.' },
      ],
      finalAnswer: "The swimming pool contains far more total heat energy, despite its lower temperature, because heat depends on mass as well as temperature.",
    },
    whyItWorks:
      'Temperature is an intensive property (it does not depend on the AMOUNT of substance), while ' +
      'heat energy is an extensive property (it scales directly with mass) — this is exactly why a ' +
      'small hot object can have less total heat energy than a much larger, cooler one.',
    realLifeExample: {
      title: 'Why a sparkler is safe to hold but a candle flame is not',
      scenario: 'A sparkler shoots off tiny, extremely hot (over 1000°C) sparks that land harmlessly on skin, while briefly touching a much "cooler" candle flame can burn.',
      explanation: "Each spark has an extremely tiny mass, so despite its very high temperature it carries very little total heat energy to transfer — while sustained contact with a flame transfers much more total heat.",
    },
    practiceQuestions: [
      {
        id: 'heat-temp-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which statement correctly distinguishes heat and temperature?',
        hints: ['Temperature is about "how hot"; heat is about total energy transferred.'],
        options: [
          { id: 'a', text: 'Heat and temperature are exactly the same thing' },
          { id: 'b', text: 'Temperature measures average particle kinetic energy; heat is energy transferred due to a temperature difference' },
          { id: 'c', text: 'Heat is always bigger than temperature' },
          { id: 'd', text: 'Temperature only applies to solids, heat only to liquids' },
        ],
        correctOptionId: 'b',
        explanation: 'Temperature measures how hot something is (average particle KE); heat is the energy that flows due to a temperature difference — genuinely different physical quantities.',
      },
    ],
    commonMistake:
      "Assuming a hotter object always contains more heat energy — the AMOUNT of the substance " +
      "matters just as much; a small hot object can hold less total heat than a large cooler one.",
    quickReview: [
      'Temperature: a measure of average particle kinetic energy (how hot/cold).',
      'Heat: energy that flows from hot to cold due to a temperature difference.',
      'A larger, cooler object can contain more total heat energy than a smaller, hotter one.',
    ],
  },

  'specific-heat-capacity-a-level': {
    slug: 'specific-heat-capacity-a-level',
    title: 'Specific Heat Capacity',
    difficulty: 'medium',
    simpleExplanation:
      "Specific heat capacity (c) is the amount of heat energy needed to raise the temperature of " +
      '1 kg of a substance by 1°C (or 1 K). The heat needed for any change is Q = mcΔT — different ' +
      'materials have very different specific heat capacities, meaning some heat up (or cool down) ' +
      'much faster than others.',
    whyItMatters:
      "Water has an unusually high specific heat capacity, which is why it's used in central heating " +
      "systems and car radiators, and why coastal regions have milder climates than inland areas — " +
      'the huge ocean absorbs and releases heat slowly.',
    formulaSlug: 'specific-heat-capacity-formula-a-level',
    workedExample: {
      id: 'shc-worked-1',
      title: 'Find the heat energy needed to heat water',
      problemStatement: "Find the heat energy needed to raise the temperature of 2 kg of water by 30°C. Water's specific heat capacity is 4200 J/(kg·K).",
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Q = mcΔT', explanation: 'Heat energy depends on mass, specific heat capacity, and temperature change.' },
        { step: 2, instruction: 'Substitute the values.', math: 'Q = 2 × 4200 × 30', explanation: 'm = 2 kg, c = 4200 J/(kg·K), ΔT = 30°C (a 30-degree change is the same size in °C and K).' },
        { step: 3, instruction: 'Calculate.', math: 'Q = 252,000', explanation: '2 × 4200 × 30 = 252,000.' },
      ],
      finalAnswer: 'Q = 252,000 J (252 kJ)',
    },
    whyItWorks:
      'The formula scales heat energy directly with each of the three factors that matter: more ' +
      "mass needs more energy to heat throughout; a bigger required temperature change needs more " +
      'energy; and a material with a higher c inherently resists temperature change more, needing more energy per degree.',
    realLifeExample: {
      title: "Why sand gets hot but the sea stays cool",
      scenario: "On a sunny beach, the sand becomes painfully hot to walk on, while the sea remains comfortably cool.",
      explanation: "Sand has a much lower specific heat capacity than water, so the same amount of solar energy raises the sand's temperature far more than it raises the sea's temperature.",
    },
    practiceQuestions: [
      {
        id: 'shc-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the heat energy needed to raise the temperature of 0.5 kg of a metal (c = 900 J/(kg·K)) by 40°C.',
        hints: ['Q = mcΔT.', '0.5 × 900 × 40.'],
        correctAnswer: 18000,
        unit: 'J',
        explanation: 'Q = 0.5 × 900 × 40 = 18,000 J.',
      },
      {
        id: 'shc-pq-2',
        type: 'numeric',
        difficulty: 'hard',
        prompt: '5000 J of heat raises the temperature of 1 kg of a liquid by 2°C. Find the specific heat capacity of the liquid.',
        hints: ['Rearrange Q = mcΔT to c = Q/(mΔT).', '5000 / (1 × 2).'],
        correctAnswer: 2500,
        unit: 'J/(kg·K)',
        explanation: 'c = Q/(mΔT) = 5000/(1×2) = 2500 J/(kg·K).',
      },
    ],
    commonMistake:
      "Confusing specific heat capacity with temperature — a substance's specific heat capacity is " +
      "a fixed material property (like density), not something that changes with how hot the " +
      'substance currently is.',
    quickReview: [
      'Q = mcΔT',
      "Specific heat capacity (c) is a material property: heat needed to raise 1 kg by 1°C.",
      "Water's unusually high c is why it resists temperature change so well.",
    ],
  },

  'types-of-thermometer-a-level': {
    slug: 'types-of-thermometer-a-level',
    title: 'Types of Thermometer',
    difficulty: 'easy',
    simpleExplanation:
      'A thermometer measures temperature by using some property of a material that changes ' +
      'predictably with temperature. A liquid-in-glass thermometer uses the thermal expansion of a ' +
      'liquid (like mercury or alcohol) in a thin tube; a thermocouple uses a tiny voltage that ' +
      'appears between two different metals at different temperatures; an infrared thermometer ' +
      'measures the infrared radiation an object emits, without touching it at all.',
    whyItMatters:
      "Different thermometer types suit different situations — a liquid-in-glass thermometer is " +
      "cheap and simple for everyday use, while a thermocouple can survive extreme industrial " +
      "temperatures, and an infrared thermometer can measure something too hot, too far away, or " +
      'too dangerous to touch directly.',
    workedExample: {
      id: 'thermometer-worked-1',
      title: 'Choose the right thermometer for a situation',
      problemStatement: 'A factory needs to measure the temperature inside a furnace running at 1200°C. Explain why a normal liquid-in-glass thermometer would not work, and suggest a better choice.',
      steps: [
        { step: 1, instruction: "Consider the liquid-in-glass thermometer's limits.", explanation: "Mercury boils at about 357°C and most thermometer glass would melt or shatter well before 1200°C — a liquid-in-glass thermometer simply cannot survive this environment." },
        { step: 2, instruction: 'Consider alternative thermometer types.', explanation: 'A thermocouple (which uses a voltage, not a physical liquid or glass) can be made from metals that withstand extremely high temperatures, or an infrared thermometer could measure the temperature without needing to touch the furnace at all.' },
      ],
      finalAnswer: 'A thermocouple (or an infrared thermometer) should be used instead, since a liquid-in-glass thermometer cannot survive 1200°C.',
    },
    whyItWorks:
      'Each thermometer type relies on a different physical effect that reliably changes with ' +
      'temperature — thermal expansion, an electrical voltage, or emitted radiation — so choosing ' +
      'the right one is really about matching the physical effect to what the situation can survive or requires.',
    realLifeExample: {
      title: 'A forehead thermometer',
      scenario: 'A doctor uses a non-contact infrared thermometer to quickly check a patient\'s temperature.',
      explanation: 'This avoids any physical contact (useful for hygiene and speed) by measuring the infrared radiation naturally emitted by the skin, which increases predictably with body temperature.',
    },
    practiceQuestions: [
      {
        id: 'thermometer-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which type of thermometer measures temperature without touching the object at all?',
        hints: ['Think about which physical effect does not require direct contact.'],
        options: [
          { id: 'a', text: 'Liquid-in-glass thermometer' },
          { id: 'b', text: 'Thermocouple' },
          { id: 'c', text: 'Infrared thermometer' },
          { id: 'd', text: 'All of these require contact' },
        ],
        correctOptionId: 'c',
        explanation: 'An infrared thermometer detects the infrared radiation an object naturally emits, allowing a temperature measurement with no physical contact.',
      },
    ],
    commonMistake:
      'Assuming all thermometers work the same way — different designs rely on entirely different ' +
      'physical effects (expansion, voltage, or radiation), which is exactly why some suit extreme ' +
      'or hands-off situations far better than others.',
    quickReview: [
      'Liquid-in-glass: uses thermal expansion of a liquid.',
      'Thermocouple: uses a voltage generated between two different metals.',
      'Infrared: measures emitted radiation, with no contact needed.',
    ],
  },

  'temperature-scales-a-level': {
    slug: 'temperature-scales-a-level',
    title: 'Temperature Scales',
    difficulty: 'medium',
    simpleExplanation:
      'Temperature can be measured on several scales. Celsius (°C) sets 0° at the freezing point of ' +
      'water and 100° at its boiling point. Kelvin (K), the SI unit, starts at absolute zero (the ' +
      'coldest possible temperature) and uses the same size degree as Celsius: T(K) = T(°C) + 273. ' +
      'Fahrenheit (°F), used mainly in the United States, uses yet another zero point and degree size.',
    whyItMatters:
      'Kelvin is essential in physics because many formulas (like the gas laws) only work correctly ' +
      'with an absolute temperature scale that starts at true zero — using Celsius directly in those ' +
      'formulas gives wrong answers.',
    formulaSlug: 'temperature-conversion-formula',
    workedExample: {
      id: 'temp-scales-worked-1',
      title: 'Convert a temperature from Celsius to Kelvin',
      problemStatement: 'Convert 25°C to kelvin.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'T(K) = T(°C) + 273', explanation: 'Kelvin and Celsius use the same size degree, just shifted by 273.' },
        { step: 2, instruction: 'Substitute the value.', math: 'T(K) = 25 + 273', explanation: 'T(°C) = 25.' },
        { step: 3, instruction: 'Calculate.', math: 'T(K) = 298', explanation: '25 + 273 = 298.' },
      ],
      finalAnswer: 'T = 298 K',
    },
    whyItWorks:
      'Because a change of 1°C is defined to be exactly the same size as a change of 1 K, converting ' +
      'between the two scales is just a fixed shift (adding or subtracting 273) — no multiplication ' +
      'is needed, unlike converting to or from Fahrenheit.',
    realLifeExample: {
      title: 'Absolute zero',
      scenario: '0 K (about −273°C) is called absolute zero — the coldest temperature theoretically possible, where particles have the minimum possible kinetic energy.',
      explanation: 'Because Kelvin starts at this true physical zero, it is the scale scientists use whenever a formula depends on temperature being an absolute (never negative) quantity.',
    },
    practiceQuestions: [
      {
        id: 'temp-scales-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Convert 100°C (the boiling point of water) to kelvin.',
        hints: ['T(K) = T(°C) + 273.', '100 + 273.'],
        correctAnswer: 373,
        unit: 'K',
        explanation: 'T(K) = 100 + 273 = 373 K.',
      },
      {
        id: 'temp-scales-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Convert 20°C to degrees Fahrenheit.',
        hints: ['T(°F) = (9/5)T(°C) + 32.', '(9/5)×20 + 32.'],
        correctAnswer: 68,
        unit: '°F',
        explanation: 'T(°F) = (9/5)×20 + 32 = 36 + 32 = 68°F.',
      },
    ],
    commonMistake:
      'Using a negative Kelvin temperature, or forgetting to add 273 before using temperature in a ' +
      'formula that requires an absolute scale — Kelvin temperatures are never negative in normal ' +
      'physical situations.',
    quickReview: [
      'T(K) = T(°C) + 273',
      'T(°F) = (9/5)T(°C) + 32',
      'Kelvin starts at absolute zero — the scale used in most physics formulas.',
    ],
  },

  'thermal-expansion-a-level': {
    slug: 'thermal-expansion-a-level',
    title: 'Thermal Expansion of Substances',
    difficulty: 'medium',
    simpleExplanation:
      'Most substances expand when heated and contract when cooled, because their particles vibrate ' +
      'more (and push each other slightly further apart) at higher temperatures. For a solid, the ' +
      'change in length is given by ΔL = L₀αΔT, where α is a material-specific constant.',
    whyItMatters:
      'Thermal expansion has to be accounted for in almost all engineering — bridges, railway ' +
      'tracks, and power lines are all deliberately designed with gaps or slack to handle this expansion safely.',
    formulaSlug: 'thermal-expansion-formula',
    workedExample: {
      id: 'thermal-expansion-worked-1',
      title: 'Find the expansion of a steel rail',
      problemStatement: 'A steel rail is 20 m long at 10°C. If it heats up to 40°C, find its increase in length. Steel\'s coefficient of linear expansion α is 1.2 × 10⁻⁵ K⁻¹.',
      steps: [
        { step: 1, instruction: 'Find the temperature change.', math: 'ΔT = 40 − 10 = 30', explanation: 'The rail heats from 10°C to 40°C, a change of 30°C (equivalently 30 K).' },
        { step: 2, instruction: 'Write the formula.', math: 'ΔL = L₀αΔT', explanation: 'Change in length depends on original length, the material constant, and the temperature change.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'ΔL = 20 × 1.2×10⁻⁵ × 30', explanation: 'L₀ = 20 m, α = 1.2×10⁻⁵ K⁻¹, ΔT = 30 K.' },
        { step: 4, instruction: 'Finish the calculation.', math: 'ΔL = 0.0072', explanation: '20 × 1.2×10⁻⁵ × 30 = 0.0072.' },
      ],
      finalAnswer: 'ΔL = 0.0072 m (7.2 mm)',
    },
    whyItWorks:
      "A longer original length has more total material to expand, and a bigger temperature change " +
      "gives each part of the material more energy to push apart with — both effects multiply " +
      "together with the material's own expansion tendency (α) to give the total change in length.",
    realLifeExample: {
      title: 'Gaps in railway tracks and bridges',
      scenario: 'Railway tracks and long bridges are built with small gaps (expansion joints) between sections.',
      explanation: 'Without these gaps, thermal expansion on a hot day would cause the rails or bridge sections to push against each other with enormous force, potentially buckling or warping.',
    },
    practiceQuestions: [
      {
        id: 'thermal-expansion-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An aluminium rod is 5 m long at 15°C and heats to 35°C. Find its increase in length. (α for aluminium = 2.4 × 10⁻⁵ K⁻¹.)',
        hints: ['ΔL = L₀αΔT.', '5 × 2.4×10⁻⁵ × 20.'],
        correctAnswer: 0.0024,
        unit: 'm',
        explanation: 'ΔL = 5 × 2.4×10⁻⁵ × 20 = 0.0024 m (2.4 mm).',
      },
    ],
    commonMistake:
      'Assuming all materials expand by the same amount for the same temperature change — different ' +
      'materials have very different values of α, which is why bimetallic strips (two different ' +
      'metals bonded together) bend when heated, as one side expands more than the other.',
    quickReview: [
      'ΔL = L₀αΔT',
      'Most substances expand when heated, contract when cooled.',
      'Engineering structures need expansion joints to handle this safely.',
    ],
  },
};
