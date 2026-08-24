import type { Formula } from '@/types/content';

export const chapter5AcidBaseFormulas: Record<string, Formula> = {
  'ionic-product-of-water-formula': {
    slug: 'ionic-product-of-water-formula',
    name: 'Ionic Product of Water, Kw',
    expression: 'Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ (at 25°C)',
    meaning: "The product of hydrogen ion and hydroxide ion concentrations is always constant in water at a given temperature — true for pure water AND for any aqueous acid or base solution.",
    variables: [
      { symbol: 'Kw', meaning: 'the ionic product (self-ionisation constant) of water, 1.0 × 10⁻¹⁴ at 25°C' },
      { symbol: '[H⁺]', meaning: 'hydrogen ion (hydronium) concentration, in mol/L' },
      { symbol: '[OH⁻]', meaning: 'hydroxide ion concentration, in mol/L' },
    ],
    whenToUse: 'Whenever you know either [H⁺] or [OH⁻] in an aqueous solution at 25°C and need the other.',
    relatedConceptSlugs: ['ionic-product-of-water', 'the-ph-scale'],
  },
  'ph-formula': {
    slug: 'ph-formula',
    name: 'pH',
    expression: 'pH = −log₁₀[H⁺]',
    meaning: 'A convenient logarithmic scale for expressing how acidic or basic a solution is, compressing the enormous range of possible [H⁺] values into a simple 0–14 scale.',
    variables: [
      { symbol: 'pH', meaning: 'the pH value (no units)' },
      { symbol: '[H⁺]', meaning: 'hydrogen ion concentration, in mol/L' },
    ],
    whenToUse: 'Whenever you need to convert a hydrogen ion concentration into the standard pH scale, or vice versa (using [H⁺] = 10⁻ᵖᴴ).',
    relatedConceptSlugs: ['the-ph-scale'],
  },
  'poh-formula': {
    slug: 'poh-formula',
    name: 'pOH and the pH + pOH = 14 Relationship',
    expression: 'pOH = −log₁₀[OH⁻]   and   pH + pOH = 14 (at 25°C)',
    meaning: 'pOH measures basicity the same way pH measures acidity — and because Kw links [H⁺] and [OH⁻], pH and pOH always add up to 14 at 25°C.',
    variables: [
      { symbol: 'pOH', meaning: 'the pOH value (no units)' },
      { symbol: '[OH⁻]', meaning: 'hydroxide ion concentration, in mol/L' },
      { symbol: 'pH', meaning: 'the pH value of the same solution' },
    ],
    whenToUse: 'Whenever you know pH and need pOH (or [OH⁻]) without recalculating from scratch, at 25°C.',
    relatedConceptSlugs: ['the-ph-scale', 'ionic-product-of-water'],
  },
  'ka-formula': {
    slug: 'ka-formula',
    name: 'Acid Dissociation Constant, Ka',
    expression: 'For HA ⇌ H⁺ + A⁻:  Ka = [H⁺][A⁻] / [HA]',
    meaning: 'Quantifies how much a weak acid ionises in water — a larger Ka means a stronger (more ionised) weak acid.',
    variables: [
      { symbol: 'Ka', meaning: 'the acid dissociation constant, in mol/L' },
      { symbol: '[H⁺]', meaning: 'hydrogen ion concentration at equilibrium, in mol/L' },
      { symbol: '[A⁻]', meaning: 'concentration of the conjugate base at equilibrium, in mol/L' },
      { symbol: '[HA]', meaning: 'concentration of the undissociated weak acid at equilibrium, in mol/L' },
    ],
    whenToUse: 'Whenever you need to quantify or compare the strength of weak acids, or calculate the pH of a weak acid solution.',
    relatedConceptSlugs: ['the-acid-dissociation-constant-ka', 'strong-and-weak-acids'],
  },
  'henderson-hasselbalch-formula': {
    slug: 'henderson-hasselbalch-formula',
    name: 'The Henderson–Hasselbalch Equation',
    expression: 'pH = pKa + log₁₀([A⁻] / [HA])',
    meaning: "Calculates the pH of a buffer solution directly from the ratio of conjugate base to weak acid, without needing a full equilibrium calculation.",
    variables: [
      { symbol: 'pH', meaning: 'the pH of the buffer solution' },
      { symbol: 'pKa', meaning: '−log₁₀(Ka) of the weak acid used in the buffer' },
      { symbol: '[A⁻]', meaning: 'concentration of the conjugate base (e.g. from a salt) in the buffer, in mol/L' },
      { symbol: '[HA]', meaning: 'concentration of the weak acid in the buffer, in mol/L' },
    ],
    whenToUse: 'Whenever you need the pH of a buffer solution made from a weak acid and its conjugate base (or a weak base and its conjugate acid).',
    relatedConceptSlugs: ['how-buffer-solutions-work', 'the-henderson-hasselbalch-equation'],
  },
};
