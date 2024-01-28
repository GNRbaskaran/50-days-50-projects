const cells = document.querySelectorAll('.cell');
const playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset-btn');

let currentPlayer = 'X';
let board = Array(9).fill(null);

const handleCellClick = (cellIndex) => {
  const cell = cells[cellIndex];
  if (board[cellIndex]) return; // If cell is already filled, do nothing

  cell.textContent = currentPlayer;
  board[cellIndex] = currentPlayer;

  checkWinner();
  switchPlayer();
};

const checkWinner = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      announceWinner(board[a]);
    }
  }
}  