import { readInput } from "../utils/input.js";
const raw = readInput().split("\n");

let toCheck = [];
let areFresh = [];

for (let line of raw) {
  line = line.trim();
  if (line !== "" && !line.includes("-")) {
    toCheck.push(line);
  }
}

for (let line of raw) {
  line = line.trim();

  if (line.includes("-")) {
    const rangeStart = parseInt(line.split("-")[0]);
    const rangeEnd = parseInt(line.split("-")[1]);
    for (let check of toCheck) {
      if (check >= rangeStart && check <= rangeEnd) {
        if (!areFresh.includes(check)) {
          areFresh.push(check);
        }
      }
    }
  }
}

console.log("Fresh items found:", areFresh.length);
