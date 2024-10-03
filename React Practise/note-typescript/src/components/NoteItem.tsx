import { useContext } from "react";
import { Note } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const { editNote } = useContext(NotesContext);

  return (
    <li className={`noteitem ${note.isSelected && "selected"}`}>
      <p>
        {note.text} {note.id}
      </p>
      <div className="noteitem--buttons">
        <button>Edit</button>
        <button onClick={() => editNote(note.id)}>
          {note.isSelected ? "Unselect" : "Select"}
        </button>
      </div>
    </li>
  );
};
