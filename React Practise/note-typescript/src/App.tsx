import { useState } from "react";
import { Menu } from "./components/Menu";
import { NoteList } from "./components/NoteList";
import { Note } from "./shared/types";
import "./App.css";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    { text: "Hello", isSelected: false, editNote: false },
    { text: "World", isSelected: false, editNote: false },
  ]);

  return (
    <main className="app">
      <section className="notes">
        <div className="notes-left">
          <h1>Notes</h1>
          <Menu />
        </div>
        <div className="notes-right">
          <NoteList notes={notes} />
        </div>
      </section>
    </main>
  );
}

export default App;
