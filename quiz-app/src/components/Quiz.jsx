import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import Questions from "./Questions.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);


    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon"></img>
                <h2>Quiz Completed! Bye!!</h2>
            </div>
        )
    }

    return (
        <div id="quiz">
            <Questions key={activeQuestionIndex} index={activeQuestionIndex} onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div >

    )
}