import Navigation from "./Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen book-desk text-[#3d3830]">
      <Navigation />
      <main className={`relative z-10 pt-14 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
      </main>
      <footer className="text-center py-8 text-[10px] text-[#9a948c] tracking-widest">
        — STORY MIRROR —
      </footer>
    </div>
  );
}
