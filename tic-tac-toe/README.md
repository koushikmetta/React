# Tic-Tac-Toe Game in React

This project is a simple Tic Tac Toe game built using React. It allows two players to take turns marking cells in a 3x3 grid to achieve three in a row, either horizontally, vertically, or diagonally.

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/koushikmetta/React.git`

2. Navigate to the project directory:
`cd tic-tac-toe`
3. Install dependencies:
`npm install`
4. Start the development server:
`npm start`
5. Open your browser and go to `http://localhost:3000` to view the game.

## How to Play

1. The game starts with an empty 3x3 grid.
2. Player 1 (X) takes the first turn by clicking on an empty cell.
3. Player 2 (O) takes the next turn, and they alternate turns until the game ends.
4. The game ends when one player achieves three in a row or when all cells are filled.
5. If a player wins, a message will be displayed showing the winner.
6. If the game ends in a tie, a message will be displayed indicating a draw.
7. To start a new game, click the "Rematch" button.

## Concepts Covered

This project covers the following fundamental concepts in React:

1. **Components**: The game is divided into several components such as `Board`, `Square`, and `Game`.
2. **State Management**: The state of the game is managed using React's state to keep track of which player is currently playing, the state of the board, and the winner.
3. **Event Handling**: Click events on the board cells are handled to allow players to make their moves.
4. **Conditional Rendering**: Different messages are displayed based on the game state, such as displaying the winner or indicating a draw.
5. **Functional Components**: Components are primarily written as functional components to leverage React's functional programming capabilities.
6. **Props**: Props are passed down to child components to provide them with data and functionality.

## Future Enhancements

1. Implementing a scoring system to keep track of wins and ties.
2. Adding animations to enhance the user experience.
3. Providing an option for players to choose their symbols (X or O).
4. Implementing an AI opponent for single-player mode.

## Credits

This project is based on the Tic Tac Toe tutorial from the Course : React - The Complete Guide 2024 (incl. React Router & Redux)
by Maximilian Schwarzmüller