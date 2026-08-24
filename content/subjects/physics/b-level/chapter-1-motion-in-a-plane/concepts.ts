import type { Concept } from '@/types/content';

export const chapter1MotionInAPlaneConcepts: Record<string, Concept> = {
  'resolving-vectors-in-two-dimensions': {
    slug: 'resolving-vectors-in-two-dimensions',
    title: 'Resolving Vectors into Components',
    difficulty: 'medium',
    simpleExplanation:
      'Any vector pointing at an angle (like a velocity or a force) can be replaced by two perpendicular ' +
      'vectors — one horizontal and one vertical — that together have exactly the same effect as the ' +
      'original. Splitting a vector this way is called resolving it into components.',
    whyItMatters:
      'Motion in a plane almost always involves vectors at an angle. Resolving them into horizontal and ' +
      'vertical components lets you analyse each direction separately using simple, one-dimensional ' +
      'equations, then recombine the results.',
    formulaSlug: 'vector-resolution-formula',
    workedExample: {
      id: 'vector-resolution-we-1',
      title: 'Resolving a velocity vector',
      problemStatement: 'A ball is thrown with a velocity of 20 m/s at 30° above the horizontal. Find its horizontal and vertical velocity components.',
      steps: [
        { step: 1, instruction: 'Write the component formulas.', math: 'vₓ = v cosθ, vy = v sinθ', explanation: 'v = 20 m/s, θ = 30°.' },
        { step: 2, instruction: 'Calculate the horizontal component.', math: 'vₓ = 20 × cos30° = 20 × 0.866 = 17.3 m/s', explanation: 'cos30° ≈ 0.866.' },
        { step: 3, instruction: 'Calculate the vertical component.', math: 'vy = 20 × sin30° = 20 × 0.5 = 10 m/s', explanation: 'sin30° = 0.5.' },
      ],
      finalAnswer: 'vₓ = 17.3 m/s, vy = 10 m/s.',
    },
    whyItWorks:
      'Because the horizontal and vertical directions are perpendicular, they are completely independent — ' +
      'a change in one direction has no effect on the other. Trigonometry (using the angle the vector makes ' +
      'with the horizontal) gives exactly how much of the vector "points" in each independent direction.',
    realLifeExample: {
      title: 'A ramp used to load a truck',
      scenario: "A worker pushes a heavy box up a ramp at an angle, applying force along the ramp's direction.",
      explanation: "Resolving the push force into horizontal and vertical components shows how much of the effort actually moves the box along the ramp (horizontal-ish component) versus how much presses the box into the ramp surface (vertical-ish component) — useful for calculating friction and required effort.",
    },
    practiceQuestions: [
      {
        id: 'vector-resolution-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A force of 50 N acts at 60° above the horizontal. Find its vertical component (use sin60° = 0.866).',
        hints: ['vy = v sinθ.'],
        correctAnswer: 43.3,
        tolerance: 0.5,
        unit: 'N',
        explanation: 'vy = 50 × sin60° = 50 × 0.866 = 43.3 N.',
      },
    ],
    commonMistake:
      'Mixing up sine and cosine — the component ADJACENT to the angle uses cosine, and the component ' +
      'OPPOSITE the angle uses sine. Always sketch the vector and its angle before applying the formula.',
    quickReview: [
      'Any vector at an angle splits into vₓ = v cosθ and vy = v sinθ.',
      'Horizontal and vertical components are independent of each other.',
      'Sketch the angle first to avoid mixing up sine and cosine.',
    ],
  },

  'resultant-of-two-dimensional-vectors': {
    slug: 'resultant-of-two-dimensional-vectors',
    title: 'Finding the Resultant of Two-Dimensional Vectors',
    difficulty: 'medium',
    simpleExplanation:
      'The reverse of resolving a vector: given two perpendicular components, you can recombine them into ' +
      'a single resultant vector using the Pythagorean theorem for its magnitude and the inverse tangent ' +
      'for its direction.',
    whyItMatters:
      'After analysing horizontal and vertical motion separately, you often need the single overall speed ' +
      'and direction an object is actually moving — this formula puts the two components back together.',
    formulaSlug: 'resultant-vector-formula',
    workedExample: {
      id: 'resultant-vector-we-1',
      title: 'Finding a resultant velocity',
      problemStatement: 'An object has a horizontal velocity component of 6 m/s and a vertical velocity component of 8 m/s. Find its resultant speed and direction.',
      steps: [
        { step: 1, instruction: 'Apply the magnitude formula.', math: 'R = √(vₓ² + vy²) = √(6² + 8²) = √(36+64) = √100', explanation: 'Pythagorean theorem on the two perpendicular components.' },
        { step: 2, instruction: 'Calculate R.', math: 'R = 10 m/s', explanation: 'Square root of 100.' },
        { step: 3, instruction: 'Find the direction.', math: 'θ = tan⁻¹(8/6) = tan⁻¹(1.33) ≈ 53.1°', explanation: 'Angle above the horizontal.' },
      ],
      finalAnswer: 'Resultant speed = 10 m/s, at 53.1° above the horizontal.',
    },
    whyItWorks:
      "Because the two components are perpendicular, they form the two legs of a right triangle, with the " +
      "resultant as the hypotenuse — this is exactly the situation the Pythagorean theorem and basic " +
      "trigonometry are built for.",
    realLifeExample: {
      title: 'A boat crossing a river current',
      scenario: 'A boat aims straight across a river while the current pushes it downstream at the same time.',
      explanation: "The boat's straight-across velocity and the current's downstream velocity are perpendicular components — the resultant formula gives the boat's actual speed and direction over the ground, which is neither straight across nor straight downstream.",
    },
    practiceQuestions: [
      {
        id: 'resultant-vector-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A vector has a horizontal component of 3 m/s and a vertical component of 4 m/s. Find its resultant magnitude.',
        hints: ['R = √(vₓ² + vy²).'],
        correctAnswer: 5,
        tolerance: 0.1,
        unit: 'm/s',
        explanation: 'R = √(3² + 4²) = √(9+16) = √25 = 5 m/s.',
      },
    ],
    commonMistake:
      'Forgetting that the components must be perpendicular for this formula to apply directly — combining ' +
      'two vectors that are not at 90° to each other needs the more general law of cosines instead.',
    quickReview: [
      'R = √(vₓ² + vy²) gives the resultant magnitude of two perpendicular components.',
      'θ = tan⁻¹(vy/vₓ) gives the resultant direction.',
      'This only works directly for components that are perpendicular (90° apart).',
    ],
  },

  'projectile-motion-basics': {
    slug: 'projectile-motion-basics',
    title: 'Projectile Motion: Independence of Horizontal and Vertical Motion',
    difficulty: 'medium',
    simpleExplanation:
      'A projectile (something launched into the air and then only acted on by gravity) undergoes two ' +
      'completely independent motions at once: constant-velocity horizontal motion (no horizontal force, ' +
      'ignoring air resistance) and accelerating vertical motion (constant downward acceleration g due to ' +
      'gravity).',
    whyItMatters:
      "This independence is the key insight that makes projectile motion solvable — instead of one " +
      "complicated curved-path problem, it becomes two simple, separate one-dimensional problems analysed " +
      "at the same time.",
    whyItWorks:
      "Gravity acts only vertically, so it has zero effect on horizontal velocity — the horizontal velocity " +
      "component stays constant throughout the flight. Meanwhile, gravity continuously accelerates the " +
      "vertical component downward, exactly as in ordinary one-dimensional free fall — the two directions " +
      "never influence each other.",
    realLifeExample: {
      title: 'A ball rolling off a table',
      scenario: 'A ball rolling horizontally off the edge of a table falls to the floor while still moving forward.',
      explanation: "The ball's horizontal speed stays constant all the way down (ignoring air resistance), while its vertical speed increases the entire time due to gravity — this is exactly why the ball follows a curved (parabolic) path instead of falling straight down or moving in a straight diagonal line.",
    },
    practiceQuestions: [
      {
        id: 'projectile-basics-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What happens to the horizontal velocity of a projectile during its flight (ignoring air resistance)?',
        options: [
          { id: 'a', text: 'It stays constant, since gravity only acts vertically.' },
          { id: 'b', text: 'It decreases steadily due to gravity.' },
          { id: 'c', text: 'It increases steadily due to gravity.' },
          { id: 'd', text: 'It becomes zero at the highest point.' },
        ],
        correctOptionId: 'a',
        hints: ['Gravity acts in one direction only — does that direction affect horizontal motion?'],
        explanation: 'Since gravity acts purely vertically, it has no effect on the horizontal component of velocity, which therefore remains constant throughout the flight.',
      },
    ],
    commonMistake:
      "Assuming horizontal velocity decreases as a projectile rises, the way vertical velocity does — only " +
      "the VERTICAL component changes (due to gravity); the horizontal component is unaffected and stays " +
      "constant the whole flight.",
    quickReview: [
      'Projectile motion = constant horizontal velocity + accelerating (gravity-driven) vertical velocity.',
      'The two directions are completely independent of each other.',
      'This independence is what produces the curved, parabolic path.',
    ],
  },

  'time-of-flight-in-projectile-motion': {
    slug: 'time-of-flight-in-projectile-motion',
    title: 'Time of Flight',
    difficulty: 'medium',
    simpleExplanation:
      "The time of flight is the total time a projectile spends in the air, from the moment it is launched " +
      "until it returns to the same height it was launched from.",
    whyItMatters:
      "Knowing the time of flight is essential for finding how far a projectile travels (its range) and for " +
      "timing events involving projectiles, like when a thrown object will land.",
    formulaSlug: 'time-of-flight-formula',
    workedExample: {
      id: 'time-of-flight-we-1',
      title: 'Finding the time of flight',
      problemStatement: 'A ball is launched at 25 m/s at an angle of 40° above the horizontal. Find its time of flight (g = 9.8 m/s², sin40° ≈ 0.643).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'T = 2u sinθ / g', explanation: 'u = 25 m/s, θ = 40°, g = 9.8 m/s².' },
        { step: 2, instruction: 'Substitute values.', math: 'T = (2 × 25 × 0.643) / 9.8 = 32.15 / 9.8', explanation: 'Multiply numerator first, then divide by g.' },
        { step: 3, instruction: 'Calculate.', math: 'T ≈ 3.28 s', explanation: 'Divide 32.15 by 9.8.' },
      ],
      finalAnswer: 'Time of flight ≈ 3.28 s.',
    },
    whyItWorks:
      "The projectile's vertical motion is symmetric: the time to rise to maximum height equals the time to " +
      "fall back down to the launch height, since gravity's deceleration going up mirrors its acceleration " +
      "coming down. The formula is derived by finding when the vertical displacement returns to zero.",
    realLifeExample: {
      title: 'Timing a basketball free throw',
      scenario: 'A basketball player launches the ball toward the hoop at a specific angle and speed.',
      explanation: 'The time of flight formula tells a coach (or a physics-minded player) exactly how long the ball is airborne — useful for understanding shot arcs and comparing different launch angles and speeds.',
    },
    practiceQuestions: [
      {
        id: 'time-of-flight-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A projectile is launched at 30 m/s at 90° (straight up). Find its time of flight (g = 9.8 m/s², sin90° = 1).',
        hints: ['T = 2u sinθ / g.'],
        correctAnswer: 6.12,
        tolerance: 0.1,
        unit: 's',
        explanation: 'T = (2 × 30 × 1) / 9.8 = 60/9.8 ≈ 6.12 s.',
      },
    ],
    commonMistake:
      "Forgetting to use the LAUNCH ANGLE'S sine, not the angle itself, in the formula — and forgetting the " +
      "factor of 2, which accounts for both the rise and the fall.",
    quickReview: [
      'T = 2u sinθ / g gives the total time a projectile is airborne.',
      "The rise time and fall time are equal (symmetric motion).",
      'Time of flight depends on launch speed and angle, not on mass.',
    ],
  },

  'maximum-height-in-projectile-motion': {
    slug: 'maximum-height-in-projectile-motion',
    title: 'Maximum Height',
    difficulty: 'medium',
    simpleExplanation:
      "The maximum height is the highest point a projectile reaches, where its vertical velocity has " +
      "momentarily dropped to zero before gravity pulls it back down.",
    whyItMatters:
      "Maximum height is a key measure of a projectile's trajectory, used in contexts from sports (how high " +
      "a ball goes) to engineering (clearance needed over an obstacle).",
    formulaSlug: 'maximum-height-formula',
    workedExample: {
      id: 'max-height-we-1',
      title: 'Finding maximum height',
      problemStatement: 'A javelin is thrown at 22 m/s at 35° above horizontal. Find its maximum height (g = 9.8 m/s², sin35° ≈ 0.574).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'H = u² sin²θ / 2g', explanation: 'u = 22 m/s, θ = 35°.' },
        { step: 2, instruction: 'Calculate sin²θ and u².', math: 'u² = 484, sin²θ = 0.574² ≈ 0.329', explanation: 'Square the speed and the sine of the angle separately.' },
        { step: 3, instruction: 'Substitute and calculate.', math: 'H = (484 × 0.329) / (2 × 9.8) = 159.2 / 19.6 ≈ 8.12 m', explanation: 'Multiply numerator, then divide by 2g.' },
      ],
      finalAnswer: 'Maximum height ≈ 8.12 m.',
    },
    whyItWorks:
      'At maximum height, the vertical velocity component is momentarily zero — this formula comes from ' +
      'applying the equation v² = u² − 2gh to just the vertical component (initial vertical speed u sinθ) ' +
      'and solving for h when v = 0.',
    realLifeExample: {
      title: 'A high jumper\'s centre of mass',
      scenario: "A high jumper launches their body up and over the bar at an angle.",
      explanation: "The maximum height formula (applied to their launch speed and angle) predicts how high their centre of mass rises — athletes and coaches use this relationship to understand how launch speed and angle affect jump height.",
    },
    practiceQuestions: [
      {
        id: 'max-height-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A ball is launched straight up (θ = 90°) at 14 m/s. Find its maximum height (g = 9.8 m/s²).',
        hints: ['H = u² sin²θ / 2g.', 'sin90° = 1.'],
        correctAnswer: 10,
        tolerance: 0.2,
        unit: 'm',
        explanation: 'H = 14² × 1 / (2×9.8) = 196/19.6 = 10 m.',
      },
    ],
    commonMistake:
      "Using the full launch speed u instead of its vertical component (u sinθ) — the formula already " +
      "accounts for this via the sin²θ term, so don't apply sinθ a second time separately.",
    quickReview: [
      'H = u² sin²θ / 2g gives the peak height of a projectile.',
      'Maximum height occurs when vertical velocity momentarily equals zero.',
      'A steeper launch angle (closer to 90°) gives greater height for the same speed.',
    ],
  },

  'horizontal-range-in-projectile-motion': {
    slug: 'horizontal-range-in-projectile-motion',
    title: 'Horizontal Range',
    difficulty: 'hard',
    simpleExplanation:
      'The horizontal range is the total horizontal distance a projectile covers before landing back at its ' +
      'launch height. It depends on launch speed, launch angle, and gravity.',
    whyItMatters:
      'Range is often the most practically important measure of a projectile\'s motion — how far a thrown ' +
      'object, a kicked ball, or a launched object actually travels.',
    formulaSlug: 'horizontal-range-formula',
    workedExample: {
      id: 'horizontal-range-we-1',
      title: 'Finding horizontal range, and the angle for maximum range',
      problemStatement: 'A cannonball is launched at 40 m/s at 45° above horizontal. Find its range (g = 9.8 m/s², sin90° = 1).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'R = u² sin2θ / g', explanation: 'u = 40 m/s, θ = 45°, so 2θ = 90°.' },
        { step: 2, instruction: 'Substitute values.', math: 'R = 40² × sin90° / 9.8 = 1600 × 1 / 9.8', explanation: 'sin90° = 1, the maximum possible value of sine.' },
        { step: 3, instruction: 'Calculate.', math: 'R = 1600 / 9.8 ≈ 163.3 m', explanation: 'Divide 1600 by 9.8.' },
      ],
      finalAnswer: 'Range ≈ 163.3 m — and since sin2θ is at its maximum (1) exactly when θ = 45°, this is the launch angle that gives the maximum possible range for this speed.',
    },
    whyItWorks:
      'Range is the product of the (constant) horizontal velocity and the total time of flight — combining ' +
      'those two relationships and simplifying with a trigonometric identity produces the sin2θ term, which ' +
      'is exactly why range is maximised at a 45° launch angle (where sin2θ = sin90° = 1, its largest ' +
      'possible value).',
    realLifeExample: {
      title: 'Why long jumpers and shot-putters aim for roughly 45°',
      scenario: 'Athletes in throwing and jumping events are coached to launch at an angle well below 90°, often closer to 45°.',
      explanation: 'Since range is maximised at a 45° launch angle for a given speed (ignoring air resistance and the launch height above the ground), athletes aiming for maximum horizontal distance train toward launch angles in that range rather than launching as steeply as possible.',
    },
    practiceQuestions: [
      {
        id: 'horizontal-range-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A projectile is launched at 20 m/s at 30° above horizontal. Find its range (g = 9.8 m/s², sin60° ≈ 0.866).',
        hints: ['R = u² sin2θ / g.', '2θ = 60° here.'],
        correctAnswer: 35.3,
        tolerance: 0.5,
        unit: 'm',
        explanation: 'R = 20² × sin60° / 9.8 = 400 × 0.866 / 9.8 = 346.4/9.8 ≈ 35.3 m.',
      },
    ],
    commonMistake:
      "Forgetting that the angle inside the sine is DOUBLE the launch angle (sin2θ, not sinθ) — this is " +
      "easy to miss and produces a very different (usually much smaller) incorrect answer.",
    quickReview: [
      'R = u² sin2θ / g gives the horizontal distance travelled.',
      'Range is maximised at a 45° launch angle, where sin2θ = 1.',
      'The same range is achieved by complementary angles (e.g. 30° and 60°) for a given speed.',
    ],
  },

  'period-and-frequency-in-circular-motion': {
    slug: 'period-and-frequency-in-circular-motion',
    title: 'Period and Frequency in Circular Motion',
    difficulty: 'easy',
    simpleExplanation:
      "For an object moving at constant speed around a circle, the period (T) is the time for one complete " +
      "revolution, and the frequency (f) is how many revolutions happen per second — frequency is simply " +
      "the reciprocal of the period.",
    whyItMatters:
      'Period and frequency describe the basic "rhythm" of circular motion and are the starting point for ' +
      'calculating centripetal acceleration and force.',
    formulaSlug: 'period-frequency-formula',
    workedExample: {
      id: 'period-frequency-we-1',
      title: 'Finding period and speed',
      problemStatement: 'A stone on a 0.5 m string is whirled in a circle, completing one revolution every 0.4 s. Find its speed and frequency.',
      steps: [
        { step: 1, instruction: 'Find the speed from T = 2πr/v, rearranged.', math: 'v = 2πr/T = (2π × 0.5) / 0.4', explanation: 'r = 0.5 m, T = 0.4 s.' },
        { step: 2, instruction: 'Calculate v.', math: 'v = 3.14 / 0.4 ≈ 7.85 m/s', explanation: '2π × 0.5 ≈ 3.14.' },
        { step: 3, instruction: 'Find the frequency.', math: 'f = 1/T = 1/0.4 = 2.5 Hz', explanation: 'Frequency is the reciprocal of period.' },
      ],
      finalAnswer: 'Speed ≈ 7.85 m/s, frequency = 2.5 Hz.',
    },
    whyItWorks:
      'In one period, the object travels exactly the circumference of the circle (2πr) — dividing this ' +
      'distance by the period gives its constant speed, matching the ordinary distance/time relationship ' +
      'applied to a circular path.',
    realLifeExample: {
      title: 'A spinning fan blade tip',
      scenario: "A ceiling fan's blade tip moves in a circle as the fan rotates.",
      explanation: "The fan's rotational speed (revolutions per minute) is directly related to the frequency of the blade tip's circular motion — converting RPM to frequency (Hz) and using the blade length as the radius lets you calculate the actual speed of the blade tip.",
    },
    practiceQuestions: [
      {
        id: 'period-frequency-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'An object completes 5 revolutions in 2 seconds. Find its frequency.',
        hints: ['f = revolutions / time.', 'This is the same as 1/T where T is the time per revolution.'],
        correctAnswer: 2.5,
        tolerance: 0.05,
        unit: 'Hz',
        explanation: 'f = 5 revolutions / 2 s = 2.5 Hz.',
      },
    ],
    commonMistake:
      'Confusing period and frequency — period (T) is measured in seconds (time per revolution); frequency ' +
      '(f) is measured in Hz (revolutions per second). They are reciprocals of each other, not the same thing.',
    quickReview: [
      'Period T: time for one full revolution. Frequency f = 1/T.',
      'Speed v = 2πr/T = circumference ÷ period.',
      'These quantities describe circular motion before centripetal acceleration is calculated.',
    ],
  },

  'centripetal-acceleration-in-a-plane': {
    slug: 'centripetal-acceleration-in-a-plane',
    title: 'Centripetal Acceleration',
    difficulty: 'medium',
    simpleExplanation:
      'An object moving at constant SPEED in a circle is still accelerating, because its VELOCITY (which ' +
      'includes direction) is constantly changing direction. This acceleration always points toward the ' +
      'centre of the circle and is called centripetal ("centre-seeking") acceleration.',
    whyItMatters:
      "This is a common source of confusion in physics: 'constant speed' does not mean 'zero acceleration' " +
      "when the direction is changing — recognising this is essential for correctly analysing any circular " +
      "motion.",
    formulaSlug: 'centripetal-acceleration-formula',
    workedExample: {
      id: 'centripetal-accel-we-1',
      title: 'Calculating centripetal acceleration',
      problemStatement: 'A car takes a curve of radius 50 m at a constant speed of 15 m/s. Find its centripetal acceleration.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'a = v²/r', explanation: 'v = 15 m/s, r = 50 m.' },
        { step: 2, instruction: 'Substitute values.', math: 'a = 15² / 50 = 225/50', explanation: 'Square the speed first, then divide by radius.' },
        { step: 3, instruction: 'Calculate.', math: 'a = 4.5 m/s²', explanation: 'Divide 225 by 50.' },
      ],
      finalAnswer: 'Centripetal acceleration = 4.5 m/s², directed toward the centre of the curve.',
    },
    whyItWorks:
      'Velocity is a vector — even at constant speed (magnitude), a continuously changing direction means ' +
      'the velocity vector is continuously changing, which by definition is acceleration. Careful geometric ' +
      'analysis of this changing direction shows the acceleration must point toward the centre, with ' +
      'magnitude v²/r.',
    realLifeExample: {
      title: 'Why cars can skid on tight curves',
      scenario: 'A car travelling too fast around a tight curve can skid off the road.',
      explanation: 'Centripetal acceleration increases sharply with speed (it depends on v²) and with tighter curves (smaller r) — if the required centripetal acceleration exceeds what friction between the tyres and road can provide, the car cannot maintain the curved path and skids outward.',
    },
    practiceQuestions: [
      {
        id: 'centripetal-accel-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An object moves in a circle of radius 2 m at 6 m/s. Find its centripetal acceleration.',
        hints: ['a = v²/r.'],
        correctAnswer: 18,
        tolerance: 0.2,
        unit: 'm/s²',
        explanation: 'a = 6²/2 = 36/2 = 18 m/s².',
      },
    ],
    commonMistake:
      "Thinking constant speed means zero acceleration — in circular motion, the speed (magnitude) is " +
      "constant, but the velocity (which includes direction) is always changing, so there is always a " +
      "nonzero centripetal acceleration.",
    quickReview: [
      'Centripetal acceleration a = v²/r, always directed toward the centre.',
      "Constant speed in a circle still means nonzero acceleration, because direction is changing.",
      'Doubling speed quadruples the required centripetal acceleration (v² dependence).',
    ],
  },

  'centripetal-force-in-a-plane': {
    slug: 'centripetal-force-in-a-plane',
    title: 'Centripetal Force',
    difficulty: 'medium',
    simpleExplanation:
      "Centripetal force is the net force, directed toward the centre of a circle, that is needed to " +
      "produce centripetal acceleration and keep an object moving along that circular path. By Newton's " +
      "second law, it equals mass times centripetal acceleration.",
    whyItMatters:
      "Something must always be providing this inward force — tension, friction, gravity, or a normal " +
      "force — or the object cannot maintain circular motion and will instead move in a straight line " +
      "(Newton's first law).",
    formulaSlug: 'centripetal-force-in-a-plane-formula',
    workedExample: {
      id: 'centripetal-force-we-1',
      title: 'Finding required centripetal force',
      problemStatement: 'A 0.2 kg ball on a string moves in a horizontal circle of radius 0.8 m at 4 m/s. Find the tension in the string (assuming it provides all the centripetal force).',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'F = mv²/r', explanation: 'm = 0.2 kg, v = 4 m/s, r = 0.8 m.' },
        { step: 2, instruction: 'Substitute values.', math: 'F = (0.2 × 4²) / 0.8 = (0.2 × 16)/0.8 = 3.2/0.8', explanation: 'Square the speed, multiply by mass, then divide by radius.' },
        { step: 3, instruction: 'Calculate.', math: 'F = 4 N', explanation: 'Divide 3.2 by 0.8.' },
      ],
      finalAnswer: 'The string tension providing the centripetal force is 4 N.',
    },
    whyItWorks:
      "Newton's second law (F = ma) applies just as much to circular motion as to straight-line motion — " +
      "since the acceleration here is centripetal (v²/r, directed inward), the net force causing it must " +
      "also be directed inward, with magnitude mv²/r.",
    realLifeExample: {
      title: 'Satellites orbiting Earth',
      scenario: 'A satellite stays in a stable circular orbit around Earth without any engine thrust.',
      explanation: "Earth's gravity provides exactly the centripetal force needed to keep the satellite moving in its circular path — there is no separate 'centrifugal' force pushing outward; gravity alone supplies the inward force required, matching mv²/r for the satellite's orbital speed and radius.",
    },
    practiceQuestions: [
      {
        id: 'centripetal-force-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A 1.5 kg object moves in a circle of radius 3 m at 6 m/s. Find the centripetal force needed.',
        hints: ['F = mv²/r.'],
        correctAnswer: 18,
        tolerance: 0.2,
        unit: 'N',
        explanation: 'F = 1.5 × 6² / 3 = 1.5 × 36/3 = 54/3 = 18 N.',
      },
    ],
    commonMistake:
      "Believing there is an outward 'centrifugal force' acting on the object itself — in an inertial " +
      "(non-rotating) frame of reference, the only real force is the inward centripetal force; the outward " +
      "sensation felt in a turning vehicle is due to inertia (the body's tendency to keep moving straight), " +
      "not an actual outward force on the object.",
    quickReview: [
      'Centripetal force F = mv²/r, directed toward the centre, from Newton\'s second law.',
      'Real forces (tension, friction, gravity, normal force) provide the centripetal force — nothing pushes outward.',
      'Without enough centripetal force, an object cannot maintain its circular path.',
    ],
  },
};
