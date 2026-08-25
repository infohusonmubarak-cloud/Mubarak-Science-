import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 4 — Sources of Energy and
// Environmental Impacts. Matches the textbook's section list: energy
// demand and crisis; sources of energy; non-renewable sources;
// renewable sources; environmental impacts and consequences.
export const chapter4CEnergyConcepts: Record<string, Concept> = {
  'energy-demand-and-crisis': {
    slug: 'energy-demand-and-crisis',
    title: 'Energy Demand and Crisis',
    difficulty: 'medium',
    simpleExplanation:
      "The world's energy demand grows every year, driven by population growth, industrialization, and rising " +
      'living standards — but the supply of easily-accessible fossil fuels is limited, creating an ongoing ' +
      '"energy crisis" of needing more energy than can be sustainably or affordably supplied.',
    whyItMatters:
      'Understanding how fast energy demand grows — and why supply struggles to keep up — is the starting point ' +
      'for every decision about which energy sources to invest in and how urgently.',
    formulaSlug: 'energy-demand-growth-formula',
    workedExample: {
      id: 'energy-demand-worked-1',
      title: 'Project future energy demand',
      problemStatement: "A country's energy demand is currently 500 MW, growing at 5% per year. Estimate its demand after 10 years.",
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'D₀=500 MW,  r=0.05,  t=10 years', explanation: 'Current demand, growth rate as a decimal, and the number of years.' },
        { step: 2, instruction: 'Apply the compound growth formula.', math: 'D = D₀(1+r)ᵗ = 500(1.05)^10', explanation: 'Substitute the known values.' },
        { step: 3, instruction: 'Compute (1.05)^10.', math: '(1.05)^10 ≈ 1.6289', explanation: 'Each year multiplies demand by 1.05.' },
        { step: 4, instruction: 'Compute the final demand.', math: 'D ≈ 500 × 1.6289 ≈ 814.4 MW', explanation: 'Multiply through to get the projected demand.' },
      ],
      finalAnswer: 'D ≈ 814.4 MW after 10 years.',
    },
    whyItWorks:
      'Just like compound interest on a savings account, a roughly constant percentage growth rate compounds — ' +
      'each year\'s demand becomes the new base for the following year\'s growth — producing the same ' +
      '(1+r)ᵗ multiplicative pattern seen in any compound growth process.',
    realLifeExample: {
      title: "A growing city's electricity grid",
      scenario: 'A rapidly growing city adds new homes, factories, and appliances every year, steadily ' +
        'increasing its total electricity demand.',
      explanation: "Utility companies use exactly this kind of compound-growth projection to plan how much " +
        "new generating capacity they will need to build over the coming decade.",
    },
    practiceQuestions: [
      {
        id: 'energy-demand-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "A region's energy demand is currently 200 MW, growing at 8% per year. Estimate its demand after 5 years.",
        hints: ['D = D₀(1+r)ᵗ, with r=0.08 and t=5.'],
        correctAnswer: 293.9,
        tolerance: 1,
        explanation: 'D = 200(1.08)^5 ≈ 200 × 1.4693 ≈ 293.9 MW.',
      },
    ],
    commonMistake:
      'Assuming energy demand grows by a constant AMOUNT each year (like adding the same number of MW every ' +
      'year) rather than a constant PERCENTAGE — real demand growth compounds, just like interest.',
    quickReview: [
      'D = D₀(1+r)ᵗ — the same compound-growth pattern as compound interest.',
      'Driven by population growth, industrialization, and rising living standards.',
      'The "energy crisis" is the gap between growing demand and limited, sustainable supply.',
    ],
  },

  'sources-of-energy-overview': {
    slug: 'sources-of-energy-overview',
    title: 'Sources of Energy — Overview',
    difficulty: 'easy',
    simpleExplanation:
      'Energy sources are classified along two key lines: renewable (naturally replenished, like sunlight and ' +
      'wind) versus non-renewable (finite, taking millions of years to form, like coal and oil), and primary ' +
      '(used directly, like burning wood) versus secondary (converted into a more usable form, like electricity).',
    whyItMatters:
      'This classification is the framework the rest of the chapter builds on — every specific energy source ' +
      'discussed next fits into exactly one of these categories, shaping how it can be used and how quickly it can run out.',
    workedExample: {
      id: 'sources-overview-worked-1',
      title: 'Classify several energy sources',
      problemStatement: 'Classify coal, solar power, and electricity generated from a coal power plant, using the renewable/non-renewable and primary/secondary distinctions.',
      steps: [
        { step: 1, instruction: 'Classify coal.', math: 'Coal: non-renewable, primary', explanation: 'Coal took millions of years to form (non-renewable) and is used directly as a fuel (primary).' },
        { step: 2, instruction: 'Classify solar power.', math: 'Sunlight: renewable, primary', explanation: 'The Sun continuously replenishes this energy (renewable), and sunlight itself is the direct source (primary).' },
        { step: 3, instruction: 'Classify the electricity generated.', math: 'Electricity from coal: secondary', explanation: 'Electricity is not found in nature — it is converted from a primary source (here, coal) — making it a secondary energy form.' },
      ],
      finalAnswer: 'Coal: non-renewable, primary. Sunlight: renewable, primary. Electricity (from coal): secondary.',
    },
    whyItWorks:
      'These classifications track two genuinely different physical facts — how quickly a source replenishes ' +
      'itself in nature (renewable vs. non-renewable), and whether it is used as found or converted into ' +
      'another form first (primary vs. secondary) — so a single source can be described by both at once.',
    realLifeExample: {
      title: "A household's mixed energy use",
      scenario: 'A household might cook with natural gas (primary, non-renewable) while its rooftop solar ' +
        'panels (primary, renewable) generate electricity (secondary) used to charge an electric car.',
      explanation: "This single household illustrates all four classification categories at once, showing how " +
        "they describe different aspects of the same everyday energy use.",
    },
    practiceQuestions: [
      {
        id: 'sources-overview-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which pair correctly classifies natural gas?',
        hints: ['Natural gas took millions of years to form and is burned directly.'],
        options: [
          { id: 'a', text: 'Non-renewable, primary' },
          { id: 'b', text: 'Renewable, primary' },
          { id: 'c', text: 'Non-renewable, secondary' },
          { id: 'd', text: 'Renewable, secondary' },
        ],
        correctOptionId: 'a',
        explanation: 'Natural gas is a fossil fuel (non-renewable, taking millions of years to form) used directly as a fuel (primary).',
      },
    ],
    commonMistake:
      'Assuming "renewable" always means "clean" or "impact-free" — a source can be renewable (like burning ' +
      'wood) while still having environmental impacts; renewable only describes how quickly it replenishes, not how clean it is.',
    quickReview: [
      'Renewable: naturally replenished. Non-renewable: finite, slow to form.',
      'Primary: used directly. Secondary: converted from a primary source (e.g. electricity).',
      'A source is classified along BOTH lines at once.',
    ],
  },

  'non-renewable-energy-sources': {
    slug: 'non-renewable-energy-sources',
    title: 'Non-Renewable Sources of Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Non-renewable sources — coal, oil, natural gas, and nuclear fuel — release large amounts of energy but ' +
      'exist in finite supply, forming over millions of years and being used up far faster than they can be replaced.',
    whyItMatters:
      'These sources still supply most of the world\'s energy today, so understanding how much energy they ' +
      'release — and the fact that supply is genuinely limited — is essential to understanding the energy crisis.',
    formulaSlug: 'calorific-value-formula',
    workedExample: {
      id: 'non-renewable-worked-1',
      title: 'Find the energy released by burning coal',
      problemStatement: 'Find the energy released by completely burning 2 kg of coal, which has a calorific value of 30 MJ/kg.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'm=2 kg,  q=30 MJ/kg', explanation: 'Mass of fuel and its calorific value.' },
        { step: 2, instruction: 'Apply the calorific value formula.', math: 'E = mq = 2 × 30', explanation: 'Multiply mass by calorific value.' },
        { step: 3, instruction: 'Compute the result.', math: 'E = 60 MJ', explanation: 'Total energy released by burning the coal.' },
      ],
      finalAnswer: 'E = 60 MJ.',
    },
    whyItWorks:
      "A fuel's calorific value is, by definition, the energy released per kilogram when it is burned — so " +
      'multiplying by however many kilograms are actually burned scales that per-kilogram energy up to the ' +
      'total energy released.',
    realLifeExample: {
      title: "A power plant's daily coal consumption",
      scenario: 'A coal-fired power plant burns a known mass of coal each day to generate electricity for a city.',
      explanation: "Engineers use this exact formula to calculate the total thermal energy released daily, " +
        "which then determines how much electrical power the plant can generate.",
    },
    practiceQuestions: [
      {
        id: 'non-renewable-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the energy released by burning 5 kg of petrol, which has a calorific value of 45 MJ/kg.',
        hints: ['E = mq.'],
        correctAnswer: 225,
        explanation: 'E = 5 × 45 = 225 MJ.',
      },
    ],
    commonMistake:
      "Assuming all fuels release the same energy per kilogram — different fuels have very different calorific " +
      "values (coal, oil, and natural gas all differ), so q must always be looked up for the specific fuel in question.",
    quickReview: [
      'E = mq — total energy from mass times calorific value.',
      'Coal, oil, natural gas, and nuclear fuel are the main non-renewable sources.',
      'Finite supply: forms over millions of years, used far faster than it replenishes.',
    ],
  },

  'renewable-energy-sources': {
    slug: 'renewable-energy-sources',
    title: 'Renewable Sources of Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Renewable sources — solar, wind, hydroelectric, geothermal, and biomass — are naturally replenished on a ' +
      'human timescale, offering an ongoing supply of energy that does not run out the way fossil fuels do.',
    whyItMatters:
      'As non-renewable supplies dwindle and their environmental costs grow clearer, renewable sources are the ' +
      'primary long-term answer to sustaining the world\'s growing energy demand.',
    formulaSlug: 'wind-power-formula',
    workedExample: {
      id: 'renewable-worked-1',
      title: 'Find the power available from a wind turbine',
      problemStatement: 'A wind turbine has blades of radius 20 m, sweeping through air of density 1.2 kg/m³, in a wind of speed 10 m/s. Find the power available in the wind.',
      steps: [
        { step: 1, instruction: 'Find the swept area.', math: 'A = πr² = π(20²) ≈ 1256.6 m²', explanation: 'The blades sweep out a circle as they rotate.' },
        { step: 2, instruction: 'Apply the wind power formula.', math: 'P = ½ρAv³ = 0.5(1.2)(1256.6)(10³)', explanation: 'Substitute density, area, and wind speed cubed.' },
        { step: 3, instruction: 'Compute the result.', math: 'P = 0.5(1.2)(1256.6)(1000) ≈ 753980 W', explanation: 'Multiply through, remembering v³=10³=1000.' },
      ],
      finalAnswer: 'P ≈ 754000 W (about 754 kW).',
    },
    whyItWorks:
      "The kinetic energy in a mass of moving air is ½mv², and the mass of air passing through the turbine's " +
      'swept area every second is ρAv (density × area × speed) — combining these, the power (energy per second) ' +
      'works out to ½ρAv³, which is why wind power grows so steeply with wind speed.',
    realLifeExample: {
      title: 'Why wind farms are built in especially windy locations',
      scenario: 'Wind farm developers carefully choose sites with consistently high average wind speeds, even ' +
        'if it means building far from cities.',
      explanation: 'Because power depends on the CUBE of wind speed, even a modest increase in average wind ' +
        'speed dramatically increases the power a turbine can generate — making site selection critical.',
    },
    practiceQuestions: [
      {
        id: 'renewable-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A wind turbine has blades of radius 10 m, air density 1.2 kg/m³, and wind speed 8 m/s. Find the power available, in kilowatts.',
        hints: ['A = πr². P = ½ρAv³. Convert the final answer from watts to kilowatts by dividing by 1000.'],
        correctAnswer: 96.5,
        tolerance: 1,
        explanation: 'A = π(10²) ≈ 314.2 m². P = 0.5(1.2)(314.2)(8³) = 0.5(1.2)(314.2)(512) ≈ 96500 W ≈ 96.5 kW.',
      },
    ],
    commonMistake:
      'Forgetting that wind power depends on the CUBE of wind speed, not the speed itself — doubling the wind ' +
      'speed multiplies the available power by a factor of 8, not 2.',
    quickReview: [
      'P = ½ρAv³ — wind power grows with the cube of wind speed.',
      'Solar, wind, hydro, geothermal, and biomass are the main renewable sources.',
      'Naturally replenished, offering an ongoing (not finite) supply.',
    ],
  },

  'environmental-impacts-of-energy-use': {
    slug: 'environmental-impacts-of-energy-use',
    title: 'Environmental Impacts and Consequences',
    difficulty: 'medium',
    simpleExplanation:
      'Burning fossil fuels releases carbon dioxide and other pollutants, contributing to the greenhouse effect, ' +
      'global warming, acid rain, and air pollution — consequences that scale directly with how much fuel is burned.',
    whyItMatters:
      'These consequences are the direct motivation behind the shift toward renewable energy — quantifying them ' +
      'shows exactly how energy choices connect to environmental outcomes.',
    formulaSlug: 'co2-emissions-formula',
    workedExample: {
      id: 'environmental-impacts-worked-1',
      title: 'Find the CO2 emissions from burning coal',
      problemStatement: 'Find the mass of CO2 released by burning 1000 kg of coal, given an emission factor of 2.5 kg CO2 per kg of coal.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'm_fuel=1000 kg,  EF=2.5 kg CO2/kg fuel', explanation: 'Mass of fuel burned and its emission factor.' },
        { step: 2, instruction: 'Apply the CO2 emissions formula.', math: 'm_CO2 = m_fuel × EF = 1000 × 2.5', explanation: 'Multiply mass of fuel by the emission factor.' },
        { step: 3, instruction: 'Compute the result.', math: 'm_CO2 = 2500 kg', explanation: 'Equivalent to 2.5 tonnes of CO2.' },
      ],
      finalAnswer: 'm_CO2 = 2500 kg (2.5 tonnes).',
    },
    whyItWorks:
      'An emission factor is, by definition, how much CO2 is released per kilogram of a specific fuel burned — ' +
      'so multiplying by the total mass of fuel burned scales that per-kilogram figure up to the total emissions.',
    realLifeExample: {
      title: "A country's national carbon footprint",
      scenario: 'A country tracks its total annual CO2 emissions by combining the mass of every fossil fuel it ' +
        'burns — coal, oil, and natural gas — each with its own emission factor.',
      explanation: 'This same multiplication (mass of fuel × emission factor), summed across every fuel type, ' +
        'is exactly how national and global carbon emissions are estimated and reported.',
    },
    practiceQuestions: [
      {
        id: 'environmental-impacts-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the mass of CO2 released by burning 500 kg of petrol, given an emission factor of 3.15 kg CO2 per kg of petrol.',
        hints: ['m_CO2 = m_fuel × EF.'],
        correctAnswer: 1575,
        explanation: 'm_CO2 = 500 × 3.15 = 1575 kg.',
      },
    ],
    commonMistake:
      'Assuming every fuel has the same emission factor — different fuels release different amounts of CO2 per ' +
      'kilogram burned (natural gas generally releases less than coal for the same energy produced), so the emission factor must match the specific fuel.',
    quickReview: [
      'm_CO2 = m_fuel × EF — emissions scale directly with fuel burned.',
      'Fossil fuel combustion drives the greenhouse effect, global warming, and acid rain.',
      'Different fuels have different emission factors.',
    ],
  },
};
