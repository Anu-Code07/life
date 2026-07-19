"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/characters", label: "Characters" },
  { href: "/quotes", label: "Quotes" },
  { href: "/books", label: "Books" },
  { href: "/movies", label: "Movies" },
  { href: "/games", label: "Games" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/history", label: "History" },
  { href: "/daily", label: "Daily" },
  { href: "/random", label: "Random" },
  { href: "/saved", label: "Saved" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffaf0]/90 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 group min-w-0">
            <BookOpen className="w-5 h-5 text-[#0a0a0a] flex-shrink-0" />
            <span className="font-serif text-base sm:text-lg text-[#0a0a0a] tracking-tight truncate">
              Story Mirror
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#0a0a0a] bg-[#f5f0e0]"
                    : "text-[#6a6a6a] hover:text-[#0a0a0a] hover:bg-[#faf5e8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 -mr-2 text-[#6a6a6a] hover:text-[#0a0a0a] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-[#e5e5e5] bg-[#fffaf0] max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#0a0a0a] bg-[#f5f0e0]"
                    : "text-[#6a6a6a] hover:bg-[#faf5e8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
