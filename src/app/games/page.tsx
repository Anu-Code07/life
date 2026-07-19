import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const games = [
  { title: "God of War", studio: "Santa Monica Studio", theme: "Redemption and fatherhood" },
  { title: "Red Dead Redemption 2", studio: "Rockstar Games", theme: "The dying outlaw's last stand" },
  { title: "Dark Souls", studio: "FromSoftware", theme: "Perseverance in a dying world" },
  { title: "Elden Ring", studio: "FromSoftware", theme: "Becoming Lord in a shattered realm" },
  { title: "Sekiro", studio: "FromSoftware", theme: "Immortality and the cost of defiance" },
  { title: "The Last of Us", studio: "Naughty Dog", theme: "Love and survival in ruin" },
  { title: "Shadow of the Colossus", studio: "Team Ico", theme: "Sacrifice for love" },
  { title: "Hollow Knight", studio: "Team Cherry", theme: "Descent into a fallen kingdom" },
  { title: "Celeste", studio: "Maddy Makes Games", theme: "Climbing your own mountain" },
  { title: "Disco Elysium", studio: "ZA/UM", theme: "A broken detective's last case" },
];

export default function GamesPage() {
  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-4xl mx-auto">
        <PageHeader
          title="Games"
          description="Interactive stories where you live the struggle yourself."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {games.map((game, i) => (
            <div
              key={game.title}
              className={`p-5 rounded-2xl border border-[#e5e5e5] ${
                i % 2 === 0 ? "bg-[#1a3a3a] text-white" : "bg-white text-[#0a0a0a]"
              }`}
            >
              <h2 className="font-serif text-base sm:text-lg">{game.title}</h2>
              <p className={`text-sm mt-1 ${i % 2 === 0 ? "text-white/60" : "text-[#9a9a9a]"}`}>
                {game.studio}
              </p>
              <p className={`text-sm mt-2 italic ${i % 2 === 0 ? "text-white/80" : "text-[#6a6a6a]"}`}>
                {game.theme}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
