import { useState, createContext } from "react";
import { Menu } from "./components/Menu";
import { NoteList } from "./components/NoteList";
import { Note } from "./shared/types";
import "./App.css";

type NotesContextType = {
  deleteSelected: () => void;
  selectNote: (id: number) => void;
  isEditing: boolean;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, text: "Hello", isSelected: false, editNote: false },
    { id: 2, text: "World", isSelected: false, editNote: false },
  ]);

  const [newNote, setNewNote] = useState<string>("");

  const [isEditing, setIsEditing] = useState<boolean>(false);

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
          id: notes.length + 1,
          text: newNote,
          isSelected: false,
          editNote: false,
        },
      ]);
      setNewNote("");
    }
  }

  function selectNote(id: number) {
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

  return (
    <main className="app">
      <NotesContext.Provider value={{ selectNote, deleteSelected, isEditing }}>
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
