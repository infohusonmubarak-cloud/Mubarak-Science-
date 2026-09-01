import type { Simulation } from '@/types/simulation';

// Curated, hand-verified list of PhET Interactive Simulations
// (https://phet.colorado.edu) matched to real chapters already in this
// site. Every `phetSlug` below was confirmed against PhET's own site
// before being added here — do not add a new entry without checking
// https://phet.colorado.edu/en/simulations/<slug> actually exists first,
// the same way MSMK never invents a video ID.
//
// PhET's HTML simulations are licensed CC BY-NC (as of the license update
// that took effect March 2026) — free for classroom/educational use, but
// commercial use (by a for-profit or a non-profit deriving commercial
// advantage) needs a separate agreement with PhET. See CLAUDE.md for the
// note on confirming this site's status before treating this as settled.

export const SIMULATIONS: Simulation[] = [
  // --- Mathematics ---------------------------------------------------
  {
    id: 'graphing-lines',
    title: 'Graphing Lines',
    subjectSlug: 'mathematics',
    phetSlug: 'graphing-lines',
    description: 'Explore how slope and intercept change the graph of a line, in point-slope, slope-intercept, and standard form.',
    chapterSlugs: ['coordinate-geometry'],
    instructions: {
      whatToChange: 'Drag the two points on the line, or type new values for slope (m) and y-intercept (b) directly.',
      whatToLookFor: 'Watch how the line rotates when you change only the slope, and how it shifts up/down when you change only the intercept — they move the line in different ways.',
    },
  },
  {
    id: 'trig-tour',
    title: 'Trig Tour',
    subjectSlug: 'mathematics',
    phetSlug: 'trig-tour',
    description: 'Take a tour of trigonometry using degrees or radians — see sine, cosine, and tangent values change as an angle sweeps around the unit circle.',
    chapterSlugs: ['trigonometry'],
    instructions: {
      whatToChange: 'Drag the point around the unit circle, or use the arrows to step the angle in fixed increments. Switch between degrees and radians.',
      whatToLookFor: 'Notice when sin θ and cos θ are positive, negative, or zero as the angle crosses each quadrant boundary.',
    },
  },
  {
    id: 'vector-addition',
    title: 'Vector Addition',
    subjectSlug: 'mathematics',
    phetSlug: 'vector-addition',
    description: 'Build vectors on a grid, change their length and angle, and add them together to see the resultant.',
    chapterSlugs: ['introduction-to-vectors', 'vectors-in-three-dimensions'],
    desktopRecommended: true,
    instructions: {
      whatToChange: 'Drag vectors onto the grid from the tray, then drag their tips to change magnitude and direction.',
      whatToLookFor: 'Turn on "Sum" and see how the resultant vector is the same whichever order you add the vectors in.',
    },
  },
  {
    id: 'function-builder',
    title: 'Function Builder',
    subjectSlug: 'mathematics',
    phetSlug: 'function-builder',
    description: 'Build a function machine from simple operations, feed inputs through it, and figure out mystery functions from their outputs.',
    chapterSlugs: ['functions'],
    desktopRecommended: true,
    instructions: {
      whatToChange: 'Drag operations (like ×2, +1) into the function machine, then send different input values through it.',
      whatToLookFor: 'In the "Mystery" screen, try to work out the hidden function purely from the input/output pairs it gives you.',
    },
  },
  {
    id: 'plinko-probability',
    title: 'Plinko Probability',
    subjectSlug: 'mathematics',
    phetSlug: 'plinko-probability',
    description: 'Drop balls through a triangular grid of pegs and watch the outcomes pile up into a distribution.',
    chapterSlugs: ['probability'],
    instructions: {
      whatToChange: 'Increase the number of rows and drop many balls at once. Switch to the histogram view.',
      whatToLookFor: 'See how the pile of balls approaches a smooth bell-shaped (binomial) distribution as you drop more of them.',
    },
  },

  // --- Physics ---------------------------------------------------------
  {
    id: 'projectile-motion',
    title: 'Projectile Motion',
    subjectSlug: 'physics',
    phetSlug: 'projectile-motion',
    description: 'Fire a projectile and explore how angle, speed, and air resistance change its trajectory, range, and time of flight.',
    chapterSlugs: ['motion'],
    instructions: {
      whatToChange: 'Change the launch angle and initial speed, and toggle air resistance on/off.',
      whatToLookFor: 'Find the launch angle that gives the maximum range for a fixed speed — check it against the 45° rule.',
    },
  },
  {
    id: 'forces-and-motion-basics',
    title: 'Forces and Motion: Basics',
    subjectSlug: 'physics',
    phetSlug: 'forces-and-motion-basics',
    description: 'Push objects around and see how applied force, friction, and mass combine to produce acceleration.',
    chapterSlugs: ['forces'],
    instructions: {
      whatToChange: 'Apply a force to the crate, change its mass, and switch the surface between frictionless, ice, and grass.',
      whatToLookFor: 'Watch the net-force arrow in the "Friction" screen — the object only accelerates once applied force exceeds friction.',
    },
  },
  {
    id: 'circuit-construction-kit-dc',
    title: 'Circuit Construction Kit: DC',
    subjectSlug: 'physics',
    phetSlug: 'circuit-construction-kit-dc',
    description: 'Build circuits from batteries, resistors, wires, and bulbs, and measure current and voltage with a virtual meter.',
    chapterSlugs: ['electricity'],
    desktopRecommended: true,
    instructions: {
      whatToChange: 'Drag components onto the workbench and wire them into a circuit. Add an ammeter or voltmeter to measure it.',
      whatToLookFor: 'Build the same bulbs first in series, then in parallel, and compare their brightness and the current through each.',
    },
  },
  {
    id: 'wave-on-a-string',
    title: 'Wave on a String',
    subjectSlug: 'physics',
    phetSlug: 'wave-on-a-string',
    description: 'Wiggle a string by hand or drive it with an oscillator, and see how wave speed, frequency, and damping interact.',
    chapterSlugs: ['wave-and-sound'],
    instructions: {
      whatToChange: 'Switch to "Oscillate" mode and adjust frequency, amplitude, and damping. Try a fixed end vs. a loose end.',
      whatToLookFor: 'Watch what happens to the wave when it reflects off a fixed end versus a free end.',
    },
  },
  {
    id: 'energy-skate-park-basics',
    title: 'Energy Skate Park: Basics',
    subjectSlug: 'physics',
    phetSlug: 'energy-skate-park-basics',
    description: 'Send a skater along a track and watch kinetic, potential, thermal, and total energy in real time.',
    chapterSlugs: ['work-and-energy'],
    instructions: {
      whatToChange: 'Build your own track shape, and turn friction on and off.',
      whatToLookFor: 'With friction off, watch the total energy bar stay constant while kinetic and potential trade off — that\'s conservation of energy.',
    },
  },

  // --- Chemistry ---------------------------------------------------------
  {
    id: 'build-an-atom',
    title: 'Build an Atom',
    subjectSlug: 'chemistry',
    phetSlug: 'build-an-atom',
    description: 'Build an atom out of protons, neutrons, and electrons, and see how that changes its element, mass, and charge.',
    chapterSlugs: ['electronic-structure-and-periodic-table'],
    instructions: {
      whatToChange: 'Drag protons, neutrons, and electrons into the atom, one at a time.',
      whatToLookFor: 'Watch the element name change only when you change the proton count — adding neutrons changes the isotope, not the element.',
    },
  },
  {
    id: 'ph-scale',
    title: 'pH Scale',
    subjectSlug: 'chemistry',
    phetSlug: 'ph-scale',
    description: 'Test the pH of everyday liquids and see how concentration changes acidity and basicity on the pH scale.',
    chapterSlugs: ['acid-base-reactions'],
    instructions: {
      whatToChange: 'Switch between different liquids (coffee, soap, water...) and dilute the liquid with the water tap.',
      whatToLookFor: 'Watch how diluting an acid or base moves its pH toward 7 (neutral) without ever fully reaching it.',
    },
  },
  {
    id: 'states-of-matter',
    title: 'States of Matter',
    subjectSlug: 'chemistry',
    phetSlug: 'states-of-matter',
    description: 'Heat and cool a substance and watch its particles rearrange between solid, liquid, and gas.',
    chapterSlugs: ['matter-and-solutions'],
    instructions: {
      whatToChange: 'Drag the heat/cool slider and watch the temperature and phase.',
      whatToLookFor: 'Notice the temperature holds steady while the substance is changing phase (melting/boiling), even though you\'re still adding heat.',
    },
  },
  {
    id: 'balancing-chemical-equations',
    title: 'Balancing Chemical Equations',
    subjectSlug: 'chemistry',
    phetSlug: 'balancing-chemical-equations',
    description: 'Balance chemical equations by adjusting coefficients, with a bar-chart check of atoms on each side.',
    chapterSlugs: ['quantities-of-substances'],
    instructions: {
      whatToChange: 'Change the coefficient in front of each reactant and product to balance the equation.',
      whatToLookFor: 'Use the "Tools" bar chart — it only shows equal bars on both sides once the equation is truly balanced.',
    },
  },

  // --- Biology ---------------------------------------------------------
  {
    id: 'natural-selection',
    title: 'Natural Selection',
    subjectSlug: 'biology',
    phetSlug: 'natural-selection',
    description: 'Add a trait like fur colour to a population of bunnies, introduce a selection pressure, and watch the population evolve over generations.',
    chapterSlugs: ['biodiversity-and-conservation'],
    instructions: {
      whatToChange: 'Add a mutation (e.g. brown fur), then add an environmental factor like wolves or a food shortage.',
      whatToLookFor: 'Watch the proportion of each trait in the population shift over generations, in the graph at the bottom.',
    },
  },
  {
    id: 'gene-expression-essentials',
    title: 'Gene Expression Essentials',
    subjectSlug: 'biology',
    phetSlug: 'gene-expression-essentials',
    description: 'Watch transcription and translation happen inside a cell, from DNA to mRNA to a finished protein.',
    chapterSlugs: ['molecular-biology'],
    instructions: {
      whatToChange: 'Attach RNA polymerase to the DNA strand and let it transcribe, then watch a ribosome translate the mRNA.',
      whatToLookFor: 'Follow one gene all the way from DNA sequence to the specific protein it codes for.',
    },
  },
];

export function getSimulationsForChapter(chapterSlug: string): Simulation[] {
  return SIMULATIONS.filter((sim) => sim.chapterSlugs.includes(chapterSlug));
}

export function getAllSimulations(): Simulation[] {
  return SIMULATIONS;
}
