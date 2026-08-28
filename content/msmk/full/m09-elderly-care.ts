// MSMK Module 9 — Provide Care and Services to Elderly.
// TESDA Caregiving NC II CBLM: Learning Experience 9 / Information Sheet
// 9, Self-Check + Answer Sheet No 9, Job Sheet No 9 / Specification Sheet
// No 9 (practice elderly's personal care / ADL needs).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M09: Module = {
  id: 'm09',
  code: 'MSMK-09',
  order: 9,
  title: en('Elderly Care'),
  shortDescription: en('Support older people with daily tasks and dignity.'),
  icon: '👵',
  accentKey: 'elderly',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Elderly Care unit, and general WHO healthy-ageing guidance on safe mobility support.'
  ),

  learningExperience: [
    { icon: '♿', label: en('Assist safely with moving and transfers') },
    { icon: '🥄', label: en('Help with eating and drinking') },
    { icon: '💊', label: en('Remind about medication times') },
    { icon: '🙏', label: en('Care with patience and dignity') },
  ],

  informationSheet: [
    {
      id: 'adl-basics',
      title: en('1. Activities of Daily Living (ADL)'),
      keyPoints: [
        kp('ADL means the everyday tasks: washing, dressing, eating, moving, and using the toilet.'),
        kp('Help only where needed — let the person do what they still can themselves.'),
        kp('Always explain what you are about to do before you do it.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Elderly Care, Learning Outcome 1.'),
    },
    {
      id: 'safe-transfer',
      title: en('2. Safe Mobility and Transfers'),
      diagramKey: 'mobility-assist',
      keyPoints: [
        kp('Bend your knees, keep your back straight — never lift with your back.'),
        kp('Stand close to the person and support under the arm.'),
        kp('Move slowly, and check the person feels steady before continuing.'),
      ],
      doDont: [{ do: en('Bend your knees when helping someone stand.'), dont: en('Never pull on a person\'s arm alone to lift them — support their whole body.') }],
    },
    {
      id: 'dignity-respect',
      title: en('3. Dignity and Respect'),
      keyPoints: [
        kp('Knock and ask before helping with personal care.'),
        kp('Check the skin regularly for redness or pressure sores, especially if they sit or lie for long periods.'),
        kp('Speak to the person as an adult, never like a child.'),
      ],
      video: { youtubeId: '', title: en('Safe transfer technique for caregivers'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What does ADL stand for?') },
    { id: 'sc2', question: en('When helping someone stand, what should you bend — your knees or your back?') },
    { id: 'sc3', question: en('Why should you check the skin regularly for someone who sits or lies for long periods?') },
    { id: 'sc4', question: en('How should you speak to an elderly person you are caring for?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Activities of Daily Living.') },
    { id: 'sc2', answer: en('Your knees — never lift with your back, it can injure you and them.') },
    { id: 'sc3', answer: en('To catch pressure sores early, before they become serious.') },
    { id: 'sc4', answer: en('As an adult, with respect and dignity — never like a child.') },
  ],

  jobSheet: {
    title: en("Practice Elderly Personal Care (ADL) Needs (Job Sheet No. 9)"),
    description: en(
      'Practice a safe assisted transfer from a chair to standing with a partner: explain what you are doing, bend your knees, support under the arm, and move slowly and safely.'
    ),
    materials: [en('A partner'), en('A sturdy chair'), en('A clear, open space')],
  },

  specification: [
    { step: 1, instruction: en('Explain to the person what you are about to do.') },
    { step: 2, instruction: en('Stand close, facing them.') },
    { step: 3, instruction: en('Bend your knees, keep your back straight.') },
    { step: 4, instruction: en('Support them under the arm as they stand.') },
    { step: 5, instruction: en('Move slowly and check they feel steady.') },
    { step: 6, instruction: en('Stay close until they are fully settled.') },
  ],

  quickReview: [
    kp('ADL = the everyday tasks of washing, dressing, eating, moving, toileting.'),
    kp('Help only where needed — let them do what they can.'),
    kp('Bend your knees, never your back, when assisting a transfer.'),
    kp('Always explain first, and treat the person with dignity.'),
  ],

  realLifeExample: {
    title: en('Helping someone stand from a chair'),
    scenario: en(
      'An elderly person wants to stand but is unsteady. You explain what you are about to do, bend your knees, and support them firmly under the arm as they rise, moving slowly until they feel steady on their feet.'
    ),
  },

  assessment: {
    id: 'm09-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'tap-spot',
        prompt: en('Tap where you should support the person during a transfer.'),
        diagramKey: 'mobility-assist',
        targets: [
          { id: 'arm', x: 62, y: 55, radius: 14, label: en('Under the arm') },
          { id: 'head', x: 51, y: 20, radius: 12, label: en('Head') },
          { id: 'feet', x: 45, y: 90, radius: 12, label: en('Feet') },
        ],
        correctTargetId: 'arm',
        explanation: en('Supporting under the arm gives stable, safe support during a transfer.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: you should lift with your back to save time.'),
        imageKey: 'wheelchair-transfer',
        statement: en('Lift with your back when helping someone stand.'),
        correctAnswer: false,
        explanation: en('Always bend your knees, not your back — lifting with your back can cause serious injury.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('How should you speak to an elderly person in your care?'),
        options: [
          { id: 'a', label: en('With respect, as an adult'), imageKey: 'patience-icon' },
          { id: 'b', label: en('Like a child'), imageKey: 'rude-behavior' },
        ],
        correctOptionId: 'a',
        explanation: en('Always treat elderly people with the respect and dignity of an adult.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the safe transfer steps in order.'),
        steps: [
          { id: '1', label: en('Explain what you are about to do') },
          { id: '2', label: en('Bend your knees, back straight') },
          { id: '3', label: en('Support under the arm') },
          { id: '4', label: en('Move slowly, check they feel steady') },
        ],
        explanation: en('Explaining first builds trust; correct posture and support keep both of you safe.'),
      },
      {
        id: 'q5',
        type: 'true-false-picture',
        prompt: en('True or false: you should check the skin regularly for someone who sits for long periods.'),
        imageKey: 'pressure-sore-check',
        statement: en('Check the skin regularly for someone who sits or lies for long periods.'),
        correctAnswer: true,
        explanation: en('This catches pressure sores early, before they become serious.'),
      },
    ],
  },
};
