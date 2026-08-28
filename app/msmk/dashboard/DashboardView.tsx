import Link from 'next/link';
import { ModuleCard } from '@/components/msmk/ModuleCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { getModuleSummaries } from '@/lib/msmk/getters';
import { LogoutButton } from './LogoutButton';

export interface AttemptRow {
  module_id: string;
  score: number;
  total: number;
  percent: number;
  last_attempt_at: string;
}

const PASS_PERCENT = 80;

export function DashboardView({ fullName, attempts }: { fullName: string; attempts: AttemptRow[] }) {
  const modules = getModuleSummaries();
  const attemptByModule = new Map(attempts.map((a) => [a.module_id, a]));
  const availableModules = modules.filter((m) => m.status === 'available');
  const passedCount = attempts.filter((a) => a.percent >= PASS_PERCENT).length;
  const overallPercent = availableModules.length === 0 ? 0 : Math.round((passedCount / modules.length) * 100);
  const certificateUnlocked = passedCount === modules.length && modules.length > 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-foreground-muted">Welcome back,</p>
          <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">{fullName}</h1>
        </div>
        <LogoutButton />
      </div>

      <section className="rounded-2xl border border-border bg-surface p-5">
        <ProgressBar percent={overallPercent} label={`Course progress (${passedCount} of ${modules.length} modules passed)`} />
      </section>

      <section
        className={`rounded-2xl border p-5 text-center ${
          certificateUnlocked ? 'border-success bg-success-soft' : 'border-border bg-surface'
        }`}
      >
        {certificateUnlocked ? (
          <>
            <p className="text-3xl">🏆</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
              Certificate unlocked!
            </h2>
            <Link
              href="/msmk/certificate"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-strong"
            >
              Download my certificate
            </Link>
          </>
        ) : (
          <p className="text-sm text-foreground-muted">
            Pass all {modules.length} modules with a score of {PASS_PERCENT}% or higher to unlock your certificate.
            Only {availableModules.length} of {modules.length} modules are open right now — more are on the way.
          </p>
        )}
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">Modules</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => {
            const attempt = attemptByModule.get(mod.id);
            return (
              <div key={mod.id} className="relative">
                <ModuleCard module={mod} href={mod.status === 'available' ? `/msmk/modules/${mod.id}` : undefined} />
                {attempt && (
                  <Badge tone={attempt.percent >= PASS_PERCENT ? 'success' : 'warning'} className="absolute right-3 top-3">
                    {attempt.percent}%
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
