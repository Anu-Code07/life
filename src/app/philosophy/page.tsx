import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import PaperCard from "@/components/PaperCard";

const philosophies = [
  {
    name: "Stoicism",
    thinkers: ["Marcus Aurelius", "Seneca", "Epictetus"],
    core: "Focus on what you can control. Accept what you cannot.",
    quote: "We suffer more often in imagination than in reality.",
    color: "bg-[#f5f0e0]",
  },
  {
    name: "Existentialism",
    thinkers: ["Albert Camus", "Jean-Paul Sartre", "Søren Kierkegaard"],
    core: "Existence precedes essence. You create your own meaning.",
    quote: "One must imagine Sisyphus happy.",
    color: "bg-[#b8a4ed]/25",
  },
  {
    name: "Buddhism",
    thinkers: ["Buddha", "Thich Nhat Hanh", "Alan Watts"],
    core: "Suffering comes from attachment. Liberation comes from letting go.",
    quote: "Pain is inevitable. Suffering is optional.",
    color: "bg-[#ffb084]/25",
  },
  {
    name: "Taoism",
    thinkers: ["Lao Tzu", "Zhuangzi"],
    core: "Flow with the natural order. Wu wei — effortless action.",
    quote: "When I let go of what I am, I become what I might be.",
    color: "bg-[#e8b94a]/20",
  },
  {
    name: "Nietzschean Philosophy",
    thinkers: ["Friedrich Nietzsche"],
    core: "Create your own values. Embrace the eternal recurrence.",
    quote: "He who has a why to live can bear almost any how.",
    color: "bg-white",
  },
  {
    name: "Absurdism",
    thinkers: ["Albert Camus"],
    core: "Life has no inherent meaning — and that's where freedom lives.",
    quote: "The struggle itself toward the heights is enough to fill a man's heart.",
    color: "bg-[#faf5e8]",
  },
];

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <PageHeader
          title="Philosophy"
          description="Ancient wisdom for modern struggles."
        />
        <div className="space-y-5">
          {philosophies.map((phil, i) => (
            <PaperCard
              key={phil.name}
              tape={i === 0}
              tilt={i % 2 === 0 ? "left" : "right"}
              padding="md"
              className={phil.color}
            >
              <h2 className="font-serif text-xl sm:text-2xl text-[#0a0a0a] mb-2">{phil.name}</h2>
              <p className="text-[#9a9a9a] text-sm mb-4">{phil.thinkers.join(" · ")}</p>
              <p className="text-[#3a3a3a] leading-relaxed text-sm sm:text-base mb-4">{phil.core}</p>
              <blockquote className="font-serif text-[#0a0a0a] italic border-l-[3px] border-[#e8b94a] pl-4 text-sm sm:text-base">
                &ldquo;{phil.quote}&rdquo;
              </blockquote>
            </PaperCard>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
