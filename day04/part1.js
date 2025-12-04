import { readInput } from "../utils/input.js";
const raw = readInput("../day04/input.txt");
const split = raw.split("\n");

let board = [];
let accesibleRolls = 0;

for (let i = 0; i < split.length; i++) {
  board[i] = [];
  let count = 0;
  for (let c of split[i].trim()) {
    board[i][count] = c;
    count++;
  }
}

while (accesibleRolls > 0) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == "@") {
        if (getAdjecents(i, j) < 4) {
          //swap paper with .
          board[i][j] = ".";
        }
      }
    }
  }
}

function getAdjecents(initialRow, initialCol) {
  let papersAdjecent = 0;
  for (let row = -1; row <= 1; row++) {
    for (let col = -1; col <= 1; col++) {
      const checkCol = initialCol + col;
      const checkRow = initialRow + row;
      if (
        checkCol < 0 ||
        checkRow < 0 ||
        checkCol >= board[0].length ||
        checkRow >= board.length ||
        (checkCol == initialCol && checkRow == initialRow)
      ) {
        continue;
      }
      if (board[checkRow][checkCol] == "@") {
        papersAdjecent++;
      }
    }
  }
  return papersAdjecent;
}

console.log(accesibleRolls);
