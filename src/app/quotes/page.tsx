"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import SearchBar from "@/components/SearchBar";
import { quotes, searchQuotes } from "@/lib/knowledge-base";

export default function QuotesPage() {
  const [query, setQuery] = useState("");
  const filtered = query ? searchQuotes(query) : quotes;

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Quotes
          </h1>
          <p className="text-stone-400">
            Words that have carried others through the same darkness.
          </p>
        </div>

        <SearchBar
          placeholder="Search quotes by text, author, or theme..."
          onSearch={setQuery}
        />

        <div className="mt-10 space-y-6">
          {filtered.map((quote) => (
            <blockquote
              key={quote.id}
              className="relative p-8 rounded-2xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <span className="absolute top-4 left-6 text-5xl text-amber-800/20 font-serif leading-none">
                &ldquo;
              </span>
              <p className="font-serif text-lg sm:text-xl text-amber-100/90 italic leading-relaxed relative z-10">
                {quote.text}
              </p>
              <footer className="mt-4 flex items-center justify-between">
                <cite className="text-stone-400 text-sm not-italic">
                  — {quote.author}, <span className="text-stone-500">{quote.source}</span>
                </cite>
                <div className="flex gap-1.5">
                  {quote.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2 py-0.5 rounded-full text-xs text-stone-500 bg-stone-800/40"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
