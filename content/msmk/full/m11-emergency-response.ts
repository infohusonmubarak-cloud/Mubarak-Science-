// MSMK Module 11 — Respond to Emergency.
// TESDA Caregiving NC II CBLM: Learning Experience 11 / Information
// Sheet 11, Self-Check + Answer Sheet No 11, Job Sheet No 11 /
// Specification Sheet No 11 (respond to emergencies and accidents).
//
// Broader than Module 3 (which is specifically first aid/CPR technique):
// this module covers recognizing and reacting to whole-scene emergencies
// — fire, flood, gas leaks, and general accidents — and reuses Module 3's
// recovery-position/choking diagrams where the same technique applies,
// rather than re-drawing them.

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M11: Module = {
  id: 'm11',
  code: 'MSMK-11',
  order: 11,
  title: en('Respond to Emergency'),
  shortDescription: en('Act fast and safely when an emergency happens.'),
  icon: '🚨',
  accentKey: 'emergency',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Respond to Emergency unit, and WHO/IFRC general emergency-preparedness guidance. This is training support and does not replace certified in-person emergency response training.'
  ),

  learningExperience: [
    { icon: '🔥', label: en('Recognize fire and evacuate safely') },
    { icon: '🌊', label: en('Respond to flooding') },
    { icon: '💨', label: en('React safely to a gas leak') },
    { icon: '🚧', label: en('Respond calmly to an accident scene') },
  ],

  informationSheet: [
    {
      id: 'general-principles',
      title: en('1. General Emergency Principles'),
      keyPoints: [
        kp('Stay calm — a calm helper makes better decisions.'),
        kp('Check the scene is safe before you act — never become a second victim.'),
        kp('Call or send for emergency help as early as possible.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Respond to Emergency, Learning Outcome 1.'),
    },
    {
      id: 'fire-response',
      title: en('2. Fire and Evacuation'),
      keyPoints: [
        kp('Alert everyone nearby immediately — shout "Fire!"'),
        kp('Get everyone out using the nearest safe exit — do not stop to gather belongings.'),
        kp('Never go back inside a burning building for any reason.'),
        kp('Know your evacuation route and where to meet outside, in advance.'),
      ],
      doDont: [{ do: en('Know your building\'s evacuation route before an emergency happens.'), dont: en('Never use a lift/elevator during a fire — use the stairs.') }],
    },
    {
      id: 'flood-gas',
      title: en('3. Flood and Gas Leak Response'),
      keyPoints: [
        kp('Flooding: move to higher ground immediately, avoid moving flood water.'),
        kp('Gas leak: do not use switches, phones, or open flames — they can trigger an explosion.'),
        kp('Gas leak: get everyone outside to fresh air immediately, then call for help from a safe distance.'),
      ],
      video: { youtubeId: '', title: en('Home emergency preparedness'), source: en('Training demonstration') },
    },
    {
      id: 'accident-scene',
      title: en('4. Responding to an Accident'),
      keyPoints: [
        kp('Check the scene is safe before approaching — see Module 3 for the full first-aid sequence.'),
        kp('Call for help, then care for the injured person using what you learned in Module 3 (First Aid & CPR).'),
        kp('Keep bystanders calm and give the injured person space.'),
      ],
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What is the very first thing to check in any emergency?') },
    { id: 'sc2', question: en('Should you use a lift/elevator during a fire?') },
    { id: 'sc3', question: en('What should you avoid using during a gas leak?') },
    { id: 'sc4', question: en('Where should you move to during a flood?') },
  ],
  answers: [
    { id: 'sc1', answer: en('That the scene is safe for you before you act.') },
    { id: 'sc2', answer: en('No — always use the stairs during a fire.') },
    { id: 'sc3', answer: en('Switches, phones, and open flames — they can trigger an explosion.') },
    { id: 'sc4', answer: en('Higher ground, immediately.') },
  ],

  jobSheet: {
    title: en('Respond to Emergencies and Accidents (Job Sheet No. 11)'),
    description: en(
      'Practice a fire evacuation drill: on the signal, calmly alert others, move to the nearest exit without stopping for belongings, and gather at the meeting point outside.'
    ),
    materials: [en('A group or partner'), en('A clear evacuation route')],
  },

  specification: [
    { step: 1, instruction: en('Recognize the emergency and stay calm.') },
    { step: 2, instruction: en('Alert others nearby immediately.') },
    { step: 3, instruction: en('Move to the nearest safe exit — never use a lift during a fire.') },
    { step: 4, instruction: en('Do not stop for belongings.') },
    { step: 5, instruction: en('Gather at the meeting point outside.') },
    { step: 6, instruction: en('Call or send for emergency help.') },
  ],

  quickReview: [
    kp('Stay calm — check the scene is safe before acting.'),
    kp('Fire: alert others, use the stairs, never go back inside.'),
    kp('Gas leak: no switches or flames, get outside, call from a safe distance.'),
    kp('Flood: move to higher ground immediately.'),
    kp('For an injured person, use the Module 3 first-aid sequence.'),
  ],

  realLifeExample: {
    title: en('Smelling gas in the kitchen'),
    scenario: en(
      'You smell gas in the kitchen. You do not turn on any lights or use your phone inside. You calmly get everyone outside to fresh air, and only once you are a safe distance away do you call for help.'
    ),
  },

  assessment: {
    id: 'm11-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'true-false-picture',
        prompt: en('True or false: you should use the lift/elevator during a fire.'),
        imageKey: 'fire-hazard',
        statement: en('Use the lift/elevator during a fire.'),
        correctAnswer: false,
        explanation: en('Always use the stairs during a fire — lifts can trap you or stop working.'),
      },
      {
        id: 'q2',
        type: 'image-choice',
        prompt: en('You smell gas. What should you avoid using?'),
        options: [
          { id: 'a', label: en('Switches and phones'), imageKey: 'gas-leak' },
          { id: 'b', label: en('The front door'), imageKey: 'evacuation-route' },
        ],
        correctOptionId: 'a',
        explanation: en('Switches, phones, and flames can trigger an explosion — avoid them and get outside.'),
      },
      {
        id: 'q3',
        type: 'image-choice',
        prompt: en('Where should you move during a flood?'),
        options: [
          { id: 'a', label: en('Higher ground'), imageKey: 'flood-water' },
          { id: 'b', label: en('Into the flood water'), imageKey: 'accident-scene' },
        ],
        correctOptionId: 'a',
        explanation: en('Move to higher ground immediately and avoid moving flood water.'),
      },
      {
        id: 'q4',
        type: 'drag-order',
        prompt: en('Put the fire evacuation steps in order.'),
        steps: [
          { id: '1', label: en('Alert others nearby') },
          { id: '2', label: en('Move to the nearest exit') },
          { id: '3', label: en('Do not stop for belongings') },
          { id: '4', label: en('Gather at the meeting point outside') },
        ],
        explanation: en('Speed and calm matter more than belongings in a fire.'),
      },
      {
        id: 'q5',
        type: 'true-false-picture',
        prompt: en('True or false: you should check the scene is safe before helping in any emergency.'),
        imageKey: 'safe-scene',
        statement: en('Always check the scene is safe before helping.'),
        correctAnswer: true,
        explanation: en('This is the first rule of every emergency — never become a second victim.'),
      },
    ],
  },
};
