import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import PaperCard from "@/components/PaperCard";

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
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <PageHeader
          title="History"
          description="Real lives that echo the greatest stories ever told."
        />
        <div className="space-y-5">
          {figures.map((figure, i) => (
            <PaperCard
              key={figure.name}
              tape={i === 0}
              tilt={i % 2 === 0 ? "right" : "left"}
              padding="md"
              className={i % 3 === 0 ? "bg-[#faf5e8]" : "bg-white"}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-serif text-xl sm:text-2xl text-[#0a0a0a]">{figure.name}</h2>
                <span className="text-xs text-[#9a9a9a] flex-shrink-0">{figure.era}</span>
              </div>
              <p className="text-[#3a3a3a] leading-relaxed text-sm sm:text-base mb-4">{figure.story}</p>
              <blockquote className="font-serif text-[#0a0a0a] italic border-l-[3px] border-[#eedcc8] pl-4 text-sm sm:text-base">
                &ldquo;{figure.quote}&rdquo;
              </blockquote>
            </PaperCard>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
