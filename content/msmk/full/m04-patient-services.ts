// MSMK Module 4 — Maintain High Standards of Patient Services.
// TESDA Caregiving NC II CBLM: Learning Experience 4 / Information Sheet
// 4, Self-Check + Answer Sheet No 4, Job Sheet No 4 / Specification Sheet
// No 4 (establish good interpersonal relationship with patient).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M04: Module = {
  id: 'm04',
  code: 'MSMK-04',
  order: 4,
  title: en('Patient Services'),
  shortDescription: en('Care for patients with kindness and respect.'),
  icon: '🏥',
  accentKey: 'patientcare',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Patient Services unit — general best-practice patient interaction, not clinical guidance.'
  ),

  learningExperience: [
    { icon: '🤝', label: en('Greet every patient warmly') },
    { icon: '👂', label: en('Listen without judging') },
    { icon: '🚪', label: en('Protect privacy and dignity') },
    { icon: '🙏', label: en('Treat every patient with respect') },
  ],

  informationSheet: [
    {
      id: 'first-impressions',
      title: en('1. Greeting and First Impressions'),
      keyPoints: [
        kp('Smile, make eye contact, and say your name and role.'),
        kp('Ask the patient how they would like to be addressed.'),
        kp('A calm, friendly greeting helps a nervous patient feel safe.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Patient Services, Learning Outcome 1.'),
    },
    {
      id: 'listening-respect',
      title: en('2. Active Listening and Respect'),
      keyPoints: [
        kp('Give the patient your full attention — put distractions away.'),
        kp('Do not interrupt. Let them finish speaking.'),
        kp('Never argue with or embarrass a patient in front of others.'),
      ],
      doDont: [
        { do: en('Ask "How can I help you today?" and really listen.'), dont: en('Do not talk about a patient\'s condition where others can overhear.') },
      ],
    },
    {
      id: 'privacy-dignity',
      title: en('3. Privacy and Dignity'),
      keyPoints: [
        kp('Knock and wait before entering a room.'),
        kp('Close doors or curtains during personal care.'),
        kp('Keep personal information private — share only with the right people.'),
      ],
      video: { youtubeId: '', title: en('Respecting patient privacy'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What should you say and do when you first meet a patient?') },
    { id: 'sc2', question: en('What does "active listening" mean?') },
    { id: 'sc3', question: en('What should you do before entering a patient\'s room?') },
    { id: 'sc4', question: en('Where should you never discuss a patient\'s condition?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Smile, make eye contact, give your name and role, and ask how they would like to be addressed.') },
    { id: 'sc2', answer: en('Giving your full attention, not interrupting, and really understanding what they say.') },
    { id: 'sc3', answer: en('Knock and wait for a response.') },
    { id: 'sc4', answer: en('Anywhere others who are not involved in the patient\'s care can overhear.') },
  ],

  jobSheet: {
    title: en('Establish a Good Interpersonal Relationship with a Patient (Job Sheet No. 4)'),
    description: en(
      'Role-play meeting a new patient for the first time: greet them, introduce yourself, ask how they are feeling, listen fully to their answer, and respond with respect and reassurance.'
    ),
    materials: [en('A partner to role-play the patient'), en('A quiet space')],
  },

  specification: [
    { step: 1, instruction: en('Knock and wait before entering.') },
    { step: 2, instruction: en('Smile, greet them, and introduce your name and role.') },
    { step: 3, instruction: en('Ask how they are feeling today.') },
    { step: 4, instruction: en('Listen fully without interrupting.') },
    { step: 5, instruction: en('Respond with a calm, respectful, reassuring answer.') },
    { step: 6, instruction: en('Ask if there is anything they need before you leave.') },
  ],

  quickReview: [
    kp('Greet every patient warmly, by name.'),
    kp('Listen fully — do not interrupt or judge.'),
    kp('Protect privacy — knock, close doors, keep information private.'),
    kp('Treat every patient with the same respect, always.'),
  ],

  realLifeExample: {
    title: en('A frightened new patient'),
    scenario: en(
      'A new patient arrives looking scared and unsure. You knock, smile, and say "Hello, I\'m here to help take care of you today." You ask how they are feeling and listen without rushing. By the end of the conversation, they seem calmer just from being heard.'
    ),
  },

  assessment: {
    id: 'm04-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'image-choice',
        prompt: en('How should you greet a patient?'),
        options: [
          { id: 'a', label: en('Warmly, with a smile'), imageKey: 'greeting-patient' },
          { id: 'b', label: en('Rushed, no eye contact'), imageKey: 'rude-behavior' },
        ],
        correctOptionId: 'a',
        explanation: en('A warm greeting helps a patient feel safe and respected.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: you should knock before entering a patient\'s room.'),
        imageKey: 'privacy-curtain',
        statement: en('Always knock and wait before entering a patient\'s room.'),
        correctAnswer: true,
        explanation: en('This respects their privacy and dignity.'),
      },
      {
        id: 'q3',
        type: 'true-false-picture',
        prompt: en('True or false: it is fine to discuss a patient\'s condition in the hallway.'),
        imageKey: 'rude-behavior',
        statement: en('It is fine to discuss a patient\'s condition in the hallway where others can hear.'),
        correctAnswer: false,
        explanation: en('Patient information must stay private — never discuss it where others might overhear.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the steps for meeting a new patient in order.'),
        steps: [
          { id: '1', label: en('Knock and wait') },
          { id: '2', label: en('Greet and introduce yourself') },
          { id: '3', label: en('Ask how they feel and listen') },
          { id: '4', label: en('Respond with respect and reassurance') },
        ],
        explanation: en('Respecting their space first, then building trust through listening, sets the tone for good care.'),
      },
      {
        id: 'q5',
        type: 'image-choice',
        prompt: en('A patient is talking. What should you do?'),
        options: [
          { id: 'a', label: en('Listen fully'), imageKey: 'active-listening' },
          { id: 'b', label: en('Interrupt them'), imageKey: 'rude-behavior' },
        ],
        correctOptionId: 'a',
        explanation: en('Interrupting makes a patient feel unheard — always let them finish.'),
      },
    ],
  },
};
