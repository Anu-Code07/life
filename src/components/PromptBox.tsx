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
    router.push(`/?q=${encodeURIComponent(value)}`);
  };

  const isLarge = size === "large";

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto">
      <div className="relative">
        <PaperTape width="w-16 sm:w-20" />
        <div
          className="relative bg-[#fffef9] rounded-sm border border-[#e0d9ce] shadow-[0_4px_20px_rgba(26,21,16,0.08)] book-page !p-4 sm:!p-5 !min-h-0"
          style={{ boxShadow: "inset 0 0 40px rgba(26,21,16,0.02), 0 4px 20px rgba(26,21,16,0.08)" }}
        >
          <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a948c] mb-2">
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
            rows={isLarge ? 2 : 2}
            className={`w-full bg-transparent text-[#1a1510] placeholder:text-[#9a948c] resize-none focus:outline-none font-serif leading-snug min-h-[2.5rem] ${
              isLarge ? "text-base sm:text-lg" : "text-sm sm:text-base"
            }`}
            disabled={loading}
          />
          <div className="flex items-center justify-between gap-3 mt-3 pt-3 border-t border-[#ebe6d6]">
            <span className="text-[10px] sm:text-xs text-[#9a948c]">
              {input.length > 0 ? `${input.length} chars` : "Enter to reflect"}
            </span>
            <button
              onClick={() => handleSubmit()}
              disabled={!input.trim() || loading}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1a1510] text-white font-semibold text-xs sm:text-sm hover:bg-[#2a2420] disabled:opacity-40 transition-colors"
            >
              {loading ? (
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Reflect
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {isLarge && (
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {examples.map((example) => (
            <button
              key={example}
              onClick={() => {
                setInput(example);
                handleSubmit(example);
              }}
              className="px-2.5 py-1.5 rounded-full text-[11px] sm:text-xs text-[#6b6560] border border-[#e0d9ce] bg-[#fffef9]/80 hover:bg-white transition-all"
            >
              {example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
