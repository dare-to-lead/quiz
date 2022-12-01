import React,{useContext} from 'react'
import {QuizContext} from '../context/Context'
import '../index.css'

function First() {

  const {setQuizState} = useContext(QuizContext)
  return (
    <div className='first'>
    <button onClick={()=>setQuizState('quiz')}>Start</button>
    </div>
  )
}

export default First