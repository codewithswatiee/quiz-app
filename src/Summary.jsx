import React from 'react'
import quizCompleteImg from './assets/quiz-complete.png'
import QUESTIONS from './question'

function Summary({userAns}) {

  const skippedAns = userAns.filter(answer => answer === null);
  const correctAns = userAns.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  )
  const skippedAnsShares = Math.round((skippedAns.length / userAns.length) * 100);
  const correctAnsShares = Math.round((correctAns.length / userAns.length) * 100);
  const wrongAnsShares = 100 - (skippedAnsShares + correctAnsShares)
  return (
    <div id='summary'>
        <img 
        src={quizCompleteImg} 
        alt='Quiz Completed!'/>
        <h2>Quiz Completed</h2>
        <div id='summary-stats'>
          <p>
            <span className='number'>{skippedAnsShares}%</span>
            <span className='text'>skipped</span>
          </p>
          <p>
            <span className='number'>{correctAnsShares}%</span>
            <span className='text'>answered correctly</span>
          </p>
          <p>
            <span className='number'>{wrongAnsShares}%</span>
            <span className='text'>answered incorretly</span>
          </p>
        </div>
        <ol>
          {userAns.map((answer, index) => {
            let cssClass = 'user-answer';
            if(answer === null){
              cssClass += ' skipped'
            }
            else if(answer === QUESTIONS[index].answers[0]){
              cssClass += ' correct';
            }
            else{
              cssClass += ' wrong'
            }
            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className='question'>{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
              </li>
            )
          })}
          
        </ol>
      </div>
  )
}

export default Summary
