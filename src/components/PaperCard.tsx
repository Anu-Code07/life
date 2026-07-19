import PaperTape from "./PaperTape";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  tape?: boolean;
  tilt?: "left" | "right" | "none";
  padding?: "sm" | "md" | "lg";
}

const tiltMap = {
  left: "-rotate-1",
  right: "rotate-1",
  none: "",
};

const paddingMap = {
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-7",
  lg: "p-6 sm:p-8 md:p-10",
};

export default function PaperCard({
  children,
  className = "",
  tape = false,
  tilt = "none",
  padding = "md",
}: PaperCardProps) {
  return (
    <div
      className={`relative bg-white rounded-xl sm:rounded-2xl border border-[#e5e5e5] shadow-[0_4px_24px_rgba(10,10,10,0.06),0_1px_3px_rgba(10,10,10,0.04)] ${tiltMap[tilt]} ${paddingMap[padding]} ${className}`}
    >
      {tape && <PaperTape />}
      {children}
    </div>
  );
}
