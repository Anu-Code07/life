import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Story Mirror — AI That Explains Your Life Through Fiction",
  description:
    "Describe what's weighing on your mind. Discover which character from mythology, literature, movies, and games already lived your struggle.",
  keywords: [
    "story mirror",
    "fiction",
    "mythology",
    "reflection",
    "emotions",
    "literature",
    "philosophy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
