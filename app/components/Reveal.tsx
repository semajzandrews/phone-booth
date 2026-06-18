export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={`reveal ${className}`} style={{ ["--d" as string]: `${delay}s` }}>
      {children}
    </Tag>
  );
}
