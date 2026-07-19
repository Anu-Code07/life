interface PaperTapeProps {
  className?: string;
  width?: string;
}

export default function PaperTape({ className = "", width = "w-24 sm:w-32" }: PaperTapeProps) {
  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 ${width} h-7 sm:h-8 ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-sm opacity-90"
        style={{
          background:
            "linear-gradient(180deg, rgba(238,220,200,0.95) 0%, rgba(221,200,175,0.85) 50%, rgba(238,220,200,0.9) 100%)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
          transform: "rotate(-1deg)",
        }}
      />
    </div>
  );
}
