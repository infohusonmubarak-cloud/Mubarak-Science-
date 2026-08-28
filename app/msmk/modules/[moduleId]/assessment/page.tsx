import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { parseSessionCookieValue, MSMK_SESSION_COOKIE } from '@/lib/msmk/session';
import { getFullModule } from '@/lib/msmk/getters';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { MSMKAssessmentRunner } from '@/components/msmk/assessment/MSMKAssessmentRunner';

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }): Promise<Metadata> {
  const { moduleId } = await params;
  const mod = getFullModule(moduleId);
  return { title: mod ? `Assessment — ${mod.code}` : 'Assessment' };
}

export default async function MSMKAssessmentPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;

  const cookieStore = await cookies();
  const session = parseSessionCookieValue(cookieStore.get(MSMK_SESSION_COOKIE)?.value);
  if (!session) redirect('/msmk/dashboard');

  const mod = getFullModule(moduleId);
  if (!mod) notFound();

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <Breadcrumbs
        items={[
          { label: 'MSMK', href: '/msmk' },
          { label: mod.title.en, href: `/msmk/modules/${mod.id}` },
          { label: 'Assessment' },
        ]}
      />
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">{mod.code} Assessment</h1>
        <p className="mt-1 text-sm text-foreground-muted">Pass with {mod.assessment.passPercent}% or higher.</p>
      </div>
      <MSMKAssessmentRunner assessment={mod.assessment} moduleId={mod.id} moduleCode={mod.code} />
    </div>
  );
}
