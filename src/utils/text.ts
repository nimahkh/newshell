export function safeText(v: unknown): string {
  if (typeof v === "string") return v;
  return "";
}

export function stripSpaces(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}
