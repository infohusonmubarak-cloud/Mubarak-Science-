// MSMK Module 3 — Basic First Aid & CPR. The reference module: built in
// full CBLM depth to prove the pattern before the other 10 modules are
// written. Medical content follows the standard adult first-aid/CPR
// sequence shared by WHO Basic Emergency Care and IFRC/Red Cross
// International First Aid Guidelines (check scene safety → check
// responsiveness → call for help → check breathing → CPR at 30:2,
// 100-120/min → recovery position; choking response is back blows then
// abdominal thrusts) — cited per section below. This is training support,
// not a substitute for certified in-person training; see the disclaimer
// rendered on every module page. MUST be reviewed by a qualified doctor
// (MBBS) before this course is used to teach from — see README.
//
// `rhg` fields use ROHINGYA_PENDING (see content/msmk/modules.ts) rather
// than fabricated translations — same reasoning as there.

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M03: Module = {
  id: 'm03',
  code: 'MSMK-03',
  order: 3,
  title: en('Basic First Aid & CPR'),
  shortDescription: en('Help someone hurt or not breathing, right away.'),
  icon: '🩹',
  accentKey: 'firstaid',
  status: 'available',

  guidelineSource: en(
    'Based on WHO Basic Emergency Care (2018) and IFRC International First Aid, Resuscitation and Education Guidelines (2020). This is training support and does not replace certified in-person first aid / CPR training.'
  ),

  learningExperience: [
    { icon: '👀', label: en('Watch what to do, step by step') },
    { icon: '🖐️', label: en('See exactly where to place your hands') },
    { icon: '🎥', label: en('Watch short demonstration videos') },
    { icon: '✅', label: en('Practice on the quiz until it feels sure') },
  ],

  informationSheet: [
    {
      id: 'scene-safety',
      title: en('1. Check the Scene First'),
      keyPoints: [
        kp('Look around before you go to help. Is it safe?'),
        kp('Never enter fire, traffic, deep water, or a collapsing building.'),
        kp('If it is not safe, call for help instead of going in.'),
      ],
      doDont: [{ do: en('Check for danger first, every time.'), dont: en('Never rush in without looking around.') }],
      guidelineCitation: en('WHO Basic Emergency Care — Step 1: Scene safety.'),
    },
    {
      id: 'check-response',
      title: en('2. Check the Person & Call for Help'),
      keyPoints: [
        kp('Tap their shoulders and speak loudly: "Are you OK?"'),
        kp('If they do not answer, shout for someone to call for emergency help.'),
        kp('Send someone to bring an ambulance or take the person to a clinic fast.'),
      ],
      guidelineCitation: en('IFRC First Aid Guidelines — Check response, shout for help.'),
    },
    {
      id: 'check-breathing',
      title: en('3. Check Breathing'),
      diagramKey: 'recovery-position',
      keyPoints: [
        kp('Tilt the head back gently and look, listen, and feel for breathing — up to 10 seconds.'),
        kp('Breathing normally? Put them in the recovery position (picture above) and watch them closely.'),
        kp('Not breathing, or only gasping? Start CPR right away — go to the next section.'),
      ],
      guidelineCitation: en('WHO Basic Emergency Care — Airway, breathing check, recovery position.'),
    },
    {
      id: 'cpr-compressions',
      title: en('4. CPR — Chest Compressions'),
      diagramKey: 'cpr-hands',
      keyPoints: [
        kp('Push hard and fast in the center of the chest, between the nipples.'),
        kp('Push down about 5 cm (2 inches) for an adult.'),
        kp('Push at 100–120 times per minute — about 2 pushes every second.'),
        kp('Give 30 pushes, then 2 rescue breaths if trained. If not trained, keep pushing — hands-only CPR still saves lives.'),
      ],
      video: { youtubeId: '', title: en('How to do CPR — hands-only demonstration'), source: en('World Health Organization (WHO)') },
      guidelineCitation: en('IFRC Guidelines 2020 — 30:2 ratio, rate 100-120/min, depth ~5cm adult.'),
    },
    {
      id: 'choking',
      title: en('5. Choking'),
      keyPoints: [
        kp('Person cannot cough, speak, or breathe, and is clutching their throat? They are choking.'),
        kp('Lean them forward. Give up to 5 firm back blows between the shoulder blades.'),
        kp('Still choking? Give up to 5 abdominal thrusts — fist above the navel, pull in and up.'),
        kp('Keep alternating 5 back blows and 5 thrusts until the object comes out or they stop responding.'),
      ],
      doDont: [{ do: en('Alternate back blows and abdominal thrusts.'), dont: en('Do not thrust on a pregnant woman’s belly — use chest thrusts instead.') }],
      guidelineCitation: en('IFRC First Aid Guidelines — Choking response, adult.'),
    },
    {
      id: 'bleeding',
      title: en('6. Bleeding'),
      keyPoints: [
        kp('Press down firmly on the wound with a clean cloth.'),
        kp('Keep pressing without lifting the cloth to check.'),
        kp('If you can, raise the injured part above the level of the heart.'),
        kp('Heavy bleeding that does not stop? Get emergency help immediately.'),
      ],
      guidelineCitation: en('WHO Basic Emergency Care — Bleeding control, direct pressure.'),
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What is the first thing you should do before helping someone who is hurt?') },
    { id: 'sc2', question: en('Where do you place your hands for chest compressions?') },
    { id: 'sc3', question: en('What do you do first if someone is choking — back blows or abdominal thrusts?') },
    { id: 'sc4', question: en('If someone is breathing but unconscious, what position should you put them in?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Check that the scene is safe before you approach.') },
    { id: 'sc2', answer: en('The center of the chest, on the lower half of the breastbone.') },
    { id: 'sc3', answer: en('Back blows first (up to 5), then abdominal thrusts if that does not work.') },
    { id: 'sc4', answer: en('The recovery position, on their side with the head tilted back.') },
  ],

  jobSheet: {
    title: en('Respond to an Unconscious, Breathing Person'),
    description: en(
      'Practice the full sequence on a partner or a training mannequin: check the scene, check response, check breathing, and place them in the recovery position — talking through each step out loud.'
    ),
    materials: [en('A partner or training mannequin'), en('A clear, open space on the floor')],
  },

  specification: [
    { step: 1, instruction: en('Check the scene is safe before approaching.') },
    { step: 2, instruction: en('Tap their shoulders and shout to check for a response.') },
    { step: 3, instruction: en('Shout for someone to call for emergency help.') },
    { step: 4, instruction: en('Tilt the head back and check for breathing for up to 10 seconds.') },
    {
      step: 5,
      instruction: en('Breathing normally — place them in the recovery position.'),
      note: en('Not breathing normally? Start CPR instead — 30 chest compressions, then 2 breaths if trained.'),
    },
    { step: 6, instruction: en('Stay with them and keep checking their breathing until help arrives.') },
  ],

  quickReview: [
    kp('Check the scene is safe first — always.'),
    kp('Not breathing? Push hard and fast, center of the chest, 100–120 times a minute.'),
    kp('Breathing but unconscious? Recovery position.'),
    kp('Choking? 5 back blows, then 5 abdominal thrusts. Repeat.'),
    kp('Heavy bleeding? Press down firmly and do not let go.'),
  ],

  realLifeExample: {
    title: en('A neighbor collapses at home'),
    scenario: en(
      'Your neighbor suddenly collapses and is not moving. You check the area is safe, tap their shoulders and shout — no response. You shout for someone to get help, then check their breathing. They are not breathing normally, so you start chest compressions right away, pushing hard and fast in the center of their chest until help arrives.'
    ),
  },

  assessment: {
    id: 'm03-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'true-false-picture',
        prompt: en('True or false: you should always check the scene is safe before helping.'),
        imageKey: 'unsafe-scene',
        statement: en('Check the scene is safe before you approach.'),
        correctAnswer: true,
        explanation: en('Always check for danger first — you cannot help anyone if you get hurt too.'),
      },
      {
        id: 'q2',
        type: 'image-choice',
        prompt: en('Someone is not breathing. What do you do first?'),
        options: [
          { id: 'a', label: en('Start chest compressions'), imageKey: 'chest-compressions' },
          { id: 'b', label: en('Give them water'), imageKey: 'wash-hands' },
          { id: 'c', label: en('Wait and watch'), imageKey: 'unconscious-person' },
        ],
        correctOptionId: 'a',
        explanation: en('If a person is not breathing normally, start chest compressions right away — every second matters.'),
      },
      {
        id: 'q3',
        type: 'tap-spot',
        prompt: en('Tap where you should place your hands for chest compressions.'),
        diagramKey: 'cpr-hands',
        targets: [
          { id: 'center', x: 50, y: 52, radius: 16, label: en('Center of chest') },
          { id: 'left-side', x: 20, y: 52, radius: 14, label: en('Left side of chest') },
          { id: 'stomach', x: 50, y: 85, radius: 14, label: en('Stomach') },
        ],
        correctTargetId: 'center',
        explanation: en('Hands go in the center of the chest, on the lower half of the breastbone — not to the side, and not on the stomach.'),
      },
      {
        id: 'q4',
        type: 'true-false-picture',
        prompt: en('True or false: you should push about 5cm deep for an adult.'),
        imageKey: 'chest-compressions',
        statement: en('Push down about 5 cm (2 inches) for an adult during CPR.'),
        correctAnswer: true,
        explanation: en('Compressions need to be deep enough to actually pump blood — about 5cm for an adult.'),
      },
      {
        id: 'q5',
        type: 'image-choice',
        prompt: en('What is the correct compression rate?'),
        options: [
          { id: 'a', label: en('40–60 per minute'), imageKey: 'chest-compressions' },
          { id: 'b', label: en('100–120 per minute'), imageKey: 'chest-compressions' },
          { id: 'c', label: en('200+ per minute'), imageKey: 'chest-compressions' },
        ],
        correctOptionId: 'b',
        explanation: en('100–120 compressions per minute — about 2 pushes every second.'),
      },
      {
        id: 'q6',
        type: 'drag-order',
        prompt: en('Put the choking response steps in the correct order.'),
        steps: [
          { id: '1', label: en('Recognize choking — clutching throat, cannot speak') },
          { id: '2', label: en('Lean them forward') },
          { id: '3', label: en('Give up to 5 back blows') },
          { id: '4', label: en('Give up to 5 abdominal thrusts if still choking') },
        ],
        explanation: en('Back blows come before abdominal thrusts — alternate between the two until the blockage clears.'),
      },
      {
        id: 'q7',
        type: 'image-choice',
        prompt: en('Someone is breathing but unconscious. What do you do?'),
        options: [
          { id: 'a', label: en('Recovery position'), imageKey: 'recovery-position' },
          { id: 'b', label: en('Chest compressions'), imageKey: 'chest-compressions' },
          { id: 'c', label: en('Leave them alone'), imageKey: 'unconscious-person' },
        ],
        correctOptionId: 'a',
        explanation: en('If they are breathing normally, the recovery position keeps their airway clear while you wait for help.'),
      },
      {
        id: 'q8',
        type: 'true-false-picture',
        prompt: en('True or false: for heavy bleeding, you should lift the cloth often to check the wound.'),
        imageKey: 'wound-pressure',
        statement: en('Lift the cloth often to check the wound while treating heavy bleeding.'),
        correctAnswer: false,
        explanation: en('Keep steady pressure on — lifting the cloth breaks the clot that is starting to form and bleeding gets worse.'),
      },
    ],
  },
};
