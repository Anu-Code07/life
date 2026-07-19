import PageLayout from "@/components/PageLayout";

const philosophies = [
  {
    name: "Stoicism",
    thinkers: ["Marcus Aurelius", "Seneca", "Epictetus"],
    core: "Focus on what you can control. Accept what you cannot.",
    quote: "We suffer more often in imagination than in reality.",
  },
  {
    name: "Existentialism",
    thinkers: ["Albert Camus", "Jean-Paul Sartre", "Søren Kierkegaard"],
    core: "Existence precedes essence. You create your own meaning.",
    quote: "One must imagine Sisyphus happy.",
  },
  {
    name: "Buddhism",
    thinkers: ["Buddha", "Thich Nhat Hanh", "Alan Watts"],
    core: "Suffering comes from attachment. Liberation comes from letting go.",
    quote: "Pain is inevitable. Suffering is optional.",
  },
  {
    name: "Taoism",
    thinkers: ["Lao Tzu", "Zhuangzi"],
    core: "Flow with the natural order. Wu wei — effortless action.",
    quote: "When I let go of what I am, I become what I might be.",
  },
  {
    name: "Nietzschean Philosophy",
    thinkers: ["Friedrich Nietzsche"],
    core: "Create your own values. Embrace the eternal recurrence.",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    name: "Absurdism",
    thinkers: ["Albert Camus"],
    core: "Life has no inherent meaning — and that's where freedom lives.",
    quote: "The struggle itself toward the heights is enough to fill a man's heart.",
  },
];

export default function PhilosophyPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Philosophy
          </h1>
          <p className="text-stone-400">
            Ancient wisdom for modern struggles.
          </p>
        </div>

        <div className="space-y-6">
          {philosophies.map((phil) => (
            <article
              key={phil.name}
              className="p-6 sm:p-8 rounded-2xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <h2 className="font-serif text-2xl text-amber-100 mb-2">
                {phil.name}
              </h2>
              <p className="text-stone-500 text-sm mb-4">
                {phil.thinkers.join(" · ")}
              </p>
              <p className="text-stone-300 leading-relaxed mb-4">{phil.core}</p>
              <blockquote className="font-serif text-amber-200/70 italic border-l-2 border-amber-700/40 pl-4">
                &ldquo;{phil.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
