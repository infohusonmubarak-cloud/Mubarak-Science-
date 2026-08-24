import type { Concept } from '@/types/content';

export const chapter3TransportConcepts: Record<string, Concept> = {
  'xylem-and-phloem-structure': {
    slug: 'xylem-and-phloem-structure',
    title: 'Structure of Transport Tissues',
    difficulty: 'medium',
    simpleExplanation:
      'Plants transport substances through two specialised tissues: xylem, made of dead, hollow, ' +
      'lignin-strengthened cells that carry water and dissolved minerals upward from roots, and ' +
      'phloem, made of living cells (sieve tube elements and companion cells) that carry sugars made ' +
      'in photosynthesis to wherever they are needed.',
    whyItMatters:
      'Every process covered later in this chapter — water movement, transpiration, translocation — ' +
      'happens because of the specific structural features of these two tissues, so understanding their ' +
      'construction is the foundation for the rest of the chapter.',
    whyItWorks:
      "Xylem cells die and lose their contents after forming, leaving continuous hollow tubes " +
      "reinforced with lignin — strong enough to resist collapsing under tension as water is pulled " +
      "upward. Phloem cells stay alive because active transport of sugars requires living cytoplasm " +
      "and energy, which dead xylem cells cannot provide.",
    realLifeExample: {
      title: 'Tree rings and wood',
      scenario: 'The wood of a tree trunk is almost entirely made of old xylem tissue, built up year after year.',
      explanation: "Because xylem is lignified and structurally strong even after the cells die, old xylem tissue doubles as the tree's main structural support — this is literally what wood is, showing how xylem's transport role and structural role are connected.",
    },
    practiceQuestions: [
      {
        id: 'xylem-phloem-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why are xylem cells dead at maturity, while phloem cells remain alive?',
        options: [
          { id: 'a', text: 'Xylem simply transports water and minerals passively through hollow tubes; phloem actively transports sugars, which requires living cytoplasm and energy.' },
          { id: 'b', text: 'Phloem cells are actually dead too, but look alive under a microscope.' },
          { id: 'c', text: 'Xylem cells die due to disease, not by normal development.' },
          { id: 'd', text: 'There is no functional reason — it is random.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about which transport process needs living cell machinery and which does not.'],
        explanation: 'Xylem transport of water is largely passive (driven by transpiration pull), so dead, hollow, lignified tubes work well — phloem transport of sugars is active and needs living cells to supply the energy.',
      },
    ],
    commonMistake:
      "Assuming both xylem and phloem are dead tissue — only xylem is dead at maturity; phloem's sieve " +
      "tube elements and companion cells remain alive and metabolically active.",
    quickReview: [
      'Xylem: dead, hollow, lignified cells transporting water and minerals upward.',
      'Phloem: living cells (sieve tubes + companion cells) transporting sugars.',
      "Xylem's lignified walls also provide structural support (wood).",
    ],
  },

  'movement-of-water-in-a-plant': {
    slug: 'movement-of-water-in-a-plant',
    title: 'Movement of Water in a Plant',
    difficulty: 'medium',
    simpleExplanation:
      'Water moves from the soil, into root hairs, across the root, into the xylem, and up the entire ' +
      'plant to the leaves, driven mainly by transpiration pull — as water evaporates from leaf cells, ' +
      'it pulls a continuous column of water up behind it through the xylem, aided by cohesion between ' +
      'water molecules and adhesion to xylem walls.',
    whyItMatters:
      "This pathway explains how plants — including very tall trees — can move water dozens of metres " +
      "upward without any pump, which is essential for delivering water and minerals to every living " +
      "cell in the plant.",
    whyItWorks:
      "Water molecules are strongly attracted to each other (cohesion, via hydrogen bonding) and to the " +
      "polar walls of the xylem (adhesion) — together, these forces let the water column resist " +
      "breaking under the tension created as water evaporates from the leaves, forming an unbroken " +
      "'pull' from root to leaf, known as the cohesion-tension theory.",
    realLifeExample: {
      title: 'How giant sequoias water their crowns',
      scenario: 'Giant sequoia trees can grow over 80 metres tall, yet still supply water to their topmost leaves.',
      explanation: "Without any active pump, cohesion-tension alone (transpiration pulling an unbroken water column through the xylem) is strong enough to lift water against gravity to the very top of even the tallest trees.",
    },
    practiceQuestions: [
      {
        id: 'water-movement-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the correct order of water movement through a plant?',
        options: [
          { id: 'a', text: 'Leaves → xylem → root hairs → soil' },
          { id: 'b', text: 'Soil → root hairs → root xylem → stem xylem → leaf xylem → evaporation from leaves' },
          { id: 'c', text: 'Soil → phloem → leaves' },
          { id: 'd', text: 'Leaves → phloem → roots → soil' },
        ],
        correctOptionId: 'b',
        hints: ['Water enters through the roots and exits through the leaves — trace the xylem pathway between.'],
        explanation: 'Water is absorbed by root hairs, crosses into the root xylem, travels up through the stem xylem to the leaf xylem, and finally evaporates from leaf cells (transpiration).',
      },
    ],
    commonMistake:
      "Thinking a pump (like a heart) drives water movement in plants — plants have no pump; water " +
      "movement is driven passively by transpiration pull, cohesion, and adhesion (cohesion-tension theory).",
    quickReview: [
      'Water path: soil → root hairs → root xylem → stem xylem → leaf xylem → evaporation.',
      'Transpiration pull, cohesion, and adhesion together move water upward (cohesion-tension theory).',
      'No pump is needed — the process is entirely passive.',
    ],
  },

  'transpiration-and-factors-affecting-it': {
    slug: 'transpiration-and-factors-affecting-it',
    title: 'Transpiration and Factors Affecting It',
    difficulty: 'medium',
    simpleExplanation:
      'Transpiration is the evaporation of water vapour from a plant, mostly through small pores ' +
      '(stomata) on the leaves. Its rate is affected by temperature, humidity, wind speed, and light ' +
      'intensity — higher temperature, lower humidity, more wind, and more light all generally increase ' +
      'the rate of transpiration.',
    whyItMatters:
      "Understanding what speeds up or slows down transpiration explains why plants wilt in hot, dry, " +
      "windy conditions, and helps farmers and gardeners manage watering schedules appropriately.",
    whyItWorks:
      'Each factor changes the rate of water vapour diffusion out of the leaf: heat increases the ' +
      'energy available for evaporation, low humidity increases the concentration gradient driving ' +
      'diffusion outward, wind removes humid air from around the leaf (maintaining a steep gradient), ' +
      'and light causes stomata to open wider (for photosynthesis), which also allows more water vapour ' +
      'to escape.',
    realLifeExample: {
      title: 'Wilting on a hot, windy day',
      scenario: 'Garden plants often wilt visibly on a hot, dry, windy afternoon, even with moist soil.',
      explanation: "Heat, low humidity, and wind together dramatically increase the transpiration rate — if water loss from the leaves outpaces water uptake by the roots, the plant temporarily wilts even when soil water is available.",
    },
    practiceQuestions: [
      {
        id: 'transpiration-factors-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which combination of conditions would produce the HIGHEST rate of transpiration?',
        options: [
          { id: 'a', text: 'Cool, humid, still air' },
          { id: 'b', text: 'Hot, dry, windy conditions with bright light' },
          { id: 'c', text: 'Cool temperature with high humidity and no wind' },
          { id: 'd', text: 'Darkness with high humidity' },
        ],
        correctOptionId: 'b',
        hints: ['Consider which conditions maximise evaporation and the diffusion gradient out of the leaf.'],
        explanation: 'Heat, low humidity, wind, and bright light (open stomata) together maximise the rate of water loss from leaves.',
      },
    ],
    commonMistake:
      "Assuming transpiration is purely a 'downside' to be minimised — while it does cost the plant " +
      "water, it also drives water and mineral transport (the next concept covers the benefit directly).",
    quickReview: [
      'Transpiration: evaporation of water vapour, mainly through leaf stomata.',
      'Rate increases with: higher temperature, lower humidity, more wind, more light.',
      'Each factor works by increasing the diffusion gradient or opening stomata wider.',
    ],
  },

  'benefits-and-demonstration-of-transpiration': {
    slug: 'benefits-and-demonstration-of-transpiration',
    title: 'Benefits and Demonstration of Transpiration Pull',
    difficulty: 'easy',
    simpleExplanation:
      "Despite costing the plant water, transpiration provides real benefits: it powers transpiration " +
      "pull (drawing water and dissolved minerals up from the roots) and helps cool the leaf through " +
      "evaporative cooling. A potometer is a simple laboratory device that demonstrates and measures the " +
      "rate of water uptake caused by transpiration.",
    whyItMatters:
      "Recognising transpiration's benefits (not just its water cost) completes the picture of why " +
      "plants tolerate it rather than evolving to prevent water loss entirely.",
    whyItWorks:
      "As water evaporates from mesophyll cells inside the leaf, it lowers the water potential there, " +
      "pulling more water up through the xylem to replace it — this same evaporation absorbs heat " +
      "energy (the latent heat of vaporisation), which cools the leaf, similar to how sweating cools " +
      "human skin.",
    realLifeExample: {
      title: 'Using a potometer to measure water uptake',
      scenario: 'A leafy shoot is set up in a potometer, and an air bubble in a connected capillary tube is timed as it moves along a scale.',
      explanation: 'As the shoot transpires, it draws water up through the tube, pulling the air bubble along with it — the distance the bubble moves per minute gives a measurable rate that approximates the rate of transpiration.',
    },
    practiceQuestions: [
      {
        id: 'transpiration-benefits-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What is a potometer used to demonstrate?',
        options: [
          { id: 'a', text: 'The rate of photosynthesis' },
          { id: 'b', text: 'The rate of water uptake by a shoot, as a proxy for transpiration rate' },
          { id: 'c', text: 'The structure of xylem cells' },
          { id: 'd', text: 'The rate of cell division in roots' },
        ],
        correctOptionId: 'b',
        hints: ['A potometer tracks how far an air bubble moves in a tube connected to a leafy shoot.'],
        explanation: 'A potometer measures water uptake by a cut shoot over time, which closely approximates its transpiration rate.',
      },
    ],
    commonMistake:
      "Thinking a potometer measures transpiration directly — it actually measures water UPTAKE by the " +
      "shoot, which is a very close (but not perfectly identical) proxy, since a small amount of " +
      "absorbed water is used for growth and other processes rather than transpired.",
    quickReview: [
      'Transpiration benefits: powers water/mineral transport (transpiration pull) and cools the leaf.',
      'Evaporative cooling works the same way sweating cools human skin.',
      'A potometer measures water uptake as a proxy for the rate of transpiration.',
    ],
  },

  'translocation-in-plants': {
    slug: 'translocation-in-plants',
    title: 'Translocation',
    difficulty: 'medium',
    simpleExplanation:
      "Translocation is the transport of sugars (mainly sucrose) and other organic solutes through the " +
      "phloem, from 'source' tissues (like photosynthesising leaves, where sugar is made) to 'sink' " +
      "tissues (like roots, fruits, or growing shoots, where sugar is used or stored).",
    whyItMatters:
      "Translocation delivers the energy and building material produced by photosynthesis to every " +
      "part of the plant that cannot photosynthesise for itself — roots, developing fruit, and growing " +
      "tips all depend on it.",
    whyItWorks:
      "Sugar is actively loaded into phloem sieve tubes at the source, lowering the water potential " +
      "there and drawing water in from the xylem by osmosis — this raises the pressure at the source " +
      "end, pushing the sugar-water solution through the sieve tubes toward the sink, where sugar is " +
      "unloaded and used, an explanation known as the pressure-flow (mass flow) hypothesis.",
    realLifeExample: {
      title: 'Why fruit ripens sweeter as it develops',
      scenario: 'Developing fruit accumulates increasing amounts of sugar as it matures.',
      explanation: 'Developing fruit acts as a strong sink, actively drawing sugar translocated from source leaves through the phloem via pressure-flow — this is why fruit becomes sweeter as more sugar accumulates during ripening.',
    },
    practiceQuestions: [
      {
        id: 'translocation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'According to the pressure-flow hypothesis, what drives sugar solution movement through the phloem?',
        options: [
          { id: 'a', text: 'A pressure difference created by sugar loading at the source and unloading at the sink.' },
          { id: 'b', text: 'Gravity alone pulls sugar downward.' },
          { id: 'c', text: 'The phloem actively pumps sugar like a heart pumps blood.' },
          { id: 'd', text: 'Transpiration pulls sugar the same way it pulls water in xylem.' },
        ],
        correctOptionId: 'a',
        hints: ['Loading sugar at the source changes water potential, which changes pressure.'],
        explanation: 'Active sugar loading at the source lowers water potential, drawing water in by osmosis and raising pressure, which pushes the solution toward the lower-pressure sink where sugar is unloaded.',
      },
    ],
    commonMistake:
      "Confusing translocation (movement of sugars via phloem) with transpiration-driven water movement " +
      "(via xylem) — the two use different tissues and different driving mechanisms (pressure-flow vs. " +
      "cohesion-tension).",
    quickReview: [
      'Translocation moves sugars through phloem, from source (made) to sink (used/stored).',
      'Pressure-flow hypothesis: sugar loading/unloading creates a pressure gradient that drives flow.',
      'Example: developing fruit is a strong sink, accumulating translocated sugar.',
    ],
  },

  'principles-and-features-of-mass-transport': {
    slug: 'principles-and-features-of-mass-transport',
    title: 'Principles and Features of Mass Transport Systems',
    difficulty: 'medium',
    simpleExplanation:
      "Larger, more active animals need a mass transport system (like a circulatory system) because " +
      "diffusion alone is too slow to move substances over long distances. Effective mass transport " +
      "systems share common features: a fluid medium (like blood), a pump (a heart) to move it, and a " +
      "network of vessels reaching close to every cell.",
    whyItMatters:
      "This principle explains WHY animals evolved circulatory systems at all — it sets up the " +
      "cardiovascular system topics that follow as the direct solution to a physical limitation of " +
      "diffusion.",
    whyItWorks:
      "Diffusion rate depends on distance, and the time needed for diffusion increases with the square " +
      "of the distance — so beyond a small distance (a few millimetres), diffusion alone becomes far " +
      "too slow to supply oxygen and nutrients or remove wastes quickly enough for an active animal's " +
      "cells, making a pumped, vessel-based mass transport system necessary.",
    realLifeExample: {
      title: 'Why single-celled organisms need no circulatory system',
      scenario: 'Amoebas and other single-celled organisms have no heart or blood vessels at all.',
      explanation: "Because every part of a single cell is close enough to its surface, simple diffusion is fast enough to supply its needs — it is only in larger, multicellular animals, where many cells are far from the body surface, that a dedicated mass transport system becomes essential.",
    },
    practiceQuestions: [
      {
        id: 'mass-transport-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do large, active animals need a circulatory system rather than relying on diffusion alone?',
        options: [
          { id: 'a', text: 'Diffusion becomes far too slow over the larger distances found in bigger bodies.' },
          { id: 'b', text: 'Diffusion does not work in animals at all.' },
          { id: 'c', text: 'Circulatory systems replace the need for any cell-level diffusion.' },
          { id: 'd', text: 'Larger animals have fewer cells that need supplying.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about how diffusion time scales with distance.'],
        explanation: 'Diffusion is only efficient over very short distances — larger bodies need a pumped mass transport system to move substances quickly enough over longer distances, with diffusion still handling the final short distance into each cell.',
      },
    ],
    commonMistake:
      "Thinking mass transport REPLACES diffusion entirely — mass transport (blood flow) moves " +
      "substances over long distances quickly, but the final exchange between blood and individual " +
      "cells still happens by diffusion over a short distance.",
    quickReview: [
      'Diffusion alone is too slow over long distances in larger, active animals.',
      'Mass transport systems need: a fluid medium, a pump, and a vessel network.',
      'Mass transport works alongside diffusion, not instead of it — diffusion handles the last short distance.',
    ],
  },

  'structure-of-the-heart': {
    slug: 'structure-of-the-heart',
    title: 'The Structure of the Heart',
    difficulty: 'medium',
    simpleExplanation:
      'The human heart has four chambers: two upper atria (which receive blood) and two lower, ' +
      'thicker-walled ventricles (which pump blood out). The right side pumps deoxygenated blood to ' +
      'the lungs; the left side pumps oxygenated blood to the rest of the body. One-way valves between ' +
      'chambers prevent blood from flowing backward.',
    whyItMatters:
      "The heart's four-chambered structure is what completely separates oxygenated and deoxygenated " +
      "blood in mammals, allowing much more efficient oxygen delivery than a simpler heart design would.",
    whyItWorks:
      "Because the heart is fully divided into left and right sides by a muscular septum, oxygenated " +
      "blood returning from the lungs never mixes with deoxygenated blood returning from the body — " +
      "this keeps the blood sent to body tissues fully oxygenated, maximising the efficiency of oxygen " +
      "delivery.",
    realLifeExample: {
      title: 'Congenital heart defects (septal defects)',
      scenario: 'Some babies are born with a small hole in the septum between the heart chambers (a "hole in the heart").',
      explanation: 'This defect allows oxygenated and deoxygenated blood to mix, reducing the oxygen content of blood sent to the body — a direct illustration of why the septum\'s complete separation of the two sides matters for healthy function.',
    },
    practiceQuestions: [
      {
        id: 'heart-structure-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does the human heart have four separate chambers instead of two?',
        options: [
          { id: 'a', text: 'To completely separate oxygenated and deoxygenated blood, maximising oxygen delivery efficiency.' },
          { id: 'b', text: 'To pump blood at exactly the same pressure everywhere in the body.' },
          { id: 'c', text: 'Four chambers have no functional advantage over two.' },
          { id: 'd', text: 'To store extra blood for emergencies only.' },
        ],
        correctOptionId: 'a',
        hints: ['Consider what would happen if oxygenated and deoxygenated blood mixed.'],
        explanation: 'The four-chamber structure fully separates the pulmonary (lung) and systemic (body) circuits, preventing oxygenated and deoxygenated blood from mixing and maximising oxygen delivery efficiency.',
      },
    ],
    commonMistake:
      "Assuming both sides of the heart pump at equal pressure — the left ventricle has a much thicker " +
      "muscular wall than the right, because it must pump blood at higher pressure to reach the entire " +
      "body, while the right ventricle only pumps to the nearby lungs.",
    quickReview: [
      'Four chambers: right atrium, right ventricle, left atrium, left ventricle.',
      'Right side: deoxygenated blood → lungs. Left side: oxygenated blood → body.',
      'The septum keeps oxygenated and deoxygenated blood completely separate.',
    ],
  },

  'blood-vessels': {
    slug: 'blood-vessels',
    title: 'The Blood Vessels',
    difficulty: 'medium',
    simpleExplanation:
      'Blood travels through three main types of vessels: arteries (thick, elastic, muscular walls, ' +
      'carrying blood away from the heart under high pressure), veins (thinner walls, larger lumens, ' +
      'with valves, carrying blood back to the heart under low pressure), and capillaries (single ' +
      'cell-thick walls, where exchange of substances with tissues actually happens).',
    whyItMatters:
      "Each vessel type's structure is precisely matched to its function — understanding this " +
      "structure-function relationship is a recurring theme across all of biology.",
    whyItWorks:
      "Arteries need thick, elastic, muscular walls to withstand and smooth out the high pressure " +
      "pulses from each heartbeat; capillaries need extremely thin (one-cell-thick) walls to allow " +
      "efficient diffusion of gases and nutrients across the shortest possible distance; veins need " +
      "valves because blood returning to the heart is under low pressure and could otherwise flow " +
      "backward, especially against gravity.",
    realLifeExample: {
      title: 'Varicose veins',
      scenario: 'Varicose veins occur when the valves in leg veins weaken or fail, causing blood to pool.',
      explanation: 'This condition directly shows why venous valves matter — without functioning one-way valves, low-pressure blood in the veins struggles to move against gravity back to the heart and instead pools, causing the veins to bulge.',
    },
    practiceQuestions: [
      {
        id: 'blood-vessels-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do capillaries have walls only one cell thick?',
        options: [
          { id: 'a', text: 'To withstand very high blood pressure.' },
          { id: 'b', text: 'To minimise the diffusion distance for exchanging substances with surrounding tissue.' },
          { id: 'c', text: 'Capillaries do not actually need strong walls because no blood flows through them.' },
          { id: 'd', text: 'To store the largest volume of blood in the body.' },
        ],
        correctOptionId: 'b',
        hints: ['Capillaries are the site where exchange with tissues actually happens.'],
        explanation: "Capillaries' extremely thin walls minimise the diffusion distance, allowing efficient, rapid exchange of oxygen, carbon dioxide, and nutrients with surrounding tissue.",
      },
    ],
    commonMistake:
      "Assuming veins carry only deoxygenated blood and arteries only oxygenated blood — this is true " +
      "for the systemic circuit, but the pulmonary artery carries deoxygenated blood to the lungs and " +
      "the pulmonary vein carries oxygenated blood back — the artery/vein distinction is about " +
      "direction (away from vs. toward the heart), not oxygen content.",
    quickReview: [
      'Arteries: thick, elastic, muscular walls — carry blood away from the heart at high pressure.',
      'Veins: thinner walls, valves — carry blood toward the heart at low pressure.',
      'Capillaries: one-cell-thick walls — the site of exchange with tissues.',
    ],
  },

  'components-of-blood': {
    slug: 'components-of-blood',
    title: 'The Components of the Blood',
    difficulty: 'easy',
    simpleExplanation:
      'Blood is made of plasma (the liquid portion, carrying dissolved substances), red blood cells ' +
      '(carrying oxygen via haemoglobin), white blood cells (part of the immune system), and platelets ' +
      '(cell fragments involved in blood clotting).',
    whyItMatters:
      "Each blood component has a distinct, essential job — understanding what each does explains what " +
      "goes wrong in conditions like anaemia (red blood cells), infection (white blood cells), or " +
      "bleeding disorders (platelets).",
    whyItWorks:
      "Red blood cells are packed with haemoglobin and lack a nucleus, maximising the space available " +
      "to carry oxygen; white blood cells vary in form specifically to detect and destroy pathogens; " +
      "platelets are cell fragments (not whole cells), which lets the body produce and deploy them " +
      "very rapidly when clotting is needed.",
    realLifeExample: {
      title: 'Anaemia and iron deficiency',
      scenario: 'A person with iron-deficiency anaemia often feels tired and short of breath.',
      explanation: 'Iron is essential for making haemoglobin — without enough iron, red blood cells carry less oxygen, so tissues (including muscles) receive less oxygen, directly causing fatigue and breathlessness.',
    },
    practiceQuestions: [
      {
        id: 'blood-components-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which blood component is primarily responsible for clotting?',
        options: [
          { id: 'a', text: 'Red blood cells' },
          { id: 'b', text: 'White blood cells' },
          { id: 'c', text: 'Platelets' },
          { id: 'd', text: 'Plasma alone' },
        ],
        correctOptionId: 'c',
        hints: ['This component consists of small cell fragments, not whole cells.'],
        explanation: 'Platelets are cell fragments that initiate and support the blood clotting process.',
      },
    ],
    commonMistake:
      "Assuming plasma is 'just water' — plasma is mostly water, but it also carries dissolved " +
      "proteins, nutrients, hormones, wastes, and clotting factors, making it a functionally important " +
      "part of blood, not simply a passive carrier fluid.",
    quickReview: [
      'Plasma: liquid portion, carries dissolved substances.',
      'Red blood cells: carry oxygen via haemoglobin.',
      'White blood cells: immune defence. Platelets: blood clotting.',
    ],
  },

  'blood-clotting': {
    slug: 'blood-clotting',
    title: 'The Clotting of the Blood',
    difficulty: 'medium',
    simpleExplanation:
      'Blood clotting is a protective cascade of reactions triggered by injury: platelets gather at the ' +
      'wound, and a series of clotting factors ultimately converts the soluble protein fibrinogen into ' +
      'insoluble fibrin threads, which form a mesh that traps blood cells and seals the wound.',
    whyItMatters:
      "Clotting is essential to prevent life-threatening blood loss after injury, while also needing to " +
      "be tightly controlled — clotting at the wrong time or place (inside an intact vessel) can cause " +
      "dangerous blockages.",
    whyItWorks:
      "The clotting cascade is a chain reaction where each activated clotting factor activates the " +
      "next, amplifying a small initial signal (tissue damage) into a large, rapid response (a stable " +
      "fibrin mesh) — this amplification is what allows clotting to happen quickly enough to prevent " +
      "significant blood loss.",
    realLifeExample: {
      title: 'Haemophilia',
      scenario: 'People with haemophilia lack a specific clotting factor and bleed for longer than normal after even minor injuries.',
      explanation: 'Because the clotting cascade is a chain where each step depends on the one before, missing even a single clotting factor breaks the chain and prevents the fibrin mesh from forming properly, causing prolonged bleeding.',
    },
    practiceQuestions: [
      {
        id: 'blood-clotting-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the final step that seals a wound during blood clotting?',
        options: [
          { id: 'a', text: 'Red blood cells swell and burst at the wound site.' },
          { id: 'b', text: 'Fibrinogen is converted into insoluble fibrin threads, forming a mesh that traps blood cells.' },
          { id: 'c', text: 'White blood cells physically stitch the wound closed.' },
          { id: 'd', text: 'Plasma evaporates at the wound site.' },
        ],
        correctOptionId: 'b',
        hints: ['The final structural barrier is made of a fibrous protein mesh.'],
        explanation: 'The clotting cascade ends with fibrinogen (soluble) being converted to fibrin (insoluble), forming a mesh that traps blood cells and seals the wound.',
      },
    ],
    commonMistake:
      "Thinking platelets alone form the clot — platelets initiate the process and form a temporary " +
      "plug, but the durable clot depends on the fibrin mesh produced by the full clotting cascade.",
    quickReview: [
      'Clotting cascade: injury → platelets gather → clotting factors activate in sequence.',
      'Fibrinogen (soluble) → fibrin (insoluble) forms the mesh that traps cells and seals the wound.',
      'Missing even one clotting factor (as in haemophilia) impairs the whole cascade.',
    ],
  },

  'cardiac-cycle-and-heartbeat-control': {
    slug: 'cardiac-cycle-and-heartbeat-control',
    title: 'The Cardiac Cycle and Control of Heart Beat',
    difficulty: 'hard',
    simpleExplanation:
      'The cardiac cycle is one complete heartbeat: atria and ventricles alternately relax (diastole, ' +
      'filling with blood) and contract (systole, pumping blood out). The heartbeat itself is initiated ' +
      'by the sinoatrial (SA) node, the heart\'s natural pacemaker, and its rate can be adjusted by ' +
      'nerves and hormones (like adrenaline) to meet the body\'s changing needs.',
    whyItMatters:
      "Understanding the cardiac cycle and its control explains both how a healthy heart maintains " +
      "steady blood flow and what goes wrong in arrhythmias (irregular heartbeats).",
    formulaSlug: 'cardiac-output-formula',
    workedExample: {
      id: 'cardiac-output-we-1',
      title: 'Calculating cardiac output',
      problemStatement: 'A person has a resting heart rate of 70 beats per minute and a stroke volume of 70 mL. Calculate their cardiac output.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'CO = HR × SV', explanation: 'Cardiac output equals heart rate multiplied by stroke volume.' },
        { step: 2, instruction: 'Substitute the known values.', math: 'CO = 70 bpm × 70 mL', explanation: 'HR = 70 beats/min, SV = 70 mL/beat.' },
        { step: 3, instruction: 'Calculate.', math: 'CO = 4,900 mL/min ≈ 4.9 L/min', explanation: 'Multiply heart rate by stroke volume to get volume per minute.' },
      ],
      finalAnswer: 'Cardiac output ≈ 4.9 L/min, a typical resting value for an adult.',
    },
    whyItWorks:
      "The SA node generates its own regular electrical impulses (it is 'self-excitatory'), which " +
      "spread across the atria, then through the atrioventricular (AV) node to the ventricles, timing " +
      "atrial and ventricular contraction correctly — the autonomic nervous system and hormones like " +
      "adrenaline then speed up or slow down this natural pacemaker rate as needed (e.g. during " +
      "exercise or stress).",
    realLifeExample: {
      title: 'Why heart rate increases during exercise',
      scenario: "A person's heart rate rises noticeably within seconds of starting to exercise.",
      explanation: "During exercise, the nervous system and adrenaline increase the SA node's firing rate, raising heart rate — combined with a larger stroke volume, this increases cardiac output substantially, delivering more oxygen to working muscles.",
    },
    practiceQuestions: [
      {
        id: 'cardiac-cycle-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: "A person's heart rate rises to 120 bpm during exercise, and their stroke volume increases to 100 mL. Calculate their cardiac output in litres per minute.",
        hints: ['CO = HR × SV.', 'Convert the result from mL/min to L/min by dividing by 1000.'],
        correctAnswer: 12,
        tolerance: 0.2,
        unit: 'L/min',
        explanation: 'CO = 120 bpm × 100 mL = 12,000 mL/min = 12 L/min.',
      },
    ],
    commonMistake:
      "Thinking the brain directly triggers every heartbeat — the SA node generates the heartbeat's " +
      "rhythm on its own (it is myogenic); the nervous system and hormones only adjust its rate, they " +
      "do not initiate each individual beat.",
    quickReview: [
      'Cardiac cycle: diastole (filling) and systole (pumping), for atria then ventricles.',
      'The SA node is the natural pacemaker, generating its own rhythm (myogenic).',
      'Cardiac output = heart rate × stroke volume; nerves/hormones adjust heart rate to meet demand.',
    ],
  },

  'the-lymphatic-system': {
    slug: 'the-lymphatic-system',
    title: 'The Lymphatic System',
    difficulty: 'easy',
    simpleExplanation:
      'The lymphatic system is a network of vessels and nodes that collects excess fluid (lymph) that ' +
      'leaks out of capillaries into tissues, and returns it to the bloodstream — while also playing a ' +
      'key role in immune defence, since lymph nodes filter lymph and contain white blood cells that ' +
      'detect and respond to pathogens.',
    whyItMatters:
      "Without the lymphatic system, fluid would steadily build up in tissues (causing swelling, or " +
      "oedema), and the body would lose an important line of immune surveillance and defence.",
    whyItWorks:
      "Blood pressure in capillaries pushes some plasma fluid out into surrounding tissue, but not all " +
      "of it is reabsorbed directly back into the capillaries — the lymphatic system's blind-ended " +
      "vessels pick up this leftover fluid, filter it through lymph nodes (removing pathogens and " +
      "debris along the way), and return it to the bloodstream near the heart.",
    realLifeExample: {
      title: 'Swollen lymph nodes during infection',
      scenario: 'Lymph nodes in the neck often swell and become tender during a throat infection.',
      explanation: "Lymph nodes swell because white blood cells inside them are actively multiplying and responding to the pathogens filtered out of the lymph draining from the infected area — a direct sign that the lymphatic system is playing an active immune role.",
    },
    practiceQuestions: [
      {
        id: 'lymphatic-system-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What happens to fluid that leaks out of blood capillaries but is not reabsorbed by them?',
        options: [
          { id: 'a', text: 'It is permanently lost from the body.' },
          { id: 'b', text: 'It is collected by the lymphatic system and eventually returned to the bloodstream.' },
          { id: 'c', text: 'It turns directly into new blood cells.' },
          { id: 'd', text: 'It is stored permanently in the lymph nodes.' },
        ],
        correctOptionId: 'b',
        hints: ['This leftover fluid is called lymph once it enters the lymphatic vessels.'],
        explanation: 'The lymphatic system collects this leftover interstitial fluid (as lymph), filters it through lymph nodes, and returns it to the bloodstream.',
      },
    ],
    commonMistake:
      "Thinking the lymphatic system is a closed loop like the circulatory system — lymphatic vessels " +
      "are blind-ended (they only start where fluid is picked up from tissue) and drain one-way into " +
      "the bloodstream, rather than circulating in a full loop back to a pump.",
    quickReview: [
      'Lymphatic system collects excess tissue fluid (lymph) and returns it to the bloodstream.',
      'Lymph nodes filter lymph and support immune responses (white blood cells).',
      'Lymphatic vessels are blind-ended, not a closed circulatory loop.',
    ],
  },
};
