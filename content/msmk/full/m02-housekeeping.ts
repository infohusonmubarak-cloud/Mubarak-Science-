// MSMK Module 2 — Follow Basic Housekeeping Procedures.
// TESDA Caregiving NC II CBLM structure: Learning Experience 2 /
// Information Sheet 2, Self-Check + Answer Sheet No 2, Job Sheet No 2 /
// Specification Sheet No 2 (sort and remove unnecessary items; arrange
// and maintain work area, tools, and equipment).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M02: Module = {
  id: 'm02',
  code: 'MSMK-02',
  order: 2,
  title: en('Basic Housekeeping'),
  shortDescription: en('Keep a home or workplace clean and safe.'),
  icon: '🧹',
  accentKey: 'housekeeping',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Basic Housekeeping Procedures unit.'
  ),

  learningExperience: [
    { icon: '🗂️', label: en('Sort what is needed from what is not') },
    { icon: '🧹', label: en('Clean surfaces the right way') },
    { icon: '🧰', label: en('Keep tools in their place') },
    { icon: '⚠️', label: en('Spot and remove safety hazards') },
  ],

  informationSheet: [
    {
      id: 'why-housekeeping',
      title: en('1. Why Housekeeping Matters'),
      keyPoints: [
        kp('A clean, tidy space is safer — fewer trips, falls, and infections.'),
        kp('It also helps you find tools quickly when you need them.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Basic Housekeeping Procedures, Learning Outcome 1.'),
    },
    {
      id: 'sort-remove',
      title: en('2. Sort and Remove Unnecessary Items'),
      keyPoints: [
        kp('Go through the area and separate: needed now, needed later, not needed.'),
        kp('Throw away rubbish safely — sharp items go in a safe container.'),
        kp('Ask before throwing away anything that is not clearly rubbish.'),
      ],
      doDont: [{ do: en('Sort items before you start cleaning.'), dont: en('Do not throw away things that belong to someone else without asking.') }],
    },
    {
      id: 'arrange-maintain',
      title: en('3. Arrange and Maintain Tools and Equipment'),
      keyPoints: [
        kp('Give every tool a home — put it back in the same place every time.'),
        kp('Clean tools after use before putting them away.'),
        kp('Check equipment for damage before and after use.'),
      ],
      video: { youtubeId: '', title: en('Organizing a care work area'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What are the three groups you sort items into?') },
    { id: 'sc2', question: en('Why should sharp items go in a safe container?') },
    { id: 'sc3', question: en('What should you do before throwing away an item that is not clearly rubbish?') },
    { id: 'sc4', question: en('Why should tools always go back in the same place?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Needed now, needed later, and not needed.') },
    { id: 'sc2', answer: en('To prevent cuts or injuries to anyone who touches the trash.') },
    { id: 'sc3', answer: en('Ask the owner or your supervisor first.') },
    { id: 'sc4', answer: en('So everyone can find them quickly, especially in an emergency.') },
  ],

  jobSheet: {
    title: en('Sort, Remove Unnecessary Items, and Arrange the Work Area (Job Sheet No. 2)'),
    description: en(
      'Practice sorting a cluttered work area into needed/not-needed items, safely removing rubbish, and arranging tools and equipment so everything has a clear place.'
    ),
    materials: [en('A work area or table with mixed items'), en('A rubbish bin'), en('Cleaning cloth')],
  },

  specification: [
    { step: 1, instruction: en('Look at the whole area before starting.') },
    { step: 2, instruction: en('Sort items into: needed now, needed later, not needed.') },
    { step: 3, instruction: en('Safely remove rubbish — sharp items in a safe container.') },
    { step: 4, instruction: en('Wipe down surfaces before arranging items back.') },
    { step: 5, instruction: en('Arrange tools and equipment in clear, labelled places.') },
    { step: 6, instruction: en('Do a final check — is anything still out of place or unsafe?') },
  ],

  quickReview: [
    kp('Sort before you clean.'),
    kp('Sharp or dangerous items go in a safe container.'),
    kp('Every tool has a home — put it back every time.'),
    kp('Ask before throwing away anything unclear.'),
  ],

  realLifeExample: {
    title: en('A cluttered supply room'),
    scenario: en(
      'You find a supply room with mixed clean and used items. You sort them, throw away expired supplies safely, wipe the shelves, and label each shelf so the next person can find bandages and gloves quickly during an emergency.'
    ),
  },

  assessment: {
    id: 'm02-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'image-choice',
        prompt: en('Which area is safer to work in?'),
        options: [
          { id: 'a', label: en('Tidy, organized area'), imageKey: 'tidy-area' },
          { id: 'b', label: en('Cluttered area'), imageKey: 'messy-area' },
        ],
        correctOptionId: 'a',
        explanation: en('A tidy area has fewer trip hazards and lets you find things fast.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: you should throw away anything you are not sure about right away.'),
        imageKey: 'trash-removal',
        statement: en('Throw away anything you are unsure about right away.'),
        correctAnswer: false,
        explanation: en('Ask first — it might belong to someone or still be needed.'),
      },
      {
        id: 'q3',
        type: 'drag-order',
        prompt: en('Put the housekeeping steps in order.'),
        steps: [
          { id: '1', label: en('Sort items into needed/not needed') },
          { id: '2', label: en('Safely remove rubbish') },
          { id: '3', label: en('Wipe down surfaces') },
          { id: '4', label: en('Arrange tools in their place') },
        ],
        explanation: en('Sort first, then clear rubbish, clean, and finally organize what remains.'),
      },
      {
        id: 'q4',
        type: 'true-false-picture',
        prompt: en('True or false: sharp items should go in a safe, labelled container.'),
        imageKey: 'sorting-items',
        statement: en('Sharp items should go in a safe, labelled container.'),
        correctAnswer: true,
        explanation: en('This protects anyone who later handles the rubbish.'),
      },
      {
        id: 'q5',
        type: 'image-choice',
        prompt: en('A tool is broken. What should you do?'),
        options: [
          { id: 'a', label: en('Report and remove it from use'), imageKey: 'arranging-tools' },
          { id: 'b', label: en('Use it anyway'), imageKey: 'messy-area' },
          { id: 'c', label: en('Hide it'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('A broken tool can hurt someone — report it and take it out of use.'),
      },
    ],
  },
};
