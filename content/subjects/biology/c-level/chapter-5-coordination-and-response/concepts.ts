import type { Concept } from '@/types/content';

export const chapter5CoordinationConcepts: Record<string, Concept> = {
  'coordination-and-response-in-plants': {
    slug: 'coordination-and-response-in-plants',
    title: 'Coordination and Response in Plants',
    difficulty: 'medium',
    simpleExplanation:
      'Plants respond to their environment through tropisms — directional growth responses toward or ' +
      'away from a stimulus, such as phototropism (growth toward light), gravitropism (growth relative ' +
      'to gravity), and hydrotropism (growth toward water) — controlled by plant hormones rather than a ' +
      'nervous system.',
    whyItMatters:
      "Since plants cannot move from place to place, these growth-based responses are their main way " +
      "of adjusting to environmental conditions — positioning leaves for light, anchoring roots toward " +
      "water and against gravity.",
    whyItWorks:
      'Tropisms happen because a hormone (mainly auxin) is unevenly distributed across a plant organ in ' +
      'response to a stimulus — more auxin accumulates on the shaded or lower side of a stem, causing ' +
      'those cells to elongate more, which bends the growing tip toward the light or away from gravity.',
    realLifeExample: {
      title: 'A houseplant leaning toward a window',
      scenario: 'A houseplant kept near a window gradually bends its stem toward the light source.',
      explanation: 'This is phototropism in action — auxin accumulates on the shaded side of the stem, causing those cells to elongate faster than the sunlit side, bending the stem toward the window.',
    },
    practiceQuestions: [
      {
        id: 'plant-coordination-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What causes a plant stem to bend toward a light source (phototropism)?',
        options: [
          { id: 'a', text: 'Auxin accumulates on the shaded side, causing those cells to elongate more than the lit side.' },
          { id: 'b', text: 'The plant physically moves its whole body toward the light.' },
          { id: 'c', text: 'Light directly shrinks cells on the lit side.' },
          { id: 'd', text: 'Plants have no directional growth response to light.' },
        ],
        correctOptionId: 'a',
        hints: ['Which side of the stem elongates more, and why?'],
        explanation: 'Uneven auxin distribution (more on the shaded side) causes uneven cell elongation, bending the stem toward the light.',
      },
    ],
    commonMistake:
      "Assuming plants 'move' toward stimuli the way animals do — plant responses are almost always " +
      "growth-based (tropisms), driven by hormones, rather than movement of the whole organism.",
    quickReview: [
      'Tropisms: directional growth responses (phototropism, gravitropism, hydrotropism).',
      'Auxin distribution drives tropisms via uneven cell elongation.',
      'Plants respond via growth (hormones), not a nervous system.',
    ],
  },

  'plant-growth-regulators': {
    slug: 'plant-growth-regulators',
    title: 'Plant Growth Regulators',
    difficulty: 'medium',
    simpleExplanation:
      'Plant growth regulators (plant hormones) are chemical messengers that control plant growth and ' +
      'development — the main ones are auxin (elongation, tropisms), gibberellins (stem elongation, ' +
      'seed germination), cytokinins (cell division), abscisic acid (dormancy, stress response), and ' +
      'ethylene (fruit ripening, ageing).',
    whyItMatters:
      "These hormones control nearly every stage of a plant's life, and understanding them lets " +
      "farmers and horticulturists deliberately manipulate growth, germination, and ripening for " +
      "agricultural benefit.",
    whyItWorks:
      "Each hormone acts by binding to specific receptors in plant cells and triggering a signalling " +
      "cascade that changes gene expression — this is why very small hormone concentrations can " +
      "produce large, specific developmental effects, and why different hormones (or combinations) " +
      "produce entirely different outcomes.",
    realLifeExample: {
      title: 'Using ethylene gas to ripen fruit',
      scenario: 'Bananas and other fruits are often picked green and ripened later using ethylene gas exposure.',
      explanation: "Ethylene is the natural ripening hormone — controlled exposure triggers the same ripening processes (softening, colour change, sugar increase) that would normally happen on the plant, letting distributors ripen fruit on a controlled schedule.",
    },
    practiceQuestions: [
      {
        id: 'growth-regulators-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which plant hormone is primarily responsible for triggering fruit ripening?',
        options: [
          { id: 'a', text: 'Auxin' },
          { id: 'b', text: 'Ethylene' },
          { id: 'c', text: 'Cytokinin' },
          { id: 'd', text: 'Abscisic acid' },
        ],
        correctOptionId: 'b',
        hints: ['This hormone is a gas, unlike the other plant hormones.'],
        explanation: 'Ethylene is the plant hormone responsible for triggering ripening — this is why fruit can be artificially ripened with controlled ethylene exposure.',
      },
    ],
    commonMistake:
      "Assuming plant hormones each act in isolation — in reality, plant development usually results " +
      "from the BALANCE and interaction between several hormones at once, not any single hormone acting " +
      "alone.",
    quickReview: [
      'Main plant hormones: auxin, gibberellins, cytokinins, abscisic acid, ethylene.',
      'Each hormone triggers specific gene-expression changes via cell receptors.',
      'Example: ethylene triggers fruit ripening, used commercially to control ripening timing.',
    ],
  },

  'seed-dormancy-and-germination': {
    slug: 'seed-dormancy-and-germination',
    title: 'Seed Dormancy and Seed Germination',
    difficulty: 'medium',
    simpleExplanation:
      'Seed dormancy is a resting state in which a seed delays germination even under otherwise ' +
      'favourable conditions, until specific internal or environmental triggers (like water, oxygen, ' +
      'the right temperature, or light) are met — at which point germination begins, and the seed grows ' +
      'into a seedling.',
    whyItMatters:
      "Dormancy is a survival strategy: it prevents seeds from germinating at the wrong time (like just " +
      "before a harsh winter or during a brief false-spring), improving the odds that a seedling " +
      "survives once it does sprout.",
    whyItWorks:
      "Dormancy is maintained by a balance of hormones — mainly high abscisic acid relative to " +
      "gibberellins — and is broken when environmental cues (water uptake, temperature change, light " +
      "exposure) shift that balance toward gibberellins, which then trigger the enzymes needed to " +
      "mobilise the seed's stored food reserves and begin growth.",
    realLifeExample: {
      title: 'Why some seeds need a cold period before planting (stratification)',
      scenario: 'Some seeds, like apple seeds, will not germinate unless first exposed to a period of cold, moist conditions.',
      explanation: "This requirement (stratification) prevents seeds from germinating in autumn, right before winter would kill the seedling — the cold exposure itself is the environmental cue that shifts the hormone balance and breaks dormancy, timed so germination naturally occurs in spring instead.",
    },
    practiceQuestions: [
      {
        id: 'seed-dormancy-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is seed dormancy considered an evolutionary advantage?',
        options: [
          { id: 'a', text: 'It prevents germination at times that would be unfavourable for seedling survival.' },
          { id: 'b', text: 'It permanently prevents seeds from ever germinating.' },
          { id: 'c', text: 'It has no survival benefit at all.' },
          { id: 'd', text: 'It makes seeds grow faster once conditions are favourable.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what could happen if a seed germinated right before a harsh season.'],
        explanation: 'Dormancy delays germination until the right environmental cues occur, improving the odds that a seedling germinates at a time it can actually survive.',
      },
    ],
    commonMistake:
      "Thinking dormant seeds are dead or inactive — a dormant seed is alive and metabolically primed, " +
      "simply waiting for the right trigger before actively germinating.",
    quickReview: [
      'Dormancy delays germination until favourable conditions/triggers occur.',
      'Hormone balance (abscisic acid vs. gibberellins) controls dormancy and its release.',
      'Example: stratification (cold exposure) breaks dormancy in some seeds, timing germination for spring.',
    ],
  },

  'photoperiodism-and-photomorphogenesis': {
    slug: 'photoperiodism-and-photomorphogenesis',
    title: 'Photoperiodism and Photomorphogenesis',
    difficulty: 'hard',
    simpleExplanation:
      "Photoperiodism is a plant's response to the relative length of day and night, which controls " +
      "processes like flowering timing (short-day, long-day, or day-neutral plants). " +
      "Photomorphogenesis is light-controlled development more broadly — how light itself (not just its " +
      "duration) shapes a plant's growth pattern, such as germinating seedlings developing normal green " +
      "leaves in light versus a pale, elongated form in darkness.",
    whyItMatters:
      "These light-sensing systems let a plant precisely time major life events (like flowering) to the " +
      "correct season, and adjust its physical growth form to actually reach available light.",
    whyItWorks:
      "Plants detect day length and light quality using light-sensitive pigments (like phytochrome), " +
      "which change form depending on the type and duration of light received — this changed pigment " +
      "form then triggers or suppresses specific genes, such as those controlling flowering or stem " +
      "elongation.",
    realLifeExample: {
      title: 'Short-day plants flowering in autumn',
      scenario: 'Chrysanthemums are short-day plants that naturally flower as autumn days grow shorter.',
      explanation: 'Chrysanthemums use phytochrome to detect the lengthening nights of autumn (technically responding to night length, not day length) — once nights exceed a critical length, flowering is triggered, timing blooming to autumn rather than midsummer.',
    },
    practiceQuestions: [
      {
        id: 'photoperiodism-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What pigment do plants primarily use to detect day length and light quality?',
        options: [
          { id: 'a', text: 'Chlorophyll' },
          { id: 'b', text: 'Phytochrome' },
          { id: 'c', text: 'Melanin' },
          { id: 'd', text: 'Carotenoid' },
        ],
        correctOptionId: 'b',
        hints: ['This pigment changes form depending on the light it absorbs, unlike the pigment used in photosynthesis.'],
        explanation: 'Phytochrome is the light-sensitive pigment plants use to detect day/night length and light quality, triggering responses like flowering.',
      },
    ],
    commonMistake:
      "Assuming 'short-day plants' flower because of a short period of light exposure specifically — " +
      "technically, these plants are responding to a sufficiently LONG uninterrupted period of darkness " +
      "(night length), not day length directly, though the two are related.",
    quickReview: [
      'Photoperiodism: response to day/night length, controlling processes like flowering.',
      'Photomorphogenesis: light-controlled development of growth form more broadly.',
      'Phytochrome is the key light-sensing pigment behind both processes.',
    ],
  },

  'the-human-nervous-system': {
    slug: 'the-human-nervous-system',
    title: 'Human Nervous System',
    difficulty: 'medium',
    simpleExplanation:
      'The human nervous system is divided into the central nervous system (CNS: brain and spinal ' +
      'cord, where information is processed) and the peripheral nervous system (PNS: nerves connecting ' +
      'the CNS to the rest of the body, carrying sensory information in and motor commands out).',
    whyItMatters:
      "This organisation lets the body rapidly detect changes (via sensory input), process them " +
      "centrally, and respond with a coordinated, appropriate action (via motor output) — the " +
      "foundation for everything from reflexes to voluntary movement to conscious thought.",
    whyItWorks:
      "Sensory neurons carry information from receptors to the CNS; the CNS processes and integrates " +
      "this information (from simple reflex processing in the spinal cord to complex analysis in the " +
      "brain); motor neurons then carry commands from the CNS out to effectors (muscles or glands) — " +
      "this three-part organisation (sensory → processing → motor) underlies essentially all nervous " +
      "system function.",
    realLifeExample: {
      title: 'The knee-jerk reflex',
      scenario: 'Tapping just below the kneecap causes an involuntary kick of the lower leg.',
      explanation: "This reflex is processed almost entirely within the spinal cord (part of the CNS), without needing to involve the brain — a sensory neuron detects the tap, connects directly to a motor neuron in the spinal cord, and the leg kicks in a fraction of a second, faster than conscious brain processing would allow.",
    },
    practiceQuestions: [
      {
        id: 'nervous-system-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which structures make up the central nervous system (CNS)?',
        options: [
          { id: 'a', text: 'The brain and spinal cord' },
          { id: 'b', text: 'All nerves throughout the body' },
          { id: 'c', text: 'Only the brain' },
          { id: 'd', text: 'The heart and lungs' },
        ],
        correctOptionId: 'a',
        hints: ['The CNS is where information is centrally processed.'],
        explanation: 'The CNS consists of the brain and spinal cord — the peripheral nervous system consists of the nerves connecting the CNS to the rest of the body.',
      },
    ],
    commonMistake:
      "Assuming every response requires conscious brain processing — reflexes (like the knee-jerk " +
      "reflex) are processed directly in the spinal cord, bypassing the brain for a much faster " +
      "response.",
    quickReview: [
      'CNS: brain and spinal cord (processing). PNS: nerves (sensory in, motor out).',
      'Pathway: sensory neuron → CNS processing → motor neuron → effector.',
      'Reflexes can be processed in the spinal cord alone, without the brain.',
    ],
  },

  'structure-of-neurones': {
    slug: 'structure-of-neurones',
    title: 'Structure of Neurones',
    difficulty: 'medium',
    simpleExplanation:
      "A neurone (nerve cell) has three main parts: dendrites (branching extensions that receive " +
      "signals from other neurones), a cell body (containing the nucleus and organelles), and an axon " +
      "(a long extension that carries an electrical impulse away toward the next cell) — many axons are " +
      "wrapped in a myelin sheath that speeds up signal transmission.",
    whyItMatters:
      "A neurone's specialised structure is precisely what allows it to receive, integrate, and " +
      "transmit electrical signals rapidly over long distances — some human axons run over a metre long, " +
      "from the spinal cord to the toes.",
    whyItWorks:
      "The myelin sheath (made by specialised glial cells) insulates sections of the axon, forcing the " +
      "electrical impulse to jump rapidly between small gaps (nodes of Ranvier) rather than travelling " +
      "continuously along the whole membrane — this 'saltatory conduction' dramatically speeds up signal " +
      "transmission compared to an unmyelinated axon.",
    realLifeExample: {
      title: 'Multiple sclerosis (MS)',
      scenario: 'MS is a disease in which the immune system damages the myelin sheath around neurones.',
      explanation: 'As myelin is damaged, saltatory conduction breaks down and nerve impulses travel much more slowly (or not at all) along affected axons — directly explaining the movement, sensory, and coordination problems seen in MS.',
    },
    practiceQuestions: [
      {
        id: 'neurone-structure-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the main function of the myelin sheath around an axon?',
        options: [
          { id: 'a', text: 'It receives signals from other neurones.' },
          { id: 'b', text: 'It speeds up nerve impulse transmission via saltatory conduction.' },
          { id: 'c', text: 'It produces neurotransmitters.' },
          { id: 'd', text: 'It contains the neurone\'s nucleus.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what happens to signal speed when myelin is damaged, as in MS.'],
        explanation: 'Myelin insulates the axon, forcing the impulse to jump between gaps (nodes of Ranvier), which significantly speeds up transmission compared to an unmyelinated axon.',
      },
    ],
    commonMistake:
      "Confusing dendrites and axons — dendrites RECEIVE signals (usually short, branching, near the " +
      "cell body); the axon TRANSMITS the signal onward (usually one long extension per neurone).",
    quickReview: [
      'Neurone parts: dendrites (receive), cell body, axon (transmit).',
      'Myelin sheath speeds up transmission via saltatory conduction (jumping between nodes).',
      'Example: MS damages myelin, slowing nerve transmission and impairing function.',
    ],
  },

  synapses: {
    slug: 'synapses',
    title: 'Synapses',
    difficulty: 'hard',
    simpleExplanation:
      "A synapse is the small gap between two neurones (or a neurone and a muscle) where signal " +
      "transmission happens chemically: an arriving electrical impulse triggers the release of " +
      "neurotransmitter molecules, which cross the gap and bind to receptors on the next cell, " +
      "triggering a new electrical signal there.",
    whyItMatters:
      "Synapses are not just passive connectors — they are control points where signals can be " +
      "strengthened, weakened, or blocked, which is the basis for how the nervous system processes " +
      "information (and how many drugs and neurological conditions work).",
    whyItWorks:
      "Because transmission at a synapse depends on a specific neurotransmitter binding to a specific " +
      "receptor, it can be finely regulated: a cell can integrate many synaptic inputs simultaneously " +
      "(some excitatory, some inhibitory) and only fire if the combined signal crosses a threshold — " +
      "this chemical junction is exactly where the nervous system performs decision-making at the " +
      "cellular level.",
    realLifeExample: {
      title: 'How some antidepressants work',
      scenario: 'Some antidepressant medications work by blocking the reabsorption of the neurotransmitter serotonin at synapses.',
      explanation: 'By blocking serotonin reuptake, these drugs keep more serotonin available in the synaptic gap for longer, prolonging its effect on receiving neurones — directly targeting how a specific synapse functions to influence mood-related brain activity.',
    },
    practiceQuestions: [
      {
        id: 'synapses-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'How does an electrical nerve impulse cross the gap at a synapse?',
        options: [
          { id: 'a', text: 'The electrical signal jumps directly across the gap.' },
          { id: 'b', text: 'The impulse triggers release of neurotransmitter molecules, which cross the gap and bind receptors on the next cell.' },
          { id: 'c', text: 'The two neurones physically fuse together at the synapse.' },
          { id: 'd', text: 'Synapses do not actually transmit any signal.' },
        ],
        correctOptionId: 'b',
        hints: ['The transmission mechanism at a synapse is chemical, not directly electrical.'],
        explanation: 'At a synapse, the electrical signal triggers neurotransmitter release, which crosses the gap chemically and binds receptors to generate a new signal in the next cell.',
      },
    ],
    commonMistake:
      "Assuming the nerve impulse itself physically 'jumps' across the synaptic gap — the ELECTRICAL " +
      "signal stops at the synapse; it is a CHEMICAL messenger (neurotransmitter) that actually crosses " +
      "the gap, triggering a new electrical signal on the other side.",
    quickReview: [
      'Synapse: the gap between two neurones (or a neurone and effector).',
      'Transmission is chemical: neurotransmitter release → diffusion across gap → receptor binding.',
      'Synapses are control points, integrating excitatory and inhibitory input.',
    ],
  },

  'sense-organs': {
    slug: 'sense-organs',
    title: 'Sense Organs',
    difficulty: 'easy',
    simpleExplanation:
      "Sense organs (eyes, ears, skin, nose, tongue) contain specialised receptor cells that detect " +
      "specific types of stimuli from the environment — light, sound, touch/pressure/temperature, " +
      "chemicals in the air, and chemicals in food — and convert them into nerve impulses sent to the " +
      "brain for interpretation.",
    whyItMatters:
      "Sense organs are the body's only source of information about the outside world — without them, " +
      "the nervous system would have nothing to process or respond to.",
    whyItWorks:
      "Each sense organ contains receptor cells specialised to respond to one particular type of " +
      "energy or stimulus (a process called transduction) — photoreceptors in the eye respond " +
      "specifically to light, hair cells in the ear respond specifically to sound vibrations — this " +
      "specialisation is what allows the brain to distinguish between different types of sensory " +
      "information arriving as nerve impulses.",
    realLifeExample: {
      title: 'Colour blindness',
      scenario: 'People with red-green colour blindness struggle to distinguish certain colours.',
      explanation: 'This occurs because one or more types of colour-detecting photoreceptor cells (cones) in the retina are missing or malfunctioning — directly showing how specific receptor cell types are responsible for detecting specific aspects of a stimulus (in this case, particular wavelengths of light).',
    },
    practiceQuestions: [
      {
        id: 'sense-organs-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is the basic function of a sense organ\'s receptor cells?',
        options: [
          { id: 'a', text: 'To detect a specific type of stimulus and convert it into a nerve impulse.' },
          { id: 'b', text: 'To directly control muscle movement.' },
          { id: 'c', text: 'To produce hormones only.' },
          { id: 'd', text: 'To store long-term memories.' },
        ],
        correctOptionId: 'a',
        hints: ['This process is called transduction.'],
        explanation: 'Receptor cells are specialised to detect one type of stimulus (light, sound, touch, chemicals) and convert it into a nerve impulse the brain can interpret.',
      },
    ],
    commonMistake:
      "Thinking a single receptor type can detect many different kinds of stimuli — each receptor type " +
      "is specialised for ONE kind of stimulus (e.g. light OR sound, not both), which is why damage to " +
      "one receptor type impairs only that specific sense.",
    quickReview: [
      'Sense organs contain receptor cells specialised for one type of stimulus.',
      'Transduction converts a stimulus into a nerve impulse sent to the brain.',
      'Example: colour blindness results from missing/faulty cone photoreceptor types.',
    ],
  },

  'endocrine-glands-and-hormones': {
    slug: 'endocrine-glands-and-hormones',
    title: 'Endocrine Glands and Hormones',
    difficulty: 'medium',
    simpleExplanation:
      'The endocrine system is a network of glands (like the pituitary, thyroid, adrenal glands, and ' +
      'pancreas) that release hormones directly into the bloodstream — chemical messengers that travel ' +
      'throughout the body and produce effects in specific target cells or organs that have matching ' +
      'receptors.',
    whyItMatters:
      "The endocrine system controls slower, longer-lasting processes than the nervous system — growth, " +
      "metabolism, reproduction, and the body's response to ongoing stress — that need widespread, " +
      "sustained coordination rather than an instantaneous, localised response.",
    whyItWorks:
      "A hormone can only affect a cell that has the correct receptor for it — this is why a single " +
      "hormone, travelling everywhere in the bloodstream, still produces a specific, targeted effect " +
      "only in certain tissues, rather than affecting every cell it passes.",
    realLifeExample: {
      title: 'Insulin and blood glucose regulation',
      scenario: 'After eating, the pancreas releases insulin into the blood, which lowers blood glucose levels.',
      explanation: "Insulin travels throughout the entire bloodstream, but only binds to insulin receptors on specific target cells (like liver, muscle, and fat cells), triggering them to take up glucose from the blood — cells without insulin receptors are unaffected, showing hormone target-specificity in action.",
    },
    practiceQuestions: [
      {
        id: 'endocrine-glands-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does a hormone released into the bloodstream affect only certain tissues, not every cell in the body?',
        options: [
          { id: 'a', text: 'Only cells with the matching receptor for that hormone respond to it.' },
          { id: 'b', text: 'Hormones physically avoid cells that should not respond.' },
          { id: 'c', text: 'Hormones only travel to nearby cells, never far through the bloodstream.' },
          { id: 'd', text: 'All cells respond equally to every hormone.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what a target cell needs in order to detect and respond to a specific hormone.'],
        explanation: 'A hormone only produces an effect in cells that carry the matching receptor for it — this receptor-specificity is what gives a widely distributed hormone a targeted, specific effect.',
      },
    ],
    commonMistake:
      "Assuming hormones act instantly, like nerve impulses — endocrine responses are generally " +
      "slower to begin but longer-lasting than nervous responses, suited to gradual, sustained " +
      "processes rather than split-second reactions.",
    quickReview: [
      'Endocrine glands release hormones directly into the bloodstream.',
      'Hormones only affect cells with matching receptors (target-cell specificity).',
      'Example: insulin lowers blood glucose by acting on cells with insulin receptors.',
    ],
  },

  'comparing-nervous-and-endocrine-systems': {
    slug: 'comparing-nervous-and-endocrine-systems',
    title: 'Comparison between Nervous System and Endocrine System',
    difficulty: 'medium',
    simpleExplanation:
      'The nervous system and endocrine system are the body\'s two coordination systems, but they work ' +
      'very differently: the nervous system sends fast, short-lived electrical/chemical signals along ' +
      'specific nerve pathways to precise targets, while the endocrine system sends slower, ' +
      'longer-lasting chemical signals (hormones) broadly through the bloodstream to any cell with a ' +
      'matching receptor.',
    whyItMatters:
      "The body uses both systems together because each is suited to different needs — quick, " +
      "precise responses (nervous) versus gradual, widespread, sustained regulation (endocrine) — " +
      "understanding both explains why the body has two distinct coordination systems rather than just " +
      "one.",
    whyItWorks:
      "Nervous signals travel along dedicated, insulated pathways (axons) directly to a specific " +
      "target, producing responses in milliseconds that fade quickly — hormones instead diffuse through " +
      "the entire bloodstream, reaching all tissues but only affecting those with the right receptor, " +
      "typically taking seconds to hours to act but often producing effects that last much longer.",
    realLifeExample: {
      title: 'Fight-or-flight response using both systems together',
      scenario: 'When suddenly startled, a person\'s heart rate spikes almost immediately, and this heightened state persists for some time afterward.',
      explanation: "The immediate reaction (in milliseconds) is driven by the nervous system; the adrenal glands then release adrenaline (a hormone) into the blood, which sustains the heightened, alert state for a longer period afterward — a clear example of the two systems working together, each suited to a different timescale.",
    },
    practiceQuestions: [
      {
        id: 'nervous-endocrine-comparison-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which statement correctly contrasts the nervous and endocrine systems?',
        options: [
          { id: 'a', text: 'Nervous signals are fast and short-lived; endocrine signals are slower but longer-lasting.' },
          { id: 'b', text: 'Both systems act at exactly the same speed and duration.' },
          { id: 'c', text: 'The endocrine system uses electrical impulses exclusively.' },
          { id: 'd', text: 'The nervous system uses hormones exclusively.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about the fight-or-flight example — which response comes first, and which lasts longer?'],
        explanation: 'The nervous system produces fast, brief responses via electrical/chemical signals along nerves; the endocrine system produces slower, longer-lasting responses via hormones through the blood.',
      },
    ],
    commonMistake:
      "Thinking the body uses only one coordination system at a time — the nervous and endocrine " +
      "systems frequently work together (as in the fight-or-flight response), each contributing the " +
      "timescale of response the other is not suited for.",
    quickReview: [
      'Nervous system: fast, short-lived, precise pathway-based signals.',
      'Endocrine system: slower, longer-lasting, broad bloodstream-based signals.',
      'Both systems often work together, e.g. in the fight-or-flight response.',
    ],
  },
};
