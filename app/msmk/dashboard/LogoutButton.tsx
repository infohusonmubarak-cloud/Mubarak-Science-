'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="secondary"
      size="sm"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          await fetch('/api/msmk/logout', { method: 'POST' });
          router.refresh();
        })
      }
    >
      {isPending ? 'Logging out…' : 'Log out'}
    </Button>
  );
}
