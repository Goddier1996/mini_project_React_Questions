import Header from './HeaterTitle'
import Main from './Main'
import { useQuiz } from "../context/QuizContext";
import Loader from './Loading';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import Progress from './Progress';
import Footer from './Footer';
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

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />

            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}

      </Main>

    </div>

  )
}

export default Home