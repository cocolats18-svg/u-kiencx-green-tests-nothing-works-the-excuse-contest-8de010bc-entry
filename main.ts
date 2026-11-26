// Green Tests, Nothing Works: The Excuse Contest
// Writes the entry's single-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no network, no randomness, fixed text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "All 400 tests pass \u2014 they just test the test suite, which, credit where it's due, works flawlessly.";

if (LINE.length < 1 || LINE.length > 139) {
  throw new Error(`line must be 1-139 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
