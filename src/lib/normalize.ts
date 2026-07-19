import type { Reflection, Recommendations, SimilarStory } from "./types";

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? value : [];
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

export function normalizeReflection(
  raw: Partial<Reflection> & { userInput: string }
): Omit<Reflection, "id" | "createdAt"> {
  const recommendations = (raw.recommendations ?? {}) as Partial<Recommendations>;

  return {
    userInput: raw.userInput,
    analysis: {
      primaryEmotion: asString(raw.analysis?.primaryEmotion, "Unknown"),
      secondaryEmotion: asString(raw.analysis?.secondaryEmotion, "Unknown"),
      conflict: asString(raw.analysis?.conflict),
      fear: asString(raw.analysis?.fear),
      hiddenDesire: asString(raw.analysis?.hiddenDesire),
      psychologicalPattern: asString(raw.analysis?.psychologicalPattern),
      narrativeArchetype: asString(raw.analysis?.narrativeArchetype, "The Wanderer"),
      heroStage: asString(raw.analysis?.heroStage, "The Journey"),
    },
    primaryMatch: {
      title: asString(raw.primaryMatch?.title, "Unknown Story"),
      character: asString(raw.primaryMatch?.character, "Unknown Character"),
      source: asString(raw.primaryMatch?.source, "Unknown Source"),
      quote: asString(raw.primaryMatch?.quote, "Every story holds a mirror."),
      quoteAuthor: raw.primaryMatch?.quoteAuthor,
      storyParallel: asString(
        raw.primaryMatch?.storyParallel,
        "Your story echoes through time — a struggle felt by many before you."
      ),
      whyItFits: asString(
        raw.primaryMatch?.whyItFits,
        "This character faced a similar crossroads."
      ),
      reflection: asString(
        raw.primaryMatch?.reflection,
        "Perhaps the answer isn't to return to who you were, but to discover who you're becoming."
      ),
      lifeLesson: asString(
        raw.primaryMatch?.lifeLesson,
        "Every great story has a point where the hero realizes the goal isn't to become who they were."
      ),
    },
    similarStories: asArray<SimilarStory>(raw.similarStories).map((story) => ({
      character: asString(story?.character, "Unknown"),
      source: asString(story?.source, "Unknown"),
      reason: asString(story?.reason, "A kindred spirit on a similar path."),
    })),
    recommendations: {
      books: asArray<string>(recommendations.books),
      movies: asArray<string>(recommendations.movies),
      games: asArray<string>(recommendations.games),
      philosophy: asArray<string>(recommendations.philosophy),
    },
    closingThought: asString(
      raw.closingThought,
      "The story isn't over. It's only reaching its most important chapter."
    ),
  };
}
