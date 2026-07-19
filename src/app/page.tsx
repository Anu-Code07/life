import PageLayout from "@/components/PageLayout";
import PromptBox from "@/components/PromptBox";
import DailyStoryTeaser from "@/components/DailyStoryTeaser";
import Link from "next/link";
import { getChapterForToday } from "@/lib/knowledge-base/daily-chapters";

const examples = [
  "I miss the old me.",
  "I hate my work.",
  "I'm afraid to start.",
];

export default function HomePage() {
  const todayChapter = getChapterForToday();

  return (
    <PageLayout>
      <div className="flex flex-col items-center py-8 sm:py-12 md:py-16">
        {/* Book cover */}
        <div className="book-cover w-full max-w-xs sm:max-w-sm px-8 sm:px-10 py-10 sm:py-14 text-center mb-8 sm:mb-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
            A journal of parallels
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight tracking-tight">
            Story Mirror
          </h1>
          <div className="w-12 h-px bg-white/20 mx-auto my-4" />
          <p className="font-script text-xl sm:text-2xl text-white/60">
            your life, in fiction
          </p>
        </div>

        {/* Today's story teaser — see something interesting immediately */}
        <DailyStoryTeaser chapter={todayChapter} />

        <div className="w-full max-w-lg mx-auto my-8 sm:my-10 flex items-center gap-3">
          <div className="flex-1 h-px bg-[#e0d9ce]" />
          <span className="text-[10px] uppercase tracking-widest text-[#9a948c]">
            or write your own
          </span>
          <div className="flex-1 h-px bg-[#e0d9ce]" />
        </div>

        <PromptBox />

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

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <Link
            href="/chat"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Journal →
          </Link>
          <Link
            href="/daily"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            All chapters →
          </Link>
          <Link
            href="/explore"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Library →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
