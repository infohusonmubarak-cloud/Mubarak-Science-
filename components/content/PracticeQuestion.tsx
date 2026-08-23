'use client';

import { useId, useState } from 'react';
import type { PracticeQuestion as PracticeQuestionType } from '@/types/content';
import { Button } from '@/components/ui/Button';
import { DifficultyBadge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils/cn';

type Status = 'unanswered' | 'correct' | 'incorrect' | 'revealed';

interface PracticeQuestionProps {
  question: PracticeQuestionType;
}

export function PracticeQuestion({ question }: PracticeQuestionProps) {
  const [status, setStatus] = useState<Status>('unanswered');
  const [attemptCount, setAttemptCount] = useState(0);
  const [hintsShown, setHintsShown] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [numericValue, setNumericValue] = useState('');
  const inputId = useId();

  const locked = status === 'correct' || status === 'revealed';
  const showExplanation = status === 'correct' || status === 'revealed';

  const canSubmit = question.type === 'multiple-choice' ? selectedOptionId !== null : numericValue.trim() !== '';

  const isCorrect = () => {
    if (question.type === 'multiple-choice') return selectedOptionId === question.correctOptionId;
    const value = Number.parseFloat(numericValue);
    if (Number.isNaN(value)) return false;
    const tolerance = question.tolerance ?? 0.01;
    return Math.abs(value - question.correctAnswer) <= tolerance;
  };

  const handleSubmit = () => {
    if (!canSubmit || locked) return;
    if (isCorrect()) {
      setStatus('correct');
    } else {
      setAttemptCount((n) => n + 1);
      setHintsShown((n) => Math.min(n + 1, question.hints.length));
      setStatus('incorrect');
    }
  };

  const handleReset = () => {
    setStatus('unanswered');
    setAttemptCount(0);
    setHintsShown(0);
    setSelectedOptionId(null);
    setNumericValue('');
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-foreground">{question.prompt}</p>
        <DifficultyBadge difficulty={question.difficulty} />
      </div>

      {question.type === 'multiple-choice' ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {question.options.map((option) => {
            const selected = selectedOptionId === option.id;
            const revealCorrect = showExplanation && option.id === question.correctOptionId;
            return (
              <button
                key={option.id}
                type="button"
                disabled={locked}
                onClick={() => setSelectedOptionId(option.id)}
                aria-pressed={selected}
                className={cn(
                  'rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-not-allowed',
                  revealCorrect
                    ? 'border-success bg-success-soft'
                    : selected
                      ? 'border-brand bg-brand-soft'
                      : 'border-border hover:bg-surface-muted'
                )}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-3 flex items-center gap-2">
          <label htmlFor={inputId} className="sr-only">
            Your answer
          </label>
          <input
            id={inputId}
            type="number"
            inputMode="decimal"
            value={numericValue}
            onChange={(event) => setNumericValue(event.target.value)}
            disabled={locked}
            className="w-32 rounded-lg border border-border bg-surface px-3 py-2 text-sm disabled:opacity-60"
          />
          {question.unit ? <span className="text-sm text-foreground-muted">{question.unit}</span> : null}
        </div>
      )}

      {status === 'incorrect' && hintsShown > 0 ? (
        <p className="mt-3 rounded-lg bg-warning-soft px-3 py-2 text-sm text-warning">
          Hint: {question.hints[hintsShown - 1]}
        </p>
      ) : null}

      {status === 'correct' ? (
        <p className="mt-3 rounded-lg bg-success-soft px-3 py-2 text-sm text-success">
          Excellent! Your answer is correct.
        </p>
      ) : null}

      {showExplanation ? <p className="mt-3 text-sm text-foreground-muted">{question.explanation}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {!locked ? (
          <Button size="sm" onClick={handleSubmit} disabled={!canSubmit}>
            {attemptCount > 0 ? 'Try Again' : 'Check Answer'}
          </Button>
        ) : null}
        {!locked ? (
          <Button size="sm" variant="ghost" onClick={() => setStatus('revealed')}>
            Reveal Answer
          </Button>
        ) : null}
        {locked ? (
          <Button size="sm" variant="secondary" onClick={handleReset}>
            Try Again From Scratch
          </Button>
        ) : null}
      </div>
    </div>
  );
}
