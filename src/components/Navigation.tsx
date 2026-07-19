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
  { href: "/daily", label: "Daily Story" },
  { href: "/random", label: "Random" },
  { href: "/saved", label: "Saved" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-amber-900/20 bg-[#0c0a09]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <BookOpen className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="font-serif text-lg text-amber-50 tracking-wide">
              Story Mirror
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                  pathname === item.href
                    ? "text-amber-300 bg-amber-900/30"
                    : "text-stone-400 hover:text-amber-200 hover:bg-amber-900/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-stone-400 hover:text-amber-200 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-amber-900/20 bg-[#0c0a09]/95 backdrop-blur-xl">
          <div className="px-4 py-4 grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-all ${
                  pathname === item.href
                    ? "text-amber-300 bg-amber-900/30"
                    : "text-stone-400 hover:text-amber-200"
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
