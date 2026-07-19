"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import type { Reflection } from "@/lib/types";
import { getSavedReflections, removeReflection } from "@/lib/storage";

export default function SavedPage() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    setReflections(getSavedReflections());
  }, []);

  const handleRemove = (id: string) => {
    removeReflection(id);
    setReflections((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <PageHeader
          title="Bookmarks"
          description="Chapters you marked to return to."
        />

        {reflections.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-8 h-12 bg-[#c45c4a] mx-auto mb-4 opacity-30 clip-path-bookmark" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)" }} />
            <p className="text-[#9a948c] mb-6 font-script text-lg">No bookmarks yet.</p>
            <Link href="/" className="text-[#1a1510] font-medium text-sm hover:underline">
              Open the book →
            </Link>
          </div>
        ) : (
          <div className="space-y-0">
            {reflections.map((reflection, i) => (
              <div
                key={reflection.id}
                className="relative group"
                style={{ marginLeft: `${Math.min(i * 4, 16)}px` }}
              >
                {/* Bookmark ribbon */}
                <div
                  className="absolute -top-0 right-6 w-5 h-8 z-10"
                  style={{
                    background: "#c45c4a",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
                  }}
                />
                <article className="book-page rounded-t-sm border border-[#e0d9ce] border-b-0 shadow-sm mb-px pr-12">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-[#9a948c] mb-1">
                        Ch. {reflections.length - i} · {reflection.primaryMatch.character}
                      </p>
                      <p className="font-serif italic text-[#1a1510] text-sm sm:text-base mb-2">
                        &ldquo;{reflection.userInput}&rdquo;
                      </p>
                      <blockquote className="font-serif text-xs sm:text-sm text-[#6b6560] italic border-l-2 border-[#eedcc8] pl-3">
                        &ldquo;{reflection.primaryMatch.quote}&rdquo;
                      </blockquote>
                      <p className="text-[10px] text-[#9a948c] mt-2">
                        {new Date(reflection.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(reflection.id)}
                      className="p-2 text-[#9a948c] hover:text-red-500 transition-colors flex-shrink-0"
                      aria-label="Remove bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
