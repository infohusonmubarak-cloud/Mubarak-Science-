import type { SubjectSlug } from '@/types/content';

// Every class name below is written out literally (never built via string
// interpolation) so Tailwind's build-time scanner can find it — a dynamic
// `bg-subject-${slug}` string would silently produce no styles at all.
export interface SubjectTheme {
  icon: string;
  text: string;
  bg: string;
  border: string;
  soft: string;
  softText: string;
  ring: string;
  gradient: string;
}

const SUBJECT_THEME: Record<SubjectSlug, SubjectTheme> = {
  mathematics: {
    icon: '📐',
    text: 'text-subject-mathematics',
    bg: 'bg-subject-mathematics',
    border: 'border-subject-mathematics',
    soft: 'bg-subject-mathematics-soft',
    softText: 'text-subject-mathematics',
    ring: 'ring-subject-mathematics',
    gradient: 'from-subject-mathematics/20 via-subject-mathematics/5 to-transparent',
  },
  physics: {
    icon: '⚛️',
    text: 'text-subject-physics',
    bg: 'bg-subject-physics',
    border: 'border-subject-physics',
    soft: 'bg-subject-physics-soft',
    softText: 'text-subject-physics',
    ring: 'ring-subject-physics',
    gradient: 'from-subject-physics/20 via-subject-physics/5 to-transparent',
  },
  chemistry: {
    icon: '🧪',
    text: 'text-subject-chemistry',
    bg: 'bg-subject-chemistry',
    border: 'border-subject-chemistry',
    soft: 'bg-subject-chemistry-soft',
    softText: 'text-subject-chemistry',
    ring: 'ring-subject-chemistry',
    gradient: 'from-subject-chemistry/20 via-subject-chemistry/5 to-transparent',
  },
  biology: {
    icon: '🧬',
    text: 'text-subject-biology',
    bg: 'bg-subject-biology',
    border: 'border-subject-biology',
    soft: 'bg-subject-biology-soft',
    softText: 'text-subject-biology',
    ring: 'ring-subject-biology',
    gradient: 'from-subject-biology/20 via-subject-biology/5 to-transparent',
  },
};

const DEFAULT_THEME: SubjectTheme = {
  icon: '📘',
  text: 'text-brand',
  bg: 'bg-brand',
  border: 'border-brand',
  soft: 'bg-brand-soft',
  softText: 'text-brand-strong',
  ring: 'ring-brand',
  gradient: 'from-brand/20 via-brand/5 to-transparent',
};

export function getSubjectTheme(subjectSlug: string): SubjectTheme {
  return SUBJECT_THEME[subjectSlug as SubjectSlug] ?? DEFAULT_THEME;
}
