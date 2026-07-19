"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ReflectionView from "@/components/ReflectionView";
import LoadingReflection from "@/components/LoadingReflection";
import PromptBox from "@/components/PromptBox";
import DailyStoryTeaser from "@/components/DailyStoryTeaser";
import type { Reflection } from "@/lib/types";
import type { DailyChapter } from "@/lib/knowledge-base/daily-chapters";

const examples = [
  "I miss the old me.",
  "I hate my work.",
  "I'm afraid to start.",
];

interface ReflectPageContentProps {
  todayChapter: DailyChapter;
}

function ReflectInner({ todayChapter }: ReflectPageContentProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [reflection, setReflection] = useState<Reflection | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchReflection = async () => {
      setLoading(true);
      setError(null);
      setReflection(null);

      try {
        const res = await fetch("/api/reflect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input: query }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong");
        setReflection(data);
        window.scrollTo(0, 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchReflection();
  }, [query]);

  if (!query) {
    return (
      <div className="flex flex-col items-center py-8 sm:py-12 md:py-14">
        <div className="text-center mb-6 max-w-lg px-2">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1510] leading-snug tracking-tight">
            What&apos;s weighing on{" "}
            <span className="highlight-word">your mind?</span>
          </h1>
          <p className="mt-3 text-[#6b6560] text-sm sm:text-base leading-relaxed">
            Write freely. Find the character who already lived your struggle.
          </p>
        </div>

        <PromptBox />

        <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-md">
          {examples.map((ex) => (
            <Link
              key={ex}
              href={`/?q=${encodeURIComponent(ex)}`}
              className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs text-[#6b6560] border border-[#e0d9ce] bg-white/60 hover:bg-white transition-colors"
            >
              {ex}
            </Link>
          ))}
        </div>

        <DailyStoryTeaser chapter={todayChapter} />

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/chat"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Journal →
          </Link>
          <Link
            href="/daily"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Daily chapter →
          </Link>
          <Link
            href="/explore"
            className="text-[#6b6560] hover:text-[#1a1510] font-medium underline-offset-4 hover:underline"
          >
            Library →
          </Link>
        </div>
      </div>
    );
  }

  if (loading) return <LoadingReflection />;

  if (error) {
    return (
      <div className="max-w-lg mx-auto py-16 text-center">
        <p className="text-red-500 mb-6">{error}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1a1510] font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Try again
        </Link>
      </div>
    );
  }

  if (reflection) {
    return (
      <div className="py-4 sm:py-8">
        <ReflectionView reflection={reflection} />
        <div className="text-center mt-10 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6b6560] hover:text-[#1a1510] text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Reflect on something else
          </Link>
        </div>
      </div>
    );
  }

  return null;
}

export default function ReflectPageContent({ todayChapter }: ReflectPageContentProps) {
  return (
    <PageLayout>
      <Suspense fallback={<LoadingReflection />}>
        <ReflectInner todayChapter={todayChapter} />
      </Suspense>
    </PageLayout>
  );
}
