import Parser from "rss-parser";
import type { Source } from "../config/sources.js";
import type { NewsItem } from "../types.js";
import { categorizeItem } from "./categorize.js";

// If you're on Node 20+, global fetch exists.
// If not, we shim it using node-fetch (already installed).
async function ensureFetch() {
  if (typeof globalThis.fetch === "function") return;

  const mod = await import("node-fetch");
  // @ts-expect-error assign fetch polyfill
  globalThis.fetch = mod.default;
}

const parser = new Parser({
  customFields: {
    item: ["summary", "content", "content:encoded"],
  },
});

export async function fetchFromSource(source: Source): Promise<NewsItem[]> {
  const feed = await parser.parseURL(source.rss);

  return feed.items.map((item) => {
    const title = item.title ?? "";
    const summary = item.contentSnippet ?? "";

    return {
      id: `${source.id}:${item.link}`,
      title,
      summary,
      link: item.link!,
      sourceId: source.id,
      sourceName: source.name,
      lang: source.lang,
      category: categorizeItem(title, summary, source),
    };
  });
}

export async function fetchAllSources(sources: Source[]): Promise<NewsItem[]> {
  const results = await Promise.allSettled(
    sources.map((s) => fetchFromSource(s)),
  );

  const items: NewsItem[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") items.push(...r.value);
  }

  // Sort newest-ish (pubDate varies across feeds; fallback keeps stable)
  items.sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""),
  );
  return items;
}
