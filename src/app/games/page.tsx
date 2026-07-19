import PageLayout from "@/components/PageLayout";

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
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Games
          </h1>
          <p className="text-stone-400">
            Interactive stories where you live the struggle yourself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {games.map((game) => (
            <div
              key={game.title}
              className="p-5 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <h2 className="font-serif text-lg text-amber-100">{game.title}</h2>
              <p className="text-stone-500 text-sm">{game.studio}</p>
              <p className="text-stone-400 text-sm mt-2 italic">{game.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
