import type { Source } from "../config/sources.js";

export function categorizeItem(
  title: string,
  summary: string,
  source: Source,
): string {
  const text = `${title} ${summary}`.toLowerCase();

  for (const [category, keywords] of Object.entries(source.categories ?? {})) {
    if (keywords?.some((k) => text.includes(k.toLowerCase()))) {
      return category;
    }
  }

  return "other";
}
