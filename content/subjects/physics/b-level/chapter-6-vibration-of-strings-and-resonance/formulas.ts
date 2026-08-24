import type { Formula } from '@/types/content';

export const chapter6VibrationFormulas: Record<string, Formula> = {
  'node-antinode-spacing-formula': {
    slug: 'node-antinode-spacing-formula',
    name: 'Node Spacing in a Stationary Wave',
    expression: 'distance between adjacent nodes = λ/2',
    meaning: 'In a stationary (standing) wave, nodes (points of zero displacement) are evenly spaced, each separated by half a wavelength.',
    variables: [
      { symbol: 'λ', meaning: 'Wavelength of the wave, in metres' },
    ],
    whenToUse: 'Use to find the wavelength of a stationary wave from the measured distance between two adjacent nodes (or antinodes).',
    relatedConceptSlugs: ['stationary-waves'],
  },
  'vibrating-string-frequency-formula': {
    slug: 'vibrating-string-frequency-formula',
    name: 'Fundamental Frequency of a Vibrating String',
    expression: 'f = (1/2L)√(T/μ)',
    meaning: 'The lowest (fundamental) frequency at which a stretched string vibrates depends on its length, the tension applied, and its mass per unit length.',
    variables: [
      { symbol: 'f', meaning: 'Fundamental frequency, in Hz' },
      { symbol: 'L', meaning: 'Length of the string, in metres' },
      { symbol: 'T', meaning: 'Tension in the string, in newtons' },
      { symbol: 'μ', meaning: 'Mass per unit length of the string (linear density), in kg/m' },
    ],
    whenToUse: 'Use to find the fundamental (lowest) frequency a string produces, or to see how changing tension, length, or thickness affects pitch.',
    relatedConceptSlugs: ['vibrating-strings'],
  },
  'closed-pipe-resonance-formula': {
    slug: 'closed-pipe-resonance-formula',
    name: 'Resonance Length of a Closed Pipe',
    expression: 'L = λ/4 (first resonance)',
    meaning: 'A pipe closed at one end (like a resonance tube with water) first resonates when its air column length equals one-quarter of the sound wavelength.',
    variables: [
      { symbol: 'L', meaning: 'Length of the air column at first resonance, in metres' },
      { symbol: 'λ', meaning: 'Wavelength of the sound wave, in metres' },
    ],
    whenToUse: "Use to find the wavelength (and hence the speed) of sound from the air column length at which a closed resonance tube first resonates with a tuning fork of known frequency.",
    relatedConceptSlugs: ['resonance-column'],
  },
  'open-pipe-frequency-formula': {
    slug: 'open-pipe-frequency-formula',
    name: 'Fundamental Frequency of an Open Pipe',
    expression: 'f = v / 2L',
    meaning: 'A pipe open at both ends produces its fundamental (lowest) frequency when its length equals half the sound wavelength.',
    variables: [
      { symbol: 'f', meaning: 'Fundamental frequency, in Hz' },
      { symbol: 'v', meaning: 'Speed of sound in air, in m/s' },
      { symbol: 'L', meaning: 'Length of the pipe, in metres' },
    ],
    whenToUse: 'Use to find the fundamental frequency (or required length) of an organ pipe open at both ends.',
    relatedConceptSlugs: ['organ-pipes'],
  },
  'wave-intensity-formula': {
    slug: 'wave-intensity-formula',
    name: 'Wave Intensity',
    expression: 'I = P / A',
    meaning: "Intensity measures how concentrated a wave's power is, spreading the total power carried by the wave over the area it passes through.",
    variables: [
      { symbol: 'I', meaning: 'Intensity, in W/m²' },
      { symbol: 'P', meaning: 'Power carried by the wave, in watts' },
      { symbol: 'A', meaning: 'Area the power is spread over, in m²' },
    ],
    whenToUse: 'Use to compare how "strong" a wave is at different distances from its source, or to find the power delivered over a given area.',
    relatedConceptSlugs: ['intensity-of-waves'],
  },
};
