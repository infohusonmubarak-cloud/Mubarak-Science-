import type { QuickRevision } from '@/types/content';

export const chapter5AcidBaseQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'bronsted-lowry-theory-of-acids-and-bases',
      keyPoint: 'Brønsted–Lowry acid = proton donor; base = proton acceptor.',
      miniExample: 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: water is the acid, ammonia is the base.',
    },
    {
      conceptSlug: 'ionic-product-of-water',
      keyPoint: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C, in ANY aqueous solution.',
      formulaSlug: 'ionic-product-of-water-formula',
      miniExample: '[H⁺]=1e-3 → [OH⁻]=1e-11.',
    },
    {
      conceptSlug: 'the-ph-scale',
      keyPoint: 'pH = −log₁₀[H⁺]. Each pH unit is a 10× change in [H⁺].',
      formulaSlug: 'ph-formula',
      miniExample: '[H⁺]=1e-3 mol/L → pH = 3.',
    },
    {
      conceptSlug: 'strong-and-weak-acids',
      keyPoint: 'Strong acids ionise completely; weak acids only partially.',
      miniExample: '0.1M HCl → pH≈1; 0.1M acetic acid → pH≈2.9.',
    },
    {
      conceptSlug: 'how-buffer-solutions-work',
      keyPoint: 'A buffer needs a weak acid AND its conjugate base, both present.',
      miniExample: "Blood's H₂CO₃/HCO₃⁻ buffer keeps pH near 7.4.",
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'arrhenius-theory-of-acids-and-bases',
      keyPoint: 'Arrhenius acid increases [H⁺] in water; base increases [OH⁻] in water.',
      miniExample: 'Vinegar (acid) turns litmus red; ammonia (base) turns it blue.',
    },
    {
      conceptSlug: 'bronsted-lowry-theory-of-acids-and-bases',
      keyPoint: 'A broader theory than Arrhenius — works for NH₃, which has no OH⁻.',
      miniExample: 'Water can act as either acid or base (amphoteric).',
    },
    {
      conceptSlug: 'ionic-product-of-water',
      keyPoint: 'Kw links [H⁺] and [OH⁻] in every aqueous solution.',
      formulaSlug: 'ionic-product-of-water-formula',
      miniExample: '[OH⁻]=1e-2 → [H⁺]=1e-12.',
    },
    {
      conceptSlug: 'the-ph-scale',
      keyPoint: 'pH + pOH = 14 at 25°C.',
      formulaSlug: 'poh-formula',
      miniExample: '[H⁺]=1e-10 → pH=10 (basic).',
    },
    {
      conceptSlug: 'the-acid-dissociation-constant-ka',
      keyPoint: 'Ka quantifies weak acid strength; use it to calculate weak-acid pH.',
      formulaSlug: 'ka-formula',
      miniExample: '0.10M acetic acid (Ka=1.8e-5) → pH ≈ 2.87.',
    },
    {
      conceptSlug: 'strong-and-weak-bases',
      keyPoint: 'Strong bases (NaOH) dissociate completely; weak bases (NH₃) partially react with water.',
      miniExample: 'NaOH is already Na⁺/OH⁻ ions in the solid — no equilibrium needed.',
    },
    {
      conceptSlug: 'salt-hydrolysis',
      keyPoint: 'Weak-acid salts hydrolyse basic; weak-base salts hydrolyse acidic.',
      miniExample: 'Sodium acetate solution is basic; ammonium chloride solution is acidic.',
    },
    {
      conceptSlug: 'the-henderson-hasselbalch-equation',
      keyPoint: 'pH = pKa + log([A⁻]/[HA]) — when [A⁻]=[HA], pH = pKa.',
      formulaSlug: 'henderson-hasselbalch-formula',
      miniExample: 'pKa=4.74, ratio=2 → pH = 5.04.',
    },
  ],
};
