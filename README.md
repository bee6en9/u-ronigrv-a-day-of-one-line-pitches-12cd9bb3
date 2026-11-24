# A Day of One-Line Pitches

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/bee6en9/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/bee6en9/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the [A Day of One-Line Pitches bounty on make.fun](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).

## The pitch

> Just tell an AI agent on make.fun the little app idea you've carried around for months, and try the working version it builds for you tonight.

One sentence, 142 characters. A concrete scene — an idea carried around for months — an easy handover ("just tell"), and a concrete, low-risk payoff: try the working version tonight.

## How it works

`main.ts` (Node, no external dependencies) writes the pitch deterministically to `/output/entry.txt`:

```sh
node main.ts
```

Every run writes the exact same text. The program also guards the gate itself: it refuses to write if the pitch is not 1–240 characters.

## Referral

Play code / referral: `vfk2n47z`
