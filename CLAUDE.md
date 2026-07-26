# CLAUDE.md

Leitfaden für Claude Code (und Menschen) zur Arbeit an diesem Repository.

## Was ist das?

Landing Page für **buzz agents** — ein Open-Source-Netzwerk aus Menschen und
KI-Agenten für den deutschen Markt (Startups, KMU, Agenturen). Eine einzelne,
statische Marketing-Seite. Sprache: **Deutsch, Du-Form**, professionell aber
nahbar. Englisch ist geplant (siehe [Mehrsprachigkeit](#mehrsprachigkeit)).

Der ursprüngliche Design-Prototyp (aus Claude Design) liegt zur Referenz in
`design/` — das ist **kein** ausführbarer Code, sondern die pixelgenaue Vorlage.
`README.md` ist das Design-Handoff mit allen Tokens, Maßen und Sektions-Specs.
**Bei visuellen Änderungen immer gegen `README.md` + `design/` abgleichen.**

## Stack

- **Astro 5** — statische Ausgabe (`output: "static"`, kein SSR, kein Server-Code).
- **Kein UI-Framework** — reine `.astro`-Komponenten + globale CSS. Bewusst
  minimal gehalten; kein Tailwind, kein React.
- **Figtree** via `@fontsource/figtree` — **selbst gehostet** (DSGVO-konform,
  keine Google-Fonts-Requests zur Laufzeit).
- Interaktionen: eine kleine Vanilla-JS-Insel in `src/layouts/Base.astro`.

## Befehle

```bash
npm install      # Abhängigkeiten
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Produktions-Build nach dist/
npm run preview  # dist/ lokal ausliefern (Vorschau des Builds)
```

Node ≥ 18.20 / 20.3 / 22 erforderlich (siehe Astro-Systemvoraussetzungen).

## Struktur

```
src/
  i18n/de.ts            ← ALLE Texte der Seite (zentral, übersetzungsbereit)
  layouts/Base.astro    ← <head>, Fonts, globale CSS, Interaktions-Skript
  styles/global.css     ← Design-Tokens (CSS-Variablen) + alle Sektions-Styles
  components/            ← Eine Komponente pro Sektion (Nav, Hero, Features, …)
  pages/
    index.astro         ← Setzt die Sektionen zusammen, reicht Inhalte als Props
    404.astro           ← Markenkonforme Fehlerseite
design/                 ← Original-Prototyp (Referenz, nicht im Build)
Dockerfile, nginx.conf  ← Deployment (siehe unten)
```

**Prinzip:** Inhalte leben in `src/i18n/*.ts`, Struktur in Komponenten, Aussehen
in `global.css`. Komponenten bekommen ihre Daten als Props von der Seite —
so sind sie sprach-unabhängig und für Englisch wiederverwendbar.

## Design-Tokens

Kanonisch als CSS-Variablen in `src/styles/global.css` (`:root`). Kurzfassung:

| Token | Wert |
|---|---|
| `--ink` (Hintergrund) | `#111310` |
| `--signal` (Akzent/CTA) | `#d5e021` |
| `--signal-hover` | `#e4ef3a` |
| `--paper` (Text) | `#f0f1e6` |
| `--cell-hover` | `#1a1d18` |
| `--hairline` | `rgba(240,241,230,.14)` |
| `--sy` / `--sx` / `--cell` | `150px` / `48px` / `56px` |

Regeln (aus `README.md`): Signal nie als Fläche für Fließtext; Struktur nur über
1px-Hairlines; keine Schatten, keine Verläufe, keine Emoji; `::selection` =
Signal-Hintergrund + Ink-Text. Desktop ist pixelgenau; Responsive-Regeln stehen
gesammelt am Ende von `global.css` und lassen die Desktop-Werte unangetastet.

## Interaktionen

- **Nav-Shrink** bei `scrollY > 8` (Padding 22→12px, Hairline blendet ein) —
  JS in `Base.astro` schaltet `.nav--scrolled`. Kein Transition auf `padding`.
- **Cursor-Blink** im Hero — reine CSS-Keyframes.
- **Feature-Hover** (Zelle wird dunkler, Ziffer → Pfeil) — reines CSS.
- **Stats-Reveal + Count-up** (0 → 100 %) — IntersectionObserver, einmalig.
  Ohne JS bleiben die Stats sichtbar (Progressive Enhancement via `.js`-Klasse).
- **FAQ-Akkordeon** — native `<details name="faq">` (exklusiv offen), erstes
  Item initial offen; +/− per CSS. Kein JS nötig.
- Respektiert `prefers-reduced-motion`.

## Mehrsprachigkeit

Vorbereitet, aber **EN noch nicht gebaut.** `astro.config.mjs` hat `i18n` mit
`defaultLocale: "de"` (unter `/`) und reserviertem `en` (später unter `/en`).

Nächste Schritte für Englisch:
1. `src/i18n/en.ts` als Übersetzung von `de.ts` anlegen (gleiche Struktur).
2. `src/pages/en/index.astro` erstellen, das `content` aus `en.ts` bezieht.
3. Sprachumschalter in der Nav ergänzen (im Stil der Sekundär-Buttons/Textlinks,
   siehe `README.md`), `hreflang`-Tags im `<head>` von `Base.astro` setzen.

## Deployment (Coolify)

Statische Seite, ausgeliefert über einen Multi-Stage-Container:
`Dockerfile` baut mit Node und serviert `dist/` mit nginx (`nginx.conf`:
saubere URLs, gzip, Cache-Header, Security-Header).

- **Coolify:** Ressourcentyp mit **Build Pack = Dockerfile**, verbunden mit dem
  GitHub-Repo. Coolify baut das Image bei jedem Push auf `main`.
- Container-Port: **80** (im Dockerfile via `EXPOSE`). Domain + SSL verwaltet
  Coolifys Traefik-Proxy.
- Alternative ohne Docker: Coolify **Static**-Build Pack mit Build-Command
  `npm run build` und Publish-Verzeichnis `dist`.

**Wichtig:** In `astro.config.mjs` `site` auf die echte Produktions-Domain
setzen (für korrekte `canonical`/OG-URLs).

## Offene Platzhalter (aus `README.md`)

- GitHub-Repo-URL, Docs-URL, Signup-Ziel (alle Links zeigen aktuell auf Anker).
- **Cloud-Preis „29 €" ist Platzhalter** (`src/i18n/de.ts` → `pricing`).
- Zwei Produkt-Screenshots (aktuell Platzhalter in `Product.astro`).
- Impressums-/Datenschutzseite (DE-Impressumspflicht + DSGVO) — Footer-Link
  zeigt noch auf `#top`.

## Konventionen

- Texte niemals in Komponenten hartkodieren → immer über `src/i18n/*.ts`.
- Neue Farben/Maße als CSS-Variable in `:root`, nicht als Magic-Value inline.
- Der non-breaking hyphen (U+2011) in „KI‑Agenten" (Hero-Headline) ist Absicht.
- `design/` niemals in den Build ziehen; es ist reine Referenz.
