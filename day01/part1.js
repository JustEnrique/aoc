import { readInput } from "../utils/input.js";

const raw = readInput().split("\n");

let zeroCounts = 0;
let dialCount = 50;

function calculateNextPostion(direction, amount) {
  amount %= 100;
  switch (direction) {
    case "L":
      dialCount -= amount;
      if (dialCount < 0) {
        dialCount += 100;
      }
      break;

    case "R":
      dialCount += amount;
      if (dialCount >= 100) {
        dialCount -= 100;
      }
      break;
  }
}

for (const line of raw) {
  const direction = line[0];
  const amount = parseInt(line.slice(1));
  calculateNextPostion(direction, amount);
  if (dialCount == 0) {
    zeroCounts += 1;
  }
}

console.log("TOTAL 0s " + zeroCounts);
