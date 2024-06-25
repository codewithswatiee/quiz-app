import React, { useState, useCallback } from 'react'
import QUESTIONS from '../question.js'
import Question from '../components/Question.jsx'
import Summary from '../Summary';


function Quiz() {
   
    const [userAns, setUserAnswer ] = useState([]);
    //deriving state from state
    const activeQuestionIndex = userAns.length;
    console.log(activeQuestionIndex)
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
      setUserAnswer((prevUserAns) => {
        return [...prevUserAns, selectedAnswer]
      });
    }, []);


    const handleSkipAnswer = useCallback( () => {
      handleSelectAnswer(null)
    }, [handleSelectAnswer]);


    if(quizIsComplete){
      return <Summary userAns={userAns}  />
    }
  return (
    <div id='quiz'>
      <Question
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer ={handleSkipAnswer}/>
    </div>
  )
}

export default Quiz;
