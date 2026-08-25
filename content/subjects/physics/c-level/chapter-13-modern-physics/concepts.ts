import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 13 — Modern Physics. Matches the
// textbook's section list: radioactivity and its uses; nuclear energy
// and its environmental impact; wave-particle dualism; the principle
// of special relativity.
export const chapter13CModernConcepts: Record<string, Concept> = {
  'radioactivity-and-its-uses': {
    slug: 'radioactivity-and-its-uses',
    title: 'Radioactivity and Its Uses',
    difficulty: 'medium',
    simpleExplanation:
      'Radioactivity is the spontaneous emission of particles or energy from an unstable atomic nucleus. Each ' +
      'radioactive substance has a characteristic half-life — the time for exactly half of a sample to decay — ' +
      'letting the fraction remaining after any elapsed time be predicted.',
    whyItMatters:
      'Radioactivity has genuinely important uses — medical diagnosis and treatment, dating ancient artifacts, ' +
      'and smoke detectors — alongside the serious hazards it poses, making a solid quantitative understanding of decay essential.',
    diagram: {
      id: 'radioactive-decay-diagram',
      title: 'Radioactive decay: the fraction of a sample remaining over successive half-lives',
      altText: 'A curve starting at full amount and dropping by half at each successive half-life interval, approaching but never quite reaching zero',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (t: number) => Math.pow(0.5, t),
        min: 0,
        max: 5,
        markPoints: [
          { x: 1, y: 0.5, label: '1 half-life' },
          { x: 2, y: 0.25, label: '2 half-lives' },
          { x: 3, y: 0.125, label: '3 half-lives' },
        ],
        xLabel: 'half-lives elapsed',
        yLabel: 'fraction remaining',
      },
    },
    formulaSlug: 'radioactive-decay-formula',
    workedExample: {
      id: 'radioactivity-worked-1',
      title: 'Find the fraction of a radioactive sample remaining',
      problemStatement: 'Iodine-131, used in medical treatment, has a half-life of 8 days. Find the fraction of a sample remaining after 24 days.',
      steps: [
        { step: 1, instruction: 'Find how many half-lives have passed.', math: 'n = t / T_half = 24 / 8 = 3', explanation: '24 days is exactly 3 half-lives of 8 days each.' },
        { step: 2, instruction: 'Apply the decay formula.', math: 'fraction remaining = (1/2) to the power 3', explanation: 'Each half-life halves the remaining amount.' },
        { step: 3, instruction: 'Compute the result.', math: '(1/2) to the power 3 = 1/8 = 0.125', explanation: 'Only one-eighth of the original sample remains.' },
      ],
      finalAnswer: '12.5% of the original sample remains after 24 days.',
    },
    whyItWorks:
      'Radioactive decay is a random process at the level of individual atoms, but for a large enough sample, ' +
      'the same fixed FRACTION decays in each successive half-life interval — this steady, repeating halving is ' +
      'exactly what produces the (1/2) to the power n pattern.',
    realLifeExample: {
      title: 'Carbon dating an ancient artifact',
      scenario: 'Archaeologists estimate the age of ancient organic remains by measuring how much radioactive carbon-14 remains in them.',
      explanation: "Carbon-14 has a known half-life (about 5730 years) — measuring what fraction remains lets " +
        "scientists work backward to calculate how many half-lives (and therefore how many years) have passed since the organism died.",
    },
    practiceQuestions: [
      {
        id: 'radioactivity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Iodine-131 (half-life 8 days) starts as a sample. Find the percentage remaining after 32 days.',
        hints: ['Find n = t/T_half first, then compute (1/2) to the power n.'],
        correctAnswer: 6.25,
        explanation: 'n = 32/8 = 4. (1/2) to the power 4 = 1/16 = 6.25%.',
      },
    ],
    commonMistake:
      'Assuming a sample decays completely after two half-lives — it actually never reaches exactly zero; ' +
      'after 2 half-lives, one quarter still remains, and some (an ever-smaller fraction) always remains mathematically.',
    quickReview: [
      'Half-life: the time for exactly half a sample to decay.',
      'After n half-lives, (1/2) to the power n of the sample remains.',
      'Used in medicine, dating, and smoke detectors.',
    ],
  },

  'nuclear-energy-and-environmental-impact': {
    slug: 'nuclear-energy-and-environmental-impact',
    title: 'Nuclear Energy and Its Environmental Impact',
    difficulty: 'medium',
    simpleExplanation:
      'Nuclear reactions (fission, splitting a heavy nucleus, or fusion, combining light nuclei) release an ' +
      'enormous amount of energy from a tiny amount of mass, following E=mc squared — mass and energy are ' +
      'fundamentally the same thing, related by an enormous conversion factor.',
    whyItMatters:
      'Nuclear power offers enormous energy density without the direct carbon emissions of burning fossil ' +
      'fuels, but brings its own serious environmental concerns — radioactive waste storage and the risk of accidents.',
    formulaSlug: 'mass-energy-equivalence-formula',
    workedExample: {
      id: 'nuclear-energy-worked-1',
      title: 'Find the energy released by a nuclear reaction',
      problemStatement: 'A nuclear reaction converts 0.001 kg of mass into energy. Find the energy released.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'm = 0.001 kg,  c = 3 times 10 to the power 8 m/s', explanation: 'Mass converted and the speed of light.' },
        { step: 2, instruction: 'Apply the mass-energy equivalence formula.', math: 'E = mc squared = (0.001)(3 times 10 to the power 8) squared', explanation: 'Square the speed of light, then multiply by the mass.' },
        { step: 3, instruction: 'Compute the result.', math: 'E = (0.001)(9 times 10 to the power 16) = 9 times 10 to the power 13 J', explanation: 'An almost unimaginably large amount of energy from a tiny mass.' },
      ],
      finalAnswer: 'E = 9 times 10 to the power 13 J.',
    },
    whyItWorks:
      "The speed of light is such an enormous number that its square is even more enormous — so E=mc squared " +
      "predicts that even a minuscule amount of mass corresponds to a gigantic quantity of energy, exactly " +
      "why nuclear reactions release so much more energy per kilogram of fuel than any chemical reaction (like burning fossil fuels).",
    realLifeExample: {
      title: 'Why a small amount of nuclear fuel powers a plant for years',
      scenario: "A nuclear power plant's fuel needs replacing only every year or two, unlike a fossil fuel plant that continuously burns enormous quantities of coal or gas.",
      explanation: 'Because E=mc squared converts even a tiny mass into a huge amount of energy, nuclear fuel ' +
        'has an energy density millions of times greater than chemical fuels like coal.',
    },
    practiceQuestions: [
      {
        id: 'nuclear-energy-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A nuclear reaction converts 0.0005 kg of mass into energy. Find the energy released.',
        hints: ['E = mc squared.'],
        correctAnswer: 4.5e13,
        tolerance: 0.1e13,
        explanation: 'E = (0.0005)(9 times 10 to the power 16) = 4.5 times 10 to the power 13 J.',
      },
    ],
    commonMistake:
      'Forgetting to square the speed of light — since c is squared in the formula, using c instead of c ' +
      'squared drastically underestimates the true energy released.',
    quickReview: [
      'E = mc squared.',
      'A tiny mass converts into an enormous amount of energy.',
      'Offers huge energy density, but with serious waste-storage and safety concerns.',
    ],
  },

  'wave-particle-duality': {
    slug: 'wave-particle-duality',
    title: 'Wave-Particle Dualism',
    difficulty: 'hard',
    simpleExplanation:
      'Every particle has an associated wavelength, given by the de Broglie relation, lambda=h/(mv) — matter ' +
      'itself behaves as a wave, just as light (usually thought of as a wave) can behave as a stream of particles (photons).',
    whyItMatters:
      'Wave-particle duality is one of the strangest and most important discoveries of modern physics, ' +
      'directly underlying electron microscopy and the entire framework of quantum mechanics.',
    formulaSlug: 'de-broglie-wavelength-formula',
    workedExample: {
      id: 'wave-particle-worked-1',
      title: "Find an electron's de Broglie wavelength",
      problemStatement: 'An electron (mass 9.11 times 10 to the power -31 kg) moves at 2 times 10 to the power 6 m/s. Find its de Broglie wavelength.',
      steps: [
        { step: 1, instruction: "Find the electron's momentum.", math: 'p = mv = (9.11 times 10 to the power -31)(2 times 10 to the power 6)', explanation: 'Multiply mass by speed.' },
        { step: 2, instruction: 'Compute the momentum.', math: 'p = 1.822 times 10 to the power -24 kg m/s', explanation: 'The result of the multiplication.' },
        { step: 3, instruction: 'Apply the de Broglie formula.', math: 'lambda = h/p = (6.626 times 10 to the power -34) / (1.822 times 10 to the power -24)', explanation: "Divide Planck's constant by the momentum." },
        { step: 4, instruction: 'Compute the result.', math: 'lambda = 3.637 times 10 to the power -10 m', explanation: 'About 0.364 nanometres — comparable to the spacing between atoms in a crystal.' },
      ],
      finalAnswer: 'lambda = 3.637 times 10 to the power -10 m (about 0.364 nm).',
    },
    whyItWorks:
      "This wavelength comes from the same underlying quantum mechanical relationship that connects a photon's " +
      "momentum to its wavelength — de Broglie proposed that this relationship, originally discovered for " +
      "light, should apply to EVERY particle, not just photons, and this proposal was experimentally confirmed by observing electron diffraction.",
    realLifeExample: {
      title: 'Electron microscopes seeing details far smaller than any light microscope',
      scenario: "An electron microscope can resolve details thousands of times smaller than the best light microscope.",
      explanation: "A fast-moving electron's de Broglie wavelength is far shorter than that of visible light — " +
        "and since a wave can only resolve details roughly as small as its own wavelength, electrons can image far finer structures than light ever could.",
    },
    practiceQuestions: [
      {
        id: 'wave-particle-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'An electron (mass 9.11 times 10 to the power -31 kg) moves at 5 times 10 to the power 6 m/s. Find its de Broglie wavelength, in metres.',
        hints: ['Find p=mv first, then lambda=h/p.'],
        correctAnswer: 1.455e-10,
        tolerance: 0.02e-10,
        explanation: 'p = (9.11e-31)(5e6) = 4.555e-24 kg m/s. lambda = (6.626e-34)/(4.555e-24) approximately 1.455e-10 m.',
      },
    ],
    commonMistake:
      'Assuming only tiny particles like electrons have a "real" wavelength — every moving object technically ' +
      'has a de Broglie wavelength, but for everyday-sized objects (like a thrown ball), it is so absurdly tiny that no wave effects are ever observable.',
    quickReview: [
      'lambda = h/(mv).',
      'Every moving particle has an associated wavelength.',
      'Confirmed experimentally by observing electron diffraction.',
    ],
  },

  'special-theory-of-relativity': {
    slug: 'special-theory-of-relativity',
    title: 'Principle of Special Theory of Relativity',
    difficulty: 'hard',
    simpleExplanation:
      "Einstein's special relativity is built on two principles: the laws of physics are the same for all " +
      "observers moving at constant velocity, and the speed of light in a vacuum is the same for every " +
      "observer, regardless of their own motion. One striking consequence is time dilation: a moving clock runs slower, delta t=gamma times delta t_0.",
    whyItMatters:
      "Special relativity fundamentally changed our understanding of space and time — and its effects are " +
      "not just theoretical: GPS satellites must correct for relativistic time dilation to remain accurate.",
    diagram: {
      id: 'time-dilation-diagram',
      title: 'The Lorentz factor (gamma) rising sharply as speed approaches the speed of light',
      altText: 'A curve starting near 1 at low speed and rising steeply, approaching infinity as the speed ratio v/c approaches 1',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (v: number) => 1 / Math.sqrt(1 - v * v),
        min: 0,
        max: 0.99,
        markPoints: [
          { x: 0.8, y: 1.667, label: 'v = 0.8c' },
        ],
        xLabel: 'v / c',
        yLabel: 'gamma',
      },
    },
    formulaSlug: 'time-dilation-formula',
    workedExample: {
      id: 'relativity-worked-1',
      title: 'Find the time dilation for a fast-moving spaceship',
      problemStatement: 'A spaceship travels at 0.8c. If 10 years pass on board the ship (proper time), find how much time passes for an observer on Earth.',
      steps: [
        { step: 1, instruction: 'Find the Lorentz factor gamma.', math: 'gamma = 1 / sqrt(1 minus 0.8 squared) = 1 / sqrt(1 minus 0.64)', explanation: 'Substitute v/c = 0.8.' },
        { step: 2, instruction: 'Compute gamma.', math: 'gamma = 1 / sqrt(0.36) = 1/0.6 = 1.667', explanation: 'Take the square root, then the reciprocal.' },
        { step: 3, instruction: 'Apply the time dilation formula.', math: 'delta t = gamma times delta t_0 = (1.667)(10)', explanation: 'Multiply the proper time by gamma.' },
        { step: 4, instruction: 'Compute the result.', math: 'delta t = 16.67 years', explanation: 'More time passes for the Earth observer than for the traveler.' },
      ],
      finalAnswer: 'delta t = 16.67 years pass on Earth, while only 10 years pass on the ship.',
    },
    whyItWorks:
      "Because the speed of light must be measured as the same value by every observer, an observer watching a " +
      "clock moving at high speed must conclude that clock is ticking more slowly — otherwise, the two " +
      "observers would disagree about how fast light itself travels, which special relativity's second postulate forbids.",
    realLifeExample: {
      title: 'GPS satellites correcting for time dilation',
      scenario: "GPS satellites orbit Earth at high speed and must keep extremely precise time to give accurate positions.",
      explanation: "Their motion causes a small but real time dilation effect — without correcting for it using " +
        "exactly this kind of relativistic calculation, GPS positions would drift by several kilometres per day.",
    },
    practiceQuestions: [
      {
        id: 'relativity-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A spaceship travels at 0.6c. If 5 years pass on board (proper time), find how much time passes on Earth.',
        hints: ['Find gamma = 1/sqrt(1 minus 0.6 squared) first, then multiply by 5.'],
        correctAnswer: 6.25,
        explanation: 'gamma = 1/sqrt(1-0.36) = 1/sqrt(0.64) = 1/0.8 = 1.25. delta t = 1.25 times 5 = 6.25 years.',
      },
    ],
    commonMistake:
      'Assuming time dilation only matters at truly extreme speeds — while the effect is tiny at everyday ' +
      'speeds, it is never exactly zero, and becomes significant (as shown here) once speed becomes a substantial fraction of the speed of light.',
    quickReview: [
      'delta t = gamma times delta t_0, with gamma = 1/sqrt(1 minus v squared over c squared).',
      'A moving clock runs slower, from a stationary observer\'s point of view.',
      'Confirmed by real-world systems like GPS satellites.',
    ],
  },
};
