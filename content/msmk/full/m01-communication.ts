// MSMK Module 1 — Receive and Respond to Workplace Communication.
// Structure follows the TESDA Caregiving NC II Competency-Based Learning
// Material (CBLM) table of contents supplied for this course: Learning
// Experience 1 / Information Sheet 1, Self-Check + Answer Sheet No 1,
// Job Sheet No 1 / Specification Sheet No 1 (practice following routine
// verbal and written notes/messages).
//
// `rhg` fields use ROHINGYA_PENDING — see content/msmk/modules.ts and
// lib/msmk/translationStatus.ts for why real translations aren't
// fabricated here.

import { ROHINGYA_PENDING } from '../modules';
import type { Module } from '@/types/msmk';

const en = (text: string) => ({ en: text, rhg: ROHINGYA_PENDING });
const kp = (text: string) => ({ text: en(text) });

export const MODULE_M01: Module = {
  id: 'm01',
  code: 'MSMK-01',
  order: 1,
  title: en('Workplace Communication'),
  shortDescription: en('Understand instructions and speak up clearly at work.'),
  icon: '📋',
  accentKey: 'communication',
  status: 'available',

  guidelineSource: en(
    'Based on the TESDA Caregiving NC II Competency-Based Learning Material, Workplace Communication unit. General workplace best practice, not medical guidance.'
  ),

  learningExperience: [
    { icon: '👂', label: en('Listen for the important details') },
    { icon: '📝', label: en('Read and write simple notes') },
    { icon: '🔁', label: en('Repeat back what you heard, to check') },
    { icon: '📞', label: en('Answer the phone or radio the right way') },
  ],

  informationSheet: [
    {
      id: 'why-communication',
      title: en('1. Why Clear Communication Matters'),
      keyPoints: [
        kp('A mistake in a message can hurt a patient or family you care for.'),
        kp('Always ask if you are not sure what someone means.'),
        kp('Write down important instructions so you do not forget.'),
      ],
      guidelineCitation: en('TESDA Caregiving NC II — Workplace Communication, Learning Outcome 1.'),
    },
    {
      id: 'giving-receiving',
      title: en('2. Giving and Receiving Messages'),
      keyPoints: [
        kp('Look at the person. Listen without interrupting.'),
        kp('Say the message back in your own words to check you understood.'),
        kp('Write down: who, what, when, and any phone number.'),
      ],
      doDont: [
        { do: en('Repeat the message back before you hang up or walk away.'), dont: en('Guess when you did not hear clearly — ask again.') },
      ],
    },
    {
      id: 'written-notes',
      title: en('3. Written Notes and Reports'),
      keyPoints: [
        kp('Use short, simple sentences.'),
        kp('Write the date and time on every note.'),
        kp('Give the note to the right person, or leave it where they will see it.'),
      ],
      video: { youtubeId: '', title: en('Writing a simple handover note'), source: en('Training demonstration') },
    },
  ],

  selfCheck: [
    { id: 'sc1', question: en('What should you do if you do not understand an instruction?') },
    { id: 'sc2', question: en('What four things should a phone message always include?') },
    { id: 'sc3', question: en('Why should you repeat a message back to the person who gave it?') },
    { id: 'sc4', question: en('What should every written note have on it?') },
  ],
  answers: [
    { id: 'sc1', answer: en('Ask the person to explain again, or ask a supervisor.') },
    { id: 'sc2', answer: en('Who it is for, what the message is, when it happened, and a phone number if there is one.') },
    { id: 'sc3', answer: en('To make sure you understood it correctly before you act on it.') },
    { id: 'sc4', answer: en('The date and time it was written.') },
  ],

  jobSheet: {
    title: en('Practice Following Routine Verbal and Written Notes/Messages (Job Sheet No. 1)'),
    description: en(
      'With a partner, practice receiving a spoken message, repeating it back, and writing it down correctly. Then practice reading a written note aloud and explaining what it means in your own words.'
    ),
    materials: [en('A partner'), en('Paper and pen'), en('A sample written note')],
  },

  specification: [
    { step: 1, instruction: en('Your partner gives you a short spoken message (e.g. "Tell the nurse Mrs. Ali needs water at 3pm").') },
    { step: 2, instruction: en('Listen fully without interrupting.') },
    { step: 3, instruction: en('Repeat the message back in your own words.') },
    { step: 4, instruction: en('Write the message down with the date and time.') },
    { step: 5, instruction: en('Read a sample written note aloud and explain what action it asks for.') },
  ],

  quickReview: [
    kp('Listen fully before you respond.'),
    kp('Repeat the message back to check you understood.'),
    kp('Write down important messages with the date and time.'),
    kp('Ask if you are not sure — never guess.'),
  ],

  realLifeExample: {
    title: en('A rushed handover'),
    scenario: en(
      'At the end of your shift, a coworker quickly tells you that one patient should not eat before their test tomorrow. You repeat it back: "So Mr. Karim has no food after midnight, test in the morning — got it." You write it on the handover sheet with today\'s date so the morning staff sees it clearly.'
    ),
  },

  assessment: {
    id: 'm01-assessment',
    passPercent: 80,
    questions: [
      {
        id: 'q1',
        type: 'true-false-picture',
        prompt: en('True or false: you should repeat a message back to check you understood it.'),
        imageKey: 'listening',
        statement: en('Repeat a message back before acting on it.'),
        correctAnswer: true,
        explanation: en('Repeating it back catches mistakes before they cause harm.'),
      },
      {
        id: 'q2',
        type: 'image-choice',
        prompt: en('You do not understand an instruction. What should you do?'),
        options: [
          { id: 'a', label: en('Ask again'), imageKey: 'confused-face' },
          { id: 'b', label: en('Guess and continue'), imageKey: 'thumbs-up' },
          { id: 'c', label: en('Ignore it'), imageKey: 'rude-behavior' },
        ],
        correctOptionId: 'a',
        explanation: en('Always ask rather than guess — a wrong guess can hurt someone in your care.'),
      },
      {
        id: 'q3',
        type: 'drag-order',
        prompt: en('Put the steps for handling a phone message in order.'),
        steps: [
          { id: '1', label: en('Listen fully without interrupting') },
          { id: '2', label: en('Repeat the message back') },
          { id: '3', label: en('Write it down with date and time') },
          { id: '4', label: en('Give it to the right person') },
        ],
        explanation: en('Listen, confirm, record, then deliver — skipping a step risks losing the message.'),
      },
      {
        id: 'q4',
        type: 'true-false-picture',
        prompt: en('True or false: a written note does not need a date on it.'),
        imageKey: 'written-note',
        statement: en('A written note does not need a date.'),
        correctAnswer: false,
        explanation: en('Always date your notes — without a date, no one knows if the information is still current.'),
      },
      {
        id: 'q5',
        type: 'image-choice',
        prompt: en('What is the best way to receive a spoken instruction?'),
        options: [
          { id: 'a', label: en('Listen and make eye contact'), imageKey: 'listening' },
          { id: 'b', label: en('Look at your phone'), imageKey: 'confused-face' },
          { id: 'c', label: en('Walk away while they talk'), imageKey: 'rude-behavior' },
        ],
        correctOptionId: 'a',
        explanation: en('Full attention means fewer mistakes.'),
      },
      {
        id: 'q6',
        type: 'true-false-picture',
        prompt: en('True or false: it is fine to guess what a message means if you are in a hurry.'),
        imageKey: 'confused-face',
        statement: en('It is fine to guess a message\'s meaning when in a hurry.'),
        correctAnswer: false,
        explanation: en('Guessing can lead to serious mistakes — always take a moment to confirm.'),
      },
    ],
  },
};
