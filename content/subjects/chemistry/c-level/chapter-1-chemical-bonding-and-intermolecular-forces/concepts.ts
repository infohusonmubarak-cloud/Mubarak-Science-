import type { Concept } from '@/types/content';

export const chapter1BondingConcepts: Record<string, Concept> = {
  'valence-electrons-and-chemical-bonding': {
    slug: 'valence-electrons-and-chemical-bonding',
    title: 'Valence Electrons and Chemical Bonding',
    difficulty: 'easy',
    simpleExplanation:
      'Valence electrons are the electrons in an atom\'s outermost shell — the ones furthest from the ' +
      'nucleus and least tightly held. Chemical bonding is really just atoms gaining, losing, or ' +
      'sharing valence electrons to become more stable.',
    whyItMatters:
      "Almost everything about how an atom bonds — how many bonds it forms, what charge its ion " +
      "carries, whether it forms ionic or covalent bonds — is decided by its valence electrons, not " +
      'by the many inner-shell electrons that never take part in bonding at all.',
    whyItWorks:
      "An atom's chemical behaviour is governed by its outermost electrons because those are the ones " +
      "close enough to another atom's outermost electrons to interact — inner-shell electrons are " +
      "shielded by the valence shell and held far more tightly by the nucleus, so they essentially " +
      "never participate in forming bonds under normal chemical conditions.",
    realLifeExample: {
      title: 'Table salt from sodium and chlorine',
      scenario: 'Sodium metal (1 valence electron) reacts violently with chlorine gas (7 valence electrons) to form table salt.',
      explanation: "Sodium's single, loosely-held valence electron transfers completely to chlorine, which needs just one more electron to fill its outer shell — the result is Na⁺ and Cl⁻ ions bonded together as NaCl.",
    },
    practiceQuestions: [
      {
        id: 'valence-electrons-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'How many valence electrons does an atom of chlorine (group 17) have?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '5' },
          { id: 'c', text: '7' },
          { id: 'd', text: '8' },
        ],
        correctOptionId: 'c',
        hints: ['Group number (for main-group elements) tells you the number of valence electrons.', 'Chlorine is in group 17 — count from group 13 as 3, 14 as 4, ... 17 as 7.'],
        explanation: 'Chlorine is in group 17, so it has 7 valence electrons — one short of a full octet, which is why it so readily gains one more.',
      },
    ],
    commonMistake:
      'Confusing an atom\'s total number of electrons with its number of valence electrons — only the ' +
      'outermost-shell electrons count as valence electrons; a chlorine atom has 17 electrons total ' +
      'but only 7 of them are valence electrons.',
    quickReview: [
      'Valence electrons are the outermost-shell electrons.',
      'They are the electrons involved in forming chemical bonds.',
      'For main-group elements, the group number gives the valence electron count.',
    ],
  },

  'the-octet-rule': {
    slug: 'the-octet-rule',
    title: 'The Octet Rule',
    difficulty: 'easy',
    simpleExplanation:
      'The octet rule says atoms are most stable when they have eight electrons in their outermost ' +
      'shell — the same electron arrangement as a noble gas. Atoms gain, lose, or share electrons ' +
      'through bonding specifically to reach this stable arrangement.',
    whyItMatters:
      'The octet rule is the single biggest predictive tool in this chapter: it explains why sodium ' +
      'forms Na⁺ (losing 1 electron) rather than Na²⁺ or Na⁻, why oxygen forms two bonds, and why the ' +
      'noble gases are so chemically unreactive in the first place.',
    whyItWorks:
      'A full outer shell of eight electrons (or two, for the very smallest atoms like hydrogen and ' +
      'helium) is an especially low-energy, stable electron arrangement — the same arrangement every ' +
      'noble gas already has naturally, which is exactly why noble gases rarely react with anything.',
    realLifeExample: {
      title: 'Why noble gases like neon do not react',
      scenario: 'Neon signs stay lit for years without the gas inside ever reacting with anything.',
      explanation: 'Neon already has a full octet of 8 valence electrons, so it has no drive to gain, lose, or share electrons — it is already about as stable as an atom can be, which is why noble gases are used whenever an unreactive gas is needed.',
    },
    practiceQuestions: [
      {
        id: 'octet-rule-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'A magnesium atom (2 valence electrons) reacts to satisfy the octet rule. What ion does it form?',
        options: [
          { id: 'a', text: 'Mg⁺' },
          { id: 'b', text: 'Mg²⁺' },
          { id: 'c', text: 'Mg²⁻' },
          { id: 'd', text: 'Mg⁸⁺' },
        ],
        correctOptionId: 'b',
        hints: ['Losing electrons is easier than gaining 6 to reach an octet.', 'Magnesium loses both of its valence electrons.'],
        explanation: 'Losing its 2 valence electrons is far easier than gaining 6, so magnesium forms Mg²⁺, exposing the full-octet shell underneath.',
      },
    ],
    commonMistake:
      "Assuming every single atom must obey the octet rule exactly — hydrogen and helium are stable " +
      "with just 2 electrons (a duet), and some larger atoms (like sulfur or phosphorus) can hold more " +
      'than 8 electrons. The octet rule is a very useful guideline, not an absolute law.',
    quickReview: [
      'Atoms are most stable with 8 valence electrons (an octet), matching a noble gas.',
      'Atoms bond by losing, gaining, or sharing electrons to reach this stable arrangement.',
      'Hydrogen and helium are the main exception, needing only 2 electrons.',
    ],
  },

  'electronegativity-and-bond-type': {
    slug: 'electronegativity-and-bond-type',
    title: 'Electronegativity and Bond Type',
    difficulty: 'medium',
    simpleExplanation:
      'Electronegativity measures how strongly an atom attracts shared electrons in a bond. The ' +
      'difference in electronegativity between two bonded atoms determines what kind of bond forms: ' +
      'a small difference gives a covalent bond with electrons shared fairly evenly; a large ' +
      'difference means one atom pulls the electrons almost completely away, forming an ionic bond.',
    whyItMatters:
      'This single number lets you predict, before even looking anything up, whether two elements ' +
      'will form an ionic compound, a polar covalent bond, or a nonpolar covalent bond.',
    formulaSlug: 'electronegativity-difference-formula',
    workedExample: {
      id: 'electronegativity-worked-1',
      title: 'Predict the bond type between sodium and chlorine',
      problemStatement: 'Sodium has an electronegativity of 0.93; chlorine has an electronegativity of 3.16. Find ΔEN and predict the bond type.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'ΔEN = |EN₁ − EN₂|', explanation: 'Take the absolute value of the difference.' },
        { step: 2, instruction: 'Substitute the values.', math: 'ΔEN = |0.93 − 3.16| = 2.23', explanation: 'EN(Na) = 0.93, EN(Cl) = 3.16.' },
        { step: 3, instruction: 'Compare to the bond-type guide.', math: '2.23 > 1.7', explanation: 'A difference above 1.7 predicts an ionic bond.' },
      ],
      finalAnswer: 'ΔEN = 2.23 → ionic bond (matches NaCl, table salt)',
    },
    whyItWorks:
      "When one atom is much more electronegative than the other, it doesn't just share the bonding " +
      "electrons unevenly — it pulls them almost entirely to itself, effectively transferring the " +
      "electron and creating two ions held together by electrostatic attraction, rather than a shared " +
      "electron cloud.",
    realLifeExample: {
      title: 'Water is polar, oxygen gas is not',
      scenario: 'Water (H–O–H) is a polar molecule, but oxygen gas (O=O) is completely nonpolar.',
      explanation: 'In O=O, both atoms are identical, so ΔEN = 0 and the electrons are shared perfectly evenly. In O–H, oxygen (EN 3.44) is noticeably more electronegative than hydrogen (EN 2.20), giving ΔEN ≈ 1.24 — enough to make each O–H bond polar, which is why water molecules interact so strongly with each other.',
    },
    practiceQuestions: [
      {
        id: 'electronegativity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Carbon has an electronegativity of 2.55; hydrogen has 2.20. Find ΔEN for a C–H bond.',
        hints: ['ΔEN = |EN₁ − EN₂|.', '|2.55 − 2.20|.'],
        correctAnswer: 0.35,
        tolerance: 0.02,
        explanation: 'ΔEN = |2.55 − 2.20| = 0.35 — below 0.4, so C–H bonds are considered essentially nonpolar covalent.',
      },
    ],
    commonMistake:
      "Treating the 0.4/1.7 cutoffs as sharp, exact boundaries — real bonding exists on a continuous " +
      "spectrum from purely covalent to purely ionic, and these numbers are just useful guidelines, " +
      "not hard physical laws.",
    quickReview: [
      'ΔEN = |EN₁ − EN₂| predicts bond type.',
      'ΔEN < 0.4: nonpolar covalent. 0.4–1.7: polar covalent. ΔEN > 1.7: ionic.',
      'Bigger electronegativity differences mean more one-sided electron sharing.',
    ],
  },

  'formation-of-ionic-bonds': {
    slug: 'formation-of-ionic-bonds',
    title: 'Formation of Ionic Bonds',
    difficulty: 'medium',
    simpleExplanation:
      'An ionic bond forms when one atom transfers one or more electrons completely to another atom, ' +
      'creating a positive ion (cation) and a negative ion (anion) — the bond is the strong ' +
      'electrostatic attraction between these oppositely charged ions.',
    whyItMatters:
      'Ionic bonding explains the existence of an enormous class of everyday compounds — salts — and ' +
      'why they behave so differently from covalent substances: as rigid, ordered crystal lattices of ' +
      'ions rather than individual molecules.',
    whyItWorks:
      "A metal atom (typically with 1–3 valence electrons) loses electrons easily to reach a stable " +
      "octet, while a nonmetal atom (typically with 5–7 valence electrons) readily gains electrons " +
      "for the same reason. When a low-electronegativity metal meets a high-electronegativity " +
      "nonmetal, the electron transfer that satisfies both atoms' octets happens essentially " +
      "completely, generating full ionic charges.",
    realLifeExample: {
      title: 'Magnesium oxide in fireworks and flares',
      scenario: 'Magnesium burns in oxygen with a brilliant white light, forming magnesium oxide (MgO).',
      explanation: 'Each magnesium atom transfers its 2 valence electrons to an oxygen atom, forming Mg²⁺ and O²⁻ ions — the strong electrostatic attraction between them is exactly why MgO is such a hard, extremely high-melting-point solid.',
    },
    practiceQuestions: [
      {
        id: 'ionic-formation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Aluminium (group 13) reacts with oxygen (group 16) to form an ionic compound. What ions form?',
        options: [
          { id: 'a', text: 'Al⁺ and O⁻' },
          { id: 'b', text: 'Al³⁺ and O²⁻' },
          { id: 'c', text: 'Al²⁺ and O²⁻' },
          { id: 'd', text: 'Al³⁻ and O²⁺' },
        ],
        correctOptionId: 'b',
        hints: ['Aluminium loses all 3 of its valence electrons.', 'Oxygen gains 2 electrons to complete its octet.'],
        explanation: 'Aluminium loses 3 valence electrons to form Al³⁺; oxygen gains 2 to form O²⁻ — together they form Al₂O₃ so the total charge balances.',
      },
    ],
    commonMistake:
      'Thinking of an ionic bond as a single bond between two specific ions, the way a covalent bond ' +
      'links two specific atoms — in reality, each ion in an ionic compound is surrounded by several ' +
      'oppositely-charged ions in a repeating 3D lattice, not paired off one-to-one.',
    quickReview: [
      'Ionic bonds form by complete electron transfer, usually metal to nonmetal.',
      'The metal becomes a cation; the nonmetal becomes an anion.',
      'The bond is the electrostatic attraction holding the ions together in a lattice.',
    ],
  },

  'properties-of-ionic-compounds': {
    slug: 'properties-of-ionic-compounds',
    title: 'Properties of Ionic Compounds',
    difficulty: 'medium',
    simpleExplanation:
      'Ionic compounds share a distinctive set of properties: high melting and boiling points, they ' +
      'form hard but brittle crystals, and they conduct electricity when dissolved in water or melted ' +
      '— but not as a solid.',
    whyItMatters:
      'Recognizing these properties lets you identify an unknown substance as ionic just from how it ' +
      "behaves, without needing to already know its formula — and explains why we use salt solutions " +
      "(not solid salt) in electrical and biological systems that rely on ion conduction.",
    whyItWorks:
      "All of these properties trace back to the same cause: a rigid 3D lattice held together by " +
      "strong electrostatic attractions in every direction. Breaking the lattice apart (melting) takes " +
      "a lot of energy, hence high melting points. A blow that shifts one layer of ions relative to " +
      "another suddenly lines up same-charge ions, which repel and shatter the crystal — hence " +
      "brittleness. And solid ions are locked in place and cannot move to carry current, but once " +
      "melted or dissolved they become free to move, which is what conducts electricity.",
    realLifeExample: {
      title: 'Why you add salt to melting ice, and why saltwater conducts electricity',
      scenario: 'Road salt (NaCl) is spread on icy roads, and seawater conducts electricity while pure water barely does.',
      explanation: 'Dissolved in water, NaCl separates into freely-moving Na⁺ and Cl⁻ ions — this both lowers the freezing point of the water (helping melt ice) and lets electric current flow through the solution, since the mobile ions carry charge.',
    },
    practiceQuestions: [
      {
        id: 'ionic-properties-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does solid sodium chloride NOT conduct electricity, while molten (liquid) sodium chloride does?',
        options: [
          { id: 'a', text: 'Solid NaCl has no ions at all.' },
          { id: 'b', text: "In the solid, the ions are locked in a fixed lattice and can't move; melting frees them to move and carry charge." },
          { id: 'c', text: 'Melting turns the ionic bonds into covalent bonds.' },
          { id: 'd', text: 'Solid NaCl is not actually a real compound.' },
        ],
        correctOptionId: 'b',
        hints: ['Conducting electricity requires charged particles that can physically move.', 'What changes about the ions when a solid melts?'],
        explanation: 'The ions are present in both the solid and the liquid, but only in the liquid (or in solution) are they free to move and carry electric current.',
      },
    ],
    commonMistake:
      "Assuming ionic compounds simply 'don't conduct electricity' — the accurate statement is that " +
      "they don't conduct as solids, but do conduct once melted or dissolved, because that's when the " +
      'ions become mobile.',
    quickReview: [
      'Ionic compounds have high melting/boiling points from strong lattice attractions.',
      'They are hard but brittle — a shift in the lattice brings like charges together and shatters it.',
      'They conduct electricity only when molten or dissolved, not as a solid.',
    ],
  },

  'formation-of-covalent-bonds': {
    slug: 'formation-of-covalent-bonds',
    title: 'Formation of Covalent Bonds',
    difficulty: 'medium',
    simpleExplanation:
      'A covalent bond forms when two atoms share one or more pairs of electrons, rather than fully ' +
      'transferring them. Each atom contributes electrons to a shared pair that effectively counts ' +
      'toward both atoms\' octets at once.',
    whyItMatters:
      'Covalent bonding is how nonmetal atoms — which all want to gain electrons, so none of them can ' +
      'simply give electrons away — still manage to reach a stable octet, by sharing rather than ' +
      'transferring.',
    whyItWorks:
      'When two atoms have similar (usually high) electronegativities, neither can pull electrons ' +
      'completely away from the other. Instead, both nuclei attract the same pair of electrons, and a ' +
      'stable bond forms where the shared electron pair sits between the two positively charged nuclei, ' +
      'attracted to both at once.',
    realLifeExample: {
      title: 'The oxygen you breathe',
      scenario: 'Oxygen gas in the air exists as O₂ molecules, not single oxygen atoms.',
      explanation: 'Each oxygen atom needs 2 more electrons for a full octet; two oxygen atoms share two pairs of electrons (a double bond) so that each atom effectively "sees" a full octet, without either atom fully gaining or losing electrons.',
    },
    practiceQuestions: [
      {
        id: 'covalent-formation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Two chlorine atoms bond to form Cl₂. What kind of bond forms, and why?',
        options: [
          { id: 'a', text: 'Ionic, because chlorine is very electronegative' },
          { id: 'b', text: 'Covalent, because both atoms are identical and share electrons equally' },
          { id: 'c', text: 'Metallic, because chlorine is a nonmetal' },
          { id: 'd', text: 'No bond forms between identical atoms' },
        ],
        correctOptionId: 'b',
        hints: ['Neither atom is more electronegative than the other — they are the same element.', 'ΔEN = 0 for two identical atoms.'],
        explanation: 'With identical atoms, ΔEN = 0, so neither atom can pull electrons away from the other — they share a pair of electrons equally, forming a nonpolar covalent bond.',
      },
    ],
    commonMistake:
      "Thinking only nonmetal-nonmetal pairs can bond covalently because 'nonmetals share' as a rule " +
      "of thumb without understanding why — the real reason is that similar (typically high) " +
      "electronegativities prevent either atom from pulling electrons away completely, which is what " +
      "characterizes nonmetals in general.",
    quickReview: [
      'Covalent bonds form by sharing electron pairs, not transferring them.',
      'They typically form between atoms with similar, often high, electronegativity.',
      'The shared pair is attracted to both nuclei, holding the atoms together.',
    ],
  },

  'single-double-and-triple-covalent-bonds': {
    slug: 'single-double-and-triple-covalent-bonds',
    title: 'Single, Double and Triple Covalent Bonds',
    difficulty: 'medium',
    simpleExplanation:
      'Atoms can share one pair of electrons (a single bond), two pairs (a double bond), or three ' +
      'pairs (a triple bond) — more shared pairs mean a stronger, shorter bond between the same two atoms.',
    whyItMatters:
      'The number of bonds between two atoms directly affects how strong and how reactive a molecule ' +
      'is — this is why nitrogen gas (N≡N, a triple bond) is so famously unreactive, while many ' +
      'double-bonded molecules readily take part in reactions.',
    whyItWorks:
      "Each additional shared electron pair adds more attraction between the two positively charged " +
      "nuclei and the negatively charged shared electrons packed between them, pulling the atoms " +
      "closer together and requiring more energy to pull them apart — so bond order (single < double " +
      "< triple) directly tracks with bond strength and inversely with bond length.",
    realLifeExample: {
      title: 'Why nitrogen gas is so stable',
      scenario: 'Nitrogen makes up about 78% of the air, and stays completely unreactive under normal conditions.',
      explanation: 'The two nitrogen atoms in N₂ are held together by a triple bond (three shared electron pairs) — one of the strongest bonds in chemistry — which is why enormous amounts of energy (like lightning, or industrial catalysts) are needed to break it apart for reactions such as fertilizer production.',
    },
    practiceQuestions: [
      {
        id: 'bond-order-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which bond is the strongest and shortest, all else being equal?',
        options: [
          { id: 'a', text: 'A single bond' },
          { id: 'b', text: 'A double bond' },
          { id: 'c', text: 'A triple bond' },
          { id: 'd', text: 'They are all the same strength' },
        ],
        correctOptionId: 'c',
        hints: ['More shared electron pairs pull the two atoms closer together.', 'Bond strength increases with bond order.'],
        explanation: 'A triple bond has three shared electron pairs holding the atoms together — more shared pairs mean a shorter, stronger bond than a single or double bond between the same two atoms.',
      },
    ],
    commonMistake:
      'Assuming a double bond is simply "twice as strong" as a single bond in a precise numerical ' +
      'sense — bond order and bond strength are correlated, but the relationship is not a strict ' +
      'multiple; a double bond is stronger than a single bond, but generally less than exactly double.',
    quickReview: [
      'Single bond = 1 shared pair; double = 2 shared pairs; triple = 3 shared pairs.',
      'More shared pairs → shorter, stronger bonds.',
      'N₂\'s triple bond is why nitrogen gas is so unreactive.',
    ],
  },

  'polarity-of-covalent-bonds': {
    slug: 'polarity-of-covalent-bonds',
    title: 'Polarity of Covalent Bonds',
    difficulty: 'medium',
    simpleExplanation:
      'A covalent bond is nonpolar when both atoms share electrons equally (identical or very similar ' +
      'electronegativity), and polar when one atom pulls the shared electrons closer to itself, giving ' +
      'it a slightly negative charge (δ−) and the other atom a slightly positive charge (δ+).',
    whyItMatters:
      "Polarity is what gives molecules like water their unusual properties — high boiling point, " +
      "ability to dissolve salts, surface tension — and is the reason 'like dissolves like': polar " +
      "substances mix well with other polar substances, and nonpolar substances mix well with other " +
      'nonpolar substances.',
    formulaSlug: 'electronegativity-difference-formula',
    workedExample: {
      id: 'bond-polarity-worked-1',
      title: 'Determine whether an H–F bond is polar',
      problemStatement: 'Hydrogen has an electronegativity of 2.20; fluorine has 3.98. Is the H–F bond polar or nonpolar, and which atom is δ−?',
      steps: [
        { step: 1, instruction: 'Find ΔEN.', math: 'ΔEN = |2.20 − 3.98| = 1.78', explanation: 'Take the absolute value of the difference.' },
        { step: 2, instruction: 'Compare to the polar-covalent range (0.4–1.7).', math: '1.78 is just above the polar-covalent range', explanation: 'This is borderline — H–F is usually classified as a highly polar covalent bond in practice, right at the edge of the ionic cutoff.' },
        { step: 3, instruction: 'Identify which atom attracts electrons more strongly.', math: 'EN(F) = 3.98 > EN(H) = 2.20', explanation: 'Fluorine is more electronegative, so it pulls the shared electrons closer.' },
      ],
      finalAnswer: 'H–F is a strongly polar bond; fluorine is δ− and hydrogen is δ+.',
    },
    whyItWorks:
      'When one atom is more electronegative, the shared electron cloud spends more time closer to ' +
      'that atom than to the other — this uneven distribution of negative charge creates a small ' +
      'negative region around the more electronegative atom and a small positive region around the less ' +
      'electronegative one, called a dipole.',
    realLifeExample: {
      title: "Why water beads up on a waxed car",
      scenario: 'Water forms round beads on a freshly waxed car surface instead of spreading out flat.',
      explanation: "Water's polar O–H bonds make water molecules attract each other strongly, while wax is made of nonpolar molecules that water's polar molecules are not attracted to — so instead of spreading across the nonpolar wax, water molecules cling to each other and minimize contact with it, forming beads.",
    },
    practiceQuestions: [
      {
        id: 'bond-polarity-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'In a C=O bond, oxygen (EN 3.44) is more electronegative than carbon (EN 2.55). Which atom carries the δ− partial charge?',
        options: [
          { id: 'a', text: 'Carbon' },
          { id: 'b', text: 'Oxygen' },
          { id: 'c', text: 'Neither — the bond is nonpolar' },
          { id: 'd', text: 'Both atoms equally' },
        ],
        correctOptionId: 'b',
        hints: ['The more electronegative atom pulls the shared electrons closer to itself.', 'More electron density nearby means a more negative charge.'],
        explanation: 'Oxygen, being more electronegative, pulls the shared electron pair closer to itself, giving it the δ− partial charge and leaving carbon δ+.',
      },
    ],
    commonMistake:
      "Confusing a polar bond with a polar molecule — a molecule can have polar bonds but still be " +
      "nonpolar overall if its shape makes the individual bond dipoles cancel out (like CO₂, which has " +
      "two polar C=O bonds but is a linear, nonpolar molecule overall).",
    quickReview: [
      'Polar bonds form when bonded atoms have significantly different electronegativities.',
      'The more electronegative atom becomes δ−; the other becomes δ+.',
      "A molecule's overall polarity also depends on its shape, not just its individual bonds.",
    ],
  },

  'van-der-waals-forces': {
    slug: 'van-der-waals-forces',
    title: 'Van der Waals Forces',
    difficulty: 'medium',
    simpleExplanation:
      'Van der Waals forces are weak attractions between molecules, caused by temporary, shifting ' +
      'imbalances in electron distribution that create brief, tiny dipoles — even in molecules with no ' +
      'permanent polarity at all.',
    whyItMatters:
      'These are the only forces holding nonpolar substances like oxygen, nitrogen, and the noble ' +
      'gases together as liquids or solids at all — without them, nothing would ever condense into a ' +
      'liquid or freeze into a solid unless it also had stronger polar or ionic interactions.',
    whyItWorks:
      "Electrons are constantly moving, so at any given instant they might happen to be unevenly " +
      "distributed across a molecule, creating a fleeting, temporary dipole. That temporary dipole " +
      "induces a matching temporary dipole in a neighbouring molecule, and the two weakly attract each " +
      "other — an instant later the electrons shift again, but on average this creates a constant weak " +
      "attractive pull between molecules.",
    realLifeExample: {
      title: 'Why gecko feet stick to walls',
      scenario: 'Geckos can climb smooth vertical glass using only their feet, with no glue or suction.',
      explanation: "A gecko's feet are covered in millions of microscopic hair-like structures that get so close to a surface that van der Waals forces between the hairs and the surface molecules add up to a strong enough net force to support the gecko's weight.",
    },
    practiceQuestions: [
      {
        id: 'van-der-waals-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can nonpolar substances like oxygen gas still be cooled into a liquid?',
        options: [
          { id: 'a', text: 'They cannot — nonpolar substances never condense.' },
          { id: 'b', text: 'Temporary, fluctuating dipoles create weak van der Waals attractions between molecules.' },
          { id: 'c', text: 'Nonpolar molecules form ionic bonds with each other at low temperature.' },
          { id: 'd', text: 'Oxygen molecules become polar permanently below their boiling point.' },
        ],
        correctOptionId: 'b',
        hints: ["Even 'nonpolar' molecules have electrons that are constantly moving."],
        explanation: 'Even nonpolar molecules experience momentary, shifting electron imbalances that create weak, temporary attractions — strong enough to hold molecules together as a liquid or solid once the temperature is low enough that molecular motion no longer overwhelms them.',
      },
    ],
    commonMistake:
      'Assuming van der Waals forces are negligible or unimportant because they are weak compared to ' +
      "covalent or ionic bonds — for large molecules with many atoms, van der Waals forces add up " +
      "across the whole molecule and can become quite significant, which is why larger nonpolar " +
      "molecules generally have higher boiling points than smaller ones.",
    quickReview: [
      'Van der Waals forces come from temporary, fluctuating electron distributions.',
      'They are the weakest type of intermolecular force, but exist between all molecules.',
      'They are the only attraction holding purely nonpolar substances together as liquids/solids.',
    ],
  },

  'hydrogen-bonding': {
    slug: 'hydrogen-bonding',
    title: 'Hydrogen Bonding',
    difficulty: 'medium',
    simpleExplanation:
      'Hydrogen bonding is an unusually strong intermolecular attraction that occurs when a hydrogen ' +
      'atom bonded to a highly electronegative atom (nitrogen, oxygen, or fluorine) is attracted to a ' +
      'lone pair on a nearby electronegative atom in another molecule.',
    whyItMatters:
      'Hydrogen bonding is responsible for many of water\'s most important, life-sustaining ' +
      'properties — its unusually high boiling point, the fact that ice floats, and its strong surface ' +
      'tension — none of which would be true if water only had ordinary van der Waals forces.',
    whyItWorks:
      "Hydrogen is a very small atom, so when it's bonded to a strongly electronegative atom, its lone " +
      "proton (with almost no electron cloud shielding it, since it started with only one electron) " +
      "becomes strongly attracted to a lone pair of electrons on a nearby electronegative atom — much " +
      "more strongly than an ordinary dipole-dipole attraction, because of how exposed and positively " +
      "charged that hydrogen nucleus is.",
    realLifeExample: {
      title: 'Why ice floats on liquid water',
      scenario: 'Ice cubes float in a glass of water, even though ice is the solid form of the same substance.',
      explanation: 'In ice, hydrogen bonds lock water molecules into a rigid, open hexagonal lattice that is actually less dense than liquid water, where molecules can pack more closely — this is unusual (most solids are denser than their liquid form) and happens specifically because of how hydrogen bonds arrange the molecules.',
    },
    practiceQuestions: [
      {
        id: 'hydrogen-bonding-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which pair of atoms directly bonded to hydrogen can lead to hydrogen bonding between molecules?',
        options: [
          { id: 'a', text: 'H bonded to C' },
          { id: 'b', text: 'H bonded to N, O, or F' },
          { id: 'c', text: 'H bonded to any nonmetal' },
          { id: 'd', text: 'H bonded to another H' },
        ],
        correctOptionId: 'b',
        hints: ['Only a few, very electronegative elements create hydrogen bonds when bonded to hydrogen.', 'Think N, O, F — the three smallest, most electronegative elements that commonly bond to H.'],
        explanation: 'Hydrogen bonding requires hydrogen bonded to nitrogen, oxygen, or fluorine — these three elements are small and electronegative enough to create the strong, exposed dipole that hydrogen bonding needs.',
      },
    ],
    commonMistake:
      "Calling hydrogen bonding a type of covalent bond — it is an intermolecular force (an attraction " +
      "BETWEEN separate molecules), not a bond within a molecule, even though it is much stronger than " +
      "typical intermolecular forces like van der Waals attractions.",
    quickReview: [
      'Hydrogen bonding needs H bonded to N, O, or F, attracted to a lone pair on another molecule.',
      'It is the strongest common type of intermolecular force.',
      "It explains water's high boiling point and why ice floats.",
    ],
  },

  'metallic-bonding-and-properties': {
    slug: 'metallic-bonding-and-properties',
    title: 'Metallic Bonding and Properties of Metals',
    difficulty: 'medium',
    simpleExplanation:
      'Metallic bonding is the attraction between positively charged metal ions arranged in a lattice ' +
      'and a "sea" of delocalized valence electrons that are free to move throughout the entire metal, ' +
      'rather than belonging to any one atom.',
    whyItMatters:
      "This single model explains the whole cluster of properties that make metals so useful: they " +
      "conduct electricity and heat extremely well, they can be hammered into sheets or drawn into " +
      "wires without shattering, and they have a characteristic shine.",
    whyItWorks:
      "Because the valence electrons are delocalized (not fixed to any particular metal atom), they " +
      "are free to flow when a voltage is applied, which is why metals conduct electricity so well. " +
      "The same freely-moving electrons also let metal ions slide past one another when the metal is " +
      "bent or hammered without breaking any specific bond (unlike an ionic crystal, where sliding " +
      "brings like charges together and shatters it) — which is why metals are malleable and ductile " +
      "rather than brittle.",
    realLifeExample: {
      title: 'Copper electrical wiring',
      scenario: "Copper is used almost everywhere for electrical wiring, and can be drawn into thin, flexible wire.",
      explanation: "Copper's delocalized valence electrons let electric current flow through it with very low resistance, and the same 'sea of electrons' lets copper atoms be drawn into thin wires without the metal cracking or breaking.",
    },
    practiceQuestions: [
      {
        id: 'metallic-bonding-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can a metal be hammered into a flat sheet without shattering, unlike an ionic crystal?',
        options: [
          { id: 'a', text: 'Metals have no charged particles at all.' },
          { id: 'b', text: "Delocalized electrons let metal ions slide past each other without breaking any specific, fixed bond." },
          { id: 'c', text: 'Metal atoms are not actually bonded to each other.' },
          { id: 'd', text: 'Metals are held together only by van der Waals forces.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what happens to the electrons (versus the ions) when the metal is deformed.', 'In an ionic solid, sliding brings like charges together and repels — does the same happen in a metal?'],
        explanation: "The mobile 'sea' of electrons keeps surrounding and bonding to the metal ions no matter how they shift position, so sliding layers of metal ions past each other doesn't break any specific bond or bring like charges together the way it would in an ionic crystal.",
      },
    ],
    commonMistake:
      'Describing metallic bonding as just "a type of covalent bonding" — while both involve shared ' +
      'electrons in a loose sense, covalent bonding shares specific electron pairs between specific ' +
      'atoms, while metallic bonding involves electrons delocalized across the entire metal structure, ' +
      'with no fixed pairing to any particular atom.',
    quickReview: [
      'Metallic bonding: metal ions in a lattice, held together by delocalized valence electrons.',
      'Delocalized electrons explain electrical/thermal conductivity.',
      'The same mobile electrons let metals be malleable and ductile rather than brittle.',
    ],
  },
};
