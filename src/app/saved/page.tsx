"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import PaperCard from "@/components/PaperCard";
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
          title="Saved Reflections"
          description="Stories that spoke to you, kept for another day."
        />

        {reflections.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#9a9a9a] mb-6">No saved reflections yet.</p>
            <Link href="/" className="text-[#0a0a0a] font-medium hover:underline text-sm">
              Share what&apos;s on your mind →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {reflections.map((reflection, i) => (
              <PaperCard
                key={reflection.id}
                tape={i === 0}
                tilt={i % 2 === 0 ? "left" : "right"}
                padding="md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-[#0a0a0a] italic mb-2 text-sm sm:text-base">
                      &ldquo;{reflection.userInput}&rdquo;
                    </p>
                    <p className="text-[#6a6a6a] text-sm">
                      <span className="font-medium text-[#3a3a3a]">
                        {reflection.primaryMatch.character}
                      </span>{" "}
                      · {reflection.primaryMatch.source}
                    </p>
                    <p className="text-[#9a9a9a] text-xs mt-1">
                      {new Date(reflection.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(reflection.id)}
                    className="p-2 text-[#9a9a9a] hover:text-red-500 transition-colors flex-shrink-0"
                    aria-label="Remove reflection"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <blockquote className="mt-4 font-serif text-sm text-[#6a6a6a] italic border-l-[3px] border-[#eedcc8] pl-4">
                  &ldquo;{reflection.primaryMatch.quote}&rdquo;
                </blockquote>
              </PaperCard>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
