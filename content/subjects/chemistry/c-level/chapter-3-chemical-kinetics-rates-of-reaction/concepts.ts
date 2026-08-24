import type { Concept } from '@/types/content';

export const chapter3KineticsConcepts: Record<string, Concept> = {
  'measuring-reaction-rate': {
    slug: 'measuring-reaction-rate',
    title: 'Measuring Reaction Rate',
    difficulty: 'easy',
    simpleExplanation:
      'Reaction rate measures how quickly reactants are used up or products are formed — usually ' +
      'expressed as the change in concentration of a chosen substance divided by the time that change ' +
      'took.',
    whyItMatters:
      'Being able to quantify reaction rate is the entire foundation of chemical kinetics — without a ' +
      'number to measure, there would be no way to compare how "fast" different reactions are, or how ' +
      'much a given factor speeds one up.',
    formulaSlug: 'average-reaction-rate-formula',
    workedExample: {
      id: 'measuring-rate-worked-1',
      title: 'Calculate an average reaction rate',
      problemStatement: 'The concentration of a reactant drops from 0.80 mol/L to 0.50 mol/L over 60 seconds. Find the average rate of reaction.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'rate = Δ[conc.] / Δt', explanation: 'Change in concentration divided by time taken.' },
        { step: 2, instruction: 'Find the change in concentration.', math: 'Δ[conc.] = 0.80 − 0.50 = 0.30 mol/L', explanation: 'Take the magnitude of the decrease.' },
        { step: 3, instruction: 'Divide by the time interval.', math: 'rate = 0.30 / 60 = 0.005', explanation: 'Δt = 60 s.' },
      ],
      finalAnswer: 'rate = 0.005 mol/(L·s)',
    },
    whyItWorks:
      'Rate is fundamentally about "how much changes, per unit time" — dividing the total change in ' +
      "concentration by the time it took to happen gives exactly that: a number that captures the " +
      "reaction's speed in a way that can be measured and compared.",
    realLifeExample: {
      title: 'Monitoring an industrial reactor',
      scenario: 'Chemical engineers track how quickly a reactant is consumed in a large industrial reactor.',
      explanation: 'By sampling the reactant concentration at intervals and calculating the rate, engineers can predict how long a batch reaction will take and adjust conditions to speed up production.',
    },
    practiceQuestions: [
      {
        id: 'measuring-rate-pq-1',
        type: 'numeric',
        difficulty: 'easy',
        prompt: 'A product\'s concentration rises from 0 to 0.40 mol/L over 20 seconds. Find the average rate.',
        hints: ['rate = Δ[conc.] / Δt.', '0.40 / 20.'],
        correctAnswer: 0.02,
        unit: 'mol/(L·s)',
        explanation: 'rate = 0.40 / 20 = 0.02 mol/(L·s).',
      },
    ],
    commonMistake:
      'Forgetting that reaction rate is always taken as a positive quantity, even when measured using ' +
      'a reactant that is DECREASING — the negative sign of a decreasing reactant concentration is ' +
      'conventionally dropped so the rate is reported as a positive number.',
    quickReview: [
      'rate = Δ[concentration] / Δt.',
      'Rate can be measured from any reactant or product in the reaction.',
      'Rate is always reported as a positive quantity.',
    ],
  },

  'average-and-instantaneous-rate': {
    slug: 'average-and-instantaneous-rate',
    title: 'Average and Instantaneous Rate',
    difficulty: 'medium',
    simpleExplanation:
      "Average rate is the overall rate calculated across a whole time interval; instantaneous rate is " +
      "the rate at one specific moment in time — found from the slope of a concentration-time graph at " +
      "that exact instant.",
    whyItMatters:
      "Reaction rate almost always changes as a reaction proceeds (usually slowing down as reactants " +
      "are used up), so the average rate over a long interval can be very different from the true " +
      "rate at the start or end of the reaction — instantaneous rate captures the real rate at any " +
      "given moment.",
    whyItWorks:
      "On a concentration-time graph, average rate is the slope of a straight line connecting two " +
      "points; instantaneous rate is the slope of the tangent line at a single point — as the time " +
      "interval used for the average rate shrinks toward zero, the average rate calculation converges " +
      "on the instantaneous rate at that point.",
    realLifeExample: {
      title: 'Why a reaction seems to "slow down" over time',
      scenario: 'A reaction that starts vigorously (lots of bubbling) gradually appears to slow down and eventually stops.',
      explanation: 'This is the instantaneous rate decreasing over time as reactant concentration drops — plotting concentration against time and looking at the slope at different points shows the rate is fastest at the very start and approaches zero as reactants run out.',
    },
    practiceQuestions: [
      {
        id: 'instantaneous-rate-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'On a concentration-time graph, how do you find the instantaneous rate at a specific time?',
        options: [
          { id: 'a', text: 'Divide the final concentration by the final time.' },
          { id: 'b', text: 'Draw a tangent line to the curve at that point and find its slope.' },
          { id: 'c', text: 'Average the rate over the whole graph.' },
          { id: 'd', text: 'Instantaneous rate cannot be found from a graph.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what a "tangent line" represents at a single point on a curve.'],
        explanation: 'The slope of the tangent line at a specific point on a concentration-time curve gives the instantaneous rate at that exact moment.',
      },
    ],
    commonMistake:
      "Assuming reaction rate is constant throughout a reaction — in most reactions the rate changes " +
      "continuously (typically decreasing as reactant concentration falls), which is exactly why " +
      "instantaneous rate is a distinct, important concept from average rate.",
    quickReview: [
      'Average rate: overall rate across a time interval (secant line slope).',
      'Instantaneous rate: rate at one specific moment (tangent line slope).',
      'Reaction rate usually decreases over time as reactants are used up.',
    ],
  },

  'collision-theory': {
    slug: 'collision-theory',
    title: 'Collision Theory',
    difficulty: 'easy',
    simpleExplanation:
      'Collision theory states that for a chemical reaction to happen, particles must collide with ' +
      'enough energy (at least the activation energy) AND with the correct orientation — a collision ' +
      'missing either requirement will not produce a reaction.',
    whyItMatters:
      'Collision theory is the conceptual foundation for understanding every factor that affects ' +
      'reaction rate — concentration, temperature, surface area, and catalysts all work by changing ' +
      'either how often collisions happen, or what fraction of them are successful.',
    whyItWorks:
      "A chemical reaction requires bonds to break and new bonds to form, which needs energy input to " +
      "overcome — a collision without enough energy simply bounces the particles apart unchanged. And " +
      "even a high-energy collision will fail if the particles are not aligned in a way that lets the " +
      "right atoms come into contact to actually form new bonds.",
    realLifeExample: {
      title: 'Why shaking a mix of gases does not guarantee a reaction',
      scenario: 'Two gases can be mixed together and collide constantly, yet show no visible reaction at room temperature.',
      explanation: 'Most of the countless collisions between the gas molecules either lack enough energy to overcome the activation energy, or happen with the wrong orientation — only a tiny fraction of collisions are both energetic and correctly aligned enough to actually react.',
    },
    practiceQuestions: [
      {
        id: 'collision-theory-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'According to collision theory, what TWO conditions must a collision meet to result in a reaction?',
        options: [
          { id: 'a', text: 'High temperature and high pressure' },
          { id: 'b', text: 'Enough energy (at least the activation energy) and correct orientation' },
          { id: 'c', text: 'Large particle size and low concentration' },
          { id: 'd', text: 'A catalyst must be present' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what could make an otherwise energetic collision still fail to react.'],
        explanation: 'A successful reaction requires both sufficient collision energy (to overcome the activation energy barrier) AND the correct orientation, so the right atoms can actually form new bonds.',
      },
    ],
    commonMistake:
      "Assuming every collision between reactant particles causes a reaction — in reality, only a " +
      "small fraction of collisions have both enough energy and the right orientation; the vast " +
      "majority of collisions are simply unsuccessful and the particles bounce apart unchanged.",
    quickReview: [
      'Reactions need collisions with enough energy AND correct orientation.',
      'Most collisions fail to meet one or both requirements.',
      'Every rate-affecting factor works by changing collision frequency or success rate.',
    ],
  },

  'activation-energy': {
    slug: 'activation-energy',
    title: 'Activation Energy',
    difficulty: 'medium',
    simpleExplanation:
      'Activation energy (Ea) is the minimum energy that colliding particles must have for a reaction ' +
      'to occur — it is the energy "barrier" that must be overcome, even for reactions that release ' +
      'energy overall.',
    whyItMatters:
      "Activation energy explains why some exothermic reactions (like the combustion of wood) don't " +
      "happen spontaneously at room temperature, even though they release energy overall — the " +
      "reaction still needs an initial energy input (like a spark) to get started.",
    formulaSlug: 'arrhenius-equation',
    workedExample: {
      id: 'activation-energy-worked-1',
      title: "Compare how a catalyst affects a reaction's activation energy",
      problemStatement: 'A reaction has an activation energy of 75 kJ/mol without a catalyst. With a catalyst, the activation energy drops to 50 kJ/mol. Explain the effect on reaction rate.',
      steps: [
        { step: 1, instruction: 'Recall the role of activation energy.', explanation: 'A lower Ea means a larger fraction of collisions have enough energy to react.' },
        { step: 2, instruction: 'Apply this to the Arrhenius equation.', math: 'k = A·e^(−Ea/RT)', explanation: 'Since Ea appears with a negative sign in the exponent, a SMALLER Ea makes the exponent less negative, which makes k larger.' },
        { step: 3, instruction: 'State the conclusion.', explanation: 'The catalyst increases the rate constant k, so the reaction proceeds faster at the same temperature — without the catalyst being consumed.' },
      ],
      finalAnswer: 'Lowering Ea from 75 to 50 kJ/mol significantly increases the rate constant, speeding up the reaction.',
    },
    whyItWorks:
      "Even reactions that release energy overall need to first break some existing bonds before new, " +
      "stronger bonds can form — the activation energy is the energy needed to reach that unstable, " +
      "in-between arrangement (the transition state), after which the reaction can proceed downhill in " +
      "energy toward the products.",
    realLifeExample: {
      title: 'Why a match is needed to light a candle',
      scenario: "A candle doesn't spontaneously combust sitting on a table, even though burning wax releases a lot of energy.",
      explanation: "The combustion reaction has a significant activation energy — the heat from a lit match provides enough energy to get a small number of wax/oxygen collisions over that barrier, and the heat released by those reactions then supplies enough energy to sustain the reaction on its own.",
    },
    practiceQuestions: [
      {
        id: 'activation-energy-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why doesn\'t a highly exothermic reaction like combustion happen spontaneously at room temperature without a spark?',
        options: [
          { id: 'a', text: 'Exothermic reactions can never happen without a catalyst.' },
          { id: 'b', text: 'The reaction still has an activation energy barrier that must be overcome first, even though it releases energy overall.' },
          { id: 'c', text: 'Combustion is actually endothermic.' },
          { id: 'd', text: 'Oxygen does not react with anything at room temperature.' },
        ],
        correctOptionId: 'b',
        hints: ['ΔH (whether the reaction releases energy overall) and Ea (the barrier to starting) are two separate things.'],
        explanation: "A reaction's overall ΔH (whether it's exothermic or endothermic) and its activation energy (the barrier to getting started) are independent properties — combustion is strongly exothermic overall but still needs an initial energy input to overcome its activation energy.",
      },
    ],
    commonMistake:
      "Confusing activation energy with the overall enthalpy change (ΔH) of a reaction — Ea is always " +
      "positive (it's a barrier that must be climbed) regardless of whether the reaction is exothermic " +
      "or endothermic overall.",
    quickReview: [
      'Ea is the minimum energy needed for a collision to result in reaction.',
      'Even exothermic reactions have an activation energy barrier.',
      'Lowering Ea (e.g. with a catalyst) increases the reaction rate.',
    ],
  },

  'the-maxwell-boltzmann-distribution': {
    slug: 'the-maxwell-boltzmann-distribution',
    title: 'The Maxwell–Boltzmann Distribution',
    difficulty: 'hard',
    simpleExplanation:
      'The Maxwell–Boltzmann distribution is a graph showing the range of kinetic energies that ' +
      'particles in a gas or liquid have at a given temperature — most particles have a moderate energy, ' +
      'while a smaller number have very low or very high energy.',
    whyItMatters:
      'This distribution explains, visually and quantitatively, why only a fraction of particles can ' +
      'react at any moment — only particles in the high-energy tail of the distribution, beyond the ' +
      'activation energy, are capable of reacting when they collide.',
    whyItWorks:
      "Particles in a sample are constantly colliding and exchanging energy randomly, which naturally " +
      "spreads their kinetic energies into this characteristic asymmetric curve (a long, thin tail " +
      "toward high energies) — a statistical consequence of huge numbers of random particle collisions, " +
      "not something imposed on the system from outside.",
    realLifeExample: {
      title: 'Why raising the temperature speeds up a reaction so much',
      scenario: 'A relatively small increase in temperature (say, 10°C) can roughly double a reaction\'s rate.',
      explanation: "On the Maxwell–Boltzmann distribution, raising the temperature shifts and widens the whole curve toward higher energies — even a modest shift can dramatically increase the area under the curve beyond the activation energy, meaning far more particles now have enough energy to react.",
    },
    practiceQuestions: [
      {
        id: 'maxwell-boltzmann-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'On a Maxwell–Boltzmann distribution graph, what does the area under the curve to the right of the activation energy (Ea) represent?',
        options: [
          { id: 'a', text: 'The total number of particles in the sample' },
          { id: 'b', text: 'The fraction of particles with enough energy to react upon collision' },
          { id: 'c', text: 'The temperature of the sample' },
          { id: 'd', text: 'The activation energy itself' },
        ],
        correctOptionId: 'b',
        hints: ['The x-axis is kinetic energy, and Ea is a specific point on that axis.'],
        explanation: 'The area under the curve beyond Ea represents the proportion of particles with at least the activation energy — these are the only particles capable of reacting upon a correctly-oriented collision.',
      },
    ],
    commonMistake:
      "Assuming raising the temperature simply shifts the WHOLE distribution to the right by a fixed " +
      "amount — in reality, the curve also flattens and widens, and the fraction of particles beyond " +
      "Ea grows disproportionately faster than the average energy itself, which is why rate increases " +
      "so sharply with temperature.",
    quickReview: [
      'The distribution shows the spread of particle kinetic energies at a given temperature.',
      'Only particles beyond Ea (the shaded area under the tail) can react on collision.',
      'Raising temperature widens the curve, sharply increasing the fraction beyond Ea.',
    ],
  },

  'concentration-and-pressure-effects-on-rate': {
    slug: 'concentration-and-pressure-effects-on-rate',
    title: 'Concentration and Pressure',
    difficulty: 'medium',
    simpleExplanation:
      'Increasing the concentration of reactants in solution (or the pressure of reacting gases) packs ' +
      'more particles into the same volume, which increases how often they collide — and therefore ' +
      'increases the reaction rate.',
    whyItMatters:
      'This is one of the most direct, controllable ways to speed up or slow down a reaction in both ' +
      'industrial and laboratory settings, and directly follows from collision theory rather than ' +
      "being a separate, unrelated rule to memorize.",
    whyItWorks:
      "With more particles packed into the same volume, the average distance between particles " +
      "shrinks, which makes collisions between them more frequent — since reaction rate depends on the " +
      "number of successful collisions per second, more total collisions (at the same fraction of " +
      "successful ones) directly means a faster rate.",
    realLifeExample: {
      title: 'Pure oxygen speeds up combustion',
      scenario: 'A glowing splint bursts back into flame when placed in a test tube of pure oxygen, but not in ordinary air.',
      explanation: 'Pure oxygen has a much higher concentration of O₂ than air (which is only about 21% oxygen), so combustion reactions collide far more frequently and proceed dramatically faster — vividly demonstrating the effect of concentration on rate.',
    },
    practiceQuestions: [
      {
        id: 'concentration-pressure-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why does increasing the pressure of a gaseous reaction mixture increase its rate?',
        options: [
          { id: 'a', text: 'Higher pressure lowers the activation energy.' },
          { id: 'b', text: 'Higher pressure packs more gas particles into the same volume, increasing collision frequency.' },
          { id: 'c', text: 'Pressure has no effect on reaction rate.' },
          { id: 'd', text: 'Higher pressure changes the products of the reaction.' },
        ],
        correctOptionId: 'b',
        hints: ['Think of pressure as effectively increasing the concentration of a gas.'],
        explanation: 'Compressing a gas into a smaller volume (raising its pressure) increases the concentration of particles, which increases how often they collide — exactly the same mechanism as increasing concentration in a solution.',
      },
    ],
    commonMistake:
      "Thinking concentration changes the activation energy of a reaction — it does not; concentration " +
      "only affects how FREQUENTLY particles collide, not what fraction of collisions have enough " +
      "energy to succeed.",
    quickReview: [
      'Higher concentration/pressure → more frequent collisions → faster rate.',
      'This works by increasing collision frequency, not by lowering Ea.',
      'Pressure affects gas-phase reactions the same way concentration affects solutions.',
    ],
  },

  'temperature-effects-on-rate': {
    slug: 'temperature-effects-on-rate',
    title: 'Temperature',
    difficulty: 'medium',
    simpleExplanation:
      "Raising the temperature increases reaction rate for two reasons: particles move faster (so they " +
      "collide more often), and — more importantly — a much larger fraction of collisions now have " +
      "enough energy to overcome the activation energy.",
    whyItMatters:
      "Temperature is often the single most powerful lever for controlling reaction rate — a modest " +
      "temperature increase can double or triple a reaction's rate, far more dramatically than a " +
      "similar percentage increase in concentration.",
    formulaSlug: 'arrhenius-equation',
    workedExample: {
      id: 'temperature-rate-worked-1',
      title: "Estimate the effect of temperature using the 'rule of thumb'",
      problemStatement: 'A reaction at 20°C has a rate of 0.010 mol/(L·s). Using the common approximation that reaction rate roughly doubles for every 10°C rise, estimate the rate at 40°C.',
      steps: [
        { step: 1, instruction: 'Find how many 10°C increments occurred.', math: '(40 − 20) / 10 = 2', explanation: 'A rise of 20°C is two 10°C increments.' },
        { step: 2, instruction: 'Apply the doubling twice.', math: 'rate ≈ 0.010 × 2 × 2 = 0.010 × 4', explanation: 'Each 10°C rise roughly doubles the rate, so two rises roughly quadruple it.' },
        { step: 3, instruction: 'Calculate.', math: '0.010 × 4 = 0.040', explanation: 'Multiply through.' },
      ],
      finalAnswer: 'rate ≈ 0.040 mol/(L·s) at 40°C',
    },
    whyItWorks:
      'This is a direct consequence of the Maxwell–Boltzmann distribution: raising the temperature ' +
      'shifts the whole energy distribution toward higher energies, and because the activation energy ' +
      'cutoff is out in the tail of the distribution, even a modest temperature rise disproportionately ' +
      'increases the fraction of particles with enough energy to react.',
    realLifeExample: {
      title: 'Refrigeration slows food spoilage',
      scenario: 'Food spoils far more slowly in a refrigerator than left out at room temperature.',
      explanation: 'The chemical and biological reactions that cause spoilage have a real activation energy — cooling the food significantly reduces the fraction of molecules with enough energy to react, slowing spoilage dramatically even though the temperature drop is modest.',
    },
    practiceQuestions: [
      {
        id: 'temperature-rate-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A reaction at 10°C has a rate of 0.005 mol/(L·s). Using the "rate roughly doubles every 10°C" rule, estimate the rate at 30°C.',
        hints: ['(30 − 10)/10 = 2 increments of 10°C.', 'Double the rate twice: 0.005 × 2 × 2.'],
        correctAnswer: 0.02,
        tolerance: 0.002,
        unit: 'mol/(L·s)',
        explanation: 'Two 10°C increments each roughly double the rate: 0.005 × 2 × 2 = 0.02 mol/(L·s).',
      },
    ],
    commonMistake:
      'Treating the "doubles every 10°C" rule as an exact law — it is a rough approximation that works ' +
      'reasonably well for many reactions near room temperature, but the real relationship (given by ' +
      'the Arrhenius equation) depends on the specific activation energy of each reaction.',
    quickReview: [
      'Higher temperature increases both collision frequency AND the fraction of successful collisions.',
      'The second effect dominates — this is why rate is so sensitive to temperature.',
      'A common rough rule: rate roughly doubles for every 10°C rise.',
    ],
  },

  'surface-area-and-catalysts': {
    slug: 'surface-area-and-catalysts',
    title: 'Surface Area and Catalysts',
    difficulty: 'medium',
    simpleExplanation:
      'Increasing the surface area of a solid reactant exposes more particles to collisions, speeding ' +
      'up the reaction. A catalyst speeds up a reaction by providing an alternative reaction pathway ' +
      'with a lower activation energy, without being consumed itself.',
    whyItMatters:
      'These are two of the most practically important ways industries speed up reactions — grinding ' +
      'solids into powders and using catalysts (like the catalytic converter in a car) are everywhere ' +
      'in real chemical processes, from digestion to industrial manufacturing.',
    whyItWorks:
      'A solid reactant can only react at its exposed surface, where particles from the other reactant ' +
      'can actually reach it — breaking a solid into smaller pieces dramatically increases the total ' +
      'exposed surface area without changing its mass, exposing far more particles to potential ' +
      'collisions. A catalyst works completely differently: it offers a new step-by-step reaction ' +
      'route where each individual step has a lower activation energy than the uncatalyzed reaction, so ' +
      'far more collisions succeed at the same temperature — and because the catalyst is regenerated at ' +
      'the end of the cycle, it is never used up.',
    realLifeExample: {
      title: 'Catalytic converters in cars',
      scenario: "A car's catalytic converter uses platinum and palladium to convert toxic exhaust gases into safer ones almost instantly.",
      explanation: 'The metal catalysts provide an alternative reaction pathway with much lower activation energy for converting carbon monoxide and nitrogen oxides into carbon dioxide and nitrogen — without the catalyst, these reactions would be far too slow to clean the exhaust in real time.',
    },
    practiceQuestions: [
      {
        id: 'surface-area-catalyst-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Powdered magnesium reacts with acid much faster than a single magnesium strip of the same mass. Why?',
        options: [
          { id: 'a', text: 'Powdered magnesium has a different chemical formula.' },
          { id: 'b', text: 'The powder has far more exposed surface area for the acid to react with.' },
          { id: 'c', text: 'Powdered magnesium has a lower activation energy inherently.' },
          { id: 'd', text: 'The strip form of magnesium does not react with acid at all.' },
        ],
        correctOptionId: 'b',
        hints: ['Both samples have the same total mass — what is different about their shape?'],
        explanation: 'Grinding the same mass of magnesium into powder dramatically increases its total exposed surface area, exposing far more magnesium atoms to collisions with acid particles at any given moment.',
      },
      {
        id: 'surface-area-catalyst-pq-2',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is a catalyst not "used up" during a reaction, even though it participates in it?',
        options: [
          { id: 'a', text: 'A catalyst never actually reacts with anything.' },
          { id: 'b', text: 'The catalyst is regenerated at the end of the reaction cycle, ready to catalyze another reaction.' },
          { id: 'c', text: 'Catalysts are not real substances.' },
          { id: 'd', text: 'A catalyst only works once and then stops.' },
        ],
        correctOptionId: 'b',
        hints: ['A catalyst takes part in the reaction mechanism, but ends up chemically unchanged overall.'],
        explanation: 'A catalyst does take part in the reaction (often forming a temporary intermediate), but it is regenerated at the end of the catalytic cycle, so a small amount of catalyst can keep speeding up the same reaction indefinitely.',
      },
    ],
    commonMistake:
      "Thinking a catalyst changes the products of a reaction, or its overall enthalpy change (ΔH) — " +
      "a catalyst only changes the reaction's PATHWAY (and therefore its rate); the starting reactants, " +
      "final products, and overall ΔH stay exactly the same with or without a catalyst.",
    quickReview: [
      'More surface area → more particles exposed → faster reaction.',
      'A catalyst provides a lower-activation-energy pathway without being consumed.',
      'A catalyst changes rate but never changes the products or ΔH of a reaction.',
    ],
  },
};
