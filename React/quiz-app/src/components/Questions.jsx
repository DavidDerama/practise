import { decode } from "html-entities";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answersEl = props.answers.map((item) => {
    const itemId = nanoid();
    const name = `question${props.questionIndex + 1}`;
    const showCorrectStyle = {
      background: props.correct_answer == item ? "#94D7A2" : "#F8BCBC",
    };

    const specificItem = props.userAnswers[parseInt(props.questionIndex)];

    const showUserSelected = specificItem === item && "showUserSelected";

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
          <label
            htmlFor={itemId}
            className={`question--option ${showUserSelected}`}
            style={showCorrectStyle}
          >
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
      <h2>{decode(props.question)}</h2>
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
