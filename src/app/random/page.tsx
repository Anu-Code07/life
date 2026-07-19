"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Shuffle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LoadingReflection from "@/components/LoadingReflection";
import PaperCard from "@/components/PaperCard";
import QuoteBlock from "@/components/QuoteBlock";

interface RandomParallel {
  situation: string;
  character: string;
  source: string;
  quote: string;
  parallel: string;
  emotion: string;
}

export default function RandomPage() {
  const [parallel, setParallel] = useState<RandomParallel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandom = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/random");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setParallel(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0a0a0a]">Random Parallel</h1>
          <p className="text-[#6a6a6a] mt-2 text-sm sm:text-base">
            A story parallel chosen at random — perhaps it&apos;s yours.
          </p>
        </div>

        {loading && <LoadingReflection message="The mirror is turning..." />}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={fetchRandom} className="text-[#0a0a0a] font-medium text-sm hover:underline">
              Try again
            </button>
          </div>
        )}

        {parallel && !loading && (
          <article className="animate-fade-in space-y-6 sm:space-y-8">
            <div className="text-center px-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#6a6a6a] bg-[#f5f0e0] mb-4 capitalize">
                {parallel.emotion}
              </span>
              <h2 className="font-serif text-lg sm:text-xl text-[#0a0a0a] italic leading-relaxed">
                {parallel.situation}
              </h2>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0a0a0a]">{parallel.character}</h3>
              <p className="text-[#6a6a6a] mt-1 text-sm sm:text-base">{parallel.source}</p>
            </div>

            <PaperCard tape tilt="left" padding="lg" className="bg-[#ffb084]/20">
              <QuoteBlock
                quote={parallel.quote}
                character={parallel.character}
                source={parallel.source}
              />
            </PaperCard>

            <div className="prose-story px-1">
              {parallel.parallel.split("\n").map((para, i) => (
                <p key={i} className="text-[#3a3a3a] leading-relaxed mb-4 text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4">
              <button
                onClick={fetchRandom}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#e5e5e5] bg-white text-[#0a0a0a] text-sm font-semibold hover:bg-[#faf5e8] transition-colors"
              >
                <Shuffle className="w-4 h-4" />
                Another parallel
              </button>
              <Link
                href="/"
                className="flex items-center justify-center px-5 py-3 rounded-xl bg-[#0a0a0a] text-white text-sm font-semibold hover:bg-[#1f1f1f] transition-colors"
              >
                Find my parallel
              </Link>
            </div>
          </article>
        )}
      </div>
    </PageLayout>
  );
}
