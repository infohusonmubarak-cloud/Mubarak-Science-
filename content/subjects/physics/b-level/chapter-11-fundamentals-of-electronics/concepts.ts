import type { Concept } from '@/types/content';

export const chapter11ElectronicsConcepts: Record<string, Concept> = {
  semiconductors: {
    slug: 'semiconductors',
    title: 'Semiconductors',
    difficulty: 'medium',
    simpleExplanation:
      "A semiconductor is a material (like silicon or germanium) whose ability to conduct electricity is " +
      "between that of a conductor and an insulator — and crucially, can be precisely CONTROLLED, often " +
      "by adding small amounts of impurities (a process called doping) or by applying heat, light, or an " +
      "electric field.",
    whyItMatters:
      "Semiconductors are the foundational material behind essentially all modern electronics — diodes, " +
      "transistors, and integrated circuits (and therefore computers, phones, and countless other devices) " +
      "all rely on semiconductor behaviour.",
    whyItWorks:
      "Doping a pure semiconductor with specific impurity atoms adds either extra free electrons " +
      "(n-type, using impurities with more valence electrons) or extra 'holes' — missing electrons that " +
      "behave like mobile positive charge carriers (p-type, using impurities with fewer valence " +
      "electrons) — precisely controlling the number and type of charge carriers lets engineers " +
      "engineer exactly how conductive the material is and how it behaves electrically.",
    realLifeExample: {
      title: 'Silicon computer chips',
      scenario: 'Virtually every computer processor is built from silicon, a semiconductor.',
      explanation: "Silicon's semiconductor properties — combined with precise doping to create regions of controlled n-type and p-type material — allow engineers to build the transistors and circuits that form the basis of all modern computing.",
    },
    practiceQuestions: [
      {
        id: 'semiconductors-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What makes semiconductors uniquely useful compared to conductors or insulators?',
        options: [
          { id: 'a', text: 'Their conductivity can be precisely controlled, often through doping.' },
          { id: 'b', text: 'They conduct electricity exactly like metals, with no special properties.' },
          { id: 'c', text: 'They never conduct electricity under any conditions.' },
          { id: 'd', text: 'Semiconductors cannot be used in any electronic device.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what doping does to a semiconductor.'],
        explanation: "Semiconductors' controllable conductivity — via doping, heat, light, or electric fields — is exactly what makes them so useful for building electronic components.",
      },
    ],
    commonMistake:
      "Assuming semiconductors always conduct electricity moderately, like a fixed 'medium conductor' — " +
      "their key property is that their conductivity can be actively CONTROLLED and changed, not that " +
      "they have one fixed, middling conductivity value.",
    quickReview: [
      'Semiconductors have controllable conductivity, between conductors and insulators.',
      'Doping adds impurities to create n-type (extra electrons) or p-type (extra holes) material.',
      'Semiconductors are the foundational material of modern electronics.',
    ],
  },

  'the-transistor': {
    slug: 'the-transistor',
    title: 'Transistor',
    difficulty: 'medium',
    simpleExplanation:
      "A transistor is a semiconductor device that can amplify a small electrical signal into a much " +
      "larger one, or act as an electronic switch. It has three terminals (commonly base, collector, and " +
      "emitter in a bipolar junction transistor), and a small current at the base controls a much larger " +
      "current flowing between the collector and emitter.",
    whyItMatters:
      "The transistor is often called one of the most important inventions of the 20th century — it " +
      "replaced older, bulkier, less reliable vacuum tubes and made modern electronics, including every " +
      "computer and smartphone, possible.",
    formulaSlug: 'transistor-current-gain-formula',
    workedExample: {
      id: 'transistor-we-1',
      title: 'Finding collector current from current gain',
      problemStatement: 'A transistor has a current gain (β) of 100 and a base current of 0.02 mA. Find the collector current.',
      steps: [
        { step: 1, instruction: 'Write the formula, rearranged for I_C.', math: 'I_C = β × I_B', explanation: 'β = 100, I_B = 0.02 mA.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'I_C = 100 × 0.02 = 2 mA', explanation: 'Multiply current gain by base current.' },
      ],
      finalAnswer: 'Collector current = 2 mA.',
    },
    whyItWorks:
      "Inside a transistor, a small current injected at the base controls the flow of a much larger " +
      "current between the collector and emitter, because the base current effectively 'opens the gate' " +
      "for a much larger current to flow through the device's semiconductor junctions — this amplifying " +
      "relationship is exactly what the current gain β quantifies.",
    realLifeExample: {
      title: 'Amplifying a microphone signal',
      scenario: 'A microphone produces a very weak electrical signal that must be amplified before it can drive a loudspeaker.',
      explanation: "Transistors in an amplifier circuit take this weak input signal (controlling the base current) and use it to control a much larger current from a power supply, producing a much stronger output signal capable of driving a speaker.",
    },
    practiceQuestions: [
      {
        id: 'transistor-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A transistor has a current gain of 150 and a collector current of 30 mA. Find the base current.',
        hints: ['β = I_C/I_B, rearranged: I_B = I_C/β.'],
        correctAnswer: 0.2,
        tolerance: 0.02,
        unit: 'mA',
        explanation: 'I_B = 30/150 = 0.2 mA.',
      },
    ],
    commonMistake:
      "Thinking the transistor generates extra energy from nothing — the amplified collector current " +
      "comes from an external power supply; the small base current only CONTROLS how much of that " +
      "supply current flows, it doesn't create energy.",
    quickReview: [
      'β = I_C/I_B: current gain measures amplification of base current to collector current.',
      'A transistor can amplify signals or act as an electronic switch.',
      'The amplified current comes from an external power supply, controlled by the small base current.',
    ],
  },

  'the-integrated-circuit': {
    slug: 'the-integrated-circuit',
    title: 'Integrated Circuit',
    difficulty: 'easy',
    simpleExplanation:
      "An integrated circuit (IC), or 'chip', packs a large number of interconnected electronic " +
      "components (transistors, resistors, capacitors, and more) onto a single small piece of " +
      "semiconductor material, usually silicon.",
    whyItMatters:
      "Integrated circuits are what made modern electronics dramatically smaller, cheaper, faster, and " +
      "more reliable than earlier electronics built from individual, separately wired components.",
    whyItWorks:
      "Manufacturing many components simultaneously on a single silicon chip, using precise photographic " +
      "and chemical processes, avoids the size, cost, and reliability problems of wiring together " +
      "thousands (or billions) of individual, separate components by hand — this mass-production approach " +
      "is what allows a modern IC to contain billions of transistors in a space smaller than a fingernail.",
    realLifeExample: {
      title: 'Smartphone processors',
      scenario: 'A modern smartphone processor contains billions of transistors on a chip smaller than a coin.',
      explanation: 'This is only possible because of integrated circuit technology — manufacturing this many interconnected components as individual, separately wired parts would be completely impractical, but building them together on a single chip makes it achievable.',
    },
    practiceQuestions: [
      {
        id: 'integrated-circuit-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the main advantage of an integrated circuit compared to using individually wired components?',
        options: [
          { id: 'a', text: 'It allows a huge number of components to be manufactured together, making devices smaller, cheaper, and more reliable.' },
          { id: 'b', text: 'Integrated circuits always use fewer components overall.' },
          { id: 'c', text: 'Integrated circuits cannot contain transistors.' },
          { id: 'd', text: 'There is no advantage; individual wiring is always better.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about manufacturing billions of components by hand versus on one chip.'],
        explanation: 'ICs allow mass manufacturing of huge numbers of interconnected components on one chip, dramatically improving size, cost, and reliability.',
      },
    ],
    commonMistake:
      "Assuming an integrated circuit is just one large component — it actually contains MANY individual " +
      "components (transistors, resistors, etc.) all manufactured together and interconnected on a single " +
      "chip.",
    quickReview: [
      'An IC packs many interconnected components onto a single semiconductor chip.',
      'ICs are mass-manufactured, unlike individually wired components.',
      'ICs enable the small size, low cost, and high reliability of modern electronics.',
    ],
  },

  'logic-gates-b-level': {
    slug: 'logic-gates-b-level',
    title: 'Logic Gate',
    difficulty: 'medium',
    simpleExplanation:
      "A logic gate is a basic electronic building block that takes one or more binary inputs (each " +
      "either 0/LOW or 1/HIGH) and produces a single binary output, following a specific logical rule. " +
      "Common gates include AND, OR, and NOT, each with a predictable, fixed input-output relationship " +
      "described by a truth table.",
    whyItMatters:
      "Logic gates are the fundamental building blocks of all digital electronics — every computer " +
      "operation, no matter how complex, is ultimately built from combinations of simple logic gates.",
    whyItWorks:
      "Each gate is built from transistors arranged to physically implement its specific logical rule — " +
      "for example, an AND gate's output is HIGH only when ALL its inputs are HIGH, because its internal " +
      "transistor arrangement only allows current to flow through to the output when every input " +
      "transistor is switched on simultaneously.",
    realLifeExample: {
      title: 'A simple security system using an AND gate',
      scenario: 'A security system triggers an alarm only when BOTH a door sensor AND a motion sensor detect something.',
      explanation: 'This exactly matches the behaviour of an AND gate: the alarm output is HIGH (triggered) only when both inputs are HIGH (both sensors detect something) — using an AND gate this way reduces false alarms from either sensor triggering alone.',
    },
    practiceQuestions: [
      {
        id: 'logic-gates-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'An OR gate has two inputs. When is its output HIGH?',
        options: [
          { id: 'a', text: 'When at least one of the two inputs is HIGH.' },
          { id: 'b', text: 'Only when both inputs are HIGH.' },
          { id: 'c', text: 'Only when both inputs are LOW.' },
          { id: 'd', text: 'An OR gate never produces a HIGH output.' },
        ],
        correctOptionId: 'a',
        hints: ['Think of "OR" in everyday language: "this OR that" is true if either is true.'],
        explanation: 'An OR gate outputs HIGH whenever at least one of its inputs is HIGH, unlike an AND gate, which requires ALL inputs to be HIGH.',
      },
    ],
    commonMistake:
      "Confusing AND and OR gate behaviour — AND requires ALL inputs HIGH for a HIGH output; OR requires " +
      "only AT LEAST ONE input HIGH. Mixing these up is a very common error.",
    quickReview: [
      'Logic gates take binary inputs and produce a binary output following a fixed rule.',
      'AND: output HIGH only if ALL inputs are HIGH. OR: output HIGH if AT LEAST ONE input is HIGH.',
      'All digital electronics are ultimately built from combinations of simple logic gates.',
    ],
  },
};
