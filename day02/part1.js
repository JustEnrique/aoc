import { lines, readInput } from "../utils/input.js";

const raw = readInput("../day02/input.txt");
const split = raw.split(",");
let totalInvalids = 0;

for (const line of split) {
  const range = line.split("-");
  const startRange = parseInt(range[0]);
  const endRange = parseInt(range[1]);

  for (let i = startRange; i <= endRange; i++) {
    const tempNum = i.toString();
    if (tempNum.length % 2 == 0) {
      const sub1 = tempNum.substring(0, tempNum.length / 2);
      const sub2 = tempNum.substring(tempNum.length / 2, tempNum.length);
      if (sub1 == sub2) {
        totalInvalids += i;
      }
    }
  }
}

console.log(totalInvalids);
