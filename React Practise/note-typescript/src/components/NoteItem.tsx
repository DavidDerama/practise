import { Note } from "../shared/types";

type NoteItemProps = {
  note: Note;
};

export const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <li className="noteitem">
      <p>{note.text}</p>
      <div className="noteitem--buttons">
        <button>Edit</button>
        <button>Select</button>
      </div>
    </li>
  );
};
