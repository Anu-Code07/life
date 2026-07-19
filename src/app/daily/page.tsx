"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LoadingReflection from "@/components/LoadingReflection";
import PaperCard from "@/components/PaperCard";
import QuoteBlock from "@/components/QuoteBlock";

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
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-2">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0a0a0a]">Daily Story</h1>
          <p className="text-[#6a6a6a] mt-2 text-sm sm:text-base">
            A story chosen for today&apos;s reflection.
          </p>
        </div>

        {loading && <LoadingReflection message="Choosing today's story..." />}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={fetchDaily} className="text-[#0a0a0a] font-medium text-sm hover:underline">
              Try again
            </button>
          </div>
        )}

        {story && !loading && (
          <article className="animate-fade-in space-y-6 sm:space-y-8">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#6a6a6a] bg-[#f5f0e0] mb-4 capitalize">
                {story.theme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0a0a0a] mb-2">{story.title}</h2>
              <p className="text-[#6a6a6a] text-sm sm:text-base">
                {story.character} · {story.source}
              </p>
            </div>

            <PaperCard tape tilt="right" padding="lg" className="bg-[#faf5e8]">
              <QuoteBlock
                quote={story.quote}
                character={story.character}
                source={story.source}
              />
            </PaperCard>

            <div className="prose-story px-1">
              {story.reflection.split("\n").map((para, i) => (
                <p key={i} className="text-[#3a3a3a] leading-relaxed mb-4 text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4">
              <button
                onClick={fetchDaily}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#e5e5e5] bg-white text-[#0a0a0a] text-sm font-semibold hover:bg-[#faf5e8] transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Another story
              </button>
              <Link
                href="/"
                className="flex items-center justify-center px-5 py-3 rounded-xl bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#1f1f1f] transition-colors"
              >
                Reflect on your life
              </Link>
            </div>
          </article>
        )}
      </div>
    </PageLayout>
  );
}
