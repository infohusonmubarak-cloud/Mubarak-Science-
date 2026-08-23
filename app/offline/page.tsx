import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = { title: "You're offline" };

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <span aria-hidden="true" className="text-4xl">📡</span>
      <h1 className="text-xl font-bold text-foreground">You&rsquo;re offline</h1>
      <p className="max-w-sm text-sm text-foreground-muted">
        This page hasn&rsquo;t been saved for offline use yet. Pages you&rsquo;ve already visited should still
        open — try going back, or reconnect and try again.
      </p>
      <Button href="/">Go to Home</Button>
    </div>
  );
}
