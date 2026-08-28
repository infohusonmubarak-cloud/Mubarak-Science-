'use server';

import { getSupabaseAnonClient } from '@/lib/supabase/anonClient';
import type { RegistrationInput } from '@/types/msmk';

export interface RegisterResult {
  ok: boolean;
  error?: string;
}

export async function submitRegistration(input: RegistrationInput & { honeypot?: string }): Promise<RegisterResult> {
  // Honeypot — a real visitor never fills this hidden field. Discard
  // silently rather than showing a validation error, matching the pattern
  // used across the sibling site's public forms.
  if (input.honeypot) {
    return { ok: true };
  }

  if (!input.fullName.trim() || !input.email.trim() || !input.phone.trim() || !input.location.trim() || !input.bkashTransactionId.trim()) {
    return { ok: false, error: 'Please fill in every field.' };
  }

  const client = getSupabaseAnonClient();
  if (!client) {
    return {
      ok: false,
      error: 'Registration is not connected yet. Please try again later, or contact us directly to register.',
    };
  }

  const { error } = await client.from('msmk_registrations').insert({
    full_name: input.fullName.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    location: input.location.trim(),
    bkash_transaction_id: input.bkashTransactionId.trim(),
  });

  if (error) {
    return { ok: false, error: 'Something went wrong submitting your registration. Please try again.' };
  }

  return { ok: true };
}
