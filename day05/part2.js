import { readInput } from "../utils/input.js";
const raw = readInput("../day05/input.txt");
const split = raw.split("\n");

let coveredList = [];
let checkList = [];
let totalFresh = 0;

for (let line of split) {
  line = line.trim();

  if (line.includes("-")) {
    const rangeStart = parseInt(line.split("-")[0]);
    const rangeEnd = parseInt(line.split("-")[1]);
    coveredList.push(rangeStart, rangeEnd);
    checkList.push(rangeStart, rangeEnd + 1);
  }
}

checkList.sort((a, b) => a - b);
coveredList.sort((a, b) => a - b);

for (let i = 0; i < checkList.length - 1; i++) {
  const start = checkList[i];
  const end = checkList[i + 1];
  for (let line of split) {
    line = line.trim();

    if (line.includes("-")) {
      const rangeStart = parseInt(line.split("-")[0]);
      const rangeEnd = parseInt(line.split("-")[1]);
      if (start >= rangeStart && end - 1 <= rangeEnd) {
        totalFresh += end - start;
        break;
      }
    }
  }
}

console.log("Total fresh items found:", totalFresh);
