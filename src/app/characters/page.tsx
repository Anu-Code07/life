"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import { characters, searchCharacters } from "@/lib/knowledge-base";

export default function CharactersPage() {
  const [query, setQuery] = useState("");
  const filtered = query ? searchCharacters(query) : characters;

  return (
    <PageLayout>
      <div className="py-8 sm:py-12">
        <PageHeader
          title="Browse Characters"
          description="Find the hero, villain, or wanderer who mirrors your journey."
        />
        <SearchBar placeholder="Search by name, emotion, or theme..." onSearch={setQuery} />

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((char, i) => {
            const colors = ["bg-white", "bg-[#f5f0e0]", "bg-[#ffb084]/20", "bg-[#b8a4ed]/20"];
            return (
              <article
                key={char.id}
                className={`p-5 sm:p-6 rounded-2xl border border-[#e5e5e5] ${colors[i % 4]}`}
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="min-w-0">
                    <h2 className="font-serif text-lg sm:text-xl text-[#0a0a0a]">{char.name}</h2>
                    <p className="text-[#9a9a9a] text-sm">{char.source}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold text-[#6a6a6a] bg-white/80 flex-shrink-0">
                    {char.category}
                  </span>
                </div>
                <blockquote className="font-serif text-[#3a3a3a] italic text-sm mb-4 line-clamp-2">
                  &ldquo;{char.quote}&rdquo;
                </blockquote>
                <p className="text-[#6a6a6a] text-sm leading-relaxed mb-4">{char.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {char.emotions.map((emotion) => (
                    <span
                      key={emotion}
                      className="px-2 py-0.5 rounded-full text-xs text-[#6a6a6a] bg-white/70 capitalize"
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#9a9a9a] mt-12">No characters found.</p>
        )}
      </div>
    </PageLayout>
  );
}
