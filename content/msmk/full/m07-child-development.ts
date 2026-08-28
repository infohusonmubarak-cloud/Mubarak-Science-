// MSMK Module 7 — Foster the Social, Intellectual, Creative and Emotional
// Development of Children. TESDA Caregiving NC II CBLM: Learning
// Experience 7 / Information Sheet 7, Self-Check + Answer Sheet No 7,
// Job Sheet No 7 / Specification Sheet No 7 (practice fostering
// children's self-esteem).

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M07: Module = {
  id: 'm07',
  code: 'MSMK-07',
  order: 7,
  title: en("Children's Development"),
  shortDescription: en("Support a child's mind, feelings, and creativity."),
  icon: '🎨',
  accentKey: 'childdev',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Social, Intellectual, Creative and Emotional Development unit.'
  ),

  learningExperience: [
    { icon: '⭐', label: en("Build a child's confidence") },
    { icon: '📖', label: en('Tell stories and talk together') },
    { icon: '🎨', label: en('Encourage creative play') },
    { icon: '🧑‍🤝‍🧑', label: en('Support playing and sharing with others') },
  ],

  informationSheet: [
    {
      id: 'self-esteem',
      title: en("1. Building a Child's Self-Esteem"),
      keyPoints: [
        kp('Praise effort, not just results — "You worked hard on that!"'),
        kp('Let a child try things themselves before helping.'),
        kp('Never compare one child to another.'),
      ],
      doDont: [{ do: en('Praise specific effort: "I like how you shared your toy."'), dont: en('Never mock, shame, or compare a child to others.') }],
      guidelineCitation: en('TESDA Caregiving NC II — Fostering Children\'s Development, Learning Outcome 1.'),
    },
    {
      id: 'creative-play',
      title: en('2. Creative and Intellectual Play'),
      keyPoints: [
        kp('Offer simple materials — paper, crayons, blocks — and let the child explore.'),
        kp('Ask open questions: "What do you think happens next?"'),
        kp('There is no wrong way to draw or build — focus on the trying, not the result.'),
      ],
    },
    {
      id: 'social-emotional',
      title: en('3. Social and Emotional Support'),
      keyPoints: [
        kp('Name feelings for young children: "I see you are frustrated."'),
        kp('Encourage sharing and taking turns during play with others.'),
        kp('Stay calm and patient when a child is upset — it helps them calm down too.'),
      ],
      video: { youtubeId: '', title: en('Encouraging a child through play'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What should you praise — the result, or the effort?') },
    { id: 'sc2', question: en('Why should you never compare one child to another?') },
    { id: 'sc3', question: en('What kind of question helps a child think creatively?') },
    { id: 'sc4', question: en('How can naming a feeling help a young child?') },
  ],
  answers: [
    { id: 'sc1', answer: en('The effort — this builds confidence and a willingness to keep trying.') },
    { id: 'sc2', answer: en('It can damage self-esteem and create resentment between children.') },
    { id: 'sc3', answer: en('An open question, like "What do you think happens next?"') },
    { id: 'sc4', answer: en('It helps them understand and manage their own emotions.') },
  ],

  jobSheet: {
    title: en("Practice Fostering a Child's Self-Esteem (Job Sheet No. 7)"),
    description: en(
      'Role-play a short activity with a child (or partner acting as one): give them a simple task, let them try it themselves, and practice praising their effort specifically and warmly.'
    ),
    materials: [en('A partner to role-play the child'), en('Simple materials — paper and crayons, or blocks')],
  },

  specification: [
    { step: 1, instruction: en('Offer a simple task or activity.') },
    { step: 2, instruction: en('Let the child try it themselves before stepping in.') },
    { step: 3, instruction: en('Watch for a moment of effort or success.') },
    { step: 4, instruction: en('Praise the specific effort you saw — not just "good job".') },
    { step: 5, instruction: en('Ask an open question about what they made or did.') },
  ],

  quickReview: [
    kp('Praise effort, not just results.'),
    kp('Let children try before you help.'),
    kp('Never compare or shame a child.'),
    kp('Name feelings to help children understand them.'),
  ],

  realLifeExample: {
    title: en('A child struggling to stack blocks'),
    scenario: en(
      'A child keeps knocking down their block tower and starts to get upset. Instead of taking over, you say "You are working really hard on that tower — want to try building the bottom wider this time?" The child tries again, proud when it finally stands.'
    ),
  },

  assessment: {
    id: 'm07-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'image-choice',
        prompt: en('What should you praise?'),
        options: [
          { id: 'a', label: en('Specific effort'), imageKey: 'praise-child' },
          { id: 'b', label: en('Nothing, stay quiet'), imageKey: 'confused-face' },
        ],
        correctOptionId: 'a',
        explanation: en('Specific praise for effort builds real confidence.'),
      },
      {
        id: 'q2',
        type: 'true-false-picture',
        prompt: en('True or false: it is fine to compare one child to another to motivate them.'),
        imageKey: 'harsh-criticism',
        statement: en('Comparing children to each other is a good way to motivate them.'),
        correctAnswer: false,
        explanation: en('Comparisons damage self-esteem — praise each child\'s own effort instead.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('A child is upset. What helps most?'),
        options: [
          { id: 'a', label: en('Naming their feeling calmly'), imageKey: 'encouragement' },
          { id: 'b', label: en('Telling them to stop crying'), imageKey: 'harsh-criticism' },
        ],
        correctOptionId: 'a',
        explanation: en('Naming feelings helps children understand and manage their emotions.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the self-esteem building steps in order.'),
        steps: [
          { id: '1', label: en('Offer a simple task') },
          { id: '2', label: en('Let the child try it themselves') },
          { id: '3', label: en('Watch for effort or success') },
          { id: '4', label: en('Praise the specific effort') },
        ],
        explanation: en('Giving the child space to try, then praising the real effort, builds genuine confidence.'),
      },
      {
        id: 'q5',
        type: 'true-false-picture',
        prompt: en('True or false: creative play has a "wrong way" to do it.'),
        imageKey: 'creative-art',
        statement: en('There is a wrong way to draw or build during creative play.'),
        correctAnswer: false,
        explanation: en('Creative play is about exploring and trying — there is no wrong way.'),
      },
    ],
  },
};
