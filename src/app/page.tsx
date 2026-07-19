import PageLayout from "@/components/PageLayout";
import PromptBox from "@/components/PromptBox";

export default function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16">
        <div className="text-center mb-12 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-amber-50 leading-tight mb-6">
            Your life, reflected in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              stories
            </span>
          </h1>
          <p className="text-stone-400 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Not advice. Not therapy. Just the character who already lived your
            struggle — waiting in the pages of history, myth, and fiction.
          </p>
        </div>

        <PromptBox />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
          {[
            {
              title: "Through Fiction",
              desc: "Mythology, literature, anime, games — every story holds a mirror.",
            },
            {
              title: "Not Advice",
              desc: "No platitudes. Just the parallel that makes you say: that's exactly how I feel.",
            },
            {
              title: "New Perspective",
              desc: "See your struggle through eyes that have seen it all before.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl border border-stone-800/40 bg-stone-900/20"
            >
              <h3 className="font-serif text-amber-200 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
