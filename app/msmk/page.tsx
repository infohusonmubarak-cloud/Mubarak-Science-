import type { Metadata } from 'next';
import { ModuleCard } from '@/components/msmk/ModuleCard';
import { Button } from '@/components/ui/Button';
import { getModuleSummaries } from '@/lib/msmk/getters';

export const metadata: Metadata = {
  title: 'MSMK — Nursing, Self-Care & Family Care Course',
};

const WHY_POINTS = [
  { en: 'Learn to help in real emergencies — first aid, CPR, and more.', rhg: '' },
  { en: 'Mostly pictures and videos, very little reading.', rhg: '' },
  { en: 'Learn at your own pace, on your own phone.', rhg: '' },
  { en: 'Pass with 80% or more to earn your certificate.', rhg: '' },
];

export default function MSMKLandingPage() {
  const modules = getModuleSummaries();

  return (
    <div className="space-y-12">
      <section className="gradient-wash -mx-4 rounded-3xl px-4 py-10 text-center sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-msmk-firstaid">Mubarak Science Medical Knowledge</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
          Nursing, Self-Care &amp; Family Care
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
          Learn to care for your family and community — first aid, patient care, and support for babies, children,
          elders, and people with special needs.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/msmk/register">Register — 500 BDT</Button>
          <Button href="/msmk/dashboard" variant="secondary">
            I have an access code
          </Button>
        </div>
        <p className="mt-4 text-sm">
          <a href="/msmk/guide" className="font-medium text-brand underline">
            How does this course work?
          </a>
        </p>
      </section>

      <section className="rounded-2xl border border-warning bg-warning-soft p-5 text-sm leading-relaxed text-foreground">
        <p className="font-semibold">⚠️ Important — please read</p>
        <p className="mt-1">
          This course is training support. It does <strong>not</strong> replace certified in-person medical
          training, and it is not a substitute for calling real emergency help when someone is badly hurt. Medical
          content is reviewed by a qualified doctor (MBBS) before this course fully launches — some modules below
          are still being finished.
        </p>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">Why take MSMK</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {WHY_POINTS.map((point) => (
            <div key={point.en} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <span aria-hidden="true" className="text-xl">
                ✅
              </span>
              <p className="text-sm leading-relaxed text-foreground">{point.en}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
            11 Modules
          </h2>
          <p className="text-sm text-foreground-muted">
            {modules.filter((m) => m.status === 'available').length} of {modules.length} available now
          </p>
        </div>
        <p className="mt-1 text-xs text-foreground-muted">
          Module content is available after you register and log in with your access code.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">Ready to start?</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-foreground-muted">
          Registration costs 500 BDT, paid by bKash. After you register, we check your payment by hand and send you
          an access code — usually within a day or two.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/msmk/register">Register Now</Button>
        </div>
      </section>
    </div>
  );
}
