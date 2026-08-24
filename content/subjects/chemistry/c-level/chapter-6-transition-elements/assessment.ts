import type { Assessment } from '@/types/content';

export const chapter6TransitionAssessment: Assessment = {
  id: 'transition-elements-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'te-a1',
      part: 'concept',
      conceptSlug: 'what-makes-an-element-a-transition-element',
      conceptTitle: 'What Makes an Element a Transition Element',
      question: {
        id: 'te-a1-q',
        type: 'multiple-choice',
        difficulty: 'easy',
        prompt: 'What defines a transition element?',
        options: [
          { id: 'a', text: 'It is a metal, anywhere on the periodic table.' },
          { id: 'b', text: 'It forms at least one stable ion with a partially filled d subshell.' },
          { id: 'c', text: 'It reacts violently with water.' },
          { id: 'd', text: 'It has no electrons in its outer shell.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about what makes Sc and Zn borderline cases.'],
        explanation: 'A transition element is specifically defined by forming at least one stable ion with a partially filled d subshell.',
      },
    },
    {
      id: 'te-a2',
      part: 'concept',
      conceptSlug: 'coloured-compounds-and-catalytic-activity',
      conceptTitle: 'Coloured Compounds and Catalytic Activity',
      question: {
        id: 'te-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why are Sc³⁺ and Zn²⁺ compounds typically colourless, unlike most transition metal ions?',
        options: [
          { id: 'a', text: 'They are not real ions.' },
          { id: 'b', text: 'Sc³⁺ has an empty 3d subshell and Zn²⁺ has a full 3d subshell, so no d-to-d electron transitions are possible.' },
          { id: 'c', text: 'They absorb all wavelengths of light equally.' },
          { id: 'd', text: 'Colour is unrelated to electron configuration.' },
        ],
        correctOptionId: 'b',
        hints: ['Colour requires an electron to jump between two different d orbital energy levels — what does that require?'],
        explanation: 'With either no d electrons to promote (Sc³⁺, empty 3d) or no empty d orbital to promote into (Zn²⁺, full 3d), no d-to-d transition can absorb visible light, so these ions appear colourless.',
      },
    },

    // Part B — Formula & Application
    {
      id: 'te-b1',
      part: 'formula-application',
      conceptSlug: 'variable-oxidation-states',
      conceptTitle: 'Variable Oxidation States',
      question: {
        id: 'te-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the oxidation state of manganese in MnO₂. (O = −2)',
        hints: ['Mn + 2(−2) = 0.', 'Mn − 4 = 0.'],
        correctAnswer: 4,
        explanation: 'Mn + 2(−2) = 0 → Mn = +4.',
      },
    },
    {
      id: 'te-b2',
      part: 'formula-application',
      conceptSlug: 'variable-oxidation-states',
      conceptTitle: 'Variable Oxidation States',
      question: {
        id: 'te-b2-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'Find the oxidation state of chromium in the dichromate ion, Cr₂O₇²⁻ (overall charge −2, O = −2).',
        hints: ['2×Cr + 7(−2) = −2.', '2Cr − 14 = −2.'],
        correctAnswer: 6,
        explanation: '2Cr + 7(−2) = −2 → 2Cr − 14 = −2 → 2Cr = 12 → Cr = +6.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'te-c1',
      part: 'problem-solving',
      conceptSlug: 'electron-configuration-of-3d-transition-elements',
      conceptTitle: 'Electron Configuration of the 3d Series',
      question: {
        id: 'te-c1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'Iron (Fe, [Ar]3d⁶4s²) forms both Fe²⁺ and Fe³⁺. Which electrons are removed first to form Fe²⁺, and why?',
        options: [
          { id: 'a', text: 'The two 4s electrons, because they are typically removed before 3d electrons when forming transition-metal ions.' },
          { id: 'b', text: 'Two 3d electrons, because 3d electrons are always removed first.' },
          { id: 'c', text: 'Electrons from the argon core.' },
          { id: 'd', text: 'It is impossible to predict which electrons are removed.' },
        ],
        correctOptionId: 'a',
        hints: ["Even though 4s fills before 3d, which electrons end up being LOST first when forming an ion?"],
        explanation: 'When transition metals form ions, the 4s electrons are removed first (despite filling first), leaving Fe²⁺ with the configuration [Ar]3d⁶ — this is a well-known and important pattern across the whole 3d series.',
      },
    },
    {
      id: 'te-c2',
      part: 'problem-solving',
      conceptSlug: 'coloured-compounds-and-catalytic-activity',
      conceptTitle: 'Coloured Compounds and Catalytic Activity',
      question: {
        id: 'te-c2-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A transition metal catalyst speeds up a reaction by cycling between two of its oxidation states during the reaction mechanism. What role does this play, in terms of activation energy?',
        options: [
          { id: 'a', text: 'It increases the activation energy, making the reaction slower but more controlled.' },
          { id: 'b', text: 'It provides an alternative reaction pathway with a lower overall activation energy.' },
          { id: 'c', text: 'It has no effect on activation energy, only on the final products.' },
          { id: 'd', text: 'It changes the reactants into completely different substances.' },
        ],
        correctOptionId: 'b',
        hints: ['Recall the general definition of what a catalyst does to a reaction pathway.'],
        explanation: "By temporarily accepting and donating electrons via its accessible oxidation states, the catalyst opens up a new, lower-activation-energy pathway between the same reactants and products, speeding up the reaction without being consumed.",
      },
    },

    // Part D — Real-Life Application
    {
      id: 'te-d1',
      part: 'real-life-application',
      conceptSlug: 'uses-of-transition-elements',
      conceptTitle: 'Uses of Transition Elements',
      question: {
        id: 'te-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Why is titanium specifically chosen for hip replacement implants, rather than a cheaper, more common metal?',
        options: [
          { id: 'a', text: 'Titanium is magnetic, which helps the implant stay in place.' },
          { id: 'b', text: "Titanium is strong, lightweight, and forms a stable, unreactive oxide layer that resists corrosion inside the body." },
          { id: 'c', text: 'Titanium is radioactive, which sterilises the implant.' },
          { id: 'd', text: 'Titanium dissolves slowly in body fluids to provide nutrients.' },
        ],
        correctOptionId: 'b',
        hints: ['Think about the specific chemical and physical properties needed for a long-term implant.'],
        explanation: "Titanium's combination of strength, low weight, and a stable, corrosion-resistant oxide layer makes it particularly well-suited and well-tolerated for long-term implants inside the body.",
      },
    },

    // Part E — Challenge
    {
      id: 'te-e1',
      part: 'challenge',
      conceptSlug: 'variable-oxidation-states',
      conceptTitle: 'Variable Oxidation States',
      question: {
        id: 'te-e1-q',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'Find the oxidation state of manganese in the permanganate ion, MnO₄⁻ (overall charge −1, O = −2).',
        hints: ['Mn + 4(−2) = −1.', 'Mn − 8 = −1.'],
        correctAnswer: 7,
        explanation: 'Mn + 4(−2) = −1 → Mn − 8 = −1 → Mn = +7.',
      },
    },
  ],
};
