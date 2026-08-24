import type { Assessment } from '@/types/content';

export const chapter8OrganicAssessment: Assessment = {
  id: 'organic-compounds-and-macromolecules-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'oc-a1',
      part: 'concept',
      conceptSlug: 'what-are-organic-compounds',
      conceptTitle: 'What Are Organic Compounds',
      question: {
        id: 'oc-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What single property of carbon best explains why so many different organic compounds can exist?',
        options: [
          { id: 'a', text: 'Carbon is the most abundant element on Earth.' },
          { id: 'b', text: "Carbon's ability to bond repeatedly to itself, forming chains, branches, and rings." },
          { id: 'c', text: 'Carbon only forms ionic bonds.' },
          { id: 'd', text: 'Carbon cannot form double or triple bonds.' },
        ],
        correctOptionId: 'b',
        hints: ['This is called catenation.'],
        explanation: "Carbon's unique ability to bond extensively to itself (catenation), forming long chains, branches and rings, is what creates the enormous structural diversity of organic compounds.",
      },
    },
    {
      id: 'oc-a2',
      part: 'concept',
      conceptSlug: 'polymers-and-monomers',
      conceptTitle: 'Polymers and Monomers',
      question: {
        id: 'oc-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What does the term "polymer" literally describe?',
        options: [
          { id: 'a', text: 'A single, isolated small molecule' },
          { id: 'b', text: 'Many repeating units bonded together into a long chain' },
          { id: 'c', text: 'A compound with no carbon atoms' },
          { id: 'd', text: 'A gas at room temperature' },
        ],
        correctOptionId: 'b',
        hints: ["'Poly-' means many, '-mer' means unit."],
        explanation: 'A polymer is literally "many units" — a long chain built from many repeating monomer units bonded together.',
      },
    },

    // Part B — Formula & Application
    {
      id: 'oc-b1',
      part: 'formula-application',
      conceptSlug: 'hydrocarbons-and-homologous-series',
      conceptTitle: 'Hydrocarbons and Homologous Series',
      question: {
        id: 'oc-b1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'What is the molecular formula of the alkane with 10 carbon atoms (decane)?',
        options: [
          { id: 'a', text: 'C₁₀H₂₀' },
          { id: 'b', text: 'C₁₀H₂₂' },
          { id: 'c', text: 'C₁₀H₁₈' },
          { id: 'd', text: 'C₁₀H₂₄' },
        ],
        correctOptionId: 'b',
        hints: ['CₙH₂ₙ₊₂ with n = 10.', '2 × 10 + 2 = 22.'],
        explanation: 'Using CₙH₂ₙ₊₂ with n = 10: 2(10) + 2 = 22, giving C₁₀H₂₂.',
      },
    },
    {
      id: 'oc-b2',
      part: 'formula-application',
      conceptSlug: 'hydrocarbons-and-homologous-series',
      conceptTitle: 'Hydrocarbons and Homologous Series',
      question: {
        id: 'oc-b2-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'An alkene has 5 carbon atoms. How many hydrogen atoms does it have (using CₙH₂ₙ)?',
        hints: ['CₙH₂ₙ with n = 5.', '2 × 5.'],
        correctAnswer: 10,
        explanation: 'Using CₙH₂ₙ with n = 5: 2(5) = 10 hydrogen atoms, giving C₅H₁₀.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'oc-c1',
      part: 'problem-solving',
      conceptSlug: 'tests-for-functional-groups',
      conceptTitle: 'Tests for Functional Groups',
      question: {
        id: 'oc-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Two unknown colourless liquids are tested with sodium carbonate. Liquid A bubbles vigorously; Liquid B shows no reaction at all. What can you conclude?',
        options: [
          { id: 'a', text: 'Liquid A likely contains a carboxyl (–COOH) group; Liquid B does not.' },
          { id: 'b', text: 'Both liquids must be alcohols.' },
          { id: 'c', text: 'Liquid B is definitely water.' },
          { id: 'd', text: 'No conclusion can be drawn from this test.' },
        ],
        correctOptionId: 'a',
        hints: ['Recall exactly what the sodium carbonate + bubbling test specifically detects.'],
        explanation: 'Bubbling with sodium carbonate specifically indicates an acidic –COOH group (Liquid A); no reaction indicates the absence of that particular functional group in Liquid B, though B could still contain other functional groups this test does not detect.',
      },
    },
    {
      id: 'oc-c2',
      part: 'problem-solving',
      conceptSlug: 'natural-and-synthetic-macromolecules',
      conceptTitle: 'Natural and Synthetic Macromolecules',
      question: {
        id: 'oc-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A new synthetic polymer is engineered with a molecular structure that matches an enzyme naturally found in soil bacteria. What property would you expect this polymer to have, compared to typical plastics?',
        options: [
          { id: 'a', text: 'It would be more biodegradable than typical plastics, since the matching enzyme can break it down.' },
          { id: 'b', text: 'It would be radioactive.' },
          { id: 'c', text: 'It would be identical in every way to a natural macromolecule.' },
          { id: 'd', text: 'Biodegradability is unrelated to enzyme matching.' },
        ],
        correctOptionId: 'a',
        hints: ['Recall what determines whether a macromolecule decomposes readily in the environment.'],
        explanation: 'Since biodegradability depends on whether a matching decomposing enzyme exists in the environment, engineering a polymer structure that a natural soil enzyme can break down would make it more biodegradable than typical plastics with no such enzyme match.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'oc-d1',
      part: 'real-life-application',
      conceptSlug: 'common-functional-groups',
      conceptTitle: 'Common Functional Groups',
      question: {
        id: 'oc-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Vinegar (acetic acid) is noticeably acidic and reactive, while rubbing alcohol (ethanol) is much less so, even though both are simple organic liquids of similar size. What best explains this difference?',
        options: [
          { id: 'a', text: 'They have different functional groups: –COOH (carboxyl) in acetic acid versus –OH (hydroxyl) in ethanol.' },
          { id: 'b', text: 'Acetic acid contains more carbon atoms.' },
          { id: 'c', text: 'Ethanol is not actually an organic compound.' },
          { id: 'd', text: 'There is no real chemical difference between them.' },
        ],
        correctOptionId: 'a',
        hints: ['Think about which specific part of each molecule drives its characteristic reactivity.'],
        explanation: "The difference in reactivity comes almost entirely from their different functional groups — the carboxyl group makes acetic acid acidic, while the hydroxyl group in ethanol behaves quite differently.",
      },
    },

    // Part E — Challenge
    {
      id: 'oc-e1',
      part: 'challenge',
      conceptSlug: 'polymers-and-monomers',
      conceptTitle: 'Polymers and Monomers',
      question: {
        id: 'oc-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Ethene (C₂H₄) monomers link together to form polyethylene. What structural feature of ethene makes this repeated linking possible?',
        options: [
          { id: 'a', text: 'Its C=C double bond can open up, allowing each monomer to bond to the next in a repeating chain.' },
          { id: 'b', text: 'Ethene has no carbon atoms.' },
          { id: 'c', text: 'Ethene is a solid at room temperature.' },
          { id: 'd', text: 'Ethene molecules are radioactive.' },
        ],
        correctOptionId: 'a',
        hints: ['What reactive feature does ethene have that a fully-saturated alkane (like ethane) lacks?'],
        explanation: "Ethene's C=C double bond can open up during polymerisation, creating a new bonding site to the next monomer — this repeatable process is exactly what allows thousands of ethene units to link into one long polyethylene chain.",
      },
    },
  ],
};
