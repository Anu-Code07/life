import PageLayout from "@/components/PageLayout";

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

export default function MoviesPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Movies & Shows
          </h1>
          <p className="text-stone-400">
            Visual stories that capture what words alone cannot.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="p-5 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-serif text-lg text-amber-100">{movie.title}</h2>
                <span className="text-xs text-stone-600">{movie.year}</span>
              </div>
              <p className="text-stone-400 text-sm mt-2 italic">{movie.theme}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
