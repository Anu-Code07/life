import { NextResponse } from "next/server";
import { generateRandomParallel } from "@/lib/groq";

export async function GET() {
  try {
    const parallel = await generateRandomParallel();
    return NextResponse.json(parallel);
  } catch (error) {
    console.error("Random parallel error:", error);
    return NextResponse.json(
      { error: "The mirror is clouded. Please try again." },
      { status: 500 }
    );
  }
}
