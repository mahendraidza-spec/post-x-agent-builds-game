// main.ts — entrypoint for "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709, Node 22, stdlib only).
//
// The entry is the X post itself: a short video of an AI coding agent
// building the tiny browser card game Ember Duel from one prompt, posted
// natively on X with make.fun / @makefunai and the play code in its text.
// This program only hands the post's address to the grader: it reads
// POST.json from the repository root, checks it names an X post, and
// copies it to the output directory, where the house reads it and then
// writes its own reading of the post's counts beside it.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');

// The gate only accepts a JSON object naming an X post address, so fail
// loudly here instead of handing the grader a file it cannot use.
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string "url" field');
}
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([\w-]+\/status\/\d+|i\/web\/status\/\d+)/.test(parsed.url)) {
  throw new Error(`POST.json url is not an X post address: ${parsed.url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
