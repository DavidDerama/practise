import { Note } from "../shared/types";
import { NoteItem } from "./NoteItem";

type NoteListProps = {
  notes: Note[];
};

export const NoteList = ({ notes }: NoteListProps) => {
  const displayedNotes = notes.map((note) => {
    return <NoteItem note={note} />;
  });
  return <ul className="note-list">{displayedNotes}</ul>;
};
