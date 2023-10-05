import { useQuiz } from "../context/Context";
import Options from "./Options";


const Question = () => {

  const { questions, index } = useQuiz();
  const question = questions.at(index);


  return (

    <div className="showQuestion">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;