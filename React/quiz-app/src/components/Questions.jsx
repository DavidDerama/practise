import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answersEl = props.answers.map((item) => {
    const itemId = nanoid();
    const name = `question${props.questionIndex + 1}`;

    return (
      <>
        {props.showCorrect ? (
          <input
            type="radio"
            name={name}
            className="radio-input"
            id={itemId}
            value={item}
            onChange={props.getAnswer}
            disabled
          />
        ) : (
          <input
            type="radio"
            name={name}
            className="radio-input"
            id={itemId}
            value={item}
            onChange={props.getAnswer}
          />
        )}
        <label htmlFor={itemId} className="question--option">
          {decode(item)}
        </label>
      </>
    );
  });
  return (
    <section className="question-container">
      <h2>
        {decode(props.question)}{" "}
        {props.showCorrect && `(${props.correct_answer})`}
      </h2>
      <div className="question-options">{answersEl}</div>
    </section>
  );
}

// <button
//   className="question--option"
//   onClick={() => props.getAnswer(item)}
// >
//   {decode(item)}
// </button>
