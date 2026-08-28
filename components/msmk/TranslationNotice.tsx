import { MSMK_TRANSLATIONS_REVIEWED } from '@/lib/msmk/translationStatus';

/** Shown across MSMK until a native Rohingya speaker has reviewed the `rhg` content fields. */
export function TranslationNotice() {
  if (MSMK_TRANSLATIONS_REVIEWED) return null;

  return (
    <div className="rounded-lg border border-warning bg-warning-soft px-4 py-2.5 text-xs text-foreground">
      <strong className="font-semibold">Draft translation notice —</strong> Rohingya text on this course is a
      placeholder pending review by a native Rohingya speaker. English content is final; Rohingya content is not
      yet ready to teach from.
    </div>
  );
}
