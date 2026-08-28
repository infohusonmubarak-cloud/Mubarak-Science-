import type { Concept } from '@/types/content';

export const chapter3AForcesConcepts: Record<string, Concept> = {
  'newtons-first-law': {
    slug: 'newtons-first-law',
    title: "Newton's First Law",
    difficulty: 'easy',
    simpleExplanation:
      "Newton's first law says an object stays at rest, or keeps moving at a constant velocity in a " +
      'straight line, unless a net (unbalanced) force acts on it. This resistance to a change in ' +
      'motion is called inertia.',
    whyItMatters:
      'This law explains why a passenger lurches forward when a car brakes suddenly — the ' +
      "passenger's body tends to keep moving at its original speed until a force (the seatbelt) " +
      'acts on it.',
    workedExample: {
      id: 'first-law-worked-1',
      title: 'Explain a tablecloth trick using inertia',
      problemStatement: 'A tablecloth is yanked very quickly from under dishes, and the dishes barely move. Explain why, using Newton\'s first law.',
      steps: [
        { step: 1, instruction: 'Identify the forces acting on the dishes during the very short pull.', explanation: 'Friction between the cloth and the dishes acts only for the brief moment the cloth is underneath them.' },
        { step: 2, instruction: 'Apply the first law.', explanation: "Because the pull is so fast, the friction force barely has time to act — so the dishes' inertia keeps them nearly stationary while the cloth slides out from under them." },
      ],
      finalAnswer: "The dishes stay almost still because their inertia resists the (very brief) force from the cloth.",
    },
    whyItWorks:
      "Inertia isn't a force — it's simply the tendency of any mass to keep doing whatever it's " +
      "already doing (staying still, or moving steadily) until something forces it to do otherwise, " +
      'exactly as the first law states.',
    realLifeExample: {
      title: 'Seatbelts',
      scenario: 'A car crashes into a wall and stops suddenly.',
      explanation: "Without a seatbelt, a passenger's body would keep moving forward at the car's original speed (their inertia) until it hit something — the seatbelt provides the force needed to slow the passenger down safely along with the car.",
    },
    practiceQuestions: [
      {
        id: 'first-law-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'A ball rolling on a frictionless, perfectly flat surface with no other forces will:',
        hints: ["Think about what happens with zero net force, according to the first law."],
        options: [
          { id: 'a', text: 'Gradually slow down and stop on its own' },
          { id: 'b', text: 'Keep moving forever at constant velocity' },
          { id: 'c', text: 'Speed up on its own' },
          { id: 'd', text: 'Immediately stop' },
        ],
        correctOptionId: 'b',
        explanation: 'With zero net force, the first law says the ball keeps its velocity constant — it neither speeds up nor slows down.',
      },
    ],
    commonMistake:
      "Believing that a constant force is needed to keep something moving — in reality, a constant " +
      'velocity needs ZERO net force; a force is only needed to CHANGE the motion.',
    quickReview: [
      'An object at rest stays at rest; a moving object keeps moving at constant velocity — unless a net force acts.',
      'Inertia is the tendency to resist a change in motion.',
      'Zero net force does not mean zero motion — it means constant velocity.',
    ],
  },

  'newtons-second-law': {
    slug: 'newtons-second-law',
    title: "Newton's Second Law",
    difficulty: 'medium',
    simpleExplanation:
      "Newton's second law says the acceleration of an object is directly proportional to the net " +
      'force acting on it, and inversely proportional to its mass: F = ma. A bigger force gives a ' +
      'bigger acceleration; a bigger mass gives a smaller acceleration, for the same force.',
    whyItMatters:
      'This law is the single most useful equation in all of mechanics — it connects force, the ' +
      'quantity that causes motion to change, directly to the motion itself.',
    formulaSlug: 'newtons-second-law-formula',
    workedExample: {
      id: 'second-law-worked-1',
      title: "Find a crate's acceleration",
      problemStatement: 'A net force of 60 N acts on a crate of mass 12 kg. Find its acceleration.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F = ma, rearranged to a = F/m', explanation: 'Solve for acceleration by dividing both sides by mass.' },
        { step: 2, instruction: 'Substitute the values.', math: 'a = 60 / 12', explanation: 'F = 60 N, m = 12 kg.' },
        { step: 3, instruction: 'Calculate.', math: 'a = 5', explanation: '60 divided by 12.' },
      ],
      finalAnswer: 'a = 5 m/s²',
    },
    whyItWorks:
      'This law defines exactly how force and mass together determine acceleration; rearranging it ' +
      'to solve for whichever quantity is unknown always works, as long as the other two are known.',
    realLifeExample: {
      title: 'Why a loaded truck accelerates more slowly',
      scenario: "A truck's engine applies the same force whether the truck is empty or fully loaded.",
      explanation: 'Because the loaded truck has a much greater mass, the same engine force produces a much smaller acceleration — exactly as F = ma predicts.',
    },
    practiceQuestions: [
      {
        id: 'second-law-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A net force of 45 N gives a trolley an acceleration of 3 m/s². Find the mass of the trolley.',
        hints: ['F = ma, rearranged to m = F/a.', '45/3.'],
        correctAnswer: 15,
        unit: 'kg',
        explanation: 'm = F/a = 45/3 = 15 kg.',
      },
      {
        id: 'second-law-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A mass of 8 kg is accelerated at 2.5 m/s². Find the net force required.',
        hints: ['F = ma.', '8 × 2.5.'],
        correctAnswer: 20,
        unit: 'N',
        explanation: 'F = 8 × 2.5 = 20 N.',
      },
    ],
    commonMistake:
      "Using the total (or a single) applied force instead of the NET force — if multiple forces " +
      'act on an object, F = ma only works with their combined, resultant force.',
    quickReview: [
      'F = ma — net force equals mass times acceleration.',
      'Bigger force → bigger acceleration; bigger mass → smaller acceleration (for the same force).',
      'Always use the NET (resultant) force, not just one of several forces acting.',
    ],
  },

  'newtons-third-law': {
    slug: 'newtons-third-law',
    title: "Newton's Third Law",
    difficulty: 'medium',
    simpleExplanation:
      "Newton's third law says that whenever one object exerts a force on a second object, the " +
      'second object exerts an equal and opposite force back on the first. These action-reaction ' +
      'forces always act on two DIFFERENT objects, never on the same one.',
    whyItMatters:
      'This law explains how things like walking, swimming, and rocket propulsion work — every one ' +
      'of them relies on pushing against something else in order to be pushed back in the opposite direction.',
    workedExample: {
      id: 'third-law-worked-1',
      title: 'Identify an action-reaction pair for a swimmer',
      problemStatement: 'A swimmer pushes backward on the water with their arms. Identify the action-reaction pair, and explain why the swimmer moves forward.',
      steps: [
        { step: 1, instruction: 'Identify the action force.', explanation: "The swimmer's arms push the water backward." },
        { step: 2, instruction: 'Identify the reaction force.', explanation: 'By the third law, the water pushes the swimmer forward with an equal and opposite force.' },
        { step: 3, instruction: 'Explain the resulting motion.', explanation: "Since the reaction force acts on the swimmer (not on the water), it is this forward push from the water that accelerates the swimmer forward." },
      ],
      finalAnswer: "Action: swimmer pushes water backward. Reaction: water pushes swimmer forward — this reaction force is what propels the swimmer.",
    },
    whyItWorks:
      'Forces always arise from an interaction BETWEEN two objects, so it makes sense that the ' +
      "interaction produces an equal and opposite effect on each of the two objects involved — " +
      'never a lone force acting on just one object by itself.',
    realLifeExample: {
      title: 'Rocket propulsion',
      scenario: 'A rocket in the vacuum of space, with nothing to push against, still manages to accelerate forward.',
      explanation: 'The rocket engine pushes hot exhaust gas backward (the action); by the third law, the gas pushes the rocket forward (the reaction) — no surrounding air or ground is needed at all.',
    },
    practiceQuestions: [
      {
        id: 'third-law-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A book rests on a table. The table pushes up on the book with a normal force. What is the Newton\'s-third-law reaction to this force?',
        hints: ['The reaction force acts on the OTHER object (the table), not on the book.'],
        options: [
          { id: 'a', text: "The book's weight, pulling it down" },
          { id: 'b', text: 'The book pushing down on the table' },
          { id: 'c', text: 'Friction between the book and the table' },
          { id: 'd', text: 'There is no reaction force in this case' },
        ],
        correctOptionId: 'b',
        explanation: "The third-law reaction to the table pushing up on the book is the book pushing DOWN on the table — an equal, opposite force acting on the other object. (The book's weight is a separate force, from gravity, not a third-law pair with the normal force.)",
      },
    ],
    commonMistake:
      "Pairing a force with another force acting on the SAME object (like weight and normal " +
      'reaction on a resting book) as if they were a third-law pair — genuine action-reaction pairs ' +
      'always act on two different objects.',
    quickReview: [
      'For every action force, there is an equal and opposite reaction force.',
      'Action and reaction forces always act on two DIFFERENT objects.',
      'This is how walking, swimming, and rocket propulsion all work.',
    ],
  },

  'newtons-law-of-gravitation': {
    slug: 'newtons-law-of-gravitation',
    title: "Newton's Law of Gravitation",
    difficulty: 'hard',
    simpleExplanation:
      "Newton's law of gravitation says every two masses in the universe attract each other with a " +
      'force that increases with both masses, and decreases sharply — as the inverse square — with ' +
      'the distance between them. This single law explains everything from a dropped apple to the ' +
      'orbits of planets.',
    whyItMatters:
      'This was one of the first laws to show that the same physics governing everyday falling ' +
      'objects on Earth also governs the motion of the Moon and planets — unifying "earthly" and ' +
      '"heavenly" physics for the first time.',
    formulaSlug: 'newtons-law-of-gravitation-formula',
    workedExample: {
      id: 'gravitation-worked-1',
      title: 'Find the gravitational force between two masses',
      problemStatement: 'Two masses of 50 kg and 80 kg are 2 m apart. Using G = 6.67 × 10⁻¹¹ N·m²/kg², find the gravitational force between them.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F = Gm₁m₂/r²', explanation: 'Gravitational force depends on both masses and the square of the distance between them.' },
        { step: 2, instruction: 'Substitute the values.', math: 'F = (6.67×10⁻¹¹ × 50 × 80) / 2²', explanation: 'm₁ = 50 kg, m₂ = 80 kg, r = 2 m.' },
        { step: 3, instruction: 'Calculate the numerator and denominator.', math: 'F = (2.668×10⁻⁷) / 4', explanation: '6.67×10⁻¹¹ × 50 × 80 = 2.668×10⁻⁷; 2² = 4.' },
        { step: 4, instruction: 'Divide.', math: 'F ≈ 6.67 × 10⁻⁸', explanation: '2.668×10⁻⁷ ÷ 4 ≈ 6.67×10⁻⁸.' },
      ],
      finalAnswer: 'F ≈ 6.67 × 10⁻⁸ N',
    },
    whyItWorks:
      "The inverse-square dependence on distance comes from how gravity's influence spreads out " +
      'over the surface of an ever-larger sphere as distance increases — the same force is "spread ' +
      'thinner" over a much bigger area, which is why doubling the distance cuts the force to a quarter.',
    realLifeExample: {
      title: 'Why gravitational force between everyday objects is unnoticeable',
      scenario: 'Two people standing near each other are gravitationally attracted to each other, yet no one ever notices this pull.',
      explanation: "Because G is such an extremely tiny number, the gravitational force between ordinary-sized masses (a few tens of kilograms) is far too small to feel — gravity only becomes noticeable when at least one mass is enormous, like a planet.",
    },
    practiceQuestions: [
      {
        id: 'gravitation-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'If the distance between two masses is doubled, what happens to the gravitational force between them?',
        hints: ['The force depends on 1/r² — the inverse SQUARE of distance.'],
        options: [
          { id: 'a', text: 'It halves' },
          { id: 'b', text: 'It stays the same' },
          { id: 'c', text: 'It becomes a quarter of its original value' },
          { id: 'd', text: 'It doubles' },
        ],
        correctOptionId: 'c',
        explanation: 'Since F ∝ 1/r², doubling r divides F by 2² = 4, so the force becomes a quarter of its original value.',
      },
    ],
    commonMistake:
      'Forgetting to square the distance r before dividing — the law uses r², not r, so halving the ' +
      'distance quadruples the force, not just doubles it.',
    quickReview: [
      'F = Gm₁m₂/r²',
      'Gravitational force increases with both masses, and decreases as the inverse square of distance.',
      'G is an extremely small constant, which is why gravity between everyday-sized objects is unnoticeable.',
    ],
  },

  'contact-forces': {
    slug: 'contact-forces',
    title: 'Contact Forces: Friction, Normal Reaction and Tension',
    difficulty: 'medium',
    simpleExplanation:
      'Contact forces only act when two objects physically touch. The normal reaction is the push a ' +
      'surface exerts perpendicular to itself, supporting an object resting on it. Friction is a ' +
      'force that opposes relative sliding (or the tendency to slide) between two touching surfaces. ' +
      'Tension is the pulling force transmitted through a stretched string, rope, or cable.',
    whyItMatters:
      "Almost every everyday force you can feel — a floor pushing up on your feet, a rope holding a " +
      'swing, friction letting you walk without slipping — is one of these three contact forces.',
    formulaSlug: 'friction-formula',
    workedExample: {
      id: 'contact-forces-worked-1',
      title: 'Find the maximum friction force on a crate',
      problemStatement: 'A crate rests on a floor, pressed down with a normal force of 300 N. The coefficient of friction between the crate and floor is 0.4. Find the maximum friction force before the crate starts to slide.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F(friction) = μN', explanation: 'Maximum friction is proportional to the normal reaction force.' },
        { step: 2, instruction: 'Substitute the values.', math: 'F(friction) = 0.4 × 300', explanation: 'μ = 0.4, N = 300 N.' },
        { step: 3, instruction: 'Calculate.', math: 'F(friction) = 120', explanation: '0.4 × 300 = 120.' },
      ],
      finalAnswer: 'Maximum friction force = 120 N',
    },
    whyItWorks:
      'The rougher two surfaces are, and the harder they are pressed together, the more their ' +
      'microscopic irregularities interlock and resist sliding — which is exactly why friction ' +
      'scales with both the material roughness (μ) and the normal force pressing them together.',
    realLifeExample: {
      title: 'Why icy roads are dangerous',
      scenario: 'A car that stops safely on dry tarmac can skid dangerously on an icy road.',
      explanation: 'Ice has a much lower coefficient of friction than dry tarmac, so the same tyres provide far less friction force to slow the car down — this is exactly why braking distances increase so much on ice.',
    },
    practiceQuestions: [
      {
        id: 'contact-forces-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A box is pressed onto a surface with a normal force of 150 N. The coefficient of friction is 0.25. Find the maximum friction force.',
        hints: ['F(friction) = μN.', '0.25 × 150.'],
        correctAnswer: 37.5,
        unit: 'N',
        explanation: 'F(friction) = 0.25 × 150 = 37.5 N.',
      },
    ],
    commonMistake:
      "Assuming friction always equals the coefficient times the object's weight — friction depends " +
      'on the NORMAL force pressing the surfaces together, which only equals weight on a flat, ' +
      'horizontal surface with no other vertical forces.',
    quickReview: [
      'Normal reaction: perpendicular push from a surface supporting an object.',
      'Friction: F(friction) = μN, opposes relative sliding.',
      'Tension: the pulling force transmitted through a stretched rope or string.',
    ],
  },

  'resultant-force-and-equilibrium': {
    slug: 'resultant-force-and-equilibrium',
    title: 'Resultant Force and Equilibrium',
    difficulty: 'medium',
    simpleExplanation:
      'When several forces act on an object at once, the resultant (or net) force is their vector ' +
      'sum — the single force that would have the same overall effect. An object is in equilibrium ' +
      'when the resultant force on it is zero, meaning it is either at rest or moving at constant velocity.',
    whyItMatters:
      'Almost every real object has multiple forces acting on it at the same time (gravity, normal ' +
      'reaction, friction, applied forces) — finding the resultant is the essential first step ' +
      "before applying Newton's second law.",
    workedExample: {
      id: 'resultant-worked-1',
      title: 'Find the resultant of two forces acting along the same line',
      problemStatement: 'A box has a 40 N force pulling it right and a 15 N friction force resisting to the left. Find the resultant force.',
      steps: [
        { step: 1, instruction: 'Assign a positive direction and signs to each force.', math: 'pull = +40 N, friction = −15 N', explanation: 'Take right as positive; friction opposes motion, so it is negative.' },
        { step: 2, instruction: 'Add the forces.', math: '40 + (−15) = 25', explanation: 'Forces along the same line combine like signed numbers.' },
      ],
      finalAnswer: 'Resultant force = 25 N to the right',
    },
    whyItWorks:
      "Because force is a vector, several forces acting on the same object combine exactly like " +
      "vectors — along one line, that's just signed addition; the single resultant then behaves, " +
      'for F = ma purposes, exactly like all those individual forces combined.',
    realLifeExample: {
      title: 'A tug-of-war',
      scenario: 'Two teams pull on opposite ends of a rope with different total forces.',
      explanation: 'The rope (and the teams) accelerate in the direction of the resultant force — whichever team pulls harder overall, by exactly the difference between the two total pulling forces.',
    },
    practiceQuestions: [
      {
        id: 'resultant-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A rope is pulled with 70 N to the left and 50 N to the right by two teams. Find the size of the resultant force.',
        hints: ['Assign signs and add.', '70 − 50.'],
        correctAnswer: 20,
        unit: 'N',
        explanation: 'Resultant = 70 − 50 = 20 N (to the left).',
      },
      {
        id: 'resultant-pq-2',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'An object is in equilibrium. What can you conclude about its motion?',
        hints: ['Equilibrium means zero resultant force.'],
        options: [
          { id: 'a', text: 'It must be at rest' },
          { id: 'b', text: 'It must be accelerating' },
          { id: 'c', text: 'It is either at rest or moving at constant velocity' },
          { id: 'd', text: 'It must be moving in a circle' },
        ],
        correctOptionId: 'c',
        explanation: 'Zero resultant force means zero acceleration, which allows either a state of rest OR constant-velocity motion — not necessarily rest alone.',
      },
    ],
    commonMistake:
      'Assuming equilibrium means an object must be stationary — a car cruising at a perfectly ' +
      'steady speed in a straight line is also in equilibrium, since its resultant force is zero.',
    quickReview: [
      'Resultant force = the vector sum of all forces acting on an object.',
      'Equilibrium: resultant force = 0 (object at rest OR constant velocity).',
      "Finding the resultant is the essential first step before applying F = ma.",
    ],
  },

  'mass-and-weight': {
    slug: 'mass-and-weight',
    title: 'Mass and Weight',
    difficulty: 'easy',
    simpleExplanation:
      'Mass is the amount of matter in an object, measured in kilograms — it never changes, no ' +
      'matter where the object is. Weight is the force of gravity pulling on that mass, measured in ' +
      'newtons — it depends on the local gravitational field strength, so the same object weighs ' +
      'less on the Moon than on Earth.',
    whyItMatters:
      'Confusing mass and weight is one of the most common errors in physics — they have different ' +
      'units, different values in different places, and are genuinely different physical quantities.',
    formulaSlug: 'weight-formula',
    workedExample: {
      id: 'mass-weight-worked-1',
      title: "Find an astronaut's weight on the Moon",
      problemStatement: "An astronaut has a mass of 80 kg. Earth's g ≈ 9.8 m/s², the Moon's g ≈ 1.6 m/s². Find the astronaut's weight on the Moon.",
      steps: [
        { step: 1, instruction: 'Write the formula, using the Moon\'s g.', math: 'W = mg', explanation: 'Weight uses the LOCAL value of g — here, the Moon\'s, not Earth\'s.' },
        { step: 2, instruction: 'Substitute the values.', math: 'W = 80 × 1.6', explanation: 'm = 80 kg (unchanged anywhere), g(Moon) = 1.6 m/s².' },
        { step: 3, instruction: 'Calculate.', math: 'W = 128', explanation: '80 × 1.6 = 128.' },
      ],
      finalAnswer: "Weight on the Moon = 128 N (compared to 80 × 9.8 = 784 N on Earth)",
    },
    whyItWorks:
      "Since weight is defined as W = mg, and the astronaut's mass m doesn't change by travelling to " +
      "the Moon, the entire difference in weight comes purely from the Moon's much weaker " +
      'gravitational field strength, g.',
    realLifeExample: {
      title: 'Why astronauts can jump so high on the Moon',
      scenario: 'Footage of Apollo astronauts shows them making huge leaps despite bulky spacesuits.',
      explanation: "Their mass (and muscular strength) is unchanged, but their weight is only about a sixth of what it is on Earth, so the same muscular push produces a much bigger leap.",
    },
    practiceQuestions: [
      {
        id: 'mass-weight-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the weight of a 5 kg object on Earth (g = 9.8 m/s²).',
        hints: ['W = mg.', '5 × 9.8.'],
        correctAnswer: 49,
        unit: 'N',
        explanation: 'W = 5 × 9.8 = 49 N.',
      },
      {
        id: 'mass-weight-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'An object is taken from Earth to the Moon. Which statement is correct?',
        hints: ['Mass depends on the amount of matter; weight depends on local gravity.'],
        options: [
          { id: 'a', text: 'Both its mass and weight stay the same' },
          { id: 'b', text: 'Its mass stays the same, but its weight decreases' },
          { id: 'c', text: 'Its mass decreases, but its weight stays the same' },
          { id: 'd', text: 'Both its mass and weight decrease equally' },
        ],
        correctOptionId: 'b',
        explanation: 'Mass depends only on the amount of matter and is unchanged; weight depends on local gravity, which is much weaker on the Moon.',
      },
    ],
    commonMistake:
      'Using the words "mass" and "weight" interchangeably, or measuring weight in kilograms — ' +
      'mass is measured in kilograms (kg), weight is a force, measured in newtons (N).',
    quickReview: [
      'W = mg',
      'Mass (kg): amount of matter, the same everywhere.',
      'Weight (N): the force of gravity on that mass, different in different gravitational fields.',
    ],
  },

  'freely-falling-bodies': {
    slug: 'freely-falling-bodies',
    title: 'Freely Falling Bodies',
    difficulty: 'medium',
    simpleExplanation:
      "A body falls freely when gravity is the only force acting on it — no air resistance, no " +
      "support. Because Newton's second law (F = ma) and weight (W = mg) both apply, EVERY freely " +
      'falling object accelerates at exactly g, regardless of its mass — a heavier object has more ' +
      'weight pulling it down, but also more inertia resisting that pull, and the two effects exactly cancel.',
    whyItMatters:
      "This connects three ideas from this chapter — Newton's second law, weight, and Newton's laws " +
      "of motion — into a single, surprising result: in the absence of air resistance, a feather and " +
      'a hammer fall at exactly the same rate.',
    workedExample: {
      id: 'freely-falling-worked-1',
      title: 'Show that mass cancels out for a freely falling body',
      problemStatement: 'Show, using F = ma and W = mg, that the acceleration of any freely falling object is g, independent of its mass.',
      steps: [
        { step: 1, instruction: 'Identify the only force acting: weight.', math: 'F(net) = W = mg', explanation: 'With no air resistance and nothing supporting the object, weight is the only force.' },
        { step: 2, instruction: "Apply Newton's second law.", math: 'F(net) = ma', explanation: 'The net force also equals mass times acceleration, by the second law.' },
        { step: 3, instruction: 'Set the two expressions for F(net) equal, then cancel mass.', math: 'mg = ma  →  g = a', explanation: 'Both sides contain a factor of m, which cancels — leaving acceleration = g, with no mass in the result at all.' },
      ],
      finalAnswer: 'a = g, for any mass — proving all freely falling objects accelerate identically.',
    },
    whyItWorks:
      "The mass cancels precisely because BOTH the force causing the fall (weight, mg) and the " +
      "object's resistance to accelerating (inertia, m in F = ma) scale with the same mass — so a " +
      'more massive object is pulled down harder, but resists that pull just as much more, leaving ' +
      'the acceleration unchanged.',
    realLifeExample: {
      title: "Apollo 15's hammer-and-feather demonstration",
      scenario: 'On the airless Moon, astronaut David Scott dropped a hammer and a feather at the same time, live on camera.',
      explanation: 'With no air resistance to slow the much lighter feather, both objects hit the lunar surface at exactly the same moment — a direct demonstration that freely falling acceleration does not depend on mass.',
    },
    practiceQuestions: [
      {
        id: 'freely-falling-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A 2 kg ball and a 10 kg ball are dropped from the same height in a vacuum (no air resistance). Which hits the ground first?',
        hints: ['Mass cancels out in free fall — both objects accelerate at g.'],
        options: [
          { id: 'a', text: 'The 2 kg ball, because it is lighter' },
          { id: 'b', text: 'The 10 kg ball, because it is heavier' },
          { id: 'c', text: 'They hit the ground at exactly the same time' },
          { id: 'd', text: 'It depends on their exact shapes' },
        ],
        correctOptionId: 'c',
        explanation: 'In the absence of air resistance, every freely falling object accelerates at exactly g, regardless of mass, so both balls hit the ground simultaneously.',
      },
    ],
    commonMistake:
      'Assuming heavier objects always fall faster — this is only true in the presence of air ' +
      'resistance, which affects light, large-surface-area objects (like feathers) far more than ' +
      'dense, compact ones; true free fall (no air) is mass-independent.',
    quickReview: [
      'A freely falling body has only gravity (weight) acting on it — no air resistance, no support.',
      'F = ma and W = mg together show that a = g, independent of mass.',
      "This is why a hammer and a feather fall together on the Moon (no air).",
    ],
  },

  'momentum-and-impulse': {
    slug: 'momentum-and-impulse',
    title: 'Momentum and Impulse',
    difficulty: 'medium',
    simpleExplanation:
      "Momentum (p = mv) measures how hard it is to stop a moving object — it combines both mass " +
      'and velocity. Impulse is the change in momentum a force produces over time: impulse = FΔt = ' +
      'Δp. A given force produces a bigger change in momentum the longer it acts.',
    whyItMatters:
      'Momentum and impulse explain why crumple zones, airbags, and padded landing mats work — they ' +
      'all extend the TIME over which a collision happens, which reduces the force needed to ' +
      'produce the same change in momentum.',
    formulaSlug: 'momentum-and-impulse-formula',
    workedExample: {
      id: 'momentum-worked-1',
      title: 'Find the impulse needed to stop a moving object',
      problemStatement: 'A 1200 kg car travelling at 20 m/s is brought to rest. Find the impulse required.',
      steps: [
        { step: 1, instruction: "Find the car's initial momentum.", math: 'p = mv = 1200 × 20 = 24,000', explanation: 'Momentum before stopping.' },
        { step: 2, instruction: 'Find the change in momentum (final momentum is zero).', math: 'Δp = 0 − 24,000 = −24,000', explanation: 'The car goes from 24,000 kg·m/s to 0, a change of −24,000 kg·m/s.' },
        { step: 3, instruction: 'Recall that impulse equals the change in momentum.', math: 'J = Δp = −24,000', explanation: 'The impulse needed is exactly the change in momentum.' },
      ],
      finalAnswer: 'Impulse required = 24,000 N·s (in the direction opposing motion)',
    },
    whyItWorks:
      "Impulse is DEFINED as the change in momentum a force produces, so whenever an object's " +
      'momentum changes by a known amount, the impulse that caused that change must equal exactly ' +
      'that change — no separate calculation of force and time is needed if only the impulse is wanted.',
    realLifeExample: {
      title: 'Why airbags reduce injury',
      scenario: "A car crash brings a passenger's momentum to zero either way — with or without an airbag.",
      explanation: 'An airbag extends the time (Δt) over which that same change in momentum happens; since impulse = FΔt is fixed, a longer Δt means a much smaller force F on the passenger — reducing injury.',
    },
    practiceQuestions: [
      {
        id: 'momentum-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'Find the momentum of a 3 kg object moving at 6 m/s.',
        hints: ['p = mv.', '3 × 6.'],
        correctAnswer: 18,
        unit: 'kg·m/s',
        explanation: 'p = 3 × 6 = 18 kg·m/s.',
      },
      {
        id: 'momentum-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A force of 400 N acts on an object for 0.5 s. Find the impulse delivered.',
        hints: ['J = FΔt.', '400 × 0.5.'],
        correctAnswer: 200,
        unit: 'N·s',
        explanation: 'J = FΔt = 400 × 0.5 = 200 N·s.',
      },
    ],
    commonMistake:
      'Forgetting that impulse and momentum are vectors — a change of direction (like a ball ' +
      'bouncing straight back off a wall) involves a much bigger change in momentum than just ' +
      'stopping, since the velocity reverses sign.',
    quickReview: [
      'p = mv (momentum); J = FΔt = Δp (impulse).',
      'A longer contact time reduces the force needed for the same change in momentum.',
      'This is why crumple zones, airbags, and padded mats reduce injury.',
    ],
  },

  'conservation-of-momentum': {
    slug: 'conservation-of-momentum',
    title: 'The Law of Conservation of Momentum',
    difficulty: 'hard',
    simpleExplanation:
      'The law of conservation of momentum says that in any collision or interaction, as long as no ' +
      'external force acts, the total momentum of a system before the event equals the total ' +
      'momentum after it — momentum can be transferred between objects, but the total never changes.',
    whyItMatters:
      "This law lets you predict the outcome of a collision (like two colliding trolleys, or a gun " +
      "recoiling when fired) without needing to know the details of the force during the collision " +
      "itself — it follows directly from Newton's third law.",
    workedExample: {
      id: 'conservation-worked-1',
      title: 'Find the velocity after a collision',
      problemStatement: 'A 4 kg trolley moving at 6 m/s collides with a stationary 2 kg trolley, and they stick together. Find their common velocity after the collision.',
      steps: [
        { step: 1, instruction: 'Write the conservation law.', math: 'total momentum before = total momentum after', explanation: 'Momentum is conserved when no external force acts.' },
        { step: 2, instruction: 'Calculate the total momentum before the collision.', math: '(4 × 6) + (2 × 0) = 24', explanation: 'Only the first trolley is moving before the collision.' },
        { step: 3, instruction: 'Set this equal to the combined momentum after (they move together).', math: '24 = (4+2) × v', explanation: 'After sticking together, the combined mass is 4+2 = 6 kg, moving at a common velocity v.' },
        { step: 4, instruction: 'Solve for v.', math: 'v = 24 / 6 = 4', explanation: '24 divided by 6.' },
      ],
      finalAnswer: 'Common velocity after collision = 4 m/s',
    },
    whyItWorks:
      "During a collision, the two objects exert equal and opposite forces on each other (Newton's " +
      'third law), for exactly the same time — so the impulse (and hence the momentum change) each ' +
      'object experiences is equal and opposite, meaning the total momentum of the whole system stays unchanged.',
    realLifeExample: {
      title: 'Rifle recoil',
      scenario: 'A rifle is fired: the bullet shoots forward, and the rifle kicks backward into the shooter\'s shoulder.',
      explanation: 'Before firing, the total momentum (rifle + bullet) is zero; after firing, the bullet\'s forward momentum must be exactly balanced by the rifle\'s backward momentum, so the total remains zero — this is why the rifle recoils.',
    },
    practiceQuestions: [
      {
        id: 'conservation-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A 5 kg trolley moving at 4 m/s collides with a stationary 3 kg trolley and they stick together. Find their common velocity after the collision. (Round to 2 decimal places.)',
        hints: ['Total momentum before = total momentum after.', '(5×4) = (5+3) × v.'],
        correctAnswer: 2.5,
        unit: 'm/s',
        explanation: 'v = (5×4) / (5+3) = 20/8 = 2.5 m/s.',
      },
    ],
    commonMistake:
      "Forgetting that momentum is a vector — in a head-on collision, velocities in opposite " +
      'directions must be given opposite signs before adding the momenta together, or the total ' +
      'will be wrong.',
    quickReview: [
      'Total momentum before = total momentum after, when no external force acts.',
      "This follows directly from Newton's third law.",
      'Momentum is a vector — always account for direction with signs.',
    ],
  },
};
