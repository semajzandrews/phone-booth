import Image from "next/image";
import Reveal from "./Reveal";

export default function Community() {
  return (
    <section className="relative bg-[var(--bg)] text-[var(--on-dark)] border-t border-[var(--line-d)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--blue-glow), transparent 64%)", opacity: 0.5 }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal className="kicker kicker-blue mb-4">Your block</Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }}>
                Your block&rsquo;s
                <br />
                <span style={{ color: "var(--blue-l)" }}>phone shop.</span>
              </span>
            </Reveal>
            <Reveal delay={0.12} className="measure mt-6 text-[1.05rem] leading-relaxed text-[var(--muted-d)]">
              Phone Booth is a Main Street fixture in the City of Orange. Real people at the counter
              who set up your phone, sort your plan and know the neighborhood by name.
            </Reveal>

            <Reveal delay={0.18} className="mt-8 grid grid-cols-3 gap-4 max-w-[440px]">
              {[
                { k: "On", v: "Main St" },
                { k: "Walk-ins", v: "Welcome" },
                { k: "Set up", v: "In store" },
              ].map((s) => (
                <div key={s.k} className="card-dark p-4">
                  <div className="kicker kicker-dim mb-1">{s.k}</div>
                  <div className="display text-[1.15rem]" style={{ fontWeight: 600 }}>
                    {s.v}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.14} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--line-d)]">
              <Image
                src="/img/person-editorial.jpg"
                alt="A neighbor in the City of Orange with his phone"
                fill
                sizes="(max-width: 1024px) 45vw, 24vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--line-d)] translate-y-6">
              <Image
                src="/img/person-earbuds.jpg"
                alt="A customer listening on earbuds paired to a new phone"
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
