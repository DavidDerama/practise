import { useContext, useRef, useEffect, useState } from "react";
import { Note } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

type EditNote = {
  text: string;
  id: string;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const [noteValue, setNoteValue] = useState<EditNote>({
    id: note.id,
    text: note.text,
  });
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

  function editNoteValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNoteValue((prev) => ({
      ...prev,
      text: value,
    }));
  }

  function saveNotesChanges(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefaultI();
  }

  return (
    <li className={`noteitem ${note.isSelected && "selected"}`}>
      <form>
        <input
          name={note.id}
          type="text"
          defaultValue={noteValue.text}
          disabled={!note.isEditing}
          ref={inputRef}
          onChange={editNoteValue}
        />
      </form>
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
