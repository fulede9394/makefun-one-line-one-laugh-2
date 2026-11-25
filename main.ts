// One funny line, self-contained.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My smart fridge texted me 'we need to talk' — the leftovers have unionized and the milk is their spokesperson.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
