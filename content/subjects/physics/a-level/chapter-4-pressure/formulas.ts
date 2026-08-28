import type { Formula } from '@/types/content';

export const chapter4APressureFormulas: Record<string, Formula> = {
  'pressure-force-area-formula': {
    slug: 'pressure-force-area-formula',
    name: 'Pressure',
    expression: 'P = F / A',
    meaning: 'Pressure measures how concentrated a force is — the same force spread over a smaller area produces a much bigger pressure.',
    variables: [
      { symbol: 'P', meaning: 'pressure, in pascals (Pa), where 1 Pa = 1 N/m²' },
      { symbol: 'F', meaning: 'force applied perpendicular to the surface, in newtons (N)' },
      { symbol: 'A', meaning: 'area over which the force acts, in square metres (m²)' },
    ],
    whenToUse: 'Whenever the pressure produced by a force acting over a known area needs to be found (or either of the other two quantities, given the other two).',
    relatedConceptSlugs: ['pressure-force-and-area-a-level'],
  },
  'pressure-due-to-liquid-column-formula': {
    slug: 'pressure-due-to-liquid-column-formula',
    name: 'Pressure Due to a Liquid Column',
    expression: 'P = hρg',
    meaning: 'The pressure at a depth within a liquid depends only on how deep the point is, the density of the liquid, and gravity — not on the shape or width of the container.',
    variables: [
      { symbol: 'P', meaning: 'pressure due to the liquid column, in pascals (Pa)' },
      { symbol: 'h', meaning: 'depth below the liquid surface, in metres (m)' },
      { symbol: 'ρ', meaning: 'density of the liquid, in kilograms per cubic metre (kg/m³)' },
      { symbol: 'g', meaning: 'the acceleration due to gravity, approximately 9.8 m/s²' },
    ],
    whenToUse: 'Whenever the pressure at a given depth within a liquid needs to be found — for example, water pressure at the bottom of a tank, or atmospheric pressure modeled as a column of air.',
    relatedConceptSlugs: ['pressure-in-fluids-a-level'],
  },
  'density-formula-a-level': {
    slug: 'density-formula-a-level',
    name: 'Density',
    expression: 'ρ = m / V',
    meaning: 'Density measures how tightly packed the mass of a substance is — how much mass is squeezed into each unit of volume.',
    variables: [
      { symbol: 'ρ', meaning: 'density, in kilograms per cubic metre (kg/m³), or grams per cubic centimetre (g/cm³)' },
      { symbol: 'm', meaning: 'mass of the substance, in kilograms (kg) or grams (g)' },
      { symbol: 'V', meaning: 'volume of the substance, in cubic metres (m³) or cubic centimetres (cm³)' },
    ],
    whenToUse: "Whenever a substance's density needs to be found from its mass and volume (or either of the other two, given the other two).",
    relatedConceptSlugs: ['density-a-level'],
  },
  'relative-density-formula': {
    slug: 'relative-density-formula',
    name: 'Relative Density (Specific Gravity)',
    expression: 'RD = ρ(substance) / ρ(water)',
    meaning: "Relative density compares a substance's density directly against water's — a relative density greater than 1 means the substance is denser than water (and sinks in it); less than 1 means it is less dense (and floats).",
    variables: [
      { symbol: 'RD', meaning: 'relative density (specific gravity) — a pure ratio, with no units' },
      { symbol: 'ρ(substance)', meaning: 'density of the substance, in kg/m³ or g/cm³' },
      { symbol: 'ρ(water)', meaning: 'density of water, 1000 kg/m³ (or 1 g/cm³), in the same units as ρ(substance)' },
    ],
    whenToUse: "Whenever comparing a substance's density to water's, or predicting whether it will float or sink in water.",
    relatedConceptSlugs: ['relative-density-a-level'],
  },
};
