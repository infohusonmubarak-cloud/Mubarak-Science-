// Content schema for Mubarak Science Medical Knowledge (MSMK) — a separate
// paid Nursing/Self-Care/Family-Care course for Rohingya refugee learners.
// Deliberately its own schema, not an extension of `types/content.ts`: the
// Science courses are text-first with an optional diagram, MSMK is
// visual-first (85% diagrams/animation/video, 15% text) with a fixed CBLM
// (Competency-Based Learning Material) structure and a bilingual
// requirement neither the Science schema nor its components were built
// for.

/** Every learner-facing string ships in both languages — never just one. */
export interface Bilingual {
  en: string;
  /** Hanifi Rohingya script (𐴀𐴞𐴕𐴠𐴑 𐴃𐴡𐴓𐴡𐴌), right-to-left. */
  rhg: string;
}

export type ModuleId =
  | 'm01' | 'm02' | 'm03' | 'm04' | 'm05' | 'm06' | 'm07' | 'm08' | 'm09' | 'm10' | 'm11';

export type ModuleStatus = 'available' | 'coming-soon';

export interface ModuleSummary {
  id: ModuleId;
  /** e.g. 'MSMK-03' */
  code: string;
  order: number;
  title: Bilingual;
  shortDescription: Bilingual;
  /** A single emoji used as the module's icon everywhere (cards, nav, dashboard). */
  icon: string;
  /** Registered in globals.css as --msmk-<accentKey> / --msmk-<accentKey>-soft. */
  accentKey: string;
  status: ModuleStatus;
}

export interface LearningExperienceItem {
  icon: string;
  label: Bilingual;
}

export interface KeyPoint {
  text: Bilingual;
}

export interface VideoRef {
  youtubeId: string;
  title: Bilingual;
  /** Publisher shown to the learner, e.g. "World Health Organization (WHO)". */
  source: Bilingual;
}

export interface DoDontPair {
  do: Bilingual;
  dont: Bilingual;
}

export interface InformationSection {
  id: string;
  title: Bilingual;
  keyPoints: KeyPoint[];
  /** Resolved against a per-module diagram component registry, not a generic renderer — see components/msmk/diagrams. */
  diagramKey?: string;
  video?: VideoRef;
  doDont?: DoDontPair[];
  guidelineCitation?: Bilingual;
}

export interface SpecificationStep {
  step: number;
  instruction: Bilingual;
  note?: Bilingual;
}

export interface SelfCheckItem {
  id: string;
  question: Bilingual;
}

export interface AnswerItem {
  /** Matches a SelfCheckItem id. */
  id: string;
  answer: Bilingual;
}

export interface JobSheetTask {
  title: Bilingual;
  description: Bilingual;
  materials?: Bilingual[];
}

// Assessment — visual-first, freeCodeCamp-style. No plain-text-only question
// type exists on purpose; every question shows something, not just asks.
export type MSMKQuestionType = 'image-choice' | 'drag-order' | 'tap-spot' | 'true-false-picture';

interface MSMKQuestionBase {
  id: string;
  type: MSMKQuestionType;
  prompt: Bilingual;
  /** Shown after answering, right or wrong. */
  explanation: Bilingual;
}

export interface ImageChoiceOption {
  id: string;
  label: Bilingual;
  /** Resolved against the module's diagram/icon registry. */
  imageKey: string;
}

export interface ImageChoiceQuestion extends MSMKQuestionBase {
  type: 'image-choice';
  options: ImageChoiceOption[];
  correctOptionId: string;
}

export interface DragOrderQuestion extends MSMKQuestionBase {
  type: 'drag-order';
  /** Correct order is this array's order; the UI shuffles for display. */
  steps: { id: string; label: Bilingual }[];
}

export interface TapSpotTarget {
  id: string;
  /** Percent-based position (0-100) so the hit area scales with the diagram. */
  x: number;
  y: number;
  radius: number;
  label: Bilingual;
}

export interface TapSpotQuestion extends MSMKQuestionBase {
  type: 'tap-spot';
  diagramKey: string;
  targets: TapSpotTarget[];
  correctTargetId: string;
}

export interface TrueFalsePictureQuestion extends MSMKQuestionBase {
  type: 'true-false-picture';
  imageKey: string;
  statement: Bilingual;
  correctAnswer: boolean;
}

export type MSMKQuestion = ImageChoiceQuestion | DragOrderQuestion | TapSpotQuestion | TrueFalsePictureQuestion;

export interface MSMKAssessment {
  id: string;
  passPercent: number;
  questions: MSMKQuestion[];
}

export interface Module extends ModuleSummary {
  learningExperience: LearningExperienceItem[];
  informationSheet: InformationSection[];
  selfCheck: SelfCheckItem[];
  answers: AnswerItem[];
  jobSheet: JobSheetTask;
  specification: SpecificationStep[];
  assessment: MSMKAssessment;
  quickReview: KeyPoint[];
  realLifeExample?: { title: Bilingual; scenario: Bilingual };
  /** e.g. "WHO Basic Emergency Care (2018); IFRC International First Aid Guidelines (2020)". Shown on the module page, not just in code. */
  guidelineSource: Bilingual;
}

// Registration / access — mirrors the Supabase tables in supabase-schema-msmk.sql.

export interface RegistrationInput {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bkashTransactionId: string;
}

export interface LearnerSession {
  accessCode: string;
  email: string;
  fullName: string;
}
