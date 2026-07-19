"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Search by emotion, character, story...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-xl mx-auto w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-amber-900/20 bg-stone-900/40 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-700/40 transition-colors"
      />
    </div>
  );
}
