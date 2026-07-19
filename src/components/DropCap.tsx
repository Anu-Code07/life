interface DropCapProps {
  children: React.ReactNode;
  className?: string;
}

export default function DropCap({ children, className = "" }: DropCapProps) {
  return <p className={`drop-cap prose-book ${className}`}>{children}</p>;
}
