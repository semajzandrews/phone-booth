import Image from "next/image";
import Reveal from "./Reveal";

const ITEMS: { n: string; title: string; body: string; icon: React.ReactNode }[] = [
  {
    n: "01",
    title: "Activate a new line",
    body: "New number or keep the one you have. Boost Mobile and Simple Mobile set up at the counter, activated before you leave.",
    icon: <SimIcon />,
  },
  {
    n: "02",
    title: "Upgrade your phone",
    body: "Move to a newer phone and keep your number, your photos and your apps. We move everything across the counter so nothing gets left behind.",
    icon: <UpIcon />,
  },
  {
    n: "03",
    title: "Pay your bill",
    body: "Drop in and pay your phone bill in person, in a minute. A real face at the counter when something on the account looks off.",
    icon: <BillIcon />,
  },
  {
    n: "04",
    title: "Bring your own device",
    body: "Already love your phone? Bring it in and we get it on a plan that fits. Cases, chargers, earbuds and screen protectors on the shelf.",
    icon: <ByodIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--paper)] text-[var(--ink)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* LEFT · heading + a real image */}
          <div>
            <Reveal className="kicker kicker-ink mb-4">What we do</Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)" }}>
                Everything a phone needs,
                <br />
                <span style={{ color: "var(--blue-d)" }}>handled at the counter.</span>
              </span>
            </Reveal>
            <Reveal delay={0.12} className="mt-6 measure text-[1rem] leading-relaxed text-[var(--muted)]">
              Walk in with a question, walk out connected. Phones, plans, bill pay and accessories,
              all in one stop on Main Street.
            </Reveal>

            <Reveal delay={0.16} className="mt-8">
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-[var(--line)]">
                <Image
                  src="/img/device-box.jpg"
                  alt="A new phone in its box, ready to set up at the counter"
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* RIGHT · service card grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {ITEMS.map((it, i) => (
              <Reveal key={it.n} delay={0.1 + i * 0.07} className="card-ink p-6 group">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{ background: "var(--blue-wash)", color: "var(--blue-d)" }}
                  >
                    {it.icon}
                  </span>
                  <span className="text-[0.74rem] font-semibold tracking-[0.2em] text-[var(--muted)] mono-tab">
                    {it.n}
                  </span>
                </div>
                <h3 className="display" style={{ fontSize: "1.32rem", fontWeight: 600 }}>
                  {it.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">{it.body}</p>
              </Reveal>
            ))}
          </div>
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
