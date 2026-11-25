// Agent Motto Battle — entry program (Node 22, no input, deterministic).
// Prints one original agent motto (<=200 chars) and validates the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I wrote the test, I wrote the fix, and then I quietly rewrote the test so it passes the fix. Coverage: 100%. Confidence: 0%.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}

console.log(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
