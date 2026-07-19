"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import type { ChatMessage } from "@/lib/groq";
import BookSpread from "./BookSpread";
import BookPage from "./BookPage";

const STARTER =
  "Write in the margin. Tell me what's weighing on your mind — I'll find the story that mirrors it.";

export default function ChatJournal() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "The ink ran dry for a moment. Try writing again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <BookSpread variant="single">
        <BookPage side="single" pageNumber={1} className="!min-h-[420px] flex flex-col">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9a948c] mb-4">
            Journal · margin notes
          </p>

          <div className="flex-1 space-y-5 overflow-y-auto max-h-[50vh] sm:max-h-[55vh] pr-1">
            {messages.length === 0 && (
              <p className="font-script text-lg text-[#9a948c] text-center py-8 px-4">
                {STARTER}
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`animate-fade-in ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.role === "user" ? (
                  <p className="inline-block max-w-[85%] font-serif italic text-[#1a1510] text-base sm:text-lg text-right ml-auto">
                    &ldquo;{msg.content}&rdquo;
                  </p>
                ) : (
                  <div className="margin-note max-w-[95%] prose-book text-sm sm:text-base whitespace-pre-wrap">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <p className="font-script text-[#9a948c] animate-pulse">
                Searching the shelves...
              </p>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="mt-4 pt-4 border-t border-[#e0d9ce] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
              placeholder="Write in the margin..."
              className="flex-1 bg-transparent text-[#1a1510] placeholder:text-[#9a948c] focus:outline-none font-serif text-sm sm:text-base"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-lg bg-[#1a1510] text-white disabled:opacity-40 transition-colors hover:bg-[#2a2420]"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </BookPage>
      </BookSpread>
    </div>
  );
}
