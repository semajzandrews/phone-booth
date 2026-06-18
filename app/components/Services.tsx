"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const ITEMS: { n: string; title: string; body: string; icon: React.ReactNode }[] = [
  {
    n: "01",
    title: "New line, sorted",
    body: "Pick a prepaid plan that fits how you actually use your phone, then walk out activated and ready. Boost, Simple Mobile and the major prepaid networks.",
    icon: <SimIcon />,
  },
  {
    n: "02",
    title: "Upgrade or trade up",
    body: "Move to a newer phone and keep your number, your photos and your apps. We move everything across the counter so nothing gets left behind.",
    icon: <UpIcon />,
  },
  {
    n: "03",
    title: "Pay your bill here",
    body: "Top up minutes or settle your monthly bill in person, in a minute. A real face when something on the account looks off.",
    icon: <BillIcon />,
  },
  {
    n: "04",
    title: "Bring your own device",
    body: "Already love your phone? Bring it in and we will get it on a better plan. Cases, chargers, earbuds and screen protectors on the shelf when you need them.",
    icon: <ByodIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative grid grid-cols-1 lg:grid-cols-2 border-t border-[var(--line)]">
      {/* IMAGE half (sticky on desktop) */}
      <div className="order-1 lg:order-1 min-h-[52svh] lg:min-h-screen">
        <div className="lg:sticky lg:top-0 h-full lg:h-screen min-h-[52svh] lg:min-h-0">
          <div className="relative w-full h-full min-h-[52svh] lg:min-h-0 overflow-hidden">
          <Image
            src="/img/hands-phone.jpg"
            alt="A customer being helped with a phone at the counter"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ filter: "saturate(1.02) contrast(1.02) brightness(0.98)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, rgba(21,33,28,0.32) 0%, rgba(14,143,110,0.1) 60%, rgba(243,241,233,0.05) 100%)",
            }}
          />
          <div className="absolute top-6 left-6 right-6">
            <span className="kicker" style={{ color: "var(--cream)" }}>In the shop</span>
          </div>
          </div>
        </div>
      </div>

      {/* COPY half */}
      <div className="order-2 px-5 sm:px-10 lg:pr-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pl-12 py-16 lg:py-24">
        <Reveal className="kicker mb-4">What we do</Reveal>
        <Reveal as="h2" delay={0.06} className="display" >
          <span style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)" }}>
            Everything a phone needs,<br />
            <span className="italic-accent" style={{ color: "var(--green-d)" }}>handled at the counter.</span>
          </span>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-11">
          {ITEMS.map((it, i) => (
            <Reveal key={it.n} delay={0.1 + i * 0.07} className="group">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ background: "var(--green-wash)", color: "var(--green-d)" }}
                >
                  {it.icon}
                </span>
                <span className="text-[0.78rem] font-semibold tracking-[0.2em] text-[var(--muted)]">{it.n}</span>
              </div>
              <h3 className="display" style={{ fontSize: "1.4rem", fontWeight: 600 }}>{it.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M7 3h7l4 4v14H7a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="8.5" y="12" width="7" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12v6M8.5 15h7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function UpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 19V6m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function BillIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 9h16M8 14h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function ByodIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3" width="10" height="18" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 18h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 7.5l1.4 1.4-1.4 1.4-1.4-1.4z" fill="currentColor" />
    </svg>
  );
}
