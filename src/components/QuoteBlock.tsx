interface QuoteBlockProps {
  quote: string;
  author?: string;
  character?: string;
  source?: string;
  size?: "lg" | "md";
  onShare?: () => void;
  shared?: boolean;
}

export default function QuoteBlock({
  quote,
  author,
  character,
  source,
  size = "lg",
  onShare,
  shared,
}: QuoteBlockProps) {
  const attribution =
    author ?? (character && source ? `${character}, ${source}` : character);

  return (
    <div className="relative text-center">
      <span
        className={`block font-serif text-[#ebe6d6] leading-none select-none ${
          size === "lg" ? "text-7xl sm:text-8xl mb-2" : "text-5xl sm:text-6xl mb-1"
        }`}
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote>
        <p
          className={`font-serif italic text-[#0a0a0a] leading-relaxed ${
            size === "lg"
              ? "text-xl sm:text-2xl md:text-[1.75rem]"
              : "text-lg sm:text-xl"
          }`}
        >
          {quote}
        </p>
        {attribution && (
          <cite className="block mt-4 sm:mt-5 text-sm text-[#6a6a6a] not-italic font-medium">
            — {attribution}
          </cite>
        )}
      </blockquote>
      {onShare && (
        <button
          onClick={onShare}
          className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e5e5e5] bg-[#faf5e8] text-[#3a3a3a] text-sm font-medium hover:bg-[#f5f0e0] transition-colors"
        >
          {shared ? "Copied!" : "Share Quote"}
        </button>
      )}
    </div>
  );
}
