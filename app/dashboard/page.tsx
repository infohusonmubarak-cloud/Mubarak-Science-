'use client';

import { useMemo } from 'react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useProgress } from '@/hooks/useProgress';
import { useQuestionHistory } from '@/hooks/useQuestionHistory';
import {
  findChapterLocation,
  findFormula,
  getAllSubjects,
  getChapterConceptCount,
  getConceptDetail,
} from '@/lib/content/getters';
import { deriveChapterProgress } from '@/lib/storage/api';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  // `progress` is the hydration-safe snapshot (defaults on first render,
  // real data right after) — chapter figures below must be derived from
  // it rather than reading storage again directly, or they'd mismatch
  // what was baked into the static HTML at build time.
  const { progress } = useProgress();
  const { bookmarks } = useBookmarks();
  const { questions } = useQuestionHistory();

  const availableChapters = useMemo(() => {
    const chapters: { subjectSlug: string; levelSlug: string; chapterSlug: string; title: string; total: number }[] = [];
    for (const subject of getAllSubjects()) {
      for (const level of subject.levels) {
        for (const chapter of level.chapters) {
          if (chapter.status === 'available') {
            chapters.push({
              subjectSlug: subject.slug,
              levelSlug: level.slug,
              chapterSlug: chapter.slug,
              title: chapter.title,
              total: getChapterConceptCount(chapter),
            });
          }
        }
      }
    }
    return chapters;
  }, []);

  const chapterProgress = availableChapters.map((chapter) => ({
    ...chapter,
    progress: deriveChapterProgress(progress, chapter.chapterSlug, chapter.total),
  }));

  const continueChapter =
    chapterProgress.find((c) => c.progress.done > 0 && c.progress.done < c.progress.total) ??
    chapterProgress.find((c) => c.progress.done === 0);

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]} />
      <h1 className="text-2xl font-bold text-foreground">Your Dashboard</h1>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">Continue Learning</h2>
        {continueChapter ? (
          <Card href={`/subjects/${continueChapter.subjectSlug}/${continueChapter.levelSlug}/${continueChapter.chapterSlug}`} className="p-5">
            <p className="text-sm font-medium text-foreground">{continueChapter.title}</p>
            <ProgressBar
              percent={continueChapter.progress.percent}
              label={`${continueChapter.progress.done}/${continueChapter.progress.total} concepts complete`}
              className="mt-3"
            />
          </Card>
        ) : (
          <p className="text-sm text-foreground-muted">
            No chapters available to track yet — start with{' '}
            <Button href="/subjects/mathematics/a-level/coordinate-geometry" variant="ghost" size="sm">
              Coordinate Geometry
            </Button>
            .
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-foreground">My Progress</h2>
        <div className="space-y-3">
          {chapterProgress.map((chapter) => (
            <ProgressBar
              key={chapter.chapterSlug}
              percent={chapter.progress.percent}
              label={chapter.title}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Saved Topics</h2>
          <Button href="/formulas" variant="ghost" size="sm">Formula Library →</Button>
        </div>
        {bookmarks.length === 0 ? (
          <p className="text-sm text-foreground-muted">
            Nothing saved yet — tap &ldquo;Save&rdquo; on any concept or formula to bookmark it here.
          </p>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {bookmarks.map((bookmark) => {
              if (bookmark.type === 'formula') {
                const entry = findFormula(bookmark.slug);
                if (!entry) return null;
                return (
                  <Card key={`formula-${bookmark.slug}`} href={`/formulas/${bookmark.slug}`} className="p-3.5 text-sm font-medium">
                    ∑ {entry.formula.name}
                  </Card>
                );
              }
              const location = bookmark.chapterSlug ? findChapterLocation(bookmark.chapterSlug) : undefined;
              if (!location) return null;
              const concept = getConceptDetail(location.subjectSlug, location.levelSlug, location.chapter.slug, bookmark.slug);
              if (!concept) return null;
              return (
                <Card
                  key={`concept-${bookmark.slug}`}
                  href={`/subjects/${location.subjectSlug}/${location.levelSlug}/${location.chapter.slug}/${concept.slug}`}
                  className="p-3.5 text-sm font-medium"
                >
                  {concept.title}
                </Card>
              );
            })}
          </div>
        )}
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Recent Questions</h2>
          <Button href="/ask" variant="ghost" size="sm">Ask a Question →</Button>
        </div>
        {questions.length === 0 ? (
          <p className="text-sm text-foreground-muted">
            Nothing asked yet — use <Button href="/ask" variant="ghost" size="sm">Ask a Question</Button> to get a
            step-by-step worked answer to anything you&apos;re stuck on.
          </p>
        ) : (
          <div className="space-y-2">
            {questions.slice(0, 5).map((q) => (
              <Card key={q.id} href="/ask" className="p-3.5">
                <p className="text-xs font-medium uppercase tracking-wide text-brand">{q.subject}</p>
                <p className="truncate text-sm font-medium text-foreground">{q.questionText || '(photo question)'}</p>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
