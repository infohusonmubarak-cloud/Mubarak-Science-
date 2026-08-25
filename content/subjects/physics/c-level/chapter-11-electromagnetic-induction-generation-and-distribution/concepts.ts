import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 11 — Electromagnetic Induction,
// Generation and Distribution of Electricity. Matches the textbook's
// section list: alternating current; electromagnetic induction;
// Faraday's law and Lenz's law; applications of induction; power
// transmission; house wiring; dangers of electricity.
export const chapter11CInductionConcepts: Record<string, Concept> = {
  'alternating-current': {
    slug: 'alternating-current',
    title: 'Alternating Current',
    difficulty: 'medium',
    simpleExplanation:
      'Alternating current (AC) periodically reverses direction, following a sine wave v=V0sin(ωt), unlike ' +
      'direct current (DC) which flows steadily in one direction. Since AC constantly changes, its "effective" ' +
      'voltage for delivering power is its RMS value, V_rms=V0/sqrt(2), not its peak.',
    whyItMatters:
      'Virtually all mains electricity (the power from a wall outlet) is AC — understanding its peak and RMS ' +
      'values is essential for safely and correctly working with real-world electrical power.',
    diagram: {
      id: 'ac-waveform-diagram',
      title: 'An alternating voltage waveform, v = V0 sin(omega t)',
      altText: 'A sine wave oscillating between a positive peak and a negative peak, repeating periodically, with the peak value marked',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (t: number) => 170 * Math.sin(t),
        min: 0,
        max: 12.57,
        markPoints: [
          { x: 1.5708, y: 170, label: 'peak V0' },
        ],
        xLabel: 'omega t',
        yLabel: 'v (V)',
      },
    },
    formulaSlug: 'rms-voltage-formula',
    workedExample: {
      id: 'ac-worked-1',
      title: 'Find the RMS voltage of an AC supply',
      problemStatement: 'An AC supply has a peak voltage of 170 V. Find its RMS voltage.',
      steps: [
        { step: 1, instruction: 'Write down the known value.', math: 'V0 = 170 V', explanation: 'The peak (maximum) voltage.' },
        { step: 2, instruction: 'Apply the RMS voltage formula.', math: 'V_rms = V0 / sqrt(2) = 170 / 1.4142', explanation: 'Divide the peak by the square root of 2.' },
        { step: 3, instruction: 'Compute the result.', math: 'V_rms = 120.2 V', explanation: 'This matches the standard 120 V mains supply used in North America.' },
      ],
      finalAnswer: 'V_rms = 120.2 V.',
    },
    whyItWorks:
      'Squaring a sine wave, averaging that square over a full cycle, then taking the square root, gives ' +
      'exactly V0/sqrt(2) — this "root of the mean of the square" process is precisely what makes the RMS value ' +
      "deliver the same average power as a steady DC voltage of that same value.",
    realLifeExample: {
      title: 'Why a "230 V" wall outlet is actually a moving target',
      scenario: 'A wall outlet rated "230 V" (common in much of the world) does not actually stay at 230 V for even an instant.',
      explanation: 'That 230 V is the RMS value — the actual instantaneous voltage constantly swings between a ' +
        'peak of about +325 V and a trough of about -325 V, sixty (or fifty) times each second.',
    },
    practiceQuestions: [
      {
        id: 'ac-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An AC supply has a peak voltage of 311 V. Find its RMS voltage, rounded to the nearest whole volt.',
        hints: ['V_rms = V0 / sqrt(2).'],
        correctAnswer: 220,
        explanation: 'V_rms = 311 / 1.4142 approximately 220 V.',
      },
    ],
    commonMistake:
      'Assuming the RMS voltage and the peak voltage are the same thing — the peak is always higher than the ' +
      'RMS value by a factor of sqrt(2), about 1.41 times larger.',
    quickReview: [
      'v = V0 sin(omega t) — AC constantly reverses direction.',
      'V_rms = V0 / sqrt(2) — the effective, power-delivering value.',
      'Mains electricity ratings quote RMS voltage, not peak.',
    ],
  },

  'electromagnetic-induction-basics': {
    slug: 'electromagnetic-induction-basics',
    title: 'Electromagnetic Induction',
    difficulty: 'medium',
    simpleExplanation:
      'Electromagnetic induction is the production of an EMF (and current) from a changing magnetic field. ' +
      'The key quantity is magnetic flux, Phi=BAcos(theta) — the total amount of magnetic field passing through ' +
      'a surface — and induction happens whenever that flux changes.',
    whyItMatters:
      'Magnetic flux is the essential building block for everything else in this chapter — generators, ' +
      "transformers, and Faraday's law all describe how a CHANGING flux produces electricity.",
    formulaSlug: 'magnetic-flux-formula',
    workedExample: {
      id: 'em-induction-worked-1',
      title: 'Find the magnetic flux through a loop',
      problemStatement: 'A coil loop of area 0.02 m squared sits perpendicular to a magnetic field of strength 0.5 T. Find the magnetic flux through it.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'B=0.5 T,  A=0.02 m squared,  theta=0 degrees (perpendicular)', explanation: 'The field is perpendicular to the loop, so the angle from the normal is 0.' },
        { step: 2, instruction: 'Apply the magnetic flux formula.', math: 'Phi = BAcos(theta) = (0.5)(0.02)cos(0)', explanation: 'cos(0 degrees) = 1.' },
        { step: 3, instruction: 'Compute the result.', math: 'Phi = 0.01 Wb', explanation: 'The magnetic flux through the loop.' },
      ],
      finalAnswer: 'Phi = 0.01 Wb.',
    },
    whyItWorks:
      "Flux measures how much field 'passes through' a surface — tilting the surface away from the field " +
      "reduces the effective area it presents to the field lines (scaled by cos(theta)), which is exactly why " +
      "the angle between the field and the surface's normal direction matters.",
    realLifeExample: {
      title: 'A metal detector sensing a buried coin',
      scenario: 'A metal detector generates a changing magnetic field, and senses nearby metal objects by how they distort that field.',
      explanation: 'The detector relies on how the magnetic flux through its coil changes when a metal object ' +
        'nearby responds to the field — a direct, practical application of magnetic flux and its changes.',
    },
    practiceQuestions: [
      {
        id: 'em-induction-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A coil loop of area 0.05 m squared is tilted at 60 degrees from perpendicular to a 0.3 T field. Find the magnetic flux, rounded to 4 decimal places.',
        hints: ['Phi = BAcos(theta), with cos(60 degrees) = 0.5.'],
        correctAnswer: 0.0075,
        explanation: 'Phi = (0.3)(0.05)(0.5) = 0.0075 Wb.',
      },
    ],
    commonMistake:
      'Forgetting the cos(theta) factor when the field is not exactly perpendicular to the surface — using ' +
      'just BA overestimates the flux whenever the surface is tilted relative to the field.',
    quickReview: [
      'Phi = BAcos(theta), in webers.',
      'Induction happens when flux CHANGES, not just when it is present.',
      'The foundation for generators, transformers, and metal detectors.',
    ],
  },

  'faradays-law-and-lenzs-law': {
    slug: 'faradays-law-and-lenzs-law',
    title: "Faraday's Law and Lenz's Law",
    difficulty: 'hard',
    simpleExplanation:
      "Faraday's law states that a changing magnetic flux induces an EMF, epsilon=-N(DeltaPhi/Deltat) — and " +
      "Lenz's law (the negative sign) says that induced EMF always drives a current that OPPOSES the change in flux that created it.",
    whyItMatters:
      "This is the single most important law in this chapter — it is the physics behind every electric " +
      'generator (and, in reverse, every electric motor) in the world.',
    diagram: {
      id: 'faradays-law-diagram',
      title: 'A magnet moving toward a coil, inducing a current that opposes the approach',
      altText: 'A bar magnet with north and south poles moving toward a coil of wire (shown as three loops), with an arrow indicating the induced current direction in the coil',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-4, 0.5], to: [-2, 0.5] },
          { from: [-4, -0.5], to: [-2, -0.5] },
          { from: [-4, -0.5], to: [-4, 0.5] },
          { from: [-2, -0.5], to: [-2, 0.5] },
          { from: [-3, 0], to: [-1.5, 0], arrow: true, label: 'v', labelDx: 0, labelDy: -12 },
        ],
        circles: [
          { cx: 0, cy: 0, r: 0.3 },
          { cx: 0.5, cy: 0, r: 0.3 },
          { cx: 1, cy: 0, r: 0.3 },
        ],
        arcs: [{ cx: 0.5, cy: 0, r: 0.6, startDeg: 30, endDeg: 150, label: 'induced I' }],
        points: [
          { x: -3.7, y: 0, label: 'N', labelDx: 0, labelDy: 0 },
          { x: -2.3, y: 0, label: 'S', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'faradays-law-formula',
    workedExample: {
      id: 'faradays-law-worked-1',
      title: 'Find an induced EMF',
      problemStatement: 'A coil of 100 turns experiences a change in magnetic flux of 0.02 Wb over 0.5 seconds. Find the magnitude of the induced EMF.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'N=100,  DeltaPhi=0.02 Wb,  Deltat=0.5 s', explanation: 'Number of turns, flux change, and time interval.' },
        { step: 2, instruction: "Apply Faraday's law.", math: 'epsilon = N(DeltaPhi/Deltat) = 100(0.02/0.5)', explanation: 'The magnitude of the EMF (dropping the sign, which just indicates direction).' },
        { step: 3, instruction: 'Compute the result.', math: 'epsilon = 100(0.04) = 4 V', explanation: 'The induced EMF magnitude.' },
      ],
      finalAnswer: 'epsilon = 4 V.',
    },
    whyItWorks:
      "More turns (N) means the same changing flux threads through more loops of wire, each contributing its " +
      "own share of induced EMF, so the total EMF scales directly with N — and a faster-changing flux " +
      "(smaller Deltat for the same DeltaPhi) induces a proportionally larger EMF, exactly as the formula shows.",
    realLifeExample: {
      title: 'A bicycle dynamo lighting a lamp',
      scenario: 'A bicycle dynamo generates electricity to power a lamp, using the wheel\'s rotation to spin a magnet near a coil.',
      explanation: "The spinning magnet continuously changes the magnetic flux through the coil, inducing an " +
        "EMF exactly as Faraday's law describes — pedaling faster changes the flux more quickly, producing a brighter light.",
    },
    practiceQuestions: [
      {
        id: 'faradays-law-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A coil of 200 turns experiences a flux change of 0.01 Wb over 0.2 seconds. Find the magnitude of the induced EMF.',
        hints: ['epsilon = N(DeltaPhi/Deltat).'],
        correctAnswer: 10,
        explanation: 'epsilon = 200(0.01/0.2) = 200(0.05) = 10 V.',
      },
    ],
    commonMistake:
      "Forgetting Lenz's law's directional meaning — the induced current does not simply flow in whatever " +
      "direction is convenient; it always flows in the direction that OPPOSES the change in flux, which is " +
      "essential for correctly predicting current direction in any induction problem.",
    quickReview: [
      'epsilon = -N(DeltaPhi/Deltat).',
      "Lenz's law: induced current always opposes the change that created it.",
      'The physics behind every electric generator.',
    ],
  },

  'applications-of-electromagnetic-induction': {
    slug: 'applications-of-electromagnetic-induction',
    title: 'Applications of Electromagnetic Induction',
    difficulty: 'medium',
    simpleExplanation:
      'Electromagnetic induction powers generators (mechanical motion into electricity) and transformers ' +
      '(changing AC voltage between two coils, following Vs/Vp=Ns/Np) — two of the most important devices in ' +
      'all of electrical engineering.',
    whyItMatters:
      "Nearly all the world's electricity is generated by induction (in power plant generators) and its " +
      'voltage is adjusted for safe, efficient transmission by transformers — both built entirely on the same underlying principle.',
    diagram: {
      id: 'transformer-diagram',
      title: 'A transformer: two coils linked by a shared iron core',
      altText: 'A rectangular iron core with a primary coil of three loops wound on the left side and a secondary coil of three loops wound on the right side',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-1, 1.5], to: [1, 1.5] },
          { from: [-1, -1.5], to: [1, -1.5] },
          { from: [-1, -1.5], to: [-1, 1.5] },
          { from: [1, -1.5], to: [1, 1.5] },
        ],
        circles: [
          { cx: -1, cy: -0.8, r: 0.25 },
          { cx: -1, cy: 0, r: 0.25 },
          { cx: -1, cy: 0.8, r: 0.25 },
          { cx: 1, cy: -0.8, r: 0.25 },
          { cx: 1, cy: 0, r: 0.25 },
          { cx: 1, cy: 0.8, r: 0.25 },
        ],
        points: [
          { x: -1, y: -1.8, label: 'Primary (Np)', labelDx: 0, labelDy: 0 },
          { x: 1, y: -1.8, label: 'Secondary (Ns)', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'transformer-equation-formula',
    workedExample: {
      id: 'applications-induction-worked-1',
      title: "Find a transformer's secondary voltage",
      problemStatement: 'A transformer has 1000 turns on its primary coil and 100 turns on its secondary coil, with 240 V applied to the primary. Find the secondary voltage.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'Np=1000,  Ns=100,  Vp=240 V', explanation: 'Primary turns, secondary turns, and primary voltage.' },
        { step: 2, instruction: 'Apply the transformer equation.', math: 'Vs = Vp(Ns/Np) = 240(100/1000)', explanation: 'Rearrange to solve for the secondary voltage.' },
        { step: 3, instruction: 'Compute the result.', math: 'Vs = 240(0.1) = 24 V', explanation: 'A step-down transformer, since there are fewer secondary turns.' },
      ],
      finalAnswer: 'Vs = 24 V.',
    },
    whyItWorks:
      "A changing current in the primary coil creates a changing flux in the shared iron core, which threads " +
      "through the secondary coil too — inducing an EMF there by Faraday's law. Since the SAME changing flux " +
      "links every turn on both coils, the induced EMF per turn is identical on each side, making the total " +
      "voltage on each coil directly proportional to its own number of turns.",
    realLifeExample: {
      title: "A phone charger's internal transformer",
      scenario: 'A phone charger converts 120 V or 230 V mains electricity down to just a few volts to safely charge a phone battery.',
      explanation: 'A small step-down transformer inside the charger uses far fewer turns on its secondary coil ' +
        'than its primary, reducing the voltage in direct proportion to the turns ratio.',
    },
    practiceQuestions: [
      {
        id: 'applications-induction-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A step-up transformer has 50 turns on its primary and 1000 turns on its secondary, with 12 V applied to the primary. Find the secondary voltage.',
        hints: ['Vs = Vp(Ns/Np).'],
        correctAnswer: 240,
        explanation: 'Vs = 12(1000/50) = 12(20) = 240 V.',
      },
    ],
    commonMistake:
      'Assuming a transformer can also step up POWER, not just voltage — a transformer only changes the ' +
      'balance between voltage and current; it cannot create extra power (in fact real transformers always lose a small amount to heat).',
    quickReview: [
      'Vs/Vp = Ns/Np.',
      'More secondary turns than primary: step-up. Fewer: step-down.',
      "Generators convert motion to electricity; transformers change AC voltage — both use induction.",
    ],
  },

  'power-transmission': {
    slug: 'power-transmission',
    title: 'Power Transmission',
    difficulty: 'hard',
    simpleExplanation:
      'Electrical power is transmitted over long distances at very HIGH voltage, specifically to keep the ' +
      'current LOW — since power lost as heat in the transmission lines is P_loss=I squared R, a lower current ' +
      'dramatically reduces wasted energy for the same delivered power.',
    whyItMatters:
      'This is exactly why power lines run at extremely high voltages (often hundreds of thousands of volts) — ' +
      'it is the single biggest lever for making a national electricity grid efficient rather than wasteful.',
    formulaSlug: 'transmission-power-loss-formula',
    workedExample: {
      id: 'power-transmission-worked-1',
      title: 'Compare transmission losses at high and low voltage',
      problemStatement: 'A power station transmits 100000 W through a line of resistance 5 ohms. Compare the power lost at 10000 V versus 1000 V.',
      steps: [
        { step: 1, instruction: 'Find the current at 10000 V.', math: 'I = P/V = 100000/10000 = 10 A', explanation: 'Higher voltage means lower current for the same power.' },
        { step: 2, instruction: 'Find the power loss at 10000 V.', math: 'P_loss = I squared R = (10 squared)(5) = 500 W', explanation: 'A relatively small loss.' },
        { step: 3, instruction: 'Find the current and loss at 1000 V.', math: 'I = 100000/1000 = 100 A;   P_loss = (100 squared)(5) = 50000 W', explanation: 'Ten times the current, one hundred times the power loss.' },
      ],
      finalAnswer: 'Loss at 10000 V is 500 W; loss at 1000 V is 50000 W — one hundred times more.',
    },
    whyItWorks:
      "Since power delivered is P=VI, transmitting the same power at ten times the voltage requires only " +
      "one-tenth the current — and because power loss depends on the SQUARE of current (I squared R), reducing " +
      "current by a factor of ten reduces the loss by a factor of one hundred, exactly as this comparison shows.",
    realLifeExample: {
      title: 'Why power lines are strung on tall towers at extremely high voltage',
      scenario: 'Long-distance electrical transmission lines often run at 100000 V or higher, requiring tall towers and heavy insulation for safety.',
      explanation: 'That very high voltage keeps the current (and therefore the wasted heat loss) as small as ' +
        'possible over the long distance, even though it demands more careful engineering for safe insulation.',
    },
    practiceQuestions: [
      {
        id: 'power-transmission-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A power station transmits 50000 W through a line of resistance 2 ohms at 5000 V. Find the power lost.',
        hints: ['Find I=P/V first, then apply P_loss=I squared R.'],
        correctAnswer: 200,
        explanation: 'I = 50000/5000 = 10 A. P_loss = (10 squared)(2) = 200 W.',
      },
    ],
    commonMistake:
      'Assuming power loss depends directly on voltage — it is actually the CURRENT that determines heat loss ' +
      'in the line; higher voltage is beneficial specifically because it REDUCES current for the same delivered power.',
    quickReview: [
      'P_loss = I squared R.',
      'Higher transmission voltage means lower current, means far less power lost.',
      'Halving current quarters the loss; a tenfold voltage increase gives a hundredfold loss reduction.',
    ],
  },

  'house-wiring-principles': {
    slug: 'house-wiring-principles',
    title: 'Principles of House Wiring',
    difficulty: 'medium',
    simpleExplanation:
      "Household circuits wire appliances in PARALLEL (so each receives the full mains voltage independently), " +
      "using a live wire, a neutral wire, and an earth (ground) wire for safety, all protected by a fuse or " +
      "circuit breaker rated for the total expected current, I_total=I1+I2+I3+...",
    whyItMatters:
      'Understanding how household circuits are wired — and why — is directly practical knowledge for using ' +
      'electricity safely at home, from choosing the right fuse to not overloading a single outlet.',
    formulaSlug: 'household-current-formula',
    workedExample: {
      id: 'house-wiring-worked-1',
      title: 'Check whether a household circuit is safely within its fuse rating',
      problemStatement: 'Three appliances, drawing 2 A, 5 A, and 3 A, are plugged into the same 10 A fused circuit. Find the total current, and determine whether the fuse is safe.',
      steps: [
        { step: 1, instruction: 'Recognize the appliances are wired in parallel.', math: 'Household outlets are wired in parallel', explanation: 'Each appliance draws its own current independently.' },
        { step: 2, instruction: 'Add the individual currents.', math: 'I_total = 2+5+3', explanation: 'Total current is the sum of the individual currents in a parallel arrangement.' },
        { step: 3, instruction: 'Compute the result and compare to the fuse rating.', math: 'I_total = 10 A', explanation: 'This is exactly at the 10 A fuse rating — right at the safe limit, with no margin.' },
      ],
      finalAnswer: 'I_total = 10 A — exactly at the fuse limit, leaving no safety margin for any additional load.',
    },
    whyItWorks:
      "Because appliances are wired in parallel, each one independently draws whatever current it needs at " +
      "the full mains voltage — and since charge is conserved, the total current the fuse (or circuit breaker) " +
      "must carry is simply the sum of every individual appliance's current.",
    realLifeExample: {
      title: 'Why plugging in too many appliances can trip a circuit breaker',
      scenario: 'Plugging a space heater, a hair dryer, and a microwave into the same household circuit sometimes trips the circuit breaker.',
      explanation: "Each device draws a significant current, and their sum can exceed the circuit's rated " +
        "current — the breaker trips specifically to prevent that excess total current from overheating the wiring.",
    },
    practiceQuestions: [
      {
        id: 'house-wiring-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Four appliances draw 1.5 A, 4 A, 2.5 A, and 3 A on the same circuit. Find the total current drawn.',
        hints: ['I_total = I1+I2+I3+I4.'],
        correctAnswer: 11,
        explanation: 'I_total = 1.5+4+2.5+3 = 11 A.',
      },
    ],
    commonMistake:
      'Assuming household appliances are wired in series (so current would be the same through each) — they ' +
      'are wired in PARALLEL specifically so each appliance gets full mains voltage and works independently of the others.',
    quickReview: [
      'I_total = I1+I2+I3+... — appliances are wired in parallel.',
      'Live, neutral, and earth wires each serve a distinct safety role.',
      "A fuse or breaker protects the circuit's total current from exceeding a safe limit.",
    ],
  },

  'electrical-safety': {
    slug: 'electrical-safety',
    title: 'Dangers of Electricity',
    difficulty: 'medium',
    simpleExplanation:
      "Electric shock happens when current flows through the body, I=V/R — and because wet skin has far lower " +
      'resistance than dry skin, the SAME voltage can produce a far more dangerous shock current under wet conditions.',
    whyItMatters:
      "Understanding this relationship explains genuinely life-saving safety practices — why electrical " +
      'devices must never be used with wet hands, and why earthing and circuit breakers exist at all.',
    formulaSlug: 'shock-current-formula',
    workedExample: {
      id: 'electrical-safety-worked-1',
      title: 'Estimate the danger of a shock under wet conditions',
      problemStatement: 'A person with wet skin (resistance 1000 ohms) touches a 230 V household circuit. Find the current that flows through their body.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'V=230 V,  R=1000 ohms', explanation: 'Household voltage and the body\'s resistance under wet conditions.' },
        { step: 2, instruction: "Apply Ohm's law.", math: 'I = V/R = 230/1000', explanation: 'Divide voltage by resistance.' },
        { step: 3, instruction: 'Compute the result.', math: 'I = 0.23 A = 230 mA', explanation: 'Far above the roughly 10-16 mA that can cause loss of muscle control, and well into a life-threatening range.' },
      ],
      finalAnswer: 'I = 230 mA — a dangerous, potentially lethal shock current.',
    },
    whyItWorks:
      "This is a direct application of Ohm's law to the human body treated as a resistor — the danger comes " +
      "specifically from how LOW the body's resistance becomes when wet (moisture provides a much easier path " +
      "for current), which is exactly why the same voltage produces a far larger, more dangerous current under those conditions.",
    realLifeExample: {
      title: 'Why bathrooms have special electrical safety requirements',
      scenario: 'Building codes require bathrooms to use special ground-fault circuit interrupter (GFCI) outlets and keep switches away from water sources.',
      explanation: "Wet skin dramatically lowers the body's resistance, so even household voltage becomes far " +
        "more dangerous near water — these safety requirements exist specifically because of this relationship between resistance and shock current.",
    },
    practiceQuestions: [
      {
        id: 'electrical-safety-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'The same person, now with dry skin (resistance 100000 ohms), touches the same 230 V circuit. Find the shock current, in mA.',
        hints: ['I = V/R, then convert amps to milliamps.'],
        correctAnswer: 2.3,
        explanation: 'I = 230/100000 = 0.0023 A = 2.3 mA — far safer than the wet-skin case, though still perceptible.',
      },
    ],
    commonMistake:
      'Assuming a given voltage is either "safe" or "dangerous" in isolation — the actual danger depends on the ' +
      'CURRENT that flows, which depends just as much on the body\'s resistance (wet versus dry) as on the voltage itself.',
    quickReview: [
      'I = V/R — a direct application of Ohm\'s law to the human body.',
      'Wet skin has far lower resistance than dry skin, producing much more dangerous shock currents.',
      'The basis for practices like GFCI outlets and avoiding electricity near water.',
    ],
  },
};
