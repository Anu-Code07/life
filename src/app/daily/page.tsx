"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LoadingReflection from "@/components/LoadingReflection";
import BookSpread from "@/components/BookSpread";
import BookPage from "@/components/BookPage";
import DropCap from "@/components/DropCap";

interface DailyStory {
  title: string;
  character: string;
  source: string;
  quote: string;
  reflection: string;
  theme: string;
  emotion: string;
}

export default function DailyPage() {
  const [story, setStory] = useState<DailyStory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );

  const fetchDaily = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/daily");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStory(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDaily();
  }, []);

  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a948c] mb-2">
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1a1510]">Today&apos;s Chapter</h1>
          <p className="font-script text-[#9a948c] text-lg mt-1">Chapter {dayOfYear}</p>
        </header>

        {loading && <LoadingReflection message="Opening today's chapter..." />}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={fetchDaily} className="text-sm font-medium hover:underline">
              Try again
            </button>
          </div>
        )}

        {story && !loading && (
          <article className="animate-fade-in space-y-6">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-[#6b6560] bg-[#f5f0e0] mb-3 capitalize">
                {story.theme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1510]">{story.title}</h2>
              <p className="text-[#9a948c] text-sm mt-1">
                {story.character} · {story.source}
              </p>
            </div>

            <BookSpread showBookmark>
              <BookPage side="left" pageNumber={dayOfYear * 2 - 1}>
                <p className="text-[10px] uppercase tracking-wider text-[#9a948c] mb-4 text-center">
                  Epigraph
                </p>
                <blockquote className="text-center">
                  <span className="block font-serif text-5xl text-[#ebe6d6] leading-none mb-2">&ldquo;</span>
                  <p className="font-serif text-lg italic text-[#1a1510] leading-relaxed">
                    {story.quote}
                  </p>
                  <cite className="block mt-3 text-xs text-[#9a948c] not-italic">
                    — {story.character}
                  </cite>
                </blockquote>
              </BookPage>
              <BookPage side="right" pageNumber={dayOfYear * 2}>
                {story.reflection.split("\n").map((para, i) =>
                  i === 0 ? (
                    <DropCap key={i}>{para.trim()}</DropCap>
                  ) : (
                    <p key={i} className="prose-book text-sm mt-3">
                      {para}
                    </p>
                  )
                )}
              </BookPage>
            </BookSpread>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={fetchDaily}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e0d9ce] bg-white text-sm font-medium hover:bg-[#faf5e8] w-full sm:w-auto justify-center"
              >
                <RefreshCw className="w-4 h-4" />
                Another chapter
              </button>
              <Link
                href="/"
                className="flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1a1510] text-white text-sm font-medium hover:bg-[#2a2420] w-full sm:w-auto"
              >
                Write your own
              </Link>
            </div>
          </article>
        )}
      </div>
    </PageLayout>
  );
}
