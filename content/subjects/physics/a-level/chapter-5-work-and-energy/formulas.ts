import type { Formula } from '@/types/content';

export const chapter5AWorkEnergyFormulas: Record<string, Formula> = {
  'work-done-formula': {
    slug: 'work-done-formula',
    name: 'Work Done',
    expression: 'W = Fd',
    meaning: 'Work is done whenever a force moves an object through a distance in the direction of the force. No work is done if the object does not move, or if the force has no component in the direction of motion.',
    variables: [
      { symbol: 'W', meaning: 'work done, in joules (J)' },
      { symbol: 'F', meaning: 'force applied, in newtons (N)' },
      { symbol: 'd', meaning: 'distance moved in the direction of the force, in metres (m)' },
    ],
    whenToUse: 'Whenever the work done by a force moving an object through a known distance needs to be found.',
    relatedConceptSlugs: ['work-done-a-level'],
  },
  'power-formula-a-level': {
    slug: 'power-formula-a-level',
    name: 'Power',
    expression: 'P = W / t',
    meaning: 'Power measures how quickly work is done, or how quickly energy is transferred — the same amount of work done faster means a greater power.',
    variables: [
      { symbol: 'P', meaning: 'power, in watts (W), where 1 W = 1 J/s' },
      { symbol: 'W', meaning: 'work done (or energy transferred), in joules (J)' },
      { symbol: 't', meaning: 'time taken, in seconds (s)' },
    ],
    whenToUse: 'Whenever the rate at which work is done, or energy is transferred, needs to be found.',
    relatedConceptSlugs: ['power-a-level'],
  },
  'kinetic-energy-formula': {
    slug: 'kinetic-energy-formula',
    name: 'Kinetic Energy',
    expression: 'KE = ½mv²',
    meaning: 'Kinetic energy is the energy an object has because it is moving. It grows with the SQUARE of speed, so doubling the speed of an object quadruples its kinetic energy.',
    variables: [
      { symbol: 'KE', meaning: 'kinetic energy, in joules (J)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'v', meaning: 'speed of the object, in metres per second (m/s)' },
    ],
    whenToUse: 'Whenever the energy of a moving object needs to be found from its mass and speed.',
    relatedConceptSlugs: ['kinetic-energy-a-level'],
  },
  'gravitational-potential-energy-formula': {
    slug: 'gravitational-potential-energy-formula',
    name: 'Gravitational Potential Energy',
    expression: 'GPE = mgh',
    meaning: 'Gravitational potential energy is the energy an object has because of its height above a reference level — it is the energy that would be released if the object fell back down to that level.',
    variables: [
      { symbol: 'GPE', meaning: 'gravitational potential energy, in joules (J)' },
      { symbol: 'm', meaning: 'mass of the object, in kilograms (kg)' },
      { symbol: 'g', meaning: 'the acceleration due to gravity, approximately 9.8 m/s²' },
      { symbol: 'h', meaning: 'height above the reference level, in metres (m)' },
    ],
    whenToUse: 'Whenever the gravitational potential energy of an object at a known height needs to be found.',
    relatedConceptSlugs: ['gravitational-potential-energy-a-level'],
  },
  'elastic-potential-energy-formula-a-level': {
    slug: 'elastic-potential-energy-formula-a-level',
    name: 'Elastic Potential Energy',
    expression: 'EPE = ½kx²',
    meaning: 'Elastic potential energy is the energy stored in a stretched or compressed elastic object, such as a spring — it grows with the square of the extension, so stretching a spring twice as far stores four times the energy.',
    variables: [
      { symbol: 'EPE', meaning: 'elastic potential energy, in joules (J)' },
      { symbol: 'k', meaning: 'the spring constant — a measure of the spring\'s stiffness, in newtons per metre (N/m)' },
      { symbol: 'x', meaning: 'the extension or compression from the natural length, in metres (m)' },
    ],
    whenToUse: 'Whenever the energy stored in a stretched or compressed spring needs to be found.',
    relatedConceptSlugs: ['elastic-potential-energy-a-level'],
  },
};
