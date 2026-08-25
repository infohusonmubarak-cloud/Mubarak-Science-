import type { Formula } from '@/types/content';

export const chapter13CModernFormulas: Record<string, Formula> = {
  'radioactive-decay-formula': {
    slug: 'radioactive-decay-formula',
    name: 'Radioactive Decay and Half-Life',
    expression: 'fraction remaining = (1/2) raised to the power (t / T_half)',
    meaning: 'A radioactive sample decays so that its half-life, T_half, is the time for exactly half of it to decay — after n half-lives have passed, only (1/2) to the power n of the original sample remains.',
    variables: [
      { symbol: 't', meaning: 'time elapsed, in the same units as the half-life' },
      { symbol: 'T_half', meaning: 'the half-life of the radioactive substance — the time for half of it to decay' },
    ],
    whenToUse: 'Whenever the fraction (or amount) of a radioactive sample remaining after a given time needs to be found.',
    relatedConceptSlugs: ['radioactivity-and-its-uses'],
  },
  'mass-energy-equivalence-formula': {
    slug: 'mass-energy-equivalence-formula',
    name: 'Mass-Energy Equivalence',
    expression: 'E = mc squared',
    meaning: "Mass and energy are two forms of the same thing — a tiny amount of mass converts into an enormous amount of energy, since the conversion factor (the speed of light squared) is such a huge number. This is exactly the energy source behind nuclear reactions.",
    variables: [
      { symbol: 'E', meaning: 'energy released, in joules (J)' },
      { symbol: 'm', meaning: 'mass converted into energy, in kilograms (kg)' },
      { symbol: 'c', meaning: 'the speed of light, 3 times 10 to the power 8 m/s' },
    ],
    whenToUse: 'Whenever the energy released by a nuclear reaction (fission or fusion) needs to be found from the mass converted during the reaction.',
    relatedConceptSlugs: ['nuclear-energy-and-environmental-impact'],
  },
  'de-broglie-wavelength-formula': {
    slug: 'de-broglie-wavelength-formula',
    name: 'The de Broglie Wavelength',
    expression: 'lambda = h / p = h / (mv)',
    meaning: 'Every moving particle, not just light, has an associated wavelength — even everyday objects, though their wavelength is far too tiny to ever notice.',
    variables: [
      { symbol: 'lambda', meaning: "the particle's de Broglie wavelength, in metres (m)" },
      { symbol: 'h', meaning: "Planck's constant, 6.626 times 10 to the power -34 J times s" },
      { symbol: 'p', meaning: "the particle's momentum, in kilogram-metres per second (kg m/s)" },
      { symbol: 'm, v', meaning: "the particle's mass (kg) and speed (m/s)" },
    ],
    whenToUse: 'Whenever the wavelength associated with a moving particle (such as an electron) needs to be found.',
    relatedConceptSlugs: ['wave-particle-duality'],
  },
  'time-dilation-formula': {
    slug: 'time-dilation-formula',
    name: 'Time Dilation',
    expression: 'delta t = gamma times delta t_0,   where gamma = 1 / sqrt(1 minus v squared over c squared)',
    meaning: 'A clock moving at high speed relative to an observer runs slower, from that observer\'s point of view — time itself passes at a different rate depending on relative motion.',
    variables: [
      { symbol: 'delta t', meaning: 'the time interval measured by a stationary observer, in seconds (s)' },
      { symbol: 'delta t_0', meaning: 'the "proper time" — the time interval measured by an observer moving WITH the clock, in seconds (s)' },
      { symbol: 'gamma', meaning: 'the Lorentz factor (dimensionless), always greater than or equal to 1' },
      { symbol: 'v', meaning: 'the relative speed between the two observers, in metres per second (m/s)' },
      { symbol: 'c', meaning: 'the speed of light, 3 times 10 to the power 8 m/s' },
    ],
    whenToUse: 'Whenever comparing how much time passes for two observers in relative motion at a significant fraction of the speed of light.',
    relatedConceptSlugs: ['special-theory-of-relativity'],
  },
};
