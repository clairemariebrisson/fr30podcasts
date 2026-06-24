// Contenu du Podcast 0 — FR30
// Source : worksheet « FR30, Podcast 0 »

export const meta = {
  number: 0,
  title: "Podcast 0",
  subtitle: "Expérimenter le podcasting",
  length: "épisode de 1 à 2 minutes",
};

export const objectif = {
  intro:
    "Le Podcast 0 est votre premier épisode : une introduction personnelle de 1 à 2 minutes. Vous présentez qui vous êtes, ce qui vous passionne, et pourquoi ce cours vous intéresse. Cette section vous donne le vocabulaire professionnel pour vous décrire en français et vous aide à construire votre script.",
  structure: [
    { phase: "Intro", duree: "10 à 15 s", description: "accrochez l’auditeur." },
    { phase: "Contenu", duree: "40 à 50 s", description: "développez votre sujet." },
    { phase: "Conclusion", duree: "10 à 15 s", description: "résumez et terminez." },
  ],
};

export const structuresUnite = [
  {
    fonction: "une question d’accroche",
    structure: "les formes interrogatives",
    exemple: "« Qui aurait pensé que… ? »",
  },
  {
    fonction: "ce qui vous a mené ici, ce qu’on vous a dit",
    structure: "les verbes déclaratifs et d’opinion",
    exemple: "",
  },
  {
    fonction: "ce que vous voulez développer ou accomplir",
    structure: "il faut que / je veux que (+ subjonctif)",
    exemple: "",
  },
  {
    fonction: "une réaction, une nuance",
    structure: "le subjonctif de l’émotion et du doute",
    exemple: "",
  },
];

// Énoncés « Je peux… » — ce que ce podcast vous permet de faire.
// Choisis parmi les fonctions linguistiques de l'unité, alignés sur les
// structures que « Vérifier » repère et sur la grille d'évaluation.
// `en` = glose anglaise (affichée en mode anglais).
export type CanDo = { fr: string; en: string; structure: string };

export const canDo: CanDo[] = [
  {
    fr: "Je peux poser une question d'accroche pour capter l'attention de l'auditeur.",
    en: "I can ask a hook question to capture the listener's attention.",
    structure: "les formes interrogatives",
  },
  {
    fr: "Je peux exprimer et rapporter une opinion — ce que je pense, ce qu'on m'a dit.",
    en: "I can express and report an opinion — what I think, what I've been told.",
    structure: "les verbes déclaratifs et d'opinion (+ indicatif)",
  },
  {
    fr: "Je peux distinguer ce dont je suis certain.e de ce dont je doute.",
    en: "I can distinguish what I'm certain of from what I doubt.",
    structure: "la certitude (+ indicatif) et le doute (+ subjonctif)",
  },
  {
    fr: "Je peux réagir avec une émotion ou une nuance.",
    en: "I can react with an emotion or a nuance.",
    structure: "le subjonctif de l'émotion et du doute",
  },
  {
    fr: "Je peux dire ce que je veux accomplir et ce qu'il faut que je fasse.",
    en: "I can say what I want to achieve and what I need to do.",
    structure: "il faut que / je veux que (+ subjonctif)",
  },
];

export type Qualite = {
  terme: string;
  traduction: string;
  categorie: string;
  phrase: string;
};

export const qualites: Qualite[] = [
  { terme: "curieux.se", traduction: "curious", categorie: "adj.", phrase: "Je suis quelqu’un de très curieux/se - j’aime poser des questions et explorer de nouvelles idées." },
  { terme: "rigoureux.se", traduction: "rigorous / thorough", categorie: "adj.", phrase: "Je me considère comme rigoureux/se : je vérifie toujours mes sources avant de tirer une conclusion." },
  { terme: "créatif.ve", traduction: "creative", categorie: "adj.", phrase: "Je suis assez créatif/ve - j’aime trouver de nouveaux angles pour raconter une histoire." },
  { terme: "déterminé.e", traduction: "determined", categorie: "adj.", phrase: "Je suis déterminé/e : quand je commence un projet, je vais jusqu’au bout." },
  { terme: "capable de s’adapter", traduction: "adaptable", categorie: "expression", phrase: "Je suis capable de m’adapter rapidement à de nouveaux environnements et de nouvelles situations." },
  { terme: "la capacité d’analyse", traduction: "analytical skills", categorie: "nom (f.)", phrase: "J’ai une bonne capacité d’analyse : j’aime comprendre les enjeux derrière les faits." },
  { terme: "la recherche", traduction: "research", categorie: "nom (f.)", phrase: "La recherche est mon point fort - j’adore aller chercher des informations approfondies." },
  { terme: "la communication écrite", traduction: "written communication", categorie: "nom (f.)", phrase: "Je suis à l’aise avec la communication écrite : j’écris clairement et avec précision." },
  { terme: "la capacité à s’exprimer en public", traduction: "public speaking", categorie: "nom (f.)", phrase: "Je travaille ma capacité à m’exprimer en public - c’est pour ça que ce podcast m’intéresse." },
  { terme: "le travail en équipe", traduction: "teamwork", categorie: "nom (m.)", phrase: "J’apprécie le travail en équipe : j’apprends beaucoup des autres !" },
  { terme: "l’esprit d’initiative", traduction: "initiative", categorie: "nom (m.)", phrase: "J’ai l’esprit d’initiative - je n’attends pas qu’on me dise quoi faire." },
  { terme: "polyvalent.e", traduction: "versatile / flexible", categorie: "adj.", phrase: "Je suis polyvalent/e : je peux travailler sur des sujets très différents." },
  { terme: "sérieux.se", traduction: "serious / businesslike", categorie: "adj.", phrase: "Je suis sérieux/se dans mon travail, mais je sais aussi garder de l’humour." },
  { terme: "ambitieux.se", traduction: "ambitious", categorie: "adj.", phrase: "Je suis ambitieux/se - j’ai de grands projets et je travaille pour les réaliser !" },
  { terme: "avoir le souci du détail", traduction: "attention to detail", categorie: "expression", phrase: "J’ai le souci du détail : pour moi, chaque mot compte dans un article ou un podcast." },
];

// Amorces de phrases — sentence starters students complete aloud,
// incorporating the vocabulary they chose to practice.
export const amorces: string[] = [
  "Je suis quelqu’un de…",
  "Une qualité qui me définit, c’est…",
  "Ce qui me passionne vraiment, c’est…",
  "Si je devais me décrire en un mot, je dirais que je suis…",
  "Dans mon travail, j’apprécie surtout…",
  "Ce cours m’intéresse parce que…",
  "Une chose que je veux développer ici, c’est…",
  "Qui aurait pensé que moi,… ?",
  "Pour moi, le journalisme, c’est avant tout…",
  "Ce qu’on me dit souvent, c’est que je suis…",
  "Il faut que je travaille un peu plus…",
  "Ce qui m’a mené.e jusqu’ici, c’est…",
];

export const scriptSections = [
  {
    titre: "INTRO",
    duree: "10 à 15 s",
    objectif: "Votre phrase d’accroche + qui vous êtes + le thème de l’épisode.",
    exemple:
      "Qui aurait pensé que moi, étudiant.e passionné.e de [sujet], se retrouverait à Harvard à apprendre le journalisme francophone ?",
  },
  {
    titre: "CONTENU",
    duree: "40 à 50 s",
    objectif: "Développez votre sujet : une anecdote, un fait sur vous, pourquoi ce cours vous intéresse.",
    exemple:
      "Je suis quelqu’un de curieux.se et rigoureux.se - deux qualités que je veux développer ici. [Anecdote personnelle]…",
  },
  {
    titre: "CONCLUSION",
    duree: "10 à 15 s",
    objectif: "Résumez et terminez avec une phrase mémorable.",
    exemple:
      "Pour moi, apprendre le français c’est apprendre à voir le monde autrement et ça commence ici.",
  },
];

export const recording = {
  intro:
    "You have an amazing podcasting tool that you carry around with you (nearly) all the time… your phone! Computers are also able to record sound, but phones have become expert tools in recording voices and excluding ambient noise from the background — just think of the way a phone call sounds when you have full bars or are on wifi calling. To record a professional podcast you’ll need to do two things: record clean audio and edit if necessary.",
  sections: [
    {
      titre: "Recording Audio",
      paragraphes: [
        "Find a quiet spot that does not have much ambient noise to record your audio. An ideal spot could be your room or a quiet study space on campus. Non-ideal recording zones are places with unexpected sources of ambient noise: recording outside, as an example, or in a busy café.",
        "You will want to record by placing your mouth close to the microphone if you are using your phone. Think about how you would hold your phone if you were talking using the speakerphone. If you are recording using your computer, headphones with a microphone are preferable.",
        "You can record your audio using Voice Memos on iOS. For Androids, try the Samsung Voice Recorder app. If you decide to record using your computer, recording audio only on Zoom can provide an easy format to create a high quality recording. You can also record using Audacity, a free app that also allows you to record and edit, or Garageband.",
      ],
    },
    {
      titre: "Editing Audio",
      paragraphes: [
        "Although every podcast need not have perfect audio quality, editing out mistakes can prove very useful when submitting your final podcast episodes.",
        "Both Audacity — which is free for macOS, Linux, and Windows — and Garageband allow users to edit audio with simple tools. For both of these apps, you can find extended training on Lynda.com, which Harvard faculty, staff, and students can access for free. These courses are fairly involved, however, so if you would like a brief introduction, look for a short Audacity or Garageband tutorial online.",
        "Your first recording is meant to “get your feet wet” in the world of podcasting, discussing some of the topics that we have begun to cover together in the course. As we continue on in the semester, we will be working alongside some of the experts in the Bok Center Learning Lab, a studio space specializing in creative approaches to learning with digital tools. Their support will help fine-tune the approaches from the beginning of the semester to the end, when we take our episodes and bring them to a larger audience with the Harvard French Podcast.",
      ],
    },
  ],
  contact:
    "If you have any questions at any time, feel free to contact the Course Head, Dr. Claire-Marie Brisson (cmbrisson@fas.harvard.edu), who is herself a seasoned podcaster. She will be able to answer any questions — technical or otherwise — regarding podcast episodes.",
};

export const grilleCriteres = [
  {
    critere: "Organisation des idées",
    niveaux: [
      "Podcast bien structuré ; plan logique ; ouverture et clôture nettes ; épisode clair.",
      "Globalement bien organisé ; plan en place mais pas toujours suivi.",
      "Idées peu reliées ; organisation faible ; sujets peu développés.",
      "Développement insuffisant ; structure absente.",
    ],
  },
  {
    critere: "Expression orale",
    niveaux: [
      "Phrases riches et variées ; débit naturel et fluide.",
      "Bon usage des phrases ; variété modérée ; débit fluide en grande partie.",
      "Phrases peu variées et répétitives ; débit parfois saccadé.",
      "Trop simpliste ; débit saccadé.",
    ],
  },
  {
    critere: "Grammaire",
    niveaux: [
      "Excellent emploi des structures ; variété appropriée.",
      "Bon contrôle ; quelques erreurs évitables.",
      "Contrôle moyen ; erreurs évitables nombreuses.",
      "Erreurs excessives.",
    ],
  },
  {
    critere: "Vocabulaire",
    niveaux: [
      "Excellent emploi ; variété appropriée.",
      "Bon emploi ; diversification possible par endroits.",
      "Emploi correct mais répétitif ; quelques impropriétés.",
      "Lexique pauvre ou erroné.",
    ],
  },
  {
    critere: "Contenu et analyse culturelle",
    niveaux: [
      "Très créatif et personnalisé ; compétence culturelle dépassant les attentes.",
      "Créatif et personnalisé ; compétence culturelle suffisante.",
      "Assez créatif et personnalisé ; compétence culturelle partielle.",
      "Peu de créativité, de personnalisation ou de compétence culturelle.",
    ],
  },
];

export const grilleNiveaux = [
  { label: "Excellent", points: "4 – 3,4" },
  { label: "Très bien", points: "3,2 – 2,8" },
  { label: "Acceptable", points: "2,6 – 2,2" },
  { label: "À retravailler", points: "2 – 0" },
];

/* ============================================================================
 *  STUDIO — tout ce qui est modifiable se trouve ci-dessous.
 *  Pour adapter le studio, éditez ces tables (pas de code à toucher) :
 *    QUALITES  → la banque de qualités (déjà définie plus haut : `qualites`)
 *    HOOKS     → les amorces d'accroche proposées dans « Construire »
 *    RX        → les structures de l'Unité 1 repérées dans « Vérifier »
 *    PRON      → les mots difficiles + découpage + astuce dans « Prononcer »
 *    CHECKS    → l'auto-vérification finale de « Prêt.e »
 *    WPS       → débit de lecture (mots/seconde) pour estimer les durées
 * ========================================================================== */

// Les six étapes du studio, dans l'ordre.
// `sous_en` / `objectif_en` = gloses anglaises (mode EN).
// `objectif` = but explicite de l'étape (engagement comportemental : un cap clair).
export const STUDIO_STEPS = [
  {
    id: "observer",
    titre: "Observer",
    sous: "Écouter un modèle avant de créer",
    sous_en: "Notice a model before you create",
    objectif: "Remarquer ce qui fait une bonne introduction de podcast avant d'écrire la vôtre.",
    objectif_en: "Notice what makes a good podcast intro before writing your own.",
  },
  {
    id: "construire",
    titre: "Construire",
    sous: "Bâtir votre script",
    sous_en: "Build your script",
    objectif: "Bâtir un script clair (intro, contenu, conclusion) avec 4 à 6 qualités.",
    objectif_en: "Build a clear script (intro, body, conclusion) with 4–6 qualities.",
  },
  {
    id: "verifier",
    titre: "Vérifier",
    sous: "Qu'est-ce que tu remarques ?",
    sous_en: "What do you notice?",
    objectif: "Remarquer quelles structures de l'Unité 1 sont déjà dans votre script.",
    objectif_en: "Notice which Unit 1 structures are already in your script.",
  },
  {
    id: "oraliser",
    titre: "Oraliser",
    sous: "Rendre vos phrases parlables",
    sous_en: "Make your sentences speakable",
    objectif: "Repérer les phrases qui « sonnent écrit » et les rendre parlables.",
    objectif_en: "Spot sentences that 'sound written' and make them speakable.",
  },
  {
    id: "decouper",
    titre: "Découper",
    sous: "Pauses et rythme",
    sous_en: "Pauses and pacing",
    objectif: "Régler le rythme : pauses, longueur des phrases et durée de chaque section.",
    objectif_en: "Set your pacing: pauses, sentence length, and each section's timing.",
  },
  {
    id: "prononcer",
    titre: "Prononcer",
    sous: "S'entraîner et se réécouter",
    sous_en: "Rehearse and listen back",
    objectif: "Vous entraîner à voix haute, vous réécouter, et remarquer ce que vous pouvez améliorer.",
    objectif_en: "Rehearse aloud, listen back to yourself, and notice what to improve.",
  },
  {
    id: "pret",
    titre: "Prêt.e",
    sous: "Auto-vérification avant d'enregistrer",
    sous_en: "Self-check before recording",
    objectif: "Une dernière auto-vérification avant d'enregistrer.",
    objectif_en: "One last self-check before recording.",
  },
] as const;

export type StepId = (typeof STUDIO_STEPS)[number]["id"];

// MODÈLE — exemple d'introduction à observer avant de créer (étape « Observer »).
// Input avant output : on remarque le genre (accroche, structure, ton) d'abord.
export const MODELE = {
  // L'introduction-modèle, telle qu'on l'entendrait.
  texte:
    "Qui aurait pensé que moi, passionnée de cinéma depuis l'enfance, je me retrouverais à Harvard à étudier le journalisme en français ? Bonjour et bienvenue ! Je m'appelle Léa, et je suis étudiante en deuxième année. On me dit souvent que je suis curieuse et déterminée — deux qualités qui me définissent bien. Je veux que ce podcast soit un espace pour explorer des histoires qui comptent. J'avoue que je doute parfois de mon français, mais je suis ravie que ce cours me pousse à parler. Alors, installez-vous confortablement : ça commence maintenant.",
  // Le modèle découpé par fonction (la « charpente » d'une intro de podcast).
  segments: [
    {
      partie: "Accroche",
      partie_en: "Hook",
      fonction: "capter l'auditeur dès la première phrase",
      fonction_en: "grab the listener from the first line",
      texte: "Qui aurait pensé que moi… je me retrouverais à étudier le journalisme en français ?",
    },
    {
      partie: "Qui",
      partie_en: "Who",
      fonction: "se présenter brièvement",
      fonction_en: "introduce yourself briefly",
      texte: "Bonjour et bienvenue ! Je m'appelle Léa, étudiante en deuxième année.",
    },
    {
      partie: "Personnalité",
      partie_en: "Personality",
      fonction: "montrer qui vous êtes (opinion, déclaratif)",
      fonction_en: "show who you are (opinion, reported speech)",
      texte: "On me dit souvent que je suis curieuse et déterminée.",
    },
    {
      partie: "Intention",
      partie_en: "Intention",
      fonction: "dire ce que vous voulez (je veux que + subjonctif)",
      fonction_en: "say what you want (je veux que + subjunctive)",
      texte: "Je veux que ce podcast soit un espace pour explorer des histoires qui comptent.",
    },
    {
      partie: "Nuance",
      partie_en: "Nuance",
      fonction: "exprimer une émotion ou un doute (subjonctif)",
      fonction_en: "express an emotion or doubt (subjunctive)",
      texte: "Je doute parfois de mon français, mais je suis ravie que ce cours me pousse à parler.",
    },
    {
      partie: "Clôture",
      partie_en: "Close",
      fonction: "terminer en parlant à l'auditeur",
      fonction_en: "end by speaking to the listener",
      texte: "Alors, installez-vous confortablement : ça commence maintenant.",
    },
  ],
  // Ce qu'on veut faire remarquer (conventions du genre « podcast »).
  remarquer: [
    { fr: "Ça commence par une question — pas par « Bonjour, je m'appelle… ».", en: "It opens with a question — not with 'Hi, my name is…'." },
    { fr: "La personne parle à l'auditeur (« installez-vous »), comme une conversation.", en: "The speaker talks to the listener ('settle in'), like a conversation." },
    { fr: "Les phrases sont courtes et faciles à dire à voix haute.", en: "Sentences are short and easy to say aloud." },
    { fr: "On entend une vraie personnalité, pas une liste de faits.", en: "You hear a real personality, not a list of facts." },
  ],
};

// Public visé — pour qui vous faites ce podcast (cadre la tâche : audience réelle).
export const PUBLIC = {
  fr: "Vous vous présentez à vos camarades de cours et aux auditeur.rice.s du podcast français de Harvard. Qu'est-ce que vous voulez qu'iels retiennent de vous ?",
  en: "You're introducing yourself to your classmates and to listeners of Harvard's French podcast. What do you want them to remember about you?",
};

// HOOKS — amorces d'accroche cliquables (insérées dans l'intro).
export const HOOKS: string[] = [
  "Qui aurait pensé que… ?",
  "Et si je vous disais que… ?",
  "Vous êtes-vous déjà demandé… ?",
  "Saviez-vous que… ?",
  "Imaginez un instant que… ",
  "Pourquoi est-ce que… ?",
];

// RX — structures de l'Unité 1 que « Vérifier » essaie de repérer.
// `test` = expression régulière ; si elle ne trouve rien, on propose `essayer`.
// L'entrée « qualites » est spéciale (on compte les qualités choisies, pas une regex).
export type RxRule = {
  id: string;
  label: string;
  fonction: string; // ce que la structure FAIT dans une intro (fonction communicative)
  fonction_en: string;
  test?: RegExp;
  essayer: string;
  exemple: string;
};

export const RX: RxRule[] = [
  {
    id: "interro",
    label: "Une question d'accroche (formes interrogatives)",
    fonction: "capter l'auditeur",
    fonction_en: "grab the listener",
    test: /\?|\bqui aurait\b|\best-ce que\b|\bqu['’]est-ce\b|\bpourquoi\b|\bcomment\b/i,
    essayer: "Pour accrocher l'auditeur dès le début, essayez une vraie question.",
    exemple: "« Qui aurait pensé que moi, … ? »",
  },
  {
    id: "opinion",
    label: "Verbes d'opinion / déclaratifs",
    fonction: "affirmer qui vous êtes",
    fonction_en: "establish who you are",
    test: /\b(je pense|je crois|je trouve|je dis|on (m['’]a )?dit|je considère|selon moi|à mon avis|j['’]estime)\b/i,
    essayer: "Pour vous présenter avec assurance, dites ce que vous pensez ou ce qu'on vous dit.",
    exemple: "« On me dit souvent que je suis curieux/se. »",
  },
  {
    id: "volonte",
    label: "« je veux que » / « il faut que » (+ subjonctif)",
    fonction: "annoncer vos intentions",
    fonction_en: "state your intentions",
    test: /\b(je veux que|il faut que|j['’]aimerais que|je souhaite que|il faudrait que)\b/i,
    essayer: "Pour dire ce que vous voulez accomplir, essayez « je veux que… » ou « il faut que… ».",
    exemple: "« Je veux que ce podcast me fasse progresser à l'oral. »",
  },
  {
    id: "emotion",
    label: "Subjonctif de l'émotion / du doute",
    fonction: "nuancer, montrer votre personnalité",
    fonction_en: "add nuance, show personality",
    test: /\b(je suis (content|contente|heureux|heureuse|ravi|ravie|triste|surpris|surprise|fier|fière)[^.?!]*que|j['’]ai peur que|je doute que|bien que|il est possible que|je crains que)\b/i,
    essayer: "Pour donner de la nuance, exprimez une émotion ou un doute au subjonctif.",
    exemple: "« Je suis ravi.e que ce cours soit en français. »",
  },
  {
    id: "qualites",
    // Spécial : « Vérifier » compte les qualités choisies (cible : 4 à 6).
    label: "4 à 6 qualités professionnelles",
    fonction: "vous décrire précisément",
    fonction_en: "describe yourself precisely",
    essayer: "Pour vous décrire précisément, choisissez entre 4 et 6 qualités dans « Construire ».",
    exemple: "curieux.se · rigoureux.se · créatif.ve …",
  },
];

// PRON — mots difficiles. Affichés dans « Prononcer » s'ils apparaissent
// dans le script (sinon, on montre la sélection par défaut ci-dessous).
export type PronEntry = { mot: string; decoupe: string; astuce: string };

export const PRON: PronEntry[] = [
  { mot: "journalisme", decoupe: "jour·na·lisme", astuce: "« j » doux comme dans « jour » ; le « e » final est muet." },
  { mot: "curieux", decoupe: "cu·ri·eux", astuce: "« eux » = son [ø], bouche bien arrondie." },
  { mot: "rigoureux", decoupe: "ri·gou·reux", astuce: "« gou » comme « goût » ; « eux » arrondi." },
  { mot: "créatif", decoupe: "cré·a·tif", astuce: "Détachez « cré-a » ; le « f » se prononce." },
  { mot: "passionne", decoupe: "pa·ssio·nne", astuce: "« ssio » = [sjɔ] ; insistez sur la syllabe « ssio »." },
  { mot: "déterminé", decoupe: "dé·ter·mi·né", astuce: "Trois « é » fermés : dé-…-né. Gardez-les nets." },
  { mot: "rigueur", decoupe: "ri·gueur", astuce: "« gueur » = [gœʁ], le « r » final racle légèrement." },
  { mot: "ambitieux", decoupe: "am·bi·tieux", astuce: "« tieux » = [sjø] ; « am » est nasal." },
  { mot: "analyse", decoupe: "a·na·lyse", astuce: "Le « y » se dit [i] ; le « s » entre voyelles = [z]." },
  { mot: "polyvalent", decoupe: "po·ly·va·lent", astuce: "« en » nasal à la fin ; ne prononcez pas le « t »." },
  { mot: "français", decoupe: "fran·çais", astuce: "« ç » = [s] ; « ais » final = [ɛ], le « s » est muet." },
];

// Sélection par défaut si aucun mot de PRON n'est trouvé dans le script.
export const PRON_DEFAUT = ["journalisme", "curieux", "français"];

// En vous réécoutant — sur quoi porter l'attention (étape « Prononcer »).
export const FOCUS_ECOUTE: { fr: string; en: string }[] = [
  { fr: "Votre débit : ni trop vite, ni trop lent ?", en: "Your pace: not too fast, not too slow?" },
  { fr: "Vos pauses : tombent-elles aux bons endroits ?", en: "Your pauses: do they fall in the right places?" },
  { fr: "Les mots difficiles : sont-ils clairs ?", en: "The tricky words: are they clear?" },
  { fr: "Votre intonation : est-elle vivante ?", en: "Your intonation: is it lively?" },
];

// Amorces de réflexion (métacognition) — l'étudiant.e complète après écoute.
export const REFLEXION: string[] = [
  "Je remarque que…",
  "C'était fluide / saccadé parce que…",
  "Le mot le plus difficile était…",
  "La prochaine fois, je vais…",
];

// CHECKS — auto-vérification finale (« Prêt.e »). Commence par la communication
// (« est-ce que je me fais comprendre ? ») avant la forme — fluidité avant perfection.
export const CHECKS: { id: string; label: string; en: string }[] = [
  {
    id: "communication",
    label: "Un.e auditeur.rice comprend qui je suis après 1 à 2 minutes.",
    en: "A listener understands who I am after 1–2 minutes.",
  },
  {
    id: "contenu",
    label: "Mon épisode est personnel et me ressemble.",
    en: "My episode is personal and sounds like me.",
  },
  {
    id: "oral",
    label: "Mes phrases se disent d'un débit naturel — ça sonne parlé, pas lu.",
    en: "My sentences flow at a natural pace — it sounds spoken, not read.",
  },
  {
    id: "grammaire",
    label: "J'utilise des structures de l'Unité 1 pour accrocher, affirmer et nuancer.",
    en: "I use Unit 1 structures to hook, assert, and add nuance.",
  },
  {
    id: "vocabulaire",
    label: "J'ai utilisé 4 à 6 qualités professionnelles.",
    en: "I used 4–6 professional qualities.",
  },
];

// WPS — mots par seconde. Débit de lecture moyen en français ≈ 2,3.
// Augmentez si vos étudiant.e.s lisent vite, diminuez s'ils lisent lentement.
export const WPS = 2.3;

// Cibles de durée par section (secondes) — pour « Découper ».
export const CIBLES: Record<string, [number, number]> = {
  intro: [10, 15],
  contenu: [40, 50],
  conclusion: [10, 15],
};
