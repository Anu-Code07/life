import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const movies = [
  { title: "The Shawshank Redemption", year: "1994", theme: "Hope in despair" },
  { title: "Interstellar", year: "2014", theme: "Love transcending time" },
  { title: "The Matrix", year: "1999", theme: "Awakening to reality" },
  { title: "Fight Club", year: "1999", theme: "Identity and rebellion" },
  { title: "Blade Runner 2049", year: "2017", theme: "What makes us human" },
  { title: "Whiplash", year: "2014", theme: "Obsession and greatness" },
  { title: "The Dark Knight", year: "2008", theme: "Chaos and conviction" },
  { title: "Spirited Away", year: "2001", theme: "Growing up and letting go" },
  { title: "Breaking Bad", year: "2008-2013", theme: "The monster within" },
  { title: "BoJack Horseman", year: "2014-2020", theme: "Self-destruction and change" },
  { title: "Attack on Titan", year: "2013-2023", theme: "Freedom at any cost" },
  { title: "Arcane", year: "2021", theme: "Cycles of violence and sisterhood" },
];

const colors = ["bg-[#ffb084]/25", "bg-[#b8a4ed]/25", "bg-[#e8b94a]/20", "bg-[#f5f0e0]"];

export default function MoviesPage() {
  return (
    <PageLayout>
      <div className="py-8 sm:py-12 max-w-4xl mx-auto">
        <PageHeader
          title="Movies & Shows"
          description="Visual stories that capture what words alone cannot."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {movies.map((movie, i) => (
            <div
              key={movie.title}
              className={`p-5 rounded-2xl border border-[#e5e5e5] ${colors[i % 4]}`}
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-base sm:text-lg text-[#0a0a0a]">{movie.title}</h2>
                <span className="text-xs text-[#9a9a9a] flex-shrink-0">{movie.year}</span>
              </div>
              <p className="text-[#6a6a6a] text-sm mt-2 italic">{movie.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
