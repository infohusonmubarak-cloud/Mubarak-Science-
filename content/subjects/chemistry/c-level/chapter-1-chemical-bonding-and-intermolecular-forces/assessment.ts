import type { Assessment } from '@/types/content';

export const chapter1BondingAssessment: Assessment = {
  id: 'chemical-bonding-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'cb-a1',
      part: 'concept',
      conceptSlug: 'the-octet-rule',
      conceptTitle: 'The Octet Rule',
      question: {
        id: 'cb-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Why do atoms form chemical bonds, according to the octet rule?',
        options: [
          { id: 'a', text: 'To become radioactive' },
          { id: 'b', text: 'To reach a stable outer shell of 8 electrons, like a noble gas' },
          { id: 'c', text: 'To increase their atomic mass' },
          { id: 'd', text: 'To lose all of their electrons' },
        ],
        correctOptionId: 'b',
        hints: ['Think about which atoms almost never bond at all — and how many valence electrons they have.'],
        explanation: 'Atoms gain, lose, or share electrons through bonding specifically to reach the same stable 8-electron outer shell that noble gases already have.',
      },
    },
    {
      id: 'cb-a2',
      part: 'concept',
      conceptSlug: 'formation-of-covalent-bonds',
      conceptTitle: 'Formation of Covalent Bonds',
      question: {
        id: 'cb-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What fundamentally distinguishes a covalent bond from an ionic bond?',
        options: [
          { id: 'a', text: 'Covalent bonds only form between metals.' },
          { id: 'b', text: 'In a covalent bond, electrons are shared; in an ionic bond, they are transferred.' },
          { id: 'c', text: 'Ionic bonds are always stronger than covalent bonds.' },
          { id: 'd', text: 'Covalent bonds do not involve electrons at all.' },
        ],
        correctOptionId: 'b',
        hints: ["Think about what happens to the electrons in each case."],
        explanation: 'A covalent bond involves atoms sharing electron pairs; an ionic bond involves one atom transferring electrons completely to another.',
      },
    },
    {
      id: 'cb-a3',
      part: 'concept',
      conceptSlug: 'hydrogen-bonding',
      conceptTitle: 'Hydrogen Bonding',
      question: {
        id: 'cb-a3-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is hydrogen bonding unusually strong compared to other intermolecular forces?',
        options: [
          { id: 'a', text: "Hydrogen is a metal, so it bonds like a metallic bond." },
          { id: 'b', text: "A hydrogen atom bonded to N, O, or F is small and exposed, so it attracts a lone pair on a neighbouring molecule especially strongly." },
          { id: 'c', text: 'Hydrogen bonds are actually covalent bonds between molecules.' },
          { id: 'd', text: 'Hydrogen has more protons than any other element.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about how little electron shielding a hydrogen nucleus has.'],
        explanation: "Hydrogen's small size and lack of shielding electrons let its bonded proton attract a lone pair on a nearby N, O, or F atom unusually strongly compared to typical dipole-dipole attractions.",
      },
    },

    // Part B — Formula & Application
    {
      id: 'cb-b1',
      part: 'formula-application',
      conceptSlug: 'electronegativity-and-bond-type',
      conceptTitle: 'Electronegativity and Bond Type',
      question: {
        id: 'cb-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Potassium has an electronegativity of 0.82; oxygen has 3.44. Find ΔEN for a K–O bond.',
        hints: ['ΔEN = |EN₁ − EN₂|.', '|0.82 − 3.44|.'],
        correctAnswer: 2.62,
        tolerance: 0.02,
        explanation: 'ΔEN = |0.82 − 3.44| = 2.62 — well above 1.7, so K–O is an ionic bond.',
      },
    },
    {
      id: 'cb-b2',
      part: 'formula-application',
      conceptSlug: 'electronegativity-and-bond-type',
      conceptTitle: 'Electronegativity and Bond Type',
      question: {
        id: 'cb-b2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Nitrogen has an electronegativity of 3.04; hydrogen has 2.20. What kind of bond is N–H?',
        options: [
          { id: 'a', text: 'Nonpolar covalent (ΔEN < 0.4)' },
          { id: 'b', text: 'Polar covalent (0.4 ≤ ΔEN ≤ 1.7)' },
          { id: 'c', text: 'Ionic (ΔEN > 1.7)' },
          { id: 'd', text: 'Metallic' },
        ],
        correctOptionId: 'b',
        hints: ['ΔEN = |3.04 − 2.20|.', 'The result is 0.84 — where does that fall?'],
        explanation: 'ΔEN = |3.04 − 2.20| = 0.84, which falls in the 0.4–1.7 polar covalent range — this is why N–H bonds (as in ammonia) are polar and can take part in hydrogen bonding.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'cb-c1',
      part: 'problem-solving',
      conceptSlug: 'formation-of-ionic-bonds',
      conceptTitle: 'Formation of Ionic Bonds',
      question: {
        id: 'cb-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Calcium (group 2) reacts with chlorine (group 17) to form an ionic compound. What is the correct formula, and why?',
        options: [
          { id: 'a', text: 'CaCl — one calcium loses 1 electron to one chlorine' },
          { id: 'b', text: 'CaCl₂ — one Ca²⁺ needs two Cl⁻ ions to balance its charge' },
          { id: 'c', text: 'Ca₂Cl — two calcium atoms share one chlorine' },
          { id: 'd', text: 'CaCl₃ — calcium loses 3 electrons' },
        ],
        correctOptionId: 'b',
        hints: ['Calcium loses 2 valence electrons to form Ca²⁺.', 'Chlorine gains only 1 electron each, forming Cl⁻ — how many Cl⁻ balance one Ca²⁺?'],
        explanation: 'Calcium forms Ca²⁺ (losing 2 electrons), but each chlorine only gains 1 electron to form Cl⁻ — so two Cl⁻ ions are needed to balance the 2+ charge on each Ca²⁺, giving the formula CaCl₂.',
      },
    },
    {
      id: 'cb-c2',
      part: 'problem-solving',
      conceptSlug: 'properties-of-ionic-compounds',
      conceptTitle: 'Properties of Ionic Compounds',
      question: {
        id: 'cb-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A solid crystal is hit with a hammer and shatters into pieces along flat planes, rather than denting or bending. What type of bonding does this most strongly suggest?',
        options: [
          { id: 'a', text: 'Metallic bonding' },
          { id: 'b', text: 'Ionic bonding' },
          { id: 'c', text: 'Van der Waals forces only' },
          { id: 'd', text: 'This tells us nothing about bonding type' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what happens when layers of ions slide relative to each other.', 'Compare to how a metal behaves when hit with a hammer.'],
        explanation: 'This brittle, shattering behaviour along flat planes is the classic signature of an ionic lattice — a shift in the layers brings same-charge ions together, which repel violently and split the crystal, unlike a metal, which simply deforms.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'cb-d1',
      part: 'real-life-application',
      conceptSlug: 'metallic-bonding-and-properties',
      conceptTitle: 'Metallic Bonding and Properties of Metals',
      question: {
        id: 'cb-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Copper wire is used for household electrical wiring rather than an ionic solid like table salt. Why?',
        options: [
          { id: 'a', text: "Copper's delocalized electrons can move freely to carry electric current; solid ionic compounds have no mobile charge carriers." },
          { id: 'b', text: 'Copper is cheaper to manufacture than salt.' },
          { id: 'c', text: 'Ionic solids are actually better conductors, but too heavy for wiring.' },
          { id: 'd', text: 'Copper contains no electrons at all.' },
        ],
        correctOptionId: 'a',
        hints: ["What's actually needed to carry an electric current through a solid?"],
        explanation: "Metals like copper have delocalized valence electrons that are free to flow through the solid, carrying current — a solid ionic compound has no mobile charged particles until it is melted or dissolved.",
      },
    },

    // Part E — Challenge
    {
      id: 'cb-e1',
      part: 'challenge',
      conceptSlug: 'polarity-of-covalent-bonds',
      conceptTitle: 'Polarity of Covalent Bonds',
      question: {
        id: 'cb-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Carbon dioxide (O=C=O) has two polar C=O bonds, yet the overall molecule is nonpolar. What explains this?',
        options: [
          { id: 'a', text: 'The C=O bonds are not actually polar.' },
          { id: 'b', text: 'CO₂ is a linear molecule, so the two equal, opposite bond dipoles point in exactly opposite directions and cancel out.' },
          { id: 'c', text: 'Carbon and oxygen have identical electronegativities.' },
          { id: 'd', text: 'CO₂ has no bonds between its atoms.' },
        ],
        correctOptionId: 'b',
        hints: ["A molecule's overall polarity depends on both bond polarity AND molecular shape.", 'In a straight (linear) line, two equal, opposite arrows cancel exactly.'],
        explanation: "CO₂'s linear shape places its two identical, oppositely-directed C=O bond dipoles exactly opposite each other, so they cancel out — leaving the molecule as a whole nonpolar, even though each individual bond is polar.",
      },
    },
  ],
};
