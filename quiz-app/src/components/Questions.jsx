import { useState } from "react";
import QUESTIONS from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Questions({ index, onSelectAnswer, onSkipAnswer }) {

    const [answer, setAnwer] = useState({
        selectedAnswer: '',
        isCorrect: null

    });

    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnwer({
            selectedAnswer: answer,
            isCorrect: null

        });
        setTimeout(() => {
            setAnwer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }
    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer timeout={timer} key={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState} />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState} onSelect={handleSelectAnswer} />
        </div>
    )
}