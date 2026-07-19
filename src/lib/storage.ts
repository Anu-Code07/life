import type { Reflection } from "./types";

const STORAGE_KEY = "story-mirror-reflections";

export function getSavedReflections(): Reflection[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveReflection(reflection: Reflection): void {
  if (typeof window === "undefined") return;
  const existing = getSavedReflections();
  const updated = [reflection, ...existing.filter((r) => r.id !== reflection.id)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 50)));
}

export function removeReflection(id: string): void {
  if (typeof window === "undefined") return;
  const existing = getSavedReflections();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(existing.filter((r) => r.id !== id))
  );
}

export function isReflectionSaved(id: string): boolean {
  return getSavedReflections().some((r) => r.id === id);
}
