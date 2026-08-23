import type { Note, NotesState } from '@/types/storage';
import { STORAGE_KEYS } from './keys';
import { readJSON, subscribe, writeJSON } from './client';

const DEFAULT_STATE: NotesState = { schemaVersion: 1, notes: [] };

function randomId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** All notes, as a stable reference (unchanged between calls unless the store changed) — used as a `useSyncExternalStore` snapshot. */
export function getAllNotes(): Note[] {
  return readJSON(STORAGE_KEYS.notes, DEFAULT_STATE).notes;
}

export function getNotes(conceptSlug: string): Note[] {
  return getAllNotes().filter((note) => note.conceptSlug === conceptSlug);
}

/** Always the fixed empty default — see `getProgressServerSnapshot` for why. */
export function getAllNotesServerSnapshot(): Note[] {
  return DEFAULT_STATE.notes;
}

export function addNote(conceptSlug: string, text: string): Note {
  const state = readJSON(STORAGE_KEYS.notes, DEFAULT_STATE);
  const now = new Date().toISOString();
  const note: Note = { id: randomId(), conceptSlug, text, createdAt: now, updatedAt: now };
  writeJSON(STORAGE_KEYS.notes, { ...state, notes: [...state.notes, note] });
  return note;
}

export function updateNote(id: string, text: string): void {
  const state = readJSON(STORAGE_KEYS.notes, DEFAULT_STATE);
  const notes = state.notes.map((note) =>
    note.id === id ? { ...note, text, updatedAt: new Date().toISOString() } : note
  );
  writeJSON(STORAGE_KEYS.notes, { ...state, notes });
}

export function deleteNote(id: string): void {
  const state = readJSON(STORAGE_KEYS.notes, DEFAULT_STATE);
  writeJSON(STORAGE_KEYS.notes, { ...state, notes: state.notes.filter((note) => note.id !== id) });
}

export function subscribeNotes(listener: () => void): () => void {
  return subscribe(STORAGE_KEYS.notes, listener);
}
