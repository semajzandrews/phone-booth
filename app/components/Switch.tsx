"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { SITE } from "../lib/site";

const STEPS = [
  {
    n: "I",
    title: "Tell us how you use it",
    body: "Talk and text, or streaming all day. We point you at the plan that fits, not the priciest one.",
  },
  {
    n: "II",
    title: "We do the heavy part",
    body: "Activation, number transfer, contacts and apps moved over the counter while you wait. No homework for you.",
  },
  {
    n: "III",
    title: "Walk out connected",
    body: "Your phone works before you reach the door, and we are right here on Main Street if anything needs a second look.",
  },
];

export default function Switch() {
  return (
    <section id="switch" className="relative grid grid-cols-1 lg:grid-cols-2 border-t border-[var(--line)]">
      {/* COPY half (left on desktop, opposite of Services for split rhythm) */}
      <div className="order-2 lg:order-1 px-5 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12 py-16 lg:py-24">
        <Reveal className="kicker mb-4">Switching is easy</Reveal>
        <Reveal as="h2" delay={0.06} className="display">
          <span style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)" }}>
            Switch in one visit,<br />
            <span className="italic-accent" style={{ color: "var(--green-d)" }}>keep everything.</span>
          </span>
        </Reveal>
        <Reveal delay={0.12} className="measure mt-5 text-[1.05rem] leading-relaxed text-[var(--ink-soft)]">
          Coming from another carrier sounds like a hassle. It is not, when a person does it with you.
          Here is the whole thing.
        </Reveal>

        <ol className="mt-10 space-y-7">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} as="li" delay={0.16 + i * 0.08}>
              <div className="flex gap-5">
                <div
                  className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border"
                  style={{ borderColor: "var(--green)", color: "var(--green-d)" }}
                >
                  <span className="display" style={{ fontWeight: 600, fontSize: "1rem" }}>{s.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="display" style={{ fontSize: "1.35rem", fontWeight: 600 }}>{s.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] leading-relaxed text-[var(--ink-soft)] max-w-[44ch]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.42} className="mt-10">
          <a href={SITE.phoneHref} className="btn-green">Ask us about switching</a>
        </Reveal>
      </div>

      {/* IMAGE half */}
      <div className="order-1 lg:order-2 min-h-[48svh] lg:min-h-screen">
        <div className="lg:sticky lg:top-0 h-full lg:h-screen min-h-[48svh] lg:min-h-0">
          <div className="relative w-full h-full min-h-[48svh] lg:min-h-0 overflow-hidden">
          <Image
            src="/img/phone-in-hand.jpg"
            alt="A smartphone held in hand, set up and ready"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ filter: "saturate(1.0) contrast(1.03) hue-rotate(-6deg)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(200deg, rgba(14,143,110,0.16) 0%, rgba(21,33,28,0.18) 55%, rgba(21,33,28,0.42) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8">
            <div className="rounded-2xl bg-[var(--paper)]/92 backdrop-blur-sm border border-[var(--line)] p-5">
              <div className="kicker mb-1.5">No surprises</div>
              <p className="display text-[var(--ink)]" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
                You will know the plan and the price before anything is activated.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
