# SIGNATURE · Phone Booth (device-retail REBUILD, 06-18-2026)

**Business:** Phone Booth — neighborhood phone / device shop, 325 Main St, City of Orange, NJ 07050
**Phone:** (973) 676-0701 · **PIN:** 676701 (last 6 digits of the real phone, re-confirmed)
**Hours (verified, Google Places):** Mon to Sat 10:00 AM to 7:00 PM · Sun 10:00 AM to 5:00 PM
**Status:** OPERATIONAL · no existing website (confirmed) · 3.9 stars / 9 reviews (modest, do NOT lead with reviews)
**Verified social:** facebook.com/phonebooth325 (handle encodes the street number, owner-exact, SAFE to link)

## What they actually do (verified, not invented)
Prepaid wireless dealer on Main St. Boost Mobile / Simple Mobile retailer. Carries Apple, Samsung,
Motorola. Activate a new line, upgrade a phone, pay your bill, bring your own device (BYOD), fast
fix-it-while-you-wait repairs (screens, batteries, ports), accessories (cases, chargers, earbuds, screen
protectors). No fabricated prices or specific plan dollar amounts; services in verified categories only.

## WHY THE PRIOR BUILD WAS WRONG (the correction)
The prior build chose a calm botanical / plant-boutique art direction (monstera hero, "growing signal
bloom" plant-growth interaction, warm cream + forest green + Zodiak serif). The owner: "not sure why you
went with a plant type theme for the phone booth website." A phone shop is not a plant boutique. This
rebuild removes the plant theme, the serif, the cream botanical ground, and the bloom interaction
ENTIRELY and re-anchors to device retail.

## THE NEW LANE (device-retail, locked)
- **Ground:** lit DARK showroom (near-black charcoal `#0D0F12`) with a panel cream `#F4F2EC` for the
  bright retail sections. Era register: contemporary tech retail (NOT paper-nostalgia, NOT botanical).
- **Accent `#2E6BFF`** (electric signal blue) with a cyan signal-glow `#5FE0FF`. The blue is the live
  signal / "you're connected" color, not a carrier-neon gradient.
- **Type:** ONE confident grotesque, **General Sans** (Fontshare, self-hosted) in ALL slots: oversized
  for display, regular for body. The serif (Zodiak) is dropped. Label voice = tracked-caps grotesk with
  a schematic micro-label feel (Teenage-Engineering cue). Display family = General Sans.
- **Frame superclass:** OBJECT / digital-native. The page inhabits the trade's own device-UI: a signal
  meter, status readouts, schematic spec labels. (Frame = the trade's own device UI, per E1.)
- **Layout:** good, conventional, confident. Real top nav, a dark device hero with the signature, a
  bright products/services grid, a "fix it fast" repair band, a community band, a visit/map band, footer.
  Smooth Lenis scroll, no scroll-snap, no gimmicks.

## THE CONCEPT — "Get connected on Main Street."
Phone Booth is the neighbor who sets you up: new phone, your number ported, your plan activated, a cracked
screen fixed while you wait. The site feels like a clean, confident device showroom that still talks like
a person from the block, not a carrier kiosk.

## THE SIGNATURE MOMENT — "The Signal Sweep" (device-true, replaces the plant bloom)
- **craft_verb:** ACTIVATE (the owner's literal daily action: activate a new line / get a phone connected).
  Evidence: verified service list leads with "activate a new line", Boost/Simple Mobile dealer.
- **material:** the signal / connection itself. **state_change:** no signal -> full bars connected
  ("Searching" -> "Connected, you're set").
- **touch_primitive:** drag / scroll-scrub across the hero. The visitor's finger sweeps the signal up.
- A pointer/scroll-reactive **row of signal cells** (a true device-UI signal meter, hand-built SVG)
  fills left to right as the visitor sweeps across the hero, with a live readout climbing through
  "Searching" / "Activating" / "Connected, you're set." Pure SVG + rAF, GPU-cheap, reduced-motion safe.
- **idle_behavior:** breathing. Untouched, the cells gently pulse and self-sweep partway so it is alive.
- **signature_position:** cover (lives in the first viewport, on the dark hero).
- **cta_shape:** earned. At full signal the readout flips to "Connected" and the call CTA pulses.
- **fallback_chain:** full (drag-reactive) -> mid (scroll-coupled fill) -> static (renders fully
  connected, all cells lit, "Connected, you're set").
- **reduced_motion_composition:** static fully-connected meter, all cells lit blue, readout reads
  "Connected, you're set." No motion. Never blank.
- **sound_moments:** none. **haptic_device:** none (optional Android navigator.vibrate <=20ms on full
  connect, completion only; page identical without it).

## Distance check (vs portfolio, by-hand interim mode)
- Ground = lit dark showroom + electric blue `#2E6BFF`: distinct from the City-of-Orange neighbors logged
  (laundromats, eateries, fabrics, nails, jewelry, grocery) and from the burned roster greens/creams.
- Signature = device-UI signal-cell sweep on drag (activate + drag-scrub). No prior build uses a signal
  meter; replaces the now-dead plant bloom. craft_verb+touch_primitive (activate + drag-scrub) is fresh.
- Type = single grotesque (General Sans), no serif; opposite of the prior Zodiak serif boutique cast.

## Upsell intel (one line, door-to-door, NOT in the build)
Phone Booth runs on carrier dealer portals (Boost/Simple Mobile) and a Facebook page only; no website,
no online booking, no review-gen. Clean upsell: online booking + an AI phone receptionist for
after-hours activation/repair questions.

## Video decision (BUILD_RULES §7, considered)
CONSIDERED and DECLINED for this pass. A genuinely fitting clip would be hands fixing a phone fast or the
storefront alive; we have no real on-site footage of THIS shop, and a generic stock clip of someone
else's bench would violate the community/provenance rules and risk implying it is their store. The alive
moment is carried by the interactive Signal Sweep signature instead (a real device-UI motion), which is
stronger and lighter than a bolted-on stock loop. Revisit with real on-site video before LIVE.
