// Contenu du Podcast 1 — Partie 2 — FR30
// « Du micro-trottoir au reportage » : transformer la matière première
// (l'interview spontanée de la Partie 1) en un court reportage structuré et poli.
//
// Ce fichier est volontairement autonome (il ne dépend pas de podcast0.ts) pour
// que le studio du Podcast 1 puisse évoluer sans toucher au Podcast 0.

export const meta = {
  number: 1,
  title: "Podcast 1 — Partie 2",
  subtitle: "Du micro-trottoir au reportage",
  length: "reportage de 1,5 à 2 min (≈ 3 à 3,5 min avec la Partie 1)",
};

export const objectif = {
  intro:
    "Vous avez capté des réactions spontanées dans la rue (la Partie 1). Place maintenant au travail de journaliste : transformer cette matière première en un court reportage structuré et poli. Vous citez ce qu'on vous a dit, vous l'analysez, et vous passez du français informel de la rue au français formel du reportage — en vous appuyant sur les structures de l'unité.",
  structure: [
    { phase: "Accroche", duree: "10 à 15 s", description: "posez l'angle, donnez envie." },
    { phase: "Le corps : citations + analyse", duree: "60 à 80 s", description: "rapportez ce qu'on vous a dit, puis analysez." },
    { phase: "Chute", duree: "10 à 15 s", description: "votre regard, une dernière phrase qui marque." },
  ],
};

// Fonction communicative → structure grammaticale de la Partie 2.
export const structuresUnite = [
  { fonction: "rapporter ce qu'on vous a dit", structure: "le discours rapporté (verbes déclaratifs)", exemple: "« Plusieurs m'ont dit qu'ils se sentaient perdus. »" },
  { fonction: "exprimer un doute ou un regret", structure: "le subjonctif (il est dommage que, je doute que)", exemple: "« Il est dommage que personne ne vérifie ses sources. »" },
  { fonction: "dire ce qu'il faut faire", structure: "il faut que (+ subjonctif)", exemple: "« Il faut que nous apprenions à douter. »" },
  { fonction: "nier de façon absolue", structure: "une négation avec un indéfini (personne ne, rien ne, aucun·e… ne)", exemple: "« Rien ne remplace un regard critique. »" },
  { fonction: "exprimer une préférence", structure: "verbe de préférence + infinitif (sans pronom)", exemple: "« Je préfère croiser plusieurs sources. »" },
];

export type CanDo = { fr: string; en: string; structure: string };

export const canDo: CanDo[] = [
  {
    fr: "Je peux rapporter ce que les gens m'ont dit dans la rue.",
    en: "I can report what people told me on the street.",
    structure: "le discours rapporté (verbes déclaratifs)",
  },
  {
    fr: "Je peux exprimer un doute ou un regret sur ce que j'ai entendu.",
    en: "I can express doubt or regret about what I heard.",
    structure: "le subjonctif (il est dommage que, je doute que)",
  },
  {
    fr: "Je peux dire ce qu'il faut que nous fassions.",
    en: "I can say what we need to do.",
    structure: "il faut que (+ subjonctif)",
  },
  {
    fr: "Je peux nier de façon absolue avec un indéfini.",
    en: "I can make an absolute negation with an indefinite.",
    structure: "personne ne… , rien ne… , aucun·e… ne…",
  },
  {
    fr: "Je peux exprimer mes préférences sans pronom de reprise.",
    en: "I can express my preferences without an object pronoun.",
    structure: "verbe de préférence + infinitif",
  },
];

// ===========================================================================
//  STUDIO
// ===========================================================================

// Les étapes du studio, selon le modèle PACE (Adair-Hauck & Donato) :
// Présentation → Attention → Co-construction → Vérification → Extension → Production.
export const STUDIO_STEPS = [
  {
    id: "observer",
    titre: "Observer",
    phase: "Présentation",
    phase_en: "Presentation",
    sous: "Écouter un reportage-modèle",
    sous_en: "Notice a model report",
    objectif: "Remarquer comment un micro-trottoir spontané devient un reportage structuré.",
    objectif_en: "Notice how a spontaneous street interview becomes a structured report.",
  },
  {
    id: "reperer",
    titre: "Repérer la forme",
    phase: "Attention",
    phase_en: "Attention to form",
    sous: "Les structures de la Partie 2",
    sous_en: "The Part 2 structures",
    objectif: "Repérer les structures qui font passer de l'informel au formel : subjonctif, négation, préférence, discours rapporté.",
    objectif_en: "Spot the structures that shift informal to formal: subjunctive, negation, preference, reported speech.",
  },
  {
    id: "construire",
    titre: "Co-construire",
    phase: "Co-construction",
    phase_en: "Co-construction",
    sous: "De vos citations brutes au reportage",
    sous_en: "From your raw quotes to the report",
    objectif: "Construire votre reportage brique par brique, à partir des réactions que vous avez recueillies.",
    objectif_en: "Build your report brick by brick, from the reactions you collected.",
  },
  {
    id: "verifier",
    titre: "Vérifier",
    phase: "Vérification",
    phase_en: "Check",
    sous: "Qu'est-ce que tu remarques ?",
    sous_en: "What do you notice?",
    objectif: "Vérifier que votre reportage emploie bien les structures de la Partie 2.",
    objectif_en: "Check that your report uses the Part 2 structures.",
  },
  {
    id: "oser",
    titre: "Oser",
    phase: "Extension",
    phase_en: "Extension",
    sous: "Du script à la voix de journaliste",
    sous_en: "From script to journalist's voice",
    objectif: "Lire votre reportage à voix haute, d'un ton de journaliste — clair, posé, formel.",
    objectif_en: "Read your report aloud in a journalist's voice — clear, steady, formal.",
  },
  {
    id: "pret",
    titre: "Avant de soumettre",
    phase: "Production",
    phase_en: "Production",
    sous: "Viser votre meilleur, selon la grille",
    sous_en: "Aim for your best, by the rubric",
    objectif: "Cibler ce qui rendra votre reportage meilleur, critère par critère, avant d'enregistrer.",
    objectif_en: "Target what will make your report better, criterion by criterion, before recording.",
  },
] as const;

export type StepId = (typeof STUDIO_STEPS)[number]["id"];

// Sections du reportage (ordre d'assemblage du script).
export const SECTIONS = ["accroche", "corps", "chute"] as const;
export type SectionKey = (typeof SECTIONS)[number];

// MODÈLE — un reportage-modèle bâti à partir d'un micro-trottoir, à observer.
export const MODELE = {
  // Pas d'audio pour l'instant : déposez un fichier dans public/ et indiquez son
  // chemin ici (ex. "/modele-reportage.m4a") pour faire écouter une vraie voix.
  audio: null as string | null,
  theme: "L'information dans notre quotidien",
  texte:
    "Trouver une information fiable aujourd'hui : est-ce encore possible ? J'ai posé la question à des passants. Plusieurs m'ont dit qu'ils se sentaient perdus. « On ne sait jamais qui dit la vérité », confie l'un d'eux. Il est dommage que personne ne vérifie vraiment ses sources. Rien ne remplace pourtant un regard critique. Pour ma part, je préfère croiser plusieurs sources avant de partager. Il faut que nous apprenions tous à douter un peu. Aucune information ne devrait être partagée sans réflexion. Alors, la prochaine fois que vous lisez un titre… demandez-vous : qui parle, et pourquoi ?",
  segments: [
    {
      partie: "Accroche / angle",
      partie_en: "Hook / angle",
      fonction: "poser l'angle du reportage (une question)",
      fonction_en: "set the report's angle (a question)",
      texte: "Trouver une information fiable aujourd'hui : est-ce encore possible ?",
    },
    {
      partie: "Citation",
      partie_en: "Quote",
      fonction: "rapporter ce qu'on vous a dit (discours rapporté)",
      fonction_en: "report what you were told (reported speech)",
      texte: "Plusieurs m'ont dit qu'ils se sentaient perdus. « On ne sait jamais qui dit la vérité », confie l'un d'eux.",
    },
    {
      partie: "Doute / regret",
      partie_en: "Doubt / regret",
      fonction: "réagir avec un subjonctif + une négation indéfinie",
      fonction_en: "react with a subjunctive + an indefinite negation",
      texte: "Il est dommage que personne ne vérifie vraiment ses sources.",
    },
    {
      partie: "Négation",
      partie_en: "Negation",
      fonction: "nier de façon absolue (rien ne…)",
      fonction_en: "make an absolute negation (rien ne…)",
      texte: "Rien ne remplace pourtant un regard critique.",
    },
    {
      partie: "Préférence",
      partie_en: "Preference",
      fonction: "donner votre préférence (verbe + infinitif, sans pronom)",
      fonction_en: "give your preference (verb + infinitive, no pronoun)",
      texte: "Je préfère croiser plusieurs sources avant de partager.",
    },
    {
      partie: "Nécessité",
      partie_en: "Necessity",
      fonction: "dire ce qu'il faut faire (il faut que + subjonctif)",
      fonction_en: "say what must be done (il faut que + subjunctive)",
      texte: "Il faut que nous apprenions tous à douter un peu.",
    },
    {
      partie: "Chute",
      partie_en: "Close",
      fonction: "terminer en parlant à l'auditeur",
      fonction_en: "end by speaking to the listener",
      texte: "Alors, la prochaine fois que vous lisez un titre… demandez-vous : qui parle, et pourquoi ?",
    },
  ],
  remarquer: [
    { fr: "On part d'une vraie citation, puis on l'analyse — c'est ça, le reportage.", en: "It starts from a real quote, then analyzes it — that's what a report is." },
    { fr: "Le registre est formel : le « ne » est présent, les phrases sont complètes.", en: "The register is formal: the 'ne' is kept, sentences are complete." },
    { fr: "Les structures de l'unité font le travail : subjonctif, négation, préférence.", en: "The unit's structures do the work: subjunctive, negation, preference." },
    { fr: "La voix du/de la journaliste structure tout : accroche → citations → analyse → chute.", en: "The journalist's voice structures it all: hook → quotes → analysis → close." },
  ],
};

export const PUBLIC = {
  fr: "Vous signez un reportage pour les auditeur·rice·s du podcast français de Harvard. Donnez-leur un angle, de vraies voix, et votre regard de journaliste.",
  en: "You're filing a report for the listeners of Harvard's French podcast. Give them an angle, real voices, and your journalist's perspective.",
};

// ---------------------------------------------------------------------------
//  BRIQUES — le reportage, brique par brique (étape « Co-construire »).
// ---------------------------------------------------------------------------
export type Brique = {
  id: string;
  section: SectionKey;
  titre: string;
  titre_en: string;
  fonction: string;
  fonction_en: string;
  structure: string;
  structure_en: string;
  modele: string;
  cadre: string;
  aide: string;
  aide_en: string;
  raw?: boolean; // affiche le rappel « votre citation brute de la Partie 1 »
};

export const BRIQUES: Brique[] = [
  {
    id: "angle",
    section: "accroche",
    titre: "Accroche / angle",
    titre_en: "Hook / angle",
    fonction: "poser votre angle, donner envie",
    fonction_en: "set your angle, draw the listener in",
    structure: "une question (forme interrogative)",
    structure_en: "a question (interrogative)",
    modele: "Trouver une information fiable aujourd'hui : est-ce encore possible ?",
    cadre: "___ : est-ce encore possible / vraiment vrai / si simple ?",
    aide: "Une question qui annonce votre sujet — pas « Bonjour, voici mon reportage ».",
    aide_en: "A question that announces your topic — not 'Hi, here's my report'.",
  },
  {
    id: "citation",
    section: "corps",
    titre: "La citation",
    titre_en: "The quote",
    fonction: "rapporter ce qu'on vous a dit",
    fonction_en: "report what you were told",
    structure: "le discours rapporté (verbes déclaratifs)",
    structure_en: "reported speech (reporting verbs)",
    modele: "Plusieurs m'ont dit qu'ils se sentaient perdus. « On ne sait jamais qui dit la vérité », confie l'un d'eux.",
    cadre: "Plusieurs m'ont dit que… / « … », confie un·e passant·e.",
    aide: "Repars d'une réaction réelle de ton micro-trottoir, puis rapporte-la.",
    aide_en: "Start from a real reaction in your street interview, then report it.",
    raw: true,
  },
  {
    id: "doute",
    section: "corps",
    titre: "Doute ou regret",
    titre_en: "Doubt or regret",
    fonction: "réagir à ce que vous avez entendu",
    fonction_en: "react to what you heard",
    structure: "le subjonctif (il est dommage que / je doute que)",
    structure_en: "the subjunctive (il est dommage que / je doute que)",
    modele: "Il est dommage que personne ne vérifie vraiment ses sources.",
    cadre: "Il est dommage que… / Je doute que…",
    aide: "Appuie sur le verbe au subjonctif — c'est là que vit ton opinion.",
    aide_en: "Lean on the subjunctive verb — that's where your opinion lives.",
  },
  {
    id: "negation",
    section: "corps",
    titre: "Une négation absolue",
    titre_en: "An absolute negation",
    fonction: "marquer un constat fort",
    fonction_en: "make a strong point",
    structure: "négation avec un indéfini (personne ne, rien ne, aucun·e… ne)",
    structure_en: "negation with an indefinite (personne ne, rien ne, aucun…ne)",
    modele: "Rien ne remplace un regard critique. Aucune information ne devrait être partagée sans réflexion.",
    cadre: "Rien ne… / Personne ne… / Aucun·e ___ ne…",
    aide: "N'oublie pas le « ne » — au reportage, on écrit la négation en entier.",
    aide_en: "Don't drop the 'ne' — in a report, write the full negation.",
  },
  {
    id: "preference",
    section: "corps",
    titre: "Votre préférence",
    titre_en: "Your preference",
    fonction: "donner votre point de vue",
    fonction_en: "give your point of view",
    structure: "verbe de préférence + infinitif (sans pronom)",
    structure_en: "preference verb + infinitive (no pronoun)",
    modele: "Pour ma part, je préfère croiser plusieurs sources avant de partager.",
    cadre: "Pour ma part, je préfère / j'aime / je déteste ___ (+ infinitif).",
    aide: "Pas de pronom : « je préfère croiser » — et non « je préfère les croiser ».",
    aide_en: "No pronoun: 'je préfère croiser' — not 'je préfère les croiser'.",
  },
  {
    id: "necessite",
    section: "corps",
    titre: "Ce qu'il faut faire",
    titre_en: "What must be done",
    fonction: "proposer une suite, une leçon",
    fonction_en: "propose a takeaway",
    structure: "il faut que (+ subjonctif)",
    structure_en: "il faut que (+ subjunctive)",
    modele: "Il faut que nous apprenions tous à douter un peu.",
    cadre: "Il faut que nous ___.",
    aide: "Le subjonctif après « il faut que » : « il faut que nous APPRENIONS ».",
    aide_en: "Subjunctive after 'il faut que': 'il faut que nous APPRENIONS'.",
  },
  {
    id: "chute",
    section: "chute",
    titre: "La chute",
    titre_en: "The close",
    fonction: "terminer en parlant à l'auditeur",
    fonction_en: "end by speaking to the listener",
    structure: "adresse directe (impératif / question)",
    structure_en: "direct address (imperative / question)",
    modele: "Alors, la prochaine fois que vous lisez un titre… demandez-vous : qui parle, et pourquoi ?",
    cadre: "Alors, la prochaine fois que… , ___ ?",
    aide: "Parle directement à l'auditeur pour finir — une phrase qui reste.",
    aide_en: "Speak straight to the listener to finish — a line that sticks.",
  },
];

// ---------------------------------------------------------------------------
//  RX — structures de la Partie 2 que « Vérifier » essaie de repérer.
// ---------------------------------------------------------------------------
export type RxRule = {
  id: string;
  label: string;
  fonction: string;
  fonction_en: string;
  diction: string;
  diction_en: string;
  modele: string;
  test: RegExp;
  essayer: string;
  exemple: string;
};

export const RX: RxRule[] = [
  {
    id: "rapporte",
    label: "Le discours rapporté (verbes déclaratifs)",
    fonction: "rapporter une parole",
    fonction_en: "report what was said",
    diction: "Marquez une légère pause avant la citation, comme pour « donner la parole » à la personne.",
    diction_en: "Pause slightly before the quote, as if handing the mic to the person.",
    modele: "Plusieurs m'ont dit qu'ils se sentaient perdus.",
    test: /\b(m['’]a dit|m['’]ont dit|a dit que|ont dit que|confie|confient|déclare|déclarent|explique|expliquent|raconte|racontent|affirme|témoigne|selon|d['’]après)\b/i,
    essayer: "Pour donner du poids à votre reportage, citez ce qu'on vous a dit.",
    exemple: "« Plusieurs m'ont dit que… » / « … », confie un·e passant·e.",
  },
  {
    id: "subjonctif",
    label: "Le subjonctif (doute / regret)",
    fonction: "exprimer un doute, un regret",
    fonction_en: "express doubt or regret",
    diction: "Ralentissez sur le verbe au subjonctif : c'est là que passe votre opinion.",
    diction_en: "Slow down on the subjunctive verb: that's where your opinion lands.",
    modele: "Il est dommage que personne ne vérifie vraiment ses sources.",
    test: /\b(il est dommage que|c['’]est dommage que|dommage que|je doute que|je ne (pense|crois) pas que|bien que|il est possible que|il se peut que|je regrette que|il est triste que)\b/i,
    essayer: "Pour nuancer, exprimez un doute ou un regret au subjonctif.",
    exemple: "« Il est dommage que… » / « Je doute que… »",
  },
  {
    id: "necessite",
    label: "« il faut que » (+ subjonctif)",
    fonction: "dire ce qu'il faut faire",
    fonction_en: "say what must be done",
    diction: "Appuyez sur le verbe : « il faut que nous APPRENIONS » — l'intention doit s'entendre.",
    diction_en: "Stress the verb: 'il faut que nous APPRENIONS' — the intent must be heard.",
    modele: "Il faut que nous apprenions tous à douter un peu.",
    test: /\b(il faut que|il faudrait que|il est nécessaire que|il est important que|il vaut mieux que)\b/i,
    essayer: "Pour proposer une suite, dites ce qu'il faut que nous fassions.",
    exemple: "« Il faut que nous apprenions à douter. »",
  },
  {
    id: "negation",
    label: "Une négation avec un indéfini",
    fonction: "nier de façon absolue",
    fonction_en: "make an absolute negation",
    diction: "Détachez bien le « ne » et l'indéfini — c'est un constat, posez-le clairement.",
    diction_en: "Articulate the 'ne' and the indefinite — it's a statement, land it clearly.",
    modele: "Rien ne remplace un regard critique.",
    test: /(personne ne|ne [^.?!]*\bpersonne\b|rien ne|ne [^.?!]*\brien\b|aucune? [^.?!]*\bne\b|ne [^.?!]*\baucune?\b)/i,
    essayer: "Pour un constat fort, utilisez « personne ne… », « rien ne… » ou « aucun·e… ne… ».",
    exemple: "« Rien ne remplace un regard critique. »",
  },
  {
    id: "preference",
    label: "Verbe de préférence + infinitif (sans pronom)",
    fonction: "donner votre préférence",
    fonction_en: "give your preference",
    diction: "Dites-le d'un trait, sans hésiter : « je préfère croiser… » — la préférence est assumée.",
    diction_en: "Say it in one stroke, no hesitation: 'je préfère croiser…' — own the preference.",
    modele: "Je préfère croiser plusieurs sources avant de partager.",
    test: /\b(j['’]aime|j['’]adore|je préfère|je déteste|j['’]apprécie|on aime|nous aimons)\s+(?:à\s+)?[a-zàâäéèêëîïôöùûüç]+(?:er|ir|re)\b/i,
    essayer: "Pour donner votre avis, employez un verbe de préférence + un infinitif, sans pronom.",
    exemple: "« Je préfère croiser plusieurs sources » (et non « les croiser »).",
  },
];

// En vous entraînant — sur quoi porter l'attention (delivery B2, étape « Oser »).
export const FOCUS_ECOUTE: { fr: string; en: string }[] = [
  { fr: "Registre : c'est formel — vous gardez le « ne », vous évitez l'argot.", en: "Register: it's formal — you keep the 'ne', you avoid slang." },
  { fr: "Les citations : on entend la différence entre votre voix et la parole rapportée ?", en: "Quotes: can we hear the difference between your voice and the reported speech?" },
  { fr: "Intonation : elle monte sur l'accroche, se pose sur l'analyse.", en: "Intonation: rising on the hook, settling on the analysis." },
  { fr: "Le débit : posé, comme un·e journaliste — ni trop vite, ni monotone.", en: "Pace: steady, like a journalist — not too fast, not monotone." },
  { fr: "Le naturel : ça sonne dit, pas lu ?", en: "Naturalness: does it sound spoken, not read?" },
];

export const REFLEXION: string[] = [
  "Je remarque que…",
  "Le passage le plus difficile à dire était…",
  "Mon registre était bien formel, sauf…",
  "La prochaine fois, je vais…",
];

// CHECKS — mise au point finale (« Avant de soumettre »), alignée sur la grille.
export const CHECKS: {
  id: string;
  label: string;
  en: string;
  cible: string;
  cible_en: string;
}[] = [
  {
    id: "organisation",
    label: "Mon reportage a une accroche, des citations analysées, et une chute.",
    en: "My report has a hook, analyzed quotes, and a close.",
    cible: "Pour viser le haut : un angle clair dès l'accroche et une dernière phrase qui marque.",
    cible_en: "To aim high: a clear angle from the hook and a memorable last line.",
  },
  {
    id: "registre",
    label: "Mon registre est formel — distinct du français de la rue (Partie 1).",
    en: "My register is formal — distinct from the street French of Part 1.",
    cible: "Pour viser le haut : gardez le « ne », des phrases complètes, un ton de journaliste.",
    cible_en: "To aim high: keep the 'ne', complete sentences, a journalist's tone.",
  },
  {
    id: "grammaire",
    label: "J'emploie le subjonctif, une négation avec un indéfini et une préférence + infinitif.",
    en: "I use the subjunctive, an indefinite negation, and a preference + infinitive.",
    cible: "Pour viser le haut : au moins un subjonctif, une négation indéfinie et une préférence, bien placés.",
    cible_en: "To aim high: at least one subjunctive, one indefinite negation, and one preference — well placed.",
  },
  {
    id: "citations",
    label: "Je cite et j'analyse de vraies réactions de mon micro-trottoir.",
    en: "I quote and analyze real reactions from my street interview.",
    cible: "Pour viser le haut : citez deux voix différentes, puis donnez votre regard.",
    cible_en: "To aim high: quote two different voices, then add your perspective.",
  },
  {
    id: "duree",
    label: "Mon reportage dure 1,5 à 2 min (≈ 3 à 3,5 min avec la Partie 1).",
    en: "My report is 1.5–2 min (≈ 3–3.5 min with Part 1).",
    cible: "Pour viser le haut : un montage net entre la Partie 1 (la rue) et la Partie 2 (le bureau).",
    cible_en: "To aim high: a clean cut between Part 1 (the street) and Part 2 (the desk).",
  },
];

export const recording = {
  intro:
    "Votre soumission finale est UN fichier audio unique : la Partie 1 (votre micro-trottoir spontané, enregistré en classe) suivie de la Partie 2 (votre reportage poli). Visez ≈ 3 à 3,5 min au total.",
  sections: [
    {
      titre: "Assembler les deux parties",
      paragraphes: [
        "Enregistrez d'abord votre reportage (Partie 2) au calme, comme pour le Podcast 0 : un endroit silencieux, le micro proche de la bouche.",
        "Puis assemblez la Partie 1 (la rue) et la Partie 2 (le reportage) dans un seul fichier. Sur Audacity ou GarageBand, importez les deux pistes l'une après l'autre et exportez en un seul MP3.",
        "Une courte transition (une phrase, un silence net) entre la rue et le bureau aide l'auditeur à suivre le changement de registre.",
      ],
    },
    {
      titre: "Nommer et déposer",
      paragraphes: [
        "Exportez en MP3 et nommez votre fichier FR30_(VOTRE NOM)_Podcast1.mp3.",
        "Déposez-le sur Canvas. Vérifiez que le fichier se lit bien du début à la fin avant de soumettre.",
      ],
    },
  ],
  contact:
    "Une question, technique ou autre ? Écrivez à la responsable du cours, Dr. Claire-Marie Brisson (cmbrisson@fas.harvard.edu).",
};

// Grille d'évaluation du Podcast 1 (distincte de celle du Podcast 0) :
// 5 critères sur 20 points chacun, soit /100. Chaque critère a un « axe ».
export type Critere = { critere: string; axe: string; niveaux: string[] };

export const grilleCriteres: Critere[] = [
  {
    critere: "Organisation des idées",
    axe: "genre & cohérence",
    niveaux: [
      "Plan limpide et créatif ; transitions nettes ; l'épisode se suit sans effort, du début à la conclusion.",
      "Plan logique et clair ; début et conclusion présents pour chaque point ; quelques flottements.",
      "Organisation faible ; idées peu développées ; début / conclusion peu marqués.",
      "Peu de structure ; développement insuffisant ; idées éparses.",
    ],
  },
  {
    critere: "Expression orale & interaction",
    axe: "Partie 1 — spontanéité, registre, relances",
    niveaux: [
      "Échange vivant et vraiment spontané ; questions ouvertes et informelles ; relances naturelles ; registre oral parfaitement choisi ; riche variété de structures.",
      "Bon échange ; questions surtout informelles ; relances présentes ; registre adapté ; débit assez fluide.",
      "Échange peu spontané ; questions simples ou fermées ; relances rares ; registre parfois mal choisi ; débit hésitant.",
      "Lecture plutôt qu'interaction ; pas de relances ; registre inadapté ; débit très haché.",
    ],
  },
  {
    critere: "Grammaire & registre",
    axe: "Partie 2 — structures-cibles de l'unité",
    niveaux: [
      "Cibles employées avec aisance et justesse — subjonctif (il est dommage / je doute / il faut que…), négation avec indéfini (personne ne, rien ne, aucun… ne), pas de pronom après verbe de préférence + infinitif ; au service du sens.",
      "Cibles présentes et globalement correctes ; quelques erreurs évitables sur ces structures.",
      "Cibles tentées mais incomplètes ou souvent erronées ; plusieurs structures manquantes.",
      "Cibles absentes ou erronées ; erreurs grammaticales excessives.",
    ],
  },
  {
    critere: "Vocabulaire thématique",
    axe: "forme (lexique)",
    niveaux: [
      "Lexique riche, précis et nuancé ; vocabulaire journalistique bien employé.",
      "Bon vocabulaire ; une diversification profiterait à certains passages.",
      "Vocabulaire correct mais répétitif ; quelques emplois inexacts.",
      "Vocabulaire trop pauvre ; erreurs lexicales excessives.",
    ],
  },
  {
    critere: "Contenu & regard culturel",
    axe: "contenu, culture & contexte",
    niveaux: [
      "Très créatif et personnalisé ; reformulation journalistique convaincante ; faits et spéculation nettement distingués ; compréhension du genre du micro-trottoir au-delà des attentes.",
      "Créatif et personnalisé ; reformulation efficace ; bonne compréhension du genre.",
      "Assez créatif ; reformulation partielle ; compréhension du genre limitée.",
      "Peu de créativité ou de personnalisation ; reformulation absente ; faible compréhension du genre.",
    ],
  },
];

export const grilleNiveaux = [
  { label: "Distinction", points: "20 – 18 pts" },
  { label: "Très bien", points: "17 – 15 pts" },
  { label: "Acceptable / en voie", points: "14 – 11 pts" },
  { label: "À développer", points: "10 – 0 pts" },
];

// WPS — mots par seconde (débit de lecture moyen en français ≈ 2,3).
export const WPS = 2.3;

// Cibles de durée par section (secondes) — pour estimer le minutage.
export const CIBLES: Record<SectionKey, [number, number]> = {
  accroche: [10, 15],
  corps: [60, 80],
  chute: [10, 15],
};
