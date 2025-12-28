import type { Source } from "../config/sources.js";

export function deriveCategories(sources: Source[]) {
  const set = new Set<string>();

  for (const source of sources) {
    Object.keys(source.categories ?? {}).forEach((c) => set.add(c));
  }

  return Array.from(set).sort();
}
