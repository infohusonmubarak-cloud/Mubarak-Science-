import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 5 — Heat Transfer and Thermodynamics.
// Matches the textbook's section list: heat transfer; thermodynamics;
// heat engines. The work-done and first-law worked examples deliberately
// share the same W=6000 J value, mirroring the reused-numbers technique
// used in earlier chapters.
export const chapter5CHeatConcepts: Record<string, Concept> = {
  'mechanisms-of-heat-transfer': {
    slug: 'mechanisms-of-heat-transfer',
    title: 'Mechanisms of Heat Transfer',
    difficulty: 'medium',
    simpleExplanation:
      'Heat moves from a hotter place to a cooler one in three ways: conduction (direct contact, as heat passes ' +
      'between touching particles — fastest in solids), convection (a heated fluid physically moves, carrying ' +
      'its heat with it), and radiation (electromagnetic waves, needing no medium at all).',
    whyItMatters:
      'Every real heating or cooling situation — a hot drink cooling, a house losing heat in winter, sunlight ' +
      'warming the Earth — is a combination of these three mechanisms, and identifying which dominates is the ' +
      'first step in analyzing it.',
    diagram: {
      id: 'conduction-diagram',
      title: 'Heat conducting along a metal rod from a hot end to a cold end',
      altText: 'A horizontal bar with a hot end marked at high temperature on the left and a cold end at low temperature on the right, with an arrow showing heat flow from hot to cold',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-2, -0.4], to: [2, -0.4] },
          { from: [-2, 0.4], to: [2, 0.4] },
          { from: [-2, -0.4], to: [-2, 0.4] },
          { from: [2, -0.4], to: [2, 0.4] },
          { from: [-1.6, 0], to: [1.6, 0], arrow: true, label: 'heat flow', labelDx: 0, labelDy: -12 },
        ],
        points: [
          { x: -2, y: 0, label: 'Hot (T₁)', labelDx: -18, labelDy: 0 },
          { x: 2, y: 0, label: 'Cold (T₂)', labelDx: 20, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'fouriers-law-formula',
    workedExample: {
      id: 'conduction-worked-1',
      title: 'Find the rate of heat conduction through a rod',
      problemStatement: 'A metal rod (k=50 W/(m·K)) has cross-sectional area 0.02 m² and length 0.5 m, with a temperature difference of 100 K between its ends. Find the rate of heat conduction.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'k=50 W/(m·K),  A=0.02 m²,  ΔT=100 K,  d=0.5 m', explanation: 'All four quantities needed for the conduction formula.' },
        { step: 2, instruction: "Apply Fourier's law.", math: 'Q/t = kA(ΔT)/d = (50)(0.02)(100)/0.5', explanation: 'Substitute all four values.' },
        { step: 3, instruction: 'Compute the result.', math: 'Q/t = 100/0.5 = 200 W', explanation: 'The numerator (50×0.02×100=100) divided by the thickness.' },
      ],
      finalAnswer: 'Q/t = 200 W.',
    },
    whyItWorks:
      'A larger area or bigger temperature difference gives heat more "room" and more "push" to flow, while a ' +
      'thicker material means the heat has farther to travel — Fourier\'s law captures all three effects in one ' +
      'proportional relationship, scaled by how conductive the material itself is (k).',
    realLifeExample: {
      title: 'Why a metal spoon in hot soup gets hot to the touch',
      scenario: 'Leaving a metal spoon in a bowl of hot soup, the handle quickly becomes too hot to hold, while a wooden spoon stays cool.',
      explanation: "Metal has a much higher thermal conductivity (k) than wood, so heat conducts along it far " +
        "faster — exactly what Fourier's law predicts from a larger k value.",
    },
    practiceQuestions: [
      {
        id: 'conduction-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A material (k=0.8 W/(m·K)) has area 2 m² and thickness 0.1 m, with a temperature difference of 20 K. Find the rate of heat conduction.',
        hints: ['Q/t = kA(ΔT)/d.'],
        correctAnswer: 32,
        explanation: 'Q/t = (0.8)(2)(20)/0.1 = 32/0.1 = 32 W.',
      },
    ],
    commonMistake:
      'Forgetting that a THICKER material conducts heat MORE SLOWLY (d in the denominator) — it is easy to ' +
      'assume more material means more heat transfer, but a thicker barrier actually resists heat flow more.',
    quickReview: [
      'Conduction: direct contact, fastest in solids. Convection: fluid motion carries heat. Radiation: electromagnetic waves, no medium needed.',
      'Q/t = kA(ΔT)/d for conduction.',
      'A thicker material (larger d) conducts heat more slowly.',
    ],
  },

  'radiation-and-stefan-boltzmann-law': {
    slug: 'radiation-and-stefan-boltzmann-law',
    title: 'Radiation and the Stefan-Boltzmann Law',
    difficulty: 'medium',
    simpleExplanation:
      'Every object radiates thermal energy as electromagnetic waves, at a rate given by the Stefan-Boltzmann ' +
      'law: P=εσAT⁴ — a relationship that depends extremely steeply on temperature, since T is raised to the fourth power.',
    whyItMatters:
      "Radiation is the only heat transfer mechanism that works through empty space — it is how the Sun's " +
      'energy reaches Earth, and it dominates heat loss from very hot objects.',
    formulaSlug: 'stefan-boltzmann-formula',
    workedExample: {
      id: 'radiation-worked-1',
      title: 'Find the power radiated by a hot object',
      problemStatement: 'An object with emissivity 0.9 and surface area 0.5 m² is at a temperature of 400 K. Find the power it radiates.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'ε=0.9,  A=0.5 m²,  T=400 K,  σ=5.67×10⁻⁸ W/(m²·K⁴)', explanation: 'Temperature must be in kelvin, not Celsius.' },
        { step: 2, instruction: 'Compute T⁴.', math: 'T⁴ = 400⁴ = 2.56×10^10', explanation: '400²=160000, then squared again gives 400⁴.' },
        { step: 3, instruction: 'Apply the Stefan-Boltzmann law.', math: 'P = εσAT⁴ = (0.9)(5.67×10⁻⁸)(0.5)(2.56×10^10)', explanation: 'Multiply all four factors together.' },
        { step: 4, instruction: 'Compute the result.', math: 'P ≈ 653.2 W', explanation: 'Combining the powers of 10 and the numeric factors.' },
      ],
      finalAnswer: 'P ≈ 653.2 W.',
    },
    whyItWorks:
      "This law follows from how thermal radiation's intensity and spectrum both shift with temperature — as an " +
      "object gets hotter, it doesn't just radiate somewhat more; the T⁴ dependence means even a modest " +
      "temperature increase produces a dramatically larger radiated power.",
    realLifeExample: {
      title: 'Why a light bulb filament glows and radiates so much heat',
      scenario: "An incandescent bulb's filament reaches temperatures around 2500-3000 K, far hotter than " +
        'everyday objects.',
      explanation: "Because radiated power depends on T⁴, that very high temperature makes the filament radiate " +
        "enormously more power (as both light and heat) than the same filament would at room temperature.",
    },
    practiceQuestions: [
      {
        id: 'radiation-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'An object with emissivity 0.8 and surface area 0.2 m² is at 300 K. Find the power it radiates. (300⁴=8.1×10⁹)',
        hints: ['P = εσAT⁴.'],
        correctAnswer: 7.35,
        tolerance: 0.1,
        explanation: 'P = (0.8)(5.67×10⁻⁸)(0.2)(8.1×10⁹) ≈ 7.35 W.',
      },
    ],
    commonMistake:
      'Using Celsius instead of Kelvin for T — the Stefan-Boltzmann law only works with absolute temperature; ' +
      'using Celsius gives a completely wrong (and sometimes negative or nonsensical) result.',
    quickReview: [
      'P = εσAT⁴ — temperature must be in kelvin.',
      'Radiated power depends extremely steeply on temperature (fourth power).',
      'The only heat transfer mechanism that works through a vacuum.',
    ],
  },

  'internal-energy-and-work': {
    slug: 'internal-energy-and-work',
    title: 'Internal Energy and Work',
    difficulty: 'medium',
    simpleExplanation:
      "A gas's internal energy is the total kinetic (and, for real gases, potential) energy of all its " +
      'particles. When a gas expands at constant pressure, it does work on its surroundings, W=PΔV — exactly ' +
      'the area under a horizontal line on a pressure-volume (P-V) graph.',
    whyItMatters:
      'This is the essential first step to understanding thermodynamics quantitatively — every heat engine, ' +
      'refrigerator, and thermodynamic cycle is built from processes where a gas does (or has done to it) exactly this kind of work.',
    diagram: {
      id: 'pv-work-diagram',
      title: 'Work done by a gas expanding at constant pressure, shown as the shaded area on a P-V graph',
      altText: 'A pressure-volume graph with a horizontal line at pressure P from volume V1 to V2, with the rectangular region beneath it shaded to represent the work done',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [0, 0], to: [0.06, 0] },
          { from: [0, 0], to: [0, 230] },
        ],
        polygons: [{ points: [[0.02, 0], [0.05, 0], [0.05, 200], [0.02, 200]] }],
        points: [
          { x: 0.02, y: 0, label: 'V₁', labelDx: -8, labelDy: 16 },
          { x: 0.05, y: 0, label: 'V₂', labelDx: 8, labelDy: 16 },
          { x: 0.005, y: 200, label: 'P', labelDx: -10, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'work-done-by-gas-formula',
    workedExample: {
      id: 'work-done-worked-1',
      title: 'Find the work done by an expanding gas',
      problemStatement: 'A gas expands at a constant pressure of 200000 Pa from a volume of 0.02 m³ to 0.05 m³. Find the work it does.',
      steps: [
        { step: 1, instruction: 'Find the change in volume.', math: 'ΔV = V₂−V₁ = 0.05−0.02 = 0.03 m³', explanation: 'Final volume minus initial volume.' },
        { step: 2, instruction: 'Apply the work formula.', math: 'W = PΔV = (200000)(0.03)', explanation: 'Multiply pressure by the change in volume.' },
        { step: 3, instruction: 'Compute the result.', math: 'W = 6000 J', explanation: 'The gas does 6000 J of work on its surroundings as it expands.' },
      ],
      finalAnswer: 'W = 6000 J.',
    },
    whyItWorks:
      'Work is force times distance; the force a gas exerts on a piston is pressure times the piston\'s area ' +
      '(F=PA), and the distance the piston moves times its area is exactly the change in volume — so ' +
      'W=F×distance becomes W=PA×(distance)=PΔV.',
    realLifeExample: {
      title: 'A piston pushed outward in a car engine',
      scenario: 'Inside a car engine cylinder, hot expanding combustion gases push a piston outward, doing work that ultimately turns the wheels.',
      explanation: "That work done by the expanding gas on the piston is exactly W=PΔV, computed the same way " +
        "for every stroke of every cylinder in the engine.",
    },
    practiceQuestions: [
      {
        id: 'work-done-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A gas is compressed at constant pressure 150000 Pa from 0.04 m³ to 0.01 m³. Find the work done BY the gas (it will be negative, since the gas is compressed, not expanded).',
        hints: ['W = PΔV, with ΔV = V₂−V₁ (final minus initial).'],
        correctAnswer: -4500,
        explanation: 'ΔV = 0.01−0.04 = −0.03 m³. W = (150000)(−0.03) = −4500 J.',
      },
    ],
    commonMistake:
      'Forgetting the sign convention — work done BY the gas is positive during expansion (ΔV>0) and negative ' +
      'during compression (ΔV<0), since the gas is having work done ON it instead.',
    quickReview: [
      'W = PΔV, valid at constant pressure.',
      'Equals the area under a horizontal line on a P-V graph.',
      'Positive for expansion, negative for compression.',
    ],
  },

  'first-law-of-thermodynamics': {
    slug: 'first-law-of-thermodynamics',
    title: 'The First Law of Thermodynamics',
    difficulty: 'medium',
    simpleExplanation:
      'The first law of thermodynamics — ΔU=Q−W — is a statement of energy conservation: a system\'s internal ' +
      'energy increases with heat added to it, and decreases by however much work it does on its surroundings.',
    whyItMatters:
      'This single equation ties together heat, work, and internal energy — the three central quantities of ' +
      'thermodynamics — and underlies the analysis of every engine, refrigerator, and thermodynamic process.',
    formulaSlug: 'first-law-thermodynamics-formula',
    workedExample: {
      id: 'first-law-worked-1',
      title: 'Find the change in internal energy',
      problemStatement: 'A gas absorbs 8000 J of heat while doing 6000 J of work on its surroundings. Find the change in its internal energy.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'Q=8000 J,  W=6000 J', explanation: 'Heat added and work done by the gas.' },
        { step: 2, instruction: 'Apply the first law.', math: 'ΔU = Q−W = 8000−6000', explanation: 'Subtract the work done from the heat added.' },
        { step: 3, instruction: 'Compute the result.', math: 'ΔU = 2000 J', explanation: 'The internal energy increases by 2000 J.' },
      ],
      finalAnswer: 'ΔU = 2000 J.',
    },
    whyItWorks:
      "Energy cannot be created or destroyed, only converted — the heat added to a gas has to go somewhere: " +
      "some of it becomes work done pushing against the surroundings, and whatever is left over increases the " +
      "gas's own internal energy, which is exactly what ΔU=Q−W states.",
    realLifeExample: {
      title: 'A bicycle pump heating up as it is used',
      scenario: 'Rapidly pumping a bicycle tire makes the pump noticeably warm.',
      explanation: 'Compressing the air does negative work (work is done ON the gas, so W is negative in the ' +
        'first law), which — with little heat escaping in that short time — increases the gas\'s internal ' +
        'energy, raising its temperature and warming the pump.',
    },
    practiceQuestions: [
      {
        id: 'first-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A gas releases 3000 J of heat (Q=−3000 J) while 5000 J of work is done ON it (W=−5000 J). Find the change in internal energy.',
        hints: ['ΔU = Q−W. Be careful with the signs already given.'],
        correctAnswer: 2000,
        explanation: 'ΔU = (−3000)−(−5000) = −3000+5000 = 2000 J.',
      },
    ],
    commonMistake:
      'Mixing up the sign convention for W — "work done BY the system" is what appears as +W in ΔU=Q−W; work ' +
      'done ON the system must be entered as a negative W.',
    quickReview: [
      'ΔU = Q−W — a statement of energy conservation.',
      'Q positive: heat added. W positive: work done BY the system.',
      'Ties together heat, work, and internal energy.',
    ],
  },

  'heat-engines-and-efficiency': {
    slug: 'heat-engines-and-efficiency',
    title: 'Heat Engines and Efficiency',
    difficulty: 'hard',
    simpleExplanation:
      'A heat engine takes in heat from a hot reservoir, converts some of it into useful work, and expels the ' +
      'rest as waste heat to a cold reservoir. Its efficiency — the fraction of heat energy actually converted into work — is η=W/Qₕ=1−Qc/Qₕ.',
    whyItMatters:
      'No real heat engine can be 100% efficient — some waste heat is always expelled — and understanding why, ' +
      'and how to calculate exactly how efficient an engine is, is central to designing every engine, power plant, and refrigerator.',
    diagram: {
      id: 'heat-engine-diagram',
      title: 'Energy flow through a heat engine',
      altText: 'A box labelled Engine, with an arrow flowing in from above labelled Qh (heat from the hot reservoir), an arrow flowing out below labelled Qc (waste heat to the cold reservoir), and an arrow flowing out to the side labelled W (useful work output)',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-1, -1], to: [1, -1] }, { from: [1, -1], to: [1, 1] },
          { from: [1, 1], to: [-1, 1] }, { from: [-1, 1], to: [-1, -1] },
          { from: [0, 3], to: [0, 1.1], arrow: true, label: 'Qₕ (hot reservoir)', labelDx: 0, labelDy: -18 },
          { from: [0, -1.1], to: [0, -3], arrow: true, label: 'Qc (cold reservoir)', labelDx: 0, labelDy: 16 },
          { from: [1.1, 0], to: [3, 0], arrow: true, label: 'W (work output)', labelDx: 0, labelDy: -10 },
        ],
        points: [{ x: 0, y: 0, label: 'Engine' }],
      },
    },
    formulaSlug: 'heat-engine-efficiency-formula',
    workedExample: {
      id: 'heat-engine-worked-1',
      title: 'Find a heat engine\'s efficiency',
      problemStatement: 'A heat engine absorbs 5000 J from its hot reservoir and expels 3000 J to its cold reservoir. Find its efficiency.',
      steps: [
        { step: 1, instruction: 'Find the useful work output.', math: 'W = Qₕ−Qc = 5000−3000 = 2000 J', explanation: 'Whatever heat is not expelled must have become work, by energy conservation.' },
        { step: 2, instruction: 'Apply the efficiency formula.', math: 'η = W/Qₕ = 2000/5000', explanation: 'Divide work output by heat input.' },
        { step: 3, instruction: 'Compute the result.', math: 'η = 0.4 = 40%', explanation: 'The engine converts 40% of the heat it absorbs into useful work.' },
      ],
      finalAnswer: 'η = 0.4 (40%).',
    },
    whyItWorks:
      "By energy conservation, all the heat taken in (Qₕ) must either become useful work (W) or be expelled as " +
      "waste heat (Qc) — so W=Qₕ−Qc always holds, and dividing by Qₕ gives the fraction of the input heat that " +
      "actually became useful work, which is exactly the definition of efficiency.",
    realLifeExample: {
      title: "A car engine's efficiency",
      scenario: "A typical gasoline car engine converts only about 25-30% of the fuel's chemical energy into " +
        "useful motion, expelling the rest as waste heat through the exhaust and radiator.",
      explanation: "This is exactly the kind of efficiency this formula measures — the fraction of energy " +
        "input that becomes useful work, with the rest lost as waste heat, exactly as no real heat engine avoids.",
    },
    practiceQuestions: [
      {
        id: 'heat-engine-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A heat engine absorbs 8000 J and expels 5000 J to its cold reservoir. Find its efficiency as a percentage.',
        hints: ['η = 1 − Qc/Qₕ, then convert to a percentage.'],
        correctAnswer: 37.5,
        explanation: 'η = 1 − 5000/8000 = 1 − 0.625 = 0.375 = 37.5%.',
      },
    ],
    commonMistake:
      'Assuming efficiency can reach 100% with good enough engineering — the second law of thermodynamics ' +
      'guarantees some waste heat (Qc) must always be expelled, so η is always strictly less than 1 for any real heat engine.',
    quickReview: [
      'η = W/Qₕ = 1−Qc/Qₕ.',
      'W = Qₕ−Qc, by energy conservation.',
      'No real heat engine reaches 100% efficiency.',
    ],
  },
};
