import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = { title: 'How to Use This Course — MSMK' };

const HOW_TO_STEPS = [
  { icon: '📝', title: 'Register', body: 'Fill in your details and pay the course fee by bKash.' },
  { icon: '⏳', title: 'Wait for your code', body: 'We check your payment and email you an access code — usually within 1–2 days.' },
  { icon: '🔑', title: 'Log in', body: 'Go to My Dashboard and log in with your access code and email.' },
  { icon: '📚', title: 'Pick a module', body: 'Choose any available module — you do not have to go in order.' },
  { icon: '👀', title: 'Watch and read', body: 'Each module is mostly pictures, diagrams, and short videos — very little reading.' },
  { icon: '✅', title: 'Take the quiz', body: 'Answer the picture-based quiz at the end. You can try again if you do not pass.' },
  { icon: '🏆', title: 'Get your certificate', body: 'Pass every module with 80% or higher to unlock your certificate.' },
] as const;

export default function MSMKGuidePage() {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'MSMK', href: '/msmk' }, { label: 'How to Use This Course' }]} />

      <section className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
          How to Use This Course
        </h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-foreground-muted">
          Seven simple steps, from registering to earning your certificate.
        </p>
      </section>

      <section className="relative mx-auto max-w-md">
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" aria-hidden="true" />
        <ol className="space-y-6">
          {HOW_TO_STEPS.map((step, i) => (
            <li key={step.title} className="relative flex gap-4">
              <span
                aria-hidden="true"
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-msmk-firstaid bg-surface text-xl"
              >
                {step.icon}
              </span>
              <div className="flex-1 rounded-xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-msmk-firstaid">Step {i + 1}</p>
                <h2 className="mt-0.5 font-[family-name:var(--font-display)] text-base font-bold text-foreground">
                  {step.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">📖 About This Course</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          Mubarak Science Medical Knowledge (MSMK) — Nursing, Self-Care &amp; Family Care — teaches practical
          caregiving skills for you, your family, and your community: first aid and CPR, caring for babies,
          children, elders, and people with special needs, workplace communication, and basic housekeeping.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          It is built mostly from pictures, diagrams, and short videos, because we know reading a lot of text is
          hard for many learners — you should not need to be a strong reader to learn a skill that could save a
          life. Medical content is reviewed by a qualified doctor (MBBS) before this course fully launches.
        </p>
      </section>

      <section className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-6">
        <h2 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">🙏 Acknowledgement</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          This course structure follows the TESDA Caregiving NC II Competency-Based Learning Material, adapted
          for a visual-first, bilingual course for Rohingya refugee learners. Medical and first-aid content is
          based on WHO Basic Emergency Care and IFRC/Red Cross First Aid Guidelines, cited in each module.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          Rohingya (Hanifi script) translations across this course are drafts pending review by a native Rohingya
          speaker — see the notice on every page. Thank you to everyone who reviews and improves this course.
        </p>
      </section>

      <div className="flex justify-center">
        <Button href="/msmk/register">Get Started — Register</Button>
      </div>
    </div>
  );
}
