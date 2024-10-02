import { Note } from "../shared/types";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  return <li>{note.text}</li>;
};
