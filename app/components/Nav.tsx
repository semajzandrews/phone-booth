"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { SITE } from "../lib/site";

const LINKS = [
  { label: "What we do", href: "#services" },
  { label: "Phones", href: "#phones" },
  { label: "Switch", href: "#switch" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(243,241,233,0.82)" : "transparent",
          backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 h-[68px] flex items-center justify-between">
          <a href="#top" aria-label="Phone Booth home">
            <Wordmark />
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.92rem] font-medium text-[var(--ink-soft)] hover:text-[var(--green-d)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={SITE.phoneHref} className="btn-green">
              <PhoneGlyph /> {SITE.phone}
            </a>
          </div>

          {/* mobile */}
          <div className="flex md:hidden items-center gap-2">
            <a href={SITE.phoneHref} aria-label="Call Phone Booth" className="btn-green !p-0 w-[46px] h-[46px] justify-center">
              <PhoneGlyph />
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="w-[46px] h-[46px] rounded-full border border-[var(--line)] flex items-center justify-center bg-[var(--cream)]"
            >
              <span className="relative block w-[18px] h-[12px]">
                <span
                  className="absolute left-0 w-full h-[1.6px] bg-[var(--ink)] transition-all"
                  style={{ top: open ? 5 : 0, transform: open ? "rotate(45deg)" : "none" }}
                />
                <span
                  className="absolute left-0 top-[5px] w-full h-[1.6px] bg-[var(--ink)] transition-all"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 w-full h-[1.6px] bg-[var(--ink)] transition-all"
                  style={{ bottom: open ? 5 : 0, transform: open ? "rotate(-45deg)" : "none" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0 bg-[var(--ink)]/30"
          onClick={() => setOpen(false)}
        />
        <div
          className="absolute top-[68px] inset-x-3 rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-3 shadow-[0_30px_60px_-30px_rgba(21,33,28,0.5)] transition-transform duration-300"
          style={{ transform: open ? "translateY(0)" : "translateY(-12px)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3.5 text-[1.05rem] font-medium border-b border-[var(--line)] last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
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
