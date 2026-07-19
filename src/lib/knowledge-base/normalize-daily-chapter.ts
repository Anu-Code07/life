import type { DailyChapter } from "./daily-chapters";
import { getChapterEnrichment } from "./daily-chapter-enrichment";
import type { SimilarStory } from "@/lib/types";

export interface FullDailyChapter extends DailyChapter {
  context: string;
  whyItMatters: string;
  reflection: string;
  similarStories: SimilarStory[];
  closingThought: string;
}

export function normalizeDailyChapter(chapter: DailyChapter): FullDailyChapter {
  const enrichment = getChapterEnrichment(chapter.id);

  if (enrichment) {
    return { ...chapter, ...enrichment };
  }

  const sentences = chapter.story.split(/(?<=[.!?])\s+/);
  const context = sentences.slice(0, 1).join(" ");
  const storyBody = sentences.slice(1).join(" ") || chapter.story;

  return {
    ...chapter,
    story: storyBody,
    context,
    whyItMatters: `This chapter speaks to anyone wrestling with ${chapter.theme.toLowerCase()} — through the lens of ${chapter.character}.`,
    reflection: chapter.lesson,
    similarStories: [],
    closingThought: chapter.lesson,
  };
}
