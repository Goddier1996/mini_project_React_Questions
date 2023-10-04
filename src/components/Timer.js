import { useEffect } from "react";
import { useQuiz } from "../context/Context";


function Timer() {

  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;


  useEffect(() => {

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);

  }, [dispatch]
  );



  return (
    <div className="showStyleTimer">
      <div className="timer">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    </div>
  );
}

export default Timer;