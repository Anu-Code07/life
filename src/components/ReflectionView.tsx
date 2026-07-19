"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, Check, Share2 } from "lucide-react";
import type { Reflection } from "@/lib/types";
import { saveReflection, isReflectionSaved } from "@/lib/storage";

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
    <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
      {/* User input */}
      <div className="text-center">
        <p className="text-stone-500 text-sm uppercase tracking-widest mb-3">
          Your reflection
        </p>
        <p className="font-serif text-xl sm:text-2xl text-amber-100/90 italic">
          &ldquo;{reflection.userInput}&rdquo;
        </p>
      </div>

      {/* Character */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-amber-500/70 mb-2">
          Your Story Parallel
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-50">
          {primaryMatch.character}
        </h2>
        <p className="text-stone-400 mt-1">
          from <span className="text-amber-300/80">{primaryMatch.source}</span>
        </p>
      </div>

      {/* Quote — first and prominent */}
      <section className="relative rounded-2xl border border-amber-800/30 bg-gradient-to-br from-amber-950/30 to-stone-900/40 px-6 py-10 sm:px-10 sm:py-12 text-center">
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-7xl text-amber-800/25 font-serif leading-none select-none">
          &ldquo;
        </span>
        <blockquote className="relative z-10">
          <p className="font-serif text-xl sm:text-2xl text-amber-50 italic leading-relaxed">
            {primaryMatch.quote}
          </p>
          <cite className="block mt-5 text-sm text-amber-400/70 not-italic">
            {primaryMatch.quoteAuthor
              ? `— ${primaryMatch.quoteAuthor}`
              : `— ${primaryMatch.character}, ${primaryMatch.source}`}
          </cite>
        </blockquote>

        <button
          onClick={handleShare}
          className="relative z-10 mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-700/40 text-amber-200/80 text-sm hover:bg-amber-900/30 transition-all"
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
      </section>

      {/* Why it fits — right after quote */}
      <section className="rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-950/20 to-stone-900/30 p-6 sm:p-8">
        <h3 className="font-serif text-xl text-amber-200 mb-4">Why it fits</h3>
        <p className="text-stone-300 leading-relaxed">{primaryMatch.whyItFits}</p>
      </section>

      {/* Story parallel */}
      <section>
        <h3 className="font-serif text-xl text-amber-200 mb-4">The Story</h3>
        <p className="text-stone-300 leading-relaxed">{primaryMatch.storyParallel}</p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-serif text-xl text-amber-200 mb-4">Reflection</h3>
        <p className="text-stone-300 leading-relaxed">{primaryMatch.reflection}</p>
        <p className="mt-6 font-serif text-lg text-amber-300/80 italic border-l-2 border-amber-700/50 pl-4">
          {primaryMatch.lifeLesson}
        </p>
      </section>

      {/* Emotional landscape */}
      <div className="rounded-2xl border border-amber-900/20 bg-stone-900/30 p-6 backdrop-blur-sm">
        <h3 className="text-xs uppercase tracking-widest text-amber-500/70 mb-4">
          Emotional Landscape
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Primary", value: analysis.primaryEmotion },
            { label: "Secondary", value: analysis.secondaryEmotion },
            { label: "Archetype", value: analysis.narrativeArchetype },
            { label: "Hero Stage", value: analysis.heroStage },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-stone-500 mb-1">{item.label}</p>
              <p className="text-sm text-amber-200/90 capitalize">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Similar stories */}
      {similarStories.length > 0 && (
        <section>
          <h3 className="font-serif text-xl text-amber-200 mb-6">Similar Stories</h3>
          <div className="grid gap-3">
            {similarStories.map((story) => (
              <div
                key={`${story.character}-${story.source}`}
                className="flex items-start gap-4 p-4 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-sm font-serif">
                    {story.character[0]}
                  </span>
                </div>
                <div>
                  <p className="text-amber-100 font-medium">
                    {story.character}{" "}
                    <span className="text-stone-500 font-normal text-sm">
                      · {story.source}
                    </span>
                  </p>
                  <p className="text-stone-400 text-sm mt-1">{story.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommendations */}
      <section className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "Books", items: recommendations.books ?? [], emoji: "📚" },
          { title: "Movies & Shows", items: recommendations.movies ?? [], emoji: "🎬" },
          { title: "Games", items: recommendations.games ?? [], emoji: "🎮" },
          { title: "Philosophy", items: recommendations.philosophy ?? [], emoji: "🏛️" },
        ]
          .filter((section) => (section.items?.length ?? 0) > 0)
          .map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-stone-800/50 bg-stone-900/20 p-5"
            >
              <h4 className="text-amber-300/80 text-sm font-medium mb-3">
                {section.emoji} {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-stone-400 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      {/* Closing thought */}
      <div className="text-center py-8 border-t border-amber-900/20">
        <p className="font-serif text-xl sm:text-2xl text-amber-100/80 italic leading-relaxed max-w-2xl mx-auto">
          {closingThought}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 pb-8">
        <button
          onClick={handleSave}
          disabled={saved}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-800/30 text-amber-200 text-sm hover:bg-amber-900/20 disabled:opacity-60 transition-all"
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
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-700/30 text-stone-400 text-sm hover:bg-stone-800/30 transition-all"
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
