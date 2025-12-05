import { lines, readInput } from "../utils/input.js";

const raw = readInput("../day02/input.txt");
const split = raw.split(",");
let totalInvalids = 0;

for (const line of split) {
  const range = line.split("-");
  const startRange = parseInt(range[0]);
  const endRange = parseInt(range[1]);
  console.log("Range:", startRange, "to", endRange);
  for (let i = startRange; i <= endRange; i++) {
    const tempNum = i.toString();
    //check regex
    let result = /^(.+)\1+$/.test(tempNum);
    if (result) {
      totalInvalids += i;
    }
  }
}

console.log(totalInvalids);
