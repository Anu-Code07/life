interface LoadingReflectionProps {
  message?: string;
}

export default function LoadingReflection({
  message = "Searching through centuries of stories...",
}: LoadingReflectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-amber-800/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-500 animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-amber-700/50 animate-spin animation-delay-150" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
      </div>
      <p className="font-serif text-lg text-amber-200/80 text-center animate-pulse">
        {message}
      </p>
      <p className="text-stone-500 text-sm mt-2 text-center max-w-md">
        Finding the character who lived your struggle...
      </p>
    </div>
  );
}
