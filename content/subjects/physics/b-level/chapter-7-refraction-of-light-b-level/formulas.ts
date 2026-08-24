import type { Formula } from '@/types/content';

export const chapter7RefractionFormulas: Record<string, Formula> = {
  'wave-speed-relation-light-formula': {
    slug: 'wave-speed-relation-light-formula',
    name: 'Wave Speed Relation (for Light)',
    expression: 'c = fλ',
    meaning: 'Like any wave, light\'s speed equals the product of its frequency and wavelength.',
    variables: [
      { symbol: 'c', meaning: 'Speed of light (in vacuum, ≈ 3 × 10⁸ m/s)' },
      { symbol: 'f', meaning: 'Frequency of the light, in Hz' },
      { symbol: 'λ', meaning: 'Wavelength of the light, in metres' },
    ],
    whenToUse: 'Use to find the wavelength or frequency of light when the other is known, using the known speed of light.',
    relatedConceptSlugs: ['velocity-of-light'],
  },
  'snells-law-formula': {
    slug: 'snells-law-formula',
    name: "Snell's Law (Law of Refraction)",
    expression: 'n₁ sinθ₁ = n₂ sinθ₂',
    meaning: 'When light crosses the boundary between two media, the product of each medium\'s refractive index and the sine of the angle (measured from the normal) is the same on both sides.',
    variables: [
      { symbol: 'n₁, n₂', meaning: 'Refractive indices of the first and second media' },
      { symbol: 'θ₁', meaning: 'Angle of incidence, measured from the normal, in the first medium' },
      { symbol: 'θ₂', meaning: 'Angle of refraction, measured from the normal, in the second medium' },
    ],
    whenToUse: 'Use to find an unknown angle of incidence or refraction, or an unknown refractive index, when light crosses a boundary between two media.',
    relatedConceptSlugs: ['laws-of-refraction'],
  },
  'refractive-index-definition-formula': {
    slug: 'refractive-index-definition-formula',
    name: 'Refractive Index',
    expression: 'n = c / v',
    meaning: "A medium's refractive index measures how much slower light travels in it compared to in a vacuum.",
    variables: [
      { symbol: 'n', meaning: 'Refractive index of the medium (no units, always ≥ 1)' },
      { symbol: 'c', meaning: 'Speed of light in a vacuum, ≈ 3 × 10⁸ m/s' },
      { symbol: 'v', meaning: 'Speed of light in the medium, in m/s' },
    ],
    whenToUse: "Use to find a medium's refractive index from the speed of light within it, or to find that speed if the refractive index is known.",
    relatedConceptSlugs: ['refractive-index-b-level'],
  },
  'critical-angle-formula': {
    slug: 'critical-angle-formula',
    name: 'Critical Angle',
    expression: 'sinθc = 1/n',
    meaning: "The critical angle is the angle of incidence (in the denser medium) at which the refracted ray travels exactly along the boundary (refraction angle = 90°) — beyond this angle, total internal reflection occurs.",
    variables: [
      { symbol: 'θc', meaning: 'Critical angle, measured from the normal' },
      { symbol: 'n', meaning: 'Refractive index of the denser medium (light travels from denser to less dense medium)' },
    ],
    whenToUse: "Use to find the critical angle for light travelling from a denser medium (like glass or water) toward a less dense one (like air), given the denser medium's refractive index.",
    relatedConceptSlugs: ['critical-angle-and-total-internal-reflection'],
  },
};
