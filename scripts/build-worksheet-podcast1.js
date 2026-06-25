const { execSync } = require("child_process");
const GLOBAL = execSync("npm root -g").toString().trim();
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Footer, PageBreak, TabStopType, TabStopPosition,
} = require(GLOBAL + "/docx");
const fs = require("fs");

// ---- palette (shared with Podcast 0 feuille-de-route, for course brand) ----
const INK = "1A1A1A";
const ACCENT = "1F4E79";   // deep blue
const ACCENT2 = "C00000";  // red for grammar / register cues
const SOFT = "E8EEF4";     // soft blue fill
const SOFT2 = "FBF3D9";    // soft gold fill
const RULE = "B8C4D0";

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
              shading: { fill: i % 2 ? "F4F7FA" : "FFFFFF", type: ShadingType.CLEAR },
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
    children: [sp("FRANÇAIS 30 · PODCAST 1 · DEVENIR JOURNALISTE FRANCOPHONE", { bold: true, color: ACCENT2, size: 20, characterSpacing: 24 })],
  }),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 20 },
    children: [sp("Atelier — Le micro-trottoir", { color: ACCENT, bold: true, size: 40 })],
  }),
  new Paragraph({
    spacing: { after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: ACCENT, space: 4 } },
    children: [sp("L’art de l’interview spontanée dans la rue — ta « matière première » pour le Podcast 1", { italics: true, color: "555555", size: 22 })],
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
    new Paragraph({ spacing: { after: 60 }, children: [sp("Ta mission aujourd’hui", { bold: true, color: ACCENT })] }),
    new Paragraph({
      children: [sp(
        "Aujourd’hui, tu deviens journaliste de terrain. Tu vas observer de vrais micro-trottoirs, repérer comment on " +
        "pose des questions « sur le vif », puis réaliser ton propre mini-micro-trottoir en classe — que tu vas ENREGISTRER " +
        "sur ton téléphone. Cet enregistrement est ta matière première : tu la transformeras à la maison en un vrai reportage.",
        { size: 22 })],
    }),
  ]),
  spacer(160),
);

children.push(
  label("Le Podcast 1, en deux temps"),
  twoColTable(
    ["Partie 1 — en classe (aujourd’hui)", "Partie 2 — à la maison"],
    [
      [
        [new Paragraph({ children: [sp("Un mini-micro-trottoir ", { bold: true }), sp("spontané et informel.", {})] }),
         new Paragraph({ spacing: { before: 40 }, children: [sp("But : capter une vraie réaction « sur le vif ». La spontanéité compte plus que la perfection.", { size: 20, color: "555555" })] })],
        [new Paragraph({ children: [sp("Un court reportage ", { bold: true }), sp("structuré et poli.", {})] }),
         new Paragraph({ spacing: { before: 40 }, children: [sp("But : transformer tes réactions brutes en journalisme — avec les structures de l’unité.", { size: 20, color: "555555" })] })],
      ],
    ],
    [4680, 4680],
  ),
  spacer(220),
);

// ============ ÉTAPE 1 · DÉCOUVERTE ============
children.push(
  sectionTag("DÉCOUVERTE"),
  h2("1 · C’est quoi, un micro-trottoir ?"),
);
children.push(
  label("Le mot — décompose-le :"),
  new Paragraph({
    spacing: { after: 140 },
    children: [
      sp("micro = ", { size: 22, bold: true }),
      sp("__________________________        ", { size: 22 }),
      sp("trottoir = ", { size: 22, bold: true }),
      sp("__________________________", { size: 22 }),
    ],
  }),
  label("Une définition à toi : « Un micro-trottoir, c’est une interview où… »"),
  ...rules(2),
  spacer(80),
  new Paragraph({
    spacing: { after: 100 },
    children: [sp("Où fait-on ce type d’interview ?", { bold: true, size: 22 })],
  }),
  checkboxLine(["à la maison", "en studio", "dans la rue", "au cinéma"]),
  new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [sp("Connaît-on les personnes à l’avance ?", { bold: true, size: 22 })],
  }),
  checkboxLine(["oui", "non"]),
  spacer(40),
  label("Trois qualités d’un bon micro-trottoir :"),
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
      sp("pourquoi ce format capte-t-il des réactions plus ", { size: 21 }),
      sp("authentiques", { size: 21, italics: true }),
      sp(" qu’un journal télévisé ?", { size: 21 }),
    ] }),
    ...rules(1, 240),
  ], SOFT2),
  spacer(200),
);

// ============ ÉTAPE 2 · OBSERVATION ============
children.push(
  sectionTag("OBSERVATION"),
  h2("2 · Regarde et note"),
  instr("Pendant la vidéo, observe comment les questions sont posées et le style (courte / longue, rapide / lente…). Puis discute en groupe."),
);
[
  "Que disent les gens ? Comment est le ton ou l’ambiance ?",
  "Quel est l’avantage d’un micro-trottoir face à un journal télévisé ?",
  "Trouves-tu ce format intéressant ? Pourquoi, ou pourquoi pas ?",
  "Si tu devais poser UNE question dans la rue, ce serait quoi ?",
].forEach((q) => {
  children.push(label(q), ...rules(1));
});
children.push(
  spacer(60),
  box([
    new Paragraph({ spacing: { after: 50 }, children: [sp("Tends l’oreille de journaliste", { bold: true, color: ACCENT })] }),
    new Paragraph({ children: [sp(
      "Transcris UN échange que tu as entendu, mot pour mot — une question et sa réponse. (On s’en servira pour analyser le registre.)",
      { size: 21 })] }),
    new Paragraph({ spacing: { before: 80, after: 20 }, children: [sp("— Question :", { size: 21, bold: true })] }),
    rule(240),
    new Paragraph({ spacing: { after: 20 }, children: [sp("— Réponse :", { size: 21, bold: true })] }),
    rule(240),
  ]),
  spacer(200),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 3 · ANALYSE ============
children.push(
  sectionTag("ANALYSE"),
  h2("3 · Alex (@alex_traordinaire) — qu’est-ce que tu remarques ?"),
  new Paragraph({ spacing: { after: 100 }, children: [sp("Avant de regarder, comment imagines-tu son style ?", { bold: true, size: 22 })] }),
  checkboxLine(["Très formel, comme un présentateur télé", "Assez naturel, comme un ami"]),
  checkboxLine(["Très confus, difficile à suivre", "Rapide, émotionnel, spontané"]),
  spacer(40),
  label("De mémoire, quelles questions pose-t-il ?"),
  ...rules(2),
  spacer(60),
  new Paragraph({ spacing: { after: 90 }, children: [sp("Coche ce que tu entends :", { bold: true, size: 22 })] }),
  checkboxLine(["l’inversion (Penses-tu… ?)"]),
  checkboxLine(["des mots interrogatifs formels (Pourquoi, comment…)"]),
  checkboxLine(["une phrase incomplète / une interjection (Allez, alors…)"]),
  spacer(20),
  new Paragraph({ spacing: { after: 90 }, children: [sp("Les réponses sont plutôt…", { bold: true, size: 22 })] }),
  checkboxLine(["bien structurées", "spontanées", "hésitantes"]),
  spacer(120),
);

// register drill
children.push(
  label("Le bon registre — le français informel"),
  helpLine("À l’oral, dans la rue, on parle informel. Complète la colonne de droite (les deux dernières lignes sont à toi)."),
  twoColTable(
    ["Plutôt formel →", "Plutôt informel (à l’oral) →"],
    [
      [sp("Que fais-tu ?", { size: 21 }), sp("Tu fais quoi ?", { size: 21, bold: true })],
      [sp("Est-ce que tu penses que… ?", { size: 21 }), sp("Tu en penses quoi, toi ?", { size: 21, bold: true })],
      [sp("Aimes-tu ce format ?", { size: 21 }), [blankCell()]],
      [sp("Une expression que tu as remarquée →", { size: 21 }), [blankCell()]],
    ],
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
      [sp("L’intonation montante", { size: 21, bold: true }),
       sp("« Tu trouves ça facile, toi ? »  « C’est important pour vous ? »", { size: 21, italics: true })],
      [sp("« Est-ce que… »", { size: 21, bold: true }),
       sp("« Est-ce que tu penses qu’on peut changer les choses ? »", { size: 21, italics: true })],
      [sp("Les amorces / interjections", { size: 21, bold: true }),
       sp("« Alors, … »  « Dis, … »  « Tiens, … »", { size: 21, italics: true })],
      [sp("Les relances (follow-ups)", { size: 21, bold: true }),
       sp("« Ah bon ? Pourquoi ? »  « C’est-à-dire ? »  « Et toi ? »", { size: 21, italics: true })],
    ],
    [3000, 6360],
  ),
  spacer(140),
);

children.push(
  box([
    new Paragraph({ spacing: { after: 70 }, children: [sp("LE MODÈLE — écoute ton/ta professeur(e)", { bold: true, color: ACCENT })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("— JOURNALISTE : ", { bold: true, size: 21 }), sp("Alors, dis-moi… tu trouves ça facile de trouver des infos fiables aujourd’hui ?", { size: 21, italics: true })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("— PASSANT(E) : ", { bold: true, size: 21 }), sp("Euh… non, pas vraiment. Il y a trop de choses sur les réseaux.", { size: 21, italics: true })] }),
    new Paragraph({ spacing: { after: 30 }, children: [sp("— JOURNALISTE : ", { bold: true, size: 21 }), sp("Ah bon ? C’est-à-dire ?", { size: 21, italics: true })] }),
    new Paragraph({ children: [sp("— PASSANT(E) : ", { bold: true, size: 21 }), sp("Ben… on ne sait pas toujours qui dit la vérité.", { size: 21, italics: true })] }),
  ]),
  helpLine("Dans le modèle : souligne l’amorce, entoure la question informelle, et mets la relance entre [crochets]."),
  spacer(220),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 5 · PRODUCTION ============
children.push(
  sectionTag("PRODUCTION"),
  h2("5 · À toi ! Prépare ton mini-micro-trottoir"),
  new Paragraph({ spacing: { after: 100 }, children: [sp("Notre thème (choisis-en UN) :", { bold: true, size: 22 })] }),
  checkboxLine(["L’information dans notre quotidien", "Notre rôle de citoyen", "L’université idéale"]),
  spacer(40),
  label("Nos 2 à 3 questions principales (ouvertes et informelles) :"),
  helpLine("Une bonne question ouvre la parole — évite les questions à « oui / non »."),
  ...rules(3),
  spacer(40),
  label("Nos 1 à 2 relances (follow-ups) :"),
  ...rules(2),
  spacer(40),
  new Paragraph({
    spacing: { after: 140 },
    children: [
      sp("Nos rôles —  Intervieweur(s) : ", { size: 22, bold: true }),
      sp("____________________      ", { size: 22 }),
      sp("Interviewé(e)(s) : ", { size: 22, bold: true }),
      sp("____________________", { size: 22 }),
    ],
  }),
);

// pre-recording checklist
children.push(
  box([
    new Paragraph({ spacing: { after: 60 }, children: [sp("Avant de lancer l’enregistrement — coche :", { bold: true, color: ACCENT })] }),
    ...[
      "Mes questions sont ouvertes (pas « oui / non »).",
      "J’ai au moins une relance prête.",
      "Mon registre est informel (intonation montante, amorces).",
      "Mon téléphone enregistre — je vise 1 à 2 minutes.",
    ].map((c) => new Paragraph({
      spacing: { after: 70 }, indent: { left: 200, hanging: 200 },
      children: [sp("☐  ", { size: 22 }), sp(c, { size: 21 })],
    })),
  ]),
  spacer(120),
);

children.push(
  box([
    new Paragraph({ children: [sp(
      "Sois le plus naturel possible — ne lis pas ! Laisse la conversation se développer. " +
      "La spontanéité est le but, pas la perfection grammaticale. Durée : 1 à 2 min. " +
      "Garde l’enregistrement — c’est ta « matière première » pour la Partie 2.",
      { size: 21 })] }),
  ], SOFT2),
  spacer(160),
);

// matière première capture
children.push(
  label("Ta matière première — note ce que les gens ont vraiment dit"),
  helpLine("Juste après l’enregistrement, capte 2 réactions à chaud (tu les citeras dans ton reportage)."),
  new Paragraph({ spacing: { after: 20 }, children: [sp("Réaction 1 :", { size: 21, bold: true })] }),
  rule(280),
  new Paragraph({ spacing: { after: 20 }, children: [sp("Réaction 2 :", { size: 21, bold: true })] }),
  rule(280),
  new Paragraph({ spacing: { after: 20 }, children: [sp("Mon avis à moi sur le thème :", { size: 21, bold: true })] }),
  rule(280),
  spacer(160),
);

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============ ÉTAPE 6 · À LA MAISON ============
children.push(
  sectionTag("À LA MAISON"),
  h2("6 · Et après ? La Partie 2 — du micro-trottoir au reportage"),
  new Paragraph({
    spacing: { after: 120 },
    children: [sp(
      "À la maison, tu transformeras ton micro-trottoir en un court reportage journalistique structuré et poli. " +
      "Tu passes de l’informel (la rue) au formel (le bureau du journaliste). À intégrer :",
      { size: 22 })],
  }),
);
[
  ["le subjonctif", "il est dommage que… · je doute que… · il faut que…"],
  ["une négation avec un indéfini", "personne ne… , rien ne… , aucun(e)… ne…"],
  ["pas de pronom après un verbe de préférence + infinitif", "j’aime écouter, je préfère analyser (et non « j’aime l’écouter »)"],
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

// informal -> formal preview
children.push(
  spacer(80),
  label("De l’informel au formel — un aperçu"),
  twoColTable(
    ["Ce qu’on t’a dit dans la rue (brut)", "Ton reportage (poli, structuré)"],
    [
      [sp("« Ben… on sait jamais qui dit la vérité. »", { size: 21, italics: true }),
       sp("Plusieurs passants doutent que l’on puisse vraiment vérifier l’information en ligne.", { size: 21 })],
    ],
    [4680, 4680],
  ),
  helpLine("À ton tour, à la maison : pars d’une réaction brute (ci-dessus) et réécris-la en français de reportage."),
  spacer(180),
);

children.push(
  box([
    new Paragraph({ spacing: { after: 40 }, children: [sp("Soumission finale", { bold: true, color: ACCENT })] }),
    new Paragraph({ children: [sp(
      "UN fichier audio unique (Partie 1 + Partie 2), ≈ 3 à 3,5 min.",
      { size: 22 })] }),
    new Paragraph({ spacing: { before: 40 }, children: [
      sp("Nom du fichier : ", { size: 21 }),
      sp("FR30_(TON NOM)_Podcast1.mp3", { size: 21, bold: true, color: ACCENT2 }),
    ] }),
  ]),
);

// ---- assemble doc ----
const doc = new Document({
  creator: "Dr. Claire-Marie Brisson",
  title: "Podcast 1 — Atelier : Le micro-trottoir",
  description: "Feuille de travail à remplir à la main pour l’atelier micro-trottoir du Podcast 1 (Français 30).",
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
            sp("Français 30 · Podcast 1 — Atelier micro-trottoir  ·  ", { size: 18, color: "888888" }),
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
  fs.writeFileSync("Podcast1-Atelier-micro-trottoir.docx", buf);
  console.log("wrote Podcast1-Atelier-micro-trottoir.docx");
});
