import Header from '../components/HeaterTitle'
import { useQuiz } from "../context/Context";
import Loader from '../components/loading_error/Loading';
import Error from '../components/loading_error/Error';
import StartScreen from '../components/StartScreen';
import Question from '../components/Question';
import Progress from '../components/Progress';
import Timer from '../components/Timer';
import NextButton from '../components/NextButton';
import FinishScreen from '../components/FinishScreen';
import AnimationBackground from '../components/animation/AnimationBackground';



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