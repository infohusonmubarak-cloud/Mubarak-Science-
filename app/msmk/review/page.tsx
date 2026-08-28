import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { getAllFullModules } from '@/lib/msmk/getters';
import { MODULE_SOURCE_FILES } from '@/lib/msmk/moduleSourceFiles';
import { InformationSectionCard, JobSheetCard, SpecificationList } from '@/components/msmk/ModuleSections';
import { getModuleTheme } from '@/lib/msmk/moduleTheme';
import { cn } from '@/lib/utils/cn';

export const metadata: Metadata = { title: 'Medical Content Review — MSMK' };

export default async function MSMKReviewPage() {
  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);
  if (!session) redirect('/msmk/dashboard');

  // Same fail-closed check as the module/assessment pages: a signed
  // cookie only proves the server issued it, not that the code is still
  // active — see the comments there for why an unreachable DB must deny
  // access rather than skip the check.
  const client = getSupabaseServiceClient();
  if (!client) redirect('/msmk/dashboard');

  const { data: access } = await client
    .from('msmk_access_codes')
    .select('code, email, active')
    .eq('code', session.accessCode)
    .maybeSingle();
  if (!access || !access.active || String(access.email).toLowerCase() !== session.email) {
    redirect('/msmk/dashboard');
  }

  const modules = getAllFullModules();

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-border bg-surface p-6">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
          Medical &amp; Content Review — All 11 Modules
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          This page shows every module&apos;s teaching content, diagrams, procedures, and quiz explanations in one
          scrollable page, in order, so you can review it end to end without clicking through the course.
        </p>
        <div className="mt-4 rounded-xl border border-warning bg-warning-soft p-4 text-sm text-foreground">
          <p className="font-semibold">How to give feedback</p>
          <p className="mt-1">
            For each correction, please note: the <strong>module number</strong>, the{' '}
            <strong>section heading</strong> it&apos;s under (shown above each block below), and what should
            change.
            Each module also shows the exact file its content lives in — pass that along too and it goes
            straight to the right place. Send your notes back through whoever gave you this access code.
          </p>
        </div>
        <nav aria-label="Jump to module" className="mt-4 flex flex-wrap gap-2">
          {modules.map((mod) => (
            <a
              key={mod.id}
              href={`#${mod.id}`}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted hover:bg-surface-muted"
            >
              {mod.code}
            </a>
          ))}
        </nav>
      </section>

      {modules.map((mod) => {
        const theme = getModuleTheme(mod.accentKey);
        return (
          <section key={mod.id} id={mod.id} className="scroll-mt-20 space-y-4">
            <div className={cn('rounded-2xl border p-5', theme.border + '/30', theme.soft)}>
              <p className={cn('text-xs font-semibold uppercase tracking-wide', theme.text)}>{mod.code}</p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                {mod.title.en}
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">📖 {mod.guidelineSource.en}</p>
              <p className="mt-1 font-mono text-xs text-foreground-muted">
                Source file: {MODULE_SOURCE_FILES[mod.id]}
              </p>
            </div>

            <div className="space-y-3">
              {mod.informationSheet.map((sectionItem) => (
                <InformationSectionCard key={sectionItem.id} section={sectionItem} accentKey={mod.accentKey} />
              ))}
            </div>

            <JobSheetCard jobSheet={mod.jobSheet} />
            <SpecificationList steps={mod.specification} />

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                📌 Quick Review
              </h3>
              <ul className="mt-3 space-y-2">
                {mod.quickReview.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span aria-hidden="true">•</span>
                    <span>{point.text.en}</span>
                  </li>
                ))}
              </ul>
            </div>

            {mod.realLifeExample && (
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                  💬 Real-Life Example
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground">{mod.realLifeExample.title.en}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{mod.realLifeExample.scenario.en}</p>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                ✅ Assessment — Questions &amp; Explanations
              </h3>
              <ol className="mt-3 space-y-3">
                {mod.assessment.questions.map((q, i) => (
                  <li key={q.id} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                    <p className="text-sm font-medium text-foreground">
                      {i + 1}. {q.prompt.en}
                    </p>
                    <p className="mt-1 text-sm text-foreground-muted">Explanation: {q.explanation.en}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}
    </div>
  );
}
