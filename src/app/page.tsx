import PageLayout from "@/components/PageLayout";
import PromptBox from "@/components/PromptBox";
import Link from "next/link";

const examples = [
  "I miss the old me.",
  "I hate my work.",
  "I'm afraid to start.",
];

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center py-8 sm:py-14 md:py-20">
        {/* Book cover */}
        <div className="book-cover w-full max-w-xs sm:max-w-sm px-8 sm:px-10 py-12 sm:py-16 text-center mb-10 sm:mb-14">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-4">
            A journal of parallels
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight tracking-tight">
            Story Mirror
          </h1>
          <div className="w-12 h-px bg-white/20 mx-auto my-4" />
          <p className="font-script text-xl sm:text-2xl text-white/60">
            your life, in fiction
          </p>
          <p className="text-[10px] text-white/30 mt-8 tracking-widest">VOL. I</p>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 max-w-lg px-2">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1510] leading-snug tracking-tight">
            Your life, reflected in{" "}
            <span className="highlight-word">stories</span>
          </h2>
          <p className="mt-3 text-[#6b6560] text-sm sm:text-base leading-relaxed">
            Open the page. Write what weighs on you. Find the character who already
            lived your struggle.
          </p>
        </div>

        <PromptBox />

        {/* Example chips — minimal */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md">
          {examples.map((ex) => (
            <Link
              key={ex}
              href={`/reflect?q=${encodeURIComponent(ex)}`}
              className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs text-[#6b6560] border border-[#e0d9ce] bg-white/60 hover:bg-white transition-colors"
            >
              {ex}
            </Link>
          ))}
        </div>

        {/* Secondary actions */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <Link
            href="/chat"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Write in the margin →
          </Link>
          <Link
            href="/daily"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Today&apos;s chapter →
          </Link>
          <Link
            href="/explore"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Browse the library →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
