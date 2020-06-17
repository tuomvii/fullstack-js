import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = (props) => <h1>{props.text}</h1> 


const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => <div>{props.fbtype} {props.fbstate}</div>

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getGoodFeedback = () => {
    setGood(good + 1)
  }

  const getNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const getBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading text='give feedback' />

      <Button handleClick={getGoodFeedback} text='good' />
      <Button handleClick={getNeutralFeedback} text='neutral' />
      <Button handleClick={getBadFeedback} text='bad' />

      <Heading text='statistics' />
      
      <Statistics fbtype='good' fbstate={good} />
      <Statistics fbtype='neutral' fbstate={neutral} />
      <Statistics fbtype='bad' fbstate={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)