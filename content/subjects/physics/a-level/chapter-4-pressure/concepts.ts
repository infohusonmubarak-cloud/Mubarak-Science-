import type { Concept } from '@/types/content';

export const chapter4APressureConcepts: Record<string, Concept> = {
  'pressure-force-and-area-a-level': {
    slug: 'pressure-force-and-area-a-level',
    title: 'Pressure, Force and Area',
    difficulty: 'easy',
    simpleExplanation:
      'Pressure measures how concentrated a force is, over the area it acts on: P = F/A. The same ' +
      'force pushed through a smaller area produces a much bigger pressure, and vice versa.',
    whyItMatters:
      'Pressure — not force alone — is what determines whether something cuts, punctures, or ' +
      'supports weight without sinking, which is why so much everyday design (knife blades, snow ' +
      'shoes, tyres) is really about controlling pressure.',
    formulaSlug: 'pressure-force-area-formula',
    workedExample: {
      id: 'pressure-force-area-worked-1',
      title: 'Find the pressure under a table leg',
      problemStatement: 'A table leg exerts a force of 200 N on the floor through a contact area of 0.002 m². Find the pressure on the floor.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = F/A', explanation: 'Pressure is force divided by the area it acts over.' },
        { step: 2, instruction: 'Substitute the values.', math: 'P = 200 / 0.002', explanation: 'F = 200 N, A = 0.002 m².' },
        { step: 3, instruction: 'Calculate.', math: 'P = 100,000', explanation: '200 divided by 0.002.' },
      ],
      finalAnswer: 'P = 100,000 Pa = 100 kPa',
    },
    whyItWorks:
      'Dividing the total force by the area it is spread over gives exactly how much force acts on ' +
      'each individual unit of area — which is the definition of pressure.',
    realLifeExample: {
      title: 'Why snow shoes work',
      scenario: 'A person wearing snow shoes can walk on soft snow without sinking, while the same person in regular boots sinks straight in.',
      explanation: "Snow shoes spread the person's weight (the same force) over a much larger area, greatly reducing the pressure on the snow beneath each footstep.",
    },
    practiceQuestions: [
      {
        id: 'pressure-force-area-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A force of 60 N acts over an area of 0.5 m². Find the pressure.',
        hints: ['P = F/A.', '60/0.5.'],
        correctAnswer: 120,
        unit: 'Pa',
        explanation: 'P = 60/0.5 = 120 Pa.',
      },
      {
        id: 'pressure-force-area-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A drawing pin has a point of area 0.000001 m² (1 mm²), pushed in with a force of 5 N. Find the pressure at the point.',
        hints: ['P = F/A.', '5/0.000001.'],
        correctAnswer: 5000000,
        unit: 'Pa',
        explanation: 'P = 5/0.000001 = 5,000,000 Pa — an enormous pressure from a small force concentrated on a tiny area.',
      },
    ],
    commonMistake:
      'Confusing force and pressure — a very large force spread over a huge area can produce a ' +
      'small pressure, while a small force concentrated on a tiny area (like a needle point) can ' +
      'produce an enormous pressure.',
    quickReview: [
      'P = F/A',
      'Pressure is measured in pascals (Pa), where 1 Pa = 1 N/m².',
      'A smaller area concentrates the same force into a much bigger pressure.',
    ],
  },

  'pressure-in-fluids-a-level': {
    slug: 'pressure-in-fluids-a-level',
    title: 'Pressure in Fluids',
    difficulty: 'medium',
    simpleExplanation:
      'Within a liquid, pressure increases with depth: P = hρg. This is because a deeper point has ' +
      'a taller, heavier column of liquid pressing down on it. Atmospheric pressure works the same ' +
      'way — it is the weight of the whole column of air above pressing down, which is why ' +
      'atmospheric pressure decreases with altitude.',
    whyItMatters:
      'This principle explains why deep-sea divers need pressurized suits, why dams are built ' +
      'thicker at the bottom than the top, and why your ears "pop" when you dive to the bottom of a ' +
      'swimming pool.',
    formulaSlug: 'pressure-due-to-liquid-column-formula',
    workedExample: {
      id: 'fluid-pressure-worked-1',
      title: 'Find the pressure at the bottom of a water tank',
      problemStatement: 'A water tank is filled to a depth of 3 m. Using the density of water (1000 kg/m³) and g = 9.8 m/s², find the pressure due to the water at the bottom of the tank.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = hρg', explanation: 'Pressure due to a liquid column depends on depth, density, and gravity.' },
        { step: 2, instruction: 'Substitute the values.', math: 'P = 3 × 1000 × 9.8', explanation: 'h = 3 m, ρ = 1000 kg/m³, g = 9.8 m/s².' },
        { step: 3, instruction: 'Calculate.', math: 'P = 29,400', explanation: '3 × 1000 × 9.8 = 29,400.' },
      ],
      finalAnswer: 'P = 29,400 Pa (29.4 kPa)',
    },
    whyItWorks:
      'The weight of the liquid column directly above a point is what presses down on it — a taller ' +
      'column (bigger h) or a denser liquid (bigger ρ) both mean more weight pressing down on the ' +
      'same area, and therefore more pressure.',
    realLifeExample: {
      title: 'Why dams are thicker at the base',
      scenario: 'Large dams holding back a reservoir are noticeably thicker and stronger at the bottom than near the top of the water.',
      explanation: "Since water pressure increases with depth, the base of the dam must withstand far greater pressure than the top, which is why engineers build it thicker there.",
    },
    practiceQuestions: [
      {
        id: 'fluid-pressure-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the pressure due to a 1.5 m depth of water (density 1000 kg/m³, g = 9.8 m/s²).',
        hints: ['P = hρg.', '1.5 × 1000 × 9.8.'],
        correctAnswer: 14700,
        unit: 'Pa',
        explanation: 'P = 1.5 × 1000 × 9.8 = 14,700 Pa.',
      },
    ],
    commonMistake:
      'Assuming pressure at a given depth depends on the shape or width of the container — it does ' +
      'not; pressure only depends on the depth, the liquid\'s density, and gravity, regardless of the ' +
      "container's width or shape.",
    quickReview: [
      'P = hρg — pressure due to a liquid column.',
      'Pressure in a fluid increases with depth.',
      'Atmospheric pressure decreases with altitude for the same reason, in reverse.',
    ],
  },

  'density-a-level': {
    slug: 'density-a-level',
    title: 'Density',
    difficulty: 'easy',
    simpleExplanation:
      'Density measures how tightly packed the mass of a substance is: ρ = m/V. A dense material has ' +
      'a lot of mass packed into a small volume; a low-density material has the same mass spread ' +
      'over a much bigger volume.',
    whyItMatters:
      'Density determines whether an object floats or sinks, and is one of the most useful ways to ' +
      'identify an unknown substance — every pure material has its own characteristic density.',
    formulaSlug: 'density-formula-a-level',
    workedExample: {
      id: 'density-worked-1',
      title: "Find a metal block's density",
      problemStatement: 'A metal block has a mass of 540 g and a volume of 60 cm³. Find its density.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'ρ = m/V', explanation: 'Density is mass divided by volume.' },
        { step: 2, instruction: 'Substitute the values.', math: 'ρ = 540 / 60', explanation: 'm = 540 g, V = 60 cm³.' },
        { step: 3, instruction: 'Calculate.', math: 'ρ = 9', explanation: '540 divided by 60.' },
      ],
      finalAnswer: 'ρ = 9 g/cm³ (this matches the known density of copper)',
    },
    whyItWorks:
      'Dividing the total mass by the total volume gives exactly how much mass is packed into each ' +
      'unit of volume — the definition of density.',
    realLifeExample: {
      title: 'Testing gold for purity',
      scenario: 'A jeweller suspects a "gold" bar might actually be a cheaper metal coated in gold.',
      explanation: "By measuring the bar's mass and volume (e.g. by water displacement) and calculating its density, the jeweller can compare it against pure gold's known density (19.3 g/cm³) to check for fakes.",
    },
    practiceQuestions: [
      {
        id: 'density-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A liquid has a mass of 250 g and a volume of 200 cm³. Find its density.',
        hints: ['ρ = m/V.', '250/200.'],
        correctAnswer: 1.25,
        unit: 'g/cm³',
        explanation: 'ρ = 250/200 = 1.25 g/cm³.',
      },
      {
        id: 'density-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A block has a density of 2.7 g/cm³ and a volume of 40 cm³. Find its mass.',
        hints: ['Rearrange ρ = m/V to m = ρV.', '2.7 × 40.'],
        correctAnswer: 108,
        unit: 'g',
        explanation: 'm = ρV = 2.7 × 40 = 108 g.',
      },
    ],
    commonMistake:
      "Mixing units — using a mass in grams with a volume in cubic metres (or vice versa) gives a " +
      'meaningless density; always keep mass and volume in a consistent, matching pair of units.',
    quickReview: [
      'ρ = m/V',
      'Density is measured in kg/m³ or g/cm³.',
      'Every pure substance has its own characteristic density.',
    ],
  },

  'relative-density-a-level': {
    slug: 'relative-density-a-level',
    title: 'Relative Density (Specific Gravity)',
    difficulty: 'medium',
    simpleExplanation:
      "Relative density (also called specific gravity) compares a substance's density directly to " +
      "water's density: RD = ρ(substance)/ρ(water). Since it is a ratio of two densities, it has no " +
      'units — a relative density above 1 means the substance sinks in water; below 1 means it floats.',
    whyItMatters:
      'Relative density is a convenient, unit-free number that instantly tells you whether ' +
      'something floats or sinks in water, and is widely used in industry to test liquids like ' +
      'battery acid, milk, and fuel for concentration or purity.',
    formulaSlug: 'relative-density-formula',
    workedExample: {
      id: 'relative-density-worked-1',
      title: "Find a liquid's relative density",
      problemStatement: 'A liquid has a density of 800 kg/m³. Find its relative density (water\'s density is 1000 kg/m³).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'RD = ρ(substance)/ρ(water)', explanation: 'Relative density compares against water directly.' },
        { step: 2, instruction: 'Substitute the values.', math: 'RD = 800 / 1000', explanation: 'ρ(substance) = 800 kg/m³, ρ(water) = 1000 kg/m³.' },
        { step: 3, instruction: 'Calculate.', math: 'RD = 0.8', explanation: '800 divided by 1000.' },
      ],
      finalAnswer: 'RD = 0.8 — since this is less than 1, the liquid floats on water (e.g. this matches vegetable oil).',
    },
    whyItWorks:
      "Because both densities are measured in the same units, those units cancel out when one is " +
      "divided by the other — leaving a pure, unit-free number that says exactly how many times " +
      "denser (or less dense) the substance is compared to water.",
    realLifeExample: {
      title: 'Checking car battery acid',
      scenario: 'Mechanics used to test a lead-acid battery\'s charge by measuring the relative density of the acid inside it.',
      explanation: 'As a battery discharges, the acid becomes more diluted and its relative density drops — a hydrometer reading of relative density was a simple, direct way to check the battery\'s state of charge.',
    },
    practiceQuestions: [
      {
        id: 'relative-density-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A solid has a density of 2700 kg/m³. Find its relative density.',
        hints: ['RD = ρ(substance)/ρ(water), with water = 1000 kg/m³.', '2700/1000.'],
        correctAnswer: 2.7,
        explanation: 'RD = 2700/1000 = 2.7.',
      },
    ],
    commonMistake:
      'Giving relative density a unit (like kg/m³) — since it is a ratio of two densities in the ' +
      'same units, those units always cancel, leaving a plain, unit-free number.',
    quickReview: [
      'RD = ρ(substance)/ρ(water) — no units.',
      'RD > 1 means the substance sinks in water; RD < 1 means it floats.',
      "Used to test the concentration or purity of liquids like battery acid and milk.",
    ],
  },

  'hydrometer-a-level': {
    slug: 'hydrometer-a-level',
    title: 'The Hydrometer',
    difficulty: 'medium',
    simpleExplanation:
      'A hydrometer is a sealed, weighted float with a graduated stem, used to directly measure the ' +
      "relative density of a liquid. It floats higher in a denser liquid, and lower in a less dense " +
      "one — the depth it sinks to is read directly off the stem's scale as the relative density.",
    whyItMatters:
      "A hydrometer gives an instant reading of relative density without needing to separately " +
      'measure mass and volume — a single glance at where it floats gives the answer directly.',
    workedExample: {
      id: 'hydrometer-worked-1',
      title: 'Compare hydrometer readings in two liquids',
      problemStatement: 'A hydrometer floats with its stem reading 1.03 in seawater, and 1.00 in fresh water. Explain which liquid is denser, and why the hydrometer floats differently in each.',
      steps: [
        { step: 1, instruction: 'Compare the two readings.', math: '1.03 > 1.00', explanation: 'The seawater reading is higher than the fresh water reading.' },
        { step: 2, instruction: 'Relate the reading to relative density.', explanation: 'A higher relative-density reading means the liquid is denser — seawater (with dissolved salt) is denser than fresh water.' },
        { step: 3, instruction: 'Explain the floating behaviour.', explanation: 'In the denser seawater, a smaller volume of liquid needs to be displaced to support the same weight, so the hydrometer floats higher (sinks less) than in fresh water.' },
      ],
      finalAnswer: "Seawater is denser (RD 1.03) than fresh water (RD 1.00); the hydrometer floats higher in the denser liquid.",
    },
    whyItWorks:
      'A floating object always displaces a weight of liquid exactly equal to its own weight — in a ' +
      'denser liquid, a smaller volume of liquid weighs the same as the hydrometer, so it needs to ' +
      'sink less deep to displace that weight, floating higher as a result.',
    realLifeExample: {
      title: 'Wine and beer making',
      scenario: 'Brewers and winemakers use a hydrometer to track fermentation.',
      explanation: "As sugar in the liquid converts to alcohol (which is less dense than sugar solution), the relative density drops — tracking the hydrometer reading over the days tells the brewer exactly how fermentation is progressing.",
    },
    practiceQuestions: [
      {
        id: 'hydrometer-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A hydrometer floats lower (sinks deeper) in liquid A than in liquid B. What can you conclude?',
        hints: ['A denser liquid needs a smaller displaced volume to support the same weight, so the hydrometer floats higher in it.'],
        options: [
          { id: 'a', text: 'Liquid A is denser than liquid B' },
          { id: 'b', text: 'Liquid B is denser than liquid A' },
          { id: 'c', text: 'Both liquids have the same density' },
          { id: 'd', text: 'No conclusion can be drawn' },
        ],
        correctOptionId: 'b',
        explanation: "The hydrometer floats higher (sinks less) in the denser liquid, so since it sinks deeper in liquid A, liquid B must be the denser one.",
      },
    ],
    commonMistake:
      "Assuming a hydrometer floats LOWER in a denser liquid — it is the opposite: a hydrometer " +
      'floats HIGHER (sinks less) in a denser liquid, since less volume needs to be displaced to ' +
      'support its weight.',
    quickReview: [
      'A hydrometer directly measures relative density by how deep it floats.',
      'It floats HIGHER in a denser liquid, lower in a less dense one.',
      'Used to test seawater salinity, battery acid, and fermentation progress.',
    ],
  },
};
