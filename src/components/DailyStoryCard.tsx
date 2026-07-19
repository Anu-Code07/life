"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DailyChapter } from "@/lib/knowledge-base/daily-chapters";
import { normalizeDailyChapter } from "@/lib/knowledge-base/normalize-daily-chapter";
import BookSpread from "./BookSpread";
import BookPage from "./BookPage";
import ChapterDivider from "./ChapterDivider";
import DropCap from "./DropCap";

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
  const full = normalizeDailyChapter(chapter);

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
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[full.category] ?? "bg-[#f5f0e0]"}`}
            >
              {full.theme}
            </span>
          </div>

          <p className="font-serif text-sm sm:text-base italic text-[#1a1510] leading-relaxed line-clamp-2">
            &ldquo;{full.quote}&rdquo;
          </p>
          <p className="mt-2 text-xs text-[#6b6560] leading-relaxed line-clamp-2">
            {full.context}
          </p>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#ebe6d6]">
            <div>
              <p className="text-sm font-medium text-[#1a1510]">{full.character}</p>
              <p className="text-xs text-[#9a948c]">{full.source}</p>
            </div>
            <span className="flex items-center gap-1 text-xs text-[#6b6560] group-hover:text-[#1a1510] transition-colors">
              Read full chapter <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  const storyFirstChar = full.story.trim()[0] ?? "";
  const storyRest = full.story.trim().slice(1);

  return (
    <article className="animate-fade-in space-y-8 pb-4">
      {/* Quote — hero epigraph */}
      <section className="text-center px-2 sm:px-4">
        <span
          className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-4 capitalize ${categoryColors[full.category] ?? "bg-[#f5f0e0]"}`}
        >
          {full.theme} · {full.category}
        </span>
        <span
          className="block font-serif text-6xl sm:text-7xl text-[#ebe6d6] leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#1a1510] leading-snug sm:leading-relaxed">
            {full.quote}
          </p>
          <cite className="block mt-4 text-sm text-[#9a948c] not-italic">
            — {full.character}, {full.source}
          </cite>
        </blockquote>
        <h2 className="font-serif text-lg sm:text-xl text-[#1a1510] mt-6">
          {full.title}
        </h2>
      </section>

      <ChapterDivider />

      {/* What led to + Why it matters — open book spread */}
      <BookSpread showBookmark>
        <BookPage side="left" pageNumber={1}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            What led to this
          </p>
          <p className="prose-book text-sm sm:text-base leading-relaxed">
            {full.context}
          </p>
        </BookPage>

        <BookPage side="right" pageNumber={2}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            Why it matters today
          </p>
          <p className="prose-book text-sm sm:text-base leading-relaxed">
            {full.whyItMatters}
          </p>
        </BookPage>
      </BookSpread>

      {/* The story */}
      <BookSpread variant="single">
        <BookPage side="single" pageNumber={3}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            The Story
          </p>
          <DropCap>
            {storyFirstChar}
            {storyRest}
          </DropCap>
        </BookPage>
      </BookSpread>

      {/* Reflection + Lesson */}
      <BookSpread>
        <BookPage side="left" pageNumber={4}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            Reflection
          </p>
          <p className="prose-book text-sm sm:text-base leading-relaxed">
            {full.reflection}
          </p>
        </BookPage>

        <BookPage side="right" pageNumber={5}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            The lesson
          </p>
          <p className="margin-note text-sm sm:text-base italic leading-relaxed">
            {full.lesson}
          </p>
        </BookPage>
      </BookSpread>

      {/* Margin notes */}
      {full.similarStories.length > 0 && (
        <div className="px-2">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4 text-center">
            Margin Notes
          </p>
          <div className="space-y-3 max-w-lg mx-auto">
            {full.similarStories.map((story) => (
              <p
                key={`${story.character}-${story.source}`}
                className="margin-note text-sm"
              >
                <strong className="text-[#1a1510] not-italic font-medium">
                  {story.character}
                </strong>{" "}
                <span className="text-[#9a948c]">({story.source})</span> —{" "}
                {story.reason}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Further reading */}
      {full.readMore && (
        <div className="max-w-md mx-auto px-4">
          <ChapterDivider />
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-3 text-center">
            Further Reading
          </p>
          <p className="text-center text-sm text-[#6b6560] font-serif italic">
            📖 {full.readMore}
          </p>
        </div>
      )}

      {/* Closing thought */}
      <blockquote className="text-center px-4 max-w-xl mx-auto border-t border-[#e0d9ce] pt-8">
        <p className="font-serif text-base sm:text-lg italic text-[#6b6560] leading-relaxed">
          {full.closingThought}
        </p>
      </blockquote>
    </article>
  );
}
