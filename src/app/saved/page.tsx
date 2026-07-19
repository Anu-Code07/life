"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
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
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Saved Reflections
          </h1>
          <p className="text-stone-400">
            Stories that spoke to you, kept for another day.
          </p>
        </div>

        {reflections.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-stone-500 mb-6">No saved reflections yet.</p>
            <Link
              href="/"
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm"
            >
              Share what&apos;s on your mind →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {reflections.map((reflection) => (
              <article
                key={reflection.id}
                className="p-6 rounded-2xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-amber-100/90 italic mb-2">
                      &ldquo;{reflection.userInput}&rdquo;
                    </p>
                    <p className="text-stone-400 text-sm">
                      <span className="text-amber-300/80">
                        {reflection.primaryMatch.character}
                      </span>{" "}
                      · {reflection.primaryMatch.source}
                    </p>
                    <p className="text-stone-600 text-xs mt-1">
                      {new Date(reflection.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(reflection.id)}
                    className="p-2 text-stone-600 hover:text-red-400 transition-colors"
                    aria-label="Remove reflection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <blockquote className="mt-4 font-serif text-sm text-amber-200/60 italic border-l-2 border-amber-800/30 pl-4">
                  &ldquo;{reflection.primaryMatch.quote}&rdquo;
                </blockquote>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
