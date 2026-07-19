import PageLayout from "@/components/PageLayout";
import PromptBox from "@/components/PromptBox";
import PaperCard from "@/components/PaperCard";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center py-10 sm:py-16 md:py-20">
        {/* Welcome paper card with tape */}
        <PaperCard tape tilt="left" padding="md" className="max-w-sm w-full mb-10 sm:mb-14">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-dashed border-[#d4d4d4] flex items-center justify-center">
              <span className="text-[9px] sm:text-[10px] font-semibold text-[#9a9a9a] text-center leading-tight">
                AIR
                <br />
                MAIL
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#9a9a9a]">
                Welcome to
              </p>
              <h2 className="font-serif text-xl sm:text-2xl text-[#0a0a0a] leading-tight">
                Story Mirror
              </h2>
              <p className="font-script text-base sm:text-lg text-[#9a9a9a] mt-0.5">
                your life, in fiction
              </p>
            </div>
            <span className="text-[9px] text-[#c4c4c4] font-medium flex-shrink-0 pt-1">
              2026
            </span>
          </div>
        </PaperCard>

        {/* Hero headline */}
        <div className="text-center mb-8 sm:mb-12 max-w-3xl px-2">
          <h1 className="font-serif text-[2rem] sm:text-5xl md:text-6xl text-[#0a0a0a] leading-[1.15] tracking-tight">
            Your life, reflected in{" "}
            <span className="highlight-word">stories</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-[#6a6a6a] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Not advice. Not therapy. Just the character who already lived your
            struggle — waiting in the pages of history, myth, and fiction.
          </p>
        </div>

        <PromptBox />

        {/* Feature cards */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 w-full max-w-4xl">
          <FeatureCard
            color="lavender"
            title="Through Fiction"
            description="Mythology, literature, anime, games — every story holds a mirror."
          />
          <FeatureCard
            color="peach"
            title="Not Advice"
            description="No platitudes. Just the parallel that makes you say: that's exactly how I feel."
          />
          <FeatureCard
            color="ochre"
            title="New Perspective"
            description="See your struggle through eyes that have seen it all before."
          />
        </div>
      </div>
    </PageLayout>
  );
}
