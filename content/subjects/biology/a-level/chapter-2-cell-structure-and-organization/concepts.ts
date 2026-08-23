import type { Concept } from '@/types/content';

export const chapter2BioConcepts: Record<string, Concept> = {
  'cell-theory': {
    slug: 'cell-theory',
    title: 'Cell Theory',
    difficulty: 'easy',
    simpleExplanation:
      'Cell theory states that all living things are made of one or more cells, the cell is the ' +
      "basic unit of structure and function in an organism, and all cells come from pre-existing " +
      'cells through cell division.',
    whyItMatters:
      'Recognizing that every living thing shares this same basic building block is what lets ' +
      'biologists study a single-celled bacterium and a whale using many of the same underlying principles.',
    workedExample: {
      id: 'cell-theory-worked-1',
      title: 'Using cell theory to reason about a sample',
      problemStatement: 'A student observes a new microorganism under a microscope. How can they use cell theory to decide if it is alive?',
      steps: [
        { step: 1, instruction: 'Check whether it is made of at least one cell.', explanation: 'Cell theory says all living things are made of cells — no cells means not alive by this definition.' },
        { step: 2, instruction: 'Look for basic life processes happening at the cellular level.', explanation: 'The cell should be carrying out functions like feeding or movement.' },
        { step: 3, instruction: 'Check whether it could have arisen from a pre-existing cell.', explanation: 'Cell theory rejects spontaneous generation — new cells always come from existing cells.' },
      ],
      finalAnswer: 'If it is made of one or more cells carrying out life processes, and arose from an existing cell, cell theory supports classifying it as living.',
    },
    whyItWorks:
      'Cell theory holds because every cell studied under a microscope — from bacteria to human ' +
      'skin cells — follows the same rules: bounded by a membrane, carrying out life processes, ' +
      'and produced by division of an existing cell.',
    realLifeExample: {
      title: 'Diagnosing a sample under a microscope',
      scenario: 'A lab technician examines an unknown sample under a microscope to determine if it contains living organisms.',
      explanation: 'Applying cell theory — looking for cells, membranes, and signs of cell division — is how such samples are classified as biological in real diagnostic labs.',
    },
    practiceQuestions: [
      {
        id: 'cell-theory-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which statement is NOT part of cell theory?',
        options: [
          { id: 'a', text: 'All living things are made of one or more cells' },
          { id: 'b', text: 'The cell is the basic unit of life' },
          { id: 'c', text: 'Cells can arise spontaneously from non-living matter' },
          { id: 'd', text: 'New cells come from existing cells' },
        ],
        correctOptionId: 'c',
        hints: ['Cell theory says the opposite of where new cells come from.', 'Think about where a new cell actually comes from — division, not spontaneous generation.'],
        explanation: 'Cell theory rejects spontaneous generation — new cells always come from existing cells through division.',
      },
    ],
    commonMistake:
      'Assuming cell theory means all cells look and function identically — it only claims they ' +
      'share the same basic organizational unit, not that every cell is the same.',
    quickReview: [
      'All living things are made of one or more cells.',
      'The cell is the basic unit of structure and function in life.',
      'All cells come from pre-existing cells.',
    ],
  },

  'prokaryotic-vs-eukaryotic-cells': {
    slug: 'prokaryotic-vs-eukaryotic-cells',
    title: 'Prokaryotic vs. Eukaryotic Cells',
    difficulty: 'easy',
    simpleExplanation:
      'Every cell is either prokaryotic or eukaryotic. Prokaryotic cells (like bacteria) are small ' +
      'and simple, with no nucleus — their genetic material floats freely in the cytoplasm. ' +
      'Eukaryotic cells (like animal, plant, and fungal cells) are larger and more complex, with a ' +
      'nucleus and other membrane-bound organelles.',
    whyItMatters:
      'This single distinction splits all of life into two fundamentally different kinds of cell ' +
      'organization, and explains why bacteria behave so differently from the cells in your own body.',
    workedExample: {
      id: 'prokaryotic-worked-1',
      title: 'Classify a cell from its features',
      problemStatement: 'A cell is observed to have no nucleus and is about 1 micrometre wide. Is it prokaryotic or eukaryotic?',
      steps: [
        { step: 1, instruction: 'Check for a nucleus.', explanation: 'Eukaryotic cells always have a nucleus; prokaryotic cells never do.' },
        { step: 2, instruction: 'Check the size.', explanation: 'Prokaryotic cells are typically 0.1–5 micrometres; eukaryotic cells are typically 10–100 micrometres.' },
      ],
      finalAnswer: 'No nucleus and about 1 micrometre wide — this is a prokaryotic cell.',
    },
    whyItWorks:
      'The presence or absence of a nucleus reflects a genuinely different way of organizing ' +
      'genetic material and cell machinery — it is the defining structural split between the two cell types.',
    realLifeExample: {
      title: "Why antibiotics don't harm your own cells",
      scenario: 'Many antibiotics work by targeting structures found only in prokaryotic (bacterial) cells.',
      explanation: 'Because your own cells are eukaryotic and lack those specific bacterial structures, the antibiotic can attack the bacteria without damaging your cells.',
    },
    practiceQuestions: [
      {
        id: 'prokaryotic-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which feature is found in eukaryotic cells but NOT prokaryotic cells?',
        options: [
          { id: 'a', text: 'Cytoplasm' },
          { id: 'b', text: 'A nucleus' },
          { id: 'c', text: 'A cell membrane' },
          { id: 'd', text: 'Ribosomes' },
        ],
        correctOptionId: 'b',
        hints: ["Think about what makes a cell 'eu-karyotic' — the word root refers to a true nucleus.", "Prokaryotic literally means 'before nucleus.'"],
        explanation: 'Only eukaryotic cells have a true, membrane-bound nucleus.',
      },
    ],
    commonMistake:
      'Assuming all small cells are prokaryotic — size is a useful clue, but the presence of a ' +
      'nucleus is the defining feature.',
    quickReview: [
      'Prokaryotic cells (e.g. bacteria) have no nucleus.',
      'Eukaryotic cells (animal, plant, fungal) have a true nucleus.',
      'Eukaryotic cells are generally larger and more complex.',
    ],
  },

  'cell-membrane-and-cytoplasm': {
    slug: 'cell-membrane-and-cytoplasm',
    title: 'Cell Membrane and Cytoplasm',
    difficulty: 'easy',
    simpleExplanation:
      'The cell membrane is a thin, flexible barrier that surrounds every cell, controlling what ' +
      'enters and leaves. Inside it, the cytoplasm is the jelly-like substance that fills the cell ' +
      'and holds all the organelles in place.',
    whyItMatters:
      "Without a membrane to control what crosses in and out, a cell couldn't keep its internal " +
      "chemistry stable enough to survive — and without cytoplasm, its organelles would have " +
      'nowhere to sit or interact.',
    diagram: {
      id: 'animal-cell-diagram',
      title: 'Animal cell',
      altText: 'A labelled diagram of an animal cell showing the cell membrane, nucleus, mitochondria, ribosomes, endoplasmic reticulum and Golgi apparatus',
      component: 'CellDiagram',
      interactive: false,
      props: { type: 'animal' },
    },
    workedExample: {
      id: 'membrane-worked-1',
      title: 'Identify the structure controlling water loss',
      problemStatement: 'A cell placed in salty water loses water and shrinks. Which structure is responsible for controlling this water loss?',
      steps: [
        { step: 1, instruction: 'Identify what separates the inside of the cell from its environment.', explanation: 'The cell membrane is the boundary between inside and outside.' },
        { step: 2, instruction: 'Recognize that the membrane controls what crosses it.', explanation: "The membrane's selective permeability governs which substances, including water, can pass through." },
      ],
      finalAnswer: 'The cell membrane controls the movement of water in and out of the cell.',
    },
    whyItWorks:
      'The cell membrane is selectively permeable — it lets some substances cross freely while ' +
      'restricting others — which is exactly the property needed to keep the cell\'s internal ' +
      'environment different from (and more stable than) its surroundings.',
    realLifeExample: {
      title: 'Why cucumbers go soft in salty water',
      scenario: 'A cucumber slice left in a strong salt solution becomes limp instead of staying crisp.',
      explanation: "Water moves out of the cucumber's cells, across their cell membranes, into the saltier solution outside — a direct, visible example of the membrane controlling water movement.",
    },
    practiceQuestions: [
      {
        id: 'membrane-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the main function of the cell membrane?',
        options: [
          { id: 'a', text: 'To produce energy' },
          { id: 'b', text: 'To control what enters and leaves the cell' },
          { id: 'c', text: 'To store genetic material' },
          { id: 'd', text: 'To produce proteins' },
        ],
        correctOptionId: 'b',
        hints: ["Think of it as the cell's boundary, or gatekeeper.", "It doesn't produce energy or proteins itself."],
        explanation: "The cell membrane's main job is controlling movement of substances into and out of the cell.",
      },
    ],
    commonMistake:
      'Confusing the cell membrane with the cell wall — every cell (plant or animal) has a cell ' +
      'membrane, but only plant (and some other) cells have a cell wall as well.',
    quickReview: [
      'The cell membrane surrounds every cell and controls what crosses in and out.',
      'Cytoplasm is the jelly-like substance filling the cell.',
      'Organelles sit within the cytoplasm.',
    ],
  },

  'the-nucleus': {
    slug: 'the-nucleus',
    title: 'The Nucleus',
    difficulty: 'easy',
    simpleExplanation:
      'The nucleus is the control centre of a eukaryotic cell. It is a membrane-bound structure ' +
      "that stores the cell's genetic material (DNA) and directs the cell's activities, including " +
      'growth and reproduction.',
    whyItMatters:
      "Because the nucleus holds the instructions (DNA) for building and running the whole cell, " +
      'it effectively controls everything else the cell does.',
    workedExample: {
      id: 'nucleus-worked-1',
      title: 'Predict the effect of removing the nucleus',
      problemStatement: "A cell's nucleus is removed in an experiment. Predict what will eventually happen to the cell.",
      steps: [
        { step: 1, instruction: 'Recall what the nucleus controls.', explanation: 'The nucleus stores DNA and directs protein production and cell activity.' },
        { step: 2, instruction: 'Consider what happens without those instructions.', explanation: "Without DNA instructions, the cell can't replace worn-out proteins or divide." },
      ],
      finalAnswer: 'The cell will eventually be unable to function or reproduce, and will die.',
    },
    whyItWorks:
      "Because DNA contains the instructions for every protein the cell needs, removing the " +
      "nucleus cuts the cell off from its own instruction manual — it can keep running briefly on " +
      "existing proteins, but can't replace them or divide.",
    realLifeExample: {
      title: 'Red blood cells vs. other body cells',
      scenario: 'Mature human red blood cells have no nucleus, unlike almost every other cell in the body.',
      explanation: "Because they lack a nucleus, red blood cells can't repair themselves or divide — which is why the body has to replace them roughly every 120 days.",
    },
    practiceQuestions: [
      {
        id: 'nucleus-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What does the nucleus mainly store?',
        options: [
          { id: 'a', text: 'Energy' },
          { id: 'b', text: 'Water' },
          { id: 'c', text: 'Genetic material (DNA)' },
          { id: 'd', text: 'Sugars' },
        ],
        correctOptionId: 'c',
        hints: ['Think about what the nucleus is famous for controlling.', "It's related to inheritance and instructions."],
        explanation: "The nucleus stores the cell's DNA — its genetic instructions.",
      },
    ],
    commonMistake:
      "Thinking the nucleus produces energy for the cell — that's the mitochondria's job, not the nucleus's.",
    quickReview: [
      'The nucleus is the control centre of a eukaryotic cell.',
      "It stores the cell's DNA.",
      "It directs the cell's growth, activity, and reproduction.",
    ],
  },

  'mitochondria-and-ribosomes': {
    slug: 'mitochondria-and-ribosomes',
    title: 'Mitochondria and Ribosomes',
    difficulty: 'medium',
    simpleExplanation:
      "Mitochondria are the 'powerhouses' of the cell — they release energy from food through " +
      'respiration. Ribosomes are much smaller structures, found either floating free in the ' +
      'cytoplasm or attached to the endoplasmic reticulum, where they build proteins.',
    whyItMatters:
      'Every cell needs a constant energy supply (from mitochondria) and needs to constantly build ' +
      'new proteins (via ribosomes) — these two organelles keep the cell powered and equipped.',
    workedExample: {
      id: 'mitochondria-worked-1',
      title: 'Explain a difference in mitochondria count',
      problemStatement: 'Muscle cells, which do a lot of physical work, contain far more mitochondria than skin cells. Explain why.',
      steps: [
        { step: 1, instruction: 'Recall what mitochondria do.', explanation: 'Mitochondria release energy from food through respiration.' },
        { step: 2, instruction: 'Connect this to muscle activity.', explanation: 'Muscle contraction needs a large, constant energy supply.' },
      ],
      finalAnswer: 'Muscle cells need much more energy for contraction than skin cells do, so they contain more mitochondria to supply it.',
    },
    whyItWorks:
      'The number of mitochondria in a cell tends to match how much energy that cell needs — ' +
      'cells with a high energy demand contain more of the very organelle that supplies energy.',
    realLifeExample: {
      title: 'Why athletes have more mitochondria',
      scenario: 'Endurance training increases the number of mitochondria in muscle cells over time.',
      explanation: "This is a direct, measurable example of the link between energy demand and mitochondria number — trained muscles can sustain more activity because they have more 'powerhouses.'",
    },
    practiceQuestions: [
      {
        id: 'mitochondria-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Where are proteins built in a cell?',
        options: [
          { id: 'a', text: 'Mitochondria' },
          { id: 'b', text: 'Nucleus' },
          { id: 'c', text: 'Ribosomes' },
          { id: 'd', text: 'Cell membrane' },
        ],
        correctOptionId: 'c',
        hints: ['Think about which organelle is directly responsible for protein synthesis.', "Not the nucleus — that just stores the instructions."],
        explanation: 'Ribosomes are the site of protein synthesis, using instructions copied from DNA in the nucleus.',
      },
    ],
    commonMistake:
      'Mixing up the roles of the nucleus and ribosomes — the nucleus stores the DNA instructions, ' +
      'but ribosomes are where those instructions are actually used to build proteins.',
    quickReview: [
      'Mitochondria release energy from food through respiration.',
      'Ribosomes build proteins.',
      'Cells with high energy needs (like muscle cells) contain more mitochondria.',
    ],
  },

  'endoplasmic-reticulum-and-golgi-apparatus': {
    slug: 'endoplasmic-reticulum-and-golgi-apparatus',
    title: 'Endoplasmic Reticulum and Golgi Apparatus',
    difficulty: 'medium',
    simpleExplanation:
      'The endoplasmic reticulum (ER) is a network of membranes that transports materials, ' +
      'especially proteins, around the cell. The Golgi apparatus is a stack of flattened membranes ' +
      'that processes, packages, and ships those proteins to where they are needed, inside or ' +
      'outside the cell.',
    whyItMatters:
      'A cell is like a small factory: the ER is the internal transport network, and the Golgi ' +
      'apparatus is the packaging and shipping department — together they get finished products ' +
      '(proteins) to the right place.',
    workedExample: {
      id: 'er-golgi-worked-1',
      title: 'Order the protein secretion pathway',
      problemStatement:
        'A protein is made by a ribosome on the ER and needs to be secreted outside the cell. Put ' +
        'the following in the correct order: Golgi apparatus, ribosome, cell membrane, endoplasmic reticulum.',
      steps: [
        { step: 1, instruction: 'Start where the protein is made.', math: 'Ribosome', explanation: 'Proteins are built by ribosomes.' },
        { step: 2, instruction: 'Follow the transport network.', math: 'Endoplasmic reticulum', explanation: 'The ER transports the newly made protein.' },
        { step: 3, instruction: 'Follow the processing/packaging step.', math: 'Golgi apparatus', explanation: 'The Golgi apparatus processes and packages the protein.' },
        { step: 4, instruction: 'Follow it to its exit point.', math: 'Cell membrane', explanation: 'The protein is released through the cell membrane.' },
      ],
      finalAnswer: 'Ribosome → Endoplasmic reticulum → Golgi apparatus → Cell membrane.',
    },
    whyItWorks:
      'Each structure in this chain hands the protein off to the next, similar to a factory ' +
      'production line — this ordered handoff is what lets a cell reliably build, process and ' +
      'deliver complex molecules.',
    realLifeExample: {
      title: 'Insulin-producing cells',
      scenario: 'Cells in the pancreas produce and release insulin using exactly this ER → Golgi → membrane pathway.',
      explanation: "The same organelle 'production line' that ships out an ordinary protein is what lets pancreas cells manufacture and release insulin into the bloodstream.",
    },
    practiceQuestions: [
      {
        id: 'er-golgi-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the main role of the Golgi apparatus?',
        options: [
          { id: 'a', text: 'Storing DNA' },
          { id: 'b', text: 'Processing and packaging proteins' },
          { id: 'c', text: 'Releasing energy' },
          { id: 'd', text: 'Controlling water balance' },
        ],
        correctOptionId: 'b',
        hints: ['Think of it as a packaging and shipping department.', 'It works closely with the ER but has a different specific job.'],
        explanation: 'The Golgi apparatus processes, packages and ships proteins to where they are needed.',
      },
    ],
    commonMistake:
      'Treating the ER and Golgi apparatus as the same structure — the ER transports materials, ' +
      'while the Golgi apparatus processes and packages them; they work together but do different jobs.',
    quickReview: [
      'The endoplasmic reticulum (ER) transports materials, especially proteins, around the cell.',
      'The Golgi apparatus processes, packages, and ships proteins.',
      "Together they form part of a cell's internal 'production line.'",
    ],
  },

  'plant-cell-structures': {
    slug: 'plant-cell-structures',
    title: 'Plant Cell Structures',
    difficulty: 'medium',
    simpleExplanation:
      "Plant cells have three extra structures that animal cells don't: a rigid cell wall outside " +
      'the cell membrane for support, a large central vacuole that stores water and keeps the cell ' +
      'firm, and chloroplasts that capture sunlight to make food through photosynthesis.',
    whyItMatters:
      "These three additions are exactly what a plant cell needs to do things an animal cell " +
      "doesn't: stay rigid without a skeleton, store enough water to survive dry spells, and make " +
      'its own food from sunlight.',
    diagram: {
      id: 'plant-cell-diagram',
      title: 'Plant cell',
      altText: 'A labelled diagram of a plant cell showing the cell wall, vacuole, chloroplasts, nucleus, mitochondria and other organelles',
      component: 'CellDiagram',
      interactive: false,
      props: { type: 'plant' },
    },
    workedExample: {
      id: 'plant-cell-worked-1',
      title: 'Identify plant-specific structures',
      problemStatement:
        'A leaf cell viewed under a microscope shows a rigid rectangular outline, a large ' +
        'fluid-filled space, and small green structures. Identify the three plant-specific structures shown.',
      steps: [
        { step: 1, instruction: 'Match the rigid rectangular outline.', math: 'Cell wall', explanation: 'The cell wall gives plant cells their fixed, box-like shape.' },
        { step: 2, instruction: 'Match the large fluid-filled space.', math: 'Vacuole', explanation: 'The vacuole is a large, water-filled sac in mature plant cells.' },
        { step: 3, instruction: 'Match the small green structures.', math: 'Chloroplasts', explanation: 'Chloroplasts contain the green pigment chlorophyll, used in photosynthesis.' },
      ],
      finalAnswer: 'Cell wall, vacuole, and chloroplasts.',
    },
    whyItWorks:
      'Each structure solves a specific problem plants face: the rigid cell wall replaces the need ' +
      'for a skeleton, the vacuole\'s water pressure (turgor) keeps stems and leaves upright, and ' +
      'chloroplasts let the plant make its own energy source directly from light.',
    realLifeExample: {
      title: 'Why a wilted plant perks back up after watering',
      scenario: 'A drooping houseplant looks upright again within hours of being watered.',
      explanation: "Water refills the vacuoles in its cells, restoring the internal pressure (turgor) that keeps the plant's stems and leaves rigid — a direct, visible demonstration of what the vacuole does.",
    },
    practiceQuestions: [
      {
        id: 'plant-cell-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which structure allows plant cells to carry out photosynthesis?',
        options: [
          { id: 'a', text: 'Vacuole' },
          { id: 'b', text: 'Cell wall' },
          { id: 'c', text: 'Chloroplast' },
          { id: 'd', text: 'Mitochondria' },
        ],
        correctOptionId: 'c',
        hints: ['Think about which structure is green.', 'Chlorophyll — the pigment used in photosynthesis — is found here.'],
        explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.',
      },
      {
        id: 'plant-cell-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the main function of the plant cell wall?',
        options: [
          { id: 'a', text: 'Store water' },
          { id: 'b', text: 'Provide rigid structural support' },
          { id: 'c', text: 'Produce energy' },
          { id: 'd', text: 'Store genetic material' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what gives a plant its shape without a skeleton.', "It's a structural, not chemical, function."],
        explanation: 'The cell wall provides rigid support, giving plant cells (and the plant overall) their shape and structure.',
      },
    ],
    commonMistake:
      'Assuming animal cells also have a cell wall, vacuole, and chloroplasts — these three ' +
      'structures are specific to plant cells.',
    quickReview: [
      'Plant cells have a rigid cell wall for support.',
      'A large central vacuole stores water and keeps the cell firm.',
      'Chloroplasts capture sunlight for photosynthesis.',
    ],
  },

  'animal-vs-plant-cells': {
    slug: 'animal-vs-plant-cells',
    title: 'Animal vs. Plant Cells',
    difficulty: 'medium',
    simpleExplanation:
      'Animal and plant cells share the same basic eukaryotic structures — a nucleus, cytoplasm, ' +
      'cell membrane, mitochondria, and ribosomes — but plant cells add a cell wall, chloroplasts, ' +
      'and a large permanent vacuole, while animal cells are usually more irregular in shape.',
    whyItMatters:
      'Comparing the two cell types side by side is the fastest way to identify which type of cell ' +
      'you are looking at under a microscope, and to understand why plants and animals live so differently.',
    workedExample: {
      id: 'compare-cells-worked-1',
      title: 'Identify a cell type from its features',
      problemStatement:
        'A cell viewed under a microscope has an irregular (non-rectangular) outline and no ' +
        'visible cell wall or chloroplasts. Is it more likely an animal or plant cell?',
      steps: [
        { step: 1, instruction: 'Check for a cell wall.', explanation: 'A cell wall gives a fixed, regular shape — its absence suggests no rigid outer boundary.' },
        { step: 2, instruction: 'Check for chloroplasts.', explanation: 'Chloroplasts (green structures) are unique to plant cells.' },
      ],
      finalAnswer: 'It is more likely an animal cell — irregular shape and no cell wall or chloroplasts.',
    },
    whyItWorks:
      'Because the cell wall, chloroplasts, and large permanent vacuole are structures unique to ' +
      'plant cells, their absence — combined with a more irregular outline — is strong evidence ' +
      'the cell is from an animal, not a plant.',
    realLifeExample: {
      title: 'Comparing cheek cells and onion cells in a school microscopy lab',
      scenario: 'A classic biology lab compares human cheek cells to onion skin cells under a microscope.',
      explanation: 'Cheek cells (animal) look round and irregular with no visible wall; onion cells (plant) appear as neat rectangular boxes with visible cell walls — a hands-on version of this comparison.',
    },
    practiceQuestions: [
      {
        id: 'compare-cells-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which structure is found in BOTH animal and plant cells?',
        options: [
          { id: 'a', text: 'Cell wall' },
          { id: 'b', text: 'Chloroplast' },
          { id: 'c', text: 'Mitochondria' },
          { id: 'd', text: 'Large permanent vacuole' },
        ],
        correctOptionId: 'c',
        hints: ['Think about which organelles are shared by all eukaryotic cells.', 'Both cell types need to release energy from food.'],
        explanation: 'Mitochondria are found in both animal and plant cells; the cell wall, chloroplasts, and large permanent vacuole are plant-specific.',
      },
    ],
    commonMistake:
      "Assuming plant cells don't have mitochondria because they have chloroplasts — plant cells " +
      'need both: chloroplasts to make food via photosynthesis, and mitochondria to release energy ' +
      'from that food via respiration.',
    quickReview: [
      'Both cell types share a nucleus, cytoplasm, membrane, mitochondria, and ribosomes.',
      'Only plant cells have a cell wall, chloroplasts, and a large permanent vacuole.',
      'Animal cells are usually more irregular in shape.',
    ],
  },

  'microscopy-and-magnification': {
    slug: 'microscopy-and-magnification',
    title: 'Microscopy and Magnification',
    difficulty: 'medium',
    simpleExplanation:
      'Cells are far too small to see with the naked eye, so biologists use microscopes to magnify ' +
      'them. Magnification tells you how many times bigger the image is compared to the actual, ' +
      'real-life size of the object.',
    whyItMatters:
      'Understanding magnification lets you correctly interpret what you are seeing under a ' +
      'microscope, including how big the real structures actually are.',
    formulaSlug: 'magnification-formula',
    workedExample: {
      id: 'magnification-worked-1',
      title: 'Calculate magnification',
      problemStatement: 'A cell has an actual diameter of 20 micrometres (μm). Its image under the microscope measures 60 mm across. What is the magnification?',
      steps: [
        { step: 1, instruction: 'Convert both measurements to the same unit.', math: '20 μm = 0.02 mm', explanation: '1 mm = 1000 μm, so 20 μm = 20/1000 mm = 0.02 mm.' },
        { step: 2, instruction: 'Apply the magnification formula.', math: 'Magnification = Image size / Actual size', explanation: 'Divide the size of the image by the real size of the object.' },
        { step: 3, instruction: 'Substitute the values.', math: 'Magnification = 60 / 0.02 = 3000', explanation: '60 mm divided by 0.02 mm.' },
      ],
      finalAnswer: 'Magnification = ×3000',
    },
    whyItWorks:
      'Magnification is simply a ratio — how many times larger the image is than the real object ' +
      '— so as long as both measurements are converted to the same unit first, dividing image ' +
      'size by actual size always gives that ratio correctly.',
    realLifeExample: {
      title: 'Reading the magnification on a microscope',
      scenario: 'A school microscope objective lens is labelled ×40, combined with a ×10 eyepiece.',
      explanation: 'Multiplying the two (40 × 10 = ×400 total magnification) tells you how many times bigger the image you see is compared to the real specimen — using this same idea.',
    },
    practiceQuestions: [
      {
        id: 'magnification-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: "An image of a cell measures 5 mm across. The actual cell is 0.05 mm across. What is the magnification? (Give just the number.)",
        hints: ['Magnification = image size / actual size.', '5 divided by 0.05.'],
        correctAnswer: 100,
        explanation: 'Magnification = 5 / 0.05 = 100 (×100).',
      },
      {
        id: 'magnification-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "A cell's actual size is 25 micrometres. Under a microscope its image measures 2.5 mm. What is the magnification? (Convert units first; give just the number.)",
        hints: ['Convert 25 micrometres to millimetres first: 25/1000 = 0.025 mm.', 'Magnification = 2.5 / 0.025.'],
        correctAnswer: 100,
        explanation: 'μm = 0.025 mm. Magnification = 2.5 / 0.025 = 100 (×100).',
      },
    ],
    commonMistake:
      'Forgetting to convert both measurements to the same unit before dividing — mixing ' +
      'millimetres and micrometres gives a magnification that is wrong by a factor of 1000.',
    quickReview: [
      'Magnification = Image size / Actual size',
      'Always convert both sizes to the same unit first.',
      'Magnification tells you how many times bigger the image is than the real object.',
    ],
  },

  'cell-specialization-and-organization': {
    slug: 'cell-specialization-and-organization',
    title: 'Cell Specialization and Organization',
    difficulty: 'medium',
    simpleExplanation:
      'Not all cells in a multicellular organism are the same — cells specialize (differentiate) ' +
      'into different types suited to different jobs. Similar specialized cells group together to ' +
      'form tissues, tissues combine to form organs, and organs work together as organ systems.',
    whyItMatters:
      'This hierarchy — cell → tissue → organ → organ system — is how complex living things build ' +
      'large, coordinated bodies out of trillions of individually tiny cells.',
    workedExample: {
      id: 'organization-worked-1',
      title: 'Trace the levels of organization',
      problemStatement:
        'A muscle cell is long and thin with the ability to contract; many of these cells are ' +
        'bundled together to move a bone. Identify the level of organization at each stage.',
      steps: [
        { step: 1, instruction: 'Identify the single muscle cell.', math: 'Cell', explanation: 'The individual specialized muscle cell is the starting point.' },
        { step: 2, instruction: 'Identify a bundle of similar muscle cells working together.', math: 'Tissue', explanation: 'A group of similar cells performing the same function is a tissue — here, muscle tissue.' },
        { step: 3, instruction: 'Identify muscle tissue combined with other tissues into one structure.', math: 'Organ', explanation: 'A muscle, as a whole structure made of several tissue types, is an organ.' },
        { step: 4, instruction: 'Identify several muscles and bones working together.', math: 'Organ system', explanation: 'The muscular and skeletal systems working together form the musculoskeletal organ system.' },
      ],
      finalAnswer: 'Cell → tissue → organ → organ system.',
    },
    whyItWorks:
      'Each level is built from the one before it — cells that specialize for the same job group ' +
      'into tissues, different tissues combine into organs with a specific role, and organs ' +
      'cooperate as systems — so complexity increases without any single level having to do everything.',
    realLifeExample: {
      title: 'Why a heart needs more than just muscle cells',
      scenario: 'The heart is an organ built from muscle tissue, nerve tissue (to trigger contractions), and connective tissue (valves).',
      explanation: 'No single cell type could pump blood on its own — it takes this whole hierarchy, cells organized into tissues and tissues organized into an organ, working together.',
    },
    practiceQuestions: [
      {
        id: 'organization-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Put these in order from smallest to largest: organ, tissue, cell, organ system.',
        options: [
          { id: 'a', text: 'Cell → tissue → organ → organ system' },
          { id: 'b', text: 'Tissue → cell → organ system → organ' },
          { id: 'c', text: 'Organ → tissue → cell → organ system' },
          { id: 'd', text: 'Cell → organ → tissue → organ system' },
        ],
        correctOptionId: 'a',
        hints: ['Start with the smallest unit of life.', 'Cells group into tissues; tissues group into organs; organs group into systems.'],
        explanation: 'The correct order, smallest to largest, is cell → tissue → organ → organ system.',
      },
    ],
    commonMistake:
      'Assuming an organ is made of only one type of tissue — most organs (like the heart) are ' +
      'built from several different tissue types working together.',
    quickReview: [
      'Cells specialize (differentiate) for different jobs.',
      'Similar specialized cells group into tissues.',
      'Tissues combine into organs, and organs cooperate as organ systems.',
    ],
  },
};
