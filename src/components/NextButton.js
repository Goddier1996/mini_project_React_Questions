import { useQuiz } from "../context/Context";


const NextButton = () => {

  const { dispatch, answer, index, numQuestions } = useQuiz();



  return (
    <>
      {(answer === null) ? null :
        (index < numQuestions - 1) ?
          <div className="styleNextQuestion">
            <button
              className="btnNext"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next
            </button>
          </div>
          :
          (index === numQuestions - 1) ?
            <div className="finishStyleBtn">
              <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
              >
                Finish
              </button>
            </div>
            : ""
      }
    </>
  )
}

export default NextButton;