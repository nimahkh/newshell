import { describe, it, expect } from "vitest";
import { sources } from "../../src/config/sources.js";

describe("sources config", () => {
  it("has unique source ids", () => {
    const ids = sources.map((s) => s.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("each source has required fields", () => {
    for (const s of sources) {
      expect(s.id).toBeTruthy();
      expect(s.name).toBeTruthy();
      expect(s.lang).toBeTruthy();
      expect(s.rss).toMatch(/^https?:\/\//);
      expect(typeof s.categories).toBe("object");
    }
  });
});
