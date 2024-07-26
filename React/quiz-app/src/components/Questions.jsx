import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answersEl = props.answers.map((item) => {
    const itemId = nanoid();
    const name = `question${props.questionIndex + 1}`;
    const styles = {
      background: props.correct_answer == item ? "#94D7A2" : "#F8BCBC",
    };

    if (props.userAnswers.length > 0) {
      console.log(props.userAnswers[parseInt(props.questionIndex)]);
    }

    return (
      <div className="questions">
        {props.showCorrect ? (
          <input
            type="radio"
            name={name}
            className="radio-input"
            id={itemId}
            value={item}
            disabled
            defaultChecked={false}
          />
        ) : (
          <input
            type="radio"
            name={name}
            className="radio-input"
            id={itemId}
            value={item}
            onClick={props.getAnswer}
          />
        )}
        {props.showCorrect ? (
          <label htmlFor={itemId} className="question--option" style={styles}>
            {decode(item)}
          </label>
        ) : (
          <label htmlFor={itemId} className="question--option">
            {decode(item)}
          </label>
        )}
      </div>
    );
  });
  return (
    <section className="question-container">
      <h2>
        {decode(props.question)} || {props.correct_answer}
      </h2>
      {props.showCorrect && (
        <p className="label">{`Your Answer: ${decode(
          props.userAnswers[parseInt(props.questionIndex)]
        )}`}</p>
      )}
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
