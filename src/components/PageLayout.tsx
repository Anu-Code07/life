import Navigation from "./Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen text-[#3a3a3a]">
      <Navigation />
      <main className={`relative z-10 pt-14 sm:pt-16 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
