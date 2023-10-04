import { useQuiz } from "../context/QuizContext";


function StartScreen() {

  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The React questions</h2>
      <h3>In This Game Have {numQuestions} questions</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start test your React mastery
      </button>
    </div>
  );
}

export default StartScreen;