import React, { useState, createContext, useEffect } from "react";
import { Menu } from "./components/Menu";
import { NoteList } from "./components/NoteList";
import { Note } from "./shared/types";
import "./App.css";

type NotesContextType = {
  deleteSelected: () => void;
  selectNote: (id: string) => void;
  editNote: (id: string) => void;
  editNoteValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveNoteChange: (e: React.FormEvent<HTMLFormElement>) => void;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const App = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesLocal = localStorage.getItem("notes");
    return notesLocal ? JSON.parse(notesLocal) : [];
  });

  useEffect(() => {
    // localStorage.setItem("notes", JSON.stringify(notes));
  }, []);

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
          id: `notes${notes.length + 1}`,
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
    console.log(notes);
  }

  function editNoteValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setNotes((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function saveNoteChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function editNote(id: string) {
    setNotes((prev) => {
      const notesModified = prev.map((note) =>
        note.id === id ? { ...note, isEditing: !note.isEditing } : note
      );
      return notesModified;
    });
  }

  return (
    <main className="app">
      <NotesContext.Provider
        value={{
          selectNote,
          deleteSelected,
          editNote,
          editNoteValue,
          saveNoteChange,
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
