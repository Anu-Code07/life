"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
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
      <div className="py-8 sm:py-12">
        <PageHeader
          title="Explore Stories"
          description="Browse the library of parallels waiting to mirror your life."
        />
        <SearchBar onSearch={setQuery} />

        <div className="mt-10 sm:mt-12 grid gap-10 sm:gap-12">
          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-xl text-[#0a0a0a]">Stories</h2>
              <Link href="/books" className="text-sm text-[#6a6a6a] hover:text-[#0a0a0a]">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStories.map((story, i) => {
                const colors = ["bg-[#f5f0e0]", "bg-[#ffb084]/25", "bg-[#b8a4ed]/25"];
                return (
                  <div
                    key={story.id}
                    className={`p-5 rounded-2xl border border-[#e5e5e5] ${colors[i % 3]}`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9a9a9a]">
                      {story.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#0a0a0a] mt-1">{story.title}</h3>
                    <p className="text-[#6a6a6a] text-sm mt-2 line-clamp-2">{story.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {story.themes.slice(0, 3).map((theme) => (
                        <span
                          key={theme}
                          className="px-2 py-0.5 rounded-full text-xs text-[#6a6a6a] bg-white/60"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-xl text-[#0a0a0a]">Characters</h2>
              <Link href="/characters" className="text-sm text-[#6a6a6a] hover:text-[#0a0a0a]">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCharacters.map((char) => (
                <div
                  key={char.id}
                  className="p-5 rounded-2xl border border-[#e5e5e5] bg-white"
                >
                  <h3 className="font-serif text-lg text-[#0a0a0a]">{char.name}</h3>
                  <p className="text-[#9a9a9a] text-sm">{char.source}</p>
                  <p className="text-[#6a6a6a] text-sm mt-2 italic line-clamp-2">
                    &ldquo;{char.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-xl text-[#0a0a0a]">Quotes</h2>
              <Link href="/quotes" className="text-sm text-[#6a6a6a] hover:text-[#0a0a0a]">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredQuotes.map((quote) => (
                <blockquote
                  key={quote.id}
                  className="p-5 sm:p-6 rounded-2xl border border-[#e5e5e5] bg-[#faf5e8]"
                >
                  <p className="font-serif text-[#0a0a0a] italic text-sm sm:text-base">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <cite className="block mt-2 text-xs sm:text-sm text-[#9a9a9a] not-italic">
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
