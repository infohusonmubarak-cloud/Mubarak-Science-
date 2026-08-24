import type { Chapter, ConceptMapNode } from '@/types/content';
import { chapter2MolecularTopics } from './topics';
import { chapter2MolecularQuickRevision } from './quickRevision';
import { chapter2MolecularAssessment } from './assessment';

export { chapter2MolecularConcepts } from './concepts';
export { chapter2MolecularFormulas } from './formulas';
export { chapter2MolecularQuickRevision } from './quickRevision';
export { chapter2MolecularTopics } from './topics';
export { chapter2MolecularAssessment } from './assessment';

const BASE = '/subjects/biology/c-level/molecular-biology';

const chapter2MolecularConceptMap: ConceptMapNode = {
  label: 'Molecular Biology',
  children: [
    {
      label: 'Introduction to Molecular Biology',
      children: [
        { label: 'Structure of DNA', href: `${BASE}/the-structure-of-dna` },
        { label: 'Structure of RNA', href: `${BASE}/the-structure-of-rna` },
        { label: 'Role of DNA', href: `${BASE}/the-role-of-dna` },
        { label: 'DNA Replication', href: `${BASE}/dna-replication` },
      ],
    },
    {
      label: 'Genetic Code',
      children: [{ label: 'The Genetic Code', href: `${BASE}/the-genetic-code` }],
    },
    {
      label: 'Protein Synthesis',
      children: [
        { label: 'Transcription', href: `${BASE}/transcription` },
        { label: 'Modification of mRNA', href: `${BASE}/modification-of-mrna` },
        { label: 'Translation', href: `${BASE}/translation` },
      ],
    },
    {
      label: 'Techniques in Molecular Biology',
      children: [
        { label: 'Genetically Engineered Organisms', href: `${BASE}/genetically-engineered-organisms` },
        { label: 'Recombinant DNA', href: `${BASE}/recombinant-dna` },
        { label: 'Golden Rice and GM Animals', href: `${BASE}/applications-of-genetic-engineering` },
      ],
    },
  ],
};

export const chapter2Molecular: Chapter = {
  slug: 'molecular-biology',
  number: 2,
  title: 'Molecular Biology',
  blurb:
    'The structure and role of DNA and RNA, DNA replication, the genetic code, protein synthesis, ' +
    'and genetic engineering techniques.',
  status: 'available',
  topics: chapter2MolecularTopics,
  quickRevision: chapter2MolecularQuickRevision,
  assessment: chapter2MolecularAssessment,
  conceptMap: chapter2MolecularConceptMap,
};
