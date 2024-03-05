import { useState } from "react";

export default function UserInput() {
    const INITIAL_DATA = {
        initialInvestment: 90000,
        annualInvestment: 1300,
        expectedReturn: 2,
        duration: 12
    };

    const [userInput, setUserInput] = useState(INITIAL_DATA);

    function handleChange(inputIdentifier, newValue) {
        setUserInput(preUserInput => {
            return {
                ...preUserInput, [inputIdentifier]: newValue
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="Number" value={userInput.initialInvestment} required onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="Number" value={userInput.annualInvestment} required onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="Number" value={userInput.expectedReturn} required onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="Number" value={userInput.duration} required onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}