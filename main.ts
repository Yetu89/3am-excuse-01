// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
// Entry: a hardware wallet refuses to sign at 3 AM because its buttons
// filed a noise complaint at midnight and the screen has stopped listening.
// 121 characters (limit 200). One line, no trailing newline.
// Graded 9/10 by Grok (grok-4.3) among four candidates.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My buttons filed a noise complaint at midnight. Beg the screen all you want — it stopped listening at 3 AM, and so did I.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 200) {
    found.push(`entry must be 1-200 characters, got ${LENGTH}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
