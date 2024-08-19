import { useState, useRef, useEffect } from "react";

export default function GoalContainer({ note, editNote, selectEl }) {
  const [editing, setEditing] = useState(false);
  const editInput = useRef(null);

  useEffect(() => {
    if (editing && editInput.current) {
      editInput.current.focus();
    }
  }, [editing]);

  function formSubmit(event) {
    event.preventDefault();
    setEditing(!editing);
  }

  return (
    <form
      className={`goal--container ${note.isSelected && "selected"}`}
      onSubmit={formSubmit}
    >
      <input
        className={`${!editing ? "editFalse" : ""}`}
        defaultValue={note.text}
        name={note.id}
        onChange={editNote}
        disabled={editing ? false : true}
        ref={editInput}
      />
      <div className="goal--buttons">
        <button
          className="goal--button"
          onClick={() => selectEl(note.id)}
          type="button"
        >
          {!note.isSelected ? "Select" : "Unselect"}
        </button>
        <button
          className="goal--button"
          onClick={() => setEditing(!editing)}
          type="button"
        >
          {editing ? "Save" : "Edit"}
        </button>
      </div>
    </form>
  );
}
