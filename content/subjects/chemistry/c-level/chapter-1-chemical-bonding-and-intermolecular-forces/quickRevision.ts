import type { QuickRevision } from '@/types/content';

export const chapter1BondingQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-octet-rule',
      keyPoint: 'Atoms bond to reach 8 valence electrons (an octet), matching a noble gas.',
      miniExample: 'Na loses 1 electron; Cl gains 1 — both reach a stable octet.',
    },
    {
      conceptSlug: 'electronegativity-and-bond-type',
      keyPoint: 'ΔEN < 0.4 nonpolar covalent, 0.4–1.7 polar covalent, > 1.7 ionic.',
      formulaSlug: 'electronegativity-difference-formula',
      miniExample: 'Na (0.93) and Cl (3.16): ΔEN = 2.23 → ionic.',
    },
    {
      conceptSlug: 'formation-of-ionic-bonds',
      keyPoint: 'Ionic bonds: complete electron transfer, metal → nonmetal.',
      miniExample: 'Mg loses 2e⁻, O gains 2e⁻ → MgO.',
    },
    {
      conceptSlug: 'formation-of-covalent-bonds',
      keyPoint: 'Covalent bonds: atoms share electron pairs instead of transferring them.',
      miniExample: 'Two O atoms share 2 pairs → O₂ (a double bond).',
    },
    {
      conceptSlug: 'hydrogen-bonding',
      keyPoint: 'H bonded to N, O, or F creates an unusually strong intermolecular attraction.',
      miniExample: "Hydrogen bonds between water molecules give water its high boiling point.",
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'valence-electrons-and-chemical-bonding',
      keyPoint: 'Only outer-shell (valence) electrons take part in bonding.',
      miniExample: 'Chlorine has 17 electrons total, but only 7 are valence electrons.',
    },
    {
      conceptSlug: 'the-octet-rule',
      keyPoint: 'Atoms gain, lose, or share electrons to reach a stable 8-electron outer shell.',
      miniExample: 'Mg forms Mg²⁺ by losing both valence electrons.',
    },
    {
      conceptSlug: 'electronegativity-and-bond-type',
      keyPoint: 'ΔEN = |EN₁ − EN₂| predicts ionic vs. polar covalent vs. nonpolar covalent.',
      formulaSlug: 'electronegativity-difference-formula',
      miniExample: 'C–H: ΔEN = 0.35 → essentially nonpolar.',
    },
    {
      conceptSlug: 'properties-of-ionic-compounds',
      keyPoint: 'Ionic compounds: high melting point, hard but brittle, conduct only molten/dissolved.',
      miniExample: 'Solid NaCl does not conduct; dissolved NaCl does.',
    },
    {
      conceptSlug: 'single-double-and-triple-covalent-bonds',
      keyPoint: 'More shared electron pairs → shorter, stronger bonds.',
      miniExample: "N₂'s triple bond makes nitrogen gas very unreactive.",
    },
    {
      conceptSlug: 'polarity-of-covalent-bonds',
      keyPoint: 'The more electronegative atom in a bond becomes δ−; the other becomes δ+.',
      miniExample: 'In C=O, oxygen is δ− and carbon is δ+.',
    },
    {
      conceptSlug: 'van-der-waals-forces',
      keyPoint: 'Temporary, fluctuating dipoles create weak attractions between ALL molecules.',
      miniExample: 'Van der Waals forces alone let nonpolar O₂ condense into a liquid when cold enough.',
    },
    {
      conceptSlug: 'metallic-bonding-and-properties',
      keyPoint: 'Metal ions in a lattice + a delocalized "sea" of electrons.',
      miniExample: "Copper's delocalized electrons make it an excellent electrical conductor.",
    },
  ],
};
