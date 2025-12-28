export type LanguageCode = string;
export type CategoryKey = string;

export type Source = {
  id: string;
  name: string;
  lang: LanguageCode;
  rss: string;
  categories: Partial<Record<CategoryKey, string[]>>;
};

export const sources: Source[] = [
  {
    id: "dutchnews",
    name: "Dutch News (EN)",
    lang: "en",
    rss: "https://www.dutchnews.nl/feed",
    categories: {
      politics: ["government", "parliament", "minister"],
      economy: ["economy", "inflation", "market"],
      culture: ["movie", "festival", "art"],
    },
  },
  {
    id: "nltimes",
    name: "NL Times (EN)",
    lang: "en",
    rss: "https://nltimes.nl/rssfeed2",
    categories: {
      politics: ["government", "parliament", "minister"],
      economy: ["economy", "inflation", "market"],
      culture: ["movie", "festival", "art"],
    },
  },
  {
    id: "govnl",
    name: "Netherlands Government (EN)",
    lang: "en",
    rss: "https://feeds.government.nl/news.rss",
    categories: {
      politics: ["government", "parliament", "minister"],
      economy: ["economy", "inflation", "market"],
      culture: ["movie", "festival", "art"],
    },
  },
  {
    id: "marechaussee",
    name: "Royal Netherlands Marechaussee (EN)",
    lang: "en",
    rss: "https://feeds.marechaussee.nl/nieuws.rss",
    categories: {
      politics: ["government", "parliament", "minister"],
      economy: ["economy", "inflation", "market"],
      culture: ["movie", "festival", "art"],
    },
  },
  {
    id: "bbc-world",
    name: "BBC World",
    lang: "en",
    rss: "https://feeds.bbci.co.uk/news/world/rss.xml",
    categories: {
      politics: ["government", "parliament", "minister"],
      economy: ["economy", "inflation", "market"],
      culture: ["movie", "festival", "art"],
    },
  },
  // {
  //   id: "bbc-persian",
  //   name: "BBC Persian",
  //   lang: "fa",
  //   rss: "https://feeds.bbci.co.uk/persian/rss.xml",
  //   categories: {
  //     politics: ["سیاست", "دولت", "انتخابات", "تحریم"],
  //     economy: ["اقتصاد", "تورم", "ارز", "قیمت"],
  //     culture: ["فیلم", "موسیقی", "فرهنگ"],
  //   },
  // },
  // {
  //   id: "dw-fa",
  //   name: "DW Persian",
  //   lang: "fa",
  //   rss: "https://rss.dw.com/rdf/rss-fa-all",
  //   categories: {
  //     world: ["جهان", "جنگ", "صلح", "ناتو"],
  //     politics: ["سیاست", "دولت"],
  //   },
  //  },
];
