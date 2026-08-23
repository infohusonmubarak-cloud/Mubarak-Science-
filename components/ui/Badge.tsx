import type { ReactNode } from 'react';
import type { Difficulty } from '@/types/content';
import { cn } from '@/lib/utils/cn';

type Tone = 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral';

const TONE_CLASSES: Record<Tone, string> = {
  brand: 'bg-brand-soft text-brand-strong',
  accent: 'bg-accent-soft text-accent',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  danger: 'bg-danger-soft text-danger',
  neutral: 'bg-surface-muted text-foreground-muted',
};

const DIFFICULTY_TONE: Record<Difficulty, Tone> = {
  easy: 'success',
  medium: 'warning',
  hard: 'danger',
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        TONE_CLASSES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <Badge tone={DIFFICULTY_TONE[difficulty]} className={className}>
      {difficulty[0].toUpperCase() + difficulty.slice(1)}
    </Badge>
  );
}
