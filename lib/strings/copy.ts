// Centralized brand copy — the seam a future i18n layer would swap out.
// Everything else in this pass is plain English literals in components;
// this file only holds the strings repeated across multiple pages
// (header, home, manifest) so they can't drift out of sync.
export const BRAND = {
  name: 'Mubarek Science',
  tagline: "Understand Science. Don't Just Memorize It.",
  description:
    'Simple explanations, visual learning, practical examples, and smart revision for Science learners.',
} as const;
