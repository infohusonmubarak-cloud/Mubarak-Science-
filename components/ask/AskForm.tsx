'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useQuestionHistory } from '@/hooks/useQuestionHistory';
import { resizeImageForUpload } from '@/lib/utils/resizeImage';
import type { QASubject, QuestionHistoryEntry } from '@/types/storage';

const SUBJECTS: { slug: QASubject; label: string }[] = [
  { slug: 'mathematics', label: 'Mathematics' },
  { slug: 'physics', label: 'Physics' },
  { slug: 'chemistry', label: 'Chemistry' },
  { slug: 'biology', label: 'Biology' },
];

interface AskResponse {
  ok: boolean;
  error?: string;
  answer?: string;
  chapterLink?: { subjectSlug: string; levelSlug: string; chapterSlug: string; title: string };
}

function AnswerCard({ answer, chapterLink }: { answer: string; chapterLink?: QuestionHistoryEntry['chapterLink'] }) {
  return (
    <div className="rounded-xl border border-brand bg-brand-soft/30 p-4">
      <p className="whitespace-pre-wrap text-sm text-foreground">{answer}</p>
      {chapterLink && (
        <Link
          href={`/subjects/${chapterLink.subjectSlug}/${chapterLink.levelSlug}/${chapterLink.chapterSlug}`}
          className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
        >
          Read the theory in {chapterLink.title} →
        </Link>
      )}
    </div>
  );
}

function HistoryEntry({ entry }: { entry: QuestionHistoryEntry }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface p-3">
      <button type="button" onClick={() => setExpanded((e) => !e)} className="flex w-full items-start justify-between gap-2 text-left">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-brand">{entry.subject}</p>
          <p className="truncate text-sm text-foreground">{entry.questionText || (entry.hadImage ? '(photo question)' : '')}</p>
        </div>
        <span className="shrink-0 text-xs text-foreground-muted">{new Date(entry.askedAt).toLocaleDateString()}</span>
      </button>
      {expanded && <div className="mt-2"><AnswerCard answer={entry.answer} chapterLink={entry.chapterLink} /></div>}
    </div>
  );
}

export function AskForm() {
  const { questions, addQuestion, clear } = useQuestionHistory();
  const [subject, setSubject] = useState<QASubject>('mathematics');
  const [question, setQuestion] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ answer: string; chapterLink?: QuestionHistoryEntry['chapterLink'] } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  }

  function clearImage() {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim() && !imageFile) {
      setError('Type a question or attach a photo of the problem.');
      return;
    }
    setBusy(true);
    setError(null);
    setResult(null);

    try {
      let imageBase64: string | undefined;
      let imageMediaType: string | undefined;
      if (imageFile) {
        const resized = await resizeImageForUpload(imageFile);
        imageBase64 = resized.base64;
        imageMediaType = resized.mediaType;
      }

      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, question: question.trim(), imageBase64, imageMediaType }),
      });
      const data: AskResponse = await res.json();

      if (!data.ok || !data.answer) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      setResult({ answer: data.answer, chapterLink: data.chapterLink });
      addQuestion({
        id: crypto.randomUUID(),
        subject,
        questionText: question.trim(),
        hadImage: Boolean(imageFile),
        answer: data.answer,
        chapterLink: data.chapterLink,
        askedAt: new Date().toISOString(),
      });
      setQuestion('');
      clearImage();
    } catch {
      setError('Could not reach the homework helper — check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-5">
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setSubject(s.slug)}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                subject === s.slug ? 'border-brand bg-brand-soft text-brand-strong' : 'border-border text-foreground-muted hover:bg-surface-muted'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows={4}
          className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base text-foreground"
        />

        <div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground hover:bg-surface-muted">
            📷 {imageFile ? 'Change photo' : 'Attach a photo of the problem'}
            <input ref={fileInputRef} type="file" accept="image/*" capture="environment" onChange={onFileChange} className="hidden" />
          </label>
          {imagePreview && (
            <div className="mt-2 flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, not a served asset */}
              <img src={imagePreview} alt="Selected problem" className="h-20 w-20 rounded-lg border border-border object-cover" />
              <button type="button" onClick={clearImage} className="text-xs font-medium text-danger underline">
                Remove
              </button>
            </div>
          )}
        </div>

        {error && <p className="text-sm font-medium text-danger">{error}</p>}

        <Button type="submit" disabled={busy}>
          {busy ? 'Working it out…' : 'Get step-by-step answer'}
        </Button>
      </form>

      {result && <AnswerCard answer={result.answer} chapterLink={result.chapterLink} />}

      {questions.length > 0 && (
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-foreground">Your recent questions</h2>
            <button type="button" onClick={clear} className="text-xs font-medium text-foreground-muted underline">
              Clear history
            </button>
          </div>
          <div className="mt-3 space-y-2">
            {questions.slice(0, 10).map((entry) => (
              <HistoryEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
