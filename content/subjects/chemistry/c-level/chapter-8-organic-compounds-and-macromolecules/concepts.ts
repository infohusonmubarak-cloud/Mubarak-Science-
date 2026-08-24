import type { Concept } from '@/types/content';

export const chapter8OrganicConcepts: Record<string, Concept> = {
  'what-are-organic-compounds': {
    slug: 'what-are-organic-compounds',
    title: 'What Are Organic Compounds',
    difficulty: 'easy',
    simpleExplanation:
      'Organic compounds are compounds based on carbon, typically bonded to hydrogen and often to ' +
      'other elements like oxygen, nitrogen, or halogens — carbon\'s unique ability to form long ' +
      'chains and rings bonded to itself makes an enormous variety of organic compounds possible.',
    whyItMatters:
      'Organic chemistry underlies the chemistry of life itself (proteins, DNA, carbohydrates, fats), ' +
      'as well as fuels, plastics, medicines, and countless other materials — understanding organic ' +
      'compounds is the foundation for understanding both biochemistry and most modern materials ' +
      'science.',
    whyItWorks:
      "Carbon has four valence electrons and forms four strong covalent bonds, and — unlike most " +
      "other elements — can bond repeatedly to itself, forming long chains, branches, and rings " +
      "without becoming unstable. This 'catenation' ability, combined with carbon's intermediate " +
      "electronegativity (allowing stable bonds to many different elements), is what makes millions " +
      "of distinct organic compounds possible.",
    realLifeExample: {
      title: 'The sheer diversity of organic compounds around you',
      scenario: 'Wood, plastic, cotton clothing, the fuel in a car, and the proteins in your body are all organic compounds.',
      explanation: "Despite looking and behaving completely differently, all of these materials share the same underlying feature: a carbon-based molecular framework, built from carbon's unique ability to bond extensively with itself and other elements.",
    },
    practiceQuestions: [
      {
        id: 'organic-compounds-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "What property of carbon makes such an enormous variety of organic compounds possible?",
        options: [
          { id: 'a', text: 'Carbon is radioactive.' },
          { id: 'b', text: 'Carbon can bond repeatedly to itself, forming long chains, branches, and rings.' },
          { id: 'c', text: 'Carbon only forms one type of compound.' },
          { id: 'd', text: 'Carbon cannot bond to hydrogen.' },
        ],
        correctOptionId: 'b',
        hints: ['This property is called catenation.'],
        explanation: "Carbon's ability to form long, stable chains and rings bonded to itself (catenation), combined with its four strong covalent bonds, is what makes millions of distinct organic compounds structurally possible.",
      },
    ],
    commonMistake:
      "Assuming 'organic' in chemistry means the same as 'organic' on a food label (grown without " +
      "synthetic pesticides) — in chemistry, 'organic' simply refers to carbon-based compounds, with " +
      "no connection to farming practices at all.",
    quickReview: [
      'Organic compounds are carbon-based, usually bonded to hydrogen and other elements.',
      "Carbon's catenation (self-bonding) ability creates enormous structural diversity.",
      'Organic chemistry underlies biochemistry, fuels, plastics, and medicines.',
    ],
  },

  'hydrocarbons-and-homologous-series': {
    slug: 'hydrocarbons-and-homologous-series',
    title: 'Hydrocarbons and Homologous Series',
    difficulty: 'medium',
    simpleExplanation:
      'A hydrocarbon is a compound made of only carbon and hydrogen. A homologous series is a family ' +
      'of compounds (like the alkanes or alkenes) that share the same general formula and similar ' +
      'chemical properties, differing only by the number of CH₂ units in the chain.',
    whyItMatters:
      "Recognizing a homologous series lets you predict the formula, and even roughly predict the " +
      "properties, of ANY member of that family just from knowing the general pattern — you don't " +
      "need to memorize every single compound individually.",
    diagram: {
      id: 'methane-diagram',
      title: 'Methane, CH₄',
      altText: 'A ball-and-stick diagram of methane, showing one central carbon atom bonded to four hydrogen atoms',
      component: 'MoleculeDiagram',
      interactive: false,
      props: {
        label: 'Methane (CH₄)',
        atoms: [
          { element: 'C', x: 0, y: 0 },
          { element: 'H', x: 0, y: -1.4 },
          { element: 'H', x: 1.2, y: 0.7 },
          { element: 'H', x: -1.2, y: 0.7 },
          { element: 'H', x: 0, y: 1.4 },
        ],
        bonds: [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
        ],
      },
    },
    formulaSlug: 'alkane-general-formula',
    workedExample: {
      id: 'homologous-series-worked-1',
      title: 'Find the molecular formula of an alkane',
      problemStatement: 'Find the molecular formula of the alkane with 6 carbon atoms (hexane).',
      steps: [
        { step: 1, instruction: 'Write the general formula.', math: 'CₙH₂ₙ₊₂', explanation: 'The general formula for any alkane.' },
        { step: 2, instruction: 'Substitute n = 6.', math: 'C₆H₂₍₆₎₊₂ = C₆H₁₄', explanation: '2 × 6 + 2 = 14.' },
      ],
      finalAnswer: 'Hexane = C₆H₁₄',
    },
    whyItWorks:
      'Every alkane has the same basic structure — a chain of carbons each bonded to as many ' +
      'hydrogens as possible (fully "saturated") — so adding one more carbon to the chain always adds ' +
      'exactly one more carbon and two more hydrogens (a CH₂ unit), which is exactly what the general ' +
      'formula CₙH₂ₙ₊₂ captures.',
    realLifeExample: {
      title: 'Methane, propane, and butane as fuels',
      scenario: 'Methane (natural gas), propane (gas grills), and butane (lighters) are all alkanes with different chain lengths.',
      explanation: 'Methane (CH₄, n=1), propane (C₃H₈, n=3), and butane (C₄H₁₀, n=4) are all members of the same homologous series — their formulas all fit CₙH₂ₙ₊₂, and their fuel properties change predictably as chain length increases.',
    },
    practiceQuestions: [
      {
        id: 'homologous-series-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the molecular formula of the alkane with 8 carbon atoms (octane)?',
        options: [
          { id: 'a', text: 'C₈H₁₆' },
          { id: 'b', text: 'C₈H₁₈' },
          { id: 'c', text: 'C₈H₈' },
          { id: 'd', text: 'C₈H₂₀' },
        ],
        correctOptionId: 'b',
        hints: ['CₙH₂ₙ₊₂ with n = 8.', '2 × 8 + 2 = 18.'],
        explanation: 'Using CₙH₂ₙ₊₂ with n = 8: 2(8) + 2 = 18, giving C₈H₁₈.',
      },
    ],
    commonMistake:
      "Confusing the alkane general formula (CₙH₂ₙ₊₂) with the alkene general formula (CₙH₂ₙ) — " +
      "alkenes have one fewer pair of hydrogens per carbon count because a C=C double bond uses up " +
      "bonding positions that would otherwise hold hydrogen atoms.",
    quickReview: [
      'A hydrocarbon contains only carbon and hydrogen.',
      'A homologous series shares a general formula and similar properties.',
      'Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ.',
    ],
  },

  'common-functional-groups': {
    slug: 'common-functional-groups',
    title: 'Common Functional Groups',
    difficulty: 'medium',
    simpleExplanation:
      'A functional group is a specific atom or group of atoms within a molecule that is responsible ' +
      'for its characteristic chemical behaviour — common examples include the hydroxyl group (–OH, ' +
      'alcohols), the carboxyl group (–COOH, carboxylic acids), and the amine group (–NH₂, amines).',
    whyItMatters:
      "Functional groups let chemists predict a compound's chemical behaviour just by recognizing its " +
      "structure — two molecules with completely different carbon backbones but the same functional " +
      "group tend to react in similar ways.",
    whyItWorks:
      'The rest of an organic molecule\'s carbon-hydrogen "backbone" is relatively unreactive — most ' +
      'of a molecule\'s distinctive chemical reactivity comes specifically from its functional ' +
      'group(s), since that is where the unusual bonding (extra electronegative atoms, multiple bonds, ' +
      'lone pairs) that drives chemical reactions is concentrated.',
    realLifeExample: {
      title: 'Why vinegar and rubbing alcohol behave so differently',
      scenario: 'Acetic acid (vinegar) is acidic and reactive; ethanol (used in rubbing alcohol) is much less reactive, even though both are simple, similarly-sized organic molecules.',
      explanation: "Acetic acid's –COOH (carboxyl) functional group makes it acidic and reactive, while ethanol's –OH (hydroxyl) functional group gives it very different, much less acidic behaviour — the difference in their chemistry comes almost entirely from their different functional groups.",
    },
    practiceQuestions: [
      {
        id: 'functional-groups-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What functional group is present in all alcohols, such as ethanol?',
        options: [
          { id: 'a', text: '–COOH (carboxyl)' },
          { id: 'b', text: '–OH (hydroxyl)' },
          { id: 'c', text: '–NH₂ (amine)' },
          { id: 'd', text: 'No functional group at all' },
        ],
        correctOptionId: 'b',
        hints: ["The 'hydroxyl' group is characteristic of alcohols."],
        explanation: 'All alcohols contain the hydroxyl functional group, –OH, attached to a carbon chain.',
      },
    ],
    commonMistake:
      "Assuming the entire molecular formula determines a compound's chemical behaviour equally — in " +
      "reality, the functional group dominates a molecule's characteristic reactivity, while the rest " +
      "of the carbon backbone plays a comparatively minor role.",
    quickReview: [
      'A functional group is the reactive part of an organic molecule.',
      '–OH: hydroxyl (alcohols). –COOH: carboxyl (carboxylic acids). –NH₂: amine.',
      'Functional groups determine a molecule\'s characteristic chemical behaviour.',
    ],
  },

  'tests-for-functional-groups': {
    slug: 'tests-for-functional-groups',
    title: 'Tests for Functional Groups',
    difficulty: 'medium',
    simpleExplanation:
      'Simple chemical tests can identify which functional group is present in an unknown compound — ' +
      'for example, adding sodium carbonate to a suspected carboxylic acid produces visible bubbles of ' +
      'CO₂ gas, confirming the –COOH group.',
    whyItMatters:
      'These tests let chemists identify unknown organic compounds practically, in a lab, without ' +
      'needing more sophisticated instruments — a skill still used today for quick, preliminary ' +
      'identification.',
    whyItWorks:
      'Each test is designed around a reaction that ONLY the target functional group undergoes, ' +
      'producing an unmistakable, easily observed result (a colour change, a gas, a precipitate) — ' +
      'carboxylic acids react with carbonates to release CO₂ because they are acidic enough to react, ' +
      'while non-acidic functional groups like alcohols simply do not trigger this same reaction.',
    realLifeExample: {
      title: 'Testing for a carboxylic acid',
      scenario: 'A student needs to determine whether an unknown liquid is a carboxylic acid.',
      explanation: 'Adding a small amount of sodium carbonate or sodium bicarbonate to the unknown liquid: if it is a carboxylic acid, immediate bubbling (CO₂ gas) confirms the acidic –COOH group; a non-acidic organic compound, like an alcohol, produces no such reaction.',
    },
    practiceQuestions: [
      {
        id: 'functional-group-tests-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Adding sodium carbonate to an unknown organic liquid produces immediate bubbling. What functional group does this confirm?',
        options: [
          { id: 'a', text: '–OH (hydroxyl)' },
          { id: 'b', text: '–COOH (carboxyl)' },
          { id: 'c', text: '–NH₂ (amine)' },
          { id: 'd', text: 'No functional group is present' },
        ],
        correctOptionId: 'b',
        hints: ['Sodium carbonate reacts with acids to release CO₂ gas.'],
        explanation: 'Bubbling (CO₂ gas release) when sodium carbonate is added specifically confirms the acidic carboxyl group, –COOH.',
      },
    ],
    commonMistake:
      "Assuming a single test can confirm the presence of ANY functional group — each functional-group " +
      "test is specific to the chemistry of that particular group, and a negative result on one test " +
      "only rules out that specific group, not every possibility.",
    quickReview: [
      'Chemical tests identify functional groups by their distinctive, specific reactions.',
      'Carboxylic acids + carbonate → visible CO₂ bubbling.',
      'Each test is specific — a negative result only rules out that one functional group.',
    ],
  },

  'polymers-and-monomers': {
    slug: 'polymers-and-monomers',
    title: 'Polymers and Monomers',
    difficulty: 'medium',
    simpleExplanation:
      'A monomer is a small molecule that can join together, repeatedly, with identical or similar ' +
      'monomers to form a very long chain called a polymer — "poly" (many) "mer" (units) literally ' +
      'means "many repeating units."',
    whyItMatters:
      "This monomer-to-polymer relationship is the basis of an enormous range of materials — " +
      "plastics, proteins, DNA, starch, rubber — and understanding it explains both how these " +
      "materials form and why they have such different properties from their small-molecule building " +
      "blocks.",
    whyItWorks:
      'Monomers typically contain a reactive functional group (like a C=C double bond, in the case of ' +
      'many plastics) that allows them to bond to another identical monomer, which then still has a ' +
      'free reactive site to bond to the next one, and so on — this repeatable bonding mechanism is ' +
      'what allows thousands or millions of monomer units to link into one enormous polymer molecule.',
    realLifeExample: {
      title: 'Polyethylene from ethene',
      scenario: 'Plastic bags and bottles are made of polyethylene, formed from the small gas molecule ethene (C₂H₄).',
      explanation: "Each ethene molecule's C=C double bond opens up and bonds to the next ethene molecule, which does the same to the next, repeating potentially tens of thousands of times to build one long polyethylene polymer chain — a dramatic transformation from a small, simple gas into a strong, flexible solid.",
    },
    practiceQuestions: [
      {
        id: 'polymers-monomers-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the relationship between a monomer and a polymer?',
        options: [
          { id: 'a', text: 'A monomer is a type of polymer.' },
          { id: 'b', text: 'A polymer is a long chain built from many repeating monomer units bonded together.' },
          { id: 'c', text: 'Monomers and polymers are unrelated substances.' },
          { id: 'd', text: 'A polymer always contains exactly two monomers.' },
        ],
        correctOptionId: 'b',
        hints: ["'Poly-mer' literally means 'many units.'"],
        explanation: 'A polymer is formed by joining many (often thousands to millions of) monomer units together in a long repeating chain.',
      },
    ],
    commonMistake:
      "Assuming all polymers are synthetic (human-made) plastics — many important polymers, like " +
      "proteins, DNA, and starch, are entirely natural, built from biological monomers (amino acids, " +
      "nucleotides, and glucose units respectively).",
    quickReview: [
      'A monomer is a small, repeatable building-block molecule.',
      'A polymer is a long chain of many bonded monomer units.',
      'Both synthetic (plastics) and natural (proteins, DNA, starch) polymers exist.',
    ],
  },

  'natural-and-synthetic-macromolecules': {
    slug: 'natural-and-synthetic-macromolecules',
    title: 'Natural and Synthetic Macromolecules',
    difficulty: 'medium',
    simpleExplanation:
      'Natural macromolecules — proteins, carbohydrates (like starch and cellulose), nucleic acids ' +
      '(DNA, RNA) — are produced by living organisms. Synthetic macromolecules — like polyethylene, ' +
      'nylon, and PVC — are manufactured by chemists, typically from small molecules derived from ' +
      'petroleum.',
    whyItMatters:
      "Comparing natural and synthetic macromolecules highlights both what chemistry has learned from " +
      "nature (many synthetic polymers are inspired by natural ones) and where the two diverge " +
      "— notably in biodegradability, since most natural macromolecules break down readily in the " +
      "environment while many synthetic ones persist for a very long time.",
    whyItWorks:
      "Natural macromolecules are built by living cells using enzymes finely tuned to construct AND " +
      "break down specific molecular structures, meaning other organisms in the environment usually " +
      "have matching enzymes able to decompose them. Many synthetic polymers, by contrast, have " +
      "molecular structures that no natural enzyme evolved to break down, so they persist in the " +
      "environment for decades or centuries rather than being decomposed on a reasonable timescale.",
    realLifeExample: {
      title: 'Cellulose vs. plastic in the environment',
      scenario: 'A wooden object (mostly cellulose) decomposes in the environment within years, while a plastic object can persist for centuries.',
      explanation: "Cellulose is a natural macromolecule that many fungi and bacteria have evolved enzymes to break down, so wood decomposes relatively quickly; most synthetic plastics have no natural enzyme equipped to break their specific molecular structure apart, so they persist far longer in the environment.",
    },
    practiceQuestions: [
      {
        id: 'natural-synthetic-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do most synthetic plastics persist in the environment far longer than natural macromolecules like cellulose?',
        options: [
          { id: 'a', text: 'Plastics are radioactive.' },
          { id: 'b', text: 'No natural enzyme has evolved to break down most synthetic polymer structures.' },
          { id: 'c', text: 'Plastics are heavier than natural macromolecules.' },
          { id: 'd', text: 'Natural macromolecules do not actually decompose either.' },
        ],
        correctOptionId: 'b',
        hints: ['Decomposition in nature usually relies on specific enzymes matching the molecular structure being broken down.'],
        explanation: 'Natural macromolecules like cellulose have matching enzymes in the environment (from fungi and bacteria) evolved specifically to break them down, while most synthetic polymers have structures no natural enzyme is equipped to decompose, causing them to persist much longer.',
      },
    ],
    commonMistake:
      "Assuming ALL synthetic macromolecules are equally non-biodegradable, or that ALL natural " +
      "macromolecules decompose quickly — biodegradability actually depends on the SPECIFIC molecular " +
      "structure involved, and some newer synthetic polymers are deliberately engineered to be " +
      "biodegradable.",
    quickReview: [
      'Natural macromolecules (proteins, DNA, starch) are produced by living organisms.',
      'Synthetic macromolecules (polyethylene, nylon, PVC) are manufactured, often from petroleum.',
      'Biodegradability depends on whether matching decomposing enzymes exist in the environment.',
    ],
  },
};
