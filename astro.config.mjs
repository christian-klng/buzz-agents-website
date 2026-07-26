// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://buzz-agents.com",

  // i18n-Grundgerüst: Deutsch ist Standard (ohne URL-Präfix unter "/"),
  // Englisch folgt später unter "/en". Siehe CLAUDE.md → "Mehrsprachigkeit".
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  build: {
    // Saubere URLs ohne .html-Endung (funktioniert mit dem nginx-Setup im Dockerfile).
    format: "directory",
  },
});
