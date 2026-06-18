"use client";

import { useEffect, useRef, useState } from "react";

/**
 * THE LIVING SIGNAL - the signature moment.
 * A botanical "signal bloom": six fronds that grow from a stem toward full strength
 * as the visitor moves a pointer across it (or scrolls on touch). Replaces the cold
 * 4-bar signal icon with something living and green. Idle self-grows + settles, so it
 * is alive untouched. Pure SVG + rAF. Reduced-motion renders fully connected.
 */

const STAGES = ["Searching", "Acquiring", "Linked", "Strong", "Connected"];

export default function SignalBloom() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0.62); // 0..1 target growth
  const valRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const idlePhase = useRef(0);
  const interacting = useRef(false);
  const [grow, setGrow] = useState(0); // rendered 0..1
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) {
      setGrow(1);
      return;
    }

    const loop = () => {
      // idle breathing target when not interacting
      if (!interacting.current) {
        idlePhase.current += 0.012;
        targetRef.current = 0.66 + Math.sin(idlePhase.current) * 0.22;
      }
      valRef.current += (targetRef.current - valRef.current) * 0.08;
      setGrow(valRef.current);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    interacting.current = true;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    targetRef.current = Math.max(0.08, Math.min(1, x));
  };
  const onLeave = () => {
    interacting.current = false;
  };

  const g = reduced ? 1 : grow;
  const stageIdx = Math.min(STAGES.length - 1, Math.floor(g * STAGES.length - 0.0001));
  const stage = STAGES[Math.max(0, stageIdx)];
  const pct = Math.round(g * 100);

  // six fronds, each grows past a threshold
  const fronds = [0, 1, 2, 3, 4, 5];

  return (
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative select-none"
      style={{ touchAction: "pan-y" }}
    >
      <div className="flex items-end justify-between mb-3">
        <div>
          <div className="kicker mb-1">Live signal</div>
          <div
            className="display"
            style={{ fontSize: "1.65rem", fontWeight: 600, color: "var(--ink)" }}
          >
            {stage}
          </div>
        </div>
        <div className="text-right">
          <div
            className="display"
            style={{ fontSize: "2.4rem", fontWeight: 700, color: "var(--green-d)", lineHeight: 1 }}
          >
            {pct}
            <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>%</span>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 300 132" className="w-full" aria-label="Signal strength shown as a growing botanical bloom">
        {/* ground line */}
        <line x1="18" y1="120" x2="282" y2="120" stroke="var(--line)" strokeWidth="1.5" />
        {/* main stem grows up */}
        <line
          x1="150"
          y1="120"
          x2="150"
          y2={120 - 92 * Math.min(1, g * 1.05)}
          stroke="var(--green-d)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {fronds.map((i) => {
          const thr = i / fronds.length;
          const local = Math.max(0, Math.min(1, (g - thr) / (1 - thr + 0.001)));
          const side = i % 2 === 0 ? -1 : 1;
          const baseY = 118 - i * 15;
          const len = 16 + i * 6;
          const reach = len * local;
          const tipX = 150 + side * reach;
          const tipY = baseY - reach * 0.55;
          const ctrlX = 150 + side * reach * 0.4;
          const ctrlY = baseY - reach * 0.05;
          const leafScale = 0.5 + local * 0.9;
          return (
            <g key={i} opacity={0.25 + local * 0.75}>
              <path
                d={`M150 ${baseY} Q ${ctrlX} ${ctrlY} ${tipX} ${tipY}`}
                stroke={i >= fronds.length - 2 ? "var(--green-l)" : "var(--green)"}
                strokeWidth="2.4"
                fill="none"
                strokeLinecap="round"
              />
              {/* leaf at tip */}
              <ellipse
                cx={tipX}
                cy={tipY}
                rx={5 * leafScale}
                ry={9 * leafScale}
                fill={i >= fronds.length - 2 ? "var(--green-l)" : "var(--green)"}
                transform={`rotate(${side * 38} ${tipX} ${tipY})`}
              />
            </g>
          );
        })}
        {/* crown bud appears near full */}
        <circle
          cx="150"
          cy={120 - 92 * Math.min(1, g * 1.05)}
          r={g > 0.85 ? 5.5 : 0}
          fill="var(--green-l)"
        />
      </svg>

      <p className="mt-3 text-[0.82rem] text-[var(--muted)] flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
        {reduced ? "Strong coverage on every major network." : "Move across to feel it grow. We get you here in store, fast."}
      </p>
    </div>
  );
}
