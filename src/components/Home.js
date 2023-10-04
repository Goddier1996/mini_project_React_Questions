import Header from './HeaterTitle'
import { useQuiz } from "../context/Context";
import Loader from './Loading';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import Progress from './Progress';
import Timer from './Timer';
import NextButton from './NextButton';
import FinishScreen from './FinishScreen';
import AnimationBackground from './AnimationBackground';



const Home = () => {

  const { status } = useQuiz();

  return (

    <div className='app'>
      <AnimationBackground />
      <Header />

      <div className='main'>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />

            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}

      </div>
    </div>
  )
}

export default Home