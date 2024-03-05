import { useState } from "react";
import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"


function App() {
  const INITIAL_DATA = {
    initialInvestment: 90000,
    annualInvestment: 1300,
    expectedReturn: 2,
    duration: 12
  };

  const [userInput, setUserInput] = useState(INITIAL_DATA);
  const valid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput(preUserInput => {
      return {
        ...preUserInput, [inputIdentifier]: newValue
      }
    });
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!valid && <p className="center">Please enter a valid duration input greater than zero </p>}
      {valid && <Results userInput={userInput} />}
    </>
  )
}

export default App
