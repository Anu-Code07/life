"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import SearchBar from "@/components/SearchBar";
import { quotes, searchQuotes } from "@/lib/knowledge-base";

export default function QuotesPage() {
  const [query, setQuery] = useState("");
  const filtered = query ? searchQuotes(query) : quotes;

  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <PageHeader
          title="Quotes"
          description="Words that have carried others through the same darkness."
        />
        <SearchBar placeholder="Search quotes..." onSearch={setQuery} />

        <div className="mt-8 sm:mt-10 space-y-5">
          {filtered.map((quote, i) => (
            <blockquote
              key={quote.id}
              className={`relative p-6 sm:p-8 rounded-2xl border border-[#e5e5e5] ${
                i % 2 === 0 ? "bg-white" : "bg-[#faf5e8]"
              }`}
            >
              <span className="absolute top-3 left-5 text-5xl text-[#ebe6d6] font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="font-serif text-base sm:text-lg text-[#0a0a0a] italic leading-relaxed relative z-10">
                {quote.text}
              </p>
              <footer className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <cite className="text-[#6a6a6a] text-sm not-italic">
                  — {quote.author}, {quote.source}
                </cite>
                <div className="flex flex-wrap gap-1.5">
                  {quote.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2 py-0.5 rounded-full text-xs text-[#9a9a9a] bg-[#f5f0e0]"
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
