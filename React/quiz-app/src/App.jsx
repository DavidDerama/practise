import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing.jsx";
import Questions from "./components/Questions.jsx";

export default function App() {
  const [landing, setLanding] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });
  const [showCorrect, setShowCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  function startGame() {
    setShowCorrect(false);
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 1) {
          const newArr = [];
          data.results.forEach((item) => {
            const answers = [...item.incorrect_answers];
            answers.push(item.correct_answer);
            const shufflled = shuffle(answers);
            newArr.push({
              question: item.question,
              correct_answer: item.correct_answer,
              answers: [...shufflled],
            });
          });
          console.log(newArr);
          setQuestions(newArr);
        }
      });
    setLanding(false);
  }

  function newGame() {
    startGame();
    setFormData({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    });
    console.log(showCorrect);
    console.log(formData);
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function getAnswer(event) {
    event.target.style = { backgroundColor: "green" };
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowCorrect(true);
    const userAnswers = [...Object.values(formData)];
    let sum = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] == questions[i].correct_answer) {
        sum++;
      }
    }
    setCorrectCount(sum);
  }

  const questionsEL = questions.map((item, index) => {
    // const answers = [...item.incorrect_answers];
    // answers.push(item.correct_answer);
    // console.log(answers);
    // const shufflled = shuffle(answers);
    // console.log(shufflled);
    return (
      <Questions
        getAnswer={getAnswer}
        question={item.question}
        answers={item.answers}
        correct_answer={item.correct_answer}
        showCorrect={showCorrect}
        questionIndex={index}
      />
    );
  });

  const styles = {
    display: showCorrect && "none",
    visibility: showCorrect && "hidden",
    heigth: showCorrect && "0",
    width: showCorrect && "0",
  };

  return (
    <div className="app">
      {landing && <Landing startGame={startGame} />}
      <main>
        <form onSubmit={handleSubmit}>
          {questionsEL}
          {questions.length > 1 ? (
            <div className="results" style={styles}>
              <button className="submit--btn">Check answers</button>
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </form>
        {showCorrect && (
          <div className="results">
            <h3>You scored {correctCount} / 5 correct answers</h3>
            <button className="submit--btn" onClick={newGame}>
              New Game
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
