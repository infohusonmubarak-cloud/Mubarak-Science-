import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 1 — Rotational Motion. Matches the
// textbook's section list: rotational motion under constant angular
// acceleration; relations between linear and angular quantities;
// centripetal acceleration.
export const chapter1CRotationConcepts: Record<string, Concept> = {
  'angular-displacement': {
    slug: 'angular-displacement',
    title: 'Angular Displacement',
    difficulty: 'easy',
    simpleExplanation:
      'Angular displacement is the angle through which an object rotates about an axis, measured in radians. ' +
      'It plays the same role in rotational motion that ordinary displacement plays in straight-line motion.',
    whyItMatters:
      'Every other rotational quantity — angular velocity, angular acceleration — is built from angular ' +
      'displacement, so it is the natural starting point for describing any spinning or turning motion.',
    diagram: {
      id: 'angular-displacement-diagram',
      title: 'A point sweeping through angle θ along a circular path',
      altText: 'A circle centered at O, with two radii drawn to a starting point and an ending point, the angle θ between them marked at the center, and the arc between the two points labelled s',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        points: [{ x: 0, y: 0, label: 'O', labelDx: -10, labelDy: 12 }],
        segments: [{ from: [0, 0], to: [2, 0] }, { from: [0, 0], to: [1, 1.732] }],
        arcs: [{ cx: 0, cy: 0, r: 2, startDeg: 0, endDeg: 60, label: 's' }],
        angleMarks: [{ at: [0, 0], from: [2, 0], to: [1, 1.732], label: 'θ', radius: 0.5 }],
      },
    },
    formulaSlug: 'angular-displacement-formula',
    workedExample: {
      id: 'angular-displacement-worked-1',
      title: 'Find an angular displacement from an arc length',
      problemStatement: 'A point on the rim of a merry-go-round of radius 4 m travels an arc length of 6 m. Find its angular displacement.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 's = 6 m,  r = 4 m', explanation: 'Arc length and radius are both given directly.' },
        { step: 2, instruction: 'Apply the angular displacement formula.', math: 'θ = s/r = 6/4', explanation: 'Divide arc length by radius.' },
        { step: 3, instruction: 'Compute the result.', math: 'θ = 1.5 rad', explanation: 'The formula gives the angle directly in radians.' },
      ],
      finalAnswer: 'θ = 1.5 rad.',
    },
    whyItWorks:
      'A full circle has circumference 2πr and sweeps through a full angle of 2π radians — so the ratio of arc ' +
      'length to radius, s/r, always gives exactly the fraction of a full circle traveled, expressed directly in radians.',
    realLifeExample: {
      title: 'How far a Ferris wheel car has turned',
      scenario: 'A rider tracks how far their Ferris wheel car has traveled around the wheel by comparing the ' +
        'arc length it has moved through to the wheel\'s radius.',
      explanation: 'The angular displacement θ=s/r tells the rider exactly what fraction of a full rotation ' +
        'they have completed, regardless of how big the wheel is.',
    },
    practiceQuestions: [
      {
        id: 'angular-displacement-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A point on a wheel of radius 3 m travels an arc length of 9 m. Find its angular displacement in radians.',
        hints: ['θ = s/r.'],
        correctAnswer: 3,
        explanation: 'θ = 9/3 = 3 rad.',
      },
    ],
    commonMistake:
      'Assuming θ = s/r gives an answer in degrees — this formula always gives radians directly; converting to ' +
      'degrees requires multiplying by 180/π afterward.',
    quickReview: [
      'θ = s/r, always in radians.',
      'A full circle is 2π radians (360°).',
      'The rotational counterpart of ordinary (straight-line) displacement.',
    ],
  },

  'angular-velocity': {
    slug: 'angular-velocity',
    title: 'Angular Velocity',
    difficulty: 'medium',
    simpleExplanation:
      'Angular velocity (ω) measures how fast an object is rotating — the rate at which its angular ' +
      'displacement changes over time, in radians per second.',
    whyItMatters:
      'Angular velocity is the single number that describes "how fast something spins," independent of how ' +
      'big it is — a small wheel and a huge wheel turning at the same ω complete a revolution in the same time.',
    formulaSlug: 'angular-velocity-formula',
    workedExample: {
      id: 'angular-velocity-worked-1',
      title: 'Find an average angular velocity',
      problemStatement: 'A fan blade turns through 10 rad in 4 s. Find its average angular velocity.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'Δθ = 10 rad,  Δt = 4 s', explanation: 'Total angle turned and the time it took.' },
        { step: 2, instruction: 'Apply the angular velocity formula.', math: 'ω = Δθ/Δt = 10/4', explanation: 'Divide the angle by the time.' },
        { step: 3, instruction: 'Compute the result.', math: 'ω = 2.5 rad/s', explanation: 'This is the average rate of rotation over that interval.' },
      ],
      finalAnswer: 'ω = 2.5 rad/s.',
    },
    whyItWorks:
      'This mirrors ordinary velocity exactly — just as velocity is displacement divided by time, angular ' +
      'velocity is angular displacement divided by time, capturing how quickly the angle is changing.',
    realLifeExample: {
      title: 'How fast the Earth rotates',
      scenario: 'The Earth completes one full rotation (2π radians) approximately every 24 hours.',
      explanation: 'Dividing that angular displacement by the time gives the Earth\'s angular velocity — about ' +
        '7.27×10⁻⁵ rad/s — the same for every point on Earth\'s surface, from the equator to near the poles.',
    },
    practiceQuestions: [
      {
        id: 'angular-velocity-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A wheel turns through 12 rad in 3 s. Find its average angular velocity.',
        hints: ['ω = Δθ/Δt.'],
        correctAnswer: 4,
        explanation: 'ω = 12/3 = 4 rad/s.',
      },
    ],
    commonMistake:
      'Treating angular velocity (rad/s) as the same thing as linear velocity (m/s) — they measure different ' +
      'kinds of speed and are only related through v=rω, not equal to each other.',
    quickReview: [
      'ω = Δθ/Δt, in radians per second.',
      'Describes "how fast something spins," independent of size.',
      'The rotational counterpart of ordinary (linear) velocity.',
    ],
  },

  'angular-acceleration': {
    slug: 'angular-acceleration',
    title: 'Angular Acceleration',
    difficulty: 'medium',
    simpleExplanation:
      'Angular acceleration (α) measures how quickly angular velocity itself is changing — how fast a rotation ' +
      'is speeding up or slowing down, in radians per second squared.',
    whyItMatters:
      'Real rotations rarely spin at a perfectly constant rate — motors spin up, brakes slow wheels down — and ' +
      'angular acceleration is what quantifies exactly how fast that speeding-up or slowing-down happens.',
    formulaSlug: 'angular-acceleration-formula',
    workedExample: {
      id: 'angular-acceleration-worked-1',
      title: 'Find an angular acceleration',
      problemStatement: 'A wheel\'s angular velocity increases from 2 rad/s to 10 rad/s over 4 s. Find its angular acceleration.',
      steps: [
        { step: 1, instruction: 'Find the change in angular velocity.', math: 'Δω = 10 − 2 = 8 rad/s', explanation: 'Final angular velocity minus initial angular velocity.' },
        { step: 2, instruction: 'Apply the angular acceleration formula.', math: 'α = Δω/Δt = 8/4', explanation: 'Divide the change in ω by the time it took.' },
        { step: 3, instruction: 'Compute the result.', math: 'α = 2 rad/s²', explanation: 'The wheel\'s rotation speeds up by 2 rad/s every second.' },
      ],
      finalAnswer: 'α = 2 rad/s².',
    },
    whyItWorks:
      'This is exactly the rotational analogue of ordinary acceleration — just as acceleration is the rate of ' +
      'change of velocity, angular acceleration is the rate of change of angular velocity.',
    realLifeExample: {
      title: 'A washing machine drum spinning up',
      scenario: 'At the start of a spin cycle, a washing machine drum accelerates from rest up to its full ' +
        'spinning speed over a few seconds.',
      explanation: 'The rate at which the drum\'s angular velocity increases during that startup is exactly its ' +
        'angular acceleration.',
    },
    practiceQuestions: [
      {
        id: 'angular-acceleration-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A wheel\'s angular velocity increases from 3 rad/s to 15 rad/s over 4 s. Find its angular acceleration.',
        hints: ['α = Δω/Δt.'],
        correctAnswer: 3,
        explanation: 'Δω = 15−3 = 12 rad/s. α = 12/4 = 3 rad/s².',
      },
    ],
    commonMistake:
      'Dropping the sign — a rotation that is slowing down has a NEGATIVE angular acceleration (opposite in ' +
      'sign to its angular velocity), not zero.',
    quickReview: [
      'α = Δω/Δt, in radians per second squared.',
      'Describes how quickly a rotation speeds up or slows down.',
      'Negative α means the rotation is decelerating.',
    ],
  },

  'rotational-kinematics-equations': {
    slug: 'rotational-kinematics-equations',
    title: 'Rotational Kinematics Equations',
    difficulty: 'hard',
    simpleExplanation:
      'When angular acceleration is constant, three equations connect angular displacement, initial and final ' +
      'angular velocity, angular acceleration, and time — directly mirroring the straight-line "suvat" ' +
      'equations, with θ, ω, and α replacing displacement, velocity, and acceleration.',
    whyItMatters:
      'These equations let any two known rotational quantities be combined to find the rest, without needing ' +
      'to track the motion moment by moment — exactly how the linear kinematics equations work for straight-line motion.',
    diagram: {
      id: 'rotational-kinematics-diagram',
      title: 'Angular velocity increasing at a constant rate: ω(t) = 5 + 3t',
      altText: 'A straight rising line showing angular velocity increasing steadily with time, reaching 17 rad/s at t=4 seconds',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (t: number) => 5 + 3 * t,
        min: 0,
        max: 5,
        markPoints: [{ x: 4, y: 17, label: 'ω=17 rad/s at t=4s' }],
        xLabel: 't (s)',
        yLabel: 'ω (rad/s)',
      },
    },
    formulaSlug: 'rotational-kinematics-formula',
    workedExample: {
      id: 'rotational-kinematics-worked-1',
      title: 'Use the rotational kinematics equations',
      problemStatement: 'A flywheel starts at ω₀=5 rad/s and accelerates at α=3 rad/s² for t=4 s. Find its final angular velocity and angular displacement.',
      steps: [
        { step: 1, instruction: 'Find the final angular velocity.', math: 'ω = ω₀+αt = 5+3(4) = 5+12', explanation: 'Apply the first rotational kinematics equation.' },
        { step: 2, instruction: 'Compute the result.', math: 'ω = 17 rad/s', explanation: 'The flywheel is spinning at 17 rad/s after 4 seconds.' },
        { step: 3, instruction: 'Find the angular displacement.', math: 'θ = ω₀t + ½αt² = 5(4) + 0.5(3)(16)', explanation: 'Apply the second rotational kinematics equation.' },
        { step: 4, instruction: 'Compute the result.', math: 'θ = 20+24 = 44 rad', explanation: 'The flywheel turns through 44 radians during those 4 seconds.' },
      ],
      finalAnswer: 'ω = 17 rad/s, θ = 44 rad.',
    },
    whyItWorks:
      'These equations follow directly from the definitions of ω and α by the same reasoning used to derive the ' +
      'linear suvat equations — ω=ω₀+αt comes from integrating a constant α over time, and θ=ω₀t+½αt² comes ' +
      'from integrating that resulting ω(t) over time.',
    realLifeExample: {
      title: 'A car engine\'s flywheel reaching operating speed',
      scenario: 'When a car engine starts, its flywheel accelerates from rest up to its running speed at a ' +
        'roughly constant angular acceleration.',
      explanation: 'Engineers use these equations to predict exactly how many rotations the flywheel completes ' +
        'and how fast it is spinning at any moment during that startup.',
    },
    practiceQuestions: [
      {
        id: 'rotational-kinematics-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A wheel starts at ω₀=2 rad/s and accelerates at α=4 rad/s² for t=3 s. Find its angular displacement θ.',
        hints: ['θ = ω₀t + ½αt².'],
        correctAnswer: 24,
        explanation: 'θ = 2(3) + 0.5(4)(9) = 6+18 = 24 rad.',
      },
    ],
    commonMistake:
      'Using these equations when angular acceleration is NOT constant — like the linear suvat equations, they ' +
      'only apply during a phase of constant α.',
    quickReview: [
      'ω = ω₀+αt;  θ = ω₀t+½αt²;  ω² = ω₀²+2αθ.',
      'Only valid for constant angular acceleration.',
      'Directly mirror the linear "suvat" equations.',
    ],
  },

  'linear-and-angular-quantity-relationships': {
    slug: 'linear-and-angular-quantity-relationships',
    title: 'Linear and Angular Quantity Relationships',
    difficulty: 'medium',
    simpleExplanation:
      'Every point on a rotating rigid object shares the same angular velocity ω, but points farther from the ' +
      'axis move through more distance in the same time — their linear (tangential) speed is v=rω, growing with radius.',
    whyItMatters:
      'This relationship is the bridge between rotational motion (described by θ, ω, α) and the everyday linear ' +
      'motion (described by s, v, a) of any specific point on a spinning object.',
    formulaSlug: 'linear-angular-relations-formula',
    workedExample: {
      id: 'linear-angular-worked-1',
      title: 'Find a linear speed from angular velocity',
      problemStatement: 'A point on a wheel of radius 0.5 m rotates with the wheel at ω=8 rad/s. Find the point\'s linear speed.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'r = 0.5 m,  ω = 8 rad/s', explanation: 'Radius and angular velocity are given.' },
        { step: 2, instruction: 'Apply the relationship v=rω.', math: 'v = 0.5 × 8', explanation: 'Multiply radius by angular velocity.' },
        { step: 3, instruction: 'Compute the result.', math: 'v = 4 m/s', explanation: 'This is the point\'s speed through space.' },
      ],
      finalAnswer: 'v = 4 m/s.',
    },
    whyItWorks:
      'In one full rotation, a point at radius r travels a distance equal to the circle\'s circumference, 2πr, ' +
      'while the whole object turns through 2π radians — so distance traveled is always r times the angle ' +
      'swept, and dividing both sides by time gives v=rω.',
    realLifeExample: {
      title: 'Why the outer edge of a spinning record moves faster',
      scenario: 'A vinyl record spins at a constant angular velocity, but a speck of dust near the outer edge ' +
        'and a speck near the center both complete one rotation in exactly the same time.',
      explanation: 'Since the outer speck has a larger radius r, its linear speed v=rω is greater — the outer ' +
        'edge physically travels farther (and faster) than a point near the center, even though both share the same ω.',
    },
    practiceQuestions: [
      {
        id: 'linear-angular-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A point on a wheel of radius 0.2 m rotates at ω=15 rad/s. Find its linear speed.',
        hints: ['v = rω.'],
        correctAnswer: 3,
        explanation: 'v = 0.2 × 15 = 3 m/s.',
      },
    ],
    commonMistake:
      'Assuming every point on a spinning object moves at the same speed — only ω is shared by every point; ' +
      'linear speed v=rω is different for every different radius.',
    quickReview: [
      'v = rω — linear speed depends on both angular velocity and distance from the axis.',
      'Every point on a rigid rotating object shares the same ω.',
      'Points farther from the axis move faster in a straight-line sense.',
    ],
  },

  'tangential-velocity-and-tangential-acceleration': {
    slug: 'tangential-velocity-and-tangential-acceleration',
    title: 'Tangential Velocity and Tangential Acceleration',
    difficulty: 'medium',
    simpleExplanation:
      'Tangential velocity (v=rω) is a point\'s linear speed along its circular path; tangential acceleration ' +
      '(aₜ=rα) is how fast that speed itself is changing — both point along the direction of motion (tangent to the circle), not toward the center.',
    whyItMatters:
      'A rotating point can have acceleration for two different reasons — speeding up (tangential) or simply ' +
      'changing direction (centripetal) — and distinguishing them is essential for correctly analyzing any real rotating system.',
    formulaSlug: 'tangential-acceleration-formula',
    workedExample: {
      id: 'tangential-acceleration-worked-1',
      title: 'Find a tangential acceleration',
      problemStatement: 'A point on a wheel of radius 0.3 m experiences an angular acceleration of 6 rad/s². Find its tangential acceleration.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'r = 0.3 m,  α = 6 rad/s²', explanation: 'Radius and angular acceleration are given.' },
        { step: 2, instruction: 'Apply the relationship aₜ=rα.', math: 'aₜ = 0.3 × 6', explanation: 'Multiply radius by angular acceleration.' },
        { step: 3, instruction: 'Compute the result.', math: 'aₜ = 1.8 m/s²', explanation: 'This is how fast the point\'s linear speed is increasing.' },
      ],
      finalAnswer: 'aₜ = 1.8 m/s².',
    },
    whyItWorks:
      'Differentiating v=rω with respect to time (with r fixed, for a rigid rotating object) gives ' +
      'dv/dt = r(dω/dt) = rα — so the tangential acceleration is exactly r times the angular acceleration, by ' +
      'the same reasoning that links v and ω.',
    realLifeExample: {
      title: 'A car tire speeding up from a stop',
      scenario: 'As a car accelerates away from a stop, its wheels spin up from rest, so points on the rim of ' +
        'each tire gain speed along their direction of travel.',
      explanation: 'That gain in speed along the tire\'s direction of motion is exactly its tangential ' +
        'acceleration, caused directly by the wheel\'s angular acceleration.',
    },
    practiceQuestions: [
      {
        id: 'tangential-acceleration-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A point on a wheel of radius 0.4 m experiences an angular acceleration of 5 rad/s². Find its tangential acceleration.',
        hints: ['aₜ = rα.'],
        correctAnswer: 2,
        explanation: 'aₜ = 0.4 × 5 = 2 m/s².',
      },
    ],
    commonMistake:
      'Confusing tangential acceleration (which changes speed) with centripetal acceleration (which changes ' +
      'direction) — a rotating point speeding up generally experiences both at the same time, pointing in different directions.',
    quickReview: [
      'aₜ = rα — tangential acceleration changes a point\'s speed along its path.',
      'Points along the direction of motion (tangent to the circle).',
      'Different from centripetal acceleration, which changes direction, not speed.',
    ],
  },

  'centripetal-acceleration': {
    slug: 'centripetal-acceleration',
    title: 'Centripetal Acceleration',
    difficulty: 'medium',
    simpleExplanation:
      'An object moving on a circular path is always accelerating toward the center of that circle, even at ' +
      'constant speed — this is centripetal acceleration, and it exists because a constantly-changing direction is itself a form of acceleration.',
    whyItMatters:
      'Centripetal acceleration is the reason curved motion needs a net inward force at all — without it, ' +
      'nothing could move in a circle, from a satellite\'s orbit to a car rounding a bend.',
    diagram: {
      id: 'centripetal-acceleration-diagram',
      title: 'An object on a circular path, with its centripetal acceleration pointing toward the center',
      altText: 'An object on a circular path with an arrow pointing inward toward the center labelled ac, and a tangential velocity arrow perpendicular to it',
      component: 'CircularMotionDiagram',
      interactive: false,
      props: { forceLabel: 'ac', showVelocityVector: true },
    },
    formulaSlug: 'centripetal-acceleration-formula',
    workedExample: {
      id: 'centripetal-acceleration-worked-1',
      title: 'Find a centripetal acceleration',
      problemStatement: 'A car rounds a curve of radius 50 m at a constant speed of 20 m/s. Find its centripetal acceleration.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'v = 20 m/s,  r = 50 m', explanation: 'Speed and radius of the curve are given.' },
        { step: 2, instruction: 'Apply the centripetal acceleration formula.', math: 'a_c = v²/r = 20²/50 = 400/50', explanation: 'Square the speed, then divide by the radius.' },
        { step: 3, instruction: 'Compute the result.', math: 'a_c = 8 m/s²', explanation: 'This acceleration points toward the center of the curve throughout.' },
      ],
      finalAnswer: 'a_c = 8 m/s².',
    },
    whyItWorks:
      'Even at constant speed, an object moving in a circle constantly changes its direction of velocity — and ' +
      'acceleration is defined as any change in velocity, whether in magnitude or direction — so this ' +
      'continuous turning is itself an acceleration, and geometry shows it must point directly toward the center.',
    realLifeExample: {
      title: 'Why passengers feel pushed outward in a turning car',
      scenario: 'A car turning sharply around a corner requires a real inward (centripetal) acceleration to ' +
        'follow the curve, supplied by friction between the tires and the road.',
      explanation: 'Passengers feel "pushed" outward because their own bodies resist that inward acceleration ' +
        '(their inertia wants to keep them moving in a straight line) — the true physical acceleration is inward, toward the curve\'s center.',
    },
    practiceQuestions: [
      {
        id: 'centripetal-acceleration-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object moves on a circular path of radius 2 m at angular velocity ω=3 rad/s. Find its centripetal acceleration using a_c=ω²r.',
        hints: ['a_c = ω²r.'],
        correctAnswer: 18,
        explanation: 'a_c = 3² × 2 = 9 × 2 = 18 m/s².',
      },
    ],
    commonMistake:
      'Assuming "constant speed" means "no acceleration" — an object moving in a circle at constant SPEED is ' +
      'still accelerating, because its direction (part of velocity) is continuously changing.',
    quickReview: [
      'a_c = v²/r = ω²r, always directed toward the center.',
      'Exists even at constant speed, because direction is changing.',
      'Requires a net inward force to sustain (see Chapter 2).',
    ],
  },

  'period-frequency-and-revolution': {
    slug: 'period-frequency-and-revolution',
    title: 'Period, Frequency and Revolution',
    difficulty: 'easy',
    simpleExplanation:
      'The period (T) is the time for one complete revolution; the frequency (f) is how many revolutions ' +
      'happen per second. They are reciprocals of each other, and both connect directly to angular velocity: ω=2πf=2π/T.',
    whyItMatters:
      'Period and frequency are the everyday, easy-to-measure way to describe a rotation\'s speed — "how many ' +
      'times per second" or "how many seconds per turn" — that connects directly to the more abstract angular velocity.',
    formulaSlug: 'period-frequency-formula',
    workedExample: {
      id: 'period-frequency-worked-1',
      title: 'Find period and angular velocity from frequency',
      problemStatement: 'A fan rotates at a frequency of 5 revolutions per second. Find its period and angular velocity.',
      steps: [
        { step: 1, instruction: 'Write down the known value.', math: 'f = 5 Hz', explanation: '5 revolutions per second.' },
        { step: 2, instruction: 'Find the period.', math: 'T = 1/f = 1/5', explanation: 'Period is the reciprocal of frequency.' },
        { step: 3, instruction: 'Compute the period.', math: 'T = 0.2 s', explanation: 'Each revolution takes 0.2 seconds.' },
        { step: 4, instruction: 'Find the angular velocity.', math: 'ω = 2πf = 2π(5)', explanation: 'Apply the angular velocity formula.' },
        { step: 5, instruction: 'Compute the result.', math: 'ω ≈ 31.42 rad/s', explanation: '2π×5 ≈ 31.42.' },
      ],
      finalAnswer: 'T = 0.2 s, ω ≈ 31.42 rad/s.',
    },
    whyItWorks:
      'One full revolution sweeps through exactly 2π radians. If f revolutions happen every second, then 2πf ' +
      'radians are swept every second — which is exactly the definition of angular velocity, ω=2πf.',
    realLifeExample: {
      title: 'A ceiling fan\'s rotation speed',
      scenario: 'A ceiling fan\'s speed setting is described by how many revolutions it completes per minute or second.',
      explanation: 'That frequency directly determines both the time for one blade rotation (its period) and ' +
        'its angular velocity, via T=1/f and ω=2πf.',
    },
    practiceQuestions: [
      {
        id: 'period-frequency-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A wheel has a period of 0.1 s. Find its frequency.',
        hints: ['f = 1/T.'],
        correctAnswer: 10,
        explanation: 'f = 1/0.1 = 10 Hz.',
      },
    ],
    commonMistake:
      'Mixing up period and frequency — a LARGER frequency (more revolutions per second) means a SMALLER ' +
      'period (less time per revolution), since T=1/f.',
    quickReview: [
      'T = 1/f — period and frequency are reciprocals.',
      'ω = 2πf = 2π/T connects both to angular velocity.',
      'Frequency is measured in hertz (Hz); period is measured in seconds (s).',
    ],
  },
};
