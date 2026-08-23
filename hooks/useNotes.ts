'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { addNote, deleteNote, getAllNotes, getAllNotesServerSnapshot, subscribeNotes, updateNote } from '@/lib/storage/api';

export function useNotes(conceptSlug: string) {
  const allNotes = useSyncExternalStore(subscribeNotes, getAllNotes, getAllNotesServerSnapshot);
  const notes = useMemo(() => allNotes.filter((note) => note.conceptSlug === conceptSlug), [allNotes, conceptSlug]);

  return {
    notes,
    add: (text: string) => addNote(conceptSlug, text),
    update: (id: string, text: string) => updateNote(id, text),
    remove: (id: string) => deleteNote(id),
  };
}
