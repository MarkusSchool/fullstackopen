import React, { useState } from 'react';

const Statistics = (props) => {
  if (!props.all) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="Good" value={props.good} />
            <StatisticLine text="Neutral" value={props.neutral} />
            <StatisticLine text="Bad" value={props.bad} />
            <StatisticLine text="All" value={props.all} />
            <StatisticLine text="Average" value={props.avg} />
            <StatisticLine text="Positive" value={props.positive + '%'} />
          </tbody>
        </table>
      </div>
    );
  }
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  return (
    <div>

      <h1>Give feedback</h1>
      
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={total} positive={(good / total) * 100} avg={(good - bad) / total}} />
    
    </div>
  );
};

export default App;
