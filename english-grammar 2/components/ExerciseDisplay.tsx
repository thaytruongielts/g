
import React, { useState, useEffect } from 'react';
import type { Exercise } from '../types';

interface ExerciseDisplayProps {
  exercises: Exercise[];
}

const ExerciseDisplay: React.FC<ExerciseDisplayProps> = ({ exercises }) => {
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Reset state when exercises change (e.g., user switches unit)
    setUserAnswers(Array(exercises.length).fill(null));
    setSubmitted(false);
    setScore(0);
  }, [exercises]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    if (submitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (userAnswers.some(a => a === null)) {
        alert('Please answer all questions before submitting.');
        return;
    }
    let correctCount = 0;
    exercises.forEach((exercise, index) => {
      if (userAnswers[index] === exercise.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers(Array(exercises.length).fill(null));
    setSubmitted(false);
    setScore(0);
  };

  const getOptionClassName = (option: string, questionIndex: number) => {
    if (!submitted) return 'border-slate-300 hover:border-brand-primary hover:bg-indigo-50';
    
    const isCorrect = option === exercises[questionIndex].answer;
    const isSelected = userAnswers[questionIndex] === option;

    if (isCorrect) return 'border-brand-secondary bg-emerald-100 text-emerald-800 font-semibold';
    if (isSelected && !isCorrect) return 'border-red-400 bg-red-100 text-red-800';
    return 'border-slate-300 text-slate-500';
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-200">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">Bài tập củng cố</h2>
        {submitted && (
             <div className="text-right">
                <p className="text-lg font-semibold text-slate-800">
                    Điểm của bạn: <span className="text-brand-primary text-xl">{score} / {exercises.length}</span>
                </p>
            </div>
        )}
      </div>

      <div className="space-y-8">
        {exercises.map((exercise, index) => (
          <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-semibold text-slate-800 text-lg mb-4">
              <span className="text-brand-primary font-bold mr-2">{index + 1}.</span> 
              {exercise.question.split('______').map((part, i) => 
                i < exercise.question.split('______').length -1 
                ? <React.Fragment key={i}>{part}<span className="font-mono text-lg text-slate-400">______</span></React.Fragment>
                : <React.Fragment key={i}>{part}</React.Fragment>
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exercise.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerChange(index, option)}
                  disabled={submitted}
                  className={`w-full text-left p-3 border rounded-lg transition-all duration-200 ${
                    userAnswers[index] === option && !submitted ? 'bg-brand-primary text-white border-brand-primary' : getOptionClassName(option, index)
                  } ${submitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={submitted ? handleReset : handleSubmit}
          className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {submitted ? 'Làm lại' : 'Kiểm tra đáp án'}
        </button>
      </div>
    </div>
  );
};

export default ExerciseDisplay;
