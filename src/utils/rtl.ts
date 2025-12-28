export function containsPersian(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}

/**
 * Minimal “RTL-friendly” approach:
 * - We DO NOT reverse the string (that breaks mixed content).
 * - We just keep it as-is and let the terminal render UTF-8.
 * If you want stronger RTL shaping, we can add a bidi/shaping lib later.
 */
export function rtlFriendly(text: string): string {
  return text;
}
