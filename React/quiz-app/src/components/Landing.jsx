export default function Landing(props) {
  return (
    <div className="landing">
      <h1>Quizzical</h1>
      <h2>Test your knowledge</h2>
      <button className="landing--start" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
