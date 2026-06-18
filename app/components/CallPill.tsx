"use client";

import { useEffect, useState } from "react";
import { SITE } from "../lib/site";

/** Fixed tap-to-call pill. Full number on wider screens; collapses to a 46px icon under 420px. */
export default function CallPill() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call Phone Booth at ${SITE.phone}`}
      className="fixed z-50 bottom-4 right-4 transition-all duration-300"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(16px)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <span className="btn-blue !rounded-full shadow-[0_14px_40px_-12px_var(--blue-glow)] !px-4 !py-3 max-[420px]:!p-0 max-[420px]:w-[46px] max-[420px]:h-[46px] max-[420px]:justify-center">
        <PhoneGlyph />
        <span className="max-[420px]:hidden font-semibold">{SITE.phone}</span>
      </span>
    </a>
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
