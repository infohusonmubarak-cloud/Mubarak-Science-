import type { Assessment } from '@/types/content';

export const chapter5AcidBaseAssessment: Assessment = {
  id: 'acid-base-reactions-assessment',
  questions: [
    // Part A — Concept
    {
      id: 'ab-a1',
      part: 'concept',
      conceptSlug: 'bronsted-lowry-theory-of-acids-and-bases',
      conceptTitle: 'Brønsted–Lowry Theory',
      question: {
        id: 'ab-a1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'How does Brønsted–Lowry theory define an acid?',
        options: [
          { id: 'a', text: 'A substance that increases [OH⁻] in water' },
          { id: 'b', text: 'A proton (H⁺) donor' },
          { id: 'c', text: 'Any substance with a sour taste' },
          { id: 'd', text: 'Any compound containing hydrogen' },
        ],
        correctOptionId: 'b',
        hints: ['Think in terms of what the acid GIVES to another species.'],
        explanation: 'A Brønsted–Lowry acid is defined as a proton (H⁺) donor — broader than the Arrhenius definition, since it does not require water.',
      },
    },
    {
      id: 'ab-a2',
      part: 'concept',
      conceptSlug: 'strong-and-weak-acids',
      conceptTitle: 'Strong and Weak Acids',
      question: {
        id: 'ab-a2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A very dilute solution of hydrochloric acid is prepared. Is it still classified as a "strong" acid?',
        options: [
          { id: 'a', text: 'No — dilute acids are automatically weak.' },
          { id: 'b', text: 'Yes — strength refers to the extent of ionisation, which stays essentially complete regardless of concentration.' },
          { id: 'c', text: 'It becomes a base when diluted.' },
          { id: 'd', text: 'Strength cannot be determined without knowing the exact concentration.' },
        ],
        correctOptionId: 'b',
        hints: ['Strength and concentration are two different properties.'],
        explanation: 'Acid strength is about how completely the acid ionises, not its concentration — a dilute strong acid still ionises essentially completely and remains classified as strong.',
      },
    },

    // Part B — Formula & Application
    {
      id: 'ab-b1',
      part: 'formula-application',
      conceptSlug: 'the-ph-scale',
      conceptTitle: 'The pH Scale',
      question: {
        id: 'ab-b1-q',
        type: 'numeric',
        difficulty: 'medium',
        prompt: 'A solution has [H⁺] = 1.0 × 10⁻⁵ mol/L. Find its pH.',
        hints: ['pH = −log₁₀[H⁺].', 'log₁₀(1.0 × 10⁻⁵) = −5.'],
        correctAnswer: 5,
        explanation: 'pH = −log₁₀(1.0 × 10⁻⁵) = 5.',
      },
    },
    {
      id: 'ab-b2',
      part: 'formula-application',
      conceptSlug: 'ionic-product-of-water',
      conceptTitle: 'The Ionic Product of Water, Kw',
      question: {
        id: 'ab-b2-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'A solution has [H⁺] = 1.0 × 10⁻⁶ mol/L. What is [OH⁻] at 25°C?',
        options: [
          { id: 'a', text: '1.0 × 10⁻⁶ mol/L' },
          { id: 'b', text: '1.0 × 10⁻⁸ mol/L' },
          { id: 'c', text: '1.0 × 10⁻¹⁴ mol/L' },
          { id: 'd', text: '1.0 × 10⁶ mol/L' },
        ],
        correctOptionId: 'b',
        hints: ['[OH⁻] = Kw / [H⁺] = (1.0 × 10⁻¹⁴) / [H⁺].'],
        explanation: '[OH⁻] = (1.0 × 10⁻¹⁴) / (1.0 × 10⁻⁶) = 1.0 × 10⁻⁸ mol/L.',
      },
    },

    // Part C — Problem Solving
    {
      id: 'ab-c1',
      part: 'problem-solving',
      conceptSlug: 'the-acid-dissociation-constant-ka',
      conceptTitle: 'The Acid Dissociation Constant, Ka',
      question: {
        id: 'ab-c1-q',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A weak acid has Ka = 9.0 × 10⁻⁶ and a starting concentration of 0.40 mol/L. Estimate [H⁺] (mol/L), assuming the ionised amount is small compared to 0.40.',
        hints: ['x² = Ka × C = 9.0 × 10⁻⁶ × 0.40.', 'x = √(3.6 × 10⁻⁶).'],
        correctAnswer: 0.0019,
        tolerance: 0.0001,
        unit: 'mol/L',
        explanation: 'x² = 9.0 × 10⁻⁶ × 0.40 = 3.6 × 10⁻⁶, so x = √(3.6 × 10⁻⁶) ≈ 1.9 × 10⁻³ mol/L.',
      },
    },
    {
      id: 'ab-c2',
      part: 'problem-solving',
      conceptSlug: 'the-henderson-hasselbalch-equation',
      conceptTitle: 'The Henderson–Hasselbalch Equation',
      question: {
        id: 'ab-c2-q',
        type: 'numeric',
        difficulty: 'hard',
        prompt: 'A buffer has pKa = 4.74, with [A⁻] = 0.10 mol/L and [HA] = 0.20 mol/L. Find the pH (log₁₀0.5 ≈ −0.30).',
        hints: ['pH = pKa + log₁₀([A⁻]/[HA]).', '[A⁻]/[HA] = 0.10/0.20 = 0.5.'],
        correctAnswer: 4.44,
        tolerance: 0.02,
        explanation: 'pH = 4.74 + log₁₀(0.5) = 4.74 − 0.30 = 4.44.',
      },
    },

    // Part D — Real-Life Application
    {
      id: 'ab-d1',
      part: 'real-life-application',
      conceptSlug: 'salt-hydrolysis',
      conceptTitle: 'Salt Hydrolysis',
      question: {
        id: 'ab-d1-q',
        type: 'multiple-choice',
        difficulty: 'medium',
        prompt: 'Ammonium chloride (NH₄Cl), formed from a weak base (NH₃) and a strong acid (HCl), is dissolved in water. Is the resulting solution acidic, basic, or neutral?',
        options: [
          { id: 'a', text: 'Basic, because ammonium is a base' },
          { id: 'b', text: 'Acidic, because NH₄⁺ (the conjugate acid of a weak base) reacts with water to produce H⁺' },
          { id: 'c', text: 'Neutral, because all salts are neutral' },
          { id: 'd', text: 'It depends only on temperature, not the ions' },
        ],
        correctOptionId: 'b',
        hints: ['Salt from a WEAK base + strong acid → the cation is a reasonably strong conjugate acid.'],
        explanation: 'NH₄⁺ is the conjugate acid of the weak base ammonia, so it hydrolyses in water to release H⁺, making the ammonium chloride solution acidic.',
      },
    },

    // Part E — Challenge
    {
      id: 'ab-e1',
      part: 'challenge',
      conceptSlug: 'how-buffer-solutions-work',
      conceptTitle: 'How Buffer Solutions Work',
      question: {
        id: 'ab-e1-q',
        type: 'multiple-choice',
        difficulty: 'hard',
        prompt: 'A buffer made of acetic acid and sodium acetate has a small amount of strong acid added. What happens?',
        options: [
          { id: 'a', text: 'The pH drops sharply, just like adding acid to pure water.' },
          { id: 'b', text: 'The acetate ion (conjugate base) consumes the added H⁺, so the pH changes only slightly.' },
          { id: 'c', text: 'The buffer converts entirely into a strong acid.' },
          { id: 'd', text: 'Nothing happens because acetic acid is already present.' },
        ],
        correctOptionId: 'b',
        hints: ['Which buffer component is specifically there to neutralise ADDED acid?'],
        explanation: 'The conjugate base (acetate ion) reacts with the added H⁺, converting it into more acetic acid — this consumes most of the added acid, so the pH shifts only slightly instead of dropping sharply.',
      },
    },
  ],
};
