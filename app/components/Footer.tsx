import Wordmark from "./Wordmark";
import { SITE } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--cream)] border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="[&_span]:text-[var(--cream)]">
              <Wordmark />
            </div>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[#cfd3ca] max-w-[40ch]">
              {SITE.tagline} The neighborhood phone shop on Main Street, getting Orange connected one
              counter conversation at a time.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-medium text-[var(--green-l)] hover:text-[#bff4e4] transition-colors"
            >
              <FbGlyph /> Find us on Facebook
            </a>
          </div>

          <div>
            <div className="kicker mb-4" style={{ color: "var(--green-l)" }}>Visit</div>
            <p className="text-[0.96rem] leading-relaxed text-[#cfd3ca]">
              {SITE.address}<br />
              {SITE.city}, {SITE.state} {SITE.zip}
            </p>
            <a href={SITE.phoneHref} className="mt-3 inline-block text-[0.96rem] font-medium hover:text-[var(--green-l)] transition-colors">
              {SITE.phone}
            </a>
          </div>

          <div>
            <div className="kicker mb-4" style={{ color: "var(--green-l)" }}>Hours</div>
            <ul className="text-[0.92rem] text-[#cfd3ca] space-y-1.5">
              <li className="flex justify-between gap-3"><span>Mon to Sat</span><span>10 AM to 7 PM</span></li>
              <li className="flex justify-between gap-3"><span>Sunday</span><span>10 AM to 5 PM</span></li>
            </ul>
            <a href={SITE.phoneHref} className="btn-green mt-5 !text-[0.88rem] !py-2.5 !px-4">Call the shop</a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.82rem] text-[#9aa39b]">
            © {new Date().getFullYear()} Phone Booth · {SITE.city}, {SITE.state}
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.82rem] text-[#9aa39b] hover:text-[var(--cream)] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
            Built by <span className="font-medium text-[#cfd3ca] group-hover:text-[var(--cream)]">bysemaj.com</span>
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
