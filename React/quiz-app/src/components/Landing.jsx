export default function Landing(props) {
  return (
    <div className="landing">
      <h1>Quiz App</h1>
      <h2>Test your knowledge</h2>
      <form onSubmit={props.handleOptionsSubmit}>
        <div className="options">
          <select
            name="category"
            id=""
            onChange={props.handleOptionsOnChange}
            value={props.optionsFormData.category}
          >
            <option value="9" selected>
              General Knowledge
            </option>
            <option value="12">Music</option>
            <option value="11">Film</option>
            <option value="10">Books</option>
            <option value="15">Video Games</option>
          </select>
          <select
            name="difficulty"
            id=""
            onChange={props.handleOptionsOnChange}
            value={props.optionsFormData.difficulty}
          >
            <option value="easy" selected>
              Easy
            </option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            name="format"
            id=""
            onChange={props.handleOptionsOnChange}
            value={props.optionsFormData.format}
          >
            <option value="multiple" selected>
              Multiple Choice
            </option>
            <option value="boolean">Truth / False</option>
          </select>
        </div>
        <button type="submit" className="landing--start">
          Start quiz
        </button>
      </form>
    </div>
  );
}
