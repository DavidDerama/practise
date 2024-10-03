import { useContext } from "react";
import { NotesContext } from "../App";

type MenuProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  newNote: string;
};

export const Menu = ({ handleChange, handleSubmit, newNote }: MenuProps) => {
  const { deleteSelected } = useContext(NotesContext);

  return (
    <form className="menu" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={newNote} />
      <div className="menu-buttons">
        <button type="submit">Send</button>
        <button type="button" onClick={deleteSelected}>
          Delete
        </button>
      </div>
    </form>
  );
};
