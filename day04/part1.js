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

console.log("Board length: " + board.length);
console.log("Col length: " + board[0].length);
for (var row = 0; row < board.length; row++) {
  for (var col = 0; col < board[row].length; col++) {
    if (getAdjecents(row, col) < 4) {
      accesibleRolls += 1;
    }
  }
}

function getAdjecents(posX, posY) {
  let papersAdjecent = 0;

  console.log("Position X: " + posX + " Position Y: " + posY);
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      const checkX = x + posX;
      const checkY = y + posY;
      //console.log("Checking x: " + checkX + " y " + checkY);
      if (
        checkX < 0 ||
        checkY < 0 ||
        checkX >= board.length ||
        checkY >= board[0].length
      ) {
        continue;
      }
      if (board[checkX][checkY] == "@") {
        papersAdjecent += 1;
      }
    }
  }
  console.log("total surrounding " + papersAdjecent);
  return papersAdjecent;
}

console.log(accesibleRolls);
