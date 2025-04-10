const gameContainer = document.getElementById('game-container');
const messageElement = document.getElementById('message');
const scoreElement = document.getElementById('score');

let currentPlayer = 'player1';
let score = { player1: 0, player2: 0 };

function createGameGrid(rows, cols) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.dataset.row = i;
            td.dataset.col = j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function handleCellClick(event) {
    const col = event.target.dataset.col;
    for (let i = 5; i >= 0; i--) {
        const targetCell = document.querySelector(`td[data-row='${i}'][data-col='${col}']`);
        if (!targetCell.classList.contains('player1') && !targetCell.classList.contains('player2')) {
            targetCell.classList.add(currentPlayer);
            if (checkWin(i, col)) {
                alert(`Le ${currentPlayer === 'player1' ? 'joueur 1 (rouge)' : 'joueur 2 (jaune)'} a gagné !`);
                score[currentPlayer]++;
                updateScore();
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1';
                updateMessage();
            }
            break;
        }
    }
}

function checkWin(row, col) {
    const directions = [
        { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: -1 }
    ];
    return directions.some(({ x, y }) => {
        return countCells(row, col, x, y) + countCells(row, col, -x, -y) + 1 >= 4;
    });
}

function countCells(row, col, x, y) {
    let count = 0;
    let r = parseInt(row) + x;
    let c = parseInt(col) + y;
    while (r >= 0 && r < 6 && c >= 0 && c < 7 && document.querySelector(`td[data-row='${r}'][data-col='${c}']`).classList.contains(currentPlayer)) {
        count++;
        r += x;
        c += y;
    }
    return count;
}

function updateMessage() {
    const player = currentPlayer === 'player1' ? 'joueur 1 (rouge)' : 'joueur 2 (jaune)';
    messageElement.textContent = `C'est au tour du ${player} de jouer.`;
}

function updateScore() {
    scoreElement.textContent = `Score - Joueur 1: ${score.player1} | Joueur 2: ${score.player2}`;
}

function resetGame() {
    document.querySelectorAll('td').forEach(cell => cell.classList.remove('player1', 'player2'));
    currentPlayer = 'player1';
    updateMessage();
}

const gameGrid = createGameGrid(6, 7);
gameContainer.appendChild(gameGrid);
document.querySelectorAll('td').forEach(cell => cell.addEventListener('click', handleCellClick));

updateMessage();
updateScore();