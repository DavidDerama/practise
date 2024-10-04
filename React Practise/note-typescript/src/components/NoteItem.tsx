import { useContext } from "react";
import { Note } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const { selectNote, isEditing } = useContext(NotesContext) ?? {};

  if (!selectNote) {
    throw new Error("selectNote is not available");
  }

  return (
    <li className={`noteitem ${note.isSelected && "selected"}`}>
      <p>{note.text}</p>
      <div className="noteitem--buttons">
        {!note.isSelected && <button>Edit</button>}
        <button onClick={() => selectNote(note.id)}>
          {note.isSelected ? "Cancel" : "Select"}
        </button>
      </div>
    </li>
  );
};
