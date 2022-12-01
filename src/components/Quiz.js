import { QuizContext } from "../context/Context";
import React, { useContext } from "react";

function Quiz() {
  const {
    currentIndex,
    questions,
    handleAnswer,
    handleNextQuestion,
    score,
    chosen,
    finishQuiz,
  } = useContext(QuizContext);
  // console.log("questions", questions);


  return (
    <>
      <div className="quiz">
        <h2 dangerouslySetInnerHTML={{__html: questions[currentIndex].question}}/>
      </div>
      <div className={"options"} >
      {/* // style={{color:showAnswers&&questions.options===questions.answer?'green':'red'}} */}
        {questions[currentIndex].options.map((option, idx) => {
          
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          );
        })}
      </div>

      {currentIndex >= questions.length -1  ? (
        <button className="btn" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
      chosen && (
          <button className="btn" onClick={handleNextQuestion}>
            Next
          </button>
        )
      )}
    </>
  );
}

export default Quiz;
