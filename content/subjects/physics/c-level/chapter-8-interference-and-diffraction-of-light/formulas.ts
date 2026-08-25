import type { Formula } from '@/types/content';

export const chapter8CInterferenceFormulas: Record<string, Formula> = {
  'fringe-spacing-formula': {
    slug: 'fringe-spacing-formula',
    name: 'Double-Slit Fringe Spacing',
    expression: 'Δy = λL/d',
    meaning: 'In a double-slit interference pattern, the spacing between adjacent bright fringes on the screen depends on the wavelength of light, the distance to the screen, and how far apart the two slits are.',
    variables: [
      { symbol: 'Δy', meaning: 'spacing between adjacent bright fringes, in metres (m)' },
      { symbol: 'λ', meaning: 'wavelength of the light, in metres (m)' },
      { symbol: 'L', meaning: 'distance from the slits to the screen, in metres (m)' },
      { symbol: 'd', meaning: 'distance between the two slits, in metres (m)' },
    ],
    whenToUse: "Whenever the spacing between bright fringes in a double-slit interference pattern needs to be found — or used to work backward to find the light's wavelength.",
    relatedConceptSlugs: ['interference-of-light'],
  },
  'single-slit-diffraction-formula': {
    slug: 'single-slit-diffraction-formula',
    name: 'Single-Slit Diffraction Minima',
    expression: 'a sinθ = mλ',
    meaning: "Light passing through a single narrow slit spreads out and produces a pattern of dark bands (minima) at specific angles, determined by the slit's width relative to the light's wavelength.",
    variables: [
      { symbol: 'a', meaning: 'width of the slit, in metres (m)' },
      { symbol: 'θ', meaning: 'angle from the center to the dark band, in degrees' },
      { symbol: 'm', meaning: 'order of the minimum (m=1, 2, 3, …, not m=0)' },
      { symbol: 'λ', meaning: 'wavelength of the light, in metres (m)' },
    ],
    whenToUse: 'Whenever the angle of a dark band in a single-slit diffraction pattern needs to be found (or the slit width worked out from a known dark-band angle).',
    relatedConceptSlugs: ['diffraction-of-light'],
  },
  'diffraction-grating-equation-formula': {
    slug: 'diffraction-grating-equation-formula',
    name: 'The Diffraction Grating Equation',
    expression: 'd sinθ = mλ',
    meaning: "A diffraction grating's many closely-spaced slits produce sharp, bright bands at precise angles for each wavelength — the same relationship a spectrometer uses, but here describing the grating's own bright-fringe physics rather than instrument measurement.",
    variables: [
      { symbol: 'd', meaning: 'spacing between adjacent grating lines, in metres (m)' },
      { symbol: 'θ', meaning: 'angle of the bright band from the straight-through direction, in degrees' },
      { symbol: 'm', meaning: 'order of the bright band (m=0, 1, 2, 3, …)' },
      { symbol: 'λ', meaning: 'wavelength of the light, in metres (m)' },
    ],
    whenToUse: "Whenever the angle of a bright diffraction order from a grating needs to be found (or worked backward to find wavelength or grating spacing).",
    relatedConceptSlugs: ['diffraction-grating'],
  },
};
