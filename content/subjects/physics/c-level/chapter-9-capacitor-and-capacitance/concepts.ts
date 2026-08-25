import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 9 — Capacitor and Capacitance.
// Matches the textbook's section list: capacitors; capacitance of a
// capacitor; the parallel-plate capacitor; energy stored in a
// capacitor; combination of capacitors.
export const chapter9CCapacitorConcepts: Record<string, Concept> = {
  'capacitors': {
    slug: 'capacitors',
    title: 'Capacitors',
    difficulty: 'easy',
    simpleExplanation:
      'A capacitor is a device that stores electrical charge (and energy) on two conductive plates separated ' +
      'by an insulator — when connected to a voltage source, one plate accumulates positive charge and the other an equal negative charge.',
    whyItMatters:
      'Capacitors are essential components in nearly every electronic circuit — from smoothing power supplies ' +
      'to storing energy for camera flashes — making them one of the most widely used electrical components after resistors.',
    diagram: {
      id: 'capacitor-symbol-diagram',
      title: 'A charged capacitor: two plates with equal and opposite charge',
      altText: 'A schematic of a capacitor showing two parallel plates connected to wires, with the left plate labelled positive charge and the right plate labelled negative charge, and the voltage V marked across them',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-1, 0], to: [-0.15, 0] },
          { from: [0.15, 0], to: [1, 0] },
          { from: [-0.15, -0.6], to: [-0.15, 0.6] },
          { from: [0.15, -0.6], to: [0.15, 0.6] },
        ],
        points: [
          { x: -0.15, y: 0.6, label: '+Q', labelDx: -14, labelDy: -6 },
          { x: 0.15, y: 0.6, label: '−Q', labelDx: 14, labelDy: -6 },
          { x: 0, y: -1, label: 'V', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    workedExample: {
      id: 'capacitors-worked-1',
      title: 'Identify what happens when a capacitor is connected to a battery',
      problemStatement: 'A capacitor with both plates initially uncharged is connected to a 9 V battery. Describe what happens.',
      steps: [
        { step: 1, instruction: 'Identify what the battery does.', math: 'The battery pushes electrons onto one plate and pulls them off the other', explanation: 'This is exactly what a voltage source does to any conductor connected to it.' },
        { step: 2, instruction: 'Describe the resulting charge on each plate.', math: 'One plate becomes negatively charged (+electrons); the other becomes positively charged (−electrons)', explanation: 'The two plates end up with equal magnitude but opposite sign charge.' },
        { step: 3, instruction: 'Describe when charging stops.', math: "Charging stops once the capacitor's voltage equals the battery's voltage (9 V)", explanation: 'At that point, the battery can no longer push more charge onto the plates.' },
      ],
      finalAnswer: "The capacitor charges up until it reaches 9 V, with equal and opposite charge on its two plates.",
    },
    whyItWorks:
      'The insulating gap between the plates prevents charge from directly flowing across, so charge instead ' +
      "builds up on each plate's surface — an electric field forms in the gap between the accumulated charges, and this field (and the stored charge) persists even after the battery is disconnected.",
    realLifeExample: {
      title: "A camera's flash capacitor",
      scenario: 'A camera flash charges a capacitor slowly (over a second or two) from the battery, then discharges it almost instantly to power the bright flash.',
      explanation: 'The capacitor stores energy gradually but can release it far faster than the battery alone ' +
        'could supply, which is exactly what a sudden, bright flash requires.',
    },
    practiceQuestions: [
      {
        id: 'capacitors-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What happens to the two plates of a capacitor when it is connected to a battery?',
        hints: ['Think about where the charge on each plate comes from.'],
        options: [
          { id: 'a', text: 'They accumulate equal and opposite charge' },
          { id: 'b', text: 'They both become positively charged' },
          { id: 'c', text: 'Charge flows directly across the gap between them' },
          { id: 'd', text: 'Nothing happens unless the plates touch' },
        ],
        correctOptionId: 'a',
        explanation: 'One plate accumulates positive charge and the other an equal amount of negative charge, with the insulating gap preventing charge from crossing directly.',
      },
    ],
    commonMistake:
      "Assuming a capacitor lets current flow through it continuously, like a wire — a capacitor's insulating " +
      "gap blocks any actual charge from crossing between the plates; it only stores charge on each plate separately.",
    quickReview: [
      'A capacitor stores charge and energy on two plates separated by an insulator.',
      'The two plates accumulate equal and opposite charge.',
      'Used throughout electronics — power smoothing, energy storage, timing circuits.',
    ],
  },

  'capacitance-of-a-capacitor': {
    slug: 'capacitance-of-a-capacitor',
    title: 'Capacitance of a Capacitor',
    difficulty: 'medium',
    simpleExplanation:
      "A capacitor's capacitance (C) measures how much charge it stores per volt applied across it, C=Q/V — a " +
      'higher capacitance means the capacitor can hold more charge for the same voltage.',
    whyItMatters:
      'Capacitance is the single number that characterizes a capacitor — every other capacitor formula in this ' +
      "chapter (energy stored, combinations, the parallel-plate design) builds directly on this definition.",
    formulaSlug: 'capacitance-definition-formula',
    workedExample: {
      id: 'capacitance-worked-1',
      title: "Find a capacitor's capacitance",
      problemStatement: 'A capacitor stores 0.002 C of charge when connected across a 100 V source. Find its capacitance.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'Q=0.002 C,  V=100 V', explanation: 'Charge stored and voltage applied.' },
        { step: 2, instruction: 'Apply the capacitance formula.', math: 'C = Q/V = 0.002/100', explanation: 'Divide charge by voltage.' },
        { step: 3, instruction: 'Compute the result.', math: 'C = 2×10⁻⁵ F = 20 μF', explanation: 'Capacitance values are usually written in microfarads (μF) or smaller units, since a farad is a very large unit.' },
      ],
      finalAnswer: 'C = 20 μF.',
    },
    whyItWorks:
      "Capacitance is DEFINED as this ratio — it is a property of the capacitor's own physical construction " +
      '(plate size, spacing, and material), so the same capacitor stores proportionally more charge as more ' +
      'voltage is applied, keeping Q/V constant regardless of the specific voltage used.',
    realLifeExample: {
      title: 'Choosing a capacitor for a circuit',
      scenario: 'An electronics engineer selects a capacitor with a specific capacitance rating (like 100 μF) printed on its casing for a particular circuit design.',
      explanation: 'That printed rating tells the engineer exactly how much charge the capacitor will store per ' +
        'volt applied — critical information for predicting how the circuit will behave.',
    },
    practiceQuestions: [
      {
        id: 'capacitance-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A capacitor stores 0.0005 C of charge across a 50 V source. Find its capacitance, in μF.',
        hints: ['C = Q/V, then convert farads to microfarads (×10⁶).'],
        correctAnswer: 10,
        explanation: 'C = 0.0005/50 = 1×10⁻⁵ F = 10 μF.',
      },
    ],
    commonMistake:
      'Forgetting that a farad is an enormous unit for everyday capacitors — most real capacitors have ' +
      'capacitances measured in microfarads (μF, 10⁻⁶ F) or picofarads (pF, 10⁻¹² F), not whole farads.',
    quickReview: [
      'C = Q/V, in farads.',
      "Capacitance is a fixed property of the capacitor's construction.",
      'Real capacitors are usually μF or pF, not whole farads.',
    ],
  },

  'parallel-plate-capacitor': {
    slug: 'parallel-plate-capacitor',
    title: 'The Parallel-Plate Capacitor',
    difficulty: 'medium',
    simpleExplanation:
      'The simplest capacitor design is two flat, parallel conducting plates separated by a small gap — its ' +
      'capacitance, C=ε₀εᵣA/d, depends only on the plate area, the plate separation, and the insulating material (dielectric) between them.',
    whyItMatters:
      'This formula connects a capacitor\'s physical design directly to its electrical behavior, letting ' +
      'engineers design a capacitor with a specific target capacitance before it is even built.',
    diagram: {
      id: 'parallel-plate-diagram',
      title: 'A parallel-plate capacitor, with a uniform electric field between the plates',
      altText: 'Two horizontal plates of area A separated by a gap of distance d, with several downward arrows between them representing the uniform electric field from the positive plate to the negative plate',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-2, 1], to: [2, 1], label: 'Area A', labelDx: 0, labelDy: -10 },
          { from: [-2, -1], to: [2, -1] },
          { from: [-1.2, 1], to: [-1.2, -1], arrow: true },
          { from: [-0.4, 1], to: [-0.4, -1], arrow: true },
          { from: [0.4, 1], to: [0.4, -1], arrow: true },
          { from: [1.2, 1], to: [1.2, -1], arrow: true },
          { from: [2.3, 1], to: [2.3, -1], dashed: true, label: 'd', labelDx: 14, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'parallel-plate-capacitance-formula',
    workedExample: {
      id: 'parallel-plate-worked-1',
      title: "Find a parallel-plate capacitor's capacitance",
      problemStatement: 'A parallel-plate capacitor has plates of area 0.02 m², separated by 0.001 m of air (εᵣ=1). Find its capacitance.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'A=0.02 m²,  d=0.001 m,  εᵣ=1,  ε₀=8.85×10⁻¹² F/m', explanation: 'Plate area, separation, and dielectric constant.' },
        { step: 2, instruction: 'Apply the parallel-plate capacitance formula.', math: 'C = ε₀εᵣA/d = (8.85×10⁻¹²)(1)(0.02)/0.001', explanation: 'Substitute all four values.' },
        { step: 3, instruction: 'Compute the result.', math: 'C = 1.77×10⁻¹⁰ F = 177 pF', explanation: 'A typical, small capacitance for an air-gap parallel-plate design.' },
      ],
      finalAnswer: 'C = 177 pF.',
    },
    whyItWorks:
      'A larger plate area lets more charge spread across the surface for the same voltage (increasing Q/V), ' +
      "while a smaller gap between plates makes the field between them (and hence the charge needed to reach a " +
      "given voltage) stronger for the same charge — a dielectric material further increases capacitance by reducing the field's effective strength for the same charge, letting more charge accumulate.",
    realLifeExample: {
      title: 'A touchscreen sensing a finger tap',
      scenario: "A capacitive touchscreen detects a finger touch by measuring a tiny local change in capacitance.",
      explanation: "A finger (which conducts electricity) effectively acts like a second nearby plate, changing " +
        "the local capacitance — exactly the kind of change C=ε₀εᵣA/d predicts from a change in effective geometry.",
    },
    practiceQuestions: [
      {
        id: 'parallel-plate-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A parallel-plate capacitor has plates of area 0.01 m², separated by 0.0005 m, with a dielectric of εᵣ=2. Find its capacitance, in pF.',
        hints: ['C = ε₀εᵣA/d, then convert to pF (×10¹²).'],
        correctAnswer: 354,
        tolerance: 2,
        explanation: 'C = (8.85×10⁻¹²)(2)(0.01)/0.0005 = 3.54×10⁻¹⁰ F = 354 pF.',
      },
    ],
    commonMistake:
      "Forgetting the dielectric constant εᵣ when a material other than a vacuum or air fills the gap — using " +
      "εᵣ=1 for a capacitor that actually has an insulating material between its plates underestimates the true capacitance.",
    quickReview: [
      'C = ε₀εᵣA/d.',
      'Larger area or a dielectric material increases capacitance; larger separation decreases it.',
      'Connects a capacitor\'s physical design directly to its electrical behavior.',
    ],
  },

  'energy-stored-in-a-capacitor': {
    slug: 'energy-stored-in-a-capacitor',
    title: 'Energy Stored in a Capacitor',
    difficulty: 'medium',
    simpleExplanation:
      "A charged capacitor stores energy in the electric field between its plates: E=½CV² — this energy grows " +
      'with the capacitance, and steeply (as the square) with the voltage applied.',
    whyItMatters:
      "This stored energy is exactly what makes capacitors useful for quick energy release — from a camera " +
      'flash to backup power for electronics during brief power interruptions.',
    formulaSlug: 'capacitor-energy-formula',
    workedExample: {
      id: 'energy-stored-worked-1',
      title: 'Find the energy stored in a charged capacitor',
      problemStatement: 'A 100 μF capacitor is charged to 12 V. Find the energy it stores.',
      steps: [
        { step: 1, instruction: 'Write down the known values, in consistent units.', math: 'C=100 μF=1×10⁻⁴ F,  V=12 V', explanation: 'Convert microfarads to farads.' },
        { step: 2, instruction: 'Apply the energy formula.', math: 'E = ½CV² = 0.5(1×10⁻⁴)(12²)', explanation: 'Substitute capacitance and voltage.' },
        { step: 3, instruction: 'Compute the result.', math: 'E = 0.5(1×10⁻⁴)(144) = 7.2×10⁻³ J', explanation: 'Equal to 7.2 millijoules.' },
      ],
      finalAnswer: 'E = 7.2×10⁻³ J (7.2 mJ).',
    },
    whyItWorks:
      "Charging a capacitor requires doing work against the growing electric field as more charge is added — " +
      "the first bit of charge takes little work (the field starts at zero), but each successive bit of charge " +
      "requires more work as the field grows, and integrating this increasing effort over the whole charging process produces exactly the ½CV² result.",
    realLifeExample: {
      title: 'A defibrillator delivering a controlled shock',
      scenario: 'A medical defibrillator charges an internal capacitor over several seconds, then discharges it almost instantly through a patient to restart a normal heart rhythm.',
      explanation: 'The energy calculated from E=½CV² is precisely calibrated by the device to deliver a ' +
        'therapeutic (not dangerous) amount of energy — capacitors are used specifically because they can release that stored energy in an extremely short, controlled pulse.',
    },
    practiceQuestions: [
      {
        id: 'energy-stored-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 200 μF capacitor is charged to 10 V. Find the energy it stores, in mJ.',
        hints: ['E = ½CV², converting μF to F first.'],
        correctAnswer: 10,
        explanation: 'E = 0.5(2×10⁻⁴)(10²) = 0.5(2×10⁻⁴)(100) = 1×10⁻² J = 10 mJ.',
      },
    ],
    commonMistake:
      "Forgetting to square the voltage — since V is squared in the formula, DOUBLING the voltage QUADRUPLES " +
      "the stored energy, not just doubles it.",
    quickReview: [
      'E = ½CV².',
      'Energy grows with the SQUARE of voltage.',
      'Enables quick, controlled release of stored energy (camera flashes, defibrillators).',
    ],
  },

  'capacitors-in-series-and-parallel': {
    slug: 'capacitors-in-series-and-parallel',
    title: 'Combination of Capacitors',
    difficulty: 'hard',
    simpleExplanation:
      'Combining capacitors in series always REDUCES the total capacitance (below even the smallest individual ' +
      'one), following 1/C=1/C₁+1/C₂+…, while combining them in parallel always INCREASES it, following C=C₁+C₂+… — the opposite pattern from resistors.',
    whyItMatters:
      'Real circuits rarely use just one capacitor — combining several lets engineers reach a precise target ' +
      'capacitance (or voltage rating) not achievable with a single off-the-shelf component.',
    diagram: {
      id: 'capacitor-series-diagram',
      title: 'Two capacitors connected in series',
      altText: 'Two capacitor symbols connected end-to-end in a single line, sharing the same charge Q, with the total voltage split across both',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-3, 0], to: [-1.65, 0] },
          { from: [-1.65, -0.6], to: [-1.65, 0.6] },
          { from: [-1.35, -0.6], to: [-1.35, 0.6] },
          { from: [-1.35, 0], to: [1.35, 0] },
          { from: [1.35, -0.6], to: [1.35, 0.6] },
          { from: [1.65, -0.6], to: [1.65, 0.6] },
          { from: [1.65, 0], to: [3, 0] },
        ],
        points: [
          { x: -1.5, y: -0.9, label: 'C₁', labelDx: 0, labelDy: 0 },
          { x: 1.5, y: -0.9, label: 'C₂', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'capacitor-combination-formula',
    workedExample: {
      id: 'capacitor-combination-worked-1',
      title: 'Find the total capacitance of two capacitors in series',
      problemStatement: 'Find the total capacitance of a 4 μF and a 6 μF capacitor connected in series.',
      steps: [
        { step: 1, instruction: 'Write down the series combination formula.', math: '1/C = 1/C₁ + 1/C₂ = 1/4 + 1/6', explanation: 'Add the reciprocals of each capacitance.' },
        { step: 2, instruction: 'Find a common denominator and add.', math: '1/4 + 1/6 = 3/12 + 2/12 = 5/12', explanation: '12 is the least common denominator of 4 and 6.' },
        { step: 3, instruction: 'Solve for C.', math: 'C = 12/5 = 2.4 μF', explanation: 'Take the reciprocal of 5/12.' },
      ],
      finalAnswer: 'C = 2.4 μF.',
    },
    whyItWorks:
      'Capacitors in series all carry the SAME charge Q (since it is the same charge that flows onto and off ' +
      'every plate in the chain), but the total voltage splits across them — since C=Q/V, a larger total V for ' +
      'the same Q means a SMALLER equivalent capacitance, exactly the reciprocal-sum relationship. In parallel, ' +
      'all capacitors share the SAME voltage but each stores its own charge, so the total charge (and ' +
      'therefore capacitance) simply adds.',
    realLifeExample: {
      title: 'Combining capacitors to reach a higher voltage rating',
      scenario: 'An engineer needs a capacitor rated for a higher voltage than any single available component can safely handle.',
      explanation: 'Connecting several capacitors in series splits the total voltage across each one, letting ' +
        "the combination safely handle a higher total voltage than any single capacitor alone — at the cost of a lower total capacitance.",
    },
    practiceQuestions: [
      {
        id: 'capacitor-combination-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the total capacitance of a 4 μF and a 6 μF capacitor connected in PARALLEL.',
        hints: ['C_parallel = C₁ + C₂.'],
        correctAnswer: 10,
        explanation: 'C = 4 + 6 = 10 μF.',
      },
    ],
    commonMistake:
      'Using the series formula for a parallel combination or vice versa — capacitors combine in EXACTLY the ' +
      'opposite pattern from resistors (where series adds directly and parallel uses reciprocals), which is a common source of confusion.',
    quickReview: [
      '1/C_series = 1/C₁+1/C₂+…  (always less than the smallest individual C).',
      'C_parallel = C₁+C₂+…  (always more than the largest individual C).',
      'Opposite pattern from how resistors combine.',
    ],
  },
};
