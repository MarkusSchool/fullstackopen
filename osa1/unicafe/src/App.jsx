import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button HandleClick={() => setGood(good + 1)}>good</button>
      <button HandleClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button HandleClick={() => setBad(bad + 1)}>bad</button>
    </div>
  )
}

export default App
