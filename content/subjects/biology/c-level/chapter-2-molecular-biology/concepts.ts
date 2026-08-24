import type { Concept } from '@/types/content';

export const chapter2MolecularConcepts: Record<string, Concept> = {
  'the-structure-of-dna': {
    slug: 'the-structure-of-dna',
    title: 'The Structure of DNA',
    difficulty: 'medium',
    simpleExplanation:
      'DNA (deoxyribonucleic acid) is a double helix — two long strands of nucleotides twisted around ' +
      'each other like a spiral staircase. Each nucleotide has a phosphate group, a deoxyribose sugar, ' +
      'and one of four bases: adenine (A), thymine (T), guanine (G), or cytosine (C). The two strands ' +
      'are held together by hydrogen bonds between complementary base pairs: A always pairs with T, ' +
      'and G always pairs with C.',
    whyItMatters:
      "DNA's structure is precisely what allows it to do its job — store, copy, and pass on genetic " +
      "information reliably. Understanding its shape explains why replication and protein synthesis " +
      "work the way they do.",
    formulaSlug: 'chargaffs-base-pairing-rule',
    workedExample: {
      id: 'dna-structure-we-1',
      title: 'Finding base percentages using complementary pairing',
      problemStatement: 'A sample of double-stranded DNA is 22% adenine. Find the percentage of thymine, guanine, and cytosine.',
      steps: [
        { step: 1, instruction: 'Apply %A = %T.', math: '%T = 22%', explanation: 'Adenine always pairs with thymine in equal amounts.' },
        { step: 2, instruction: 'Find the remaining percentage for G + C.', math: '100% − 22% − 22% = 56%', explanation: 'The four bases must add to 100%.' },
        { step: 3, instruction: 'Apply %G = %C to split the remainder evenly.', math: '%G = %C = 56% ÷ 2 = 28%', explanation: 'Guanine always pairs with cytosine in equal amounts.' },
      ],
      finalAnswer: 'T = 22%, G = 28%, C = 28%.',
    },
    whyItWorks:
      'The double helix forms because each base has a specific shape that only fits its complementary ' +
      'partner — A and T form 2 hydrogen bonds, G and C form 3 — so the two strands are chemically ' +
      "locked into a predictable, stable pairing pattern that also makes accurate copying possible.",
    realLifeExample: {
      title: 'DNA fingerprinting in forensics',
      scenario: 'Police use a tiny DNA sample from a crime scene to identify a suspect.',
      explanation: "Because each person's exact DNA base sequence is unique (except identical twins), scientists can compare specific DNA regions between the crime-scene sample and a suspect's DNA to determine a match — a direct application of DNA's precise, individual sequence.",
    },
    practiceQuestions: [
      {
        id: 'dna-structure-pq-1',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A DNA sample contains 30% guanine. What percentage of the sample is adenine?',
        hints: ['%G = %C, so find %C first.', 'A + T + G + C = 100%, and %A = %T.'],
        correctAnswer: 20,
        tolerance: 0.5,
        unit: '%',
        explanation: '%C = %G = 30%, so G + C = 60%, leaving 40% for A + T. Since %A = %T, %A = 20%.',
      },
    ],
    commonMistake:
      "Thinking A pairs with G, or C pairs with T — the pairing is always A–T and G–C, never any other " +
      "combination, because only these pairs fit together geometrically and chemically.",
    quickReview: [
      'DNA is a double helix of two strands made of nucleotides (phosphate + sugar + base).',
      'Bases pair by complementary base pairing: A–T, G–C.',
      "Chargaff's rule: %A = %T and %G = %C.",
    ],
  },

  'the-structure-of-rna': {
    slug: 'the-structure-of-rna',
    title: 'The Structure of RNA',
    difficulty: 'easy',
    simpleExplanation:
      'RNA (ribonucleic acid) is chemically similar to DNA but differs in three key ways: it is usually ' +
      'single-stranded (not a double helix), its sugar is ribose (not deoxyribose), and it uses the ' +
      'base uracil (U) instead of thymine (T).',
    whyItMatters:
      "RNA's differences from DNA are not accidental — its single-stranded, more flexible structure is " +
      "exactly what lets it act as a temporary, mobile messenger and working molecule during protein " +
      "synthesis, a job DNA's stable double helix is not suited for.",
    whyItWorks:
      "Ribose (RNA's sugar) has an extra reactive -OH group compared to deoxyribose, making RNA " +
      "less chemically stable than DNA — ideal for a molecule that is meant to be temporary. Uracil " +
      "can still pair with adenine just like thymine does, so RNA can still be built using DNA as a " +
      "template.",
    realLifeExample: {
      title: 'mRNA vaccines',
      scenario: 'Some modern vaccines deliver a strand of mRNA into cells rather than a weakened virus.',
      explanation: "These vaccines work precisely because mRNA is naturally single-stranded and temporary — cells read the delivered mRNA to briefly produce a viral protein that trains the immune system, and the mRNA itself naturally breaks down afterward without altering the person's DNA.",
    },
    practiceQuestions: [
      {
        id: 'rna-structure-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'Which THREE features distinguish RNA from DNA?',
        options: [
          { id: 'a', text: 'Double-stranded, deoxyribose sugar, uses thymine' },
          { id: 'b', text: 'Single-stranded, ribose sugar, uses uracil instead of thymine' },
          { id: 'c', text: 'Single-stranded, deoxyribose sugar, uses guanine only' },
          { id: 'd', text: 'Double-stranded, ribose sugar, uses cytosine only' },
        ],
        correctOptionId: 'b',
        hints: ['Think sugar type, strand number, and the one base that changes.'],
        explanation: 'RNA is single-stranded, uses ribose sugar (not deoxyribose), and substitutes uracil for thymine — DNA is double-stranded, uses deoxyribose, and uses thymine.',
      },
    ],
    commonMistake:
      "Assuming RNA and DNA store information differently — both use a four-base sequence to encode " +
      "information; only the specific bases and sugar differ, not the underlying coding principle.",
    quickReview: [
      'RNA: single-stranded, ribose sugar, uses uracil (U) instead of thymine (T).',
      "RNA's structure suits its temporary, messenger role in protein synthesis.",
      'Uracil still pairs with adenine, just like thymine does in DNA.',
    ],
  },

  'the-role-of-dna': {
    slug: 'the-role-of-dna',
    title: 'The Role of DNA',
    difficulty: 'easy',
    simpleExplanation:
      "DNA's role is to store an organism's complete genetic instructions and pass them faithfully to " +
      "new cells (during cell division) and to offspring (during reproduction), while also directing " +
      "which proteins a cell builds and when.",
    whyItMatters:
      "Nearly everything an organism is and does traces back to instructions stored in its DNA — this " +
      "is why DNA is often called the 'blueprint' or 'instruction manual' of life.",
    whyItWorks:
      "DNA's sequence of bases forms a code that specifies the exact order of amino acids in every " +
      "protein a cell can make. Because proteins carry out almost all of a cell's functions (as " +
      "enzymes, structural material, hormones, and more), controlling which genes are read effectively " +
      "controls what the cell does and becomes.",
    realLifeExample: {
      title: 'Identical twins, different environments',
      scenario: 'Identical twins share nearly identical DNA, yet can differ slightly in appearance or health over their lives.',
      explanation: "This shows that DNA provides the instructions (the blueprint), but which genes are actually expressed can be influenced by environment and lifestyle — DNA sets the potential, while gene expression determines the outcome.",
    },
    practiceQuestions: [
      {
        id: 'dna-role-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: "What is DNA's primary role in a living cell?",
        options: [
          { id: 'a', text: 'To provide energy for cellular respiration' },
          { id: 'b', text: 'To store genetic instructions and direct which proteins the cell builds' },
          { id: 'c', text: 'To transport oxygen throughout the body' },
          { id: 'd', text: 'To break down food into nutrients' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what a "blueprint" does for a building.'],
        explanation: "DNA's core role is storing genetic instructions and directing protein production — proteins then carry out most of the cell's actual functions.",
      },
    ],
    commonMistake:
      "Thinking DNA directly performs cell functions itself — DNA stores the instructions, but " +
      "proteins (built by following those instructions) are what actually carry out the vast majority " +
      "of a cell's work.",
    quickReview: [
      "DNA stores an organism's complete genetic instructions.",
      'DNA directs which proteins a cell builds, controlling cell function.',
      'DNA is passed to new cells and to offspring, preserving instructions across generations.',
    ],
  },

  'dna-replication': {
    slug: 'dna-replication',
    title: 'DNA Replication',
    difficulty: 'hard',
    simpleExplanation:
      'DNA replication is the process by which a cell copies its entire DNA before dividing, so each ' +
      'new cell gets a complete, identical set of genetic instructions. The double helix unwinds and ' +
      'each original strand is used as a template to build a new complementary strand.',
    whyItMatters:
      'Without accurate replication, cells could not divide without losing genetic information — this ' +
      'process is fundamental to growth, tissue repair, and reproduction in every living organism.',
    workedExample: {
      id: 'dna-replication-we-1',
      title: 'Predicting the new strand from a template',
      problemStatement: 'One DNA template strand reads 5\'-A T G C C T-3\'. What sequence will the newly synthesised complementary strand have?',
      steps: [
        { step: 1, instruction: 'Pair each base with its complement (A–T, G–C).', math: 'A→T, T→A, G→C, C→G, C→G, T→A', explanation: 'DNA polymerase adds the complementary base opposite each template base.' },
        { step: 2, instruction: 'Read off the new strand in order.', math: "3'-T A C G G A-5'", explanation: 'The new strand runs antiparallel to the template.' },
      ],
      finalAnswer: "The new strand reads 3'-T A C G G A-5' (equivalently 5'-A G G C A T-3').",
    },
    whyItWorks:
      "Replication is described as 'semi-conservative' because each new DNA double helix consists of " +
      "one original (parent) strand and one newly made strand — this happens because each original " +
      "strand still serves as an accurate template even after the helix unwinds, since complementary " +
      "base pairing is highly specific and predictable.",
    realLifeExample: {
      title: 'Why cancer cells accumulate mutations',
      scenario: 'Cancer cells often divide rapidly and repeatedly, and their tumours accumulate more and more genetic mutations over time.',
      explanation: "Each round of DNA replication carries a small chance of a copying error slipping past the cell's proofreading enzymes — with rapid, repeated division, small replication errors accumulate faster, which is one reason cancer cells often show high mutation rates.",
    },
    practiceQuestions: [
      {
        id: 'dna-replication-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Why is DNA replication described as "semi-conservative"?',
        options: [
          { id: 'a', text: 'Each new DNA molecule is made entirely of new material.' },
          { id: 'b', text: 'Each new DNA molecule contains one original strand and one newly synthesised strand.' },
          { id: 'c', text: 'Only half of the DNA gets replicated each time.' },
          { id: 'd', text: 'DNA replication only happens in half of all cells.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what happens to each of the two original strands after the helix unwinds.'],
        explanation: 'Semi-conservative replication means each resulting double helix "conserves" one original strand and pairs it with one newly made strand.',
      },
    ],
    commonMistake:
      'Thinking DNA replication builds an entirely new double helix from scratch — it always reuses ' +
      'one original strand as a template, which is exactly what "semi-conservative" means.',
    quickReview: [
      'DNA replication copies the entire genome before cell division.',
      'The double helix unwinds; each original strand acts as a template.',
      'Replication is semi-conservative: each new helix has one old strand + one new strand.',
    ],
  },

  'the-genetic-code': {
    slug: 'the-genetic-code',
    title: 'The Genetic Code',
    difficulty: 'medium',
    simpleExplanation:
      "The genetic code is the set of rules that maps sequences of three DNA/RNA bases (called codons) " +
      "to specific amino acids. Since there are 4 bases and codons are 3 bases long, there are 4³ = 64 " +
      "possible codons, encoding 20 amino acids plus start/stop signals.",
    whyItMatters:
      "The genetic code is what actually translates the 'language' of nucleic acids (bases) into the " +
      "'language' of proteins (amino acids) — without it, DNA's sequence would have no way to " +
      "determine a protein's structure.",
    whyItWorks:
      "The code is described as degenerate (or 'redundant') because most amino acids are specified by " +
      "more than one codon — this built-in redundancy helps buffer the effects of certain mutations, " +
      "since a change in a codon's third base often still codes for the same amino acid.",
    realLifeExample: {
      title: 'The genetic code is (nearly) universal',
      scenario: 'Scientists can insert a human gene into bacteria, and the bacteria correctly produce the human protein.',
      explanation: 'This works because the genetic code is shared across almost all known life — the same codon specifies the same amino acid in humans, bacteria, and plants alike, which is the basis of genetic engineering technologies like producing human insulin in bacteria.',
    },
    practiceQuestions: [
      {
        id: 'genetic-code-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can the genetic code encode 20 amino acids using only 4 bases?',
        options: [
          { id: 'a', text: 'Because codons are read three bases at a time, giving 4³ = 64 possible combinations.' },
          { id: 'b', text: 'Because each base directly represents one amino acid.' },
          { id: 'c', text: 'Because only 4 amino acids actually exist.' },
          { id: 'd', text: 'Because bases are read one at a time.' },
        ],
        correctOptionId: 'a',
        hints: ['How many bases make up one codon?'],
        explanation: 'Reading bases in triplets (codons) gives 4 × 4 × 4 = 64 possible codons — more than enough to specify all 20 amino acids, with redundancy.',
      },
    ],
    commonMistake:
      'Assuming each amino acid has exactly one unique codon — the genetic code is degenerate, meaning ' +
      'most amino acids are specified by several different codons.',
    quickReview: [
      'The genetic code maps 3-base codons to amino acids.',
      '64 possible codons encode 20 amino acids plus start/stop signals.',
      'The code is degenerate (redundant) and nearly universal across life.',
    ],
  },

  transcription: {
    slug: 'transcription',
    title: 'Transcription',
    difficulty: 'medium',
    simpleExplanation:
      "Transcription is the process of copying a gene's DNA sequence into a complementary strand of " +
      "messenger RNA (mRNA), carried out by the enzyme RNA polymerase. It is the first step of protein " +
      "synthesis, converting DNA's code into a mobile working copy.",
    whyItMatters:
      "DNA stays safely inside the nucleus, but proteins are built by ribosomes elsewhere in the cell — " +
      "transcription solves this by creating a disposable mRNA copy that can carry the genetic message " +
      "out to where it's needed.",
    workedExample: {
      id: 'transcription-we-1',
      title: 'Writing the mRNA strand from a DNA template',
      problemStatement: "A DNA template strand reads 3'-T A C G G A-5'. What mRNA strand does RNA polymerase produce?",
      steps: [
        { step: 1, instruction: 'Pair each DNA base with its RNA complement (A→U, T→A, G→C, C→G).', math: 'T→A, A→U, C→G, G→C, G→C, A→U', explanation: 'RNA uses uracil (U) instead of thymine, so DNA "A" pairs with RNA "U".' },
        { step: 2, instruction: 'Read off the mRNA strand.', math: "5'-A U G C C U-3'", explanation: 'mRNA is synthesised antiparallel to its DNA template.' },
      ],
      finalAnswer: "The mRNA strand reads 5'-A U G C C U-3'.",
    },
    whyItWorks:
      'RNA polymerase reads the DNA template strand and builds a complementary RNA strand using the ' +
      'same base-pairing rules as replication, except adenine pairs with uracil instead of thymine — ' +
      'this produces an mRNA copy that carries the same information as the original gene.',
    realLifeExample: {
      title: 'Why some medicines block transcription in bacteria',
      scenario: 'Certain antibiotics (like rifampicin) work by blocking bacterial RNA polymerase.',
      explanation: "By blocking transcription specifically in bacteria (their RNA polymerase differs enough from ours), these antibiotics stop bacteria from making the mRNA they need to produce proteins and survive, without significantly affecting human cells.",
    },
    practiceQuestions: [
      {
        id: 'transcription-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the main product of transcription?',
        options: [
          { id: 'a', text: 'A new protein' },
          { id: 'b', text: 'A messenger RNA (mRNA) copy of a gene' },
          { id: 'c', text: 'A new DNA double helix' },
          { id: 'd', text: 'An amino acid chain' },
        ],
        correctOptionId: 'b',
        hints: ['Transcription is the FIRST step of protein synthesis, not the last.'],
        explanation: 'Transcription produces an mRNA copy of a gene\'s DNA sequence — the mRNA is then translated into a protein in a separate, later step.',
      },
    ],
    commonMistake:
      'Confusing transcription with translation — transcription copies DNA into mRNA (inside the ' +
      'nucleus); translation reads that mRNA to build a protein (at the ribosome). They are separate steps.',
    quickReview: [
      'Transcription copies a gene from DNA into mRNA, using RNA polymerase.',
      "RNA base-pairing rule: DNA's A pairs with RNA's U (not T).",
      'Transcription happens in the nucleus (in eukaryotic cells).',
    ],
  },

  'modification-of-mrna': {
    slug: 'modification-of-mrna',
    title: 'Modification of mRNA',
    difficulty: 'medium',
    simpleExplanation:
      'Before it leaves the nucleus, a newly transcribed mRNA (called pre-mRNA) is processed: a ' +
      'protective "cap" is added to one end, a "poly-A tail" is added to the other end, and ' +
      'non-coding sections called introns are cut out while the coding sections (exons) are joined ' +
      'together — a process called splicing.',
    whyItMatters:
      "This processing step protects the mRNA from being broken down too quickly and ensures only the " +
      "actual protein-coding information is used, allowing one gene to sometimes produce multiple " +
      "different proteins depending on which exons are kept (alternative splicing).",
    whyItWorks:
      "Introns interrupt the coding sequence within a gene but do not themselves code for amino acids " +
      "— splicing removes them precisely so that the final, mature mRNA contains an unbroken, correctly " +
      "ordered coding sequence that ribosomes can translate accurately.",
    realLifeExample: {
      title: 'Alternative splicing and protein diversity',
      scenario: 'Humans have roughly 20,000 genes, but produce far more than 20,000 different proteins.',
      explanation: 'Alternative splicing — combining exons from the same gene in different ways — lets a single gene produce multiple different mRNA transcripts and therefore multiple different proteins, greatly expanding protein diversity beyond the raw gene count.',
    },
    practiceQuestions: [
      {
        id: 'mrna-modification-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What happens to introns during mRNA processing?',
        options: [
          { id: 'a', text: 'They are translated into amino acids.' },
          { id: 'b', text: 'They are cut out (spliced out) of the pre-mRNA before it leaves the nucleus.' },
          { id: 'c', text: 'They become the poly-A tail.' },
          { id: 'd', text: 'They are duplicated and kept in the mature mRNA.' },
        ],
        correctOptionId: 'b',
        hints: ['Introns are non-coding — do they belong in the final, translatable mRNA?'],
        explanation: 'Introns are non-coding sequences removed by splicing; only the coding exons are joined together to form the mature mRNA.',
      },
    ],
    commonMistake:
      "Assuming exons are the parts removed and introns are kept — it's the opposite: introns " +
      "('intragenic', non-coding) are cut OUT; exons ('expressed', coding) are kept and joined together.",
    quickReview: [
      'Pre-mRNA is processed before leaving the nucleus: capping, poly-A tail, splicing.',
      'Splicing removes non-coding introns and joins coding exons.',
      'Alternative splicing lets one gene produce multiple different proteins.',
    ],
  },

  translation: {
    slug: 'translation',
    title: 'Translation',
    difficulty: 'hard',
    simpleExplanation:
      'Translation is the process of reading a mature mRNA sequence, three bases (one codon) at a ' +
      'time, to build a chain of amino acids — a protein — at the ribosome. Transfer RNA (tRNA) ' +
      'molecules bring the correct amino acid for each codon, matching their anticodon to the mRNA codon.',
    whyItMatters:
      "Translation is the step where the genetic code actually becomes a physical protein — it is the " +
      "final link between the information stored in DNA and the working molecules that carry out a " +
      "cell's functions.",
    workedExample: {
      id: 'translation-we-1',
      title: 'Reading a codon sequence into amino acids',
      problemStatement: "An mRNA strand reads 5'-AUG GGC UUU UAA-3'. Using the genetic code (AUG = Met/start, GGC = Gly, UUU = Phe, UAA = stop), what amino acid sequence is produced?",
      steps: [
        { step: 1, instruction: 'Split the mRNA into codons (groups of 3 bases).', math: 'AUG | GGC | UUU | UAA', explanation: 'Ribosomes always read mRNA in non-overlapping three-base codons.' },
        { step: 2, instruction: 'Translate each codon using the genetic code.', math: 'AUG→Met (start), GGC→Gly, UUU→Phe, UAA→stop', explanation: 'AUG both starts translation and codes for methionine; UAA is a stop codon and adds no amino acid.' },
        { step: 3, instruction: 'Assemble the amino acid chain.', math: 'Met–Gly–Phe', explanation: 'Translation stops at UAA, so only three amino acids are added to the chain.' },
      ],
      finalAnswer: 'The resulting protein chain is Methionine–Glycine–Phenylalanine (Met–Gly–Phe).',
    },
    whyItWorks:
      "Each tRNA molecule has a three-base anticodon that pairs with a specific mRNA codon, and carries " +
      "exactly the amino acid that codon specifies — the ribosome holds the mRNA and tRNAs in place, " +
      "linking each new amino acid to the growing chain in the exact order the codons specify.",
    realLifeExample: {
      title: 'Why a single DNA mutation can change a whole protein',
      scenario: 'Sickle cell disease is caused by a single base change in the gene for haemoglobin.',
      explanation: "That one DNA base change alters a single mRNA codon, which changes just one amino acid in the translated haemoglobin protein — yet this single amino acid substitution is enough to change the protein's shape and cause sickle cell disease, showing how directly translation converts code into function.",
    },
    practiceQuestions: [
      {
        id: 'translation-pq-1',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'What is the role of tRNA during translation?',
        options: [
          { id: 'a', text: 'It stores the original genetic information.' },
          { id: 'b', text: 'It carries a specific amino acid and matches its anticodon to the mRNA codon.' },
          { id: 'c', text: 'It splices introns out of pre-mRNA.' },
          { id: 'd', text: 'It copies DNA into mRNA.' },
        ],
        correctOptionId: 'b',
        hints: ['tRNA physically delivers something to the ribosome — what?'],
        explanation: "Each tRNA carries one specific amino acid and uses its anticodon to pair with the matching mRNA codon, ensuring the correct amino acid is added at each step.",
      },
    ],
    commonMistake:
      'Thinking translation happens on DNA — translation always reads mRNA (the processed, mobile ' +
      'copy), not the original DNA, and takes place at ribosomes, not in the nucleus.',
    quickReview: [
      'Translation reads mRNA codons (3 bases each) to build a protein at the ribosome.',
      'tRNA carries amino acids and matches anticodons to mRNA codons.',
      'Translation starts at AUG and ends at a stop codon.',
    ],
  },

  'genetically-engineered-organisms': {
    slug: 'genetically-engineered-organisms',
    title: 'Production of Genetically Engineered Organisms',
    difficulty: 'medium',
    simpleExplanation:
      "Genetically engineered organisms are living things whose DNA has been deliberately altered — " +
      "often by inserting a gene from a different species — to give them a new, useful trait, using " +
      "molecular biology techniques.",
    whyItMatters:
      "This technology lets scientists produce useful proteins (like human insulin), improve crops, and " +
      "study gene function directly — applications that depend entirely on understanding DNA structure, " +
      "replication, and the universal genetic code covered earlier in this chapter.",
    whyItWorks:
      "Because the genetic code is nearly universal across life, a gene taken from one species (say, " +
      "the human insulin gene) can be correctly read and expressed by a completely different organism " +
      "(like bacteria), as long as the gene is properly inserted into the recipient's DNA.",
    realLifeExample: {
      title: 'Bacterially produced human insulin',
      scenario: 'Most insulin used to treat diabetes today is produced by genetically engineered bacteria, not extracted from animals.',
      explanation: 'The human insulin gene is inserted into bacterial DNA; because the genetic code is shared, the bacteria read the human gene correctly and produce real human insulin protein, which is then purified for medical use.',
    },
    practiceQuestions: [
      {
        id: 'genetic-engineering-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why can bacteria be used to produce a functional human protein like insulin?',
        options: [
          { id: 'a', text: 'Bacteria and humans share a nearly identical, universal genetic code.' },
          { id: 'b', text: 'Bacteria naturally produce insulin without any genetic modification.' },
          { id: 'c', text: 'Human genes cannot function in bacteria.' },
          { id: 'd', text: 'Insulin is not actually a protein.' },
        ],
        correctOptionId: 'a',
        hints: ['Recall what made producing human proteins in bacteria possible from "The Genetic Code" concept.'],
        explanation: "Because the genetic code is nearly universal, bacteria can correctly read and translate an inserted human gene into the correct human protein.",
      },
    ],
    commonMistake:
      "Assuming genetically engineered organisms are entirely different from their natural counterparts " +
      "— typically only one or a few specific genes are added or altered; the rest of the organism's " +
      "genome and biology remains unchanged.",
    quickReview: [
      'Genetic engineering deliberately alters an organism\'s DNA to add a useful trait.',
      "It relies on the genetic code being nearly universal across species.",
      'Example: bacteria engineered to produce human insulin.',
    ],
  },

  'recombinant-dna': {
    slug: 'recombinant-dna',
    title: 'Recombinant DNA',
    difficulty: 'medium',
    simpleExplanation:
      'Recombinant DNA is DNA formed by combining genetic material from two different sources — ' +
      'typically by cutting a gene of interest out of one organism using a restriction enzyme, and ' +
      'inserting it into a vector (often a bacterial plasmid) using another enzyme called DNA ligase.',
    whyItMatters:
      "Creating recombinant DNA is the key laboratory technique that makes genetic engineering possible " +
      "— it is literally how a useful gene gets physically transferred from one organism into another.",
    whyItWorks:
      "Restriction enzymes cut DNA at specific, recognisable base sequences, leaving matching ('sticky') " +
      "ends on both the gene of interest and the vector — because the cut ends are complementary, DNA " +
      "ligase can then join them together into a single, stable recombinant DNA molecule.",
    realLifeExample: {
      title: 'Plasmid vectors in the lab',
      scenario: 'Scientists often insert a gene of interest into a small circular bacterial plasmid before putting it into a host bacterium.',
      explanation: "The plasmid acts as a vector — a delivery vehicle — that can be taken up by bacteria and copied every time the bacteria divide, efficiently multiplying the inserted gene along with the bacterial population.",
    },
    practiceQuestions: [
      {
        id: 'recombinant-dna-pq-1',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What two types of enzymes are essential to creating recombinant DNA?',
        options: [
          { id: 'a', text: 'RNA polymerase and ribosomes' },
          { id: 'b', text: 'Restriction enzymes (to cut DNA) and DNA ligase (to join DNA pieces together)' },
          { id: 'c', text: 'Amylase and lipase' },
          { id: 'd', text: 'DNA polymerase only' },
        ],
        correctOptionId: 'b',
        hints: ['One enzyme cuts; a different enzyme joins.'],
        explanation: 'Restriction enzymes cut DNA at specific sequences to isolate a gene, and DNA ligase joins that gene to a vector — together producing recombinant DNA.',
      },
    ],
    commonMistake:
      'Thinking any two DNA pieces can simply be joined together directly — the pieces must have ' +
      'matching (complementary) cut ends, usually produced by the same restriction enzyme, for ligase ' +
      'to successfully join them.',
    quickReview: [
      'Recombinant DNA combines DNA from two different sources.',
      'Restriction enzymes cut DNA at specific sequences, creating matching ends.',
      'DNA ligase joins the gene of interest into a vector (e.g. a plasmid).',
    ],
  },

  'applications-of-genetic-engineering': {
    slug: 'applications-of-genetic-engineering',
    title: 'Golden Rice and Genetically Modified Animals',
    difficulty: 'easy',
    simpleExplanation:
      "Genetic engineering has real-world applications beyond the lab — Golden Rice is rice genetically " +
      "modified to produce beta-carotene (a vitamin A precursor) to fight vitamin A deficiency, while " +
      "genetically modified animals have been engineered for uses ranging from disease research to " +
      "producing medical proteins.",
    whyItMatters:
      "These applications show how the molecular techniques in this chapter (understanding DNA, the " +
      "genetic code, and recombinant DNA) translate directly into solving real problems in nutrition, " +
      "medicine, and agriculture.",
    whyItWorks:
      "Golden Rice works because scientists inserted genes (from maize and a soil bacterium) that " +
      "encode the enzymes needed to produce beta-carotene in the rice grain — a biochemical pathway " +
      "ordinary rice does not naturally have in its edible part — directly addressing a specific " +
      "nutritional gap through targeted gene insertion.",
    realLifeExample: {
      title: 'Golden Rice and vitamin A deficiency',
      scenario: 'Vitamin A deficiency is a major public health problem in some rice-dependent regions, causing blindness and increased disease risk, especially in children.',
      explanation: "Golden Rice was engineered specifically to produce beta-carotene, which the body converts to vitamin A, aiming to reduce vitamin A deficiency in populations where rice is a dietary staple — a direct, targeted application of genetic engineering to a nutritional problem.",
    },
    practiceQuestions: [
      {
        id: 'ge-applications-pq-1',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What nutritional problem was Golden Rice specifically engineered to help address?',
        options: [
          { id: 'a', text: 'Protein deficiency' },
          { id: 'b', text: 'Vitamin A deficiency' },
          { id: 'c', text: 'Iron deficiency' },
          { id: 'd', text: 'Calcium deficiency' },
        ],
        correctOptionId: 'b',
        hints: ['Golden Rice produces beta-carotene — what vitamin does the body make from beta-carotene?'],
        explanation: 'Golden Rice was engineered to produce beta-carotene, a precursor the body converts into vitamin A, specifically to help address vitamin A deficiency.',
      },
    ],
    commonMistake:
      "Assuming all genetically modified organisms serve the same purpose — applications vary widely, " +
      "from improving nutrition (Golden Rice) to producing medical proteins to biomedical research, " +
      "each using the same underlying recombinant DNA techniques for very different goals.",
    quickReview: [
      'Golden Rice is engineered to produce beta-carotene, addressing vitamin A deficiency.',
      'Genetically modified animals serve varied purposes: research, medicine, agriculture.',
      'These applications rely on the same core techniques: recombinant DNA and gene insertion.',
    ],
  },
};
