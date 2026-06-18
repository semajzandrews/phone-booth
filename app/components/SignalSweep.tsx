"use client";

/**
 * THE SIGNATURE · "Signal Sweep"
 * A true device-UI signal meter. The visitor sweeps left->right (drag on touch, pointer-X on desktop)
 * and the signal cells fill from "Searching" to "Connected, you're set." Maps the craft verb ACTIVATE.
 * Idle: breathing + self-sweep so it is alive untouched. Reduced-motion: renders fully connected, static.
 * Pure SVG + rAF, GPU-cheap, no per-frame allocations in the tick.
 */
import { useEffect, useRef, useState } from "react";

const CELLS = 14;
const STATES = [
  { at: 0.0, label: "Searching" },
  { at: 0.4, label: "Activating" },
  { at: 0.82, label: "Connected, you're set" },
];

function labelFor(p: number) {
  let l = STATES[0].label;
  for (const s of STATES) if (p >= s.at) l = s.label;
  return l;
}

export default function SignalSweep() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(SVGRectElement | null)[]>([]);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  // progress (0..1) driven by pointer; eased toward target in rAF
  const target = useRef(0.0);
  const current = useRef(0.0);
  const idlePhase = useRef(0);
  const interacting = useRef(false);
  const rafId = useRef(0);
  const [connected, setConnected] = useState(false);
  const connectedRef = useRef(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cells = cellRefs.current;
    const readout = readoutRef.current;
    const pct = pctRef.current;

    // ---- reduced motion: paint fully connected, no rAF ----
    if (reduce) {
      cells.forEach((c) => {
        if (c) {
          c.style.opacity = "1";
          c.setAttribute("fill", "var(--blue)");
        }
      });
      if (readout) readout.textContent = "Connected, you're set";
      if (pct) pct.textContent = "100";
      setConnected(true);
      return;
    }

    const wrap = wrapRef.current;
    if (!wrap) return;

    let lastLabel = "";
    let lastPct = -1;

    const onMove = (clientX: number) => {
      const r = wrap.getBoundingClientRect(); // cached per event, not per frame
      const x = (clientX - r.left) / r.width;
      target.current = Math.max(0, Math.min(1, x));
      interacting.current = true;
    };
    const onPointerMove = (e: PointerEvent) => onMove(e.clientX);
    const onLeave = () => {
      interacting.current = false;
    };

    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerdown", onPointerMove);
    wrap.addEventListener("pointerleave", onLeave);

    // scroll-coupled fallback nudge (mobile mid tier): map a little scroll progress in first viewport
    const onScroll = () => {
      if (interacting.current) return;
      const y = window.scrollY;
      const vh = window.innerHeight || 1;
      const sp = Math.max(0, Math.min(1, y / (vh * 0.7)));
      // blend scroll into idle so it reads alive while scrolling past
      target.current = Math.max(target.current * 0.9, sp);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      // idle breathing self-sweep when untouched
      if (!interacting.current) {
        idlePhase.current += 0.012;
        const breathe = 0.34 + 0.30 * (0.5 + 0.5 * Math.sin(idlePhase.current));
        target.current = Math.max(target.current * 0.96, breathe);
      }
      current.current += (target.current - current.current) * 0.14;
      const p = current.current;
      const lit = p * CELLS;

      for (let i = 0; i < CELLS; i++) {
        const c = cells[i];
        if (!c) continue;
        const cellOn = lit - i;
        const o = cellOn <= 0 ? 0.16 : cellOn >= 1 ? 1 : 0.16 + 0.84 * cellOn;
        c.style.opacity = o.toFixed(3);
        // top cells glow cyan as you reach full
        c.setAttribute("fill", i >= CELLS - 3 && cellOn >= 0.6 ? "var(--cyan)" : "var(--blue)");
      }

      const labelNow = labelFor(p);
      if (readout && labelNow !== lastLabel) {
        readout.textContent = labelNow;
        lastLabel = labelNow;
      }
      const pctNow = Math.round(p * 100);
      if (pct && pctNow !== lastPct) {
        pct.textContent = String(pctNow);
        lastPct = pctNow;
      }
      const isConn = p >= 0.82;
      if (isConn !== connectedRef.current) {
        connectedRef.current = isConn;
        setConnected(isConn);
        if (isConn && "vibrate" in navigator) {
          try {
            navigator.vibrate(18);
          } catch {}
        }
      }

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerdown", onPointerMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // staggered bar heights, rising left to right like a signal climb
  const heights = Array.from({ length: CELLS }, (_, i) => 16 + (i / (CELLS - 1)) * 84);

  return (
    <div
      ref={wrapRef}
      className="select-none touch-pan-y"
      style={{ cursor: "ew-resize" }}
      role="img"
      aria-label="Signal strength climbing to connected"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="kicker kicker-dim">Live signal</span>
        <span className="kicker kicker-blue mono-tab">
          <span ref={pctRef}>0</span>%
        </span>
      </div>

      <svg viewBox="0 0 280 120" className="w-full h-auto" aria-hidden>
        {heights.map((h, i) => {
          const w = (280 - 6) / CELLS;
          const x = i * w + 3;
          const y = 116 - h;
          return (
            <rect
              key={i}
              ref={(el) => {
                cellRefs.current[i] = el;
              }}
              x={x}
              y={y}
              width={w - 4}
              height={h}
              rx={2.5}
              fill="var(--blue)"
              style={{ opacity: 0.16, transition: "fill 0.4s ease" }}
            />
          );
        })}
      </svg>

      <div className="flex items-center justify-between mt-3">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full transition-colors duration-300"
            style={{ background: connected ? "var(--cyan)" : "var(--muted-d)" }}
          />
          <span ref={readoutRef} className="text-[0.95rem] font-medium text-[var(--on-dark)]">
            Searching
          </span>
        </span>
        <span className="kicker kicker-dim">Sweep to connect</span>
      </div>
    </div>
  );
}
