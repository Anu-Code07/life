import PageLayout from "@/components/PageLayout";

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", theme: "The cost of carrying burdens" },
  { title: "Siddhartha", author: "Hermann Hesse", theme: "The search for self" },
  { title: "The Stranger", author: "Albert Camus", theme: "Absurdity and authenticity" },
  { title: "Meditations", author: "Marcus Aurelius", theme: "Stoic inner strength" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", theme: "Guilt and redemption" },
  { title: "Dune", author: "Frank Herbert", theme: "Destiny and transformation" },
  { title: "The Odyssey", author: "Homer", theme: "The long journey home" },
  { title: "The Iliad", author: "Homer", theme: "Rage, honor, and mortality" },
  { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", theme: "Creating your own meaning" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", theme: "Faith, doubt, and suffering" },
  { title: "Norwegian Wood", author: "Haruki Murakami", theme: "Loss and melancholy" },
  { title: "The Alchemist", author: "Paulo Coelho", theme: "Following your personal legend" },
];

export default function BooksPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-amber-50 mb-3">
            Books
          </h1>
          <p className="text-stone-400">
            Stories that have held mirrors to human struggle for centuries.
          </p>
        </div>

        <div className="space-y-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex items-center gap-4 p-5 rounded-xl border border-stone-800/50 bg-stone-900/20 hover:border-amber-800/30 transition-colors"
            >
              <div className="w-10 h-14 rounded bg-gradient-to-b from-amber-800/40 to-amber-950/60 flex-shrink-0 shadow-lg" />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-lg text-amber-100">{book.title}</h2>
                <p className="text-stone-500 text-sm">{book.author}</p>
              </div>
              <p className="text-stone-400 text-sm hidden sm:block italic">
                {book.theme}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
