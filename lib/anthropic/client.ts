// Server-only Anthropic client for the Ask-a-Question homework helper.
// ANTHROPIC_API_KEY has no NEXT_PUBLIC_ prefix, so Next.js never includes
// it in a client bundle — import this only from a Route Handler, same
// rule as lib/supabase/serviceClient.ts.

import Anthropic from '@anthropic-ai/sdk';

export const anthropicConfigured = Boolean(process.env.ANTHROPIC_API_KEY);

let cached: Anthropic | null = null;

export function getAnthropicClient(): Anthropic | null {
  if (!anthropicConfigured) return null;
  if (!cached) cached = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return cached;
}
