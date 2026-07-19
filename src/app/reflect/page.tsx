"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ReflectionView from "@/components/ReflectionView";
import LoadingReflection from "@/components/LoadingReflection";
import PromptBox from "@/components/PromptBox";
import PageHeader from "@/components/PageHeader";
import type { Reflection } from "@/lib/types";
import { useEffect, useState } from "react";

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
        if (!res.ok) throw new Error(data.error || "Something went wrong");
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
      <div className="py-10 sm:py-16 max-w-2xl mx-auto text-center">
        <PageHeader
          title="Reflect"
          description="Share what's on your mind and discover your story parallel."
        />
        <PromptBox size="medium" />
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
          className="inline-flex items-center gap-2 text-[#0a0a0a] font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Try again
        </Link>
      </div>
    );
  }

  if (reflection) {
    return (
      <div className="py-8 sm:py-12">
        <ReflectionView reflection={reflection} />
        <div className="text-center mt-10 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6a6a6a] hover:text-[#0a0a0a] text-sm font-medium"
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
