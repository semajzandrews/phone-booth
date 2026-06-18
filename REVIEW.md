# REVIEW · Phone Booth (device-retail rebuild, 06-18-2026)

Mode: INTERIM JUDGMENT MODE (factory gate tooling absent at root scripts/; gates checked BY HAND).
Witness: human (single-agent session per FABLE_MAX §2 degraded-witness clause; Semaj is the fresh context
at the localhost STOP). Self-graded entries are NOT labeled fresh-context.

## WORLD SENTENCE
"Lit black glass and a single blue signal climbing to full, 6 PM at the counter on Main Street, set like
the device's own status screen the moment your new line goes live."
(MATERIAL: lit black glass + blue signal · LIGHT: showroom darkroom + counter glow · ERA: contemporary
tech retail · PLACE: 325 Main St counter, City of Orange.)

## CONCEPT PANEL (2 concepts) + verdict written BEFORE code
- **Concept A — "The Signal Sweep" (CHOSEN).** Lit dark device showroom; the signature is a true
  device-UI signal meter that the visitor sweeps from "Searching" to "Connected, you're set," mapping the
  craft verb ACTIVATE. Device-as-hero on a dark ground (Nothing / B&O bar), bright accessible product grid
  below (Back Market bar), schematic micro-labels (Teenage Engineering bar). Alive: cells breathe + sweep.
- **Concept B — "Counter Card."** A bright counter-card / receipt frame, services as a stamped ticket.
  Rejected: printed-paper frame superclass is overused in the factory (E1 magazine/ticket fatigue) and a
  paper receipt is a weaker fit for a phone shop than the device's own UI; it also buries the device.

**Verdict (pre-code):** Concept A ships whole. It is category-true (device retail, not botanical), the
signature is derived from a real owner verb (activate), the frame is the trade's own device UI (object /
digital-native, fresh against recent printed frames), and the art direction is the cleanest break from the
discarded plant theme. No grafting from B.

## CONSTITUTION-3 IMAGERY BLOCK (by hand)
- Any other shop's signage or staff? NO. Device product shots + generic close-up repair hands + everyday
  people with phones; no storefront signage of another business.
- People-imagery true to the real community served (Black 57-64%, large Haitian/West Indian + Latino)?
  YES. Selected people shots are Black/Caribbean men and women (IDs 7970843, 5648383, 6017290, 4908585).
  No generic white "smiling at phone" stock.
- Every social handle verified-exact or omitted? facebook.com/phonebooth325 encodes the street number,
  owner-exact, linked. No others.
- Any customer-review photos? NO. All Pexels CC0, flagged for swap to the shop's real photos before LIVE.

## BY-HAND GATE CHECKLIST (check: manual, verified in real browser at 1280px + 375px)
- P1 dashes: PASS. Zero em/en dashes in src and rendered text (grep + DOM scan = 0).
- P2/P3 hotlink/scaffold: PASS. All imagery local in public/img; no next.svg/vercel.svg; no geist; no Ticker/Marquee names.
- P4 dead deps: PASS. Removed unused gsap + motion; lenis is the only runtime dep and is imported. Rebuilt clean (exit 0).
- P5 placeholder: PASS. No TODO/lorem/PLACEHOLDER.
- P6 facts/time: PASS. Facts in lib/site.ts; no rendered $ figures; all times 12-hour AM/PM (hours rows, status pill, footer).
- P7 375px: PASS. scrollWidth 375, no horizontal overflow; decorative glow is pointer-events-none and clipped.
- P8 reduced motion: PASS. H1 + primary CTA visible with no JS/scroll; SignalSweep renders fully-connected static under reduced motion (never blank).
- P10 reveal safety: PASS. Reveals visible-by-default; armed only by inline script; reveal-done clears them.
- P11 imagery: PASS. 11 Pexels CC0 images logged to used_images.json; people are Black/Caribbean community-true; no repeats; no plant imagery; flagged for swap to shop's real photos before LIVE.
- P15 copy gates: PASS. No generic CTA strings; trade verbs only ("Call the shop", "Get directions", "Bring it by"); no autoplay audio.
- P16 reference: PASS. REFERENCE.md cites 4 external real device-retail sites (nothing.tech, bang-olufsen.com, backmarket.com, teenage.engineering); zero builds/ references.
- 404: PASS. /zzz renders "Lost the signal" in the dark frame, not the default Next text.
- OG/favicon: PASS. public/og.png 1200x630 (frame artifact: signal cells mid-action + wordmark + name legible); app/icon.svg = signal-bars mark, dark.
- Production build: PASS (exit 0, TypeScript clean, all routes static).

## REVIEWER FINDINGS + FIXES
- FIX: dev server served stale globals tokens after the rewrite (cream still showing). Cleared .next and restarted; new dark/blue tokens confirmed in served CSS.
- FIX: gsap + motion were dead deps inherited by the scaffold. Removed; rebuilt clean.
- NOTE: signature rAF could not be exercised in the headless preview (tab backgrounded throttles requestAnimationFrame); interaction logic + listeners verified present, idle/reactive paths sound, reduced-motion static fallback confirmed. To be hand-tested on the demo iPhone at the localhost STOP (proof/iphone-stop.mov), per §S4 item 2, before INVOICE.
- The plant/botanical theme and the "signal bloom" interaction are FULLY removed (grep = 0 for monstera/botanical/Zodiak/SignalBloom across src).
- Skeptical-owner / art-director / editor judgments folded in (single-agent session, witness: human at STOP): sections read as a device shop, not a generic agency block; world sentence kept in all four registers; headline passes ownership test.
