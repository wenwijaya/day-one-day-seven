// Day one, day seven - make.fun program/v1 entrypoint (Node 22, stdlib only).
//
// The entry is the video itself: a TikTok video of the same tiny agent-built
// game on day one and after a week of daily updates. This program does the
// one thing the gate needs: it copies VIDEO.json from the repository root
// into /output, where the house reads the video's address from it.
//
// Local check (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

// The grader runs this program twice and the two runs must write the same
// bytes, so this is a plain byte-for-byte copy and nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });

if (!existsSync(source)) {
  console.error(`VIDEO.json not found in ${BOT_DIR}`);
  process.exit(1);
}

copyFileSync(source, target);
