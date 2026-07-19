import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DailyChapter } from "@/lib/knowledge-base/daily-chapters";

interface DailyStoryTeaserProps {
  chapter: DailyChapter;
}

const categoryColors: Record<string, string> = {
  Mythology: "bg-[#e8b94a]/25 text-[#6b5040]",
  Literature: "bg-[#f5f0e0] text-[#6b6560]",
  Film: "bg-[#ffb084]/30 text-[#6b5040]",
  Anime: "bg-[#b8a4ed]/30 text-[#4a4060]",
  Games: "bg-[#1a3a3a]/10 text-[#1a3a3a]",
  History: "bg-[#eedcc8] text-[#6b5040]",
  Philosophy: "bg-[#a4d4c5]/30 text-[#3a5048]",
};

export default function DailyStoryTeaser({ chapter }: DailyStoryTeaserProps) {
  return (
    <Link href="/daily" className="block group w-full max-w-lg mx-auto">
      <div className="relative bg-[#fffef9] border border-[#e0d9ce] rounded-sm overflow-hidden shadow-[0_4px_24px_rgba(26,21,16,0.07)] hover:shadow-[0_8px_32px_rgba(26,21,16,0.12)] transition-all duration-300">
        {/* Tape */}
        <div
          className="absolute -top-0 left-1/2 -translate-x-1/2 w-20 h-6 z-10 opacity-90"
          style={{
            background: "linear-gradient(180deg, #eedcc8 0%, #ddc8af 100%)",
            clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <div className="p-5 sm:p-6 pt-7">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9a948c]">
              Today&apos;s chapter
            </span>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[chapter.category] ?? "bg-[#f5f0e0]"}`}
            >
              {chapter.theme}
            </span>
          </div>

          <span className="block font-serif text-4xl text-[#ebe6d6] leading-none mb-1 select-none">
            &ldquo;
          </span>
          <p className="font-serif text-base sm:text-lg italic text-[#1a1510] leading-relaxed line-clamp-3">
            {chapter.quote}
          </p>

          <div className="flex items-end justify-between mt-4 pt-4 border-t border-[#ebe6d6]">
            <div>
              <p className="font-serif text-base text-[#1a1510]">{chapter.character}</p>
              <p className="text-xs text-[#9a948c] mt-0.5">{chapter.source}</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium text-[#6b6560] group-hover:text-[#1a1510] transition-colors pb-0.5">
              Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
