import type { Formula } from '@/types/content';

export const chapter9CCapacitorFormulas: Record<string, Formula> = {
  'capacitance-definition-formula': {
    slug: 'capacitance-definition-formula',
    name: 'Definition of Capacitance',
    expression: 'C = Q/V',
    meaning: "A capacitor's capacitance measures how much charge it can store per volt of potential difference applied across it — a bigger capacitance stores more charge for the same voltage.",
    variables: [
      { symbol: 'C', meaning: 'capacitance, in farads (F)' },
      { symbol: 'Q', meaning: 'magnitude of charge stored on each plate, in coulombs (C)' },
      { symbol: 'V', meaning: 'potential difference across the capacitor, in volts (V)' },
    ],
    whenToUse: 'Whenever the capacitance of a capacitor needs to be found from the charge it stores and the voltage across it (or vice versa).',
    relatedConceptSlugs: ['capacitance-of-a-capacitor'],
  },
  'parallel-plate-capacitance-formula': {
    slug: 'parallel-plate-capacitance-formula',
    name: 'Parallel-Plate Capacitance',
    expression: 'C = ε₀εᵣA/d',
    meaning: 'A parallel-plate capacitor\'s capacitance depends on the area of its plates (more area, more charge storage), how far apart they are (closer plates, more capacitance), and the insulating material (dielectric) between them.',
    variables: [
      { symbol: 'C', meaning: 'capacitance, in farads (F)' },
      { symbol: 'ε₀', meaning: 'permittivity of free space, 8.85×10⁻¹² F/m' },
      { symbol: 'εᵣ', meaning: 'relative permittivity (dielectric constant) of the material between the plates (dimensionless; 1 for vacuum/air)' },
      { symbol: 'A', meaning: 'area of overlap between the two plates, in square metres (m²)' },
      { symbol: 'd', meaning: 'separation between the plates, in metres (m)' },
    ],
    whenToUse: "Whenever a parallel-plate capacitor's capacitance needs to be found (or designed) from its physical dimensions and the material between its plates.",
    relatedConceptSlugs: ['parallel-plate-capacitor'],
  },
  'capacitor-energy-formula': {
    slug: 'capacitor-energy-formula',
    name: 'Energy Stored in a Capacitor',
    expression: 'E = ½CV²',
    meaning: 'A charged capacitor stores energy in the electric field between its plates — this energy grows with capacitance, and with the SQUARE of the voltage across it.',
    variables: [
      { symbol: 'E', meaning: 'energy stored, in joules (J)' },
      { symbol: 'C', meaning: 'capacitance, in farads (F)' },
      { symbol: 'V', meaning: 'voltage across the capacitor, in volts (V)' },
    ],
    whenToUse: 'Whenever the energy stored by a charged capacitor needs to be found from its capacitance and voltage.',
    relatedConceptSlugs: ['energy-stored-in-a-capacitor'],
  },
  'capacitor-combination-formula': {
    slug: 'capacitor-combination-formula',
    name: 'Capacitors in Series and Parallel',
    expression: '1/C_series = 1/C₁ + 1/C₂ + …;   C_parallel = C₁ + C₂ + …',
    meaning: 'Combining capacitors changes the total capacitance in opposite ways depending on the arrangement — series combination always reduces total capacitance below the smallest individual value, while parallel combination always increases it.',
    variables: [
      { symbol: 'C_series', meaning: 'total (equivalent) capacitance of capacitors in series, in farads (F)' },
      { symbol: 'C_parallel', meaning: 'total (equivalent) capacitance of capacitors in parallel, in farads (F)' },
      { symbol: 'C₁, C₂, …', meaning: 'the individual capacitances being combined, in farads (F)' },
    ],
    whenToUse: 'Whenever the total (equivalent) capacitance of several capacitors connected in series or in parallel needs to be found.',
    relatedConceptSlugs: ['capacitors-in-series-and-parallel'],
  },
};
