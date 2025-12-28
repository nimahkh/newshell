import { describe, it, expect, vi } from "vitest";
import { fetchFromSource } from "../../src/services/fetchNews.js";

vi.mock("rss-parser", () => {
  return {
    default: class MockParser {
      parseURL = vi.fn().mockResolvedValue({
        items: [
          {
            title: "Test headline",
            link: "https://example.com",
            contentSnippet: "summary",
          },
        ],
      });
    },
  };
});

describe("fetchFromSource", () => {
  it("returns normalized NewsItem", async () => {
    const items = await fetchFromSource({
      id: "test",
      name: "Test",
      lang: "en",
      rss: "https://test",
      categories: {},
    } as any);

    expect(items).toHaveLength(1);
    expect(items[0].title).toBe("Test headline");
    expect(items[0].sourceId).toBe("test");
    expect(items[0].link).toBe("https://example.com");
  });
});
