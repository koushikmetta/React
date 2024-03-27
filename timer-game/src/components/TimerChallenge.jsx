import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();

    if (timeRemaining <= 0) {
        clearInterval(timer.current);

        dialog.current.open();
    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleSart() {
        timer.current = setInterval(() => {
            setTimeRemaining(preTimeRemaining => preTimeRemaining - 10);
        }, 10);
    }
    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);


    }
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleSart}>
                        {timerActive ? 'Stop' : 'Start'} Challenge</button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>

    )
}