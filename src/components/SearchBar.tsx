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
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e5e5e5] bg-white text-[#0a0a0a] placeholder:text-[#9a9a9a] focus:outline-none focus:border-[#0a0a0a] transition-colors text-sm sm:text-base"
      />
    </div>
  );
}
