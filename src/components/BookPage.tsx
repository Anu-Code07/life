interface BookPageProps {
  children: React.ReactNode;
  side?: "left" | "right" | "single";
  pageNumber?: number;
  className?: string;
}

export default function BookPage({
  children,
  side = "single",
  pageNumber,
  className = "",
}: BookPageProps) {
  const sideClass =
    side === "left"
      ? "book-page-left"
      : side === "right"
        ? "book-page-right"
        : "";

  const numClass =
    side === "left"
      ? "page-number-left"
      : side === "right"
        ? "page-number-right"
        : "left-1/2 -translate-x-1/2";

  return (
    <div className={`book-page ${sideClass} ${className}`}>
      {children}
      {pageNumber !== undefined && (
        <span className={`page-number ${numClass}`}>— {pageNumber} —</span>
      )}
    </div>
  );
}
