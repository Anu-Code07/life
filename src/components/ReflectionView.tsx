"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, Check, Share2 } from "lucide-react";
import type { Reflection } from "@/lib/types";
import { saveReflection, isReflectionSaved } from "@/lib/storage";
import BookSpread from "./BookSpread";
import BookPage from "./BookPage";
import ChapterDivider from "./ChapterDivider";
import DropCap from "./DropCap";

interface ReflectionViewProps {
  reflection: Reflection;
}

export default function ReflectionView({ reflection }: ReflectionViewProps) {
  const [saved, setSaved] = useState(() => isReflectionSaved(reflection.id));
  const [shared, setShared] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  const { primaryMatch, similarStories = [], recommendations, closingThought } = reflection;

  const attribution =
    primaryMatch.quoteAuthor ??
    `${primaryMatch.character}, ${primaryMatch.source}`;

  const handleSave = () => {
    saveReflection(reflection);
    setSaved(true);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 600);
  };

  const buildShareText = () =>
    `"${primaryMatch.quote}"\n— ${attribution}\n\n${closingThought}\n\n— Story Mirror`;

  const handleShare = async () => {
    const text = buildShareText();
    try {
      if (navigator.share) {
        await navigator.share({ title: `${primaryMatch.character} — Story Mirror`, text });
      } else {
        await navigator.clipboard.writeText(text);
      }
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(text);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        window.prompt("Copy:", text);
      }
    }
  };

  const furtherReading = [
    ...(recommendations?.books ?? []).map((b) => `📖 ${b}`),
    ...(recommendations?.movies ?? []).map((m) => `🎬 ${m}`),
    ...(recommendations?.games ?? []).map((g) => `🎮 ${g}`),
    ...(recommendations?.philosophy ?? []).map((p) => `🏛 ${p}`),
  ];

  const storyFirstChar = primaryMatch.storyParallel.trim()[0] ?? "";
  const storyRest = primaryMatch.storyParallel.trim().slice(1);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-10">
      {/* QUOTE FIRST — hero epigraph, above the fold */}
      <section className="text-center px-3 sm:px-6 pt-2">
        <span
          className="block font-serif text-7xl sm:text-8xl text-[#ebe6d6] leading-none select-none -mb-2"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#1a1510] leading-snug sm:leading-relaxed">
            {primaryMatch.quote}
          </p>
          <cite className="block mt-4 sm:mt-5 text-sm text-[#9a948c] not-italic">
            — {attribution}
          </cite>
        </blockquote>

        {/* Character + source right under quote */}
        <div className="mt-6 sm:mt-8">
          <p className="font-serif text-lg sm:text-xl text-[#1a1510]">
            {primaryMatch.character}
          </p>
          <p className="font-script text-base text-[#9a948c] mt-0.5">
            {primaryMatch.source}
          </p>
        </div>

        {/* User's words — small context */}
        <p className="mt-4 text-xs sm:text-sm text-[#9a948c] italic max-w-sm mx-auto">
          You wrote: &ldquo;{reflection.userInput}&rdquo;
        </p>

        {/* Quick actions under quote */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#e0d9ce] bg-white text-[#6b6560] text-xs sm:text-sm hover:bg-[#faf5e8] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            {shared ? "Copied!" : "Share quote"}
          </button>
          <button
            onClick={handleSave}
            disabled={saved}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1a1510] text-white text-xs sm:text-sm hover:bg-[#2a2420] disabled:opacity-60 transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5" />
            {saved ? "Saved" : "Bookmark"}
          </button>
        </div>
      </section>

      <ChapterDivider />

      {/* Why it fits — open book spread */}
      <BookSpread showBookmark bookmarked={saved || justSaved}>
        <BookPage side="left" pageNumber={1}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            Why it fits
          </p>
          <p className="prose-book text-sm sm:text-base">{primaryMatch.whyItFits}</p>
        </BookPage>

        <BookPage side="right" pageNumber={2}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            The lesson
          </p>
          <p className="margin-note text-sm sm:text-base italic">{primaryMatch.lifeLesson}</p>
        </BookPage>
      </BookSpread>

      {/* Story prose */}
      <BookSpread variant="single">
        <BookPage side="single" pageNumber={3}>
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            The Story
          </p>
          <DropCap>
            {storyFirstChar}
            {storyRest}
          </DropCap>
          <ChapterDivider />
          <p className="prose-book text-sm sm:text-base">{primaryMatch.reflection}</p>
        </BookPage>
      </BookSpread>

      {/* Margin notes */}
      {similarStories.length > 0 && (
        <div className="px-2">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-4 text-center">
            Margin Notes
          </p>
          <div className="space-y-3 max-w-lg mx-auto">
            {similarStories.map((story) => (
              <p key={`${story.character}-${story.source}`} className="margin-note text-sm">
                <strong className="text-[#1a1510] not-italic font-medium">
                  {story.character}
                </strong>{" "}
                <span className="text-[#9a948c]">({story.source})</span> — {story.reason}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Further reading */}
      {furtherReading.length > 0 && (
        <div className="max-w-md mx-auto px-4">
          <ChapterDivider />
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9a948c] mb-3 text-center">
            Further Reading
          </p>
          <ul className="space-y-1.5 text-sm text-[#6b6560]">
            {furtherReading.map((item) => (
              <li key={item} className="text-center font-serif italic">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Closing thought */}
      <blockquote className="text-center px-4 max-w-xl mx-auto border-t border-[#e0d9ce] pt-8">
        <p className="font-serif text-base sm:text-lg italic text-[#6b6560] leading-relaxed">
          {closingThought}
        </p>
      </blockquote>

      {/* Bottom actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={handleSave}
          disabled={saved}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e0d9ce] bg-white text-[#1a1510] text-sm font-medium hover:bg-[#faf5e8] disabled:opacity-60 w-full sm:w-auto justify-center"
        >
          {saved ? (
            <>
              <BookmarkCheck className="w-4 h-4 text-[#c45c4a]" />
              Bookmarked
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4" />
              Bookmark this chapter
            </>
          )}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1a1510] text-white text-sm font-medium hover:bg-[#2a2420] w-full sm:w-auto justify-center"
        >
          {shared ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              Share quote
            </>
          )}
        </button>
      </div>
    </div>
  );
}
