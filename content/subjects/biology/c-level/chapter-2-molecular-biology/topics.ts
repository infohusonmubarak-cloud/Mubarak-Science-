import type { Topic } from '@/types/content';

export const chapter2MolecularTopics: Topic[] = [
  {
    slug: 'introduction-to-molecular-biology-topic',
    title: 'Introduction to Molecular Biology',
    concepts: [
      { slug: 'the-structure-of-dna', title: 'The Structure of DNA', difficulty: 'medium' },
      { slug: 'the-structure-of-rna', title: 'The Structure of RNA', difficulty: 'easy' },
      { slug: 'the-role-of-dna', title: 'The Role of DNA', difficulty: 'easy' },
      { slug: 'dna-replication', title: 'DNA Replication', difficulty: 'hard' },
    ],
  },
  {
    slug: 'genetic-code-topic',
    title: 'Genetic Code',
    concepts: [{ slug: 'the-genetic-code', title: 'The Genetic Code', difficulty: 'medium' }],
  },
  {
    slug: 'protein-synthesis-topic',
    title: 'Protein Synthesis',
    concepts: [
      { slug: 'transcription', title: 'Transcription', difficulty: 'medium' },
      { slug: 'modification-of-mrna', title: 'Modification of mRNA', difficulty: 'medium' },
      { slug: 'translation', title: 'Translation', difficulty: 'hard' },
    ],
  },
  {
    slug: 'techniques-in-molecular-biology-topic',
    title: 'Some Techniques in Molecular Biology',
    concepts: [
      { slug: 'genetically-engineered-organisms', title: 'Production of Genetically Engineered Organisms', difficulty: 'medium' },
      { slug: 'recombinant-dna', title: 'Recombinant DNA', difficulty: 'medium' },
      { slug: 'applications-of-genetic-engineering', title: 'Golden Rice and Genetically Modified Animals', difficulty: 'easy' },
    ],
  },
];
