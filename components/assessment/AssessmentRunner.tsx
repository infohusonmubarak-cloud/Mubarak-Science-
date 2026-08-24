'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Assessment, AssessmentPart, AssessmentQuestion } from '@/types/content';
import { useAssessmentAttempt } from '@/hooks/useAssessment';
import { Button } from '@/components/ui/Button';
import { Badge, DifficultyBadge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils/cn';

const PART_LABELS: Record<AssessmentPart, string> = {
  concept: 'Part A — Concept Questions',
  'formula-application': 'Part B — Formula & Application',
  'problem-solving': 'Part C — Problem Solving',
  'real-life-application': 'Part D — Real-Life Application',
  challenge: 'Part E — Challenge',
};

const PART_ORDER: AssessmentPart[] = ['concept', 'formula-application', 'problem-solving', 'real-life-application', 'challenge'];

interface AssessmentRunnerProps {
  assessment: Assessment;
  chapterSlug: string;
  conceptHrefBase: string;
}

type AnswerValue = string | null;
type Answers = Record<string, AnswerValue>;

interface ScoredQuestion {
  question: AssessmentQuestion;
  value: AnswerValue;
  correct: boolean;
}

interface Results {
  perQuestion: ScoredQuestion[];
  score: number;
  weakConceptSlugs: string[];
}

function isAnswerCorrect(question: AssessmentQuestion, value: AnswerValue): boolean {
  if (value === null || value.trim() === '') return false;
  const q = question.question;
  if (q.type === 'multiple-choice') return value === q.correctOptionId;
  const numeric = Number.parseFloat(value);
  if (Number.isNaN(numeric)) return false;
  const tolerance = q.tolerance ?? 0.01;
  return Math.abs(numeric - q.correctAnswer) <= tolerance;
}

function scoreAssessment(questions: AssessmentQuestion[], answers: Answers): Results {
  const perQuestion = questions.map((question) => ({
    question,
    value: answers[question.id] ?? null,
    correct: isAnswerCorrect(question, answers[question.id] ?? null),
  }));
  const score = perQuestion.filter((r) => r.correct).length;
  const weakConceptSlugs = Array.from(new Set(perQuestion.filter((r) => !r.correct).map((r) => r.question.conceptSlug)));
  return { perQuestion, score, weakConceptSlugs };
}

function QuestionInput({
  question,
  value,
  onChange,
}: {
  question: AssessmentQuestion;
  value: AnswerValue;
  onChange: (value: AnswerValue) => void;
}) {
  const inputId = useId();
  const q = question.question;

  if (q.type === 'multiple-choice') {
    return (
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {q.options.map((option) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              aria-pressed={selected}
              className={cn(
                'rounded-lg border px-3 py-2 text-left text-sm transition-colors',
                selected ? 'border-brand bg-brand-soft' : 'border-border hover:bg-surface-muted'
              )}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mt-3 flex items-center gap-2">
      <label htmlFor={inputId} className="sr-only">
        Your answer
      </label>
      <input
        id={inputId}
        type="number"
        inputMode="decimal"
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        className="w-32 rounded-lg border border-border bg-surface px-3 py-2 text-sm"
      />
      {q.unit ? <span className="text-sm text-foreground-muted">{q.unit}</span> : null}
    </div>
  );
}

export function AssessmentRunner({ assessment, chapterSlug, conceptHrefBase }: AssessmentRunnerProps) {
  const { attempt, submitAttempt } = useAssessmentAttempt(chapterSlug);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<Results | null>(null);

  const questionsByPart = useMemo(() => {
    const map = new Map<AssessmentPart, AssessmentQuestion[]>();
    for (const part of PART_ORDER) map.set(part, []);
    for (const question of assessment.questions) map.get(question.part)?.push(question);
    return map;
  }, [assessment.questions]);

  const totalQuestions = assessment.questions.length;
  const answeredCount = assessment.questions.filter((q) => {
    const value = answers[q.id];
    return value !== undefined && value !== null && value.trim() !== '';
  }).length;
  const allAnswered = answeredCount === totalQuestions;

  const handleSubmit = () => {
    if (!allAnswered) return;
    const computed = scoreAssessment(assessment.questions, answers);
    setResults(computed);
    submitAttempt({ score: computed.score, total: totalQuestions, weakConceptSlugs: computed.weakConceptSlugs });
  };

  const handleRetry = () => {
    setAnswers({});
    setResults(null);
  };

  if (results) {
    const percent = totalQuestions === 0 ? 0 : Math.round((results.score / totalQuestions) * 100);
    const weakConcepts = assessment.questions
      .filter((q) => results.weakConceptSlugs.includes(q.conceptSlug))
      .reduce<{ slug: string; title: string }[]>((acc, q) => {
        if (!acc.some((c) => c.slug === q.conceptSlug)) acc.push({ slug: q.conceptSlug, title: q.conceptTitle });
        return acc;
      }, []);

    return (
      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-surface p-6 text-center">
          <p className="text-sm font-medium text-foreground-muted">Your score</p>
          <p className="mt-1 text-4xl font-bold text-foreground">
            {results.score}/{totalQuestions}
          </p>
          <p className="mt-1 text-sm text-foreground-muted">{percent}%</p>
        </div>

        {weakConcepts.length > 0 ? (
          <div className="rounded-xl border border-warning/30 bg-warning-soft p-5">
            <h3 className="text-sm font-semibold text-warning">Topics to review</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {weakConcepts.map((concept) => (
                <li key={concept.slug}>
                  <Link
                    href={`${conceptHrefBase}/${concept.slug}`}
                    className="inline-flex items-center rounded-full border border-warning/40 bg-surface px-3 py-1.5 text-sm text-warning hover:bg-warning-soft"
                  >
                    {concept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-xl border border-success/30 bg-success-soft p-5 text-sm text-success">
            Perfect score — no weak topics this time.
          </div>
        )}

        <div className="space-y-4">
          {results.perQuestion.map(({ question, value, correct }) => (
            <div key={question.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-foreground">{question.question.prompt}</p>
                <Badge tone={correct ? 'success' : 'danger'}>{correct ? 'Correct' : 'Incorrect'}</Badge>
              </div>
              {!correct ? (
                <p className="mt-2 text-sm text-foreground-muted">
                  Your answer: {value && value.trim() !== '' ? value : '(no answer)'}
                </p>
              ) : null}
              <p className="mt-2 text-sm text-foreground-muted">{question.question.explanation}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={handleRetry}>Retry Assessment</Button>
          <Button href={conceptHrefBase} variant="secondary">
            Review Chapter
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {attempt ? (
        <p className="text-sm text-foreground-muted">
          Last attempt: {attempt.score}/{attempt.total} ({attempt.percent}%)
        </p>
      ) : null}

      {PART_ORDER.filter((part) => (questionsByPart.get(part)?.length ?? 0) > 0).map((part) => (
        <section key={part}>
          <h2 className="mb-3 text-lg font-semibold text-foreground">{PART_LABELS[part]}</h2>
          <div className="space-y-4">
            {questionsByPart.get(part)!.map((question) => (
              <div key={question.id} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-foreground">{question.question.prompt}</p>
                  <DifficultyBadge difficulty={question.question.difficulty} />
                </div>
                <QuestionInput
                  question={question}
                  value={answers[question.id] ?? null}
                  onChange={(value) => setAnswers((prev) => ({ ...prev, [question.id]: value }))}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="flex items-center gap-3">
        <Button onClick={handleSubmit} disabled={!allAnswered}>
          Submit Assessment
        </Button>
        <p className="text-sm text-foreground-muted">
          {answeredCount}/{totalQuestions} answered
        </p>
      </div>
    </div>
  );
}
