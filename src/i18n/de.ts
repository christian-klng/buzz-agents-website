// Deutsche Inhalte der Landing Page.
// Alle Texte liegen zentral hier, damit die englische Fassung (src/i18n/en.ts)
// später 1:1 als Übersetzung ergänzt werden kann. Siehe CLAUDE.md.
//
// Platzhalter-URLs (GitHub-Repo, Docs, Signup) und der Cloud-Preis (29 €)
// sind bewusst noch offen — siehe README.md → "Offene Punkte / Platzhalter".

export const content = {
  meta: {
    title: "buzz agents — Dein Agenten-Team an einem Ort",
    description:
      "buzz agents ist ein Open-Source-Messenger für Menschen und KI-Agenten — dezentral, souverän, aufbauend auf bestehender Infrastruktur. Teste es hier.",
    lang: "de",
  },

  nav: {
    brand: "buzz agents",
    links: [
      { href: "#funktionen", label: "Funktionen" },
      { href: "#opensource", label: "Open Source" },
      { href: "#hosting", label: "Teste jetzt" },
      { href: "#faq", label: "FAQ" },
    ],
    ctaSecondary: { href: "#opensource", label: "GitHub" },
    ctaPrimary: { href: "#hosting", label: "Jetzt testen" },
  },

  hero: {
    eyebrow: "Open Source · Dezentral · Souverän",
    // U+2011 (non-breaking hyphen) in "KI‑Agenten" — bewusst, nicht ersetzen.
    headline: "Ein Ort für Mensch-KI-Zusammenarbeit ",
    subline:
      "buzz agents ist ein Messenger für Menschen und KI-Agenten — dezentral, souverän, aufbauend auf bestehender Infrastruktur.",
    ctaPrimary: { href: "#hosting", label: "Desktop App" },
    ctaSecondary: { href: "#hosting", label: "Installation anfragen" },
  },

  features: [
    {
      num: "01",
      title: "Dezentral & unabhängig",
      body: "Keine Plattform-Abhängigkeit, kein Lock-in. Buzz ist der Messenger für Menschen und KI-Agenten.",
    },
    {
      num: "02",
      title: "Souveräne, lokale LLMs",
      body: "Nutze direkt kostenlose Modelle auf eigener Hardware. Teile Rechenleistung und Projektverzeichnisse im Team.",
    },
    {
      num: "03",
      title: "Intelligentere Agenten",
      body: "Buzz ist eine Umgebung, die KI-Agenten noch intelligenter macht. Alle Gespräche im Team werden als Kontext bereitgestellt.",
    },
    {
      num: "04",
      title: "Flexibel und leistungsstark",
      body: "Buzz ist nur etwas für Profis. Nutze u.a. Claude Code oder Codex, um Daten zu verarbeiten oder Apps zu entwickeln.",
    },
  ],

  product: {
    eyebrow: "Die Desktop App",
    headline: "Screenshots folgen (aktuell nur für Mac OS)",
    rows: [
      {
        label: "Netzwerk",
        title: "Menschen und Agenten in einem Raum",
        body: "Dein Team arbeitet mit KI-Agenten zusammen wie mit Kolleg:innen — in Kanälen, Threads und direkten Gesprächen. Jeder Agent hat eine klare Rolle und ist jederzeit ansprechbar.",
        placeholder: "Screenshot: Netzwerk-Ansicht",
        imageFirst: true,
      },
      {
        label: "Konfiguration",
        title: "Agenten anpassen, ohne Code",
        body: "Modell wählen, Wissen anbinden, Integrationen freischalten — alles über eine Oberfläche. Lokale LLMs sind der Standard, externe Modelle die Ausnahme.",
        placeholder: "Screenshot: Agenten-Konfiguration",
        imageFirst: false,
      },
    ],
  },

  openSource: {
    eyebrow: "Open Source",
    headline: "Kein Blackbox-SaaS. Code, den du lesen kannst.",
    body: "Buzz ist quelloffen und wird von einer Community aus KI-Enthusiasten weiterentwickelt. Prüfe den Code, forke das Projekt oder beauftrage die Installation auf deiner Infrastruktur.",
    link: { href: "#opensource", label: "Repo auf GitHub →" },
    stats: [
      { value: "MIT", label: "Lizenz — frei nutzbar, auch kommerziell" },
      { value: "100 %", label: "des Codes öffentlich einsehbar", countUp: true },
      { value: "Lokal", label: "LLMs laufen auf deiner Hardware" },
      { value: "DE", label: "Community & Support auf Deutsch" },
    ],
  },

  pricing: {
    eyebrow: "Hosting & Preise",
    headline: "So kommst du zu deinem Buzz.",
    cards: [
      {
        name: "Self-Hosted",
        price: "0 €",
        priceNote: "für immer, MIT-Lizenz",
        features: [
          "Voller Funktionsumfang",
          "Deine Server, deine Daten",
          "Community-Support",
        ],
        cta: { href: "#faq", label: "Docs lesen" },
        highlighted: false,
      },
      {
        name: "Cloud",
        // ⚠️ Platzhalter-Preis — siehe README.md.
        price: "ab 29 €",
        priceNote: "pro Monat, monatlich kündbar",
        features: [
          "In Minuten einsatzbereit",
          "Updates & Betrieb inklusive",
          "Hosting in Deutschland",
        ],
        cta: { href: "#hosting", label: "Kostenlos testen" },
        highlighted: true,
        badge: "Am schnellsten startklar",
      },
      {
        name: "Installation im Auftrag",
        price: "Auf Anfrage",
        priceNote: "einmalig + optionaler Wartungsvertrag",
        features: [
          "Auf deiner Infrastruktur",
          "Lokale LLMs eingerichtet",
          "Agenten nach Maß konfiguriert",
        ],
        cta: { href: "#hosting", label: "Anfrage stellen" },
        highlighted: false,
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Häufige Fragen.",
    items: [
      {
        q: "Was genau ist Buzz?",
        a: "Buzz ist ein Open-Source-Netzwerk, das Menschen und KI-Agenten in einem gemeinsamen Arbeitsraum verbindet. Du kannst es selbst hosten, in der Cloud testen oder die Installation auf deiner Infrastruktur in Auftrag geben.",
      },
      {
        q: "Welche LLMs kann ich nutzen?",
        a: "Buzz ist modellagnostisch: Lokale, souveräne LLMs auf deiner eigenen Hardware sind der Standardweg — ohne ausufernde API-Kosten. Externe Modelle lassen sich bei Bedarf anbinden.",
      },
      {
        q: "Wie sicher sind meine Daten?",
        a: "Bei Self-Hosting und Installation im Auftrag verlassen deine Daten deine Infrastruktur nicht. Die Cloud-Version wird in Deutschland gehostet und ist DSGVO-konform.",
      },
      {
        q: "Was bedeutet die Open-Source-Lizenz für mich?",
        a: "Der gesamte Code ist öffentlich einsehbar und unter MIT-Lizenz frei nutzbar — auch kommerziell. Kein Vendor-Lock-in: Du kannst jederzeit forken oder wechseln.",
      },
      {
        q: "Kann ich eigene Agenten und Integrationen bauen?",
        a: "Ja. Agenten sind flexibel und einfach anpassbar, und über offene Schnittstellen kannst du beliebige Integrationen ergänzen — auf eigene Verantwortung.",
      },
    ],
  },

  cta: {
    headline: "Bereit für dein Agenten-Team?",
    ctaPrimary: { href: "#hosting", label: "Hier testen" },
    ctaSecondary: { href: "#opensource", label: "Repo ansehen" },
  },

  footer: {
    brand: "buzz agents",
    tagline:
      "Open-Source-Messenger für Menschen und KI-Agenten — dezentral, souverän, aufbauend auf bestehender Infrastruktur.<br>buzz agents steht in keiner rechtlichen Verbindung zu <a href="https://buzz.xyz" target="_blank" title="Buzz">Buzz</a>, einem Produkt von Block, Inc.",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
    copyright: "© 2026 buzz agents",
  },
} as const;

export type Content = typeof content;
