// MSMK Module 8 — Foster Physical Development of Children.
// TESDA Caregiving NC II CBLM: Learning Experience 8 / Information Sheet
// 8, Self-Check + Answer Sheet No 8, Job Sheet No 8 / Specification Sheet
// No 8 (assist children's physical development).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M08: Module = {
  id: 'm08',
  code: 'MSMK-08',
  order: 8,
  title: en("Children's Physical Growth"),
  shortDescription: en('Help children grow strong through movement and play.'),
  icon: '🏃',
  accentKey: 'childphysical',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Physical Development unit, and general WHO guidance on physical activity for early childhood.'
  ),

  learningExperience: [
    { icon: '🤸', label: en('Encourage safe movement and stretching') },
    { icon: '⚽', label: en('Play games that build strength') },
    { icon: '🧗', label: en('Supervise climbing and balance activities') },
    { icon: '🌳', label: en('Get outside for fresh air and space to move') },
  ],

  informationSheet: [
    {
      id: 'why-movement',
      title: en('1. Why Movement Matters'),
      diagramKey: 'physical-activity',
      keyPoints: [
        kp('Movement builds strong muscles, bones, and coordination.'),
        kp('Active play also helps children sleep and focus better.'),
        kp('Young children need active play every day, not just occasionally.'),
      ],
      guidelineCitation: en('WHO — guidance on physical activity for children under 5.'),
    },
    {
      id: 'safe-activities',
      title: en('2. Choosing Safe Activities'),
      keyPoints: [
        kp('Match the activity to the child\'s age and ability.'),
        kp('Always supervise climbing, running, and ball games.'),
        kp('Check the play area for hazards before starting.'),
      ],
      doDont: [{ do: en('Stay close and watch during climbing or balance play.'), dont: en('Never leave a young child unsupervised on play equipment.') }],
    },
    {
      id: 'encouraging-play',
      title: en('3. Encouraging Active Play'),
      keyPoints: [
        kp('Join in — children move more when an adult plays with them.'),
        kp('Praise trying, even if a child falls or struggles at first.'),
        kp('Offer a mix: running, balancing, throwing, and climbing.'),
      ],
      video: { youtubeId: '', title: en('Safe active play for young children'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('Name two benefits of active play besides physical strength.') },
    { id: 'sc2', question: en('What should you check before a child starts climbing?') },
    { id: 'sc3', question: en('How can you encourage a child to be more active?') },
    { id: 'sc4', question: en('Why should the activity match the child\'s age and ability?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Better sleep and better focus/concentration.') },
    { id: 'sc2', answer: en('Check the play area and equipment for hazards, and stay close to supervise.') },
    { id: 'sc3', answer: en('Join in and play with them, and praise their effort.') },
    { id: 'sc4', answer: en('An activity that is too hard or too easy can be unsafe or unhelpful.') },
  ],

  jobSheet: {
    title: en("Assist a Child's Physical Development (Job Sheet No. 8)"),
    description: en(
      'Plan and lead a short active play session: choose an age-appropriate activity, check the area for safety, join in, and praise the child\'s effort throughout.'
    ),
    materials: [en('An open, safe play space'), en('A ball or simple play equipment')],
  },

  specification: [
    { step: 1, instruction: en('Check the play area for hazards.') },
    { step: 2, instruction: en('Choose an activity that fits the child\'s age and ability.') },
    { step: 3, instruction: en('Explain the activity simply and demonstrate it.') },
    { step: 4, instruction: en('Join in and supervise closely.') },
    { step: 5, instruction: en('Praise effort and trying, not just success.') },
  ],

  quickReview: [
    kp('Active play builds strong bodies and better focus.'),
    kp('Always check the area and supervise closely.'),
    kp('Match activities to age and ability.'),
    kp('Join in — children move more with you.'),
  ],

  realLifeExample: {
    title: en('A shy child at playtime'),
    scenario: en(
      'A child stands alone while others run around. You check the area is safe, then join the child in a simple ball-rolling game. Soon they are laughing and running to fetch the ball themselves.'
    ),
  },

  assessment: {
    id: 'm08-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'tap-spot',
        prompt: en('Tap the pose that shows balancing.'),
        diagramKey: 'physical-activity',
        targets: [
          { id: 'reach', x: 19, y: 45, radius: 14, label: en('Reach') },
          { id: 'balance', x: 50, y: 45, radius: 14, label: en('Balance') },
          { id: 'jump', x: 81, y: 40, radius: 14, label: en('Jump') },
        ],
        correctTargetId: 'balance',
        explanation: en('Balance activities help children develop coordination and body control.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: young children should be left alone on climbing equipment.'),
        imageKey: 'climbing',
        statement: en('It is fine to leave a young child unsupervised on climbing equipment.'),
        correctAnswer: false,
        explanation: en('Always supervise climbing and balance activities closely.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('How can you encourage more active play?'),
        options: [
          { id: 'a', label: en('Join in and play with them'), imageKey: 'outdoor-play' },
          { id: 'b', label: en('Tell them to sit still'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('Children are more active when an adult joins in.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the steps for a safe active play session in order.'),
        steps: [
          { id: '1', label: en('Check the play area for hazards') },
          { id: '2', label: en('Choose an age-appropriate activity') },
          { id: '3', label: en('Demonstrate and join in') },
          { id: '4', label: en('Praise the child\'s effort') },
        ],
        explanation: en('Safety checks come first, then guidance and encouragement.'),
      },
    ],
  },
};
