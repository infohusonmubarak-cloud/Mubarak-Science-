import type { Formula } from '@/types/content';

export const chapter11AQuantumFormulas: Record<string, Formula> = {
  'photon-energy-formula-a-level': {
    slug: 'photon-energy-formula-a-level',
    name: 'Photon Energy',
    expression: 'E = hf = hc/λ',
    meaning: 'Light delivers its energy in discrete packets called photons. The energy of a single photon depends only on the frequency (or, equivalently, the wavelength) of the light — higher-frequency light delivers more energetic photons.',
    variables: [
      { symbol: 'E', meaning: 'energy of one photon, in joules (J)' },
      { symbol: 'h', meaning: "Planck's constant, 6.63 × 10⁻³⁴ J·s" },
      { symbol: 'f', meaning: 'frequency of the light, in hertz (Hz)' },
      { symbol: 'c', meaning: 'the speed of light, 3 × 10⁸ m/s' },
      { symbol: 'λ', meaning: 'wavelength of the light, in metres (m)' },
    ],
    whenToUse: 'Whenever the energy carried by a single photon of light needs to be found from its frequency or wavelength.',
    relatedConceptSlugs: ['photon-energy-a-level'],
  },
};
