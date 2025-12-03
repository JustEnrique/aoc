import { readFileSync } from "fs";

// Reads a file relative to the current JS module file
export const readInput = (path) =>
  readFileSync(new URL(path, import.meta.url), "utf8").trim();

// Split into lines
export const lines = (text) => text.split("\n");
