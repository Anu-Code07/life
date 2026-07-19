import { NextRequest, NextResponse } from "next/server";
import { getChapterForToday, getRandomChapter } from "@/lib/knowledge-base/daily-chapters";
import { normalizeDailyChapter } from "@/lib/knowledge-base/normalize-daily-chapter";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("mode");
  const exclude = searchParams.get("exclude") ?? undefined;

  const chapter =
    mode === "random" ? getRandomChapter(exclude) : getChapterForToday();

  return NextResponse.json({
    ...normalizeDailyChapter(chapter),
    chapterNumber: Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    ),
  });
}
