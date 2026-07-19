import { NextRequest, NextResponse } from "next/server";
import { generateChatReply, type ChatMessage } from "@/lib/groq";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided." }, { status: 400 });
    }

    const validMessages: ChatMessage[] = messages
      .filter(
        (m: unknown) =>
          typeof m === "object" &&
          m !== null &&
          "role" in m &&
          "content" in m &&
          (m as ChatMessage).role &&
          typeof (m as ChatMessage).content === "string"
      )
      .slice(-20);

    if (validMessages.length === 0) {
      return NextResponse.json({ error: "Invalid messages." }, { status: 400 });
    }

    const last = validMessages[validMessages.length - 1];
    if (last.role !== "user" || last.content.trim().length === 0) {
      return NextResponse.json({ error: "Last message must be from user." }, { status: 400 });
    }

    if (last.content.length > 2000) {
      return NextResponse.json({ error: "Message too long." }, { status: 400 });
    }

    const reply = await generateChatReply(validMessages);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "The pages are quiet. Please try again." },
      { status: 500 }
    );
  }
}
