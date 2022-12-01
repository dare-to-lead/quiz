import React, { useState, useEffect } from "react";
import First from "./components/First";
import End from "./components/End";
import { QuizContext } from "./context/Context";
import Quiz from "./components/Quiz";
import axios from "axios";

function App() {

  const [quizState, setQuizState] = useState("first");
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(false);


  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
      )
      .then((res) => {
        
        const questions = res.data.results.map((questionItem,index) => {
          const answer = questionItem.correct_answer;
          // console.log('questions',questionItem.correct_answer[index])
          const options = [...questionItem.incorrect_answers, answer];
          return {
            id: index,
            question: questionItem.question,
            answer: answer,
            options:options.sort(() => Math.random() - 0.5)
            } 
           
          });
          //  console.log('answer',answer)
         
            setQuestions(questions);
      });
      
  }, []);

  function handleAnswer(option) {
   if (!chosen) {
      if (option===questions[currentIndex].answer) {
        setScore(score + 1);
      }
      // console.log('questions', option)
        console.log('ans', questions[0].answer)
    }
    setChosen(true);
  }

  function handleNextQuestion() {
    setChosen(false)
    setCurrentIndex(currentIndex + 1)
    setScore(score)
  }

  function finishQuiz() {
    if (!chosen) {
      if (questions[currentIndex].options === questions.answer) {
        
      }
    }
    setChosen(true)
    setQuizState('end');
  }

  return (
    <div className="App">
      <h1>Quiz</h1>

      <QuizContext.Provider
        value={{
          quizState,
          setQuizState,
          questions,
          setQuestions,
          handleAnswer,
          currentIndex,
          setCurrentIndex,
          chosen,
          score,
          handleNextQuestion,
          finishQuiz,
          
        }}
      >
        
        {quizState === "first" && <First  />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "end" && <End/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
