import React, { useState, useCallback } from 'react'
import QUESTIONS from '../question'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from '../components/QuestionTimer'


function Quiz() {
    
    const [userAns, setUserAnswer ] = useState([]);

    //deriving state from state
    const activeQuestionIndex = userAns.length;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
      setUserAnswer((prevUserAns) => {
        return [...prevUserAns, selectedAnswer]
      })
    }, []);

    const handleSkipAnswer = useCallback( () => {
      handleSelectAnswer(null)
    }, [handleSelectAnswer]);


    if(quizIsComplete){
      return <div id='summary'>
        <img src={quizCompleteImg} alt='Quiz Completed!'/>
        <h2>Quiz Completed</h2>
      </div>
    }

    const shuffeledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffeledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id='quiz'>
      <QuestionTimer
      key={activeQuestionIndex}
      timeout={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
      <div id='question'>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id='answers'>
      {shuffeledAnswers.map((answer) =>
          <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
              </li>
      )}
      </ul>
      </div>
    </div>
  )
}

export default Quiz
