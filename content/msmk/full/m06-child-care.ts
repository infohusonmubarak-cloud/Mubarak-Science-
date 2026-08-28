// MSMK Module 6 — Provide Care and Support to Children.
// TESDA Caregiving NC II CBLM: Learning Experience 6 / Information Sheet
// 6, Self-Check + Answer Sheet No 6, Job Sheet No 6 / Specification Sheet
// No 6 (practice personal hygiene to children).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M06: Module = {
  id: 'm06',
  code: 'MSMK-06',
  order: 6,
  title: en('Child Care'),
  shortDescription: en('Daily care and hygiene for children.'),
  icon: '🧒',
  accentKey: 'childcare',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Child Care unit, and WHO hand hygiene guidance (20-second wash with soap and water).'
  ),

  learningExperience: [
    { icon: '🧼', label: en('Wash hands the right way') },
    { icon: '🪥', label: en('Help with brushing teeth') },
    { icon: '🛁', label: en('Bath time, safely') },
    { icon: '👕', label: en('Keep clothes clean and dry') },
  ],

  informationSheet: [
    {
      id: 'handwashing',
      title: en('1. Handwashing'),
      diagramKey: 'handwashing',
      keyPoints: [
        kp('Wet hands, apply soap, scrub all over — including between fingers — for at least 20 seconds.'),
        kp('Rinse well and dry with a clean towel.'),
        kp('Wash before eating, after the toilet, and after playing outside.'),
      ],
      guidelineCitation: en('WHO — hand hygiene guidance, 20-second soap-and-water wash.'),
    },
    {
      id: 'daily-hygiene',
      title: en('2. Daily Hygiene Routine'),
      keyPoints: [
        kp('Brush teeth morning and night.'),
        kp('Bath or wash daily, checking skin folds and behind ears.'),
        kp('Trim nails regularly to stop scratching and dirt build-up.'),
      ],
      doDont: [{ do: en('Make hygiene a gentle, calm routine.'), dont: en('Never force or rush a scared child — this makes them fear hygiene time.') }],
    },
    {
      id: 'clean-clothes',
      title: en('3. Clean, Dry Clothes'),
      keyPoints: [
        kp('Change wet or soiled clothes right away.'),
        kp('Dress for the weather — not too hot, not too cold.'),
      ],
      video: { youtubeId: '', title: en('Teaching children to wash hands'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('How long should handwashing with soap take?') },
    { id: 'sc2', question: en('Name three times a child should wash their hands.') },
    { id: 'sc3', question: en('Why should you never rush or force a scared child during hygiene time?') },
    { id: 'sc4', question: en('Why should wet or soiled clothes be changed right away?') },
  ],
  answers: [
    { id: 'sc1', answer: en('At least 20 seconds.') },
    { id: 'sc2', answer: en('Before eating, after using the toilet, and after playing outside.') },
    { id: 'sc3', answer: en('It can make them afraid of hygiene routines going forward.') },
    { id: 'sc4', answer: en('To prevent skin irritation, rashes, and discomfort.') },
  ],

  jobSheet: {
    title: en('Practice Personal Hygiene with Children (Job Sheet No. 6)'),
    description: en(
      'Demonstrate a full handwashing routine step by step, as if teaching a child, and explain each step in simple words a child would understand.'
    ),
    materials: [en('Soap'), en('Water'), en('A clean towel')],
  },

  specification: [
    { step: 1, instruction: en('Wet both hands with clean water.') },
    { step: 2, instruction: en('Apply soap.') },
    { step: 3, instruction: en('Scrub all over — palms, backs, between fingers, under nails — for 20 seconds.') },
    { step: 4, instruction: en('Rinse well under running water.') },
    { step: 5, instruction: en('Dry with a clean towel.') },
  ],

  quickReview: [
    kp('Soap + water + 20 seconds = clean hands.'),
    kp('Wash before eating, after the toilet, after playing outside.'),
    kp('Keep hygiene time calm and gentle, never rushed.'),
    kp('Change wet or soiled clothes right away.'),
  ],

  realLifeExample: {
    title: en('Teaching a shy child to wash up'),
    scenario: en(
      'A young child is scared of water on their face. Instead of forcing it, you make handwashing playful — counting to 20 together while scrubbing — so the child learns the habit without fear.'
    ),
  },

  assessment: {
    id: 'm06-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'true-false-picture',
        prompt: en('True or false: handwashing with soap should take at least 20 seconds.'),
        imageKey: 'handwashing',
        statement: en('Wash hands with soap for at least 20 seconds.'),
        correctAnswer: true,
        explanation: en('20 seconds is long enough to remove germs effectively.'),
      },
      {
        id: 'q2',
        type: 'image-choice',
        prompt: en('When should a child wash their hands?'),
        options: [
          { id: 'a', label: en('Before eating'), imageKey: 'handwashing' },
          { id: 'b', label: en('Only once a day'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('Hands should be washed before eating, after the toilet, and after playing outside — not just once a day.'),
      },
      {
        id: 'q3',
        type: 'drag-order',
        prompt: en('Put the handwashing steps in order.'),
        steps: [
          { id: '1', label: en('Wet hands') },
          { id: '2', label: en('Apply soap') },
          { id: '3', label: en('Scrub for 20 seconds') },
          { id: '4', label: en('Rinse') },
          { id: '5', label: en('Dry with a clean towel') },
        ],
        explanation: en('Each step matters — scrubbing dry hands or skipping the rinse leaves germs behind.'),
      },
      {
        id: 'q4',
        type: 'true-false-picture',
        prompt: en('True or false: you should force a scared child to hurry through bath time.'),
        imageKey: 'bath-time',
        statement: en('Force a scared child to hurry through bath time.'),
        correctAnswer: false,
        explanation: en('Rushing or forcing a scared child creates fear — keep it calm and gentle instead.'),
      },
      {
        id: 'q5',
        type: 'image-choice',
        prompt: en('A child\'s clothes are wet. What should you do?'),
        options: [
          { id: 'a', label: en('Change them right away'), imageKey: 'clean-clothes' },
          { id: 'b', label: en('Leave them until later'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('Wet clothes can cause skin irritation and discomfort — change them promptly.'),
      },
    ],
  },
};
