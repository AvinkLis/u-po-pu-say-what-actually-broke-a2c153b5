// Say What Actually Broke — make.fun entry.
// Writes one line of software error copy (at most 200 characters)
// that tells the user the brutal truth about what went wrong, to
// entry.txt in the output directory.
//
// First draft was the generic lie every dialog tells — "something
// went wrong, try again later". It names nothing, owns nothing, and
// is exactly what this bounty exists to replace.
//
// Final pick, revised after the first run: name the real failure in
// the first breath (the "minor" update was not minor), reassure the
// user about the only thing they actually care about (their work is
// saved), and pay for the joke with the team's own dignity — honest
// enough that a real team could ship it in a dialog.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Error: the update we called 'minor' was not minor. Your work is saved. Our dignity is not.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
