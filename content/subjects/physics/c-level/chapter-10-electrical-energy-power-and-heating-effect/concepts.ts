import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 10 — Electrical Energy, Power and
// Heating Effect of Electric Current. Matches the textbook's section
// list: EMF and electric circuits; batteries in series/parallel;
// electrical energy and power; Joule's law of heating; applications of
// the heating effect.
export const chapter10CElectricalConcepts: Record<string, Concept> = {
  'electromotive-force-and-circuits': {
    slug: 'electromotive-force-and-circuits',
    title: 'Electromotive Force and Electric Circuits',
    difficulty: 'medium',
    simpleExplanation:
      "A battery's electromotive force (EMF, ε) is the total energy it supplies per unit charge — but a real " +
      "battery also has internal resistance, so the actual voltage available to a circuit (terminal voltage) is always a little less than the full EMF: V=ε−Ir.",
    whyItMatters:
      'Understanding EMF and internal resistance explains why a battery\'s voltage seems to "sag" under heavy ' +
      'load — a genuinely practical fact about every real power source, from AA batteries to car batteries.',
    diagram: {
      id: 'circuit-diagram',
      title: 'A simple circuit: a battery with internal resistance driving current through a resistor',
      altText: 'A rectangular circuit loop with a battery (EMF ε and internal resistance r) on the left side and a resistor R on the right side, with an arrow showing the direction of current flow',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-2, 1], to: [2, 1] },
          { from: [2, 1], to: [2, -1] },
          { from: [2, -1], to: [-2, -1] },
          { from: [-2, -1], to: [-2, 1], label: 'ε, r (battery)', labelDx: -34, labelDy: 0 },
          { from: [-1.4, 1], to: [-0.2, 1], arrow: true, label: 'I', labelDx: 0, labelDy: -12 },
        ],
        points: [{ x: 2, y: 0, label: 'R (resistor)', labelDx: 30, labelDy: 0 }],
      },
    },
    formulaSlug: 'terminal-voltage-formula',
    workedExample: {
      id: 'emf-worked-1',
      title: "Find a battery's terminal voltage",
      problemStatement: 'A battery has EMF 12 V and internal resistance 0.5 Ω. When it drives 2 A through a circuit, find its terminal voltage.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'ε=12 V,  I=2 A,  r=0.5 Ω', explanation: 'EMF, current, and internal resistance.' },
        { step: 2, instruction: 'Apply the terminal voltage formula.', math: 'V = ε − Ir = 12 − (2)(0.5)', explanation: 'Subtract the voltage lost across the internal resistance.' },
        { step: 3, instruction: 'Compute the result.', math: 'V = 12 − 1 = 11 V', explanation: 'The circuit actually experiences 11 V, not the full 12 V EMF.' },
      ],
      finalAnswer: 'V = 11 V.',
    },
    whyItWorks:
      'Some of the energy the battery supplies must be used to push current through its own internal ' +
      'resistance — by Ohm\'s law, that "lost" voltage is Ir, so what remains available at the terminals for the rest of the circuit is ε minus that internal voltage drop.',
    realLifeExample: {
      title: "A car battery's voltage dropping while starting the engine",
      scenario: "A car battery's voltage visibly dips for a moment while the starter motor draws a very large current to crank the engine.",
      explanation: "That large starting current (I) flowing through the battery's own internal resistance (r) " +
        "causes a significant voltage drop (Ir), temporarily reducing the terminal voltage below the battery's full EMF.",
    },
    practiceQuestions: [
      {
        id: 'emf-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A battery has EMF 9 V and internal resistance 0.3 Ω. Find its terminal voltage when it drives 3 A through a circuit.',
        hints: ['V = ε − Ir.'],
        correctAnswer: 8.1,
        explanation: 'V = 9 − (3)(0.3) = 9 − 0.9 = 8.1 V.',
      },
    ],
    commonMistake:
      'Assuming a battery always supplies exactly its rated EMF to a circuit — the actual terminal voltage is ' +
      'always somewhat lower once current flows, due to the unavoidable internal resistance.',
    quickReview: [
      'V = ε − Ir.',
      "EMF is the battery's total energy per unit charge; terminal voltage is what the circuit actually gets.",
      "Terminal voltage drops further under heavier current draw.",
    ],
  },

  'batteries-in-series-and-parallel': {
    slug: 'batteries-in-series-and-parallel',
    title: 'Batteries in Series and in Parallel',
    difficulty: 'medium',
    simpleExplanation:
      "Connecting batteries in series adds up their EMFs (giving a higher total voltage), while connecting " +
      'identical batteries in parallel keeps the same EMF but reduces the total internal resistance, letting the combination supply more current.',
    whyItMatters:
      'This is exactly why multiple AA batteries are stacked in series inside a flashlight (for higher voltage), ' +
      'while large battery banks use parallel connections (for higher total current capacity) — the right choice depends on what the circuit actually needs.',
    diagram: {
      id: 'battery-series-diagram',
      title: 'Two battery cells connected in series',
      altText: 'Two battery cell symbols connected end-to-end in a single line, their EMFs adding together',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-3, 0], to: [-1.6, 0] },
          { from: [-1.6, -0.5], to: [-1.6, 0.5] },
          { from: [-1.4, -0.25], to: [-1.4, 0.25] },
          { from: [-1.4, 0], to: [1.4, 0] },
          { from: [1.4, -0.5], to: [1.4, 0.5] },
          { from: [1.6, -0.25], to: [1.6, 0.25] },
          { from: [1.6, 0], to: [3, 0] },
        ],
        points: [
          { x: -1.5, y: -0.8, label: 'ε₁', labelDx: 0, labelDy: 0 },
          { x: 1.5, y: -0.8, label: 'ε₂', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'battery-combination-formula',
    workedExample: {
      id: 'battery-combination-worked-1',
      title: 'Find the total EMF of cells in series',
      problemStatement: 'Three identical 1.5 V cells are connected in series. Find the total EMF.',
      steps: [
        { step: 1, instruction: 'Write down the series EMF rule.', math: 'ε_total = ε₁+ε₂+ε₃', explanation: 'EMFs add directly in series.' },
        { step: 2, instruction: 'Substitute the known values.', math: 'ε_total = 1.5+1.5+1.5', explanation: 'All three cells have the same EMF.' },
        { step: 3, instruction: 'Compute the result.', math: 'ε_total = 4.5 V', explanation: 'Three 1.5 V cells in series give 4.5 V total.' },
      ],
      finalAnswer: 'ε_total = 4.5 V.',
    },
    whyItWorks:
      'In series, the positive terminal of one cell connects to the negative terminal of the next, so each ' +
      "cell adds its own push to the charge moving through the circuit — the total energy given to each unit " +
      "of charge is the sum of what every cell individually contributes. In parallel, identical cells share the " +
      "current-supplying burden between them, effectively reducing the combined internal resistance.",
    realLifeExample: {
      title: 'Why a flashlight uses multiple AA batteries stacked in series',
      scenario: 'A flashlight typically uses two or more AA batteries stacked end-to-end (series), rather than side-by-side.',
      explanation: 'Stacking them in series adds their EMFs together (e.g. two 1.5 V cells give 3 V), providing ' +
        "enough voltage to properly light the bulb — a single 1.5 V cell alone often is not enough.",
    },
    practiceQuestions: [
      {
        id: 'battery-combination-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two identical 1.5 V cells, each with internal resistance 0.2 Ω, are connected in PARALLEL. Find the total internal resistance.',
        hints: ['For n identical cells in parallel: r_total = r/n.'],
        correctAnswer: 0.1,
        explanation: 'r_total = 0.2/2 = 0.1 Ω (the total EMF stays 1.5 V, unchanged).',
      },
    ],
    commonMistake:
      "Assuming parallel-connected cells add their EMFs like series cells do — identical cells in parallel keep " +
      "the SAME EMF as a single cell; only their combined internal resistance (and current capacity) changes.",
    quickReview: [
      'Series: ε_total=ε₁+ε₂+…, r_total=r₁+r₂+….',
      'Parallel (identical cells): ε_total=ε (unchanged), r_total=r/n.',
      'Series for more voltage; parallel for more current capacity.',
    ],
  },

  'electrical-energy-and-power': {
    slug: 'electrical-energy-and-power',
    title: 'Electrical Energy and Electrical Power',
    difficulty: 'medium',
    simpleExplanation:
      'Electrical power (P=VI=I²R=V²/R) measures how fast electrical energy is being converted into another ' +
      'form (heat, light, motion); the total energy used over a period of time is simply E=Pt.',
    whyItMatters:
      'These formulas are the basis for everything from reading an appliance\'s wattage rating to calculating ' +
      "an electricity bill — power tells you the RATE of energy use, and multiplying by time gives the TOTAL energy consumed.",
    formulaSlug: 'electrical-power-formula',
    workedExample: {
      id: 'electrical-power-worked-1',
      title: 'Find electrical power and total energy used',
      problemStatement: 'A device operates at 12 V, drawing 3 A of current, for 10 seconds. Find its power and the total energy it uses.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'V=12 V,  I=3 A,  t=10 s', explanation: 'Voltage, current, and time.' },
        { step: 2, instruction: 'Find the power.', math: 'P = VI = 12 × 3 = 36 W', explanation: 'Multiply voltage by current.' },
        { step: 3, instruction: 'Find the total energy used.', math: 'E = Pt = 36 × 10 = 360 J', explanation: 'Multiply power by the time it operates.' },
      ],
      finalAnswer: 'P = 36 W, E = 360 J.',
    },
    whyItWorks:
      'Voltage is energy transferred per unit charge, and current is charge flowing per unit time — multiplying ' +
      'them together gives energy transferred per unit time, which is exactly the definition of power; ' +
      'multiplying power by the duration it acts then recovers the total energy transferred.',
    realLifeExample: {
      title: 'Reading a household electricity bill',
      scenario: 'An electricity bill charges based on the total kilowatt-hours (kWh) of energy used — a unit ' +
        'that is exactly power (in kW) multiplied by time (in hours).',
      explanation: 'A 1000 W appliance running for 2 hours uses exactly 1 kW × 2 h = 2 kWh of energy — the ' +
        'same E=Pt relationship this formula describes, just in everyday billing units.',
    },
    practiceQuestions: [
      {
        id: 'electrical-power-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A device operates at 6 V, drawing 4 A, for 20 seconds. Find the total energy it uses, in J.',
        hints: ['P = VI, then E = Pt.'],
        correctAnswer: 480,
        explanation: 'P = 6×4 = 24 W. E = 24×20 = 480 J.',
      },
    ],
    commonMistake:
      'Confusing power (the RATE of energy use, in watts) with energy (the TOTAL amount used, in joules or ' +
      'kilowatt-hours) — a device can have high power but use little total energy if it only runs briefly.',
    quickReview: [
      'P = VI = I²R = V²/R.',
      'E = Pt — total energy is power times time.',
      'Power is a rate; energy is a total amount.',
    ],
  },

  'joules-law-of-heating': {
    slug: 'joules-law-of-heating',
    title: "Joule's Law of Heating",
    difficulty: 'medium',
    simpleExplanation:
      "Joule's law of heating states that the heat generated by current flowing through a resistance is " +
      'H=I²Rt — growing with the SQUARE of the current, directly with the resistance, and directly with time.',
    whyItMatters:
      "This is the specific physics behind every electrical heating device — and also behind unwanted heating " +
      'in wires and components, which is why wiring must be rated to handle a circuit\'s expected current safely.',
    formulaSlug: 'joules-law-formula',
    workedExample: {
      id: 'joules-law-worked-1',
      title: 'Find the heat generated by a current',
      problemStatement: 'A current of 2 A flows through a 10 Ω resistor for 60 seconds. Find the heat generated.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'I=2 A,  R=10 Ω,  t=60 s', explanation: 'Current, resistance, and time.' },
        { step: 2, instruction: "Apply Joule's law.", math: 'H = I²Rt = (2²)(10)(60)', explanation: 'Square the current, then multiply by resistance and time.' },
        { step: 3, instruction: 'Compute the result.', math: 'H = (4)(10)(60) = 2400 J', explanation: 'Total heat energy generated.' },
      ],
      finalAnswer: 'H = 2400 J.',
    },
    whyItWorks:
      'This is a direct consequence of P=I²R (electrical power dissipated as heat in a resistor) combined with ' +
      'E=Pt (energy equals power times time) — substituting P=I²R into E=Pt gives exactly H=I²Rt.',
    realLifeExample: {
      title: 'Why household wiring is rated for a maximum current',
      scenario: "Electrical wiring and circuit breakers are rated for a specific maximum current (like 15 or 20 amps), not a maximum power or voltage.",
      explanation: "Because heat generated grows with the SQUARE of current (H=I²Rt), even a modest increase " +
        "in current above the rated limit can generate dangerously excessive heat in the wiring — exactly why current, not voltage, is the critical safety limit.",
    },
    practiceQuestions: [
      {
        id: 'joules-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A current of 3 A flows through a 5 Ω resistor for 30 seconds. Find the heat generated.',
        hints: ['H = I²Rt.'],
        correctAnswer: 1350,
        explanation: 'H = (3²)(5)(30) = (9)(5)(30) = 1350 J.',
      },
    ],
    commonMistake:
      'Forgetting to square the current — since I is squared in the formula, DOUBLING the current QUADRUPLES ' +
      'the heat generated, not just doubles it.',
    quickReview: [
      'H = I²Rt.',
      'Heat grows with the SQUARE of current.',
      "The physics behind both intentional heating devices and unwanted wiring heating.",
    ],
  },

  'applications-of-heating-effect': {
    slug: 'applications-of-heating-effect',
    title: 'Applications of the Heating Effect of Current',
    difficulty: 'medium',
    simpleExplanation:
      "The heating effect of current is put to deliberate use in devices like electric heaters, irons, toasters, " +
      "and incandescent bulbs — each designed with a specific resistance, R=V²/P, to deliver exactly the intended heating power at its rated voltage.",
    whyItMatters:
      'Understanding how to design a heating element connects the abstract physics of Joule heating directly to ' +
      'real appliance design — choosing the right resistance is what makes a heater actually heat at the intended rate.',
    formulaSlug: 'heating-element-resistance-formula',
    workedExample: {
      id: 'heating-applications-worked-1',
      title: "Find a heating element's required resistance",
      problemStatement: 'An electric heater is designed to deliver 1000 W of heating power when connected to a 220 V supply. Find the resistance of its heating element.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'P=1000 W,  V=220 V', explanation: 'Target power and operating voltage.' },
        { step: 2, instruction: 'Apply the heating element resistance formula.', math: 'R = V²/P = 220²/1000', explanation: 'Square the voltage, then divide by the target power.' },
        { step: 3, instruction: 'Compute the result.', math: 'R = 48400/1000 = 48.4 Ω', explanation: "This is the resistance the heating element's wire must have." },
      ],
      finalAnswer: 'R = 48.4 Ω.',
    },
    whyItWorks:
      'Rearranging P=V²/R (electrical power in terms of voltage and resistance) to solve for R gives exactly ' +
      'R=V²/P — so once the operating voltage is fixed (by the power supply) and the desired heating power is chosen, the required resistance follows directly.',
    realLifeExample: {
      title: 'Why an electric kettle heats water so quickly',
      scenario: 'An electric kettle brings water to a boil far faster than a stovetop pot of the same size.',
      explanation: "A kettle's heating element is deliberately designed with a low resistance (using R=V²/P for " +
        "a high target power) so that, at standard household voltage, it draws a large current and generates heat very rapidly via Joule heating.",
    },
    practiceQuestions: [
      {
        id: 'heating-applications-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A heater is designed for 1500 W at 230 V. Find the resistance of its heating element, rounded to 2 decimal places.',
        hints: ['R = V²/P.'],
        correctAnswer: 35.27,
        tolerance: 0.1,
        explanation: 'R = 230²/1500 = 52900/1500 ≈ 35.27 Ω.',
      },
    ],
    commonMistake:
      'Assuming a LOWER resistance means LESS heating power — the opposite is true at a fixed voltage: since ' +
      'P=V²/R, a lower resistance actually produces MORE power (and more heat) for the same voltage.',
    quickReview: [
      'R = V²/P — designs a heating element for a target power at a known voltage.',
      'Used in heaters, irons, toasters, kettles, and incandescent bulbs.',
      'At fixed voltage, lower resistance means MORE power, not less.',
    ],
  },
};
