import type { Subject, SubjectSlug } from '@/types/content';
import { mathematics } from './subjects/mathematics';
import { physics } from './subjects/physics';
import { chemistry } from './subjects/chemistry';
import { biology } from './subjects/biology';

export const subjects: Subject[] = [mathematics, physics, chemistry, biology];

export const subjectsBySlug: Record<SubjectSlug, Subject> = {
  mathematics,
  physics,
  chemistry,
  biology,
};
