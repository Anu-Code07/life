"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SearchBar from "@/components/SearchBar";
import { characters, searchCharacters } from "@/lib/knowledge-base";

export default function CharactersPage() {
  const [query, setQuery] = useState("");
  const filtered = query ? searchCharacters(query) : characters;

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Browse Characters
          </h1>
          <p className="text-stone-400">
            Find the hero, villain, or wanderer who mirrors your journey.
          </p>
        </div>

        <SearchBar
          placeholder="Search by name, emotion, or theme..."
          onSearch={setQuery}
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((char) => (
            <article
              key={char.id}
              className="group p-6 rounded-2xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-700/30 hover:bg-amber-950/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="font-serif text-xl text-amber-100 group-hover:text-amber-50 transition-colors">
                    {char.name}
                  </h2>
                  <p className="text-stone-500 text-sm">{char.source}</p>
                </div>
                <span className="px-2 py-0.5 rounded text-xs text-amber-600/70 bg-amber-950/30">
                  {char.category}
                </span>
              </div>

              <blockquote className="font-serif text-amber-200/70 italic text-sm mb-4 line-clamp-2">
                &ldquo;{char.quote}&rdquo;
              </blockquote>

              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                {char.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {char.emotions.map((emotion) => (
                  <span
                    key={emotion}
                    className="px-2 py-0.5 rounded-full text-xs text-stone-400 bg-stone-800/40 capitalize"
                  >
                    {emotion}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-stone-500 mt-12">
            No characters found. Try a different search.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
