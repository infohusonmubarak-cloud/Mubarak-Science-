import type { Concept } from '@/types/content';

export const chapter2PhysicsConcepts: Record<string, Concept> = {
  'vectors-and-scalars': {
    slug: 'vectors-and-scalars',
    title: 'Vectors and Scalars',
    difficulty: 'easy',
    simpleExplanation:
      'A scalar quantity has only a size (magnitude) — like mass, time, or temperature. A vector ' +
      'quantity has both a size and a direction — like displacement, velocity, or force. Vectors ' +
      'are usually drawn as arrows: the length of the arrow shows the magnitude, and the way it ' +
      'points shows the direction.',
    whyItMatters:
      'Almost every quantity in this chapter — displacement, velocity, acceleration — is a vector, ' +
      "so knowing how to handle direction correctly, right from the start, is essential; forgetting " +
      "it is one of the most common sources of wrong answers in mechanics.",
    workedExample: {
      id: 'vectors-scalars-worked-1',
      title: 'Add two vectors acting in a straight line',
      problemStatement: 'A boat\'s engine pushes it forward at 6 m/s (east) while a current pushes it at 2 m/s (west). Find the resultant velocity.',
      steps: [
        { step: 1, instruction: 'Choose a positive direction (east) and assign signs.', math: 'engine = +6 m/s, current = −2 m/s', explanation: 'Since the two vectors act along the same line but in opposite directions, one must be negative.' },
        { step: 2, instruction: 'Add the vectors algebraically.', math: '6 + (−2) = 4', explanation: 'Vectors along the same line add just like signed numbers.' },
      ],
      finalAnswer: 'Resultant velocity = 4 m/s east',
    },
    whyItWorks:
      'Because a vector already encodes direction as a sign (or an angle), adding two vectors that ' +
      'act along the same line is exactly the same as adding signed numbers — opposing directions ' +
      'partially cancel, matching directions reinforce.',
    realLifeExample: {
      title: 'A plane flying into a headwind',
      scenario: 'An aircraft cruises at 250 m/s but flies directly into a 30 m/s headwind.',
      explanation: "The plane's velocity relative to the ground is the vector sum of its own velocity and the wind's velocity — here, 250 − 30 = 220 m/s, since the wind vector points opposite to the plane's motion.",
    },
    practiceQuestions: [
      {
        id: 'vectors-scalars-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which of these is a vector quantity?',
        hints: ['A vector needs both a size and a direction.'],
        options: [
          { id: 'a', text: 'Mass' },
          { id: 'b', text: 'Temperature' },
          { id: 'c', text: 'Displacement' },
          { id: 'd', text: 'Time' },
        ],
        correctOptionId: 'c',
        explanation: 'Displacement has both a size and a direction, so it is a vector; mass, temperature and time are all scalars.',
      },
      {
        id: 'vectors-scalars-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Two forces act on an object along the same line: 15 N to the right and 9 N to the left. Find the resultant force. (Give the size only, in newtons.)',
        hints: ['Assign right as positive, left as negative, then add.', '15 + (−9).'],
        correctAnswer: 6,
        unit: 'N',
        explanation: 'Resultant = 15 + (−9) = 6 N (to the right).',
      },
    ],
    commonMistake:
      "Adding vector magnitudes directly without accounting for direction — 6 m/s and 2 m/s acting " +
      "in opposite directions do NOT add to 8 m/s; direction has to be built into the addition.",
    quickReview: [
      'Scalars have magnitude only; vectors have magnitude AND direction.',
      'Vectors are drawn as arrows — length shows size, arrowhead shows direction.',
      'Vectors along the same line add like signed numbers; opposite directions partially cancel.',
    ],
  },

  'distance-and-displacement': {
    slug: 'distance-and-displacement',
    title: 'Distance and Displacement',
    difficulty: 'easy',
    simpleExplanation:
      "Distance is the total length of the path travelled, no matter the direction — it's a " +
      'scalar quantity. Displacement is the straight-line distance from the starting point to the ' +
      "finishing point, in a specific direction — it's a vector quantity.",
    whyItMatters:
      'The difference matters: someone who walks 5 laps of an oval track has travelled a large ' +
      "distance but ends up with a displacement of zero, since they're back where they started.",
    workedExample: {
      id: 'distance-displacement-worked-1',
      title: 'Find distance and displacement',
      problemStatement: 'A person walks 300 m east, then 100 m west. Find (a) the total distance travelled and (b) the displacement.',
      steps: [
        { step: 1, instruction: 'Add both legs of the journey to find total distance.', math: '300 + 100 = 400 m', explanation: "Distance doesn't care about direction — just add up every metre walked." },
        { step: 2, instruction: 'Find the net change in position for displacement.', math: '300 − 100 = 200 m east', explanation: 'Displacement only cares about the straight-line difference between start and finish, in a direction.' },
      ],
      finalAnswer: 'Distance = 400 m; Displacement = 200 m east',
    },
    whyItWorks:
      'Distance simply accumulates every bit of path length regardless of direction, while ' +
      'displacement only measures the net straight-line change — which is why opposite-direction ' +
      'movements partially cancel out for displacement but always add up for distance.',
    realLifeExample: {
      title: 'A running track vs. a straight sprint',
      scenario: 'A runner completes one full lap of a 400 m track.',
      explanation: 'They have run a distance of 400 m, but their displacement is 0 m, since they finish exactly where they started.',
    },
    practiceQuestions: [
      {
        id: 'distance-displacement-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A car travels 50 m north then 20 m south. What is the total distance travelled?',
        hints: ['Distance just adds up every metre travelled, regardless of direction.', '50 + 20.'],
        correctAnswer: 70,
        unit: 'm',
        explanation: 'Distance = 50 + 20 = 70 m.',
      },
      {
        id: 'distance-displacement-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Using the same journey (50 m north, then 20 m south), what is the displacement? Give the size only, in metres.',
        hints: ['Displacement is the net change: subtract the return distance from the outward distance.', '50 − 20.'],
        correctAnswer: 30,
        unit: 'm',
        explanation: 'Displacement = 50 − 20 = 30 m (north).',
      },
    ],
    commonMistake:
      "Using the words 'distance' and 'displacement' interchangeably — they can give very " +
      'different answers whenever an object changes direction.',
    quickReview: [
      'Distance = total path length travelled (scalar).',
      'Displacement = straight-line distance from start to finish, with direction (vector).',
      'Displacement can be smaller than distance, or even zero, if the path doubles back.',
    ],
  },

  speed: {
    slug: 'speed',
    title: 'Speed',
    difficulty: 'easy',
    simpleExplanation:
      'Speed measures how fast an object is moving — the distance it covers in a given time, ' +
      'regardless of direction.',
    whyItMatters:
      "Speed is the simplest, most everyday measure of motion — from a car's speedometer to how fast you can run.",
    formulaSlug: 'speed-formula',
    workedExample: {
      id: 'speed-worked-1',
      title: "Calculate a cyclist's speed",
      problemStatement: 'A cyclist covers 150 m in 30 s. What is their speed?',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'speed = distance / time', explanation: 'Speed is distance covered per unit time.' },
        { step: 2, instruction: 'Substitute the values.', math: 'speed = 150 / 30', explanation: 'Distance = 150 m, time = 30 s.' },
        { step: 3, instruction: 'Calculate.', math: 'speed = 5', explanation: '150 divided by 30.' },
      ],
      finalAnswer: 'Speed = 5 m/s',
    },
    whyItWorks:
      'Dividing the total distance covered by the time it took gives exactly how much distance is ' +
      'covered, on average, for each second — the definition of speed.',
    realLifeExample: {
      title: 'Reading a speedometer',
      scenario: "A car's speedometer shows how fast the car is travelling at any instant.",
      explanation: 'It is continuously calculating (an instantaneous version of) distance covered per unit time — exactly this formula.',
    },
    practiceQuestions: [
      {
        id: 'speed-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A runner covers 100 m in 20 s. What is their speed?',
        hints: ['speed = distance/time.', '100/20.'],
        correctAnswer: 5,
        unit: 'm/s',
        explanation: 'speed = 100/20 = 5 m/s.',
      },
    ],
    commonMistake:
      'Forgetting to keep units consistent — mixing kilometres and seconds, for example, without ' +
      'converting, gives a meaningless number.',
    quickReview: [
      'speed = distance / time',
      'Speed is a scalar — it has no direction.',
      'Common units: m/s or km/h.',
    ],
  },

  velocity: {
    slug: 'velocity',
    title: 'Velocity',
    difficulty: 'easy',
    simpleExplanation:
      "Velocity is speed in a specific direction — the displacement covered per unit time. Two " +
      "objects can have the same speed but different velocities if they're moving in different directions.",
    whyItMatters:
      'Velocity captures both how fast and which way something is moving, which matters whenever ' +
      'the direction of motion affects the outcome — like two cars approaching each other versus ' +
      'travelling the same way.',
    formulaSlug: 'velocity-formula',
    workedExample: {
      id: 'velocity-worked-1',
      title: "Calculate a drone's velocity",
      problemStatement: 'A drone flies 40 m due north in 8 s. What is its velocity?',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'velocity = displacement / time', explanation: 'Velocity is displacement (with direction) per unit time.' },
        { step: 2, instruction: 'Substitute the values.', math: 'velocity = 40 / 8', explanation: 'Displacement = 40 m north, time = 8 s.' },
        { step: 3, instruction: 'Calculate.', math: 'velocity = 5', explanation: '40 divided by 8.' },
      ],
      finalAnswer: 'Velocity = 5 m/s due north',
    },
    whyItWorks:
      'Because velocity is defined using displacement (which already includes direction), the ' +
      'result of this calculation always carries that same direction with it — unlike speed, ' +
      'which only ever gives a size.',
    realLifeExample: {
      title: 'Air traffic control',
      scenario: 'Air traffic controllers track both the speed and direction — the velocity — of every aircraft.',
      explanation: 'Knowing velocity, not just speed, is what lets them predict exactly where two aircraft will be and avoid collisions.',
    },
    practiceQuestions: [
      {
        id: 'velocity-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "A swimmer's displacement is 25 m north in 10 s. What is their velocity? (Give the size only.)",
        hints: ['velocity = displacement/time.', '25/10.'],
        correctAnswer: 2.5,
        unit: 'm/s',
        explanation: 'velocity = 25/10 = 2.5 m/s (north).',
      },
    ],
    commonMistake:
      'Using distance instead of displacement when calculating velocity — if the path is not a ' +
      'straight line, this gives the average speed, not the velocity.',
    quickReview: [
      'velocity = displacement / time',
      'Velocity is a vector — it has both size and direction.',
      'Two objects can have equal speed but different velocity.',
    ],
  },

  'distance-time-graphs': {
    slug: 'distance-time-graphs',
    title: 'Distance-Time Graphs',
    difficulty: 'medium',
    simpleExplanation:
      "A distance-time graph plots how far an object has travelled against time. The steepness " +
      "(slope) of the line at any point tells you the object's speed at that point — a steeper " +
      'line means faster motion, a flat (horizontal) line means the object is stationary.',
    whyItMatters:
      "Reading a distance-time graph lets you work out an object's speed and describe its whole " +
      'journey — speeding up, slowing down, stopping — just by looking at its shape.',
    diagram: {
      id: 'distance-time-graph-diagram',
      title: 'Distance-time graph',
      altText: 'A distance-time graph with two draggable points and a live speed readout equal to the slope of the line between them',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        min: 0,
        max: 10,
        pointA: { x: 0, y: 0, label: 'A' },
        pointB: { x: 4, y: 8, label: 'B' },
        showSlope: true,
        showLine: true,
        xLabel: 'time (s)',
        yLabel: 'distance (m)',
        slopeSymbol: 'speed',
      },
    },
    workedExample: {
      id: 'distance-time-worked-1',
      title: 'Find speed from a distance-time graph',
      problemStatement: 'A distance-time graph shows an object moving from (0 s, 0 m) to (5 s, 20 m) in a straight line. Find its speed.',
      steps: [
        { step: 1, instruction: 'Recognize that speed = slope of a distance-time graph.', explanation: 'The steepness of the line equals distance covered per unit time — speed.' },
        { step: 2, instruction: 'Calculate the slope.', math: 'speed = (20 − 0) / (5 − 0) = 4', explanation: 'Change in distance divided by change in time.' },
      ],
      finalAnswer: 'Speed = 4 m/s',
    },
    whyItWorks:
      "Slope, by definition, is 'change in y divided by change in x' — on a distance-time graph " +
      "that is exactly 'change in distance divided by change in time,' which is the definition of speed.",
    realLifeExample: {
      title: "A delivery van's tracking data",
      scenario: 'A delivery company plots a distance-time graph from GPS data to check whether a van was speeding.',
      explanation: 'A steeper-than-allowed slope over any section of the graph reveals exactly when and where the van exceeded the speed limit.',
    },
    practiceQuestions: [
      {
        id: 'distance-time-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A distance-time graph shows a straight line from (0 s, 0 m) to (10 s, 30 m). What is the speed?',
        hints: ['Speed = slope = change in distance / change in time.', '30/10.'],
        correctAnswer: 3,
        unit: 'm/s',
        explanation: 'speed = 30/10 = 3 m/s.',
      },
    ],
    commonMistake:
      'Assuming a curved distance-time graph means the object stopped — a curve actually means ' +
      'the speed is changing, not that motion has stopped; only a completely flat, horizontal ' +
      'line means stationary.',
    quickReview: [
      'The slope of a distance-time graph equals speed.',
      'A steeper line means a faster speed.',
      'A flat (horizontal) line means the object is stationary.',
    ],
    relatedConcepts: [
      { label: 'Slope of a Line (Mathematics)', href: '/subjects/mathematics/a-level/coordinate-geometry/slope-of-a-line' },
    ],
  },

  acceleration: {
    slug: 'acceleration',
    title: 'Acceleration',
    difficulty: 'medium',
    simpleExplanation:
      'Acceleration measures how quickly velocity is changing — the change in velocity per unit ' +
      'time. An object accelerates whenever it speeds up, slows down (decelerates), or changes direction.',
    whyItMatters:
      "Acceleration is what connects force to motion — it's the quantity that Newton's second law " +
      '(F = ma) directly links to the forces acting on an object.',
    formulaSlug: 'acceleration-formula',
    workedExample: {
      id: 'acceleration-worked-1',
      title: "Calculate a car's acceleration",
      problemStatement: 'A car speeds up from 10 m/s to 30 m/s in 5 s. Find its acceleration.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'a = (v − u) / t', explanation: 'Acceleration is the change in velocity divided by the time taken.' },
        { step: 2, instruction: 'Substitute the values.', math: 'a = (30 − 10) / 5', explanation: 'Final velocity v = 30 m/s, initial velocity u = 10 m/s, time t = 5 s.' },
        { step: 3, instruction: 'Calculate.', math: 'a = 20 / 5 = 4', explanation: '20 divided by 5.' },
      ],
      finalAnswer: 'Acceleration = 4 m/s²',
    },
    whyItWorks:
      'Dividing the total change in velocity by the time it took to change gives the average rate ' +
      'of that change per second — exactly what acceleration measures, in units of (m/s) per ' +
      'second, or m/s².',
    realLifeExample: {
      title: '0–100 km/h times for cars',
      scenario: 'Car reviews often quote how many seconds a car takes to go from 0 to 100 km/h.',
      explanation: 'That figure is a direct, everyday measurement of acceleration — a smaller time means a larger (faster) acceleration.',
    },
    practiceQuestions: [
      {
        id: 'acceleration-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A cyclist accelerates from 2 m/s to 8 m/s in 3 s. What is their acceleration?',
        hints: ['acceleration = (v−u)/t.', '(8−2)/3.'],
        correctAnswer: 2,
        unit: 'm/s²',
        explanation: 'acceleration = (8−2)/3 = 6/3 = 2 m/s².',
      },
      {
        id: 'acceleration-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A ball decelerates from 12 m/s to 0 m/s in 4 s. What is its acceleration? (Include the sign.)',
        hints: ['Deceleration is negative acceleration.', '(0−12)/4.'],
        correctAnswer: -3,
        unit: 'm/s²',
        explanation: 'acceleration = (0−12)/4 = −3 m/s² (a deceleration).',
      },
    ],
    commonMistake:
      "Assuming acceleration only means 'speeding up' — an object slowing down also has a " +
      '(negative) acceleration, and an object changing direction at constant speed is accelerating too.',
    quickReview: [
      'acceleration = change in velocity / time = (v−u)/t',
      'Deceleration is just negative acceleration.',
      'Units are m/s².',
    ],
  },

  'velocity-time-graphs': {
    slug: 'velocity-time-graphs',
    title: 'Velocity-Time Graphs',
    difficulty: 'medium',
    simpleExplanation:
      "A velocity-time graph plots an object's velocity against time. The slope of the line gives " +
      'the acceleration, and the area between the line and the time axis gives the total ' +
      'displacement over that time.',
    whyItMatters:
      "A single graph like this can show you an object's acceleration AND how far it travelled, " +
      'just by reading its slope and the area underneath it.',
    diagram: {
      id: 'velocity-time-graph-diagram',
      title: 'Velocity-time graph',
      altText: 'A velocity-time graph with two draggable points and a live acceleration readout equal to the slope of the line between them',
      component: 'CoordinatePlane',
      interactive: true,
      props: {
        min: 0,
        max: 12,
        pointA: { x: 0, y: 2, label: 'A' },
        pointB: { x: 5, y: 12, label: 'B' },
        showSlope: true,
        showLine: true,
        xLabel: 'time (s)',
        yLabel: 'velocity (m/s)',
        slopeSymbol: 'a',
      },
    },
    workedExample: {
      id: 'velocity-time-worked-1',
      title: 'Find acceleration from a velocity-time graph',
      problemStatement: 'A velocity-time graph shows a straight line from (0 s, 5 m/s) to (10 s, 25 m/s). Find the acceleration.',
      steps: [
        { step: 1, instruction: 'Recognize that acceleration = slope of a velocity-time graph.', explanation: 'The steepness of the line equals change in velocity per unit time — acceleration.' },
        { step: 2, instruction: 'Calculate the slope.', math: 'a = (25 − 5) / (10 − 0) = 2', explanation: 'Change in velocity divided by change in time.' },
      ],
      finalAnswer: 'Acceleration = 2 m/s²',
    },
    whyItWorks:
      "Slope is 'change in y divided by change in x' — on a velocity-time graph that is exactly " +
      "'change in velocity divided by change in time,' the definition of acceleration.",
    realLifeExample: {
      title: 'Analyzing a rocket launch',
      scenario: "Engineers plot a rocket's velocity-time graph during launch.",
      explanation: 'The slope at any point gives its acceleration, and the area under the curve up to any time gives exactly how far it has travelled — both read straight off the same graph.',
    },
    practiceQuestions: [
      {
        id: 'velocity-time-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A velocity-time graph shows a straight line from (0 s, 0 m/s) to (4 s, 20 m/s). What is the acceleration?',
        hints: ['Acceleration = slope = change in velocity / change in time.', '20/4.'],
        correctAnswer: 5,
        unit: 'm/s²',
        explanation: 'acceleration = 20/4 = 5 m/s².',
      },
    ],
    commonMistake:
      "Confusing a distance-time graph's slope (speed) with a velocity-time graph's slope " +
      '(acceleration) — they look similar but represent completely different quantities.',
    quickReview: [
      'The slope of a velocity-time graph equals acceleration.',
      'The area under a velocity-time graph equals displacement.',
      'A flat line means constant velocity (zero acceleration).',
    ],
    relatedConcepts: [
      { label: 'Slope of a Line (Mathematics)', href: '/subjects/mathematics/a-level/coordinate-geometry/slope-of-a-line' },
    ],
  },

  'the-first-equation-of-motion': {
    slug: 'the-first-equation-of-motion',
    title: 'The First Equation of Motion (v = u + at)',
    difficulty: 'medium',
    simpleExplanation:
      'The first equation of motion, v = u + at, lets you find an object\'s final velocity (v) if ' +
      'you know its initial velocity (u), its acceleration (a), and the time (t) it accelerated ' +
      'for — without needing a graph.',
    whyItMatters:
      'This equation (and the three that follow it) let you solve motion problems directly with ' +
      'algebra, for any object moving with constant acceleration.',
    formulaSlug: 'suvat-v-equals-u-plus-at',
    workedExample: {
      id: 'suvat-1-worked-1',
      title: "Find a car's final velocity",
      problemStatement: 'A car starts at 5 m/s and accelerates at 3 m/s² for 4 s. Find its final velocity.',
      steps: [
        { step: 1, instruction: 'Write the equation.', math: 'v = u + at', explanation: 'Final velocity equals initial velocity plus acceleration times time.' },
        { step: 2, instruction: 'Substitute the values.', math: 'v = 5 + (3 × 4)', explanation: 'u = 5 m/s, a = 3 m/s², t = 4 s.' },
        { step: 3, instruction: 'Calculate.', math: 'v = 5 + 12 = 17', explanation: '3 × 4 = 12, then 5 + 12 = 17.' },
      ],
      finalAnswer: 'v = 17 m/s',
    },
    whyItWorks:
      'Acceleration is defined as the change in velocity per second, so multiplying it by the ' +
      'time gives the total change in velocity over that time — adding that change to the ' +
      'starting velocity gives the final velocity.',
    realLifeExample: {
      title: "Predicting a train's speed",
      scenario: 'A train accelerates steadily leaving a station.',
      explanation: 'Knowing its starting speed, acceleration, and how long it accelerates for lets engineers predict its speed at any later moment using this exact equation.',
    },
    practiceQuestions: [
      {
        id: 'suvat-1-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'An object starts at 0 m/s and accelerates at 5 m/s² for 6 s. What is its final velocity?',
        hints: ['v = u + at.', '0 + (5×6).'],
        correctAnswer: 30,
        unit: 'm/s',
        explanation: 'v = 0 + (5×6) = 30 m/s.',
      },
    ],
    commonMistake:
      'Forgetting that u is the INITIAL velocity, not zero by default — u is only zero if the ' +
      'object starts from rest.',
    quickReview: [
      'v = u + at',
      'v = final velocity, u = initial velocity, a = acceleration, t = time.',
      'Only valid for constant (uniform) acceleration.',
    ],
    relatedConcepts: [
      { label: 'Equation of a Straight Line (Mathematics)', href: '/subjects/mathematics/a-level/coordinate-geometry/equation-of-a-straight-line' },
    ],
  },

  'the-second-equation-of-motion': {
    slug: 'the-second-equation-of-motion',
    title: 'The Second Equation of Motion (s = ut + ½at²)',
    difficulty: 'hard',
    simpleExplanation:
      'The second equation of motion, s = ut + ½at², lets you calculate the displacement (s) of ' +
      'an object given its initial velocity (u), acceleration (a), and time (t).',
    whyItMatters:
      'This equation lets you find how far something travels during acceleration, without needing ' +
      'to know its final velocity first.',
    formulaSlug: 'suvat-s-equals-ut-plus-half-at-squared',
    workedExample: {
      id: 'suvat-2-worked-1',
      title: 'Find the distance a ball travels',
      problemStatement: 'A ball starts at 2 m/s and accelerates at 4 m/s² for 3 s. Find the distance it travels.',
      steps: [
        { step: 1, instruction: 'Write the equation.', math: 's = ut + ½at²', explanation: 'Displacement equals initial velocity times time, plus half the acceleration times time squared.' },
        { step: 2, instruction: 'Substitute the values.', math: 's = (2 × 3) + ½ × 4 × 3²', explanation: 'u = 2 m/s, t = 3 s, a = 4 m/s².' },
        { step: 3, instruction: 'Calculate each term.', math: 's = 6 + (0.5 × 4 × 9) = 6 + 18', explanation: '3² = 9; 0.5 × 4 × 9 = 18.' },
        { step: 4, instruction: 'Add them.', math: 's = 24', explanation: '6 + 18 = 24.' },
      ],
      finalAnswer: 's = 24 m',
    },
    whyItWorks:
      'The first term (ut) accounts for the distance the object would cover at its constant ' +
      'starting speed; the second term (½at²) adds the extra distance gained purely from ' +
      'accelerating — together they give the true total displacement.',
    realLifeExample: {
      title: 'Calculating runway length for takeoff',
      scenario: 'Aircraft engineers calculate how much runway a plane needs to reach takeoff speed.',
      explanation: "Given the plane's acceleration and the time it takes to reach takeoff speed, this equation gives exactly how much distance (runway) is needed.",
    },
    practiceQuestions: [
      {
        id: 'suvat-2-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object starts at 0 m/s and accelerates at 2 m/s² for 5 s. What distance does it travel?',
        hints: ['s = ut + ½at². Since u=0, the first term is 0.', '½ × 2 × 5².'],
        correctAnswer: 25,
        unit: 'm',
        explanation: 's = (0×5) + ½×2×25 = 0 + 25 = 25 m.',
      },
    ],
    commonMistake:
      'Forgetting to square the time before multiplying by ½a — the t² applies only to time, not ' +
      'to the whole ½at term.',
    quickReview: [
      's = ut + ½at²',
      's = displacement, u = initial velocity, a = acceleration, t = time.',
      'Useful when you know time but not final velocity.',
    ],
  },

  'the-third-equation-of-motion': {
    slug: 'the-third-equation-of-motion',
    title: 'The Third Equation of Motion (v² = u² + 2as)',
    difficulty: 'hard',
    simpleExplanation:
      'The third equation of motion, v² = u² + 2as, relates final velocity (v), initial velocity ' +
      '(u), acceleration (a), and displacement (s) — without needing to know the time taken.',
    whyItMatters:
      'This is the equation to reach for whenever a problem gives you distance instead of time — ' +
      'it lets you skip straight to velocity or acceleration without solving for time first.',
    formulaSlug: 'suvat-v-squared-equals-u-squared-plus-2as',
    workedExample: {
      id: 'suvat-3-worked-1',
      title: "Find a car's final velocity from distance",
      problemStatement: 'A car starts at 4 m/s and accelerates at 2 m/s² over a distance of 24 m. Find its final velocity.',
      steps: [
        { step: 1, instruction: 'Write the equation.', math: 'v² = u² + 2as', explanation: 'Final velocity squared equals initial velocity squared plus twice the acceleration times displacement.' },
        { step: 2, instruction: 'Substitute the values.', math: 'v² = 4² + 2 × 2 × 24', explanation: 'u = 4 m/s, a = 2 m/s², s = 24 m.' },
        { step: 3, instruction: 'Calculate.', math: 'v² = 16 + 96 = 112', explanation: '4² = 16; 2×2×24 = 96; 16+96 = 112.' },
        { step: 4, instruction: 'Take the square root.', math: 'v = √112 ≈ 10.6', explanation: 'Square-root both sides to get v, not v².' },
      ],
      finalAnswer: 'v ≈ 10.6 m/s',
    },
    whyItWorks:
      'This equation can be derived by combining the first two equations of motion to eliminate ' +
      "time altogether — which is exactly why it's the one to use when time isn't given.",
    realLifeExample: {
      title: "Calculating a car's stopping distance",
      scenario: "Road safety calculations find a car's speed just before a collision, using its deceleration and the length of its skid marks (a measurable displacement).",
      explanation: 'Since the skid distance is known but not the time, this equation is exactly the tool used to work backward to the speed.',
    },
    practiceQuestions: [
      {
        id: 'suvat-3-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'An object starts at 0 m/s and accelerates at 5 m/s² over a distance of 10 m. Find its final velocity.',
        hints: ['v² = u² + 2as.', 'v² = 0 + 2×5×10 = 100. Then take the square root.'],
        correctAnswer: 10,
        unit: 'm/s',
        explanation: 'v² = 0 + 2×5×10 = 100, so v = √100 = 10 m/s.',
      },
    ],
    commonMistake:
      'Forgetting the final square-root step — the equation gives v², not v, so you must take the ' +
      'square root to find the actual velocity.',
    quickReview: [
      'v² = u² + 2as',
      'Use this equation when time is unknown or not needed.',
      'Remember to take the square root of the result to find v.',
    ],
  },

  'free-fall': {
    slug: 'free-fall',
    title: 'Free Fall',
    difficulty: 'medium',
    simpleExplanation:
      'Free fall is motion under gravity alone, with no other forces (like air resistance) acting. ' +
      "Near Earth's surface, every falling object accelerates at approximately 9.8 m/s², " +
      'regardless of its mass — this is called the acceleration due to gravity, g.',
    whyItMatters:
      'Free fall is a real, everyday example of constant (uniform) acceleration, which means all ' +
      'four equations of motion apply directly to it — just substitute g for a.',
    workedExample: {
      id: 'free-fall-worked-1',
      title: 'Find how far a dropped ball falls',
      problemStatement: 'A ball is dropped from rest and falls for 2 s. Using g = 9.8 m/s², find how far it falls.',
      steps: [
        { step: 1, instruction: 'Identify the known values.', math: 'u = 0, a = g = 9.8 m/s², t = 2 s', explanation: 'Dropped from rest means initial velocity is zero.' },
        { step: 2, instruction: 'Choose the equation that uses u, a, and t to find s.', math: 's = ut + ½at²', explanation: 'This is exactly the second equation of motion.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 's = (0×2) + ½ × 9.8 × 2² = 0 + 19.6', explanation: '0.5 × 9.8 × 4 = 19.6.' },
      ],
      finalAnswer: 's ≈ 19.6 m',
    },
    whyItWorks:
      "Because gravity provides a constant acceleration near Earth's surface, free fall is just a " +
      'special case of the same uniform-acceleration motion described by all four equations — ' +
      'with a replaced by g.',
    realLifeExample: {
      title: 'Skydiving before the parachute opens',
      scenario: 'In the first few seconds of a skydive, before air resistance becomes significant, a skydiver accelerates at very close to g.',
      explanation: "The same equations of motion used for any accelerating object correctly predict a skydiver's speed and fall distance during this initial phase.",
    },
    practiceQuestions: [
      {
        id: 'free-fall-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object is dropped from rest and falls for 3 s. Using g = 9.8 m/s², find its velocity after 3 s.',
        hints: ['v = u + at, with u = 0 and a = g.', '0 + 9.8×3.'],
        correctAnswer: 29.4,
        unit: 'm/s',
        explanation: 'v = 0 + (9.8×3) = 29.4 m/s.',
      },
    ],
    commonMistake:
      'Assuming heavier objects fall faster than lighter ones — in free fall (ignoring air ' +
      'resistance), all objects accelerate at the same rate, g, regardless of mass.',
    quickReview: [
      'Free fall = motion under gravity alone.',
      "g ≈ 9.8 m/s² near Earth's surface, for every object.",
      'All four equations of motion apply to free fall — just substitute g for a.',
    ],
  },
};
