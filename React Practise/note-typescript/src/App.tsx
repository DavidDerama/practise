import React, { useState, createContext, useEffect } from "react";
import { Menu } from "./components/Menu";
import { NoteList } from "./components/NoteList";
import { Note, EditNote } from "./shared/types";
import { nanoid } from "nanoid";
import "./App.css";

type NotesContextType = {
  deleteSelected: () => void;
  selectNote: (id: string) => void;
  editNote: (id: string) => void;
  changeNoteChanges: (obj: EditNote) => void;
  editingMode: boolean;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const App = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesLocal = localStorage.getItem("notes");
    return notesLocal ? JSON.parse(notesLocal) : [];
  });

  const [editingMode, setEditingMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const [newNote, setNewNote] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewNote(value);
    console.log(newNote);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newNote) {
      setNotes((prev) => [
        ...prev,
        {
          id: nanoid(),
          text: newNote,
          isSelected: false,
          isEditing: false,
        },
      ]);
      setNewNote("");
    }
  }

  function selectNote(id: string) {
    setNotes((prev) => {
      const notesModified = prev.map((note) =>
        note.id === id ? { ...note, isSelected: !note.isSelected } : note
      );
      return notesModified;
    });
  }

  function deleteSelected() {
    setNotes((prev) => {
      return prev.filter((note) => !note.isSelected);
    });
  }

  function changeNoteChanges(obj: EditNote) {
    const { id } = obj;
    setNotes((prev) => {
      const prevModified = prev.map((note) =>
        note.id === id ? { ...obj, isSelected: false, isEditing: false } : note
      );
      return prevModified;
    });
    setEditingMode(false);
  }

  function editNote(id: string) {
    setNotes((prev) => {
      const notesModified = prev.map((note) =>
        note.id === id ? { ...note, isEditing: !note.isEditing } : note
      );
      return notesModified;
    });
    setEditingMode((prev) => !prev);
  }

  return (
    <main className="app">
      <NotesContext.Provider
        value={{
          selectNote,
          deleteSelected,
          editNote,
          changeNoteChanges,
          editingMode,
        }}
      >
        <section className="notes">
          <div className="notes-left">
            <h1>Notes</h1>
            <Menu
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              newNote={newNote}
            />
          </div>
          <div className="notes-right">
            <NoteList notes={notes} />
          </div>
        </section>
      </NotesContext.Provider>
    </main>
  );
};

export { NotesContext };
