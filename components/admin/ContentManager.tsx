'use client';

import { useCallback, useEffect, useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/browserClient';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import type { Database } from '@/types/supabase';

type Subject = Database['public']['Tables']['subjects']['Row'];
type Level = Database['public']['Tables']['levels']['Row'];
type Chapter = Database['public']['Tables']['chapters']['Row'];
type Topic = Database['public']['Tables']['topics']['Row'];
type Section = Database['public']['Tables']['sections']['Row'];

type PublishStatus = 'available' | 'coming-soon';

function StatusToggle({ status, onToggle }: { status: PublishStatus; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="shrink-0"
      title={status === 'available' ? 'Click to unpublish' : 'Click to publish'}
    >
      <Badge tone={status === 'available' ? 'success' : 'warning'}>
        {status === 'available' ? 'Published' : 'Draft'}
      </Badge>
    </button>
  );
}

function ReorderButtons({ onUp, onDown, disableUp, disableDown }: { onUp: () => void; onDown: () => void; disableUp: boolean; disableDown: boolean }) {
  return (
    <div className="flex flex-col gap-0.5">
      <button type="button" onClick={onUp} disabled={disableUp} className="text-xs leading-none text-foreground-muted disabled:opacity-30" aria-label="Move up">
        ▲
      </button>
      <button type="button" onClick={onDown} disabled={disableDown} className="text-xs leading-none text-foreground-muted disabled:opacity-30" aria-label="Move down">
        ▼
      </button>
    </div>
  );
}

// --- Subjects ---------------------------------------------------------

function SubjectForm({ onSaved }: { onSaved: () => void }) {
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [accentColor, setAccentColor] = useState('#2563eb');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client || !slug.trim() || !name.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('subjects').insert({
      slug: slug.trim().toLowerCase(),
      name: name.trim(),
      short_description: shortDescription.trim(),
      accent_color: accentColor,
    });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That slug is already used.' : 'Could not create subject.');
      return;
    }
    setSlug('');
    setName('');
    setShortDescription('');
    onSaved();
  }

  return (
    <div className="rounded-xl border border-dashed border-border p-4">
      <p className="text-sm font-medium text-foreground">Add a new subject</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <input placeholder="Slug (e.g. geology)" value={slug} onChange={(e) => setSlug(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Name (e.g. Geology)" value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Short description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm sm:col-span-2" />
        <label className="flex items-center gap-2 text-sm text-foreground-muted">
          Accent color
          <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="h-8 w-12 rounded border border-border" />
        </label>
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
      <Button size="sm" className="mt-3" onClick={save} disabled={busy || !slug.trim() || !name.trim()}>
        {busy ? 'Adding…' : 'Add Subject'}
      </Button>
    </div>
  );
}

function SubjectRow({ subject, onChanged, onManage }: { subject: Subject; onChanged: () => void; onManage: () => void }) {
  const client = getSupabaseBrowserClient();

  async function toggleStatus() {
    if (!client) return;
    await client.from('subjects').update({ status: subject.status === 'available' ? 'coming-soon' : 'available' }).eq('slug', subject.slug);
    onChanged();
  }

  async function remove() {
    if (!client) return;
    if (!confirm(`Delete "${subject.name}" and everything inside it (levels, chapters, topics, sections)? This can't be undone.`)) return;
    await client.from('subjects').delete().eq('slug', subject.slug);
    onChanged();
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-foreground">{subject.name}</p>
        <p className="truncate text-xs text-foreground-muted">{subject.short_description || subject.slug}</p>
      </div>
      <StatusToggle status={subject.status} onToggle={toggleStatus} />
      <Button size="sm" variant="secondary" onClick={onManage}>
        Manage Levels
      </Button>
      <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
        Delete
      </button>
    </div>
  );
}

// --- Levels -------------------------------------------------------------

function LevelForm({ subjectSlug, onSaved }: { subjectSlug: string; onSaved: () => void }) {
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client || !slug.trim() || !name.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('levels').insert({ subject_slug: subjectSlug, slug: slug.trim().toLowerCase(), name: name.trim() });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That slug already exists for this subject.' : 'Could not create level.');
      return;
    }
    setSlug('');
    setName('');
    onSaved();
  }

  return (
    <div className="rounded-xl border border-dashed border-border p-4">
      <p className="text-sm font-medium text-foreground">Add a new level</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <input placeholder="Slug (e.g. a-level)" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-40 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Name (e.g. A-Level)" value={name} onChange={(e) => setName(e.target.value)} className="w-40 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <Button size="sm" onClick={save} disabled={busy || !slug.trim() || !name.trim()}>
          {busy ? 'Adding…' : 'Add Level'}
        </Button>
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}

function LevelRow({ level, onChanged, onManage }: { level: Level; onChanged: () => void; onManage: () => void }) {
  const client = getSupabaseBrowserClient();

  async function toggleStatus() {
    if (!client) return;
    await client.from('levels').update({ status: level.status === 'available' ? 'coming-soon' : 'available' }).eq('id', level.id);
    onChanged();
  }

  async function remove() {
    if (!client) return;
    if (!confirm(`Delete "${level.name}" and everything inside it?`)) return;
    await client.from('levels').delete().eq('id', level.id);
    onChanged();
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-foreground">{level.name}</p>
        <p className="truncate text-xs text-foreground-muted">{level.slug}</p>
      </div>
      <StatusToggle status={level.status} onToggle={toggleStatus} />
      <Button size="sm" variant="secondary" onClick={onManage}>
        Manage Chapters
      </Button>
      <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
        Delete
      </button>
    </div>
  );
}

// --- Chapters -------------------------------------------------------------

function ChapterForm({ levelId, nextNumber, onSaved }: { levelId: string; nextNumber: number; onSaved: () => void }) {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState(nextNumber);
  const [blurb, setBlurb] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client || !slug.trim() || !title.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('chapters').insert({
      level_id: levelId,
      slug: slug.trim().toLowerCase(),
      title: title.trim(),
      number,
      blurb: blurb.trim(),
      order_index: number,
    });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That slug is already used somewhere in the site (chapter slugs must be globally unique).' : 'Could not create chapter.');
      return;
    }
    setSlug('');
    setTitle('');
    setBlurb('');
    onSaved();
  }

  return (
    <div className="rounded-xl border border-dashed border-border p-4">
      <p className="text-sm font-medium text-foreground">Add a new chapter</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <input placeholder="Slug (globally unique, e.g. thermodynamics)" value={slug} onChange={(e) => setSlug(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm sm:col-span-2" />
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input type="number" placeholder="Number" value={number} onChange={(e) => setNumber(Number(e.target.value))} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Blurb" value={blurb} onChange={(e) => setBlurb(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm sm:col-span-2" />
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
      <Button size="sm" className="mt-3" onClick={save} disabled={busy || !slug.trim() || !title.trim()}>
        {busy ? 'Adding…' : 'Add Chapter'}
      </Button>
    </div>
  );
}

function ChapterRow({
  chapter,
  onChanged,
  onManage,
  onMove,
  disableUp,
  disableDown,
}: {
  chapter: Chapter;
  onChanged: () => void;
  onManage: () => void;
  onMove: (direction: 'up' | 'down') => void;
  disableUp: boolean;
  disableDown: boolean;
}) {
  const client = getSupabaseBrowserClient();

  async function toggleStatus() {
    if (!client) return;
    await client.from('chapters').update({ status: chapter.status === 'available' ? 'coming-soon' : 'available' }).eq('id', chapter.id);
    onChanged();
  }

  async function remove() {
    if (!client) return;
    if (!confirm(`Delete chapter "${chapter.title}" and everything inside it?`)) return;
    await client.from('chapters').delete().eq('id', chapter.id);
    onChanged();
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <ReorderButtons onUp={() => onMove('up')} onDown={() => onMove('down')} disableUp={disableUp} disableDown={disableDown} />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-foreground">
          Ch. {chapter.number} — {chapter.title}
        </p>
        <p className="truncate text-xs text-foreground-muted">{chapter.slug}</p>
      </div>
      <StatusToggle status={chapter.status} onToggle={toggleStatus} />
      <Button size="sm" variant="secondary" onClick={onManage}>
        Manage Topics
      </Button>
      <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
        Delete
      </button>
    </div>
  );
}

// --- Topics -------------------------------------------------------------

function TopicForm({ chapterId, onSaved }: { chapterId: string; onSaved: () => void }) {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client || !slug.trim() || !title.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('topics').insert({ chapter_id: chapterId, slug: slug.trim().toLowerCase(), title: title.trim() });
    setBusy(false);
    if (insertError) {
      setError('Could not create topic (slug may already exist in this chapter).');
      return;
    }
    setSlug('');
    setTitle('');
    onSaved();
  }

  return (
    <div className="rounded-xl border border-dashed border-border p-4">
      <p className="text-sm font-medium text-foreground">Add a new topic</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <input placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-40 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-52 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <Button size="sm" onClick={save} disabled={busy || !slug.trim() || !title.trim()}>
          {busy ? 'Adding…' : 'Add Topic'}
        </Button>
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}

function TopicRow({ topic, onChanged, onManage }: { topic: Topic; onChanged: () => void; onManage: () => void }) {
  async function remove() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    if (!confirm(`Delete topic "${topic.title}" and its sections?`)) return;
    await client.from('topics').delete().eq('id', topic.id);
    onChanged();
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-foreground">{topic.title}</p>
        <p className="truncate text-xs text-foreground-muted">{topic.slug}</p>
      </div>
      <Button size="sm" variant="secondary" onClick={onManage}>
        Manage Sections
      </Button>
      <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
        Delete
      </button>
    </div>
  );
}

// --- Sections (= Concepts) -------------------------------------------------

interface SectionContentForm {
  simpleExplanation: string;
  whyItMatters: string;
  commonMistake: string;
  quickReview: string;
  realLifeExampleTitle: string;
  realLifeExampleScenario: string;
  realLifeExampleExplanation: string;
  formulaSlug: string;
  advancedJson: string;
}

function formFromContent(content: Record<string, unknown>): SectionContentForm {
  const rle = (content.realLifeExample ?? {}) as { title?: string; scenario?: string; explanation?: string };
  const advanced: Record<string, unknown> = {};
  for (const key of ['diagram', 'workedExample', 'practiceQuestions', 'relatedConcepts']) {
    if (key in content) advanced[key] = content[key];
  }
  return {
    simpleExplanation: typeof content.simpleExplanation === 'string' ? content.simpleExplanation : '',
    whyItMatters: typeof content.whyItMatters === 'string' ? content.whyItMatters : '',
    commonMistake: typeof content.commonMistake === 'string' ? content.commonMistake : '',
    quickReview: Array.isArray(content.quickReview) ? (content.quickReview as string[]).join('\n') : '',
    realLifeExampleTitle: rle.title ?? '',
    realLifeExampleScenario: rle.scenario ?? '',
    realLifeExampleExplanation: rle.explanation ?? '',
    formulaSlug: typeof content.formulaSlug === 'string' ? content.formulaSlug : '',
    advancedJson: JSON.stringify(advanced, null, 2),
  };
}

function SectionEditor({ section, onSaved, onCancel }: { section: Section; onSaved: () => void; onCancel: () => void }) {
  const [form, setForm] = useState<SectionContentForm>(() => formFromContent(section.content));
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function set<K extends keyof SectionContentForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    let advanced: Record<string, unknown>;
    try {
      advanced = form.advancedJson.trim() ? JSON.parse(form.advancedJson) : {};
    } catch {
      setError('Advanced JSON is not valid — fix the syntax before saving.');
      return;
    }
    setBusy(true);
    setError(null);
    const content: Record<string, unknown> = {
      simpleExplanation: form.simpleExplanation,
      whyItMatters: form.whyItMatters,
      commonMistake: form.commonMistake,
      quickReview: form.quickReview.split('\n').map((s) => s.trim()).filter(Boolean),
      realLifeExample: {
        title: form.realLifeExampleTitle,
        scenario: form.realLifeExampleScenario,
        explanation: form.realLifeExampleExplanation,
      },
      ...(form.formulaSlug.trim() ? { formulaSlug: form.formulaSlug.trim() } : {}),
      ...advanced,
    };
    const { error: updateError } = await client.from('sections').update({ content }).eq('id', section.id);
    setBusy(false);
    if (updateError) {
      setError('Could not save content.');
      return;
    }
    onSaved();
  }

  return (
    <div className="space-y-3 rounded-xl border border-brand bg-brand-soft/30 p-4">
      <p className="text-sm font-semibold text-foreground">Editing content for &ldquo;{section.title}&rdquo;</p>
      <label className="block text-sm">
        <span className="font-medium text-foreground-muted">Simple explanation</span>
        <textarea rows={3} value={form.simpleExplanation} onChange={(e) => set('simpleExplanation', e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-foreground-muted">Why it matters</span>
        <textarea rows={2} value={form.whyItMatters} onChange={(e) => set('whyItMatters', e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-foreground-muted">Common mistake</span>
        <textarea rows={2} value={form.commonMistake} onChange={(e) => set('commonMistake', e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-foreground-muted">Quick review (one point per line)</span>
        <textarea rows={3} value={form.quickReview} onChange={(e) => set('quickReview', e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      </label>
      <div className="grid gap-2 sm:grid-cols-3">
        <input placeholder="Real-life example: title" value={form.realLifeExampleTitle} onChange={(e) => set('realLifeExampleTitle', e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Scenario" value={form.realLifeExampleScenario} onChange={(e) => set('realLifeExampleScenario', e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Explanation" value={form.realLifeExampleExplanation} onChange={(e) => set('realLifeExampleExplanation', e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      </div>
      <input placeholder="Formula slug (optional, links to Formula Library)" value={form.formulaSlug} onChange={(e) => set('formulaSlug', e.target.value)} className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
      <label className="block text-sm">
        <span className="font-medium text-foreground-muted">
          Advanced (JSON) — diagram, workedExample, practiceQuestions, relatedConcepts. Leave as <code>{'{}'}</code> if not needed; these
          need matching code-side keys (e.g. a diagram component name), so this is meant for whoever built the site, not a first pass.
        </span>
        <textarea rows={6} value={form.advancedJson} onChange={(e) => set('advancedJson', e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-xs" />
      </label>
      {error && <p className="text-xs font-medium text-danger">{error}</p>}
      <div className="flex gap-2">
        <Button size="sm" onClick={save} disabled={busy}>
          {busy ? 'Saving…' : 'Save Content'}
        </Button>
        <Button size="sm" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

function SectionForm({ topicId, onSaved }: { topicId: string; onSaved: () => void }) {
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    const client = getSupabaseBrowserClient();
    if (!client || !slug.trim() || !title.trim()) return;
    setBusy(true);
    setError(null);
    const { error: insertError } = await client.from('sections').insert({
      topic_id: topicId,
      slug: slug.trim().toLowerCase(),
      title: title.trim(),
      difficulty: difficulty || null,
    });
    setBusy(false);
    if (insertError) {
      setError(insertError.message.includes('duplicate') ? 'That slug is already used somewhere in the site (section slugs must be globally unique).' : 'Could not create section.');
      return;
    }
    setSlug('');
    setTitle('');
    setDifficulty('');
    onSaved();
  }

  return (
    <div className="rounded-xl border border-dashed border-border p-4">
      <p className="text-sm font-medium text-foreground">Add a new section</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        <input placeholder="Slug (globally unique)" value={slug} onChange={(e) => setSlug(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm" />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as typeof difficulty)} className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm">
          <option value="">Difficulty (optional)</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {error && <p className="mt-2 text-xs font-medium text-danger">{error}</p>}
      <Button size="sm" className="mt-3" onClick={save} disabled={busy || !slug.trim() || !title.trim()}>
        {busy ? 'Adding…' : 'Add Section'}
      </Button>
    </div>
  );
}

function SectionRow({ section, onChanged }: { section: Section; onChanged: () => void }) {
  const [editing, setEditing] = useState(false);

  async function toggleStatus() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    await client.from('sections').update({ status: section.status === 'available' ? 'coming-soon' : 'available' }).eq('id', section.id);
    onChanged();
  }

  async function remove() {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    if (!confirm(`Delete section "${section.title}"?`)) return;
    await client.from('sections').delete().eq('id', section.id);
    onChanged();
  }

  if (editing) {
    return (
      <SectionEditor
        section={section}
        onCancel={() => setEditing(false)}
        onSaved={() => {
          setEditing(false);
          onChanged();
        }}
      />
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-surface p-3">
      <div className="min-w-0 flex-1">
        <p className="font-medium text-foreground">{section.title}</p>
        <p className="truncate text-xs text-foreground-muted">
          {section.slug}
          {section.difficulty ? ` • ${section.difficulty}` : ''}
        </p>
      </div>
      <StatusToggle status={section.status} onToggle={toggleStatus} />
      <Button size="sm" variant="secondary" onClick={() => setEditing(true)}>
        Edit Content
      </Button>
      <button type="button" onClick={remove} className="text-xs font-medium text-danger underline">
        Delete
      </button>
    </div>
  );
}

// --- Root manager: drill-down state -----------------------------------

export function ContentManager() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [levels, setLevels] = useState<Level[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloadToken, setReloadToken] = useState(0);
  const refresh = useCallback(() => setReloadToken((t) => t + 1), []);

  // None of the four effects below clear their list when the selection
  // above them becomes null — that's safe, not an oversight: each list is
  // only ever rendered while its own `selected*` is set (see the JSX
  // below), and in this UI you can only reach a *different* sibling by
  // going back through the parent list first (breadcrumb), which always
  // passes through `selected* === null` on the way. So a stale list is
  // never actually shown; skipping the clear just avoids a synchronous
  // setState in the effect body.

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    client
      .from('subjects')
      .select('*')
      .order('order_index', { ascending: true })
      .then(({ data }) => {
        setSubjects((data ?? []) as Subject[]);
        setLoading(false);
      });
  }, [reloadToken]);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client || !selectedSubject) return;
    client
      .from('levels')
      .select('*')
      .eq('subject_slug', selectedSubject.slug)
      .order('order_index', { ascending: true })
      .then(({ data }) => setLevels((data ?? []) as Level[]));
  }, [selectedSubject, reloadToken]);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client || !selectedLevel) return;
    client
      .from('chapters')
      .select('*')
      .eq('level_id', selectedLevel.id)
      .order('order_index', { ascending: true })
      .then(({ data }) => setChapters((data ?? []) as Chapter[]));
  }, [selectedLevel, reloadToken]);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client || !selectedChapter) return;
    client
      .from('topics')
      .select('*')
      .eq('chapter_id', selectedChapter.id)
      .order('order_index', { ascending: true })
      .then(({ data }) => setTopics((data ?? []) as Topic[]));
  }, [selectedChapter, reloadToken]);

  useEffect(() => {
    const client = getSupabaseBrowserClient();
    if (!client || !selectedTopic) return;
    client
      .from('sections')
      .select('*')
      .eq('topic_id', selectedTopic.id)
      .order('order_index', { ascending: true })
      .then(({ data }) => setSections((data ?? []) as Section[]));
  }, [selectedTopic, reloadToken]);

  async function moveChapter(chapter: Chapter, direction: 'up' | 'down') {
    const client = getSupabaseBrowserClient();
    if (!client) return;
    const index = chapters.findIndex((c) => c.id === chapter.id);
    const swapWith = direction === 'up' ? chapters[index - 1] : chapters[index + 1];
    if (!swapWith) return;
    await Promise.all([
      client.from('chapters').update({ order_index: swapWith.order_index }).eq('id', chapter.id),
      client.from('chapters').update({ order_index: chapter.order_index }).eq('id', swapWith.id),
    ]);
    refresh();
  }

  const breadcrumb = [
    { label: 'Subjects', onClick: () => { setSelectedSubject(null); setSelectedLevel(null); setSelectedChapter(null); setSelectedTopic(null); } },
    selectedSubject && { label: selectedSubject.name, onClick: () => { setSelectedLevel(null); setSelectedChapter(null); setSelectedTopic(null); } },
    selectedLevel && { label: selectedLevel.name, onClick: () => { setSelectedChapter(null); setSelectedTopic(null); } },
    selectedChapter && { label: selectedChapter.title, onClick: () => setSelectedTopic(null) },
    selectedTopic && { label: selectedTopic.title, onClick: () => {} },
  ].filter(Boolean) as { label: string; onClick: () => void }[];

  if (loading) return <p className="text-sm text-foreground-muted">Loading…</p>;

  return (
    <div className="space-y-4">
      <nav className="flex flex-wrap items-center gap-1 text-sm text-foreground-muted">
        {breadcrumb.map((crumb, i) => (
          <span key={crumb.label} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            <button type="button" onClick={crumb.onClick} className="hover:text-foreground hover:underline">
              {crumb.label}
            </button>
          </span>
        ))}
      </nav>

      {!selectedSubject && (
        <div className="space-y-3">
          {subjects.map((s) => (
            <SubjectRow key={s.slug} subject={s} onChanged={refresh} onManage={() => setSelectedSubject(s)} />
          ))}
          {subjects.length === 0 && <p className="text-sm text-foreground-muted">No subjects yet.</p>}
          <SubjectForm onSaved={refresh} />
        </div>
      )}

      {selectedSubject && !selectedLevel && (
        <div className="space-y-3">
          {levels.map((l) => (
            <LevelRow key={l.id} level={l} onChanged={refresh} onManage={() => setSelectedLevel(l)} />
          ))}
          {levels.length === 0 && <p className="text-sm text-foreground-muted">No levels yet for {selectedSubject.name}.</p>}
          <LevelForm subjectSlug={selectedSubject.slug} onSaved={refresh} />
        </div>
      )}

      {selectedLevel && !selectedChapter && (
        <div className="space-y-3">
          {chapters.map((c, i) => (
            <ChapterRow
              key={c.id}
              chapter={c}
              onChanged={refresh}
              onManage={() => setSelectedChapter(c)}
              onMove={(direction) => moveChapter(c, direction)}
              disableUp={i === 0}
              disableDown={i === chapters.length - 1}
            />
          ))}
          {chapters.length === 0 && <p className="text-sm text-foreground-muted">No chapters yet for {selectedLevel.name}.</p>}
          <ChapterForm levelId={selectedLevel.id} nextNumber={chapters.length + 1} onSaved={refresh} />
        </div>
      )}

      {selectedChapter && !selectedTopic && (
        <div className="space-y-3">
          {topics.map((t) => (
            <TopicRow key={t.id} topic={t} onChanged={refresh} onManage={() => setSelectedTopic(t)} />
          ))}
          {topics.length === 0 && <p className="text-sm text-foreground-muted">No topics yet for {selectedChapter.title}.</p>}
          <TopicForm chapterId={selectedChapter.id} onSaved={refresh} />
        </div>
      )}

      {selectedTopic && (
        <div className="space-y-3">
          {sections.map((s) => (
            <SectionRow key={s.id} section={s} onChanged={refresh} />
          ))}
          {sections.length === 0 && <p className="text-sm text-foreground-muted">No sections yet for {selectedTopic.title}.</p>}
          <SectionForm topicId={selectedTopic.id} onSaved={refresh} />
        </div>
      )}
    </div>
  );
}
