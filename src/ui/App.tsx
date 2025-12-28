import { useEffect, useMemo, useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import type { NewsItem } from "../types.js";
import { Header } from "./components/Header.js";
import { DoomLayout } from "./layout/DoomLayout.js";
import { SelectLanguage, LangChoice } from "./screens/SelectLanguage.js";
import { SelectCategory, CategoryChoice } from "./screens/SelectCategory.js";
import { SelectSource } from "./screens/SelectSource.js";
import { NewsList } from "./screens/NewsList.js";
import { Splash } from "./Splash.js";

type Step = "splash" | "loading" | "lang" | "category" | "source" | "list";
type SourceChoice = "all" | string;

export function App({
  allNews,
  onQuit,
}: {
  allNews: NewsItem[];
  onQuit: (code?: number) => void;
}) {
  const [step, setStep] = useState<Step>("splash");
  const [lang, setLang] = useState<LangChoice>("all");
  const [category, setCategory] = useState<CategoryChoice>("all");
  const [source, setSource] = useState<SourceChoice>("all");

  useInput(async (input) => {
    if (input === "q") onQuit(0);
    if (input === "b") {
      if (step === "list") setStep("source");
      else if (step === "source") setStep("category");
      else if (step === "category") setStep("lang");
    }
  });
  /* ---------- Language filter ---------- */

  const filteredByLang = useMemo(() => {
    if (lang === "all") return allNews;
    return allNews.filter((n) => n.lang === lang);
  }, [allNews, lang]);

  /* ---------- Category filter ---------- */

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    for (const n of filteredByLang) set.add(n.category);
    return Array.from(set).sort() as string[];
  }, [filteredByLang]);

  const filteredByCategory = useMemo(() => {
    if (category === "all") return filteredByLang;
    return filteredByLang.filter((n) => n.category === category);
  }, [filteredByLang, category]);

  /* ---------- Source filter ---------- */

  const availableSources = useMemo(() => {
    const map = new Map<string, string>();
    for (const n of filteredByCategory) {
      map.set(n.sourceId, n.sourceName);
    }
    return Array.from(map.entries()).map(([id, name]) => ({
      id,
      name,
    }));
  }, [filteredByCategory]);

  const finalItems = useMemo(() => {
    if (source === "all") return filteredByCategory;
    return filteredByCategory.filter((n) => n.sourceId === source);
  }, [filteredByCategory, source]);

  /* ---------- Reset logic ---------- */

  useEffect(() => {
    setCategory("all");
    setSource("all");
  }, [lang]);

  useEffect(() => {
    setSource("all");
  }, [category]);

  useEffect(() => {
    if (step !== "splash") return;

    const t = setTimeout(() => {
      setStep("lang");
    }, 1200); // 1.2s feels perfect

    return () => clearTimeout(t);
  }, [step]);

  if (step === "splash") {
    return <Splash isLoading />;
  }
  /* ---------- Render ---------- */

  return (
    <DoomLayout
      lang={lang}
      category={category}
      source={source}
      count={finalItems.length}
    >
      <Box flexDirection="column">
        <Header
          subtitle={
            step === "list"
              ? `lang=${lang} | category=${category} | source=${source} | items=${finalItems.length}`
              : "Terminal based RSS reader"
          }
        />

        {allNews.length === 0 ? (
          <Text dimColor>No news loaded. Check feeds / internet.</Text>
        ) : null}

        {step === "lang" ? (
          <SelectLanguage
            onSelect={(l) => {
              setLang(l);
              setStep("category");
            }}
          />
        ) : null}

        {step === "category" ? (
          <SelectCategory
            available={availableCategories}
            onSelect={(c) => {
              setCategory(c);
              setStep("source");
            }}
          />
        ) : null}

        {step === "source" ? (
          <SelectSource
            sources={availableSources}
            onSelect={(s) => {
              setSource(s);
              setStep("list");
            }}
          />
        ) : null}

        {step === "list" ? (
          <NewsList items={finalItems} onBack={() => setStep("source")} />
        ) : null}
      </Box>
    </DoomLayout>
  );
}
