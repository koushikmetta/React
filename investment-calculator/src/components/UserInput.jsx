export default function UserInput({onChangeInput, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="Number" value={userInput.initialInvestment} required onChange={(event) => onChangeInput('initialInvestment', Number(event.target.value))} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="Number" value={userInput.annualInvestment} required onChange={(event) => onChangeInput('annualInvestment', Number(event.target.value))} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="Number" value={userInput.expectedReturn} required onChange={(event) => onChangeInput('expectedReturn', Number(event.target.value))} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="Number" value={userInput.duration} required onChange={(event) => onChangeInput('duration', Number(event.target.value))} />
                </p>
            </div>
        </section>
    )
}