import Image from "next/image";
import Reveal from "./Reveal";
import { SITE } from "../lib/site";

const FIXES = ["Screens", "Batteries", "Charging ports", "Quick diagnostics"];

export default function Repairs() {
  return (
    <section id="repairs" className="relative bg-[var(--paper)] text-[var(--ink)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* COPY */}
          <div>
            <Reveal className="kicker kicker-ink mb-4">Repairs while you wait</Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2rem, 4.4vw, 3.2rem)" }}>
                Cracked screen?
                <br />
                <span style={{ color: "var(--blue-d)" }}>Fixed while you wait.</span>
              </span>
            </Reveal>
            <Reveal delay={0.12} className="measure mt-6 text-[1.02rem] leading-relaxed text-[var(--ink-soft)]">
              Screens, batteries and charging ports. Bring it in and we look at it on the spot,
              tell you straight what it needs, and get you back in your day.
            </Reveal>

            <Reveal delay={0.18} className="mt-7 flex flex-wrap gap-2">
              {FIXES.map((f) => (
                <span key={f} className="chip-ink">
                  <Dot /> {f}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.26} className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-blue">
                Call about a repair
              </a>
              <a href="#visit" className="btn-ghost-ink">
                Bring it by
              </a>
            </Reveal>
          </div>

          {/* IMAGE pair */}
          <Reveal delay={0.14} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--line)] translate-y-4">
              <Image
                src="/img/repair-screwdriver.jpg"
                alt="A hand working a small screwdriver on a phone at the repair bench"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--line)]">
              <Image
                src="/img/repair-parts.jpg"
                alt="A phone opened on the repair mat with its parts laid out"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)" }} />;
}
