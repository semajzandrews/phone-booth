"use client";

import Image from "next/image";
import SignalBloom from "./SignalBloom";
import { SITE } from "../lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] pt-[68px] grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT - copy half */}
      <div className="relative flex items-center px-5 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12 py-12 lg:py-0 order-2 lg:order-1">
        <div className="w-full max-w-[560px]">
          <div className="reveal chip mb-6" style={{ ["--d" as string]: "0.05s" }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
            Main Street · City of Orange, NJ
          </div>

          <h1
            className="reveal display"
            style={{ ["--d" as string]: "0.12s", fontSize: "clamp(2.7rem, 6.4vw, 4.6rem)" }}
          >
            A calmer way<br />
            to get <span className="italic-accent" style={{ color: "var(--green-d)" }}>connected.</span>
          </h1>

          <p
            className="reveal measure mt-6 text-[1.08rem] leading-relaxed text-[var(--ink-soft)]"
            style={{ ["--d" as string]: "0.2s" }}
          >
            No pressure, no upsell maze. Phone Booth is the neighborhood phone shop on Main Street.
            New devices, prepaid plans, activations and the small fixes that keep you talking. We sort
            it out while you wait.
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "0.28s" }}>
            <a href={SITE.phoneHref} className="btn-green">Call the shop</a>
            <a href="#services" className="btn-ghost">See what we do</a>
          </div>

          {/* Signature: the living signal */}
          <div
            className="reveal mt-10 rounded-2xl border border-[var(--line)] bg-[var(--cream)]/80 backdrop-blur-sm p-5 sm:p-6"
            style={{ ["--d" as string]: "0.36s" }}
          >
            <SignalBloom />
          </div>
        </div>
      </div>

      {/* RIGHT - botanical image half */}
      <div className="relative order-1 lg:order-2 min-h-[44svh] lg:min-h-0 overflow-hidden">
        <Image
          src="/img/botanical-monstera.jpg"
          alt="A monstera plant beside a chair in a calm, light-filled room"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ filter: "saturate(1.02) contrast(1.02)" }}
        />
        {/* green-graded overlay to bind to palette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,241,233,0.12) 0%, rgba(14,143,110,0.08) 55%, rgba(21,33,28,0.28) 100%)",
          }}
        />
        {/* floating tag */}
        <div className="absolute bottom-5 left-5 right-5 lg:left-8 lg:right-auto">
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--paper)]/90 backdrop-blur-sm border border-[var(--line)] px-4 py-2.5">
            <span className="display" style={{ fontWeight: 600, color: "var(--ink)" }}>Open today</span>
            <span className="w-px h-4 bg-[var(--line)]" />
            <span className="text-[0.9rem] text-[var(--ink-soft)]">10:00 AM to 7:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
