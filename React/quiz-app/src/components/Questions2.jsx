import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answersEl = props.answers.map((item) => {
    const itemId = nanoid();
    const name = `question${props.questionIndex + 1}`;

    if (props.userAnswers.length > 0) {
      console.log(props.userAnswers[parseInt(props.questionIndex)]);
    }

    return (
      <>
        {props.showCorrect ? (
          <button
            type="button"
            onClick={(event) => props.getAnswer(event, item)}
            className="question--option"
          >
            {item}
          </button>
        ) : (
          <button
            type="button"
            onClick={(event) => props.getAnswer(event, item)}
            className="question--option"
          >
            {item}
          </button>
        )}
        {/* {props.showCorrect ? (
          <label htmlFor={itemId} className="question--option" style={styles}>
            {decode(item)}
          </label>
        ) : (
          <label htmlFor={itemId} className="question--option">
            {decode(item)}
          </label>
        )} */}
      </>
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
