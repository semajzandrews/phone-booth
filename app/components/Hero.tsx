import Image from "next/image";
import Reveal from "./Reveal";
import SignalSweep from "./SignalSweep";
import { SITE } from "../lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] bg-[var(--bg)] grid-tex overflow-hidden">
      {/* blue signal glow top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 62%)", opacity: 0.6 }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 pt-[120px] pb-16 md:pt-[150px] md:pb-24">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center">
          {/* LEFT · copy + signature */}
          <div>
            <Reveal>
              <span className="kicker kicker-blue">
                Prepaid + Unlocked · Boost + Simple Mobile Dealer
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="display text-[var(--on-dark)] mt-5 text-[clamp(2.7rem,7.5vw,5.2rem)]">
                Get connected
                <br />
                on <span style={{ color: "var(--blue-l)" }}>Main Street.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="measure mt-6 text-[1.05rem] leading-relaxed text-[var(--muted-d)]">
                New phones, real plans, fast fixes. Phone Booth sets you up while you wait,
                right here in the City of Orange.
              </p>
            </Reveal>

            {/* the signature lives here, cover position */}
            <Reveal delay={0.18}>
              <div className="mt-8 max-w-[420px] card-dark p-5 sm:p-6">
                <SignalSweep />
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href={SITE.phoneHref} className="btn-blue">
                  <PhoneGlyph /> Call the shop
                </a>
                <a href="#services" className="btn-ghost-dark">
                  What we do
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT · the device, photographed clean on dark */}
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--line-d)]">
              <Image
                src="/img/hero-device.jpg"
                alt="A new phone on the counter at Phone Booth, ready to set up"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, transparent 55%, rgba(46,107,255,0.18))" }}
              />
            </div>
            <div className="absolute left-4 bottom-4 chip-dark backdrop-blur-md">
              Apple · Samsung · Motorola
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3h3l1.2 4-2 1.2a11 11 0 005.1 5.1l1.2-2 4 1.2v3a2 2 0 01-2.2 2A16 16 0 014.5 5.2 2 2 0 016.5 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
