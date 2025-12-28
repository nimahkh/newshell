import open from "open";

export async function openArticle(url: string) {
  if (!url) return;
  await open(url);
}
