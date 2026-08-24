import type { QuickRevision } from '@/types/content';

export const chapter2MolecularQuickRevision: QuickRevision = {
  fiveMinute: [
    {
      conceptSlug: 'the-structure-of-dna',
      keyPoint: 'DNA is a double helix; bases pair A–T and G–C.',
      formulaSlug: 'chargaffs-base-pairing-rule',
      miniExample: 'If %A = 22%, then %T = 22%, and %G = %C = 28% each.',
    },
    {
      conceptSlug: 'the-structure-of-rna',
      keyPoint: 'RNA: single-stranded, ribose sugar, uses uracil instead of thymine.',
      miniExample: 'mRNA vaccines rely on RNA being temporary and single-stranded.',
    },
    {
      conceptSlug: 'dna-replication',
      keyPoint: 'Replication is semi-conservative: each new helix has one old strand + one new strand.',
      miniExample: "Template 5'-ATGCCT-3' produces a new complementary strand 3'-TACGGA-5'.",
    },
    {
      conceptSlug: 'transcription',
      keyPoint: 'RNA polymerase copies a DNA gene into mRNA (DNA A pairs with RNA U).',
      miniExample: "DNA 3'-TACGGA-5' is transcribed into mRNA 5'-AUGCCU-3'.",
    },
    {
      conceptSlug: 'translation',
      keyPoint: 'Ribosomes read mRNA codons (3 bases) via tRNA to build a protein.',
      miniExample: 'AUG-GGC-UUU-UAA translates to Met–Gly–Phe, then stops.',
    },
  ],
  fifteenMinute: [
    {
      conceptSlug: 'the-role-of-dna',
      keyPoint: "DNA stores genetic instructions and directs which proteins a cell builds.",
      miniExample: 'Identical twins share DNA but can differ due to gene expression differences.',
    },
    {
      conceptSlug: 'the-structure-of-dna',
      keyPoint: "Chargaff's rule: %A = %T, %G = %C, all four bases sum to 100%.",
      formulaSlug: 'chargaffs-base-pairing-rule',
      miniExample: 'Given 30% guanine, adenine must be 20%.',
    },
    {
      conceptSlug: 'the-genetic-code',
      keyPoint: '64 possible 3-base codons encode 20 amino acids — the code is degenerate and near-universal.',
      miniExample: 'AUG codes for methionine and also signals "start."',
    },
    {
      conceptSlug: 'modification-of-mrna',
      keyPoint: 'Pre-mRNA is capped, tailed, and spliced (introns removed, exons joined) before leaving the nucleus.',
      miniExample: 'Alternative splicing lets one gene make multiple different proteins.',
    },
    {
      conceptSlug: 'translation',
      keyPoint: 'tRNA anticodons match mRNA codons, delivering the correct amino acid each time.',
      miniExample: 'A single base change (as in sickle cell disease) can alter one amino acid in the protein.',
    },
    {
      conceptSlug: 'genetically-engineered-organisms',
      keyPoint: 'A gene from one species can function in another because the genetic code is nearly universal.',
      miniExample: 'Bacteria engineered with the human insulin gene produce real human insulin.',
    },
    {
      conceptSlug: 'recombinant-dna',
      keyPoint: 'Restriction enzymes cut DNA; DNA ligase joins a gene into a vector (e.g. a plasmid).',
      miniExample: 'A gene inserted into a plasmid is copied every time the host bacterium divides.',
    },
    {
      conceptSlug: 'applications-of-genetic-engineering',
      keyPoint: 'Golden Rice is engineered to produce beta-carotene, addressing vitamin A deficiency.',
      miniExample: 'Genes from maize and a soil bacterium give rice grains a beta-carotene pathway.',
    },
  ],
};
