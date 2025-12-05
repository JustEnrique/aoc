import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

export const readInput = (day) => {
  if (!day) {
    const stack = new Error().stack;
    const stackLines = stack.split("\n");
    for (let i = 1; i < stackLines.length; i++) {
      const line = stackLines[i];
      const pathMatch = line.match(
        /(?:file:\/\/\/|at |\()(.+?)(?::\d+:\d+\)|:\d+:\d+)/
      );
      if (pathMatch) {
        const filePath = pathMatch[1];
        const dayMatch = filePath.match(/day\d+/);
        if (dayMatch && !filePath.includes("utils/input.js")) {
          day = dayMatch[0];
          break;
        }
      }
    }
  }

  if (!day) {
    throw new Error(
      "Could not detect day folder. Please provide day parameter or ensure file is in a dayXX folder."
    );
  }

  const utilsDir = dirname(fileURLToPath(import.meta.url));
  const projectRoot = dirname(utilsDir);
  const inputPath = join(projectRoot, day, "input.txt");

  return readFileSync(inputPath, "utf8").trim();
};
