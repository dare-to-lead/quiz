import React,{useContext} from 'react'
import {QuizContext} from '../context/Context'

function End() {
  const {score} = useContext(QuizContext)
  return (
    <div className='end'>
      <h1>End! your score is {score}</h1>
      </div>
  )

}

export default End