import React, { useState } from 'react';
import Quiz from './components/quiz';
import './App.css';

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
    console.log('Start button clicked!');
  };

  return (
    <div className="App">
      {!quizStarted ? (
        
        <>
          <h1 className="title">QUIZZY</h1>
          <span className="tag">"Fuel Your Curiosity. Conquer the Quizverse."</span>
          <button type='submit' className='btn1' onClick={handleStart}>Start</button>
        </>
      ) : (
        
        <Quiz />
      )}
    </div>
  );
}

export default App;