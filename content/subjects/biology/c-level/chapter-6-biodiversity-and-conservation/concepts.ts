import type { Concept } from '@/types/content';

export const chapter6BiodiversityConcepts: Record<string, Concept> = {
  'levels-of-biodiversity': {
    slug: 'levels-of-biodiversity',
    title: 'Levels of Biodiversity',
    difficulty: 'medium',
    simpleExplanation:
      "Biodiversity exists at three levels: genetic diversity (variation within a single species), " +
      "species diversity (the variety of species within a habitat or region), and ecosystem diversity " +
      "(the variety of habitats and ecological communities across a landscape). A quantitative measure " +
      "like Simpson's Diversity Index can numerically compare species diversity between habitats.",
    whyItMatters:
      "Recognising all three levels prevents biodiversity from being oversimplified as just 'number of " +
      "species' — genetic diversity within a species and ecosystem diversity across a landscape are " +
      "equally important and can be threatened independently of species counts.",
    formulaSlug: 'simpsons-diversity-index-formula',
    workedExample: {
      id: 'diversity-index-we-1',
      title: "Calculating Simpson's Diversity Index",
      problemStatement: 'A pond survey finds 40 individuals of species A, 40 of species B, and 20 of species C (100 individuals total, N = 100). Calculate the Simpson\'s Diversity Index.',
      steps: [
        { step: 1, instruction: 'Calculate (n/N)² for each species.', math: '(40/100)² = 0.16, (40/100)² = 0.16, (20/100)² = 0.04', explanation: 'Divide each species\' count by the total, then square the result.' },
        { step: 2, instruction: 'Sum these values.', math: 'Σ(n/N)² = 0.16 + 0.16 + 0.04 = 0.36', explanation: 'Add all the squared proportions together.' },
        { step: 3, instruction: 'Subtract from 1.', math: 'D = 1 − 0.36 = 0.64', explanation: 'Simpson\'s Index is 1 minus this sum.' },
      ],
      finalAnswer: 'D = 0.64, indicating relatively high diversity in this pond.',
    },
    whyItWorks:
      "Squaring each species' proportion (n/N) before summing gives disproportionate weight to " +
      "dominant species — a habitat where one species makes up most of the individuals produces a " +
      "large Σ(n/N)² (and so a LOW D, close to 0), while a habitat with many species in roughly equal " +
      "numbers produces a small Σ(n/N)² (and so a HIGH D, close to 1) — the formula is specifically " +
      "built to capture both richness and evenness together.",
    realLifeExample: {
      title: 'Comparing a monoculture farm to a natural meadow',
      scenario: 'A wheat monoculture farm and a nearby natural meadow are both surveyed for plant species.',
      explanation: "The monoculture farm (almost entirely one species) would produce a Simpson's Index very close to 0, while the diverse natural meadow (many species in more even numbers) would produce a much higher index — quantitatively confirming what is qualitatively obvious: the meadow is far more biodiverse.",
    },
    practiceQuestions: [
      {
        id: 'levels-biodiversity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A habitat has 2 species: 90 individuals of species X and 10 of species Y (N = 100). Calculate Simpson\'s Diversity Index (D).',
        hints: ['D = 1 − Σ(n/N)².', 'Calculate (90/100)² and (10/100)² separately, then sum and subtract from 1.'],
        correctAnswer: 0.18,
        tolerance: 0.01,
        explanation: '(90/100)² = 0.81, (10/100)² = 0.01. Sum = 0.82. D = 1 − 0.82 = 0.18 — a low value, reflecting that one species dominates.',
      },
    ],
    commonMistake:
      "Reducing 'biodiversity' to just species count (species richness) — true biodiversity assessment " +
      "also considers genetic diversity within species and ecosystem diversity across habitats, not " +
      "species count alone.",
    quickReview: [
      'Three levels: genetic diversity, species diversity, ecosystem diversity.',
      "Simpson's Index D = 1 − Σ(n/N)² quantifies species diversity (0 = low, near 1 = high).",
      'A habitat dominated by one species has low D; an even, species-rich habitat has high D.',
    ],
  },

  'importance-of-biodiversity': {
    slug: 'importance-of-biodiversity',
    title: 'Importance of Biodiversity',
    difficulty: 'easy',
    simpleExplanation:
      'Biodiversity is important for ecological reasons (ecosystem stability and resilience, nutrient ' +
      'cycling, pollination), economic reasons (agriculture, medicine, tourism), and direct human ' +
      'wellbeing (food security, clean water and air, cultural value).',
    whyItMatters:
      "Understanding WHY biodiversity matters — beyond a vague sense that 'nature is good' — is what " +
      "motivates and justifies the conservation efforts covered later in this chapter.",
    whyItWorks:
      "A biodiverse ecosystem is generally more resilient to disturbance because it has more functional " +
      "redundancy — if one species is lost or declines, others with similar ecological roles can often " +
      "partially compensate, keeping essential processes (like pollination or decomposition) running; a " +
      "low-diversity system has far less of this buffering capacity.",
    realLifeExample: {
      title: 'Pollinator diversity and food security',
      scenario: 'A wide variety of insect, bird, and bat species pollinate the crops that make up a large share of human food supply.',
      explanation: 'Relying on many different pollinator species (rather than just one) provides resilience — if one pollinator population declines (as honeybee populations have in some regions), other pollinators can partly compensate, whereas relying on a single pollinator species would leave food production highly vulnerable.',
    },
    practiceQuestions: [
      {
        id: 'importance-biodiversity-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why does higher biodiversity generally make an ecosystem more resilient to disturbance?',
        options: [
          { id: 'a', text: 'More species can provide functional redundancy, so if one declines, others can partly compensate.' },
          { id: 'b', text: 'Biodiversity has no effect on ecosystem stability.' },
          { id: 'c', text: 'More species always means more competition and instability.' },
          { id: 'd', text: 'Resilience depends only on the largest species present.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what happens to key ecological processes when there is only one species providing them.'],
        explanation: 'Functional redundancy — multiple species capable of similar ecological roles — means the loss of one species is less likely to collapse a key process, since others can partly take over.',
      },
    ],
    commonMistake:
      "Viewing biodiversity's importance as purely aesthetic or emotional — it has direct, measurable " +
      "ecological and economic value (ecosystem services, agriculture, medicine) beyond its intrinsic " +
      "or cultural worth.",
    quickReview: [
      'Biodiversity matters ecologically (resilience), economically (agriculture, medicine, tourism), and for human wellbeing.',
      'Higher diversity generally means more functional redundancy and resilience.',
      'Example: diverse pollinators provide more reliable, resilient food pollination than a single species.',
    ],
  },

  'forest-diversity-in-myanmar': {
    slug: 'forest-diversity-in-myanmar',
    title: 'Forest Diversity',
    difficulty: 'easy',
    simpleExplanation:
      "Myanmar contains a range of forest types shaped by its varied climate and geography — including " +
      "tropical evergreen rainforest, mixed deciduous forest (notably teak-rich forests), dry forest, " +
      "and mangrove forest along the coast — together supporting an exceptionally wide range of plant " +
      "and animal species.",
    whyItMatters:
      "Myanmar's forest diversity makes it one of the most biologically significant countries in " +
      "mainland Southeast Asia, but this also means its forests face substantial pressure from logging " +
      "and land conversion, covered later under threats to biodiversity.",
    whyItWorks:
      "Different forest types form in response to differences in rainfall, temperature, and soil across " +
      "Myanmar's geography — the wetter south and coastal regions support evergreen rainforest and " +
      "mangroves, while the drier central regions support dry forest, and mixed deciduous (teak) " +
      "forests occupy intermediate rainfall zones — this environmental variation is what produces such " +
      "varied forest diversity within one country.",
    realLifeExample: {
      title: "Myanmar's teak forests",
      scenario: 'Myanmar has historically been one of the world\'s largest sources of natural teak timber, prized for its durability.',
      explanation: "Myanmar's mixed deciduous forests naturally support teak trees at a scale few other countries can match, making these forests both ecologically significant and economically valuable — which is also why they have faced heavy logging pressure.",
    },
    practiceQuestions: [
      {
        id: 'forest-diversity-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why does Myanmar contain such a wide range of different forest types?',
        options: [
          { id: 'a', text: 'Variation in rainfall, temperature, and soil across its geography favours different forest types in different regions.' },
          { id: 'b', text: 'All of Myanmar has identical climate conditions everywhere.' },
          { id: 'c', text: 'Forest type has no relationship to climate or geography.' },
          { id: 'd', text: 'Myanmar has only one forest type nationwide.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about how wetter versus drier regions would support different vegetation.'],
        explanation: "Myanmar's varied rainfall and geography (wetter south/coast, drier centre) produce distinct forest types suited to each region's conditions.",
      },
    ],
    commonMistake:
      "Assuming Myanmar's forests are uniform — forest type varies substantially by region, from " +
      "coastal mangroves to dry-zone forest to evergreen rainforest, each supporting different species " +
      "communities.",
    quickReview: [
      "Myanmar's main forest types: tropical evergreen, mixed deciduous (teak), dry forest, mangrove.",
      'Forest type distribution follows regional rainfall, temperature, and soil variation.',
      "Myanmar's teak-rich mixed deciduous forests are ecologically and economically significant.",
    ],
  },

  'endangered-species-in-myanmar': {
    slug: 'endangered-species-in-myanmar',
    title: 'Endangered Species',
    difficulty: 'easy',
    simpleExplanation:
      "Myanmar is home to several endangered species, including the Irrawaddy dolphin, the Asian " +
      "elephant, and various big cat species like the tiger — species considered endangered because " +
      "their populations have declined sharply, primarily due to habitat loss, poaching, and human-" +
      "wildlife conflict.",
    whyItMatters:
      "These species act as important indicators of ecosystem health — since many endangered species " +
      "require large, intact habitats to survive, their decline often signals broader environmental " +
      "degradation affecting many other species as well.",
    whyItWorks:
      "A species becomes endangered when its population decline outpaces its ability to recover — " +
      "habitat loss reduces available living space and food, poaching directly removes individuals " +
      "(often targeting specific age/sex groups, disrupting reproduction), and human-wildlife conflict " +
      "(e.g. elephants raiding crops) can lead to retaliatory killing, compounding the population " +
      "decline from multiple directions at once.",
    realLifeExample: {
      title: 'The Irrawaddy dolphin in the Ayeyarwady River',
      scenario: 'Irrawaddy dolphin populations in the Ayeyarwady River have declined significantly due to entanglement in fishing nets and habitat degradation.',
      explanation: "This decline illustrates how a species can become endangered through indirect human activity (accidental net entanglement, pollution, habitat change) rather than direct hunting alone — conservation efforts here focus on modified fishing practices and river habitat protection.",
    },
    practiceQuestions: [
      {
        id: 'endangered-species-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why are endangered species often considered useful indicators of overall ecosystem health?',
        options: [
          { id: 'a', text: 'Because their decline often reflects broader habitat degradation affecting many other species too.' },
          { id: 'b', text: 'Endangered species have no relationship to ecosystem health.' },
          { id: 'c', text: 'Only endangered species are affected by habitat loss.' },
          { id: 'd', text: 'Endangered species always recover on their own without help.' },
        ],
        correctOptionId: 'a',
        hints: ['Many endangered species need large, intact habitats to survive.'],
        explanation: "Since many endangered species require substantial, healthy habitat, their decline often signals wider environmental problems likely affecting many other species as well.",
      },
    ],
    commonMistake:
      "Assuming poaching (direct hunting) is the only cause of species decline — habitat loss, " +
      "accidental entanglement (like with fishing nets), pollution, and human-wildlife conflict are all " +
      "significant, sometimes larger, contributing factors.",
    quickReview: [
      "Myanmar's endangered species include the Irrawaddy dolphin, Asian elephant, and tiger.",
      'Endangered species act as indicators of broader ecosystem health.',
      'Causes of decline: habitat loss, poaching, human-wildlife conflict, and accidental harm.',
    ],
  },

  'habitat-destruction-and-invasive-species': {
    slug: 'habitat-destruction-and-invasive-species',
    title: 'Habitat Destruction and Invasive Alien Species',
    difficulty: 'medium',
    simpleExplanation:
      "Habitat destruction (clearing forests, draining wetlands, converting land to agriculture or " +
      "development) directly removes the living space species need to survive. Invasive alien species " +
      "— non-native organisms introduced (often by humans) to a new environment — can further threaten " +
      "biodiversity by outcompeting, preying on, or spreading disease to native species that have no " +
      "natural defence against them.",
    whyItMatters:
      "These are two of the most significant, human-driven threats to global biodiversity, and " +
      "understanding how each works is essential for designing effective conservation responses.",
    whyItWorks:
      "Habitat destruction reduces the total resources (space, food, shelter) available, directly " +
      "lowering the population a habitat can support; invasive species succeed specifically because " +
      "native species and ecosystems have not evolved defences against them (unlike against native " +
      "competitors, predators, or pathogens they have coexisted with for a long time), giving the " +
      "invader an unchecked advantage.",
    realLifeExample: {
      title: 'Water hyacinth invading waterways',
      scenario: 'Water hyacinth, an invasive aquatic plant, has spread rapidly in many waterways across South and Southeast Asia, choking rivers and lakes.',
      explanation: 'Because native aquatic species and ecosystems have no natural checks against this fast-growing introduced plant, it spreads uncontrollably, blocking sunlight and oxygen exchange, and severely disrupting native aquatic biodiversity.',
    },
    practiceQuestions: [
      {
        id: 'habitat-invasive-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do invasive alien species often spread so successfully in a new environment?',
        options: [
          { id: 'a', text: 'Native species and ecosystems typically have no evolved defences against them.' },
          { id: 'b', text: 'Invasive species are always physically larger than native species.' },
          { id: 'c', text: 'Native ecosystems always destroy invasive species immediately.' },
          { id: 'd', text: 'Invasive species cannot actually reproduce in new environments.' },
        ],
        correctOptionId: 'a',
        hints: ['Compare to how native species handle competitors/predators they have coexisted with for a long time.'],
        explanation: "Because native species haven't evolved alongside the invader, they often lack effective defences or competition strategies against it, letting the invasive species spread largely unchecked.",
      },
    ],
    commonMistake:
      "Treating habitat destruction and invasive species as unrelated threats — degraded or disturbed " +
      "habitats are often MORE vulnerable to successful invasion, since disruption can remove the " +
      "native competitors and processes that would otherwise resist an invader.",
    quickReview: [
      'Habitat destruction removes living space and resources directly.',
      'Invasive species succeed because native ecosystems lack evolved defences against them.',
      'Example: water hyacinth chokes waterways, disrupting native aquatic biodiversity.',
    ],
  },

  'genetic-pollution-and-overexploitation': {
    slug: 'genetic-pollution-and-overexploitation',
    title: 'Genetic Pollution and Overexploitation',
    difficulty: 'medium',
    simpleExplanation:
      "Genetic pollution occurs when genes from a domesticated, non-native, or genetically modified " +
      "population interbreed into a wild population, diluting or altering its natural genetic " +
      "diversity. Overexploitation is harvesting a species (through hunting, fishing, or logging) " +
      "faster than its population can naturally replace itself, driving the population down.",
    whyItMatters:
      "Both threats can severely damage biodiversity even without directly destroying habitat — genetic " +
      "pollution can undermine a species' long-term adaptability, while overexploitation can collapse " +
      "populations that appeared healthy just a short time earlier.",
    whyItWorks:
      "Genetic pollution reduces the unique genetic adaptations a wild population has built up over " +
      "generations, potentially making it less suited to its local environment; overexploitation works " +
      "by removing individuals faster than reproduction can replace them, which is especially damaging " +
      "for species with slow reproductive rates (like many large mammals and fish), since their " +
      "populations simply cannot rebound quickly enough.",
    realLifeExample: {
      title: 'Overfishing of Atlantic cod',
      scenario: 'Atlantic cod populations collapsed dramatically in the early 1990s after decades of intensive fishing.',
      explanation: "Cod were harvested faster than the population could reproduce and replace itself — once the population fell below a critical threshold, it could not recover quickly even after fishing was drastically reduced, illustrating how overexploitation can cause long-lasting, sometimes irreversible, population collapse.",
    },
    practiceQuestions: [
      {
        id: 'genetic-pollution-overexploitation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why are slow-reproducing species (like large mammals or certain fish) especially vulnerable to overexploitation?',
        options: [
          { id: 'a', text: 'Their populations cannot replace lost individuals quickly enough if harvested faster than they can reproduce.' },
          { id: 'b', text: 'Slow-reproducing species are never actually hunted or fished.' },
          { id: 'c', text: 'Reproductive rate has no relationship to overexploitation risk.' },
          { id: 'd', text: 'Fast-reproducing species are always more vulnerable instead.' },
        ],
        correctOptionId: 'a',
        hints: ['Compare how quickly a population could recover if a large fraction is removed each year.'],
        explanation: "A slow reproductive rate means a population removed faster than it can replace itself will keep shrinking, unlike a fast-reproducing species that could better withstand similar harvesting pressure.",
      },
    ],
    commonMistake:
      "Assuming overexploitation only matters while a species is still being actively harvested — as " +
      "the Atlantic cod example shows, a population can remain critically depleted long after " +
      "harvesting stops, if it fell below a threshold needed for effective natural recovery.",
    quickReview: [
      'Genetic pollution: non-native/domesticated genes diluting wild population genetic diversity.',
      'Overexploitation: harvesting faster than a population can naturally replace itself.',
      'Slow-reproducing species are especially vulnerable to overexploitation (e.g. Atlantic cod collapse).',
    ],
  },

  'climate-change-and-human-impact-on-biodiversity': {
    slug: 'climate-change-and-human-impact-on-biodiversity',
    title: 'Climate Change, Overpopulation and Wildlife Trade',
    difficulty: 'medium',
    simpleExplanation:
      "Beyond habitat destruction and overexploitation, biodiversity faces threats from climate change " +
      "(shifting temperature and rainfall patterns beyond what species can tolerate or adapt to fast " +
      "enough), human overpopulation (increasing overall demand for land, food, and resources), and " +
      "illegal wildlife trade (hunting or capturing species for sale as pets, trophies, or traditional " +
      "medicine ingredients).",
    whyItMatters:
      "These broader, often global-scale pressures compound the more direct threats covered earlier in " +
      "the chapter, meaning effective biodiversity protection increasingly requires addressing global " +
      "and societal factors, not just local habitat and species management.",
    whyItWorks:
      "Climate change threatens species because their physiological tolerances and life cycles (e.g. " +
      "breeding season timing, migration patterns) evolved to match historical climate conditions — " +
      "when conditions shift faster than a species can adapt or migrate to a suitable new range, its " +
      "population declines; overpopulation compounds every other threat by increasing overall demand " +
      "for land and resources, driving more habitat conversion and resource extraction.",
    realLifeExample: {
      title: 'Coral bleaching from ocean warming',
      scenario: "Rising ocean temperatures have caused widespread coral bleaching events on reefs worldwide, including significant damage to Australia's Great Barrier Reef.",
      explanation: "Corals depend on a temperature-sensitive symbiotic relationship with algae that provide them with food and colour — when water temperatures rise beyond the coral's tolerance, this relationship breaks down (bleaching), and prolonged bleaching can kill the coral, devastating the entire reef ecosystem it supports.",
    },
    practiceQuestions: [
      {
        id: 'climate-change-biodiversity-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does climate change threaten species that have survived for many generations under natural conditions?',
        options: [
          { id: 'a', text: 'Rapid climate shifts can outpace a species\' ability to adapt or migrate to suitable new conditions.' },
          { id: 'b', text: 'Climate has always been perfectly stable until humans existed.' },
          { id: 'c', text: 'Species are completely unaffected by temperature or rainfall changes.' },
          { id: 'd', text: 'Climate change only affects plants, not animals.' },
        ],
        correctOptionId: 'a',
        hints: ['Compare the speed of current climate change to the speed of past, natural climate shifts species have adapted to before.'],
        explanation: "Species can adapt to gradual climate change over many generations, but the current PACE of human-driven climate change often outstrips species' ability to adapt or relocate in time.",
      },
    ],
    commonMistake:
      "Treating climate change, overpopulation, and wildlife trade as separate, unrelated issues from " +
      "habitat destruction and overexploitation — in reality, these threats interact and compound each " +
      "other, making combined, coordinated conservation strategies necessary.",
    quickReview: [
      'Additional threats: climate change, human overpopulation, illegal wildlife trade.',
      'Climate change harms species when shifts outpace their ability to adapt or migrate.',
      'Example: ocean warming causes coral bleaching, threatening entire reef ecosystems.',
    ],
  },

  'reasons-for-conservation': {
    slug: 'reasons-for-conservation',
    title: 'Reasons for Conservation',
    difficulty: 'easy',
    simpleExplanation:
      "Conservation is pursued for several overlapping reasons: preserving ecosystem services (like " +
      "clean water, pollination, and climate regulation) that humans directly depend on, maintaining " +
      "genetic resources important for future medicine and agriculture, protecting species and " +
      "ecosystems for their own intrinsic value, and preserving cultural, recreational, and economic " +
      "value (like ecotourism).",
    whyItMatters:
      "Understanding these varied justifications helps build broad public and political support for " +
      "conservation, since different arguments resonate with different groups and priorities.",
    whyItWorks:
      "Many of these reasons reinforce each other in practice — protecting a forest for its ecosystem " +
      "services (like water regulation) also protects the genetic diversity, intrinsic value, and " +
      "ecotourism potential of the species living there, meaning a single conservation action often " +
      "serves multiple goals simultaneously.",
    realLifeExample: {
      title: 'Wildlife-based ecotourism',
      scenario: 'Countries with rich biodiversity often develop significant ecotourism industries, drawing visitors specifically to see wildlife and natural habitats.',
      explanation: 'This economic incentive gives conservation a direct financial justification alongside its ecological value — a protected reserve can generate sustained tourism revenue precisely because its biodiversity has been conserved rather than exploited or destroyed.',
    },
    practiceQuestions: [
      {
        id: 'reasons-conservation-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of the following is an ECONOMIC reason for biodiversity conservation?',
        options: [
          { id: 'a', text: 'Ecotourism revenue generated by protected natural habitats' },
          { id: 'b', text: 'The intrinsic value of species existing for their own sake' },
          { id: 'c', text: 'Cultural significance of certain species' },
          { id: 'd', text: 'Ecosystem services like pollination' },
        ],
        correctOptionId: 'a',
        hints: ['Which option involves a direct financial/economic benefit?'],
        explanation: 'Ecotourism revenue is a direct economic argument for conservation, distinct from ecological, intrinsic, or cultural reasons.',
      },
    ],
    commonMistake:
      "Assuming conservation arguments are mutually exclusive — ecological, economic, genetic, and " +
      "intrinsic-value reasons for conservation typically reinforce and support each other rather than " +
      "competing.",
    quickReview: [
      'Conservation reasons: ecosystem services, genetic resources, intrinsic value, cultural/economic value.',
      'These reasons often reinforce each other in practice.',
      'Example: ecotourism gives conservation a direct economic incentive.',
    ],
  },

  'conservation-methods': {
    slug: 'conservation-methods',
    title: 'Conservation Methods',
    difficulty: 'medium',
    simpleExplanation:
      "Conservation methods include in-situ conservation (protecting species within their natural " +
      "habitat, e.g. national parks and wildlife reserves) and ex-situ conservation (protecting species " +
      "outside their natural habitat, e.g. zoos, botanical gardens, and seed banks) — each with " +
      "distinct advantages, often used together.",
    whyItMatters:
      "Choosing the right conservation method (or combination) for a given situation makes conservation " +
      "efforts far more effective — a critically endangered species with almost no wild habitat left " +
      "may need ex-situ breeding programmes, while a still-intact ecosystem is usually best protected " +
      "in-situ.",
    whyItWorks:
      "In-situ conservation preserves not just the target species but the entire web of ecological " +
      "relationships (predators, prey, pollinators, soil organisms) it depends on, which is difficult " +
      "or impossible to fully replicate elsewhere; ex-situ conservation, by contrast, can provide a " +
      "safety net when a species' wild population or habitat becomes too small or degraded to survive " +
      "on its own, buying time for habitat restoration or eventual reintroduction.",
    realLifeExample: {
      title: 'Seed banks as ex-situ conservation',
      scenario: 'Facilities like the Svalbard Global Seed Vault store seed samples from crop varieties and wild plants from around the world.',
      explanation: "This ex-situ approach preserves plant genetic diversity independently of what happens to the original wild population or habitat — if a crop variety or wild plant population is lost to disaster or habitat loss, its genetic material can still be recovered from stored seed samples.",
    },
    practiceQuestions: [
      {
        id: 'conservation-methods-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the key advantage of in-situ conservation over ex-situ conservation?',
        options: [
          { id: 'a', text: 'It preserves the species along with its full natural ecological relationships and habitat.' },
          { id: 'b', text: 'It requires no funding or effort at all.' },
          { id: 'c', text: 'It works only for plant species, not animals.' },
          { id: 'd', text: 'It is always cheaper than ex-situ conservation.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what a zoo or seed bank cannot fully replicate.'],
        explanation: "In-situ conservation protects the species within its natural habitat and ecological web, which ex-situ methods (like zoos or seed banks) generally cannot fully replicate.",
      },
    ],
    commonMistake:
      "Assuming ex-situ conservation (zoos, seed banks) is a complete substitute for protecting wild " +
      "habitats — it is generally a valuable supplement or safety net, not a full replacement for " +
      "in-situ conservation of a functioning ecosystem.",
    quickReview: [
      'In-situ conservation: protecting species within their natural habitat.',
      'Ex-situ conservation: protecting species outside their natural habitat (zoos, seed banks).',
      'Each method has distinct strengths; they are often used together.',
    ],
  },

  'protected-areas-in-myanmar': {
    slug: 'protected-areas-in-myanmar',
    title: 'Protected Areas in Myanmar',
    difficulty: 'easy',
    simpleExplanation:
      "Myanmar has established a network of protected areas — including national parks, wildlife " +
      "sanctuaries, and nature reserves (such as Alaungdaw Kathapa National Park and Hukaung Valley " +
      "Wildlife Sanctuary) — as a primary in-situ conservation strategy to safeguard the country's " +
      "forests, wildlife, and overall biodiversity.",
    whyItMatters:
      "Protected areas are Myanmar's most direct, large-scale application of in-situ conservation, " +
      "putting the general conservation principles from this chapter into concrete national practice.",
    whyItWorks:
      "By legally restricting or regulating activities like logging, hunting, and land conversion " +
      "within designated boundaries, protected areas maintain intact habitat and reduce direct human " +
      "pressures on the species living there, allowing natural ecological processes and population " +
      "levels to persist largely undisturbed.",
    realLifeExample: {
      title: 'Hukaung Valley Wildlife Sanctuary',
      scenario: 'The Hukaung Valley in northern Myanmar was designated as one of the largest tiger reserves in the world.',
      explanation: 'By protecting this large, intact area of habitat from logging and hunting, the reserve aims to give tiger and other wildlife populations enough undisturbed space and prey availability to maintain a viable, self-sustaining population — a direct, large-scale application of in-situ conservation.',
    },
    practiceQuestions: [
      {
        id: 'protected-areas-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "What type of conservation approach do Myanmar's national parks and wildlife sanctuaries primarily represent?",
        options: [
          { id: 'a', text: 'Ex-situ conservation' },
          { id: 'b', text: 'In-situ conservation' },
          { id: 'c', text: 'Genetic pollution management' },
          { id: 'd', text: 'Overexploitation control only' },
        ],
        correctOptionId: 'b',
        hints: ['These areas protect species within their natural habitat.'],
        explanation: "National parks and wildlife sanctuaries protect species within their natural habitat, making them a form of in-situ conservation.",
      },
    ],
    commonMistake:
      "Assuming a protected area automatically eliminates all threats within its boundaries — illegal " +
      "logging and poaching can still occur within protected areas without adequate enforcement, so " +
      "legal designation alone is not sufficient without active management and monitoring.",
    quickReview: [
      "Myanmar's protected areas include national parks and wildlife sanctuaries (e.g. Hukaung Valley).",
      'Protected areas are a primary in-situ conservation strategy.',
      'Legal protection reduces logging/hunting pressure but requires active enforcement to be effective.',
    ],
  },
};
