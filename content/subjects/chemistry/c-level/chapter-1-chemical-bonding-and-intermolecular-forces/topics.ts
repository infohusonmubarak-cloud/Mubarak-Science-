import type { Topic } from '@/types/content';

export const chapter1BondingTopics: Topic[] = [
  {
    slug: 'basic-concepts-of-chemical-bonding',
    title: 'Basic Concepts to Understand Chemical Bonding',
    concepts: [
      { slug: 'valence-electrons-and-chemical-bonding', title: 'Valence Electrons and Chemical Bonding', difficulty: 'easy' },
      { slug: 'the-octet-rule', title: 'The Octet Rule', difficulty: 'easy' },
      { slug: 'electronegativity-and-bond-type', title: 'Electronegativity and Bond Type', difficulty: 'medium' },
    ],
  },
  {
    slug: 'ionic-bonding-topic',
    title: 'Ionic Bonding',
    concepts: [
      { slug: 'formation-of-ionic-bonds', title: 'Formation of Ionic Bonds', difficulty: 'medium' },
      { slug: 'properties-of-ionic-compounds', title: 'Properties of Ionic Compounds', difficulty: 'medium' },
    ],
  },
  {
    slug: 'covalent-bonding-topic',
    title: 'Covalent Bonding',
    concepts: [
      { slug: 'formation-of-covalent-bonds', title: 'Formation of Covalent Bonds', difficulty: 'medium' },
      { slug: 'single-double-and-triple-covalent-bonds', title: 'Single, Double and Triple Covalent Bonds', difficulty: 'medium' },
      { slug: 'polarity-of-covalent-bonds', title: 'Polarity of Covalent Bonds', difficulty: 'medium' },
    ],
  },
  {
    slug: 'intermolecular-forces-topic',
    title: 'Intermolecular Forces',
    concepts: [
      { slug: 'van-der-waals-forces', title: 'Van der Waals Forces', difficulty: 'medium' },
      { slug: 'hydrogen-bonding', title: 'Hydrogen Bonding', difficulty: 'medium' },
    ],
  },
  {
    slug: 'metallic-bonding-topic',
    title: 'Metallic Bonding',
    concepts: [
      { slug: 'metallic-bonding-and-properties', title: 'Metallic Bonding and Properties of Metals', difficulty: 'medium' },
    ],
  },
];
