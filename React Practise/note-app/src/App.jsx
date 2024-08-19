import { useState, useRef, useEffect, useMemo } from "react";
import FormMenu from "./components/FormMenu";
import GoalContainer from "./components/GoalContainer";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [formData, setFormData] = useState({
    inputValue: "",
  });

  const inputRef = useRef(null);

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.inputValue) {
      setNotes((prev) => [
        ...prev,
        { text: formData.inputValue, isSelected: false, id: nanoid() },
      ]);
      setFormData((prev) => ({ ...prev, inputValue: "" }));
      inputRef.current.focus();
    } else {
      notifyFail("Input empty");
      inputRef.current.focus();
    }
  }

  function selectEl(id) {
    setNotes((prev) => {
      const result = prev.map((note) =>
        note.id === id ? { ...note, isSelected: !note.isSelected } : note
      );
      return result;
    });
  }

  function removeNotes() {
    setNotes((prev) => {
      let arr = [];
      const removeSelected = prev.filter((note) => {
        return !note.isSelected;
      });
      if (prev.length == removeSelected.length) {
        notifyFail("No notes selected");
        arr = [...prev];
      } else {
        arr = [...removeSelected];
        notifySuccess(`Notes removed`);
      }
      return arr;
    });
  }

  function notifySuccess(message) {
    toast.success(message, {
      closeButton: false,
    });
  }

  function notifyFail(message) {
    toast.error(message, {
      closeButton: false,
    });
  }

  function emptyNotes() {
    setNotes([]);
  }

  function editNote(event) {
    const { value, name } = event.target;
    setNotes((prev) =>
      prev.map((note) => (note.id == name ? { ...note, text: value } : note))
    );
  }

  const notesEl = useMemo(() => {
    return notes.map((note) => (
      <>
        <GoalContainer
          key={note.id}
          note={note}
          editNote={editNote}
          selectEl={selectEl}
        />
      </>
    ));
  }, [notes]);

  return (
    <div className="app">
      <ToastContainer
        autoClose="1000"
        position="top-center"
        hideProgressBar="true"
        limit={3}
        closeButton={false}
        style={{
          width: "fit-content",
          fontSize: "14px",
        }}
      />

      <h1>Goals</h1>
      <form onSubmit={handleSubmit}>
        <div className="form--menu">
          <FormMenu
            handleChange={handleChange}
            removeNotes={removeNotes}
            inputValue={formData.inputValue}
            inputRef={inputRef}
            notes={notes}
            emptyNotes={emptyNotes}
          />
        </div>
      </form>
      <div className="goals--container">{notesEl}</div>
    </div>
  );
}

export default App;
