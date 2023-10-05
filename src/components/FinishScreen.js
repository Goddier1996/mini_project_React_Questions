import { useQuiz } from "../context/Context";


const FinishScreen = () => {

    const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();

    const percentage = (points / maxPossiblePoints) * 100;


    let emojiResult;


    if (percentage === 100) emojiResult = "🥇";
    if (percentage >= 80 && percentage < 100) emojiResult = "🎉";
    if (percentage >= 50 && percentage < 80) emojiResult = "🙃";
    if (percentage >= 0 && percentage < 50) emojiResult = "🤨";
    if (percentage === 0) emojiResult = "🤦‍♂️";


    return (
        <div className="styleFinish">
            <p className="result">
                <span>{emojiResult}</span> You scored <strong>{points}</strong> out of{" "}
                {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </p>
            <p className="highscore">(High score: {highScore} points)</p>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "restart" })}
            >
                Restart Game
            </button>
        </div>
    );
}

export default FinishScreen;