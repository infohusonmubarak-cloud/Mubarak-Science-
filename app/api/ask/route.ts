import { NextResponse, type NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getAnthropicClient } from '@/lib/anthropic/client';
import { getSupabaseServiceClient } from '@/lib/supabase/serviceClient';
import { getAllSubjects, findChapterLocation } from '@/lib/content/getters';
import type { QASubject } from '@/types/storage';

export const maxDuration = 60;

const QA_SUBJECTS: QASubject[] = ['mathematics', 'physics', 'chemistry', 'biology'];
const SUBJECT_LABELS: Record<QASubject, string> = {
  mathematics: 'Mathematics',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
};

// Server-side only — set QA_DAILY_LIMIT in Vercel to change this without a
// redeploy (a plain env var, unlike NEXT_PUBLIC_ ones, is read fresh on
// every request in a Route Handler).
const DAILY_LIMIT = Number(process.env.QA_DAILY_LIMIT) || 20;

const MAX_IMAGE_BYTES = 4 * 1024 * 1024; // ~4MB base64 payload, well under Vercel's request body cap

function buildSystemPrompt(subject: QASubject): string {
  const chapters = getAllSubjects()
    .find((s) => s.slug === subject)
    ?.levels.flatMap((level) => level.chapters.filter((c) => c.status === 'available').map((c) => `${c.slug} — ${c.title}`))
    .join('\n');

  return `You are the homework helper for Mubarak Science, a school revision site covering ${SUBJECT_LABELS[subject]} at A-Level/B-Level/C-Level (roughly high-school level).

A student has asked a ${SUBJECT_LABELS[subject]} question, possibly with a photo of a textbook or worksheet problem attached.

Rules:
1. If the question is genuinely NOT about Mathematics, Physics, Chemistry, or Biology at school level, politely decline and explain this tool only covers those four subjects — do not attempt to answer anyway.
2. Otherwise, answer with EVERY step of working shown, numbered, not just the final result. This is a learning tool — a student should be able to follow and learn from each step, not just copy an answer.
3. Where a diagram, sketch, or graph would help, describe it in words precisely enough that the student could draw it themselves (e.g. axes, labelled points, shape) — you cannot render an actual image.
4. Keep the explanation focused and appropriately levelled for a school student — clear, not padded.
5. At the very end of your answer, on its own line, if (and only if) one of the chapters below is a clear match for this question's topic, output exactly: <chapter_slug>the-slug</chapter_slug> — using one of the exact slugs listed. If nothing matches well, omit this line entirely. Never invent a slug that isn't in this list.

Available ${SUBJECT_LABELS[subject]} chapters (slug — title):
${chapters || '(none published yet)'}`;
}

function extractChapterLink(subject: QASubject, rawAnswer: string) {
  const match = rawAnswer.match(/<chapter_slug>([a-z0-9-]+)<\/chapter_slug>/);
  const answer = rawAnswer.replace(/\s*<chapter_slug>[a-z0-9-]+<\/chapter_slug>\s*$/, '').trim();
  if (!match) return { answer, chapterLink: undefined };

  const location = findChapterLocation(match[1]);
  if (!location || location.subjectSlug !== subject) return { answer, chapterLink: undefined };

  return {
    answer,
    chapterLink: {
      subjectSlug: location.subjectSlug,
      levelSlug: location.levelSlug,
      chapterSlug: location.chapter.slug,
      title: location.chapter.title,
    },
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const subject = typeof body?.subject === 'string' && QA_SUBJECTS.includes(body.subject as QASubject) ? (body.subject as QASubject) : null;
  const question = typeof body?.question === 'string' ? body.question.trim() : '';
  const imageBase64 = typeof body?.imageBase64 === 'string' ? body.imageBase64 : null;
  const imageMediaType = typeof body?.imageMediaType === 'string' ? body.imageMediaType : null;

  if (!subject) {
    return NextResponse.json({ ok: false, error: 'Choose a subject.' }, { status: 400 });
  }
  if (!question && !imageBase64) {
    return NextResponse.json({ ok: false, error: 'Type a question or attach a photo of the problem.' }, { status: 400 });
  }
  if (imageBase64 && imageBase64.length > MAX_IMAGE_BYTES) {
    return NextResponse.json({ ok: false, error: 'That photo is too large — try a closer crop of just the question.' }, { status: 400 });
  }
  if (imageBase64 && (!imageMediaType || !/^image\/(png|jpeg|webp|gif)$/.test(imageMediaType))) {
    return NextResponse.json({ ok: false, error: 'Unsupported image type.' }, { status: 400 });
  }

  // Rate limit — before calling the (billed) Anthropic API at all.
  const serviceClient = getSupabaseServiceClient();
  if (serviceClient) {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
    const today = new Date().toISOString().slice(0, 10);
    const { data: count, error } = await serviceClient.rpc('increment_qa_rate_limit', { key: `${ip}:${today}` });
    if (!error && typeof count === 'number' && count > DAILY_LIMIT) {
      return NextResponse.json(
        { ok: false, error: `You've reached today's limit of ${DAILY_LIMIT} questions. Try again tomorrow.` },
        { status: 429 }
      );
    }
    // If the rate-limit check itself errors (e.g. Supabase briefly down),
    // fail open on the limit rather than blocking a legitimate question —
    // the Anthropic API key itself is still the real cost boundary.
  }

  const client = getAnthropicClient();
  if (!client) {
    return NextResponse.json({ ok: false, error: 'The homework helper is not set up yet.' }, { status: 503 });
  }

  const content: Anthropic.MessageParam['content'] = [];
  if (imageBase64 && imageMediaType) {
    content.push({
      type: 'image',
      source: { type: 'base64', media_type: imageMediaType as 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif', data: imageBase64 },
    });
  }
  content.push({ type: 'text', text: question || 'Please solve the problem shown in the photo.' });

  try {
    const stream = client.messages.stream({
      model: 'claude-opus-5',
      max_tokens: 4096,
      system: buildSystemPrompt(subject),
      messages: [{ role: 'user', content }],
    });
    const response = await stream.finalMessage();

    if (response.stop_reason === 'refusal') {
      return NextResponse.json({ ok: false, error: "This question couldn't be answered — try rephrasing it." }, { status: 200 });
    }

    const textBlock = response.content.find((block): block is Anthropic.TextBlock => block.type === 'text');
    if (!textBlock) {
      return NextResponse.json({ ok: false, error: 'No answer was generated — try again.' }, { status: 500 });
    }

    const { answer, chapterLink } = extractChapterLink(subject, textBlock.text);
    return NextResponse.json({ ok: true, answer, chapterLink });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ ok: false, error: 'The homework helper is busy right now — try again in a minute.' }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json({ ok: false, error: 'Could not get an answer right now.' }, { status: 502 });
    }
    return NextResponse.json({ ok: false, error: 'Something went wrong.' }, { status: 500 });
  }
}
