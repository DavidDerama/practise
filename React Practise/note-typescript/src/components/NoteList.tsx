import { useMemo } from "react";
import { Note } from "../shared/types";
import { NoteItem } from "./NoteItem";

type NoteListProps = {
  notes: Note[];
};

export const NoteList = ({ notes }: NoteListProps) => {
  const displayedNotes = useMemo(() => {
    const notesEl = notes.map((note) => {
      return <NoteItem note={note} key={note.id} />;
    });
    return notesEl;
  }, [notes]);

  return <ul className="note-list">{displayedNotes}</ul>;
};
