import type { SubjectSlug } from './content';

// A PhET Interactive Simulation embedded into a chapter. Everything here is
// hand-verified against the real PhET catalog (phetSlug, title) — never
// invent a slug, the iframe would silently show nothing or a 404.
export interface Simulation {
  id: string;
  title: string;
  subjectSlug: SubjectSlug;
  /** The part of the PhET URL after /sims/html/ — e.g. 'graphing-lines'. */
  phetSlug: string;
  /** PhET's own one-line description of what the sim does. */
  description: string;
  /** Chapter slugs (from content/subjects/**) this sim is relevant to. */
  chapterSlugs: string[];
  instructions: {
    whatToChange: string;
    whatToLookFor: string;
  };
  /** PhET's recommended embed size; defaults to 834x504 if omitted. */
  width?: number;
  height?: number;
  /** True if the sim's own controls are cramped or unusable on a small phone screen. */
  desktopRecommended?: boolean;
}
