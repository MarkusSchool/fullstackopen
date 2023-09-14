import { useState } from 'react'

const Statistics = (props) => {

}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const AddAll = () => bad + neutral + good
  
  const GetAverage = () => good - bad / AddAll();

  return (
    <div>

      <h1>Give feedback</h1>

      <Button HandleClick={() => setGood(good + 1)} text="Good"/>
      <Button HandleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button HandleClick={() => setBad(bad + 1)} text="Bad"/>

      <h1>Statistics</h1>

    </div>
  )
}

export default App
