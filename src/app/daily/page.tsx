"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw, Share2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import DailyStoryCard from "@/components/DailyStoryCard";
import type { DailyChapter } from "@/lib/knowledge-base/daily-chapters";

export default function DailyPage() {
  const [chapter, setChapter] = useState<DailyChapter | null>(null);
  const [chapterNumber, setChapterNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );

  const fetchChapter = async (random = false) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (random) {
        params.set("mode", "random");
        if (chapter?.id) params.set("exclude", chapter.id);
      }
      const res = await fetch(`/api/daily?${params}`);
      const data = await res.json();
      setChapter(data);
      setChapterNumber(data.chapterNumber ?? dayOfYear);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChapter(false);
  }, []);

  const handleShare = async () => {
    if (!chapter) return;
    const text = `"${chapter.quote}"\n— ${chapter.character}, ${chapter.source}\n\n${chapter.lesson}\n\n— Story Mirror`;
    try {
      if (navigator.share) {
        await navigator.share({ title: chapter.title, text });
      } else {
        await navigator.clipboard.writeText(text);
      }
    } catch {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <PageLayout>
      <div className="py-6 sm:py-10 max-w-3xl mx-auto">
        <header className="text-center mb-8 sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a948c] mb-2">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1a1510]">
            Daily Chapters
          </h1>
          <p className="font-script text-[#9a948c] text-lg mt-1">
            Stories of struggle, bravery & becoming
          </p>
          <p className="text-[10px] text-[#9a948c] mt-2 tracking-wider">
            Chapter {chapterNumber}
          </p>
        </header>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-[#e0d9ce] border-t-[#1a1510] rounded-full animate-spin mb-4" />
            <p className="font-serif text-[#6b6560]">Opening today&apos;s chapter...</p>
          </div>
        ) : chapter ? (
          <>
            <DailyStoryCard chapter={chapter} />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
              <button
                onClick={() => fetchChapter(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e0d9ce] bg-white text-sm font-medium hover:bg-[#faf5e8] w-full sm:w-auto justify-center"
              >
                <RefreshCw className="w-4 h-4" />
                Random chapter
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#e0d9ce] bg-white text-sm font-medium hover:bg-[#faf5e8] w-full sm:w-auto justify-center"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <Link
                href="/"
                className="flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1a1510] text-white text-sm font-medium hover:bg-[#2a2420] w-full sm:w-auto"
              >
                Find your parallel
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </PageLayout>
  );
}
