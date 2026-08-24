import type { Concept } from '@/types/content';

export const chapter10CurrentConcepts: Record<string, Concept> = {
  'current-and-effects-of-current': {
    slug: 'current-and-effects-of-current',
    title: 'Current and Effects of Current',
    difficulty: 'easy',
    simpleExplanation:
      'Electric current is the flow of electric charge (typically electrons) through a conductor, ' +
      'measured in amperes (A). Current produces several observable effects: heating (Joule heating), ' +
      'magnetic effects (a current-carrying wire creates a magnetic field), and chemical effects ' +
      '(electrolysis).',
    whyItMatters:
      "These effects of current are the basis for countless technologies — heating elements, electric " +
      "motors and generators (via the magnetic effect), and electroplating (via the chemical effect) all " +
      "rely on a specific effect of electric current.",
    formulaSlug: 'current-formula',
    workedExample: {
      id: 'current-effects-we-1',
      title: 'Finding the charge that flows',
      problemStatement: 'A current of 2.5 A flows through a wire for 40 seconds. Find the total charge that flows.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for Q.', math: 'Q = It', explanation: 'I = 2.5 A, t = 40 s.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'Q = 2.5 × 40 = 100 C', explanation: 'Multiply current by time.' },
      ],
      finalAnswer: 'Total charge = 100 C.',
    },
    whyItWorks:
      "Current fundamentally is charge in motion — I = Q/t simply expresses how much charge passes a " +
      "given point per unit time, exactly parallel to how speed measures distance covered per unit time.",
    realLifeExample: {
      title: 'An electric heater',
      scenario: 'An electric heater warms a room using electrical current flowing through a resistive element.',
      explanation: "As current flows through the heater's resistive wire, electrical energy converts into heat (Joule heating) due to collisions between moving electrons and the wire's atoms — a direct, everyday application of the heating effect of current.",
    },
    practiceQuestions: [
      {
        id: 'current-effects-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A charge of 60 C flows through a wire in 20 seconds. Find the current.',
        hints: ['I = Q/t.'],
        correctAnswer: 3,
        tolerance: 0.1,
        unit: 'A',
        explanation: 'I = 60/20 = 3 A.',
      },
    ],
    commonMistake:
      "Confusing current (rate of charge flow, in amperes) with charge itself (a quantity, in coulombs) " +
      "— current is a RATE, so it always involves a time component.",
    quickReview: [
      'I = Q/t: current is the rate of charge flow.',
      'Three effects of current: heating, magnetic, chemical.',
      'Each effect underlies different technologies (heaters, motors, electroplating).',
    ],
  },

  'ohms-law-and-resistance': {
    slug: 'ohms-law-and-resistance',
    title: "Ohm's Law and Electrical Resistance",
    difficulty: 'medium',
    simpleExplanation:
      "Ohm's law states that for many conductors, the current flowing through them is directly " +
      "proportional to the potential difference (voltage) applied across them, as long as temperature " +
      "stays constant. Resistance measures how strongly a component opposes the flow of current.",
    whyItMatters:
      "Ohm's law is one of the most fundamental and widely used relationships in all of electricity, " +
      "essential for analysing and designing virtually every circuit.",
    formulaSlug: 'ohms-law-formula',
    workedExample: {
      id: 'ohms-law-we-1',
      title: 'Finding current using Ohm\'s law',
      problemStatement: 'A 12 V battery is connected across a resistor of 4 Ω. Find the current flowing.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for I.', math: 'I = V/R', explanation: 'V = 12 V, R = 4 Ω.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'I = 12/4 = 3 A', explanation: 'Divide voltage by resistance.' },
      ],
      finalAnswer: 'Current = 3 A.',
    },
    whyItWorks:
      "In an ohmic conductor, increasing voltage pushes charge carriers through the material with " +
      "proportionally more force, driving proportionally more current — as long as the material's " +
      "resistance itself doesn't change (e.g. due to heating), this produces a directly proportional, " +
      "linear relationship between V and I.",
    realLifeExample: {
      title: 'Choosing a resistor for an LED',
      scenario: 'A small resistor is often placed in series with an LED to limit current and prevent it from burning out.',
      explanation: "Using Ohm's law, an engineer can calculate exactly which resistance value limits the current to a safe level for a given supply voltage, protecting the LED from excessive current.",
    },
    practiceQuestions: [
      {
        id: 'ohms-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A current of 0.5 A flows through a resistor with a potential difference of 6 V across it. Find the resistance.',
        hints: ['R = V/I.'],
        correctAnswer: 12,
        tolerance: 0.3,
        unit: 'Ω',
        explanation: 'R = 6/0.5 = 12 Ω.',
      },
    ],
    commonMistake:
      "Assuming Ohm's law applies to every electrical component — some components (like diodes and " +
      "filament bulbs at varying temperature) are non-ohmic, meaning their V-I relationship is not a " +
      "simple straight line.",
    quickReview: [
      "V = IR (Ohm's law) for ohmic conductors at constant temperature.",
      'Resistance measures opposition to current flow, in ohms (Ω).',
      'Not all components are ohmic (e.g. diodes, filament bulbs at varying temperature).',
    ],
  },

  'resistors-b-level': {
    slug: 'resistors-b-level',
    title: 'Resistors',
    difficulty: 'medium',
    simpleExplanation:
      "A resistor is a component specifically designed to provide a known, controlled amount of " +
      "resistance in a circuit. A conductor's resistance depends on the material it's made from " +
      "(resistivity), as well as its length and cross-sectional area.",
    whyItMatters:
      "Resistors are among the most fundamental components in electronics, used to control current, " +
      "divide voltage, and protect other components from excessive current.",
    formulaSlug: 'resistivity-formula',
    workedExample: {
      id: 'resistors-we-1',
      title: "Finding a wire's resistance",
      problemStatement: 'A wire has a resistivity of 1.7 × 10⁻⁸ Ω·m, a length of 2 m, and a cross-sectional area of 1 × 10⁻⁶ m². Find its resistance.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'R = ρL/A', explanation: 'ρ = 1.7×10⁻⁸ Ω·m, L = 2 m, A = 1×10⁻⁶ m².' },
        { step: 2, instruction: 'Substitute values.', math: 'R = (1.7×10⁻⁸ × 2)/(1×10⁻⁶)', explanation: 'Multiply resistivity by length, then divide by area.' },
        { step: 3, instruction: 'Calculate.', math: 'R = (3.4×10⁻⁸)/(1×10⁻⁶) = 0.034 Ω', explanation: 'Simplify the fraction.' },
      ],
      finalAnswer: 'Resistance = 0.034 Ω.',
    },
    whyItWorks:
      "A longer conductor gives charge carriers more material to travel through (more resistance), while " +
      "a wider cross-section gives them more 'room' to flow through simultaneously (less resistance) — " +
      "resistivity itself captures how strongly a specific material inherently resists current flow, " +
      "independent of its shape.",
    realLifeExample: {
      title: 'Why thick electrical cables are used for high-current appliances',
      scenario: 'High-power appliances (like electric ovens) use thicker cables than low-power devices (like phone chargers).',
      explanation: "Since resistance is inversely proportional to cross-sectional area, thicker cables have lower resistance — this reduces unwanted heating (and energy loss) in the cable itself when carrying the large currents that high-power appliances need.",
    },
    practiceQuestions: [
      {
        id: 'resistors-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A wire has resistivity 2.8 × 10⁻⁸ Ω·m, length 5 m, and area 2 × 10⁻⁶ m². Find its resistance.',
        hints: ['R = ρL/A.'],
        correctAnswer: 0.07,
        tolerance: 0.005,
        unit: 'Ω',
        explanation: 'R = (2.8×10⁻⁸ × 5)/(2×10⁻⁶) = (14×10⁻⁸)/(2×10⁻⁶) = 0.07 Ω.',
      },
    ],
    commonMistake:
      "Confusing resistivity (a property of the material, independent of shape) with resistance (a " +
      "property of a specific object, dependent on both material AND shape/dimensions) — this mirrors " +
      "the specific heat capacity vs. thermal capacity distinction from an earlier chapter.",
    quickReview: [
      'R = ρL/A: resistance depends on material (resistivity), length, and cross-sectional area.',
      'Longer conductors have more resistance; wider conductors have less.',
      'Resistivity is a material property; resistance depends on both material and shape.',
    ],
  },

  'resistors-in-series-b-level': {
    slug: 'resistors-in-series-b-level',
    title: 'Resistors in Series',
    difficulty: 'medium',
    simpleExplanation:
      'When resistors are connected in series (one after another, forming a single path for current), ' +
      'their resistances simply add together to give the total (equivalent) resistance — the total is ' +
      'always greater than any individual resistor in the combination.',
    whyItMatters:
      "Series combinations are one of the two fundamental ways to combine resistors, and understanding " +
      "when to add resistances directly (as opposed to using the parallel formula) is essential for " +
      "circuit analysis.",
    formulaSlug: 'series-resistance-formula',
    workedExample: {
      id: 'series-resistance-we-1',
      title: 'Finding total series resistance',
      problemStatement: 'Three resistors of 4 Ω, 6 Ω, and 10 Ω are connected in series. Find the total resistance.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Rₛ = R₁ + R₂ + R₃', explanation: 'R₁ = 4 Ω, R₂ = 6 Ω, R₃ = 10 Ω.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'Rₛ = 4 + 6 + 10 = 20 Ω', explanation: 'Simply add the resistances.' },
      ],
      finalAnswer: 'Total resistance = 20 Ω.',
    },
    whyItWorks:
      "In a series circuit, the same current must flow through every resistor one after another — each " +
      "resistor adds its own opposition to that single current path, so the total opposition (resistance) " +
      "is simply the sum of each individual opposition, exactly like walking through several doorways of " +
      "different widths one after another slows you down by the sum of each individual delay.",
    realLifeExample: {
      title: 'Old-style string Christmas lights',
      scenario: 'Older strings of Christmas lights sometimes go completely dark if just one bulb burns out.',
      explanation: 'These lights are wired in series — since series components share a single current path, a broken bulb (infinite resistance) completely interrupts the entire path, stopping current everywhere in the string.',
    },
    practiceQuestions: [
      {
        id: 'series-resistance-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two resistors of 15 Ω and 25 Ω are connected in series. Find the total resistance.',
        hints: ['Rₛ = R₁ + R₂.'],
        correctAnswer: 40,
        tolerance: 0.5,
        unit: 'Ω',
        explanation: 'Rₛ = 15 + 25 = 40 Ω.',
      },
    ],
    commonMistake:
      "Applying the series formula to resistors that are actually connected in parallel — always check " +
      "the circuit topology (single path vs. multiple paths) before choosing the series or parallel " +
      "formula.",
    quickReview: [
      'Rₛ = R₁ + R₂ + R₃ + ... for resistors in series.',
      'Series total resistance is always greater than any individual resistor.',
      'Series components share a single current path — one break interrupts the whole circuit.',
    ],
  },

  'resistors-in-parallel-b-level': {
    slug: 'resistors-in-parallel-b-level',
    title: 'Resistors in Parallel',
    difficulty: 'hard',
    simpleExplanation:
      'When resistors are connected in parallel (across the same two points, providing multiple separate ' +
      'paths for current), the total (equivalent) resistance is found using the reciprocal formula — and ' +
      'the total resistance is always LESS than the smallest individual resistor in the combination.',
    whyItMatters:
      "Parallel combinations are the second fundamental way resistors combine, and are essential for " +
      "understanding household electrical wiring, where appliances are connected in parallel so each " +
      "operates independently.",
    formulaSlug: 'parallel-resistance-formula',
    workedExample: {
      id: 'parallel-resistance-we-1',
      title: 'Finding total parallel resistance',
      problemStatement: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. Find the total resistance.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: '1/Rₚ = 1/R₁ + 1/R₂', explanation: 'R₁ = 6 Ω, R₂ = 3 Ω.' },
        { step: 2, instruction: 'Substitute values.', math: '1/Rₚ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6', explanation: 'Find a common denominator.' },
        { step: 3, instruction: 'Solve for Rₚ.', math: '1/Rₚ = 1/2 → Rₚ = 2 Ω', explanation: 'Take the reciprocal of both sides.' },
      ],
      finalAnswer: 'Total resistance = 2 Ω.',
    },
    whyItWorks:
      "In a parallel circuit, current has multiple independent paths to choose from — adding more parallel " +
      "paths always makes it EASIER (not harder) for current to flow overall, which is exactly why total " +
      "resistance decreases (rather than increases) as more resistors are added in parallel, opposite to " +
      "the series case.",
    realLifeExample: {
      title: 'Household electrical wiring',
      scenario: 'Appliances plugged into different outlets in a house all work independently — switching one off does not affect the others.',
      explanation: 'Household circuits wire appliances in parallel specifically so each receives the full mains voltage and operates independently — this also means adding more appliances (more parallel paths) actually decreases the overall circuit resistance and increases total current drawn from the supply.',
    },
    practiceQuestions: [
      {
        id: 'parallel-resistance-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Two resistors of 12 Ω and 4 Ω are connected in parallel. Find the total resistance.',
        hints: ['1/Rₚ = 1/R₁ + 1/R₂.'],
        correctAnswer: 3,
        tolerance: 0.1,
        unit: 'Ω',
        explanation: '1/Rₚ = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3 → Rₚ = 3 Ω.',
      },
    ],
    commonMistake:
      "Forgetting to take the final reciprocal — a very common error is calculating 1/Rₚ correctly but " +
      "then stating that value AS Rₚ, instead of taking its reciprocal to find the actual total resistance.",
    quickReview: [
      '1/Rₚ = 1/R₁ + 1/R₂ + ... for resistors in parallel.',
      'Parallel total resistance is always LESS than the smallest individual resistor.',
      'Parallel components operate independently — one branch failing doesn\'t stop current in the others.',
    ],
  },

  'magnetic-field-due-to-current': {
    slug: 'magnetic-field-due-to-current',
    title: 'Magnetic Field Due to an Electric Current',
    difficulty: 'medium',
    simpleExplanation:
      "Any electric current produces a magnetic field around it — this is the magnetic effect of current, " +
      "discovered by Oersted. For a straight current-carrying wire, the field forms concentric circles " +
      "around the wire; the direction is found using the right-hand grip rule.",
    whyItMatters:
      "This discovery revealed a deep connection between electricity and magnetism, and is the working " +
      "principle behind electric motors, generators, and countless other electromagnetic devices.",
    whyItWorks:
      "Moving electric charges (current) create a magnetic field as a fundamental consequence of how " +
      "electric and magnetic phenomena are related (formally described by Maxwell's equations) — a " +
      "steady current in a straight wire produces a magnetic field whose strength decreases with distance " +
      "from the wire and whose direction circles the wire according to the right-hand grip rule.",
    realLifeExample: {
      title: "Oersted's discovery with a compass",
      scenario: 'Oersted noticed a nearby compass needle deflected whenever current flowed through a wire.',
      explanation: "This accidental observation was the first direct evidence that electric current produces a magnetic field — the compass needle, sensitive to magnetic fields, responded to the field created by the current-carrying wire, launching the field of electromagnetism.",
    },
    practiceQuestions: [
      {
        id: 'magnetic-field-current-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "What shape does the magnetic field take around a long, straight current-carrying wire?",
        options: [
          { id: 'a', text: 'Concentric circles around the wire.' },
          { id: 'b', text: 'Straight lines parallel to the wire.' },
          { id: 'c', text: 'No magnetic field is produced by a straight wire.' },
          { id: 'd', text: 'A single point at the centre of the wire.' },
        ],
        correctOptionId: 'a',
        hints: ['The right-hand grip rule describes this field pattern.'],
        explanation: 'The magnetic field around a straight current-carrying wire forms concentric circles, with direction given by the right-hand grip rule.',
      },
    ],
    commonMistake:
      "Thinking only permanent magnets can produce magnetic fields — ANY moving electric charge (i.e. any " +
      "current) produces a magnetic field, whether or not any traditional magnet is involved.",
    quickReview: [
      'Any electric current produces a surrounding magnetic field.',
      'For a straight wire, the field forms concentric circles (right-hand grip rule).',
      "Oersted's compass experiment first demonstrated this electricity-magnetism connection.",
    ],
  },

  electromagnets: {
    slug: 'electromagnets',
    title: 'Electromagnets',
    difficulty: 'easy',
    simpleExplanation:
      'An electromagnet is a magnet whose field is created by an electric current, typically by winding ' +
      'wire into a coil (solenoid) and often wrapping it around a soft iron core to strengthen the field. ' +
      'Unlike a permanent magnet, an electromagnet can be switched on and off, and its strength controlled, ' +
      'simply by controlling the current.',
    whyItMatters:
      "Electromagnets are used in an enormous range of technologies — from electric motors and " +
      "loudspeakers to industrial cranes and MRI machines — precisely because their strength and state " +
      "can be controlled electrically.",
    whyItWorks:
      "Winding a wire into a coil concentrates and combines the magnetic field from each turn of the " +
      "wire, producing a much stronger overall field than a single straight wire; adding a soft iron core " +
      "further strengthens the field, since iron becomes strongly magnetised in the presence of the coil's " +
      "field, adding its own magnetic contribution — but this induced magnetism disappears when the " +
      "current (and coil field) stops.",
    realLifeExample: {
      title: 'Electromagnetic cranes at scrapyards',
      scenario: 'Large electromagnetic cranes lift and move heavy scrap metal at recycling yards.',
      explanation: "These cranes use powerful electromagnets that can be switched on to grip metal firmly, then switched off to release it precisely where needed — a task a permanent magnet (always 'on') could never perform as conveniently.",
    },
    practiceQuestions: [
      {
        id: 'electromagnets-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the key practical advantage of an electromagnet over a permanent magnet?',
        options: [
          { id: 'a', text: 'Its strength (and on/off state) can be controlled by controlling the current.' },
          { id: 'b', text: 'Electromagnets never lose their magnetism.' },
          { id: 'c', text: 'Electromagnets require no electricity at all.' },
          { id: 'd', text: 'Electromagnets are always weaker than permanent magnets.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about the crane example — why not just use a permanent magnet?'],
        explanation: 'Unlike a permanent magnet, an electromagnet\'s field can be turned on, off, or adjusted in strength simply by controlling the current.',
      },
    ],
    commonMistake:
      "Assuming a soft iron core alone makes something an electromagnet — the core enhances the field " +
      "created by current in the coil, but it's the CURRENT (not the core alone) that is essential; " +
      "without current, a soft iron core has no significant permanent magnetism of its own.",
    quickReview: [
      'Electromagnets: magnetic field created by current in a coil, strengthened with a soft iron core.',
      'Strength and on/off state can be controlled electrically.',
      'Used wherever controllable magnetism is needed (motors, cranes, MRI).',
    ],
  },

  'ammeter-and-voltmeter': {
    slug: 'ammeter-and-voltmeter',
    title: 'Ammeter and Voltmeter',
    difficulty: 'medium',
    simpleExplanation:
      "An ammeter measures current and must be connected IN SERIES in a circuit (so all the current to be " +
      "measured flows through it). A voltmeter measures potential difference and must be connected IN " +
      "PARALLEL across the component being measured.",
    whyItMatters:
      "Connecting these instruments correctly is essential — connecting them the wrong way can give " +
      "inaccurate readings or even damage the instrument or circuit.",
    whyItWorks:
      "An ammeter is designed with very LOW resistance, so inserting it in series barely affects the " +
      "circuit's current — it simply lets all the current pass through while measuring it. A voltmeter is " +
      "designed with very HIGH resistance, so connecting it in parallel draws only a tiny, negligible " +
      "current, letting it measure potential difference without significantly altering the circuit it's " +
      "measuring.",
    realLifeExample: {
      title: 'Why an ammeter connected in parallel could be dangerous',
      scenario: "Accidentally connecting an ammeter in parallel (like a voltmeter) across a component can cause a dangerously large current to flow.",
      explanation: "Because an ammeter has very low resistance, connecting it in parallel effectively creates a short circuit — a large, potentially damaging or dangerous current would flow through the ammeter, which is exactly why ammeters must always be connected in series.",
    },
    practiceQuestions: [
      {
        id: 'ammeter-voltmeter-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How should a voltmeter be connected to correctly measure the potential difference across a resistor?',
        options: [
          { id: 'a', text: 'In parallel across the resistor.' },
          { id: 'b', text: 'In series with the resistor.' },
          { id: 'c', text: 'It does not matter how it is connected.' },
          { id: 'd', text: 'Directly across the battery terminals only, never across a resistor.' },
        ],
        correctOptionId: 'a',
        hints: ['A voltmeter measures a DIFFERENCE between two points.'],
        explanation: 'A voltmeter must be connected in parallel across the component to correctly measure the potential difference between its two ends.',
      },
    ],
    commonMistake:
      "Mixing up which instrument goes in series and which goes in parallel — remember: Ammeter = " +
      "series (low resistance, lets current through); Voltmeter = parallel (high resistance, measures " +
      "difference without disrupting the circuit).",
    quickReview: [
      'Ammeter: measures current, connected in SERIES, has very low resistance.',
      'Voltmeter: measures potential difference, connected in PARALLEL, has very high resistance.',
      'Wrong connection (e.g. ammeter in parallel) can cause dangerous currents or inaccurate readings.',
    ],
  },
};
