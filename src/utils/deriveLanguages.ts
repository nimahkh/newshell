import type { Source } from "../config/sources.js";

export function deriveLanguages(sources: Source[]) {
  return Array.from(new Set(sources.map((s) => s.lang)));
}
