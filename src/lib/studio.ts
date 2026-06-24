// Logique du studio (fonctions pures, sans React).
// Tout ce qui est « intelligent » dans les étapes vit ici, pour rester lisible.

import { WPS } from "@/data/podcast0";

// Minuscule + sans accents — pour des comparaisons tolérantes.
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

// Découpe un texte en phrases (sur . ! ? …).
export function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function countWords(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

// Estimation de durée (secondes) à partir du nombre de mots et de WPS.
export function estimateSeconds(text: string): number {
  return Math.round(countWords(text) / WPS);
}

// ---- Oraliser : repérer les phrases « qui sonnent écrit » -----------------

// Connecteurs formels → équivalent plus parlé.
const FORMELS: Record<string, string> = {
  néanmoins: "mais",
  toutefois: "mais",
  cependant: "mais",
  "par conséquent": "donc",
  "c'est pourquoi": "donc",
  "de surcroît": "et en plus",
  "en outre": "et aussi",
  "afin de": "pour",
  "ainsi": "comme ça",
};

const SEUIL_LONGUEUR = 20; // au-delà, une phrase est jugée trop longue à dire

export type Oral = {
  written: boolean;
  raisons: string[];
  suggestion: string | null;
};

export function analyzeOral(sentence: string): Oral {
  const raisons: string[] = [];
  const lower = normalize(sentence);

  if (countWords(sentence) > SEUIL_LONGUEUR) {
    raisons.push("Phrase longue — coupez-la en deux pour respirer.");
  }

  const connecteur = Object.keys(FORMELS).find((f) =>
    lower.includes(normalize(f)),
  );
  if (connecteur) {
    raisons.push(`« ${connecteur} » sonne écrit — essayez « ${FORMELS[connecteur]} ».`);
  }

  if (/\bne\b[^.?!]*\b(pas|plus|jamais|rien)\b/i.test(sentence)) {
    raisons.push("À l'oral, on laisse souvent tomber le « ne ».");
  }

  return {
    written: raisons.length > 0,
    raisons,
    suggestion: raisons.length > 0 ? toSpoken(sentence) : null,
  };
}

// Proposition « plus parlable » : best-effort, conservateur.
export function toSpoken(sentence: string): string {
  let out = sentence;

  // Remplacer les connecteurs formels.
  for (const [formel, parle] of Object.entries(FORMELS)) {
    out = out.replace(new RegExp(`\\b${formel}\\b`, "gi"), parle);
  }

  // Laisser tomber le « ne » de la négation.
  out = out.replace(/\bne\s+/gi, "").replace(/\bn['’]/gi, "");

  // Couper une phrase trop longue à la première virgule.
  if (countWords(out) > SEUIL_LONGUEUR && out.includes(",")) {
    const i = out.indexOf(",");
    out = out.slice(0, i).trim() + ". " + out.slice(i + 1).trim();
  }

  return out.charAt(0).toUpperCase() + out.slice(1);
}

// ---- Découper : insérer des pauses -----------------------------------------
// `/`  = petite pause (après les virgules)
// `//` = grande pause (à la fin des phrases)
export function addPauses(text: string): string {
  return splitSentences(text)
    .map((s) => s.replace(/,\s*/g, " / ").replace(/\s*$/, ""))
    .join(" // ")
    .concat(text.trim() ? " //" : "");
}

export const SEUIL_PHRASE_LONGUE = 18; // mots — surlignée dans « Découper »
