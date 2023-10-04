import { createContext, useContext, useReducer, useEffect } from "react";


const Context = createContext();


const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
    secondsRemaining: null,
};



function reducer(state, action) {

    switch (action.type) {

        case "dataReceived":
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };


        case "dataFailed":
            return {
                ...state,
                status: "error",
            };


        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * 15,
            };


        case "newAnswer":
            const question = state.questions.at(state.index);

            return {
                ...state,
                answer: action.payload,
                points:
                    action.payload === question.correctOption
                        ? state.points + question.points
                        : state.points,
            };


        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null };


        case "finish":
            return {
                ...state,
                status: "finished",
                highScore:
                    state.points > state.highScore ? state.points : state.highScore,
            };


        case "restart":
            return { ...initialState, questions: state.questions, status: "ready" };


        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status,
            };


        default:
            throw new Error("Action Not Have");
    }
}



function Provider({ children }) {


    const [
        { questions, status, index, answer, points, highScore, secondsRemaining },
        dispatch,
    ] = useReducer(reducer, initialState);


    const numQuestions = questions.length;

    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points,
        0
    );


    const fetchDataQuestionsReact = () => {
        
        fetch(process.env.REACT_APP_API)
            .then((res) => res.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data.questions }))
            .catch((err) => dispatch({ type: "dataFailed" }));       
    }


    useEffect( ()=> {
        fetchDataQuestionsReact();
    }, []);



    return (
        <Context.Provider
            value={{
                questions,
                status,
                index,
                answer,
                points,
                highScore,
                secondsRemaining,
                numQuestions,
                maxPossiblePoints,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
}



function useQuiz() {
    const context = useContext(Context);
    if (context === undefined)
        throw new Error("Context was used outside of the provider");

    return context;
}



export { Provider, useQuiz };