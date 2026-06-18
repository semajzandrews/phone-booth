"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { SITE, HOURS, openStatus } from "../lib/site";

export default function Visit() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);
  const [todayIdx, setTodayIdx] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    setStatus(openStatus(now));
    const et = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const js = et.getDay(); // Sun=0
    setTodayIdx(js === 0 ? 6 : js - 1);
  }, []);

  return (
    <section id="visit" className="relative border-t border-[var(--line-d)] bg-[var(--bg-2)] text-[var(--on-dark)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT - copy + hours */}
          <div>
            <Reveal className="kicker kicker-blue mb-4">Come by</Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)" }}>
                Stop by the Booth,
                <br />
                <span style={{ color: "var(--blue-l)" }}>door is open.</span>
              </span>
            </Reveal>

            <Reveal delay={0.12} className="mt-7 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold"
                style={{
                  background: status?.open ? "var(--blue)" : "rgba(255,255,255,0.08)",
                  color: status?.open ? "#fff" : "var(--on-dark)",
                }}
                suppressHydrationWarning
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: status?.open ? "var(--cyan)" : "var(--muted-d)" }}
                />
                {status?.label ?? "Today 10:00 AM to 7:00 PM"}
              </span>
            </Reveal>

            <Reveal delay={0.18} className="mt-9">
              <div className="rounded-2xl border border-[var(--line-d)] overflow-hidden">
                {HOURS.map((h, i) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between px-5 py-3.5 text-[0.96rem] border-b border-[var(--line-d)] last:border-0"
                    style={{ background: todayIdx === i ? "var(--blue-wash)" : "transparent" }}
                    suppressHydrationWarning
                  >
                    <span
                      className="font-medium"
                      style={{ color: todayIdx === i ? "var(--blue-l)" : "var(--on-dark)" }}
                    >
                      {h.day}
                    </span>
                    <span className="text-[var(--muted-d)] mono-tab">{h.range}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-blue">
                {SITE.phone}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-dark"
              >
                Get directions
              </a>
            </Reveal>

            <Reveal delay={0.3} className="mt-7 text-[0.95rem] text-[var(--muted-d)] leading-relaxed">
              {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}
            </Reveal>
          </div>

          {/* RIGHT - keyless Google map */}
          <Reveal delay={0.16}>
            <div className="map-frame h-[360px] lg:h-full min-h-[360px]">
              <iframe
                title={`Phone Booth location, ${SITE.address}, ${SITE.city}, ${SITE.state} ${SITE.zip}`}
                src={`https://maps.google.com/maps?q=${SITE.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
