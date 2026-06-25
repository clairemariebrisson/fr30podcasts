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

// BRIQUES — les « briques » du script, dans l'ordre de construction (étape
// « Co-construire »). Chaque brique relie une FONCTION à une STRUCTURE de
// l'Unité 1, avec un exemple du modèle et un gabarit de phrase à compléter.
// Co-construction « clé en main » : on bâtit le script morceau par morceau.
// `groupe: "anecdote"` regroupe les briques co-construites de l'anecdote.
export type Brique = {
  id: string;
  section: "intro" | "contenu" | "conclusion";
  groupe?: "anecdote";
  titre: string;
  titre_en: string;
  fonction: string;
  fonction_en: string;
  structure: string;
  structure_en: string;
  modele: string; // exemple tiré du modèle (étape « Observer »)
  cadre: string; // gabarit / amorce de phrase
  aide: string;
  aide_en: string;
  qualites?: boolean; // affiche la banque de qualités (brique « personnalité »)
  amorces?: boolean; // affiche des amorces d'accroche cliquables (brique « accroche »)
};

export const BRIQUES: Brique[] = [
  {
    id: "accroche",
    section: "intro",
    titre: "Accroche",
    titre_en: "Hook",
    fonction: "capter l'auditeur",
    fonction_en: "grab the listener",
    structure: "une question (forme interrogative)",
    structure_en: "a question (interrogative)",
    modele: "Qui aurait pensé que moi… je me retrouverais à étudier le journalisme en français ?",
    cadre: "Qui aurait pensé que… ?",
    aide: "Commence par une vraie question — pas par « Bonjour, je m'appelle… ».",
    aide_en: "Open with a real question — not with 'Hi, my name is…'.",
    amorces: true,
  },
  {
    id: "presentation",
    section: "intro",
    titre: "Présentation",
    titre_en: "Who you are",
    fonction: "te présenter brièvement",
    fonction_en: "introduce yourself briefly",
    structure: "le présent",
    structure_en: "present tense",
    modele: "Bonjour et bienvenue ! Je m'appelle Léa, étudiante en deuxième année.",
    cadre: "Bonjour ! Je m'appelle ___, et je suis ___.",
    aide: "Une phrase suffit : ton nom + qui tu es.",
    aide_en: "One sentence is enough: your name + who you are.",
  },
  {
    id: "personnalite",
    section: "intro",
    titre: "Personnalité",
    titre_en: "Personality",
    fonction: "affirmer qui tu es",
    fonction_en: "establish who you are",
    structure: "verbe d'opinion / déclaratif (+ indicatif) + tes qualités",
    structure_en: "opinion / reporting verb (+ indicative) + your qualities",
    modele: "On me dit souvent que je suis curieuse et déterminée.",
    cadre: "On me dit souvent que je suis ___ et ___.",
    aide: "Choisis tes qualités ci-dessous, puis intègre-les dans une phrase.",
    aide_en: "Pick your qualities below, then weave them into a sentence.",
    qualites: true,
  },
  {
    id: "anecdote-decor",
    section: "contenu",
    groupe: "anecdote",
    titre: "1. Plante le décor",
    titre_en: "1. Set the scene",
    fonction: "situer ton anecdote",
    fonction_en: "ground your anecdote",
    structure: "le présent",
    structure_en: "present tense",
    modele: "Depuis l'enfance, je passe des heures devant des films.",
    cadre: "___ (un moment, un lieu, une habitude).",
    aide: "Une phrase qui plante un moment concret.",
    aide_en: "One sentence that sets a concrete moment.",
  },
  {
    id: "anecdote-rapport",
    section: "contenu",
    groupe: "anecdote",
    titre: "2. Rapporte une parole ou une pensée",
    titre_en: "2. Report a word or a thought",
    fonction: "rapporter (fait / opinion)",
    fonction_en: "report (fact / opinion)",
    structure: "verbe déclaratif / d'opinion (+ indicatif)",
    structure_en: "reporting / opinion verb (+ indicative)",
    modele: "On m'a dit que je devais en faire mon métier.",
    cadre: "On m'a dit que… / Je pensais que…",
    aide: "Qu'est-ce qu'on t'a dit, ou que pensais-tu à ce moment-là ?",
    aide_en: "What were you told, or what were you thinking?",
  },
  {
    id: "anecdote-reaction",
    section: "contenu",
    groupe: "anecdote",
    titre: "3. Réagis (émotion ou doute)",
    titre_en: "3. React (emotion or doubt)",
    fonction: "exprimer ta réaction",
    fonction_en: "express your reaction",
    structure: "le subjonctif de l'émotion / du doute",
    structure_en: "subjunctive of emotion / doubt",
    modele: "J'étais ravie que quelqu'un y croie, même si je doutais d'y arriver.",
    cadre: "J'étais ravi.e que… / Je doutais que…",
    aide: "Termine ton anecdote par ce que tu as ressenti.",
    aide_en: "End your anecdote with what you felt.",
  },
  {
    id: "intention",
    section: "contenu",
    titre: "Intention",
    titre_en: "Intention",
    fonction: "dire ce que tu veux accomplir",
    fonction_en: "say what you want to achieve",
    structure: "je veux que / il faut que (+ subjonctif)",
    structure_en: "je veux que / il faut que (+ subjunctive)",
    modele: "Je veux que ce podcast soit un espace pour explorer des histoires qui comptent.",
    cadre: "Je veux que ___.",
    aide: "Appuie sur le verbe au subjonctif : « je veux que ce podcast SOIT… ».",
    aide_en: "Lean on the subjunctive verb: 'je veux que ce podcast SOIT…'.",
  },
  {
    id: "nuance",
    section: "contenu",
    titre: "Nuance",
    titre_en: "Nuance",
    fonction: "montrer une nuance, un peu d'humilité",
    fonction_en: "show nuance, a bit of humility",
    structure: "le subjonctif de l'émotion / du doute",
    structure_en: "subjunctive of emotion / doubt",
    modele: "Je doute parfois de mon français, mais je suis ravie que ce cours me pousse à parler.",
    cadre: "Je doute que… mais je suis ravi.e que ___.",
    aide: "Une vraie nuance te rend plus humain.e à l'écoute.",
    aide_en: "A genuine nuance makes you more human to listen to.",
  },
  {
    id: "cloture",
    section: "conclusion",
    titre: "Clôture",
    titre_en: "Close",
    fonction: "terminer en parlant à l'auditeur",
    fonction_en: "end by speaking to the listener",
    structure: "adresse directe (impératif)",
    structure_en: "direct address (imperative)",
    modele: "Alors, installez-vous confortablement : ça commence maintenant.",
    cadre: "Alors, ___ : ça commence !",
    aide: "Parle directement à l'auditeur pour finir.",
    aide_en: "Speak straight to the listener to finish.",
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
 *    RX        → les structures de l'Unité 1 : repérées dans « Vérifier »,
 *                travaillées à l'oral dans « Prononcer » (champ `diction`)
 *    FOCUS_ECOUTE → points de delivery B2 à surveiller dans « Prononcer »
 *    CHECKS    → l'auto-vérification finale de « Prêt.e »
 *    WPS       → débit de lecture (mots/seconde) pour estimer les durées
 * ========================================================================== */

// Les six étapes du studio, organisées selon le modèle PACE
// (Presentation, Attention, Co-construction, Extension) d'Adair-Hauck & Donato,
// + une vérification et une mise au point finale alignée sur la grille.
// `phase` = phase pédagogique ; `sous`/`objectif` cadrent l'étape (gloses _en).
export const STUDIO_STEPS = [
  {
    id: "observer",
    titre: "Observer",
    phase: "Présentation",
    phase_en: "Presentation",
    sous: "Écouter un modèle avant de créer",
    sous_en: "Notice a model before you create",
    objectif: "Remarquer ce qui fait une bonne introduction de podcast avant d'écrire la vôtre.",
    objectif_en: "Notice what makes a good podcast intro before writing your own.",
  },
  {
    id: "reperer",
    titre: "Repérer la forme",
    phase: "Attention",
    phase_en: "Attention to form",
    sous: "Les structures clés et leur musique",
    sous_en: "The key structures and their music",
    objectif: "Repérer, dans le modèle, les structures de l'Unité 1 : ce qu'elles font et comment elles sonnent.",
    objectif_en: "Spot the Unit 1 structures in the model: what they do and how they sound.",
  },
  {
    id: "construire",
    titre: "Co-construire",
    phase: "Co-construction",
    phase_en: "Co-construction",
    sous: "Bâtir, oraliser et rythmer votre script",
    sous_en: "Build, smooth, and pace your script",
    objectif: "Construire votre script, le rendre parlable et régler son rythme.",
    objectif_en: "Build your script, make it speakable, and set its pacing.",
  },
  {
    id: "verifier",
    titre: "Vérifier",
    phase: "Vérification",
    phase_en: "Check",
    sous: "Qu'est-ce que tu remarques ?",
    sous_en: "What do you notice?",
    objectif: "Vérifier que votre script emploie les structures de l'Unité 1.",
    objectif_en: "Check that your script uses the Unit 1 structures.",
  },
  {
    id: "oser",
    titre: "Oser",
    phase: "Extension",
    phase_en: "Extension",
    sous: "Du script à l'authentique",
    sous_en: "From script to authentic",
    objectif: "Vous éloigner peu à peu du script pour gagner en naturel et en spontanéité.",
    objectif_en: "Step away from the script to gain naturalness and spontaneity.",
  },
  {
    id: "pret",
    titre: "Avant de soumettre",
    phase: "Production",
    phase_en: "Production",
    sous: "Viser votre meilleur, selon la grille",
    sous_en: "Aim for your best, by the rubric",
    objectif: "Cibler ce qui rendra votre épisode meilleur, critère par critère, avant d'enregistrer.",
    objectif_en: "Target what will make your episode better, criterion by criterion, before recording.",
  },
] as const;

export type StepId = (typeof STUDIO_STEPS)[number]["id"];

// MODÈLE — exemple d'introduction à observer avant de créer (étape « Observer »).
// Input avant output : on remarque le genre (accroche, structure, ton) d'abord.
export const MODELE = {
  // Audio-modèle (facultatif). Pour faire écouter une vraie voix : déposez un
  // fichier dans le dossier `public/`, puis indiquez son chemin ici.
  // Fichier attendu : public/modele-intro.m4a (enregistré par Dr. Brisson).
  audio: "/modele-intro.m4a",
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
  diction: string; // comment la DIRE à l'oral pour que la fonction « passe » (étape « Repérer »)
  diction_en: string;
  modele: string; // la phrase du modèle (étape « Observer ») où on voit la structure
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
    diction: "Faites monter la voix en fin de question — l'intonation montante tend la perche à l'auditeur.",
    diction_en: "Let your pitch rise at the end of the question — rising intonation reaches out to the listener.",
    modele: "Qui aurait pensé que moi… je me retrouverais à étudier le journalisme en français ?",
    test: /\?|\bqui aurait\b|\best-ce que\b|\bqu['’]est-ce\b|\bpourquoi\b|\bcomment\b/i,
    essayer: "Pour accrocher l'auditeur dès le début, essayez une vraie question.",
    exemple: "« Qui aurait pensé que moi, … ? »",
  },
  {
    id: "opinion",
    label: "Verbes d'opinion / déclaratifs (+ indicatif)",
    fonction: "affirmer qui vous êtes",
    fonction_en: "establish who you are",
    diction: "Ton posé et descendant : l'indicatif affirme. Marquez « je pense / on me dit », puis enchaînez sans hésiter.",
    diction_en: "Steady, falling tone: the indicative asserts. Land 'je pense / on me dit', then flow on without hesitating.",
    modele: "On me dit souvent que je suis curieuse et déterminée.",
    test: /\b(je pense|je crois|je trouve|je dis|on (m['’]a )?dit|je considère|selon moi|à mon avis|j['’]estime)\b/i,
    essayer: "Pour vous présenter avec assurance, dites ce que vous pensez ou ce qu'on vous dit.",
    exemple: "« On me dit souvent que je suis curieux/se. »",
  },
  {
    id: "volonte",
    label: "« je veux que » / « il faut que » (+ subjonctif)",
    fonction: "annoncer vos intentions",
    fonction_en: "state your intentions",
    diction: "Appuyez sur le verbe au subjonctif — c'est là que vit votre intention (« je veux que ce podcast SOIT… »).",
    diction_en: "Stress the subjunctive verb — that's where your intention lives ('je veux que ce podcast SOIT…').",
    modele: "Je veux que ce podcast soit un espace pour explorer des histoires qui comptent.",
    test: /\b(je veux que|il faut que|j['’]aimerais que|je souhaite que|il faudrait que|il est nécessaire que)\b/i,
    essayer: "Pour dire ce que vous voulez accomplir, essayez « je veux que… » ou « il faut que… ».",
    exemple: "« Je veux que ce podcast me fasse progresser à l'oral. »",
  },
  {
    id: "emotion",
    label: "Subjonctif de l'émotion / du doute",
    fonction: "nuancer, montrer votre personnalité",
    fonction_en: "add nuance, show personality",
    diction: "Ralentissez un peu et laissez l'émotion s'entendre sur « je doute que / je suis ravi.e que » — la nuance est dans la voix.",
    diction_en: "Slow down a little and let the feeling come through on 'je doute que / je suis ravi.e que' — the nuance is in the voice.",
    modele: "Je doute parfois de mon français, mais je suis ravie que ce cours me pousse à parler.",
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
    diction: "Énumérez avec du rythme : une petite pause entre chaque qualité, et montez légèrement avant la dernière.",
    diction_en: "List them with rhythm: a small pause between each quality, and lift your pitch slightly before the last one.",
    modele: "Je suis curieuse et déterminée.",
    test: /\b(curieux|curieuse|rigoureux|rigoureuse|créatif|créative|déterminé|ambitieux|ambitieuse|polyvalent|sérieux|sérieuse)\b/i,
    essayer: "Pour vous décrire précisément, choisissez entre 4 et 6 qualités dans « Construire ».",
    exemple: "« Je suis curieuse, rigoureuse et déterminée. »",
  },
];

// En vous entraînant — sur quoi porter l'attention (delivery B2, étape « Prononcer »).
export const FOCUS_ECOUTE: { fr: string; en: string }[] = [
  { fr: "Intonation : elle monte sur les questions, descend sur les affirmations ?", en: "Intonation: rising on questions, falling on statements?" },
  { fr: "Mise en relief : le mot important de chaque phrase ressort-il ?", en: "Emphasis: does the key word of each sentence stand out?" },
  { fr: "Liaisons et enchaînements : sont-ils naturels (« vous_êtes », « deux_ans ») ?", en: "Liaisons and linking: do they flow naturally ('vous_êtes', 'deux_ans')?" },
  { fr: "Groupes de souffle : vos pauses suivent-elles le sens ?", en: "Breath groups: do your pauses follow the meaning?" },
  { fr: "Le naturel : ça sonne parlé, pas lu ?", en: "Naturalness: does it sound spoken, not read?" },
];

// Amorces de réflexion (métacognition) — l'étudiant.e complète après s'être entraîné.e.
export const REFLEXION: string[] = [
  "Je remarque que…",
  "L'intonation était juste / à revoir sur…",
  "La structure la plus difficile à dire était…",
  "La prochaine fois, je vais…",
];

// CHECKS — mise au point finale (« Avant de soumettre »), alignée 1:1 sur les
// critères de la grille. Chaque item : ce qu'on vérifie + `cible`, une piste
// concrète pour viser le haut de la grille (cibler son meilleur, pas juste cocher).
export const CHECKS: {
  id: string;
  label: string;
  en: string;
  cible: string;
  cible_en: string;
}[] = [
  {
    id: "organisation",
    label: "Mon épisode a une ouverture nette, un développement et une clôture.",
    en: "My episode has a clear opening, a middle, and a close.",
    cible: "Pour viser le haut : une accroche qui donne envie d'écouter et une dernière phrase mémorable.",
    cible_en: "To aim high: a hook that makes them want to listen, and a memorable last line.",
  },
  {
    id: "oral",
    label: "Mes phrases sont variées et se disent d'un débit naturel.",
    en: "My sentences are varied and flow at a natural pace.",
    cible: "Pour viser le haut : variez la longueur des phrases et faites vivre l'intonation.",
    cible_en: "To aim high: vary your sentence length and let your intonation come alive.",
  },
  {
    id: "grammaire",
    label: "J'utilise les structures de l'Unité 1 pour accrocher, affirmer et nuancer.",
    en: "I use Unit 1 structures to hook, assert, and add nuance.",
    cible: "Pour viser le haut : au moins une question d'accroche, une opinion et un subjonctif, bien placés.",
    cible_en: "To aim high: at least one hook question, one opinion, and one subjunctive — well placed.",
  },
  {
    id: "vocabulaire",
    label: "J'emploie 4 à 6 qualités, avec un vocabulaire précis.",
    en: "I use 4–6 qualities, with precise vocabulary.",
    cible: "Pour viser le haut : préférez un mot précis à un mot général (« rigoureux.se » plutôt que « bien »).",
    cible_en: "To aim high: choose a precise word over a general one ('rigorous' over 'good').",
  },
  {
    id: "contenu",
    label: "Mon épisode est personnel et créatif — il me ressemble.",
    en: "My episode is personal and creative — it sounds like me.",
    cible: "Pour viser le haut : un détail ou une anecdote que vous seul.e pouvez raconter.",
    cible_en: "To aim high: a detail or anecdote only you could tell.",
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
