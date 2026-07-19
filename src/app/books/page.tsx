import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

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
      <div className="py-8 sm:py-12 max-w-3xl mx-auto">
        <PageHeader
          title="Books"
          description="Stories that have held mirrors to human struggle for centuries."
        />
        <div className="space-y-3">
          {books.map((book, i) => (
            <div
              key={book.title}
              className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-[#e5e5e5] ${
                i % 2 === 0 ? "bg-white" : "bg-[#faf5e8]"
              }`}
            >
              <div className="w-9 h-12 sm:w-10 sm:h-14 rounded bg-[#f5f0e0] border border-[#e5e5e5] flex-shrink-0 shadow-sm" />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-base sm:text-lg text-[#0a0a0a]">{book.title}</h2>
                <p className="text-[#9a9a9a] text-sm">{book.author}</p>
              </div>
              <p className="text-[#6a6a6a] text-xs sm:text-sm hidden sm:block italic max-w-[140px] text-right">
                {book.theme}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
