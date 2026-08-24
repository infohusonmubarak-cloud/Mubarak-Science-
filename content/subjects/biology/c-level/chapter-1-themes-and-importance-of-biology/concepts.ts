import type { Concept } from '@/types/content';

export const chapter1ThemesConcepts: Record<string, Concept> = {
  'emergent-properties-in-biological-organization': {
    slug: 'emergent-properties-in-biological-organization',
    title: 'Theme 1: New Properties Emerge at Successive Levels of Organization',
    difficulty: 'medium',
    simpleExplanation:
      'Biology is organized in a hierarchy — atoms, molecules, organelles, cells, tissues, organs, ' +
      'organ systems, organisms, populations, communities, ecosystems, and the biosphere. At each ' +
      'step up this hierarchy, entirely new properties "emerge" that did not exist at the level below ' +
      '— properties that come from how the parts are ARRANGED and INTERACT, not just from the parts ' +
      'themselves.',
    whyItMatters:
      "This is why you can't fully understand life by studying its individual chemical parts alone " +
      "— it explains why biology needs to be studied at many levels at once, and why breaking a living " +
      "system down into its pieces (however useful) always loses something important about how the " +
      "whole thing actually works.",
    whyItWorks:
      'A property is "emergent" when it arises specifically from the interactions and organization of ' +
      'parts, not from any single part in isolation — a single water molecule cannot be described as ' +
      '"wet," but trillions of them, interacting together, produce the emergent property of wetness. ' +
      'The same logic scales up biology\'s entire hierarchy: individual organelles cannot "live," but ' +
      'organized together as a cell, life emerges.',
    realLifeExample: {
      title: 'A living cell versus its individual molecules',
      scenario: "If you could line up every individual molecule from a living cell separately, none of them, alone, would be 'alive.'",
      explanation: 'Life itself is an emergent property of a cell as an organized SYSTEM — it depends entirely on how DNA, proteins, membranes, and thousands of other molecules are structurally arranged and interacting, not on the presence of any single molecule by itself.',
    },
    practiceQuestions: [
      {
        id: 'emergent-properties-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What does it mean for a property to be "emergent"?',
        options: [
          { id: 'a', text: 'It is present in every individual part, at every level.' },
          { id: 'b', text: 'It arises from how parts are organized and interact, not from any single part alone.' },
          { id: 'c', text: 'It only applies to non-living systems.' },
          { id: 'd', text: 'It disappears as organization increases.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about the wetness-of-water example — does a single water molecule have it?'],
        explanation: 'An emergent property arises specifically from the arrangement and interaction of parts at a given level of organization — it is not a property any single part possesses on its own.',
      },
    ],
    commonMistake:
      "Assuming you can fully understand a living system just by listing and understanding all of its " +
      "individual chemical components — emergent properties mean the organized WHOLE has properties " +
      "the disassembled parts do not, so organization itself must be studied, not just composition.",
    quickReview: [
      'Biology is organized in a hierarchy: atoms → molecules → cells → ... → biosphere.',
      'New properties emerge at each level, from how parts are organized and interact.',
      'Emergent properties cannot be found in any single lower-level part alone.',
    ],
  },

  'genetic-information-in-life-processes': {
    slug: 'genetic-information-in-life-processes',
    title: "Theme 2: Life's Processes Involve the Expression and Transmission of Genetic Information",
    difficulty: 'medium',
    simpleExplanation:
      "Every living thing's traits, growth, and functioning are directed by genetic information stored " +
      "in DNA — this information is both EXPRESSED (used to build and run the organism) and " +
      "TRANSMITTED (passed on to offspring), generation after generation.",
    whyItMatters:
      'This theme is the thread that ties together an enormous range of biology — from how a single ' +
      'fertilized egg develops into a complex organism, to why children resemble their parents, to how ' +
      'evolution itself works at a molecular level.',
    whyItWorks:
      "DNA stores information as a sequence of just four bases, which cells read (express) to build " +
      "specific proteins that carry out nearly every function in the body — and because DNA is copied " +
      "and passed to offspring during reproduction (transmission), the instructions for building and " +
      "running an organism persist across generations, with occasional variations that are the raw " +
      "material for evolution.",
    realLifeExample: {
      title: 'Family resemblance',
      scenario: 'Children often resemble their parents in eye colour, height tendency, or other traits.',
      explanation: "This resemblance exists because genetic information (DNA) is transmitted from parents to offspring during reproduction, and that inherited information is then expressed as the child's own physical traits as they develop.",
    },
    practiceQuestions: [
      {
        id: 'genetic-info-theme-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What are the TWO key processes this theme describes for genetic information?',
        options: [
          { id: 'a', text: 'Digestion and respiration' },
          { id: 'b', text: 'Expression (using it to build/run the organism) and transmission (passing it to offspring)' },
          { id: 'c', text: 'Photosynthesis and fermentation' },
          { id: 'd', text: 'Mitosis and meiosis only' },
        ],
        correctOptionId: 'b',
        hints: ['One process happens within an individual organism; the other happens between generations.'],
        explanation: 'Genetic information is both expressed (used within an organism to build and direct it) and transmitted (passed on to the next generation) — these two processes together are the core of this theme.',
      },
    ],
    commonMistake:
      "Thinking of DNA as only relevant to reproduction and heredity — DNA's information is also " +
      "constantly being expressed throughout an organism's entire life (via proteins) to build " +
      "tissues, run metabolism, and respond to the environment, not just at the moment of reproduction.",
    quickReview: [
      'Genetic information (DNA) directs how organisms are built and function.',
      'Expression: using genetic information within an organism.',
      'Transmission: passing genetic information to offspring.',
    ],
  },

  'energy-and-matter-transfer-in-life': {
    slug: 'energy-and-matter-transfer-in-life',
    title: 'Theme 3: Life Requires the Transfer and Transformation of Energy and Matter',
    difficulty: 'medium',
    simpleExplanation:
      'Every living process — growth, movement, reproduction, maintaining body temperature — requires ' +
      'a continuous supply of energy and matter, which organisms obtain from their environment, ' +
      'transform into usable forms, and eventually release back to the environment.',
    whyItMatters:
      "This theme connects individual organisms to the wider flow of energy and matter through entire " +
      "ecosystems — energy flows one-way (mostly from the Sun, through organisms, out as heat), while " +
      "matter (like carbon and nitrogen) cycles and is reused repeatedly.",
    whyItWorks:
      "Living organisms are not closed, self-sufficient systems — the laws of thermodynamics require a " +
      "constant energy input to do biological work and offset the natural tendency toward disorder. " +
      "Plants capture energy from sunlight and transform it into chemical energy (photosynthesis); " +
      "animals obtain that energy by eating plants or other animals, transforming it further to power " +
      "their own life processes.",
    realLifeExample: {
      title: 'Energy flow from the Sun to your body',
      scenario: 'The energy that powers your muscles today ultimately traces back to sunlight.',
      explanation: 'Sunlight is captured and transformed into chemical energy by plants (photosynthesis); eating those plants (or animals that ate them) transfers that stored chemical energy to you, where it is transformed again to power your cells — a continuous chain of energy transfer and transformation.',
    },
    practiceQuestions: [
      {
        id: 'energy-matter-theme-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can living organisms not be considered self-sufficient, closed systems?',
        options: [
          { id: 'a', text: 'They constantly require an input of energy and matter from their environment to sustain life processes.' },
          { id: 'b', text: 'Living organisms do not actually need energy.' },
          { id: 'c', text: 'Matter and energy are unrelated to biology.' },
          { id: 'd', text: 'Organisms produce their own energy from nothing.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about what happens to an organism that's cut off from all outside energy and matter."],
        explanation: 'Living organisms must continuously obtain and transform energy and matter from their surroundings to grow, move, and maintain themselves — they cannot generate what they need from nothing.',
      },
    ],
    commonMistake:
      "Confusing how energy and matter each move through ecosystems — energy flows mostly one-way " +
      "(entering as sunlight, exiting eventually as heat) and cannot be recycled, while matter (like " +
      "carbon and nitrogen atoms) is continuously cycled and reused by living systems.",
    quickReview: [
      'All life processes require a continuous supply of energy and matter.',
      'Energy flows mostly one-way (Sun → organisms → heat); matter cycles and is reused.',
      'Energy is captured (e.g. photosynthesis) and transformed repeatedly along food chains.',
    ],
  },

  'interactions-in-biological-systems': {
    slug: 'interactions-in-biological-systems',
    title: 'Theme 4: Molecules to Ecosystems — Interactions in Biological Systems',
    difficulty: 'easy',
    simpleExplanation:
      'At every level of biological organization — from molecules interacting within a cell, to ' +
      'organisms interacting within an ecosystem — living systems function through constant ' +
      'interactions between their parts, not through parts working in isolation.',
    whyItMatters:
      "This theme reinforces that biology cannot be fully understood by studying any single component " +
      "in isolation — a cell's function depends on how its molecules interact, an organism's health " +
      "depends on how its organ systems interact, and an ecosystem's stability depends on how its " +
      "species interact.",
    whyItWorks:
      "Interaction is what turns a mere collection of parts into a functioning system — a heart cell " +
      "alone cannot pump blood; it must interact electrically and mechanically with billions of other " +
      "heart cells. A single species alone does not form an ecosystem; it must interact with other " +
      "species (competition, predation, symbiosis) and its physical environment for an ecosystem to " +
      "function.",
    realLifeExample: {
      title: 'A predator-prey relationship shaping an ecosystem',
      scenario: 'Wolves reintroduced to Yellowstone National Park changed the behaviour of deer, which in turn allowed vegetation (and even rivers) to change.',
      explanation: 'This famous case shows interaction across many levels at once: wolves (predators) interacting with deer (prey) changed deer grazing behaviour, which changed plant growth patterns, which changed the physical landscape — a clear demonstration of how interactions ripple through an entire ecosystem.',
    },
    practiceQuestions: [
      {
        id: 'interactions-theme-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the central idea of this theme?',
        options: [
          { id: 'a', text: 'Every biological component functions best in complete isolation.' },
          { id: 'b', text: 'Living systems function through constant interactions between their parts, at every level.' },
          { id: 'c', text: 'Only molecules interact; organisms and ecosystems do not.' },
          { id: 'd', text: 'Interactions only matter in ecosystems, not within organisms.' },
        ],
        correctOptionId: 'b',
        hints: ['The theme title spans from the smallest scale (molecules) to the largest (ecosystems).'],
        explanation: 'This theme emphasizes that interaction — not isolated parts — is what makes biological systems function, at every scale from molecules within a cell to species within an ecosystem.',
      },
    ],
    commonMistake:
      "Assuming this theme only applies to ecology (species interacting in nature) — it applies " +
      "equally at the molecular and cellular level, where interactions between molecules and cells are " +
      "just as essential to how living systems function.",
    quickReview: [
      'Interaction, not isolation, is how biological systems actually function.',
      'This applies at every level: molecules, cells, organisms, and ecosystems.',
      "A famous example: wolves' interactions with deer reshaped an entire ecosystem in Yellowstone.",
    ],
  },

  'evolution-and-the-diversity-of-life': {
    slug: 'evolution-and-the-diversity-of-life',
    title: 'Theme 5: Evolution for the Unity and Diversity of Life',
    difficulty: 'medium',
    simpleExplanation:
      'Evolution — the change in populations over generations, driven mainly by natural selection — ' +
      'explains both the incredible DIVERSITY of life on Earth (millions of different species) and the ' +
      'underlying UNITY of life (all living things share fundamental features, like using DNA and ' +
      'similar basic cell structures).',
    whyItMatters:
      'Evolution is often called the single unifying theory of biology because it explains, in one ' +
      'framework, both why living things are so different from each other AND why they are, at a ' +
      'deep level, so fundamentally similar — a species evolves and diversifies, but always builds on ' +
      'the shared biological "toolkit" it inherited.',
    whyItWorks:
      'All life shares a common ancestor, which is why fundamental features (the genetic code, basic ' +
      'cell structure, core metabolic pathways) are shared across nearly all living things — this is ' +
      'the "unity." At the same time, natural selection acting differently on different populations, ' +
      'in different environments, over vast timescales, has produced the enormous variety of species ' +
      'alive today — this is the "diversity."',
    realLifeExample: {
      title: "Darwin's finches",
      scenario: "Different finch species on the Galápagos Islands have distinctly different beak shapes, each suited to a different food source.",
      explanation: "These finches share a common ancestor (unity) but evolved different beak shapes through natural selection as they adapted to different available foods on different islands (diversity) — a classic, direct illustration of evolution producing both unity and diversity.",
    },
    practiceQuestions: [
      {
        id: 'evolution-theme-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How does evolution explain BOTH the unity and the diversity of life?',
        options: [
          { id: 'a', text: 'Common ancestry explains shared basic features (unity); natural selection acting differently across populations explains the variety of species (diversity).' },
          { id: 'b', text: 'Evolution only explains diversity, not unity.' },
          { id: 'c', text: 'All species evolved completely independently, with no shared ancestry.' },
          { id: 'd', text: 'Unity and diversity are unrelated to evolution.' },
        ],
        correctOptionId: 'a',
        hints: ["Think about what all living things share, versus what makes them different."],
        explanation: "Shared descent from common ancestors explains why all life shares fundamental features (unity), while natural selection acting on different populations in different environments explains how that shared starting point diversified into millions of species (diversity).",
      },
    ],
    commonMistake:
      "Thinking of evolution as only explaining how species BECOME DIFFERENT from each other — " +
      "evolution equally explains why all living things share deep similarities, since diversification " +
      "always builds on inherited features from a common ancestor.",
    quickReview: [
      'Evolution explains both the unity (shared features) and diversity (species variety) of life.',
      'Common ancestry produces unity; natural selection acting differently produces diversity.',
      "Darwin's finches are a classic example of evolution producing diversity from a shared ancestor.",
    ],
  },

  'agriculture-horticulture-and-hydroponics': {
    slug: 'agriculture-horticulture-and-hydroponics',
    title: 'Agriculture, Horticulture and Hydroponic Culture',
    difficulty: 'easy',
    simpleExplanation:
      'Biology underlies agriculture (large-scale crop and livestock farming), horticulture ' +
      '(growing fruits, vegetables, and ornamental plants, often more intensively), and hydroponic ' +
      'culture (growing plants without soil, in nutrient-rich water solutions) — all of which apply ' +
      "biological understanding of plant growth, nutrition, and reproduction to feed and support " +
      'human populations.',
    whyItMatters:
      "Understanding plant biology — how roots absorb nutrients, how photosynthesis works, what " +
      "conditions plants need to grow — directly determines how effectively humans can grow food, " +
      "which is fundamental to supporting the global population.",
    whyItWorks:
      "Hydroponic culture works because plants don't actually need SOIL itself — they need water, " +
      "dissolved mineral nutrients, and a way to anchor their roots and access oxygen, all of which " +
      "can be supplied directly through a nutrient solution, bypassing soil altogether. This is " +
      "possible only because biologists understand precisely which nutrients plant roots need to " +
      "absorb and in what form.",
    realLifeExample: {
      title: 'Hydroponic lettuce farms',
      scenario: 'Many modern indoor farms grow lettuce and leafy greens hydroponically, without any soil at all.',
      explanation: "By supplying roots directly with a precisely balanced nutrient solution and adequate light, hydroponic farms can grow crops faster, use less water than traditional soil farming, and operate in urban areas with no farmland — a direct, practical application of understanding plant nutrient uptake.",
    },
    practiceQuestions: [
      {
        id: 'agriculture-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why can plants grow successfully in hydroponic systems, without any soil?',
        options: [
          { id: 'a', text: 'Plants do not actually need any nutrients to grow.' },
          { id: 'b', text: 'Soil itself is not essential — plants need the water, dissolved nutrients, and oxygen that soil normally provides, which a nutrient solution can supply directly.' },
          { id: 'c', text: 'Hydroponic plants are not real plants.' },
          { id: 'd', text: 'Soil is only needed for photosynthesis.' },
        ],
        correctOptionId: 'b',
        hints: ["Think about what soil actually PROVIDES to a plant's roots."],
        explanation: "Soil is simply one way of delivering water, dissolved nutrients, and root support — a nutrient solution can supply the same essentials directly, which is exactly why hydroponic culture works.",
      },
    ],
    commonMistake:
      "Assuming hydroponically grown plants are somehow less 'natural' or nutritionally different — " +
      "the plants still carry out exactly the same biological processes (photosynthesis, nutrient " +
      "uptake) as soil-grown plants; only the method of nutrient delivery differs.",
    quickReview: [
      'Agriculture and horticulture apply plant biology to grow food and ornamental plants.',
      'Hydroponics grows plants in nutrient solution instead of soil.',
      'Plants need water, nutrients, and oxygen at the roots — not soil itself specifically.',
    ],
  },

  'aquaculture-and-livestock': {
    slug: 'aquaculture-and-livestock',
    title: 'Aquaculture and Livestock',
    difficulty: 'easy',
    simpleExplanation:
      'Aquaculture is the farming of aquatic organisms (fish, shrimp, shellfish) in controlled water ' +
      'environments; livestock farming is the raising of animals (cattle, poultry, pigs) for food and ' +
      'other products — both rely on biological knowledge of animal nutrition, reproduction, health, ' +
      'and growth.',
    whyItMatters:
      "As wild fish stocks decline and demand for animal protein grows, aquaculture and efficient " +
      "livestock farming — both grounded in applied biology — are increasingly essential to feeding " +
      "the global population sustainably.",
    whyItWorks:
      "Successful aquaculture and livestock farming depend on applying biological understanding: " +
      "knowing an animal's precise nutritional needs maximizes healthy growth, understanding " +
      "reproductive biology allows controlled breeding, and understanding disease biology (pathogens, " +
      "immunity) allows farmers to prevent and manage outbreaks in densely-farmed populations.",
    realLifeExample: {
      title: 'Shrimp farming',
      scenario: 'Shrimp farming has grown enormously as a source of seafood, supplementing declining wild shrimp catches.',
      explanation: "Successful shrimp farms rely on biological knowledge of shrimp life cycles, water quality requirements, and disease prevention to raise healthy shrimp populations in controlled ponds or tanks, rather than depending entirely on wild-caught shrimp.",
    },
    practiceQuestions: [
      {
        id: 'aquaculture-livestock-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why is aquaculture becoming increasingly important globally?',
        options: [
          { id: 'a', text: 'Wild fish stocks are unlimited, so aquaculture is unnecessary.' },
          { id: 'b', text: 'As wild fish stocks decline and seafood demand grows, farming aquatic organisms helps meet demand sustainably.' },
          { id: 'c', text: 'Aquaculture has replaced all other forms of food production.' },
          { id: 'd', text: 'Fish cannot be eaten unless farmed.' },
        ],
        correctOptionId: 'b',
        hints: ['Consider the pressure on wild fish populations from overfishing.'],
        explanation: 'Aquaculture helps meet growing seafood demand while reducing pressure on declining wild fish populations, making it an increasingly important food source.',
      },
    ],
    commonMistake:
      "Assuming aquaculture and livestock farming are purely economic or agricultural activities with " +
      "no real biological content — in reality, both depend heavily on applied biology (nutrition, " +
      "reproduction, disease control) to be successful and humane.",
    quickReview: [
      'Aquaculture: farming aquatic organisms (fish, shrimp, shellfish) in controlled environments.',
      'Livestock farming: raising animals for food and other products.',
      'Both rely on biological knowledge of nutrition, reproduction, and disease.',
    ],
  },

  'biology-in-food-production': {
    slug: 'biology-in-food-production',
    title: 'Food',
    difficulty: 'easy',
    simpleExplanation:
      'Biology underlies nearly every aspect of food — from how crops and animals are grown, to how ' +
      'food is processed and preserved (fermentation, using microorganisms), to human digestion and ' +
      'nutrition itself.',
    whyItMatters:
      "Food security — having enough safe, nutritious food — is a fundamental human need directly " +
      "dependent on biological science, from improving crop yields to preventing foodborne disease to " +
      "understanding balanced human nutrition.",
    whyItWorks:
      "Many food production and preservation methods work through deliberate biological processes: " +
      "fermentation (used to make bread, yogurt, cheese, and many other foods) relies on specific " +
      "microorganisms metabolizing sugars into useful byproducts, while food preservation techniques " +
      "(refrigeration, drying, salting) work by slowing or preventing the biological growth of " +
      "spoilage microorganisms.",
    realLifeExample: {
      title: 'Yeast in bread-making',
      scenario: 'Bread rises because of yeast, a living microorganism, added to the dough.',
      explanation: 'Yeast (a fungus) ferments sugars in the dough, releasing carbon dioxide gas as a byproduct — the gas gets trapped in the dough\'s gluten structure, making it rise, an entirely biological process.',
    },
    practiceQuestions: [
      {
        id: 'food-biology-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why does bread dough rise when yeast is added?',
        options: [
          { id: 'a', text: 'Yeast is a chemical, not a living organism.' },
          { id: 'b', text: 'Yeast ferments sugars in the dough, releasing CO₂ gas that gets trapped and expands the dough.' },
          { id: 'c', text: 'Yeast has no biological effect on dough.' },
          { id: 'd', text: 'Yeast directly adds air to the dough.' },
        ],
        correctOptionId: 'b',
        hints: ['Yeast is a living microorganism carrying out a metabolic process.'],
        explanation: 'Yeast is a fungus that ferments sugars in the dough, producing carbon dioxide gas as a byproduct — this gas becomes trapped in the dough and causes it to rise.',
      },
    ],
    commonMistake:
      "Thinking of food preservation methods (drying, salting, refrigeration) as unrelated, purely " +
      "physical/chemical tricks — most work specifically by slowing or stopping the biological growth " +
      "of the microorganisms that cause food spoilage.",
    quickReview: [
      'Biology underlies food production, processing, preservation, and human nutrition.',
      'Fermentation uses microorganisms to produce foods like bread, yogurt, and cheese.',
      'Food preservation methods generally work by limiting microbial growth.',
    ],
  },

  'biology-in-health-and-medicine': {
    slug: 'biology-in-health-and-medicine',
    title: 'Health and Medicine',
    difficulty: 'easy',
    simpleExplanation:
      'Biology is the foundation of medicine — understanding how the human body works, how diseases ' +
      'develop, how pathogens cause infection, and how drugs and vaccines interact with the body all ' +
      'depend directly on biological knowledge.',
    whyItMatters:
      'Nearly every advance in modern healthcare — from antibiotics to vaccines to modern surgery to ' +
      'cancer treatment — is a direct application of biological research, making biology one of the ' +
      'most immediately life-saving sciences.',
    whyItWorks:
      "Medical treatments work by acting on specific biological mechanisms: antibiotics target " +
      "structures or processes unique to bacteria (not human cells), so they can kill bacterial " +
      "infections without harming the patient; vaccines work by training the immune system to " +
      "recognize a pathogen safely, using the body's own biological immune memory to provide future " +
      "protection.",
    realLifeExample: {
      title: 'Vaccines and immune memory',
      scenario: 'A person vaccinated against a disease is often protected for years, sometimes for life.',
      explanation: "A vaccine exposes the immune system to a harmless piece or weakened form of a pathogen, triggering the body to produce specific antibodies and memory cells — if the real pathogen is encountered later, the immune system 'remembers' it and responds much faster and more effectively.",
    },
    practiceQuestions: [
      {
        id: 'health-medicine-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why can antibiotics kill bacterial infections without harming human cells?',
        options: [
          { id: 'a', text: 'Antibiotics target biological structures or processes unique to bacteria, absent in human cells.' },
          { id: 'b', text: 'Antibiotics have no biological mechanism at all.' },
          { id: 'c', text: 'Human cells are identical to bacterial cells.' },
          { id: 'd', text: 'Antibiotics work by pure chance.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what makes bacterial cells structurally different from human cells.'],
        explanation: "Antibiotics are designed to target specific bacterial structures or processes (like bacterial cell walls or bacterial ribosomes) that differ from human cells, allowing them to kill bacteria selectively.",
      },
    ],
    commonMistake:
      "Assuming all medicines work through the same general mechanism — different drug classes " +
      "(antibiotics, antivirals, vaccines, painkillers) work through very different, specific " +
      "biological mechanisms tailored to their particular target.",
    quickReview: [
      'Medicine is fundamentally applied biology — understanding the body, disease, and treatment.',
      'Antibiotics target structures unique to bacteria, sparing human cells.',
      "Vaccines train the immune system's memory to respond faster to future infection.",
    ],
  },

  'biology-in-clothing-and-shelter': {
    slug: 'biology-in-clothing-and-shelter',
    title: 'Clothing and Shelter',
    difficulty: 'easy',
    simpleExplanation:
      'Many materials used for clothing (cotton, wool, silk, leather) and shelter (timber, bamboo) ' +
      'come directly from plants and animals — biological knowledge of how these organisms grow and ' +
      'produce these materials underlies their sustainable production and use.',
    whyItMatters:
      'Recognizing clothing and shelter materials as biological products — not just raw materials — ' +
      'connects everyday life directly to biological science, and highlights why sustainable farming ' +
      'and forestry practices (themselves grounded in biology) matter for these industries.',
    whyItWorks:
      "Cotton fibres are actually specialized plant hairs that grow from the cotton plant's seeds; wool " +
      "is animal hair (specifically keratin protein) grown by sheep; silk is a protein fibre produced " +
      "by silkworm larvae to build their cocoons — each material is the product of a specific " +
      "biological growth process that determines its natural properties (strength, texture, " +
      "insulation).",
    realLifeExample: {
      title: 'Silk production from silkworms',
      scenario: 'Silk fabric comes from the cocoons spun by silkworm larvae.',
      explanation: 'Silkworm larvae produce a continuous protein fibre from specialized glands to spin a protective cocoon before metamorphosing — this biological fibre-producing process is what farmers harvest (sericulture) to produce silk thread.',
    },
    practiceQuestions: [
      {
        id: 'clothing-shelter-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is silk fibre, biologically speaking?',
        options: [
          { id: 'a', text: 'A synthetic plastic material' },
          { id: 'b', text: 'A protein fibre produced by silkworm larvae to build their cocoons' },
          { id: 'c', text: 'A type of plant seed hair' },
          { id: 'd', text: 'Mineral fibre from rocks' },
        ],
        correctOptionId: 'b',
        hints: ['Think about which organism actually produces raw silk.'],
        explanation: 'Silk is a protein fibre produced by silkworm larvae specifically to spin the protective cocoon they use during metamorphosis.',
      },
    ],
    commonMistake:
      "Thinking of natural clothing materials (cotton, wool, silk) as simply 'harvested,' with no " +
      "biological process behind their production — each is the product of a specific, biologically " +
      "understood growth or secretion process in a living organism.",
    quickReview: [
      'Cotton: plant seed hair fibres. Wool: animal (sheep) hair protein. Silk: silkworm cocoon protein.',
      'Understanding these materials\' biological origins supports sustainable production.',
      'Many shelter materials (timber, bamboo) are also direct biological (plant) products.',
    ],
  },
};
