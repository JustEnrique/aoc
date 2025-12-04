import { lines, readInput } from "../utils/input.js";

const raw = readInput("../day02/input.txt");
const split = raw.split(",");
let totalInvalids = 0;

function isAllEqualNumbers(num) {
  var first = num % 10; // Extracting the last digit as a reference
  while (num) {
    if (num % 10 !== first) return false; // Checking if the current digit is different from the reference
    num = Math.floor(num / 10); // Removing the last digit by integer division
  }
  return true; // Returning true if all digits are the same
}

function consistsOfOnlyDoubles(tempNum) {
  const isInvalid = true;
  const doubleIdentifier = tempNum[0] + tempNum[1];
  console.log(
    "NOW CHECKING FOR DOUBLE AT " + tempNum + " identifier " + doubleIdentifier
  );
  for (let j = 2; j < tempNum.length - 1; j += 2) {
    const checkNum = tempNum[j] + tempNum[j + 1];
    console.log("checknum ", checkNum);
    if (checkNum != doubleIdentifier) {
      console.log(" we should stop double");
      return false;
    }
  }
  if (isInvalid) {
    console.log(tempNum + " is invalid double");
    totalInvalids += tempNum;
    return true;
  }
}

for (const line of split) {
  const range = line.split("-");
  const startRange = parseInt(range[0]);
  const endRange = parseInt(range[1]);

  for (let i = startRange; i <= endRange; i++) {
    //11 22 33 444 999 etc

    const tempNum = i.toString();
    if (isAllEqualNumbers(i)) {
      totalInvalids += i;
      continue;
    }
    if (tempNum.length % 2 == 0) {
      console.log("checking " + i);
      const sub1 = tempNum.substring(0, tempNum.length / 2);
      const sub2 = tempNum.substring(tempNum.length / 2, tempNum.length);
      if (sub1 == sub2) {
        totalInvalids += i;
      }
    }
    if (i.length > 3) {
    }
  }
}

console.log(totalInvalids);
