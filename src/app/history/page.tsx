import PageLayout from "@/components/PageLayout";

const figures = [
  {
    name: "Nelson Mandela",
    era: "1918–2013",
    story: "Imprisoned for 27 years, emerged not with bitterness but with a vision for reconciliation.",
    quote: "I learned that courage was not the absence of fear, but the triumph over it.",
  },
  {
    name: "Miyamoto Musashi",
    era: "1584–1645",
    story: "Japan's greatest swordsman who spent his life seeking perfection through relentless discipline.",
    quote: "Do nothing that is of no use.",
  },
  {
    name: "Vincent van Gogh",
    era: "1853–1890",
    story: "Painted over 2,000 works while battling mental illness, selling only one painting in his lifetime.",
    quote: "I am seeking, I am striving, I am in it with all my heart.",
  },
  {
    name: "Nikola Tesla",
    era: "1856–1943",
    story: "A visionary inventor who died penniless, his genius unrecognized until long after.",
    quote: "The present is theirs; the future, for which I really worked, is mine.",
  },
  {
    name: "Abraham Lincoln",
    era: "1809–1865",
    story: "Failed in business, lost elections, suffered depression — then preserved a nation.",
    quote: "I walk slowly, but I never walk backward.",
  },
  {
    name: "Leonardo da Vinci",
    era: "1452–1519",
    story: "The ultimate Renaissance mind — artist, inventor, scientist — perpetually unfinished.",
    quote: "Learning never exhausts the mind.",
  },
  {
    name: "Mahatma Gandhi",
    era: "1869–1948",
    story: "Led a nation to freedom through nonviolence, proving that moral force can move mountains.",
    quote: "Be the change you wish to see in the world.",
  },
  {
    name: "Winston Churchill",
    era: "1874–1965",
    story: "Led Britain through its darkest hour when surrender seemed the only option.",
    quote: "If you're going through hell, keep going.",
  },
];

export default function HistoryPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            History
          </h1>
          <p className="text-stone-400">
            Real lives that echo the greatest stories ever told.
          </p>
        </div>

        <div className="space-y-6">
          {figures.map((figure) => (
            <article
              key={figure.name}
              className="p-6 sm:p-8 rounded-2xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-serif text-2xl text-amber-100">
                  {figure.name}
                </h2>
                <span className="text-xs text-stone-600">{figure.era}</span>
              </div>
              <p className="text-stone-300 leading-relaxed mb-4">
                {figure.story}
              </p>
              <blockquote className="font-serif text-amber-200/70 italic border-l-2 border-amber-700/40 pl-4">
                &ldquo;{figure.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
