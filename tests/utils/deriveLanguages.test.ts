import { describe, it, expect } from "vitest";
import { deriveLanguages } from "../../src/utils/deriveLanguages.js";

describe("deriveLanguages", () => {
  it("extracts unique languages", () => {
    const langs = deriveLanguages([
      { lang: "en" },
      { lang: "fa" },
      { lang: "en" },
    ] as any);

    expect(langs.sort()).toEqual(["en", "fa"]);
  });
});
