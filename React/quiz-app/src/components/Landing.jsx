export default function Landing(props) {
  return (
    <div className="landing">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button className="landing--start" onClick={props.startGame}>
        Start quiz
      </button>
    </div>
  );
}
