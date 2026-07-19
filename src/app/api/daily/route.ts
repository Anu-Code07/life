import { NextResponse } from "next/server";
import { generateDailyStory } from "@/lib/groq";

export async function GET() {
  try {
    const story = await generateDailyStory();
    return NextResponse.json(story);
  } catch (error) {
    console.error("Daily story error:", error);
    return NextResponse.json(
      { error: "Today's story hasn't arrived yet. Please try again." },
      { status: 500 }
    );
  }
}
