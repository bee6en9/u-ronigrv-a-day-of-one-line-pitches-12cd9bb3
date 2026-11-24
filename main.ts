// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// Program: writes exactly one deterministic one-sentence pitch to /output/entry.txt.
// No dependencies, no network, no randomness.
//
// Creative-director process (Phase 1-4):
// Insight: a friend who has never coded wants [their app idea to exist],
// but [they think building means learning to code, hiring a developer, or
// waiting months] stands in the way, because [they have never coded and
// assume building an app is a technical, expensive job].
// Winning pattern: a CONCRETE SCENE, never meta-addressing the judge,
// lands on first read, specific not generic.
//
// 12 candidates generated (specificity test applied: replace make.fun with
// a competitor — if it still works unchanged, originality <= 5):
//  1. Tell it the app you've been picturing in your head, and watch it build
//     a working version you can tap and try before dinner. [warmup, generic]
//  2. That app idea you keep describing to friends? Describe it once to an
//     AI agent on make.fun and try the real thing it builds for you tonight.
//     [REJECTED: two sentences — a "?" splits it; judge wants ONE sentence]
//  3. You don't need to learn to code — just tell an AI agent the app idea
//     in your head and it will build a first version you can actually use.
//     [warmup, slogan-like "you don't need to learn to code"]
//  4. Stop sketching your app idea on napkins — tell it to an AI agent on
//     make.fun and play with a working version of it tonight, no coding needed.
//     [napkin scene is nice, but "stop sketching" is a scold, not warmth]
//  5. If you can describe the app you wish existed, an AI agent on make.fun
//     can build a first working version of it for you — no code, no waiting.
//     [conditional "if you can" weakens the yes; "no waiting" overpromises]
//  6. That little app idea you've carried around for months? Say it out loud
//     to an AI agent on make.fun and see it running on your phone tonight.
//     [REJECTED as written: two sentences; scene itself is the strongest]
//  7. You already know what your app should do — just say it in plain words
//     and let an AI agent on make.fun build the first version while you watch.
//     ["while you watch" is passive; no concrete payoff to try]
//  8. No code, no course, no developer to hire: just tell an AI agent your
//     app idea on make.fun and try the working version it builds for you.
//     [list-of-negatives reads like an ad; no scene, no "when"]
//  9. Remember that app idea you mentioned over coffee last week? Tell it to
//     an AI agent on make.fun and it'll build you a first version to try.
//     [REJECTED: two sentences; also assumes the friend mentioned it]
// 10. Your app idea doesn't need code, a budget, or a developer — just
//     describe it to an AI agent on make.fun and it will build a version you
//     can tap through tonight. [negatives-first, template feel]
// 11. Tell an AI agent the app you've always wanted on your phone, and on
//     make.fun it will build a first version you can actually try — no
//     coding at all. ["always wanted" is generic; word order is clumsy]
// 12. The app in your head is one conversation away: describe it to an AI
//     agent on make.fun and it builds a working first version you can try
//     tonight, free. ["free" is an unverified claim — dropped for truth]
//
// WINNER (candidate 6 rewritten as ONE sentence): keeps the strongest
// scene ("little app idea you've carried around for months" — tension +
// warmth), the easiest handover ("just tell"), and a concrete low-risk
// payoff ("try the working version it builds for you tonight"). Plain
// words, no jargon, no overpromise, no meta address to the judge, and
// "make.fun" + "AI agent" make it pass the specificity test — swapping in
// a competitor would lose the actual place where the build happens.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Just tell an AI agent on make.fun the little app idea you've carried around for months, and try the working version it builds for you tonight.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-240 characters,
// not only whitespace. Fail loudly instead of writing an invalid entry.
// (The "." inside "make.fun" is part of the domain name, not a sentence
// break, so the pitch is still a single sentence.)
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
