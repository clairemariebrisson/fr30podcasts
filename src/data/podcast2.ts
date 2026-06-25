// Contenu du Podcast 2 — FR30 — Unité 2 (« Terroir, climat et journalisme local »)
// « La pub de terroir » : réaliser une courte mini-pub vidéo (façon Reels / TikTok /
// vidéo de tourisme) pour un produit du monde francophone lié à un terroir.
//
// Ce fichier est volontairement autonome (il ne dépend pas de podcast0.ts /
// podcast1.ts) pour que le studio du Podcast 2 puisse évoluer indépendamment.

export const meta = {
  number: 2,
  title: "Podcast 2 — La pub de terroir",
  subtitle: "Vendre un produit du monde francophone",
  length: "mini-pub vidéo de 1 à 2 min (Reels · TikTok · vidéo de tourisme)",
};

export const objectif = {
  intro:
    "Vous devenez créateur·rice de contenu : vous réalisez une fausse mini-pub pour un produit lié à un terroir du monde francophone — un vin, une huile, un sel, un fromage, un fruit… Pensez Reels, TikTok ou vidéo de tourisme : 1 à 2 minutes, un rythme nerveux, une histoire qui donne envie. Vous racontez un lieu et son produit avec toute la boîte à outils de l'Unité 2 : le passé qui fait rêver, des adjectifs qui valorisent, une projection au conditionnel et un slogan qui marque.",
  structure: [
    { phase: "L'accroche", duree: "5 à 10 s", description: "captez le regard en trois secondes." },
    { phase: "Le terroir", duree: "25 à 35 s", description: "racontez l'histoire du lieu : avant / le moment clé." },
    { phase: "Le produit", duree: "25 à 35 s", description: "décrivez et valorisez avec des adjectifs choisis." },
    { phase: "L'appel", duree: "15 à 20 s", description: "faites rêver, puis un slogan qui reste." },
  ],
};

// Fonction communicative → structure grammaticale de l'Unité 2.
export const structuresUnite = [
  { fonction: "raconter le passé d'un lieu (le décor d'avant)", structure: "l'imparfait", exemple: "« Autrefois, on récoltait les fruits à la main. »" },
  { fonction: "marquer un moment, un changement daté", structure: "le passé composé (et le plus-que-parfait)", exemple: "« En 2009, ce terroir a obtenu son label. »" },
  { fonction: "valoriser le produit", structure: "les adjectifs mélioratifs (et péjoratifs par contraste)", exemple: "« un goût riche, authentique, d'exception. »" },
  { fonction: "faire rêver / projeter (info non confirmée)", structure: "le conditionnel", exemple: "« Vous adoreriez ce goût. Ce sel aurait des vertus rares. »" },
  { fonction: "opposer au produit industriel", structure: "les connecteurs logiques (alors que, tandis que, en revanche)", exemple: "« Tandis que l'industrie standardise, ici, on respecte le temps. »" },
  { fonction: "frapper avec un slogan", structure: "la mise en relief (c'est… qui / ce qui… c'est)", exemple: "« C'est ce terroir qui fait toute la différence. »" },
];

export type CanDo = { fr: string; en: string; structure: string };

export const canDo: CanDo[] = [
  {
    fr: "Je peux raconter l'histoire d'un lieu qui change (avant / aujourd'hui).",
    en: "I can tell the story of a place that changes (before / today).",
    structure: "l'imparfait + le passé composé",
  },
  {
    fr: "Je peux décrire un produit avec des adjectifs qui le valorisent.",
    en: "I can describe a product with adjectives that sell it.",
    structure: "les adjectifs mélioratifs et péjoratifs",
  },
  {
    fr: "Je peux faire rêver mon public avec une projection.",
    en: "I can make my audience dream with a projection.",
    structure: "le conditionnel (projection / information non confirmée)",
  },
  {
    fr: "Je peux opposer mon terroir aux produits industriels.",
    en: "I can contrast my terroir with industrial products.",
    structure: "les connecteurs logiques (alors que, tandis que, en revanche)",
  },
  {
    fr: "Je peux créer un slogan qui met en valeur l'essentiel.",
    en: "I can craft a slogan that highlights what matters.",
    structure: "la mise en relief (c'est… qui / ce qui… c'est)",
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
    sous: "Regarder une pub-modèle",
    sous_en: "Notice a model ad",
    objectif: "Remarquer comment une pub raconte un terroir : une histoire, un produit, une émotion.",
    objectif_en: "Notice how an ad tells a terroir story: a narrative, a product, an emotion.",
  },
  {
    id: "reperer",
    titre: "Repérer la forme",
    phase: "Attention",
    phase_en: "Attention to form",
    sous: "Les structures de l'Unité 2",
    sous_en: "The Unit 2 structures",
    objectif: "Repérer les structures qui font vendre : imparfait, passé composé, adjectifs, conditionnel, mise en relief.",
    objectif_en: "Spot the structures that sell: imperfect, passé composé, adjectives, conditional, cleft sentences.",
  },
  {
    id: "construire",
    titre: "Co-construire",
    phase: "Co-construction",
    phase_en: "Co-construction",
    sous: "De votre produit au scénario",
    sous_en: "From your product to the script",
    objectif: "Construire votre pub brique par brique, à partir d'un produit de terroir que vous choisissez.",
    objectif_en: "Build your ad brick by brick, from a terroir product you choose.",
  },
  {
    id: "verifier",
    titre: "Vérifier",
    phase: "Vérification",
    phase_en: "Check",
    sous: "Qu'est-ce que tu remarques ?",
    sous_en: "What do you notice?",
    objectif: "Vérifier que votre scénario emploie bien les structures de l'Unité 2.",
    objectif_en: "Check that your script uses the Unit 2 structures.",
  },
  {
    id: "oser",
    titre: "Oser",
    phase: "Extension",
    phase_en: "Extension",
    sous: "Du script à la caméra",
    sous_en: "From script to camera",
    objectif: "Passer du texte à l'écran : énergie, images du produit et du lieu, texte affiché.",
    objectif_en: "Move from text to screen: energy, shots of the product and place, on-screen text.",
  },
  {
    id: "pret",
    titre: "Avant de tourner",
    phase: "Production",
    phase_en: "Production",
    sous: "Viser votre meilleur, selon la grille",
    sous_en: "Aim for your best, by the rubric",
    objectif: "Cibler ce qui rendra votre pub meilleure, critère par critère, avant de filmer.",
    objectif_en: "Target what will make your ad better, criterion by criterion, before filming.",
  },
] as const;

export type StepId = (typeof STUDIO_STEPS)[number]["id"];

// Sections de la pub (ordre d'assemblage du scénario).
export const SECTIONS = ["accroche", "terroir", "produit", "appel"] as const;
export type SectionKey = (typeof SECTIONS)[number];

// MODÈLE — une mini-pub-modèle à observer (huile d'argan, Maroc).
export const MODELE = {
  // Pas de vidéo intégrée : c'est un scénario-modèle à imaginer en vidéo.
  // (Déposez un fichier dans public/ et indiquez son chemin ici pour en montrer une.)
  video: null as string | null,
  produit: "L'huile d'argan d'Essaouira (Maroc) · IGP",
  texte:
    "Vous croyez connaître l'huile d'olive ? Goûtez autre chose. Autrefois, sur la côte d'Essaouira, les femmes berbères récoltaient les fruits de l'arganier à la main, comme leurs grand-mères. Ce savoir-faire, elles l'avaient appris de génération en génération. En 2009, l'huile d'argan a obtenu une indication géographique protégée. Une huile dorée, au goût riche et délicatement grillé — rare, authentique, profondément liée à sa terre. Tandis que l'industrie standardise tout, ici, chaque goutte raconte un arbre, un soleil, une main. Vous adoreriez ce goût, et vous ne reviendriez plus en arrière. On dirait presque que cet arbre aurait des secrets. Parce que ce qui fait la différence, c'est le terroir. L'huile d'argan d'Essaouira — le Maroc dans une goutte.",
  segments: [
    {
      partie: "Accroche / angle",
      partie_en: "Hook / angle",
      fonction: "capter le regard, interpeller",
      fonction_en: "grab attention, address the viewer",
      texte: "Vous croyez connaître l'huile d'olive ? Goûtez autre chose.",
    },
    {
      partie: "Le passé (imparfait)",
      partie_en: "The past (imperfect)",
      fonction: "planter le décor d'autrefois",
      fonction_en: "set the scene of long ago",
      texte: "Autrefois, sur la côte d'Essaouira, les femmes berbères récoltaient les fruits de l'arganier à la main, comme leurs grand-mères.",
    },
    {
      partie: "Avant l'avant (plus-que-parfait)",
      partie_en: "Before the before (pluperfect)",
      fonction: "ancrer une tradition plus ancienne encore",
      fonction_en: "anchor an even older tradition",
      texte: "Ce savoir-faire, elles l'avaient appris de génération en génération.",
    },
    {
      partie: "Le moment clé (passé composé)",
      partie_en: "The key moment (passé composé)",
      fonction: "marquer le changement daté",
      fonction_en: "mark the dated turning point",
      texte: "En 2009, l'huile d'argan a obtenu une indication géographique protégée.",
    },
    {
      partie: "La description (mélioratifs)",
      partie_en: "The description (positive adjectives)",
      fonction: "valoriser le produit",
      fonction_en: "make the product shine",
      texte: "Une huile dorée, au goût riche et délicatement grillé — rare, authentique, profondément liée à sa terre.",
    },
    {
      partie: "Le contraste (connecteur)",
      partie_en: "The contrast (connector)",
      fonction: "opposer au produit industriel",
      fonction_en: "set it against the industrial product",
      texte: "Tandis que l'industrie standardise tout, ici, chaque goutte raconte un arbre, un soleil, une main.",
    },
    {
      partie: "La projection (conditionnel)",
      partie_en: "The projection (conditional)",
      fonction: "faire rêver, laisser planer le doute",
      fonction_en: "make them dream, leave room for legend",
      texte: "Vous adoreriez ce goût, et vous ne reviendriez plus en arrière. On dirait presque que cet arbre aurait des secrets.",
    },
    {
      partie: "Le slogan (mise en relief)",
      partie_en: "The slogan (cleft sentence)",
      fonction: "frapper avec l'essentiel",
      fonction_en: "land the essential",
      texte: "Ce qui fait la différence, c'est le terroir. L'huile d'argan d'Essaouira — le Maroc dans une goutte.",
    },
  ],
  remarquer: [
    { fr: "On part d'une histoire, pas d'une liste : un lieu, des gens, un geste.", en: "It starts from a story, not a list: a place, people, a gesture." },
    { fr: "L'imparfait plante le décor d'avant ; le passé composé marque le moment clé.", en: "The imperfect sets the old scene; the passé composé marks the key moment." },
    { fr: "Les adjectifs ne sont pas neutres : ils valorisent (« doré », « authentique »).", en: "The adjectives aren't neutral: they sell ('golden', 'authentic')." },
    { fr: "Le conditionnel fait rêver et laisse planer le doute (« adoreriez », « aurait »).", en: "The conditional makes you dream and hints at legend ('would love', 'might have')." },
    { fr: "Le slogan final met en relief l'essentiel (« ce qui… c'est… »).", en: "The final slogan highlights what matters ('what… is…')." },
  ],
};

export const PUBLIC = {
  fr: "Vous réalisez une mini-pub pour la chaîne du Podcast français de Harvard — pensez Reels, TikTok ou vidéo de tourisme. Votre public : des jeunes francophones qui scrollent vite. Captez-les en trois secondes et faites-leur aimer un terroir.",
  en: "You're making a mini-ad for Harvard's French podcast channel — think Reels, TikTok, or a tourism video. Your audience: young French speakers scrolling fast. Hook them in three seconds and make them love a terroir.",
};

// Quelques produits de terroir francophones — des exemples à explorer (le studio
// accepte aussi le vôtre). Chacun montre le lieu, son histoire, et une ligne de
// pub-modèle qui emploie une structure de l'Unité 2 (« cliquer pour voir »).
export type Produit = {
  nom: string;
  lieu: string;
  label: string;
  emoji: string;
  terroir: string;
  terroir_en: string;
  exemple: string;
  structure: string;
};

export const PRODUITS: Produit[] = [
  {
    nom: "Le sel de Guérande",
    lieu: "Bretagne, France",
    label: "IGP",
    emoji: "🧂",
    terroir:
      "Récolté à la main dans les marais salants, séché par le soleil et le vent de l'Atlantique.",
    terroir_en:
      "Hand-harvested in the salt marshes, dried by the Atlantic sun and wind.",
    exemple: "Autrefois, les paludiers récoltaient à la main. Ce qui fait la différence, c'est le geste.",
    structure: "imparfait + mise en relief",
  },
  {
    nom: "Le piment d'Espelette",
    lieu: "Pays basque, France",
    label: "AOP",
    emoji: "🌶️",
    terroir:
      "Des cordes de piments rouges sèchent sur les façades blanches des maisons basques.",
    terroir_en:
      "Strings of red peppers dry on the white façades of Basque houses.",
    exemple: "Un piment doux, parfumé, d'exception — vous ne cuisineriez plus jamais sans lui.",
    structure: "adjectifs mélioratifs + conditionnel",
  },
  {
    nom: "Le fromage Comté",
    lieu: "Jura, France",
    label: "AOP",
    emoji: "🧀",
    terroir:
      "Un lait de montagne, affiné des mois dans les caves ; chaque meule a le goût de son alpage.",
    terroir_en:
      "Mountain milk, aged for months in cellars; each wheel tastes of its pasture.",
    exemple: "Tandis que l'industrie standardise tout, ici, le Comté prend son temps.",
    structure: "connecteur (le contraste)",
  },
  {
    nom: "La vanille Bourbon",
    lieu: "Madagascar",
    label: "—",
    emoji: "🌺",
    terroir:
      "Des fleurs pollinisées une à une à la main, puis des mois de séchage au soleil.",
    terroir_en:
      "Flowers pollinated one by one by hand, then months of sun-curing.",
    exemple: "On dirait que cette gousse aurait un secret. C'est Madagascar dans un parfum.",
    structure: "conditionnel (rumeur) + mise en relief",
  },
  {
    nom: "Le sirop d'érable",
    lieu: "Québec, Canada",
    label: "—",
    emoji: "🍁",
    terroir:
      "À la fonte des neiges, la sève monte ; on la récolte à la cabane à sucre, comme autrefois.",
    terroir_en:
      "As the snow melts, the sap rises; gathered at the sugar shack, as in the old days.",
    exemple: "Avant, on entaillait l'érable à la main. Vous adoreriez ce goût du printemps.",
    structure: "imparfait + conditionnel",
  },
];

// ---------------------------------------------------------------------------
//  BRIQUES — la pub, brique par brique (étape « Co-construire »).
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
};

export const BRIQUES: Brique[] = [
  {
    id: "accroche",
    section: "accroche",
    titre: "L'accroche",
    titre_en: "The hook",
    fonction: "capter le regard en trois secondes",
    fonction_en: "grab attention in three seconds",
    structure: "une question ou une mise en relief",
    structure_en: "a question or a cleft sentence",
    modele: "Vous croyez connaître l'huile d'olive ? Goûtez autre chose.",
    cadre: "Vous croyez connaître ___ ? / Et si ___ ? / C'est ___ qui change tout.",
    aide: "Pas de « Bonjour, voici ma pub ». Une question ou une promesse, tout de suite.",
    aide_en: "No 'Hi, here's my ad'. A question or a promise, right away.",
  },
  {
    id: "avant",
    section: "terroir",
    titre: "Avant — le décor",
    titre_en: "Before — the scene",
    fonction: "raconter l'habitude d'autrefois",
    fonction_en: "tell the way it used to be",
    structure: "l'imparfait",
    structure_en: "the imperfect",
    modele: "Autrefois, les femmes récoltaient les fruits à la main, comme leurs grand-mères.",
    cadre: "Autrefois / À l'époque, on ___ait… / les ___ ___aient…",
    aide: "L'imparfait, c'est la nostalgie : le décor, le geste répété, le « avant ».",
    aide_en: "The imperfect is nostalgia: the scene, the repeated gesture, the 'before'.",
  },
  {
    id: "moment",
    section: "terroir",
    titre: "Le moment clé",
    titre_en: "The key moment",
    fonction: "marquer un changement daté",
    fonction_en: "mark a dated change",
    structure: "le passé composé (et le plus-que-parfait)",
    structure_en: "the passé composé (and the pluperfect)",
    modele: "En 2009, l'huile a obtenu son label. Ce savoir-faire, on l'avait transmis depuis des siècles.",
    cadre: "En [année], ___ a ___. / On avait déjà ___.",
    aide: "Le passé composé pour l'événement daté ; le plus-que-parfait pour « encore avant ».",
    aide_en: "Passé composé for the dated event; pluperfect for 'even earlier'.",
  },
  {
    id: "description",
    section: "produit",
    titre: "La description",
    titre_en: "The description",
    fonction: "valoriser le produit",
    fonction_en: "make the product shine",
    structure: "les adjectifs mélioratifs",
    structure_en: "positive (selling) adjectives",
    modele: "Une huile dorée, au goût riche et authentique — rare, profondément liée à sa terre.",
    cadre: "un·e ___ [adjectif], [adjectif] et [adjectif].",
    aide: "Choisissez des adjectifs qui valorisent : réputé, authentique, d'exception, raffiné…",
    aide_en: "Pick adjectives that sell: renowned, authentic, exceptional, refined…",
  },
  {
    id: "contraste",
    section: "produit",
    titre: "Le contraste",
    titre_en: "The contrast",
    fonction: "opposer au produit industriel",
    fonction_en: "set it against the industrial product",
    structure: "un connecteur (alors que, tandis que, en revanche)",
    structure_en: "a connector (alors que, tandis que, en revanche)",
    modele: "Tandis que l'industrie standardise tout, ici, chaque goutte raconte une histoire.",
    cadre: "Tandis que / Alors que ___, ici, ___.",
    aide: "Opposez : le produit fade et industriel d'un côté, votre terroir de l'autre.",
    aide_en: "Contrast: the bland, industrial product on one side, your terroir on the other.",
  },
  {
    id: "projection",
    section: "appel",
    titre: "La projection",
    titre_en: "The projection",
    fonction: "faire rêver le spectateur",
    fonction_en: "make the viewer dream",
    structure: "le conditionnel (projection / rumeur)",
    structure_en: "the conditional (projection / rumor)",
    modele: "Vous adoreriez ce goût. On dirait que cet arbre aurait des secrets.",
    cadre: "Vous adoreriez ___ / Ce serait ___ / ___ aurait ___.",
    aide: "Le conditionnel fait rêver (« vous adoreriez ») et laisse planer la légende (« aurait »).",
    aide_en: "The conditional makes them dream ('you'd love') and hints at legend ('might have').",
  },
  {
    id: "slogan",
    section: "appel",
    titre: "Le slogan",
    titre_en: "The slogan",
    fonction: "frapper avec l'essentiel",
    fonction_en: "land the essential",
    structure: "la mise en relief (c'est… qui / ce qui… c'est)",
    structure_en: "the cleft sentence (c'est… qui / ce qui… c'est)",
    modele: "Ce qui fait la différence, c'est le terroir.",
    cadre: "C'est ___ qui ___. / Ce qui compte, c'est ___.",
    aide: "Une seule idée, mise en avant. Court. C'est la phrase qu'on retiendra.",
    aide_en: "One idea, pushed to the front. Short. The line they'll remember.",
  },
];

// ---------------------------------------------------------------------------
//  RX — structures de l'Unité 2 que « Vérifier » essaie de repérer.
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
    id: "imparfait",
    label: "L'imparfait (le décor d'avant)",
    fonction: "raconter l'habitude d'autrefois",
    fonction_en: "tell the way it used to be",
    diction: "Posez une image d'archives ou un geste lent, et ralentissez la voix — c'est le passé, la nostalgie.",
    diction_en: "Lay an archival image or a slow gesture, and slow the voice — it's the past, the nostalgia.",
    modele: "Autrefois, on récoltait les fruits à la main.",
    test: /\b(autrefois|jadis|naguère|à l['’]époque|à une époque|dans le temps)\b|\b(était|étaient|avait|avaient|faisait|faisaient|vivait|vivaient)\b|\b[a-zàâäéèêëîïôöùûüç]{2,}[^r ](ait|aient|ais)\b/i,
    essayer: "Pour planter le décor d'avant, racontez une habitude à l'imparfait.",
    exemple: "« Autrefois, les vignerons vendangeaient en octobre. »",
  },
  {
    id: "passe",
    label: "Le passé composé / le plus-que-parfait (le moment clé)",
    fonction: "marquer un changement daté",
    fonction_en: "mark a dated change",
    diction: "Sur le moment clé : un plan net, un mot appuyé. C'est le tournant de l'histoire.",
    diction_en: "On the key moment: a crisp shot, a stressed word. It's the story's turning point.",
    modele: "En 2009, l'huile a obtenu son label.",
    test: /\b(a|ont|est|sont|avait|avaient|était|étaient)\s+(?:[a-zàâäéèêëîïôöùûüç'’]+\s+)?[a-zàâäéèêëîïôöùûüç'’]+(é|ée|és|ées|i|is|it|u|us|ue|ues)\b/i,
    essayer: "Pour marquer le tournant, datez-le au passé composé.",
    exemple: "« En 1936, ce terroir a obtenu son AOC. »",
  },
  {
    id: "melioratif",
    label: "Les adjectifs mélioratifs (valoriser)",
    fonction: "valoriser le produit",
    fonction_en: "make the product shine",
    diction: "Synchronisez chaque adjectif avec un gros plan du produit — le mot et l'image se renforcent.",
    diction_en: "Sync each adjective with a close-up of the product — word and image reinforce each other.",
    modele: "Une huile dorée, au goût riche et authentique.",
    test: /\b(réputée?s?|authentiques?|équilibrée?s?|exceptionnelle?s?|d['’]exception|uniques?|raffinée?s?|savoureux|savoureuses?|généreux|généreuses?|délicate?s?|ancestrale?s?|précieux|précieuses?|dorée?s?|riches?|incomparables?|inimitables?|artisanale?s?|rares?|nobles?|prestigieux|prestigieuses?|réputé|réputés|réputée|réputées)\b/i,
    essayer: "Pour donner envie, choisissez des adjectifs qui valorisent.",
    exemple: "« un goût authentique, équilibré et d'exception »",
  },
  {
    id: "conditionnel",
    label: "Le conditionnel (faire rêver / l'info non confirmée)",
    fonction: "projeter, faire rêver",
    fonction_en: "project, make them dream",
    diction: "Regardez la caméra, baissez un peu la voix : vous parlez au spectateur, vous le faites rêver.",
    diction_en: "Look at the camera, lower the voice a touch: you're speaking to the viewer, making them dream.",
    modele: "Vous adoreriez ce goût. Ce sel aurait des vertus rares.",
    test: /\b[a-zàâäéèêëîïôöùûüç]{2,}(rais|rait|rions|riez|raient)\b|\b(aurai[ts]|aurait|auraient|serai[ts]|serait|seraient)\b|\bon dirait\b/i,
    essayer: "Pour faire rêver, projetez au conditionnel — ou glissez une légende du terroir.",
    exemple: "« Vous adoreriez ce goût. » / « Ce sel aurait des vertus uniques. »",
  },
  {
    id: "connecteurs",
    label: "Les connecteurs (opposer / structurer)",
    fonction: "opposer au produit industriel",
    fonction_en: "set it against the industrial product",
    diction: "Marquez le contraste au montage : l'industrie (image froide) → votre terroir (image chaude).",
    diction_en: "Mark the contrast in the edit: industry (cold image) → your terroir (warm image).",
    modele: "Tandis que l'industrie standardise, ici, on respecte le temps.",
    test: /\b(alors que|tandis que|en revanche|pourtant|cependant|au contraire|par contre|donc)\b/i,
    essayer: "Pour vous démarquer, opposez votre terroir au produit industriel.",
    exemple: "« Tandis que l'industrie standardise, ici, chaque goutte raconte une histoire. »",
  },
  {
    id: "relief",
    label: "La mise en relief (le slogan)",
    fonction: "frapper avec l'essentiel",
    fonction_en: "land the essential",
    diction: "Le slogan finit la vidéo : texte à l'écran + un silence. Laissez-le résonner.",
    diction_en: "The slogan ends the video: on-screen text + a beat of silence. Let it land.",
    modele: "Ce qui fait la différence, c'est le terroir.",
    test: /\bc['’]est\s+[^.?!]*\bqu[ie]\b|\bce\s+(?:qui|que)\b[^.?!]*\bc['’]est\b/i,
    essayer: "Pour un slogan qui marque, mettez l'essentiel en relief.",
    exemple: "« C'est ce terroir qui fait la différence. » / « Ce qui compte, c'est l'authenticité. »",
  },
];

// En tournant — sur quoi porter l'attention (présentation vidéo, étape « Oser »).
export const FOCUS_ECOUTE: { fr: string; en: string }[] = [
  { fr: "L'énergie : vous vendez du rêve — de l'enthousiasme, un sourire dans la voix.", en: "Energy: you're selling a dream — enthusiasm, a smile in the voice." },
  { fr: "Le visuel : on voit le produit et le lieu, pas seulement votre visage.", en: "Visuals: we see the product and the place, not only your face." },
  { fr: "Le rythme : court et nerveux, comme un Reel — pas de temps mort.", en: "Pace: short and snappy, like a Reel — no dead time." },
  { fr: "Le texte à l'écran : vos adjectifs et votre slogan s'affichent ?", en: "On-screen text: do your adjectives and slogan appear?" },
  { fr: "Le son : voix claire, peut-être une musique douce en fond.", en: "Sound: clear voice, maybe soft background music." },
  { fr: "Le naturel : ça donne envie, ça ne récite pas.", en: "Naturalness: it makes us want it, it doesn't recite." },
];

export const REFLEXION: string[] = [
  "Je remarque que…",
  "Le plan dont je suis le/la plus fier·ère, c'est…",
  "L'adjectif qui valorise le mieux mon produit, c'est…",
  "La prochaine fois, je vais…",
];

// CHECKS — mise au point finale (« Avant de tourner »), alignée sur la grille.
export const CHECKS: {
  id: string;
  label: string;
  en: string;
  cible: string;
  cible_en: string;
}[] = [
  {
    id: "organisation",
    label: "Ma pub a une accroche, l'histoire du terroir, la description et un appel/slogan.",
    en: "My ad has a hook, the terroir story, the description, and a call/slogan.",
    cible: "Pour viser le haut : une accroche qui surprend et un slogan final qui reste en tête.",
    cible_en: "To aim high: a surprising hook and a final slogan that sticks.",
  },
  {
    id: "grammaire",
    label: "J'emploie l'imparfait + le passé composé, des adjectifs mélioratifs, le conditionnel et une mise en relief.",
    en: "I use the imperfect + passé composé, positive adjectives, the conditional, and a cleft sentence.",
    cible: "Pour viser le haut : chaque structure au service du récit, sans en faire une liste.",
    cible_en: "To aim high: each structure serving the story, never just a checklist.",
  },
  {
    id: "genre",
    label: "Ça ressemble à une vraie pub (Reels / TikTok / tourisme) : rythme court, ton qui vend.",
    en: "It looks like a real ad (Reels / TikTok / tourism): short pace, a selling tone.",
    cible: "Pour viser le haut : du texte à l'écran, de vraies images du produit et du lieu.",
    cible_en: "To aim high: on-screen text, real footage of the product and the place.",
  },
  {
    id: "contenu",
    label: "Mon produit est un vrai terroir francophone (un lieu, un savoir-faire), pas inventé au hasard.",
    en: "My product is a real francophone terroir (a place, a craft), not made up at random.",
    cible: "Pour viser le haut : un lien clair entre le lieu, le climat et le goût (le sens du « terroir »).",
    cible_en: "To aim high: a clear link between place, climate, and taste (the meaning of 'terroir').",
  },
  {
    id: "duree",
    label: "Ma vidéo dure 1 à 2 min, en format vertical (ou paysage pour le tourisme).",
    en: "My video is 1–2 min, in vertical format (or landscape for tourism).",
    cible: "Pour viser le haut : un montage net, sans longueur — chaque seconde sert l'histoire.",
    cible_en: "To aim high: a clean edit, no filler — every second serves the story.",
  },
];

export const recording = {
  intro:
    "Votre soumission finale est UNE vidéo de 1 à 2 min : une mini-pub pour votre produit de terroir, façon Reels, TikTok ou vidéo de tourisme.",
  sections: [
    {
      titre: "Tourner votre mini-pub",
      paragraphes: [
        "Servez-vous de vos briques comme d'un storyboard : une image (ou un plan) par étape — accroche, terroir, produit, appel.",
        "Filmez en vertical (9:16) pour un Reel ou un TikTok ; en paysage (16:9) si vous visez une vidéo de tourisme YouTube.",
        "Montrez le produit ET le lieu (des plans « b-roll »), pas seulement votre visage. Ajoutez du texte à l'écran pour vos adjectifs et votre slogan. Une musique douce en fond est la bienvenue, à condition qu'on entende bien votre voix.",
      ],
    },
    {
      titre: "Monter et déposer",
      paragraphes: [
        "Montez sur CapCut, iMovie ou directement sur votre téléphone : enchaînez vos plans, ajoutez les sous-titres / le texte et la musique.",
        "Exportez en MP4 et nommez votre fichier FR30_(VOTRE NOM)_Podcast2.mp4. Déposez-le sur Canvas et vérifiez qu'il se lit bien du début à la fin avant de soumettre.",
      ],
    },
  ],
  contact:
    "Une question, technique ou autre ? Écrivez à la responsable du cours, Dr. Claire-Marie Brisson (cmbrisson@fas.harvard.edu).",
};

// Grille d'évaluation du Podcast 2 : 5 critères sur 20 points chacun, soit /100.
export type Critere = { critere: string; axe: string; niveaux: string[] };

// Grille standard, identique à celle du Podcast 1 (ne change pas d'un podcast
// à l'autre) : 5 critères sur 20 points chacun, soit /100.
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
  accroche: [5, 10],
  terroir: [25, 35],
  produit: [25, 35],
  appel: [15, 20],
};
