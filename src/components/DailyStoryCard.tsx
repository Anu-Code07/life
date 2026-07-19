"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DailyChapter } from "@/lib/knowledge-base/daily-chapters";

interface DailyStoryCardProps {
  chapter: DailyChapter;
  compact?: boolean;
}

const categoryColors: Record<string, string> = {
  Mythology: "bg-[#e8b94a]/25 text-[#6b5040]",
  "Hindu Mythology": "bg-[#ff6b35]/15 text-[#8b3a1a]",
  Literature: "bg-[#f5f0e0] text-[#6b6560]",
  Film: "bg-[#ffb084]/30 text-[#6b5040]",
  Anime: "bg-[#b8a4ed]/30 text-[#4a4060]",
  Games: "bg-[#1a3a3a]/10 text-[#1a3a3a]",
  History: "bg-[#eedcc8] text-[#6b5040]",
  Philosophy: "bg-[#a4d4c5]/30 text-[#3a5048]",
};

export default function DailyStoryCard({ chapter, compact = false }: DailyStoryCardProps) {
  if (compact) {
    return (
      <Link
        href="/daily"
        className="block group w-full max-w-lg mx-auto mt-8 sm:mt-10"
      >
        <div className="relative bg-[#fffef9] border border-[#e0d9ce] rounded-sm p-4 sm:p-5 shadow-[0_4px_20px_rgba(26,21,16,0.06)] hover:shadow-[0_8px_28px_rgba(26,21,16,0.1)] transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9a948c]">
              Today&apos;s chapter
            </span>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[chapter.category] ?? "bg-[#f5f0e0]"}`}
            >
              {chapter.category}
            </span>
          </div>

          <p className="font-serif text-sm sm:text-base italic text-[#1a1510] leading-relaxed line-clamp-2">
            &ldquo;{chapter.quote}&rdquo;
          </p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#ebe6d6]">
            <div>
              <p className="text-sm font-medium text-[#1a1510]">{chapter.character}</p>
              <p className="text-xs text-[#9a948c]">{chapter.source}</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-[#6b6560] group-hover:text-[#1a1510] transition-colors">
              Read chapter <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="animate-fade-in space-y-6">
      {/* Quote first */}
      <section className="text-center px-2">
        <span
          className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-4 capitalize ${categoryColors[chapter.category] ?? "bg-[#f5f0e0]"}`}
        >
          {chapter.theme} · {chapter.category}
        </span>
        <span className="block font-serif text-6xl sm:text-7xl text-[#ebe6d6] leading-none select-none">
          &ldquo;
        </span>
        <blockquote>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#1a1510] leading-snug sm:leading-relaxed">
            {chapter.quote}
          </p>
          <cite className="block mt-4 text-sm text-[#9a948c] not-italic">
            — {chapter.character}, {chapter.source}
          </cite>
        </blockquote>
        <h2 className="font-serif text-lg sm:text-xl text-[#1a1510] mt-6">
          {chapter.title}
        </h2>
      </section>

      {/* Story */}
      <div className="max-w-prose mx-auto px-2">
        <p className="prose-book text-sm sm:text-base drop-cap leading-relaxed">
          {chapter.story}
        </p>
      </div>

      {/* Lesson */}
      <blockquote className="text-center px-6 py-5 bg-[#faf5e8] border border-[#e0d9ce] rounded-sm max-w-lg mx-auto">
        <p className="text-[10px] uppercase tracking-widest text-[#9a948c] mb-2">
          The lesson
        </p>
        <p className="font-serif text-base sm:text-lg italic text-[#1a1510] leading-relaxed">
          {chapter.lesson}
        </p>
      </blockquote>

      {chapter.readMore && (
        <p className="text-center text-xs text-[#9a948c]">
          Read more: <span className="font-medium text-[#6b6560]">{chapter.readMore}</span>
        </p>
      )}
    </article>
  );
}
