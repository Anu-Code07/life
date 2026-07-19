import { NextRequest, NextResponse } from "next/server";
import { generateReflection } from "@/lib/groq";
import type { Reflection } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input || typeof input !== "string" || input.trim().length === 0) {
      return NextResponse.json(
        { error: "Please share what's on your mind." },
        { status: 400 }
      );
    }

    if (input.length > 2000) {
      return NextResponse.json(
        { error: "Please keep your reflection under 2000 characters." },
        { status: 400 }
      );
    }

    const result = await generateReflection(input.trim());

    const reflection: Reflection = {
      ...result,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(reflection);
  } catch (error) {
    console.error("Reflection error:", error);
    return NextResponse.json(
      { error: "The stories are quiet right now. Please try again." },
      { status: 500 }
    );
  }
}
