import type { Concept } from '@/types/content';

export const chapter7EnvironmentConcepts: Record<string, Concept> = {
  'the-atmosphere-hydrosphere-and-lithosphere': {
    slug: 'the-atmosphere-hydrosphere-and-lithosphere',
    title: 'The Atmosphere, Hydrosphere and Lithosphere',
    difficulty: 'easy',
    simpleExplanation:
      "Earth's environment is often divided into three interacting chemical systems: the atmosphere " +
      "(the layer of gases surrounding Earth), the hydrosphere (all of Earth's water — oceans, " +
      'rivers, ice, groundwater), and the lithosphere (the solid rock and soil that makes up the ' +
      "Earth's outer layer).",
    whyItMatters:
      "Understanding these three systems as interconnected — not separate, isolated boxes — is " +
      "essential for understanding pollution and environmental chemistry, since a pollutant released " +
      "into one sphere very often moves into and affects the others.",
    whyItWorks:
      "Chemical elements and compounds are constantly cycling between these spheres — for example, " +
      "carbon moves between the atmosphere (as CO₂), the hydrosphere (dissolved in oceans), and the " +
      "lithosphere (as carbonate rocks and fossil fuels) — so a change in one sphere's chemistry " +
      "inevitably has knock-on effects in the others.",
    realLifeExample: {
      title: 'Acid rain moving between spheres',
      scenario: 'Sulfur dioxide released into the atmosphere from burning fossil fuels ends up acidifying lakes and soil far away.',
      explanation: "SO₂ in the atmosphere reacts with water vapour to form sulfuric acid, which falls as acid rain — moving pollution from the atmosphere into the hydrosphere (acidified lakes and rivers) and lithosphere (acidified soil), demonstrating exactly how the three spheres interact.",
    },
    practiceQuestions: [
      {
        id: 'spheres-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "Which of Earth's spheres includes oceans, rivers, and groundwater?",
        options: [
          { id: 'a', text: 'The atmosphere' },
          { id: 'b', text: 'The hydrosphere' },
          { id: 'c', text: 'The lithosphere' },
          { id: 'd', text: 'None of these' },
        ],
        correctOptionId: 'b',
        hints: ["'Hydro-' relates to water."],
        explanation: 'The hydrosphere includes all of the water on Earth — oceans, rivers, lakes, groundwater, and ice.',
      },
    ],
    commonMistake:
      "Treating the atmosphere, hydrosphere, and lithosphere as completely separate, unconnected " +
      "systems — in reality, chemicals move continuously between all three, which is exactly why " +
      "pollution in one sphere so often spreads to affect the others.",
    quickReview: [
      'Atmosphere: the layer of gases surrounding Earth.',
      "Hydrosphere: all of Earth's water.",
      'Lithosphere: the solid rock and soil of the outer Earth.',
    ],
  },

  'air-pollutants': {
    slug: 'air-pollutants',
    title: 'Air Pollutants',
    difficulty: 'medium',
    simpleExplanation:
      'Major air pollutants include carbon monoxide (CO), sulfur dioxide (SO₂), nitrogen oxides (NOₓ), ' +
      'particulate matter, and ground-level ozone — each produced mainly by burning fossil fuels, and ' +
      'each causing distinct harm to health and the environment.',
    whyItMatters:
      'Knowing which pollutant causes which specific problem (e.g. SO₂ causing acid rain, CO ' +
      'preventing oxygen transport in blood) lets scientists and policymakers target the right source ' +
      'and design the right solution for each problem, rather than treating "air pollution" as one ' +
      'single, undifferentiated issue.',
    whyItWorks:
      'Each pollutant causes harm through its own specific chemistry: CO binds to haemoglobin far more ' +
      'strongly than oxygen does, blocking oxygen transport in blood; SO₂ and NOₓ react with ' +
      'atmospheric water to form acids, causing acid rain; particulate matter is small enough to ' +
      'penetrate deep into lungs; and ground-level ozone forms through sunlight-driven reactions ' +
      'between NOₓ and volatile organic compounds, irritating airways.',
    realLifeExample: {
      title: 'Vehicle exhaust and smog',
      scenario: 'Cities with heavy traffic often experience smog, especially on hot, sunny days.',
      explanation: 'Vehicle exhaust releases NOₓ and volatile organic compounds, which react in sunlight to form ground-level ozone and other smog components — this is exactly why smog tends to be worse on hot, sunny, still days.',
    },
    practiceQuestions: [
      {
        id: 'air-pollutants-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is carbon monoxide (CO) dangerous to breathe, even in relatively small amounts?',
        options: [
          { id: 'a', text: 'It is explosive at any concentration.' },
          { id: 'b', text: 'It binds to haemoglobin much more strongly than oxygen does, blocking oxygen transport in the blood.' },
          { id: 'c', text: 'It has a strong, unpleasant smell that causes headaches.' },
          { id: 'd', text: 'It reacts with water in the lungs to form an acid.' },
        ],
        correctOptionId: 'b',
        hints: ["Think about what CO 'competes with' inside the bloodstream."],
        explanation: 'CO binds far more strongly to haemoglobin than oxygen does, effectively displacing oxygen and starving the body of the oxygen it needs, which is why even low concentrations can be dangerous.',
      },
    ],
    commonMistake:
      "Assuming all air pollutants cause harm through the same mechanism — each pollutant listed here " +
      "(CO, SO₂, NOₓ, particulates, ozone) has a genuinely different chemical mechanism of harm, and " +
      "conflating them leads to misunderstanding how each is best controlled.",
    quickReview: [
      'CO blocks oxygen transport in blood by binding haemoglobin.',
      'SO₂ and NOₓ react with water vapour to cause acid rain.',
      'NOₓ + volatile organics + sunlight → ground-level ozone (smog).',
    ],
  },

  'water-and-soil-pollutants': {
    slug: 'water-and-soil-pollutants',
    title: 'Water and Soil Pollutants',
    difficulty: 'medium',
    simpleExplanation:
      'Water and soil pollutants include industrial chemicals and heavy metals, excess fertiliser ' +
      'runoff (nitrates and phosphates), untreated sewage, and pesticides — each disrupting the ' +
      'natural chemistry of water bodies and soil in different, specific ways.',
    whyItMatters:
      'These pollutants often enter the food chain — through crops grown in contaminated soil, or ' +
      'fish living in contaminated water — meaning environmental water and soil pollution frequently ' +
      'becomes a direct human health problem, not just an ecological one.',
    whyItWorks:
      'Excess fertiliser runoff (nitrates, phosphates) causes eutrophication: it over-feeds algae, ' +
      'which grow explosively, then die and decompose, and that decomposition consumes the dissolved ' +
      'oxygen fish and other aquatic life need to survive — indirectly suffocating an ecosystem rather ' +
      'than poisoning it directly. Heavy metals and many pesticides, by contrast, are directly toxic ' +
      'and can accumulate up the food chain (bioaccumulation) as smaller organisms are eaten by larger ' +
      'ones.',
    realLifeExample: {
      title: 'Algal blooms from agricultural runoff',
      scenario: 'Lakes near farmland sometimes develop thick, green algal blooms after heavy rain washes fertiliser off nearby fields.',
      explanation: 'The excess nitrates and phosphates in the fertiliser runoff feed explosive algae growth (eutrophication); when the algae eventually die and decompose, the decomposition process consumes so much dissolved oxygen that fish and other aquatic organisms can suffocate.',
    },
    practiceQuestions: [
      {
        id: 'water-soil-pollutants-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does excess fertiliser runoff into a lake often lead to dead fish, even though fertiliser itself is not directly toxic to fish?',
        options: [
          { id: 'a', text: 'Fertiliser directly poisons the fish gills.' },
          { id: 'b', text: 'The fertiliser feeds explosive algae growth; when the algae die and decompose, the process consumes the dissolved oxygen fish need.' },
          { id: 'c', text: 'Fertiliser makes the water too acidic for fish.' },
          { id: 'd', text: 'Fertiliser has no real effect on lake ecosystems.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what happens after the algae bloom — decomposition uses up something essential.'],
        explanation: "Eutrophication is an indirect process: excess nutrients feed algae blooms, and the eventual decomposition of that dead algae consumes the dissolved oxygen that fish depend on, suffocating the ecosystem rather than poisoning it directly.",
      },
    ],
    commonMistake:
      "Assuming fertiliser pollution and heavy-metal pollution cause harm the same way — fertiliser " +
      "runoff typically harms ecosystems indirectly through eutrophication (oxygen depletion), while " +
      "heavy metals and many pesticides are directly toxic and can bioaccumulate up the food chain.",
    quickReview: [
      'Fertiliser runoff (nitrates/phosphates) causes eutrophication and oxygen depletion.',
      'Heavy metals and pesticides are directly toxic and can bioaccumulate.',
      'Water/soil pollutants often enter the human food chain.',
    ],
  },

  'the-greenhouse-effect-and-global-warming': {
    slug: 'the-greenhouse-effect-and-global-warming',
    title: 'The Greenhouse Effect and Global Warming',
    difficulty: 'medium',
    simpleExplanation:
      'The greenhouse effect is the natural process by which certain atmospheric gases (mainly CO₂, ' +
      'methane, and water vapour) trap heat radiated from the Earth\'s surface, keeping the planet ' +
      'warm enough to support life. Global warming refers to the enhancement of this effect by human ' +
      'activity, raising average global temperatures beyond their natural level.',
    whyItMatters:
      'Understanding the actual chemistry of the greenhouse effect — not just "greenhouse gases are ' +
      'bad" — explains why carbon dioxide specifically, released by burning fossil fuels, is the ' +
      'central focus of climate policy worldwide.',
    whyItWorks:
      'The Sun\'s energy reaches Earth mostly as visible light, which passes through the atmosphere ' +
      'and warms the surface; the warmed Earth then re-radiates that energy as infrared radiation ' +
      '(heat) — greenhouse gas molecules like CO₂ specifically absorb infrared radiation (rather than ' +
      "visible light) and re-emit it in all directions, sending some of it back down rather than " +
      "letting it escape to space, which traps extra heat in the atmosphere.",
    realLifeExample: {
      title: 'Why greenhouse gas levels are measured so precisely',
      scenario: 'Scientists track atmospheric CO₂ concentration (currently over 420 parts per million, up from about 280 ppm before industrialisation).',
      explanation: 'Because CO₂ traps infrared radiation, this measured rise in concentration directly correlates with — and is considered the primary driver of — the roughly 1.1°C rise in average global temperature observed since pre-industrial times.',
    },
    practiceQuestions: [
      {
        id: 'greenhouse-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How do greenhouse gas molecules like CO₂ actually trap heat?',
        options: [
          { id: 'a', text: 'They block visible sunlight from reaching Earth entirely.' },
          { id: 'b', text: 'They absorb infrared radiation re-emitted by the Earth\'s surface, and re-emit some of it back downward.' },
          { id: 'c', text: 'They physically form a solid layer around the planet.' },
          { id: 'd', text: 'They react chemically with oxygen to release heat.' },
        ],
        correctOptionId: 'b',
        hints: ['Sunlight passes through mostly unaffected — what happens to the heat the Earth radiates back OUT?'],
        explanation: "Greenhouse gases specifically absorb the infrared (heat) radiation the Earth's surface re-emits, then re-radiate some of that energy back downward, trapping heat that would otherwise escape to space.",
      },
    ],
    commonMistake:
      "Thinking the greenhouse effect itself is the problem — a natural greenhouse effect is essential " +
      "for life on Earth (without any greenhouse gases, the planet would be far too cold); the actual " +
      "problem is the ENHANCED greenhouse effect from excess human-released CO₂ and other gases " +
      "pushing global temperatures higher than their natural equilibrium.",
    quickReview: [
      'Greenhouse gases absorb infrared radiation the Earth re-emits, trapping heat.',
      'The natural greenhouse effect is essential for life; the problem is its human-caused ENHANCEMENT.',
      'CO₂ from fossil fuel combustion is the primary driver of recent global warming.',
    ],
  },

  'radioactive-substances-in-the-environment': {
    slug: 'radioactive-substances-in-the-environment',
    title: 'Radioactive Substances in the Environment',
    difficulty: 'medium',
    simpleExplanation:
      'Radioactive substances occur naturally in the environment (from rocks, soil, and cosmic rays) ' +
      'and can also enter it from human activities like nuclear power, weapons testing, and medical or ' +
      'industrial use — all releasing ionising radiation that can damage living cells.',
    whyItMatters:
      "Understanding both natural background radiation and human-caused radioactive contamination " +
      "helps put radiation risk in proper context — not all radioactivity is human-made or " +
      "dangerous at typical background levels, but concentrated or accidental releases can cause " +
      "serious, lasting environmental and health harm.",
    whyItWorks:
      'Radioactive atoms decay by emitting alpha, beta, or gamma radiation as they transform into more ' +
      'stable atoms — this radiation can ionise molecules in living cells (including DNA), which is ' +
      'the underlying mechanism behind both radiation\'s medical uses (destroying cancer cells) and its ' +
      'environmental dangers (damaging healthy cells and ecosystems when uncontrolled).',
    realLifeExample: {
      title: 'Radioactive contamination after a nuclear accident',
      scenario: 'Areas near major nuclear accidents (such as Chernobyl) remain contaminated with radioactive isotopes like caesium-137 and iodine-131 for years to decades.',
      explanation: "These isotopes, with half-lives ranging from days (iodine-131) to decades (caesium-137), continue emitting radiation and can be taken up by plants and animals, entering the food chain and posing long-term health and environmental risks until they sufficiently decay.",
    },
    practiceQuestions: [
      {
        id: 'radioactive-environment-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Is all environmental radioactivity caused by human activity?',
        options: [
          { id: 'a', text: 'Yes, radioactivity is entirely a human invention.' },
          { id: 'b', text: 'No — radioactive elements occur naturally in rocks, soil, and from cosmic rays, alongside human-caused sources.' },
          { id: 'c', text: 'No radioactivity exists in nature at all.' },
          { id: 'd', text: 'Radioactivity only exists inside nuclear power plants.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about where uranium and radon, for example, are naturally found.'],
        explanation: 'Radioactive elements occur naturally in rocks and soil (like uranium and its decay products, including radon gas) and from cosmic rays — this natural background radiation exists alongside any human-caused radioactive contamination.',
      },
    ],
    commonMistake:
      "Assuming any detectable radioactivity is dangerous — natural background radiation is present " +
      "everywhere at low levels and is not typically harmful; the real environmental and health " +
      "concerns arise from concentrated, elevated, or accidental releases well above natural " +
      "background levels.",
    quickReview: [
      'Radioactivity exists naturally (rocks, soil, cosmic rays) and from human sources.',
      'Radiation damages living cells by ionising molecules, including DNA.',
      'Half-life determines how long a radioactive contaminant remains a hazard.',
    ],
  },

  'chemistry-for-sustainable-development': {
    slug: 'chemistry-for-sustainable-development',
    title: 'Chemistry for Sustainable Development',
    difficulty: 'easy',
    simpleExplanation:
      'Chemistry plays a central role in solving environmental problems, not just causing them: green ' +
      'chemistry principles, renewable energy technologies, recycling processes, and pollution-control ' +
      'methods all rely on applying chemistry deliberately toward sustainability.',
    whyItMatters:
      'This reframes chemistry as a solution-oriented science for environmental challenges, not just ' +
      'the source of pollution problems — the same chemical understanding used to identify pollutants ' +
      'is exactly what is used to develop cleaner alternatives.',
    whyItWorks:
      "Sustainable chemistry approaches typically work by either preventing pollution at its source " +
      "(designing reactions and processes with less waste and safer byproducts, a core idea of green " +
      "chemistry) or by developing new chemical technologies (solar cells, batteries, biodegradable " +
      "materials, catalytic converters) that directly reduce environmental impact compared to older " +
      "alternatives.",
    realLifeExample: {
      title: 'Biodegradable plastics',
      scenario: 'Traditional plastics can persist in the environment for centuries; newer biodegradable plastics break down much faster.',
      explanation: 'Chemists design biodegradable plastics using polymer chains that microorganisms can break down through natural chemical processes, directly addressing the environmental persistence problem of traditional, non-biodegradable plastics — a clear example of chemistry solving a chemistry-created problem.',
    },
    practiceQuestions: [
      {
        id: 'sustainable-chemistry-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is an example of chemistry contributing to environmental sustainability?',
        options: [
          { id: 'a', text: 'Burning more fossil fuels for energy' },
          { id: 'b', text: 'Developing catalytic converters that reduce harmful vehicle emissions' },
          { id: 'c', text: 'Dumping industrial waste directly into rivers' },
          { id: 'd', text: 'Using more single-use plastic packaging' },
        ],
        correctOptionId: 'b',
        hints: ['Think about a chemistry-based technology designed specifically to reduce pollution.'],
        explanation: 'Catalytic converters use transition-metal catalysts to convert harmful exhaust gases into less harmful ones, directly applying chemistry to reduce environmental impact.',
      },
    ],
    commonMistake:
      "Viewing chemistry purely as the cause of environmental problems (pollution, greenhouse gases) " +
      "without recognizing it as equally central to the SOLUTIONS — nearly every major environmental " +
      "technology, from solar panels to water treatment to biodegradable materials, is fundamentally " +
      "applied chemistry.",
    quickReview: [
      'Chemistry contributes both to environmental problems AND their solutions.',
      'Green chemistry aims to prevent pollution at the source, not just clean it up afterward.',
      'Sustainable technologies (solar cells, biodegradable plastics, catalytic converters) rely on applied chemistry.',
    ],
  },
};
