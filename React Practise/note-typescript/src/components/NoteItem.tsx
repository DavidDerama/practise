import { useContext, useRef, useEffect } from "react";
import { Note } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { selectNote, editNote } = useContext(NotesContext) ?? {};

  if (!selectNote) {
    throw new Error("selectNote is not available");
  }

  if (!editNote) {
    throw new Error("editNote is not available");
  }

  useEffect(() => {
    if (note.isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [note.isEditing]);

  return (
    <li className={`noteitem ${note.isSelected && "selected"}`}>
      <input
        type="text"
        defaultValue={note.text}
        disabled={!note.isEditing}
        ref={inputRef}
      />
      <div className="noteitem--buttons">
        {!note.isEditing ? (
          <>
            {!note.isSelected && (
              <button onClick={() => editNote(note.id)}>Edit</button>
            )}
            <button onClick={() => selectNote(note.id)}>
              {note.isSelected ? "Cancel" : "Select"}
            </button>
          </>
        ) : (
          <>
            <button>Save</button>
            <button onClick={() => editNote(note.id)}>Cancel</button>
          </>
        )}
      </div>
    </li>
  );
};
