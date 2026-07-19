"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import PaperTape from "./PaperTape";

const examples = [
  "I miss the old me.",
  "I hate my work.",
  "My friends are moving ahead.",
  "I failed again.",
  "I'm afraid to start.",
  "I don't know who I am anymore.",
];

interface PromptBoxProps {
  size?: "large" | "medium";
}

export default function PromptBox({ size = "large" }: PromptBoxProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (text?: string) => {
    const value = (text ?? input).trim();
    if (!value || loading) return;

    setLoading(true);
    router.push(`/reflect?q=${encodeURIComponent(value)}`);
  };

  const isLarge = size === "large";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <PaperTape width="w-28 sm:w-36" />
        <div
          className={`relative bg-white rounded-xl sm:rounded-2xl border border-[#e5e5e5] shadow-[0_8px_32px_rgba(10,10,10,0.08)] ${
            isLarge ? "p-5 sm:p-7 md:p-8" : "p-4 sm:p-5"
          }`}
        >
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a] mb-3">
            Your page · write freely
          </p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            placeholder="What's weighing on your mind?"
            rows={isLarge ? 4 : 3}
            className={`w-full bg-transparent text-[#0a0a0a] placeholder:text-[#9a9a9a] resize-none focus:outline-none font-serif leading-relaxed ${
              isLarge ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"
            }`}
            disabled={loading}
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-4 border-t border-[#f0f0f0]">
            <span className="text-xs text-[#9a9a9a] order-2 sm:order-1">
              {input.length > 0 ? `${input.length} characters` : "Press Enter to reflect"}
            </span>
            <button
              onClick={() => handleSubmit()}
              disabled={!input.trim() || loading}
              className="order-1 sm:order-2 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0a0a0a] text-white font-semibold text-sm hover:bg-[#1f1f1f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Reflecting...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Reflect
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {isLarge && (
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {examples.map((example) => (
            <button
              key={example}
              onClick={() => {
                setInput(example);
                handleSubmit(example);
              }}
              className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-[#6a6a6a] border border-[#e5e5e5] bg-white hover:bg-[#faf5e8] hover:text-[#0a0a0a] hover:border-[#d4d4d4] transition-all"
            >
              {example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
