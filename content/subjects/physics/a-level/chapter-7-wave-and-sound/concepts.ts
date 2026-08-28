import type { Concept } from '@/types/content';

export const chapter7AWaveConcepts: Record<string, Concept> = {
  'describing-wave-motion-a-level': {
    slug: 'describing-wave-motion-a-level',
    title: 'Describing Wave Motion',
    difficulty: 'easy',
    simpleExplanation:
      'A wave is a disturbance that carries energy from one place to another WITHOUT carrying ' +
      'matter along with it. As a wave passes, the particles of the medium (or, for light, the ' +
      'electric and magnetic fields) oscillate about a fixed position — they do not travel along ' +
      'with the wave themselves.',
    whyItMatters:
      'This is the single most important idea about waves: a floating duck bobs up and down as a ' +
      'water wave passes underneath it, but is not carried along with the wave — the wave transports ' +
      'energy, not matter.',
    workedExample: {
      id: 'wave-motion-worked-1',
      title: "Explain why a cork on water doesn't travel with the wave",
      problemStatement: 'A cork floats on a pond. A wave passes by, and the cork bobs up and down but stays in roughly the same place. Explain this observation.',
      steps: [
        { step: 1, instruction: 'Identify what the wave actually transports.', explanation: 'A water wave transports energy from where it was created to wherever it travels.' },
        { step: 2, instruction: 'Consider what happens to the water particles (and the cork) themselves.', explanation: 'Each water particle (and the cork resting on the surface) simply oscillates up and down about a fixed position as the wave energy passes through.' },
        { step: 3, instruction: 'Conclude.', explanation: 'The cork stays roughly in place because it is the ENERGY that travels across the pond, not the water (or the cork) itself.' },
      ],
      finalAnswer: 'The cork bobs in place because the wave transports energy, not matter — the water beneath it simply oscillates as the energy passes through.',
    },
    whyItWorks:
      "This behavior follows directly from how waves are generated — a disturbance at one point " +
      "causes each neighboring particle to oscillate in turn, passing the disturbance (and its " +
      'energy) along the medium, without any particle needing to travel the whole distance itself.',
    realLifeExample: {
      title: 'The "stadium wave" at a sports event',
      scenario: 'Fans in a stadium stand up and sit down in sequence to create a "wave" that travels around the stadium.',
      explanation: 'Each fan (like each particle in a real wave) only moves up and down in place — no single fan travels around the stadium, yet the wave pattern clearly moves all the way around, exactly like a real physical wave transporting energy without transporting matter.',
    },
    practiceQuestions: [
      {
        id: 'wave-motion-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What does a wave actually transport from one place to another?',
        hints: ['Think about the cork/duck example — it does not travel with the wave.'],
        options: [
          { id: 'a', text: 'Matter' },
          { id: 'b', text: 'Energy' },
          { id: 'c', text: 'Both matter and energy equally' },
          { id: 'd', text: 'Neither — nothing is transported' },
        ],
        correctOptionId: 'b',
        explanation: 'A wave transports energy from one place to another; the particles of the medium simply oscillate about a fixed position, without net matter transport.',
      },
    ],
    commonMistake:
      'Assuming particles physically travel along with the wave from source to destination — in a ' +
      'true wave, particles only oscillate about a fixed position; only the energy (and the wave ' +
      'pattern) actually propagates.',
    quickReview: [
      'A wave is a disturbance that transports energy, not matter.',
      'Particles in the medium oscillate about a fixed position as the wave passes.',
      "This is why a floating object bobs in place rather than being carried along by a wave.",
    ],
  },

  'transverse-and-longitudinal-waves-a-level': {
    slug: 'transverse-and-longitudinal-waves-a-level',
    title: 'Transverse and Longitudinal Waves',
    difficulty: 'medium',
    simpleExplanation:
      'In a transverse wave, particles oscillate PERPENDICULAR (at right angles) to the direction ' +
      'the wave travels — like light waves and water waves. In a longitudinal wave, particles ' +
      'oscillate PARALLEL to the direction of travel, creating alternating regions of compression ' +
      '(particles bunched together) and rarefaction (particles spread apart) — like sound waves.',
    whyItMatters:
      'This classification determines how a wave behaves and interacts with materials — for ' +
      'example, transverse waves can be polarized (restricted to oscillate in only one plane), ' +
      "while longitudinal waves like sound cannot, because there's no perpendicular direction to restrict.",
    workedExample: {
      id: 'transverse-longitudinal-worked-1',
      title: 'Classify waves as transverse or longitudinal',
      problemStatement: 'Classify each of the following as transverse or longitudinal: (a) a wave on a shaken rope, (b) a sound wave in air, (c) light.',
      steps: [
        { step: 1, instruction: 'Consider the shaken rope.', explanation: 'The rope moves up and down (perpendicular) while the wave travels along the rope — this is transverse.' },
        { step: 2, instruction: 'Consider the sound wave.', explanation: 'Air particles vibrate back and forth ALONG the same direction the sound travels, creating compressions and rarefactions — this is longitudinal.' },
        { step: 3, instruction: 'Consider light.', explanation: 'Light consists of oscillating electric and magnetic fields perpendicular to its direction of travel — this is transverse.' },
      ],
      finalAnswer: '(a) Transverse, (b) Longitudinal, (c) Transverse.',
    },
    whyItWorks:
      "The classification comes directly from comparing the direction particles oscillate against " +
      'the direction the wave itself moves — perpendicular means transverse, parallel means longitudinal, ' +
      'with no other options possible for a simple mechanical or electromagnetic wave.',
    realLifeExample: {
      title: 'Polarized sunglasses',
      scenario: 'Polarized sunglasses block glare by only letting through light waves oscillating in one particular plane.',
      explanation: 'This is only possible because light is a transverse wave (it has a perpendicular direction to restrict) — a longitudinal wave like sound has no equivalent "polarization" effect, since it only oscillates along its direction of travel.',
    },
    practiceQuestions: [
      {
        id: 'transverse-longitudinal-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'In a longitudinal wave, how do the particles of the medium move relative to the direction of the wave?',
        hints: ['Longitudinal comes from "along the length."'],
        options: [
          { id: 'a', text: 'Perpendicular to the direction of travel' },
          { id: 'b', text: 'Parallel to the direction of travel' },
          { id: 'c', text: 'In a circle around the direction of travel' },
          { id: 'd', text: 'The particles do not move at all' },
        ],
        correctOptionId: 'b',
        explanation: 'In a longitudinal wave, particles oscillate parallel to (along) the direction the wave travels, creating compressions and rarefactions.',
      },
    ],
    commonMistake:
      'Assuming all waves are transverse (like the easily-visualized water wave) — sound, the most ' +
      'common everyday wave, is actually longitudinal, which surprises many students at first.',
    quickReview: [
      'Transverse: particle oscillation is perpendicular to wave travel (e.g. light, water waves).',
      'Longitudinal: particle oscillation is parallel to wave travel (e.g. sound), creating compressions and rarefactions.',
      'Only transverse waves can be polarized.',
    ],
  },

  'wave-characteristics-a-level': {
    slug: 'wave-characteristics-a-level',
    title: 'Characteristics of Waves',
    difficulty: 'medium',
    simpleExplanation:
      'Every wave can be described by a few key characteristics: amplitude (the maximum ' +
      'displacement from the rest position, related to the energy carried), wavelength λ (the ' +
      'length of one complete wave cycle), frequency f (how many complete waves pass a point each ' +
      'second, in hertz), and period T (the time for one complete wave, T = 1/f). Wave speed ties ' +
      'these together: v = fλ.',
    whyItMatters:
      'These characteristics let you fully describe and compare any wave — from a gentle ripple to ' +
      'a radio signal — using just a few numbers.',
    formulaSlug: 'wave-speed-equation-formula-a-level',
    workedExample: {
      id: 'wave-characteristics-worked-1',
      title: "Find a wave's speed",
      problemStatement: 'A wave has a frequency of 50 Hz and a wavelength of 4 m. Find its speed.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'v = fλ', explanation: 'Wave speed equals frequency times wavelength.' },
        { step: 2, instruction: 'Substitute the values.', math: 'v = 50 × 4', explanation: 'f = 50 Hz, λ = 4 m.' },
        { step: 3, instruction: 'Calculate.', math: 'v = 200', explanation: '50 × 4 = 200.' },
      ],
      finalAnswer: 'v = 200 m/s',
    },
    whyItWorks:
      'Frequency tells you how many complete wavelengths pass a point every second; multiplying by ' +
      'the length of each of those wavelengths gives exactly the total distance the wave pattern ' +
      'covers each second — which is the definition of wave speed.',
    realLifeExample: {
      title: 'Radio stations',
      scenario: 'A radio station broadcasts at a listed frequency, like "98.5 FM."',
      explanation: 'Since radio waves all travel at the speed of light (a fixed, known speed), knowing the frequency lets you calculate the wavelength (and vice versa) using v = fλ — this is exactly how radio receivers are tuned.',
    },
    practiceQuestions: [
      {
        id: 'wave-characteristics-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A wave has a wavelength of 2.5 m and travels at 15 m/s. Find its frequency.',
        hints: ['Rearrange v = fλ to f = v/λ.', '15/2.5.'],
        correctAnswer: 6,
        unit: 'Hz',
        explanation: 'f = v/λ = 15/2.5 = 6 Hz.',
      },
      {
        id: 'wave-characteristics-pq-2',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A wave has a frequency of 20 Hz. Find its period.',
        hints: ['T = 1/f.', '1/20.'],
        correctAnswer: 0.05,
        unit: 's',
        explanation: 'T = 1/20 = 0.05 s.',
      },
    ],
    commonMistake:
      'Confusing frequency and period — a HIGH frequency means a SHORT period (T = 1/f), since more ' +
      'waves passing per second means each individual wave takes less time.',
    quickReview: [
      'v = fλ; T = 1/f',
      'Amplitude relates to the energy a wave carries.',
      'Wavelength is the length of one complete wave cycle.',
    ],
  },

  'wave-graphs-a-level': {
    slug: 'wave-graphs-a-level',
    title: 'Graphical Representation of a Wave',
    difficulty: 'medium',
    simpleExplanation:
      'A wave can be shown on a graph two ways: a displacement-DISTANCE graph, which is like a ' +
      "snapshot of the wave at one instant (showing wavelength directly), or a displacement-TIME " +
      'graph, which shows how one single point moves over time (showing period directly). Both ' +
      'types of graph show amplitude as the height of the peaks.',
    whyItMatters:
      'Being able to read a wave graph correctly — and knowing which type you are looking at — is ' +
      'essential, since a displacement-distance graph and a displacement-time graph can look ' +
      'identical but represent completely different information.',
    diagram: {
      id: 'wave-graph-diagram',
      title: 'A transverse wave shown as a displacement graph',
      altText: 'A sine curve showing a wave pattern, with peaks and troughs representing the maximum positive and negative displacement',
      component: 'FunctionGraph',
      interactive: false,
      props: {
        kind: 'custom',
        fn: (x: number) => Math.sin(x),
        domain: [0, 12.56],
        range: [-1.5, 1.5],
        xLabel: 'distance (or time)',
        yLabel: 'displacement',
      },
    },
    workedExample: {
      id: 'wave-graph-worked-1',
      title: 'Read wavelength and amplitude off a displacement-distance graph',
      problemStatement: 'A displacement-distance graph shows a wave with peaks at 0 m, 4 m, and 8 m, and a maximum height (above the rest position) of 3 cm. Find the wavelength and amplitude.',
      steps: [
        { step: 1, instruction: 'Find the distance between two consecutive peaks.', math: '4 − 0 = 4', explanation: 'This distance between successive peaks is exactly one wavelength.' },
        { step: 2, instruction: 'Read the maximum height directly as the amplitude.', explanation: 'The amplitude is the maximum displacement from the rest (undisturbed) position — here, 3 cm.' },
      ],
      finalAnswer: 'Wavelength = 4 m; Amplitude = 3 cm',
    },
    whyItWorks:
      'A displacement-distance graph literally plots the shape of the wave at a frozen instant, so ' +
      'the physical distance between two identical points (like consecutive peaks) directly IS the wavelength, ' +
      'and the peak height directly IS the amplitude — no calculation needed, just careful reading.',
    realLifeExample: {
      title: 'An oscilloscope trace of a sound wave',
      scenario: 'An oscilloscope connected to a microphone displays a sound wave as a displacement-TIME graph.',
      explanation: "Reading the time between successive peaks on this screen gives the sound's period directly, from which frequency (f = 1/T) can be found — exactly how sound engineers analyze audio signals.",
    },
    practiceQuestions: [
      {
        id: 'wave-graph-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A displacement-TIME graph (for a single point on a wave) shows successive peaks 0.02 s apart. What does this 0.02 s represent?',
        hints: ['A displacement-time graph tracks one point over time.'],
        options: [
          { id: 'a', text: 'The wavelength' },
          { id: 'b', text: 'The amplitude' },
          { id: 'c', text: 'The period' },
          { id: 'd', text: 'The wave speed' },
        ],
        correctOptionId: 'c',
        explanation: 'On a displacement-time graph, the time between successive peaks (for one fixed point) is the period of the wave.',
      },
    ],
    commonMistake:
      "Confusing a displacement-distance graph with a displacement-time graph — reading a " +
      "wavelength off a displacement-TIME graph (or a period off a displacement-DISTANCE graph) " +
      'gives a value with completely the wrong meaning and units.',
    quickReview: [
      'Displacement-distance graph: a snapshot in space, shows wavelength.',
      'Displacement-time graph: tracks one point over time, shows period.',
      'Both types show amplitude as the peak height.',
    ],
  },

  'wave-reflection-refraction-diffraction-a-level': {
    slug: 'wave-reflection-refraction-diffraction-a-level',
    title: 'Reflection, Refraction and Diffraction of Waves',
    difficulty: 'medium',
    simpleExplanation:
      'Reflection happens when a wave bounces off a boundary, obeying the law of reflection (angle ' +
      'of incidence equals angle of reflection). Refraction happens when a wave changes speed ' +
      '(and usually direction) crossing into a different medium. Diffraction happens when a wave ' +
      'spreads out after passing through a gap or around an obstacle — this spreading is most ' +
      'noticeable when the gap is similar in size to the wavelength.',
    whyItMatters:
      'These three behaviors apply to every kind of wave — water, sound, and light — which is why ' +
      'the same underlying physics explains echoes, mirages, and why you can hear around a corner ' +
      'but usually cannot see around one.',
    workedExample: {
      id: 'wave-behaviour-worked-1',
      title: 'Explain why sound diffracts around a corner more than light',
      problemStatement: 'You can often hear someone talking around a corner, even though you cannot see them. Explain why, in terms of diffraction.',
      steps: [
        { step: 1, instruction: 'Recall when diffraction is most noticeable.', explanation: 'Diffraction is most significant when the gap or obstacle is a similar size to the wavelength.' },
        { step: 2, instruction: 'Compare the wavelengths of sound and light.', explanation: 'Sound wavelengths (roughly centimetres to metres) are comparable to the size of a doorway or corner; light wavelengths (a few hundred nanometres) are vastly smaller.' },
        { step: 3, instruction: 'Conclude.', explanation: 'Because sound\'s wavelength is comparable to everyday gaps, it diffracts strongly around corners; light\'s far tinier wavelength means it diffracts negligibly around the same corner, so it travels in what looks like a straight line.' },
      ],
      finalAnswer: 'Sound diffracts strongly around corners because its wavelength is comparable to everyday gap sizes, while light\'s much smaller wavelength diffracts negligibly by comparison.',
    },
    whyItWorks:
      'Diffraction is a direct consequence of every point on a wavefront acting as a source of new, ' +
      "spreading wavelets (Huygens' principle) — when a gap is narrow compared to the wavelength, " +
      "this spreading effect dominates and is easily visible; when the gap is huge compared to the " +
      'wavelength, the spreading is there but too small to notice.',
    realLifeExample: {
      title: 'Radio waves reaching behind hills',
      scenario: 'Long-wavelength radio (AM) broadcasts can often be received behind hills or buildings, while short-wavelength FM or WiFi signals struggle with the same obstacle.',
      explanation: "AM radio's much longer wavelength diffracts more strongly around large obstacles, letting the signal reach places a shorter-wavelength (less diffracting) signal cannot.",
    },
    practiceQuestions: [
      {
        id: 'wave-behaviour-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A wave enters a new medium where it travels more slowly. What effect is this an example of?',
        hints: ['This is about a CHANGE IN SPEED, usually with a change in direction.'],
        options: [
          { id: 'a', text: 'Reflection' },
          { id: 'b', text: 'Refraction' },
          { id: 'c', text: 'Diffraction' },
          { id: 'd', text: 'Absorption' },
        ],
        correctOptionId: 'b',
        explanation: 'A change of speed (and usually direction) as a wave crosses into a new medium is refraction.',
      },
    ],
    commonMistake:
      'Confusing diffraction (spreading around obstacles/through gaps) with refraction (bending due ' +
      'to a speed change entering a new medium) — they are different effects with different causes, ' +
      'even though both can bend a wave\'s direction.',
    quickReview: [
      'Reflection: angle of incidence = angle of reflection.',
      'Refraction: change of speed (and usually direction) entering a new medium.',
      'Diffraction: spreading through gaps/around obstacles, strongest when the gap is comparable to the wavelength.',
    ],
  },

  'sound-waves-a-level': {
    slug: 'sound-waves-a-level',
    title: 'Sound Waves',
    difficulty: 'easy',
    simpleExplanation:
      'Sound is a longitudinal wave created by a vibrating source, which pushes and pulls the ' +
      'particles of a medium (air, water, or a solid) into alternating compressions and ' +
      'rarefactions. Sound needs a medium to travel through — unlike light, it CANNOT travel ' +
      'through a vacuum, since there are no particles there to vibrate.',
    whyItMatters:
      'Understanding sound as a longitudinal pressure wave explains everything from why sound ' +
      'travels faster in solids than in air, to why astronauts cannot hear each other by shouting ' +
      'directly across the vacuum of space.',
    workedExample: {
      id: 'sound-waves-worked-1',
      title: 'Explain why sound cannot travel through a vacuum',
      problemStatement: 'In science-fiction movies, explosions in space are often shown (unrealistically) with a loud bang. Explain, physically, why this could not really be heard.',
      steps: [
        { step: 1, instruction: 'Recall what a sound wave actually is.', explanation: 'Sound is a series of vibrations passed from particle to particle in a medium — compressions and rarefactions of matter.' },
        { step: 2, instruction: 'Consider the conditions in space.', explanation: 'The vacuum of space has (essentially) no particles at all — nothing for the vibration to be passed through.' },
        { step: 3, instruction: 'Conclude.', explanation: 'With no medium and no particles to vibrate, sound has nothing to travel through, so a real explosion in space would be completely silent to a distant observer.' },
      ],
      finalAnswer: 'Sound cannot travel through the vacuum of space because there is no medium (no particles) for the vibration to pass through.',
    },
    whyItWorks:
      "Since sound propagates by each particle physically pushing on its neighbor, removing all the " +
      "particles (a vacuum) removes the very mechanism sound relies on to travel — there is simply " +
      'nothing left to carry the vibration onward.',
    realLifeExample: {
      title: 'Sound travels faster in solids than in air',
      scenario: 'Putting an ear to a railway track can let you hear an approaching train before you can hear it through the air.',
      explanation: "In a solid, particles are packed much more tightly together than in air, so vibrations pass from particle to particle much faster — sound genuinely travels faster through solids than through air.",
    },
    practiceQuestions: [
      {
        id: 'sound-waves-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why can sound not travel through the vacuum of space?',
        hints: ['Sound needs particles to push against.'],
        options: [
          { id: 'a', text: 'Sound is a transverse wave and space only supports longitudinal waves' },
          { id: 'b', text: 'There are no particles in a vacuum to carry the vibration' },
          { id: 'c', text: 'Sound travels too fast for a vacuum' },
          { id: 'd', text: 'Space is too cold for sound to travel' },
        ],
        correctOptionId: 'b',
        explanation: 'Sound needs a medium (matter) to travel through, since it propagates by particles pushing on their neighbors — a vacuum has no particles to do this.',
      },
    ],
    commonMistake:
      'Confusing sound with light or radio waves — light and radio are electromagnetic waves that ' +
      'travel fine through a vacuum, but sound is a mechanical (longitudinal) wave that absolutely ' +
      'requires a medium.',
    quickReview: [
      'Sound is a longitudinal wave: compressions and rarefactions.',
      'Sound needs a medium — it cannot travel through a vacuum.',
      'Sound travels fastest in solids, slower in liquids, slowest in gases.',
    ],
  },

  'speed-of-sound-a-level': {
    slug: 'speed-of-sound-a-level',
    title: 'The Speed of Sound',
    difficulty: 'medium',
    simpleExplanation:
      'The speed of sound depends on the medium it travels through — about 340 m/s in air at room ' +
      'temperature, faster in liquids, and faster still in solids. The time delay of an echo can be ' +
      'used to measure distance: since the sound travels to a surface AND back before the echo is ' +
      'heard, d = vt/2.',
    whyItMatters:
      "Measuring distance using echoes is the basis of sonar (used by ships and submarines) and " +
      "how bats and dolphins navigate using echolocation.",
    formulaSlug: 'echo-distance-formula-a-level',
    workedExample: {
      id: 'speed-sound-worked-1',
      title: 'Find the distance to a cliff using an echo',
      problemStatement: 'A person shouts toward a cliff and hears the echo 3 s later. Using the speed of sound in air as 340 m/s, find the distance to the cliff.',
      steps: [
        { step: 1, instruction: 'Write the formula.', math: 'd = vt/2', explanation: 'The total time covers the round trip, so it must be divided by 2 to get the one-way distance.' },
        { step: 2, instruction: 'Substitute the values.', math: 'd = (340 × 3) / 2', explanation: 'v = 340 m/s, t = 3 s.' },
        { step: 3, instruction: 'Calculate.', math: 'd = 1020 / 2 = 510', explanation: '340 × 3 = 1020; 1020 ÷ 2 = 510.' },
      ],
      finalAnswer: 'd = 510 m',
    },
    whyItWorks:
      'The measured time t is for the ENTIRE round trip — sound travelling to the cliff, then back ' +
      "again — so the actual one-way distance is only covered in half that time, which is exactly " +
      'why the formula divides vt by 2.',
    realLifeExample: {
      title: 'Sonar on ships',
      scenario: 'A ship uses sonar to measure the depth of the sea floor beneath it.',
      explanation: 'The ship sends a sound pulse downward and times how long it takes for the echo to return from the sea floor, then uses exactly this echo-distance formula (with the speed of sound in water) to calculate the depth.',
    },
    practiceQuestions: [
      {
        id: 'speed-sound-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A sonar pulse sent from a ship returns as an echo after 0.8 s. Using the speed of sound in water as 1500 m/s, find the depth of the sea floor.',
        hints: ['d = vt/2.', '(1500 × 0.8) / 2.'],
        correctAnswer: 600,
        unit: 'm',
        explanation: 'd = (1500×0.8)/2 = 1200/2 = 600 m.',
      },
    ],
    commonMistake:
      'Forgetting to divide by 2 — using the full time t directly (instead of t/2, or equivalently ' +
      'dividing the final answer by 2) gives a distance TWICE too large, since the sound travelled the ' +
      'distance there and back.',
    quickReview: [
      'd = vt/2 for an echo (round-trip distance).',
      'Speed of sound in air ≈ 340 m/s; faster in liquids and solids.',
      'This is the basis of sonar and echolocation.',
    ],
  },
};
