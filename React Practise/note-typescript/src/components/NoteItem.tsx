import { useContext, useRef, useEffect, useState } from "react";
import { Note, EditNote } from "../shared/types";
import { NotesContext } from "../App";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  const [noteValue, setNoteValue] = useState<EditNote>({
    id: note.id,
    text: note.text,
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { selectNote, editNote, changeNoteChanges } =
    useContext(NotesContext) ?? {};

  if (!selectNote) {
    throw new Error("selectNote is not available");
  }

  if (!editNote) {
    throw new Error("editNote is not available");
  }
  if (!changeNoteChanges) {
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
    e.preventDefault();
    console.log("rewaf");
  }

  return (
    <li>
      <form
        className={`noteitem ${note.isSelected && "selected"}`}
        onSubmit={saveNotesChanges}
      >
        <input
          name={note.id}
          type="text"
          defaultValue={noteValue.text}
          disabled={!note.isEditing}
          ref={inputRef}
          onChange={editNoteValue}
        />
        <div className="noteitem--buttons">
          {!note.isEditing ? (
            <>
              {!note.isSelected && (
                <button onClick={() => editNote(note.id)} type="button">
                  Edit
                </button>
              )}
              <button onClick={() => selectNote(note.id)} type="button">
                {note.isSelected ? "Cancel" : "Select"}
              </button>
            </>
          ) : (
            <>
              <button type="submit">Save</button>
              <button onClick={() => editNote(note.id)} type="button">
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </li>
  );
};
