import type { Assessment } from '@/types/content';

export const chapter1ThemesAssessment: Assessment = {
  id: 'themes-and-importance-of-biology-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'tib-a1',
      part: 'concept',
      conceptSlug: 'emergent-properties-in-biological-organization',
      conceptTitle: 'Theme 1: New Properties Emerge at Successive Levels of Organization',
      question: {
        id: 'tib-a1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which statement best describes an "emergent property"?',
        options: [
          { id: 'a', text: 'A property present equally in every part, at every level of organization' },
          { id: 'b', text: 'A property that arises from how parts are organized and interact, not from any single part alone' },
          { id: 'c', text: 'A property that only exists in non-living matter' },
          { id: 'd', text: 'A property that vanishes as organization increases' },
        ],
        correctOptionId: 'b',
        hints: ['Recall the wetness-of-water example.'],
        explanation: 'Emergent properties arise from the arrangement and interaction of parts at a given level — they are not found in any single lower-level part alone.',
      },
    },
    {
      id: 'tib-a2',
      part: 'concept',
      conceptSlug: 'genetic-information-in-life-processes',
      conceptTitle: "Theme 2: Life's Processes Involve the Expression and Transmission of Genetic Information",
      question: {
        id: 'tib-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A cell uses its DNA to build a specific protein it needs. Which process does this represent?',
        options: [
          { id: 'a', text: 'Transmission' },
          { id: 'b', text: 'Expression' },
          { id: 'c', text: 'Emergence' },
          { id: 'd', text: 'Extinction' },
        ],
        correctOptionId: 'b',
        hints: ['Transmission is between generations; this is happening inside one living cell.'],
        explanation: 'Using genetic information within an organism to build and run it (e.g. making a protein) is expression; passing DNA to offspring is transmission.',
      },
    },
    {
      id: 'tib-a3',
      part: 'concept',
      conceptSlug: 'evolution-and-the-diversity-of-life',
      conceptTitle: 'Theme 5: Evolution for the Unity and Diversity of Life',
      question: {
        id: 'tib-a3-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'All living things sharing the same basic genetic code is evidence for which half of Theme 5?',
        options: [
          { id: 'a', text: 'Diversity, because the genetic code varies between species' },
          { id: 'b', text: 'Unity, because it points to a shared common ancestor' },
          { id: 'c', text: 'Neither — the genetic code is unrelated to evolution' },
          { id: 'd', text: 'Diversity, because every species reads its code differently' },
        ],
        correctOptionId: 'b',
        hints: ['A feature shared almost universally across life points to common ancestry.'],
        explanation: 'A near-universal shared genetic code is strong evidence that all life descends from a common ancestor — this is the "unity" half of Theme 5.',
      },
    },

    // Part B — Framework Application (this chapter has no formulas, so
    // this part applies the five biological themes as an analytical
    // framework instead of a numeric formula).
    {
      id: 'tib-b1',
      part: 'formula-application',
      conceptSlug: 'energy-and-matter-transfer-in-life',
      conceptTitle: 'Theme 3: Life Requires the Transfer and Transformation of Energy and Matter',
      question: {
        id: 'tib-b1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which of the following correctly distinguishes how energy and matter each move through an ecosystem?',
        options: [
          { id: 'a', text: 'Both energy and matter flow one-way and are never reused.' },
          { id: 'b', text: 'Energy flows mostly one-way (Sun → organisms → heat); matter cycles and is reused.' },
          { id: 'c', text: 'Matter flows one-way; energy cycles and is reused.' },
          { id: 'd', text: 'Neither energy nor matter moves through ecosystems.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about where carbon atoms end up versus where the heat from your body eventually goes.'],
        explanation: 'Energy enters mostly as sunlight and eventually leaves ecosystems as heat (one-way flow), while matter such as carbon and nitrogen is continually recycled and reused by living systems.',
      },
    },
    {
      id: 'tib-b2',
      part: 'formula-application',
      conceptSlug: 'interactions-in-biological-systems',
      conceptTitle: 'Theme 4: Molecules to Ecosystems — Interactions in Biological Systems',
      question: {
        id: 'tib-b2-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Reintroducing wolves to Yellowstone changed deer grazing, which changed plant growth, which changed river paths. Which theme does this scenario best illustrate?',
        options: [
          { id: 'a', text: 'Theme 4 — interactions ripple across levels of a biological system' },
          { id: 'b', text: 'Theme 2 — genetic information transmission' },
          { id: 'c', text: 'Theme 1 — emergent properties only apply to molecules' },
          { id: 'd', text: 'None of the themes apply to ecosystems' },
        ],
        correctOptionId: 'a',
        hints: ['This scenario spans predator, prey, plants, and even the physical landscape.'],
        explanation: 'This is the Yellowstone wolves example used to illustrate Theme 4 — interactions between organisms and their environment ripple through an entire ecosystem, from species behaviour all the way to the physical landscape.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'tib-c1',
      part: 'problem-solving',
      conceptSlug: 'agriculture-horticulture-and-hydroponics',
      conceptTitle: 'Agriculture, Horticulture and Hydroponic Culture',
      question: {
        id: 'tib-c1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A farmer wants to grow leafy greens indoors, year-round, without soil, using less water than a traditional field. Which approach directly applies biological knowledge of what roots actually need?',
        options: [
          { id: 'a', text: 'Growing the greens in ordinary garden soil indoors' },
          { id: 'b', text: 'Hydroponic culture, supplying water, dissolved nutrients, and oxygen directly to the roots' },
          { id: 'c', text: 'Withholding water and nutrients to force faster growth' },
          { id: 'd', text: 'Growing the greens in complete darkness' },
        ],
        correctOptionId: 'b',
        hints: ['What does soil actually provide to roots, and can it be supplied another way?'],
        explanation: "Since soil is not itself essential — roots need water, dissolved nutrients, and oxygen — hydroponic culture supplies these directly through a nutrient solution, achieving the farmer's goals.",
      },
    },
    {
      id: 'tib-c2',
      part: 'problem-solving',
      conceptSlug: 'biology-in-food-production',
      conceptTitle: 'Food',
      question: {
        id: 'tib-c2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Bread dough is left in a warm place before baking and it visibly rises. What biological process is most directly responsible?',
        options: [
          { id: 'a', text: 'Warm air physically stretches the dough.' },
          { id: 'b', text: 'Yeast ferments sugars in the dough, releasing CO₂ gas that becomes trapped and expands it.' },
          { id: 'c', text: 'The flour itself expands when warmed.' },
          { id: 'd', text: 'Salt in the dough produces gas when warmed.' },
        ],
        correctOptionId: 'b',
        hints: ['Yeast is a living microorganism carrying out a metabolic process in the dough.'],
        explanation: 'Yeast, a living fungus, ferments sugars in the dough and releases carbon dioxide gas as a byproduct — the trapped gas is what makes the dough rise.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'tib-d1',
      part: 'real-life-application',
      conceptSlug: 'biology-in-health-and-medicine',
      conceptTitle: 'Health and Medicine',
      question: {
        id: 'tib-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A person vaccinated years ago against a disease still responds quickly if exposed to the real pathogen. What biological mechanism explains this?',
        options: [
          { id: 'a', text: 'The vaccine permanently changed the person\'s DNA sequence.' },
          { id: 'b', text: 'The immune system retains memory cells from the vaccine, allowing a faster, stronger response on real exposure.' },
          { id: 'c', text: 'Vaccines have no lasting biological effect.' },
          { id: 'd', text: 'The pathogen itself becomes weaker over time.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what a vaccine trains the immune system to do, and how long that training lasts.'],
        explanation: "A vaccine triggers the immune system to produce memory cells that persist long-term, so a later real exposure to the pathogen is met with a much faster and stronger immune response.",
      },
    },
    {
      id: 'tib-d2',
      part: 'real-life-application',
      conceptSlug: 'biology-in-clothing-and-shelter',
      conceptTitle: 'Clothing and Shelter',
      question: {
        id: 'tib-d2-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of the following correctly matches a clothing material to its biological source?',
        options: [
          { id: 'a', text: 'Wool — a protein fibre spun by silkworm larvae' },
          { id: 'b', text: 'Silk — a protein fibre produced by silkworm larvae to build their cocoons' },
          { id: 'c', text: 'Cotton — a mineral fibre mined from rock' },
          { id: 'd', text: 'Silk — animal hair grown by sheep' },
        ],
        correctOptionId: 'b',
        hints: ['Cotton is a plant seed hair; wool is sheep hair; silk comes from a specific insect life stage.'],
        explanation: 'Silk is a protein fibre produced by silkworm larvae specifically to spin their protective cocoon before metamorphosis — cotton is plant seed hair and wool is sheep hair (keratin protein).',
      },
    },

    // Part E — Challenge
    {
      id: 'tib-e1',
      part: 'challenge',
      conceptSlug: 'evolution-and-the-diversity-of-life',
      conceptTitle: 'Theme 5: Evolution for the Unity and Diversity of Life',
      question: {
        id: 'tib-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: "Darwin's finches share a common ancestor, yet have distinctly different beak shapes suited to different foods on different islands. Which TWO themes does this single example best connect?",
        options: [
          { id: 'a', text: 'Theme 1 (emergent properties) and Theme 3 (energy and matter) only' },
          { id: 'b', text: 'Theme 5 (evolution: unity and diversity) and Theme 4 (interactions with the environment shaping traits)' },
          { id: 'c', text: 'Theme 2 (genetic information) only, with no connection to any other theme' },
          { id: 'd', text: 'None of the themes apply to this example' },
        ],
        correctOptionId: 'b',
        hints: ['Common ancestry plus environment-driven variation spans more than one theme at once.'],
        explanation: "This example is a Theme 5 case (shared ancestry = unity, natural selection = diversity) that is itself driven by Theme 4 (the finches' interaction with different island environments and food sources) — showing how the five themes connect rather than standing apart.",
      },
    },
  ],
};
