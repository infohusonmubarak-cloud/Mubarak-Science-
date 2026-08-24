import type { QuickRevision } from '@/types/content';

export const chapter9ElectricFieldQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'coulombs-law',
      keyPoint: 'F = kq₁q₂/r²; like charges repel, opposite attract, force follows inverse-square law.',
      formulaSlug: 'coulombs-law-formula',
      miniExample: '3µC and 2µC charges 0.5 m apart attract with ≈0.216 N.',
    },
    {
      conceptSlug: 'electric-field-and-field-intensity',
      keyPoint: 'E = F/q defines field strength independent of the test charge used.',
      formulaSlug: 'electric-field-intensity-formula',
      miniExample: '0.4 N on a 2µC charge gives E = 2×10⁵ N/C.',
    },
    {
      conceptSlug: 'electric-potential-and-potential-difference',
      keyPoint: 'V = kQ/r; potential difference (voltage) drives current in circuits.',
      formulaSlug: 'electric-potential-formula',
      miniExample: '5µC at 0.3 m gives V ≈ 1.5×10⁵ V.',
    },
    {
      conceptSlug: 'potential-difference-between-parallel-plates',
      keyPoint: 'V = Ed for the uniform field between parallel plates.',
      formulaSlug: 'parallel-plate-pd-formula',
      miniExample: '240 V across a 0.02 m gap gives E = 12,000 V/m.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'electric-lines-of-force',
      keyPoint: 'Field lines point from + to −; closer lines mean a stronger field.',
      miniExample: 'Evenly spaced parallel lines represent a uniform field between plates.',
    },
    {
      conceptSlug: 'electric-charge-distribution',
      keyPoint: 'Charge concentrates at sharply curved points on a conductor.',
      miniExample: 'Lightning rods use sharp points to concentrate charge.',
    },
    {
      conceptSlug: 'equipotential-surfaces',
      keyPoint: 'Equipotential surfaces are always perpendicular to field lines; no work along them.',
      miniExample: 'A bird on one power line is safe — no potential difference across its body.',
    },
    {
      conceptSlug: 'electric-potential-of-the-earth',
      keyPoint: "The Earth's potential is defined as zero — a stable, universal reference (ground).",
      miniExample: 'Grounding an appliance provides a safe path to Earth\'s zero-potential reference.',
    },
  ],
};
