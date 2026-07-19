import ReflectPageContent from "@/components/ReflectPageContent";
import { getChapterForToday } from "@/lib/knowledge-base/daily-chapters";

export default function HomePage() {
  return <ReflectPageContent todayChapter={getChapterForToday()} />;
}
