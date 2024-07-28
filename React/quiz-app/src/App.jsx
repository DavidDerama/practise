import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./components/Landing.jsx";
import Questions from "./components/Questions.jsx";
import Confetti from "react-confetti";
import "./App.css";

export default function App() {
  const [landing, setLanding] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [newGameBtn, setNewGameBtn] = useState(false);
  const [options, setOptions] = useState({
    category: "9",
    difficulty: "easy",
    format: "multiple",
  });

  const [userAnswers, setUserAnswers] = useState({});

  const [fetchUrl, setFetchUrl] = useState("");

  function startGame(url) {
    setShowCorrect(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const newArr = [];
        if (data.results[0].type == "multiple") {
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
        } else if (data.results[0].type == "boolean") {
          data.results.forEach((item) => {
            const answers = ["True", "False"];
            newArr.push({
              question: item.question,
              correct_answer: item.correct_answer,
              answers: [...answers],
            });
          });
        }
        setQuestions(newArr);
      });
    setLanding(false);
  }

  useEffect(() => {
    const arr = [];
    questions.forEach((item, index) => {
      const name = `question${index + 1}`;
      arr.push({ [name]: "" });
    });
    const mergeObj = Object.assign({}, ...arr);

    setUserAnswers(mergeObj);
  }, [questions]);

  function newGame() {
    setNewGameBtn(false);
    const resolveAfterTimeout = new Promise((resolve) =>
      setTimeout(() => {
        setFormData([]);
        setCorrectCount(0);
        startGame(fetchUrl);
        resolve();
      }, 2500)
    );
    toast.promise(resolveAfterTimeout, {
      pending: "New quiz being made",
      success: "New quiz  made",
      error: "Error",
    });
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
    const { name, value } = event.target;
    // setFormData((prev) => {
    //   return [...prev, value];
    // });
    setUserAnswers((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(userAnswers);
  }

  function handleOptionsOnChange(event) {
    const { name, value } = event.target;
    setOptions((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleOptionsSubmit(event) {
    event.preventDefault();
    const { category, difficulty, format } = options;

    const fetchUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=${format}`;
    setFetchUrl(fetchUrl);
    startGame(fetchUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const answers = Object.values(userAnswers);
    console.log(answers);

    setShowCorrect(true);
    let sum = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] == questions[i].correct_answer) {
        sum++;
      }
    }
    setCorrectCount(sum);
    event.target.reset();
    setNewGameBtn(true);
  }

  function changeGame() {
    const resolveAfterTimeout = new Promise((resolve) =>
      setTimeout(() => {
        setLanding(true);
        setFormData([]);
        setCorrectCount(0);
        resolve();
      }, 4000)
    );
    toast.promise(resolveAfterTimeout, {
      pending: "Back to the menu",
    });
  }

  const questionsEL = questions.map((item, index) => {
    return (
      <Questions
        getAnswer={getAnswer}
        question={item.question}
        answers={item.answers}
        userAnswers={Object.values(userAnswers)}
        correct_answer={item.correct_answer}
        showCorrect={showCorrect}
        questionIndex={index}
        newGameBtn={newGameBtn}
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
      {correctCount === 5 && <Confetti />}
      <ToastContainer
        autoClose="1000"
        position="top-center"
        hideProgressBar="true"
        closeButton={false}
        limit={1}
        style={{
          width: "fit-content",
          fontSize: "14px",
        }}
      />

      {landing && (
        <Landing
          startGame={startGame}
          handleOptionsOnChange={handleOptionsOnChange}
          handleOptionsSubmit={handleOptionsSubmit}
          optionsFormData={options}
          changeGame={changeGame}
        />
      )}
      {!landing && (
        <main>
          <form onSubmit={handleSubmit}>
            <div className="questionsContain">{questionsEL}</div>
            {questions.length > 1 ? (
              <div className="results" style={styles}>
                <button className="submit--btn">Check answers</button>
              </div>
            ) : (
              <h1>Loading....</h1>
            )}
          </form>
          {showCorrect && (
            <div className="new-game">
              {newGameBtn && (
                <>
                  <h3>
                    You scored {correctCount} / {questions.length} correct
                    answers
                  </h3>
                  <button className="submit--btn" onClick={newGame}>
                    New Game
                  </button>
                  <button className="submit--btn" onClick={changeGame}>
                    Change Game
                  </button>
                </>
              )}
            </div>
          )}
        </main>
      )}
    </div>
  );
}

// const answers = [...item.incorrect_answers];
// answers.push(item.correct_answer);
// const shufflled = shuffle(answers);
