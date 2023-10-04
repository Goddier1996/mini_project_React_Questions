import { useQuiz } from "../context/Context";


const Options = ({ question }) => {

    const { dispatch, answer } = useQuiz();

    // check if have answer
    const hasAnswered = answer !== null;


    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option 
                    ${index === answer && index !== question.correctOption ? "answer" : ""}
                     ${hasAnswered
                            ? index === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""
                        }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => dispatch({ type: "newAnswer", payload: index })}
                >
                    {option}

                    {index === answer && index !== question.correctOption ?
                        <p>Your answer is incorrect !</p>
                        : ""}
                </button>
            ))}
        </div>
    )
}

export default Options 