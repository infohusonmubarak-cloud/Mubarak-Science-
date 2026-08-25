import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 12 — Digital Electronics and
// Communication System. Matches the textbook's section list: the
// electronic system; digital electronics; basic electronic
// communication.
export const chapter12CDigitalConcepts: Record<string, Concept> = {
  'electronic-systems': {
    slug: 'electronic-systems',
    title: 'Electronic Systems',
    difficulty: 'easy',
    simpleExplanation:
      'An electronic system takes information in through an input (like a sensor), processes that information ' +
      '(the control or decision-making stage), and produces a result through an output (like a motor, light, or ' +
      'sound) — the input-process-output model describes virtually every electronic device.',
    whyItMatters:
      'This simple three-stage framework is the starting point for understanding any electronic device, from ' +
      'a smoke detector to a smartphone, no matter how complex its internal circuitry actually is.',
    diagram: {
      id: 'electronic-system-diagram',
      title: 'The input-process-output model of an electronic system',
      altText: 'Three connected boxes labelled Input, Process, and Output, with arrows showing information flowing from one to the next',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-4, 0.6], to: [-2, 0.6] }, { from: [-4, -0.6], to: [-2, -0.6] },
          { from: [-4, -0.6], to: [-4, 0.6] }, { from: [-2, -0.6], to: [-2, 0.6] },
          { from: [-0.7, 0.6], to: [1.3, 0.6] }, { from: [-0.7, -0.6], to: [1.3, -0.6] },
          { from: [-0.7, -0.6], to: [-0.7, 0.6] }, { from: [1.3, -0.6], to: [1.3, 0.6] },
          { from: [2.6, 0.6], to: [4.6, 0.6] }, { from: [2.6, -0.6], to: [4.6, -0.6] },
          { from: [2.6, -0.6], to: [2.6, 0.6] }, { from: [4.6, -0.6], to: [4.6, 0.6] },
          { from: [-2, 0], to: [-0.7, 0], arrow: true },
          { from: [1.3, 0], to: [2.6, 0], arrow: true },
        ],
        points: [
          { x: -3, y: -1, label: 'Input (sensor)', labelDx: 0, labelDy: 0 },
          { x: 0.3, y: -1, label: 'Process', labelDx: 0, labelDy: 0 },
          { x: 3.6, y: -1, label: 'Output', labelDx: 0, labelDy: 0 },
        ],
      },
    },
    workedExample: {
      id: 'electronic-systems-worked-1',
      title: 'Identify the input, process, and output of a smoke detector',
      problemStatement: 'A smoke detector sounds an alarm when it senses smoke. Identify its input, process, and output stages.',
      steps: [
        { step: 1, instruction: 'Identify the input.', math: 'Input: a smoke sensor', explanation: 'The sensor detects smoke particles in the air.' },
        { step: 2, instruction: 'Identify the process.', math: 'Process: a comparator circuit checking the sensor reading against a threshold', explanation: 'The circuit decides whether the smoke level is high enough to be a real alarm condition.' },
        { step: 3, instruction: 'Identify the output.', math: 'Output: a loud alarm siren', explanation: 'The final action taken once the process stage decides smoke is present.' },
      ],
      finalAnswer: 'Input: smoke sensor. Process: comparator circuit. Output: alarm siren.',
    },
    whyItWorks:
      'Breaking any electronic device into these three stages lets its behavior be understood without needing ' +
      'to know every internal detail — what information comes in, what decision or transformation happens to ' +
      'it, and what action results, no matter how the middle stage is actually built.',
    realLifeExample: {
      title: 'An automatic streetlight',
      scenario: 'A streetlight turns on by itself at dusk and off again at dawn, without anyone flipping a switch.',
      explanation: 'A light sensor (input) detects falling light levels, a control circuit (process) compares ' +
        'this to a threshold, and a relay switching the lamp (output) turns the light on or off accordingly.',
    },
    practiceQuestions: [
      {
        id: 'electronic-systems-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'In an automatic hand dryer that activates when it senses a hand nearby, what is the output stage?',
        hints: ['Think about the final physical action the device performs.'],
        options: [
          { id: 'a', text: 'The motor and fan that blow air' },
          { id: 'b', text: 'The infrared sensor' },
          { id: 'c', text: 'The control circuit' },
          { id: 'd', text: 'The power cord' },
        ],
        correctOptionId: 'a',
        explanation: 'The motor and fan produce the final physical result (blowing air), making them the output stage.',
      },
    ],
    commonMistake:
      'Confusing the process stage with the output stage — the process stage makes a decision or transformation ' +
      'internally, while the output stage is the actual physical action or result the system produces.',
    quickReview: [
      'Every electronic system: input, process, output.',
      'Applies to devices of any complexity.',
      'Input senses; process decides; output acts.',
    ],
  },

  'analog-and-digital-signals': {
    slug: 'analog-and-digital-signals',
    title: 'Analog and Digital Signals',
    difficulty: 'medium',
    simpleExplanation:
      'An analog signal varies smoothly and continuously (like a dimmer switch), while a digital signal only ' +
      'takes discrete values, usually just two (0 and 1, or "off" and "on"). Digital electronics represents ' +
      'numbers in binary, where each digit is worth a power of 2.',
    whyItMatters:
      'Nearly all modern electronics — computers, phones, digital audio — process information digitally, since ' +
      'digital signals resist noise and distortion far better than analog ones over long distances or repeated processing.',
    diagram: {
      id: 'analog-digital-diagram',
      title: 'An analog signal (smooth curve) compared with a digital signal (sharp steps)',
      altText: 'A smooth, continuously varying curve representing an analog signal, overlaid with a dashed signal that jumps abruptly between only two levels, representing a digital signal',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        fn2: (x: number) => Math.sign(Math.sin(x)),
        min: 0,
        max: 12.57,
        xLabel: 'time',
        yLabel: 'signal level',
      },
    },
    formulaSlug: 'binary-decimal-conversion-formula',
    workedExample: {
      id: 'analog-digital-worked-1',
      title: 'Convert a binary number to decimal',
      problemStatement: 'Convert the binary number 1011 to decimal.',
      steps: [
        { step: 1, instruction: 'Write down the place value of each bit, from right to left.', math: 'positions (right to left): 2^0=1, 2^1=2, 2^2=4, 2^3=8', explanation: 'Each position is worth double the one before it.' },
        { step: 2, instruction: 'Multiply each bit by its place value.', math: '1x8 + 0x4 + 1x2 + 1x1', explanation: 'Reading 1011 from left to right: 1, 0, 1, 1.' },
        { step: 3, instruction: 'Add the results.', math: '8+0+2+1 = 11', explanation: 'Sum every position holding a 1.' },
      ],
      finalAnswer: 'Binary 1011 = decimal 11.',
    },
    whyItWorks:
      'Just as each digit in an ordinary decimal number is worth a power of 10 (ones, tens, hundreds, ...), ' +
      "each digit in a binary number is worth a power of 2 — this positional place-value system is exactly " +
      "how any base (10, 2, or otherwise) represents numbers using a limited set of digits.",
    realLifeExample: {
      title: 'Why digital audio resists noise better than analog',
      scenario: 'A digital music file played after being copied many times sounds identical to the original, while an old analog cassette tape degrades noticeably after repeated copying.',
      explanation: "Digital signals only need to be told apart as a 0 or a 1 — small amounts of noise do not " +
        "change which value is being read — while an analog signal's exact continuous level carries the " +
        "information itself, so noise directly and permanently degrades it.",
    },
    practiceQuestions: [
      {
        id: 'analog-digital-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Convert the binary number 1101 to decimal.',
        hints: ['1x8 + 1x4 + 0x2 + 1x1.'],
        correctAnswer: 13,
        explanation: '8+4+0+1 = 13.',
      },
    ],
    commonMistake:
      'Reading binary digits in the wrong order — the rightmost digit is always the smallest place value (2^0=1), ' +
      'not the leftmost one, exactly the reverse of how it might seem at first glance.',
    quickReview: [
      'Analog: continuous. Digital: discrete (usually just 0 and 1).',
      'Binary place values: 1, 2, 4, 8, 16, ... (powers of 2).',
      'Digital signals resist noise far better than analog ones.',
    ],
  },

  'logic-gates-and-truth-tables': {
    slug: 'logic-gates-and-truth-tables',
    title: 'Logic Gates and Truth Tables',
    difficulty: 'medium',
    simpleExplanation:
      'Logic gates are the basic building blocks of digital circuits, each combining binary inputs according to ' +
      'a fixed rule: AND outputs 1 only if both inputs are 1; OR outputs 1 if at least one input is 1; NOT ' +
      'flips a single input. A truth table lists every possible input combination and the resulting output.',
    whyItMatters:
      'Every digital circuit, no matter how complex — including every computer processor — is ultimately built ' +
      'from combinations of these same few simple logic gates.',
    formulaSlug: 'logic-gate-equations-formula',
    workedExample: {
      id: 'logic-gates-worked-1',
      title: 'Build the truth table for an AND gate',
      problemStatement: 'Construct the complete truth table for a two-input AND gate.',
      steps: [
        { step: 1, instruction: 'List all four possible input combinations.', math: 'A=0,B=0;  A=0,B=1;  A=1,B=0;  A=1,B=1', explanation: 'Two binary inputs give 2x2=4 possible combinations.' },
        { step: 2, instruction: 'Apply the AND rule: output is 1 only if BOTH inputs are 1.', math: '(0,0)->0;  (0,1)->0;  (1,0)->0;  (1,1)->1', explanation: 'Only the last combination has both inputs equal to 1.' },
      ],
      finalAnswer: 'AND truth table: only A=1 and B=1 gives an output of 1; every other combination gives 0.',
    },
    whyItWorks:
      "Each gate is built from an electronic circuit (like transistor switches) that physically implements its " +
      "rule — an AND gate, for instance, only lets current reach the output when both input switches are " +
      "closed (representing 1), which is exactly why the output is 1 only when every input is 1.",
    realLifeExample: {
      title: 'A car that only starts with the seatbelt fastened AND the brake pressed',
      scenario: "Some cars require both the driver's seatbelt to be fastened AND the brake pedal to be pressed before the engine will start.",
      explanation: "This safety interlock is exactly an AND gate: the 'start engine' output only activates " +
        "when BOTH input conditions (seatbelt=1, brake=1) are true at the same time.",
    },
    practiceQuestions: [
      {
        id: 'logic-gates-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'For an OR gate with inputs A=0 and B=1, find the output Y.',
        hints: ['OR outputs 1 if AT LEAST ONE input is 1.'],
        correctAnswer: 1,
        explanation: 'Since B=1, at least one input is 1, so the OR gate outputs Y=1.',
      },
    ],
    commonMistake:
      'Confusing AND and OR — AND requires EVERY input to be 1 for the output to be 1, while OR only requires ' +
      'AT LEAST ONE input to be 1; mixing these up gives the exact opposite truth table.',
    quickReview: [
      'AND: output 1 only if all inputs are 1.',
      'OR: output 1 if at least one input is 1.',
      'NOT: flips a single input (0 becomes 1, 1 becomes 0).',
    ],
  },

  'communication-systems-basics': {
    slug: 'communication-systems-basics',
    title: 'Basic Electronic Communication',
    difficulty: 'medium',
    simpleExplanation:
      'An electronic communication system has three basic parts: a transmitter (converts information into a ' +
      'signal), a channel (carries the signal, like radio waves or a cable), and a receiver (converts the ' +
      'signal back into usable information) — with modulation techniques like AM and FM used to carry the signal over radio waves.',
    whyItMatters:
      'This transmitter-channel-receiver model describes every communication technology, from AM radio to ' +
      'satellite television to modern mobile networks.',
    workedExample: {
      id: 'communication-worked-1',
      title: 'Trace a radio broadcast through the transmitter-channel-receiver model',
      problemStatement: "Describe how a radio station's broadcast reaches a listener's car radio, using the transmitter-channel-receiver model.",
      steps: [
        { step: 1, instruction: 'Identify the transmitter.', math: "Transmitter: the radio station's broadcasting equipment", explanation: 'Converts sound (music, speech) into a radio-frequency electrical signal.' },
        { step: 2, instruction: 'Identify the channel.', math: 'Channel: the airwaves (electromagnetic radio waves)', explanation: 'Carries the modulated signal outward from the transmitting antenna.' },
        { step: 3, instruction: 'Identify the receiver.', math: "Receiver: the car radio's antenna and tuner circuit", explanation: 'Picks up the radio wave and converts it back into sound.' },
      ],
      finalAnswer: "Transmitter: radio station. Channel: radio waves through the air. Receiver: the car radio.",
    },
    whyItWorks:
      'Information (like sound) cannot travel far or fast enough on its own — modulation encodes it onto a ' +
      "high-frequency carrier wave (varying either its Amplitude, AM, or its Frequency, FM) that CAN travel " +
      "efficiently through the chosen channel, and the receiver reverses this process to recover the original information.",
    realLifeExample: {
      title: 'Why FM radio sounds clearer than AM radio',
      scenario: 'FM radio stations generally have clearer sound quality with less static than AM stations.',
      explanation: 'AM (amplitude modulation) is more easily disrupted by electrical noise, which also tends to ' +
        'affect a signal\'s amplitude — FM (frequency modulation) is far less affected by this kind of noise, since it encodes information in frequency changes instead.',
    },
    practiceQuestions: [
      {
        id: 'communication-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the main role of the "channel" in a communication system?',
        hints: ['Think about what physically carries the signal from one place to another.'],
        options: [
          { id: 'a', text: 'It carries the transmitted signal from the transmitter to the receiver' },
          { id: 'b', text: 'It converts sound into an electrical signal' },
          { id: 'c', text: 'It converts the electrical signal back into sound' },
          { id: 'd', text: 'It amplifies the original sound source' },
        ],
        correctOptionId: 'a',
        explanation: 'The channel (like radio waves, a cable, or fibre optics) is the medium the signal travels through between transmitter and receiver.',
      },
    ],
    commonMistake:
      'Assuming the receiver simply detects the original sound directly — it actually detects the transmitted ' +
      'electrical/radio signal and must convert (demodulate) it back into usable information, reversing what the transmitter did.',
    quickReview: [
      'Transmitter -> channel -> receiver.',
      'Modulation encodes information onto a carrier wave (AM or FM).',
      'FM resists noise better than AM.',
    ],
  },
};
