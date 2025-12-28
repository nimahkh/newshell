import { describe, it, expect } from "vitest";
import { categorizeItem } from "../../src/services/categorize.js";

describe("categorizeItem", () => {
  const source = {
    categories: {
      politics: ["election", "government"],
      economy: ["market", "inflation"],
    },
  };

  it("matches category by keyword", () => {
    const category = categorizeItem(
      "Government announces election",
      "",
      source as any,
    );

    expect(category).toBe("politics");
  });

  it("returns other when no match", () => {
    const category = categorizeItem(
      "Random unrelated headline",
      "",
      source as any,
    );

    expect(category).toBe("other");
  });
});
