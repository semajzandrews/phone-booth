import Wordmark from "./Wordmark";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg)] text-[var(--on-dark)] border-t border-[var(--line-d)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Wordmark onDark />
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--muted-d)] max-w-[40ch]">
              {SITE.tagline} The neighborhood phone shop on Main Street, getting the City of Orange
              connected one counter conversation at a time.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-medium text-[var(--blue-l)] hover:text-white transition-colors"
            >
              <FbGlyph /> Find us on Facebook
            </a>
          </div>

          <div>
            <div className="kicker kicker-blue mb-4">Visit</div>
            <p className="text-[0.96rem] leading-relaxed text-[var(--muted-d)]">
              {SITE.address}
              <br />
              {SITE.city}, {SITE.state} {SITE.zip}
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-3 inline-block text-[0.96rem] font-medium hover:text-[var(--blue-l)] transition-colors"
            >
              {SITE.phone}
            </a>
          </div>

          <div>
            <div className="kicker kicker-blue mb-4">Hours</div>
            <ul className="text-[0.92rem] text-[var(--muted-d)] space-y-1.5">
              <li className="flex justify-between gap-3">
                <span>Mon to Sat</span>
                <span className="mono-tab">10:00 AM to 7:00 PM</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Sunday</span>
                <span className="mono-tab">10:00 AM to 5:00 PM</span>
              </li>
            </ul>
            <a href={SITE.phoneHref} className="btn-blue mt-5 !text-[0.88rem] !py-2.5 !px-4">
              Call the shop
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-[var(--line-d)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.82rem] text-[var(--muted-d)]">
            © {new Date().getFullYear()} Phone Booth · {SITE.city}, {SITE.state}
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.82rem] text-[var(--muted-d)] hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)" }} />
            built{" "}
            <span className="font-medium text-[var(--on-dark)] group-hover:text-white">bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FbGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
    </svg>
  );
}
