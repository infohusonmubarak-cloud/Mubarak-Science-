// Content schema for Mubarek Science.
//
// Deliberate split: `ConceptSummary` (title/slug/difficulty only) is the
// always-present navigation outline used by `Topic`. `Concept` extends it
// with the full pedagogical body (explanation, diagram, formula, worked
// example, practice, review). This lets every chapter render a real page
// with a real outline even when only some concepts have full bodies
// written yet — the chapter/topic layer never has to model "content
// missing" as optional fields sprinkled through the full type.

export type SubjectSlug = 'mathematics' | 'physics' | 'chemistry' | 'biology';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type ContentStatus = 'available' | 'coming-soon';

export interface Subject {
  slug: SubjectSlug;
  name: string;
  shortDescription: string;
  iconKey: string;
  status: ContentStatus;
  levels: Level[];
}

export interface Level {
  slug: string;
  name: string;
  description: string;
  status: ContentStatus;
  chapters: Chapter[];
}

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  blurb: string;
  status: ContentStatus;
  topics: Topic[];
  quickRevision?: QuickRevision;
  assessment?: Assessment;
  conceptMap?: ConceptMapNode;
}

/** A node in a chapter's concept map — a simple labelled tree showing how its ideas relate. */
export interface ConceptMapNode {
  label: string;
  /** Optional deep link, e.g. to the concept page this node represents. */
  href?: string;
  children?: ConceptMapNode[];
}

export interface Topic {
  slug: string;
  title: string;
  concepts: ConceptSummary[];
}

export interface ConceptSummary {
  slug: string;
  title: string;
  difficulty?: Difficulty;
}

export interface Concept extends ConceptSummary {
  simpleExplanation: string;
  whyItMatters: string;
  diagram?: Diagram;
  formulaSlug?: string;
  workedExample?: WorkedExample;
  whyItWorks: string;
  realLifeExample: PracticalExample;
  practiceQuestions: PracticeQuestion[];
  commonMistake: string;
  quickReview: string[];
  /** Optional links into other subjects/chapters where a genuine conceptual connection exists (e.g. Physics motion → Math line equations). */
  relatedConcepts?: RelatedConcept[];
}

export interface RelatedConcept {
  label: string;
  href: string;
}

export interface Formula {
  slug: string;
  name: string;
  expression: string;
  meaning: string;
  variables: { symbol: string; meaning: string }[];
  whenToUse: string;
  relatedConceptSlugs: string[];
}

export type DiagramComponentKey =
  | 'CoordinatePlane'
  | 'NumberLine'
  | 'StaticImage'
  | 'CellDiagram'
  | 'MoleculeDiagram'
  | 'CircularMotionDiagram'
  | 'FunctionGraph'
  | 'GeometryDiagram';

export interface Diagram {
  id: string;
  title: string;
  altText: string;
  component: DiagramComponentKey;
  interactive: boolean;
  props: Record<string, unknown>;
}

export interface WorkedExampleStep {
  step: number;
  instruction: string;
  math?: string;
  explanation: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  problemStatement: string;
  steps: WorkedExampleStep[];
  finalAnswer: string;
}

export interface PracticalExample {
  title: string;
  scenario: string;
  explanation: string;
}

interface PracticeQuestionBase {
  id: string;
  difficulty: Difficulty;
  prompt: string;
  /** Revealed one at a time on wrong attempts — never the answer itself. */
  hints: string[];
  /** Only shown via an explicit "Reveal Answer" action. */
  explanation: string;
}

export type PracticeQuestion = MultipleChoiceQuestion | NumericQuestion;

export interface MultipleChoiceQuestion extends PracticeQuestionBase {
  type: 'multiple-choice';
  options: { id: string; text: string }[];
  correctOptionId: string;
}

export interface NumericQuestion extends PracticeQuestionBase {
  type: 'numeric';
  correctAnswer: number;
  tolerance?: number;
  unit?: string;
}

export interface QuickRevision {
  fiveMinute: RevisionItem[];
  fifteenMinute: RevisionItem[];
}

export interface RevisionItem {
  conceptSlug: string;
  keyPoint: string;
  formulaSlug?: string;
  miniExample: string;
}

// A chapter's graded assessment. Deliberately reuses `PracticeQuestion`
// (multiple-choice/numeric) rather than inventing a parallel question
// format — an assessment question is a practice question plus the two
// things scoring needs: which curriculum "part" it belongs to (for a
// balanced assessment, mirroring the PRD's Part A-E structure) and which
// concept it maps back to (so a wrong answer can be attributed to a
// specific "weak topic" to review, not just a raw score).
export type AssessmentPart = 'concept' | 'formula-application' | 'problem-solving' | 'real-life-application' | 'challenge';

export interface AssessmentQuestion {
  id: string;
  part: AssessmentPart;
  conceptSlug: string;
  conceptTitle: string;
  question: PracticeQuestion;
}

export interface Assessment {
  id: string;
  questions: AssessmentQuestion[];
}
