import type { Concept } from '@/types/content';

export const chapter6TransitionConcepts: Record<string, Concept> = {
  'electron-configuration-of-3d-transition-elements': {
    slug: 'electron-configuration-of-3d-transition-elements',
    title: 'Electron Configuration of the 3d Series',
    difficulty: 'medium',
    simpleExplanation:
      'The 3d series (scandium to zinc) fills its 3d subshell after the 4s subshell — but because ' +
      'the two subshells are so close in energy, a few elements (notably chromium and copper) have ' +
      "irregular configurations that don't follow the simple filling pattern.",
    whyItMatters:
      "The exact electron configuration — and especially how easily 4s and 3d electrons are lost — " +
      "explains almost everything distinctive about transition metals: their variable oxidation " +
      "states, their coloured compounds, and their catalytic behaviour.",
    whyItWorks:
      'The 4s and 3d subshells are unusually close in energy, so the normal "fill lowest energy first" ' +
      'rule (4s before 3d) sometimes gets disrupted by the extra stability of a half-filled or ' +
      'completely filled 3d subshell — this is exactly why chromium adopts [Ar]3d⁵4s¹ (a half-full 3d) ' +
      'instead of the "expected" [Ar]3d⁴4s², and copper adopts [Ar]3d¹⁰4s¹ (a full 3d) instead of ' +
      '[Ar]3d⁹4s².',
    realLifeExample: {
      title: "Iron's electron configuration and rust",
      scenario: 'Iron commonly forms both Fe²⁺ and Fe³⁺ compounds — for example, in the two different iron oxides that make up rust.',
      explanation: 'Iron\'s configuration, [Ar]3d⁶4s², loses its two 4s electrons easily to form Fe²⁺, and can lose one additional 3d electron to form the also-stable Fe³⁺ — this flexibility in how many electrons are lost is a direct consequence of its electron configuration.',
    },
    practiceQuestions: [
      {
        id: 'electron-config-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is unusual about the electron configuration of chromium (Cr, atomic number 24)?',
        options: [
          { id: 'a', text: 'It has [Ar]3d⁵4s¹ instead of the "expected" [Ar]3d⁴4s², because a half-filled 3d subshell is extra stable.' },
          { id: 'b', text: 'It has no 4s electrons at all.' },
          { id: 'c', text: 'It does not follow the Aufbau principle in any way.' },
          { id: 'd', text: 'Its 3d subshell is completely empty.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about which 3d electron count is unusually stable — a half-filled or fully-filled subshell."],
        explanation: 'Chromium adopts [Ar]3d⁵4s¹ rather than [Ar]3d⁴4s² because a half-filled 3d subshell (with one electron in each of the five 3d orbitals) is unusually stable.',
      },
    ],
    commonMistake:
      "Assuming EVERY transition element follows the simple 'fill 4s then 3d' pattern without " +
      "exception — chromium and copper are well-known, important exceptions caused by the extra " +
      "stability of half-filled and fully-filled 3d subshells.",
    quickReview: [
      'The 3d series fills the 3d subshell after 4s, with some irregularities.',
      'Cr: [Ar]3d⁵4s¹ and Cu: [Ar]3d¹⁰4s¹ are the classic exceptions.',
      'Electron configuration explains transition metals\' variable oxidation states and other properties.',
    ],
  },

  'what-makes-an-element-a-transition-element': {
    slug: 'what-makes-an-element-a-transition-element',
    title: 'What Makes an Element a Transition Element',
    difficulty: 'easy',
    simpleExplanation:
      'A transition element is defined as one that forms at least one stable ion with a partially ' +
      'filled d subshell — this is why scandium and zinc are sometimes excluded from the strictest ' +
      'definition, since Sc³⁺ has an empty 3d subshell and Zn²⁺ has a completely full one.',
    whyItMatters:
      "This precise definition (not just 'a metal in the middle of the periodic table') explains why " +
      "transition elements share such a distinctive set of properties — those properties all trace " +
      "back to having partially filled d orbitals available for bonding and electron transitions.",
    whyItWorks:
      'A partially filled d subshell gives these elements access to more possible oxidation states ' +
      '(since d electrons, not just s electrons, can be lost or involved in bonding), and allows ' +
      'electrons to jump between different d orbitals by absorbing specific wavelengths of visible ' +
      'light, which is the root cause of transition metal compounds being coloured.',
    realLifeExample: {
      title: 'Why zinc is often treated separately from other transition metals',
      scenario: 'Zinc compounds are almost always colourless and zinc only ever forms Zn²⁺, unlike most transition metals.',
      explanation: "Zinc's electron configuration is [Ar]3d¹⁰4s², and its only common ion, Zn²⁺, has a completely FULL 3d¹⁰ subshell (no partially-filled d orbitals) — this is exactly why zinc lacks the variable oxidation states and colour typical of true transition elements.",
    },
    practiceQuestions: [
      {
        id: 'transition-element-def-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why is zinc often excluded from the strict definition of a "transition element"?',
        options: [
          { id: 'a', text: 'Zinc is not a metal.' },
          { id: 'b', text: "Zinc's only common ion, Zn²⁺, has a completely FULL 3d subshell, not a partially filled one." },
          { id: 'c', text: 'Zinc does not appear in the periodic table.' },
          { id: 'd', text: 'Zinc has no electrons at all.' },
        ],
        correctOptionId: 'b',
        hints: ["The strict definition requires a PARTIALLY filled d subshell in at least one stable ion."],
        explanation: 'Zn²⁺ has the configuration [Ar]3d¹⁰ — a completely filled 3d subshell — so zinc fails the strict definition of a transition element requiring a partially filled d subshell.',
      },
    ],
    commonMistake:
      "Defining a transition element as simply 'any metal in the middle block of the periodic table' " +
      "— the precise chemical definition specifically requires a partially filled d subshell in at " +
      "least one stable ion, which is why scandium and zinc are borderline cases.",
    quickReview: [
      'A transition element forms at least one ion with a partially filled d subshell.',
      'Sc³⁺ (empty 3d) and Zn²⁺ (full 3d) are borderline exceptions.',
      'Partially filled d orbitals are the root cause of transition metals\' distinctive properties.',
    ],
  },

  'variable-oxidation-states': {
    slug: 'variable-oxidation-states',
    title: 'Variable Oxidation States',
    difficulty: 'medium',
    simpleExplanation:
      'Unlike most main-group metals, transition elements commonly form compounds in several different ' +
      'oxidation states, because both their 4s electrons AND some of their 3d electrons are close ' +
      'enough in energy to be lost or involved in bonding.',
    whyItMatters:
      "This variability underlies an enormous range of transition-metal chemistry — the same element " +
      "can form differently-coloured, differently-reactive compounds depending on its oxidation state, " +
      "which is exploited constantly in catalysis, dyes, and analytical chemistry.",
    workedExample: {
      id: 'oxidation-state-worked-1',
      title: 'Determine the oxidation state of manganese in KMnO₄',
      problemStatement: 'Find the oxidation state of manganese in potassium permanganate, KMnO₄.',
      steps: [
        { step: 1, instruction: 'Assign known oxidation states.', math: 'K = +1,  O = −2 (×4 oxygens)', explanation: 'Potassium is always +1 in compounds; oxygen is almost always −2.' },
        { step: 2, instruction: 'Set up the balance equation (sum = 0 for a neutral compound).', math: '(+1) + Mn + 4(−2) = 0', explanation: 'The oxidation states of all atoms in a neutral compound must sum to zero.' },
        { step: 3, instruction: 'Solve for Mn.', math: '1 + Mn − 8 = 0  →  Mn = +7', explanation: 'Rearranging: Mn = 8 − 1 = 7.' },
      ],
      finalAnswer: 'Manganese has an oxidation state of +7 in KMnO₄.',
    },
    whyItWorks:
      "Because 3d electrons are only slightly higher in energy than 4s electrons, once the 4s " +
      "electrons are removed, additional 3d electrons can also be removed with a further, still " +
      "manageable amount of energy — this is why iron can lose 2 electrons (Fe²⁺) or 3 (Fe³⁺), and " +
      "manganese can be found in oxidation states from +2 all the way to +7.",
    realLifeExample: {
      title: "Manganese's many oxidation states in everyday chemistry",
      scenario: 'Manganese compounds range from pale pink Mn²⁺ to deep purple MnO₄⁻ (permanganate, oxidation state +7).',
      explanation: 'Potassium permanganate (KMnO₄) is a common laboratory oxidising agent specifically because manganese in the +7 state is eager to be reduced to more stable, lower oxidation states like +2 — this reactivity comes directly from manganese\'s ability to access a wide range of oxidation states.',
    },
    practiceQuestions: [
      {
        id: 'oxidation-state-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the oxidation state of chromium in K₂Cr₂O₇ (potassium dichromate). (K = +1, O = −2)',
        hints: ['2(+1) + 2×Cr + 7(−2) = 0.', '2 + 2Cr − 14 = 0.'],
        correctAnswer: 6,
        explanation: '2(+1) + 2Cr + 7(−2) = 0 → 2 + 2Cr − 14 = 0 → 2Cr = 12 → Cr = +6.',
      },
    ],
    commonMistake:
      "Assuming oxygen is ALWAYS −2 in every compound without exception — this is a reliable rule for " +
      "the vast majority of compounds, but it breaks down in special cases like peroxides (where " +
      "oxygen is −1); always double-check the compound type before applying the rule automatically.",
    quickReview: [
      'Transition elements commonly show multiple oxidation states.',
      'Both 4s and some 3d electrons are accessible for bonding/loss.',
      'Oxidation states can be calculated by balancing a compound\'s total charge to zero (or its ion charge).',
    ],
  },

  'coloured-compounds-and-catalytic-activity': {
    slug: 'coloured-compounds-and-catalytic-activity',
    title: 'Coloured Compounds and Catalytic Activity',
    difficulty: 'medium',
    simpleExplanation:
      'Transition metal compounds are often vividly coloured because electrons can jump between ' +
      'different d orbitals by absorbing specific wavelengths of visible light — the colour seen is ' +
      'the light that was NOT absorbed. Transition metals are also excellent catalysts because their ' +
      'variable oxidation states let them temporarily accept and donate electrons during a reaction.',
    whyItMatters:
      "These two properties — colour and catalytic activity — are the most immediately recognizable, " +
      "practically important features of transition metals, used everywhere from dyes and gemstones " +
      "to industrial catalytic processes.",
    whyItWorks:
      "In a transition metal ion surrounded by other molecules or ions (ligands), the five d orbitals " +
      "split into two slightly different energy levels — an electron can absorb a photon of visible " +
      "light with exactly the right energy to jump from the lower to the higher level, and the " +
      "colour we see is the complementary colour of whatever wavelength was absorbed. For catalysis, a " +
      "transition metal's ability to easily switch between oxidation states (say, Fe²⁺ and Fe³⁺) lets " +
      "it temporarily accept an electron from one reactant and pass it to another, providing an " +
      "alternative, lower-activation-energy reaction pathway.",
    realLifeExample: {
      title: 'Copper sulfate and the catalytic converter',
      scenario: 'Copper sulfate solution is a distinctive blue, and platinum/palladium in catalytic converters speed up exhaust reactions.',
      explanation: 'Cu²⁺ ions in solution absorb light in the red-orange part of the spectrum, so the solution appears blue (the complementary colour); platinum and palladium catalyse exhaust gas reactions by cycling through different surface oxidation states, providing a faster pathway than the uncatalyzed reaction.',
    },
    practiceQuestions: [
      {
        id: 'colour-catalyst-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do many transition metal compounds appear coloured?',
        options: [
          { id: 'a', text: 'They contain carbon, like all coloured substances.' },
          { id: 'b', text: 'Electrons absorb specific wavelengths of visible light to jump between split d orbital energy levels; the unabsorbed light is what we see.' },
          { id: 'c', text: 'They are radioactive.' },
          { id: 'd', text: 'Transition metals reflect all colours of light equally.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what "the colour we see" actually represents — absorbed or reflected/transmitted light?'],
        explanation: 'The observed colour is the light that passes through or reflects off the compound — the complementary colour to whatever specific wavelength was absorbed to excite a d electron.',
      },
    ],
    commonMistake:
      "Assuming all transition metal ions are coloured — ions with either an empty (like Sc³⁺) or " +
      "completely full (like Zn²⁺) d subshell have no d-to-d electron transitions available, and are " +
      "typically colourless, exactly as predicted by this explanation.",
    quickReview: [
      'Colour comes from electrons absorbing light to jump between split d orbital energy levels.',
      'Ions with empty or full d subshells (Sc³⁺, Zn²⁺) are typically colourless.',
      'Variable oxidation states let transition metals act as effective catalysts.',
    ],
  },

  'uses-of-transition-elements': {
    slug: 'uses-of-transition-elements',
    title: 'Uses of Transition Elements',
    difficulty: 'easy',
    simpleExplanation:
      'Transition elements and their compounds are used constantly in everyday life and industry: iron ' +
      'and its alloys (steel) in construction, copper in electrical wiring, titanium in aerospace and ' +
      'medical implants, and platinum/palladium/nickel as industrial and automotive catalysts.',
    whyItMatters:
      "Connecting the abstract properties of transition metals — strength, conductivity, catalytic " +
      "ability, resistance to corrosion — to their real, everyday uses shows why this whole topic " +
      "matters practically, not just as chemistry theory.",
    whyItWorks:
      "Each use directly exploits a specific property covered in this chapter: iron's strength (as " +
      "steel) supports buildings and bridges; copper's delocalized electrons (from metallic bonding) " +
      "make it an excellent electrical conductor; titanium's strength-to-weight ratio and resistance " +
      "to corrosion suit it to aircraft and implants; and platinum/palladium's catalytic ability " +
      "(from accessible oxidation states) speeds up exhaust-gas reactions in catalytic converters.",
    realLifeExample: {
      title: 'Titanium in hip replacements',
      scenario: 'Titanium is commonly used for artificial hip and joint replacements.',
      explanation: "Titanium is strong, lightweight, and — crucially — forms a thin, extremely stable, unreactive oxide layer on its surface that resists corrosion inside the body and is well tolerated by living tissue, making it ideal for long-term medical implants.",
    },
    practiceQuestions: [
      {
        id: 'transition-uses-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why is copper, rather than a cheaper metal, specifically chosen for most electrical wiring?',
        options: [
          { id: 'a', text: 'Copper is magnetic.' },
          { id: 'b', text: "Copper's delocalized valence electrons (from metallic bonding) make it an excellent electrical conductor." },
          { id: 'c', text: 'Copper is radioactive.' },
          { id: 'd', text: 'Copper does not conduct electricity, which makes it safe.' },
        ],
        correctOptionId: 'b',
        hints: ["Recall what property of metallic bonding lets electric current flow through a metal."],
        explanation: "Copper's freely-moving, delocalized valence electrons (a feature of metallic bonding) make it an excellent conductor of electricity, which is exactly why it's the standard choice for wiring.",
      },
    ],
    commonMistake:
      "Thinking of a transition metal's uses as unrelated facts to memorize separately from its " +
      "chemistry — every practical use traces directly back to a specific chemical or physical " +
      "property (conductivity, catalytic ability, corrosion resistance) already covered earlier in " +
      "the chapter.",
    quickReview: [
      'Iron/steel: strength, used in construction.',
      'Copper: electrical conductivity, used in wiring.',
      'Titanium: strength + corrosion resistance, used in aerospace/implants.',
      'Platinum/palladium: catalytic activity, used in catalytic converters.',
    ],
  },
};
