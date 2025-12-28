import { describe, it, expect } from "vitest";

describe("filtering logic", () => {
  const news = [
    { lang: "en", category: "politics", sourceId: "bbc" },
    { lang: "fa", category: "economy", sourceId: "dw" },
  ];

  it("filters by language", () => {
    const result = news.filter((n) => n.lang === "en");
    expect(result.length).toBe(1);
  });

  it("filters by category", () => {
    const result = news.filter((n) => n.category === "economy");
    expect(result[0].sourceId).toBe("dw");
  });
});
