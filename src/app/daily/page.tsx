"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import LoadingReflection from "@/components/LoadingReflection";

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
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-amber-500/70 mb-2">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Daily Story
          </h1>
          <p className="text-stone-400">
            A story chosen for today&apos;s reflection.
          </p>
        </div>

        {loading && <LoadingReflection message="Choosing today's story..." />}

        {error && (
          <div className="text-center py-16">
            <p className="text-red-400/80 mb-4">{error}</p>
            <button
              onClick={fetchDaily}
              className="text-amber-400 hover:text-amber-300 text-sm"
            >
              Try again
            </button>
          </div>
        )}

        {story && !loading && (
          <article className="animate-fade-in space-y-8">
            <div className="text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs text-amber-400 bg-amber-950/30 mb-4 capitalize">
                {story.theme}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-amber-50 mb-2">
                {story.title}
              </h2>
              <p className="text-stone-400">
                {story.character} · {story.source}
              </p>
            </div>

            <blockquote className="text-center px-8">
              <p className="font-serif text-xl text-amber-100/90 italic leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </p>
            </blockquote>

            <div className="prose-story">
              {story.reflection.split("\n").map((para, i) => (
                <p key={i} className="text-stone-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-amber-900/20">
              <button
                onClick={fetchDaily}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-amber-800/30 text-amber-200 text-sm hover:bg-amber-900/20 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Another story
              </button>
              <Link
                href="/"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 text-sm hover:from-amber-600 hover:to-amber-500 transition-all"
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
