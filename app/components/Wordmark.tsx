export default function Wordmark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const text = onDark ? "var(--on-dark)" : "var(--ink)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* signal-bars-in-a-booth mark: a small device with rising signal bars */}
      <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden className="shrink-0">
        <rect x="8" y="3.5" width="16" height="25" rx="3.5" fill="none" stroke={text} strokeWidth="1.8" />
        <rect x="6.6" y="20" width="2.4" height="4" rx="1" fill="var(--blue)" />
        <rect x="11.4" y="17" width="2.4" height="7" rx="1" fill="var(--blue)" />
        <rect x="16.2" y="13.5" width="2.4" height="10.5" rx="1" fill="var(--blue)" />
        <rect x="21" y="9.5" width="2.4" height="14.5" rx="1" fill="var(--blue-l)" />
      </svg>
      <span
        className="display"
        style={{ fontWeight: 600, fontSize: "1.12rem", letterSpacing: "-0.015em", color: text }}
      >
        Phone Booth
      </span>
    </span>
  );
}
