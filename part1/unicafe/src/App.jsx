import { useState } from 'react';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => setGood(good + 1);
  const handleNeutralFeedback = () => setNeutral(neutral + 1);
  const handleBadFeedback = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' onClick={handleGoodFeedback} />
        <Button text='neutral' onClick={handleNeutralFeedback} />
        <Button text='bad' onClick={handleBadFeedback} />
      </div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
