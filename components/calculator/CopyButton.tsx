'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API can be unavailable (older Android WebViews, insecure
      // contexts) — fail quietly rather than breaking the rest of the page.
    }
  }

  return (
    <Button type="button" variant="secondary" size="sm" onClick={onCopy} ariaLabel="Copy answer">
      {copied ? 'Copied ✓' : '📋 Copy answer'}
    </Button>
  );
}
