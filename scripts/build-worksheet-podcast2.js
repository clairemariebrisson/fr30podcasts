const { execSync } = require("child_process");
const GLOBAL = execSync("npm root -g").toString().trim();
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Footer, PageBreak, TabStopType, TabStopPosition,
} = require(GLOBAL + "/docx");
const fs = require("fs");

// ---- palette (vine green for Podcast 2; bordeaux as the grammar cue) ----
const INK = "1A1A1A";
const ACCENT = "46731F";   // vine green
const ACCENT2 = "8C1D40";  // bordeaux for grammar / register cues
const SOFT = "EAF1DD";     // soft green fill
const SOFT2 = "FBF3D9";    // soft gold fill
const RULE = "C2D0AE";

const CONTENT_W = 9360;

// ---- helpers ----
const sp = (text, opts = {}) => new TextRun({ text, font: "Calibri", color: INK, ...opts });

function rule(spacingAfter = 280) {
  return new Paragraph({
    spacing: { after: spacingAfter, before: spacingAfter ? 60 : 0 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
    children: [new TextRun({ text: " ", font: "Calibri" })],
  });
}
const rules = (n, spacingAfter = 300) => Array.from({ length: n }, () => rule(spacingAfter));

function label(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    children: [sp(text, { bold: true, color: ACCENT, ...opts })],
  });
}

function helpLine(text) {
  return new Paragraph({
    spacing: { after: 60 },
    children: [sp("💡 " + text, { size: 19, italics: true, color: "777777" })],
  });
}

// a tinted callout box (model line, tip, etc.)
function box(children, fill = SOFT) {
  const edge = fill === SOFT2 ? "C9A227" : ACCENT;
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: [CONTENT_W],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: edge },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: edge },
      left: { style: BorderStyle.SINGLE, size: 8, color: edge },
      right: { style: BorderStyle.SINGLE, size: 2, color: edge },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: CONTENT_W, type: WidthType.DXA },
            shading: { fill, type: ShadingType.CLEAR },
            margins: { top: 100, bottom: 100, left: 180, right: 160 },
            children,
          }),
        ],
      }),
    ],
  });
}

const spacer = (after = 120) =>
  new Paragraph({ spacing: { after }, children: [new TextRun({ text: "" })] });

const checkboxLine = (options, opts = {}) =>
  new Paragraph({
    spacing: { after: 90, ...(opts.spacing || {}) },
    children: [sp(options.map((o) => "☐  " + o).join("       "), { size: 22, ...opts })],
  });

// a two-column reference / drill table
function twoColTable(header, rows, widths = [4400, 4960], fillHeader = ACCENT) {
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({
        tableHeader: true,
        children: header.map((t, j) =>
          new TableCell({
            width: { size: widths[j], type: WidthType.DXA },
            shading: { fill: fillHeader, type: ShadingType.CLEAR },
            margins: { top: 70, bottom: 70, left: 130, right: 120 },
            children: [new Paragraph({ children: [sp(t, { bold: true, color: "FFFFFF", size: 20 })] })],
          })
        ),
      }),
      ...rows.map((row, i) =>
        new TableRow({
          children: row.map((cell, j) =>
            new TableCell({
              width: { size: widths[j], type: WidthType.DXA },
              shading: { fill: i % 2 ? "F3F7EC" : "FFFFFF", type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 130, right: 120 },
              children: Array.isArray(cell) ? cell : [new Paragraph({ children: [cell] })],
            })
          ),
        })
      ),
    ],
  });
}

const blankCell = () =>
  new Paragraph({
    spacing: { before: 120, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 1 } },
    children: [new TextRun({ text: " ", font: "Calibri" })],
  });

const sectionTag = (text) =>
  new Paragraph({
    spacing: { before: 180, after: 60 },
    children: [sp(text, { bold: true, color: ACCENT2, size: 20, characterSpacing: 24 })],
  });

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 60, after: 90 },
    children: [sp(text, { color: ACCENT, bold: true })],
  });

const instr = (text) =>
  new Paragraph({
    spacing: { after: 100 },
    children: [sp(text, { size: 22, italics: true, color: "555555" })],
  });

// ===========================================================================
//  CONTENT
// ===========================================================================
const children = [];

// ---- Title block ----
children.push(
  new Paragraph({
    spacing: { after: 40 },
    children: [sp("FRANÇAIS 30 · PODCAST 2 · RACONTER UN TERROIR", { bold: true, color: ACCENT2, size: 20, characterSpacing: 24 })],
  }),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 20 },
    children: [sp("Atelier — La pub de terroir", { color: ACCENT, bold: true, size: 40 })],
  }),
  new Paragraph({
    spacing: { after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 4 } },
    children: [sp("Vendre un produit du monde francophone en 1 à 2 minutes — Reels, TikTok ou vidéo de tourisme", { italics: true, color: "555555", size: 22 })],
  }),
  new Paragraph({
    spacing: { after: 220 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      sp("Nom : ____________________________________", { size: 22 }),
      sp("\tDate : ____________________", { size: 22 }),
    ],
  }),
);

// ---- Objective + two-part frame ----
children.push(
  box([
    new Paragraph({ spacing: { after: 60 }, children: [sp("Ta mission", { bold: true, color: ACCENT })] }),
    new Paragraph({
      children: [sp(
        "Tu deviens créateur·rice de contenu. Tu vas réaliser une fausse mini-pub pour un produit lié à un terroir du monde " +
        "francophone — un vin, une huile, un sel, un fromage, un fruit… Pense Reels, TikTok ou vidéo de tourisme : 1 à 2 minutes, " +
        "un rythme nerveux, une histoire qui donne envie. Aujourd’hui, en classe, tu CONÇOIS ta pub ; chez toi, tu la TOURNES et tu la MONTES.",
        { size: 22 })],
    }),
  ]),
  spacer(160),
);

children.push(
  label("Le Podcast 2, en deux temps"),
  twoColTable(
    ["En classe (aujourd’hui)", "Chez toi"],
    [
      [
        [new Paragraph({ children: [sp("Concevoir ", { bold: true }), sp("ta pub : produit, histoire, scénario.", {})] }),
         new Paragraph({ spacing: { before: 40 }, children: [sp("But : choisir un terroir et écrire ton scénario brique par brique.", { size: 20, color: "555555" })] })],
        [new Paragraph({ children: [sp("Tourner et monter ", { bold: true }), sp("la vidéo finale.", {})] }),
         new Paragraph({ spacing: { before: 40 }, children: [sp("But : filmer le produit et le lieu, ajouter texte et musique, exporter.", { size: 20, color: "555555" })] })],
      ],
    ],
    [4680, 4680],
  ),
  spacer(220),
);

// ============ ÉTAPE 1 · DÉCOUVERTE ============
children.push(
  sectionTag("DÉCOUVERTE"),
  h2("1 · C’est quoi, une pub de terroir ?"),
);
children.push(
  label("Le mot « terroir » — en une phrase à toi :"),
  ...rules(2),
  spacer(60),
  new Paragraph({
    spacing: { after: 100 },
    children: [sp("Une pub de terroir, on la regarde surtout…", { bold: true, size: 22 })],
  }),
  checkboxLine(["à la télé", "sur Instagram / TikTok", "sur YouTube (tourisme)", "au cinéma"]),
  new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [sp("Qu’est-ce qui « vend » un produit de terroir, à ton avis ?", { bold: true, size: 22 })],
  }),
  checkboxLine(["le prix bas", "l’authenticité / l’histoire", "le lieu d’origine", "la rapidité"]),
  spacer(40),
  label("Trois ingrédients d’une bonne pub de terroir :"),
  new Paragraph({
    spacing: { after: 60 },
    children: [
      sp("1. ____________________      ", { size: 22 }),
      sp("2. ____________________      ", { size: 22 }),
      sp("3. ____________________", { size: 22 }),
    ],
  }),
  spacer(60),
  box([
    new Paragraph({ children: [
      sp("Pour aller plus loin : ", { bold: true, color: "9A7A12" }),
      sp("pourquoi vend-on un produit en racontant son ", { size: 21 }),
      sp("passé", { size: 21, italics: true }),
      sp(" (« autrefois, à la main… ») plutôt que ses ingrédients ?", { size: 21 }),
    ] }),
    ...rules(1, 240),
  ], SOFT2),
  spacer(200),
);

// ============ ÉTAPE 2 · OBSERVATION ============
children.push(
  sectionTag("OBSERVATION"),
  h2("2 · Regarde et note"),
  instr("Pendant les exemples (pubs / vidéos de tourisme), observe comment on raconte le lieu et comment on décrit le produit. Puis discute en groupe."),
);
[
  "Quelle est l’accroche ? Comment la vidéo capte-t-elle ton attention en 3 secondes ?",
  "Comment parle-t-on du passé du lieu (les images, les mots) ?",
  "Quels adjectifs valorisent le produit ? (note-en deux)",
  "Y a-t-il un slogan à la fin ? Lequel, ou de quel type ?",
].forEach((q) => {
  children.push(label(q), ...rules(1));
});
children.push(
  spacer(60),
  box([
    new Paragraph({ spacing: { after: 50 }, children: [sp("L’œil du/de la pub", { bold: true, color: ACCENT })] }),
    new Paragraph({ children: [sp(
      "Transcris UNE phrase « qui vend » que tu as entendue ou lue à l’écran (un slogan, une description). On l’analysera ensuite.",
      { size: 21 })] }),
    rule(240),
  ]),
  spacer(200),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 3 · ANALYSE ============
children.push(
  sectionTag("ANALYSE"),
  h2("3 · La langue qui vend"),
  instr("Une pub ne décrit pas neutre : elle valorise. Transforme chaque phrase « plate » en phrase de pub (la dernière est à toi)."),
  twoColTable(
    ["Neutre (plat) →", "Pub (valorisant) →"],
    [
      [sp("C’est un sel normal.", { size: 21 }), sp("Un sel rare, récolté à la main, au goût d’exception.", { size: 21, bold: true })],
      [sp("On le fabrique depuis longtemps.", { size: 21 }), sp("Un savoir-faire ancestral, transmis de génération en génération.", { size: 21, bold: true })],
      [sp("Le goût est différent des autres.", { size: 21 }), [blankCell()]],
    ],
  ),
  spacer(140),
);

// the three time-frames drill
children.push(
  label("Avant / aujourd’hui / demain — les trois temps de l’histoire"),
  helpLine("Complète avec le bon temps : l’imparfait (avant), le passé composé (le moment clé), le conditionnel (la projection)."),
  twoColTable(
    ["Le rôle", "Ta phrase (sur TON futur produit)"],
    [
      [sp("AVANT — l’imparfait (« Autrefois, on… »)", { size: 21, bold: true }), [blankCell()]],
      [sp("LE MOMENT CLÉ — le passé composé (« En …, … a … »)", { size: 21, bold: true }), [blankCell()]],
      [sp("DEMAIN / LE RÊVE — le conditionnel (« Vous adoreriez… »)", { size: 21, bold: true }), [blankCell()]],
    ],
    [4280, 5080],
  ),
  spacer(200),
);

// ============ ÉTAPE 4 · OUTILS ============
children.push(
  sectionTag("OUTILS"),
  h2("4 · La boîte à outils + le modèle"),
  twoColTable(
    ["L’outil", "Un exemple"],
    [
      [sp("L’imparfait (la nostalgie)", { size: 21, bold: true }),
       sp("« Autrefois, on récoltait les fruits à la main. »", { size: 21, italics: true })],
      [sp("Le passé composé (le moment clé)", { size: 21, bold: true }),
       sp("« En 2009, ce terroir a obtenu son label. »", { size: 21, italics: true })],
      [sp("Les adjectifs mélioratifs", { size: 21, bold: true }),
       sp("« doré, authentique, d’exception, raffiné, rare… »", { size: 21, italics: true })],
      [sp("Le conditionnel (faire rêver)", { size: 21, bold: true }),
       sp("« Vous adoreriez ce goût. Ce sel aurait des vertus rares. »", { size: 21, italics: true })],
      [sp("Le connecteur (opposer)", { size: 21, bold: true }),
       sp("« Tandis que l’industrie standardise, ici… »", { size: 21, italics: true })],
      [sp("La mise en relief (le slogan)", { size: 21, bold: true }),
       sp("« Ce qui fait la différence, c’est le terroir. »", { size: 21, italics: true })],
    ],
    [3400, 5960],
  ),
  spacer(140),
);

children.push(
  box([
    new Paragraph({ spacing: { after: 70 }, children: [sp("LE MODÈLE — L’huile d’argan d’Essaouira (Maroc)", { bold: true, color: ACCENT })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("ACCROCHE : ", { bold: true, size: 21 }), sp("Vous croyez connaître l’huile d’olive ? Goûtez autre chose.", { size: 21, italics: true })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("LE TERROIR : ", { bold: true, size: 21 }), sp("Autrefois, les femmes berbères récoltaient les fruits à la main. En 2009, l’huile a obtenu son label (IGP).", { size: 21, italics: true })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("LE PRODUIT : ", { bold: true, size: 21 }), sp("Une huile dorée, riche et authentique. Tandis que l’industrie standardise, ici, chaque goutte raconte une histoire.", { size: 21, italics: true })] }),
    new Paragraph({ children: [sp("L’APPEL : ", { bold: true, size: 21 }), sp("Vous adoreriez ce goût. Ce qui fait la différence, c’est le terroir.", { size: 21, italics: true })] }),
  ]),
  helpLine("Dans le modèle : souligne un verbe à l’imparfait, entoure deux adjectifs mélioratifs, et [encadre] le slogan."),
  spacer(220),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 5 · PRODUCTION ============
children.push(
  sectionTag("PRODUCTION"),
  h2("5 · À toi ! Conçois ta mini-pub"),
);

// product fiche
children.push(
  label("Ta fiche produit"),
  new Paragraph({ spacing: { after: 80 }, children: [
    sp("Produit : ", { size: 22, bold: true }), sp("________________________        ", { size: 22 }),
    sp("Lieu : ", { size: 22, bold: true }), sp("________________________", { size: 22 }),
  ] }),
  new Paragraph({ spacing: { after: 100 }, children: [
    sp("Label (AOP / AOC / IGP / —) : ", { size: 22, bold: true }), sp("____________________", { size: 22 }),
  ] }),
  label("Deux faits sur ce terroir (lieu, climat, savoir-faire, histoire) :"),
  ...rules(2),
  spacer(120),
);

// storyboard
children.push(
  label("Ton storyboard — une case par étape (écris la phrase + l’image que tu filmeras)"),
  twoColTable(
    ["L’étape (et sa structure)", "Ta phrase + ton image"],
    [
      [sp("ACCROCHE — une question / une mise en relief", { size: 21, bold: true }), [blankCell(), blankCell()]],
      [sp("LE TERROIR — imparfait + passé composé", { size: 21, bold: true }), [blankCell(), blankCell()]],
      [sp("LE PRODUIT — adjectifs mélioratifs + un connecteur", { size: 21, bold: true }), [blankCell(), blankCell()]],
      [sp("L’APPEL — conditionnel + slogan (mise en relief)", { size: 21, bold: true }), [blankCell(), blankCell()]],
    ],
    [3600, 5760],
  ),
  spacer(160),
);

// pre-shoot checklist
children.push(
  box([
    new Paragraph({ spacing: { after: 60 }, children: [sp("Avant de filmer — coche :", { bold: true, color: ACCENT })] }),
    ...[
      "J’ai une accroche qui surprend (pas « Bonjour, voici ma pub »).",
      "J’emploie l’imparfait + le passé composé pour raconter le terroir.",
      "J’ai au moins trois adjectifs qui valorisent mon produit.",
      "J’ai une projection au conditionnel et un slogan (mise en relief).",
      "Je filmerai le produit ET le lieu — je vise 1 à 2 minutes.",
    ].map((c) => new Paragraph({
      spacing: { after: 70 }, indent: { left: 200, hanging: 200 },
      children: [sp("☐  ", { size: 22 }), sp(c, { size: 21 })],
    })),
  ]),
  spacer(160),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 6 · À LA MAISON ============
children.push(
  sectionTag("À LA MAISON"),
  h2("6 · Tourner, monter, déposer"),
  new Paragraph({
    spacing: { after: 120 },
    children: [sp(
      "Chez toi, tu transformes ton storyboard en vidéo. Sers-toi de tes cases comme d’un plan de tournage : une image (ou un plan) par étape.",
      { size: 22 })],
  }),
);
[
  ["Le format", "vertical (9:16) pour un Reel / TikTok ; paysage (16:9) pour une vidéo de tourisme YouTube."],
  ["Les images", "montre le produit ET le lieu (plans « b-roll »), pas seulement ton visage."],
  ["Le texte à l’écran", "affiche tes adjectifs et ton slogan ; ajoute une musique douce, sans couvrir ta voix."],
  ["Le montage", "CapCut, iMovie ou ton téléphone — enchaîne tes plans, coupe les temps morts."],
].forEach(([g, ex]) => {
  children.push(new Paragraph({
    spacing: { after: 90 }, indent: { left: 260, hanging: 260 },
    children: [
      sp("•  ", { size: 22, color: ACCENT2 }),
      sp(g, { size: 22, bold: true }),
      sp(" — " + ex, { size: 21, color: "555555" }),
    ],
  }));
});

children.push(
  spacer(120),
  box([
    new Paragraph({ spacing: { after: 40 }, children: [sp("Soumission finale", { bold: true, color: ACCENT })] }),
    new Paragraph({ children: [sp(
      "UNE vidéo de 1 à 2 min, déposée sur Canvas.",
      { size: 22 })] }),
    new Paragraph({ spacing: { before: 40 }, children: [
      sp("Nom du fichier : ", { size: 21 }),
      sp("FR30_(TON NOM)_Podcast2.mp4", { size: 21, bold: true, color: ACCENT2 }),
    ] }),
  ]),
);

// ---- assemble doc ----
const doc = new Document({
  creator: "Dr. Claire-Marie Brisson",
  title: "Podcast 2 — Atelier : La pub de terroir",
  description: "Feuille de travail à remplir à la main pour l’atelier « La pub de terroir » du Podcast 2 (Français 30, Unité 2).",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22, color: INK } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Calibri", color: ACCENT },
        paragraph: { spacing: { before: 120, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: ACCENT },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1296, right: 1440, bottom: 1296, left: 1440 },
      },
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } },
          children: [
            sp("Français 30 · Podcast 2 — Atelier : La pub de terroir  ·  ", { size: 18, color: "888888" }),
            sp("Dr. Claire-Marie Brisson", { size: 18, color: "888888", italics: true }),
            sp("  ·  page ", { size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888", font: "Calibri" }),
          ],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("Podcast2-Atelier-pub-de-terroir.docx", buf);
  console.log("wrote Podcast2-Atelier-pub-de-terroir.docx");
});
