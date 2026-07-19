import Groq from "groq-sdk";
import type { Reflection } from "./types";
import { SYSTEM_PROMPT, buildReflectionPrompt } from "./prompts";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const MODEL = "llama-3.3-70b-versatile";

function parseJsonResponse<T>(content: string): T {
  const cleaned = content
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  return JSON.parse(cleaned) as T;
}

export async function generateReflection(
  userInput: string
): Promise<Omit<Reflection, "id" | "createdAt">> {
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: buildReflectionPrompt(userInput) },
    ],
    temperature: 0.85,
    max_tokens: 4096,
    response_format: { type: "json_object" },
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response from AI");
  }

  const parsed = parseJsonResponse<Omit<Reflection, "id" | "createdAt" | "userInput">>(content);

  return {
    userInput,
    ...parsed,
  };
}

export async function generateDailyStory(): Promise<{
  title: string;
  character: string;
  source: string;
  quote: string;
  reflection: string;
  theme: string;
  emotion: string;
}> {
  const { DAILY_STORY_PROMPT } = await import("./prompts");

  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: DAILY_STORY_PROMPT },
    ],
    temperature: 0.9,
    max_tokens: 2048,
    response_format: { type: "json_object" },
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) throw new Error("No response from AI");

  return parseJsonResponse(content);
}

export async function generateRandomParallel(): Promise<{
  situation: string;
  character: string;
  source: string;
  quote: string;
  parallel: string;
  emotion: string;
}> {
  const { RANDOM_PARALLEL_PROMPT } = await import("./prompts");

  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: RANDOM_PARALLEL_PROMPT },
    ],
    temperature: 1,
    max_tokens: 2048,
    response_format: { type: "json_object" },
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) throw new Error("No response from AI");

  return parseJsonResponse(content);
}
