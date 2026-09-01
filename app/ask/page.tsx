import type { Metadata } from 'next';
import { AskForm } from '@/components/ask/AskForm';

export const metadata: Metadata = { title: 'Ask a Question' };

export default function AskPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Ask a Question</h1>
        <p className="mt-1 text-sm text-foreground-muted">
          Stuck on a Maths, Physics, Chemistry, or Biology problem? Type it in or attach a photo, and get a full
          step-by-step worked answer — not just the final number.
        </p>
      </div>
      <AskForm />
    </div>
  );
}
