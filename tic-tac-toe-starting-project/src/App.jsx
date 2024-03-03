import Player from "./components/Player.jsx";
import GameBoard from "./components/GmaeBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from './combinations.js';
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  //const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const comb of WINNING_COMBINATIONS) {
    const firstSqaureSymbol = gameBoard[comb[0].row][comb[0].column];
    const secondSqaureSymbol = gameBoard[comb[1].row][comb[1].column];
    const thirdSqaureSymbol = gameBoard[comb[2].row][comb[2].column];

    if (firstSqaureSymbol && firstSqaureSymbol === secondSqaureSymbol && firstSqaureSymbol === thirdSqaureSymbol) {
      winner = secondSqaureSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');

    setGameTurns(preTurns => {
      const currentPlayer = deriveActivePlayer(preTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurns]
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {winner && <GameOver winner={winner}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
