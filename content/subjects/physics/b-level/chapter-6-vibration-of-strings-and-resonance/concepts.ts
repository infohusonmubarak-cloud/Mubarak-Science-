import type { Concept } from '@/types/content';

export const chapter6VibrationConcepts: Record<string, Concept> = {
  'stationary-waves': {
    slug: 'stationary-waves',
    title: 'Stationary Waves',
    difficulty: 'medium',
    simpleExplanation:
      'A stationary (or standing) wave forms when two identical waves travel in opposite directions and ' +
      'overlap — typically a wave and its own reflection. Unlike a travelling wave, a stationary wave does ' +
      'not move along the medium; instead, it has fixed points of zero displacement (nodes) and points of ' +
      'maximum displacement (antinodes) that stay in the same place.',
    whyItMatters:
      "Stationary waves are the basis of how musical instruments produce specific, stable notes — vibrating " +
      "strings and air columns in pipes both work by setting up stationary waves.",
    formulaSlug: 'node-antinode-spacing-formula',
    workedExample: {
      id: 'stationary-waves-we-1',
      title: 'Finding wavelength from node spacing',
      problemStatement: 'Adjacent nodes in a stationary wave are measured to be 0.3 m apart. Find the wavelength.',
      steps: [
        { step: 1, instruction: 'Apply the node spacing relationship.', math: 'distance between nodes = λ/2', explanation: 'Given distance = 0.3 m.' },
        { step: 2, instruction: 'Solve for λ.', math: 'λ = 2 × 0.3', explanation: 'Rearrange to find wavelength.' },
        { step: 3, instruction: 'Calculate.', math: 'λ = 0.6 m', explanation: 'Multiply the node spacing by 2.' },
      ],
      finalAnswer: 'Wavelength = 0.6 m.',
    },
    whyItWorks:
      "When two identical waves travelling in opposite directions overlap, they interfere: at some fixed " +
      "points, the waves are always exactly out of phase and cancel completely (nodes); at other fixed " +
      "points, they are always exactly in phase and reinforce maximally (antinodes) — since this " +
      "interference pattern doesn't move, the result appears to stand still.",
    realLifeExample: {
      title: 'A plucked guitar string',
      scenario: "A plucked guitar string vibrates visibly, appearing to form a stable, blurred shape rather than a travelling wave.",
      explanation: "The string's vibration is a stationary wave, formed by waves reflecting back and forth between the two fixed ends — the ends themselves are always nodes (zero displacement, since they're fixed), which is exactly why the string produces a stable, repeating pattern rather than a travelling wave.",
    },
    practiceQuestions: [
      {
        id: 'stationary-waves-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Adjacent antinodes in a stationary wave are 0.15 m apart. Find the wavelength.',
        hints: ['Distance between adjacent antinodes also equals λ/2.'],
        correctAnswer: 0.3,
        tolerance: 0.01,
        unit: 'm',
        explanation: 'λ = 2 × 0.15 = 0.3 m.',
      },
    ],
    commonMistake:
      "Confusing the distance between adjacent nodes with the full wavelength — adjacent nodes are only " +
      "HALF a wavelength apart; a full wavelength spans from one node, past an antinode, to the SECOND " +
      "node.",
    quickReview: [
      'Stationary waves form from two identical waves travelling in opposite directions (e.g. wave + reflection).',
      'Nodes: fixed points of zero displacement. Antinodes: fixed points of maximum displacement.',
      'Distance between adjacent nodes (or antinodes) = λ/2.',
    ],
  },

  'vibrating-strings': {
    slug: 'vibrating-strings',
    title: 'Vibrating Strings',
    difficulty: 'hard',
    simpleExplanation:
      "A stretched string, when plucked, vibrates and produces a stationary wave pattern. Its fundamental " +
      "(lowest, and usually loudest) frequency depends on the string's length, the tension applied, and " +
      "how much mass it has per unit length.",
    whyItMatters:
      "This relationship is exactly how stringed instruments (guitars, violins, pianos) work — musicians " +
      "tune and play notes by controlling these very factors: string length (fretting), tension (tuning " +
      "pegs), and string thickness (mass per unit length).",
    formulaSlug: 'vibrating-string-frequency-formula',
    workedExample: {
      id: 'vibrating-string-we-1',
      title: "Finding a string's fundamental frequency",
      problemStatement: 'A 0.65 m string has tension 80 N and mass per unit length 0.005 kg/m. Find its fundamental frequency.',
      steps: [
        { step: 1, instruction: 'Calculate T/μ.', math: 'T/μ = 80/0.005 = 16,000', explanation: 'Divide tension by mass per unit length.' },
        { step: 2, instruction: 'Take the square root.', math: '√16,000 ≈ 126.5', explanation: 'This gives the wave speed on the string.' },
        { step: 3, instruction: 'Apply the full formula.', math: 'f = (1/(2 × 0.65)) × 126.5 = 126.5/1.3', explanation: 'Divide by 2L.' },
        { step: 4, instruction: 'Calculate.', math: 'f ≈ 97.3 Hz', explanation: 'This is the fundamental frequency.' },
      ],
      finalAnswer: 'Fundamental frequency ≈ 97.3 Hz.',
    },
    whyItWorks:
      "A shorter string, a tighter (higher tension) string, or a lighter (lower μ) string all vibrate " +
      "faster, producing a higher frequency — this matches the formula's structure directly: f increases " +
      "as L decreases, as T increases, or as μ decreases.",
    realLifeExample: {
      title: 'Tuning a guitar string',
      scenario: 'Turning a guitar\'s tuning peg tightens (increases tension in) a string, raising its pitch.',
      explanation: "Increasing tension T directly increases the fundamental frequency (f ∝ √T), raising the pitch — this is exactly the mechanism guitarists use every time they tune a string.",
    },
    practiceQuestions: [
      {
        id: 'vibrating-string-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A guitarist presses a fret, shortening the vibrating length of a string. What happens to the pitch?',
        options: [
          { id: 'a', text: 'It rises, since a shorter length (L) produces a higher fundamental frequency.' },
          { id: 'b', text: 'It falls, since a shorter length produces a lower frequency.' },
          { id: 'c', text: 'Pitch is completely unrelated to string length.' },
          { id: 'd', text: 'The pitch stays exactly the same.' },
        ],
        correctOptionId: 'a',
        hints: ['f = (1/2L)√(T/μ) — what happens to f as L decreases?'],
        explanation: 'Since frequency is inversely proportional to length, shortening the vibrating length raises the fundamental frequency (pitch).',
      },
    ],
    commonMistake:
      "Assuming only length affects a string's pitch — tension and mass per unit length (string thickness) " +
      "matter equally, which is why guitar strings of different thicknesses are tuned to different notes " +
      "even at the same length and similar tension.",
    quickReview: [
      'f = (1/2L)√(T/μ): frequency depends on length, tension, and mass per unit length.',
      'Shorter length, higher tension, or lower mass per unit length → higher frequency (pitch).',
      'This explains fretting (length), tuning (tension), and string gauge (μ) on stringed instruments.',
    ],
  },

  'resonance-column': {
    slug: 'resonance-column',
    title: 'Resonance Column',
    difficulty: 'medium',
    simpleExplanation:
      "A resonance column (or resonance tube) is a pipe, closed at one end (often by a water level), used " +
      "to demonstrate and measure resonance in an air column. When a vibrating tuning fork is held above " +
      "the open end and the air column length is adjusted, the sound becomes noticeably louder at specific " +
      "lengths — this is resonance.",
    whyItMatters:
      "The resonance column is a classic experimental method for measuring the speed of sound, by relating " +
      "a directly measurable air column length to the known frequency of a tuning fork.",
    formulaSlug: 'closed-pipe-resonance-formula',
    workedExample: {
      id: 'resonance-column-we-1',
      title: 'Finding the speed of sound from a resonance column',
      problemStatement: 'A tuning fork of frequency 512 Hz produces the first resonance in a closed tube when the air column length is 0.16 m. Find the speed of sound.',
      steps: [
        { step: 1, instruction: 'Find the wavelength from the resonance length.', math: 'L = λ/4, so λ = 4L = 4 × 0.16', explanation: 'The first resonance occurs at L = λ/4.' },
        { step: 2, instruction: 'Calculate λ.', math: 'λ = 0.64 m', explanation: 'Multiply the air column length by 4.' },
        { step: 3, instruction: 'Apply v = fλ.', math: 'v = 512 × 0.64', explanation: 'Multiply frequency by wavelength.' },
        { step: 4, instruction: 'Calculate.', math: 'v ≈ 327.7 m/s', explanation: 'This closely matches the known speed of sound in air.' },
      ],
      finalAnswer: 'Speed of sound ≈ 327.7 m/s.',
    },
    whyItWorks:
      "At the closed end of the tube, the air cannot move, forming a node; at the open end, the air moves " +
      "freely, forming an antinode — the shortest air column that fits this node-at-closed-end, " +
      "antinode-at-open-end pattern is exactly one-quarter of a wavelength, which is why resonance first " +
      "occurs at L = λ/4.",
    realLifeExample: {
      title: 'Blowing across a bottle to produce a note',
      scenario: 'Blowing across the top of a partially filled bottle produces a musical note.',
      explanation: 'The air column inside the bottle (closed at the bottom by the liquid) resonates at a specific frequency determined by its length — this is the exact same physics as a resonance column, and is why the pitch changes as you pour liquid in or out, changing the air column length.',
    },
    practiceQuestions: [
      {
        id: 'resonance-column-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A tuning fork of frequency 440 Hz first resonates in a closed tube at an air column length of 0.19 m. Find the speed of sound.',
        hints: ['λ = 4L, then v = fλ.'],
        correctAnswer: 334.4,
        tolerance: 5,
        unit: 'm/s',
        explanation: 'λ = 4 × 0.19 = 0.76 m. v = 440 × 0.76 = 334.4 m/s.',
      },
    ],
    commonMistake:
      "Assuming the first resonance occurs when L = λ/2 (as with a string) — a CLOSED pipe has a node at " +
      "the closed end and an antinode at the open end, giving L = λ/4 for the first resonance, not λ/2.",
    quickReview: [
      'A resonance column is closed at one end (node) and open at the other (antinode).',
      'First resonance: L = λ/4.',
      'v = fλ lets you find the speed of sound from the resonance length and known frequency.',
    ],
  },

  'organ-pipes': {
    slug: 'organ-pipes',
    title: 'Organ Pipes',
    difficulty: 'medium',
    simpleExplanation:
      "Organ pipes produce sound via resonating air columns, and come in two types: closed pipes (closed " +
      "at one end, like the resonance column) and open pipes (open at both ends). An open pipe's " +
      "fundamental frequency occurs when its length equals half the sound wavelength (L = λ/2).",
    whyItMatters:
      "Comparing open and closed pipes reveals how boundary conditions (open vs. closed ends) shape which " +
      "frequencies a resonating air column can produce, a principle used in the design of real musical " +
      "wind instruments.",
    formulaSlug: 'open-pipe-frequency-formula',
    workedExample: {
      id: 'organ-pipe-we-1',
      title: 'Finding the fundamental frequency of an open pipe',
      problemStatement: 'An organ pipe open at both ends is 1.2 m long. Find its fundamental frequency (speed of sound = 340 m/s).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'f = v/2L', explanation: 'v = 340 m/s, L = 1.2 m.' },
        { step: 2, instruction: 'Substitute values.', math: 'f = 340/(2 × 1.2) = 340/2.4', explanation: 'Divide speed by twice the length.' },
        { step: 3, instruction: 'Calculate.', math: 'f ≈ 141.7 Hz', explanation: 'This is the fundamental frequency.' },
      ],
      finalAnswer: 'Fundamental frequency ≈ 141.7 Hz.',
    },
    whyItWorks:
      "Both ends of an open pipe are free to move (antinodes), so the shortest air column pattern that " +
      "fits an antinode at each end (with one node in the middle) spans exactly half a wavelength — this " +
      "is different from a closed pipe (node at one end, antinode at the other), which needs only a " +
      "quarter wavelength for its shortest resonant pattern.",
    realLifeExample: {
      title: 'Why open and closed organ pipes of the same length sound different',
      scenario: 'A closed pipe and an open pipe of the same physical length produce different musical pitches.',
      explanation: "Because closed pipes resonate at L = λ/4 (needing only a quarter wavelength) while open pipes need L = λ/2 (half a wavelength) for the fundamental, a closed pipe of a given length produces exactly half the fundamental frequency of an open pipe of the same length — a full octave lower.",
    },
    practiceQuestions: [
      {
        id: 'organ-pipe-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An open organ pipe has a fundamental frequency of 200 Hz. Find its length (v = 340 m/s).',
        hints: ['f = v/2L, rearranged: L = v/2f.'],
        correctAnswer: 0.85,
        tolerance: 0.02,
        unit: 'm',
        explanation: 'L = 340/(2 × 200) = 340/400 = 0.85 m.',
      },
    ],
    commonMistake:
      "Using the closed-pipe formula (L = λ/4) for an open pipe, or vice versa — always check the boundary " +
      "conditions (open = antinode, closed = node) before choosing which relationship applies.",
    quickReview: [
      'Open pipes: antinode at both ends, fundamental at L = λ/2 (f = v/2L).',
      'Closed pipes: node at closed end, antinode at open end, fundamental at L = λ/4.',
      'A closed pipe produces a fundamental one octave lower than an open pipe of the same length.',
    ],
  },

  'intensity-of-waves': {
    slug: 'intensity-of-waves',
    title: 'Intensity of Waves',
    difficulty: 'medium',
    simpleExplanation:
      "Intensity measures how much power a wave delivers per unit area — it tells you how 'concentrated' " +
      "a wave's energy is at a given point, which is why the same total power can feel much stronger or " +
      "weaker depending on how spread out it is.",
    whyItMatters:
      "Intensity explains why sounds and light get weaker with distance from their source, and is directly " +
      "related to perceived loudness (for sound) and brightness (for light).",
    formulaSlug: 'wave-intensity-formula',
    workedExample: {
      id: 'wave-intensity-we-1',
      title: 'Finding wave intensity',
      problemStatement: 'A speaker emits 0.5 W of sound power, spread evenly over a spherical area of 10 m². Find the sound intensity.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'I = P/A', explanation: 'P = 0.5 W, A = 10 m².' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'I = 0.5/10 = 0.05 W/m²', explanation: 'Divide power by area.' },
      ],
      finalAnswer: 'Intensity = 0.05 W/m².',
    },
    whyItWorks:
      "As a wave (sound or light) spreads out from a point source, its fixed total power is distributed " +
      "over an ever-increasing area (for a spherical wave, the surface area of a sphere, which grows with " +
      "the square of distance) — this is why intensity decreases sharply (following an inverse-square " +
      "relationship) as distance from the source increases.",
    realLifeExample: {
      title: 'Why sound gets quieter farther from a speaker',
      scenario: 'Standing farther away from a loudspeaker makes the sound noticeably quieter.',
      explanation: "The speaker's total sound power stays the same, but as you move farther away, that same power is spread over an increasingly large spherical area — reducing the intensity (and therefore the perceived loudness) reaching you.",
    },
    practiceQuestions: [
      {
        id: 'wave-intensity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A source emits 2 W of power spread over an area of 4 m². Find the intensity.',
        hints: ['I = P/A.'],
        correctAnswer: 0.5,
        tolerance: 0.02,
        unit: 'W/m²',
        explanation: 'I = 2/4 = 0.5 W/m².',
      },
    ],
    commonMistake:
      "Confusing intensity with total power — intensity accounts for how the power is SPREAD OUT (per " +
      "unit area); the same power delivered over a smaller area produces a much higher intensity than " +
      "over a larger area.",
    quickReview: [
      'I = P/A measures power per unit area.',
      'Intensity decreases as a wave spreads over a larger area with distance from its source.',
      'Intensity relates directly to perceived loudness (sound) or brightness (light).',
    ],
  },
};
