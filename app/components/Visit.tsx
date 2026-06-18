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
    // our HOURS array starts Monday(=0); JS getDay Sun=0
    const js = et.getDay();
    setTodayIdx(js === 0 ? 6 : js - 1);
  }, []);

  return (
    <section id="visit" className="relative border-t border-[var(--line)] bg-[var(--ink)] text-[var(--cream)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT - copy + hours */}
          <div>
            <Reveal className="kicker mb-4" >
              <span style={{ color: "var(--green-l)" }}>Come by</span>
            </Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.4rem)", color: "var(--cream)" }}>
                On Main Street,<br />
                <span className="italic-accent" style={{ color: "var(--green-l)" }}>door is open.</span>
              </span>
            </Reveal>

            <Reveal delay={0.12} className="mt-7 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.9rem] font-semibold"
                style={{
                  background: status?.open ? "var(--green)" : "rgba(255,255,255,0.1)",
                  color: status?.open ? "#fff" : "var(--cream)",
                }}
                suppressHydrationWarning
              >
                <span className="w-2 h-2 rounded-full" style={{ background: status?.open ? "#bff4e4" : "#caa" }} />
                {status?.label ?? "Today 10:00 AM to 7:00 PM"}
              </span>
            </Reveal>

            <Reveal delay={0.18} className="mt-9">
              <div className="rounded-2xl border border-white/12 overflow-hidden">
                {HOURS.map((h, i) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between px-5 py-3.5 text-[0.96rem] border-b border-white/8 last:border-0"
                    style={{
                      background: todayIdx === i ? "rgba(14,143,110,0.16)" : "transparent",
                    }}
                    suppressHydrationWarning
                  >
                    <span className="font-medium" style={{ color: todayIdx === i ? "var(--green-l)" : "var(--cream)" }}>
                      {h.day}
                    </span>
                    <span className="text-[#cfd3ca]">{h.range}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-green">{SITE.phone}</a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--cream)" }}
              >
                Get directions
              </a>
            </Reveal>

            <Reveal delay={0.3} className="mt-7 text-[0.95rem] text-[#cfd3ca] leading-relaxed">
              {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}
            </Reveal>
          </div>

          {/* RIGHT - keyless Google map */}
          <Reveal delay={0.16}>
            <div className="relative h-[360px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-white/12">
              <iframe
                title="Phone Booth location on Main Street, Orange NJ"
                src={`https://maps.google.com/maps?q=${SITE.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.18) contrast(1.05)" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
