import type { Topic } from '@/types/content';

// Navigation outline for Chapter 7, matching the textbook's two sections
// (7.1-7.2) exactly. (Chapter slug stays 'circles-advanced' to avoid
// colliding with Math A-Level's 'circles' chapter — see CLAUDE.md.)
export const chapter7BTopics: Topic[] = [
  {
    slug: 'properties-of-tangents-topic',
    title: '7.1 Properties of Tangents',
    concepts: [
      { slug: 'the-tangent-radius-perpendicularity-theorem', title: 'The Tangent-Radius Perpendicularity Theorem', difficulty: 'medium' },
      { slug: 'the-two-tangent-theorem', title: 'The Two-Tangent Theorem', difficulty: 'medium' },
      { slug: 'the-tangent-chord-angle-theorem', title: 'The Tangent-Chord Angle Theorem', difficulty: 'hard' },
    ],
  },
  {
    slug: 'concyclic-points-topic',
    title: '7.2 Concyclic Points',
    concepts: [
      { slug: 'meaning-and-conditions-for-concyclic-points', title: 'Meaning and Conditions for Concyclic Points', difficulty: 'medium' },
      { slug: 'proving-four-points-are-concyclic', title: 'Proving Four Points Are Concyclic', difficulty: 'hard' },
    ],
  },
];
