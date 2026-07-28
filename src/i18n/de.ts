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
    // `modal` verweist auf einen Schlüssel in `forms` (siehe unten). Ohne JS
    // bleibt `href` der Fallback — dann öffnet der Button direkt eine leere
    // Mail statt des Formulars, tut also dasselbe, nur ohne Vorausfüllung.
    ctaPrimary: {
      href: "mailto:christian@buzz-agents.com?subject=Anfrage%3A%20Zugang%20zur%20Alpha%20von%20buzz%20agents",
      label: "Jetzt testen",
      modal: "alpha",
    },
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
      "Open-Source-Messenger für Menschen und KI-Agenten — dezentral, souverän, aufbauend auf bestehender Infrastruktur.<br>buzz agents steht in keiner rechtlichen Verbindung zu <a href='https://buzz.xyz' target='_blank' rel='noopener' title='Buzz'>Buzz</a>, einem Produkt von Block, Inc.",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
    copyright: "© 2026 buzz agents",
  },

  // ---------------------------------------------------------------------
  // Anfrage-Formulare (Modal)
  //
  // Ein Eintrag pro Einsatzort. Geöffnet wird das Modal über ein Element mit
  // `data-modal="<schlüssel>"` — siehe components/RequestModal.astro.
  // Neuen Einsatzort ergänzen = neuen Block hier anlegen, <RequestModal>
  // in der Seite einbinden, `data-modal` an den Button schreiben.
  //
  // Versand läuft über `mailto:` — das Formular baut aus den Eingaben eine
  // fertige E-Mail und öffnet sie im Mail-Programm des Nutzers. Es gibt keinen
  // Server, der die Daten entgegennimmt (siehe CLAUDE.md → "Formular-Versand").
  // ---------------------------------------------------------------------
  forms: {
    // Gemeinsame Validierungstexte für alle Formulare.
    messages: {
      required: "Bitte ausfüllen.",
      email: "Bitte eine gültige E-Mail-Adresse angeben.",
      linkedin:
        "Bitte die vollständige Profil-URL angeben, z. B. https://www.linkedin.com/in/dein-profil",
      linkedinRequired:
        "Bei einer privaten E-Mail-Adresse brauchen wir zusätzlich dein LinkedIn-Profil.",
    },

    alpha: {
      id: "alpha",
      eyebrow: "Geschlossene Alpha",
      headline: "Zugang zur Testversion anfragen",
      intro:
        "buzz agents ist noch in einer geschlossenen Alpha. Sag uns kurz, wer du bist — wir melden uns mit deinem Zugang.",
      // Regel: LinkedIn-Profil ODER geschäftliche E-Mail-Adresse ist Pflicht.
      // Bei einer Freemail-Adresse wird das LinkedIn-Feld zum Pflichtfeld.
      rule: "linkedinOrCompanyEmail",
      mailTo: "christian@buzz-agents.com",
      mailSubject: "Anfrage: Zugang zur Alpha von buzz agents",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
          placeholder: "Vor- und Nachname",
          autocomplete: "name",
          maxlength: 120,
          help: "",
        },
        {
          name: "email",
          label: "E-Mail",
          type: "email",
          required: true,
          placeholder: "du@deine-firma.de",
          autocomplete: "email",
          maxlength: 160,
          help: "Am besten deine geschäftliche Adresse.",
        },
        {
          name: "linkedin",
          label: "LinkedIn-Profil",
          type: "url",
          required: false,
          placeholder: "https://www.linkedin.com/in/dein-profil",
          autocomplete: "url",
          maxlength: 300,
          help: "Pflicht, wenn du eine private E-Mail-Adresse angibst.",
        },
        {
          name: "usecase",
          // `mailLabel` wird in der E-Mail statt `label` verwendet — die Frage
          // im Formular liest sich als Zeile in der Mail sonst schief.
          label: "Wofür willst du buzz agents einsetzen?",
          mailLabel: "Einsatzzweck",
          type: "textarea",
          required: false,
          placeholder: "Ein, zwei Sätze genügen.",
          autocomplete: "off",
          // Bewusst knapp: die fertige Mail muss als mailto:-URL in die
          // Adresszeile passen (siehe MAILTO_MAX in RequestModal.astro).
          maxlength: 500,
          help: "",
        },
      ],
      // Kein Einwilligungs-Haken: die Angaben gehen nicht an unseren Server,
      // sondern in dein eigenes Mail-Programm. Es gibt an dieser Stelle also
      // nichts, worin eingewilligt werden könnte — nur den Hinweis.
      note: "Deine Angaben werden nicht an uns übertragen — das Formular öffnet nur eine fertige E-Mail in deinem Mail-Programm. Wie wir deine Anfrage danach verarbeiten, steht in der <a href='/datenschutz'>Datenschutzerklärung</a>.",
      submitLabel: "E-Mail vorbereiten",
      closeLabel: "Schließen",
      success: {
        headline: "Fast geschafft.",
        body: "Dein Mail-Programm sollte sich jetzt mit einer fertigen Nachricht geöffnet haben. Bitte schick sie noch ab — erst dann erreicht uns deine Anfrage.",
      },
      // Wenn sich kein Mail-Programm öffnet (z. B. bei reinen Webmail-Nutzern),
      // kann der Text hierüber kopiert und von Hand verschickt werden.
      fallback: {
        body: "Es hat sich nichts geöffnet? Dann kopier deine Anfrage und schick sie an",
        copyLabel: "Anfrage kopieren",
        copiedLabel: "Kopiert.",
        manualLabel: "Anfrage zum Kopieren",
      },
    },
  },
} as const;

export type Content = typeof content;
