import type { Concept } from '@/types/content';

export const chapter12ModernConcepts: Record<string, Concept> = {
  'cathode-rays': {
    slug: 'cathode-rays',
    title: 'Cathode Rays',
    difficulty: 'medium',
    simpleExplanation:
      "Cathode rays are streams of electrons emitted from the negative electrode (cathode) inside an " +
      "evacuated glass tube when a high voltage is applied. Their study — including J.J. Thomson's " +
      "famous experiments — led directly to the discovery of the electron itself.",
    whyItMatters:
      "Cathode ray experiments were historically crucial for discovering that atoms contain smaller, " +
      "negatively charged particles (electrons), overturning the earlier idea that atoms were indivisible.",
    whyItWorks:
      "Cathode rays are deflected by both electric and magnetic fields in ways consistent with a stream " +
      "of negatively charged particles — by carefully measuring this deflection, Thomson was able to " +
      "determine the charge-to-mass ratio of these particles, providing strong evidence that they were a " +
      "new, fundamental type of particle (the electron), far lighter than any known atom.",
    realLifeExample: {
      title: 'Old cathode ray tube televisions',
      scenario: 'Older television and computer monitors used cathode ray tubes (CRTs) to produce images.',
      explanation: "These displays worked by firing a controlled beam of cathode rays (electrons) at a phosphor-coated screen, where the impact produced visible light — a direct practical application of cathode ray technology.",
    },
    practiceQuestions: [
      {
        id: 'cathode-rays-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What are cathode rays actually made of?',
        options: [
          { id: 'a', text: 'A stream of electrons' },
          { id: 'b', text: 'A stream of photons only' },
          { id: 'c', text: 'A stream of protons' },
          { id: 'd', text: 'Sound waves' },
        ],
        correctOptionId: 'a',
        hints: ['Their discovery led directly to the discovery of a specific subatomic particle.'],
        explanation: 'Cathode rays are streams of electrons, emitted from the cathode inside an evacuated tube.',
      },
    ],
    commonMistake:
      "Confusing cathode rays with X-rays — cathode rays are streams of electrons; X-rays (covered next) " +
      "are a form of high-energy electromagnetic radiation, produced when cathode rays (electrons) " +
      "collide with a target material.",
    quickReview: [
      'Cathode rays are streams of electrons emitted from a cathode in an evacuated tube.',
      "Their study led to the discovery of the electron (Thomson's experiments).",
      'CRT televisions used controlled cathode ray beams to produce images.',
    ],
  },

  'x-rays': {
    slug: 'x-rays',
    title: 'X-Rays',
    difficulty: 'medium',
    simpleExplanation:
      "X-rays are a high-energy, high-frequency form of electromagnetic radiation, produced when " +
      "fast-moving electrons (like cathode rays) are suddenly decelerated upon striking a solid target " +
      "(usually a metal). Their high energy lets them penetrate many materials that visible light cannot.",
    whyItMatters:
      "X-rays have transformed medicine (medical imaging) and materials science (studying crystal " +
      "structures) — their unique ability to penetrate soft tissue while being absorbed by denser " +
      "material (like bone) is the basis of medical X-ray imaging.",
    whyItWorks:
      "When a fast electron suddenly decelerates upon hitting a target, its kinetic energy must go " +
      "somewhere — much of it converts into a high-energy photon (X-ray radiation), following conservation " +
      "of energy. Denser materials (like bone) absorb more X-ray photons than less dense materials (like " +
      "soft tissue), which is exactly why X-ray images show bones as distinct, brighter regions against " +
      "darker soft tissue.",
    realLifeExample: {
      title: 'Medical X-ray imaging',
      scenario: 'Doctors use X-ray images to see broken bones inside the body without surgery.',
      explanation: 'Bone absorbs X-rays more strongly than surrounding soft tissue, so less radiation passes through bone to reach the detector on the other side — this difference in absorption produces the distinct light (bone) and dark (soft tissue) contrast seen in an X-ray image.',
    },
    practiceQuestions: [
      {
        id: 'x-rays-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How are X-rays typically produced?',
        options: [
          { id: 'a', text: 'Fast-moving electrons suddenly decelerate upon striking a solid target, converting kinetic energy into high-energy photons.' },
          { id: 'b', text: 'X-rays are produced by sound waves.' },
          { id: 'c', text: 'X-rays require no electrons at all.' },
          { id: 'd', text: 'X-rays are simply visible light passed through a filter.' },
        ],
        correctOptionId: 'a',
        hints: ['Recall the connection between cathode rays and X-rays.'],
        explanation: 'X-rays are produced when fast electrons decelerate sharply upon hitting a target, converting kinetic energy into high-energy photon radiation.',
      },
    ],
    commonMistake:
      "Thinking X-rays are produced from nothing — they specifically require fast-moving electrons " +
      "(cathode rays) striking a target; the X-ray photon energy comes directly from the decelerating " +
      "electron's kinetic energy.",
    quickReview: [
      'X-rays: high-energy electromagnetic radiation from decelerating fast electrons.',
      'Denser materials absorb more X-rays, producing image contrast (e.g. bone vs. soft tissue).',
      'X-rays are widely used in medical imaging and materials science.',
    ],
  },

  'bohrs-hydrogen-atom-and-atomic-spectra': {
    slug: 'bohrs-hydrogen-atom-and-atomic-spectra',
    title: "Bohr's Hydrogen Atom & Atomic Spectra",
    difficulty: 'hard',
    simpleExplanation:
      "Bohr's model of the hydrogen atom proposes that electrons can only orbit the nucleus at specific, " +
      "fixed (quantised) energy levels — not at any arbitrary distance. When an electron jumps between " +
      "levels, it absorbs or emits a photon with an energy exactly equal to the difference between those " +
      "levels, producing the characteristic line spectra observed for hydrogen.",
    whyItMatters:
      "Bohr's model was a landmark step toward modern quantum mechanics, and directly explains why atoms " +
      "emit and absorb light only at specific, discrete wavelengths (their atomic 'fingerprint'), rather " +
      "than a continuous range.",
    formulaSlug: 'bohr-energy-levels-formula',
    workedExample: {
      id: 'bohr-atom-we-1',
      title: 'Finding the energy released in an electron transition',
      problemStatement: 'An electron in a hydrogen atom drops from level n=3 to level n=1. Find the energy of the photon released.',
      steps: [
        { step: 1, instruction: 'Find the energy at each level.', math: 'E₃ = −13.6/3² = −1.51 eV, E₁ = −13.6/1² = −13.6 eV', explanation: 'Apply the formula for n=3 and n=1.' },
        { step: 2, instruction: 'Find the energy difference.', math: 'ΔE = E₃ − E₁ = −1.51 − (−13.6)', explanation: 'The photon energy equals the energy lost by the electron.' },
        { step: 3, instruction: 'Calculate.', math: 'ΔE = 12.09 eV', explanation: 'This is the energy of the emitted photon.' },
      ],
      finalAnswer: 'The emitted photon has an energy of 12.09 eV.',
    },
    whyItWorks:
      "Because only specific, quantised energy levels are allowed, an electron can only jump between " +
      "them by absorbing or emitting a photon with EXACTLY the right energy to match the gap between two " +
      "levels — since these gaps are fixed and specific to hydrogen's structure, only certain specific " +
      "photon energies (and therefore specific wavelengths of light) are ever absorbed or emitted, " +
      "producing hydrogen's characteristic line spectrum rather than a continuous rainbow.",
    realLifeExample: {
      title: "Identifying elements in stars using their spectra",
      scenario: 'Astronomers determine what elements distant stars are made of by analysing the specific wavelengths of light they emit or absorb.',
      explanation: "Since each element has its own unique set of quantised energy levels (and therefore its own unique spectral 'fingerprint' of specific wavelengths), astronomers can identify elements in stars millions of light-years away simply by matching observed spectral lines to those known from laboratory measurements of each element.",
    },
    practiceQuestions: [
      {
        id: 'bohr-atom-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the energy of an electron in the n=2 level of hydrogen using Eₙ = −13.6/n² eV.',
        hints: ['Substitute n=2 directly.'],
        correctAnswer: -3.4,
        tolerance: 0.1,
        unit: 'eV',
        explanation: 'E₂ = −13.6/2² = −13.6/4 = −3.4 eV.',
      },
    ],
    commonMistake:
      "Forgetting the negative sign in the energy formula — energies are conventionally negative because " +
      "they are measured relative to a free (unbound) electron at zero energy; a MORE negative value " +
      "means the electron is more tightly bound (lower energy level, e.g. n=1 is the most tightly bound).",
    quickReview: [
      'Eₙ = −13.6/n² eV gives the energy of each allowed hydrogen electron level.',
      'Electrons emit/absorb photons only when jumping between specific, quantised levels.',
      'This produces atomic line spectra — each element has a unique spectral fingerprint.',
    ],
  },

  'photoelectric-effect-and-photon-concept': {
    slug: 'photoelectric-effect-and-photon-concept',
    title: 'Photoelectric Effect & Photon Concept',
    difficulty: 'hard',
    simpleExplanation:
      "The photoelectric effect is the emission of electrons from a metal surface when light shines on " +
      "it. Einstein explained this by proposing that light itself consists of discrete energy packets " +
      "called photons — each photon transfers all its energy (hf) to a single electron, which is ejected " +
      "if that energy exceeds the metal's work function (the minimum energy needed to free an electron).",
    whyItMatters:
      "The photoelectric effect provided crucial evidence for light's particle nature (photons), directly " +
      "contradicting purely wave-based explanations of light and helping to establish quantum theory — " +
      "Einstein won the Nobel Prize specifically for this explanation.",
    formulaSlug: 'photoelectric-equation-formula',
    workedExample: {
      id: 'photoelectric-we-1',
      title: 'Finding maximum kinetic energy of ejected electrons',
      problemStatement: 'Light of frequency 8 × 10¹⁴ Hz strikes a metal with a work function of 2.0 eV. Find the maximum kinetic energy of ejected electrons (h = 6.63 × 10⁻³⁴ J·s; 1 eV = 1.6 × 10⁻¹⁹ J).',
      steps: [
        { step: 1, instruction: 'Find the photon energy hf, in joules.', math: 'hf = 6.63×10⁻³⁴ × 8×10¹⁴ = 5.304×10⁻¹⁹ J', explanation: 'Multiply Planck\'s constant by frequency.' },
        { step: 2, instruction: 'Convert the work function to joules.', math: 'φ = 2.0 × 1.6×10⁻¹⁹ = 3.2×10⁻¹⁹ J', explanation: 'Convert 2.0 eV to joules.' },
        { step: 3, instruction: 'Apply the photoelectric equation.', math: 'KEmax = hf − φ = 5.304×10⁻¹⁹ − 3.2×10⁻¹⁹', explanation: 'Subtract the work function from the photon energy.' },
        { step: 4, instruction: 'Calculate.', math: 'KEmax ≈ 2.1×10⁻¹⁹ J', explanation: 'This is the maximum kinetic energy of an ejected electron.' },
      ],
      finalAnswer: 'Maximum kinetic energy ≈ 2.1 × 10⁻¹⁹ J.',
    },
    whyItWorks:
      "If light were purely a continuous wave, dim light of any frequency should eventually eject " +
      "electrons given enough time to accumulate energy — but experiments showed no electrons are ejected " +
      "AT ALL below a certain minimum (threshold) frequency, no matter how bright the light. This only " +
      "makes sense if light energy arrives in discrete packets (photons), each needing to individually " +
      "exceed the work function to eject a single electron — brightness (more photons) increases the " +
      "NUMBER of ejected electrons, not each individual electron's energy.",
    realLifeExample: {
      title: 'Solar panels',
      scenario: 'Solar panels convert sunlight directly into electrical current.',
      explanation: 'Solar cells work on a closely related principle: photons from sunlight strike the semiconductor material and eject electrons (or promote them to a conducting state), generating an electric current — a direct technological application of the photon concept established by the photoelectric effect.',
    },
    practiceQuestions: [
      {
        id: 'photoelectric-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Why does increasing the BRIGHTNESS (intensity) of light above the threshold frequency increase the NUMBER of ejected electrons, but not their maximum individual kinetic energy?',
        options: [
          { id: 'a', text: 'More intense light means more photons arriving, ejecting more electrons — but each photon still transfers the same fixed energy (hf) per electron.' },
          { id: 'b', text: 'Brightness has no relationship to the photoelectric effect at all.' },
          { id: 'c', text: 'Increasing brightness always increases each electron\'s kinetic energy.' },
          { id: 'd', text: 'Only frequency affects the number of electrons ejected, not brightness.' },
        ],
        correctOptionId: 'a',
        hints: ['Each photon interacts with only one electron, transferring a fixed amount of energy (hf).'],
        explanation: 'Since each photon transfers a fixed energy hf to one electron, more photons (higher intensity) means more ejected electrons, but each individual electron\'s maximum kinetic energy still depends only on hf − φ, unaffected by intensity.',
      },
    ],
    commonMistake:
      "Assuming brighter light always means more energetic ejected electrons — maximum kinetic energy " +
      "depends only on the light's FREQUENCY (via hf), not its intensity; intensity only affects how many " +
      "electrons are ejected.",
    quickReview: [
      'KEmax = hf − φ: Einstein\'s photoelectric equation.',
      "Light behaves as discrete photons, each with energy hf, supporting light's particle nature.",
      'Below the threshold frequency, no electrons are ejected regardless of intensity.',
    ],
  },

  'isotopes-b-level': {
    slug: 'isotopes-b-level',
    title: 'Isotopes',
    difficulty: 'easy',
    simpleExplanation:
      "Isotopes are atoms of the same element (same number of protons, and therefore the same chemical " +
      "properties) that have different numbers of neutrons — and therefore different atomic masses. Some " +
      "isotopes are stable; others are radioactive (unstable) and decay over time.",
    whyItMatters:
      "Isotopes have important applications in medicine (radioactive tracers and treatments), archaeology " +
      "and geology (radiometric dating), and energy production (nuclear power), among many other fields.",
    whyItWorks:
      "Since chemical behaviour is determined almost entirely by the number of protons (and therefore " +
      "electrons) an atom has, isotopes of the same element behave nearly identically in chemical " +
      "reactions — but the different number of neutrons changes the nucleus's mass and, for some " +
      "combinations, its stability, which is why some isotopes are radioactive while others (with a more " +
      "stable proton-to-neutron ratio) are not.",
    realLifeExample: {
      title: 'Carbon dating',
      scenario: 'Archaeologists estimate the age of ancient organic remains using carbon dating.',
      explanation: 'Carbon-14, a radioactive isotope of carbon, decays at a known, constant rate — by measuring how much carbon-14 remains in a sample compared to the stable isotope carbon-12, scientists can estimate how long ago the organism died.',
    },
    practiceQuestions: [
      {
        id: 'isotopes-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What distinguishes different isotopes of the same element?',
        options: [
          { id: 'a', text: 'They have the same number of protons but different numbers of neutrons.' },
          { id: 'b', text: 'They have different numbers of protons.' },
          { id: 'c', text: 'They have completely different chemical properties.' },
          { id: 'd', text: 'Isotopes are entirely different elements.' },
        ],
        correctOptionId: 'a',
        hints: ['Isotopes remain the SAME element — what stays constant defines an element?'],
        explanation: 'Isotopes share the same number of protons (defining the element) but differ in their number of neutrons.',
      },
    ],
    commonMistake:
      "Thinking isotopes of an element behave very differently chemically — since chemical behaviour " +
      "depends almost entirely on proton/electron number (which is identical across isotopes of the same " +
      "element), isotopes behave nearly identically in chemical reactions; only their nuclear properties " +
      "(mass, stability, radioactivity) differ.",
    quickReview: [
      'Isotopes: same element (same protons), different numbers of neutrons.',
      'Isotopes have nearly identical chemical behaviour but can differ in nuclear stability.',
      'Applications: radiometric dating, medical tracers, nuclear energy.',
    ],
  },

  'redshift-hubbles-law-and-age-of-universe': {
    slug: 'redshift-hubbles-law-and-age-of-universe',
    title: "Red Shift, Hubble's Law & Age of Universe",
    difficulty: 'medium',
    simpleExplanation:
      "Redshift is the stretching of light's wavelength (shifting toward the red end of the spectrum) " +
      "observed when a light source moves away from an observer. Hubble discovered that almost all " +
      "distant galaxies show redshift, and that this redshift (and therefore recession speed) increases " +
      "with distance — direct evidence that the universe itself is expanding.",
    whyItMatters:
      "Hubble's law provides both strong evidence for the Big Bang theory and a way to estimate the age " +
      "of the universe, connecting observable astronomy directly to fundamental cosmology.",
    formulaSlug: 'hubbles-law-formula',
    workedExample: {
      id: 'hubbles-law-we-1',
      title: "Finding a galaxy's recession speed",
      problemStatement: "A galaxy is measured to be 300 Mpc away. Find its recession speed, using Hubble's constant H₀ ≈ 70 km/s/Mpc.",
      steps: [
        { step: 1, instruction: "Write Hubble's law.", math: 'v = H₀d', explanation: 'H₀ = 70 km/s/Mpc, d = 300 Mpc.' },
        { step: 2, instruction: 'Substitute and calculate.', math: 'v = 70 × 300', explanation: 'Multiply Hubble\'s constant by distance.' },
        { step: 3, instruction: 'Simplify.', math: 'v = 21,000 km/s', explanation: 'This is the estimated recession speed.' },
      ],
      finalAnswer: 'Recession speed ≈ 21,000 km/s.',
    },
    whyItWorks:
      "If the universe's overall space itself is expanding uniformly, then galaxies farther away have " +
      "more expanding space between them and us, causing them to appear to recede faster — this is " +
      "exactly the linear relationship (speed proportional to distance) that Hubble observed and that " +
      "gives strong support to an expanding universe originating from a single point (the Big Bang).",
    realLifeExample: {
      title: 'Estimating the age of the universe',
      scenario: 'Cosmologists estimate the universe is roughly 13.8 billion years old.',
      explanation: "Taking the reciprocal of Hubble's constant (1/H₀, with appropriate unit conversion) gives a rough estimate of the time since the universe began expanding from a single point — a direct, simple application of Hubble's law to one of the biggest questions in cosmology.",
    },
    practiceQuestions: [
      {
        id: 'hubbles-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "A galaxy has a measured recession speed of 4900 km/s. Find its distance, using H₀ ≈ 70 km/s/Mpc.",
        hints: ['v = H₀d, rearranged: d = v/H₀.'],
        correctAnswer: 70,
        tolerance: 2,
        unit: 'Mpc',
        explanation: 'd = 4900/70 = 70 Mpc.',
      },
    ],
    commonMistake:
      "Thinking redshift means galaxies are physically moving THROUGH space like a car driving away — " +
      "cosmological redshift is primarily caused by the expansion of SPACE ITSELF between galaxies, " +
      "stretching the light's wavelength as it travels, not (only) by galaxies moving through a fixed, " +
      "static space.",
    quickReview: [
      "Redshift: light's wavelength stretches when its source recedes.",
      "Hubble's law: v = H₀d — recession speed is proportional to distance.",
      'The reciprocal of H₀ gives a rough estimate of the age of the universe.',
    ],
  },
};
