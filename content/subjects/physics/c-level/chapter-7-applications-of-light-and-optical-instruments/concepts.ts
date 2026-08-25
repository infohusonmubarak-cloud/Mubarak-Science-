import type { Concept } from '@/types/content';

// Full concept bodies for Chapter 7 — Applications of Light and Optical
// Instruments. Matches the textbook's section list: the camera; the
// human eye; the compound microscope; the telescope; the laser; fibre
// optics; the spectrometer; photometry.
export const chapter7COpticsConcepts: Record<string, Concept> = {
  'the-camera': {
    slug: 'the-camera',
    title: 'The Camera',
    difficulty: 'medium',
    simpleExplanation:
      'A camera uses a converging lens to focus light from an object onto a light-sensitive sensor (or film), ' +
      'forming a real, inverted image — exactly as predicted by the thin lens equation, 1/f=1/v+1/u.',
    whyItMatters:
      "Understanding how a camera's lens forms an image is the foundation for every other optical instrument " +
      'in this chapter — the eye, microscope, and telescope all use the same lens equation in different arrangements.',
    diagram: {
      id: 'camera-ray-diagram',
      title: "A camera lens forming a real, inverted image on its sensor",
      altText: 'An object on the left with two light rays passing through a converging lens, meeting again on the right to form a smaller, inverted image on the sensor',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-4, 0], to: [3, 0], dashed: true },
          { from: [0, -1.5], to: [0, 1.5], label: 'Lens', labelDx: 0, labelDy: -18 },
          { from: [-3, 1], to: [2, -0.67] },
          { from: [-3, 1], to: [0, 1] },
          { from: [0, 1], to: [2, -0.67] },
        ],
        points: [
          { x: -3, y: 0, label: 'Object', labelDx: 0, labelDy: 16 },
          { x: 2, y: 0, label: 'Image (sensor)', labelDx: 0, labelDy: 16 },
        ],
      },
    },
    formulaSlug: 'camera-lens-formula',
    workedExample: {
      id: 'camera-worked-1',
      title: 'Find where a camera lens focuses an image',
      problemStatement: 'A camera lens has a focal length of 0.05 m (50 mm). It photographs an object 3 m away. Find the image distance behind the lens.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'f=0.05 m,  u=3 m', explanation: 'Focal length and object distance.' },
        { step: 2, instruction: 'Rearrange the lens equation to solve for v.', math: '1/v = 1/f − 1/u = 1/0.05 − 1/3', explanation: 'Subtract the reciprocal of the object distance from the reciprocal of the focal length.' },
        { step: 3, instruction: 'Compute the right-hand side.', math: '1/v = 20 − 0.333 = 19.667', explanation: '1/0.05=20 and 1/3≈0.333.' },
        { step: 4, instruction: 'Solve for v.', math: 'v = 1/19.667 ≈ 0.0508 m', explanation: 'Take the reciprocal of the result.' },
      ],
      finalAnswer: 'v ≈ 0.0508 m (about 50.8 mm behind the lens).',
    },
    whyItWorks:
      'Every ray leaving a point on the object and passing through a converging lens is bent so that all such ' +
      'rays reconverge at a single point — the image point — and the lens equation is exactly the ' +
      'mathematical statement of where that convergence happens, derived from the geometry of light bending at the lens.',
    realLifeExample: {
      title: 'Autofocus adjusting a camera lens',
      scenario: "A camera's autofocus system physically moves the lens slightly closer to or farther from the sensor as the photographer changes what they are photographing.",
      explanation: 'This is the camera solving the lens equation in real time — moving the lens to the correct ' +
        'v for whatever object distance u it detects, keeping the image sharply focused.',
    },
    practiceQuestions: [
      {
        id: 'camera-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A camera lens (f=0.04 m) photographs an object 2 m away. Find the image distance, rounded to 4 decimal places.',
        hints: ['1/v = 1/f − 1/u.'],
        correctAnswer: 0.0408,
        tolerance: 0.0005,
        explanation: '1/v = 1/0.04 − 1/2 = 25 − 0.5 = 24.5. v = 1/24.5 ≈ 0.0408 m.',
      },
    ],
    commonMistake:
      'Forgetting that the image formed on a camera sensor is INVERTED — the lens equation gives the correct ' +
      'distance, but the image is upside down (which the camera\'s software or the eye/brain corrects for afterward).',
    quickReview: [
      '1/f = 1/v + 1/u — the thin lens equation.',
      'Forms a real, inverted image on the sensor.',
      'The foundation for every optical instrument in this chapter.',
    ],
  },

  'the-human-eye': {
    slug: 'the-human-eye',
    title: 'The Human Eye',
    difficulty: 'medium',
    simpleExplanation:
      "The eye's cornea and lens together act as a single converging lens, focusing light onto the retina. " +
      "Common defects — myopia (near-sightedness) and hyperopia (far-sightedness) — happen when the eye's " +
      'natural focusing power is slightly wrong, corrected with an external lens of power P=1/f.',
    whyItMatters:
      "Understanding the eye as an optical instrument explains exactly why corrective lenses (glasses or " +
      "contacts) work, and connects biology directly to the same lens equation used for cameras and telescopes.",
    diagram: {
      id: 'eye-ray-diagram',
      title: "The eye's lens forming a real, inverted image on the retina",
      altText: 'An object on the left with two light rays passing through the eye\'s lens, converging on the right to form an inverted image on the retina',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-4, 0], to: [3, 0], dashed: true },
          { from: [0, -1.5], to: [0, 1.5], label: 'Cornea + lens', labelDx: 0, labelDy: -18 },
          { from: [-3, 1], to: [2, -0.5] },
          { from: [-3, 1], to: [0, 1] },
          { from: [0, 1], to: [2, -0.5] },
        ],
        points: [
          { x: -3, y: 0, label: 'Object', labelDx: 0, labelDy: 16 },
          { x: 2, y: 0, label: 'Retina', labelDx: 0, labelDy: 16 },
        ],
      },
    },
    formulaSlug: 'eye-correction-formula',
    workedExample: {
      id: 'eye-worked-1',
      title: "Find the power of a corrective lens for myopia",
      problemStatement: "A myopic (near-sighted) person's far point is 2 m — the farthest distance they can see clearly, instead of infinity. Find the power of the corrective lens needed.",
      steps: [
        { step: 1, instruction: "Write down the eye's far point.", math: 'far point = 2 m', explanation: 'A diverging lens must make distant objects appear to be at this closer distance.' },
        { step: 2, instruction: 'Apply the corrective lens power formula.', math: 'P = −1/f = −1/2', explanation: "The lens's focal length equals the far point distance, with a negative sign for a diverging lens." },
        { step: 3, instruction: 'Compute the result.', math: 'P = −0.5 D', explanation: 'A diverging lens of power −0.5 diopters corrects this myopia.' },
      ],
      finalAnswer: 'P = −0.5 D.',
    },
    whyItWorks:
      "A myopic eye focuses light from infinity in FRONT of the retina (too much focusing power). A diverging " +
      "lens spreads incoming light out slightly before it reaches the eye, effectively making a distant object " +
      "behave — for the eye's own lens — like a closer one that the eye can already focus correctly.",
    realLifeExample: {
      title: 'Why reading glasses have the opposite curve from myopia glasses',
      scenario: "Reading glasses (for hyperopia or age-related presbyopia) use converging lenses, while myopia glasses use diverging lenses.",
      explanation: 'Hyperopia is the OPPOSITE problem — too little focusing power — so it needs a converging lens ' +
        'to add power, while myopia needs a diverging lens to subtract power; the sign of P in this formula reflects that difference.',
    },
    practiceQuestions: [
      {
        id: 'eye-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: "A myopic person's far point is 4 m. Find the power of the corrective lens needed.",
        hints: ['P = −1/f, with f equal to the far point.'],
        correctAnswer: -0.25,
        explanation: 'P = −1/4 = −0.25 D.',
      },
    ],
    commonMistake:
      'Mixing up which sign of lens corrects which defect — myopia (seeing distant objects poorly) needs a ' +
      'NEGATIVE (diverging) lens power, while hyperopia (seeing near objects poorly) needs a POSITIVE (converging) lens power.',
    quickReview: [
      'P = 1/f, in diopters.',
      'Myopia: diverging lens (negative P). Hyperopia: converging lens (positive P).',
      "The eye's cornea and lens act together as a single converging lens onto the retina.",
    ],
  },

  'compound-microscope': {
    slug: 'compound-microscope',
    title: 'The Compound Microscope',
    difficulty: 'hard',
    simpleExplanation:
      'A compound microscope uses two converging lenses — an objective lens (close to the tiny object) and an ' +
      'eyepiece lens (close to the eye) — to magnify a small object far more than a single lens could alone.',
    whyItMatters:
      'Combining two lenses in sequence, each magnifying the image the previous one produced, is the key trick ' +
      'behind every high-magnification optical instrument — the same principle scales up to research-grade microscopes.',
    diagram: {
      id: 'microscope-diagram',
      title: 'A simplified two-lens layout of a compound microscope',
      altText: 'Two vertical lines representing the objective lens on the left and the eyepiece lens on the right, separated by the tube length, both centered on the same optical axis',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-0.5, 0], to: [3.5, 0], dashed: true },
          { from: [0, -1], to: [0, 1], label: 'Objective (f₀)', labelDx: 0, labelDy: -14 },
          { from: [3, -1.3], to: [3, 1.3], label: 'Eyepiece (fₑ)', labelDx: 0, labelDy: -14 },
        ],
        points: [{ x: -0.3, y: 0, label: 'Object', labelDx: -14, labelDy: 12 }],
      },
    },
    formulaSlug: 'microscope-magnification-formula',
    workedExample: {
      id: 'microscope-worked-1',
      title: "Find a compound microscope's magnifying power",
      problemStatement: 'A microscope has a tube length of 0.18 m, an objective lens of focal length 0.005 m, and an eyepiece of focal length 0.025 m. Find its magnifying power (using D=0.25 m).',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'L=0.18 m,  f₀=0.005 m,  fₑ=0.025 m,  D=0.25 m', explanation: 'All four quantities needed for the formula.' },
        { step: 2, instruction: "Compute the objective's contribution.", math: 'L/f₀ = 0.18/0.005 = 36', explanation: 'The objective magnifies by this factor.' },
        { step: 3, instruction: "Compute the eyepiece's contribution.", math: 'D/fₑ = 0.25/0.025 = 10', explanation: 'The eyepiece magnifies the already-magnified image by this further factor.' },
        { step: 4, instruction: 'Multiply the two factors.', math: 'M = 36 × 10 = 360', explanation: 'Total magnifying power is the product of both stages.' },
      ],
      finalAnswer: 'M = 360.',
    },
    whyItWorks:
      "The objective lens forms an enlarged real image of the tiny object; the eyepiece lens then acts like a " +
      "simple magnifying glass on THAT already-enlarged image — magnifying it further — so the two " +
      "magnification factors multiply together rather than simply adding.",
    realLifeExample: {
      title: 'Examining a blood sample under a lab microscope',
      scenario: 'A lab technician examines blood cells (only a few micrometres across) using a compound microscope with interchangeable objective lenses.',
      explanation: 'Switching to an objective lens with a shorter focal length increases L/f₀, boosting the ' +
        'total magnification — exactly why microscopes offer multiple objective lenses for different levels of detail.',
    },
    practiceQuestions: [
      {
        id: 'microscope-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A microscope has L=0.16 m, f₀=0.004 m, and fₑ=0.02 m. Find its magnifying power (D=0.25 m).',
        hints: ['M ≈ (L/f₀)(D/fₑ).'],
        correctAnswer: 500,
        explanation: '(0.16/0.004) = 40. (0.25/0.02) = 12.5. M = 40 × 12.5 = 500.',
      },
    ],
    commonMistake:
      "Adding the two magnification factors instead of multiplying them — each lens magnifies the image the " +
      "previous lens already produced, so their effects COMPOUND (multiply), not simply add.",
    quickReview: [
      'M ≈ (L/f₀)(D/fₑ).',
      'Objective forms a magnified real image; eyepiece magnifies it again.',
      'The two magnification factors multiply, not add.',
    ],
  },

  'astronomical-telescope': {
    slug: 'astronomical-telescope',
    title: 'The Telescope',
    difficulty: 'hard',
    simpleExplanation:
      'An astronomical telescope also uses two converging lenses, but arranged to magnify distant objects ' +
      'instead of nearby tiny ones — its magnifying power is simply the ratio of the two lenses\' focal lengths, M=f₀/fₑ.',
    whyItMatters:
      'Telescopes let us see details in objects — the Moon\'s craters, the rings of Saturn, distant galaxies — ' +
      'that are impossibly far away, using exactly the same two-lens principle as a microscope but tuned for distant rather than tiny objects.',
    diagram: {
      id: 'telescope-diagram',
      title: 'A simplified two-lens layout of an astronomical telescope',
      altText: 'Two vertical lines representing a long-focal-length objective lens on the left and a short-focal-length eyepiece lens on the right, both centered on the same optical axis',
      component: 'GeometryDiagram',
      interactive: false,
      props: {
        segments: [
          { from: [-0.5, 0], to: [4.5, 0], dashed: true },
          { from: [0, -1.5], to: [0, 1.5], label: 'Objective (f₀)', labelDx: 0, labelDy: -18 },
          { from: [4, -0.7], to: [4, 0.7], label: 'Eyepiece (fₑ)', labelDx: 0, labelDy: -12 },
        ],
        points: [{ x: -0.3, y: 0, label: 'Distant object (parallel rays)', labelDx: -20, labelDy: 16 }],
      },
    },
    formulaSlug: 'telescope-magnification-formula',
    workedExample: {
      id: 'telescope-worked-1',
      title: "Find a telescope's magnifying power",
      problemStatement: 'A telescope has an objective lens of focal length 1.0 m and an eyepiece of focal length 0.02 m (20 mm). Find its magnifying power.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'f₀=1.0 m,  fₑ=0.02 m', explanation: 'Objective and eyepiece focal lengths.' },
        { step: 2, instruction: 'Apply the telescope magnification formula.', math: 'M = f₀/fₑ = 1.0/0.02', explanation: 'Divide objective focal length by eyepiece focal length.' },
        { step: 3, instruction: 'Compute the result.', math: 'M = 50', explanation: 'Distant objects appear 50 times larger through this telescope.' },
      ],
      finalAnswer: 'M = 50.',
    },
    whyItWorks:
      'A long-focal-length objective forms a large real image of a distant object at its focal point; the ' +
      "short-focal-length eyepiece then acts as a powerful magnifying glass on that image — the shorter the " +
      "eyepiece's focal length relative to the objective's, the larger the final magnification.",
    realLifeExample: {
      title: 'Amateur astronomers choosing eyepieces',
      scenario: 'Amateur astronomers often own several interchangeable eyepieces with different focal lengths for the same telescope.',
      explanation: 'Swapping in an eyepiece with a shorter focal length directly increases M=f₀/fₑ, letting the ' +
        'same telescope zoom in more (at the cost of a dimmer, narrower field of view).',
    },
    practiceQuestions: [
      {
        id: 'telescope-pq-1',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A telescope has f₀=0.8 m and fₑ=0.025 m. Find its magnifying power.',
        hints: ['M = f₀/fₑ.'],
        correctAnswer: 32,
        explanation: 'M = 0.8/0.025 = 32.',
      },
    ],
    commonMistake:
      "Assuming a bigger telescope objective automatically means much more magnification — magnification " +
      "depends on the RATIO f₀/fₑ, not the objective's size alone; a larger objective mainly improves light-gathering and image brightness, not just magnification.",
    quickReview: [
      'M = f₀/fₑ.',
      'Long objective focal length or short eyepiece focal length both increase magnification.',
      'Same two-lens principle as a microscope, tuned for distant rather than tiny objects.',
    ],
  },

  'laser-light': {
    slug: 'laser-light',
    title: 'The Laser',
    difficulty: 'medium',
    simpleExplanation:
      'A laser produces light that is coherent (all waves in step), monochromatic (a single precise wavelength), ' +
      'and highly directional — very different from ordinary light sources like light bulbs, which emit a broad, disorganized mix of wavelengths in every direction.',
    whyItMatters:
      "A laser's precise, concentrated light makes possible everything from barcode scanners and fibre-optic " +
      'communication to surgery and cutting tools — applications ordinary light simply cannot achieve.',
    formulaSlug: 'photon-energy-formula',
    workedExample: {
      id: 'laser-worked-1',
      title: 'Find the photon energy of a helium-neon laser',
      problemStatement: 'A common helium-neon (He-Ne) laser emits light at a wavelength of 632.8 nm. Find the energy of each photon.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'λ=632.8 nm = 632.8×10⁻⁹ m,  h=6.626×10⁻³⁴ J·s,  c=3×10⁸ m/s', explanation: 'Convert the wavelength to metres.' },
        { step: 2, instruction: 'Apply the photon energy formula.', math: 'E = hc/λ = (6.626×10⁻³⁴)(3×10⁸)/(632.8×10⁻⁹)', explanation: 'Substitute all three values.' },
        { step: 3, instruction: 'Compute the numerator.', math: 'hc = 1.9878×10⁻²⁵ J·m', explanation: 'Multiply Planck\'s constant by the speed of light.' },
        { step: 4, instruction: 'Divide by the wavelength.', math: 'E ≈ 3.14×10⁻¹⁹ J', explanation: 'This tiny energy is typical of a single visible-light photon.' },
      ],
      finalAnswer: 'E ≈ 3.14×10⁻¹⁹ J.',
    },
    whyItWorks:
      "A laser's light comes from stimulated emission — excited atoms releasing photons of one exact energy " +
      "(and therefore one exact wavelength) in a coordinated cascade — so E=hc/λ applies directly and precisely, " +
      "unlike ordinary light sources that mix many different photon energies together.",
    realLifeExample: {
      title: 'A laser pointer\'s tight, focused beam',
      scenario: "A laser pointer's beam stays narrow and bright even across a large room, unlike a flashlight's beam, which spreads out and dims quickly.",
      explanation: "The laser's coherent, directional light stays tightly focused over long distances — a " +
        "direct consequence of every photon being emitted with the same wavelength and in step with the others.",
    },
    practiceQuestions: [
      {
        id: 'laser-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A green laser pointer emits light at 532 nm. Find the energy of each photon.',
        hints: ['E = hc/λ.'],
        correctAnswer: 3.74e-19,
        tolerance: 0.05e-19,
        explanation: 'E = (6.626×10⁻³⁴)(3×10⁸)/(532×10⁻⁹) ≈ 3.74×10⁻¹⁹ J.',
      },
    ],
    commonMistake:
      'Forgetting to convert the wavelength from nanometres to metres before substituting into the formula — ' +
      "using 632.8 directly (instead of 632.8×10⁻⁹) gives an answer wrong by a factor of a billion.",
    quickReview: [
      'E = hf = hc/λ — photon energy.',
      'Laser light: coherent, monochromatic, highly directional.',
      'Comes from stimulated emission of one exact photon energy.',
    ],
  },

  'fibre-optics-and-total-internal-reflection': {
    slug: 'fibre-optics-and-total-internal-reflection',
    title: 'Fibre Optics',
    difficulty: 'medium',
    simpleExplanation:
      'An optical fibre carries light over long distances by total internal reflection — light striking the ' +
      "core's boundary at an angle steeper than the critical angle reflects perfectly, bouncing along inside the fibre without escaping.",
    whyItMatters:
      "Fibre optics carries the modern internet's data as pulses of light, transmitting information over " +
      'enormous distances with far less signal loss than electrical cables.',
    formulaSlug: 'fibre-critical-angle-formula',
    workedExample: {
      id: 'fibre-optics-worked-1',
      title: "Find an optical fibre's critical angle",
      problemStatement: 'An optical fibre\'s core has a refractive index of 1.5 (relative to the air outside). Find its critical angle.',
      steps: [
        { step: 1, instruction: 'Write down the known value.', math: 'n = 1.5', explanation: 'Refractive index of the fibre core.' },
        { step: 2, instruction: 'Apply the critical angle formula.', math: 'θc = sin⁻¹(1/n) = sin⁻¹(1/1.5)', explanation: 'Take the inverse sine of the reciprocal of n.' },
        { step: 3, instruction: 'Compute the result.', math: 'θc = sin⁻¹(0.667) ≈ 41.8°', explanation: 'Light striking the boundary at more than this angle undergoes total internal reflection.' },
      ],
      finalAnswer: 'θc ≈ 41.8°.',
    },
    whyItWorks:
      'As the angle of incidence increases, the refracted ray bends farther from the normal — at the critical ' +
      "angle, the refracted ray grazes exactly along the boundary itself (a 90° refraction angle); at any " +
      "steeper angle, no refraction is even geometrically possible, so all the light reflects back internally instead.",
    realLifeExample: {
      title: 'Endoscopes used in medical imaging',
      scenario: "A doctor uses a thin, flexible endoscope — a bundle of optical fibres — to see inside a patient's body without invasive surgery.",
      explanation: 'Light (and the image it carries) bounces along each fibre by total internal reflection, ' +
        'following every bend and curve of the flexible bundle without escaping or being lost.',
    },
    practiceQuestions: [
      {
        id: 'fibre-optics-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An optical fibre has a core refractive index of 2.0. Find its critical angle.',
        hints: ['θc = sin⁻¹(1/n).'],
        correctAnswer: 30,
        explanation: 'θc = sin⁻¹(1/2.0) = sin⁻¹(0.5) = 30°.',
      },
    ],
    commonMistake:
      'Assuming total internal reflection happens at ANY angle inside the fibre — it only happens for angles ' +
      'STEEPER than the critical angle; light hitting the boundary at a shallower angle simply refracts out and is lost.',
    quickReview: [
      'θc = sin⁻¹(1/n).',
      'Beyond the critical angle, light reflects perfectly (total internal reflection).',
      'The basis of fibre-optic communication and medical endoscopes.',
    ],
  },

  'spectrometer': {
    slug: 'spectrometer',
    title: 'The Spectrometer',
    difficulty: 'medium',
    simpleExplanation:
      'A spectrometer measures the wavelengths present in a beam of light by spreading it out (often using a ' +
      "diffraction grating) and precisely measuring the angle at which each wavelength appears — using dsinθ=mλ.",
    whyItMatters:
      'Spectrometers let scientists identify exactly which elements are present in a light source — from a lab ' +
      'sample to a distant star — by analyzing the precise wavelengths of light it emits or absorbs.',
    formulaSlug: 'spectrometer-grating-formula',
    workedExample: {
      id: 'spectrometer-worked-1',
      title: 'Find the diffraction angle for a known wavelength',
      problemStatement: 'A spectrometer uses a grating with 500 lines per millimetre. Find the first-order (m=1) diffraction angle for light of wavelength 600 nm.',
      steps: [
        { step: 1, instruction: 'Find the grating spacing d.', math: 'd = 1/(500 lines/mm) = 1/500000 m = 2000 nm', explanation: 'd is the distance between adjacent lines — the reciprocal of the number of lines per metre.' },
        { step: 2, instruction: 'Apply the grating equation.', math: 'sinθ = mλ/d = (1)(600)/2000', explanation: 'Both wavelength and spacing are in nanometres, so the units cancel.' },
        { step: 3, instruction: 'Compute sinθ.', math: 'sinθ = 0.3', explanation: '600/2000 = 0.3.' },
        { step: 4, instruction: 'Find θ.', math: 'θ = sin⁻¹(0.3) ≈ 17.5°', explanation: 'Take the inverse sine.' },
      ],
      finalAnswer: 'θ ≈ 17.5°.',
    },
    whyItWorks:
      'Light diffracted from each grating line interferes constructively only at specific angles where the path ' +
      'length difference between neighboring lines equals a whole number of wavelengths (mλ) — measuring that ' +
      'angle precisely, and knowing d, lets the equation be solved for the otherwise-unknown wavelength.',
    realLifeExample: {
      title: "Identifying elements in a star's light",
      scenario: 'Astronomers analyze starlight with a spectrometer to determine which chemical elements are present in a distant star.',
      explanation: 'Each element absorbs or emits light at its own characteristic wavelengths — the ' +
        "spectrometer's precise angle measurements reveal exactly which wavelengths are present, identifying the elements without ever visiting the star.",
    },
    practiceQuestions: [
      {
        id: 'spectrometer-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A grating with 300 lines/mm diffracts light of wavelength 500 nm at first order (m=1). Find the diffraction angle.',
        hints: ['Find d=1/(300 lines/mm) first, then apply sinθ=mλ/d.'],
        correctAnswer: 8.63,
        tolerance: 0.2,
        explanation: 'd=1/300000 m=3333 nm. sinθ=500/3333≈0.15. θ=sin⁻¹(0.15)≈8.63°.',
      },
    ],
    commonMistake:
      'Confusing the number of lines per millimetre with the grating spacing d itself — d is the RECIPROCAL of ' +
      'that line density (the physical distance between adjacent lines), not the line count directly.',
    quickReview: [
      'd sinθ = mλ.',
      'd = 1/(lines per unit length).',
      'Measures the precise wavelengths present in a light source.',
    ],
  },

  'photometry-and-light-intensity': {
    slug: 'photometry-and-light-intensity',
    title: 'Photometry',
    difficulty: 'medium',
    simpleExplanation:
      'Photometry measures how bright light appears — the illuminance (E) falling on a surface from a point ' +
      'source follows an inverse-square law, E=I/d², so a light source appears four times dimmer at twice the distance.',
    whyItMatters:
      'This inverse-square relationship governs everything from choosing the right light bulb for a room to how ' +
      'astronomers estimate the true brightness of stars from how dim they appear across enormous distances.',
    formulaSlug: 'illuminance-formula',
    workedExample: {
      id: 'photometry-worked-1',
      title: 'Find the illuminance from a light source',
      problemStatement: 'A light source has a luminous intensity of 100 cd. Find the illuminance on a surface 2 m away.',
      steps: [
        { step: 1, instruction: 'Write down the known values.', math: 'I=100 cd,  d=2 m', explanation: 'Luminous intensity and distance from the source.' },
        { step: 2, instruction: 'Apply the illuminance formula.', math: 'E = I/d² = 100/2²', explanation: 'Divide intensity by the square of the distance.' },
        { step: 3, instruction: 'Compute the result.', math: 'E = 100/4 = 25 lux', explanation: 'This is the illuminance on the surface.' },
      ],
      finalAnswer: 'E = 25 lux.',
    },
    whyItWorks:
      'A point source spreads its light equally over an expanding sphere — since a sphere\'s surface area grows ' +
      'with the SQUARE of its radius (4πd²), the same total light energy is spread over an ever-larger area as ' +
      "distance increases, making the light per unit area (illuminance) fall off as 1/d².",
    realLifeExample: {
      title: 'Why standing farther from a lamp makes reading harder',
      scenario: 'Reading a book becomes noticeably harder when moving a lamp twice as far away, even though the lamp itself has not changed.',
      explanation: 'Doubling the distance to the lamp reduces the illuminance on the page to just one-quarter ' +
        'of its original value, by exactly this inverse-square law.',
    },
    practiceQuestions: [
      {
        id: 'photometry-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A light source has a luminous intensity of 60 cd. Find the illuminance on a surface 3 m away.',
        hints: ['E = I/d².'],
        correctAnswer: 6.667,
        tolerance: 0.01,
        explanation: 'E = 60/3² = 60/9 ≈ 6.667 lux.',
      },
    ],
    commonMistake:
      'Assuming illuminance falls off proportionally with distance (halving at double the distance) — it ' +
      'actually falls off with the SQUARE of the distance (to a quarter at double the distance), a much steeper drop.',
    quickReview: [
      'E = I/d² — the inverse-square law.',
      'Doubling the distance reduces illuminance to one-quarter.',
      "Comes from a sphere's surface area growing with the square of its radius.",
    ],
  },
};
