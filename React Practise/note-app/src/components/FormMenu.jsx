export default function FormMenu({
  handleChange,
  inputValue,
  removeNotes,
  inputRef,
  notes,
  emptyNotes,
}) {
  return (
    <>
      <input
        type="text"
        name="inputValue"
        onChange={handleChange}
        value={inputValue}
        placeholder="Goals"
        ref={inputRef}
      />
      <div className="menu--buttons">
        <button type="submit" className="submit-btn">
          →
        </button>
        {notes.length ? (
          <>
            <button type="button" className="remove-btn" onClick={removeNotes}>
              X
            </button>
            <button type="button" onClick={emptyNotes}>
              Empty
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
