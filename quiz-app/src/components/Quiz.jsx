import { useState, useCallback } from "react";
import QUESTIONS from '../questions.js';
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

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
            <Summary userAnswers={userAnswers} />
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