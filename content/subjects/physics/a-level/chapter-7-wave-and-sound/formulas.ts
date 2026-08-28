import type { Formula } from '@/types/content';

export const chapter7AWaveFormulas: Record<string, Formula> = {
  'wave-speed-equation-formula-a-level': {
    slug: 'wave-speed-equation-formula-a-level',
    name: 'The Wave Speed Equation',
    expression: 'v = fλ',
    meaning: 'The speed a wave travels at equals how many complete waves pass a point each second (frequency) multiplied by the length of each wave (wavelength).',
    variables: [
      { symbol: 'v', meaning: 'wave speed, in metres per second (m/s)' },
      { symbol: 'f', meaning: 'frequency, in hertz (Hz)' },
      { symbol: 'λ', meaning: 'wavelength, in metres (m)' },
    ],
    whenToUse: 'Whenever the speed, frequency, or wavelength of a wave needs to be found, given the other two.',
    relatedConceptSlugs: ['wave-characteristics-a-level'],
  },
  'wave-period-frequency-formula-a-level': {
    slug: 'wave-period-frequency-formula-a-level',
    name: 'Period and Frequency',
    expression: 'T = 1 / f',
    meaning: 'The period (the time for one complete wave to pass) and the frequency (how many complete waves pass per second) are reciprocals of each other.',
    variables: [
      { symbol: 'T', meaning: 'period, in seconds (s)' },
      { symbol: 'f', meaning: 'frequency, in hertz (Hz)' },
    ],
    whenToUse: 'Whenever converting between the period and frequency of a wave.',
    relatedConceptSlugs: ['wave-characteristics-a-level'],
  },
  'echo-distance-formula-a-level': {
    slug: 'echo-distance-formula-a-level',
    name: 'Distance from an Echo',
    expression: 'd = vt / 2',
    meaning: 'A sound wave sent toward a distant surface travels there AND back before the echo is heard, so the total time measured corresponds to twice the distance — this formula divides that out.',
    variables: [
      { symbol: 'd', meaning: 'distance to the reflecting surface, in metres (m)' },
      { symbol: 'v', meaning: 'speed of sound in the medium, in metres per second (m/s)' },
      { symbol: 't', meaning: 'total time between the sound being sent and the echo being heard, in seconds (s)' },
    ],
    whenToUse: 'Whenever the distance to a reflecting surface (a cliff, the sea floor, an obstacle) needs to be found from the round-trip time of an echo.',
    relatedConceptSlugs: ['speed-of-sound-a-level'],
  },
};
