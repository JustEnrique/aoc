import { readInput } from "../utils/input.js";
const raw = readInput().split("\n");

let totalVoltage = 0;

for (let line of raw) {
  line = line.trim();
  let firstDigit = 0;
  let secondDigit = 0;
  let indexToStart = 0;
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] > firstDigit) {
      firstDigit = line[i];
      indexToStart = i + 1;
    }
  }
  for (let j = indexToStart; j < line.length; j++) {
    if (line[j] > secondDigit) {
      secondDigit = line[j];
    }
  }
  let currentVoltage = Number(firstDigit + secondDigit);
  totalVoltage += currentVoltage;
}

console.log("Total voltage: " + totalVoltage);
