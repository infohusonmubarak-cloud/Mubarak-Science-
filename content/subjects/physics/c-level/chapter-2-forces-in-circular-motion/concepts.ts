import type { Concept } from '@/types/content';

export const chapter2CForcesConcepts: Record<string, Concept> = {
  'centripetal-force': {
    slug: 'centripetal-force',
    title: 'Centripetal Force',
    difficulty: 'medium',
    simpleExplanation:
      'A centripetal force is the net force that keeps an object moving along a circular path. It ' +
      "always points toward the centre of the circle — never forward, never outward — which is " +
      "exactly why it's called centripetal, from Latin for 'centre-seeking.'",
    whyItMatters:
      "Newton's first law says an object keeps moving in a straight line unless a force acts on it. " +
      'A centripetal force is what continuously bends that straight-line path into a circle — ' +
      'without one, anything moving would simply fly off straight.',
    diagram: {
      id: 'centripetal-force-diagram',
      title: 'An object moving in a circle',
      altText: 'A diagram showing an object on a circular path, with a red arrow labelled Fc pointing inward toward the centre and a blue arrow labelled v pointing tangent to the circle',
      component: 'CircularMotionDiagram',
      interactive: false,
      props: { forceLabel: 'Fc', showVelocityVector: true },
    },
    formulaSlug: 'centripetal-force-formula',
    workedExample: {
      id: 'centripetal-force-worked-1',
      title: 'Find the centripetal force on a swung ball',
      problemStatement: 'A 0.5 kg ball on a string moves in a circle of radius 0.8 m at a constant speed of 4 m/s. Find the centripetal force acting on it.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Fc = mv² / r', explanation: 'Centripetal force from mass, speed, and radius.' },
        { step: 2, instruction: 'Substitute the values.', math: 'Fc = (0.5 × 4²) / 0.8', explanation: 'm = 0.5 kg, v = 4 m/s, r = 0.8 m.' },
        { step: 3, instruction: 'Calculate.', math: 'Fc = (0.5 × 16) / 0.8 = 8 / 0.8 = 10', explanation: '4² = 16, 0.5 × 16 = 8, then 8 ÷ 0.8 = 10.' },
      ],
      finalAnswer: 'Fc = 10 N',
    },
    whyItWorks:
      'An object moving in a circle is constantly accelerating toward the centre — even at constant ' +
      "speed — because its direction keeps changing. This centripetal acceleration equals v²/r. By " +
      "Newton's second law (F = ma), the net force producing that acceleration must be F = mv²/r.",
    realLifeExample: {
      title: 'A car going around a roundabout',
      scenario: 'A car drives around a roundabout at a steady speed.',
      explanation: "Friction between the tyres and the road supplies the centripetal force that continuously turns the car's straight-line motion into the curve of the roundabout.",
    },
    practiceQuestions: [
      {
        id: 'centripetal-force-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 2 kg object moves in a circle of radius 5 m at 10 m/s. What centripetal force acts on it?',
        hints: ['Fc = mv²/r.', '(2 × 10²) / 5.'],
        correctAnswer: 40,
        unit: 'N',
        explanation: 'Fc = (2 × 100) / 5 = 200/5 = 40 N.',
      },
    ],
    commonMistake:
      "Treating centripetal force as an extra force added on top of gravity, tension, friction, or the " +
      "normal force — it isn't a new force at all. It's just the name for whichever real force (or " +
      'combination of real forces) happens to point toward the centre and keep the object turning.',
    quickReview: [
      'Fc = mv²/r — the net inward force needed for circular motion.',
      'Centripetal force always points toward the centre of the circle.',
      "It is not a separate force — it's supplied by tension, friction, gravity, or the normal force.",
    ],
  },

  'tension-as-centripetal-force': {
    slug: 'tension-as-centripetal-force',
    title: 'Tension as Centripetal Force',
    difficulty: 'medium',
    simpleExplanation:
      'When an object is swung in a circle on a string, the tension in the string is what pulls it ' +
      'toward the centre — the string is the real, physical force supplying the centripetal force.',
    whyItMatters:
      'This is the clearest, simplest example of a centripetal force in action: you can feel the ' +
      'tension yourself when you swing something on a string, and it disappears the instant the ' +
      'string is cut — proving the object was never being pushed outward at all.',
    diagram: {
      id: 'tension-centripetal-diagram',
      title: 'A ball swung on a string',
      altText: 'A diagram showing a ball on a circular path with a red arrow labelled Tension pointing inward along the string toward the centre',
      component: 'CircularMotionDiagram',
      interactive: false,
      props: { forceLabel: 'Tension', showVelocityVector: true },
    },
    formulaSlug: 'centripetal-force-formula-angular',
    workedExample: {
      id: 'tension-worked-1',
      title: 'Find the tension in a swung string',
      problemStatement: 'A 0.2 kg ball on a 0.5 m string swings in a horizontal circle at an angular velocity of 5 rad/s. Find the tension in the string.',
      steps: [
        { step: 1, instruction: 'Recognize that tension is the only horizontal force, so it equals the centripetal force.', math: 'T = Fc = mrω²', explanation: 'The string is the sole source of the inward force here.' },
        { step: 2, instruction: 'Substitute the values.', math: 'T = 0.2 × 0.5 × 5²', explanation: 'm = 0.2 kg, r = 0.5 m, ω = 5 rad/s.' },
        { step: 3, instruction: 'Calculate.', math: 'T = 0.2 × 0.5 × 25 = 2.5', explanation: '5² = 25, then 0.2 × 0.5 × 25 = 2.5.' },
      ],
      finalAnswer: 'T = 2.5 N',
    },
    whyItWorks:
      'A string can only pull, not push, and it can only pull along its own length — straight from the ' +
      'object back toward whatever it is anchored to. For an object swinging in a horizontal circle, ' +
      "that anchor is the centre, so the string's pull is automatically the centripetal force.",
    realLifeExample: {
      title: 'A hammer throw in athletics',
      scenario: 'An athlete swings a heavy ball on a wire before releasing it.',
      explanation: 'The wire supplies the centripetal force that keeps the ball moving in a circle — the moment the athlete lets go, the wire\'s tension vanishes and the ball flies off in a straight line, tangent to the circle.',
    },
    practiceQuestions: [
      {
        id: 'tension-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 0.3 kg ball on a 0.4 m string swings at 4 rad/s. What is the tension in the string?',
        hints: ['T = mrω².', '0.3 × 0.4 × 4².'],
        correctAnswer: 1.92,
        unit: 'N',
        explanation: 'T = 0.3 × 0.4 × 16 = 1.92 N.',
      },
    ],
    commonMistake:
      'Assuming the string also has some outward tension balancing the inward pull — a string only ' +
      'ever pulls in one direction (toward its anchor), so there is nothing pulling the object outward.',
    quickReview: [
      'For an object on a string in a horizontal circle, tension is the centripetal force.',
      'T = mrω² (or equivalently T = mv²/r).',
      'Cutting the string removes the centripetal force, and the object flies off in a straight line.',
    ],
  },

  'friction-as-centripetal-force': {
    slug: 'friction-as-centripetal-force',
    title: 'Friction as Centripetal Force',
    difficulty: 'medium',
    simpleExplanation:
      'When a car turns on a flat road, there is no string and no obvious inward force — but friction ' +
      'between the tyres and the road pushes sideways on the car, toward the centre of the turn, and ' +
      'that friction is what supplies the centripetal force.',
    whyItMatters:
      'Friction has a maximum possible value before tyres start to slide — this sets a real speed ' +
      'limit for how fast a car can safely take a given curve, which is exactly why sharp bends have ' +
      'lower speed limits than gentle ones.',
    diagram: {
      id: 'friction-centripetal-diagram',
      title: 'A car turning on a flat road',
      altText: 'A diagram showing a car on a circular path with a red arrow labelled Friction pointing inward toward the centre of the turn',
      component: 'CircularMotionDiagram',
      interactive: false,
      props: { forceLabel: 'Friction', showVelocityVector: true },
    },
    formulaSlug: 'centripetal-force-formula',
    workedExample: {
      id: 'friction-worked-1',
      title: "Find a car's maximum safe turning speed",
      problemStatement: 'A 1000 kg car turns on a flat road of radius 50 m. The maximum friction available between tyres and road is μ = 0.4 (take g = 9.8 m/s²). What is the maximum safe speed?',
      steps: [
        { step: 1, instruction: 'Find the maximum friction force available.', math: 'Fmax = μmg = 0.4 × 1000 × 9.8 = 3920', explanation: 'Friction cannot exceed μ times the normal force, which equals mg on a flat road.' },
        { step: 2, instruction: 'Set the maximum friction equal to the required centripetal force.', math: 'Fmax = mv² / r', explanation: 'At the fastest safe speed, friction is working at its very limit.' },
        { step: 3, instruction: 'Solve for v.', math: 'v = √(Fmax × r / m) = √(3920 × 50 / 1000) = √196 = 14', explanation: 'Rearranging Fc = mv²/r for v and substituting.' },
      ],
      finalAnswer: 'v_max = 14 m/s (about 50 km/h)',
    },
    whyItWorks:
      "Friction can only push up to a maximum value, μ times the normal force, before the tyres lose " +
      "grip and slide. As long as the centripetal force needed (mv²/r) stays below that maximum, " +
      "friction supplies exactly what's needed — but push the speed higher and the car skids outward.",
    realLifeExample: {
      title: 'Icy roads and speed limits',
      scenario: 'The same curve becomes far more dangerous to drive around in icy conditions.',
      explanation: 'Ice drastically lowers μ, which lowers the maximum available friction — and therefore the maximum safe turning speed — which is exactly why icy bends cause so many skidding accidents at speeds that would be perfectly safe on dry tarmac.',
    },
    practiceQuestions: [
      {
        id: 'friction-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A 800 kg car turns on a flat road of radius 20 m with μ = 0.5 (g = 9.8 m/s²). What is the maximum safe speed, in m/s?',
        hints: ['Fmax = μmg, then v = √(Fmax × r / m), which simplifies to v = √(μgr).', '√(0.5 × 9.8 × 20).'],
        correctAnswer: 9.9,
        tolerance: 0.1,
        unit: 'm/s',
        explanation: 'v = √(μgr) = √(0.5 × 9.8 × 20) = √98 ≈ 9.9 m/s.',
      },
    ],
    commonMistake:
      'Forgetting that friction has a maximum limit — assuming friction can simply supply whatever ' +
      'centripetal force is needed at any speed, when in reality going too fast for the available ' +
      'friction causes the tyres to slide and the car to skid outward off its curved path.',
    quickReview: [
      'Friction supplies the centripetal force for a car turning on a flat road.',
      'Maximum available friction: Fmax = μmg.',
      'Maximum safe turning speed: v_max = √(μgr).',
    ],
  },

  'gravity-as-centripetal-force': {
    slug: 'gravity-as-centripetal-force',
    title: 'Gravity as Centripetal Force',
    difficulty: 'medium',
    simpleExplanation:
      "For a satellite or moon orbiting a planet, there is no string and no friction — gravity alone " +
      'pulls it toward the centre, and that gravitational pull is the entire centripetal force keeping ' +
      'it in orbit.',
    whyItMatters:
      "This is why astronauts on the International Space Station appear weightless: they aren't beyond " +
      "gravity's reach (Earth's gravity is still very much acting on them) — they and the station are " +
      'both in continuous free fall around the Earth, which feels weightless even though gravity is ' +
      'working exactly as it should as a centripetal force.',
    diagram: {
      id: 'gravity-centripetal-diagram',
      title: 'A satellite orbiting a planet',
      altText: 'A diagram showing a satellite on a circular orbital path with a red arrow labelled Gravity pointing inward toward the centre of the planet',
      component: 'CircularMotionDiagram',
      interactive: false,
      props: { forceLabel: 'Gravity', showVelocityVector: true },
    },
    formulaSlug: 'centripetal-force-formula',
    workedExample: {
      id: 'gravity-worked-1',
      title: "Find the centripetal force on an orbiting satellite",
      problemStatement: 'A 750 kg satellite orbits Earth at a speed of 7600 m/s, at an orbital radius of 6,900,000 m. Find the centripetal force gravity must supply.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'Fc = mv² / r', explanation: 'Gravity is the only force acting, so it must equal the full centripetal force.' },
        { step: 2, instruction: 'Substitute the values.', math: 'Fc = (750 × 7600²) / 6{,}900{,}000', explanation: 'm = 750 kg, v = 7600 m/s, r = 6.9 × 10⁶ m.' },
        { step: 3, instruction: 'Calculate.', math: 'Fc ≈ 6278 N', explanation: '7600² = 57,760,000; 750 × 57,760,000 = 43,320,000,000; divided by 6,900,000 ≈ 6278.' },
      ],
      finalAnswer: 'Fc ≈ 6.28 × 10³ N',
    },
    whyItWorks:
      "Gravity pulls every orbiting object straight toward the centre of the planet it orbits, with no " +
      "sideways or outward component at all — which is exactly the direction a centripetal force must " +
      'point. As long as gravity provides exactly mv²/r for the orbit\'s speed and radius, the object ' +
      'keeps circling instead of falling in or flying away.',
    realLifeExample: {
      title: 'The Moon orbiting the Earth',
      scenario: "The Moon has been circling the Earth for billions of years without any engine or push.",
      explanation: "Earth's gravity continuously pulls the Moon toward the centre of its orbit — precisely the centripetal force needed to keep bending the Moon's path into a (nearly) circular orbit instead of letting it drift away in a straight line.",
    },
    practiceQuestions: [
      {
        id: 'gravity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 500 kg satellite orbits at 8000 m/s at a radius of 8,000,000 m. What centripetal force does gravity supply? (Round to the nearest whole newton.)',
        hints: ['Fc = mv²/r.', '(500 × 8000²) / 8{,}000{,}000.'],
        correctAnswer: 4000,
        unit: 'N',
        explanation: 'Fc = (500 × 64,000,000) / 8,000,000 = 32,000,000,000 / 8,000,000 = 4000 N.',
      },
    ],
    commonMistake:
      "Thinking astronauts in orbit feel weightless because they have escaped Earth's gravity — gravity " +
      'at that altitude is only slightly weaker than at the surface. Weightlessness happens because ' +
      'the astronaut and their spacecraft are both accelerating toward Earth at exactly the same rate, ' +
      'in continuous free fall.',
    quickReview: [
      'For orbiting objects, gravity alone supplies the centripetal force.',
      'Fc = mv²/r still applies — only the source of the force changes.',
      'Orbiting astronauts are in continuous free fall, not beyond the reach of gravity.',
    ],
  },

  'vertical-circular-motion': {
    slug: 'vertical-circular-motion',
    title: 'Vertical Circular Motion',
    difficulty: 'hard',
    simpleExplanation:
      'In a vertical circle, the centripetal force still always points toward the centre — but gravity ' +
      'now points straight down at every point, so it helps supply the centripetal force at the top of ' +
      'the loop and works against it at the bottom, meaning the tension (or normal force) needed is ' +
      'different at every point around the circle.',
    whyItMatters:
      'This is why a roller coaster or a swung bucket of water needs a minimum speed to complete a ' +
      'vertical loop safely — go too slowly at the top, and there is not enough speed for gravity alone ' +
      'to supply the needed centripetal force, so the object (or the water) falls out of the circular path.',
    workedExample: {
      id: 'vertical-circular-worked-1',
      title: 'Find the tension at the bottom of a vertical circle',
      problemStatement: 'A 2 kg ball on a 1 m string swings in a vertical circle. At the lowest point of the loop, its speed is 5 m/s. Find the tension in the string at that point (g = 9.8 m/s²).',
      steps: [
        { step: 1, instruction: 'At the bottom, tension acts upward (toward the centre) and gravity acts downward (away from the centre).', math: 'T − mg = mv² / r', explanation: 'The net upward force equals the required centripetal force.' },
        { step: 2, instruction: 'Rearrange for tension.', math: 'T = mv² / r + mg', explanation: 'Add mg to both sides.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'T = (2 × 5²)/1 + (2 × 9.8) = 50 + 19.6 = 69.6', explanation: 'm = 2 kg, v = 5 m/s, r = 1 m, g = 9.8 m/s².' },
      ],
      finalAnswer: 'T = 69.6 N',
    },
    whyItWorks:
      "At the bottom of the loop, gravity pulls the ball away from the centre (downward), so tension " +
      "must supply both the centripetal force AND cancel out gravity's outward pull — making tension " +
      "at the bottom larger than mv²/r alone. At the top, gravity pulls toward the centre (also " +
      "downward, which is now inward), so tension only needs to supply the remainder: T = mv²/r − mg. " +
      'That is also why the minimum speed at the top occurs when tension drops to zero and gravity ' +
      'alone supplies the whole centripetal force.',
    realLifeExample: {
      title: 'A roller coaster loop',
      scenario: 'A roller coaster car goes around a vertical loop.',
      explanation: "Engineers must ensure the car is moving fast enough at the very top of the loop that gravity alone doesn't exceed the centripetal force needed — otherwise the car (and its passengers) would lose contact with the track and fall.",
    },
    practiceQuestions: [
      {
        id: 'vertical-circular-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A 1.5 kg ball on a 0.8 m string moves at 4 m/s at the bottom of a vertical circle. Find the tension there (g = 9.8 m/s²).',
        hints: ['T = mv²/r + mg.', '(1.5 × 4²)/0.8 + (1.5 × 9.8).'],
        correctAnswer: 44.7,
        tolerance: 0.2,
        unit: 'N',
        explanation: 'T = (1.5 × 16)/0.8 + 14.7 = 30 + 14.7 = 44.7 N.',
      },
    ],
    commonMistake:
      'Using the same equation (T = mv²/r) for every point on a vertical circle — the tension equation ' +
      'actually changes depending on position, because gravity contributes differently at the top, the ' +
      'bottom, and the sides of the loop.',
    quickReview: [
      'At the bottom of a vertical circle: T = mv²/r + mg.',
      'At the top of a vertical circle: T = mv²/r − mg.',
      'The minimum speed at the top occurs when tension reaches zero and gravity alone supplies Fc.',
    ],
  },

  'centrifugal-force-a-fictitious-force': {
    slug: 'centrifugal-force-a-fictitious-force',
    title: 'Centrifugal Force — A Fictitious Force',
    difficulty: 'medium',
    simpleExplanation:
      "'Centrifugal force' is the outward push you feel when riding in something that turns — but from " +
      "an outside, non-rotating point of view, there is no real outward force at all. It's a fictitious " +
      "force that only appears because you are inside a rotating (accelerating) reference frame.",
    whyItMatters:
      'Understanding this prevents a very common mix-up: the real force in circular motion always ' +
      'points inward (centripetal); the outward sensation people describe as centrifugal force is your ' +
      "body's inertia — its tendency to keep moving in a straight line — resisting being pulled off " +
      'that straight path.',
    whyItWorks:
      "Imagine standing in a car that suddenly turns left. From the ground's (inertial) viewpoint, you " +
      "simply keep moving in your original straight line while the car curves away underneath and " +
      'beside you — which means the car door ends up pushing on you (a real, inward force from your ' +
      "new viewpoint) rather than you being flung into it by any outward force. From inside the " +
      "turning car (a rotating, non-inertial frame), it feels exactly like an outward centrifugal " +
      "force pushed you toward the door — but no such force actually exists in the ground's frame.",
    realLifeExample: {
      title: 'A passenger on a sharp turn',
      scenario: 'A passenger in a car taking a sharp left turn feels thrown to the right, against the door.',
      explanation: "From the road's viewpoint, the passenger's body is simply continuing in a straight line while the car curves left beneath them — the door then pushes inward on the passenger (the real force), which the passenger's body interprets as being pushed outward against the door.",
    },
    practiceQuestions: [
      {
        id: 'centrifugal-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'From the point of view of someone standing still outside a spinning merry-go-round, which statement is correct?',
        options: [
          { id: 'a', text: 'A real outward centrifugal force pushes riders off the edge.' },
          { id: 'b', text: "There is no outward force; riders need an inward (centripetal) force to stay on, or their inertia carries them off in a straight line." },
          { id: 'c', text: 'Centripetal and centrifugal forces are the same force, just with different names.' },
          { id: 'd', text: 'Neither force exists once the merry-go-round reaches constant speed.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what an outside, non-rotating observer actually sees.', "A rider needs to be held in — what supplies that?"],
        explanation: 'From outside the rotation, only a real inward (centripetal) force keeps a rider moving in a circle; without enough grip or restraint, inertia simply carries the rider off in a straight line — there is no real outward push.',
      },
    ],
    commonMistake:
      'Treating centrifugal force as a real force that exists alongside centripetal force — in the ' +
      "true (non-rotating) frame of reference, only the centripetal force is real; centrifugal force is " +
      'only ever felt from inside the rotating frame, and it is not a genuine push from any object.',
    quickReview: [
      'From outside a rotating system, only the real, inward centripetal force exists.',
      "'Centrifugal force' is what the outward sensation feels like from inside the rotating frame.",
      "It is your own inertia — not an outward push — that you feel resisting the turn.",
    ],
  },

  'circular-motion-on-a-banked-curve': {
    slug: 'circular-motion-on-a-banked-curve',
    title: 'Circular Motion on a Banked Curve',
    difficulty: 'hard',
    simpleExplanation:
      "A banked (tilted) curve angles the road surface inward, so the normal force from the road gets " +
      "a horizontal component pointing toward the centre — letting the normal force help supply the " +
      'centripetal force instead of relying on friction alone.',
    whyItMatters:
      'Banking curves lets vehicles safely take faster turns, and — critically — an ideally banked ' +
      'curve works even with zero friction, which is exactly why racetracks and highway ramps are ' +
      'banked steeply on their tightest bends, and why banking matters most in icy conditions when ' +
      'friction nearly disappears.',
    workedExample: {
      id: 'banked-curve-worked-1',
      title: 'Find the ideal banking angle',
      problemStatement: 'Find the ideal (frictionless) banking angle for a curve of radius 100 m, designed for a speed of 25 m/s (g = 9.8 m/s²).',
      steps: [
        { step: 1, instruction: 'Use the ideal banking relationship.', math: 'tan θ = v² / (rg)', explanation: 'At the ideal angle, the horizontal component of the normal force alone supplies the centripetal force — no friction needed.' },
        { step: 2, instruction: 'Substitute the values.', math: 'tan θ = 25² / (100 × 9.8) = 625 / 980', explanation: 'v = 25 m/s, r = 100 m, g = 9.8 m/s².' },
        { step: 3, instruction: 'Solve for θ.', math: 'tan θ ≈ 0.638  →  θ ≈ 32.5°', explanation: 'Take the inverse tangent of 0.638.' },
      ],
      finalAnswer: 'θ ≈ 32.5°',
    },
    whyItWorks:
      "On a banked curve, the normal force no longer points straight up — it points perpendicular to " +
      "the tilted road surface, angled slightly toward the centre of the curve. That gives the normal " +
      "force a horizontal component, which can supply some or all of the centripetal force needed. At " +
      "the ideal angle for a given speed, that horizontal component supplies exactly mv²/r with no " +
      'friction required at all.',
    realLifeExample: {
      title: 'A velodrome cycling track',
      scenario: 'Velodrome cycling tracks are banked steeply, especially on the tight turns.',
      explanation: 'The steep banking lets the normal force from the track surface supply most of the centripetal force cyclists need to hold their high-speed line through the curve, without relying on tyre grip alone.',
    },
    practiceQuestions: [
      {
        id: 'banked-curve-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the ideal banking angle (in degrees) for a curve of radius 150 m designed for 20 m/s (g = 9.8 m/s²). Round to one decimal place.',
        hints: ['tan θ = v² / (rg).', '20² / (150 × 9.8) = 400/1470 ≈ 0.272.'],
        correctAnswer: 15.2,
        tolerance: 0.3,
        unit: '°',
        explanation: 'tan θ = 400/1470 ≈ 0.272, so θ = arctan(0.272) ≈ 15.2°.',
      },
    ],
    commonMistake:
      "Assuming a banked curve removes the need for a centripetal force altogether — banking only " +
      "changes which force (or combination of forces) supplies it; a centripetal force pointing toward " +
      "the centre is still required no matter how the road is angled.",
    quickReview: [
      'Banking tilts the normal force so part of it points toward the centre of the curve.',
      'Ideal (frictionless) banking angle: tan θ = v²/(rg).',
      'Banked curves remain safe at higher speeds and in low-friction conditions like ice.',
    ],
  },

  'circular-motion-in-everyday-life': {
    slug: 'circular-motion-in-everyday-life',
    title: 'Circular Motion in Everyday Life',
    difficulty: 'easy',
    simpleExplanation:
      'Circular motion — and the centripetal forces behind it — show up everywhere: spinning washing ' +
      'machine drums, centrifuges in laboratories, roller coaster loops, and planets orbiting the Sun ' +
      'are all the same underlying idea, just with a different force playing the centripetal role each time.',
    whyItMatters:
      'Recognizing the same pattern across very different situations — a wet towel, a blood sample, a ' +
      'planet — is what makes circular motion such a powerful, widely applicable idea in physics, ' +
      'rather than a topic that only applies to strings and balls.',
    whyItWorks:
      "In every one of these cases, something is moving along a curved path, which means something " +
      "must be supplying a net inward force at every instant — the identity of that force (normal " +
      "force from a drum wall, tension in a rotor arm, gravity from a star) is the only thing that " +
      "changes from example to example; the physics (Fc = mv²/r) stays exactly the same.",
    realLifeExample: {
      title: 'A washing machine spin cycle',
      scenario: "During the spin cycle, a washing machine's drum spins water and clothes rapidly.",
      explanation: "The drum wall supplies the centripetal force to the clothes (and water trapped in them), forcing them into a circular path; water that escapes through the drum's holes, once free of that inward force, simply travels in a straight line out through the holes and drains away — this is exactly how a centrifuge separates substances too.",
    },
    practiceQuestions: [
      {
        id: 'everyday-circular-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'In a laboratory centrifuge spinning a test tube, what supplies the centripetal force on the denser particles inside the liquid?',
        options: [
          { id: 'a', text: 'The normal force from the side wall of the tube, pushing the particles inward' },
          { id: 'b', text: 'An outward centrifugal force pushing particles to the bottom' },
          { id: 'c', text: 'Gravity alone, unrelated to the spinning' },
          { id: 'd', text: 'Friction between the particles and the air' },
        ],
        correctOptionId: 'a',
        hints: ['Think about what actually touches and pushes on the particles as the tube spins.', 'The particles need a real, inward force to keep them moving in a circle instead of separating outward.'],
        explanation: 'As the tube spins, its wall pushes inward on the denser particles (the real centripetal force); lighter particles need less inward force to stay on the same curved path, so the denser ones end up pressed furthest from the centre — which is exactly how a centrifuge separates substances by density.',
      },
    ],
    commonMistake:
      'Assuming each new example of circular motion needs an entirely new physics concept — every case ' +
      'is governed by the exact same relationship, Fc = mv²/r; only the source of the force changes.',
    quickReview: [
      'Circular motion appears in machines (centrifuges, washing machines), sports, vehicles, and orbits.',
      'The physics is always the same: something supplies a net inward force, Fc = mv²/r.',
      'Only the source of that force — tension, friction, gravity, or a normal force — changes case to case.',
    ],
  },
};
