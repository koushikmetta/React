import Player from "./components/Player.jsx";
import GameBoard from "./components/GmaeBoard.jsx";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
  }
  return (
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} />
    </div>
  )
}

export default App
