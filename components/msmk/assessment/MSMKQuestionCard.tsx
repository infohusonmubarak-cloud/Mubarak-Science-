'use client';

import { useState } from 'react';
import type { MSMKQuestion } from '@/types/msmk';
import { BilingualText } from '@/components/msmk/BilingualText';
import { getVisual } from '@/lib/msmk/visualRegistry';
import { MSMK_DIAGRAM_REGISTRY } from '@/components/msmk/diagrams/registry';
import { deterministicShuffle } from '@/lib/msmk/deterministicShuffle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

interface MSMKQuestionCardProps {
  question: MSMKQuestion;
  onAnswered: (correct: boolean) => void;
}

function FeedbackBanner({ correct, question }: { correct: boolean; question: MSMKQuestion }) {
  return (
    <div
      className={cn(
        'mt-4 rounded-lg border p-3 text-sm',
        correct ? 'border-success bg-success-soft text-success' : 'border-danger bg-danger-soft text-danger'
      )}
    >
      <p className="font-semibold">{correct ? '✅ Correct!' : '❌ Not quite.'}</p>
      <p className="mt-1 text-foreground">{question.explanation.en}</p>
    </div>
  );
}

export function MSMKQuestionCard({ question, onAnswered }: MSMKQuestionCardProps) {
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function finish(isCorrect: boolean) {
    if (checked) return;
    setChecked(true);
    setCorrect(isCorrect);
    onAnswered(isCorrect);
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <BilingualText text={question.prompt} as="p" className="text-base font-semibold text-foreground" />

      {question.type === 'image-choice' && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {question.options.map((option) => {
            const visual = getVisual(option.imageKey);
            const isSelected = selectedId === option.id;
            const isCorrectOption = option.id === question.correctOptionId;
            return (
              <button
                key={option.id}
                type="button"
                disabled={checked}
                onClick={() => {
                  setSelectedId(option.id);
                  finish(option.id === question.correctOptionId);
                }}
                className={cn(
                  'flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 text-center transition-colors',
                  checked && isCorrectOption && 'border-success bg-success-soft',
                  checked && isSelected && !isCorrectOption && 'border-danger bg-danger-soft',
                  !checked && 'border-border hover:border-msmk-firstaid hover:bg-msmk-firstaid-soft',
                  checked && !isSelected && !isCorrectOption && 'border-border opacity-50'
                )}
              >
                <span aria-hidden="true" className="text-3xl">
                  {visual.emoji}
                </span>
                <BilingualText text={option.label} as="span" className="text-xs font-medium text-foreground" />
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'true-false-picture' && (
        <div className="mt-4 space-y-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-4">
            <span aria-hidden="true" className="text-4xl">
              {getVisual(question.imageKey).emoji}
            </span>
            <p className="text-sm font-medium text-foreground">{question.statement.en}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[true, false].map((value) => {
              const isSelected = selectedId === String(value);
              const isCorrectAnswer = value === question.correctAnswer;
              return (
                <button
                  key={String(value)}
                  type="button"
                  disabled={checked}
                  onClick={() => {
                    setSelectedId(String(value));
                    finish(value === question.correctAnswer);
                  }}
                  className={cn(
                    'rounded-xl border-2 py-3 text-sm font-semibold transition-colors',
                    checked && isCorrectAnswer && 'border-success bg-success-soft text-success',
                    checked && isSelected && !isCorrectAnswer && 'border-danger bg-danger-soft text-danger',
                    !checked && 'border-border hover:border-msmk-firstaid hover:bg-msmk-firstaid-soft'
                  )}
                >
                  {value ? 'True' : 'False'}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {question.type === 'tap-spot' && (
        <TapSpotBody question={question} checked={checked} selectedId={selectedId} setSelectedId={setSelectedId} finish={finish} />
      )}

      {question.type === 'drag-order' && (
        <DragOrderBody question={question} checked={checked} finish={finish} />
      )}

      {checked && <FeedbackBanner correct={correct} question={question} />}
    </div>
  );
}

function TapSpotBody({
  question,
  checked,
  selectedId,
  setSelectedId,
  finish,
}: {
  question: Extract<MSMKQuestion, { type: 'tap-spot' }>;
  checked: boolean;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
  finish: (correct: boolean) => void;
}) {
  const Diagram = MSMK_DIAGRAM_REGISTRY[question.diagramKey];

  return (
    <div className="relative mt-4 rounded-xl border border-border bg-background p-4">
      <div className="relative mx-auto max-w-xs">
        {Diagram ? <Diagram /> : <p className="text-sm text-foreground-muted">Diagram unavailable.</p>}
        {question.targets.map((target) => {
          const isSelected = selectedId === target.id;
          const isCorrectTarget = target.id === question.correctTargetId;
          return (
            <button
              key={target.id}
              type="button"
              disabled={checked}
              onClick={() => {
                setSelectedId(target.id);
                finish(target.id === question.correctTargetId);
              }}
              aria-label={target.label.en}
              style={{
                position: 'absolute',
                left: `${target.x}%`,
                top: `${target.y}%`,
                width: `${target.radius * 2}%`,
                height: `${target.radius * 2}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={cn(
                'rounded-full border-2 transition-colors',
                checked && isCorrectTarget && 'border-success bg-success/30',
                checked && isSelected && !isCorrectTarget && 'border-danger bg-danger/30',
                !checked && 'border-transparent hover:border-msmk-firstaid hover:bg-msmk-firstaid/20'
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

function DragOrderBody({
  question,
  checked,
  finish,
}: {
  question: Extract<MSMKQuestion, { type: 'drag-order' }>;
  checked: boolean;
  finish: (correct: boolean) => void;
}) {
  const [order, setOrder] = useState(() => deterministicShuffle(question.steps, question.id));

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  }

  function checkOrder() {
    const isCorrect = order.every((step, i) => step.id === question.steps[i].id);
    finish(isCorrect);
  }

  return (
    <div className="mt-4 space-y-2">
      <ol className="space-y-2">
        {order.map((step, index) => (
          <li
            key={step.id}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-msmk-firstaid-soft text-xs font-bold text-msmk-firstaid">
              {index + 1}
            </span>
            <BilingualText text={step.label} as="span" className="flex-1 text-sm text-foreground" />
            <div className="flex shrink-0 gap-1">
              <button
                type="button"
                disabled={checked || index === 0}
                onClick={() => move(index, -1)}
                aria-label="Move up"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground-muted hover:bg-surface-muted disabled:opacity-30"
              >
                ▲
              </button>
              <button
                type="button"
                disabled={checked || index === order.length - 1}
                onClick={() => move(index, 1)}
                aria-label="Move down"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground-muted hover:bg-surface-muted disabled:opacity-30"
              >
                ▼
              </button>
            </div>
          </li>
        ))}
      </ol>
      {!checked && (
        <Button onClick={checkOrder} className="w-full">
          Check Order
        </Button>
      )}
    </div>
  );
}
