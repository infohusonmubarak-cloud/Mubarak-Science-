import type { Formula } from '@/types/content';

export const chapter4PowerFormulas: Record<string, Formula> = {
  'power-formula': {
    slug: 'power-formula',
    name: 'Power',
    expression: 'P = W / t',
    meaning: 'Power is the rate at which work is done or energy is transferred — how quickly energy is converted from one form to another.',
    variables: [
      { symbol: 'P', meaning: 'Power, in watts (W), where 1 W = 1 J/s' },
      { symbol: 'W', meaning: 'Work done (or energy transferred), in joules' },
      { symbol: 't', meaning: 'Time taken, in seconds' },
    ],
    whenToUse: 'Use whenever you need to compare how quickly different amounts of work are done, or find the time needed to do a certain amount of work at a known power.',
    relatedConceptSlugs: ['power-and-its-units'],
  },
  'efficiency-formula': {
    slug: 'efficiency-formula',
    name: 'Efficiency',
    expression: 'η = (useful energy output / total energy input) × 100%',
    meaning: 'Efficiency measures what fraction of the energy put into a machine or process is converted into useful output, rather than being wasted (usually as heat).',
    variables: [
      { symbol: 'η', meaning: 'Efficiency, expressed as a percentage' },
      { symbol: 'useful energy output', meaning: 'The energy converted into the intended, useful form, in joules' },
      { symbol: 'total energy input', meaning: 'The total energy supplied to the machine or process, in joules' },
    ],
    whenToUse: 'Use to evaluate how well a machine or energy-conversion process performs — no real machine achieves 100% efficiency, since some energy is always lost, usually to heat or friction.',
    relatedConceptSlugs: ['efficiency-of-machines'],
  },
  'hookes-law-formula': {
    slug: 'hookes-law-formula',
    name: "Hooke's Law",
    expression: 'F = kx',
    meaning: 'Within its elastic limit, the force needed to stretch or compress a spring is directly proportional to how far it is stretched or compressed.',
    variables: [
      { symbol: 'F', meaning: 'Applied force (or restoring force), in newtons' },
      { symbol: 'k', meaning: 'Spring constant — a measure of the spring\'s stiffness, in N/m' },
      { symbol: 'x', meaning: 'Extension or compression from the natural (unstretched) length, in metres' },
    ],
    whenToUse: "Use to find the force needed to stretch a spring by a known amount, or the extension produced by a known force — valid only within the spring's elastic limit.",
    relatedConceptSlugs: ['hookes-law-and-spring-constant'],
  },
  'elastic-potential-energy-formula': {
    slug: 'elastic-potential-energy-formula',
    name: 'Elastic Potential Energy',
    expression: 'E = ½kx²',
    meaning: 'The energy stored in a stretched or compressed spring, which can be recovered as the spring returns to its natural length.',
    variables: [
      { symbol: 'E', meaning: 'Elastic potential energy, in joules' },
      { symbol: 'k', meaning: 'Spring constant, in N/m' },
      { symbol: 'x', meaning: 'Extension or compression from the natural length, in metres' },
    ],
    whenToUse: 'Use to find the energy stored in a stretched or compressed spring, e.g. to analyse energy transfers in systems using springs.',
    relatedConceptSlugs: ['elastic-potential-energy-in-a-spring'],
  },
};
