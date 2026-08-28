import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { getFullModule } from '@/lib/msmk/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { InformationSectionCard, JobSheetCard, QuickReviewAccordion, SelfCheckAccordion, SpecificationList } from '@/components/msmk/ModuleSections';
import { BilingualText } from '@/components/msmk/BilingualText';
import { getModuleTheme } from '@/lib/msmk/moduleTheme';
import { cn } from '@/lib/utils/cn';

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }): Promise<Metadata> {
  const { moduleId } = await params;
  const module_ = getFullModule(moduleId);
  return { title: module_ ? `${module_.code} — ${module_.title.en}` : 'Module' };
}

export default async function MSMKModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;

  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);
  if (!session) redirect('/msmk/dashboard');

  // A signed cookie only proves it was issued by this server — it does
  // NOT prove the access code is still active. That check needs the DB,
  // so if it's unreachable we must fail closed (deny access) rather than
  // silently skip verification, exactly like the dashboard page does.
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

  const mod = getFullModule(moduleId);
  if (!mod) notFound();

  const theme = getModuleTheme(mod.accentKey);

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'MSMK', href: '/msmk' }, { label: 'My Dashboard', href: '/msmk/dashboard' }, { label: mod.title.en }]} />

      <section className={cn('rounded-2xl border p-5', theme.border + '/30', theme.soft)}>
        <p className={cn('text-xs font-semibold uppercase tracking-wide', theme.text)}>{mod.code}</p>
        <BilingualText text={mod.title} as="h1" className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground" />
        <BilingualText text={mod.shortDescription} as="p" className="mt-2 text-sm text-foreground-muted" />
        <div className="mt-4 flex flex-wrap gap-2">
          {mod.learningExperience.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground">
              <span aria-hidden="true">{item.icon}</span>
              {item.label.en}
            </span>
          ))}
        </div>
      </section>

      <div className="space-y-4">
        {mod.informationSheet.map((section) => (
          <InformationSectionCard key={section.id} section={section} accentKey={mod.accentKey} />
        ))}
      </div>

      <JobSheetCard jobSheet={mod.jobSheet} />
      <SpecificationList steps={mod.specification} />

      {mod.realLifeExample && (
        <section className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-foreground">💬 Real-Life Example</h3>
          <p className="mt-2 text-sm font-semibold text-foreground">{mod.realLifeExample.title.en}</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{mod.realLifeExample.scenario.en}</p>
        </section>
      )}

      <SelfCheckAccordion questions={mod.selfCheck} answers={mod.answers} />
      <QuickReviewAccordion points={mod.quickReview} />

      <section className="rounded-2xl border border-border bg-surface p-5 text-center">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">Ready for the quiz?</h3>
        <p className="mt-1 text-sm text-foreground-muted">
          Pass with {mod.assessment.passPercent}% or higher to complete {mod.code}.
        </p>
        <Button href={`/msmk/modules/${mod.id}/assessment`} className="mt-4">
          Start Assessment
        </Button>
      </section>

      <p className="rounded-lg border border-border bg-surface-muted p-3 text-xs text-foreground-muted">
        📖 {mod.guidelineSource.en}
      </p>
    </div>
  );
}
