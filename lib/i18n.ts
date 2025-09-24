export const locales = ["pt", "en"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "pt";

// Minimal dictionary loader (no extra libs)
export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("../messages/en.json")).default;
    default:
      return (await import("../messages/pt.json")).default;
  }
}
