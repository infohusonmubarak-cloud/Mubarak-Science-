import type { Concept } from '@/types/content';

export const chapter4PowerConcepts: Record<string, Concept> = {
  'power-and-its-units': {
    slug: 'power-and-its-units',
    title: 'Power and Its Units',
    difficulty: 'easy',
    simpleExplanation:
      'Power is the rate at which work is done or energy is transferred — it tells you not just HOW MUCH ' +
      'energy is converted, but HOW QUICKLY. Its SI unit is the watt (W), equal to one joule per second.',
    whyItMatters:
      "Two machines can do the exact same amount of work, but the more powerful one does it faster — power " +
      "is what actually determines how quickly a task gets done, which is often what matters most " +
      "practically.",
    formulaSlug: 'power-formula',
    workedExample: {
      id: 'power-we-1',
      title: 'Calculating power',
      problemStatement: 'A motor does 6000 J of work in 12 seconds. Find its power output.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = W/t', explanation: 'W = 6000 J, t = 12 s.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'P = 6000/12 = 500 W', explanation: 'Divide work by time.' },
      ],
      finalAnswer: 'Power = 500 W.',
    },
    whyItWorks:
      "Dividing work (or energy) by the time it took to happen gives a rate — exactly parallel to how " +
      "dividing distance by time gives speed. A higher power rating simply means more energy converted per " +
      "second.",
    realLifeExample: {
      title: 'Comparing light bulbs',
      scenario: 'A 100 W bulb and a 10 W LED bulb can both light a room, but their power ratings are very different.',
      explanation: 'The 100 W bulb converts electrical energy into light (and heat) ten times faster than the 10 W LED — this is why the 100 W bulb uses far more electrical energy over the same time, even producing similar brightness, since much of its power output is wasted as heat rather than light.',
    },
    practiceQuestions: [
      {
        id: 'power-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A crane does 15,000 J of work lifting a load in 5 seconds. Find its power.',
        hints: ['P = W/t.'],
        correctAnswer: 3000,
        tolerance: 50,
        unit: 'W',
        explanation: 'P = 15,000/5 = 3000 W.',
      },
    ],
    commonMistake:
      "Confusing power with energy (or work) itself — power is the RATE of energy transfer, not the total " +
      "amount of energy; a low-power device running for a long time can transfer more total energy than a " +
      "high-power device running briefly.",
    quickReview: [
      'P = W/t: power is the rate of doing work (or transferring energy).',
      'SI unit: watt (W) = 1 J/s.',
      'Higher power means faster energy conversion, not necessarily more total energy.',
    ],
  },

  'efficiency-of-machines': {
    slug: 'efficiency-of-machines',
    title: 'Efficiency',
    difficulty: 'medium',
    simpleExplanation:
      'Efficiency measures what fraction of the energy supplied to a machine is actually converted into ' +
      'useful output, rather than being wasted (usually as heat due to friction or resistance). No real ' +
      'machine is 100% efficient.',
    whyItMatters:
      "Efficiency is a key measure of how well a machine performs — higher efficiency means less energy " +
      "wasted, which matters both for cost and environmental impact.",
    formulaSlug: 'efficiency-formula',
    workedExample: {
      id: 'efficiency-we-1',
      title: 'Calculating efficiency',
      problemStatement: 'An electric motor is supplied with 500 J of electrical energy and produces 350 J of useful mechanical work. Find its efficiency.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'η = (useful output / total input) × 100%', explanation: 'Useful output = 350 J, total input = 500 J.' },
        { step: 2, instruction: 'Substitute values.', math: 'η = (350/500) × 100%', explanation: 'Form the ratio first.' },
        { step: 3, instruction: 'Calculate.', math: 'η = 0.7 × 100% = 70%', explanation: 'Convert the decimal ratio to a percentage.' },
      ],
      finalAnswer: 'Efficiency = 70%.',
    },
    whyItWorks:
      "By the law of conservation of energy, no energy is truly destroyed — but not all of it emerges in " +
      "the intended, useful form; some is always converted to unwanted forms (usually heat from friction) " +
      "that cannot be used for the machine's intended purpose. Efficiency simply measures the useful " +
      "fraction of the total.",
    realLifeExample: {
      title: 'Why incandescent bulbs are inefficient',
      scenario: 'A traditional incandescent light bulb converts most of its electrical energy into heat, not light.',
      explanation: 'Incandescent bulbs are typically only about 5% efficient at producing light — the other 95% is wasted as heat, which is exactly why they have largely been replaced by far more efficient LED bulbs.',
    },
    practiceQuestions: [
      {
        id: 'efficiency-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A machine receives 800 J of input energy and produces 600 J of useful output. Find its efficiency.',
        hints: ['η = (useful output/total input) × 100%.'],
        correctAnswer: 75,
        tolerance: 1,
        unit: '%',
        explanation: 'η = (600/800) × 100% = 75%.',
      },
    ],
    commonMistake:
      "Assuming a machine could be 100% (or more) efficient — by the law of conservation of energy, output " +
      "can never exceed input, and in practice some energy is always lost to unwanted forms, so real " +
      "efficiency is always below 100%.",
    quickReview: [
      'η = (useful output/total input) × 100% measures energy conversion performance.',
      'No real machine achieves 100% efficiency — some energy is always wasted, usually as heat.',
      'Higher efficiency means less energy wasted for the same useful output.',
    ],
  },

  'hookes-law-and-spring-constant': {
    slug: 'hookes-law-and-spring-constant',
    title: "Hooke's Law and the Spring Constant",
    difficulty: 'medium',
    simpleExplanation:
      "Hooke's law states that, within its elastic limit, the force needed to stretch or compress a spring " +
      "is directly proportional to the extension or compression — doubling the extension doubles the force " +
      "needed. The spring constant (k) measures how stiff the spring is.",
    whyItMatters:
      "Hooke's law is fundamental to understanding springs, and by extension, many other elastic materials " +
      "and structures that behave similarly within certain limits — from car suspensions to weighing " +
      "scales.",
    formulaSlug: 'hookes-law-formula',
    workedExample: {
      id: 'hookes-law-we-1',
      title: "Finding a spring's extension",
      problemStatement: 'A spring has a spring constant of 250 N/m. Find its extension when a 15 N force is applied.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for x.', math: 'x = F/k', explanation: 'F = 15 N, k = 250 N/m.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'x = 15/250 = 0.06 m', explanation: 'Divide force by spring constant.' },
      ],
      finalAnswer: 'Extension = 0.06 m (6 cm).',
    },
    whyItWorks:
      "Within the elastic limit, a spring's molecular structure stretches in a way that produces a " +
      "restoring force directly proportional to the deformation — beyond the elastic limit, this " +
      "proportionality breaks down and the spring may be permanently deformed.",
    realLifeExample: {
      title: 'Spring weighing scales',
      scenario: 'A simple spring scale measures weight by how far a spring stretches when an object is hung from it.',
      explanation: "Because extension is directly proportional to force (weight) via Hooke's law, the scale can be calibrated with a simple linear scale — twice the weight produces exactly twice the extension.",
    },
    practiceQuestions: [
      {
        id: 'hookes-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A spring with spring constant 400 N/m is stretched by 0.05 m. Find the force required.',
        hints: ['F = kx.'],
        correctAnswer: 20,
        tolerance: 0.5,
        unit: 'N',
        explanation: 'F = 400 × 0.05 = 20 N.',
      },
    ],
    commonMistake:
      "Applying Hooke's law beyond the spring's elastic limit — past this point, the relationship between " +
      "force and extension is no longer proportional, and the spring may not return to its original shape.",
    quickReview: [
      'F = kx: force is directly proportional to extension, within the elastic limit.',
      'k (spring constant) measures stiffness — a larger k means a stiffer spring.',
      "Beyond the elastic limit, Hooke's law no longer applies.",
    ],
  },

  'elastic-potential-energy-in-a-spring': {
    slug: 'elastic-potential-energy-in-a-spring',
    title: 'Elastic Potential Energy in a Spring',
    difficulty: 'medium',
    simpleExplanation:
      'When a spring is stretched or compressed, it stores energy — called elastic potential energy — ' +
      'which can later be released and converted into other forms, such as kinetic energy, as the spring ' +
      'returns to its natural length.',
    whyItMatters:
      "Elastic potential energy is a key part of understanding how energy is stored and transferred in " +
      "systems like archery bows, catapults, trampolines, and mechanical clocks.",
    formulaSlug: 'elastic-potential-energy-formula',
    workedExample: {
      id: 'elastic-pe-we-1',
      title: 'Finding elastic potential energy',
      problemStatement: 'A spring with spring constant 300 N/m is compressed by 0.08 m. Find the elastic potential energy stored.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'E = ½kx²', explanation: 'k = 300 N/m, x = 0.08 m.' },
        { step: 2, instruction: 'Calculate x².', math: 'x² = 0.08² = 0.0064 m²', explanation: 'Square the extension/compression first.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'E = ½ × 300 × 0.0064 = 0.96 J', explanation: 'Multiply ½, k, and x² together.' },
      ],
      finalAnswer: 'Elastic potential energy = 0.96 J.',
    },
    whyItWorks:
      "Since the force needed to stretch a spring increases as it stretches (F = kx), the energy stored " +
      "(work done stretching it) is not simply force × distance, but must account for this gradually " +
      "increasing force — integrating this relationship produces the factor of ½ and the squared term " +
      "in the energy formula.",
    realLifeExample: {
      title: 'How an archery bow launches an arrow',
      scenario: 'Drawing a bow stores energy, which is then rapidly converted into the kinetic energy of the launched arrow.',
      explanation: "As the archer draws the bow, they do work against the bow's elastic restoring force, storing elastic potential energy — releasing the string converts this stored energy almost entirely into the arrow's kinetic energy, propelling it forward.",
    },
    practiceQuestions: [
      {
        id: 'elastic-pe-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A spring with spring constant 500 N/m is stretched by 0.10 m. Find the elastic potential energy stored.',
        hints: ['E = ½kx².'],
        correctAnswer: 2.5,
        tolerance: 0.1,
        unit: 'J',
        explanation: 'E = ½ × 500 × 0.10² = ½ × 500 × 0.01 = 2.5 J.',
      },
    ],
    commonMistake:
      "Forgetting to square the extension x, or forgetting the factor of ½ — since the restoring force " +
      "increases as the spring stretches, the stored energy is NOT simply force × extension.",
    quickReview: [
      'E = ½kx² gives the elastic potential energy stored in a stretched/compressed spring.',
      'This energy can convert into other forms (like kinetic energy) as the spring relaxes.',
      'The factor of ½ and the squared x account for the increasing force as the spring stretches.',
    ],
  },

  'sources-of-energy-b-level': {
    slug: 'sources-of-energy-b-level',
    title: 'Sources of Energy',
    difficulty: 'easy',
    simpleExplanation:
      'Energy for human use comes from many sources, broadly grouped into non-renewable sources (fossil ' +
      'fuels like coal, oil, and natural gas, which take millions of years to form and are being used up ' +
      'far faster than they form) and renewable sources (solar, wind, hydroelectric, geothermal, and ' +
      'biomass, which naturally replenish on a human timescale).',
    whyItMatters:
      "Understanding the difference between renewable and non-renewable sources is essential for making " +
      "informed decisions about energy use, sustainability, and reducing environmental impact.",
    whyItWorks:
      "Non-renewable sources formed over geological timescales (millions of years) from ancient organic " +
      "matter, so using them faster than they can ever reform effectively depletes a fixed, finite supply. " +
      "Renewable sources instead draw on ongoing natural processes (sunlight, wind, water cycles) that " +
      "continuously replenish themselves, making them sustainable over the long term.",
    realLifeExample: {
      title: 'Solar panels versus a coal power plant',
      scenario: 'A coal power plant burns a finite fuel supply; a solar farm generates electricity from ongoing sunlight.',
      explanation: 'The coal plant depletes a limited underground resource that took millions of years to form and releases stored carbon as it burns, while the solar farm draws on a continuously renewed energy source (sunlight) without depleting any finite reserve.',
    },
    practiceQuestions: [
      {
        id: 'sources-of-energy-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is a renewable source of energy?',
        options: [
          { id: 'a', text: 'Coal' },
          { id: 'b', text: 'Natural gas' },
          { id: 'c', text: 'Solar power' },
          { id: 'd', text: 'Petroleum (oil)' },
        ],
        correctOptionId: 'c',
        hints: ['Which of these sources naturally replenishes on a human timescale?'],
        explanation: 'Solar power draws on ongoing sunlight, which continuously replenishes — unlike fossil fuels, which formed over millions of years and are not replenished on any practical timescale.',
      },
    ],
    commonMistake:
      "Assuming 'renewable' means 'has no environmental impact at all' — renewable sources still have " +
      "environmental and land-use considerations (e.g. manufacturing solar panels, habitat effects of " +
      "hydroelectric dams); 'renewable' specifically refers to the source naturally replenishing, not to " +
      "having zero impact.",
    quickReview: [
      'Non-renewable sources (fossil fuels): finite, form over millions of years, being depleted.',
      'Renewable sources (solar, wind, hydro, geothermal, biomass): naturally replenish on a human timescale.',
      "'Renewable' refers to replenishment, not zero environmental impact.",
    ],
  },
};
