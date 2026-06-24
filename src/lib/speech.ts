// Synthèse vocale française. Le navigateur choisit une voix par défaut
// (souvent anglophone) tant qu'on ne lui en impose pas une : ici on charge
// les voix, on garde les voix françaises et on classe les meilleures.

let cache: SpeechSynthesisVoice[] | null = null;

// Charge les voix (elles arrivent de façon asynchrone selon le navigateur).
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return Promise.resolve([]);
  }
  const synth = window.speechSynthesis;
  const now = synth.getVoices();
  if (now.length) {
    cache = now;
    return Promise.resolve(now);
  }
  return new Promise((resolve) => {
    const done = () => {
      cache = synth.getVoices();
      synth.removeEventListener("voiceschanged", done);
      resolve(cache);
    };
    synth.addEventListener("voiceschanged", done);
    // Filet de sécurité : certains navigateurs n'émettent pas l'événement.
    setTimeout(done, 800);
  });
}

// Noms de voix françaises connues pour leur qualité (macOS, Chrome…).
const PREFERREES = [
  "amélie",
  "amelie",
  "thomas",
  "audrey",
  "aurélie",
  "aurelie",
  "marie",
  "google français",
  "google french",
];

function score(v: SpeechSynthesisVoice): number {
  const lang = v.lang.toLowerCase();
  const name = v.name.toLowerCase();
  let s = 0;
  if (lang === "fr-fr") s += 4;
  else if (lang.startsWith("fr")) s += 2;
  if (PREFERREES.some((p) => name.includes(p))) s += 5;
  if (name.includes("enhanced") || name.includes("premium")) s += 3;
  if (v.localService) s += 1;
  return s;
}

// Voix françaises, classées de la meilleure à la moins bonne.
export function frenchVoices(all: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  return all
    .filter((v) => v.lang && v.lang.toLowerCase().startsWith("fr"))
    .sort((a, b) => score(b) - score(a));
}

// Lit un texte en français avec la voix donnée (ou la voix par défaut fr).
export function speakFrench(
  text: string,
  voice?: SpeechSynthesisVoice | null,
  rate = 0.92,
) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  if (voice) u.voice = voice;
  u.rate = rate;
  synth.speak(u);
}
