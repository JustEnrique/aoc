import { readInput } from "../utils/input.js";

const raw = readInput().split("\n");

let pos = 50;
let oldPos = 50;
let count = 0;

for (const line of raw) {
  if (!line.trim()) continue;
  let steps = parseInt(line.slice(1), 10);
  count += Math.floor(steps / 100);
  steps = steps % 100;

  if (line[0] === "L") {
    steps *= -1;
  }

  oldPos = pos;
  pos += steps;

  // landing exactly on 0
  if (pos === 0) {
    count++;
  }
  // passed below zero
  else if (pos < 0) {
    if (oldPos !== 0) {
      count++;
    }
    pos += 100;
  }
  // passed above 99
  else if (pos > 99) {
    count++;
    pos -= 100;
  }
}

console.log(count);
