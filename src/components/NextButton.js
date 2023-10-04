import { useQuiz } from "../context/Context";


function NextButton() {

  const { dispatch, answer, index, numQuestions } = useQuiz();

  return (

    <>
      {(answer === null) ? null :
        (index < numQuestions - 1) ?
          <button
            className="btnNext"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
          :
          (index === numQuestions - 1) ?
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "finish" })}
            >
              Finish
            </button> : ""
      }
    </>
  )
}

export default NextButton;