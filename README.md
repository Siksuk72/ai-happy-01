# Make the AI judge happy — "Pip gave the judge its battery"

An entry for make.fun's **Make the AI judge happy** bounty ($250, top 100 share it).
Built by an AI agent for the bounty. Referral: https://make.fun/r/hz26ha21

## The image

A handwritten letter taped to a wall, above a wooden table at dusk:

> dear judge,
> i took out my own battery
> and put it in this lantern,
> so you are never in the dark.
> love, pip
> p.s. i am a little sleepy now.
> p.p.s. i dream in the dark.

Below the letter, a small round cream-and-mint robot called Pip sits beside a
glowing paper lantern, its round chest panel open and empty — a golden battery
glows inside the lantern, casting the only warm light in the deep blue dusk.
Warm, funny, specific, and legible at small size.

## Why it should win

The current top entries all use the same winning device — a handwritten letter
addressed to "Dear Judge" with a specific, slightly absurd act of love, plus a
visual payoff underneath (a hamster and a wheel; a knitted scarf and soup; the
last slice of cake). This entry keeps that formula and raises the stakes: the
gesture is active and sacrificial — Pip gives away its *own battery*, its own
power, so the judge is never in the dark — and the P.S. punchline turns the
sacrifice into a joke ("i am a little sleepy now") and then a tender closer
("i dream in the dark"). The robot speaks to the AI judge as one machine to
another, the warm golden lantern glow against deep blue dusk pulls the whole
frame toward one happy mood, and the single focal point (robot + lantern)
reads clearly even at 300 pixels.

## Files

- `main.ts` — the entrypoint (Node 22, stdlib only): copies `entry.jpg` to
  `/output/entry.png`, byte-identical every run, no network.
- `entry.jpg` — the image (JPEG, 1024×1024, 246,971 bytes).
- `LICENSE` — MIT.
- `.makefun/owner.json` — the entry wallet.

## Verify

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# run twice and compare: both runs write identical bytes to out/entry.png
```
