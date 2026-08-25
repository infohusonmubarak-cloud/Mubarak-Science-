import type { Formula } from '@/types/content';

export const chapter6CSoundFormulas: Record<string, Formula> = {
  'speed-of-sound-in-air-formula': {
    slug: 'speed-of-sound-in-air-formula',
    name: 'Speed of Sound in Air',
    expression: 'v = 331 + 0.6T',
    meaning: 'The speed of sound in air increases with temperature — warmer air molecules move faster and transmit the pressure disturbance of a sound wave more quickly.',
    variables: [
      { symbol: 'v', meaning: 'speed of sound in air, in metres per second (m/s)' },
      { symbol: 'T', meaning: 'air temperature, in degrees Celsius (°C)' },
    ],
    whenToUse: 'Whenever the speed of sound in air at a given temperature needs to be estimated (an approximation valid near everyday temperatures).',
    relatedConceptSlugs: ['propagation-of-sound'],
  },
  'echo-distance-formula': {
    slug: 'echo-distance-formula',
    name: 'Distance to a Reflecting Surface (from an Echo)',
    expression: 'd = vt / 2',
    meaning: "The distance to a wall or other reflecting surface, found from the total round-trip time for a sound to travel out, reflect, and return — divided by 2 since the sound covers the distance twice.",
    variables: [
      { symbol: 'd', meaning: 'distance to the reflecting surface, in metres (m)' },
      { symbol: 'v', meaning: 'speed of sound in the medium, in metres per second (m/s)' },
      { symbol: 't', meaning: 'total round-trip time from the sound being made to the echo being heard, in seconds (s)' },
    ],
    whenToUse: 'Whenever the distance to a reflecting surface needs to be found from the time it takes to hear an echo.',
    relatedConceptSlugs: ['echo'],
  },
  'minimum-echo-distance-formula': {
    slug: 'minimum-echo-distance-formula',
    name: 'Minimum Distance for a Distinct Echo',
    expression: 'd_min = (v × t_min) / 2',
    meaning: "The human ear needs a minimum gap of about 0.1 s between two sounds to perceive them as separate — so a reflecting surface must be at least this far away for its echo to be heard as distinct from the original sound, rather than blending into it.",
    variables: [
      { symbol: 'd_min', meaning: 'minimum distance for a distinguishable echo, in metres (m)' },
      { symbol: 'v', meaning: 'speed of sound in the medium, in metres per second (m/s)' },
      { symbol: 't_min', meaning: 'the minimum time gap the human ear can distinguish, about 0.1 s' },
    ],
    whenToUse: 'Whenever determining how far away a surface must be for a person to perceive a distinct echo, rather than the sound simply seeming prolonged.',
    relatedConceptSlugs: ['audibility-and-hearing-range'],
  },
  'doppler-effect-formula': {
    slug: 'doppler-effect-formula',
    name: 'The Doppler Effect',
    expression: "f' = f(v ± v₀) / (v ∓ v_s)",
    meaning: 'The frequency an observer hears shifts higher when the source and observer are approaching each other, and lower when they are moving apart, because relative motion changes how many wave crests reach the observer each second.',
    variables: [
      { symbol: "f'", meaning: 'the frequency heard by the observer, in hertz (Hz)' },
      { symbol: 'f', meaning: 'the frequency actually emitted by the source, in hertz (Hz)' },
      { symbol: 'v', meaning: 'speed of sound in the medium, in metres per second (m/s)' },
      { symbol: 'v₀', meaning: "the observer's speed (+ if approaching the source, − if moving away), in metres per second (m/s)" },
      { symbol: 'v_s', meaning: "the source's speed (− if approaching the observer, + if moving away), in metres per second (m/s)" },
    ],
    whenToUse: 'Whenever the frequency heard by an observer needs to be found when a sound source and/or the observer are moving relative to each other.',
    relatedConceptSlugs: ['doppler-effect'],
  },
  'wave-equation-formula': {
    slug: 'wave-equation-formula',
    name: 'The Wave Equation',
    expression: 'v = fλ',
    meaning: 'A wave\'s speed equals its frequency times its wavelength — how many complete waves pass a point each second, multiplied by the length of each one.',
    variables: [
      { symbol: 'v', meaning: 'wave speed, in metres per second (m/s)' },
      { symbol: 'f', meaning: 'frequency, in hertz (Hz)' },
      { symbol: 'λ', meaning: 'wavelength, in metres (m)' },
    ],
    whenToUse: 'Whenever relating a sound wave\'s speed, frequency, and wavelength — given any two, the third can be found.',
    relatedConceptSlugs: ['properties-of-sound-waves'],
  },
};
