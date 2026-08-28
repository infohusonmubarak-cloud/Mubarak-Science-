// MSMK module registry — summary-level data for all 11 modules (card
// grids, nav, dashboard). Full CBLM content only exists for the modules
// listed in content/msmk/full/ (Module 3 first, as the reference module —
// see lib/msmk/getters.ts).
//
// IMPORTANT — `rhg` fields below are honest placeholders, not real
// translations. Composing new Hanifi Rohingya (a rare right-to-left
// script, Unicode block U+10D00-U+10D3F) is outside what I can reliably
// verify as correct — wrong output here isn't a typo, it can look
// authoritative while being linguistically wrong, which is a real risk in
// a life-safety course for a low-literacy audience. Every `rhg` value is
// therefore left as `ROHINGYA_PENDING` until a native speaker fills it in
// (see lib/msmk/translationStatus.ts) — swap the string in place, nothing
// else needs to change.

import type { ModuleSummary } from '@/types/msmk';

export const ROHINGYA_PENDING = '(𐴀𐴞𐴕𐴠𐴑 𐴃𐴡𐴓𐴡𐴌 — translation pending native-speaker review)';

export const MODULE_SUMMARIES: ModuleSummary[] = [
  {
    id: 'm01',
    code: 'MSMK-01',
    order: 1,
    title: { en: 'Workplace Communication', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Understand instructions and speak up clearly at work.', rhg: ROHINGYA_PENDING },
    icon: '📋',
    accentKey: 'communication',
    status: 'available',
  },
  {
    id: 'm02',
    code: 'MSMK-02',
    order: 2,
    title: { en: 'Basic Housekeeping', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Keep a home or workplace clean and safe.', rhg: ROHINGYA_PENDING },
    icon: '🧹',
    accentKey: 'housekeeping',
    status: 'available',
  },
  {
    id: 'm03',
    code: 'MSMK-03',
    order: 3,
    title: { en: 'Basic First Aid & CPR', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Help someone hurt or not breathing, right away.', rhg: ROHINGYA_PENDING },
    icon: '🩹',
    accentKey: 'firstaid',
    status: 'available',
  },
  {
    id: 'm04',
    code: 'MSMK-04',
    order: 4,
    title: { en: 'Patient Services', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Care for patients with kindness and respect.', rhg: ROHINGYA_PENDING },
    icon: '🏥',
    accentKey: 'patientcare',
    status: 'available',
  },
  {
    id: 'm05',
    code: 'MSMK-05',
    order: 5,
    title: { en: 'Infant & Toddler Care', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Feed, bathe, and keep babies safe — including formula milk.', rhg: ROHINGYA_PENDING },
    icon: '🍼',
    accentKey: 'infanttoddler',
    status: 'available',
  },
  {
    id: 'm06',
    code: 'MSMK-06',
    order: 6,
    title: { en: 'Child Care', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Daily care and hygiene for children.', rhg: ROHINGYA_PENDING },
    icon: '🧒',
    accentKey: 'childcare',
    status: 'available',
  },
  {
    id: 'm07',
    code: 'MSMK-07',
    order: 7,
    title: { en: "Children's Development", rhg: ROHINGYA_PENDING },
    shortDescription: { en: "Support a child's mind, feelings, and creativity.", rhg: ROHINGYA_PENDING },
    icon: '🎨',
    accentKey: 'childdev',
    status: 'coming-soon',
  },
  {
    id: 'm08',
    code: 'MSMK-08',
    order: 8,
    title: { en: "Children's Physical Growth", rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Help children grow strong through movement and play.', rhg: ROHINGYA_PENDING },
    icon: '🏃',
    accentKey: 'childphysical',
    status: 'coming-soon',
  },
  {
    id: 'm09',
    code: 'MSMK-09',
    order: 9,
    title: { en: 'Elderly Care', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Support older people with daily tasks and dignity.', rhg: ROHINGYA_PENDING },
    icon: '👵',
    accentKey: 'elderly',
    status: 'coming-soon',
  },
  {
    id: 'm10',
    code: 'MSMK-10',
    order: 10,
    title: { en: 'Special Needs Care', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Support people with disabilities with patience and care.', rhg: ROHINGYA_PENDING },
    icon: '♿',
    accentKey: 'specialneeds',
    status: 'coming-soon',
  },
  {
    id: 'm11',
    code: 'MSMK-11',
    order: 11,
    title: { en: 'Respond to Emergency', rhg: ROHINGYA_PENDING },
    shortDescription: { en: 'Act fast and safely when an emergency happens.', rhg: ROHINGYA_PENDING },
    icon: '🚨',
    accentKey: 'emergency',
    status: 'coming-soon',
  },
];
