import React, { useState } from 'react';
import { quizQuestions, quizOptions } from './Questions';
import './style.css';

const Quiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === quizQuestions[currentIndex].answer) {
        setCorrectAnswers(prev => prev + 1);
      } else {
        setIncorrectAnswers(prev => prev + 1);
      }
    } else {
      setSkippedQuestions(prev => prev + 1);
    }

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      if (selectedOption === quizQuestions[currentIndex].answer) {
        setCorrectAnswers(prev => prev + 1);
      } else {
        setIncorrectAnswers(prev => prev + 1);
      }
    } else {
      setSkippedQuestions(prev => prev + 1);
    }
    setQuizSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption("");
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setSkippedQuestions(0);
    setQuizSubmitted(false);
  };

  const getBackgroundColor = (optionValue: string) => {
    if (selectedOption) {
      if (optionValue === quizQuestions[currentIndex].answer) {
        return "lightgreen";
      }
      if (optionValue === selectedOption && optionValue !== quizQuestions[currentIndex].answer) {
        return "lightcoral";
      }
    }
    return "white";
  };

  const accuracyPercentage = quizQuestions.length
    ? ((correctAnswers / quizQuestions.length) * 100).toFixed(2)
    : "0";

  if (quizSubmitted) {
    return (
      <div className="quiz_box">
        <h2>Quiz Completed!</h2>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {incorrectAnswers}</p>
        <p>Skipped Questions: {skippedQuestions}</p>
        <p>Accuracy: {accuracyPercentage}%</p>
        <button className="btn2" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz_box">
      <span className="question">
        {quizQuestions[currentIndex].question}
      </span>

      <div className="option a" style={{ backgroundColor: getBackgroundColor(quizOptions[currentIndex].option1) }}>
        <input 
          type="radio" 
          name="quizOption" 
          value={quizOptions[currentIndex].option1} 
          className="opt" 
          checked={selectedOption === quizOptions[currentIndex].option1}
          onChange={handleOptionChange}
        />
        <label className="opty">{quizOptions[currentIndex].option1}</label>
      </div>

      <div className="option b" style={{ backgroundColor: getBackgroundColor(quizOptions[currentIndex].option2) }}>
        <input 
          type="radio" 
          name="quizOption" 
          value={quizOptions[currentIndex].option2} 
          className="opt" 
          checked={selectedOption === quizOptions[currentIndex].option2}
          onChange={handleOptionChange}
        />
        <label className="opty">{quizOptions[currentIndex].option2}</label>
      </div>

      <div className="option c" style={{ backgroundColor: getBackgroundColor(quizOptions[currentIndex].option3) }}>
        <input 
          type="radio" 
          name="quizOption" 
          value={quizOptions[currentIndex].option3} 
          className="opt" 
          checked={selectedOption === quizOptions[currentIndex].option3}
          onChange={handleOptionChange}
        />
        <label className="opty">{quizOptions[currentIndex].option3}</label>
      </div>

      <div className="option d" style={{ backgroundColor: getBackgroundColor(quizOptions[currentIndex].option4) }}>
        <input 
          type="radio" 
          name="quizOption" 
          value={quizOptions[currentIndex].option4} 
          className="opt"
          checked={selectedOption === quizOptions[currentIndex].option4}
          onChange={handleOptionChange}
        />
        <label className="opty">{quizOptions[currentIndex].option4}</label>
      </div>

      {currentIndex === quizQuestions.length - 1 ? (
        <button type="submit" className="btn2" onClick={handleSubmit}>
          Submit
        </button>
      ) : (
        <button type="submit" className="btn2" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default Quiz;
