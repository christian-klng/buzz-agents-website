# Handoff: buzz agents — Landing Page & Design System

## Overview
Landing Page für „buzz agents" — ein Open-Source-Netzwerk aus Menschen und KI-Agenten für den deutschen Markt (Zielgruppe: Startups, KMU, Agenturen). Umfasst die vollständige Landing Page plus Design-System-Referenz („Signal"). Sprache: Deutsch, Du-Form, professionell aber nahbar.

## About the Design Files
Die HTML-Dateien in diesem Paket sind **Design-Referenzen** (Prototypen in HTML), kein Produktionscode. Aufgabe: Diese Designs in der Ziel-Codebasis nachbauen — mit deren Framework und Patterns. Existiert noch keine Codebasis, wähle einen passenden Stack (Empfehlung: Next.js/Astro mit i18n-Routing, da Mehrsprachigkeit DE/EN geplant ist).

## Fidelity
**High-fidelity.** Farben, Typografie, Abstände und Interaktionen sind final und sollen pixelgenau übernommen werden.

## Geplante Weiterentwicklung (vom Auftraggeber gewünscht)
- **Mehrsprachigkeit**: Start Deutsch, Englisch folgt. URL-Routing (`/de`, `/en`), `hreflang`, Sprachumschalter in der Nav (noch nicht im Design — im Stil der Sekundär-Buttons/Textlinks ergänzen).
- **Deployment**: Statisches Hosting genügt (keine Server-Logik im Design). Formular-/Signup-Ziele sind noch offen.

## Design Tokens

### Farben
| Token | Wert | Verwendung |
|---|---|---|
| Ink | `#111310` | Seitenhintergrund |
| Signal | `#D5E021` | Akzent, primäre CTAs, Eyebrows, Ziffern |
| Signal Hover | `#E4EF3A` | Hover primärer Buttons |
| Paper | `#F0F1E6` | Text |
| Moss | `#2A2D27` | Flächen (Reserve) |
| Cell Hover | `#1A1D18` | Hover der Feature-Zellen |
| Hairline | `rgba(240,241,230,.14)` | alle Trennlinien/Borders |
| Text sekundär | Paper mit 60–70 % Opazität | Fließtext |
| Text tertiär | Paper mit 40–55 % Opazität | Metatext, Footer |

Regeln: Signal nie als Fläche für Fließtext. Struktur durch 1px-Hairlines, keine Karten-Schatten, keine Verläufe, keine Emoji. `::selection` = Signal-Hintergrund + Ink-Text.

### Typografie — Figtree (Google Fonts, Gewichte 400/500/600/700)
| Stil | Größe/Gewicht | Extras |
|---|---|---|
| Display (H1) | 84px / 700 | line-height 1.0, letter-spacing -0.035em |
| H2 | 48px / 700 | lh 1.08, ls -0.025em |
| H3 / Feature-Titel | 19–24px / 600 | — |
| Body | 16–17px / 400 | lh 1.55–1.6 |
| Eyebrow | 13px / 400 | uppercase, letter-spacing 0.16em, Farbe Signal |
| Stat-Zahl | 34–40px / 700 | Farbe Signal |

`text-wrap: balance` auf Headlines, `text-wrap: pretty` auf Absätzen.

### Abstände (als Tweaks/Variablen umgesetzt — Defaults)
- Vertikales Sektions-Padding `--sy`: **150px** (Hero: 1.15×)
- Seitenrand `--sx`: **48px**
- Feature-Zellen-Padding `--cell`: **56px** (horizontal 0.72×)
- Grid-Gaps: 56–64px zwischen Spalten, 20px zwischen Preiskarten
- 8px-Raster

### Radius & Form
- Buttons/Pills/Inputs: `border-radius: 999px`
- Karten/Screenshots: 16px
- Logo: gefüllter Kreis (20–22px) in Signal + Wortmarke „buzz agents" (700)

### Buttons
- **Primär**: Signal-Hintergrund, Ink-Text, 600, padding 16px 32px (S: 10px 20px). Hover: `#E4EF3A`
- **Sekundär**: transparent, 1px Border `rgba(240,241,230,.3)`, Hover: Border `.7`
- **Textlink**: Paper 70 %, Hover Signal

## Screens / Sektionen (eine Seite, Reihenfolge)

1. **Sticky Nav** — Logo links, Mitte: Funktionen / Open Source / Hosting / FAQ (Anker-Links), rechts: „GitHub" (sekundär S) + „Cloud testen" (primär S). Hintergrund `rgba(17,19,16,.92)` + `backdrop-filter: blur(12px)`. **Scroll-Verhalten**: ab `scrollY > 8` schrumpft padding 22px→12px und die untere Hairline blendet ein (vorher transparent).
2. **Hero** — Eyebrow „Open Source · Selbst gehostet · Souverän", H1 „Dein Netzwerk aus Menschen und KI‑Agenten." (mit non-breaking hyphen in KI‑Agenten) + **blinkender Cursor** (Signal, 0.075em breit, 0.78em hoch, `steps(1)` 1.1s), Subline (max-width 580px), zwei CTAs: „Cloud-Version testen" (primär) / „Installation anfragen" (sekundär).
3. **Features** (`#funktionen`) — 4-spaltiges Grid mit Hairline-Trennern (border-right auf Zelle 1–3): 01 Dezentral & unabhängig · 02 Souveräne, lokale LLMs · 03 Anpassbare Agenten · 04 Offene Integrationen. **Hover**: Zelle → `#1A1D18` (transition .25s), Ziffer → „→".
4. **Das Produkt** (`#produkt`) — H2 „So sieht Buzz aus.", zwei Zeilen im Wechsel-Layout (Grid 1.5fr/1fr bzw. 1fr/1.5fr, gap 56px, vertikal `--sy`×0.7): großer Screenshot-Platzhalter (16:10, 16px Radius, Hairline-Border) + Beschreibung (Signal-Label, 24px/600 Titel, Body). Inhalte: „Netzwerk — Menschen und Agenten in einem Raum" und „Konfiguration — Agenten anpassen, ohne Code". **Echte Screenshots einsetzen.**
5. **Open Source** (`#opensource`) — Grid 1.1fr/.9fr: links H2 „Kein Blackbox-SaaS. Code, den du lesen kannst." + Text + Link „Repo auf GitHub →"; rechts 2×2-Stat-Grid (Hairline-Gaps): MIT / 100 % / Lokal / DE. **Scroll-Reveal**: Kacheln faden gestaffelt ein (opacity 0→1, translateY 14px→0, .6s ease, 0/.12/.24/.36s Delay), „100 %" zählt von 0 hoch (1100ms, cubic ease-out). Trigger: Oberkante < 85 % Viewport.
6. **Hosting & Preise** (`#hosting`) — H2 „So kommst du zu deinem Buzz.", 3 Preiskarten (Grid, gap 20px, Radius 16px, padding 36px 32px): **Self-Hosted** 0 € / **Cloud** ab 29 €/Monat (hervorgehoben: Signal-Border, `rgba(213,224,33,.05)` Fläche, Badge „Am schnellsten startklar" oben überlappend) / **Installation im Auftrag** auf Anfrage. Listenzeilen mit „—"-Präfix. ⚠️ 29 € ist Platzhalter.
7. **FAQ** (`#faq`) — Grid .8fr/1.2fr: links H2 „Häufige Fragen.", rechts Akkordeon (5 Fragen, siehe HTML). Ein Item offen zugleich; +/− in Signal; Zeilen durch Hairlines getrennt; Frage-Hover → Signal.
8. **CTA-Sektion** — zentriert, H2 56px „Bereit für souveräne KI?", zwei Buttons.
9. **Footer** — links Logo + Kurzbeschreibung, rechts **nur „Impressum"** (bewusst reduziert). Darunter Copyright-Zeile „© 2026 buzz agents Community".

Alle Anker-Sektionen: `scroll-margin-top: 90px`.

## Interactions & Behavior (Zusammenfassung)
- Nav-Shrink bei Scroll (siehe oben) — ohne CSS-Transition auf padding
- Cursor-Blink im Hero (CSS keyframes)
- Feature-Zellen-Hover (Hintergrund + Ziffer→Pfeil)
- Stats-Scroll-Reveal + Count-up (einmalig)
- FAQ-Akkordeon (exklusiv offen, erstes Item initial offen)
- Text-Selektion in Signal
- Sanftes Anker-Scrolling empfohlen (`scroll-behavior: smooth`)

## State Management
Rein clientseitig: `open` (FAQ-Index, −1 = zu), `hover` (Feature-Index), `scrolled` (bool), `statsIn` (bool, einmalig), `pct` (Count-up-Wert). Kein Data-Fetching.

## Offene Punkte / Platzhalter
- GitHub-Repo-URL, Docs-URL, Signup-Ziel (alle Links zeigen auf Anker)
- Cloud-Preis (29 € = Platzhalter)
- Zwei Produkt-Screenshots
- Impressums-/Datenschutzseiten (DE: Impressumspflicht + DSGVO beachten)
- Sprachumschalter-Design bei i18n-Einführung

## Assets
Keine Bild-Assets. Schrift: Figtree über Google Fonts (bei DSGVO-Bedenken selbst hosten, z. B. via fontsource). Logo ist reines CSS (Kreis + Wortmarke).

## Files
- `Buzz Landing.dc.html` — die Landing Page (Template + Logik; `<x-dc>`-Abschnitt enthält Markup mit Inline-Styles, `data-dc-script` die Interaktionslogik als React-ähnliche Klasse)
- `Buzz Design System.dc.html` — Design-System-Referenzblatt
- `image-slot.js` — nur Prototyp-Hilfsmittel für Screenshot-Platzhalter, nicht übernehmen
