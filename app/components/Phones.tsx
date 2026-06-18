import Image from "next/image";
import Reveal from "./Reveal";

const BRANDS = ["Apple", "Samsung", "Motorola", "Boost Mobile", "Simple Mobile"];

const CARDS = [
  {
    img: "/img/device-titanium.jpg",
    alt: "A new flagship smartphone shown clean on a dark studio background",
    tag: "New arrivals",
    title: "The latest phones",
    body: "iPhone, Galaxy and Moto, in the colors people actually want. Hold it before you buy it.",
    span: "lg:col-span-2",
    h: "h-[340px] sm:h-[400px]",
  },
  {
    img: "/img/person-woman.jpg",
    alt: "A customer in the City of Orange setting up her new phone",
    tag: "Set up right",
    title: "Walk out ready",
    body: "We move your number, contacts and apps so the phone works the second you leave.",
    span: "",
    h: "h-[340px] sm:h-[400px]",
  },
  {
    img: "/img/accessories.jpg",
    alt: "Phone accessories, chargers and cables laid out neatly",
    tag: "On the shelf",
    title: "Accessories that last",
    body: "Cases, chargers, earbuds and screen protectors. The good ones, not the gas-station kind.",
    span: "",
    h: "h-[300px] sm:h-[360px]",
  },
  {
    img: "/img/person-call.jpg",
    alt: "A neighbor on Main Street using his phone",
    tag: "Every budget",
    title: "Flagship to first phone",
    body: "From a premium upgrade to a reliable first phone for the kids, there is a right one on the shelf.",
    span: "lg:col-span-2",
    h: "h-[300px] sm:h-[360px]",
  },
];

export default function Phones() {
  return (
    <section id="phones" className="relative bg-[var(--bg)] text-[var(--on-dark)] grid-tex">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <Reveal className="kicker kicker-blue mb-4">Phones and gear</Reveal>
            <Reveal as="h2" delay={0.06} className="display">
              <span style={{ fontSize: "clamp(2rem, 4.2vw, 3.1rem)" }}>
                The brands you know,
                <br />
                <span style={{ color: "var(--blue-l)" }}>on the shelf today.</span>
              </span>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="flex flex-wrap gap-2 max-w-[420px]">
            {BRANDS.map((b) => (
              <span key={b} className="chip-dark">
                {b}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.08 + i * 0.06} className={c.span}>
              <article
                className={`group relative overflow-hidden rounded-2xl border border-[var(--line-d)] ${c.h}`}
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(13,15,18,0.05) 0%, rgba(13,15,18,0.34) 52%, rgba(13,15,18,0.82) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="kicker kicker-blue mb-2">{c.tag}</span>
                  <h3 className="display" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[#d4d9e2] max-w-[42ch]">
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
