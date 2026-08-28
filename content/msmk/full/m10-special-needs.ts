// MSMK Module 10 — Provide Care and Support to People with Special Needs.
// TESDA Caregiving NC II CBLM: Learning Experience 10 / Information Sheet
// 10, Self-Check + Answer Sheet No 10, Job Sheet No 10 / Specification
// Sheet No 10 (practice assisting in maintaining wellbeing of people with
// special needs).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M10: Module = {
  id: 'm10',
  code: 'MSMK-10',
  order: 10,
  title: en('Special Needs Care'),
  shortDescription: en('Support people with disabilities with patience and care.'),
  icon: '♿',
  accentKey: 'specialneeds',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Special Needs Care unit, informed by the general principles of the WHO/World Bank World Report on Disability (respect, inclusion, and person-centered support).'
  ),

  learningExperience: [
    { icon: '🤟', label: en('Communicate clearly and patiently') },
    { icon: '♿', label: en('Support access and independence') },
    { icon: '🧩', label: en('Include everyone in activities') },
    { icon: '🕊️', label: en('Care with patience, never pity') },
  ],

  informationSheet: [
    {
      id: 'person-first',
      title: en('1. Person-First, Respectful Care'),
      keyPoints: [
        kp('See the person first, not the disability.'),
        kp('Ask how they prefer to be helped — do not assume.'),
        kp('Speak directly to the person, not only to a caregiver or family member with them.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Special Needs Care, Learning Outcome 1.'),
    },
    {
      id: 'clear-communication',
      title: en('2. Clear, Patient Communication'),
      keyPoints: [
        kp('Use simple, clear language and give time to respond.'),
        kp('Use gestures or pictures if that helps understanding.'),
        kp('Never raise your voice — a disability is not a hearing or understanding problem unless stated.'),
      ],
      doDont: [{ do: en('Give the person time to communicate in their own way.'), dont: en('Never finish their sentences or speak over them.') }],
    },
    {
      id: 'supporting-independence',
      title: en('3. Supporting Independence'),
      keyPoints: [
        kp('Help only with what the person cannot do themselves.'),
        kp('Keep the environment safe and accessible — clear paths, good lighting.'),
        kp('Include the person in decisions about their own care.'),
      ],
      video: { youtubeId: '', title: en('Respectful, person-centered support'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What does "person-first" care mean?') },
    { id: 'sc2', question: en('Who should you speak to — only a family member, or the person themselves?') },
    { id: 'sc3', question: en('Should you finish a person\'s sentences for them if they speak slowly?') },
    { id: 'sc4', question: en('What should you help with, and what should you leave to the person?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Seeing the person first, not defining them by their disability.') },
    { id: 'sc2', answer: en('The person themselves, directly.') },
    { id: 'sc3', answer: en('No — give them time and let them finish in their own way.') },
    { id: 'sc4', answer: en('Help only with what they cannot do themselves — support their independence in everything else.') },
  ],

  jobSheet: {
    title: en('Assist in Maintaining the Wellbeing of People with Special Needs (Job Sheet No. 10)'),
    description: en(
      'Role-play supporting a person with a mobility or communication difference through a simple daily task, practicing patient communication and offering help only where it is needed.'
    ),
    materials: [en('A partner to role-play'), en('A simple daily task, e.g. reaching an item or moving to another room')],
  },

  specification: [
    { step: 1, instruction: en('Greet the person directly and ask how they would like help.') },
    { step: 2, instruction: en('Use clear, simple language and wait patiently for their response.') },
    { step: 3, instruction: en('Offer help only with the part of the task they cannot do alone.') },
    { step: 4, instruction: en('Check the space is clear and accessible.') },
    { step: 5, instruction: en('Thank them and confirm they are comfortable before leaving.') },
  ],

  quickReview: [
    kp('See the person first, not the disability.'),
    kp('Speak directly to the person and give them time.'),
    kp('Help only where needed — support independence.'),
    kp('Keep spaces safe, clear, and accessible.'),
  ],

  realLifeExample: {
    title: en('Assisting someone who uses a wheelchair'),
    scenario: en(
      'A person using a wheelchair wants to reach a shelf. Instead of assuming, you ask, "Would you like me to get that for you, or move it somewhere easier to reach?" They choose, and you follow their preference.'
    ),
  },

  assessment: {
    id: 'm10-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'image-choice',
        prompt: en('Who should you speak to when supporting someone with special needs?'),
        options: [
          { id: 'a', label: en('The person directly'), imageKey: 'sign-language' },
          { id: 'b', label: en('Only their family member'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('Always speak directly to the person, with respect.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: you should finish a person\'s sentences if they speak slowly.'),
        imageKey: 'patience-icon',
        statement: en('Finish a person\'s sentences for them if they speak slowly.'),
        correctAnswer: false,
        explanation: en('Give them time to communicate in their own way — never speak over them.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('How much help should you give?'),
        options: [
          { id: 'a', label: en('Only what is needed'), imageKey: 'inclusive-play' },
          { id: 'b', label: en('Do everything for them'), imageKey: 'wheelchair-ramp' },
        ],
        correctOptionId: 'a',
        explanation: en('Support independence — help only with what the person cannot do themselves.'),
      },
      {
        id: 'q4',
        type: 'true-false-picture',
        prompt: en('True or false: raising your voice helps someone with special needs understand you better.'),
        imageKey: 'sign-language',
        statement: en('Raising your voice helps someone with special needs understand you better.'),
        correctAnswer: false,
        explanation: en('A disability is not automatically a hearing problem — speak clearly and normally, not louder.'),
      },
      {
        id: 'q5',
        type: 'drag-order',
        prompt: en('Put the steps for supporting someone with special needs in order.'),
        steps: [
          { id: '1', label: en('Greet and ask how they want help') },
          { id: '2', label: en('Use clear language, wait patiently') },
          { id: '3', label: en('Help only where needed') },
          { id: '4', label: en('Confirm they are comfortable') },
        ],
        explanation: en('Asking first respects their choices; helping only where needed supports their independence.'),
      },
    ],
  },
};
