import { readInput } from "../utils/input.js";
const raw = readInput().split("\n");

let map = new Map();
let operators = [];
let total = 0;

for (let line of raw) {
  line = line.trim();
  let count = 0;
  for (let num of line.split(" ")) {
    if (num === "") continue;
    count++;
    if (!isNaN(parseInt(num))) {
      map.set(count, [...(map.get(count) || []), parseInt(num)]);
    } else {
      operators.push(num);
    }
  }
}

for (let i = 0; i < operators.length; i++) {
  const currOperator = operators[i];
  switch (currOperator) {
    case "+":
      total += map.get(i + 1).reduce((a, b) => a + b);
      break;
    case "*":
      total += map.get(i + 1).reduce((a, b) => a * b);
      break;
  }
}

console.log(total);
