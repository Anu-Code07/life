"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

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
      <div
        className={`relative rounded-2xl border border-amber-800/30 bg-stone-900/40 backdrop-blur-sm shadow-2xl shadow-amber-950/20 transition-all duration-300 focus-within:border-amber-600/50 focus-within:shadow-amber-900/30 ${
          isLarge ? "p-6 sm:p-8" : "p-4"
        }`}
      >
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
          className={`w-full bg-transparent text-stone-100 placeholder:text-stone-500 resize-none focus:outline-none font-serif leading-relaxed ${
            isLarge ? "text-lg sm:text-xl" : "text-base"
          }`}
          disabled={loading}
        />

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-900/20">
          <span className="text-xs text-stone-600">
            {input.length > 0 ? `${input.length} characters` : "Press Enter to reflect"}
          </span>
          <button
            onClick={() => handleSubmit()}
            disabled={!input.trim() || loading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 text-amber-50 font-medium text-sm hover:from-amber-600 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-amber-900/30"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-amber-200/30 border-t-amber-100 rounded-full animate-spin" />
                Reflecting...
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Reflect
              </>
            )}
          </button>
        </div>
      </div>

      {isLarge && (
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {examples.map((example) => (
            <button
              key={example}
              onClick={() => {
                setInput(example);
                handleSubmit(example);
              }}
              className="px-4 py-2 rounded-full text-sm text-stone-400 border border-stone-800/60 bg-stone-900/30 hover:border-amber-800/40 hover:text-amber-200 hover:bg-amber-950/20 transition-all duration-200"
            >
              {example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
