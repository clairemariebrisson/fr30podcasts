// Contenu du Podcast 0 — FR30
// Source : worksheet « FR30, Podcast 0 »

export const meta = {
  number: 0,
  title: "Podcast 0",
  subtitle: "Expérimenter le podcasting",
  dueDate: "21 septembre",
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
    "If you have any questions at any time, feel free to contact the Course Head, Dr. Claire-Marie Brisson (cmbrisson@fas.harvard.edu), who is herself a seasoned podcaster. She will be able to answer any questions — technical or otherwise — regarding podcast episodes. 🙂",
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
