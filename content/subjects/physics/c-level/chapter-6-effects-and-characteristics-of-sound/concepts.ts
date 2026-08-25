import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 6 — Effects and Characteristics of
// Sound. Matches the textbook's section list: propagation of sound in a
// medium; echo; audibility; the Doppler effect; properties of sound waves.
export const chapter6CSoundConcepts: Record<string, Concept> = {
  'propagation-of-sound': {
    slug: 'propagation-of-sound',
    title: 'Propagation of Sound in a Medium',
    difficulty: 'medium',
    simpleExplanation:
      'Sound is a mechanical wave — a traveling disturbance of pressure — that needs a medium (a solid, liquid, ' +
      'or gas) to travel through, unlike light. It travels fastest through solids, slower through liquids, and ' +
      'slowest through gases, because particles that are packed closer together transmit the disturbance more quickly.',
    whyItMatters:
      'Understanding that sound needs a medium — and travels at different speeds through different ones — is ' +
      'the foundation for everything else in this chapter, from calculating echo distances to explaining the Doppler effect.',
    formulaSlug: 'speed-of-sound-in-air-formula',
    workedExample: {
      id: 'propagation-worked-1',
      title: 'Find the speed of sound in air at a given temperature',
      problemStatement: 'Find the speed of sound in air at 20°C.',
      steps: [
        { step: 1, instruction: 'Write down the known value.', math: 'T = 20°C', explanation: 'Air temperature is given.' },
        { step: 2, instruction: 'Apply the speed-of-sound formula.', math: 'v = 331+0.6T = 331+0.6(20)', explanation: 'Substitute the temperature.' },
        { step: 3, instruction: 'Compute the result.', math: 'v = 331+12 = 343 m/s', explanation: 'This matches the commonly quoted speed of sound at room temperature.' },
      ],
      finalAnswer: 'v = 343 m/s.',
    },
    whyItWorks:
      'Sound travels by particles bumping into their neighbors, passing the disturbance along — in warmer air, ' +
      'particles move faster on average and collide more often, so the pressure disturbance propagates through the medium more quickly.',
    realLifeExample: {
      title: 'Why sound is louder and clearer through a solid wall than through air',
      scenario: 'Pressing an ear directly against a wall lets you hear sounds from the other side of the wall ' +
        'more clearly than through the open air.',
      explanation: "Solids have their particles packed tightly together, transmitting sound vibrations far more " +
        "efficiently and quickly than the widely-spaced particles of air — exactly why solids conduct sound fastest.",
    },
    practiceQuestions: [
      {
        id: 'propagation-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the speed of sound in air at 30°C.',
        hints: ['v = 331+0.6T.'],
        correctAnswer: 349,
        explanation: 'v = 331+0.6(30) = 331+18 = 349 m/s.',
      },
    ],
    commonMistake:
      'Assuming sound can travel through a vacuum like light does — sound absolutely requires a medium (solid, ' +
      'liquid, or gas) with particles to pass the disturbance along; in a vacuum, there is nothing to carry it.',
    quickReview: [
      'v = 331+0.6T for sound in air (T in °C).',
      'Sound needs a medium — it cannot travel through a vacuum.',
      'Fastest in solids, slower in liquids, slowest in gases.',
    ],
  },

  'echo': {
    slug: 'echo',
    title: 'Echo',
    difficulty: 'medium',
    simpleExplanation:
      'An echo is a reflected sound wave, heard after the original sound bounces off a distant surface (like a ' +
      'cliff or wall) and returns. Since the sound travels the distance twice (out and back), d=vt/2.',
    whyItMatters:
      'Echoes are a direct, measurable demonstration that sound is a wave that reflects — and the same principle ' +
      '(timing a reflected wave) underlies sonar, radar, and medical ultrasound imaging.',
    diagram: {
      id: 'echo-diagram',
      title: 'Sound traveling to a wall and echoing back',
      altText: 'A source/listener on the left and a wall on the right, with an arrow showing the sound traveling out to the wall labelled d, and a second arrow below showing the echo returning',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [0, 0.3], to: [5, 0.3], arrow: true, label: 'sound travels out (d)', labelDx: 0, labelDy: -12 },
          { from: [5, -0.3], to: [0, -0.3], arrow: true, label: 'echo returns', labelDx: 0, labelDy: 14 },
        ],
        points: [
          { x: 0, y: 0, label: 'Source / Listener', labelDx: -30, labelDy: 0 },
          { x: 5, y: 0, label: 'Wall', labelDx: 12, labelDy: 0 },
        ],
      },
    },
    formulaSlug: 'echo-distance-formula',
    workedExample: {
      id: 'echo-worked-1',
      title: 'Find the distance to a wall using an echo',
      problemStatement: 'A person shouts toward a cliff and hears the echo 0.6 s later. If sound travels at 340 m/s, find the distance to the cliff.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'v=340 m/s,  t=0.6 s', explanation: 'Speed of sound and the round-trip time.' },
        { step: 2, instruction: 'Apply the echo distance formula.', math: 'd = vt/2 = (340)(0.6)/2', explanation: 'Divide by 2 since the sound travels the distance twice (out and back).' },
        { step: 3, instruction: 'Compute the result.', math: 'd = 204/2 = 102 m', explanation: 'The cliff is 102 m away.' },
      ],
      finalAnswer: 'd = 102 m.',
    },
    whyItWorks:
      'The measured time t covers the sound\'s ENTIRE round trip — traveling out to the surface, then back to ' +
      'the listener — so the one-way distance is only half of vt, exactly what dividing by 2 accounts for.',
    realLifeExample: {
      title: 'Sonar depth-finding on a ship',
      scenario: "A ship's sonar sends a sound pulse downward and measures how long it takes to hear the echo " +
        "reflected off the ocean floor.",
      explanation: 'Using exactly d=vt/2 (with the speed of sound in water instead of air), sonar calculates ' +
        'the ocean depth directly from that round-trip timing.',
    },
    practiceQuestions: [
      {
        id: 'echo-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A ship\'s sonar (v=1500 m/s in water) receives an echo 0.8 s after sending a pulse. Find the depth of the ocean floor.',
        hints: ['d = vt/2.'],
        correctAnswer: 600,
        explanation: 'd = (1500)(0.8)/2 = 1200/2 = 600 m.',
      },
    ],
    commonMistake:
      'Forgetting to divide by 2 — the measured time is for the ROUND trip, not the one-way distance, so ' +
      "skipping the ÷2 gives a distance twice as large as the true value.",
    quickReview: [
      'd = vt/2 — divide by 2 for the round trip.',
      'An echo is sound reflecting off a distant surface.',
      'The same timing principle underlies sonar and radar.',
    ],
  },

  'audibility-and-hearing-range': {
    slug: 'audibility-and-hearing-range',
    title: 'Audibility',
    difficulty: 'medium',
    simpleExplanation:
      'The human ear can only detect sound frequencies roughly between 20 Hz and 20000 Hz (20 kHz) — this range ' +
      'is called audibility. Sounds below 20 Hz are infrasound, and above 20 kHz are ultrasound, both inaudible to humans.',
    whyItMatters:
      'Audibility also explains why an echo needs a minimum distance to be perceived as a separate sound at all ' +
      '— the human ear needs a minimum time gap (about 0.1 s) between two sounds to tell them apart.',
    formulaSlug: 'minimum-echo-distance-formula',
    workedExample: {
      id: 'audibility-worked-1',
      title: 'Find the minimum distance for a distinct echo',
      problemStatement: 'Find the minimum distance a wall must be from a listener (in air, v=340 m/s) for its echo to be heard as distinct from the original sound.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'v=340 m/s,  t_min=0.1 s', explanation: 'The human ear needs at least 0.1 s to distinguish two separate sounds.' },
        { step: 2, instruction: 'Apply the minimum echo distance formula.', math: 'd_min = (v × t_min)/2 = (340)(0.1)/2', explanation: 'Same reasoning as the echo formula, using the minimum distinguishable time.' },
        { step: 3, instruction: 'Compute the result.', math: 'd_min = 34/2 = 17 m', explanation: 'A wall closer than this makes the echo blend into the original sound rather than being heard separately.' },
      ],
      finalAnswer: 'd_min = 17 m.',
    },
    whyItWorks:
      "The ear (and brain) can only separate two sounds if they arrive with enough of a time gap between them — " +
      "below about 0.1 s, the reflected sound arrives too soon after the original and the two blend into one " +
      "prolonged sound instead of being perceived as an echo.",
    realLifeExample: {
      title: 'Why small rooms do not produce noticeable echoes',
      scenario: "Speaking in a small room does not usually produce a distinct, separately-heard echo, while " +
        "shouting in a large canyon does.",
      explanation: 'A small room\'s walls are far closer than the 17 m minimum distance needed for a distinct ' +
        'echo in air, so any reflected sound arrives too quickly to be heard as separate from the original — ' +
        'it just makes the room sound slightly "livelier" (reverberation) instead.',
    },
    practiceQuestions: [
      {
        id: 'audibility-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the minimum distance for a distinct echo in water (v=1500 m/s), using the same 0.1 s minimum time.',
        hints: ['d_min = (v × t_min)/2.'],
        correctAnswer: 75,
        explanation: 'd_min = (1500)(0.1)/2 = 150/2 = 75 m.',
      },
    ],
    commonMistake:
      "Assuming audibility (20 Hz–20 kHz) is the same thing as the minimum-echo-distance rule — audibility is " +
      "about which FREQUENCIES the ear can detect at all, while the minimum echo distance is about the ear's " +
      "ability to separate two sounds in TIME; both are limits of human hearing, but they describe different things.",
    quickReview: [
      'Human audible range: about 20 Hz to 20 kHz.',
      'd_min = (v × t_min)/2, with t_min≈0.1 s.',
      'Below d_min, a reflected sound blends into the original instead of being heard as a separate echo.',
    ],
  },

  'doppler-effect': {
    slug: 'doppler-effect',
    title: 'The Doppler Effect',
    difficulty: 'hard',
    simpleExplanation:
      'The Doppler effect is the change in a wave\'s perceived frequency caused by relative motion between the ' +
      'source and the observer — a source approaching an observer sounds higher-pitched, and one moving away sounds lower-pitched.',
    whyItMatters:
      'The Doppler effect explains a genuinely universal wave phenomenon, from a passing ambulance siren\'s pitch ' +
      'shift to how astronomers measure whether distant stars and galaxies are moving toward or away from Earth using light.',
    diagram: {
      id: 'doppler-diagram',
      title: 'Sound wavefronts compressed ahead of a moving source, spread out behind it',
      altText: 'Three circles representing sound wavefronts, bunched tightly together on the right (ahead of the moving source) and spread farther apart on the left (behind it), with an arrow showing the direction of motion',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        circles: [
          { cx: -2, cy: 0, r: 3 },
          { cx: -1, cy: 0, r: 1.5 },
          { cx: 0, cy: 0, r: 0.3 },
        ],
        segments: [{ from: [0, 0], to: [1, 0], arrow: true, label: 'source moving', labelDx: 0, labelDy: -12 }],
        points: [{ x: 0, y: 0, label: 'source (now)', labelDx: 10, labelDy: 14 }],
      },
    },
    formulaSlug: 'doppler-effect-formula',
    workedExample: {
      id: 'doppler-worked-1',
      title: 'Find the frequency heard from an approaching source',
      problemStatement: 'A source emits a sound at 500 Hz while moving toward a stationary listener at 20 m/s. Find the frequency the listener hears. (v=340 m/s)',
      steps: [
        { step: 1, instruction: 'Identify the situation.', math: 'Source approaching, observer stationary: v₀=0, v_s=20 m/s (use − in the denominator)', explanation: 'A source moving TOWARD the observer uses the minus sign in the denominator, raising the perceived frequency.' },
        { step: 2, instruction: "Apply the Doppler formula.", math: "f' = f(v)/(v−v_s) = 500(340)/(340−20)", explanation: 'Substitute f=500, v=340, v_s=20.' },
        { step: 3, instruction: 'Compute the result.', math: "f' = 170000/320 ≈ 531.25 Hz", explanation: 'The listener hears a higher pitch than the source actually emits.' },
      ],
      finalAnswer: "f' ≈ 531.25 Hz.",
    },
    whyItWorks:
      "As the source moves toward the observer, each successive wave crest is emitted from a position slightly " +
      "closer to the observer than the last — crowding the crests closer together in space, which the observer " +
      "experiences as a shorter wavelength and therefore a higher frequency.",
    realLifeExample: {
      title: "A passing ambulance siren's changing pitch",
      scenario: "An ambulance siren sounds noticeably higher-pitched as it approaches, then suddenly drops to a " +
        "lower pitch right after it passes by.",
      explanation: "While approaching, the siren's sound waves compress ahead of it (higher perceived " +
        "frequency); once past, they stretch out behind it (lower perceived frequency) — exactly the Doppler effect in action.",
    },
    practiceQuestions: [
      {
        id: 'doppler-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A stationary source emits sound at 400 Hz. An observer moves toward it at 17 m/s. Find the frequency the observer hears. (v=340 m/s)',
        hints: ["Observer approaching, source stationary: f' = f(v+v₀)/v."],
        correctAnswer: 420,
        explanation: "f' = 400(340+17)/340 = 400(357)/340 = 142800/340 = 420 Hz.",
      },
    ],
    commonMistake:
      'Mixing up the signs for an approaching versus a receding source or observer — approaching always raises ' +
      'the perceived frequency and receding always lowers it, but it is easy to apply the wrong sign in the formula by mistake.',
    quickReview: [
      "f' = f(v±v₀)/(v∓v_s).",
      'Approaching: higher perceived frequency. Receding: lower perceived frequency.',
      'Caused by wave crests crowding together or spreading apart due to relative motion.',
    ],
  },

  'properties-of-sound-waves': {
    slug: 'properties-of-sound-waves',
    title: 'Properties of Sound Waves',
    difficulty: 'medium',
    simpleExplanation:
      'A sound wave is described by its amplitude (loudness), frequency (pitch, in Hz), and wavelength (the ' +
      'physical length of one complete wave cycle) — connected by the wave equation v=fλ.',
    whyItMatters:
      'These three properties — amplitude, frequency, and wavelength — are the basic vocabulary for describing ' +
      'and analyzing any sound wave, and the wave equation is the tool that connects them to the wave\'s speed.',
    diagram: {
      id: 'sound-wave-diagram',
      title: 'A sound wave, showing its wavelength and amplitude',
      altText: 'A sine curve showing one full wave cycle, with the wavelength marked as the horizontal distance between two consecutive crests, and the amplitude marked as the height from the centerline to a crest',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        min: 0,
        max: 12.57,
        markPoints: [
          { x: 1.5708, y: 1, label: 'crest (amplitude)' },
          { x: 4.7124, y: -1, label: 'trough' },
        ],
        xLabel: 'position',
        yLabel: 'displacement',
      },
    },
    formulaSlug: 'wave-equation-formula',
    workedExample: {
      id: 'sound-wave-worked-1',
      title: 'Find the wavelength of a sound wave',
      problemStatement: 'A sound wave travels at 340 m/s with a frequency of 170 Hz. Find its wavelength.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'v=340 m/s,  f=170 Hz', explanation: 'Wave speed and frequency are given.' },
        { step: 2, instruction: 'Rearrange the wave equation to solve for λ.', math: 'λ = v/f = 340/170', explanation: 'Divide speed by frequency.' },
        { step: 3, instruction: 'Compute the result.', math: 'λ = 2 m', explanation: 'Each complete wave cycle spans 2 metres.' },
      ],
      finalAnswer: 'λ = 2 m.',
    },
    whyItWorks:
      'In one second, f complete waves pass a fixed point, and each wave is λ metres long — so the total ' +
      'distance the disturbance covers in that one second (its speed) is exactly f times λ, which is the wave equation.',
    realLifeExample: {
      title: 'Why bass notes need larger speakers',
      scenario: 'Low-pitched (bass) sounds are produced by larger speaker woofers, while high-pitched sounds come from small tweeters.',
      explanation: 'Low frequency means a long wavelength (since v=fλ, with v roughly fixed, small f means ' +
        'large λ) — larger speaker cones move more air to effectively generate these longer sound waves.',
    },
    practiceQuestions: [
      {
        id: 'sound-wave-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A sound wave travels at 340 m/s with a frequency of 680 Hz. Find its wavelength.',
        hints: ['λ = v/f.'],
        correctAnswer: 0.5,
        explanation: 'λ = 340/680 = 0.5 m.',
      },
    ],
    commonMistake:
      'Confusing amplitude with wavelength — amplitude determines LOUDNESS (how much energy the wave carries), ' +
      'while wavelength (together with frequency) determines PITCH; the two are entirely independent properties.',
    quickReview: [
      'v = fλ — the wave equation.',
      'Amplitude: loudness. Frequency: pitch. Wavelength: physical length of one cycle.',
      'Amplitude and wavelength/frequency are independent properties.',
    ],
  },
};
