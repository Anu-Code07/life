interface BookSpreadProps {
  children: React.ReactNode;
  className?: string;
  showBookmark?: boolean;
  bookmarked?: boolean;
  variant?: "spread" | "single";
}

export default function BookSpread({
  children,
  className = "",
  showBookmark = false,
  bookmarked = false,
  variant = "spread",
}: BookSpreadProps) {
  return (
    <div
      className={`book-spread relative animate-page-turn ${
        variant === "single" ? "book-spread-single" : ""
      } ${className}`}
    >
      {showBookmark && (
        <div className={`bookmark-ribbon ${bookmarked ? "saved" : "opacity-30"}`} />
      )}
      {children}
    </div>
  );
}
