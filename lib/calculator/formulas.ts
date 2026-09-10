import type { CalculatorFormula } from './types';
import { makeProductSolvers } from './helpers';

const V = (symbol: string, label: string, unit: string) => ({ symbol, label, unit });

function motionLink(title: string) {
  return { subject: 'physics', level: 'a-level', chapter: 'motion', title };
}

export const CALCULATOR_FORMULAS: CalculatorFormula[] = [
  {
    id: 'speed',
    name: 'Speed',
    chapterLabel: 'Motion',
    expression: 'v = d / t',
    variables: [V('v', 'Speed', 'm/s'), V('d', 'Distance', 'm'), V('t', 'Time', 's')],
    solvers: makeProductSolvers(V('d', 'Distance', 'm'), V('v', 'Speed', 'm/s'), V('t', 'Time', 's')),
    chapterLink: motionLink('Motion'),
  },
  {
    id: 'suvat-v-eq-u-plus-at',
    name: 'Final Velocity (no displacement)',
    chapterLabel: 'Motion',
    expression: 'v = u + at',
    variables: [
      V('v', 'Final velocity', 'm/s'),
      V('u', 'Initial velocity', 'm/s'),
      V('a', 'Acceleration', 'm/s²'),
      V('t', 'Time', 's'),
    ],
    solvers: {
      v: {
        rearranged: 'v = u + at',
        compute: (k) => k.u + k.a * k.t,
        steps: (k, r) => ['v = u + at', `v = ${k.u} + (${k.a})(${k.t})`, `v = ${r} m/s`],
      },
      u: {
        rearranged: 'u = v − at',
        compute: (k) => k.v - k.a * k.t,
        steps: (k, r) => ['u = v − at', `u = ${k.v} − (${k.a})(${k.t})`, `u = ${r} m/s`],
      },
      a: {
        rearranged: 'a = (v − u) / t',
        compute: (k) => (k.v - k.u) / k.t,
        steps: (k, r) => ['a = (v − u) / t', `a = (${k.v} − ${k.u}) / ${k.t}`, `a = ${r} m/s²`],
      },
      t: {
        rearranged: 't = (v − u) / a',
        compute: (k) => (k.v - k.u) / k.a,
        steps: (k, r) => ['t = (v − u) / a', `t = (${k.v} − ${k.u}) / ${k.a}`, `t = ${r} s`],
      },
    },
    chapterLink: motionLink('Motion'),
  },
  {
    id: 'newtons-second-law',
    name: "Newton's Second Law",
    chapterLabel: 'Forces',
    expression: 'F = ma',
    variables: [V('F', 'Force', 'N'), V('m', 'Mass', 'kg'), V('a', 'Acceleration', 'm/s²')],
    solvers: makeProductSolvers(V('F', 'Force', 'N'), V('m', 'Mass', 'kg'), V('a', 'Acceleration', 'm/s²')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'forces', title: 'Forces' },
  },
  {
    id: 'weight',
    name: 'Weight',
    chapterLabel: 'Forces',
    expression: 'W = mg',
    variables: [V('W', 'Weight', 'N'), V('m', 'Mass', 'kg'), V('g', 'Gravitational field strength', 'm/s²')],
    solvers: makeProductSolvers(
      V('W', 'Weight', 'N'),
      V('m', 'Mass', 'kg'),
      V('g', 'Gravitational field strength', 'm/s²')
    ),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'forces', title: 'Forces' },
  },
  {
    id: 'pressure',
    name: 'Pressure',
    chapterLabel: 'Pressure',
    expression: 'P = F / A',
    variables: [V('P', 'Pressure', 'Pa'), V('F', 'Force', 'N'), V('A', 'Area', 'm²')],
    solvers: makeProductSolvers(V('F', 'Force', 'N'), V('P', 'Pressure', 'Pa'), V('A', 'Area', 'm²')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'pressure', title: 'Pressure' },
  },
  {
    id: 'work-done',
    name: 'Work Done',
    chapterLabel: 'Work and Energy',
    expression: 'W = Fd',
    variables: [V('W', 'Work done', 'J'), V('F', 'Force', 'N'), V('d', 'Distance', 'm')],
    solvers: makeProductSolvers(V('W', 'Work done', 'J'), V('F', 'Force', 'N'), V('d', 'Distance', 'm')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'work-and-energy', title: 'Work and Energy' },
  },
  {
    id: 'gravitational-pe',
    name: 'Gravitational Potential Energy',
    chapterLabel: 'Work and Energy',
    expression: 'PE = mgh',
    variables: [
      V('PE', 'Potential energy', 'J'),
      V('m', 'Mass', 'kg'),
      V('g', 'Gravitational field strength', 'm/s²'),
      V('h', 'Height', 'm'),
    ],
    solvers: {
      PE: {
        rearranged: 'PE = mgh',
        compute: (k) => k.m * k.g * k.h,
        steps: (k, r) => ['PE = mgh', `PE = (${k.m})(${k.g})(${k.h})`, `PE = ${r} J`],
      },
      m: {
        rearranged: 'm = PE / (gh)',
        compute: (k) => k.PE / (k.g * k.h),
        steps: (k, r) => ['m = PE / (gh)', `m = ${k.PE} / (${k.g} × ${k.h})`, `m = ${r} kg`],
      },
      g: {
        rearranged: 'g = PE / (mh)',
        compute: (k) => k.PE / (k.m * k.h),
        steps: (k, r) => ['g = PE / (mh)', `g = ${k.PE} / (${k.m} × ${k.h})`, `g = ${r} m/s²`],
      },
      h: {
        rearranged: 'h = PE / (mg)',
        compute: (k) => k.PE / (k.m * k.g),
        steps: (k, r) => ['h = PE / (mg)', `h = ${k.PE} / (${k.m} × ${k.g})`, `h = ${r} m`],
      },
    },
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'work-and-energy', title: 'Work and Energy' },
  },
  {
    id: 'kinetic-energy',
    name: 'Kinetic Energy',
    chapterLabel: 'Work and Energy',
    expression: 'KE = ½mv²',
    variables: [V('KE', 'Kinetic energy', 'J'), V('m', 'Mass', 'kg'), V('v', 'Speed', 'm/s')],
    solvers: {
      KE: {
        rearranged: 'KE = ½mv²',
        compute: (k) => 0.5 * k.m * k.v ** 2,
        steps: (k, r) => ['KE = ½mv²', `KE = 0.5 × ${k.m} × ${k.v}²`, `KE = ${r} J`],
      },
      m: {
        rearranged: 'm = 2·KE / v²',
        compute: (k) => (2 * k.KE) / k.v ** 2,
        steps: (k, r) => ['m = 2·KE / v²', `m = (2 × ${k.KE}) / ${k.v}²`, `m = ${r} kg`],
      },
      v: {
        rearranged: 'v = √(2·KE / m)',
        compute: (k) => Math.sqrt((2 * k.KE) / k.m),
        steps: (k, r) => ['v = √(2·KE / m)', `v = √((2 × ${k.KE}) / ${k.m})`, `v = ${r} m/s (taking the positive root)`],
      },
    },
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'work-and-energy', title: 'Work and Energy' },
  },
  {
    id: 'power',
    name: 'Power',
    chapterLabel: 'Work and Energy',
    expression: 'P = W / t',
    variables: [V('P', 'Power', 'W'), V('W', 'Work done', 'J'), V('t', 'Time', 's')],
    solvers: makeProductSolvers(V('W', 'Work done', 'J'), V('P', 'Power', 'W'), V('t', 'Time', 's')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'work-and-energy', title: 'Work and Energy' },
  },
  {
    id: 'ohms-law',
    name: "Ohm's Law",
    chapterLabel: 'Electricity',
    expression: 'V = IR',
    variables: [V('V', 'Voltage', 'V'), V('I', 'Current', 'A'), V('R', 'Resistance', 'Ω')],
    solvers: makeProductSolvers(V('V', 'Voltage', 'V'), V('I', 'Current', 'A'), V('R', 'Resistance', 'Ω')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'electricity', title: 'Electricity' },
  },
  {
    id: 'electrical-power',
    name: 'Electrical Power',
    chapterLabel: 'Electricity',
    expression: 'P = VI',
    variables: [V('P', 'Power', 'W'), V('V', 'Voltage', 'V'), V('I', 'Current', 'A')],
    solvers: makeProductSolvers(V('P', 'Power', 'W'), V('V', 'Voltage', 'V'), V('I', 'Current', 'A')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'electricity', title: 'Electricity' },
  },
  {
    id: 'electric-charge',
    name: 'Electric Charge',
    chapterLabel: 'Electricity',
    expression: 'Q = It',
    variables: [V('Q', 'Charge', 'C'), V('I', 'Current', 'A'), V('t', 'Time', 's')],
    solvers: makeProductSolvers(V('Q', 'Charge', 'C'), V('I', 'Current', 'A'), V('t', 'Time', 's')),
    chapterLink: { subject: 'physics', level: 'a-level', chapter: 'electricity', title: 'Electricity' },
  },
];
