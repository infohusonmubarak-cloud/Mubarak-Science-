import type { Concept } from '@/types/content';

export const chapter9AElectricityConcepts: Record<string, Concept> = {
  'electric-charge-a-level': {
    slug: 'electric-charge-a-level',
    title: 'Electric Charge',
    difficulty: 'easy',
    simpleExplanation:
      'Electric charge is a fundamental property of matter that comes in two types: positive and ' +
      'negative. Like charges repel each other; unlike charges attract each other. Charge is ' +
      'measured in coulombs (C). A neutral object has exactly equal amounts of positive and ' +
      'negative charge, which cancel out.',
    whyItMatters:
      'The simple rule "like repels, unlike attracts" is the foundation for understanding every ' +
      'electrical phenomenon in this chapter, from why a charged balloon sticks to a wall, to how ' +
      'lightning forms.',
    workedExample: {
      id: 'electric-charge-worked-1',
      title: 'Predict the force between two charged objects',
      problemStatement: 'Two small charged spheres are brought near each other. Sphere A carries a positive charge; sphere B carries a negative charge. Predict what happens.',
      steps: [
        { step: 1, instruction: 'Identify the sign of each charge.', explanation: 'Sphere A is positive, sphere B is negative — they are unlike charges.' },
        { step: 2, instruction: 'Apply the basic rule of charge interaction.', explanation: 'Unlike charges attract each other.' },
      ],
      finalAnswer: 'The two spheres will attract each other and move toward one another.',
    },
    whyItWorks:
      'This attraction/repulsion rule reflects the underlying electric field each charge creates — ' +
      'a positive charge\'s field pulls negative charges inward and pushes positive charges away, and ' +
      'vice versa for a negative charge\'s field.',
    realLifeExample: {
      title: 'A charged balloon sticking to a wall',
      scenario: "Rubbing a balloon on your hair charges it, and it then sticks to a wall.",
      explanation: 'The charged balloon induces an opposite charge on the nearby surface of the (normally neutral) wall, and this induced unlike charge then attracts the balloon, holding it in place.',
    },
    practiceQuestions: [
      {
        id: 'electric-charge-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Two objects both carry a negative charge. What happens when they are brought close together?',
        hints: ['Like charges follow one simple rule.'],
        options: [
          { id: 'a', text: 'They attract each other' },
          { id: 'b', text: 'They repel each other' },
          { id: 'c', text: 'Nothing happens' },
          { id: 'd', text: 'They become neutral' },
        ],
        correctOptionId: 'b',
        explanation: 'Like charges (both negative, in this case) always repel each other.',
      },
    ],
    commonMistake:
      'Assuming any charged object attracts any other object — a charged object repels objects with ' +
      'the SAME sign of charge, and only attracts objects with the OPPOSITE sign (or neutral objects, ' +
      'via induction).',
    quickReview: [
      'Two types of charge: positive and negative.',
      'Like charges repel; unlike charges attract.',
      'Charge is measured in coulombs (C).',
    ],
  },

  'coulombs-law-a-level': {
    slug: 'coulombs-law-a-level',
    title: "Coulomb's Law",
    difficulty: 'hard',
    simpleExplanation:
      "Coulomb's law gives the exact size of the electric force between two point charges: " +
      'F = kq₁q₂/r². Like Newton\'s law of gravitation, this force follows an inverse-square pattern ' +
      'with distance — but the electric force is vastly stronger than gravity for typical charges and masses.',
    whyItMatters:
      "Coulomb's law lets you calculate exactly how strong the attraction or repulsion between " +
      'charged objects is, not just which direction it acts — essential for anything from designing ' +
      'particle accelerators to understanding how atoms hold together.',
    formulaSlug: 'coulombs-law-formula-a-level',
    workedExample: {
      id: 'coulombs-law-worked-1',
      title: 'Find the force between two charges',
      problemStatement: 'Two charges of +3 × 10⁻⁶ C and −2 × 10⁻⁶ C are 0.5 m apart. Using k = 9 × 10⁹ N·m²/C², find the size of the force between them.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F = kq₁q₂/r²', explanation: 'Coulomb\'s law relates the force to both charges and the square of the distance.' },
        { step: 2, instruction: 'Substitute the values.', math: 'F = (9×10⁹ × 3×10⁻⁶ × 2×10⁻⁶) / 0.5²', explanation: 'Using the magnitudes of the charges; k = 9×10⁹, r = 0.5 m.' },
        { step: 3, instruction: 'Calculate the numerator, then divide.', math: 'F = (5.4×10⁻²) / 0.25 = 0.216', explanation: '9×10⁹ × 3×10⁻⁶ × 2×10⁻⁶ = 5.4×10⁻²; 5.4×10⁻²/0.25 = 0.216.' },
      ],
      finalAnswer: 'F = 0.216 N (attractive, since the charges are opposite in sign)',
    },
    whyItWorks:
      "Like Newton's law of gravitation, this inverse-square relationship comes from the electric " +
      "field spreading its influence out over the surface of an ever-larger sphere as distance " +
      'increases — the same force is "spread thinner" over a much bigger area at greater distances.',
    realLifeExample: {
      title: 'Why electric forces hold atoms together',
      scenario: "The negatively charged electrons in an atom are held in orbit by the positively charged nucleus.",
      explanation: "Coulomb's law describes exactly this attractive force between the nucleus and electrons — despite being vastly weaker than the strong nuclear force at extremely short range, it is what governs the overall structure and chemistry of atoms.",
    },
    practiceQuestions: [
      {
        id: 'coulombs-law-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Two charges of +4 × 10⁻⁶ C and +5 × 10⁻⁶ C are 0.2 m apart. Using k = 9 × 10⁹ N·m²/C², find the force between them.',
        hints: ['F = kq₁q₂/r².', '(9×10⁹ × 4×10⁻⁶ × 5×10⁻⁶) / 0.2².'],
        correctAnswer: 4.5,
        unit: 'N',
        explanation: 'F = (9×10⁹ × 4×10⁻⁶ × 5×10⁻⁶)/0.04 = (0.18)/0.04 = 4.5 N.',
      },
    ],
    commonMistake:
      'Forgetting to square the distance r — just like with gravitation, this equation uses r², not ' +
      'r, so halving the distance quadruples the force, not just doubles it.',
    quickReview: [
      'F = kq₁q₂/r²',
      "Same charges repel (F is repulsive); opposite charges attract (F is attractive).",
      'The electric force follows an inverse-square law, just like gravity.',
    ],
  },

  'matter-and-electricity-a-level': {
    slug: 'matter-and-electricity-a-level',
    title: 'Matter and Electricity',
    difficulty: 'medium',
    simpleExplanation:
      "Every atom is built from a positively charged nucleus (containing protons and neutrons) " +
      'surrounded by negatively charged electrons. Ordinary matter becomes charged when electrons ' +
      'are transferred between objects — gaining extra electrons makes an object negatively charged; ' +
      'losing electrons makes it positively charged. Charge always comes in whole-number multiples ' +
      'of the tiny elementary charge, e: Q = ne.',
    whyItMatters:
      'Understanding that charging is really just electron TRANSFER (never creation or destruction ' +
      'of charge) is the key to the law of conservation of charge — the total charge in an isolated ' +
      'system never changes, only moves around.',
    formulaSlug: 'charge-quantization-formula-a-level',
    workedExample: {
      id: 'matter-electricity-worked-1',
      title: 'Find the charge from a number of transferred electrons',
      problemStatement: 'An object gains 5 × 10¹² extra electrons. Using e = 1.6 × 10⁻¹⁹ C, find the total charge on the object.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Q = ne', explanation: 'Total charge equals the number of electrons times the charge of one electron.' },
        { step: 2, instruction: 'Substitute the values.', math: 'Q = 5×10¹² × 1.6×10⁻¹⁹', explanation: 'n = 5×10¹², e = 1.6×10⁻¹⁹ C.' },
        { step: 3, instruction: 'Calculate.', math: 'Q = 8×10⁻⁷', explanation: '5×10¹² × 1.6×10⁻¹⁹ = 8×10⁻⁷.' },
      ],
      finalAnswer: 'Q = 8 × 10⁻⁷ C (negative, since the object gained electrons)',
    },
    whyItWorks:
      'Because every single electron carries exactly the same fixed amount of charge (e), the total ' +
      'charge transferred is simply that fixed amount multiplied by however many electrons moved — ' +
      "which is exactly what Q = ne calculates.",
    realLifeExample: {
      title: 'Static shocks',
      scenario: 'Walking across a carpet can transfer millions of electrons onto your body, and touching a metal door handle then gives a small shock.',
      explanation: "That shock is literally the excess electrons on your body suddenly flowing (as a tiny electric current) to the door handle, evening out the charge imbalance — a direct, everyday demonstration of electron transfer.",
    },
    practiceQuestions: [
      {
        id: 'matter-electricity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object has a charge of −3.2 × 10⁻¹⁸ C. Using e = 1.6 × 10⁻¹⁹ C, find how many excess electrons it has.',
        hints: ['Rearrange Q = ne to n = Q/e.', '3.2×10⁻¹⁸ / 1.6×10⁻¹⁹.'],
        correctAnswer: 20,
        explanation: 'n = 3.2×10⁻¹⁸ / 1.6×10⁻¹⁹ = 20 electrons.',
      },
    ],
    commonMistake:
      'Thinking that charging an object CREATES charge — charging is always just a TRANSFER of ' +
      'existing electrons from one object to another; the total charge in the system is always ' +
      'conserved.',
    quickReview: [
      'Atoms: positive nucleus (protons, neutrons) surrounded by negative electrons.',
      'Charging = electron transfer, not creation.',
      'Q = ne — charge is always a whole-number multiple of the elementary charge e.',
    ],
  },

  'conductors-insulators-semiconductors-a-level': {
    slug: 'conductors-insulators-semiconductors-a-level',
    title: 'Conductors, Insulators and Semiconductors',
    difficulty: 'medium',
    simpleExplanation:
      'A conductor (like copper or other metals) has electrons that are free to move throughout the ' +
      'material, letting charge flow easily. An insulator (like rubber, glass, or plastic) has ' +
      'electrons tightly bound to their atoms, so charge cannot flow through it. A semiconductor ' +
      '(like silicon) behaves in between — normally a poor conductor, but its conductivity can be ' +
      'controlled and greatly increased in useful ways, which is why it is the basis of modern electronics.',
    whyItMatters:
      'This three-way classification determines what a material is used for — wires are made from ' +
      'conductors, the coating around them from insulators, and computer chips from carefully ' +
      'engineered semiconductors.',
    workedExample: {
      id: 'conductors-worked-1',
      title: 'Explain why an electric cable is made of two different materials',
      problemStatement: "A household electric cable has a copper core surrounded by a plastic coating. Explain why these two specific materials are chosen.",
      steps: [
        { step: 1, instruction: 'Consider the role of the copper core.', explanation: 'Copper is an excellent conductor (free electrons), letting electric current flow through it easily to deliver electrical energy.' },
        { step: 2, instruction: 'Consider the role of the plastic coating.', explanation: 'Plastic is a good insulator (tightly bound electrons), preventing the current from escaping the wire and protecting people from electric shock.' },
        { step: 3, instruction: 'Conclude.', explanation: 'The copper core carries the current, while the plastic insulator safely contains it — each material is chosen for exactly the opposite electrical property.' },
      ],
      finalAnswer: 'Copper (a conductor) carries the current; plastic (an insulator) safely contains it, preventing shocks.',
    },
    whyItWorks:
      'The difference comes down to how tightly each material holds onto its outer electrons — a ' +
      "conductor's electrons are loosely bound and free to drift through the material under an " +
      "electric field, while an insulator's electrons are tightly locked to their own atoms and " +
      'cannot move freely at all.',
    realLifeExample: {
      title: 'Silicon chips',
      scenario: 'Every computer, phone, and modern electronic device relies on silicon-based microchips.',
      explanation: "Silicon's semiconductor properties allow engineers to precisely control where and how it conducts electricity (through a process called doping), making it possible to build the tiny switches (transistors) that form the basis of all digital electronics.",
    },
    practiceQuestions: [
      {
        id: 'conductors-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why do metals conduct electricity well?',
        hints: ['Think about how tightly a metal holds onto its outer electrons.'],
        options: [
          { id: 'a', text: 'Metals have free electrons that can move throughout the material' },
          { id: 'b', text: 'Metals have no electrons at all' },
          { id: 'c', text: 'Metals are always positively charged' },
          { id: 'd', text: 'Metals repel all electric fields' },
        ],
        correctOptionId: 'a',
        explanation: 'Metals conduct well because they have free (loosely bound) electrons that can move throughout the material, carrying charge as current.',
      },
    ],
    commonMistake:
      'Assuming semiconductors are simply "in-between" and unimportant — their special, controllable ' +
      'conductivity is precisely what makes them the basis of ALL modern digital electronics, not a ' +
      "compromise between conductors and insulators.",
    quickReview: [
      'Conductor: free electrons, charge flows easily (e.g. copper).',
      'Insulator: bound electrons, charge cannot flow (e.g. rubber, plastic).',
      'Semiconductor: controllable conductivity (e.g. silicon) — the basis of electronics.',
    ],
  },

  'electrification-a-level': {
    slug: 'electrification-a-level',
    title: 'Electrification',
    difficulty: 'medium',
    simpleExplanation:
      'Electrification is the process of giving an object a net electric charge. This can happen by ' +
      'friction (rubbing two different materials together transfers electrons from one to the ' +
      'other), by conduction (direct contact with an already-charged object transfers some of its ' +
      'charge), or by induction (bringing a charged object NEAR a neutral one rearranges its ' +
      'charges, without any direct contact or electron transfer).',
    whyItMatters:
      'Electrification explains everyday static electricity — from the crackle of clothes fresh out ' +
      'of a dryer, to why a comb rubbed through hair can pick up small pieces of paper — and, at a ' +
      'much larger scale, how lightning builds up in storm clouds.',
    workedExample: {
      id: 'electrification-worked-1',
      title: 'Explain charging by induction',
      problemStatement: 'A negatively charged rod is brought close to (but not touching) a neutral metal sphere. Explain what happens to the charge distribution on the sphere.',
      steps: [
        { step: 1, instruction: "Consider the effect of the rod's negative charge on the sphere's free electrons.", explanation: "The rod's negative charge repels the sphere's free electrons, pushing them toward the far side of the sphere." },
        { step: 2, instruction: 'Describe the resulting charge distribution.', explanation: 'This leaves the near side of the sphere (closer to the rod) with a net positive charge, and the far side with a net negative charge — even though the sphere\'s TOTAL charge is still zero.' },
        { step: 3, instruction: 'Note what happens if the sphere is then briefly earthed (grounded) while the rod stays in place.', explanation: 'The repelled electrons can escape to earth, leaving the sphere with an overall net POSITIVE charge once the rod is removed and the earth connection is broken — charging by induction, with no direct contact needed.' },
      ],
      finalAnswer: "Induction separates charge within the sphere (positive near the rod, negative far from it) without any electron transfer between the rod and sphere — grounding briefly can leave the sphere permanently, oppositely charged.",
    },
    whyItWorks:
      'Because the free electrons in a conductor can move within the material, an external charge ' +
      'nearby (even without touching) exerts a force that redistributes them — this is a direct ' +
      "consequence of the same 'like repels, unlike attracts' rule, applied to the mobile electrons inside a conductor.",
    realLifeExample: {
      title: 'Lightning',
      scenario: 'Inside a storm cloud, friction between ice particles and water droplets charges the cloud, building up a huge charge separation.',
      explanation: 'When the resulting electric force becomes strong enough, it violently discharges through the air as a lightning bolt — nature\'s large-scale, dramatic version of everyday static electrification.',
    },
    practiceQuestions: [
      {
        id: 'electrification-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which method of electrification involves NO direct contact between the charged and neutral object?',
        hints: ['Think about which method only needs the charged object to be brought NEAR.'],
        options: [
          { id: 'a', text: 'Charging by friction' },
          { id: 'b', text: 'Charging by conduction' },
          { id: 'c', text: 'Charging by induction' },
          { id: 'd', text: 'All three require direct contact' },
        ],
        correctOptionId: 'c',
        explanation: 'Charging by induction only requires a charged object to be brought near a neutral one, rearranging its charges without any direct contact or electron transfer between them.',
      },
    ],
    commonMistake:
      'Confusing induction with conduction — conduction requires direct physical contact to transfer ' +
      'charge; induction only requires the charged object to be brought close, redistributing (not ' +
      'transferring) charge.',
    quickReview: [
      'Friction: rubbing transfers electrons between two materials.',
      'Conduction: direct contact transfers some charge from a charged to a neutral object.',
      'Induction: a nearby charge redistributes charge in a neutral object, with no contact needed.',
    ],
  },
};
