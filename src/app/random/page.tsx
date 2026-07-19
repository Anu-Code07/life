"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Shuffle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LoadingReflection from "@/components/LoadingReflection";

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
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Random Parallel
          </h1>
          <p className="text-stone-400">
            A story parallel chosen at random — perhaps it&apos;s yours.
          </p>
        </div>

        {loading && <LoadingReflection message="The mirror is turning..." />}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-400/80 mb-4">{error}</p>
            <button
              onClick={fetchRandom}
              className="text-amber-400 hover:text-amber-300 text-sm"
            >
              Try again
            </button>
          </div>
        )}

        {parallel && !loading && (
          <article className="animate-fade-in space-y-8">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs text-amber-400 bg-amber-950/30 mb-4 capitalize">
                {parallel.emotion}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-amber-100/90 italic mb-6">
                {parallel.situation}
              </h2>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-3xl text-amber-50">
                {parallel.character}
              </h3>
              <p className="text-stone-400 mt-1">{parallel.source}</p>
            </div>

            <blockquote className="text-center px-8">
              <p className="font-serif text-lg text-amber-100/90 italic leading-relaxed">
                &ldquo;{parallel.quote}&rdquo;
              </p>
            </blockquote>

            <div className="prose-story">
              {parallel.parallel.split("\n").map((para, i) => (
                <p key={i} className="text-stone-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-amber-900/20">
              <button
                onClick={fetchRandom}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-800/30 text-amber-200 text-sm hover:bg-amber-900/20 transition-all"
              >
                <Shuffle className="w-4 h-4" />
                Another parallel
              </button>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 text-sm hover:from-amber-600 hover:to-amber-500 transition-all"
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
