import { useContext } from "react";
import { Note } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const { editNote } = useContext(NotesContext);

  return (
    <li className="noteitem">
      <p>
        {note.text} {note.id}
      </p>
      <div className="noteitem--buttons">
        <button onClick={editNote}>Edit</button>
        <button>Select</button>
      </div>
    </li>
  );
};
