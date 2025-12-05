import { readInput } from "../utils/input.js";
const raw = readInput().split("\n");

let totalVoltage = 0;

for (let line of raw) {
  line = line.trim();
  let digits = "";
  let digitsToFill = 12;
  let highest = 0;
  let currIndex = 0;

  while (digitsToFill > 0) {
    for (let i = currIndex; i <= line.length - digitsToFill; i++) {
      if (line[i] > highest) {
        highest = line[i];
        currIndex = i + 1;
      }
    }
    digits += highest;
    digitsToFill -= 1;
    highest = 0;
  }
  totalVoltage += Number(digits);
}

console.log("Total voltage: " + totalVoltage);
