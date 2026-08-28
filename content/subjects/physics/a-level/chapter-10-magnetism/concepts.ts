import type { Concept } from '@/types/content';

export const chapter10AMagnetismConcepts: Record<string, Concept> = {
  'magnets-and-magnetic-materials-a-level': {
    slug: 'magnets-and-magnetic-materials-a-level',
    title: 'Magnets and Magnetic Materials',
    difficulty: 'easy',
    simpleExplanation:
      'A magnet has two poles — north (N) and south (S) — and always attracts certain materials ' +
      'toward these poles. Like poles (N-N or S-S) repel each other; unlike poles (N-S) attract. ' +
      'Only a few materials — mainly iron, nickel, and cobalt (and their alloys, like steel) — are ' +
      'strongly attracted to a magnet; these are called ferromagnetic materials. Most other ' +
      'materials (wood, plastic, copper, aluminium) are not magnetic at all.',
    whyItMatters:
      'The simple rule "like poles repel, unlike poles attract" is the foundation for understanding ' +
      'compasses, magnetic separators used in recycling, and every device built from permanent magnets.',
    workedExample: {
      id: 'magnets-materials-worked-1',
      title: 'Predict the interaction between two magnets',
      problemStatement: 'Two bar magnets are brought together with their north poles facing each other. Predict what happens.',
      steps: [
        { step: 1, instruction: 'Identify the poles facing each other.', explanation: 'Both facing poles are north (N) poles — the same type.' },
        { step: 2, instruction: 'Apply the rule for like poles.', explanation: 'Like poles always repel each other.' },
      ],
      finalAnswer: 'The two magnets will push apart (repel) from each other.',
    },
    whyItWorks:
      "This behavior reflects the underlying magnetic field each pole creates — field lines leave a " +
      "north pole and enter a south pole, and two overlapping fields either reinforce each other's " +
      'push (like poles) or pull together to complete the field pattern smoothly (unlike poles).',
    realLifeExample: {
      title: 'Magnetic separators in recycling plants',
      scenario: 'Recycling facilities use powerful magnets on conveyor belts to automatically pull out steel and iron cans from a mixed stream of waste.',
      explanation: 'Since steel and iron are ferromagnetic (strongly attracted to a magnet) while aluminium, plastic, and glass are not, a magnet can sort them automatically without needing to sort by hand.',
    },
    practiceQuestions: [
      {
        id: 'magnets-materials-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these materials is strongly attracted to a magnet?',
        hints: ['Ferromagnetic materials: iron, nickel, cobalt, and their alloys.'],
        options: [
          { id: 'a', text: 'Aluminium' },
          { id: 'b', text: 'Iron' },
          { id: 'c', text: 'Copper' },
          { id: 'd', text: 'Plastic' },
        ],
        correctOptionId: 'b',
        explanation: 'Iron is ferromagnetic and strongly attracted to a magnet; aluminium, copper, and plastic are not magnetic materials.',
      },
    ],
    commonMistake:
      'Assuming ALL metals are magnetic — most metals (aluminium, copper, gold, silver) are NOT ' +
      'attracted to a magnet at all; only iron, nickel, cobalt, and their alloys are ferromagnetic.',
    quickReview: [
      'Like poles repel; unlike poles attract.',
      'Ferromagnetic materials (iron, nickel, cobalt) are strongly attracted to a magnet.',
      'Most materials (wood, plastic, copper, aluminium) are not magnetic at all.',
    ],
  },

  'theory-of-magnetism-a-level': {
    slug: 'theory-of-magnetism-a-level',
    title: 'Theory of Magnetism',
    difficulty: 'medium',
    simpleExplanation:
      'The domain theory of magnetism explains magnetism at a microscopic level: a magnetic ' +
      'material is made up of many tiny regions called domains, each acting like a miniature magnet ' +
      'with its own north and south pole. In an unmagnetized piece of iron, these domains point in ' +
      'random directions, cancelling each other out overall. In a magnetized piece, most of the ' +
      'domains line up in the same direction, so their individual magnetic effects add together into one large, noticeable magnet.',
    whyItMatters:
      'Domain theory explains WHY a magnet can be created, strengthened, weakened, or destroyed — ' +
      'it all comes down to how aligned the material\'s internal domains are, which is a much deeper ' +
      'explanation than just saying "it becomes magnetic."',
    workedExample: {
      id: 'theory-magnetism-worked-1',
      title: 'Explain why dropping a magnet can weaken it',
      problemStatement: 'A student notices that a bar magnet becomes noticeably weaker after being dropped several times on a hard floor. Explain this, using domain theory.',
      steps: [
        { step: 1, instruction: 'Recall what makes a material strongly magnetized.', explanation: 'A strongly magnetized material has most of its domains aligned in the same direction.' },
        { step: 2, instruction: 'Consider the effect of the mechanical shock from being dropped.', explanation: 'The sudden physical shock disturbs the material, causing some of the previously aligned domains to shift back into random directions.' },
        { step: 3, instruction: 'Conclude.', explanation: 'With fewer domains still aligned, the overall magnetic effect is weaker — explaining the reduced magnetism observed.' },
      ],
      finalAnswer: 'Dropping the magnet mechanically disturbs its internal domains, knocking some out of alignment and weakening the overall magnetic effect.',
    },
    whyItWorks:
      "Since the total magnetic strength of a material is really just the combined effect of all its " +
      "individual domains, ANYTHING that disturbs how well those domains stay aligned — heat, " +
      'physical shock, or an opposing magnetic field — will directly weaken the material\'s overall magnetism.',
    realLifeExample: {
      title: 'Making a magnet by stroking',
      scenario: 'Repeatedly stroking an unmagnetized iron nail in one direction with a strong magnet gradually turns the nail into a weak magnet itself.',
      explanation: "Each stroke nudges more of the nail's internal domains to align with the stroking magnet's field, and as more domains line up, the nail's own magnetic effect grows stronger.",
    },
    practiceQuestions: [
      {
        id: 'theory-magnetism-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'According to domain theory, why is an unmagnetized piece of iron not magnetic overall, even though it contains many tiny magnetic domains?',
        hints: ['Think about the DIRECTIONS the domains point in an unmagnetized material.'],
        options: [
          { id: 'a', text: 'The domains point in random directions, cancelling out overall' },
          { id: 'b', text: 'Unmagnetized iron has no domains at all' },
          { id: 'c', text: 'The domains are too small to have any magnetic effect' },
          { id: 'd', text: 'Iron domains only appear when magnetized' },
        ],
        correctOptionId: 'a',
        explanation: 'In an unmagnetized material, the domains point in random directions, so their individual magnetic effects cancel out, leaving no overall magnetism.',
      },
    ],
    commonMistake:
      'Believing an unmagnetized material has NO magnetic domains at all — it actually still ' +
      'contains all the same tiny domains, just randomly oriented; magnetizing it does not create ' +
      'new domains, it aligns the ones already there.',
    quickReview: [
      'A magnetic material is made of many tiny domains, each like a mini-magnet.',
      'Unmagnetized: domains point randomly, cancelling out.',
      'Magnetized: most domains align, adding together into one large magnetic effect.',
    ],
  },

  'magnetic-fields-a-level': {
    slug: 'magnetic-fields-a-level',
    title: 'Magnetic Fields',
    difficulty: 'medium',
    simpleExplanation:
      'A magnetic field is the region around a magnet where its magnetic force can be felt. It is ' +
      'represented by field lines, which always point from the north pole, around the outside of ' +
      'the magnet, to the south pole. Field lines never cross, and where they are closer together, ' +
      'the field is stronger. The Earth itself has a magnetic field, which is why a compass needle ' +
      '(a small, freely-pivoting magnet) always aligns to point roughly north-south.',
    whyItMatters:
      'Magnetic field lines give a clear, visual way to predict how a magnet will interact with ' +
      'other magnets or magnetic materials, without needing to see or measure the invisible field directly.',
    workedExample: {
      id: 'magnetic-fields-worked-1',
      title: 'Predict where a magnetic field is strongest',
      problemStatement: 'A diagram of a bar magnet shows its field lines much closer together near the poles than in the middle, along the sides. Explain what this tells you about the field strength in each region.',
      steps: [
        { step: 1, instruction: 'Recall the rule relating field-line spacing to field strength.', explanation: 'Field lines closer together represent a stronger magnetic field; lines further apart represent a weaker field.' },
        { step: 2, instruction: 'Apply this rule to the described diagram.', explanation: 'Since the lines are closest together near the poles, the magnetic field is strongest there; it is weaker along the sides, where the lines are more spread out.' },
      ],
      finalAnswer: 'The magnetic field is strongest near the poles of the magnet, and weaker along its sides.',
    },
    whyItWorks:
      "Field lines are drawn to represent the field's strength AND direction together — bunching " +
      'them closer together where the field is more concentrated (like near a pole) is a deliberate ' +
      'visual convention that lets you read off relative field strength just by looking at the spacing.',
    realLifeExample: {
      title: 'A compass and the Earth\'s magnetic field',
      scenario: "A compass needle always settles pointing roughly toward geographic north.",
      explanation: "The compass needle is itself a small magnet, free to rotate — it aligns with the Earth's own magnetic field, which acts similarly to a giant bar magnet buried inside the planet, letting the needle be used for navigation.",
    },
    practiceQuestions: [
      {
        id: 'magnetic-fields-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Outside a bar magnet, in which direction do magnetic field lines point?',
        hints: ['Field lines always start at one specific pole and end at the other.'],
        options: [
          { id: 'a', text: 'From south to north' },
          { id: 'b', text: 'From north to south' },
          { id: 'c', text: 'They point in random directions' },
          { id: 'd', text: 'They do not have a direction' },
        ],
        correctOptionId: 'b',
        explanation: 'Outside a magnet, field lines always point from the north pole to the south pole.',
      },
    ],
    commonMistake:
      'Drawing or imagining field lines that cross each other — magnetic field lines NEVER cross, ' +
      'since a crossing point would mean the field pointed in two different directions at once, ' +
      'which is impossible.',
    quickReview: [
      'Field lines point from north to south outside the magnet.',
      'Closer field lines mean a stronger field.',
      "Field lines never cross.",
    ],
  },

  'magnetisation-and-induced-magnetism-a-level': {
    slug: 'magnetisation-and-induced-magnetism-a-level',
    title: 'Magnetisation and Induced Magnetism',
    difficulty: 'medium',
    simpleExplanation:
      'Magnetisation is the process of turning an unmagnetized magnetic material into a magnet, by ' +
      'aligning its internal domains. This can be done by stroking it repeatedly with an existing ' +
      'magnet, or by placing it inside a strong magnetic field (such as inside a coil carrying an ' +
      'electric current). Induced magnetism happens when a magnetic material becomes temporarily ' +
      'magnetized just by being brought NEAR a magnet — even without touching it — and loses this ' +
      'induced magnetism again once the magnet is taken away.',
    whyItMatters:
      "Induced magnetism explains why a magnet can pick up an unmagnetized paperclip, which can " +
      "then pick up ANOTHER paperclip — the first paperclip itself becomes a temporary induced magnet " +
      'while it stays near the original magnet.',
    workedExample: {
      id: 'magnetisation-worked-1',
      title: 'Explain a "chain" of paperclips picked up by a magnet',
      problemStatement: 'A strong magnet picks up an iron paperclip, and a second paperclip then sticks to the bottom of the first one, forming a short chain. Explain how the second paperclip is held in place.',
      steps: [
        { step: 1, instruction: 'Consider the state of the first paperclip while touching the magnet.', explanation: "While in contact with (and very close to) the magnet's strong field, the first paperclip becomes an induced magnet itself, with its own temporary north and south poles." },
        { step: 2, instruction: 'Consider the effect of the first paperclip on the second.', explanation: 'The first paperclip, now acting as an induced magnet, attracts the second (still unmagnetized) paperclip toward it, just as the original magnet attracted the first.' },
        { step: 3, instruction: 'Predict what happens if the chain is pulled away from the original magnet.', explanation: 'Since induced magnetism is only temporary, the paperclips will fall apart once removed from the vicinity of the original magnet\'s field.' },
      ],
      finalAnswer: 'The first paperclip becomes an induced (temporary) magnet while near the original magnet, and it in turn attracts the second paperclip — the whole chain loses its magnetism once separated from the original magnet.',
    },
    whyItWorks:
      "A strong external magnetic field can temporarily align the domains inside a nearby magnetic " +
      "material, even without physical contact — this alignment (and the resulting induced " +
      'magnetism) only persists while the external field remains strong enough nearby, which is why it disappears when the magnet is taken away.',
    realLifeExample: {
      title: 'Demagnetizing a screwdriver',
      scenario: 'A magnetized steel screwdriver (useful for holding small screws) can be demagnetized by heating it strongly, or by hitting it repeatedly with a hammer.',
      explanation: 'Both heat and mechanical shock disturb the aligned domains inside the screwdriver, scrambling them back toward random orientations and removing its magnetism.',
    },
    practiceQuestions: [
      {
        id: 'magnetisation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A paperclip is held near (but not touching) a strong magnet and becomes weakly magnetic. What is this an example of?',
        hints: ['This happens without contact and is only temporary.'],
        options: [
          { id: 'a', text: 'Permanent magnetisation' },
          { id: 'b', text: 'Induced magnetism' },
          { id: 'c', text: 'Demagnetisation' },
          { id: 'd', text: 'Domain theory failure' },
        ],
        correctOptionId: 'b',
        explanation: 'A material becoming temporarily magnetic just by being near a magnet (without contact) is induced magnetism.',
      },
    ],
    commonMistake:
      'Assuming induced magnetism is permanent — it is temporary, and disappears once the magnetic ' +
      'material is moved away from the inducing magnet\'s field.',
    quickReview: [
      'Magnetisation: stroking with a magnet, or placing in a strong field, aligns domains permanently (for hard materials).',
      'Induced magnetism: temporary magnetism from being near a magnet, without contact.',
      'Demagnetisation: heat or mechanical shock disturbs aligned domains, removing magnetism.',
    ],
  },

  'magnetic-properties-iron-steel-a-level': {
    slug: 'magnetic-properties-iron-steel-a-level',
    title: 'Magnetic Properties of Iron and Steel',
    difficulty: 'medium',
    simpleExplanation:
      'Iron is a "soft" magnetic material — it is easily magnetized, but also loses its magnetism ' +
      'again very easily once the magnetizing influence is removed. Steel (an alloy of iron with a ' +
      'small amount of carbon) is a "hard" magnetic material — it is harder to magnetize in the ' +
      'first place, but once magnetized, it retains its magnetism for a very long time.',
    whyItMatters:
      "This difference is exactly why iron is used for temporary magnets (like an electromagnet's " +
      "core, which needs to switch on and off instantly) while steel is used for permanent magnets " +
      '(like a compass needle or a fridge magnet, which need to stay magnetized indefinitely).',
    workedExample: {
      id: 'iron-steel-worked-1',
      title: "Choose the right material for an electromagnet's core",
      problemStatement: 'An electromagnet needs to attract objects strongly when switched on, but drop them instantly when switched off. Explain which material — iron or steel — should be used for its core, and why.',
      steps: [
        { step: 1, instruction: "Consider iron's magnetic behavior.", explanation: 'Iron (a soft magnetic material) magnetizes easily when a current flows, and demagnetizes again almost instantly once the current stops.' },
        { step: 2, instruction: "Consider steel's magnetic behavior.", explanation: 'Steel (a hard magnetic material) would retain its magnetism even after the current is switched off, continuing to attract objects unwantedly.' },
        { step: 3, instruction: 'Conclude.', explanation: 'Iron is the correct choice, since the electromagnet needs to lose its magnetism instantly when switched off — exactly what a soft magnetic material does.' },
      ],
      finalAnswer: "Iron should be used, since it demagnetizes almost instantly when the current is switched off, unlike steel which would retain unwanted magnetism.",
    },
    whyItWorks:
      "The difference between iron and steel comes down to how easily their internal domains can " +
      "realign — iron's domains shift very freely (easy to magnetize AND easy to demagnetize), while " +
      "steel's small carbon content makes its domains much more resistant to realigning once set, " +
      'which is why steel holds onto its magnetism so much longer.',
    realLifeExample: {
      title: 'Compass needles and fridge magnets',
      scenario: 'A compass needle needs to stay reliably magnetized for years of use, and so does a fridge magnet.',
      explanation: 'Both are made from hard magnetic materials like steel (or other similar alloys), chosen precisely because they retain their magnetism over long periods without needing to be re-magnetized.',
    },
    practiceQuestions: [
      {
        id: 'iron-steel-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Which material is best suited for making a permanent magnet, like a compass needle?',
        hints: ['A permanent magnet needs to RETAIN its magnetism for a long time.'],
        options: [
          { id: 'a', text: 'Iron (soft magnetic material)' },
          { id: 'b', text: 'Steel (hard magnetic material)' },
          { id: 'c', text: 'Both are equally suitable' },
          { id: 'd', text: 'Neither is magnetic at all' },
        ],
        correctOptionId: 'b',
        explanation: 'Steel (a hard magnetic material) retains its magnetism for a long time, making it well-suited for permanent magnets like compass needles.',
      },
    ],
    commonMistake:
      'Assuming "harder to magnetize" and "weaker magnet" are the same thing — a hard magnetic ' +
      'material like steel is simply harder to magnetize INITIALLY, but once magnetized it can hold ' +
      'a strong, long-lasting magnetism, often stronger and more durable than a soft material\'s.',
    quickReview: [
      'Iron (soft): easy to magnetize, easy to demagnetize — used for temporary magnets (electromagnet cores).',
      'Steel (hard): harder to magnetize, but retains magnetism — used for permanent magnets.',
      'The choice of material depends on whether temporary or permanent magnetism is needed.',
    ],
  },
};
