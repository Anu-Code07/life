import StarField from "./StarField";
import Particles from "./Particles";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[#0c0a09] text-stone-200">
      <div className="fixed inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-amber-950/5 pointer-events-none z-0" />
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <StarField />
      <Particles />
      <Navigation />
      <main className={`relative z-10 pt-16 ${className}`}>{children}</main>
    </div>
  );
}
