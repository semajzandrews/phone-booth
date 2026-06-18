import { SITE } from "./lib/site";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] bg-[var(--bg)] text-[var(--on-dark)] grid-tex flex items-center justify-center px-6">
      <div className="text-center max-w-[34rem]">
        <span className="kicker kicker-blue">404 · no signal</span>
        <h1 className="display mt-4 text-[clamp(2.4rem,8vw,4.5rem)]">
          Lost the signal.
          <br />
          <span style={{ color: "var(--blue-l)" }}>Let&rsquo;s get you back.</span>
        </h1>
        <p className="mt-5 text-[1.02rem] text-[var(--muted-d)]">
          That page is off the grid. The shop is right here on Main Street.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="btn-blue">
            Back to home
          </a>
          <a href={SITE.phoneHref} className="btn-ghost-dark">
            Call the shop
          </a>
        </div>
      </div>
    </main>
  );
}
