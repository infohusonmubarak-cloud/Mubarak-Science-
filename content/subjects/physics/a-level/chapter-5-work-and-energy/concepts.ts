import type { Concept } from '@/types/content';

export const chapter5AWorkEnergyConcepts: Record<string, Concept> = {
  'work-done-a-level': {
    slug: 'work-done-a-level',
    title: 'Work Done',
    difficulty: 'easy',
    simpleExplanation:
      'In physics, work is done only when a force moves an object through a distance, in the ' +
      'direction of that force: W = Fd. Pushing hard against a wall that does not move does zero ' +
      'work, no matter how tired it makes you — because there is no distance moved.',
    whyItMatters:
      'Work is the bridge between force and energy: doing work on an object is exactly how energy ' +
      'gets transferred into (or out of) it, which is why work is measured in the same unit as energy, the joule.',
    formulaSlug: 'work-done-formula',
    workedExample: {
      id: 'work-worked-1',
      title: 'Find the work done pushing a crate',
      problemStatement: 'A crate is pushed with a force of 150 N and moves 4 m in the direction of the force. Find the work done.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'W = Fd', explanation: 'Work equals force times the distance moved in the direction of the force.' },
        { step: 2, instruction: 'Substitute the values.', math: 'W = 150 × 4', explanation: 'F = 150 N, d = 4 m.' },
        { step: 3, instruction: 'Calculate.', math: 'W = 600', explanation: '150 × 4 = 600.' },
      ],
      finalAnswer: 'W = 600 J',
    },
    whyItWorks:
      'Multiplying the force by the distance moved in its own direction gives exactly the total ' +
      "energy transferred by that force — which is the physical meaning of 'work done'.",
    realLifeExample: {
      title: 'Carrying groceries vs. lifting them',
      scenario: 'Carrying a heavy bag of groceries at a constant height across a flat room, versus lifting the same bag straight up onto a shelf.',
      explanation: "Carrying the bag horizontally does no work against gravity (the weight force has no component in the direction of horizontal motion), while lifting it upward does real work against gravity, transferring energy into the bag's height.",
    },
    practiceQuestions: [
      {
        id: 'work-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A force of 80 N moves an object 3 m in the direction of the force. Find the work done.',
        hints: ['W = Fd.', '80 × 3.'],
        correctAnswer: 240,
        unit: 'J',
        explanation: 'W = 80 × 3 = 240 J.',
      },
      {
        id: 'work-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A person holds a heavy suitcase perfectly still in the air for one minute. How much work do they do on the suitcase?',
        hints: ['Work requires the object to actually MOVE in the direction of the force.'],
        options: [
          { id: 'a', text: 'A large amount, because holding it is tiring' },
          { id: 'b', text: 'Zero, because the suitcase does not move' },
          { id: 'c', text: 'It depends on the suitcase\'s mass alone' },
          { id: 'd', text: 'A small, but non-zero, amount' },
        ],
        correctOptionId: 'b',
        explanation: 'Since the suitcase does not move at all, zero distance means zero work is done on it in the physics sense — even though holding it is physically tiring.',
      },
    ],
    commonMistake:
      "Confusing everyday tiredness with physics 'work' — a force only does work if it actually " +
      'moves something in its own direction; holding something still, no matter how effortful, does no work.',
    quickReview: [
      'W = Fd',
      'Work is only done if the object moves in the direction of the force.',
      'Work and energy share the same unit: the joule (J).',
    ],
  },

  'power-a-level': {
    slug: 'power-a-level',
    title: 'Power',
    difficulty: 'medium',
    simpleExplanation:
      'Power measures how quickly work is done, or how quickly energy is transferred: P = W/t. Two ' +
      'machines can do exactly the same total amount of work, but the more powerful one does it faster.',
    whyItMatters:
      "Power ratings (on motors, engines, and appliances) tell you how quickly a device can do work " +
      "— crucial for comparing machines that ultimately do the same job at different speeds.",
    formulaSlug: 'power-formula-a-level',
    workedExample: {
      id: 'power-worked-1',
      title: "Find a crane's power",
      problemStatement: 'A crane does 24,000 J of work lifting a load in 8 s. Find its power.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'P = W/t', explanation: 'Power is work done divided by the time taken.' },
        { step: 2, instruction: 'Substitute the values.', math: 'P = 24,000 / 8', explanation: 'W = 24,000 J, t = 8 s.' },
        { step: 3, instruction: 'Calculate.', math: 'P = 3,000', explanation: '24,000 divided by 8.' },
      ],
      finalAnswer: 'P = 3,000 W (3 kW)',
    },
    whyItWorks:
      'Dividing the total work done by the time it took gives exactly how much work is done, on ' +
      'average, every second — which is the definition of power, measured in watts (joules per second).',
    realLifeExample: {
      title: 'Comparing two car engines',
      scenario: 'Two cars can both eventually reach the same top speed, but one accelerates from 0 to 100 km/h much faster than the other.',
      explanation: 'The faster-accelerating car has a more powerful engine — it does the same amount of work (accelerating the car to that speed) in less time.',
    },
    practiceQuestions: [
      {
        id: 'power-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A motor does 15,000 J of work in 5 s. Find its power.',
        hints: ['P = W/t.', '15,000/5.'],
        correctAnswer: 3000,
        unit: 'W',
        explanation: 'P = 15,000/5 = 3000 W.',
      },
      {
        id: 'power-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 400 W motor runs for 10 s. Find the total work done.',
        hints: ['Rearrange P = W/t to W = Pt.', '400 × 10.'],
        correctAnswer: 4000,
        unit: 'J',
        explanation: 'W = Pt = 400 × 10 = 4000 J.',
      },
    ],
    commonMistake:
      'Confusing power with energy — power is the RATE of energy transfer (in watts), while work ' +
      'and energy are the total AMOUNT transferred (in joules); a low-power device left running for ' +
      'a long time can still transfer more total energy than a high-power device running briefly.',
    quickReview: [
      'P = W/t',
      'Power is measured in watts (W), where 1 W = 1 J/s.',
      'A more powerful machine does the same work in less time.',
    ],
  },

  'kinetic-energy-a-level': {
    slug: 'kinetic-energy-a-level',
    title: 'Kinetic Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Kinetic energy is the energy an object has because it is moving: KE = ½mv². Because speed is ' +
      'SQUARED in this formula, doubling an object\'s speed doesn\'t just double its kinetic energy — it QUADRUPLES it.',
    whyItMatters:
      'This squared relationship is exactly why high-speed crashes are so much more dangerous than ' +
      'low-speed ones — a car going twice as fast carries four times the kinetic energy that must be absorbed in a collision.',
    formulaSlug: 'kinetic-energy-formula',
    workedExample: {
      id: 'ke-worked-1',
      title: "Find a car's kinetic energy",
      problemStatement: 'A 1000 kg car travels at 20 m/s. Find its kinetic energy.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'KE = ½mv²', explanation: 'Kinetic energy depends on mass and the SQUARE of speed.' },
        { step: 2, instruction: 'Substitute the values.', math: 'KE = ½ × 1000 × 20²', explanation: 'm = 1000 kg, v = 20 m/s.' },
        { step: 3, instruction: 'Calculate, squaring speed first.', math: 'KE = ½ × 1000 × 400 = 200,000', explanation: '20² = 400; ½ × 1000 × 400 = 200,000.' },
      ],
      finalAnswer: 'KE = 200,000 J (200 kJ)',
    },
    whyItWorks:
      "The squared dependence on speed comes directly from how kinetic energy is built up: bringing " +
      "an object up to speed v from rest requires work that itself scales with v² — a consequence of " +
      "combining Newton's second law with the equations of motion.",
    realLifeExample: {
      title: 'Why speed limits matter so much for safety',
      scenario: 'A speed limit reduction from 60 km/h to 30 km/h (halving the speed) is often used near schools.',
      explanation: 'Because kinetic energy depends on the square of speed, halving the speed cuts the kinetic energy involved in any collision to just a QUARTER — a far bigger safety improvement than the halved speed alone suggests.',
    },
    practiceQuestions: [
      {
        id: 'ke-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the kinetic energy of a 2 kg ball moving at 6 m/s.',
        hints: ['KE = ½mv².', '½ × 2 × 6².'],
        correctAnswer: 36,
        unit: 'J',
        explanation: 'KE = ½ × 2 × 36 = 36 J.',
      },
      {
        id: 'ke-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: "An object's speed is tripled. By what factor does its kinetic energy change?",
        hints: ['KE depends on v². Tripling v means squaring the factor of 3.'],
        options: [
          { id: 'a', text: '3 times' },
          { id: 'b', text: '6 times' },
          { id: 'c', text: '9 times' },
          { id: 'd', text: 'It stays the same' },
        ],
        correctOptionId: 'c',
        explanation: 'Since KE ∝ v², tripling v multiplies KE by 3² = 9.',
      },
    ],
    commonMistake:
      'Forgetting to square the velocity — a very common algebra slip that gives an answer far too ' +
      'small; always square v BEFORE multiplying by ½m.',
    quickReview: [
      'KE = ½mv²',
      'Kinetic energy depends on the SQUARE of speed — doubling speed quadruples KE.',
      'This is why high-speed collisions are disproportionately dangerous.',
    ],
  },

  'gravitational-potential-energy-a-level': {
    slug: 'gravitational-potential-energy-a-level',
    title: 'Gravitational Potential Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Gravitational potential energy (GPE) is the energy an object has because of its height above ' +
      'a reference point: GPE = mgh. It represents the energy that would be released (usually ' +
      'converting to kinetic energy) if the object fell back down to that reference level.',
    whyItMatters:
      "GPE is the energy store behind hydroelectric dams, pendulum clocks, and roller coasters — " +
      'anything that stores energy by height, ready to be released as motion.',
    formulaSlug: 'gravitational-potential-energy-formula',
    workedExample: {
      id: 'gpe-worked-1',
      title: 'Find the GPE of a lifted box',
      problemStatement: 'A 15 kg box is lifted onto a shelf 2 m high. Using g = 9.8 m/s², find its gravitational potential energy relative to the floor.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'GPE = mgh', explanation: 'GPE depends on mass, gravity, and height.' },
        { step: 2, instruction: 'Substitute the values.', math: 'GPE = 15 × 9.8 × 2', explanation: 'm = 15 kg, g = 9.8 m/s², h = 2 m.' },
        { step: 3, instruction: 'Calculate.', math: 'GPE = 294', explanation: '15 × 9.8 × 2 = 294.' },
      ],
      finalAnswer: 'GPE = 294 J',
    },
    whyItWorks:
      'GPE equals the work that was done lifting the object against gravity (W = Fd, with F = weight ' +
      '= mg and d = h) — since raising the object stores exactly that much energy, ready to be ' +
      'released again as it falls.',
    realLifeExample: {
      title: 'Hydroelectric dams',
      scenario: 'A hydroelectric dam holds back a huge reservoir of water at height.',
      explanation: "The water's gravitational potential energy converts to kinetic energy as it falls through the turbines, which convert that kinetic energy into electricity — GPE is the entire energy source behind hydroelectric power.",
    },
    practiceQuestions: [
      {
        id: 'gpe-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the GPE of a 4 kg object at a height of 5 m (g = 9.8 m/s²).',
        hints: ['GPE = mgh.', '4 × 9.8 × 5.'],
        correctAnswer: 196,
        unit: 'J',
        explanation: 'GPE = 4 × 9.8 × 5 = 196 J.',
      },
    ],
    commonMistake:
      'Forgetting that GPE is always relative to a chosen reference height — the same object has ' +
      'different GPE values depending on whether it is measured from the floor, the ground outside, ' +
      'or sea level; only CHANGES in GPE are usually what matter physically.',
    quickReview: [
      'GPE = mgh',
      'GPE is the energy stored by height, relative to some reference level.',
      'This is the energy source behind hydroelectric power and pendulum clocks.',
    ],
  },

  'elastic-potential-energy-a-level': {
    slug: 'elastic-potential-energy-a-level',
    title: 'Elastic Potential Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Elastic potential energy (EPE) is the energy stored in a stretched or compressed elastic ' +
      'object, like a spring: EPE = ½kx². Like kinetic energy, this depends on the SQUARE of the ' +
      'extension — stretching a spring twice as far stores four times the energy.',
    whyItMatters:
      'Elastic potential energy is the energy store behind archery bows, catapults, wind-up clocks, ' +
      'and trampolines — anywhere energy is stored by stretching or compressing something elastic.',
    formulaSlug: 'elastic-potential-energy-formula-a-level',
    workedExample: {
      id: 'epe-worked-1',
      title: 'Find the energy stored in a stretched spring',
      problemStatement: 'A spring with spring constant 200 N/m is stretched by 0.15 m. Find the elastic potential energy stored.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'EPE = ½kx²', explanation: 'Elastic potential energy depends on the spring constant and the SQUARE of the extension.' },
        { step: 2, instruction: 'Substitute the values.', math: 'EPE = ½ × 200 × 0.15²', explanation: 'k = 200 N/m, x = 0.15 m.' },
        { step: 3, instruction: 'Calculate, squaring x first.', math: 'EPE = ½ × 200 × 0.0225 = 2.25', explanation: '0.15² = 0.0225; ½ × 200 × 0.0225 = 2.25.' },
      ],
      finalAnswer: 'EPE = 2.25 J',
    },
    whyItWorks:
      "As a spring stretches, the force needed increases steadily with extension (proportional to x) " +
      '— since the work done is the AVERAGE force times distance, and the average force is exactly ' +
      'half the final force, the total energy stored ends up proportional to x², not x.',
    realLifeExample: {
      title: 'Archery bows',
      scenario: 'An archer pulls back a bowstring before releasing an arrow.',
      explanation: 'Pulling the string back stores elastic potential energy in the bent bow; releasing the string converts that stored energy almost entirely into the kinetic energy of the launched arrow.',
    },
    practiceQuestions: [
      {
        id: 'epe-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A spring with spring constant 150 N/m is compressed by 0.1 m. Find the elastic potential energy stored.',
        hints: ['EPE = ½kx².', '½ × 150 × 0.1².'],
        correctAnswer: 0.75,
        unit: 'J',
        explanation: 'EPE = ½ × 150 × 0.01 = 0.75 J.',
      },
    ],
    commonMistake:
      'Forgetting to square the extension x — just like with kinetic energy, this is a common ' +
      'algebra slip that gives a far too small answer.',
    quickReview: [
      'EPE = ½kx²',
      'EPE depends on the SQUARE of the extension or compression.',
      'This is the energy store in bows, catapults, and trampolines.',
    ],
  },

  'conservation-of-energy-a-level': {
    slug: 'conservation-of-energy-a-level',
    title: 'Conservation of Energy',
    difficulty: 'hard',
    simpleExplanation:
      'The law of conservation of energy states that energy cannot be created or destroyed — only ' +
      'transferred from one form to another, or from one object to another. The total energy in an ' +
      'isolated system always stays exactly the same.',
    whyItMatters:
      'This is one of the most powerful laws in all of physics — it lets you predict the outcome of ' +
      'incredibly complicated processes (like a rollercoaster ride, or a bouncing ball) just by ' +
      'tracking where the total energy goes, without needing to analyze every force in detail.',
    workedExample: {
      id: 'conservation-energy-worked-1',
      title: 'Find the speed of a falling object using energy conservation',
      problemStatement: 'A 2 kg ball is dropped from a height of 5 m. Using g = 9.8 m/s², find its speed just before hitting the ground (ignoring air resistance).',
      steps: [
        { step: 1, instruction: 'Identify the energy transformation.', explanation: "As the ball falls, its gravitational potential energy converts entirely into kinetic energy (no air resistance means no energy is lost)." },
        { step: 2, instruction: 'Set the initial GPE equal to the final KE.', math: 'mgh = ½mv²', explanation: 'Conservation of energy: all the GPE lost becomes KE gained.' },
        { step: 3, instruction: 'Cancel mass from both sides, then solve for v.', math: 'gh = ½v²  →  v = √(2gh)', explanation: 'Mass cancels out completely, leaving a formula depending only on g and h.' },
        { step: 4, instruction: 'Substitute and calculate.', math: 'v = √(2 × 9.8 × 5) = √98 ≈ 9.9', explanation: '2 × 9.8 × 5 = 98; √98 ≈ 9.9.' },
      ],
      finalAnswer: 'v ≈ 9.9 m/s',
    },
    whyItWorks:
      "Since no energy is lost to friction or air resistance in this idealized case, whatever GPE " +
      'the ball loses by falling must reappear entirely as KE — setting the two expressions equal is ' +
      'a direct application of the conservation law, and elegantly avoids needing kinematics equations at all.',
    realLifeExample: {
      title: 'A rollercoaster',
      scenario: 'A rollercoaster car is slowly pulled to the top of the first hill, then released to complete the ride under gravity alone.',
      explanation: 'The GPE stored at the top continuously converts back and forth into KE as the car speeds up going downhill and slows going uphill — with a little energy steadily lost to friction and air resistance, which is why the car can never quite return to its original height.',
    },
    practiceQuestions: [
      {
        id: 'conservation-energy-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A 0.5 kg ball is dropped from a height of 3.2 m. Using g = 9.8 m/s² and ignoring air resistance, find its speed just before landing. (Round to 1 decimal place.)',
        hints: ['mgh = ½mv², so v = √(2gh).', '√(2 × 9.8 × 3.2).'],
        correctAnswer: 7.9,
        tolerance: 0.1,
        unit: 'm/s',
        explanation: 'v = √(2×9.8×3.2) = √62.72 ≈ 7.9 m/s.',
      },
    ],
    commonMistake:
      'Assuming energy conservation means an object always keeps moving forever — real systems ' +
      'always lose some useful energy to friction, air resistance, or heat, so while the TOTAL energy ' +
      'is conserved, USEFUL (kinetic or potential) energy usually decreases over time.',
    quickReview: [
      'Total energy in an isolated system is always conserved (never created or destroyed).',
      'Energy transforms between forms — e.g. GPE to KE — but the total stays constant.',
      'Real systems lose useful energy to friction/air resistance as heat, even though total energy is still conserved.',
    ],
  },
};
