"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import SearchBar from "@/components/SearchBar";
import { stories, quotes, characters } from "@/lib/knowledge-base";

export default function ExplorePage() {
  const [query, setQuery] = useState("");

  const filteredStories = query
    ? stories.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.themes.some((t) => t.includes(query.toLowerCase()))
      )
    : stories;

  const filteredCharacters = query
    ? characters.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.emotions.some((e) => e.includes(query.toLowerCase()))
      )
    : characters.slice(0, 6);

  const filteredQuotes = query
    ? quotes.filter((q) => q.text.toLowerCase().includes(query.toLowerCase()))
    : quotes.slice(0, 4);

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Explore Stories
          </h1>
          <p className="text-stone-400">
            Browse the library of parallels waiting to mirror your life.
          </p>
        </div>

        <SearchBar onSearch={setQuery} />

        <div className="mt-12 grid gap-12">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-amber-200">Stories</h2>
              <Link href="/books" className="text-sm text-amber-500/70 hover:text-amber-400">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="p-5 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
                >
                  <span className="text-xs text-amber-600/60 uppercase tracking-wider">
                    {story.category}
                  </span>
                  <h3 className="font-serif text-lg text-amber-100 mt-1">
                    {story.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-2 line-clamp-2">
                    {story.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {story.themes.slice(0, 3).map((theme) => (
                      <span
                        key={theme}
                        className="px-2 py-0.5 rounded-full text-xs text-stone-400 bg-stone-800/50"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-amber-200">Characters</h2>
              <Link href="/characters" className="text-sm text-amber-500/70 hover:text-amber-400">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="p-5 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
                >
                  <h3 className="font-serif text-lg text-amber-100">
                    {char.name}
                  </h3>
                  <p className="text-stone-500 text-sm">{char.source}</p>
                  <p className="text-stone-400 text-sm mt-2 italic line-clamp-2">
                    &ldquo;{char.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-amber-200">Quotes</h2>
              <Link href="/quotes" className="text-sm text-amber-500/70 hover:text-amber-400">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredQuotes.map((quote) => (
                <blockquote
                  key={quote.id}
                  className="p-5 rounded-xl border border-stone-800/50 bg-stone-900/20"
                >
                  <p className="font-serif text-amber-100/90 italic">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <cite className="block mt-2 text-sm text-stone-500 not-italic">
                    — {quote.author}, {quote.source}
                  </cite>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
