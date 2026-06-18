export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden className="shrink-0">
        <path d="M16 26 V13" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 18 C16 13.5 12.5 11 8 11 C8 15.5 11.5 18 16 18 Z" fill="var(--green)" />
        <path d="M16 14.5 C16 10 19.5 7.5 24 7.5 C24 12 20.5 14.5 16 14.5 Z" fill="var(--green-l)" />
      </svg>
      <span
        className="display"
        style={{ fontWeight: 600, fontSize: "1.12rem", letterSpacing: "-0.01em" }}
      >
        Phone Booth
      </span>
    </span>
  );
}
