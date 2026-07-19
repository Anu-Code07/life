import PaperCard from "./PaperCard";

interface LoadingReflectionProps {
  message?: string;
}

export default function LoadingReflection({
  message = "Searching through centuries of stories...",
}: LoadingReflectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] px-4 py-12">
      <PaperCard tape tilt="left" padding="lg" className="max-w-sm w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-[#e5e5e5]" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#0a0a0a] animate-spin" />
          </div>
        </div>
        <p className="font-serif text-lg sm:text-xl text-[#0a0a0a] leading-relaxed">
          {message}
        </p>
        <p className="text-[#9a9a9a] text-sm mt-3 font-script text-base">
          Finding the character who lived your struggle...
        </p>
      </PaperCard>
    </div>
  );
}
