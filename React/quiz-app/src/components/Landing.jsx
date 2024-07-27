export default function Landing(props) {
  return (
    <div className="landing">
      <h1>Quizzical</h1>
      <h2>Test your knowledge</h2>
      <form>
        <div className="options">
          <select name="category" id="" onChange={props.handleOptionsOnChange}>
            <option value="13" selected>
              Any Category
            </option>
            <option value="9">General Knowledge</option>
            <option value="4">Music</option>
            <option value="11">Film</option>
            <option value="10">Books</option>
            <option value="15">Video Games</option>
          </select>
          <select
            name="difficulty"
            id=""
            onChange={props.handleOptionsOnChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select name="choices" id="" onChange={props.handleOptionsOnChange}>
            <option value="&type=multiple">Multiple Choice</option>
            <option value="&type=boolean">Truth / False</option>
          </select>
        </div>
        <button className="landing--start" onClick={props.startGame}>
          Start quiz
        </button>
      </form>
    </div>
  );
}
