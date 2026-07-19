"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";

const mainNav = [
  { href: "/", label: "Reflect" },
  { href: "/chat", label: "Journal" },
  { href: "/daily", label: "Daily" },
  { href: "/saved", label: "Saved" },
];

const libraryNav = [
  { href: "/explore", label: "Explore" },
  { href: "/characters", label: "Characters" },
  { href: "/quotes", label: "Quotes" },
  { href: "/books", label: "Books" },
  { href: "/movies", label: "Movies" },
  { href: "/games", label: "Games" },
];

const wisdomNav = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/history", label: "History" },
  { href: "/random", label: "Random Page" },
];

function isActive(pathname: string, href: string) {
  return pathname === href;
}

function isInGroup(pathname: string, items: { href: string }[]) {
  return items.some((i) => pathname === i.href || pathname.startsWith(i.href + "/"));
}

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [wisdomOpen, setWisdomOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f2e8]/95 backdrop-blur-md border-b border-[#e0d9ce]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <BookOpen className="w-5 h-5 text-[#1a1510] flex-shrink-0" />
            <span className="font-serif text-base text-[#1a1510] tracking-tight truncate">
              Story Mirror
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(pathname, item.href)
                    ? "text-[#1a1510] bg-[#f5f0e0]"
                    : "text-[#6b6560] hover:text-[#1a1510] hover:bg-[#faf5e8]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Library dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLibraryOpen(!libraryOpen);
                  setWisdomOpen(false);
                }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isInGroup(pathname, libraryNav)
                    ? "text-[#1a1510] bg-[#f5f0e0]"
                    : "text-[#6b6560] hover:text-[#1a1510] hover:bg-[#faf5e8]"
                }`}
              >
                Library <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {libraryOpen && (
                <div className="absolute top-full right-0 mt-1 w-44 bg-white border border-[#e0d9ce] rounded-xl shadow-lg py-1 z-50">
                  {libraryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setLibraryOpen(false)}
                      className="block px-4 py-2 text-sm text-[#6b6560] hover:bg-[#faf5e8] hover:text-[#1a1510]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Wisdom dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setWisdomOpen(!wisdomOpen);
                  setLibraryOpen(false);
                }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isInGroup(pathname, wisdomNav)
                    ? "text-[#1a1510] bg-[#f5f0e0]"
                    : "text-[#6b6560] hover:text-[#1a1510] hover:bg-[#faf5e8]"
                }`}
              >
                Wisdom <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {wisdomOpen && (
                <div className="absolute top-full right-0 mt-1 w-44 bg-white border border-[#e0d9ce] rounded-xl shadow-lg py-1 z-50">
                  {wisdomNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setWisdomOpen(false)}
                      className="block px-4 py-2 text-sm text-[#6b6560] hover:bg-[#faf5e8] hover:text-[#1a1510]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-[#6b6560]"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e0d9ce] bg-[#f7f2e8] max-h-[75vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-4">
            <div className="grid grid-cols-2 gap-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium ${
                    isActive(pathname, item.href)
                      ? "bg-[#f5f0e0] text-[#1a1510]"
                      : "text-[#6b6560]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9a948c] px-3 mb-1">
                Library
              </p>
              <div className="grid grid-cols-2 gap-1">
                {libraryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm text-[#6b6560]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#9a948c] px-3 mb-1">
                Wisdom
              </p>
              <div className="grid grid-cols-2 gap-1">
                {wisdomNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm text-[#6b6560]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
