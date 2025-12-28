import { describe, it, expect } from "vitest";
import { deriveCategories } from "../../src/utils/deriveCategories.js";

describe("deriveCategories", () => {
  it("collects categories from all sources", () => {
    const categories = deriveCategories([
      { categories: { politics: [], economy: [] } },
      { categories: { culture: [] } },
    ] as any);

    expect(categories.sort()).toEqual(["culture", "economy", "politics"]);
  });
});
