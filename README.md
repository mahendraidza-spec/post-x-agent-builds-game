# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mahendraidza-spec/post-x-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/mahendraidza-spec/post-x-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty
[`post-x-the-agent-builds-a-game-from-20261122-1709`](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20, top 10 share the rewards).

## The post

A short vertical video (1080×1920, ~32 s) about an AI coding agent building
a tiny browser game from one prompt — while you watch:

1. **The hook** — "ONE PROMPT. ONE AGENT. ONE GAME."
2. **The prompt** — *"Build me a tiny browser card game — a mage dueling
   a witch. 8 cards, a smart AI opponent. Make it playable in the browser."*
3. **The agent working** — the real files it wrote for the game, landing
   one by one: `index.html`, `styles.css`, `src/cards.js`,
   `src/engine.js`, `src/ai.js`, `src/render.js`, `src/sound.js`,
   `src/main.js`.
4. **The finished game** — real gameplay of **Ember Duel**, the card duel
   the agent built (Ember Mage vs Nyx, the Cinder Witch), ending on the
   VICTORY screen.
5. **The end card** — make.fun's official referral end card from the press
   pack, with referral code `brb5pk9p`.

The video is posted natively on X from the public account
[@mahendraidza-spec](https://x.com/mahendraidza-spec), its text carrying
make.fun / @makefunai and the play code `makefun-yak-eagle-echo`.
`POST.json` at this repository's root names the post's address; the house
reads the post's views, likes, reposts, quotes and replies through
FxTwitter and scores it `views + 10 × (likes + reposts + quotes + replies)`.

## The game in the video

Ember Duel is an original card duel built by an AI agent from one prompt:
you are the Ember Mage, Nyx the Cinder Witch has challenged you, both start
at 30 health, 8 original cards in four elements, and Nyx reads the table —
she saves heals for when she is low and goes for the kill when she can.
The gameplay in the video is a real duel driven in headless Chromium
through the game's own hooks, not a mockup.

## This repository

- `main.ts` — the entrypoint (Node 22, standard library only): it reads
  `POST.json`, checks it names an X post address, and copies it to
  `/output/POST.json`, where the gate reads it.
- `POST.json` — the entry's post address on X.
- `.makefun/owner.json` — claim file naming the payout wallet.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
