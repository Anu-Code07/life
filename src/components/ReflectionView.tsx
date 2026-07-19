"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, Check, Share2 } from "lucide-react";
import type { Reflection } from "@/lib/types";
import { saveReflection, isReflectionSaved } from "@/lib/storage";
import PaperCard from "./PaperCard";
import QuoteBlock from "./QuoteBlock";

interface ReflectionViewProps {
  reflection: Reflection;
}

export default function ReflectionView({ reflection }: ReflectionViewProps) {
  const [saved, setSaved] = useState(() => isReflectionSaved(reflection.id));
  const [shared, setShared] = useState(false);

  const handleSave = () => {
    saveReflection(reflection);
    setSaved(true);
  };

  const buildShareText = () => {
    const { primaryMatch, closingThought } = reflection;
    const attribution = primaryMatch.quoteAuthor
      ? `— ${primaryMatch.quoteAuthor}`
      : `— ${primaryMatch.character}, ${primaryMatch.source}`;

    return `"${primaryMatch.quote}"\n${attribution}\n\n${closingThought}\n\n— Story Mirror`;
  };

  const handleShare = async () => {
    const text = buildShareText();

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${reflection.primaryMatch.character} — Story Mirror`,
          text,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
        return;
      }

      await navigator.clipboard.writeText(text);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;

      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        window.prompt("Copy this quote:", text);
      }
    }
  };

  const {
    analysis,
    primaryMatch,
    similarStories = [],
    recommendations = { books: [], movies: [], games: [], philosophy: [] },
    closingThought,
  } = reflection;

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 animate-fade-in pb-8">
      {/* User input — torn page feel */}
      <div className="text-center px-2">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-2">
          Your reflection
        </p>
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0a0a0a] italic leading-snug">
          &ldquo;{reflection.userInput}&rdquo;
        </p>
      </div>

      {/* Character header */}
      <div className="text-center">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-1">
          Your Story Parallel
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0a0a0a] tracking-tight">
          {primaryMatch.character}
        </h2>
        <p className="text-[#6a6a6a] text-sm sm:text-base mt-1">
          from <span className="font-medium text-[#3a3a3a]">{primaryMatch.source}</span>
        </p>
      </div>

      {/* Quote — first, with tape */}
      <PaperCard tape tilt="right" padding="lg" className="bg-[#faf5e8]">
        <QuoteBlock
          quote={primaryMatch.quote}
          author={primaryMatch.quoteAuthor}
          character={primaryMatch.character}
          source={primaryMatch.source}
          onShare={handleShare}
          shared={shared}
        />
      </PaperCard>

      {/* Why it fits */}
      <PaperCard padding="md">
        <h3 className="font-serif text-lg sm:text-xl text-[#0a0a0a] mb-3">
          Why it fits
        </h3>
        <p className="text-[#3a3a3a] leading-relaxed text-sm sm:text-base">
          {primaryMatch.whyItFits}
        </p>
      </PaperCard>

      {/* Story */}
      <section>
        <h3 className="font-serif text-lg sm:text-xl text-[#0a0a0a] mb-3 px-1">
          The Story
        </h3>
        <p className="text-[#3a3a3a] leading-relaxed text-sm sm:text-base px-1">
          {primaryMatch.storyParallel}
        </p>
      </section>

      {/* Reflection */}
      <PaperCard padding="md" className="bg-[#f5f0e0]">
        <h3 className="font-serif text-lg sm:text-xl text-[#0a0a0a] mb-3">
          Reflection
        </h3>
        <p className="text-[#3a3a3a] leading-relaxed text-sm sm:text-base">
          {primaryMatch.reflection}
        </p>
        <p className="mt-5 font-serif text-base sm:text-lg text-[#0a0a0a] italic border-l-[3px] border-[#e8b94a] pl-4">
          {primaryMatch.lifeLesson}
        </p>
      </PaperCard>

      {/* Emotional landscape */}
      <div className="rounded-2xl border border-[#e5e5e5] bg-white p-4 sm:p-6">
        <h3 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-4">
          Emotional Landscape
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: "Primary", value: analysis.primaryEmotion },
            { label: "Secondary", value: analysis.secondaryEmotion },
            { label: "Archetype", value: analysis.narrativeArchetype },
            { label: "Hero Stage", value: analysis.heroStage },
          ].map((item) => (
            <div key={item.label} className="bg-[#faf5e8] rounded-xl p-3">
              <p className="text-[10px] sm:text-xs text-[#9a9a9a] mb-1">{item.label}</p>
              <p className="text-sm text-[#0a0a0a] font-medium capitalize">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar stories */}
      {similarStories.length > 0 && (
        <section>
          <h3 className="font-serif text-lg sm:text-xl text-[#0a0a0a] mb-4">
            Similar Stories
          </h3>
          <div className="grid gap-3">
            {similarStories.map((story, i) => {
              const colors = ["bg-[#b8a4ed]", "bg-[#ffb084]", "bg-[#e8b94a]", "bg-[#a4d4c5]", "bg-[#f5f0e0]"];
              const bg = colors[i % colors.length];
              const textDark = bg === "bg-[#f5f0e0]" || bg === "bg-[#a4d4c5]";
              return (
                <div
                  key={`${story.character}-${story.source}`}
                  className={`flex items-start gap-3 sm:gap-4 p-4 rounded-2xl ${bg} ${textDark ? "text-[#0a0a0a]" : "text-white"}`}
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${textDark ? "bg-white/60" : "bg-white/20"}`}>
                    <span className="font-serif text-sm">{story.character[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">
                      {story.character}{" "}
                      <span className={`font-normal text-xs sm:text-sm ${textDark ? "text-[#6a6a6a]" : "text-white/70"}`}>
                        · {story.source}
                      </span>
                    </p>
                    <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${textDark ? "text-[#3a3a3a]" : "text-white/85"}`}>
                      {story.reason}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Recommendations */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "Books", items: recommendations.books ?? [], emoji: "📚", color: "bg-[#f5f0e0]" },
          { title: "Movies & Shows", items: recommendations.movies ?? [], emoji: "🎬", color: "bg-[#ffb084]/30" },
          { title: "Games", items: recommendations.games ?? [], emoji: "🎮", color: "bg-[#b8a4ed]/30" },
          { title: "Philosophy", items: recommendations.philosophy ?? [], emoji: "🏛️", color: "bg-[#e8b94a]/25" },
        ]
          .filter((section) => (section.items?.length ?? 0) > 0)
          .map((section) => (
            <div
              key={section.title}
              className={`rounded-2xl border border-[#e5e5e5] p-4 sm:p-5 ${section.color}`}
            >
              <h4 className="text-[#0a0a0a] text-sm font-semibold mb-3">
                {section.emoji} {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-[#3a3a3a] text-xs sm:text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      {/* Closing thought */}
      <PaperCard tape tilt="left" padding="lg" className="text-center bg-white">
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0a0a0a] italic leading-relaxed">
          {closingThought}
        </p>
      </PaperCard>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
        <button
          onClick={handleSave}
          disabled={saved}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#e5e5e5] bg-white text-[#0a0a0a] text-sm font-semibold hover:bg-[#faf5e8] disabled:opacity-60 transition-colors"
        >
          {saved ? (
            <>
              <BookmarkCheck className="w-4 h-4" />
              Saved
            </>
          ) : (
            <>
              <Bookmark className="w-4 h-4" />
              Save Reflection
            </>
          )}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#1f1f1f] transition-colors"
        >
          {shared ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              Share Quote
            </>
          )}
        </button>
      </div>
    </div>
  );
}
