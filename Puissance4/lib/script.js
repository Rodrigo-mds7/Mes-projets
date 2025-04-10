"use strict";

var gameContainer = document.getElementById('game-container');
var messageElement = document.getElementById('message');
var scoreElement = document.getElementById('score');
var currentPlayer = 'player1';
var score = {
  player1: 0,
  player2: 0
};
function createGameGrid(rows, cols) {
  var table = document.createElement('table');
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < cols; j++) {
      var td = document.createElement('td');
      td.dataset.row = i;
      td.dataset.col = j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}
function handleCellClick(event) {
  var col = event.target.dataset.col;
  for (var i = 5; i >= 0; i--) {
    var targetCell = document.querySelector("td[data-row='".concat(i, "'][data-col='").concat(col, "']"));
    if (!targetCell.classList.contains('player1') && !targetCell.classList.contains('player2')) {
      targetCell.classList.add(currentPlayer);
      if (checkWin(i, col)) {
        alert("Le ".concat(currentPlayer === 'player1' ? 'joueur 1 (rouge)' : 'joueur 2 (jaune)', " a gagn\xE9 !"));
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
  var directions = [{
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 0
  }, {
    x: 1,
    y: 1
  }, {
    x: 1,
    y: -1
  }];
  return directions.some(function (_ref) {
    var x = _ref.x,
      y = _ref.y;
    return countCells(row, col, x, y) + countCells(row, col, -x, -y) + 1 >= 4;
  });
}
function countCells(row, col, x, y) {
  var count = 0;
  var r = parseInt(row) + x;
  var c = parseInt(col) + y;
  while (r >= 0 && r < 6 && c >= 0 && c < 7 && document.querySelector("td[data-row='".concat(r, "'][data-col='").concat(c, "']")).classList.contains(currentPlayer)) {
    count++;
    r += x;
    c += y;
  }
  return count;
}
function updateMessage() {
  var player = currentPlayer === 'player1' ? 'joueur 1 (rouge)' : 'joueur 2 (jaune)';
  messageElement.textContent = "C'est au tour du ".concat(player, " de jouer.");
}
function updateScore() {
  scoreElement.textContent = "Score - Joueur 1: ".concat(score.player1, " | Joueur 2: ").concat(score.player2);
}
function resetGame() {
  document.querySelectorAll('td').forEach(function (cell) {
    return cell.classList.remove('player1', 'player2');
  });
  currentPlayer = 'player1';
  updateMessage();
}
var gameGrid = createGameGrid(6, 7);
gameContainer.appendChild(gameGrid);
document.querySelectorAll('td').forEach(function (cell) {
  return cell.addEventListener('click', handleCellClick);
});
updateMessage();
updateScore();