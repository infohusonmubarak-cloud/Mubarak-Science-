import type { Concept } from '@/types/content';

export const chapter11AQuantumConcepts: Record<string, Concept> = {
  'thermionic-emission-vacuum-diode-a-level': {
    slug: 'thermionic-emission-vacuum-diode-a-level',
    title: 'Thermionic Emission and the Vacuum Diode',
    difficulty: 'medium',
    simpleExplanation:
      'Thermionic emission is the release of electrons from a heated metal surface — heating a ' +
      'metal filament gives its free electrons enough energy to escape the surface entirely, rather ' +
      'than just vibrating faster within it. A vacuum diode uses this effect: a heated cathode ' +
      'emits electrons, which are attracted across an evacuated tube toward a nearby anode, but ' +
      'only when the anode is made positive — making the vacuum diode a one-way valve for electric current.',
    whyItMatters:
      'The vacuum diode was one of the earliest electronic components, used to convert alternating ' +
      'current into direct current (rectification) in early radios and electronics, before modern ' +
      'semiconductor diodes replaced it.',
    workedExample: {
      id: 'thermionic-worked-1',
      title: 'Explain why a vacuum diode only conducts in one direction',
      problemStatement: 'A vacuum diode has a heated cathode (which emits electrons) and a cold anode. Explain what happens when the anode is made negative instead of positive.',
      steps: [
        { step: 1, instruction: 'Recall the charge of the electrons emitted by the cathode.', explanation: 'Thermionically emitted electrons are negatively charged.' },
        { step: 2, instruction: 'Consider the force on the electrons if the anode is made negative.', explanation: 'A negative anode repels the negatively charged electrons, rather than attracting them across the tube.' },
        { step: 3, instruction: 'Conclude.', explanation: 'With the electrons repelled back toward the cathode, no current can flow across the tube — the diode only conducts when the anode is positive.' },
      ],
      finalAnswer: 'With a negative anode, the emitted electrons are repelled rather than attracted, so no current flows — the vacuum diode only conducts current in one direction.',
    },
    whyItWorks:
      "This one-way behavior comes directly from basic electrostatics — since the emitted electrons " +
      'are always negatively charged, they can only be pulled across the tube toward a positively ' +
      'charged anode; a negative anode does the opposite, blocking any current.',
    realLifeExample: {
      title: 'Old television and radio tubes',
      scenario: 'Early 20th-century radios and televisions relied on vacuum tubes (including diodes) before the invention of the transistor.',
      explanation: 'These bulky, hot, glowing glass tubes performed the same rectifying and amplifying jobs that tiny modern semiconductor components do today, at a fraction of the size and power consumption.',
    },
    practiceQuestions: [
      {
        id: 'thermionic-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is thermionic emission?',
        hints: ['Think about what "thermionic" combines: "thermo" (heat) and "ion/electron".'],
        options: [
          { id: 'a', text: 'The release of electrons from a heated metal surface' },
          { id: 'b', text: 'The absorption of electrons by a cold metal surface' },
          { id: 'c', text: 'The release of photons from a cooled surface' },
          { id: 'd', text: 'A type of chemical reaction' },
        ],
        correctOptionId: 'a',
        explanation: 'Thermionic emission is the release of electrons from a heated metal surface, once they have enough thermal energy to escape.',
      },
    ],
    commonMistake:
      'Assuming a vacuum diode conducts current in both directions like an ordinary wire — its ' +
      'entire purpose is to conduct in only ONE direction, acting as an electrical one-way valve.',
    quickReview: [
      'Thermionic emission: heating a metal surface releases electrons from it.',
      'A vacuum diode has a heated cathode (emits electrons) and an anode.',
      'Current only flows when the anode is positive — a one-way valve for current.',
    ],
  },

  'blackbody-radiation-a-level': {
    slug: 'blackbody-radiation-a-level',
    title: 'Blackbody Radiation',
    difficulty: 'medium',
    simpleExplanation:
      'Every object emits electromagnetic radiation because of its temperature — this is called ' +
      'thermal radiation. An ideal "blackbody" is a theoretical object that absorbs and re-emits ' +
      'radiation perfectly, with a spectrum of emitted wavelengths that depends ONLY on its ' +
      'temperature. Hotter objects emit more total radiation, and their peak wavelength shifts to ' +
      'shorter (bluer) wavelengths.',
    whyItMatters:
      'Trying (and initially failing) to correctly explain the blackbody radiation spectrum using ' +
      'classical physics is exactly what led Max Planck to propose that energy is emitted in ' +
      'discrete packets — the very first step toward the entire field of quantum physics.',
    workedExample: {
      id: 'blackbody-worked-1',
      title: 'Compare the light from two heated objects',
      problemStatement: 'A metal rod is heated and first glows dull red, then, at a higher temperature, glows white-hot. Explain this color change in terms of blackbody radiation.',
      steps: [
        { step: 1, instruction: "Recall how a blackbody's emission spectrum changes with temperature.", explanation: "As temperature increases, a blackbody's emission spectrum shifts toward shorter wavelengths and includes a wider range of visible colors." },
        { step: 2, instruction: 'Apply this to the dull red glow.', explanation: 'At a lower temperature, the rod mainly emits longer-wavelength (red) visible light, with much less other visible light.' },
        { step: 3, instruction: 'Apply this to the white-hot glow.', explanation: 'At a much higher temperature, the rod emits strongly across the whole visible spectrum, which combines to look white.' },
      ],
      finalAnswer: 'As the rod gets hotter, its blackbody emission spectrum shifts and broadens toward shorter wavelengths, changing its glow from dull red to white-hot.',
    },
    whyItWorks:
      'A hotter object\'s particles vibrate and radiate more vigorously, packing more energy into ' +
      'higher-frequency (shorter-wavelength) electromagnetic waves — which is exactly why increasing ' +
      "temperature shifts a blackbody's glow toward blue/white and increases its total emitted energy.",
    realLifeExample: {
      title: 'Star colors',
      scenario: 'Astronomers can estimate a star\'s surface temperature just from its color — reddish stars are cooler, bluish-white stars are hotter.',
      explanation: 'Stars behave very closely like blackbodies, so their emitted light spectrum (and hence apparent color) directly reveals their surface temperature, without needing to visit them.',
    },
    practiceQuestions: [
      {
        id: 'blackbody-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "As a blackbody's temperature increases, what happens to its peak emitted wavelength?",
        hints: ['Think about how a heated metal glows red, then white, as it gets hotter.'],
        options: [
          { id: 'a', text: 'It shifts to shorter (bluer) wavelengths' },
          { id: 'b', text: 'It shifts to longer (redder) wavelengths' },
          { id: 'c', text: 'It stays exactly the same' },
          { id: 'd', text: 'The object stops emitting radiation altogether' },
        ],
        correctOptionId: 'a',
        explanation: 'A hotter blackbody emits more energetic radiation, shifting its peak wavelength toward shorter (bluer) wavelengths.',
      },
    ],
    commonMistake:
      'Assuming only very hot objects emit radiation — EVERY object emits thermal (blackbody) ' +
      'radiation because of its temperature, even at room temperature, just mostly as invisible infrared radiation.',
    quickReview: [
      "A blackbody's emission spectrum depends only on its temperature.",
      'Hotter objects emit more total radiation, shifted toward shorter wavelengths.',
      "Explaining this spectrum correctly led Planck to the idea of quantized energy — the birth of quantum physics.",
    ],
  },

  'photon-energy-a-level': {
    slug: 'photon-energy-a-level',
    title: 'The Photon',
    difficulty: 'medium',
    simpleExplanation:
      'A photon is a single, discrete packet (or "quantum") of light energy. Light is not delivered ' +
      'in a smooth, continuous stream, but in these individual packets, each carrying an energy of ' +
      'E = hf — proportional to the frequency of the light. Higher-frequency light (like ultraviolet ' +
      'or X-rays) delivers much more energetic photons than lower-frequency light (like infrared or radio waves).',
    whyItMatters:
      'The photon concept was revolutionary — it showed that light has particle-like properties as ' +
      'well as its well-established wave properties, launching the idea of wave-particle duality ' +
      'that underlies all of quantum physics.',
    formulaSlug: 'photon-energy-formula-a-level',
    workedExample: {
      id: 'photon-worked-1',
      title: 'Find the energy of a photon',
      problemStatement: 'Find the energy of a single photon of green light with a frequency of 5.5 × 10¹⁴ Hz. Using h = 6.63 × 10⁻³⁴ J·s.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'E = hf', explanation: "Photon energy is Planck's constant times frequency." },
        { step: 2, instruction: 'Substitute the values.', math: 'E = 6.63×10⁻³⁴ × 5.5×10¹⁴', explanation: 'h = 6.63×10⁻³⁴ J·s, f = 5.5×10¹⁴ Hz.' },
        { step: 3, instruction: 'Calculate.', math: 'E ≈ 3.65×10⁻¹⁹', explanation: '6.63×10⁻³⁴ × 5.5×10¹⁴ ≈ 3.65×10⁻¹⁹.' },
      ],
      finalAnswer: 'E ≈ 3.65 × 10⁻¹⁹ J',
    },
    whyItWorks:
      "Since Planck's constant is a fixed proportionality factor between frequency and energy, " +
      'multiplying it by the frequency of any light source directly gives the fixed energy carried ' +
      'by every single photon of that light — the same for every photon of the same color.',
    realLifeExample: {
      title: 'Why ultraviolet light causes sunburn but visible light does not',
      scenario: 'Sitting in the sun causes sunburn from UV rays, but the visible light reaching your eyes at the same time does not burn your skin.',
      explanation: "UV light has a much higher frequency (and shorter wavelength) than visible light, so its photons carry far more energy — enough to damage skin cells — while visible-light photons carry too little energy to cause the same harm.",
    },
    practiceQuestions: [
      {
        id: 'photon-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the energy of a photon of radio waves with a frequency of 1 × 10⁶ Hz. Using h = 6.63 × 10⁻³⁴ J·s. (Enter the answer as the coefficient × 10⁻²⁸, e.g. for 6.63×10⁻²⁸, enter 6.63.)',
        hints: ['E = hf.', '6.63×10⁻³⁴ × 1×10⁶.'],
        correctAnswer: 6.63,
        tolerance: 0.05,
        explanation: 'E = 6.63×10⁻³⁴ × 1×10⁶ = 6.63×10⁻²⁸ J — an extremely tiny amount, showing why radio-wave photons are far less energetic than visible or UV light photons.',
      },
    ],
    commonMistake:
      'Confusing the intensity (brightness) of light with the energy of each individual photon — a ' +
      'very BRIGHT red light still delivers only low-energy (red) photons, just many more of them ' +
      'per second, while even a very DIM ultraviolet light delivers high-energy photons, just fewer of them.',
    quickReview: [
      'E = hf = hc/λ',
      'Light delivers energy in discrete packets called photons.',
      'Higher frequency (shorter wavelength) means more energetic photons.',
    ],
  },

  'models-of-the-atom-a-level': {
    slug: 'models-of-the-atom-a-level',
    title: 'Models of the Atom',
    difficulty: 'medium',
    simpleExplanation:
      "Scientific understanding of the atom's structure developed through several models. Thomson's " +
      '"plum pudding" model (1904) pictured the atom as a uniform positive sphere with electrons ' +
      "embedded throughout it, like plums in a pudding. Rutherford's nuclear model (1911), based on " +
      'his famous alpha-particle scattering experiment, showed that an atom\'s positive charge and ' +
      "nearly all its mass are concentrated in a tiny central nucleus, with electrons orbiting far " +
      "outside it — mostly empty space. Bohr's model (1913) refined this further, proposing that " +
      'electrons orbit the nucleus only at specific, fixed (quantized) energy levels.',
    whyItMatters:
      "This progression of models is a classic example of how science actually advances — each new " +
      "model was built to explain experimental evidence the PREVIOUS model could not, gradually " +
      'refining our understanding rather than being right from the very start.',
    workedExample: {
      id: 'atom-models-worked-1',
      title: "Interpret Rutherford's alpha-particle scattering experiment",
      problemStatement: 'In Rutherford\'s experiment, most alpha particles fired at a thin gold foil passed straight through, but a small number bounced almost straight back. Explain what this showed about atomic structure.',
      steps: [
        { step: 1, instruction: 'Interpret the particles that passed straight through.', explanation: 'Since most alpha particles passed through with little to no deflection, most of the atom must be empty space.' },
        { step: 2, instruction: 'Interpret the small number that bounced back sharply.', explanation: 'A small number of particles were deflected by a large angle, meaning they must have encountered something extremely small, dense, and positively charged (to repel the positive alpha particles).' },
        { step: 3, instruction: 'Conclude.', explanation: "This showed that an atom's positive charge and mass are concentrated in a tiny, dense central nucleus, with the rest of the atom being mostly empty space — disproving Thomson's spread-out plum pudding model." },
      ],
      finalAnswer: "The results showed atoms have a tiny, dense, positively charged nucleus surrounded by mostly empty space — leading directly to Rutherford's nuclear model.",
    },
    whyItWorks:
      "This experiment worked as a direct test precisely because Thomson's model predicted NO " +
      "particles should ever bounce back sharply (since the positive charge was spread out too " +
      "thinly to repel anything strongly) — the surprising, sharp deflections were exactly the " +
      "evidence needed to disprove it and reveal the concentrated nucleus.",
    realLifeExample: {
      title: 'Modern particle accelerators',
      scenario: "Today's particle accelerators, like the Large Hadron Collider, use the same basic scattering principle as Rutherford's experiment, just at far higher energies.",
      explanation: 'Firing particles at targets (or at each other) and studying how they scatter is still one of the most powerful tools physicists use to probe the structure of matter at ever smaller scales.',
    },
    practiceQuestions: [
      {
        id: 'atom-models-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "Rutherford's alpha-particle scattering experiment provided evidence for which feature of the atom?",
        hints: ['Think about what caused the sharp, unexpected deflections.'],
        options: [
          { id: 'a', text: 'A tiny, dense, positively charged nucleus' },
          { id: 'b', text: 'Electrons spread evenly throughout the atom' },
          { id: 'c', text: 'The atom has no internal structure at all' },
          { id: 'd', text: 'Atoms are entirely negatively charged' },
        ],
        correctOptionId: 'a',
        explanation: 'The sharp deflections of some alpha particles could only be explained by a tiny, dense, positively charged nucleus at the center of the atom.',
      },
    ],
    commonMistake:
      "Assuming the earliest atomic model (Thomson's) was simply 'wrong' and unimportant — it was a " +
      'genuine, evidence-based model for its time, and the process of testing and refining it is ' +
      "exactly how the more accurate nuclear and Bohr models were later developed.",
    quickReview: [
      "Thomson: 'plum pudding' — electrons embedded in a spread-out positive sphere.",
      "Rutherford: tiny, dense, positive nucleus, mostly empty space — from alpha-scattering evidence.",
      "Bohr: electrons orbit only at specific, quantized energy levels.",
    ],
  },

  'atomic-structure-a-level': {
    slug: 'atomic-structure-a-level',
    title: 'Atomic Structure',
    difficulty: 'easy',
    simpleExplanation:
      'An atom is made of a central nucleus (containing protons and neutrons) surrounded by ' +
      'electrons. The atomic number (Z) is the number of protons — it uniquely identifies which ' +
      'element an atom is. The mass number (A) is the total number of protons AND neutrons. Isotopes ' +
      'are atoms of the same element (same Z, same number of protons) but with a different number of ' +
      'neutrons (and therefore a different mass number, A).',
    whyItMatters:
      "Knowing an atom's structure — and especially the idea of isotopes — is essential for " +
      'understanding radioactivity, nuclear energy, and how elements are identified and distinguished from one another.',
    workedExample: {
      id: 'atomic-structure-worked-1',
      title: 'Find the number of protons, neutrons, and electrons in an atom',
      problemStatement: 'An atom has an atomic number of 17 and a mass number of 35. Find its number of protons, neutrons, and electrons (assuming a neutral atom).',
      steps: [
        { step: 1, instruction: 'Find the number of protons.', math: 'protons = Z = 17', explanation: 'The atomic number Z is always equal to the number of protons.' },
        { step: 2, instruction: 'Find the number of neutrons.', math: 'neutrons = A − Z = 35 − 17 = 18', explanation: 'The mass number A is protons plus neutrons, so subtracting Z gives the number of neutrons.' },
        { step: 3, instruction: 'Find the number of electrons.', math: 'electrons = 17', explanation: 'A neutral atom has equal numbers of protons and electrons.' },
      ],
      finalAnswer: '17 protons, 18 neutrons, 17 electrons (this matches chlorine-35).',
    },
    whyItWorks:
      'Since the mass number A is defined as the TOTAL of protons and neutrons together, subtracting ' +
      'the number of protons (Z) directly isolates the number of neutrons — this simple subtraction ' +
      'works for any atom, given its atomic and mass numbers.',
    realLifeExample: {
      title: 'Carbon-12 vs. carbon-14',
      scenario: 'Carbon-12 (used to define the atomic mass unit) and carbon-14 (used in radiocarbon dating) are both forms of carbon.',
      explanation: 'Both have exactly 6 protons (making them both carbon), but carbon-14 has 2 extra neutrons compared to carbon-12 — making them isotopes of the same element with different masses and different (in this case, radioactive) properties.',
    },
    practiceQuestions: [
      {
        id: 'atomic-structure-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'An atom has an atomic number of 11 and a mass number of 23. Find its number of neutrons.',
        hints: ['neutrons = A − Z.', '23 − 11.'],
        correctAnswer: 12,
        explanation: 'neutrons = 23 − 11 = 12 (this matches sodium-23).',
      },
      {
        id: 'atomic-structure-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Two atoms of the same element have different mass numbers. What must be true about them?',
        hints: ['Same element means the same atomic number (Z).'],
        options: [
          { id: 'a', text: 'They have a different number of protons' },
          { id: 'b', text: 'They have a different number of neutrons — they are isotopes' },
          { id: 'c', text: 'They cannot be the same element at all' },
          { id: 'd', text: 'They must have a different number of electrons only' },
        ],
        correctOptionId: 'b',
        explanation: 'Since they are the same element, they must have the same atomic number (protons); a different mass number means a different number of neutrons — they are isotopes.',
      },
    ],
    commonMistake:
      'Confusing atomic number (Z, number of protons) with mass number (A, protons + neutrons) — Z ' +
      'identifies the element, while A varies between isotopes of the same element.',
    quickReview: [
      'Atomic number Z = number of protons (identifies the element).',
      'Mass number A = protons + neutrons.',
      'Isotopes: same Z (same element), different number of neutrons (different A).',
    ],
  },

  'structure-evolution-universe-a-level': {
    slug: 'structure-evolution-universe-a-level',
    title: 'The Structure and Evolution of the Visible Universe',
    difficulty: 'medium',
    simpleExplanation:
      'The visible universe is organized in a vast hierarchy: planets orbit stars, stars are grouped ' +
      'into galaxies (like our own Milky Way, containing hundreds of billions of stars), and ' +
      'galaxies themselves are grouped into galaxy clusters spread throughout the universe. The Big ' +
      'Bang theory describes how the universe began roughly 13.8 billion years ago as an extremely ' +
      'hot, dense state, and has been continuously expanding and cooling ever since.',
    whyItMatters:
      'Understanding the vast scale and history of the universe puts Earth\'s own place in context — ' +
      'and the evidence for the Big Bang (like the observed expansion of the universe) connects ' +
      'directly back to fundamental physics studied on Earth.',
    workedExample: {
      id: 'universe-worked-1',
      title: 'Interpret evidence for an expanding universe',
      problemStatement: 'Astronomers observe that light from almost every distant galaxy is redshifted (stretched to longer wavelengths), and that more distant galaxies show a greater redshift. Explain what this evidence suggests about the universe.',
      steps: [
        { step: 1, instruction: 'Recall what a redshift indicates about relative motion.', explanation: 'A redshift in light (a stretching to longer wavelengths) indicates that the source is moving AWAY from the observer.' },
        { step: 2, instruction: 'Consider that almost every distant galaxy shows this same redshift.', explanation: 'If nearly every galaxy is moving away from us, this suggests the universe as a whole is expanding, not that we are at some special unmoving center.' },
        { step: 3, instruction: 'Consider the relationship between distance and redshift.', explanation: 'More distant galaxies showing a greater redshift (moving away faster) is exactly what a uniformly expanding universe would produce.' },
      ],
      finalAnswer: 'This redshift pattern is strong evidence that the universe is expanding, supporting the Big Bang theory.',
    },
    whyItWorks:
      "This evidence works because it matches a very specific prediction — a uniformly expanding " +
      "universe should show EVERY sufficiently distant galaxy receding, with recession speed " +
      "increasing with distance, exactly the pattern astronomers actually observe (known as Hubble's Law).",
    realLifeExample: {
      title: 'The cosmic microwave background',
      scenario: 'A faint, uniform glow of microwave radiation can be detected coming from every direction in the sky.',
      explanation: 'This "cosmic microwave background" is the leftover, cooled afterglow of the hot early universe predicted by the Big Bang theory — its discovery in 1965 was powerful direct evidence supporting the theory.',
    },
    practiceQuestions: [
      {
        id: 'universe-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What does it mean when light from a distant galaxy is observed to be "redshifted"?',
        hints: ['Think about what redshift indicates about the motion of the source.'],
        options: [
          { id: 'a', text: 'The galaxy is moving away from us' },
          { id: 'b', text: 'The galaxy is moving toward us' },
          { id: 'c', text: 'The galaxy is not moving at all' },
          { id: 'd', text: 'The galaxy has stopped emitting light' },
        ],
        correctOptionId: 'a',
        explanation: 'A redshift (light stretched to longer wavelengths) indicates the light source is moving away from the observer.',
      },
      {
        id: 'universe-pq-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these correctly orders the structures from smallest to largest?',
        hints: ['Think about which structures contain which.'],
        options: [
          { id: 'a', text: 'Planet → star system → galaxy → galaxy cluster' },
          { id: 'b', text: 'Galaxy → star system → planet → galaxy cluster' },
          { id: 'c', text: 'Galaxy cluster → galaxy → planet → star system' },
          { id: 'd', text: 'Star system → galaxy cluster → planet → galaxy' },
        ],
        correctOptionId: 'a',
        explanation: 'The correct hierarchy, from smallest to largest, is: planet, star system, galaxy, galaxy cluster.',
      },
    ],
    commonMistake:
      'Thinking the Big Bang was an explosion happening at one location IN space — it was actually ' +
      'the expansion OF space itself, everywhere at once, not a conventional explosion spreading out ' +
      'from a single central point.',
    quickReview: [
      'Hierarchy: planets → stars/star systems → galaxies → galaxy clusters.',
      'The Big Bang theory: the universe began hot and dense ~13.8 billion years ago and has been expanding since.',
      'Evidence: redshift of distant galaxies, and the cosmic microwave background.',
    ],
  },
};
