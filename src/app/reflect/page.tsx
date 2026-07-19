"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ReflectionView from "@/components/ReflectionView";
import LoadingReflection from "@/components/LoadingReflection";
import PromptBox from "@/components/PromptBox";
import type { Reflection } from "@/lib/types";

function ReflectContent() {
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

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        setReflection(data);
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
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-3xl text-amber-50 mb-4">Reflect</h1>
        <p className="text-stone-400 mb-8">
          Share what&apos;s on your mind and discover your story parallel.
        </p>
        <PromptBox size="medium" />
      </div>
    );
  }

  if (loading) {
    return <LoadingReflection />;
  }

  if (error) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <p className="text-red-400/80 mb-6">{error}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Try again
        </Link>
      </div>
    );
  }

  if (reflection) {
    return (
      <div className="px-4 py-12">
        <ReflectionView reflection={reflection} />
        <div className="text-center mt-12 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400/70 hover:text-amber-300 transition-colors text-sm"
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

export default function ReflectPage() {
  return (
    <PageLayout>
      <Suspense fallback={<LoadingReflection />}>
        <ReflectContent />
      </Suspense>
    </PageLayout>
  );
}
