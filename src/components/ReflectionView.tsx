"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import type { Reflection } from "@/lib/types";
import { saveReflection, isReflectionSaved } from "@/lib/storage";

interface ReflectionViewProps {
  reflection: Reflection;
}

export default function ReflectionView({ reflection }: ReflectionViewProps) {
  const [saved, setSaved] = useState(() => isReflectionSaved(reflection.id));

  const handleSave = () => {
    saveReflection(reflection);
    setSaved(true);
  };

  const { analysis, primaryMatch, similarStories, recommendations, closingThought } =
    reflection;

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
      {/* User input echo */}
      <div className="text-center">
        <p className="text-stone-500 text-sm uppercase tracking-widest mb-3">
          Your reflection
        </p>
        <p className="font-serif text-xl sm:text-2xl text-amber-100/90 italic">
          &ldquo;{reflection.userInput}&rdquo;
        </p>
      </div>

      {/* Emotional analysis */}
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

      {/* Primary match */}
      <section className="space-y-6">
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

        <blockquote className="relative px-8 py-6 text-center">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-amber-800/30 font-serif leading-none">
            &ldquo;
          </span>
          <p className="font-serif text-lg sm:text-xl text-amber-100/90 italic leading-relaxed relative z-10">
            {primaryMatch.quote}
          </p>
          {primaryMatch.quoteAuthor && (
            <cite className="block mt-3 text-sm text-stone-500 not-italic">
              — {primaryMatch.quoteAuthor}
            </cite>
          )}
        </blockquote>

        <div className="prose-story space-y-4">
          <p className="text-stone-300 leading-relaxed">{primaryMatch.storyParallel}</p>
        </div>
      </section>

      {/* Why it fits */}
      <section className="rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-950/20 to-stone-900/30 p-6 sm:p-8">
        <h3 className="font-serif text-xl text-amber-200 mb-4">Why it fits</h3>
        <p className="text-stone-300 leading-relaxed">{primaryMatch.whyItFits}</p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-serif text-xl text-amber-200 mb-4">Reflection</h3>
        <p className="text-stone-300 leading-relaxed">{primaryMatch.reflection}</p>
        <p className="mt-6 font-serif text-lg text-amber-300/80 italic border-l-2 border-amber-700/50 pl-4">
          {primaryMatch.lifeLesson}
        </p>
      </section>

      {/* Similar stories */}
      <section>
        <h3 className="font-serif text-xl text-amber-200 mb-6">Similar Stories</h3>
        <div className="grid gap-3">
          {similarStories.map((story) => (
            <div
              key={story.character}
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

      {/* Recommendations */}
      <section className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "Books", items: recommendations.books, emoji: "📚" },
          { title: "Movies & Shows", items: recommendations.movies, emoji: "🎬" },
          { title: "Games", items: recommendations.games, emoji: "🎮" },
          { title: "Philosophy", items: recommendations.philosophy, emoji: "🏛️" },
        ]
          .filter((section) => section.items.length > 0)
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
          onClick={() => {
            navigator.clipboard.writeText(
              `${primaryMatch.character} — "${primaryMatch.quote}"\n\nFrom Story Mirror`
            );
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-700/30 text-stone-400 text-sm hover:bg-stone-800/30 transition-all"
        >
          <Share2 className="w-4 h-4" />
          Share Quote
        </button>
      </div>
    </div>
  );
}
