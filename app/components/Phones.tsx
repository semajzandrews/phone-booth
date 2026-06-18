"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const BRANDS = ["Apple", "Samsung", "Motorola", "Boost Mobile", "Simple Mobile"];

const CARDS = [
  {
    img: "/img/devices-color.jpg",
    alt: "Bright new smartphones in several colors",
    tag: "New arrivals",
    title: "The latest phones",
    body: "iPhone, Galaxy and Moto, in the colors people actually want. Hold it before you buy it.",
    span: "lg:col-span-2",
    h: "h-[340px] sm:h-[400px]",
  },
  {
    img: "/img/device-row.jpg",
    alt: "A flatlay of several smartphone models",
    tag: "Every budget",
    title: "Flagship to first phone",
    body: "From a premium upgrade to a reliable first phone for the kids, there is a right one on the shelf.",
    span: "",
    h: "h-[340px] sm:h-[400px]",
  },
  {
    img: "/img/accessories.jpg",
    alt: "A pair of over-ear headphones",
    tag: "On the shelf",
    title: "Accessories that last",
    body: "Cases, chargers, earbuds and screen protectors. The good ones, not the gas-station kind.",
    span: "",
    h: "h-[300px] sm:h-[360px]",
  },
  {
    img: "/img/device-succulent.jpg",
    alt: "A phone resting on a desk beside a small plant",
    tag: "Set up right",
    title: "Walk out ready",
    body: "We move your number, your contacts and your apps so the phone works the second you leave.",
    span: "lg:col-span-2",
    h: "h-[300px] sm:h-[360px]",
  },
];

export default function Phones() {
  return (
    <section id="phones" className="relative border-t border-[var(--line)] bg-[var(--paper-2)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <Reveal className="kicker mb-4">Phones and gear</Reveal>
            <Reveal as="h2" delay={0.06} className="display" >
              <span style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)" }}>
                The brands you know,<br />
                <span className="italic-accent" style={{ color: "var(--green-d)" }}>chosen with care.</span>
              </span>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="flex flex-wrap gap-2 max-w-[420px]">
            {BRANDS.map((b) => (
              <span key={b} className="chip">{b}</span>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.08 + i * 0.06} className={c.span}>
              <article className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] ${c.h}`}>
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: "saturate(1.03) contrast(1.02)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(21,33,28,0.04) 0%, rgba(21,33,28,0.28) 55%, rgba(21,33,28,0.74) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-[var(--cream)]">
                  <span className="kicker mb-2" style={{ color: "var(--green-l)" }}>{c.tag}</span>
                  <h3 className="display" style={{ fontSize: "1.55rem", fontWeight: 600 }}>{c.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[#e7e4d8] max-w-[42ch]">{c.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
