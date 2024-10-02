import { useState, createContext } from "react";
import { Menu } from "./components/Menu";
import { NoteList } from "./components/NoteList";
import { Note } from "./shared/types";
import "./App.css";

const NotesContext = createContext();

export const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    { text: "Hello", isSelected: false, editNote: false },
    { text: "World", isSelected: false, editNote: false },
  ]);

  const [newNote, setNewNote] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setNewNote(value);
    console.log(newNote);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      { text: newNote, isSelected: false, editNote: false },
    ]);
    setNewNote("");
  }

  function editNote() {
    console.log("TEST");
  }

  return (
    <main className="app">
      <NotesContext.Provider value={{ editNote }}>
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
