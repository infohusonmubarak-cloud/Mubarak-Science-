import type { Formula } from '@/types/content';

export const chapter12ModernFormulas: Record<string, Formula> = {
  'bohr-energy-levels-formula': {
    slug: 'bohr-energy-levels-formula',
    name: "Bohr Model Energy Levels (Hydrogen)",
    expression: 'Eₙ = −13.6 / n² eV',
    meaning: "In Bohr's model of the hydrogen atom, electrons can only occupy specific, quantised energy levels, numbered by n = 1, 2, 3, ... — this formula gives the energy of each allowed level.",
    variables: [
      { symbol: 'Eₙ', meaning: 'Energy of the electron in level n, in electron-volts (eV)' },
      { symbol: 'n', meaning: 'Principal quantum number — a positive integer (1, 2, 3, ...) labelling the energy level' },
    ],
    whenToUse: "Use to find the energy of an electron in a specific level of a hydrogen atom, or to find the energy released/absorbed when an electron jumps between levels.",
    relatedConceptSlugs: ['bohrs-hydrogen-atom-and-atomic-spectra'],
  },
  'photoelectric-equation-formula': {
    slug: 'photoelectric-equation-formula',
    name: "Einstein's Photoelectric Equation",
    expression: 'KEmax = hf − φ',
    meaning: "The maximum kinetic energy of an electron ejected from a metal surface by light equals the energy of the absorbed photon, minus the minimum energy (work function) needed to free the electron from the metal.",
    variables: [
      { symbol: 'KEmax', meaning: 'Maximum kinetic energy of an ejected electron, in joules (or eV)' },
      { symbol: 'h', meaning: "Planck's constant, ≈ 6.63 × 10⁻³⁴ J·s" },
      { symbol: 'f', meaning: 'Frequency of the incident light, in Hz' },
      { symbol: 'φ', meaning: "Work function of the metal — the minimum energy needed to free an electron, in joules (or eV)" },
    ],
    whenToUse: "Use to find the maximum kinetic energy of photoelectrons ejected by light of a known frequency, or to find a metal's work function or the light's frequency, given the other quantities.",
    relatedConceptSlugs: ['photoelectric-effect-and-photon-concept'],
  },
  'hubbles-law-formula': {
    slug: 'hubbles-law-formula',
    name: "Hubble's Law",
    expression: 'v = H₀d',
    meaning: 'Distant galaxies recede from us at a speed proportional to their distance — the farther away a galaxy is, the faster it appears to be moving away, providing evidence the universe is expanding.',
    variables: [
      { symbol: 'v', meaning: 'Recession speed of the galaxy, in km/s' },
      { symbol: 'H₀', meaning: "Hubble's constant, ≈ 70 km/s/Mpc (kilometres per second per megaparsec)" },
      { symbol: 'd', meaning: 'Distance to the galaxy, in megaparsecs (Mpc)' },
    ],
    whenToUse: "Use to find a galaxy's recession speed from its distance, or to estimate distance from an observed recession speed (measured via redshift).",
    relatedConceptSlugs: ['redshift-hubbles-law-and-age-of-universe'],
  },
};
