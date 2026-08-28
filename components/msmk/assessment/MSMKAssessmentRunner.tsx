'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { MSMKQuestionCard } from './MSMKQuestionCard';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { MSMKAssessment } from '@/types/msmk';

interface MSMKAssessmentRunnerProps {
  assessment: MSMKAssessment;
  moduleId: string;
  moduleCode: string;
}

export function MSMKAssessmentRunner({ assessment, moduleId, moduleCode }: MSMKAssessmentRunnerProps) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const total = assessment.questions.length;
  const question = assessment.questions[index];
  const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = percent >= assessment.passPercent;

  function handleAnswered(correct: boolean) {
    setAnswered(true);
    if (correct) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
      setAnswered(false);
    } else {
      setFinished(true);
      startTransition(async () => {
        const res = await fetch('/api/msmk/assessment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ moduleId, score: correctCount, total }),
        });
        if (!res.ok) {
          setSubmitError('Your score was not saved — please check your connection and try again from the dashboard.');
        }
      });
    }
  }

  if (finished) {
    return (
      <div className="space-y-6 text-center">
        <div className={`rounded-2xl border p-8 ${passed ? 'border-success bg-success-soft' : 'border-warning bg-warning-soft'}`}>
          <p className="text-4xl">{passed ? '🎉' : '📚'}</p>
          <p className="mt-3 text-sm font-medium text-foreground-muted">Your score</p>
          <p className="mt-1 text-4xl font-bold text-foreground">
            {correctCount}/{total}
          </p>
          <p className="mt-1 text-lg font-semibold text-foreground">{percent}%</p>
          <p className="mt-3 text-sm text-foreground-muted">
            {passed
              ? `You passed ${moduleCode}! Great work.`
              : `You need ${assessment.passPercent}% to pass. Review the module and try again.`}
          </p>
        </div>

        {submitError && <p className="text-sm font-medium text-danger">{submitError}</p>}
        {isPending && <p className="text-sm text-foreground-muted">Saving your score…</p>}

        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={() => router.refresh()} disabled={isPending}>
            Back to Dashboard
          </Button>
          {!passed && (
            <Button
              variant="secondary"
              onClick={() => {
                setIndex(0);
                setCorrectCount(0);
                setAnswered(false);
                setFinished(false);
              }}
            >
              Try Again
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ProgressBar percent={Math.round((index / total) * 100)} label={`Question ${index + 1} of ${total}`} />
      <MSMKQuestionCard key={question.id} question={question} onAnswered={handleAnswered} />
      {answered && (
        <Button onClick={next} className="w-full">
          {index + 1 < total ? 'Next Question' : 'See Results'}
        </Button>
      )}
    </div>
  );
}
