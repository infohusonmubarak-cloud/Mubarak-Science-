// MSMK Module 5 — Provide Care and Support to Infants and Toddlers.
// TESDA Caregiving NC II CBLM: Learning Experience 5 / Information Sheet
// 5, Self-Check + Answer Sheet No 5, Job Sheet No 5 / Specification Sheet
// No 5 (prepare formula milk).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M05: Module = {
  id: 'm05',
  code: 'MSMK-05',
  order: 5,
  title: en('Infant & Toddler Care'),
  shortDescription: en('Feed, bathe, and keep babies safe — including formula milk.'),
  icon: '🍼',
  accentKey: 'infanttoddler',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Infant and Toddler Care unit, and WHO/UNICEF guidance on safe preparation of powdered infant formula (2007).'
  ),

  learningExperience: [
    { icon: '🍼', label: en('Prepare formula milk safely') },
    { icon: '👶', label: en('Hold and burp a baby correctly') },
    { icon: '😴', label: en('Put a baby down to sleep safely') },
    { icon: '🧷', label: en('Change a diaper cleanly') },
  ],

  informationSheet: [
    {
      id: 'formula-safety',
      title: en('1. Preparing Formula Milk Safely'),
      diagramKey: 'formula-bottle',
      keyPoints: [
        kp('Wash your hands before you start.'),
        kp('Use water that has been boiled and cooled to about body-warm.'),
        kp('Add water to the line first, then one level scoop of powder per amount of water shown on the tin.'),
        kp('Seal the bottle and shake well until fully mixed.'),
        kp('Test the temperature on your wrist before feeding — it should feel warm, not hot.'),
      ],
      doDont: [
        { do: en('Make a fresh bottle each time and use within 2 hours.'), dont: en('Never microwave a bottle — it heats unevenly and can burn the baby\'s mouth.') },
      ],
      guidelineCitation: en('WHO/UNICEF — Safe preparation, storage and handling of powdered infant formula (2007).'),
    },
    {
      id: 'holding-burping',
      title: en('2. Holding and Burping'),
      keyPoints: [
        kp('Support the baby\'s head and neck at all times.'),
        kp('Hold the baby upright against your shoulder after feeding.'),
        kp('Gently pat or rub the back until they burp.'),
      ],
    },
    {
      id: 'safe-sleep',
      title: en('3. Safe Sleep'),
      keyPoints: [
        kp('Always place a baby on their back to sleep.'),
        kp('Keep the sleep area clear — no loose blankets, pillows, or soft toys.'),
        kp('Keep the room at a comfortable, not-too-hot temperature.'),
      ],
      video: { youtubeId: '', title: en('Safe infant sleep position'), source: en('Training demonstration') },
      guidelineCitation: en('WHO — reducing the risk of sudden infant death, safe sleep practices.'),
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What temperature should the water be for mixing formula?') },
    { id: 'sc2', question: en('How many scoops of powder go in for each amount of water?') },
    { id: 'sc3', question: en('Why should you never microwave a bottle?') },
    { id: 'sc4', question: en('What position should a baby sleep in?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Boiled water, cooled to about body-warm.') },
    { id: 'sc2', answer: en('One level scoop per amount of water shown on the tin — never guess or add extra.') },
    { id: 'sc3', answer: en('It heats unevenly and can create hot spots that burn the baby\'s mouth.') },
    { id: 'sc4', answer: en('On their back, in a clear sleep area.') },
  ],

  jobSheet: {
    title: en('Prepare Formula Milk (Job Sheet No. 5)'),
    description: en(
      'Practice preparing a bottle of formula milk step by step: washing hands, measuring water and powder correctly, mixing, and testing the temperature before an imaginary feed.'
    ),
    materials: [en('A clean bottle'), en('Boiled, cooled water'), en('Formula powder and scoop (or a practice substitute)')],
  },

  specification: [
    { step: 1, instruction: en('Wash your hands thoroughly.') },
    { step: 2, instruction: en('Boil water and let it cool to about body-warm.') },
    { step: 3, instruction: en('Pour water into the bottle up to the correct line.') },
    { step: 4, instruction: en('Add the correct number of level scoops of formula powder.') },
    { step: 5, instruction: en('Seal the bottle and shake well until fully mixed.') },
    { step: 6, instruction: en('Test a drop on your wrist — it should feel warm, not hot.') },
  ],

  quickReview: [
    kp('Wash your hands first, every time.'),
    kp('Boiled, cooled water to the line — then one level scoop per measurement.'),
    kp('Never microwave a bottle.'),
    kp('Babies sleep on their back, in a clear space.'),
  ],

  realLifeExample: {
    title: en('A hungry, crying baby'),
    scenario: en(
      'A baby is crying and it is feeding time. Instead of rushing, you wash your hands, boil fresh water, let it cool, and carefully measure the water and powder. You test the temperature on your wrist before feeding — the extra minute keeps the baby safe.'
    ),
  },

  assessment: {
    id: 'm05-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'tap-spot',
        prompt: en('Tap where the water fill line is on the bottle.'),
        diagramKey: 'formula-bottle',
        targets: [
          { id: 'line', x: 45, y: 50, radius: 14, label: en('Water fill line') },
          { id: 'teat', x: 50, y: 8, radius: 10, label: en('Teat') },
          { id: 'scoop', x: 80, y: 35, radius: 12, label: en('Scoop') },
        ],
        correctTargetId: 'line',
        explanation: en('The fill line shows exactly how much boiled, cooled water to add before the powder.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: you can heat a bottle in the microwave to save time.'),
        imageKey: 'formula-bottle',
        statement: en('It is safe to microwave a baby bottle.'),
        correctAnswer: false,
        explanation: en('Microwaves heat unevenly and can create dangerously hot spots.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('How should a baby sleep?'),
        options: [
          { id: 'a', label: en('On their back, clear space'), imageKey: 'safe-sleep' },
          { id: 'b', label: en('With soft toys and blankets'), imageKey: 'messy-area' },
        ],
        correctOptionId: 'a',
        explanation: en('A clear sleep space on the back is the safest position.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the formula preparation steps in order.'),
        steps: [
          { id: '1', label: en('Wash your hands') },
          { id: '2', label: en('Add boiled, cooled water to the line') },
          { id: '3', label: en('Add one level scoop of powder') },
          { id: '4', label: en('Seal and shake well') },
          { id: '5', label: en('Test the temperature on your wrist') },
        ],
        explanation: en('Each step protects the baby — skipping or reordering them can make the milk unsafe or too hot.'),
      },
      {
        id: 'q5',
        type: 'true-false-picture',
        prompt: en('True or false: you should support a baby\'s head and neck at all times.'),
        imageKey: 'burping-baby',
        statement: en('Always support a baby\'s head and neck.'),
        correctAnswer: true,
        explanation: en('A baby cannot support their own head — you must do it for them.'),
      },
    ],
  },
};
