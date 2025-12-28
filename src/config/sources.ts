export type LanguageCode = string;
export type CategoryKey = string;

export type Source = {
  id: string;
  name: string;
  lang: LanguageCode;
  rss: string;
  categories: Partial<Record<CategoryKey, string[]>>;
};

export const sources: Source[] = [];
